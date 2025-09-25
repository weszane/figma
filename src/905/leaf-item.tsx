import type { GridLayoutMode, LeafDrilldownItem } from './drilldown-types'
import g from 'classnames'
import { memo, useCallback, useContext, useId, useMemo, useRef, useState } from 'react'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { Qx } from '../figma_app/8833'
import { rp } from '../figma_app/703988'
import { ph } from '../figma_app/709893'
import { useHandleMouseEvent } from '../figma_app/878298'
import { jr } from '../figma_app/896988'
import { KindEnum } from './129884'
import { getThemeBorderStyle, ThemeContext } from './187165'
import { Label } from './270045'
import { ButtonPrimitive } from './632989'
import { getVisibleTheme } from './640017'
import { ManuallyLabeledCheckbox } from './909715'
import { colorCSSManipulatorInstance } from './989956'
import { DrilldownContextValue } from './drilldown-types'
import { useKeyboardNavigationItemForLeaf } from './keyboard-navigation'

const GRID_CONTAINER_CLASS = 'drilldown_item--leafGridContainer--5m8-I drilldown_item--_gridContainer--2YTzW'

interface LeafItemProps {
  drilldownItem: LeafDrilldownItem
  gridLayoutMode: GridLayoutMode
  onLeafItemContextMenu?: (event: React.MouseEvent, item: LeafDrilldownItem) => void
  onClick: (event: React.MouseEvent, item: LeafDrilldownItem) => void
  selected: boolean
  multiselect?: boolean
  tabIndex?: number
  fauxFocused?: boolean
  top: number
  left: number
  width: number
  height: number
  getBackgroundColorForLeafItemThumbnail?: (item: any) => string | undefined
  getLeafItemTooltip?: (item: any, options?: any) => any
  getLeafItemThumbnail?: (item: any, mode?: GridLayoutMode) => React.ReactNode
  renderName?: boolean
  i: number
  numCols: number
  visible: boolean
  recordingKey?: string
}

function createThumbnailStyles(width: number) {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: `${width}px`,
    width: `${width}px`,
    flex: `0 0 ${width}px`,
    lineHeight: `${width}px`,
  }
}

