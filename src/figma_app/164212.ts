import { jsx } from 'react/jsx-runtime'
import { R as SVG11 } from '../905/82603'
import { computeBackingGUIDs } from '../905/92359'
import { _ as SVG10 } from '../905/144222'
import { isInvalidValue, isValidValue, MIXED_MARKER } from '../905/216495'
import { getI18nString } from '../905/303541'
import { T as SVG9 } from '../905/339716'
import { m as SVG8 } from '../905/367152'
import { trackEventAnalytics } from '../905/449184'
import { c as SVG4 } from '../905/535130'
import { s as SVG6 } from '../905/551945'
import { h as SVG5 } from '../905/565502'
import { O as SVG7 } from '../905/599243'
import { getFeatureFlags } from '../905/601108'
import { compareWithGeneratedKey } from '../905/709171'
import { p as SVG } from '../905/730229'
import { V as SVG1 } from '../905/735518'
import { X as SVG2 } from '../905/737763'
import { $ as SVG3 } from '../905/953280'
import { SlotSymbolType } from '../figma_app/338442'
import { intersection } from '../figma_app/476572'
import { ComponentPropType, Fullscreen, PropertyScope, VariableDataType, VariableResolvedDataType, VariableSetErrorType } from '../figma_app/763686'

// Original constants and enums
const DROPDOWN_HEIGHT = 304; // $$A31
const ADD_COMPONENT_PROP_DROPDOWN = 'add-component-prop-dropdown'; // $$x1
const BUBBLED_PROPS_PICKER = 'bubbled-props-picker'; // $$N2

export enum DefinitionAssignment { // $$C6
  DEFINITION = 0,
  ASSIGNMENT = 1,
}

export enum PanelWidth { // $$w5
  REGULAR = 0,
  WIDE = 1,
  UNBOUNDED = 2,
  RESIZABLE_SIDEBAR = 3,
}

// Icon mapping object for component prop types
const COMPONENT_PROP_ICONS = { // O
  [ComponentPropType.BOOL]: {
    SIZE_24_SMALL: SVG3,
    SIZE_16: SVG2,
  },
  [ComponentPropType.TEXT]: {
    SIZE_24_SMALL: SVG,
    SIZE_16: SVG9,
  },
  [ComponentPropType.INSTANCE_SWAP]: {
    SIZE_24_SMALL: SVG1,
    SIZE_16: SVG8,
  },
  [ComponentPropType.NUMBER]: {
    SIZE_24_SMALL: SVG7,
    SIZE_16: SVG4,
  },
  [ComponentPropType.IMAGE]: {
    SIZE_24_SMALL: SVG6,
    SIZE_16: SVG10,
  },
  [ComponentPropType.SLOT]: {
    SIZE_24_SMALL: SVG5,
    SIZE_16: SVG11,
  },
};

// Icon rendering functions
/**
 * Renders an icon for a given component prop type and size.
 * @param propType - The component prop type.
 * @param isSmall - Whether to use the small size (16px) or default (24px).
 * @returns JSX element of the icon.
 */
export function renderComponentPropIcon(propType: ComponentPropType, isSmall: boolean = false): JSX.Element { // $$R34
  const icon = COMPONENT_PROP_ICONS[propType][isSmall ? 'SIZE_16' : 'SIZE_24_SMALL'];
  return jsx(icon, {});
}

// Analytics functions
/**
 * Tracks analytics event for opening component props definition modal.
 * @param component - The component object.
 * @param isBottomsUp - Whether it's bottoms-up creation.
 * @param propType - The component prop type.
 * @param source - The source of the event.
 */
export function trackComponentPropsModalOpen(component: any, isBottomsUp: boolean, propType: ComponentPropType, source: string): void { // $$L8
  if (component) {
    trackEventAnalytics('ds_component_props_def_create_modal_open', {
      product_component_guid: component.guid,
      product_component_is_state_group: component.isStateGroup,
      is_bottoms_up_creation: isBottomsUp,
      prop_type: ComponentPropType[propType],
      source,
    });
  }
}

// Type utility functions
/**
 * Gets the display name for a component prop type.
 * @param propType - The component prop type.
 * @returns Localized string for the prop type.
 */
