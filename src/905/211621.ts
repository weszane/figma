import { useMemo } from 'react';
import { parsePxInt } from '../figma_app/783094';

// Constant for modal width parsed from "320px"
const MODAL_WIDTH_LARGE = parsePxInt("320px");

/**
 * Enum representing library types.
 * Original: $$l5
 */
export enum ResourceLibraryType {
  FILE = 'file',
  RECENT = 'recent',
  PREFERRED = 'preferred',
}

/**
 * Gets the library key based on the type.
 * Original: $$d4
 * @param item - The item with type and optional libraryKey.
 * @returns The library key or type string.
 */
export function getLibraryKey(item: { type: string; libraryKey?: string }): string {
  switch (item.type) {
    case ResourceLibraryType.FILE:
      return item.libraryKey!;
    case ResourceLibraryType.RECENT:
      return ResourceLibraryType.RECENT;
    case ResourceLibraryType.PREFERRED:
      return ResourceLibraryType.PREFERRED;
    default:
      throw new Error(`Unknown type: ${item.type}`);
  }
}

/**
 * Gets the category for the item based on type and optional target.
 * Original: $$c2
 * @param item - The item with type and optional libraryKey.
 * @param target - Optional target library key for comparison.
 * @returns The category string.
 */
export function getCategory(item: { type: string; libraryKey?: string }, target?: string): string {
  switch (item.type) {
    case ResourceLibraryType.FILE:
      if (target && item.libraryKey === target) {
        return 'local';
      }
      return 'subscribed';
    case ResourceLibraryType.RECENT:
      return 'recents';
    case ResourceLibraryType.PREFERRED:
      return ResourceLibraryType.PREFERRED;
    default:
      throw new Error(`Unknown type: ${item.type}`);
  }
}

/**
 * Enum for picker types.
 * Original: $$u3
 */
export enum PickerOptionType {
  INSTANCE_SWAP_PICKER = 0,
  RESOURCE_INSERT_MODAL = 1,
  PREFERRED_VALUES_PICKER = 2,
}

/**
 * Generates a drilldown picker select ID.
 * Original: $$p1
 * @param id - The base ID.
 * @returns The formatted ID string.
 */
export function getDrilldownPickerSelectId(id: number): string {
  return `drilldown-picker-select-${id}`;
}

/**
 * Hook to get modal configuration based on type.
 * Original: $$m0
 * @param type - The type (0 or 1).
 * @returns The modal configuration.
 */
export function useModalConfig(type: number) {
  return useMemo(() => {
    if (type === 1) {
      return {
        modalWidth: MODAL_WIDTH_LARGE,
        numColsForSmall: 6,
        numColsForNormal: 3,
      };
    }
    return {
      modalWidth: 240,
      numColsForSmall: 4,
      numColsForNormal: 2,
    };
  }, [type]);
}

// Updated exports to match refactored names
export const TQ = useModalConfig;
export const YU = getDrilldownPickerSelectId;
export const Z4 = getCategory;
export const Zl = PickerOptionType;
export const ez = getLibraryKey;
export const iN = ResourceLibraryType;
