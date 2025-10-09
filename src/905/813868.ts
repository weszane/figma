import { PluginAction } from "../905/15667";
import { widgetInteractionTracker } from "../905/223332";
import { widgetManagerHandler } from "../905/239551";
import { getI18nString } from "../905/303541";
import { setSyncedValues } from "../905/486749";
import { notifyPluginStatus } from "../905/571565";
import { getFeatureFlags } from "../905/601108";
import { checkCanRunExtensions, getPluginDevMode, handleSelectedView } from "../905/622391";
import { Point } from "../905/736624";
import { getSceneGraphInstance } from "../905/830071";
import { postUserFlag } from "../905/985254";
import { checkZoomWidgetAccess } from "../figma_app/12796";
import { applyOffsetToViewport } from "../figma_app/62612";
import { getFullscreenViewEditorType, showVisualBell } from "../figma_app/300692";
import { fullscreenValue } from "../figma_app/455680";
import { PluginManager } from "../figma_app/612938";
import { k as fullscreenUIElementId } from "../figma_app/644304";
import { Fullscreen } from "../figma_app/763686";
import { isInteractionPathCheck } from "../figma_app/897289";

// Origin: /Users/allen/github/fig/src/905/813868.ts
// Refactored: Renamed variables, added types/interfaces, simplified logic, added comments, improved readability and type safety.

// Assumed dependencies: All imported modules exist and provide the expected APIs.

// Types for widget creation
export interface WidgetInsertOptions {
  pluginID: string;
  widgetName: string;
  pluginVersionID?: string;
  position?: Point;
  basicOverrides?: Record<string, unknown>;
  mapOverrides?: Record<string, unknown>;
  widgetAction?: string;
  parentNodeID?: string;
  triggeredFrom?: string;
  shouldPositionWidget?: boolean;
  indexInParent?: number | null;
  isOnInternalCanvas?: boolean | null;
}
export interface WidgetInsertResult {
  widgetNodeID: string | undefined;
  widgetRunPromise: Promise<unknown> | undefined;
}

/**
 * Inserts a widget into the scene, handling permissions, positioning, and overrides.
 * - Renamed variables for clarity.
 * - Added type definitions.
 * - Simplified nested logic.
 * - Added comments for key logic and potential issues.
 */
export function createWidget(options: WidgetInsertOptions): WidgetInsertResult {
  const {
    pluginID,
    widgetName,
    pluginVersionID,
    position,
    basicOverrides,
    mapOverrides,
    widgetAction,
    parentNodeID,
    triggeredFrom,
    shouldPositionWidget = true,
    indexInParent,
    isOnInternalCanvas
  } = options;

  // Check if user is logged in and can insert widgets
  if (!handleSelectedView()) {
    showVisualBell(getI18nString("widgets.cannot_insert_widget_while_logged_out"));
    return {
      widgetNodeID: undefined,
      widgetRunPromise: undefined
    };
  }

  // Check feature flag and extension seat requirements
  if (getFeatureFlags().ext_require_appropriate_seat && !checkCanRunExtensions()) {
    PluginManager.instance.handleUpgrade(PluginAction.RUN_WIDGET);
    return {
      widgetNodeID: undefined,
      widgetRunPromise: undefined
    };
  }

  // Check zoom widget access
  const zoomAccess = checkZoomWidgetAccess();
  if (!zoomAccess.canRun) {
    showVisualBell(zoomAccess.message);
    return {
      widgetNodeID: undefined,
      widgetRunPromise: undefined
    };
  }

  // Show onboarding modal if triggered from universal insert in Figma fullscreen editor
  if (triggeredFrom === "universal-insert" && getFullscreenViewEditorType() === "figma") {
    fullscreenValue.dispatch(postUserFlag({
      seen_widget_insert_onboarding_modal: true
    }));
  }

  // Notify plugin status unless undoing a widget update
  if (widgetAction !== "undo_widget_update") {
    notifyPluginStatus({
      name: widgetName,
      isInsert: true,
      cancelCallback: () => {},
      vmType: getPluginDevMode()
    });
  }

  // Track widget interaction
  widgetInteractionTracker.startInteraction(pluginID, "insert");

  // Create the widget node
  const widgetNodeID = Fullscreen.createWidget(pluginID, widgetName, pluginVersionID ?? "", parentNodeID ?? "", indexInParent ?? null, isOnInternalCanvas ?? null);

  // Position the widget if required and not in interaction path check
  if (!isInteractionPathCheck() && shouldPositionWidget) {
    positionWidgetInFullscreen(widgetNodeID, position);
  }

  // Apply overrides if provided
  if (basicOverrides || mapOverrides) {
    const widgetInstance = getSceneGraphInstance().get(widgetNodeID);
    setSyncedValues(widgetInstance, basicOverrides, mapOverrides);
  }

  // Mount the widget and return the result
  const widgetRunPromise = widgetManagerHandler.mountWidget(pluginID, widgetNodeID, "insert", position, widgetAction, triggeredFrom);
  return {
    widgetNodeID,
    widgetRunPromise
  };
}

/**
 * Positions the widget in fullscreen mode.
 * - If no position is provided, centers the widget in the viewport.
 * - Handles UI width offset if fullscreen UI is visible.
 */
function positionWidgetInFullscreen(widgetNodeID: string, position?: Point): void {
  const widgetInstance = getSceneGraphInstance().get(widgetNodeID);
  if (!widgetInstance) return;
  let finalPosition = position;
  if (!finalPosition) {
    // Calculate UI width offset if fullscreen UI is shown
    let uiWidth = 0;
    if (fullscreenValue.showUI()) {
      uiWidth = document.getElementById(fullscreenUIElementId)?.clientWidth ?? 0;
    }

    // Get viewport info and center widget
    const viewport = fullscreenValue.getViewportInfo();
    const centered = applyOffsetToViewport(viewport, {
      x: viewport.x + viewport.width / 2 - uiWidth,
      y: viewport.y + viewport.height / 2
    });

    // Adjust for widget size
    const widgetSize = widgetInstance.size;
    finalPosition = new Point(centered.x - widgetSize.x / 2, centered.y - widgetSize.y / 2);
  }
  Fullscreen.positionAndParentWidget(widgetNodeID, finalPosition.x, finalPosition.y);
}

// Bind to window if dev window bindings are enabled
if (getFeatureFlags().widgets_dev_window_bindings) {
  (window as any).createWidget = createWidget;
}

// Export for external usage
export const j = createWidget;
export const noop = createWidget;