export function getComponentPropDisplayName(propType: ComponentPropType): string { // $$P33
  switch (propType) {
    case ComponentPropType.BOOL:
      return getI18nString('design_systems.component_properties.boolean');
    case ComponentPropType.TEXT:
      return getI18nString('design_systems.component_properties.text');
    case ComponentPropType.INSTANCE_SWAP:
      return getI18nString('design_systems.component_properties.instance_swap');
    case ComponentPropType.VARIANT:
      return getI18nString('design_systems.component_properties.variant');
    case ComponentPropType.NUMBER:
      return getI18nString('design_systems.component_properties.number');
    case ComponentPropType.IMAGE:
      return getI18nString('design_systems.component_properties.image');
    case ComponentPropType.SLOT:
      return getI18nString('design_systems.component_properties.slot');
  }
}

/**
 * Normalizes a value based on the component prop type.
 * @param propType - The component prop type.
 * @param value - The value to normalize.
 * @returns The normalized value.
 */
export function normalizeComponentPropValue(propType: ComponentPropType, value: any): any { // $$D19
  if (isInvalidValue(value)) {
    return MIXED_MARKER;
  }
  if (value && typeof value === 'object' && 'type' in value && value.type === VariableDataType.ALIAS) {
    return value;
  }
  switch (propType) {
    case ComponentPropType.BOOL:
      return value === 'true';
    case ComponentPropType.IMAGE:
    case ComponentPropType.TEXT:
    case ComponentPropType.INSTANCE_SWAP:
    case ComponentPropType.NUMBER:
    case ComponentPropType.SLOT:
      return value;
    default:
      throw new Error(`Unexpected component prop type: ${propType}`);
  }
}

/**
 * Gets the prop types for a slot symbol type.
 * @param slotType - The slot symbol type.
 * @returns Object with default type and allowed types.
 */
export function getSlotPropTypes(slotType: SlotSymbolType): { defaultType: ComponentPropType; types: ComponentPropType[] } { // $$k20
  switch (slotType) {
    case SlotSymbolType.VISIBLE:
      return {
        defaultType: ComponentPropType.BOOL,
        types: [ComponentPropType.BOOL],
      };
    case SlotSymbolType.TEXT:
      return {
        defaultType: ComponentPropType.TEXT,
        types: [ComponentPropType.TEXT, ComponentPropType.NUMBER],
      };
    case SlotSymbolType.OVERRIDDEN_SYMBOL_ID:
      return {
        defaultType: ComponentPropType.INSTANCE_SWAP,
        types: [ComponentPropType.INSTANCE_SWAP],
      };
    case SlotSymbolType.SLOT_CONTENT_ID:
      return {
        defaultType: ComponentPropType.SLOT,
        types: [ComponentPropType.SLOT],
      };
  }
}

/**
 * Gets the default value for a component prop type.
 * @param propType - The component prop type.
 * @returns The default value.
 */
export function getComponentPropDefaultValue(propType: ComponentPropType): any { // $$M9
  switch (propType) {
    case ComponentPropType.BOOL:
      return true;
    case ComponentPropType.TEXT:
      return '';
    case ComponentPropType.INSTANCE_SWAP:
      return null;
    case ComponentPropType.VARIANT:
      return getI18nString('design_systems.states_panel.default_property_value');
    case ComponentPropType.NUMBER:
      return '0';
    case ComponentPropType.IMAGE:
      return null;
  }
}

/**
 * Validates if a value is valid for a component prop type.
 * @param propType - The component prop type.
 * @param value - The value to validate.
 * @returns True if valid, false otherwise.
 */
export function isComponentPropValueValid(propType: ComponentPropType, value: any): boolean { // $$F0
  switch (propType) {
    case ComponentPropType.INSTANCE_SWAP:
      return !!value;
    case ComponentPropType.TEXT:
    case ComponentPropType.VARIANT:
      return !!value?.length;
    case ComponentPropType.NUMBER:
      return isValidNumberString(value);
    default:
      return true;
  }
}

/**
 * Checks if the prop type is not variant.
 * @param propType - The component prop type.
 * @returns True if not variant.
 */
export function isNotVariantPropType(propType: ComponentPropType): boolean { // $$Q7
  return propType !== ComponentPropType.VARIANT;
}

/**
 * Checks if slots are enabled for the prop type.
 * @param propType - The component prop type.
 * @returns True if slots are enabled.
 */
export function areSlotsEnabled(propType: ComponentPropType): boolean { // $$eo29
  return !!getFeatureFlags().dse_slots && propType === ComponentPropType.SLOT;
}

// Value handling functions
/**
 * Formatter for boolean values.
 */
