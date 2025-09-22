import { colorToHex } from '../905/393409'
import { generateUUIDv4 } from '../905/871474'
import { C } from '../905/887158'


// Define interfaces for better type safety
interface DetectionContext {
  [key: string]: any;
}

interface ViolationConstructorParams {
  ruleId: string;
  guid: string;
  detectionContext: DetectionContext;
  nodeType: string;
}

/**
 * Represents a design violation with methods to generate group keys.
 * Original class name: $$o0
 */
export class Violation {
  ruleId: string;
  guid: string;
  detectionContext: DetectionContext;
  nodeType: string;
  violationId: string;

  /**
   * Constructor for Violation.
   * @param params - The parameters to initialize the violation.
   */
  constructor({ ruleId, guid, detectionContext, nodeType }: ViolationConstructorParams) {
    this.ruleId = ruleId;
    this.guid = guid;
    this.detectionContext = detectionContext;
    this.nodeType = nodeType;
    this.violationId = generateUUIDv4();
  }

  /**
   * Getter for groupKey, computes a key based on ruleId and detectionContext.
   * Original getter name: groupKey
   */
  get groupKey(): string {
    if (!this.detectionContext) {
      return this.ruleId;
    }

    const { ruleId, detectionContext } = this;

    // Early returns for specific ruleIds to simplify logic
    if (this.isColorVariableRule()) {
      return this.getColorGroupKey();
    }
    if (ruleId === C.REQUIRE_TEXT_STYLES && 'fontSize' in detectionContext) {
      return this.getTextStyleGroupKey();
    }
    if (this.isCornerRadiusRule()) {
      return this.getCornerRadiusGroupKey();
    }
    if (this.isHorizontalSpacingRule()) {
      return this.getHorizontalSpacingGroupKey();
    }
    if (this.isVerticalSpacingRule()) {
      return this.getVerticalSpacingGroupKey();
    }
    if (this.isPaddingRule()) {
      return this.getPaddingGroupKey();
    }
    if (ruleId === C.TEXT_BACKGROUND_CONTRAST_AA && 'fillColor' in detectionContext && 'backgroundColor' in detectionContext) {
      return this.getContrastGroupKey();
    }
    if (ruleId === C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES && 'assetType' in detectionContext) {
      return this.getGroupKeyForAssetFromOutsideLibrary();
    }

    // Default case
    const keys = Object.keys(detectionContext).sort();
    return `${JSON.stringify(detectionContext, keys)}`;
  }

  // Helper methods to split logic

  private isColorVariableRule(): boolean {
    return (this.ruleId === C.REQUIRE_FILL_COLOR_VARIABLES || this.ruleId === C.REQUIRE_STROKE_COLOR_VARIABLES) && 'color' in this.detectionContext;
  }

  private getColorGroupKey(): string {
    const { color, opacity } = this.detectionContext;
    let nodeType = this.nodeType;
    if (!['TEXT', 'FRAME'].includes(this.nodeType)) {
      nodeType = 'SHAPE';
    }
    return `${this.ruleId}-${nodeType}-${colorToHex(color)}-${opacity}`;
  }

  private getTextStyleGroupKey(): string {
    const { fontFamily, fontSize, lineHeight } = this.detectionContext;
    return `${this.ruleId}-${fontFamily}-${fontSize}-${lineHeight}`;
  }

  private isCornerRadiusRule(): boolean {
    return (this.ruleId === C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES ||
            this.ruleId === C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES ||
            this.ruleId === C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES ||
            this.ruleId === C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES) &&
           'numericValue' in this.detectionContext;
  }

  private getCornerRadiusGroupKey(): string {
    const { numericValue } = this.detectionContext;
    return `REQUIRE_CORNER_RADIUS_VARIABLES-${numericValue}`;
  }

  private isHorizontalSpacingRule(): boolean {
    return (this.ruleId === C.REQUIRE_HORIZONTAL_SPACING_VARIABLES || this.ruleId === C.REQUIRE_GRID_COLUMN_GAP_VARIABLES) &&
           'numericValue' in this.detectionContext;
  }

  private getHorizontalSpacingGroupKey(): string {
    const { numericValue } = this.detectionContext;
    return `REQUIRE_HORIZONTAL_SPACING_VARIABLES-${numericValue}`;
  }

  private isVerticalSpacingRule(): boolean {
    return (this.ruleId === C.REQUIRE_VERTICAL_SPACING_VARIABLES || this.ruleId === C.REQUIRE_GRID_ROW_GAP_VARIABLES) &&
           'numericValue' in this.detectionContext;
  }

  private getVerticalSpacingGroupKey(): string {
    const { numericValue } = this.detectionContext;
    return `REQUIRE_VERTICAL_SPACING_VARIABLES-${numericValue}`;
  }

  private isPaddingRule(): boolean {
    return (this.ruleId === C.REQUIRE_TOP_PADDING_VARIABLES ||
            this.ruleId === C.REQUIRE_BOTTOM_PADDING_VARIABLES ||
            this.ruleId === C.REQUIRE_LEFT_PADDING_VARIABLES ||
            this.ruleId === C.REQUIRE_RIGHT_PADDING_VARIABLES) &&
           'numericValue' in this.detectionContext;
  }

  private getPaddingGroupKey(): string {
    const { numericValue } = this.detectionContext;
    return `REQUIRE_PADDING_VARIABLES-${numericValue}`;
  }

  private getContrastGroupKey(): string {
    const { backgroundColor, fillColor, fillOpacity } = this.detectionContext;
    return `${this.ruleId}-${colorToHex(fillColor)}-${fillOpacity}-${colorToHex(backgroundColor)}`;
  }

  /**
   * Generates group key for assets from outside library.
   * Original method name: getGroupKeyForAssetFromOutsideLibrary
   */
  getGroupKeyForAssetFromOutsideLibrary(): string {
    const { ruleId, detectionContext } = this;
    if (ruleId !== C.REQUIRE_ASSETS_FROM_SELECTED_LIBRARIES || !('assetType' in detectionContext)) {
      return '';
    }
    const { assetId, libraryKey, assetType } = detectionContext;
    let nodeType = ["STROKE", "FILL"].includes(assetType) ? this.nodeType : '';
    if (!['TEXT', 'FRAME'].includes(nodeType)) {
      nodeType = 'SHAPE';
    }
    let assetTypeNormalized = assetType;
    if (['RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS', 'RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS', 'RECTANGLE_TOP_LEFT_CORNER_RADIUS', 'RECTANGLE_TOP_RIGHT_CORNER_RADIUS'].includes(assetType)) {
      assetTypeNormalized = 'CORNER_RADIUS';
    } else if (['STACK_PADDING_TOP', 'STACK_PADDING_BOTTOM', 'STACK_PADDING_LEFT', 'STACK_PADDING_RIGHT'].includes(assetType)) {
      assetTypeNormalized = 'STACK_PADDING';
    }
    return `${ruleId}-${libraryKey}-${nodeType}-${assetTypeNormalized}-${assetId}`;
  }

  /**
   * Static method to create a list of violations.
   * Original method name: createViolationList
   * @param params - The parameters for creating violations.
   * @returns An array of Violation instances.
   */
  static createViolationList({ ruleId, guid, detectionContext, nodeType }: { ruleId: string; guid: string; detectionContext: DetectionContext[]; nodeType: string }): Violation[] {
    const violations: Violation[] = [];
    for (const context of detectionContext) {
      violations.push(new Violation({
        ruleId,
        guid,
        detectionContext: context,
        nodeType,
      }));
    }
    return violations;
  }
}

// Refactored export name to match the class
export const U = Violation;
