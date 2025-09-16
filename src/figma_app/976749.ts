import { useSelector } from 'react-redux'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { FEditorType, mapEditorTypeToFileType } from '../figma_app/53721'
import { FFileType } from '../figma_app/191312'
/**
 * Returns the current file type based on the selected view in Redux.
 * Original: $$o8
 */
export function getCurrentFileType() {
  return useSelector<ObjectOf>((state) => {
    const selectedView = state.selectedView
    return selectedView && selectedView.view === 'fullscreen'
      ? mapEditorTypeToFileType(selectedView.editorType)
      : FFileType.DESIGN
  })
}

/**
 * Maps a view object to its editor type, defaults to Design.
 * Original: $$l5
 */
export function getEditorTypeFromView(view?: { view: string, editorType: FEditorType }) {
  return view && view.view === 'fullscreen' ? view.editorType : FEditorType.Design
}

/**
 * Checks if the selected view is prototype.
 * Original: $$d3
 */
export function isPrototypeView() {
  return useSelector<ObjectOf>(state => state.selectedView.view === 'prototype')
}

/**
 * Checks if the selected view is fullscreen.
 * Original: $$c7
 */
export function isFullscreenView() {
  return useSelector<ObjectOf>(state => state.selectedView.view === 'fullscreen')
}

/**
 * Checks if the current file type is WHITEBOARD.
 * Original: $$u11
 */
export function isWhiteboardFileType() {
  return getCurrentFileType() === FFileType.WHITEBOARD
}

/**
 * Checks if the current file is a try file and is a whiteboard.
 * Original: $$p2
 */
export function isTryWhiteboardFile() {
  const isWhiteboard = isWhiteboardFileType()
  const isTryFile = useSelector<ObjectOf>(state => !!state.openFile?.isTryFile)
  return isWhiteboard && isTryFile
}

/**
 * Checks if the current file type is DESIGN.
 * Original: $$_1
 */
export function isDesignFileType() {
  return getCurrentFileType() === FFileType.DESIGN
}

/**
 * Checks if the current file type is SITES.
 * Original: $$h6
 */
export function isSitesFileType() {
  return getCurrentFileType() === FFileType.SITES
}

/**
 * Checks if the current editor type is DevHandoff.
 * Original: $$m9
 */
export function isDevHandoffEditorType() {
  return getSelectedEditorType() === FEditorType.DevHandoff
}

/**
 * Checks if the current editor type is Illustration.
 * Original: $$g14
 */
export function isIllustrationEditorType() {
  return getSelectedEditorType() === FEditorType.Illustration
}

/**
 * Returns the current editor type from Redux.
 * Original: $$f0
 */
export function getSelectedEditorType() {
  return useSelector(selectEditorType)
}

/**
 * Selector for editor type based on selected view.
 * Original: $$E12
 */
export function selectEditorType(state: { selectedView: { view: string, editorType: FEditorType } }) {
  const selectedView = state.selectedView
  return selectedView.view !== 'fullscreen'
    ? FEditorType.Design
    : selectedView.editorType
}

/**
 * Returns the editor type from the selected view, or null if not fullscreen.
 * Original: $$y10
 */
export function getEditorTypeOrNull() {
  return useSelector<ObjectOf>(state => getEditorTypeIfFullscreen(state.selectedView))
}

/**
 * Returns editor type if view is fullscreen, otherwise null.
 * Original: $$b4
 */
export function getEditorTypeIfFullscreen(view: { view: string, editorType: FEditorType }) {
  return view.view !== 'fullscreen' ? null : view.editorType
}

/**
 * Atom for subscribing to editor type changes in fullscreen view.
 * Original: $$T13
 */
export const editorTypeAtom = createReduxSubscriptionAtomWithState(
  state => getEditorTypeIfFullscreen(state.selectedView),
)

// Exported aliases for refactored functions
export const E3 = getSelectedEditorType
export const Em = isDesignFileType
export const Fn = isTryWhiteboardFile
export const HW = isPrototypeView
export const JV = getEditorTypeIfFullscreen
export const XE = getEditorTypeFromView
export const cJ = isSitesFileType
export const iq = isFullscreenView
export const lg = getCurrentFileType
export const m0 = isDevHandoffEditorType
export const my = getEditorTypeOrNull
export const ow = isWhiteboardFileType
export const pQ = selectEditorType
export const u8 = editorTypeAtom
export const vn = isIllustrationEditorType