export const BOOLEAN_FORMATTER = { // $$j12
  format: (value: boolean) => value ? getI18nString('design_systems.component_properties.boolean_true') : getI18nString('design_systems.component_properties.boolean_false'),
  isEqual: (a: boolean, b: boolean) => a === b,
};

/**
 * Finds the common value from an array using a getter function.
 * @param getter - Function to get the value from an item.
 * @param items - Array of items.
 * @returns The common value or null.
 */
export function findCommonValue<T, U>(getter: (item: T) => U, items: T[]): U | null { // $$U32
  if (!items.length) {
    return null;
  }
  const firstValue = getter(items[0]);
  return firstValue && items.every(item => getter(item) === firstValue) ? firstValue : null;
}

/**
 * Resolves a value from a set based on prop type.
 * @param propType - The component prop type.
 * @param valueSet - Set of values.
 * @param guidMap - Map for GUID resolution.
 * @returns The resolved value.
 */
export function resolveValueFromSet(propType: ComponentPropType, valueSet: Set<any>, guidMap: Map<string, any>): any { // $$V25
  if (valueSet.size) {
    const resolvedValue = valueSet.has(MIXED_MARKER) ? MIXED_MARKER : propType === ComponentPropType.INSTANCE_SWAP ? computeBackingGUID([...valueSet], guidMap) : valueSet.size > 1 ? MIXED_MARKER : valueSet.values().next().value;
    return normalizeComponentPropValue(propType, resolvedValue);
  }
}

// Number utility functions
// eslint-disable-next-line regexp/no-unused-capturing-group
const NUMBER_REGEX = /^[+-]?(\d+(\.\d*)?|\.\d+)$/; // ee

/**
 * Validates if a string is a valid number.
 * @param str - The string to validate.
 * @returns True if valid number string.
 */
export function isValidNumberString(str: string): boolean { // $$et10
  if (!NUMBER_REGEX.test(str)) {
    return false;
  }
  const num = parseFloat(str);
  return !isNaN(num) && isFinite(num) && str.trim() !== '';
}

/**
 * Converts a string to a float, rounded to 2 decimals.
 * @param str - The string to convert.
 * @returns The converted number.
 */
export function stringToFloat(str: string): number { // $$er11
  return isValidNumberString(str) ? Number(parseFloat(str).toFixed(2)) : (console.warn('Failed converting string to float:', str), 0);
}

/**
 * Converts a number to a string, removing trailing zeros.
 * @param num - The number to convert.
 * @returns The converted string.
 */
export function floatToString(num: number): string { // $$en24
  return isNaN(num) ? (console.warn('Failed converting number to string:', num), '0') : num.toFixed(2).replace(/\.?0+$/, '');
}

// Error handling functions
/**
 * Gets the error message for a variable set error.
 * @param errorType - The error type.
 * @param hasUnpublished - Whether there are unpublished values.
 * @returns The error message.
 */
export function getVariableSetErrorMessage(errorType: VariableSetErrorType, hasUnpublished: boolean): string { // $$B22
  switch (errorType) {
    case VariableSetErrorType.CONFLICTING_NAMES_ERROR:
    case VariableSetErrorType.CONFLICTING_NAMES_WITH_VARIANT_ERROR:
      return getI18nString('design_systems.component_properties.error_conflicting_name');
    case VariableSetErrorType.UNUSED_DEF_ERROR:
      return getI18nString('design_systems.component_properties.error_unused_property');
    default:
      return hasUnpublished ? getI18nString('design_systems.component_properties.has_unpublished_preferred_values') : '';
  }
}

/**
 * Gets the error type for a component prop.
 * @param defId - The definition ID.
 * @param defs - The definitions map.
 * @returns The error type.
 */
export function getComponentPropErrorType(defId: string | undefined, defs: any): VariableSetErrorType { // $$q21
  return defId ? defs[defId]?.componentPropDefError ?? VariableSetErrorType.NONE : VariableSetErrorType.NONE;
}

// GUID and backing functions
/**
 * Computes the backing GUID from a list of GUIDs.
 * @param guids - Array of GUIDs.
 * @param guidMap - Map of GUIDs to objects.
 * @returns The backing object or MIXED_MARKER.
 */
export function computeBackingGUID(guids: string[], guidMap: Map<string, any>): any { // $$G30
  if (!guids.length) {
    return null;
  }
  const { backingSymbolGUID, backingStateGroupGUID } = computeBackingGUIDs(new Set(guids), guidMap);
  return backingStateGroupGUID && isValidValue(backingStateGroupGUID) ? guidMap.get(backingStateGroupGUID) : backingSymbolGUID && isValidValue(backingSymbolGUID) ? guidMap.get(backingSymbolGUID) : MIXED_MARKER;
}

