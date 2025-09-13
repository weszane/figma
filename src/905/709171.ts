// /Users/allen/sigma-main/src/905/709171.ts

import { generateUniqueKey } from '../905/383708'
import { isNullish } from '../figma_app/95419'

// Define types for clarity (assuming objects have a library_key property)
interface LibraryItem {
  library_key: string
}

interface LibraryItemWithKey {
  libraryKey: string
}

/**
 * Compares two LibraryItem objects for matching library_key.
 * Original function: $$a1
 * @param item1 - First LibraryItem to compare
 * @param item2 - Second LibraryItem to compare
 * @returns True if both items exist and have matching library_key
 */
export function compareLibraryItems(item1: LibraryItem | null | undefined, item2: LibraryItem | null | undefined): boolean {
  if (isNullish(item1) || isNullish(item2))
    return false
  return item1.library_key === item2.library_key
}

/**
 * Compares a LibraryItem and a LibraryItemWithKey for matching library_key.
 * Original function: $$s4
 * @param item1 - LibraryItem to compare
 * @param item2 - LibraryItemWithKey to compare
 * @returns True if both items exist and have matching library_key/libraryKey
 */
export function compareLibraryItemWithKey(item1: LibraryItem | null | undefined, item2: LibraryItemWithKey | null | undefined): boolean {
  if (isNullish(item1) || isNullish(item2))
    return false
  return item1.library_key === item2.libraryKey
}

/**
 * Compares a LibraryItem with a generated unique key from another item.
 * Original function: $$o2
 * @param item1 - LibraryItem to compare
 * @param item2 - Item to generate key from
 * @returns True if both items exist and library_key matches generated key
 */
export function compareWithGeneratedKey(item1: LibraryItem | null | undefined, item2: any): boolean {
  if (isNullish(item1) || isNullish(item2))
    return false
  return compareLibraryKeyWithString(item1, generateUniqueKey(item2))
}

/**
 * Compares a LibraryItem's library_key with a string.
 * Original function: $$l3
 * @param item - LibraryItem to compare
 * @param key - String key to compare against
 * @returns True if item exists and library_key matches the key
 */
export function compareLibraryKeyWithString(item: LibraryItem | null | undefined, key: string | null | undefined): boolean {
  if (isNullish(item) || isNullish(key))
    return false
  return item.library_key === key
}

/**
 * Compares two LibraryItem objects for matching library_key (alias for compareLibraryItems).
 * Original function: $$d0
 * @param item1 - First LibraryItem to compare
 * @param item2 - Second LibraryItem to compare
 * @returns True if both items exist and have matching library_key
 */
export function compareLibraryItemsAlias(item1: LibraryItem | null | undefined, item2: LibraryItem | null | undefined): boolean {
  return compareLibraryItems(item1, item2)
}

// Updated exports with meaningful names (original exports: EF = $$d0, N2 = $$a1, Oo = $$o2, Ui = $$l3, eE = $$s4)
// Note: If these are imported elsewhere, update import statements to use the new names, e.g.:
// import { compareLibraryItemsAlias as EF, compareLibraryItems as N2, compareWithGeneratedKey as Oo, compareLibraryKeyWithString as Ui, compareLibraryItemWithKey as eE } from './709171';
export const EF = compareLibraryItemsAlias
export const N2 = compareLibraryItems
export const Oo = compareWithGeneratedKey
export const Ui = compareLibraryKeyWithString
export const eE = compareLibraryItemWithKey
