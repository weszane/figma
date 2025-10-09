import { normalizeValue } from "../905/216495"
import { getI18nString } from "../905/303541"
import { deepEqual } from "../905/382883"
import { formattedColorManipulator } from "../905/713722"
import { convertKiwiToVariableIdString } from "../905/805904"
import { colorToRgbaString } from "../figma_app/191804"
import { assertNotNullish } from "../figma_app/465776"
import { ComponentPropType, OperationType, PlatformType, VariableDataType, VariableResolvedDataType } from "../figma_app/763686"

// Origin: /Users/allen/sigma-main/src/figma_app/394327.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability and type safety.

// Assumed dependencies (from imports):
// - normalizeValue, getI18nString, deepEqual, formattedColorManipulator, convertKiwiToVariableIdString, colorToRgbaString, assertNotNullish
// - ComponentPropType, OperationType, PlatformType, VariableDataType, VariableResolvedDataType

// --- Type Definitions ---

export interface VariableValue {
  boolValue?: boolean;
  floatValue?: number;
  textValue?: string;
  colorValue?: { r: number; g: number; b: number; a: number } ;
  alias?: string;
  asFloat?: unknown;
  asString?: unknown;
  expressionFunction?: OperationType;
  expressionArguments?: VariableValue[];
  expression?: unknown;
}

export interface Variable {
  name: string;
  codeSyntax?: Partial<Record<PlatformType, string>>;
  subscriptionStatus?: "LOCAL" | "SUBSCRIBED" | "LIBRARY";
  isSoftDeleted?: boolean;
  isExtension?: boolean;
  rootVariableSetKey?: string;
  key?: string;
  keyForPublish?: string;
  variableSetId?: string;
  dataType?: keyof typeof VariableDataType | string;
  resolvedDataType?: keyof typeof VariableResolvedDataType | string;
  value?: VariableValue;
  type?: keyof typeof VariableDataType | string;
}

export interface VariableDisplay {
  resolvedType?: VariableResolvedDataType;
  value?: any;
  type?: VariableDataType;
}

export interface VariableComparison {
  dataType?: keyof typeof VariableDataType | string;
  resolvedDataType?: keyof typeof VariableResolvedDataType | string;
  value?: VariableValue;
}

// --- Refactored Functions ---

/**
 * Converts a variable value to a display string, handling types and localization.
 */
export function getVariableDisplayString(variable: "MIXED" | VariableDisplay | null): string | null {
  if (variable === "MIXED") {
    return getI18nString("fullscreen.mixed");
  }
  if (!variable) {
    return null;
  }
  switch (variable.resolvedType) {
    case VariableResolvedDataType.FLOAT:
      // Show float with 2 decimals
      return String(parseFloat(variable.value.toFixed(2)));
    case VariableResolvedDataType.BOOLEAN:
      return variable.value
        ? getI18nString("variables.values.boolean.true")
        : getI18nString("variables.values.boolean.false");
    case VariableResolvedDataType.COLOR:
      return formattedColorManipulator.format(variable.value);
    case VariableResolvedDataType.STRING:
      if (variable.type === VariableDataType.DATE) return null;
      return variable.value;
    case VariableResolvedDataType.IMAGE:
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return null;
    default:
      // Fallback: JSON stringify
      return JSON.stringify(variable.value);
  }
}

/**
 * Compares two variable objects for equality, handling type-specific logic.
 */
export function areVariablesEqual(a: VariableComparison | null, b: VariableComparison | null): boolean {
  if (a === b) return true;
  if (
    !a ||
    !a.dataType ||
    !a.resolvedDataType ||
    !a.value ||
    !b ||
    !b.dataType ||
    !b.resolvedDataType ||
    !b.value ||
    a.dataType !== b.dataType ||
    a.resolvedDataType !== b.resolvedDataType
  ) {
    return false;
  }
  switch (a.dataType) {
    case "BOOLEAN":
      return a.value.boolValue === b.value.boolValue;
    case "FLOAT":
      return a.value.floatValue === b.value.floatValue;
    case "STRING":
      return a.value.textValue === b.value.textValue;
    case "COLOR":
      assertNotNullish(a.value.colorValue);
      assertNotNullish(b.value.colorValue);
      return colorToRgbaString(a.value.colorValue) === colorToRgbaString(b.value.colorValue);
    default:
      // Deep equality for other types
      return deepEqual(a, b);
  }
}

/**
 * Maps resolved variable type to its base data type.
 */
