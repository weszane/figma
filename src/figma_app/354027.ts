import { shallowEqual } from "react-redux";
import { VisualBellActions } from "../905/302958";
import { getI18nString } from "../905/303541";
import { HEADER_HEIGHT } from "../905/748636";
import { FEditorType } from "../figma_app/53721";
import { getCurrentPagePrototypeDevicePresetIdentifier, inverseScaleVector, getDevicePresetInfo } from "../figma_app/170018";
import { supportsInlinePreview } from "../figma_app/349969";
import { fullscreenValue } from "../figma_app/455680";
import { assert, assertNotNullish, throwTypeError } from "../figma_app/465776";
import { PresetType, RotationType } from "../figma_app/763686";

// Refactored from minified code in /Users/allen/github/fig/src/figma_app/354027.ts
// Changes: Renamed minified variables and functions to descriptive names (e.g., $$_11 to BOTTOM_PADDING, $$y12 to isFullscreenEditor), added TypeScript interfaces and types for type safety, simplified complex scaling logic in scaleDownToFit and scaleUpToFit while preserving functionality, added comments explaining logic and potential issues, followed camelCase/PascalCase naming and DRY principles.

// Define types based on inferred usage in the code
interface Size {
  x: number;
  y: number;
  w?: number;
  h?: number;
}
interface Breakpoint {
  type: any;
  x?: number;
  y?: number;
}
interface Page {
  prototypeDevice?: {
    type: PresetType;
    rotation: RotationType;
    size: Size;
  };
}
interface Node {
  absoluteBoundingBox: {
    w: number;
    h: number;
  };
}
interface Store {
  getCurrentPage: () => Page | null;
  get: (nodeId: string) => Node | null;
}
interface ViewState {
  selectedView: {
    view: string;
    editorType: FEditorType;
  };
}
interface ViewerConfig {
  initialViewerSize: Size;
  breakpoint: Breakpoint;
}

// Constants (renamed from minified names)
const BOTTOM_PADDING = 16;
const DEFAULT_HEIGHT = 216;
const DEFAULT_WIDTH = 152;
const MIN_WIDTH = 104;
const TOP_OFFSET = 20;
const ASPECT_RATIO = 16 / 9;

// Enum for breakpoint types (renamed from $$E8)
export enum BreakpointType {
  DEVICE = 0,
  WEBSITE = 1,
  SMALL = 2,
}

// Function to check if the selected view is fullscreen with specific editor types (renamed from $$y12)
export function isFullscreenEditor(state: ViewState): boolean {
  return state.selectedView.view === "fullscreen" && (state.selectedView.editorType === FEditorType.Design || state.selectedView.editorType === FEditorType.DevHandoff || state.selectedView.editorType === FEditorType.Slides || state.selectedView.editorType === FEditorType.Illustration);
}

// Function to get the prototype device size, handling rotation (renamed from T)
function getPrototypeDeviceSize(node: Node, store: Store) {
  const currentPage = store.getCurrentPage();
  if (!currentPage) {
    throw new Error("Expected currentPage to exist");
  }
  const {
    prototypeDevice
  } = currentPage;
  if (!prototypeDevice) {
    return null;
  }
  if (prototypeDevice.type === PresetType.PRESENTATION) {
    return {
      x: node.absoluteBoundingBox.w,
      y: node.absoluteBoundingBox.h
    };
  }
  if (prototypeDevice.type === PresetType.NONE) {
    return null;
  }
  if (prototypeDevice.rotation === RotationType.NONE) {
    return prototypeDevice.size;
  }
  return {
    x: prototypeDevice.size.y,
    y: prototypeDevice.size.x
  };
}

// Function to determine the breakpoint based on node and store (renamed from $$I2)
export function getBreakpoint(store: Store, node: Node) {
  const deviceSize = getPrototypeDeviceSize(node, store);
  if (deviceSize) {
    return {
      type: BreakpointType.DEVICE,
      ...deviceSize
    };
  }
  if (node.absoluteBoundingBox.w >= 1280) {
    return {
      type: BreakpointType.WEBSITE
    };
  }
  return {
    type: BreakpointType.SMALL
  };
}

