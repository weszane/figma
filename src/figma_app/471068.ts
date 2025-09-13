import { SortField } from '../figma_app/756995'

/**
 * Enum representing different view types in the application.
 * Original: $$i0
 */
export enum ViewTypeEnum {
  RECENTLY_VIEWED = 'recently-viewed',
  SHARED_FILES = 'shared-with-you',
  SHARED_PROJECTS = 'shared-projects',
}

/**
 * Object mapping each view type to its available sort fields.
 * Original: $$a1
 */
export const sortOptions: Record<ViewTypeEnum, SortField[]> = {
  [ViewTypeEnum.RECENTLY_VIEWED]: [SortField.NAME, SortField.CREATED_AT, SortField.ACCESSED_AT],
  [ViewTypeEnum.SHARED_FILES]: [SortField.NAME, SortField.CREATED_AT, SortField.SHARED_AT],
  [ViewTypeEnum.SHARED_PROJECTS]: [SortField.NAME, SortField.CREATED_AT, SortField.SHARED_AT],
}

// Export with meaningful names
// Original exports: export const G = $$i0; export const o = $$a1;
export const G = ViewTypeEnum
export const o = sortOptions