export function resolvedTypeToDataType(resolvedType: VariableResolvedDataType): VariableDataType | undefined {
  switch (resolvedType) {
    case VariableResolvedDataType.BOOLEAN:
      return VariableDataType.BOOLEAN;
    case VariableResolvedDataType.FLOAT:
      return VariableDataType.FLOAT;
    case VariableResolvedDataType.STRING:
      return VariableDataType.STRING;
    case VariableResolvedDataType.COLOR:
      return VariableDataType.COLOR;
    case VariableResolvedDataType.MAP:
      return VariableDataType.MAP;
    case VariableResolvedDataType.SYMBOL_ID:
      return VariableDataType.SYMBOL_ID;
    default:
      return undefined;
  }
}

/**
 * Checks if a variable is locally soft-deleted.
 */
export function isLocallySoftDeleted(variable: Variable): boolean {
  return variable.subscriptionStatus === "LOCAL" && !!variable.isSoftDeleted;
}

/**
 * Maps variable property keys to supported resolved data types.
 */
export const variablePropertyTypeMap: Record<string, VariableResolvedDataType[]> = {
  CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  STACK_SPACING: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_LEFT: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_TOP: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_RIGHT: [VariableResolvedDataType.FLOAT],
  STACK_PADDING_BOTTOM: [VariableResolvedDataType.FLOAT],
  TEXT_DATA: [VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT],
  WIDTH: [VariableResolvedDataType.FLOAT],
  HEIGHT: [VariableResolvedDataType.FLOAT],
  RECTANGLE_TOP_LEFT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  RECTANGLE_TOP_RIGHT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS: [VariableResolvedDataType.FLOAT],
  STACK_COUNTER_SPACING: [VariableResolvedDataType.FLOAT],
  MIN_WIDTH: [VariableResolvedDataType.FLOAT],
  MAX_WIDTH: [VariableResolvedDataType.FLOAT],
  MIN_HEIGHT: [VariableResolvedDataType.FLOAT],
  MAX_HEIGHT: [VariableResolvedDataType.FLOAT],
  STROKE_WEIGHT: [VariableResolvedDataType.FLOAT],
  OPACITY: [VariableResolvedDataType.FLOAT],
  BORDER_TOP_WEIGHT: [VariableResolvedDataType.FLOAT],
  BORDER_BOTTOM_WEIGHT: [VariableResolvedDataType.FLOAT],
  BORDER_LEFT_WEIGHT: [VariableResolvedDataType.FLOAT],
  BORDER_RIGHT_WEIGHT: [VariableResolvedDataType.FLOAT],
  MISSING: [],
  PARAGRAPH_SPACING: [VariableResolvedDataType.FLOAT],
  PARAGRAPH_INDENT: [VariableResolvedDataType.FLOAT],
  VISIBLE: [VariableResolvedDataType.BOOLEAN],
  VARIANT_PROPERTIES: [VariableResolvedDataType.SYMBOL_ID],
  OVERRIDDEN_SYMBOL_ID: [VariableResolvedDataType.SYMBOL_ID],
  FONT_FAMILY: [VariableResolvedDataType.STRING],
  FONT_STYLE: [VariableResolvedDataType.STRING, VariableResolvedDataType.FLOAT],
  FONT_VARIATIONS: [VariableResolvedDataType.FLOAT],
  FONT_SIZE: [VariableResolvedDataType.FLOAT],
  LETTER_SPACING: [VariableResolvedDataType.FLOAT],
  LINE_HEIGHT: [VariableResolvedDataType.FLOAT],
  HYPERLINK: [VariableResolvedDataType.LINK],
  CMS_SERIALIZED_RICH_TEXT_DATA: [VariableResolvedDataType.JS_RUNTIME_ALIAS],
  SLOT_CONTENT_ID: [VariableResolvedDataType.SLOT_CONTENT_ID],
  GRID_ROW_GAP: [VariableResolvedDataType.FLOAT],
  GRID_COLUMN_GAP: [VariableResolvedDataType.FLOAT],
};

/**
 * Returns the CSS variable syntax for a variable, or fallback to its name.
 */
export function getWebVariableSyntax({
  variable,
  variableDisplayName,
}: {
  variable?: Variable;
  variableDisplayName?: string;
}): string {
  if (!variable) return "";
  if (variable.codeSyntax?.[PlatformType.WEB]) {
    return variable.codeSyntax[PlatformType.WEB]!;
  }
  // Fallback: generate CSS variable name from display name or variable name
  const name = (variableDisplayName ?? variable.name).replace(/[^a-z0-9-]/gi, "");
  return `var(--${name})`;
}

/**
 * Maps resolved variable type to component prop type.
 */