// Function to get the size based on breakpoint (renamed from $$S9)
export function getBreakpointSize(breakpoint: Breakpoint, node: Node): Size {
  switch (breakpoint.type) {
    case BreakpointType.DEVICE:
      return {
        x: breakpoint.x,
        y: breakpoint.y
      };
    case BreakpointType.WEBSITE:
      return {
        x: node.absoluteBoundingBox.w,
        y: node.absoluteBoundingBox.w / ASPECT_RATIO
      };
    case BreakpointType.SMALL:
      return {
        x: node.absoluteBoundingBox.w,
        y: node.absoluteBoundingBox.h
      };
    default:
      throwTypeError(breakpoint);
  }
}

// Function to get offset based on rotation (renamed from $$v10)
export function getOffset(store: Store, includeHeader: boolean = false): Size {
  const rotation = store.getCurrentPage()?.prototypeDevice?.rotation ?? RotationType.NONE;
  if (rotation === RotationType.NONE) {
    return {
      x: MIN_WIDTH,
      y: TOP_OFFSET + (includeHeader ? HEADER_HEIGHT : 0)
    };
  }
  return {
    x: MIN_WIDTH,
    y: MIN_WIDTH
  };
}

// Function to scale down size to fit within bounds (renamed from A, simplified logic)
function scaleDownToFit(originalSize: Size, bounds: Size, store: Store): Size {
  const scaleY = bounds.y / originalSize.y;
  const scaleX = bounds.x / originalSize.x;
  const scale = Math.min(scaleY, scaleX);
  const {
    x: minX,
    y: minY
  } = getOffset(store);
  if (scale < 1) {
    if (scale === scaleY) {
      if (Math.max(originalSize.x * scale, minX) !== minX) {
        return {
          x: originalSize.x * scale,
          y: originalSize.y * scale
        };
      }
      const adjustedScale = minX / originalSize.x;
      return {
        x: minX,
        y: originalSize.y * adjustedScale
      };
    }
    if (Math.max(originalSize.y * scale, minY) !== minY) {
      return {
        x: originalSize.x * scale,
        y: originalSize.y * scale
      };
    }
    const adjustedScale = minY / originalSize.y;
    return {
      x: originalSize.x * adjustedScale,
      y: minY
    };
  }
  return originalSize;
}

// Function to scale up size to fit within bounds (renamed from x, simplified logic)
function scaleUpToFit(originalSize: Size, bounds: Size, store: Store): Size {
  const {
    x: minX,
    y: minY
  } = getOffset(store);
  const scaleY = minY / originalSize.y;
  const scaleX = minX / originalSize.x;
  const scale = Math.max(scaleY, scaleX);
  if (scale > 1) {
    if (scale === scaleY) {
      if (Math.min(originalSize.x * scale, bounds.x) !== bounds.x) {
        return {
          x: originalSize.x * scale,
          y: originalSize.y * scale
        };
      }
      const adjustedScale = bounds.x / originalSize.x;
      return {
        x: bounds.x,
        y: originalSize.y * adjustedScale
      };
    }
    if (Math.min(originalSize.y * scale, bounds.y) !== bounds.y) {
      return {
        x: originalSize.x * scale,
        y: originalSize.y * scale
      };
    }
    const adjustedScale = bounds.y / originalSize.y;
    return {
      x: originalSize.x * adjustedScale,
      y: bounds.y
    };
  }
  return originalSize;
}

