import { useMemo } from 'react'
import { parsePxInt } from '../figma_app/783094'
import { bH0 } from '../figma_app/27776'
import { rp } from '../figma_app/703988'
import { LayoutConfig, ItemPositions, DrilldownItem, GridLayoutMode } from './drilldown-types'

const GRID_SPACING = 16
const WIDE_THUMBNAIL_HEIGHT = parsePxInt(bH0)

export function createDrilldownItems<T>(
  items: T[], 
  getDisplayText: (item: T) => string, 
  getId: (item: T) => string
): DrilldownItem[] {
  return items.map(item => ({
    type: 'LEAF' as const,
    displayText: getDisplayText(item),
    item,
    id: getId(item),
  }))
}

export function calculateLayoutConfig(
  modalWidth: number,
  gridLayoutMode: GridLayoutMode,
  numColsForSmall: number,
  numColsForNormal: number,
  leafListHeight: number,
  additionalRowBottomMargin: number
): LayoutConfig {
  const availableWidth = modalWidth - 2 * GRID_SPACING

  switch (gridLayoutMode) {
    case rp.WIDE:
      return {
        numCols: 1,
        thumbWidth: availableWidth,
        thumbHeight: WIDE_THUMBNAIL_HEIGHT,
        rowHeight: WIDE_THUMBNAIL_HEIGHT + additionalRowBottomMargin,
      }

    case rp.NORMAL: {
      const thumbWidth = Math.floor((availableWidth - GRID_SPACING * (numColsForNormal - 1)) / numColsForNormal)
      const evenThumbWidth = thumbWidth - (thumbWidth % 2)
      return {
        numCols: numColsForNormal,
        thumbWidth: evenThumbWidth,
        thumbHeight: evenThumbWidth,
        rowHeight: evenThumbWidth + additionalRowBottomMargin,
      }
    }

    case rp.SMALL: {
      const thumbWidth = Math.floor((availableWidth - GRID_SPACING * (numColsForSmall - 1)) / numColsForSmall)
      const evenThumbWidth = thumbWidth - (thumbWidth % 2)
      return {
        numCols: numColsForSmall,
        thumbWidth: evenThumbWidth,
        thumbHeight: evenThumbWidth,
        rowHeight: evenThumbWidth,
      }
    }

    default:
      return {
        numCols: 1,
        thumbWidth: 0,
        thumbHeight: 0,
        rowHeight: leafListHeight,
      }
  }
}

export function calculateItemPositions(
  drilldownItems: DrilldownItem[],
  isList: boolean,
  layout: LayoutConfig,
  subpathHeight: number
): ItemPositions {
  return useMemo(() => {
    const subpathItems = drilldownItems.filter(item => item.type === 'SUBPATH')
    const leafItems = drilldownItems.filter(item => item.type === 'LEAF')

    const subpathSpacing = subpathItems.length > 0 ? 8 : 0
    const subpathTotalHeight = subpathItems.length * subpathHeight + subpathSpacing

    const leafTotalHeight = isList
      ? leafItems.length * layout.rowHeight
      : Math.ceil(leafItems.length / layout.numCols) * (layout.rowHeight + GRID_SPACING)

    const spacerAboveLeaves = isList || leafItems.length === 0 ? 0 : 8
    const bottomSpacing = leafItems.length > 0 ? GRID_SPACING : 0

    const positions = drilldownItems.map((item, index) => {
      if (item.type === 'SUBPATH') {
        const subpathIndex = index - leafItems.length
        return {
          top: subpathIndex * subpathHeight + (leafTotalHeight + spacerAboveLeaves + bottomSpacing),
          left: 0,
        }
      } else {
        // LEAF item
        if (isList) {
          return {
            top: index * layout.rowHeight + spacerAboveLeaves,
            left: 0,
          }
        } else {
          const col = index % layout.numCols
          const row = Math.floor(index / layout.numCols)
          return {
            top: row * (layout.rowHeight + GRID_SPACING) + spacerAboveLeaves,
            left: col * (layout.thumbWidth + GRID_SPACING) + GRID_SPACING,
          }
        }
      }
    })

    return {
      totalHeight: subpathTotalHeight + leafTotalHeight + spacerAboveLeaves + bottomSpacing,
      positions,
      spacerAboveLeaves,
    }
  }, [drilldownItems, isList, layout.numCols, layout.rowHeight, layout.thumbWidth, subpathHeight])
}

export function getVisibleRange(
  scrollTop: number,
  scrollContainerHeight: number,
  rowHeight: number
): [number, number] {
  const buffer = 2 * scrollContainerHeight
  return [
    scrollTop - buffer - rowHeight,
    scrollTop + scrollContainerHeight + buffer
  ]
}

export function findSelectedItemIndices(
  drilldownItems: DrilldownItem[],
  isSelectedItem: (item: DrilldownItem) => boolean
): number[] {
  const indices: number[] = []
  drilldownItems.forEach((item, index) => {
    if (isSelectedItem(item)) {
      indices.push(index)
    }
  })
  return indices
}

export function calculateInitialScrollTop(
  selectedIndex: number | null,
  positions: Array<{ top: number; left: number }>,
  spacerAboveLeaves: number
): number {
  if (selectedIndex === null) return 0

  const position = positions[selectedIndex - 1]
  return position ? Math.max(0, position.top - spacerAboveLeaves) : 0
}
