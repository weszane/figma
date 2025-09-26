import type {
  DrilldownContextValue,
  DrilldownItem,
  DrilldownPickerProps,
  GridLayoutMode,
} from './drilldown-types'
import g from 'classnames'
import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { useDebouncedCallback } from 'use-debounce'
import { Ies, NLQ, vdd } from '../figma_app/27776'
import { LR } from '../figma_app/120210'
import { useSubscribedLibraries } from '../figma_app/155728'
import { Kr } from '../figma_app/201703'
import { Nv } from '../figma_app/318590'
import { useCurrentPublicPlan } from '../figma_app/465071'
import { throwTypeError } from '../figma_app/465776'
import { selectOpenFile } from '../figma_app/516028'
import { useUUIDSubscription } from '../figma_app/517115'
import { IW } from '../figma_app/563413'
import { getExperimentConfigAsync, selectExperimentConfigHook } from '../figma_app/594947'
import { parsePxInt } from '../figma_app/783094'
import { B0 } from '../figma_app/807786'
import { generateRecordingKey } from '../figma_app/878298'
import { n as _$$n } from '../vendor/547481'
import { h as _$$h3 } from './207101'
import { TQ, Zl } from './211621'
import { Wu } from './221848'
import { HiddenLabel, Label } from './270045'
import { Checkbox } from './274480'
import { renderI18nText } from './303541'
import { P as _$$P } from './347284'
import { deepEqual } from './382883'
import { k as _$$k } from './443820'
import { analyticsEventManager, trackEventAnalytics } from './449184'
import { $ as _$$$, h as _$$h2 } from './455748'
import { fileLaunchHelper as _$$S2 } from './459477'
import { getFeatureFlags } from './601108'
import { generateUUIDv4 } from './871474'
import { Pk } from './893698'
import { ManuallyLabeledCheckbox } from './909715'

import { styleBuilderInstance } from './941192'
import {
  calculateInitialScrollTop,
  calculateItemPositions,
  calculateLayoutConfig,
  createDrilldownItems,
  findSelectedItemIndices,
  getVisibleRange,
} from './drilldown-utils'
// Import the extracted modules
import { KeyboardNavigationProvider, useKeyboardNavigationItemForSearch } from './keyboard-navigation'
import { LeafItem } from './leaf-item'
import { ParentSubpathItem } from './parent-subpath-item'
import { SubpathItem } from './subpath-item'

// Constants
const GRID_SPACING = 16
const listItemHeight = parsePxInt(vdd)
const leafListHeight = parsePxInt(NLQ)
const subpathGridHeight = parsePxInt(Ies)

const defaultContextValue: DrilldownContextValue = {
  listItemHeight,
  leafListHeight,
  subpathListHeight: listItemHeight,
  subpathGridHeight: listItemHeight,
  listItemThumbnailStylesOverride: {},
  bottomParentCheckboxRowHeight: 40,
  queryId: { current: undefined },
}

const DrilldownContext = createContext(defaultContextValue)

// Main component
export function DrilldownPicker(props: DrilldownPickerProps) {
  const contextValue = useMemo(() => {
    const queryIdRef = useRef<string | undefined>(undefined)
    return {
      ...defaultContextValue,
      queryId: queryIdRef,
      leafListHeight,
      subpathGridHeight,
      ...props.contextValue,
    }
  }, [props.contextValue])

  return jsx(DrilldownContext.Provider, {
    value: contextValue,
    children: jsx(DrilldownPickerInternal, props),
  })
}