/**
 * Gets the default state for a state group.
 * @param stateGroup - The state group.
 * @param localStateGroup - The local state group.
 * @param isLocal - Whether it's local.
 * @returns The default state.
 */
export function getDefaultStateForStateGroup(stateGroup: any, localStateGroup: any, _isLocal: boolean): any { // $$H27
  return compareWithGeneratedKey(stateGroup, localStateGroup) ? Fullscreen.getDefaultStateForLocalStateGroup(localStateGroup) : Fullscreen.getDefaultStateForSubscribedStateGroup(localStateGroup, stateGroup.default_state_key);
}

// URL utility
/**
 * Extracts the hostname from a URL.
 * @param url - The URL string.
 * @returns The hostname or undefined.
 */
export function getHostnameFromUrl(url: string | undefined): string | undefined { // $$z17
  if (url) {
    try {
      return new URL(url).hostname;
    } catch {
      // Ignore invalid URLs
    }
  }
}

// Display mode enum
export enum DisplayMode { // $$W4
  PILL = 'pill',
  ICON = 'icon',
}

// Instance check functions
/**
 * Checks if an instance is simplified.
 * @param instance - The instance object.
 * @param symbolMap - Map of symbols.
 * @returns True if simplified.
 */
export function isInstanceSimplified(instance: any, symbolMap: Map<string, any>): boolean { // $$K28
  return !!(instance.type === 'INSTANCE' && !instance.isInstanceSublayer && instance.simplifyInstancePanels && symbolMap.get(instance.symbolId || '')) && instance.hasHiddenChildrenWhenSimplified;
}

/**
 * Finds the common symbol ID from a list of node IDs.
 * @param nodeIds - Array of node IDs.
 * @param nodeMap - Map of nodes.
 * @returns The common symbol ID or undefined.
 */
export function findCommonSymbolId(nodeIds: string[], nodeMap: Map<string, any>): string | undefined { // $$Y23
  let commonId: string | undefined;
  if (nodeIds.length) {
    for (const nodeId of nodeIds) {
      const node = nodeMap.get(nodeId);
      if (node) {
        if (node.isInstance) {
          const symbolId = node.symbolId;
          if (!symbolId) continue;
          if (commonId === undefined) {
            commonId = symbolId;
          } else if (symbolId !== commonId) {
            return undefined;
          }
        } else if (node.isCodeInstance) {
          const guid = node.backingCodeComponent?.guid;
          if (!guid) continue;
          if (commonId === undefined) {
            commonId = guid;
          } else if (guid !== commonId) {
            return undefined;
          }
        }
      }
    }
    return commonId;
  }
}

/**
 * Finds the common state group ID from a list of node IDs.
 * @param nodeIds - Array of node IDs.
 * @param nodeMap - Map of nodes.
 * @returns The common state group ID or undefined.
 */
export function findCommonStateGroupId(nodeIds: string[], nodeMap: Map<string, any>): string | undefined { // $$$15
  let commonId: string | undefined;
  if (nodeIds.length) {
    for (const nodeId of nodeIds) {
      const node = nodeMap.get(nodeId);
      if (!node || node.type !== 'INSTANCE') continue;
      const symbolId = node.symbolId;
      if (!symbolId) continue;
      const symbol = nodeMap.get(symbolId);
      if (!symbol) continue;
      if (symbol.isLooseComponent) return undefined;
      const stateGroupId = symbol.containingStateGroupId;
      if (stateGroupId) {
        if (commonId === undefined) {
          commonId = stateGroupId;
        } else if (stateGroupId !== commonId) {
          return undefined;
        }
      }
    }
    return commonId;
  }
}

// Props merging functions
/**
 * Intersects hidden props from multiple nodes.
 * @param nodeIds - Array of node IDs.
 * @param nodeMap - Map of nodes.
 * @returns Set of intersected hidden props.
 */
export function intersectHiddenProps(nodeIds: string[], nodeMap: Map<string, any>) { // $$X16
  if (!nodeIds.length) {
    return new Set();
  }
  let intersected = new Set(nodeMap[nodeIds[0]]?.hiddenProps);
  return nodeIds.reduce((acc, nodeId) => nodeMap[nodeId]?.hiddenProps ? intersection(acc, new Set(nodeMap[nodeId].hiddenProps)) : acc, intersected);
}

