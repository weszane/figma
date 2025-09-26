import { Component, PureComponent } from 'react'
import { useDispatch } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { LibraryItemTileContextMenu, LibraryItemTileContextMenuType } from '../905/275787'
import { RenderListByChunks } from '../905/605383'
import { getSingletonSceneGraph } from '../905/700578'
import { er } from '../905/753512'
import { showDropdownThunk } from '../905/929976'
import { FEditorType } from '../figma_app/53721'
import { fullscreenValue } from '../figma_app/455680'

import { lX } from '../figma_app/588397'
import { PrimaryWorkflowEnum } from '../figma_app/633080'
import { getAssetUniqueId } from '../figma_app/646357'
import { sortByPropertyWithOptions } from '../figma_app/656233'
import { sp } from '../figma_app/678300'
import { addToSelection, clearSelection } from '../figma_app/741237'

import { sortWithCollator } from '../figma_app/930338'

const COMPONENT_TILES_MARGIN_CLASS = 'component_tiles--margin24--vBPYF'
const STICKY_SECTION_CLASS = 'component_tiles--stickySection--aI9lh'
const DEFAULT_GUTTER_WIDTH = 16
const DEFAULT_PADDING = 16

interface LibraryItemTilesByPageProps {
  items: any[]
  width: number
  showLibraryModalUiRefresh?: boolean
  sceneGraphSelection?: any
  sceneGraph?: any
  dropdownShown?: any
  selectedView: any
  isFilePublished?: boolean
  ui3Compact?: boolean
  sourceForTracking?: string
  onItemClick?: (item: any) => void
  className?: string
}

interface LibraryItemTilesByPageState { }

/**
 * Component that renders library items grouped by page
 * Original name: $$w2
 */
export class LibraryItemTilesByPage extends Component<LibraryItemTilesByPageProps, LibraryItemTilesByPageState> {
  render() {
    const pageItemsMap = new Map<string, any[]>()
    const pageNameMap = new Map<string, string>()

    this.props.items.forEach((item) => {
      const containingFrame = item.containing_frame || {}
      const pageId = containingFrame.pageId || 'NO_PAGE'
      const pageName = containingFrame.pageName || ''

      pageNameMap.set(pageId, pageName)

      const pageItems = pageItemsMap.get(pageId)
      if (pageItems) {
        pageItems.push(item)
      }
      else {
        pageItemsMap.set(pageId, [item])
      }
    })

    const sortedPageIds = sortWithCollator(Array.from(pageItemsMap.keys()), key => pageNameMap.get(key) ?? '')
    const hasMultiplePages = sortedPageIds.length > 1

    return jsx('div', {
      children: sortedPageIds.map((pageId) => {
        const items = pageItemsMap.get(pageId) || []
        const pageName = pageNameMap.get(pageId) || ''
        const showPageTitle = hasMultiplePages && !!pageName

        return jsx(StickySection, {
          className: showPageTitle
            ? 'component_tiles--stickySectionPage--VcqIa component_tiles--stickySection--aI9lh'
            : STICKY_SECTION_CLASS,
          showTitle: showPageTitle,
          headerText: pageName,
          children: jsx(LibraryItemTilesByFrame, {
            ...this.props,
            items,
          }),
        }, pageId)
      }),
    })
  }
  static displayName = 'LibraryItemTilesByPage'
}


interface StickySectionProps {
  className?: string
  showTitle?: boolean
  headerText?: string
  children?: any
}

/**
 * Component that renders a sticky section with optional title
 * Original name: C
 */
class StickySection extends PureComponent<StickySectionProps> {
  render() {
    return jsxs('div', {
      className: `${COMPONENT_TILES_MARGIN_CLASS} ${this.props.className || STICKY_SECTION_CLASS}`,
      children: [
        this.props.showTitle && jsx('h3', {
          className: 'component_tiles--stickySectionHeader--Ae970 ellipsis--ellipsis--Tjyfa',
          children: this.props.headerText,
        }),
        this.props.children,
      ],
    })
  }
  static displayName = 'StickySection'
}


/**
 * Get containing frame based on item type
 * Original name: T
 */
function getContainingFrame(item: any) {
  switch (item.type) {
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return item.containingFrame
    default:
      return item.containing_frame
  }
}

/**
 * Get asset ID based on item type
 * Original name: k
 */