export function resolvedTypeToComponentPropType(resolvedType: VariableResolvedDataType): ComponentPropType {
  switch (resolvedType) {
    case VariableResolvedDataType.BOOLEAN:
      return ComponentPropType.BOOL;
    case VariableResolvedDataType.FLOAT:
      return ComponentPropType.NUMBER;
    case VariableResolvedDataType.STRING:
    case VariableResolvedDataType.TEXT_DATA:
      return ComponentPropType.TEXT;
    default:
      throw new Error(`Unknown resolved type: ${resolvedType}`);
  }
}

/**
 * Maps resolved variable type to string identifier.
 */
export function resolvedTypeToString(resolvedType: VariableResolvedDataType): string | undefined {
  switch (resolvedType) {
    case VariableResolvedDataType.BOOLEAN:
      return "boolean";
    case VariableResolvedDataType.FLOAT:
      return "number";
    case VariableResolvedDataType.STRING:
      return "string";
    case VariableResolvedDataType.COLOR:
      return "color";
    case VariableResolvedDataType.MAP:
      return "map";
    case VariableResolvedDataType.SYMBOL_ID:
      return "symbol_id";
    case VariableResolvedDataType.FONT_STYLE:
      return "font_style";
    case VariableResolvedDataType.TEXT_DATA:
      return "text_data";
    case VariableResolvedDataType.IMAGE:
      return "image";
    case VariableResolvedDataType.LINK:
      return "link";
    case VariableResolvedDataType.JS_RUNTIME_ALIAS:
      return "js_runtime_alias";
    case VariableResolvedDataType.SLOT_CONTENT_ID:
      return "slot_content_id";
    default:
      return undefined;
  }
}

/**
 * Returns the publish key for a variable, depending on its subscription status.
 */
export function getVariablePublishKey(variable: Variable): string | undefined {
  if (variable.subscriptionStatus === "SUBSCRIBED" || variable.subscriptionStatus === "LIBRARY") {
    return variable.key;
  }
  return variable.keyForPublish;
}

/**
 * Returns the root variable set key for an extension variable, otherwise its publish key.
 */
export function getVariableSetKey(variable: Variable): string | undefined {
  return variable.isExtension ? variable.rootVariableSetKey : getVariablePublishKey(variable);
}

/**
 * Checks if a variable belongs to a specific variable set.
 */
export function isVariableInSet(variable: Variable, setId: string): boolean {
  return variable.variableSetId === setId;
}

/**
 * Normalizes and extracts a variable's alias or font style/expression value.
 */
export function extractVariableAliasOrFontStyle(variable: any) {
  const normalized = normalizeValue(variable);
  if (normalized) {
    if ("dataType" in normalized && normalized.dataType === "ALIAS" && normalized.value?.alias) {
      return convertKiwiToVariableIdString(normalized.value.alias);
    }
    if ("type" in normalized) {
      if (normalized.type === VariableDataType.ALIAS) {
        return normalized.value;
      }
      if (normalized.type === VariableDataType.FONT_STYLE) {
        return iterateVariableValue(normalized.value.asFloat ?? normalized.value.asString ?? null);
      }
      if (
        normalized.type === VariableDataType.EXPRESSION &&
        normalized.value.expressionFunction === OperationType.STRINGIFY &&
        normalized.value.expressionArguments.length === 1
      ) {
        return iterateVariableValue(normalized.value.expressionArguments[0]);
      }
    }
  }
  return null;
}
export const MH = extractVariableAliasOrFontStyle;

/**
 * Recursively iterates through variable values for font style/expression/map types.
 * Returns a generator that yields values.
 */
function* iterateVariableValue(value: any) {
  yield value;
  if (value?.type === VariableDataType.EXPRESSION) {
    for (const arg of value.value.expressionArguments) {
      yield* iterateVariableValue(arg);
    }
  } else if (value?.type === VariableDataType.MAP) {
    for (const v of Object.values(value.value)) {
      yield* iterateVariableValue(v);
    }
  }
}
export const Pr = iterateVariableValue;

// --- Export Aliases (preserving original names) ---

export const WB = resolvedTypeToComponentPropType;
export const cn = getVariablePublishKey;
export const e4 = resolvedTypeToDataType;
export const eF = isLocallySoftDeleted;
export const rY = areVariablesEqual;
export const CS = isVariableInSet;
export const Hr = resolvedTypeToString;
export const Io = variablePropertyTypeMap;
export const Ip = getVariableSetKey;
export const NX = getWebVariableSyntax;
export const Oi = getVariableDisplayString;
