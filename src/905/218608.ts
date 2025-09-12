/**
 * Maps numeric codes to file/branch/template view names.
 * Original variable: n
 */
const viewNameMap: Record<number, string> = {
  0: 'file_copy',
  1: 'file_edit',
  2: 'file_create',
  3: 'file_default',
  4: 'file_restore',
  5: 'file_multiplayer',
  6: 'file_savepoint',
  7: 'branch_child_create',
  8: 'branch_child_merge',
  9: 'branch_create',
  10: 'branch_merge',
  11: 'branch_update',
  12: 'branch_archive',
  13: 'branch_restore',
  14: 'branch_child_update',
  15: 'template_create',
  16: 'template_update',
  17: 'file_empty_create',
}

/**
 * Returns the view name for a given code, or "file_default" if not found.
 * Original function: $$r1
 * @param code - Numeric code for the view
 */
export function getViewName(code: number): string {
  return viewNameMap[code] ?? 'file_default'
}

/**
 * Checks if the view is a branch-related action.
 * Original function: $$a3
 * @param params - Object containing a 'view' property
 */
export function isBranchView(params: { view: string }): boolean {
  switch (params.view) {
    case 'branch_child_create':
    case 'branch_child_merge':
    case 'branch_child_update':
    case 'branch_create':
    case 'branch_merge':
    case 'branch_update':
    case 'branch_archive':
    case 'branch_restore':
      return true
    default:
      return false
  }
}

/**
 * Determines if the view should be shown, based on label or branch view.
 * Original function: $$s0
 * @param params - Object containing 'label' and 'view' properties
 */
export function shouldShowView(params: { label?: string, view: string }): boolean {
  return !!params.label || isBranchView(params) || params.view === 'file_restore'
}

/**
 * Enum for compare view types.
 * Original variable: $$o2
 */
export enum CompareViewType {
  COMPARE_CHANGES = 0,
  COMPARE_MODAL = 1,
}

// Refactored exports for clarity and traceability
export const AI = shouldShowView // Original: AI
export const HF = getViewName // Original: HF
export const lE = CompareViewType // Original: lE
export const pW = isBranchView // Original: pW