export const LeafItem = memo<LeafItemProps>(({
  drilldownItem,
  gridLayoutMode,
  onLeafItemContextMenu,
  onClick,
  selected,
  multiselect,
  tabIndex,
  fauxFocused,
  top,
  left,
  width,
  height,
  getBackgroundColorForLeafItemThumbnail,
  getLeafItemTooltip,
  getLeafItemThumbnail,
  renderName,
  i,
  numCols,
  visible,
  recordingKey,
}) => {
  const [isTextTruncated, setIsTextTruncated] = useState(false)
  const shouldShowName = renderName && gridLayoutMode !== rp.SMALL
  const backgroundColor = getBackgroundColorForLeafItemThumbnail?.(drilldownItem.item)
  const themeContext = useContext(ThemeContext)
  const visibleTheme = getVisibleTheme()
  const shouldShowBorder = useMemo(
    () => !!backgroundColor && !!getThemeBorderStyle(themeContext, backgroundColor, visibleTheme),
    [backgroundColor, themeContext, visibleTheme],
  )

  const { setKeyboardNavigationElement } = useKeyboardNavigationItemForLeaf(i, numCols, !visible)

  const [containerClass, thumbnailClass] = useMemo(() => {
    if (gridLayoutMode === rp.SMALL || gridLayoutMode === rp.NORMAL) {
      return [
        GRID_CONTAINER_CLASS,
        'drilldown_item--leafGridThumbnailContainer--sFOtz drilldown_item--_gridThumbnailContainer--2HzOl drilldown_item--_thumbnailContainer--kDsBt',
      ]
    }
    else if (gridLayoutMode === rp.WIDE) {
      return [
        GRID_CONTAINER_CLASS,
        'drilldown_item--leafWideGridThumbnailContainer--bcL9L drilldown_item--_gridThumbnailContainer--2HzOl drilldown_item--_thumbnailContainer--kDsBt',
      ]
    }
    else {
      return [
        'drilldown_item--leafListContainer--BPWKm drilldown_item--_drilldownItemBase--YOfRd',
        'drilldown_item--leafListThumbnailContainer--rTXS7 drilldown_item--_thumbnailContainer--kDsBt',
      ]
    }
  }, [gridLayoutMode])

  const tooltipAttributes = useMemo(() => {
    const tooltip = getLeafItemTooltip
      ? getLeafItemTooltip(drilldownItem.item, {
          hideName: shouldShowName && !isTextTruncated,
        })
      : null
    return {
      'data-tooltip-type': KindEnum.TEXT,
      'data-tooltip-show-left': true,
      ...tooltip,
    }
  }, [drilldownItem.item, getLeafItemTooltip, shouldShowName, isTextTruncated])

  const handleContextMenu = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    onLeafItemContextMenu?.(e, drilldownItem)
  }, [onLeafItemContextMenu, drilldownItem])

  const handleClick = useCallback((e: React.MouseEvent) => {
    onClick(e, drilldownItem)
  }, [onClick, drilldownItem])

  const isList = gridLayoutMode === null
  let focusClass = ''

  if (fauxFocused && selected) {
    focusClass = isList
      ? 'drilldown_item--selectedListFauxFocused--jZ8Gn drilldown_item--selectedList--Y6KmC drilldown_item--listFauxFocused--0tIb6'
      : 'drilldown_item--selectedGridFauxFocused--Id7cL drilldown_item--selectedGrid--qI35b drilldown_item--gridFauxFocused--g8Aez'
  }
  else if (fauxFocused) {
    focusClass = isList
      ? 'drilldown_item--listFauxFocused--0tIb6'
      : 'drilldown_item--gridFauxFocused--g8Aez'
  }
  else if (selected) {
    focusClass = isList
      ? 'drilldown_item--selectedList--Y6KmC'
      : 'drilldown_item--selectedGrid--qI35b'
  }

  const thumbnail = getLeafItemThumbnail?.(drilldownItem.item, gridLayoutMode)

  const nameElement = shouldShowName && jsx(ph, {
    className: isList
      ? 'drilldown_item--displayText--pdJKd text--fontPos11--2LvXf text--_fontBase--QdLsd'
      : 'drilldown_item--displayTextWithMargin--A4LD0 drilldown_item--displayText--pdJKd text--fontPos11--2LvXf text--_fontBase--QdLsd',
    text: drilldownItem.displayText,
    onTruncationChange: setIsTextTruncated,
  })

  const { listItemThumbnailStylesOverride, leafListHeight } = useContext({} as any) // DrilldownContext would be passed here

  const thumbnailStyles = gridLayoutMode === rp.WIDE
    ? { height }
    : createThumbnailStyles(width)

  const checkboxId = useId()
  const mouseEventHandler = useHandleMouseEvent(
    `${recordingKey}${multiselect ? '' : '__UNUSED'}`,
    'click',
    handleClick,
  )

  const handleCheckboxChange = useCallback((_, { event }: { event: any }) => {
    mouseEventHandler(new MouseEvent('click', {
      shiftKey: event.nativeEvent instanceof PointerEvent && event.nativeEvent.shiftKey,
    }))
  }, [mouseEventHandler])

  const elementRef = useRef<HTMLDivElement>(null)
  const scrollIntoView = useCallback(() => {
    elementRef.current?.scrollIntoView({ block: 'nearest' })
  }, [])

  const content = jsxs(Fragment, {
    children: [
      thumbnail && jsx('div', {
        className: g()(thumbnailClass, {
          'drilldown_item--showBorder--Ksu3C': shouldShowBorder,
        }),
        style: {
          backgroundColor: colorCSSManipulatorInstance.format(backgroundColor || undefined),
          ...(gridLayoutMode ? thumbnailStyles : listItemThumbnailStylesOverride),
        },
        children: thumbnail,
      }),
      nameElement,
    ],
  })

  if (multiselect) {
    return jsx('div', {
      style: {
        top,
        left,
        ...(gridLayoutMode ? { width } : { height: leafListHeight }),
      },
      className: `${containerClass} ${focusClass}`,
      ref: elementRef,
      children: jsxs(Label, {
        htmlAttributes: tooltipAttributes,
        htmlFor: checkboxId,
        className: g()(cssBuilderInstance.flex.$, {
          [cssBuilderInstance.flexColumn.$]: !isList,
          [cssBuilderInstance.wFull.itemsCenter.$]: isList,
        }),
        children: [
          content,
          jsx('div', {
            className: g()(
              isList ? 'drilldown_item--checkboxList--kqmln' : 'drilldown_item--checkboxGrid--aXuyI',
              Qx,
              {
                'drilldown_item--checkboxChecked--c4ThM': selected,
              },
            ),
            children: jsx(ManuallyLabeledCheckbox, {
              checked: selected,
              onChange: handleCheckboxChange,
              id: checkboxId,
              ref: setKeyboardNavigationElement,
              htmlAttributes: {
                onFocus: scrollIntoView,
                onKeyDownCapture: (e: any) => jr(e.nativeEvent),
              },
            }),
          }),
        ],
      }),
    })
  }

  return jsx(ButtonPrimitive, {
    style: {
      top,
      left,
      ...(gridLayoutMode ? { width } : { height: leafListHeight }),
    },
    className: g()(containerClass, focusClass, Qx),
    onClick: handleClick,
    recordingKey,
    ref: setKeyboardNavigationElement,
    htmlAttributes: {
      ...tooltipAttributes,
      'data-testid': 'leaf-drilldown-item',
      'onContextMenu': handleContextMenu,
      tabIndex,
    },
    children: content,
  })
})

LeafItem.displayName = 'LeafItem'