function DrilldownPickerInternal(props: DrilldownPickerProps) {
  const {
    drilldownItemsRecordingKey,
    initialPath,
    rootDrilldownItems,
    scrollContainerHeight,
    getLeafItemRecordingKey,
    isSelectedItem,
    multiselect,
    onMultiselectCallback,
    onLeafItemContextMenu,
    onLeafItemDrilldown,
    drilldownItemsKeySupplement,
    onSearch,
    searchFilter,
    setIsSearching,
    emptyState,
    beforeItems,
    getBackgroundColorForLeafItemThumbnail,
    getLeafItemTooltip,
    getLeafItemThumbnail,
    getThumbnailGridLayoutForItems,
    onDrilldownPathChange,
    renderLeafItemNames,
    searchBarRef,
    pickerToggleRef,
    additionalRowBottomMargin = 0,
    extraHeightOnSearch = 0,
    validLibrariesArePresent,
    isLoading,
    searchDebounceTime = 200,
    searchEmptyStateCTA,
    searchBarPlaceholderText,
    pickerType,
    errorComponent,
    shouldUpdateServerResults,
    searchTypeOption,
    sessionId,
  } = props

  const isInstanceSwapOrPreferred = pickerType === Zl.INSTANCE_SWAP_PICKER || pickerType === Zl.PREFERRED_VALUES_PICKER
  const animationStateRef = useRef<any>(null)
  const [currentPath, setCurrentPath] = useState(initialPath)
  const hasLoadingCompleted = _$$h2(isLoading) && !isLoading
  const hasInitialized = useRef(false)

  useEffect(() => {
    if (!hasLoadingCompleted || hasInitialized.current || deepEqual(initialPath, currentPath))
      return
    setCurrentPath(initialPath)
    hasInitialized.current = true
  }, [hasLoadingCompleted, initialPath, currentPath])

  const [internalQuery, setInternalQuery] = useState('')
  const [query, setQuery] = props.query !== undefined && props.setQuery !== undefined
    ? [props.query, props.setQuery]
    : [internalQuery, setInternalQuery]

  const [isSearchLoading, setIsSearchLoading] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const { queryId } = useContext(DrilldownContext)
  const [filteredResults, setFilteredResults] = useState<any[]>([])

  const aiResultsEnabled = Nv(true)
  const openFile = useSelector(selectOpenFile)
  const openFileProperties = _$$S2.useOpenFileProperties()
  const selectedViewFileKey = useSelector((state: any) =>
    state.selectedView.view === 'fullscreen' ? state.selectedView.fileKey : undefined,
  )
  const currentPlan = useCurrentPublicPlan('_DrilldownPicker').unwrapOr(null)?.tier
  const uuidSubscription = useUUIDSubscription()

  useEffect(() => {
    setFilteredResults(searchFilter(searchResults))
  }, [searchResults, searchFilter])

  const timerRef = useRef<(() => any) | null>(null)
  const subscribedLibrariesCount = useSubscribedLibraries().data?.length ?? 0
  const { getConfig } = selectExperimentConfigHook('exp_asset_search_refactor', undefined, true)

  const debouncedSearch = useDebouncedCallback(async (searchQuery: string) => {
    if (!onSearch)
      return

    queryId.current = generateUUIDv4()
    const results = await onSearch(searchQuery, sessionId, queryId.current)
    const timerResult = timerRef.current?.()

    if (isInstanceSwapOrPreferred) {
      if (sessionId === null) {
        trackEventAnalytics('asset_search.missing_session_id', {
          previousSessionId: '',
          entryPoint: 'instance_swap',
        }, { forwardToDatadog: true })
      }

      if (!getFeatureFlags().dse_refactor_asset_search_debug_only && !getConfig().getValue('use_refactor', false)) {
        const analyticsData = {
          aiResultsEnabled,
          elapsedTime: timerResult?.elapsedTime,
          backgrounded: timerResult?.backgrounded,
          query: searchQuery,
          queryId: queryId.current,
          subscribedSearchResultCount: results.length,
          entryPoint: 'instance_swap',
          fileKey: openFile?.key || undefined,
          fileOrgId: openFile?.parentOrgId ?? undefined,
          fileTeamId: openFile?.teamId ?? undefined,
          numSubscribedLibraries: subscribedLibrariesCount,
          searchType: searchTypeOption?.type,
          selectedViewFileKey,
          totalShownResults: results.length,
          tier: currentPlan,
        }

        await getExperimentConfigAsync('exp_asset_search_refactor')
        analyticsEventManager.trackDefinedEvent('assets_panel.search_time', {
          ...analyticsData,
          searchSessionId: sessionId,
        })
        analyticsEventManager.trackDefinedEvent('asset_search.query_result', {
          ...analyticsData,
          componentSuggestionSessionId: uuidSubscription,
          sessionId,
        })
      }
    }

    setSearchResults(results)
    setIsSearchLoading(false)
    timerRef.current = null
  }, searchDebounceTime)

  const handleSearch = useCallback((searchQuery: string, trackEnd: boolean) => {
    animationStateRef.current = null

    if (searchQuery) {
      setIsSearchLoading(true)
      timerRef.current = timerRef.current ?? B0()
      debouncedSearch(searchQuery)
      setIsSearching(true)
    }
    else {
      if (trackEnd && isInstanceSwapOrPreferred) {
        analyticsEventManager.trackDefinedEvent('instance_swap_picker.search_end', {
          ...openFileProperties,
          sessionId,
          isPreferredValues: pickerType === Zl.PREFERRED_VALUES_PICKER,
        })
      }
      setIsSearchLoading(false)
      setIsSearching(false)
      queryId.current = undefined
      debouncedSearch.cancel()
      setSearchResults([])
    }
    setQuery(searchQuery)
  }, [debouncedSearch, isInstanceSwapOrPreferred, openFileProperties, pickerType, sessionId, setIsSearching, setQuery, queryId])

  const clearSearch = useCallback(() => {
    setQuery('')
  }, [setQuery])

  const previousQuery = useRef(query)
  const hasQueryChanged = _$$h2(query)
  const hasSearchTypeChanged = _$$h2(searchTypeOption)

  useEffect(() => {
    if (hasQueryChanged || hasSearchTypeChanged) {
      setSearchResults([])
      handleSearch(query, hasQueryChanged)
      previousQuery.current = query
    }
  }, [query, handleSearch, hasQueryChanged, hasSearchTypeChanged])

  useEffect(() => {
    if (shouldUpdateServerResults) {
      handleSearch(query, false)
    }
  }, [shouldUpdateServerResults, query, handleSearch])

  _$$h3(() => {
    if (searchBarRef?.current?.searchInput) {
      searchBarRef.current.searchInput.select()
    }
  })

  // Calculate current drilldown state
  const { validPath, drilldownItems, parent, indexOfParent } = useMemo(() => {
    if (query) {
      return {
        validPath: [],
        drilldownItems: filteredResults,
        parent: null,
        indexOfParent: -1,
      }
    }

    let items = rootDrilldownItems
    let parentItem = null
    let parentIndex = -1
    const path = []

    for (const pathSegment of currentPath) {
      const subpaths = items.filter(item => item.type === 'SUBPATH')
      const index = subpaths.findIndex(item => item.id === pathSegment)
      const foundItem = subpaths[index] as any

      if (!foundItem)
        break

      items = foundItem.children
      path.push(pathSegment)
      parentItem = foundItem
      parentIndex = index
    }

    return {
      validPath: path,
      drilldownItems: items,
      parent: parentItem,
      indexOfParent: parentIndex,
    }
  }, [rootDrilldownItems, currentPath, query, filteredResults])

  // Navigation handlers
  const handleSubpathDrilldown = useCallback((id: string) => {
    animationStateRef.current = {
      drilldownItems,
      validPath,
      parent,
      direction: 'down',
    }
    const newPath = [...validPath, id]
    setCurrentPath(newPath)
    onDrilldownPathChange?.(newPath, 'down')
  }, [drilldownItems, onDrilldownPathChange, parent, validPath])

  const handleSubpathClick = useCallback((_: React.MouseEvent, item: DrilldownItem) => {
    handleSubpathDrilldown(item.id)
  }, [handleSubpathDrilldown])

  const handleDrillup = useCallback(() => {
    if (!parent)
      return

    animationStateRef.current = {
      drilldownItems,
      validPath,
      parent,
      direction: 'up',
    }
    const newPath = validPath.slice(0, validPath.length - 1)
    setCurrentPath(newPath)
    onDrilldownPathChange?.(newPath, 'up')
  }, [validPath, drilldownItems, onDrilldownPathChange, parent])

  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false)
  const shouldShowContent = validLibrariesArePresent || rootDrilldownItems.length > 0 || !!query
  const isSearchEmpty = query && !isSearchLoading && drilldownItems.length === 0

  // Multi-select functionality
  const multiselectCheckbox = useMemo(() => {
    if (!multiselect || !drilldownItems.some(item => item.type === 'LEAF')) {
      return null
    }

    const checkboxId = useId()
    const { checked, mixed } = useMemo(() => {
      const hasSelected = drilldownItems.some(isSelectedItem)
      const hasUnselected = drilldownItems.some(item => item.type === 'LEAF' && !isSelectedItem(item))
      return {
        checked: hasSelected,
        mixed: hasSelected && hasUnselected,
      }
    }, [drilldownItems, isSelectedItem])

    const handleChange = useCallback(() => {
      const action = checked && !mixed ? Wu.DESELECT : Wu.SELECT
      const leafItems = drilldownItems.filter(item => item.type === 'LEAF').map(item => item.item)
      onMultiselectCallback?.(leafItems, action)
    }, [drilldownItems, onMultiselectCallback, checked, mixed])

    const hideLabel = false // You can make this configurable if needed

    return hideLabel
      ? jsx(Checkbox, {
          checked,
          mixed,
          recordingKey: generateRecordingKey(props.recordingKey ?? '', 'drilldownItem-parentSubpath-checkbox', parent?.id ?? ''),
          onChange: handleChange,
          label: jsx(HiddenLabel, {
            children: renderI18nText('design_systems.instance_swap_picker.select_all_instances'),
          }),
        })
      : jsxs(Fragment, {
          children: [
            jsx(Label, {
              htmlFor: checkboxId,
              children: renderI18nText('design_systems.instance_swap_picker.select_all_instances'),
            }),
            jsx(ManuallyLabeledCheckbox, {
              id: checkboxId,
              checked,
              mixed,
              recordingKey: generateRecordingKey(props.recordingKey ?? '', 'drilldownItem-parentSubpath-checkbox', parent?.id ?? ''),
              onChange: handleChange,
            }),
          ],
        })
  }, [multiselect, drilldownItems, isSelectedItem, onMultiselectCallback, props.recordingKey, parent?.id])

  const { bottomParentCheckboxRowHeight } = useContext(DrilldownContext)
  const adjustedScrollHeight = useMemo(() => {
    let height = scrollContainerHeight
    if (query.length)
      height += extraHeightOnSearch
    if (multiselectCheckbox)
      height -= bottomParentCheckboxRowHeight
    return height
  }, [bottomParentCheckboxRowHeight, extraHeightOnSearch, multiselectCheckbox, query.length, scrollContainerHeight])

  // Main content
  const mainContent = jsx(DrilldownItemsContainer, {
    additionalRowBottomMargin,
    drilldownItems,
    errorComponent,
    getBackgroundColorForLeafItemThumbnail,
    getLeafItemRecordingKey,
    getLeafItemThumbnail,
    getLeafItemTooltip,
    getThumbnailGridLayoutForItems,
    indexOfParent,
    isCurrentlyVisible: true,
    isSearching: query !== '',
    isSelectedItem,
    multiselect,
    onDrillup: handleDrillup,
    onLeafItemContextMenu,
    onLeafItemDrilldown: (e: React.MouseEvent, item: DrilldownItem, index: number) =>
      onLeafItemDrilldown(e, item, !!query, {
        currentDrilldownItems: drilldownItems,
        parentId: parent?.id ?? null,
        index: index ?? -1,
      }, {
        query,
        queryId: queryId.current,
      }),
    onSubpathDrilldown: handleSubpathClick,
    parent,
    pickerType,
    recordingKey: generateRecordingKey(props.recordingKey, drilldownItemsRecordingKey),
    renderLeafItemNames,
    scrollContainerHeight: adjustedScrollHeight,
    searchBarFocused: isSearchBarFocused,
  }, query || (drilldownItemsKeySupplement
    ? validPath.join('/')
    : validPath.join('/') + (drilldownItemsKeySupplement || '')))

  // Animation handling
  const [isReducedMotion] = Pk()
  const hasReducedMotion = _$$$(isReducedMotion)
  useEffect(() => {
    if (hasReducedMotion) {
      animationStateRef.current = null
    }
  }, [hasReducedMotion])

  let animationClass = ''
  let animatedContent = mainContent

  if (animationStateRef.current && !query) {
    animationClass = animationStateRef.current.direction === 'up'
      ? 'drilldown_picker--animationContainerUp--B2bhu drilldown_picker--_animationContainer--aaEJ3'
      : 'drilldown_picker--animationContainerDown--UOLGj drilldown_picker--_animationContainer--aaEJ3'

    const previousContent = jsx(DrilldownItemsContainer, {
      additionalRowBottomMargin,
      drilldownItems: animationStateRef.current.drilldownItems,
      errorComponent,
      getBackgroundColorForLeafItemThumbnail,
      getLeafItemRecordingKey,
      getLeafItemThumbnail,
      getLeafItemTooltip,
      getThumbnailGridLayoutForItems,
      isCurrentlyVisible: false,
      isSearching: false,
      isSelectedItem,
      multiselect,
      onDrillup: () => {},
      onLeafItemContextMenu: () => {},
      onLeafItemDrilldown: () => {},
      onSubpathDrilldown: () => {},
      parent: animationStateRef.current.parent,
      pickerType,
      renderLeafItemNames,
      scrollContainerHeight: adjustedScrollHeight,
    }, animationStateRef.current.validPath.join('/'))

    animatedContent = jsxs(Fragment, {
      children: [
        animationStateRef.current.direction === 'down' && previousContent,
        mainContent,
        animationStateRef.current.direction === 'up' && previousContent,
      ],
    })
  }

  const closeModal = LR()
  const handleKeyDown = useCallback((e: KeyboardEvent) =>
    e.key === 'Escape' && (query ? clearSearch() : closeModal(), true), [closeModal, clearSearch, query])

  const isShowingLoader = isLoading || (isSearchLoading && filteredResults.length === 0)

  return jsx(KeyboardNavigationProvider, {
    beforeItemsRefs: props.beforeItemsRefs || [],
    shouldRender: shouldShowContent && !isShowingLoader,
    searchBarRef,
    pickerToggleRef,
    onDrillup: handleDrillup,
    onSubpathDrilldown: handleSubpathDrilldown,
    indexOfParent,
    isSearching: query !== '' && !isShowingLoader,
    children: jsxs('div', {
      children: [
        // Search bar
        pickerType === Zl.RESOURCE_INSERT_MODAL
          ? jsx(Fragment, {
              children: jsx('div', {
                className: 'drilldown_picker--insertsModalSearchBarContainer--Cz6Z0 fd_browse_resource_modal--searchBarContainer--Q2kZ7',
                children: jsx(IW, {
                  focusOnMount: true,
                  className: g()('drilldown_picker--insertsModalSearchBar--rgyJl fd_browse_resource_modal--searchBar---bmO8', {
                    'drilldown_picker--searchBarEmpty--3D2Tn fd_browse_resource_modal--searchBarEmpty--8dNhE': query === '',
                  }),
                  query,
                  placeholder: searchBarPlaceholderText,
                  clearSearch,
                  onChange: setQuery,
                  isKeyDownHandled: handleKeyDown,
                  hideXIcon: !query,
                  ref: searchBarRef,
                }),
              }),
            })
          : jsx('div', {
              className: 'drilldown_picker--searchRowRefresh--9-Wr0',
              children: jsx(SearchBar, {
                query,
                clearSearch,
                onChange: setQuery,
                isKeyDownHandled: handleKeyDown,
                onFocus: () => setIsSearchBarFocused(true),
                onBlur: () => setIsSearchBarFocused(false),
                searchBarRef,
                placeholder: searchBarPlaceholderText,
              }),
            }),

        // Loading state
        isShowingLoader
          ? jsx('div', {
              className: 'drilldown_picker--spinner--b2K0U',
              style: {
                height: adjustedScrollHeight + (pickerType === Zl.RESOURCE_INSERT_MODAL ? Kr : 0),
              },
              children: jsx(_$$k, {}),
            })
          : jsxs(Fragment, {
              children: [
                !shouldShowContent && emptyState,
                shouldShowContent && jsxs('div', {
                  children: [
                    jsx('div', {
                      children: beforeItems,
                    }),
                    jsx('div', {
                      className: g()('drilldown_picker--container--yDdso', animationClass),
                      style: {
                        height: `${adjustedScrollHeight}px`,
                      },
                      children: isSearchEmpty
                        ? jsxs('div', {
                            className: 'drilldown_picker--searchEmptyRefresh--OaiuU',
                            children: [
                              jsx('div', {
                                className: 'drilldown_picker--searchTextRefresh---Qi2i ellipsis--ellipsis--Tjyfa',
                                children: renderI18nText('design_systems.instance_swap_picker.no_results', { query }),
                              }),
                              searchEmptyStateCTA,
                            ],
                          })
                        : animatedContent,
                    }),
                    multiselectCheckbox && jsx('div', {
                      className: 'drilldown_picker--selectAll--s3Tt6',
                      style: {
                        height: bottomParentCheckboxRowHeight,
                      },
                      children: multiselectCheckbox,
                    }),
                  ],
                }),
              ],
            }),
      ],
    }),
  })
}

