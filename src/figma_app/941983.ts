import { localStorageRef } from '../905/657224'
import { FEditorType } from '../figma_app/53721'
import { ViewType } from '../figma_app/763686'
/**
 * Parses a string and returns true if it equals "1".
 * @param value - The string to parse.
 * @returns True if value is "1", otherwise false.
 * (Original function: s)
 */
function parseShowSidebar(value: string): boolean {
  return parseInt(value) === 1
}

/**
 * Editor UI State Manager
 * Handles sidebar visibility, split positions, and editor type state.
 * (Original class: $$o0)
 */
class EditorUIStateManager {
  /** Default sidebar visibility per editor type */
  defaultShowSidebar: Record<FEditorType, boolean> = {
    [FEditorType.Design]: true,
    [FEditorType.DevHandoff]: true,
    [FEditorType.Whiteboard]: false,
    [FEditorType.Slides]: false,
    [FEditorType.Sites]: true,
    [FEditorType.Cooper]: true,
    [FEditorType.Illustration]: true,
    [FEditorType.Figmake]: true,
  }

  /** Default properties panel split position per editor type */
  defaultPropertiesPanelSplitPosition: Record<FEditorType, number> = {
    [FEditorType.Design]: 241,
    [FEditorType.DevHandoff]: 321,
    [FEditorType.Whiteboard]: 241,
    [FEditorType.Slides]: 241,
    [FEditorType.Sites]: 241,
    [FEditorType.Cooper]: 241,
    [FEditorType.Illustration]: 241,
    [FEditorType.Figmake]: 241,
  }

  prefix: string = ''
  editorType: FEditorType = FEditorType.Design
  loggedIn: boolean = true
  showUi: boolean = true

  /**
   * Returns the default sidebar split position for a given editor type.
   * (Original method: defaultSidebarSplitPosition)
   */
  defaultSidebarSplitPosition(editorType: FEditorType): number {
    const positions: Record<FEditorType, number> = {
      [FEditorType.Design]: 240,
      [FEditorType.Whiteboard]: 240,
      [FEditorType.DevHandoff]: 320,
      [FEditorType.Slides]: 200,
      [FEditorType.Sites]: 240,
      [FEditorType.Cooper]: 240,
      [FEditorType.Illustration]: 240,
      [FEditorType.Figmake]: 240,
    }
    return positions[editorType]
  }

  /**
   * Sets the current editor type and updates the prefix accordingly.
   * (Original method: setEditorType)
   */
  setEditorType(editorType: FEditorType): void {
    this.editorType = editorType
    this.prefix = this.getPrefixForEditorType(editorType)
  }

  /**
   * Returns the prefix string for a given editor type.
   * (Extracted from setEditorType)
   */
  getPrefixForEditorType(editorType: FEditorType): string {
    switch (editorType) {
      case FEditorType.Design:
        return ''
      case FEditorType.Whiteboard:
        return 'whiteboard-'
      case FEditorType.Slides:
        return 'piper-'
      default:
        return ''
    }
  }

  /**
   * Sets the logged-in state.
   * (Original method: setLoggedIn)
   */
  setLoggedIn(isLoggedIn: boolean): void {
    this.loggedIn = isLoggedIn
  }

  /**
   * Retrieves a value from localStorage and parses it using the provided parser.
   * (Original method: getLocalStorageValue)
   */
  getLocalStorageValue<T>(key: string, parser: (value: string) => T): T | null {
    const storageKey = `${this.prefix}${key}`
    if (localStorageRef) {
      const storedValue = localStorageRef.getItem(storageKey)
      if (storedValue) {
        return parser(storedValue)
      }
    }
    return null
  }

  /**
   * Returns whether the sidebar should be shown.
   * (Original getter: showSidebar)
   */
  get showSidebar(): boolean {
    return (
      this.getLocalStorageValue('show-sidebar', parseShowSidebar)
      ?? this.defaultShowSidebar[this.editorType]
    )
  }

  /**
   * Returns the sidebar split position.
   * (Original getter: sidebarSplitPosition)
   */
  get sidebarSplitPosition(): number {
    const key
      = this.editorType === FEditorType.DevHandoff
        ? 'dev-handoff-sidebar-split-position'
        : 'sidebar-split-position'
    return (
      this.getLocalStorageValue(key, parseFloat)
      || this.defaultSidebarSplitPosition(this.editorType)
    )
  }

  /**
   * Returns the properties panel split position.
   * (Original getter: propertiesPanelSplitPosition)
   */
  get propertiesPanelSplitPosition(): number {
    return (
      this.getLocalStorageValue('properties-panel-split-position', parseFloat)
      || this.defaultPropertiesPanelSplitPosition[this.editorType]
    )
  }

  /**
   * Returns the top-level mode based on login state.
   * (Original getter: topLevelMode)
   */
  get topLevelMode(): ViewType {
    return this.loggedIn ? ViewType.LAYOUT : ViewType.PREVIEW
  }
}

// Export with refactored name and original alias
export const EditorUIState = new EditorUIStateManager()
export const R = EditorUIState
