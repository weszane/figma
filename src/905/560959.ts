import { ZGX } from '../figma_app/27776'
import { parsePxNumber } from '../figma_app/783094'

/**
 * Modal names used in the application.
 */
export const VariableDetailModal = 'VariableDetailModal' // $$a4
export const MatchingVariablesModal = 'MatchingVariablesModal' // $$s3
export const StyleDetailModal = 'StyleDetailModal' // $$o7

/**
 * UI dimension constants.
 */
export const StyleDetailModalWidth = parsePxNumber(ZGX) // $$l6
export const VariableDetailModalWidth = 343 // $$d5
export const MatchingVariablesModalWidth = 272 // $$c1
export const ModalPadding = 4 // $$u8
export const ModalMaxHeight = 360 // $$p9

/**
 * Enum for modal types.
 */
export enum ModalWindowType { // $$m0
  CodeWell = 'code',
  Properties = 'properties',
  FullTable = 'full_table',
}

/**
 * Enum for inspect states.
 */
export enum InspectState { // $$h2
  InspectNoSelection = 'inspect_no_selection',
  VariableDetailsModal = 'variable_details_modal',
  DirectUrl = 'direct_url',
}

// Refactored exports to match new names
export const E6 = ModalWindowType
export const Gw = MatchingVariablesModalWidth
export const Nh = InspectState
export const W8 = MatchingVariablesModal
export const WP = VariableDetailModal
export const b6 = VariableDetailModalWidth
export const iB = StyleDetailModalWidth
export const vl = StyleDetailModal
export const wR = ModalPadding
export const xX = ModalMaxHeight