// Components for the container
interface DrilldownItemsContainerProps {
  drilldownItems: DrilldownItem[]
  isCurrentlyVisible: boolean
  isSearching: boolean
  scrollContainerHeight: number
  getLeafItemRecordingKey?: (item: any) => string[]
  isSelectedItem: (item: DrilldownItem) => boolean
  multiselect?: boolean
  onDrillup: () => void
  onLeafItemContextMenu?: (event: React.MouseEvent, item: DrilldownItem) => void
  onLeafItemDrilldown: (event: React.MouseEvent, item: DrilldownItem, index: number) => void
  onSubpathDrilldown: (event: React.MouseEvent, item: DrilldownItem) => void
  parent?: DrilldownItem | null
  indexOfParent?: number
  getBackgroundColorForLeafItemThumbnail?: (item: any) => string | undefined
  getLeafItemTooltip?: (item: any, options?: any) => any
  getLeafItemThumbnail?: (item: any, mode?: GridLayoutMode) => React.ReactNode
  getThumbnailGridLayoutForItems?: (items: DrilldownItem[]) => GridLayoutMode
  renderLeafItemNames?: boolean
  additionalRowBottomMargin?: number
  pickerType?: string
  errorComponent?: React.ReactNode
  recordingKey?: string
  searchBarFocused?: boolean
}