function getAssetId(item: any) {
  switch (item.type) {
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return item.assetId
    default:
      return item.node_id
  }
}

interface LibraryItemTilesByFrameProps extends LibraryItemTilesByPageProps { }

/**
 * Component that renders library items grouped by frame
 * Original name: R
 */
class LibraryItemTilesByFrame extends PureComponent<LibraryItemTilesByFrameProps> {
  private readonly CHUNK_SIZE = 5

  render() {
    const frameItemsMap: Record<string, any[]> = {}
    const ungroupedItems: any[] = []

    for (const item of this.props.items) {
      const containingFrame = getContainingFrame(item)
      if (containingFrame && containingFrame.nodeId && containingFrame.nodeId !== getAssetId(item)) {
        if (!frameItemsMap[containingFrame.nodeId]) {
          frameItemsMap[containingFrame.nodeId] = []
        }
        frameItemsMap[containingFrame.nodeId].push(item)
      }
      else {
        ungroupedItems.push(item)
      }
    }

    sortByPropertyWithOptions(ungroupedItems, 'name')

    const frameNodeIds = Object.keys(frameItemsMap)
    frameNodeIds.sort((id1, id2) => {
      const name1 = getContainingFrame(frameItemsMap[id1][0])?.name || ''
      const name2 = getContainingFrame(frameItemsMap[id2][0])?.name || ''
      return name1.toLowerCase() < name2.toLowerCase() ? -1 : 1
    })

    const frameListKey = frameNodeIds.join(',')

    return jsxs('div', {
      className: COMPONENT_TILES_MARGIN_CLASS,
      children: [
        ungroupedItems.length > 0 && jsx(LibraryItemTileGrid, {
          ...this.props,
          items: ungroupedItems,
        }),
        jsx(RenderListByChunks, {
          chunkSize: this.CHUNK_SIZE,
          listKey: frameListKey,
          children: frameNodeIds.map((frameNodeId) => {
            const items = frameItemsMap[frameNodeId]
            sortByPropertyWithOptions(items, 'name')
            const firstItem = items[0]

            return firstItem
              ? jsx(LibrarySection, {
                  title: getContainingFrame(firstItem)?.name || '',
                  children: jsx(LibraryItemTileGrid, {
                    ...this.props,
                    items,
                  }),
                }, frameNodeId)
              : null
          }),
        }),
      ],
    })
  }
  static displayName = 'LibraryItemTilesByFrame'
}


interface LibrarySectionProps {
  title?: string
  children?: any
}

/**
 * Component that renders a library section with title
 * Original name: N
 */
class LibrarySection extends Component<LibrarySectionProps> {
  render() {
    return jsxs('div', {
      className: 'component_tiles--section--qMua7',
      children: [
        jsx('div', {
          className: 'component_tiles--tallSectionHeader--75qCx ellipsis--ellipsis--Tjyfa',
          children: this.props.title,
        }),
        this.props.children,
      ],
    })
  }
  static displayName = 'LibrarySection'
}


/**
 * Calculate item width based on container width
 * Original name: P
 */
function calculateItemWidth(containerWidth: number, itemCount: number): number {
  const itemsPerRow = Math.floor(containerWidth / 100)
  return (containerWidth + 2 - (itemsPerRow - 1) * DEFAULT_GUTTER_WIDTH - 2 * itemCount) / itemsPerRow
}

/**
 * Calculate gutter width based on container and item dimensions
 * Original name: O
 */
function calculateGutterWidth(containerWidth: number, itemWidth: number, gutterWidth: number, padding: number): number {
  const adjustedWidth = containerWidth - 2 * padding
  const itemsPerRow = Math.round((adjustedWidth + gutterWidth) / (itemWidth + gutterWidth))
  const spacesBetweenItems = itemsPerRow - 1
  return gutterWidth + (adjustedWidth - (itemsPerRow * itemWidth + spacesBetweenItems * gutterWidth)) / spacesBetweenItems
}

interface LibraryItemTileGridProps extends LibraryItemTilesByPageProps { }

/**
 * Component that renders a grid of library item tiles
 * Original name: $$D1
 */
