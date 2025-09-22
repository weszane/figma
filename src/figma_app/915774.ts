import { hasLibraryKeyInSet } from '../figma_app/255679'
import { hasAssetId, PrimaryWorkflowEnum } from '../figma_app/633080'
import { sortByWithOptions } from '../figma_app/656233'

// Original function: $$o0
/**
 * Checks if the given element is an example preset based on its name.
 * @param e - The element to check.
 * @param options - Options object containing isPreset flag.
 * @returns True if the element is a preset and its name matches the example pattern.
 */
export function isExamplePreset(e: any, { isPreset }: { isPreset: boolean }): boolean {
  return !!isPreset && /^Examples *\//.test(e.name);
}

// Original function: $$l3
/**
 * Determines if the element is eligible for processing based on type, asset ID, and library key.
 * @param e - The element to check.
 * @param t - The set to check for library key.
 * @returns True if eligible, false otherwise.
 */
export function isEligibleElement(e: any, t: Set<string>): boolean {
  if (hasAssetId(e) || !(e.type === PrimaryWorkflowEnum.COMPONENT || e.type === PrimaryWorkflowEnum.STATE_GROUP)) {
    return false;
  }
  const r = hasLibraryKeyInSet(e, t);
  return isExamplePreset(e, { isPreset: r });
}

// Original function: $$d1
/**
 * Checks if the given string is 'Examples' and the preset flag is true.
 * @param e - The string to check.
 * @param options - Options object containing isPreset flag.
 * @returns True if conditions are met.
 */
export function isExamplesPreset(e: string, { isPreset }: { isPreset: boolean }): boolean {
  return !!isPreset && e === 'Examples';
}

// Original function: $$c2
/**
 * Sorts the array using the provided sort function, with priority elements prefixed.
 * @param e - The array to sort.
 * @param options - Options object containing sortFn and priorityFn.
 * @returns The sorted array.
 */
export function sortWithPriority(e: any[], { sortFn, priorityFn }: { sortFn: (item: any) => string; priorityFn: (item: any) => boolean }) {
  return sortByWithOptions(e, (item) => {
    const n = sortFn(item);
    return priorityFn(item) ? `!!!!!${n}` : n;
  });
}

// Refactored exports to match new function names
export const Nz = isExamplePreset;
export const dS = isExamplesPreset;
export const gO = sortWithPriority;
export const o = isEligibleElement;
