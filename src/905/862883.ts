/**
 * Enum for document types.
 * Original: $$n0
 */
export enum FDocumentType {
  Design = 'design',
  FigJam = 'figjam',
  Handoff = 'handoff',
  Slides = 'slides',
  Cooper = 'cooper',
}

/**
 * Enum for fetch status.
 * Original: $$r1
 */
export enum FetchStatus {
  NOT_FETCHED = 0,
  FETCHED = 1,
  FETCHING = 2,
}

/**
 * Enum for resource types.
 * Original: $$a4
 */
export enum ITemplateType {
  CommunityResource = 'CommunityResource',
  TeamTemplate = 'TeamTemplate',
  FaceStamp = 'FaceStamp',
  WhiteboardTool = 'WhiteboardTool',
}

/**
 * Enum for tool types.
 * Original: $$s2
 */
export enum FaceToolType {
  FACE_STAMP = 'FACE_STAMP',
  WHITEBOARD_TOOL = 'WHITEBOARD_TOOL',
}

/**
 * Checks if the given type is a supported block type.
 * Original: $$o3
 * @param type - The type to check.
 * @returns True if type is 'CodeBlock' or 'MindMap', false otherwise.
 */
export function isSupportedBlockType(type: string): boolean {
  return ['CodeBlock', 'MindMap'].includes(type)
}

// Refactored exports to match new names
export const $A = FDocumentType
export const Lx = FetchStatus
export const vt = ITemplateType
export const dB = FaceToolType
export const ds = isSupportedBlockType
