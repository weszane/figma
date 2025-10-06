/* eslint-disable unused-imports/no-unused-vars */
interface EditScopeManager {
  onMissingEditScope: (...args: any[]) => void
  onIntentionalEdit: (...args: any[]) => void
}
export class EditScopeHandler implements EditScopeManager {
  shouldThrow: boolean
  onMissingEditScope(...args: any[]) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  onIntentionalEdit(...args: any[]) {
    if (this.shouldThrow)
      throw new Error('Method not implemented.')
  }

  constructor(e = !1) {
    this.shouldThrow = e
  }
}
interface AutoSaveManager {
  readyToAcceptAutosaveChanges: (...args: any[]) => boolean
  hasOngoingCommitTask: (...args: any[]) => boolean
  enqueueAutosaveCommit: (...args: any[]) => Promise<never>
  createAutosaveManager: (...args: any[]) => void
  destroyAutosaveManager: (...args: any[]) => void
  isConnected: (...args: any[]) => boolean
}

interface ShadowReadLogger {
  logShadowReadSuggestionsOnPaste: (...args: any[]) => void
}

interface RequestIdGenerator {
  generateRequestId: (...args: any[]) => string
  generateSessionId: (...args: any[]) => string
  getSuggestion: (...args: any[]) => Promise<never>
  onExplicitDismiss: (...args: any[]) => void
  onFullOrPartialAccept: (...args: any[]) => void
}

interface EchoService {
  jsEchoUintValue: (...args: any[]) => number
  jsEchoUint64Value: (...args: any[]) => string
  jsEchoInt64Value: (...args: any[]) => string
  jsEchoInt64Struct: (...args: any[]) => { uvalue: string, ivalue: string }
  jsEchoStringValue: (...args: any[]) => string
  jsEchoIntArrayValue: (...args: any[]) => number[]
  jsEchoBoolArrayValue: (...args: any[]) => boolean[]
  jsEchoJsonValue: (...args: any[]) => string
  jsEchoJsValue: (...args: any[]) => void
  jsEchoOptionalJsValue: (...args: any[]) => null
  jsEchoDeeplyNestedJsValue: (...args: any[]) => any[]
  jsEchoIntMapValue: (...args: any[]) => Map<any, any>
  jsEchoIntSetValue: (...args: any[]) => Set<any>
  jsEchoOptionalStringValue: (...args: any[]) => null
  jsEchoOptionalStringStruct: (...args: any[]) => { valueOpt2: null }
  jsEchoFastParseableStructValue: (...args: any[]) => {
    intValue: number
    uintValue: number
    int64Value: string
    uint64Value: string
    strValue: string
    doubleValue: number
    boolValue: boolean
    guidValue: string
    structValue: { value: number }
    arrayIntValue: number[]
    arrayStringValue: string[]
    arrayBoolValue: boolean[]
    jsValue: undefined
  }
  jsEchoNonFastParseableStructValue: (...args: any[]) => {
    jsonValue: string
    intValue: number
    uintValue: number
    int64Value: string
    uint64Value: string
    strValue: string
    doubleValue: number
    boolValue: boolean
    guidValue: string
    structValue: { value: number }
    arrayIntValue: number[]
    arrayStringValue: string[]
    arrayBoolValue: boolean[]
    jsValue: undefined
  }
  jsEchoCallbackValue: (...args: any[]) => () => void
  getObservableCounter: (...args: any[]) => null
  getObservableArray: (...args: any[]) => null
  jsValueTestsDone: (...args: any[]) => void
}

interface SearchService {
  rerunSearch: (...args: any[]) => void
  getTextMatches: (...args: any[]) => any[]
  rebuildIndex: (...args: any[]) => void
  logIndex: (...args: any[]) => void
  setResultInfo: (...args: any[]) => void
  setFocusAndNavigate: (...args: any[]) => void
  setCategoryCounts: (...args: any[]) => void
  updateCategoryCounts: (...args: any[]) => void
  showReplace: (...args: any[]) => void
  showMissingFontBell: (...args: any[]) => void
  detectTextTransform: (...args: any[]) => number
  applyTextTransform: (...args: any[]) => string
  getAnnotationTextContent: (...args: any[]) => string
}

interface CodeSnapshotManager {
  clearCodeSnapshotsFromMessages: (...args: any[]) => any[]
}

interface CommentManager {
  handleMouseDown: (...args: any[]) => void
  handleMouseMove: (...args: any[]) => void
  handleMouseUp: (...args: any[]) => void
  createNewCommentAtPosition: (...args: any[]) => void
}

interface TemplatePicker {
  openTemplatePicker: (...args: any[]) => void
}

export class AutosaveSessionBindings implements AutoSaveManager {
  shouldThrow: boolean