export function LibraryItemTileGrid(props: LibraryItemTileGridProps) {
  const useRefreshUi = props.showLibraryModalUiRefresh ?? false
  const dispatch = useDispatch<AppDispatch>()
  const shouldUsePortal = er()

  const gutterWidth = calculateGutterWidth(props.width, 64, 8, DEFAULT_PADDING)

  const handleContextMenu = async (item: any, event: React.MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()

    dispatch(showDropdownThunk({
      type: LibraryItemTileContextMenuType.LIBRARY_MODAL,
      data: {
        component: item,
        position: {
          top: event.clientY,
          left: event.clientX,
        },
      },
    }))

    if (props.sceneGraphSelection && props.sceneGraph && !sp(props.sceneGraph, props.sceneGraphSelection, item.node_id)) {
      clearSelection()
      await getSingletonSceneGraph().setCurrentPageFromNodeAsync(item.node_id)
      addToSelection([item.node_id])
      fullscreenValue.commit()
    }
  }

  let contextMenuComponent = null
  let hasContextMenuOpen = false

  if (props.dropdownShown && props.dropdownShown.type === LibraryItemTileContextMenuType.LIBRARY_MODAL) {
    contextMenuComponent = props.dropdownShown.data.component
  }

  const isFigJamFullscreen
    = props.selectedView.view === 'fullscreen'
      && props.selectedView.editorType === FEditorType.Whiteboard

  const itemElements: any[] = []
  const itemWidth = props.ui3Compact
    ? 64
    : useRefreshUi
      ? 56
      : calculateItemWidth(props.width, 24)

  for (const item of props.items) {
    const isContextMenuTarget = !!(contextMenuComponent && contextMenuComponent.node_id === getAssetId(item))
    hasContextMenuOpen = hasContextMenuOpen || isContextMenuTarget

    if (isFigJamFullscreen) {
      itemElements.push(jsx(lX, {
        recordingNodePath: getAssetId(item),
        item,
        width: itemWidth,
        height: itemWidth,
        showName: false,
        shouldHideDescription: true,
        isFigJam: true,
        noBackground: true,
      }, getAssetUniqueId(item)))
    }
    else {
      itemElements.push(jsx(lX, {
        buttonProps: {
          onContextMenu: (event) => {
            handleContextMenu(item, event)
          },
          onItemClick: props.onItemClick,
        },
        displayType: props.ui3Compact ? 'grid-compact' : 'grid',
        draggable: {
          sourceForTracking: props.sourceForTracking || '',
        },
        gutterWidth: props.ui3Compact ? gutterWidth : undefined,
        height: itemWidth,
        isFigJam: false,
        item,
        recordingNodePath: getAssetId(item),
        shouldHideTooltip: isContextMenuTarget,
        showName: true,
        width: itemWidth,
      }, getAssetUniqueId(item)))
    }
  }

  const containerClass = props.ui3Compact
    ? 'component_tiles--componentTilesCompact--7vcle component_tiles--componentTiles_v2--9-itI'
    : useRefreshUi
      ? 'component_tiles--componentTiles_v2--9-itI'
      : 'component_tiles--componentTiles--axRNc'

  const containerStyle = props.ui3Compact
    ? {
        marginLeft: `-${gutterWidth}px`,
      }
    : undefined

  const itemListKey = props.items
    .map(item => item.type === PrimaryWorkflowEnum.COMPONENT ? item.component_key : item.key)
    .join(',')

  return jsxs('div', {
    className: `${COMPONENT_TILES_MARGIN_CLASS} ${props.className ? props.className : ''}`,
    children: [
      jsx('div', {
        className: useRefreshUi || props.ui3Compact
          ? 'component_tiles--componentContainer_v2--cgysm'
          : 'component_tiles--componentContainer--BZZuQ',
        children: jsx(RenderListByChunks, {
          chunkSize: 50,
          listKey: itemListKey,
          className: containerClass,
          style: containerStyle,
          children: isFigJamFullscreen
            ? jsx('div', {
                className: 'component_tiles--figjamManageLibrariesGridContainer--9go35',
                children: itemElements,
              })
            : itemElements,
        }),
      }),
      hasContextMenuOpen && jsx(LibraryItemTileContextMenu, {
        hideForLocalComponents: !props.isFilePublished,
        dropdownShown: props.dropdownShown,
        selectedView: props.selectedView,
        usePortal: shouldUsePortal,
      }),
    ],
  })
}

export const DEFAULT_ITEM_SIZE = 64
export const $z = DEFAULT_ITEM_SIZE
export const We = LibraryItemTileGrid
export const ev = LibraryItemTilesByPage
