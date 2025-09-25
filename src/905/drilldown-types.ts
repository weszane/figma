export interface DrilldownItem {
  type: 'LEAF' | 'SUBPATH'
  displayText: string
  item: any
  id: string
  children?: DrilldownItem[]
  accessory?: React.ReactNode
}

export interface LeafDrilldownItem extends DrilldownItem {
  type: 'LEAF'
}

export interface SubpathDrilldownItem extends DrilldownItem {
  type: 'SUBPATH'
  children: DrilldownItem[]
}

export interface DrilldownContextValue {
  listItemHeight: number
  leafListHeight: number
  subpathListHeight: number
  subpathGridHeight: number
  listItemThumbnailStylesOverride: React.CSSProperties
  bottomParentCheckboxRowHeight: number
  queryId: {
    current: string | undefined
  }
}

export interface LayoutConfig {
  numCols: number
  thumbWidth: number
  thumbHeight: number
  rowHeight: number
}

export interface ItemPositions {
  totalHeight: number
  positions: Array<{ top: number; left: number }>
  spacerAboveLeaves: number
}

export type GridLayoutMode = 'SMALL' | 'NORMAL' | 'WIDE' | null

export interface DrilldownPickerProps {
  drilldownItemsRecordingKey?: string
  initialPath: string[]
  rootDrilldownItems: DrilldownItem[]
  scrollContainerHeight: number
  getLeafItemRecordingKey?: (item: any) => string[]
  isSelectedItem: (item: DrilldownItem) => boolean
  multiselect?: boolean
  onMultiselectCallback?: (items: any[], action: any) => void
  onLeafItemContextMenu?: (event: React.MouseEvent, item: DrilldownItem) => void
  onLeafItemDrilldown: (event: React.MouseEvent, item: DrilldownItem, isSearching: boolean, metadata: any, searchMetadata?: any) => void
  drilldownItemsKeySupplement?: string
  onSearch?: (query: string, sessionId: string | null, queryId: string) => Promise<any[]>
  searchFilter: (items: any[]) => any[]
  setIsSearching: (searching: boolean) => void
  emptyState?: React.ReactNode
  beforeItems?: React.ReactNode
  getBackgroundColorForLeafItemThumbnail?: (item: any) => string | undefined
  getLeafItemTooltip?: (item: any, options?: any) => any
  getLeafItemThumbnail?: (item: any, mode?: GridLayoutMode) => React.ReactNode
  getThumbnailGridLayoutForItems?: (items: DrilldownItem[]) => GridLayoutMode
  onDrilldownPathChange?: (path: string[], direction: 'up' | 'down') => void
  renderLeafItemNames?: boolean
  searchBarRef?: React.RefObject<any>
  pickerToggleRef?: React.RefObject<HTMLElement>
  additionalRowBottomMargin?: number
  extraHeightOnSearch?: number
  validLibrariesArePresent?: boolean
  isLoading?: boolean
  searchDebounceTime?: number
  searchEmptyStateCTA?: React.ReactNode
  searchBarPlaceholderText?: string
  pickerType?: string
  errorComponent?: React.ReactNode
  shouldUpdateServerResults?: boolean
  searchTypeOption?: { type: string }
  sessionId?: string | null
  query?: string
  setQuery?: (query: string) => void
  contextValue?: Partial<DrilldownContextValue>
  beforeItemsRefs?: React.RefObject<HTMLElement>[]
  recordingKey?: string
}
