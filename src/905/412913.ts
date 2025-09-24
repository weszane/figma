import { isNullish } from '../figma_app/95419'

/**
 * Enum representing different data sources.
 * Original variable: $$r0
 */
export enum FileKeySourceEnum {
  REST_API = 'REST_API',
  LIVEGRAPH_DATA = 'LIVEGRAPH_DATA',
  LIVEGRAPH_DATA_HUB_FILE = 'LIVEGRAPH_DATA_HUB_FILE',
  LOCAL_FILE = 'LOCAL_FILE',
  TEST = 'TEST',
}

/**
 * Returns the file_key property if the input is not nullish.
 * Original function: $$a1
 * @param e - The input object.
 * @returns The file_key or the original input if nullish.
 */
export const getFileKey = (e?: any): any => isNullish(e) ? e : e.file_key

// Refactored exports to match new names
export const P = FileKeySourceEnum
export const f = getFileKey