function DrilldownItemsContainer(props: DrilldownItemsContainerProps) {
  const {
    drilldownItems,
    isCurrentlyVisible,
    isSearching,
    scrollContainerHeight,
    getLeafItemRecordingKey,
    isSelectedItem,
    multiselect,
    onDrillup,
    onLeafItemContextMenu,
    onLeafItemDrilldown,
    onSubpathDrilldown,
    parent,
    indexOfParent,
    getBackgroundColorForLeafItemThumbnail,
    getLeafItemTooltip,
    getLeafItemThumbnail,
    getThumbnailGridLayoutForItems,
    renderLeafItemNames,
    additionalRowBottomMargin = 0,
    pickerType,
    errorComponent,
    recordingKey,
    searchBarFocused,
  } = props

  const gridLayoutMode = useMemo(
    () => getThumbnailGridLayoutForItems ? getThumbnailGridLayoutForItems(drilldownItems) : null,
    [drilldownItems, getThumbnailGridLayoutForItems],
  )

  const {
    subpathGridHeight,
    subpathListHeight,
    leafListHeight,
    listItemHeight,
  } = useContext(DrilldownContext)

  const subpathHeight = gridLayoutMode ? subpathGridHeight : subpathListHeight
  const { modalWidth, numColsForSmall, numColsForNormal } = TQ(pickerType)

  const layoutConfig = useMemo(
    () => calculateLayoutConfig(
      modalWidth,
      gridLayoutMode,
      numColsForSmall,
      numColsForNormal,
      leafListHeight,
      additionalRowBottomMargin,
    ),
    [additionalRowBottomMargin, modalWidth, leafListHeight, numColsForNormal, numColsForSmall, gridLayoutMode],
  )

  const { totalHeight, positions, spacerAboveLeaves } = calculateItemPositions(
    drilldownItems,
    !gridLayoutMode,
    layoutConfig,
    subpathHeight,
  )

  const selectedIndices = findSelectedItemIndices(drilldownItems, isSelectedItem)
  const initialSelectedIndex = multiselect ? null : selectedIndices[0] ?? null
  const [scrollTop, setScrollTop] = useState(() =>
    calculateInitialScrollTop(initialSelectedIndex, positions, spacerAboveLeaves),
  )

  const visibleRange = getVisibleRange(scrollTop, scrollContainerHeight, layoutConfig.rowHeight)
  const debouncedScrollHandler = useMemo(() => _$$n(100, setScrollTop), [setScrollTop])

  const shouldFauxFocus = !!searchBarFocused
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const tabIndex = isCurrentlyVisible ? undefined : -1

  const firstSubpathIndex = useMemo(() => drilldownItems.findIndex(item => item.type === 'SUBPATH'), [drilldownItems])
  const hasLeafItems = useMemo(() => drilldownItems.some(item => item.type === 'LEAF'), [drilldownItems])
  const shouldShowDivider = (index: number) => index === firstSubpathIndex && hasLeafItems
  const leafItemCount = useMemo(() => drilldownItems.filter(item => item.type === 'LEAF').length, [drilldownItems])

  return jsxs('div', {
    'aria-hidden': !isCurrentlyVisible,
    'data-testid': isCurrentlyVisible ? 'drilldown-items' : undefined,
    'children': [
      parent && jsx(ParentSubpathItem, {
        accessory: parent.accessory,
        displayText: parent.displayText,
        indexOfParent: indexOfParent ?? -1,
        onClick: onDrillup,
        recordingKey: generateRecordingKey(recordingKey, 'drilldownItem-parentSubpath', parent.id),
        shouldForwardKeyDownToFullscreen: !!multiselect,
        tabIndex,
        visible: isCurrentlyVisible,
      }),
      jsxs(_$$P, {
        height: parent ? scrollContainerHeight - listItemHeight : scrollContainerHeight,
        onScroll: debouncedScrollHandler,
        ref: scrollContainerRef,
        initialScrollTop: scrollTop,
        innerClassName: 'drilldown_picker--scrollContainerInner--CNjDp',
        scrollContainerDataTestId: 'drilldown-picker-scroll-container',
        children: [
          jsx('div', {
            style: { height: totalHeight },
            className: 'drilldown_picker--itemsContainer--ySqD1',
            children: drilldownItems.map((item, index) => {
              const { top, left } = positions[index]
              if (!(visibleRange[0] <= top && top <= visibleRange[1]))
                return null

              const isFauxFocused = shouldFauxFocus && index === 0 && isSearching

              switch (item.type) {
                case 'LEAF':
                  const isSelected = selectedIndices.includes(index)
                  return jsx(LeafItem, {
                    drilldownItem: item,
                    fauxFocused: isFauxFocused,
                    getBackgroundColorForLeafItemThumbnail,
                    getLeafItemThumbnail,
                    getLeafItemTooltip,
                    gridLayoutMode,
                    height: layoutConfig.thumbHeight,
                    i: index,
                    left,
                    multiselect,
                    numCols: layoutConfig.numCols,
                    onClick: (e: React.MouseEvent, item: DrilldownItem) => onLeafItemDrilldown(e, item, index),
                    onLeafItemContextMenu,
                    recordingKey: generateRecordingKey(
                      recordingKey,
                      ...(getLeafItemRecordingKey ? getLeafItemRecordingKey(item.item) : []),
                    ),
                    renderName: renderLeafItemNames,
                    selected: isSelected,
                    tabIndex,
                    top,
                    visible: isCurrentlyVisible,
                    width: layoutConfig.thumbWidth,
                  }, item.id)

                case 'SUBPATH':
                  return jsxs(Fragment, {
                    children: [
                      shouldShowDivider(index) && jsx(ItemDivider, {
                        top: top - GRID_SPACING / 2,
                      }),
                      jsx(SubpathItem, {
                        drilldownItem: item,
                        gridLayoutMode,
                        i: index - leafItemCount,
                        onClick: onSubpathDrilldown,
                        recordingKey: generateRecordingKey(recordingKey, 'drilldownItem-subpath', item.id),
                        tabIndex,
                        top,
                        visible: isCurrentlyVisible,
                      }, item.id),
                    ],
                  })

                default:
                  throwTypeError(item)
              }
            }),
          }),
          errorComponent,
        ],
      }),
    ],
  })
}

