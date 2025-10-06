import { LayoutSizingMode } from "../figma_app/763686";
import { findStackContainer } from "../figma_app/387100";
import { h, v6, KY, jd, iz, qK, Pm } from "../figma_app/17669";
import { sJ } from "../905/532366";
import { si } from "../figma_app/941074";

// Types
interface StyleOptions {
  position?: boolean;
  size?: boolean;
  flex?: boolean;
  color?: boolean;
  radius?: boolean;
  typography?: boolean;
}

interface ColorInfo {
  hexStr: string;
  opacitySuffix: string;
}

interface PaddingValues {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

interface CornerRadiusFlags {
  topLeft: boolean;
  topRight: boolean;
  bottomLeft: boolean;
  bottomRight: boolean;
}

// Constants
const DEFAULT_STYLE_OPTIONS: Required<StyleOptions> = {
  position: true,
  size: true,
  flex: true,
  color: true,
  radius: true,
  typography: true,
};

// Main function to generate CSS classes
export function generateCSSClasses(
  element: any,
  options: StyleOptions = {},
  useDefaults: boolean = true,
): string[] {
  const resolvedOptions = {
    ...DEFAULT_STYLE_OPTIONS,
    ...(options ?? {}),
  };

  const shouldInclude = (defaultValue: any, currentValue: any): boolean =>
    !useDefaults || currentValue !== defaultValue;

  const classes: string[] = [];

  if (resolvedOptions.position) {
    addPositionClasses(element, classes);
  }

  if (resolvedOptions.size) {
    addSizeClasses(element, useDefaults, classes);
  }

  if (resolvedOptions.flex && element.isStack) {
    addFlexClasses(element, !!useDefaults, shouldInclude, classes);
  }

  if (resolvedOptions.radius) {
    addRadiusClasses(element, shouldInclude, classes);
  }

  if (element.type === "TEXT") {
    if (resolvedOptions.typography) {
      addTextTypographyClasses(element, shouldInclude, classes);
    }
    if (resolvedOptions.color && resolvedOptions.typography) {
      addTextColorClasses(element, shouldInclude, classes);
    }
    if (resolvedOptions.typography) {
      addTextAlignmentClasses(element, !!useDefaults, classes);
    }
  } else if (resolvedOptions.color) {
    addBackgroundClasses(element, classes);
    addBorderClasses(element, !!resolvedOptions.color, shouldInclude, classes);
  }

  return classes;
}

// Position styling
function addPositionClasses(element: any, classes: string[]): void {
  const stackContainer = findStackContainer(element);

  if (!stackContainer || stackContainer.type === "CANVAS") {
    return;
  }

  if (
    stackContainer.stackMode === "NONE" ||
    element.stackPositioning !== "AUTO"
  ) {
    classes.push("absolute");

    const { horizontalConstraint, verticalConstraint } = element;

    switch (horizontalConstraint) {
      case "MIN":
        classes.push(`left-${h(element.x)}`);
        break;
      case "MAX":
        classes.push(
          `right-${h(stackContainer.size.x - element.x - element.size.x)}`,
        );
        break;
    }

    switch (verticalConstraint) {
      case "MIN":
        classes.push(`top-${h(element.y)}`);
        break;
      case "MAX":
        classes.push(
          `bottom-${h(stackContainer.size.y - element.y - element.size.y)}`,
        );
        break;
    }
  }
}

// Size styling
function addSizeClasses(
  element: any,
  useDefaults: boolean,
  classes: string[],
): void {
  const hasChildren =
    element.type === "TEXT" || element.childrenNodes.length > 0;

  // Width
  if (element.stackHorizontalLayoutSize === LayoutSizingMode.FILL_CONTAINER) {
    classes.push("w-full");
  } else if (
    hasChildren &&
    element.stackHorizontalLayoutSize === LayoutSizingMode.HUG_CONTENT
  ) {
    if (!useDefaults) {
      classes.push("w-fit");
    }
  } else if (
    element.stackHorizontalLayoutSize !== LayoutSizingMode.FIXED &&
    (hasChildren ||
      element.stackHorizontalLayoutSize !== LayoutSizingMode.HUG_CONTENT)
  ) {
    // Do nothing for this case
  } else {
    classes.push(`w-${h(element.size.x)}`);
  }

  // Height
  if (element.stackVerticalLayoutSize === LayoutSizingMode.FILL_CONTAINER) {
    classes.push("h-full");
  } else if (
    hasChildren &&
    element.stackVerticalLayoutSize === LayoutSizingMode.HUG_CONTENT
  ) {
    if (!useDefaults) {
      classes.push("h-fit");
    }
  } else if (
    element.stackVerticalLayoutSize !== LayoutSizingMode.FIXED &&
    (hasChildren ||
      element.stackVerticalLayoutSize !== LayoutSizingMode.HUG_CONTENT)
  ) {
    // Do nothing for this case
  } else {
    classes.push(`h-${h(element.size.y)}`);
  }

  // Min/Max dimensions
  if (typeof element.minWidth === "number") {
    classes.push(`min-w-${h(element.minWidth)}`);
  }
  if (typeof element.maxWidth === "number") {
    classes.push(`max-w-${h(element.maxWidth)}`);
  }
  if (typeof element.minHeight === "number") {
    classes.push(`min-h-${h(element.minHeight)}`);
  }
  if (typeof element.maxHeight === "number") {
    classes.push(`max-h-${h(element.maxHeight)}`);
  }
}

// Flex layout styling
function addFlexClasses(
  element: any,
  useDefaults: boolean,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  classes: string[],
): void {
  classes.push("flex");

  if (element.stackMode === "VERTICAL") {
    classes.push("flex-col");
  }

  if (element.stackWrap === "WRAP") {
    classes.push("flex-wrap");
  }

  // Gap between children
  if (element.childrenNodes.length > 1) {
    const spacing =
      element.stackPrimaryAlignItems === "SPACE_BETWEEN" ||
      element.stackPrimaryAlignItems === "SPACE_EVENLY"
        ? null
        : element.stackSpacing;

    if (typeof spacing === "number" && shouldInclude(0, spacing)) {
      classes.push(`gap-${h(spacing)}`);
    }
  }

  // Cross-axis alignment
  switch (element.stackCounterAlignItems) {
    case "MIN":
      if (!useDefaults) {
        classes.push("items-start");
      }
      break;
    case "MAX":
      classes.push("items-end");
      break;
    case "CENTER":
      classes.push("items-center");
      break;
    case "BASELINE":
      classes.push("items-baseline");
      break;
  }

  // Main-axis alignment
  switch (element.stackPrimaryAlignItems) {
    case "MIN":
      if (!useDefaults) {
        classes.push("justify-start");
      }
      break;
    case "MAX":
      classes.push("justify-end");
      break;
    case "CENTER":
      classes.push("justify-center");
      break;
    case "SPACE_EVENLY":
    case "SPACE_BETWEEN":
      classes.push("justify-between");
      break;
  }

  // Padding
  addPaddingClasses(element, shouldInclude, classes);
}

// Padding helper function
function addPaddingClasses(
  element: any,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  classes: string[],
): void {
  const padding: PaddingValues = {
    top: element.stackTopPadding ?? 0,
    right: element.stackRightPadding ?? 0,
    bottom: element.stackBottomPadding ?? 0,
    left: element.stackLeftPadding ?? 0,
  };

  if (
    padding.top === padding.bottom &&
    padding.bottom === padding.left &&
    padding.left === padding.right
  ) {
    if (shouldInclude(0, padding.top)) {
      classes.push(`p-${h(padding.top)}`);
    }
  } else {
    // Vertical padding
    if (padding.top === padding.bottom) {
      if (shouldInclude(0, padding.top)) {
        classes.push(`py-${h(padding.top)}`);
      }
    } else {
      if (shouldInclude(0, padding.top)) {
        classes.push(`pt-${h(padding.top)}`);
      }
      if (shouldInclude(0, padding.bottom)) {
        classes.push(`pb-${h(padding.bottom)}`);
      }
    }

    // Horizontal padding
    if (padding.left === padding.right) {
      if (shouldInclude(0, padding.left)) {
        classes.push(`px-${h(padding.left)}`);
      }
    } else {
      if (shouldInclude(0, padding.left)) {
        classes.push(`pl-${h(padding.left)}`);
      }
      if (shouldInclude(0, padding.right)) {
        classes.push(`pr-${h(padding.right)}`);
      }
    }
  }
}

// Border radius styling
function addRadiusClasses(
  element: any,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  classes: string[],
): void {
  if (element.rectangleCornerRadiiIndependent) {
    const {
      rectangleTopLeftCornerRadius,
      rectangleTopRightCornerRadius,
      rectangleBottomLeftCornerRadius,
      rectangleBottomRightCornerRadius,
    } = element;

    // Check if all corners are the same
    if (
      rectangleTopLeftCornerRadius === rectangleTopRightCornerRadius &&
      rectangleTopRightCornerRadius === rectangleBottomLeftCornerRadius &&
      rectangleBottomLeftCornerRadius === rectangleBottomRightCornerRadius
    ) {
      if (shouldInclude(0, rectangleTopLeftCornerRadius)) {
        classes.push(`rounded${v6(rectangleTopLeftCornerRadius)}`);
      }
    } else {
      addIndependentCornerRadiusClasses(element, shouldInclude, classes);
    }
  } else if (shouldInclude(0, element.cornerRadius)) {
    classes.push(`rounded${v6(element.cornerRadius)}`);
  }
}

// Independent corner radius helper
function addIndependentCornerRadiusClasses(
  element: any,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  classes: string[],
): void {
  const {
    rectangleTopLeftCornerRadius,
    rectangleTopRightCornerRadius,
    rectangleBottomLeftCornerRadius,
    rectangleBottomRightCornerRadius,
  } = element;

  const corners: CornerRadiusFlags = {
    topLeft: shouldInclude(0, rectangleTopLeftCornerRadius),
    topRight: shouldInclude(0, rectangleTopRightCornerRadius),
    bottomLeft: shouldInclude(0, rectangleBottomLeftCornerRadius),
    bottomRight: shouldInclude(0, rectangleBottomRightCornerRadius),
  };

  // Left side
  if (
    corners.topLeft &&
    corners.bottomLeft &&
    rectangleTopLeftCornerRadius === rectangleBottomLeftCornerRadius
  ) {
    classes.push(`rounded-l${v6(rectangleTopLeftCornerRadius)}`);
    corners.topLeft = false;
    corners.bottomLeft = false;
  }

  // Right side
  if (
    corners.topRight &&
    corners.bottomRight &&
    rectangleTopRightCornerRadius === rectangleBottomRightCornerRadius
  ) {
    classes.push(`rounded-r${v6(rectangleTopRightCornerRadius)}`);
    corners.topRight = false;
    corners.bottomRight = false;
  }

  // Top side
  if (
    corners.topLeft &&
    corners.topRight &&
    rectangleTopLeftCornerRadius === rectangleTopRightCornerRadius
  ) {
    classes.push(`rounded-t${v6(rectangleTopLeftCornerRadius)}`);
    corners.topLeft = false;
    corners.topRight = false;
  }

  // Bottom side
  if (
    corners.bottomLeft &&
    corners.bottomRight &&
    rectangleBottomLeftCornerRadius === rectangleBottomRightCornerRadius
  ) {
    classes.push(`rounded-b${v6(rectangleBottomLeftCornerRadius)}`);
    corners.bottomLeft = false;
    corners.bottomRight = false;
  }

  // Individual corners
  if (corners.topLeft) {
    classes.push(`rounded-tl${v6(rectangleTopLeftCornerRadius)}`);
  }
  if (corners.bottomLeft) {
    classes.push(`rounded-bl${v6(rectangleBottomLeftCornerRadius)}`);
  }
  if (corners.topRight) {
    classes.push(`rounded-tr${v6(rectangleTopRightCornerRadius)}`);
  }
  if (corners.bottomRight) {
    classes.push(`rounded-br${v6(rectangleBottomRightCornerRadius)}`);
  }
}

// Text typography styling
function addTextTypographyClasses(
  element: any,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  classes: string[],
): void {
  if (element.type !== "TEXT") return;

  const {
    fontSize,
    fontName: { style },
  } = element;

  if (typeof fontSize === "number") {
    classes.push(`text-${KY(fontSize)}`);
  }

  const normalizedStyle = style.replace(/\s/g, "").toLowerCase();
  const fontWeight = sJ[normalizedStyle];

  if (typeof fontWeight === "number" && shouldInclude(400, fontWeight)) {
    classes.push(`font-${jd(fontWeight)}`);
  }
}

// Text color styling
function addTextColorClasses(
  element: any,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  classes: string[],
): void {
  const colorInfo = extractColorInfo(element.fills);

  if (colorInfo && shouldInclude("#000", colorInfo.hexStr)) {
    const { hexStr, opacitySuffix } = colorInfo;
    classes.push(`text-${iz(hexStr)}${opacitySuffix}`);
  }
}

// Text alignment styling
function addTextAlignmentClasses(
  element: any,
  useDefaults: boolean,
  classes: string[],
): void {
  if (element.type !== "TEXT") return;

  // Horizontal alignment
  switch (element.textAlignHorizontal) {
    case "LEFT":
      if (!useDefaults) {
        classes.push("text-left");
      }
      break;
    case "RIGHT":
      classes.push("text-right");
      break;
    case "CENTER":
      classes.push("text-center");
      break;
    case "JUSTIFIED":
      classes.push("text-justified");
      break;
  }

  // Vertical alignment
  switch (element.textAlignVertical) {
    case "TOP":
      if (!useDefaults) {
        classes.push("align-top");
      }
      break;
    case "CENTER":
      classes.push("align-middle");
      break;
    case "BOTTOM":
      classes.push("align-bottom");
      break;
  }
}

// Background color styling
function addBackgroundClasses(element: any, classes: string[]): void {
  const colorInfo = extractColorInfo(element.fills);

  if (colorInfo) {
    const { hexStr, opacitySuffix } = colorInfo;
    classes.push(`bg-${iz(hexStr)}${opacitySuffix}`);
  }
}

// Border styling
function addBorderClasses(
  element: any,
  includeColor: boolean,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  classes: string[],
): void {
  const strokeColorInfo = extractColorInfo(element.strokePaints.data);

  if (!strokeColorInfo) return;

  const hasStroke =
    element.strokeWeight > 0 ||
    (element.borderStrokeWeightsIndependent &&
      [
        element.borderBottomWeight,
        element.borderLeftWeight,
        element.borderRightWeight,
        element.borderTopWeight,
      ].some((weight) => weight > 0));

  if (!hasStroke) return;

  if (includeColor) {
    const { hexStr, opacitySuffix } = strokeColorInfo;
    classes.push(`border-${iz(hexStr)}${opacitySuffix}`);
  }

  const weightSuffix = (weight: number): string =>
    weight === 1 ? "" : `-${qK(weight)}`;

  if (element.borderStrokeWeightsIndependent) {
    addIndependentBorderWeights(element, shouldInclude, weightSuffix, classes);
  } else {
    classes.push(`border${weightSuffix(element.strokeWeight)}`);
  }
}

// Independent border weights helper
function addIndependentBorderWeights(
  element: any,
  shouldInclude: (defaultValue: any, currentValue: any) => boolean,
  weightSuffix: (weight: number) => string,
  classes: string[],
): void {
  const {
    borderLeftWeight,
    borderBottomWeight,
    borderRightWeight,
    borderTopWeight,
  } = element;

  if (
    borderLeftWeight === borderRightWeight &&
    borderRightWeight === borderBottomWeight &&
    borderBottomWeight === borderTopWeight
  ) {
    classes.push(`border${weightSuffix(borderLeftWeight)}`);
  } else {
    // Horizontal borders
    if (borderLeftWeight === borderRightWeight) {
      if (shouldInclude(0, borderLeftWeight)) {
        classes.push(`border-x${weightSuffix(borderLeftWeight)}`);
      }
    } else {
      if (shouldInclude(0, borderLeftWeight)) {
        classes.push(`border-l${weightSuffix(borderLeftWeight)}`);
      }
      if (shouldInclude(0, borderRightWeight)) {
        classes.push(`border-r${weightSuffix(borderRightWeight)}`);
      }
    }

    // Vertical borders
    if (borderBottomWeight === borderTopWeight) {
      if (shouldInclude(0, borderBottomWeight)) {
        classes.push(`border-y${weightSuffix(borderBottomWeight)}`);
      }
    } else {
      if (shouldInclude(0, borderTopWeight)) {
        classes.push(`border-t${weightSuffix(borderTopWeight)}`);
      }
      if (shouldInclude(0, borderBottomWeight)) {
        classes.push(`border-b${weightSuffix(borderBottomWeight)}`);
      }
    }
  }
}

// Utility functions
export function generateOpacitySuffix(opacity: number): string {
  return opacity === 1 ? "" : `/${Pm(opacity)}`;
}

export function extractColorInfo(fills: any[]): ColorInfo | null {
  const solidFill = fills
    .reverse()
    .find(
      (fill) => fill.type === "SOLID" && !!fill.visible && fill.opacity !== 0,
    );

  if (!solidFill || !solidFill.color) {
    return null;
  }

  return {
    hexStr: si(solidFill.color),
    opacitySuffix: generateOpacitySuffix(
      solidFill.opacity ?? solidFill.color.a,
    ),
  };
}

// Legacy exports for backward compatibility
export const DI = extractColorInfo;
export const Ed = generateCSSClasses;
export const JQ = generateOpacitySuffix;

// New primary exports
export const $$d1 = generateCSSClasses;
export const $$c2 = generateOpacitySuffix;
export const $$u0 = extractColorInfo;