  readyToAcceptAutosaveChanges(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  hasOngoingCommitTask(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  enqueueAutosaveCommit(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  createAutosaveManager(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  destroyAutosaveManager(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  isConnected(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

// $$s30
export class AutoSuggestAssetBindings implements ShadowReadLogger {
  shouldThrow: boolean

  logShadowReadSuggestionsOnPaste(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

// AutosuggestTextBindings
export class AutosuggestTextBindings implements RequestIdGenerator {
  shouldThrow: boolean

  generateRequestId(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  generateSessionId(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  getSuggestion(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  onExplicitDismiss(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  onFullOrPartialAccept(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
// JsBindingsTestHelpers
export class JsBindingsTestHelpers implements EchoService {
  shouldThrow: boolean

  jsEchoUintValue(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  jsEchoUint64Value(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return '0'
  }

  jsEchoInt64Value(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return '0'
  }

  jsEchoInt64Struct(...args: any[]): { uvalue: string, ivalue: string } {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return {
      uvalue: '0',
      ivalue: '0',
    }
  }

  jsEchoStringValue(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  jsEchoIntArrayValue(...args: any[]): number[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  jsEchoBoolArrayValue(...args: any[]): boolean[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  jsEchoJsonValue(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  jsEchoJsValue(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  jsEchoOptionalJsValue(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  jsEchoDeeplyNestedJsValue(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  jsEchoIntMapValue(...args: any[]): Map<any, any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Map()
  }

  jsEchoIntSetValue(...args: any[]): Set<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Set()
  }

  jsEchoOptionalStringValue(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  jsEchoOptionalStringStruct(...args: any[]): { valueOpt2: null } {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return {
      valueOpt2: null,
    }
  }

  jsEchoFastParseableStructValue(...args: any[]): {
    intValue: number
    uintValue: number
    int64Value: string
    uint64Value: string
    strValue: string
    doubleValue: number
    boolValue: boolean
    guidValue: string
    structValue: { value: number }
    arrayIntValue: number[]
    arrayStringValue: string[]
    arrayBoolValue: boolean[]
    jsValue: undefined
  } {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return {
      intValue: 0,
      uintValue: 0,
      int64Value: '0',
      uint64Value: '0',
      strValue: '',
      doubleValue: 0,
      boolValue: false,
      guidValue: '-1:-1',
      structValue: {
        value: 0,
      },
      arrayIntValue: [],
      arrayStringValue: [],
      arrayBoolValue: [],
      jsValue: undefined,
    }
  }

  jsEchoNonFastParseableStructValue(...args: any[]): {
    jsonValue: string
    intValue: number
    uintValue: number
    int64Value: string
    uint64Value: string
    strValue: string
    doubleValue: number
    boolValue: boolean
    guidValue: string
    structValue: { value: number }
    arrayIntValue: number[]
    arrayStringValue: string[]
    arrayBoolValue: boolean[]
    jsValue: undefined
  } {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return {
      jsonValue: '',
      intValue: 0,
      uintValue: 0,
      int64Value: '0',
      uint64Value: '0',
      strValue: '',
      doubleValue: 0,
      boolValue: false,
      guidValue: '-1:-1',
      structValue: {
        value: 0,
      },
      arrayIntValue: [],
      arrayStringValue: [],
      arrayBoolValue: [],
      jsValue: undefined,
    }
  }

  jsEchoCallbackValue(...args: any[]): () => void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return () => { }
  }

  getObservableCounter(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  getObservableArray(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  jsValueTestsDone(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
// CanvasSearchBindings
export class CanvasSearchBindings implements SearchService {
  shouldThrow: boolean

  rerunSearch(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  getTextMatches(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  rebuildIndex(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  logIndex(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  setResultInfo(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  setFocusAndNavigate(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  setCategoryCounts(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  updateCategoryCounts(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  showReplace(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  showMissingFontBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  detectTextTransform(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  applyTextTransform(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  getAnnotationTextContent(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
// NodeChatMessageHelper
export class NodeChatMessageHelper implements CodeSnapshotManager {
  shouldThrow: boolean

  clearCodeSnapshotsFromMessages(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
// CommentManagerImpl
export class CommentManagerImpl implements CommentManager {
  shouldThrow: boolean

  handleMouseDown(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  handleMouseMove(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  handleMouseUp(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  createNewCommentAtPosition(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
// CooperTsBindings
export class CooperTsBindings implements TemplatePicker {
  shouldThrow: boolean

  openTemplatePicker(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

// DSAWebBindings
export class DSAWebBindings {
  shouldThrow: boolean

  /**
   * Tracks style-related actions
   * Original name: DSAWebBindings.trackStyleAction
   */
  trackStyleAction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tracks variable-related actions
   * Original name: DSAWebBindings.trackVariableAction
   */
  trackVariableAction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tracks component-related actions
   * Original name: DSAWebBindings.trackComponentAction
   */
  trackComponentAction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

// EmojiTsBindings
export class EmojiTsBindings {
  shouldThrow: boolean

  /**
   * Converts an emoji name to its string representation
   * Original name: EmojiTsBindings.convertEmojiNameToString
   */
  convertEmojiNameToString(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Sets the emoji typeahead query
   * Original name: EmojiTsBindings.setEmojiTypeaheadQuery
   */
  setEmojiTypeaheadQuery(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Clears the emoji typeahead query
   * Original name: EmojiTsBindings.clearEmojiTypeaheadQuery
   */
  clearEmojiTypeaheadQuery(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if emoji typeahead results are being shown
   * Original name: EmojiTsBindings.isShowingEmojiTypeaheadResults
   */
  isShowingEmojiTypeaheadResults(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Sets the emoji typeahead image set
   * Original name: EmojiTsBindings.setEmojiTypeaheadImageSet
   */
  setEmojiTypeaheadImageSet(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets the emoji typeahead target rectangle
   * Original name: EmojiTsBindings.setEmojiTypeaheadTargetRect
   */
  setEmojiTypeaheadTargetRect(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

// EmojiWheelBindings
export class EmojiWheelBindings {
  shouldThrow: boolean

  /**
   * Starts a chat
   * Original name: EmojiWheelBindings.startChat
   */
  startChat(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Closes the chat wheel
   * Original name: EmojiWheelBindings.closeWheel
   */
  closeWheel(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles shortcut press events
   * Original name: EmojiWheelBindings.handleShortcutPress
   */
  handleShortcutPress(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles shortcut release events
   * Original name: EmojiWheelBindings.handleShortcutRelease
   */
  handleShortcutRelease(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Main application handler for various UI and system operations
 * Original name: MainAppHandler
 */
export class MainAppHandler {
  shouldThrow: boolean

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }

  // === Editor and Document Management ===

  /**
   * Requests the editor type
   * Original name: MainAppHandler.requestEditorType
   */
  requestEditorType(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets the current file name
   * Original name: MainAppHandler.getCurrentFileName
   */
  getCurrentFileName(...args: any[]): any {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Checks if the document is loaded
   * Original name: MainAppHandler.documentIsLoaded
   */
  documentIsLoaded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if fullscreen is ready
   * Original name: MainAppHandler.fullscreenIsReady
   */
  fullscreenIsReady(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Navigates back to files
   * Original name: MainAppHandler.backToFiles
   */
  backToFiles(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets the file version
   * Original name: MainAppHandler.setFileVersion
   */
  setFileVersion(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Device and Viewport Management ===

  /**
   * Gets device info for a given size
   * Original name: MainAppHandler.getDeviceInfoForSize
   */
  getDeviceInfoForSize(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Checks if a preset device supports touch
   * Original name: MainAppHandler.presetDeviceSupportsTouch
   */
  presetDeviceSupportsTouch(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if a size matches a frame preset
   * Original name: MainAppHandler.sizeMatchesFramePreset
   */
  sizeMatchesFramePreset(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Gets the frame preset for a given size
   * Original name: MainAppHandler.getFramePresetForSize
   */
  getFramePresetForSize(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Updates viewport info
   * Original name: MainAppHandler.updateViewportInfo
   */
  updateViewportInfo(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === User and Session Management ===

  /**
   * Checks if a user is present
   * Original name: MainAppHandler.isUserPresent
   */
  isUserPresent(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Gets user locale
   * Original name: MainAppHandler.getUserLocale
   */
  getUserLocale(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets user name
   * Original name: MainAppHandler.getUserName
   */
  getUserName(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  // === Settings and Preferences ===

  /**
   * Opens settings
   * Original name: MainAppHandler.openSettings
   */
  openSettings(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens preferences modal
   * Original name: MainAppHandler.openPreferencesModal
   */
  openPreferencesModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens font settings
   * Original name: MainAppHandler.openFontSettings
   */
  openFontSettings(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if the font list is loaded
   * Original name: MainAppHandler.isFontListLoaded
   */
  isFontListLoaded(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Executes after fonts are loaded
   * Original name: MainAppHandler.afterFontsLoaded
   */
  afterFontsLoaded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets keyboard layout
   * Original name: MainAppHandler.getKeyboardLayout
   */
  getKeyboardLayout(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Sets keyboard layout preference
   * Original name: MainAppHandler.setKeyboardLayoutPreference
   */
  setKeyboardLayoutPreference(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Saves use numbers for opacity preference
   * Original name: MainAppHandler.saveUseNumbersForOpacityPreference
   */
  saveUseNumbersForOpacityPreference(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Export and Import Functionality ===

  /**
   * Opens export picker
   * Original name: MainAppHandler.openExportPicker
   */
  openExportPicker(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens export settings picker
   * Original name: MainAppHandler.openExportSettingsPicker
   */
  openExportSettingsPicker(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens PDF export settings modal
   * Original name: MainAppHandler.openPdfExportSettingsModal
   */
  openPdfExportSettingsModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens Cooper export modal
   * Original name: MainAppHandler.openCooperExportModal
   */
  openCooperExportModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles attempted sketch file drop
   * Original name: MainAppHandler.attemptedSketchFileDrop
   */
  attemptedSketchFileDrop(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Clipboard Operations ===

  /**
   * Gets clipboard data
   * Original name: MainAppHandler.getClipboardData
   */
  getClipboardData(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Checks if clipboard API can be used
   * Original name: MainAppHandler.canUseClipboardAPI
   */
  canUseClipboardAPI(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Reads clipboard data
   * Original name: MainAppHandler.readClipboardData
   */
  readClipboardData(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Reads files from clipboard
   * Original name: MainAppHandler.readFilesFromClipboard
   */
  readFilesFromClipboard(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Checks if clipboard has unsanitized PNG
   * Original name: MainAppHandler.clipboardHasUnsanitizedPng
   */
  clipboardHasUnsanitizedPng(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Decodes packed HTML
   * Original name: MainAppHandler.decodePackedHTML
   */
  decodePackedHTML(...args: any[]): Uint8Array {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Uint8Array()
  }

  /**
   * Decodes metadata from HTML
   * Original name: MainAppHandler.decodeMetadataFromHTML
   */
  decodeMetadataFromHTML(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Detects spreadsheet data in HTML
   * Original name: MainAppHandler.detectSpreadsheetDataInHTML
   */
  detectSpreadsheetDataInHTML(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Gets HTML string
   * Original name: MainAppHandler.getHtmlString
   */
  getHtmlString(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Writes to clipboard
   * Original name: MainAppHandler.writeToClipboard
   */
  writeToClipboard(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Writes data to clipboard
   * Original name: MainAppHandler.writeDataToClipboard
   */
  writeDataToClipboard(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Sends serialized clipboard data to S3
   * Original name: MainAppHandler.sendSerializedClipboardDataToS3
   */
  sendSerializedClipboardDataToS3(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets serialized clipboard data from S3
   * Original name: MainAppHandler.getSerializedClipboardDataFromS3
   */
  getSerializedClipboardDataFromS3(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  // === UI Elements and Modals ===

  /**
   * Opens shortcuts
   * Original name: MainAppHandler.openShortcuts
   */
  openShortcuts(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Toggles browse all resources modal
   * Original name: MainAppHandler.toggleBrowseAllResourcesModal
   */
  toggleBrowseAllResourcesModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows nudge amount picker
   * Original name: MainAppHandler.showNudgeAmountPicker
   */
  showNudgeAmountPicker(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens FPL debug
   * Original name: MainAppHandler.openFplDebug
   */
  openFplDebug(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Hides picker
   * Original name: MainAppHandler.hidePicker
   */
  hidePicker(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Finds inspiration
   * Original name: MainAppHandler.findInspiration
   */
  findInspiration(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Finds codebase suggestions
   * Original name: MainAppHandler.findCodebaseSuggestions
   */
  findCodebaseSuggestions(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens quick actions assets tab
   * Original name: MainAppHandler.openQuickActionsAssetsTab
   */
  openQuickActionsAssetsTab(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Inspects fragment
   * Original name: MainAppHandler.inspectFragment
   */
  inspectFragment(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Edit Scope Management ===

  /**
   * Handles signed out edit attempt
   * Original name: MainAppHandler.handleSignedOutEditAttempt
   */
  handleSignedOutEditAttempt(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Save and Changes Management ===

  /**
   * Checks if there are unsaved changes
   * Original name: MainAppHandler.hasUnsavedChanges
   */
  hasUnsavedChanges(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if unsaved changes UI should be suppressed
   * Original name: MainAppHandler.shouldSuppressUnsavedChangesUI
   */
  shouldSuppressUnsavedChangesUI(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Creates savepoint
   * Original name: MainAppHandler.createSavepoint
   */
  createSavepoint(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Shows savepoint modal
   * Original name: MainAppHandler.showSavepointModal
   */
  showSavepointModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Visual Bell Notifications ===

  /**
   * Shows autosave visual bell
   * Original name: MainAppHandler.showAutosaveVisualBell
   */
  showAutosaveVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows return to instance visual bell
   * Original name: MainAppHandler.showReturnToInstanceVisualBell
   */
  showReturnToInstanceVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows return to variant visual bell
   * Original name: MainAppHandler.showReturnToVariantVisualBell
   */
  showReturnToVariantVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows paste widgets as sublayers visual bell
   * Original name: MainAppHandler.showPasteWidgetsAsSublayersVisualBell
   */
  showPasteWidgetsAsSublayersVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows AI content fill suggested visual bell
   * Original name: MainAppHandler.showAiContentFillSuggestedVisualBell
   */
  showAiContentFillSuggestedVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Clears AI content fill suggested visual bell
   * Original name: MainAppHandler.clearAiContentFillSuggestedVisualBell
   */
  clearAiContentFillSuggestedVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows magic link suggested visual bell
   * Original name: MainAppHandler.showMagicLinkSuggestedVisualBell
   */
  showMagicLinkSuggestedVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows upscale image suggested visual bell
   * Original name: MainAppHandler.showUpscaleImageSuggestedVisualBell
   */
  showUpscaleImageSuggestedVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows push overrides visual bell
   * Original name: MainAppHandler.showPushOverridesVisualBell
   */
  showPushOverridesVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Context Menus ===

  /**
   * Shows canvas context menu
   * Original name: MainAppHandler.showCanvasContextMenu
   */
  showCanvasContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows select layer context menu
   * Original name: MainAppHandler.showSelectLayerContextMenu
   */
  showSelectLayerContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows text edit mode context menu
   * Original name: MainAppHandler.showTextEditModeContextMenu
   */
  showTextEditModeContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows ruler guide context menu
   * Original name: MainAppHandler.showRulerGuideContextMenu
   */
  showRulerGuideContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows selection context menu
   * Original name: MainAppHandler.showSelectionContextMenu
   */
  showSelectionContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows left panel tab
   * Original name: MainAppHandler.showLeftPanelTab
   */
  showLeftPanelTab(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Modal and Library Management ===

  /**
   * Toggles team library modal
   * Original name: MainAppHandler.toggleTeamLibraryModal
   */
  toggleTeamLibraryModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Toggles component insert modal
   * Original name: MainAppHandler.toggleComponentInsertModal
   */
  toggleComponentInsertModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Toggles variables modal
   * Original name: MainAppHandler.toggleVariablesModal
   */
  toggleVariablesModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Publishing ===

  /**
   * Shows publish dialog
   * Original name: MainAppHandler.showPublishDialog
   */
  showPublishDialog(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows template publish modal
   * Original name: MainAppHandler.showTemplatePublishModal
   */
  showTemplatePublishModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Forces publish state group
   * Original name: MainAppHandler.forcePublishStateGroup
   */
  forcePublishStateGroup(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Mobile App Integration ===

  /**
   * Pushes to mobile app
   * Original name: MainAppHandler.mobileAppPush
   */
  mobileAppPush(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Exports file in mobile app
   * Original name: MainAppHandler.mobileAppExportFile
   */
  mobileAppExportFile(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets mobile cut enabled
   * Original name: MainAppHandler.setMobileCutEnabled
   */
  setMobileCutEnabled(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets mobile copy enabled
   * Original name: MainAppHandler.setMobileCopyEnabled
   */
  setMobileCopyEnabled(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets mobile paste enabled
   * Original name: MainAppHandler.setMobilePasteEnabled
   */
  setMobilePasteEnabled(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows context menu in mobile app
   * Original name: MainAppHandler.mobileAppShowContextMenu
   */
  mobileAppShowContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Localization and Internationalization ===

  /**
   * Gets natural style key
   * Original name: MainAppHandler.getNaturalStyleKey
   */
  getNaturalStyleKey(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets localized string
   * Original name: MainAppHandler.getLocalizedString
   */
  getLocalizedString(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Shows mobile native toast localized
   * Original name: MainAppHandler.showMobileNativeToastLocalized
   */
  showMobileNativeToastLocalized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Memory and Performance ===

  /**
   * Closes manage memory modal
   * Original name: MainAppHandler.closeManageMemoryModal
   */
  closeManageMemoryModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Toggles PerfHUD visibility
   * Original name: MainAppHandler.togglePerfHUDVisibility
   */
  togglePerfHUDVisibility(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Toggles fake MP activity
   * Original name: MainAppHandler.toggleFakeMPActivity
   */
  toggleFakeMPActivity(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Toggles TSMER config
   * Original name: MainAppHandler.toggleTSMERConfig
   */
  toggleTSMERConfig(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Renaming and Editing ===

  /**
   * Starts renaming nodes
   * Original name: MainAppHandler.startRenamingNodes
   */
  startRenamingNodes(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Starts renaming page
   * Original name: MainAppHandler.startRenamingPage
   */
  startRenamingPage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Starts renaming pages
   * Original name: MainAppHandler.startRenamingPages
   */
  startRenamingPages(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Component Management ===

  /**
   * Inserts component or shows error (deprecated)
   * Original name: MainAppHandler.insertComponentOrShowError__DEPRECATED
   */
  insertComponentOrShowError__DEPRECATED(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Fetches component buffers
   * Original name: MainAppHandler.fetchComponentBuffers
   */
  fetchComponentBuffers(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Fetches component buffer for SEV repair
   * Original name: MainAppHandler.fetchComponentBufferForSevRepair
   */
  fetchComponentBufferForSevRepair(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Gets latest published version hash for component
   * Original name: MainAppHandler.getLatestPublishedVersionHashForComponent
   */
  getLatestPublishedVersionHashForComponent(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets latest published version for state group
   * Original name: MainAppHandler.getLatestPublishedVersionForStateGroup
   */
  getLatestPublishedVersionForStateGroup(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Links to component
   * Original name: MainAppHandler.linkToComponent
   */
  linkToComponent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Variable Management ===

  /**
   * Fetches variable set buffers
   * Original name: MainAppHandler.fetchVariableSetBuffers
   */
  fetchVariableSetBuffers(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Gets variable set number of modes allowed
   * Original name: MainAppHandler.getVariableSetNumberOfModesAllowed
   */
  getVariableSetNumberOfModesAllowed(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Gets default state key for state group
   * Original name: MainAppHandler.getDefaultStateKeyForStateGroup
   */
  getDefaultStateKeyForStateGroup(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  // === Image and Media Handling ===

  /**
   * Starts loading dropped image
   * Original name: MainAppHandler.startLoadingDroppedImage
   */
  startLoadingDroppedImage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Finishes loading dropped image
   * Original name: MainAppHandler.finishLoadingDroppedImage
   */
  finishLoadingDroppedImage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows image scaled down warning
   * Original name: MainAppHandler.showImageScaledDownWarning
   */
  showImageScaledDownWarning(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows GIF converted and scaled down warning
   * Original name: MainAppHandler.showGIFConvertedAndScaledDownWarning
   */
  showGIFConvertedAndScaledDownWarning(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Removes image background
   * Original name: MainAppHandler.removeImageBackground
   */
  removeImageBackground(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Upscales image
   * Original name: MainAppHandler.upscaleImage
   */
  upscaleImage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === AI and Automation ===

  /**
   * Auto renames layers
   * Original name: MainAppHandler.autoRenameLayers
   */
  autoRenameLayers(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Auto renames layers for dev handoff
   * Original name: MainAppHandler.autoRenameLayersDevHandoff
   */
  autoRenameLayersDevHandoff(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Regenerates text
   * Original name: MainAppHandler.regenerateText
   */
  regenerateText(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if AI is disabled
   * Original name: MainAppHandler.isAiDisabled
   */
  isAiDisabled(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if AI is disabled in FigJam
   * Original name: MainAppHandler.isAiDisabledFigJam
   */
  isAiDisabledFigJam(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if org user is gated for Llama
   * Original name: MainAppHandler.isOrgUserGatedForLlama
   */
  isOrgUserGatedForLlama(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if in AI experiment or grantlist
   * Original name: MainAppHandler.isInAiExperimentOrGrantlist
   */
  isInAiExperimentOrGrantlist(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if AI rename layers permission is available
   * Original name: MainAppHandler.hasAiRenameLayersPermission
   */
  hasAiRenameLayersPermission(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Navigation and URLs ===

  /**
   * Validates and parses URL
   * Original name: MainAppHandler.validateAndParseURL
   */
  validateAndParseURL(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Navigates to URL
   * Original name: MainAppHandler.navigateToURL
   */
  navigateToURL(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Copies link to page
   * Original name: MainAppHandler.copyLinkToPage
   */
  copyLinkToPage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Generates link to node
   * Original name: MainAppHandler.generateLinkToNode
   */
  generateLinkToNode(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Generates link to CMS item page
   * Original name: MainAppHandler.generateLinkToCmsItemPage
   */
  generateLinkToCmsItemPage(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Generates link to remote node
   * Original name: MainAppHandler.generateLinkToRemoteNode
   */
  generateLinkToRemoteNode(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets local GUID from URL
   * Original name: MainAppHandler.getLocalGUIDFromUrl
   */
  getLocalGUIDFromUrl(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets local version ID from URL
   * Original name: MainAppHandler.getLocalVersionIdFromUrl
   */
  getLocalVersionIdFromUrl(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  // === Tool and Style Management ===

  /**
   * Syncs pencil style
   * Original name: MainAppHandler.syncPencilStyle
   */
  syncPencilStyle(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Syncs brush style
   * Original name: MainAppHandler.syncBrushStyle
   */
  syncBrushStyle(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Syncs pen style
   * Original name: MainAppHandler.syncPenStyle
   */
  syncPenStyle(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Syncs highlighter style
   * Original name: MainAppHandler.syncHighlighterStyle
   */
  syncHighlighterStyle(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Syncs tool styles
   * Original name: MainAppHandler.syncToolStyles
   */
  syncToolStyles(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Syncs current tool set source
   * Original name: MainAppHandler.syncCurrentToolSetSource
   */
  syncCurrentToolSetSource(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets default ON OT features
   * Original name: MainAppHandler.getDefaultOnOTFeatures
   */
  getDefaultOnOTFeatures(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  // === Event Handling ===

  /**
   * Handles keyboard will show
   * Original name: MainAppHandler.keyboardWillShow
   */
  keyboardWillShow(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles keyboard will show with height
   * Original name: MainAppHandler.keyboardWillShowWithHeight
   */
  keyboardWillShowWithHeight(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles action
   * Original name: MainAppHandler.handleAction
   */
  handleAction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles agenda changed
   * Original name: MainAppHandler.onAgendaChanged
   */
  onAgendaChanged(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles FigJam starter kit action
   * Original name: MainAppHandler.onFigjamStarterKitAction
   */
  onFigjamStarterKitAction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node position changed
   * Original name: MainAppHandler.onNodePositionChanged
   */
  onNodePositionChanged(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles section preset picker created
   * Original name: MainAppHandler.onSectionPresetPickerCreated
   */
  onSectionPresetPickerCreated(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles zoom action triggered to set onboarding flag
   * Original name: MainAppHandler.handleZoomActionTriggeredToSetOnboardingFlag
   */
  handleZoomActionTriggeredToSetOnboardingFlag(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles pan action triggered to set onboarding flag
   * Original name: MainAppHandler.handlePanActionTriggeredToSetOnboardingFlag
   */
  handlePanActionTriggeredToSetOnboardingFlag(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node count reached for move draft
   * Original name: MainAppHandler.handleNodeCountReachedForMoveDraft
   */
  handleNodeCountReachedForMoveDraft(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles loaded compare changes
   * Original name: MainAppHandler.loadedCompareChanges
   */
  loadedCompareChanges(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles view only jiggle
   * Original name: MainAppHandler.onViewOnlyJiggle
   */
  onViewOnlyJiggle(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles upsell libraries consecutive paste
   * Original name: MainAppHandler.upsellLibrariesHandleConsecutivePaste
   */
  upsellLibrariesHandleConsecutivePaste(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles playground node change
   * Original name: MainAppHandler.onPlaygroundNodeChange
   */
  onPlaygroundNodeChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles tiles rendered
   * Original name: MainAppHandler.onTilesRendered
   */
  onTilesRendered(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles create table
   * Original name: MainAppHandler.onCreateTable
   */
  onCreateTable(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles edit table text
   * Original name: MainAppHandler.onEditTableText
   */
  onEditTableText(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node drag start
   * Original name: MainAppHandler.onNodeDragStart
   */
  onNodeDragStart(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node drag end
   * Original name: MainAppHandler.onNodeDragEnd
   */
  onNodeDragEnd(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles create sticky
   * Original name: MainAppHandler.onCreateSticky
   */
  onCreateSticky(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles different section clicked
   * Original name: MainAppHandler.onDifferentSectionClicked
   */
  onDifferentSectionClicked(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles connect diagram shape with connector
   * Original name: MainAppHandler.onConnectDiagramShapeWithConnector
   */
  onConnectDiagramShapeWithConnector(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles tile renderer changed
   * Original name: MainAppHandler.onTileRendererChanged
   */
  onTileRendererChanged(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles after page change
   * Original name: MainAppHandler.afterPageChange
   */
  afterPageChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles after compute viewport settings
   * Original name: MainAppHandler.afterComputeViewportSettings
   */
  afterComputeViewportSettings(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles after query completed
   * Original name: MainAppHandler.afterQueryCompleted
   */
  afterQueryCompleted(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles direct export completed
   * Original name: MainAppHandler.onDirectExportCompleted
   */
  onDirectExportCompleted(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Feature Flags and Labs ===

  /**
   * Gets lab value
   * Original name: MainAppHandler.getLabValue
   */
  getLabValue(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Analytics and Logging ===

  /**
   * Logs enter mode
   * Original name: MainAppHandler.logEnterMode
   */
  logEnterMode(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Logs fullscreen action to Datadog RUM
   * Original name: MainAppHandler.logFullscreenActionToDatadogRum
   */
  logFullscreenActionToDatadogRum(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sends active stack region analytics
   * Original name: MainAppHandler.sendActiveStackRegionAnalytics
   */
  sendActiveStackRegionAnalytics(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Math and Utilities ===

  /**
   * Evaluates math expression
   * Original name: MainAppHandler.evaluateMathExpression
   */
  evaluateMathExpression(...args: any[]): any {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Formats date time
   * Original name: MainAppHandler.formatDateTime
   */
  formatDateTime(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  // === Whiteboard ===

  /**
   * Adds whiteboard tool to recents
   * Original name: MainAppHandler.addWhiteboardToolToRecents
   */
  addWhiteboardToolToRecents(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Adds whiteboard diagramming shape to recents
   * Original name: MainAppHandler.addWhiteboardDiagrammingShapeToRecents
   */
  addWhiteboardDiagrammingShapeToRecents(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Query Management ===

  /**
   * Gets next query request ID
   * Original name: MainAppHandler.getNextQueryRequestId
   */
  getNextQueryRequestId(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Rejects all scene graph queries
   * Original name: MainAppHandler.rejectAllSceneGraphQueries
   */
  rejectAllSceneGraphQueries(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Slide Management ===

  /**
   * Creates slide after focused slide
   * Original name: MainAppHandler.createSlideAfterFocusedSlide
   */
  createSlideAfterFocusedSlide(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return '-1:-1'
  }

  // === Presentation and Prototyping ===

  /**
   * Opens make prototype modal
   * Original name: MainAppHandler.openMakePrototypeModal
   */
  openMakePrototypeModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens starting point flow in prototype viewer
   * Original name: MainAppHandler.openStartingPointFlowInPrototypeViewer
   */
  openStartingPointFlowInPrototypeViewer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Focuses prototype starting point panel to edit name
   * Original name: MainAppHandler.focusPrototypeStartingPointPanelToEditName
   */
  focusPrototypeStartingPointPanelToEditName(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Timer and Music ===

  /**
   * Sets timer
   * Original name: MainAppHandler.setTimer
   */
  setTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens timer modal
   * Original name: MainAppHandler.openTimerModal
   */
  openTimerModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Resends timer
   * Original name: MainAppHandler.resendTimer
   */
  resendTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets music
   * Original name: MainAppHandler.setMusic
   */
  setMusic(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Resends music
   * Original name: MainAppHandler.resendMusic
   */
  resendMusic(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Voting and Collaboration ===

  /**
   * Activates voting stamp tool
   * Original name: MainAppHandler.activateVotingStampTool
   */
  activateVotingStampTool(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets active agenda item ID
   * Original name: MainAppHandler.setActiveAgendaItemId
   */
  setActiveAgendaItemId(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Data Parsing ===

  /**
   * Escapes and saves CSV data
   * Original name: MainAppHandler.escapeAndSaveCSVData
   */
  escapeAndSaveCSVData(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Parses CSV string and creates nodes
   * Original name: MainAppHandler.parseCsvStringAndCreateNodes
   */
  parseCsvStringAndCreateNodes(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Parses HTML string and creates nodes
   * Original name: MainAppHandler.parseHtmlStringAndCreateNodes
   */
  parseHtmlStringAndCreateNodes(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Parses HTML string and triggers smart paste
   * Original name: MainAppHandler.parseHtmlStringAndTriggerSmartPaste
   */
  parseHtmlStringAndTriggerSmartPaste(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Parses HTML string into line directionalities
   * Original name: MainAppHandler.parseHTMLStringIntoLineDirectionalities
   */
  parseHTMLStringIntoLineDirectionalities(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Embed and Widget Management ===

  /**
   * Generates embed
   * Original name: MainAppHandler.generateEmbed
   */
  generateEmbed(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Generates widget from URL
   * Original name: MainAppHandler.generateWidgetFromURL
   */
  generateWidgetFromURL(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Views widget details
   * Original name: MainAppHandler.viewWidgetDetails
   */
  viewWidgetDetails(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Desktop App Integration ===

  /**
   * Queues file for writing in desktop app
   * Original name: MainAppHandler.desktopAppQueueFileForWriting
   */
  desktopAppQueueFileForWriting(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Writes files in desktop app
   * Original name: MainAppHandler.desktopAppWriteFiles
   */
  desktopAppWriteFiles(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Code Generation ===

  /**
   * Enables codegen MCP server
   * Original name: MainAppHandler.enableCodegenMcpServer
   */
  enableCodegenMcpServer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Designs to code files
   * Original name: MainAppHandler.designToCodeFiles
   */
  designToCodeFiles(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Bulk exports designs to React
   * Original name: MainAppHandler.bulkExportDesignsToReact
   */
  bulkExportDesignsToReact(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Help and Support ===

  /**
   * Opens help
   * Original name: MainAppHandler.openHelp
   */
  openHelp(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens support forum
   * Original name: MainAppHandler.openSupportForum
   */
  openSupportForum(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Opens tutorials
   * Original name: MainAppHandler.openTutorials
   */
  openTutorials(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Plugin Management ===

  /**
   * Runs last plugin
   * Original name: MainAppHandler.runLastPlugin
   */
  runLastPlugin(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Page Management ===

  /**
   * Starts move pages job
   * Original name: MainAppHandler.startMovePagesJob
   */
  startMovePagesJob(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Missing Font Handling ===

  /**
   * Shows missing font dialog
   * Original name: MainAppHandler.showMissingFontDialog
   */
  showMissingFontDialog(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Hides missing font dialog
   * Original name: MainAppHandler.hideMissingFontDialog
   */
  hideMissingFontDialog(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Paste and Loading Indicators ===

  /**
   * Shows paste loading indicator and paste
   * Original name: MainAppHandler.showPasteLoadingIndicatorAndPaste
   */
  showPasteLoadingIndicatorAndPaste(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Library Management ===

  /**
   * Shows prompt to move library items
   * Original name: MainAppHandler.showPromptToMoveLibraryItems
   */
  showPromptToMoveLibraryItems(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Requests open external source file library key
   * Original name: MainAppHandler.requestOpenExternalSourceFileLibraryKey
   */
  requestOpenExternalSourceFileLibraryKey(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Hyperlink and Mention Management ===

  /**
   * Sets hyperlink popup
   * Original name: MainAppHandler.setHyperlinkPopup
   */
  setHyperlinkPopup(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates hyperlink popup position
   * Original name: MainAppHandler.updateHyperlinkPopupPosition
   */
  updateHyperlinkPopupPosition(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles user click on hyperlink
   * Original name: MainAppHandler.handleUserClickOnHyperlink
   */
  handleUserClickOnHyperlink(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets canvas mention popup
   * Original name: MainAppHandler.setCanvasMentionPopup
   */
  setCanvasMentionPopup(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates canvas mention popup position
   * Original name: MainAppHandler.updateCanvasMentionPopupPosition
   */
  updateCanvasMentionPopupPosition(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Menu Management ===

  /**
   * Toggles menu
   * Original name: MainAppHandler.toggleMenu
   */
  toggleMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Copy and Export Restrictions ===

  /**
   * Checks if copy export is restricted
   * Original name: MainAppHandler.isCopyExportRestricted
   */
  isCopyExportRestricted(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Workshop Mode ===

  /**
   * Checks if in workshop mode
   * Original name: MainAppHandler.isInWorkshopMode
   */
  isInWorkshopMode(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Sprig Integration ===

  /**
   * Tracks interactive slide element inserted for Sprig
   * Original name: MainAppHandler.trackInteractiveSlideElementInsertedForSprig
   */
  trackInteractiveSlideElementInsertedForSprig(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === History Management ===

  /**
   * Toggles history mode
   * Original name: MainAppHandler.toggleHistoryMode
   */
  toggleHistoryMode(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows view changes notification
   * Original name: MainAppHandler.showViewChangesNotification
   */
  showViewChangesNotification(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Fragment Search ===

  /**
   * Shows fragment search suggestion
   * Original name: MainAppHandler.showFragmentSearchSuggestion
   */
  showFragmentSearchSuggestion(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Keyboard Shortcuts ===

  /**
   * Records used keyboard shortcut
   * Original name: MainAppHandler.usedKeyboardShortcut
   */
  usedKeyboardShortcut(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Style Management ===

  /**
   * Updates selected style properties
   * Original name: MainAppHandler.updateSelectedStyleProperties
   */
  updateSelectedStyleProperties(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates selected style thumbnail
   * Original name: MainAppHandler.updateSelectedStyleThumbnail
   */
  updateSelectedStyleThumbnail(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates style thumbnail
   * Original name: MainAppHandler.updateStyleThumbnail
   */
  updateStyleThumbnail(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Browser Alerts ===

  /**
   * Shows browser alert
   * Original name: MainAppHandler.showBrowserAlert
   */
  showBrowserAlert(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Haptics ===

  /**
   * Triggers haptics
   * Original name: MainAppHandler.triggerHaptics
   */
  triggerHaptics(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Sentry Integration ===

  /**
   * Sets Sentry tag
   * Original name: MainAppHandler.setSentryTag
   */
  setSentryTag(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === User Flags ===

  /**
   * Sets user flag
   * Original name: MainAppHandler.setUserFlag
   */
  setUserFlag(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === View Only Mode ===

  /**
   * Checks if view only should jiggle
   * Original name: MainAppHandler.shouldViewOnlyJiggle
   */
  shouldViewOnlyJiggle(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Emoji Wheel ===

  /**
   * Checks if emoji wheel is open
   * Original name: MainAppHandler.getIsEmojiWheelOpen
   */
  getIsEmojiWheelOpen(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Video Management ===

  /**
   * Sets video should autoplay
   * Original name: MainAppHandler.setVideoShouldAutoplay
   */
  setVideoShouldAutoplay(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if video can be uploaded and edited
   * Original name: MainAppHandler.canUploadAndEditVideo
   */
  canUploadAndEditVideo(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Magic Link ===

  /**
   * Checks if magic link is done
   * Original name: MainAppHandler.isMagicLinkDone
   */
  isMagicLinkDone(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if magic link done toast is showing
   * Original name: MainAppHandler.isMagicLinkDoneToastShowing
   */
  isMagicLinkDoneToastShowing(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Query Management ===

  /**
   * Selects published asset GUIDs
   * Original name: MainAppHandler.selectPublishedAssetGuids
   */
  selectPublishedAssetGuids(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  // === Local Styles ===

  /**
   * Selects local styles
   * Original name: MainAppHandler.selectLocalStyles
   */
  selectLocalStyles(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === FigJam Starter Kit ===

  /**
   * Sets FigJam starter kit bounding box
   * Original name: MainAppHandler.setFigjamStarterKitBoundingBox
   */
  setFigjamStarterKitBoundingBox(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Clipboard Write Support ===

  /**
   * Checks if navigator clipboard write is supported
   * Original name: MainAppHandler.isNavigatorClipboardWriteSupported
   */
  isNavigatorClipboardWriteSupported(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Send Events ===

  /**
   * Sends event to web event listener
   * Original name: MainAppHandler.sendEventToWebEventListener
   */
  sendEventToWebEventListener(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Start Export Action ===

  /**
   * Starts export action
   * Original name: MainAppHandler.startExportAction
   */
  startExportAction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Trigger From Fullscreen ===

  /**
   * Triggers from fullscreen
   * Original name: MainAppHandler.triggerFromFullscreen
   */
  triggerFromFullscreen(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Visual Bell - Not Localized ===

  /**
   * Shows visual bell (not localized)
   * Original name: MainAppHandler.NOT_LOCALIZED_showVisualBell
   */
  NOT_LOCALIZED_showVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell inf (not localized)
   * Original name: MainAppHandler.NOT_LOCALIZED_showVisualBellInf
   */
  NOT_LOCALIZED_showVisualBellInf(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows mobile native toast (not localized)
   * Original name: MainAppHandler.NOT_LOCALIZED_showMobileNativeToast
   */
  NOT_LOCALIZED_showMobileNativeToast(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Visual Bell - Multi Edit ===

  /**
   * Shows visual bell for multi edit
   * Original name: MainAppHandler.showVisualBellForMultiEdit
   */
  showVisualBellForMultiEdit(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell for multi edit glue error
   * Original name: MainAppHandler.showVisualBellForMultiEditGlueError
   */
  showVisualBellForMultiEditGlueError(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Visual Bell - With Features ===

  /**
   * Shows visual bell with undo
   * Original name: MainAppHandler.showVisualBellWithUndo
   */
  showVisualBellWithUndo(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell with nodes localized
   * Original name: MainAppHandler.showVisualBellWithNodesLocalized
   */
  showVisualBellWithNodesLocalized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell localized
   * Original name: MainAppHandler.showVisualBellLocalized
   */
  showVisualBellLocalized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell localized inf
   * Original name: MainAppHandler.showVisualBellLocalizedInf
   */
  showVisualBellLocalizedInf(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell with reload button localized
   * Original name: MainAppHandler.showVisualBellWithReloadButtonLocalized
   */
  showVisualBellWithReloadButtonLocalized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell with URL button localized
   * Original name: MainAppHandler.showVisualBellWithUrlButtonLocalized
   */
  showVisualBellWithUrlButtonLocalized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Visual Bell - Ephemeral ===

  /**
   * Dismisses ephemeral visual bells
   * Original name: MainAppHandler.dismissEphemeralVisualBells
   */
  dismissEphemeralVisualBells(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell with delay localized
   * Original name: MainAppHandler.showVisualBellWithDelayLocalized
   */
  showVisualBellWithDelayLocalized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows visual bell with close button localized
   * Original name: MainAppHandler.showVisualBellWithCloseButtonLocalized
   */
  showVisualBellWithCloseButtonLocalized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Clears visual bell type
   * Original name: MainAppHandler.clearVisualBellType
   */
  clearVisualBellType(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Mobile Media Loading ===

  /**
   * Dismisses mobile media loading toast
   * Original name: MainAppHandler.dismissMobileMediaLoadingToast
   */
  dismissMobileMediaLoadingToast(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Moved Single Node ===

  /**
   * Shows moved single node visual bell
   * Original name: MainAppHandler.movedSingleNodeVisualBell
   */
  movedSingleNodeVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === FLAPP Generation ===

  /**
   * Generates FLAPP from pasted text
   * Original name: MainAppHandler.generateFlappFromPastedText
   */
  generateFlappFromPastedText(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  // === Sites View ===

  /**
   * Sets sites view file
   * Original name: MainAppHandler.setSitesViewFile
   */
  setSitesViewFile(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets sites view code
   * Original name: MainAppHandler.setSitesViewCode
   */
  setSitesViewCode(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets sites view CMS
   * Original name: MainAppHandler.setSitesViewCms
   */
  setSitesViewCms(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets sites inserts overlay
   * Original name: MainAppHandler.setSitesInsertsOverlay
   */
  setSitesInsertsOverlay(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets sites find overlay
   * Original name: MainAppHandler.setSitesFindOverlay
   */
  setSitesFindOverlay(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Annotation Editing ===

  /**
   * Sets annotation editing index
   * Original name: MainAppHandler.setAnnotationEditingIndex
   */
  setAnnotationEditingIndex(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Slot Preferred Content ===

  /**
   * Shows slot preferred content picker
   * Original name: MainAppHandler.showSlotPreferredContentPicker
   */
  showSlotPreferredContentPicker(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Mermaid Diagram ===

  /**
   * Pastes Mermaid as diagram
   * Original name: MainAppHandler.pasteMermaidAsDiagram
   */
  pasteMermaidAsDiagram(...args: any[]): Promise<any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  // === Nudge Design Mode ===

  /**
   * Shows nudge design mode after template set pasted
   * Original name: MainAppHandler.showNudgeDesignModeAfterTemplateSetPasted
   */
  showNudgeDesignModeAfterTemplateSetPasted(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Feature Flag Bisector ===

  /**
   * Toggles feature flag bisector modal
   * Original name: MainAppHandler.toggleFeatureFlagBisectorModal
   */
  toggleFeatureFlagBisectorModal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  // === Interaction Recorder ===

  /**
   * Toggles interaction recorder visibility
   * Original name: MainAppHandler.toggleInteractionRecorderVisibility
   */
  toggleInteractionRecorderVisibility(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }
}
/**
 * Handles font resource status changes
 * Original name: TsFontManualLoader.fontResourceStatusChanged
 */
export class TsFontManualLoader {
  shouldThrow: boolean

  fontResourceStatusChanged(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages connection establishment and termination
 * Original name: FullscreenWebSocketTsCallbacks
 */
export class FullscreenWebSocketTsCallbacks {
  shouldThrow: boolean

  /**
   * Establishes a connection
   * Original name: FullscreenWebSocketTsCallbacks.connect
   */
  connect(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Terminates a connection
   * Original name: FullscreenWebSocketTsCallbacks.disconnect
   */
  disconnect(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sends data
   * Original name: FullscreenWebSocketTsCallbacks.send
   */
  send(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages color profile information
 * Original name: ColorManagementBindings
 */
export class ColorManagementBindings {
  shouldThrow: boolean

  /**
   * Gets the default document color profile
   * Original name: ColorManagementBindings.getDefaultDocumentColorProfile
   */
  getDefaultDocumentColorProfile(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Gets the canvas color profile
   * Original name: ColorManagementBindings.getCanvasColorProfile
   */
  getCanvasColorProfile(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Gets the user color profile
   * Original name: ColorManagementBindings.getUserColorProfile
   */
  getUserColorProfile(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles extension-related functionality and dev mode features
 * Original name: HandoffBindings
 */
export class HandoffBindings {
  shouldThrow: boolean

  /**
   * Checks if it's an extension
   * Original name: HandoffBindings.getIsExtension
   */
  getIsExtension(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Sets nodes as ready
   * Original name: HandoffBindings.setNodesReady
   */
  setNodesReady(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets nodes as completed
   * Original name: HandoffBindings.setNodesCompleted
   */
  setNodesCompleted(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Forwards exports to extension
   * Original name: HandoffBindings.forwardExportsToExtension
   */
  forwardExportsToExtension(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows status context menu
   * Original name: HandoffBindings.showStatusContextMenu
   */
  showStatusContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows linter context menu
   * Original name: HandoffBindings.showLinterContextMenu
   */
  showLinterContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if status context menu is showing
   * Original name: HandoffBindings.isStatusContextMenuShowing
   */
  isStatusContextMenuShowing(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if linter context menu is showing
   * Original name: HandoffBindings.isLinterContextMenuShowing
   */
  isLinterContextMenuShowing(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Shows annotations button context menu
   * Original name: HandoffBindings.showAnnotationsButtonContextMenu
   */
  showAnnotationsButtonContextMenu(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if in dev mode overview
   * Original name: HandoffBindings.isDevModeOverview
   */
  isDevModeOverview(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Enters dev mode focus view
   * Original name: HandoffBindings.enterDevModeFocusView
   */
  enterDevModeFocusView(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Exits dev mode focus or overview
   * Original name: HandoffBindings.exitDevModeFocusOrOverview
   */
  exitDevModeFocusOrOverview(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if interactive inspection is enabled
   * Original name: HandoffBindings.isInteractiveInspectionEnabled
   */
  isInteractiveInspectionEnabled(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if changing inspection values
   * Original name: HandoffBindings.isChangingInspectionValues
   */
  isChangingInspectionValues(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Handles unexpected edit in focus view
   * Original name: HandoffBindings.onUnexpectedEditInFocusView
   */
  onUnexpectedEditInFocusView(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets unit name
   * Original name: HandoffBindings.getUnitName
   */
  getUnitName(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles node change events
 * Original name: HandoffCallbacks
 */
export class HandoffCallbacks {
  shouldThrow: boolean

  /**
   * Handles node changes
   * Original name: HandoffCallbacks.nodeChange
   */
  nodeChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages mouse behavior and table UI interactions
 * Original name: MouseBehaviorManager
 */
export class MouseBehaviorManager {
  shouldThrow: boolean

  /**
   * Creates mouse behavior
   * Original name: MouseBehaviorManager.createMouseBehavior
   */
  createMouseBehavior(...args: any) {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Gets table UI reorder handle hovered length
   * Original name: MouseBehaviorManager.tableUiReorderHandleHoveredLength
   */
  tableUiReorderHandleHoveredLength(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Gets table UI add button hovered radius
   * Original name: MouseBehaviorManager.tableUiAddButtonHoveredRadius
   */
  tableUiAddButtonHoveredRadius(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages design linter functionality
 * Original name: DesignLinterManager
 */
export class DesignLinterManager {
  shouldThrow: boolean

  /**
   * Notifies linter node update
   * Original name: DesignLinterManager.notifyLinterNodeUpdate
   */
  notifyLinterNodeUpdate(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if design linter is enabled
   * Original name: DesignLinterManager.isDesignLinterEnabled
   */
  isDesignLinterEnabled(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages mentions typeahead functionality and search sessions
 * Original name: MentionsTypeaheadManager
 */
export class MentionsTypeaheadManager {
  shouldThrow: boolean

  /**
   * Sets mentions typeahead query
   * Original name: MentionsTypeaheadManager.setMentionsTypeaheadQuery
   */
  setMentionsTypeaheadQuery(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Clears mentions typeahead query
   * Original name: MentionsTypeaheadManager.clearMentionsTypeaheadQuery
   */
  clearMentionsTypeaheadQuery(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if showing mentions typeahead results
   * Original name: MentionsTypeaheadManager.isShowingMentionsTypeaheadResults
   */
  isShowingMentionsTypeaheadResults(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Sets mentions typeahead target rect
   * Original name: MentionsTypeaheadManager.setMentionsTypeaheadTargetRect
   */
  setMentionsTypeaheadTargetRect(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Starts search session
   * Original name: MentionsTypeaheadManager.startSearchSession
   */
  startSearchSession(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Ends search session
   * Original name: MentionsTypeaheadManager.endSearchSession
   */
  endSearchSession(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Shows visual bell for pasted mentions
   * Original name: MentionsTypeaheadManager.showVisualBellForPastedMentions
   */
  showVisualBellForPastedMentions(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles PDF source management and conversion
 * Original name: PdfImportBindings
 */
export class PdfImportBindings {
  shouldThrow: boolean

  /**
   * Gets PDF source
   * Original name: PdfImportBindings.getPdfSource
   */
  getPdfSource(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Resets PDF source
   * Original name: PdfImportBindings.resetPdfSource
   */
  resetPdfSource(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Converts PDF to scene
   * Original name: PdfImportBindings.convertPdfToScene
   */
  convertPdfToScene(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Checks if PDF imports should be blocked
   * Original name: PdfImportBindings.shouldBlockPdfImports
   */
  shouldBlockPdfImports(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles various state changes in the application
 * Original name: PluginCallbacksManager
 */
export class PluginCallbacksManager {
  shouldThrow: boolean

  /**
   * Handles selection changes
   * Original name: PluginCallbacksManager.selectionChange
   */
  selectionChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles box selection ended
   * Original name: PluginCallbacksManager.boxSelectionEnded
   */
  boxSelectionEnded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles current page changes
   * Original name: PluginCallbacksManager.currentPageChange
   */
  currentPageChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles timer changes
   * Original name: PluginCallbacksManager.timerChange
   */
  timerChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles slides view changes
   * Original name: PluginCallbacksManager.slidesViewChange
   */
  slidesViewChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles document changes
   * Original name: PluginCallbacksManager.documentChange
   */
  documentChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles codegen preferences changes
   * Original name: PluginCallbacksManager.codegenPreferencesChange
   */
  codegenPreferencesChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles stack invariants enforcement
   * Original name: PluginCallbacksManager.stackInvariantsEnforced
   */
  stackInvariantsEnforced(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles plugin page loaded
   * Original name: PluginCallbacksManager.pluginPageLoaded
   */
  pluginPageLoaded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets plugin accessible node IDs
   * Original name: PluginCallbacksManager.pluginAccessibleNodeIds
   */
  pluginAccessibleNodeIds(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  /**
   * Gets plugin accessible pages
   * Original name: PluginCallbacksManager.pluginAccessiblePages
   */
  pluginAccessiblePages(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages sites view state
 * Original name: SitesViewManager
 */
export class SitesViewManager {
  shouldThrow: boolean

  /**
   * Sets sites view state
   * Original name: SitesViewManager.setSitesViewState
   */
  setSitesViewState(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets sites view state
   * Original name: SitesViewManager.getSitesViewState
   */
  getSitesViewState(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles text spell checking and suggestions
 * Original name: SpellCheckAPIBindings
 */
export class SpellCheckAPIBindings {
  shouldThrow: boolean

  /**
   * Gets API name
   * Original name: SpellCheckAPIBindings.getAPIName
   */
  getAPIName(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets suggestions for word
   * Original name: SpellCheckAPIBindings.getSuggestionsForWord
   */
  getSuggestionsForWord(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Spell checks text
   * Original name: SpellCheckAPIBindings.spellCheckText
   */
  spellCheckText(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Runs text review plugin
   * Original name: SpellCheckAPIBindings.runTextReviewPlugin
   */
  runTextReviewPlugin(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Checks if should enable when first activated
   * Original name: SpellCheckAPIBindings.shouldEnableWhenFirstActivated
   */
  shouldEnableWhenFirstActivated(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages thumbnail requests
 * Original name: thumbnailrequestmanager
 */
export class ThumbnailRequestManager {
  shouldThrow: boolean

  /**
   * Resolves thumbnail request
   * Original name: thumbnailrequestmanager.resolveThumbnailRequest
   */
  resolveThumbnailRequest(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Rejects thumbnail request
   * Original name: thumbnailrequestmanager.rejectThumbnailRequest
   */
  rejectThumbnailRequest(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages quick actions visibility
 * Original name: QUICKACTIONSMANAGER
 */
export class QuickActionsManager {
  shouldThrow: boolean

  /**
   * Checks if quick actions are shown
   * Original name: QUICKACTIONSMANAGER.isQuickActionsShown
   */
  isQuickActionsShown(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles variable pasting with localization
 * Original name: VARIABLEPASTEHANDLER
 */
export class VariablesBindingsWeb {
  shouldThrow: boolean

  /**
   * Pastes variables with localization popup
   * Original name: VARIABLEPASTEHANDLER.pasteVariablesWithLocalizationPopup
   */
  pasteVariablesWithLocalizationPopup(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
/**
 * Manages multiplayer connection and presentation state
 * Original name: MULTIPLAYERCONNECTIONMANAGER
 */
export class WebMultiplayerManager {
  shouldThrow: boolean

  /**
   * Handles reconnection start event
   * Original name: MULTIPLAYERCONNECTIONMANAGER.reconnectingStarted
   */
  reconnectingStarted(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles successful reconnection
   * Original name: MULTIPLAYERCONNECTIONMANAGER.reconnectingSucceeded
   */
  reconnectingSucceeded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Notifies when cursor is hidden
   * Original name: MULTIPLAYERCONNECTIONMANAGER.notifyCursorHidden
   */
  notifyCursorHidden(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Notifies when cursor is unhidden from observer
   * Original name: MULTIPLAYERCONNECTIONMANAGER.notifyCursorUnhiddenFromObserver
   */
  notifyCursorUnhiddenFromObserver(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Notifies when cursor is unhidden from connection count
   * Original name: MULTIPLAYERCONNECTIONMANAGER.notifyCursorUnhiddenFromConnectionCount
   */
  notifyCursorUnhiddenFromConnectionCount(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Notifies when editor is converted to viewer
   * Original name: MULTIPLAYERCONNECTIONMANAGER.notifyEditorConvertedToViewer
   */
  notifyEditorConvertedToViewer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates save status
   * Original name: MULTIPLAYERCONNECTIONMANAGER.updateSaveStatus
   */
  updateSaveStatus(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates multiplayer state
   * Original name: MULTIPLAYERCONNECTIONMANAGER.updateMultiplayerState
   */
  updateMultiplayerState(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Restarts presentation
   * Original name: MULTIPLAYERCONNECTIONMANAGER.restartPresentation
   */
  restartPresentation(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows presentation stopped visual bell
   * Original name: MULTIPLAYERCONNECTIONMANAGER.showPresentationStoppedVisualBell
   */
  showPresentationStoppedVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Cancels presentation stopped visual bell
   * Original name: MULTIPLAYERCONNECTIONMANAGER.cancelPresentationStoppedVisualBell
   */
  cancelPresentationStoppedVisualBell(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets background flush interval
   * Original name: MULTIPLAYERCONNECTIONMANAGER.setBackgroundFlushInterval
   */
  setBackgroundFlushInterval(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Starts monitor interval
   * Original name: MULTIPLAYERCONNECTIONMANAGER.startMonitorInterval
   */
  startMonitorInterval(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles multiplayer signal
   * Original name: MULTIPLAYERCONNECTIONMANAGER.handleMultiplayerSignal
   */
  handleMultiplayerSignal(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows restore component dialog
   * Original name: MULTIPLAYERCONNECTIONMANAGER.showRestoreComponentDialog
   */
  showRestoreComponentDialog(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows component removed dialog
   * Original name: MULTIPLAYERCONNECTIONMANAGER.showComponentRemovedDialog
   */
  showComponentRemovedDialog(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if window is active
   * Original name: MULTIPLAYERCONNECTIONMANAGER.isWindowActive
   */
  isWindowActive(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Builds multiplayer URL
   * Original name: MULTIPLAYERCONNECTIONMANAGER.buildMultiplayerUrl
   */
  buildMultiplayerUrl(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets socket buffered amount
   * Original name: MULTIPLAYERCONNECTIONMANAGER.socketBufferedAmount
   */
  socketBufferedAmount(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Pretty prints message
   * Original name: MULTIPLAYERCONNECTIONMANAGER.prettyPrintMessage
   */
  prettyPrintMessage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles reconnect sequence number change
   * Original name: MULTIPLAYERCONNECTIONMANAGER.reconnectSequenceNumberChanged
   */
  reconnectSequenceNumberChanged(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages color picker and selection paint operations
 * Original name: WebSelectionManager
 */
export class WebSelectionManager {
  shouldThrow: boolean

  /**
   * Shows eyedropper tool
   * Original name: WebSelectionManager.showEyedropper
   */
  showEyedropper(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Hides eyedropper tool
   * Original name: WebSelectionManager.hideEyedropper
   */
  hideEyedropper(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates selection paints with fill encoded paints
   * Original name: WebSelectionManager.updateSelectionPaintsWithFillEncodedPaints
   */
  updateSelectionPaintsWithFillEncodedPaints(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates selection images
   * Original name: WebSelectionManager.updateSelectionImages
   */
  updateSelectionImages(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates selection paints with styles
   * Original name: WebSelectionManager.updateSelectionPaintsWithStyles
   */
  updateSelectionPaintsWithStyles(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates paints directly on single node with fill encoded paints
   * Original name: WebSelectionManager.updatePaintsDirectlyOnSingleNodeWithFillEncodedPaints
   */
  updatePaintsDirectlyOnSingleNodeWithFillEncodedPaints(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates paints directly on single node with styles
   * Original name: WebSelectionManager.updatePaintsDirectlyOnSingleNodeWithStyles
   */
  updatePaintsDirectlyOnSingleNodeWithStyles(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Clears selection paints due to limit exceeded
   * Original name: WebSelectionManager.clearSelectionPaintsDueToLimitExceeded
   */
  clearSelectionPaintsDueToLimitExceeded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates selection paint from dropper
   * Original name: WebSelectionManager.updateSelectionPaintFromDropper
   */
  updateSelectionPaintFromDropper(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if picker has selection paint open
   * Original name: WebSelectionManager.pickerHasSelectionPaintOpen
   */
  pickerHasSelectionPaintOpen(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Gets original paint for current selection paints picker
   * Original name: WebSelectionManager.originalPaintForCurrentSelectionPaintsPicker
   */
  originalPaintForCurrentSelectionPaintsPicker(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets color picker selected variable
   * Original name: WebSelectionManager.colorPickerSelectedVariable
   */
  colorPickerSelectedVariable(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Clears selection text and effect styles due to limit exceeded
   * Original name: WebSelectionManager.clearSelectionTextAndEffectStylesDueToLimitExceeded
   */
  clearSelectionTextAndEffectStylesDueToLimitExceeded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates selection text and effect styles
   * Original name: WebSelectionManager.updateSelectionTextAndEffectStyles
   */
  updateSelectionTextAndEffectStyles(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if prototyping modal is open
   * Original name: WebSelectionManager.isPrototypingModalOpen
   */
  isPrototypingModalOpen(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Validates copy buffer
   * Original name: WebSelectionManager.validateCopyBuffer
   */
  validateCopyBuffer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages multiplayer user interactions and cursor states
 * Original name: WebUserSyncing
 */
export class WebUserSyncing {
  shouldThrow: boolean

  /**
   * Handles connection event
   * Original name: WebUserSyncing.handleConnect
   */
  handleConnect(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Adds user to multiplayer session
   * Original name: WebUserSyncing.addUser
   */
  addUser(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Removes user from multiplayer session
   * Original name: WebUserSyncing.removeUser
   */
  removeUser(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets mouse cursor state
   * Original name: WebUserSyncing.setMouseCursor
   */
  setMouseCursor(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets mouse position
   * Original name: WebUserSyncing.setMousePosition
   */
  setMousePosition(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets if hovering widget with hidden cursors
   * Original name: WebUserSyncing.setIsHoveringWidgetWithHiddenCursors
   */
  setIsHoveringWidgetWithHiddenCursors(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets high five status
   * Original name: WebUserSyncing.setHighFiveStatus
   */
  setHighFiveStatus(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets chat message
   * Original name: WebUserSyncing.setChatMessage
   */
  setChatMessage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets focus on text cursor
   * Original name: WebUserSyncing.setFocusOnTextCursor
   */
  setFocusOnTextCursor(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets voice metadata
   * Original name: WebUserSyncing.setVoiceMetadata
   */
  setVoiceMetadata(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles reaction from server
   * Original name: WebUserSyncing.handleReactionFromServer
   */
  handleReactionFromServer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sends reaction
   * Original name: WebUserSyncing.sendReaction
   */
  sendReaction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages template preview functionality
 * Original name: WhiteboardTemplatePreviewTsBindings
 */
export class WhiteboardTemplatePreviewTsBindings {
  shouldThrow: boolean

  /**
   * Clears template preview
   * Original name: WhiteboardTemplatePreviewTsBindings.clearTemplatePreview
   */
  clearTemplatePreview(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages eyedropper context and palette operations
 * Original name: WhiteboardTsBindings
 */
export class WhiteboardTsBindings {
  shouldThrow: boolean

  /**
   * Gets eyedropper context
   * Original name: WhiteboardTsBindings.getEyedropperContext
   */
  getEyedropperContext(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Updates edit palette modal color
   * Original name: WhiteboardTsBindings.updateEditPaletteModalColor
   */
  updateEditPaletteModalColor(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if custom palette is applied
   * Original name: WhiteboardTsBindings.isCustomPaletteApplied
   */
  isCustomPaletteApplied(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Shows section presets
   * Original name: WhiteboardTsBindings.showSectionPresets
   */
  showSectionPresets(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages undo/redo operations
 * Original name: UndoRedoEventsBindings
 */
export class UndoRedoEventsBindings {
  shouldThrow: boolean

  /**
   * Handles undo operation
   * Original name: UndoRedoEventsBindings.onUndo
   */
  onUndo(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles redo operation
   * Original name: UndoRedoEventsBindings.onRedo
   */
  onRedo(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages keyboard shortcuts and action dispatching
 * Original name: KeyboardShortcutBindings
 */
export class KeyboardShortcutBindings {
  shouldThrow: boolean

  /**
   * Dispatches an action
   * Original name: KeyboardShortcutBindings.dispatchAction
   */
  dispatchAction(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Gets custom keyboard shortcuts
   * Original name: KeyboardShortcutBindings.getCustomKeyboardShortcuts
   */
  getCustomKeyboardShortcuts(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  /**
   * Gets display string from key
   * Original name: KeyboardShortcutBindings.getDisplayStringFromKey
   */
  getDisplayStringFromKey(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets keyboard shortcut from text
   * Original name: KeyboardShortcutBindings.getKeyboardShortcutFromText
   */
  getKeyboardShortcutFromText(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Gets text from keyboard shortcut
   * Original name: KeyboardShortcutBindings.getTextFromKeyboardShortcut
   */
  getTextFromKeyboardShortcut(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages performance tracking and analytics
 * Original name: PerformanceAnalyticsManager
 */
export class PerformanceAnalyticsManager {
  shouldThrow: boolean

  /**
   * Tracks fullscreen events
   * Original name: PerformanceAnalyticsManager.trackFromFullscreen
   */
  trackFromFullscreen(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tracks defined events from fullscreen
   * Original name: PerformanceAnalyticsManager.trackDefinedEventFromFullscreen
   */
  trackDefinedEventFromFullscreen(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Resets defined analytics for document
   * Original name: PerformanceAnalyticsManager.resetDefinedAnalyticsForDocument
   */
  resetDefinedAnalyticsForDocument(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports consecutive flushes
   * Original name: PerformanceAnalyticsManager.reportConsecutiveFlushes
   */
  reportConsecutiveFlushes(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports consecutive image change skips
   * Original name: PerformanceAnalyticsManager.reportConsecutiveImageChangeSkips
   */
  reportConsecutiveImageChangeSkips(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports context restore
   * Original name: PerformanceAnalyticsManager.reportContextRestore
   */
  reportContextRestore(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports branching load time
   * Original name: PerformanceAnalyticsManager.reportBranchingLoadTime
   */
  reportBranchingLoadTime(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports multiplayer round trip time
   * Original name: PerformanceAnalyticsManager.reportMultiplayerRoundTripTime
   */
  reportMultiplayerRoundTripTime(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports performance event
   * Original name: PerformanceAnalyticsManager.reportPerfEvent
   */
  reportPerfEvent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports quantized color equals use
   * Original name: PerformanceAnalyticsManager.reportQuantizedColorEqualsUse
   */
  reportQuantizedColorEqualsUse(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports context lost
   * Original name: PerformanceAnalyticsManager.reportContextLost
   */
  reportContextLost(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports context restored
   * Original name: PerformanceAnalyticsManager.reportContextRestored
   */
  reportContextRestored(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports dirty after load
   * Original name: PerformanceAnalyticsManager.reportDirtyAfterLoad
   */
  reportDirtyAfterLoad(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tries to report error
   * Original name: PerformanceAnalyticsManager.tryReportError
   */
  tryReportError(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Starts performance timer
   * Original name: PerformanceAnalyticsManager.startPerfTimer
   */
  startPerfTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Stops performance timer
   * Original name: PerformanceAnalyticsManager.stopPerfTimer
   */
  stopPerfTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Starts operations timer
   * Original name: PerformanceAnalyticsManager.startOpsTimer
   */
  startOpsTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Stops operations timer
   * Original name: PerformanceAnalyticsManager.stopOpsTimer
   */
  stopOpsTimer(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Pauses operations timer
   * Original name: PerformanceAnalyticsManager.pauseOpsTimer
   */
  pauseOpsTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Resumes operations timer
   * Original name: PerformanceAnalyticsManager.resumeOpsTimer
   */
  resumeOpsTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tries to stop operations timer
   * Original name: PerformanceAnalyticsManager.tryStopOpsTimer
   */
  tryStopOpsTimer(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Tries to set attribute operations timer
   * Original name: PerformanceAnalyticsManager.trySetAttributeOpsTimer
   */
  trySetAttributeOpsTimer(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tries to get attributes operations timer
   * Original name: PerformanceAnalyticsManager.tryGetAttributesOpsTimer
   */
  tryGetAttributesOpsTimer(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets operations timer
   * Original name: PerformanceAnalyticsManager.getOpsTimer
   */
  getOpsTimer(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Adds to distribution
   * Original name: PerformanceAnalyticsManager.addToDistribution
   */
  addToDistribution(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Creates distribution
   * Original name: PerformanceAnalyticsManager.createDistribution
   */
  createDistribution(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Removes distribution
   * Original name: PerformanceAnalyticsManager.removeDistribution
   */
  removeDistribution(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets distribution analytics properties
   * Original name: PerformanceAnalyticsManager.getDistributionAnalyticsProperties
   */
  getDistributionAnalyticsProperties(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Resets distribution
   * Original name: PerformanceAnalyticsManager.resetDistribution
   */
  resetDistribution(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports render layer count
   * Original name: PerformanceAnalyticsManager.reportRenderLayerCount
   */
  reportRenderLayerCount(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports independent layer animation active
   * Original name: PerformanceAnalyticsManager.reportIndependentLayerAnimationActive
   */
  reportIndependentLayerAnimationActive(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports non-independent layer animation active
   * Original name: PerformanceAnalyticsManager.reportNonIndependentLayerAnimationActive
   */
  reportNonIndependentLayerAnimationActive(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports rendered tile bytes used
   * Original name: PerformanceAnalyticsManager.reportRenderedTileBytesUsed
   */
  reportRenderedTileBytesUsed(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports animation from C++
   * Original name: PerformanceAnalyticsManager.reportAnimationFromCpp
   */
  reportAnimationFromCpp(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports animation from TypeScript
   * Original name: PerformanceAnalyticsManager.reportAnimationFromTs
   */
  reportAnimationFromTs(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Records rendering event
   * Original name: PerformanceAnalyticsManager.recordRenderingEvent
   */
  recordRenderingEvent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Saves rendering trace
   * Original name: PerformanceAnalyticsManager.saveRenderingTrace
   */
  saveRenderingTrace(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports independent layer active
   * Original name: PerformanceAnalyticsManager.reportIndependentLayerActive
   */
  reportIndependentLayerActive(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports independent layer added
   * Original name: PerformanceAnalyticsManager.reportIndependentLayerAdded
   */
  reportIndependentLayerAdded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Reports independent layer removed
   * Original name: PerformanceAnalyticsManager.reportIndependentLayerRemoved
   */
  reportIndependentLayerRemoved(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Logs numeric metric
   * Original name: PerformanceAnalyticsManager.logNumericMetric
   */
  logNumericMetric(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Logs string metric
   * Original name: PerformanceAnalyticsManager.logStringMetric
   */
  logStringMetric(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles allocation failure with native
   * Original name: PerformanceAnalyticsManager.handleAllocationFailureWithNative
   */
  handleAllocationFailureWithNative(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Logs from fullscreen
   * Original name: PerformanceAnalyticsManager.slogFromFullscreen
   */
  slogFromFullscreen(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages default stroke weights for drawing tools
 * Original name: DefaultStrokeWeightManager
 */
export class DefaultStrokeWeightManager {
  shouldThrow: boolean

  /**
   * Gets default pencil stroke weight
   * Original name: DefaultStrokeWeightManager.getDefaultPencilStrokeWeight
   */
  getDefaultPencilStrokeWeight(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Gets default highlighter stroke weight
   * Original name: DefaultStrokeWeightManager.getDefaultHighlighterStrokeWeight
   */
  getDefaultHighlighterStrokeWeight(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages UI3 color settings
 * Original name: UI3ColorManager
 */
export class UI3ColorManager {
  shouldThrow: boolean

  /**
   * Checks if UI3 is enabled
   * Original name: UI3ColorManager.isUI3
   */
  isUI3(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Shows UI3 colors
   * Original name: UI3ColorManager.showUI3Colors
   */
  showUI3Colors(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Shows UI3 colors initial value
   * Original name: UI3ColorManager.showUI3ColorsInitialValue
   */
  showUI3ColorsInitialValue(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
/**
 * Handles binary data read/write operations
 * Original name: ZipImpl
 */
export class ZipImpl {
  shouldThrow: boolean

  /**
   * Reads data synchronously
   * Original name: ZipImpl.readSync
   */
  readSync(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  /**
   * Writes data synchronously
   * Original name: ZipImpl.writeSync
   */
  writeSync(...args: any[]): Uint8Array {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Uint8Array()
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages image decoding, encoding, and scaling operations
 * Original name: ImageProcessorHandler
 */
export class ImageProcessorHandler {
  shouldThrow: boolean

  /**
   * Decodes an image
   * Original name: ImageProcessorHandler.decodeImage
   */
  decodeImage(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Encodes an image
   * Original name: ImageProcessorHandler.encodeImage
   */
  encodeImage(...args: any[]): Uint8Array {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Uint8Array()
  }

  /**
   * Scales an image
   * Original name: ImageProcessorHandler.scaleImage
   */
  scaleImage(...args: any[]): Uint8Array {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Uint8Array()
  }

  /**
   * Cancels current image processing workers
   * Original name: ImageProcessorHandler.cancelCurrentImageWorkers
   */
  cancelCurrentImageWorkers(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Initializes the image processor
   * Original name: ImageProcessorHandler.init
   */
  init(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages video operations including creation, loading, and permissions
 * Original name: VideoTsBindings
 */
export class VideoTsBindings {
  shouldThrow: boolean

  /**
   * Creates a video
   * Original name: VideoTsBindings.createVideo
   */
  createVideo(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Deletes a video
   * Original name: VideoTsBindings.deleteVideo
   */
  deleteVideo(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets video width
   * Original name: VideoTsBindings.getWidth
   */
  getWidth(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Gets video height
   * Original name: VideoTsBindings.getHeight
   */
  getHeight(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Gets video cover image
   * Original name: VideoTsBindings.getCoverImage
   */
  getCoverImage(...args: any[]): Uint8Array {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Uint8Array()
  }

  /**
   * Loads a video
   * Original name: VideoTsBindings.loadVideo
   */
  loadVideo(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Copies video permissions
   * Original name: VideoTsBindings.copyVideoPermissions
   */
  copyVideoPermissions(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Copies video permissions from library key
   * Original name: VideoTsBindings.copyVideoPermissionsFromLibraryKey
   */
  copyVideoPermissionsFromLibraryKey(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets signed URLs for video
   * Original name: VideoTsBindings.getSignedUrls
   */
  getSignedUrls(...args: any[]): Map<any, any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Map()
  }

  /**
   * Sets external source for video
   * Original name: VideoTsBindings.setExternalSource
   */
  setExternalSource(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Loads all videos
   * Original name: VideoTsBindings.loadAllVideos
   */
  loadAllVideos(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles context lost event
   * Original name: VideoTsBindings.contextLost
   */
  contextLost(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages auto-layout and responsive design operations
 * Original name: AutoLayoutBindings
 */
export class AutoLayoutBindings {
  shouldThrow: boolean

  /**
   * Automatically segments nodes by region
   * Original name: AutoLayoutBindings.autoSegmentNodesByRegion
   */
  autoSegmentNodesByRegion(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Determines if simple stack detection should run
   * Original name: AutoLayoutBindings.shouldRunSimpleStackDetection
   */
  shouldRunSimpleStackDetection(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Runs make responsive heuristics
   * Original name: AutoLayoutBindings.runMakeResponsiveHeuristics
   */
  runMakeResponsiveHeuristics(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tracks if MSAL onboarding should be shown
   * Original name: AutoLayoutBindings.trackShouldShowMSALOnboarding
   */
  trackShouldShowMSALOnboarding(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Destroys all auto-layout
   * Original name: AutoLayoutBindings.destroyAllAutoLayout
   */
  destroyAllAutoLayout(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Makes layout responsive
   * Original name: AutoLayoutBindings.makeResponsive2
   */
  makeResponsive2(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages user information and flags
 * Original name: CurrentUserInfo
 */
export class CurrentUserInfo {
  shouldThrow: boolean

  /**
   * Gets user ID
   * Original name: CurrentUserInfo.getUserId
   */
  getUserId(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Gets user locale
   * Original name: CurrentUserInfo.getUserLocale
   */
  getUserLocale(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Checks if user has a specific flag
   * Original name: CurrentUserInfo.hasUserFlag
   */
  hasUserFlag(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages scene creation and node operations
 * Original name: SceneManagerHandler
 */
export class SceneManagerHandler {
  shouldThrow: boolean

  /**
   * Creates a scene
   * Original name: SceneManagerHandler.createScene
   */
  createScene(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Handles node creation event
   * Original name: SceneManagerHandler.Node_created
   */
  Node_created(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node destruction event
   * Original name: SceneManagerHandler.Node_destroyed
   */
  Node_destroyed(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Triggers a scene graph event
   * Original name: SceneManagerHandler.triggerSceneGraphEvent
   */
  triggerSceneGraphEvent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates node after property change
   * Original name: SceneManagerHandler.updateNodeAfterPropertyChange
   */
  updateNodeAfterPropertyChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Links node to parent
   * Original name: SceneManagerHandler.linkNodeToParent
   */
  linkNodeToParent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Unlinks node from parent
   * Original name: SceneManagerHandler.unlinkNodeFromParent
   */
  unlinkNodeFromParent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages missing font scanning operations
 * Original name: MissingFontScanner
 */
export class MissingFontScanner {
  shouldThrow: boolean

  /**
   * Marks missing font scanner as complete
   * Original name: MissingFontScanner.markMissingFontScannerAsComplete
   */
  markMissingFontScannerAsComplete(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles developer-related links and node status changes
 * Original name: HandoffScenegraphBindings
 */
export class HandoffScenegraphBindings {
  shouldThrow: boolean

  /**
   * Submits developer-related links
   * Original name: HandoffScenegraphBindings.submitDeveloperRelatedLinks
   */
  submitDeveloperRelatedLinks(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node status change
   * Original name: HandoffScenegraphBindings.didGetNodeStatusChange
   */
  didGetNodeStatusChange(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if variable is available in library asset
   * Original name: HandoffScenegraphBindings.isVariableAvailableInLibraryAsset
   */
  isVariableAvailableInLibraryAsset(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages image permissions, downloads, and uploads
 * Original name: ImageTsBindings
 */
export class ImageTsBindings {
  shouldThrow: boolean

  /**
   * Copies image permissions
   * Original name: ImageTsBindings.copyImagePermissions
   */
  copyImagePermissions(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Copies image permissions from library key
   * Original name: ImageTsBindings.copyImagePermissionsFromLibraryKey
   */
  copyImagePermissionsFromLibraryKey(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets image download priority
   * Original name: ImageTsBindings.setImageDownloadPriority
   */
  setImageDownloadPriority(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Forces image download
   * Original name: ImageTsBindings.forceDownloadImage
   */
  forceDownloadImage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets signed URLs for images
   * Original name: ImageTsBindings.getSignedUrls
   */
  getSignedUrls(...args: any[]): Map<any, any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Map()
  }

  /**
   * Gets image host domain
   * Original name: ImageTsBindings.getImageHostDomain
   */
  getImageHostDomain(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Sets minimum image priority
   * Original name: ImageTsBindings.setMinimumImagePriority
   */
  setMinimumImagePriority(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Forgets an image
   * Original name: ImageTsBindings.forgetImage
   */
  forgetImage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets image decode as pending
   * Original name: ImageTsBindings.setImageDecodePending
   */
  setImageDecodePending(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Clears image decode pending status
   * Original name: ImageTsBindings.clearImageDecodePending
   */
  clearImageDecodePending(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Downloads an emoji
   * Original name: ImageTsBindings.downloadEmoji
   */
  downloadEmoji(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Marks image as uploading
   * Original name: ImageTsBindings.markImageUploading
   */
  markImageUploading(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Marks image as uploaded
   * Original name: ImageTsBindings.markImageUploaded
   */
  markImageUploaded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Starts uploading an image
   * Original name: ImageTsBindings.startUploadingImage
   */
  startUploadingImage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets pending upload statistics
   * Original name: ImageTsBindings.pendingUploadStats
   */
  pendingUploadStats(...args: any[]): [Set<any>, Set<any>] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return [new Set(), new Set()]
  }

  /**
   * Logs debug information
   * Original name: ImageTsBindings.logDebugInfo
   */
  logDebugInfo(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Pauses image downloads
   * Original name: ImageTsBindings.pauseImageDownloads
   */
  pauseImageDownloads(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Resumes image downloads
   * Original name: ImageTsBindings.resumeImageDownloads
   */
  resumeImageDownloads(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets external source
   * Original name: ImageTsBindings.setExternalSource
   */
  setExternalSource(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets static asset with path
   * Original name: ImageTsBindings.staticAssetWithPath
   */
  staticAssetWithPath(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles thumbhash encoding and decoding operations
 * Original name: ThumbHashHandler
 */
export class ThumbHashHandler {
  shouldThrow: boolean

  /**
   * Converts RGBA to thumbhash
   * Original name: ThumbHashHandler.rgbaToThumbhash
   */
  rgbaToThumbhash(...args: any[]): Uint8Array {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Uint8Array()
  }

  /**
   * Converts thumbhash to RGBA
   * Original name: ThumbHashHandler.thumbhashToRgba
   */
  thumbhashToRgba(...args: any[]): { rgba: Uint8Array, width: number, height: number } {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return {
      rgba: new Uint8Array(),
      width: 0,
      height: 0,
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
/**
 * Handles rich text and HTML conversion operations
 * Original name: RichTextBindings
 */
export class RichTextBindings {
  shouldThrow: boolean

  /**
   * Reads rich text from HTML content
   * Original name: RichTextBindings.readRichTextFromHtml
   */
  readRichTextFromHtml(...args: any[]): any[] {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return []
  }

  /**
   * Creates HTML from text nodes
   * Original name: RichTextBindings.createHtmlFromTextNodes
   */
  createHtmlFromTextNodes(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Creates HTML from text data
   * Original name: RichTextBindings.createHtmlFromTextData
   */
  createHtmlFromTextData(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages code editor styling and appearance
 * Original name: CodeBlockBindings
 */
export class CodeBlockBindings {
  shouldThrow: boolean

  /**
   * Gets parsed code tokens for syntax highlighting
   * Original name: CodeBlockBindings.getParsedCodeTokens
   */
  getParsedCodeTokens(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets background color for code editor
   * Original name: CodeBlockBindings.getBackgroundColor
   */
  getBackgroundColor(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets line number color for code editor
   * Original name: CodeBlockBindings.getLineNumberColor
   */
  getLineNumberColor(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Gets cursor color for code editor
   * Original name: CodeBlockBindings.getCursorColor
   */
  getCursorColor(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages widget operations and interactions
 * Original name: WidgetManagerHandler
 */
export class WidgetManagerHandler {
  shouldThrow: boolean

  /**
   * Handles insertion from existing widget
   * Original name: WidgetManagerHandler.onInsertFromExisting
   */
  onInsertFromExisting(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles widget impression event
   * Original name: WidgetManagerHandler.onImpression
   */
  onImpression(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Mounts a widget
   * Original name: WidgetManagerHandler.mountWidget
   */
  mountWidget(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Mounts a widget with low priority
   * Original name: WidgetManagerHandler.mountWidgetLowPriority
   */
  mountWidgetLowPriority(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tracks selection state interaction
   * Original name: WidgetManagerHandler.trackSelectionStateInteraction
   */
  trackSelectionStateInteraction(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles widget click event
   * Original name: WidgetManagerHandler.clickWidget
   */
  clickWidget(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Queues widget render
   * Original name: WidgetManagerHandler.queueRender
   */
  queueRender(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Renders first party widget
   * Original name: WidgetManagerHandler.renderFirstPartyWidget
   */
  renderFirstPartyWidget(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if widget is currently rendering
   * Original name: WidgetManagerHandler.isRenderingWidget
   */
  isRenderingWidget(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Runs property menu callback
   * Original name: WidgetManagerHandler.runPropertyMenuCallback
   */
  runPropertyMenuCallback(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Terminates running widget
   * Original name: WidgetManagerHandler.terminateRunningWidget
   */
  terminateRunningWidget(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles hyperlink click in widget
   * Original name: WidgetManagerHandler.clickHyperlink
   */
  clickHyperlink(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets widget icon buffer
   * Original name: WidgetManagerHandler.getWidgetIconBuffer
   */
  getWidgetIconBuffer(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Handles text edit end event
   * Original name: WidgetManagerHandler.onTextEditEnd
   */
  onTextEditEnd(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows widget tooltip
   * Original name: WidgetManagerHandler.showTooltip
   */
  showTooltip(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows non-interactable widget tooltip
   * Original name: WidgetManagerHandler.showNonInteractableWidgetTooltip
   */
  showNonInteractableWidgetTooltip(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Hides widget tooltip
   * Original name: WidgetManagerHandler.hideTooltip
   */
  hideTooltip(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Logs multiple input editors in widget
   * Original name: WidgetManagerHandler.logMultipleInputEditorsInWidget
   */
  logMultipleInputEditorsInWidget(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles stickable added event
   * Original name: WidgetManagerHandler.stickableAdded
   */
  stickableAdded(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles stickable removed event
   * Original name: WidgetManagerHandler.stickableRemoved
   */
  stickableRemoved(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if user can interact with widget
   * Original name: WidgetManagerHandler.canInteractWithWidget
   */
  canInteractWithWidget(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Checks if user can view widget details
   * Original name: WidgetManagerHandler.canViewWidgetDetails
   */
  canViewWidgetDetails(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages accessibility features and announcements
 * Original name: AccessibilityBindings
 */
export class AccessibilityBindings {
  shouldThrow: boolean

  /**
   * Checks if user prefers reduced motion
   * Original name: AccessibilityBindings.prefersReducedMotion
   */
  prefersReducedMotion(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Gets WCAG 2.0 contrast ratio
   * Original name: AccessibilityBindings.getWCAG2Contrast
   */
  getWCAG2Contrast(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Announces node creation
   * Original name: AccessibilityBindings.announceNodeCreated
   */
  announceNodeCreated(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces single node deletion
   * Original name: AccessibilityBindings.announceSingleNodeDeleted
   */
  announceSingleNodeDeleted(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces multiple nodes deletion
   * Original name: AccessibilityBindings.announceMultipleNodesDeleted
   */
  announceMultipleNodesDeleted(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces text selection
   * Original name: AccessibilityBindings.announceTextSelection
   */
  announceTextSelection(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces tool selection
   * Original name: AccessibilityBindings.announceToolSelected
   */
  announceToolSelected(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces table cell text selection
   * Original name: AccessibilityBindings.announceTableCellTextSelection
   */
  announceTableCellTextSelection(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces node resize
   * Original name: AccessibilityBindings.announceNodeResized
   */
  announceNodeResized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces node movement
   * Original name: AccessibilityBindings.announceNodeMoved
   */
  announceNodeMoved(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces selection box resize
   * Original name: AccessibilityBindings.announceSelectionBoxResized
   */
  announceSelectionBoxResized(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces selection box movement
   * Original name: AccessibilityBindings.announceSelectionBoxMoved
   */
  announceSelectionBoxMoved(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces viewport pan
   * Original name: AccessibilityBindings.announceViewportPanned
   */
  announceViewportPanned(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces viewport zoom
   * Original name: AccessibilityBindings.announceViewportZoomed
   */
  announceViewportZoomed(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Announces boolean operation
   * Original name: AccessibilityBindings.announceBooleanOperation
   */
  announceBooleanOperation(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Shows keyboard selection mode changed toast
   * Original name: AccessibilityBindings.showKeyboardSelectionModeChangedToast
   */
  showKeyboardSelectionModeChangedToast(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles frame distribution tracking events
 * Original name: FrameDistributionTrackerBindings
 */
export class FrameDistributionTrackerBindings {
  shouldThrow: boolean

  /**
   * Handles frame distribution tracked event
   * Original name: FrameDistributionTrackerBindings.onFrameDistributionTrackedEvent
   */
  onFrameDistributionTrackedEvent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages custom palette colors
 * Original name: WhiteboardAnalyticsTsBindings
 */
export class WhiteboardAnalyticsTsBindings {
  shouldThrow: boolean

  /**
   * Checks if color is a custom palette color
   * Original name: WhiteboardAnalyticsTsBindings.isCustomPaletteColor
   */
  isCustomPaletteColor(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages slide theme styling and synchronization
 * Original name: SlidesTsBindings
 */
export class SlidesTsBindings {
  shouldThrow: boolean

  /**
   * Clears slide theme style preview
   * Original name: SlidesTsBindings.clearSlideThemeStylePreview
   */
  clearSlideThemeStylePreview(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Synchronizes slide theme atom
   * Original name: SlidesTsBindings.syncSlideThemeAtom
   */
  syncSlideThemeAtom(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Computes theme swap color variable mapping
   * Original name: SlidesTsBindings.computeThemeSwapColorVariableMapping
   */
  computeThemeSwapColorVariableMapping(...args: any[]): Map<any, any> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return new Map()
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages code layer operations and code snapshots
 * Original name: SitesJsBindings
 */
export class SitesJsBindings {
  shouldThrow: boolean

  /**
   * Updates code preview
   * Original name: SitesJsBindings.updatePreview
   */
  updatePreview(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Updates dirty responsive sets
   * Original name: SitesJsBindings.updateDirtyResponsiveSets
   */
  updateDirtyResponsiveSets(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets left panel tab to code
   * Original name: SitesJsBindings.setLeftPanelTabToCode
   */
  setLeftPanelTabToCode(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets code window panel to chat
   * Original name: SitesJsBindings.setCodeWindowPanelToChat
   */
  setCodeWindowPanelToChat(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Marks node as design to React
   * Original name: SitesJsBindings.markNodeAsDesignToReact
   */
  markNodeAsDesignToReact(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Marks code nodes as dirty
   * Original name: SitesJsBindings.markCodeNodesDirty
   */
  markCodeNodesDirty(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Synchronizes node source code
   * Original name: SitesJsBindings.syncNodeSourceCode
   */
  syncNodeSourceCode(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets automatic code file name for node name
   * Original name: SitesJsBindings.getAutomaticCodeFileNameForNodeName
   */
  getAutomaticCodeFileNameForNodeName(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Updates code snapshot state
   * Original name: SitesJsBindings.updateCodeSnapshotState
   */
  updateCodeSnapshotState(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Cleans up code snapshot overlays
   * Original name: SitesJsBindings.cleanupCodeSnapshotOverlays
   */
  cleanupCodeSnapshotOverlays(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets timestamp for code snapshot invalidated at
   * Original name: SitesJsBindings.getTimestampForCodeSnapshotInvalidatedAt
   */
  getTimestampForCodeSnapshotInvalidatedAt(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Checks if code snapshot is stale
   * Original name: SitesJsBindings.isCodeSnapshotStale
   */
  isCodeSnapshotStale(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Resnapshots if stale
   * Original name: SitesJsBindings.resnapshotIfStale
   */
  resnapshotIfStale(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Regenerates derived code file debounced
   * Original name: SitesJsBindings.regenerateDerivedCodeFileDebounced
   */
  regenerateDerivedCodeFileDebounced(...args: any[]): Promise<never> {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return Promise.reject()
  }

  /**
   * Shows Supabase deploy nudge
   * Original name: SitesJsBindings.showSupabaseDeployNudge
   */
  showSupabaseDeployNudge(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets auto deploy Supabase
   * Original name: SitesJsBindings.setAutoDeploySupabase
   */
  setAutoDeploySupabase(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Removes attachment
   * Original name: SitesJsBindings.removeAttachment
   */
  removeAttachment(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Pushes attachment source code
   * Original name: SitesJsBindings.pushAttachmentSourceCode
   */
  pushAttachmentSourceCode(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Pushes attachment error
   * Original name: SitesJsBindings.pushAttachmentError
   */
  pushAttachmentError(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Terminates one pending attachment
   * Original name: SitesJsBindings.terminateOnePendingAttachment
   */
  terminateOnePendingAttachment(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets Sprig user created code layer atom
   * Original name: SitesJsBindings.setSprigUserCreatedCodeLayerAtom
   */
  setSprigUserCreatedCodeLayerAtom(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if default set should be hidden on creation
   * Original name: SitesJsBindings.shouldHideDefaultSetOnCreation
   */
  shouldHideDefaultSetOnCreation(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Prewarms sandbox pool
   * Original name: SitesJsBindings.prewarmSandboxPool
   */
  prewarmSandboxPool(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets code layers default entry point file
   * Original name: SitesJsBindings.getCodeLayersDefaultEntryPointFile
   */
  getCodeLayersDefaultEntryPointFile(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Checks organization membership status
 * Original name: OrganizationMembershipChecker
 */
export class OrganizationMembershipChecker {
  shouldThrow: boolean

  /**
   * Checks if user is in organization
   * Original name: OrganizationMembershipChecker.isInOrg
   */
  isInOrg(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages clipboard summary operations
 * Original name: SummaryBindings
 */
export class SummaryBindings {
  shouldThrow: boolean

  /**
   * Gets summary as clipboard text
   * Original name: SummaryBindings.getSummaryAsClipboardText
   */
  getSummaryAsClipboardText(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles color calculations with ramp values and adjustments
 * Original name: ColorRampBindings
 */
export class ColorRampBindings {
  shouldThrow: boolean

  /**
   * Calculates color with ramp value
   * Original name: ColorRampBindings.calculateColorWithRampValue
   */
  calculateColorWithRampValue(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Calculates color with relative adjustment
   * Original name: ColorRampBindings.calculateColorWithRelativeAdjustment
   */
  calculateColorWithRelativeAdjustment(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Gets ramp value for color
   * Original name: ColorRampBindings.getRampValueForColor
   */
  getRampValueForColor(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Checks for zombie styles
 * Original name: StylesCheckBindings
 */
export class StylesCheckBindings {
  shouldThrow: boolean

  /**
   * Checks if style is a zombie style
   * Original name: StylesCheckBindings.isZombieStyle
   */
  isZombieStyle(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages variable data storage and retrieval
 * Original name: VariablesJsRuntimeAliasTsBindings
 */
export class VariablesJsRuntimeAliasTsBindings {
  shouldThrow: boolean

  /**
   * Stores variable data
   * Original name: VariablesJsRuntimeAliasTsBindings.storeVariableData
   */
  storeVariableData(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Fetches variable data
   * Original name: VariablesJsRuntimeAliasTsBindings.fetchVariableData
   */
  fetchVariableData(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Tracks user action timings and frame timing requests
 * Original name: UserActionTimingBindings
 */
export class UserActionTimingBindings {
  shouldThrow: boolean

  /**
   * Tracks user action timings
   * Original name: UserActionTimingBindings.trackUserActionTimings
   */
  trackUserActionTimings(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Requests frame timing
   * Original name: UserActionTimingBindings.requestFrameTiming
   */
  requestFrameTiming(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages slot enabling for open files
 * Original name: SlotsBindingsWeb
 */
export class SlotsBindingsWeb {
  shouldThrow: boolean

  /**
   * Enables slots for open file
   * Original name: SlotsBindingsWeb.enableSlotsForOpenFile
   */
  enableSlotsForOpenFile(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages synchronization of changed subscribed consumptions and mirror cache
 * Original name: AssetConsumptionMirrorBindings
 */
export class AssetConsumptionMirrorBindings {
  shouldThrow: boolean

  /**
   * Synchronizes changed subscribed consumptions
   * Original name: AssetConsumptionMirrorBindings.syncChangedSubscribedConsumptions
   */
  syncChangedSubscribedConsumptions(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Resets mirror cache
   * Original name: AssetConsumptionMirrorBindings.resetMirrorCache
   */
  resetMirrorCache(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages asset synchronization and mirror cache
 * Original name: AssetMirrorBindings
 */
export class AssetMirrorBindings {
  shouldThrow: boolean

  /**
   * Synchronizes added or changed assets
   * Original name: AssetMirrorBindings.syncAddedOrChangedAssets
   */
  syncAddedOrChangedAssets(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Synchronizes removed assets
   * Original name: AssetMirrorBindings.syncRemovedAssets
   */
  syncRemovedAssets(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Resets mirror cache
   * Original name: AssetMirrorBindings.resetMirrorCache
   */
  resetMirrorCache(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Handles scene loading and node change events
 * Original name: SceneLoadingHandler
 */
export class SceneLoadingHandler {
  shouldThrow: boolean

  /**
   * Indicates readiness
   * Original name: SceneLoadingHandler.ready
   */
  ready(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tracks events
   * Original name: SceneLoadingHandler.track
   */
  track(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Triggers viewer event
   * Original name: SceneLoadingHandler.triggerViewerEvent
   */
  triggerViewerEvent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles uncompressed schema
   * Original name: SceneLoadingHandler.handleUncompressedSchema
   */
  handleUncompressedSchema(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Handles uncompressed message
   * Original name: SceneLoadingHandler.handleUncompressedMessage
   */
  handleUncompressedMessage(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node changes before they are received
   * Original name: SceneLoadingHandler.willReceiveNodeChanges
   */
  willReceiveNodeChanges(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles node changes after they are received
   * Original name: SceneLoadingHandler.didReceiveNodeChanges
   */
  didReceiveNodeChanges(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets scene loading phase
   * Original name: SceneLoadingHandler.getSceneLoadingPhase
   */
  getSceneLoadingPhase(...args: any[]): number {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return 0
  }

  /**
   * Returns affine transform
   * Original name: SceneLoadingHandler.retAffineTransform
   */
  retAffineTransform(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Returns arc data
   * Original name: SceneLoadingHandler.retArcData
   */
  retArcData(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Returns GUID
   * Original name: SceneLoadingHandler.retGUID
   */
  retGUID(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Returns style ID
   * Original name: SceneLoadingHandler.retStyleId
   */
  retStyleId(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Returns vector
   * Original name: SceneLoadingHandler.retVector
   */
  retVector(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Executes for each field callback
   * Original name: SceneLoadingHandler.forEachFieldCallback
   */
  forEachFieldCallback(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if reverse variant bindings for ICs are disabled
   * Original name: SceneLoadingHandler.reverseVariantBindingsForICsDisabled
   */
  reverseVariantBindingsForICsDisabled(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Debugs prototype action from preview
   * Original name: SceneLoadingHandler.debugPrototypeActionFromPreview
   */
  debugPrototypeActionFromPreview(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets base screen ID
   * Original name: SceneLoadingHandler.getBaseScreenId
   */
  getBaseScreenId(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Checks if scaling mode is responsive
   * Original name: SceneLoadingHandler.isScalingModeResponsive
   */
  isScalingModeResponsive(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}

/**
 * Manages window operations and clipboard interactions
 * Original name: WindowManagerHandler
 */
export class WindowManagerHandler {
  shouldThrow: boolean

  /**
   * Handles window setup completion
   * Original name: WindowManagerHandler.windowSetupComplete
   */
  windowSetupComplete(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Handles window before tick
   * Original name: WindowManagerHandler.windowHandleBeforeTick
   */
  windowHandleBeforeTick(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Initializes prefers reduced motion
   * Original name: WindowManagerHandler.initPrefersReducedMotion
   */
  initPrefersReducedMotion(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Destroys window
   * Original name: WindowManagerHandler.destroyWindow
   */
  destroyWindow(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets window title
   * Original name: WindowManagerHandler.setTitle
   */
  setTitle(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets window title
   * Original name: WindowManagerHandler.title
   */
  title(...args: any[]): string {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return ''
  }

  /**
   * Shows alert
   * Original name: WindowManagerHandler.alert
   */
  alert(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets text caret bounds
   * Original name: WindowManagerHandler.setTextCaretBounds
   */
  setTextCaretBounds(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Checks if using multi-touch pointer events
   * Original name: WindowManagerHandler.usingMultiTouchPointerEvents
   */
  usingMultiTouchPointerEvents(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Sets expecting text input
   * Original name: WindowManagerHandler.setExpectingTextInput
   */
  setExpectingTextInput(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets expecting copy/cut event
   * Original name: WindowManagerHandler.setExpectingCopyCutEvent
   */
  setExpectingCopyCutEvent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Sets expecting paste event
   * Original name: WindowManagerHandler.setExpectingPasteEvent
   */
  setExpectingPasteEvent(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Executes copy command
   * Original name: WindowManagerHandler.execCommandCopy
   */
  execCommandCopy(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Reads clipboard contents
   * Original name: WindowManagerHandler.readClipboardContents
   */
  readClipboardContents(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Writes clipboard contents
   * Original name: WindowManagerHandler.writeClipboardContents
   */
  writeClipboardContents(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Clears clipboard contents
   * Original name: WindowManagerHandler.clearClipboardContents
   */
  clearClipboardContents(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Tries to read from clipboard as blob in HTML
   * Original name: WindowManagerHandler.tryToReadFromClipboardAsBlobInHTML
   */
  tryToReadFromClipboardAsBlobInHTML(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Tries to read substring from clipboard
   * Original name: WindowManagerHandler.tryToReadSubstringFromClipboard
   */
  tryToReadSubstringFromClipboard(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Tries to read files from clipboard
   * Original name: WindowManagerHandler.tryToReadFilesFromClipboard
   */
  tryToReadFilesFromClipboard(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Tries to detect spreadsheet data on clipboard
   * Original name: WindowManagerHandler.tryToDetectSpreadsheetDataOnClipboard
   */
  tryToDetectSpreadsheetDataOnClipboard(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Tries to detect line data on clipboard
   * Original name: WindowManagerHandler.tryToDetectLineDataOnClipboard
   */
  tryToDetectLineDataOnClipboard(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Writes to clipboard as blob in HTML
   * Original name: WindowManagerHandler.writeToClipboardAsBlobInHTML
   */
  writeToClipboardAsBlobInHTML(...args: any[]): boolean {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return false
  }

  /**
   * Focuses view
   * Original name: WindowManagerHandler.focusView
   */
  focusView(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  /**
   * Gets view with focus
   * Original name: WindowManagerHandler.viewWithFocus
   */
  viewWithFocus(...args: any[]): null {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
    return null
  }

  /**
   * Sets canvas view
   * Original name: WindowManagerHandler.setCanvasView
   */
  setCanvasView(...args: any[]): void {
    if (this.shouldThrow) {
      throw new Error('Method not implemented.')
    }
  }

  constructor(shouldThrow = false) {
    this.shouldThrow = shouldThrow
  }
}
export const $C = QuickActionsManager
export const A1 = CooperTsBindings
export const A2 = ImageProcessorHandler
export const Ag = VariablesBindingsWeb
export const Bj = CurrentUserInfo
export const Bz = ThumbHashHandler
export const CJ = WindowManagerHandler
export const EU = MainAppHandler
export const Fe = WhiteboardTemplatePreviewTsBindings
export const Gh = MissingFontScanner
export const Gm = SceneLoadingHandler
export const IW = NodeChatMessageHelper
export const Iz = SlidesTsBindings
export const LY = ColorManagementBindings
export const Lz = WebUserSyncing
export const M0 = SitesJsBindings
export const N = SceneManagerHandler
export const RN = EditScopeHandler
export const RU = HandoffScenegraphBindings
export const Rx = PerformanceAnalyticsManager
export const S_ = UndoRedoEventsBindings
export const TC = WebSelectionManager
export const Ud = DefaultStrokeWeightManager
export const V3 = ImageTsBindings
export const Vm = SpellCheckAPIBindings
export const W3 = SitesViewManager
export const WF = AutoLayoutBindings
export const Z3 = WhiteboardTsBindings
export const ZD = DesignLinterManager
export const _L = FullscreenWebSocketTsCallbacks
export const a5 = AutoSuggestAssetBindings
export const aO = UI3ColorManager
export const b_ = WhiteboardAnalyticsTsBindings
export const be = OrganizationMembershipChecker
export const c2 = PluginCallbacksManager
export const d1 = SummaryBindings
export const dJ = AccessibilityBindings
export const d_ = AssetConsumptionMirrorBindings
export const di = AutosaveSessionBindings
export const eZ = EmojiWheelBindings
export const gQ = SlotsBindingsWeb
export const jw = JsBindingsTestHelpers
export const k0 = EmojiTsBindings
export const l5 = MentionsTypeaheadManager
export const lM = WebMultiplayerManager
export const mk = KeyboardShortcutBindings
export const nn = WidgetManagerHandler
export const p6 = HandoffBindings
export const pG = StylesCheckBindings
export const qP = VariablesJsRuntimeAliasTsBindings
export const qQ = VideoTsBindings
export const qV = ColorRampBindings
export const rb = ThumbnailRequestManager
export const rf = HandoffCallbacks
export const rm = AutosuggestTextBindings
export const sG = AssetMirrorBindings
export const tO = CanvasSearchBindings
export const tg = CommentManagerImpl
export const tz = MouseBehaviorManager
export const uG = UserActionTimingBindings
export const uH = FrameDistributionTrackerBindings
export const vv = CodeBlockBindings
export const w4 = PdfImportBindings
export const wm = ZipImpl
export const xJ = DSAWebBindings
export const yR = RichTextBindings
export const yy = TsFontManualLoader