/**
 * Merges component props from multiple nodes.
 * @param nodeIds - Array of node IDs.
 * @param nodeMap - Map of nodes.
 * @returns Merged props object.
 */
export function mergeComponentProps(nodeIds: string[], nodeMap: Map<string, any>): Record<string, any> { // $$J14
  const merged: Record<string, any> = {};
  for (const nodeId of nodeIds) {
    const node = nodeMap.get(nodeId);
    if (node) {
      Object.assign(merged, node.componentPropsJsonForNode);
    }
  }
  return merged;
}

/**
 * Gets sorted definitions for a component.
 * @param componentId - The component ID.
 * @param components - Map of components.
 * @returns Array of sorted definitions.
 */
export function getSortedDefinitions(componentId: string, components: Map<string, any>): any[] { // $$Z18
  const defs = components[componentId]?.defs;
  return defs ? Object.values(defs).sort((a: any, b: any) => a.sortPosition < b.sortPosition ? -1 : 1) : [];
}

// Slot functions
/**
 * Maps an array to a slot symbol type.
 * @param arr - Array to map.
 * @returns The slot symbol type or undefined.
 */
export function mapToSlotSymbolType(arr: string[]): SlotSymbolType | undefined { // $$ei26
  if (arr?.length === 1) {
    switch (arr[0]) {
      case 'TEXT_DATA':
        return SlotSymbolType.TEXT;
      case 'VISIBLE':
        return SlotSymbolType.VISIBLE;
    }
  }
}

/**
 * Creates a node field alias.
 * @param value - The value object.
 * @returns The alias object.
 */
export function createNodeFieldAlias(value: any): any { // $$ea3
  return {
    type: VariableDataType.NODE_FIELD_ALIAS,
    resolvedType: value.varValue.resolvedType,
    value: {
      stablePathToNode: value.value.stablePath,
      nodeField: 'COMPONENT_PROP_ASSIGNMENTS',
      indexOrKey: value.value.explicitDefId,
    },
  };
}

// Variable config
/**
 * Configuration for variable types by component prop type.
 */
export const VARIABLE_TYPE_CONFIG = { // $$es13
  [ComponentPropType.BOOL]: {
    variableType: VariableResolvedDataType.BOOLEAN,
    requestedTypes: [VariableResolvedDataType.BOOLEAN],
    variableScope: PropertyScope.ALL_SCOPES,
  },
  [ComponentPropType.TEXT]: {
    variableType: VariableResolvedDataType.TEXT_DATA,
    requestedTypes: [VariableResolvedDataType.STRING],
    variableScope: PropertyScope.TEXT_CONTENT,
  },
  [ComponentPropType.NUMBER]: {
    variableType: VariableResolvedDataType.FLOAT,
    requestedTypes: [VariableResolvedDataType.FLOAT],
    variableScope: PropertyScope.ALL_SCOPES,
  },
};

// Refactored exports with new names
export const B_ = isComponentPropValueValid;
export const C4 = ADD_COMPONENT_PROP_DROPDOWN;
export const Dd = BUBBLED_PROPS_PICKER;
export const FF = createNodeFieldAlias;
export const Fv = DisplayMode;
export const O2 = PanelWidth;
export const OE = DefinitionAssignment;
export const Pf = isNotVariantPropType;
export const Pp = trackComponentPropsModalOpen;
export const Ql = getComponentPropDefaultValue;
export const Rq = isValidNumberString;
export const T1 = stringToFloat;
export const X9 = BOOLEAN_FORMATTER;
export const Xp = VARIABLE_TYPE_CONFIG;
export const Yg = mergeComponentProps;
export const Yi = findCommonStateGroupId;
export const ZH = intersectHiddenProps;
export const _P = getHostnameFromUrl;
export const aO = getSortedDefinitions;
export const dl = normalizeComponentPropValue;
export const eM = getSlotPropTypes;
export const f3 = getComponentPropErrorType;
export const iz = getVariableSetErrorMessage;
export const k4 = findCommonSymbolId;
export const lg = floatToString;
export const m5 = resolveValueFromSet;
export const mv = mapToSlotSymbolType;
export const ui = getDefaultStateForStateGroup;
export const vo = isInstanceSimplified;
export const w1 = areSlotsEnabled;
export const wd = computeBackingGUID;
export const wh = DROPDOWN_HEIGHT;
export const xP = findCommonValue;
export const xb = getComponentPropDisplayName;
export const zn = renderComponentPropIcon;