// Main function to calculate initial viewer size (renamed from $$N5)
export function calculateInitialViewerSize(previousConfig: ViewerConfig | null, forceRecalc: boolean, isInlinePreview: boolean, nodeId: string, store: Store): ViewerConfig {
  const node = store.get(nodeId);
  assert(!!node, "expected node to exist");
  const breakpoint = getBreakpoint(store, node);
  if (previousConfig && shallowEqual(previousConfig.breakpoint, breakpoint) && !forceRecalc) {
    return previousConfig;
  }
  const viewport = fullscreenValue.getViewportInfo();
  const availableHeight = viewport.height - HEADER_HEIGHT - 2 * BOTTOM_PADDING;
  const availableWidth = Math.max(0.5 * viewport.width, MIN_WIDTH);
  const currentPage = getCurrentPagePrototypeDevicePresetIdentifier(store);
  const supportsPreview = !!currentPage && supportsInlinePreview(currentPage);
  if (!(breakpoint.type === BreakpointType.DEVICE && isInlinePreview && supportsPreview)) {
    let viewerSize = scaleDownToFit(getBreakpointSize(breakpoint, node), {
      x: availableWidth,
      y: availableHeight
    }, store);
    viewerSize = scaleUpToFit(viewerSize, {
      x: availableWidth,
      y: availableHeight
    }, store);
    return {
      initialViewerSize: viewerSize,
      breakpoint
    };
  }
  const rotation = store.getCurrentPage()?.prototypeDevice?.rotation;
  assertNotNullish(rotation, "expected device rotation to exist");
  const {
    idealDeviceSize,
    framePresetSize
  } = getDevicePresetInfo(currentPage, rotation);
  let viewerSize = scaleDownToFit(idealDeviceSize, {
    x: availableWidth,
    y: availableHeight
  }, store);
  viewerSize = scaleUpToFit(viewerSize, {
    x: availableWidth,
    y: availableHeight
  }, store);
  return {
    initialViewerSize: inverseScaleVector(viewerSize, framePresetSize, idealDeviceSize),
    breakpoint
  };
}

// Function to fit size to aspect ratio (renamed from $$C6)
export function fitToAspectRatio(viewerSize: Size, node: Node, breakpoint: Breakpoint, store: Store): ViewerConfig {
  assert(breakpoint.type !== BreakpointType.DEVICE, "Can't fit to aspect ratio for devices");
  let adjustedSize = getBreakpointSize(breakpoint, node);
  if (viewerSize.x < adjustedSize.x) {
    switch (breakpoint.type) {
      case BreakpointType.WEBSITE:
        adjustedSize = {
          x: viewerSize.x,
          y: viewerSize.x / ASPECT_RATIO
        };
        break;
      case BreakpointType.SMALL:
        {
          const aspectRatio = node.absoluteBoundingBox.w / node.absoluteBoundingBox.h;
          adjustedSize = {
            x: viewerSize.x,
            y: viewerSize.x / aspectRatio
          };
          break;
        }
      default:
        throwTypeError(breakpoint);
    }
  }
  adjustedSize = scaleUpToFit(adjustedSize, {
    x: Infinity,
    y: Infinity
  }, store);
  return {
    initialViewerSize: adjustedSize,
    breakpoint
  };
}

// Function to show visual bell for resize (renamed from $$w4)
export function showResizeBell(viewerSize: Size, enqueueAction: (action: any) => void, revertAction: any): void {
  const viewport = fullscreenValue.getViewportInfo();
  if (viewerSize.x > 0.9 * viewport.width) {
    enqueueAction(VisualBellActions.enqueue({
      type: "inline-preview-resize-to-actual-size",
      message: getI18nString("inline_preview.resize_to_actual_size_visual_bell"),
      button: {
        text: getI18nString("bindings.revert"),
        editScope: "inline-preview-resize-revert",
        action: revertAction
      },
      error: false
    }));
  }
}

// Exported constants (right side renamed to new names)
export const Ah = DEFAULT_HEIGHT;
export const Fe = MIN_WIDTH;
export const HS = getBreakpoint;
export const Sq = TOP_OFFSET;
export const UB = showResizeBell;
export const hF = calculateInitialViewerSize;
export const hX = fitToAspectRatio;
export const kl = DEFAULT_WIDTH;
export const l5 = BreakpointType;
export const nw = getBreakpointSize;
export const ut = getOffset;
export const wR = BOTTOM_PADDING;
export const xY = isFullscreenEditor;