function ItemDivider({ top }: { top: number }) {
  return jsx('div', {
    style: styleBuilderInstance.absolute.colorBorder.add({
      top: `${top}px`,
      borderBottomWidth: '1px',
      borderStyle: 'solid',
      width: `calc(100% - ${2 * GRID_SPACING}px)`,
      left: `${GRID_SPACING}px`,
    }).$,
  })
}

function SearchBar(props: {
  searchBarRef?: React.RefObject<any>
  query: string
  clearSearch: () => void
  onChange: (query: string) => void
  isKeyDownHandled: (e: KeyboardEvent) => boolean
  placeholder?: string
  onFocus?: () => void
  onBlur?: () => void
}) {
  const {
    searchBarRef,
    query,
    clearSearch,
    onChange,
    isKeyDownHandled,
    placeholder,
  } = props

  const { setKeyboardNavigationElement } = useKeyboardNavigationItemForSearch()

  _$$h3(() => {
    if (searchBarRef?.current) {
      setKeyboardNavigationElement?.(searchBarRef.current.searchInput)
    }
  })

  return jsx(IW, {
    ref: searchBarRef,
    className: 'drilldown_picker--searchBarRefresh--AWyol',
    clearSearch,
    focusOnMount: true,
    hasTransparentBackground: true,
    isKeyDownHandled,
    onBlur: props.onBlur,
    onChange,
    onFocus: props.onFocus,
    placeholder,
    query,
    smallFont: true,
    withSmallXIcon: true,
    withUI3Icon: true,
  })
}

// Export utility functions and constants
export const GRID_SPACING_EXPORT = GRID_SPACING
export const DrilldownPickerComponent = DrilldownPicker
export const createDrilldownItemsUtil = createDrilldownItems

// Legacy exports for backwards compatibility
export const qy = GRID_SPACING
export const uO = DrilldownPicker
export const xd = createDrilldownItems
