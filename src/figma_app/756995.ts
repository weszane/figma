// Original file: /Users/allen/sigma-main/src/figma_app/756995.ts
// Refactored to improve readability, add types, group related functionality, and add documentation.
// Maintained original functionality and mappings.
// Renamed obfuscated names to descriptive ones for clarity.
// Added JSDoc comments and traced back to original names.

import { throwTypeError } from '../figma_app/465776'

// Enums and types for sorting fields
export enum SortField {
  NAME = 0,
  CREATED_AT = 1,
  TOUCHED_AT = 2,
  TRASHED_AT = 3,
  OWNER = 4,
  SEARCH_RELEVANCE = 5,
  PROJECT_NAME = 6,
  ACCESSED_AT = 7,
  SHARED_AT = 8,
}

/**
 * Maps SortField enum values to string keys.
 * Original name: $$a6
 * @param field - The SortField enum value
 * @returns The corresponding string key
 */
export function getSortFieldKey(field: SortField): string {
  switch (field) {
    case SortField.NAME:
      return 'name'
    case SortField.CREATED_AT:
      return 'created_at'
    case SortField.TOUCHED_AT:
      return 'touched_at'
    case SortField.TRASHED_AT:
      return 'trashed_at'
    case SortField.OWNER:
      return 'owner'
    case SortField.SEARCH_RELEVANCE:
      return 'search_relevance'
    case SortField.PROJECT_NAME:
      return 'project_name'
    case SortField.ACCESSED_AT:
      return 'accessed_at'
    case SortField.SHARED_AT:
      return 'shared_at'
    default:
      throwTypeError(field)
  }
}

// Enums and types for sort order
export enum SortOrder {
  ASC = 0,
  DESC = 1,
}

/**
 * Maps SortOrder enum values to string keys.
 * Original name: $$o2
 * @param order - The SortOrder enum value
 * @returns The corresponding string key
 */
export function getSortOrderKey(order: SortOrder): string {
  switch (order) {
    case SortOrder.ASC:
      return 'asc'
    case SortOrder.DESC:
      return 'desc'
    default:
      throwTypeError(order)
  }
}

// Enums for permissions
export enum PermissionType {
  ANY = 0,
  SELF = 1,
  OTHER = 2,
}

export enum PermissionAction {
  CAN_BE_VIEWED = 0,
  CAN_BE_RESTORED_DELETED = 1,
}

// Enums for file types
export enum FileType {
  ANY = 0,
  DESIGN = 1,
  FIGJAM = 2,
  PROTOTYPE = 3,
  SLIDES = 4,
  SITES = 5,
  COOPER = 6,
  MAKE = 7,
}

// Enums for view modes
export enum ViewMode {
  LIST = 0,
  GRID = 1,
}

/**
 * Maps ViewMode enum values to string keys.
 * Original name: $$p8
 * @param mode - The ViewMode enum value
 * @returns The corresponding string key
 */
export function getViewModeKey(mode: ViewMode): string {
  switch (mode) {
    case ViewMode.LIST:
      return 'list'
    case ViewMode.GRID:
      return 'grid'
    default:
      throwTypeError(mode)
  }
}

// Enums for filter types
export enum FilterType {
  ALL = '',
  SHARED = 'shared',
  ORG_DELETED_DRAFTS = 'deleted_user_drafts',
}

/**
 * Maps SortField to resource sort field strings.
 * Original name: $$h1
 * @param field - The SortField enum value
 * @returns The corresponding resource sort field or null
 */
export function getResourceSortField(field: SortField): string | null {
  switch (field) {
    case SortField.NAME:
      return 'resource_name'
    case SortField.CREATED_AT:
      return 'resource_created_at'
    case SortField.SHARED_AT:
      return 'shared_at'
    default:
      return null
  }
}

/**
 * Maps SortField to property names.
 * Original name: $$m9
 * @param field - The SortField enum value
 * @returns The corresponding property name or null
 */
export function getSortFieldProperty(field: SortField): string | null {
  switch (field) {
    case SortField.TRASHED_AT:
      return 'trashedAt'
    case SortField.NAME:
      return 'name'
    case SortField.CREATED_AT:
      return 'createdAt'
    default:
      return null
  }
}

/**
 * Maps PermissionAction to string keys.
 * Original name: $$g10
 * @param action - The PermissionAction enum value
 * @returns The corresponding string key
 */
export function getPermissionActionKey(action: PermissionAction): string {
  switch (action) {
    case PermissionAction.CAN_BE_VIEWED:
      return 'can_be_viewed'
    default:
      return 'can_be_restored_deleted'
  }
}

/**
 * Maps FileType to index strings.
 * Original name: $$f3
 * @param type - The FileType enum value
 * @returns The corresponding index string or null
 */
export function getFileTypeIndex(type: FileType): string | null {
  switch (type) {
    case FileType.DESIGN:
      return '0'
    case FileType.FIGJAM:
      return '1'
    case FileType.SLIDES:
      return '2'
    case FileType.SITES:
      return '3'
    case FileType.COOPER:
      return '4'
    case FileType.MAKE:
      return '5'
    case FileType.PROTOTYPE:
    case FileType.ANY:
      return null
    default:
      throwTypeError(type)
  }
}

// Enums for sort types
export enum SortType {
  TIME = 0,
  ALPHABETICAL = 1,
  OTHER = 2,
}

// Refactored exports to match new names, maintaining original alias names
export const C0 = SortField
export const De = getResourceSortField
export const GB = getSortOrderKey
export const Gv = getFileTypeIndex
export const Jh = PermissionAction
export const XU = ViewMode
export const _5 = getSortFieldKey
export const cT = FilterType
export const jq = getViewModeKey
export const jx = getSortFieldProperty
export const mo = getPermissionActionKey
export const rJ = PermissionType
export const rR = SortType
export const t2 = FileType
export const ue = SortOrder
