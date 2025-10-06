/* eslint-disable accessor-pairs */
import { findLastIndex, isEqual } from 'lodash-es'
import { labConfigurations } from '../905/226610'
import { NEW_COMMENT_ID, ThreadType } from '../905/380385'
import { Nz } from '../905/428481'
import { CommentPinElement, PINNABLE_COMMENT_PIN_TEST_ID, PinnableCommentPinElement, PostPinElement } from '../905/512783'
import { Nz as _$$Nz } from '../905/540111'
import { reactTimerGroup } from '../905/542194'
import { requestDeferredExecution } from '../905/561433'
import { z8 } from '../905/709095'
import { expandRect } from '../905/736624'
import { diffSets } from '../905/760682'
import { handlePromiseCompletion } from '../905/799129'
import { UU } from '../905/807385'
import { FigmaCommentClusterElement } from '../905/936492'
import { atom, atomStoreManager } from '../figma_app/27355'
import { getVisibleArea, roundedDivision } from '../figma_app/62612'
import { arePinCollectionsEqual, emptyPinCollection, formatPinCoordinates, PinVisibilityState } from '../figma_app/70421'
import { getInitialOptions } from '../figma_app/169182'
import { throwTypeError } from '../figma_app/465776'
import { performanceTracker } from '../figma_app/682945'
import { perfTimerFrameManagerBindings } from '../figma_app/763686'

import { Sw } from '../figma_app/805373'

class SlidingWindow2D {
  leftIdx: number = 0
  rightIdx: number = 0
  topIdx: number = 0
  bottomIdx: number = 0
  leftToRight: Array<any> = []
  topToBottom: Array<any> = []
  bufferedRect: any

  constructor(values: Array<any>, rect: any, buffer: number) {
    this.bufferedRect = expandRect(rect, buffer)
    if (values.length > 0) {
      this.bulkAddValues(values)
    }
  }

  /**
   * Updates the window boundaries and calculates additions/removals
   * @param rect New viewport rectangle
   * @param buffer Buffer size around the viewport
   * @returns Object containing added and removed values
   */
  updateWindow(rect: any, buffer: number): { additions: Array<any>, removals: Array<any> } {
    const previousRect = this.bufferedRect
    const previousLeftIdx = this.leftIdx
    const previousRightIdx = this.rightIdx
    const previousTopIdx = this.topIdx
    const previousBottomIdx = this.bottomIdx

    this.bufferedRect = expandRect(rect, buffer)

    const updatedIndexes = this.updateDirectionalIndexes(
      this.leftToRight,
      this.topToBottom,
      this.leftIdx,
      this.rightIdx,
      this.topIdx,
      this.bottomIdx,
      this.bufferedRect,
    )

    this.leftIdx = updatedIndexes.leftIdx
    this.rightIdx = updatedIndexes.rightIdx
    this.topIdx = updatedIndexes.topIdx
    this.bottomIdx = updatedIndexes.bottomIdx
    this.assertIndexes(this.bufferedRect)

    const additions = new Set<any>()
    const removals = new Set<any>()

    // Handle horizontal changes
    if (previousLeftIdx > this.leftIdx) {
      this.leftToRight.slice(this.leftIdx, previousLeftIdx).forEach(item => additions.add(item))
    }
    else if (previousLeftIdx < this.leftIdx) {
      this.leftToRight.slice(previousLeftIdx, this.leftIdx).forEach(item => removals.add(item))
    }

    if (previousRightIdx > this.rightIdx) {
      this.leftToRight.slice(this.rightIdx, previousRightIdx).forEach(item => removals.add(item))
    }
    else if (previousRightIdx < this.rightIdx) {
      this.leftToRight.slice(previousRightIdx, this.rightIdx).forEach(item => additions.add(item))
    }

    // Handle vertical changes
    if (previousTopIdx > this.topIdx) {
      this.topToBottom.slice(this.topIdx, previousTopIdx).forEach(item => additions.add(item))
    }
    else if (previousTopIdx < this.topIdx) {
      this.topToBottom.slice(previousTopIdx, this.topIdx).forEach(item => removals.add(item))
    }

    if (previousBottomIdx > this.bottomIdx) {
      this.topToBottom.slice(this.bottomIdx, previousBottomIdx).forEach(item => removals.add(item))
    }
    else if (previousBottomIdx < this.bottomIdx) {
      this.topToBottom.slice(previousBottomIdx, this.bottomIdx).forEach(item => additions.add(item))
    }

    return {
      additions: [...additions.values()].filter(item => this.withinRect(item, this.bufferedRect)),
      removals: [...removals.values()].filter(item => this.withinRect(item, previousRect)),
    }
  }

  /**
   * Returns the total number of values in the window
   */
  numValues(): number {
    return this.leftToRight.length
  }

  /**
   * Checks if a value is within the current window
   * @param value The value to check
   */
  isValueInWindow(value: any): boolean {
    return this.withinRect(value, this.bufferedRect)
  }

  /**
   * Returns all values currently in the window
   */
  allValuesInWindow(): Array<any> {
    return this.leftToRight.slice(this.leftIdx, this.rightIdx).filter(item => this.withinYDimensions(item, this.bufferedRect))
  }

  /**
   * Adds multiple values to the window
   * @param values Array of values to add
   */
  bulkAddValues(values: Array<any>): void {
    this.leftToRight = this.leftToRight.concat(values).sort((a, b) => a.x - b.x)
    this.topToBottom = this.topToBottom.concat(values).sort((a, b) => a.y - b.y)

    const length = this.leftToRight.length
    const updatedIndexes = this.updateDirectionalIndexes(
      this.leftToRight,
      this.topToBottom,
      0,
      length,
      0,
      length,
      this.bufferedRect,
    )

    this.leftIdx = updatedIndexes.leftIdx
    this.rightIdx = updatedIndexes.rightIdx
    this.topIdx = updatedIndexes.topIdx
    this.bottomIdx = updatedIndexes.bottomIdx
    this.assertIndexes(this.bufferedRect)
  }

  /**
   * Adds a single value to the window
   * @param value The value to add
   * @returns True if the value is within the window
   */
  addValue(value: any): boolean {
    let xIndex = this.leftToRight.findIndex(item => item.x > value.x)
    if (xIndex === -1)
      xIndex = this.leftToRight.length
    this.leftToRight.splice(xIndex, 0, value)

    let yIndex = this.topToBottom.findIndex(item => item.y > value.y)
    if (yIndex === -1)
      yIndex = this.topToBottom.length
    this.topToBottom.splice(yIndex, 0, value)

    const updatedIndexes = this.updateDirectionalIndexes(
      this.leftToRight,
      this.topToBottom,
      this.leftIdx,
      this.rightIdx,
      this.topIdx,
      this.bottomIdx,
      this.bufferedRect,
    )

    this.leftIdx = updatedIndexes.leftIdx
    this.rightIdx = updatedIndexes.rightIdx
    this.topIdx = updatedIndexes.topIdx
    this.bottomIdx = updatedIndexes.bottomIdx
    this.assertIndexes(this.bufferedRect)

    return this.isValueInWindow(value)
  }

  /**
   * Removes a value from the window
   * @param value The value to remove
   */
  removeValue(value: any): void {
    const xIndex = this.leftToRight.findIndex(item => item.id === value.id)
    this.windowAssert(xIndex >= 0)
    this.leftToRight.splice(xIndex, 1)

    const yIndex = this.topToBottom.findIndex(item => item.id === value.id)
    this.windowAssert(yIndex >= 0)
    this.topToBottom.splice(yIndex, 1)

    const length = this.leftToRight.length
    this.leftIdx = Math.min(this.leftIdx, length)
    this.rightIdx = Math.min(this.rightIdx, length)
    this.topIdx = Math.min(this.topIdx, length)
    this.bottomIdx = Math.min(this.bottomIdx, length)

    const updatedIndexes = this.updateDirectionalIndexes(
      this.leftToRight,
      this.topToBottom,
      this.leftIdx,
      this.rightIdx,
      this.topIdx,
      this.bottomIdx,
      this.bufferedRect,
    )

    this.leftIdx = updatedIndexes.leftIdx
    this.rightIdx = updatedIndexes.rightIdx
    this.topIdx = updatedIndexes.topIdx
    this.bottomIdx = updatedIndexes.bottomIdx
    this.assertIndexes(this.bufferedRect)
  }

  /**
   * Updates the directional indexes based on the current viewport
   */
  updateDirectionalIndexes(
    xSorted: Array<any>,
    ySorted: Array<any>,
    leftIdx: number,
    rightIdx: number,
    topIdx: number,
    bottomIdx: number,
    rect: any,
  ): { leftIdx: number, rightIdx: number, topIdx: number, bottomIdx: number } {
    const length = xSorted.length

    // Update left index
    let newLeftIdx = xSorted.slice(leftIdx).findIndex(item => !this.offTheLeft(item, rect))
    newLeftIdx = newLeftIdx === -1 ? length : leftIdx + newLeftIdx
    newLeftIdx = findLastIndex(xSorted.slice(0, newLeftIdx), item => this.offTheLeft(item, rect)) + 1

    // Update right index
    let newRightIdx = xSorted.slice(rightIdx).findIndex(item => this.offTheRight(item, rect))
    newRightIdx = newRightIdx === -1 ? length : rightIdx + newRightIdx
    newRightIdx = findLastIndex(xSorted.slice(0, newRightIdx), item => !this.offTheRight(item, rect)) + 1

    // Update top index
    let newTopIdx = ySorted.slice(topIdx).findIndex(item => !this.offTheTop(item, rect))
    newTopIdx = newTopIdx === -1 ? length : topIdx + newTopIdx
    newTopIdx = findLastIndex(ySorted.slice(0, newTopIdx), item => this.offTheTop(item, rect)) + 1

    // Update bottom index
    let newBottomIdx = ySorted.slice(bottomIdx).findIndex(item => this.offTheBottom(item, rect))
    newBottomIdx = newBottomIdx === -1 ? length : bottomIdx + newBottomIdx
    newBottomIdx = findLastIndex(ySorted.slice(0, newBottomIdx), item => !this.offTheBottom(item, rect)) + 1

    return {
      leftIdx: newLeftIdx,
      rightIdx: newRightIdx,
      topIdx: newTopIdx,
      bottomIdx: newBottomIdx,
    }
  }

  offTheLeft(item: any, rect: any): boolean {
    return item.x < rect.x
  }

  offTheRight(item: any, rect: any): boolean {
    return item.x > rect.x + rect.width
  }

  offTheTop(item: any, rect: any): boolean {
    return item.y < rect.y
  }

  offTheBottom(item: any, rect: any): boolean {
    return item.y > rect.y + rect.height
  }

  withinXDimensions(item: any, rect: any): boolean {
    return !this.offTheLeft(item, rect) && !this.offTheRight(item, rect)
  }

  withinYDimensions(item: any, rect: any): boolean {
    return !this.offTheTop(item, rect) && !this.offTheBottom(item, rect)
  }

  withinRect(item: any, rect: any): boolean {
    return this.withinXDimensions(item, rect) && this.withinYDimensions(item, rect)
  }

  windowAssert(condition: boolean): void {
    if (!condition) {
      throw new Error(`The comment 2D sliding window has gotten into an invalid state: ${JSON.stringify(this)}`)
    }
  }

  assertIndexes(rect: any): void {
    const length = this.leftToRight.length

    this.windowAssert(this.leftIdx === 0 || this.leftToRight[this.leftIdx - 1].x < rect.x)
    this.windowAssert(this.leftIdx === length || this.leftToRight[this.leftIdx].x >= rect.x)
    this.windowAssert(this.rightIdx === 0 || this.leftToRight[this.rightIdx - 1].x <= rect.x + rect.width)
    this.windowAssert(this.rightIdx === length || this.leftToRight[this.rightIdx].x > rect.x + rect.width)
    this.windowAssert(this.topIdx === 0 || this.topToBottom[this.topIdx - 1].y < rect.y)
    this.windowAssert(this.topIdx === length || this.topToBottom[this.topIdx].y >= rect.y)
    this.windowAssert(this.bottomIdx === 0 || this.topToBottom[this.bottomIdx - 1].y <= rect.y + rect.height)
    this.windowAssert(this.bottomIdx === length || this.topToBottom[this.bottomIdx].y > rect.y + rect.height)
  }
}

// Atoms for managing global state
export const isOnboardingCompletedAtom = atom<boolean>(false)
export const onboardingCommentIdAtom = atom<string | null>(null)
export const clusteredPinsStyles = `
.overlay {
  height: 0px;
  width: 0px;
  position: relative;
  transform: translate(0px,0px);
}
.overlayPassthrough {
  pointer-events: none;
}
`

// Global reference to the clustered pins instance
export let clusteredPinsInstance: ClusteredPinsElement | null = null

/**
 * Custom element that manages clustered comment pins on a canvas
 * Handles rendering, positioning, and interaction with comment pins and clusters
 */
export class ClusteredPinsElement extends HTMLElement {
  // Core properties
  public createdAt: Date
  public ds: {
    clusters: any
    selectedPinId: string | null
    emphasizedPinIds: string[]
    dimUnselectedPins: boolean
  }

  // Rendering state
  _lastRenderedDataset: any = null
  _lastDatasetChangeAnimatedAt: number = Date.now()
  isZoomingOut: boolean = false
  shouldDisablePointerEvents: boolean = false
  _lastRenderedShouldDisablePointerEvents: boolean = false

  // Event handlers
  public onElementClicked: ((id: string) => void) | null = null
  public onElementContextMenu: ((id: string, event: MouseEvent) => void) | null = null
  public onElementDragEnd: ((id: string) => void) | null = null
  public onElementDragMove: ((position: { x: number, y: number }) => void) | null = null
  public onElementDragStart: ((id: string) => void) | null = null

  // Viewport management
  lastRenderedViewport: any = null
  public currentViewport: any = undefined
  public getWrapperOffset: ((viewport: any) => { x: number, y: number }) | undefined = undefined
  focusOneOfIDs: Set<string> = new Set()

  // Configuration and state
  public clientConfig: any = null
  draggingElement: any = null
  hasHighlightedPinnedThreads: boolean = false
  clusterElementsById: Map<string, any> = new Map()

  // DOM elements
  wrapper: HTMLDivElement
  slidingWindow: SlidingWindow2D

  /**
   * Frame update callback that handles rendering based on current viewport and dataset
   */
  public onFrame = (): void => {
    if (perfTimerFrameManagerBindings) {
      perfTimerFrameManagerBindings.startProfile(z8, 100)
    }

    if (this.currentViewport && this.lastRenderedViewport) {
      this.render(this.currentViewport, this.lastRenderedViewport)
      this._lastRenderedDataset = this.ds
      this.lastRenderedViewport = this.currentViewport
      this._lastRenderedShouldDisablePointerEvents = this.shouldDisablePointerEvents
    }

    if (perfTimerFrameManagerBindings) {
      perfTimerFrameManagerBindings.stopProfile(z8, 100)
    }
  }

  constructor() {
    super()

    // Initialize core properties
    this.createdAt = new Date()
    this.ds = {
      clusters: emptyPinCollection,
      selectedPinId: null,
      emphasizedPinIds: [],
      dimUnselectedPins: false,
    }

    // Setup shadow DOM
    this.attachShadow({ mode: 'open' })

    // Create and append styles
    const styleElement = document.createElement('style')
    styleElement.nonce = getInitialOptions().csp_nonce
    styleElement.textContent = [clusteredPinsStyles, Nz, _$$Nz].join('\n')
    this.shadowRoot?.append(styleElement)

    // Create wrapper element
    this.wrapper = document.createElement('div')
    this.wrapper.classList.add('overlay')
    this.wrapper.setAttribute('data-testid', 'clustered-comments-wrapper')
    this.wrapper.setAttribute('aria-hidden', 'true')
    this.shadowRoot?.append(this.wrapper)

    // Initialize sliding window
    this.slidingWindow = new SlidingWindow2D([], {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    }, 0)

    // Set global reference
    clusteredPinsInstance = this
  }

  /**
   * Creates a hidden text measurement element for calculating text dimensions
   */
  createTextMeasureElement(parentElement: HTMLElement): HTMLDivElement {
    const measureElement = document.createElement('div')
    measureElement.style.position = 'absolute'
    measureElement.style.visibility = 'hidden'
    measureElement.style.height = 'auto'
    measureElement.style.width = '180px'
    parentElement.appendChild(measureElement)
    return measureElement
  }

  /**
   * Handles viewport updates by scheduling a deferred render
   */
  onViewportUpdate(viewport: any): void {
    this.currentViewport = viewport
    requestDeferredExecution()
  }

  /**
   * Sets the wrapper offset function for positioning calculations
   */
  set wrapperOffsetFn(offsetFunction: (viewport: any) => { x: number, y: number }) {
    this.getWrapperOffset = offsetFunction
  }

  /**
   * Sets the initial viewport and performs initial rendering
   */
  set initialViewport(viewport: any) {
    const visibleArea = getVisibleArea(viewport)
    const buffer = roundedDivision(78, viewport.zoomScale)
    this.slidingWindow.updateWindow(visibleArea, buffer)
    this.renderWrapperPosition(viewport)
    this.currentViewport = viewport
    this.lastRenderedViewport = viewport
  }

  /**
   * Updates the data set and schedules a deferred render
   */
  set data(dataset: any) {
    this.ds = dataset
    requestDeferredExecution()
  }

  /**
   * Determines if a cluster comes from a frame move operation
   */
  clusterComesFromFrameMove(cluster: any, otherClusters: any[]): boolean {
    if (!cluster.anchoredNode)
      return false

    const clusterPinIds = cluster.pins.map((pin: any) => pin.id).sort()

    for (const otherCluster of otherClusters) {
      if (cluster.anchoredNode === otherCluster.anchoredNode) {
        const otherPinIds = otherCluster.pins.map((pin: any) => pin.id).sort()
        if (isEqual(clusterPinIds, otherPinIds)) {
          return true
        }
      }
    }

    return false
  }

  /**
   * Processes dataset updates and manages cluster additions/removals
   */
  processDatasetUpdate(viewport: any): void {
    // Calculate differences between current and previous datasets
    const { added, removed } = diffSets(
      this.ds.clusters.leafNodes,
      this._lastRenderedDataset?.clusters.leafNodes,
    )

    // Create maps for efficient lookup
    const currentClustersMap = this.ds.clusters.all().reduce((map, cluster) => {
      map.set(cluster.id, cluster)
      return map
    }, new Map<string, any>())

    const previousClustersMap = (this._lastRenderedDataset?.clusters?.all() || []).reduce((map, cluster) => {
      map.set(cluster.id, cluster)
      return map
    }, new Map<string, any>())

    // Identify added, updated, and removed clusters
    const addedClusters = [...currentClustersMap.values()].filter(
      cluster => !previousClustersMap.has(cluster.id),
    )

    let hasUnpinnedThreads = false
    const updatedClusters = [...currentClustersMap.values()].filter((cluster) => {
      const previousCluster = previousClustersMap.get(cluster.id)
      if (!previousCluster)
        return false

      // Determine if cluster should be updated based on various conditions
      const shouldUpdate = cluster.isPinnedToFile
        || this.ds.clusters.minimizeUnpinned
        || this.ds.selectedPinId !== null
        || this.hasHighlightedPinnedThreads
        ? arePinCollectionsEqual(cluster, previousCluster)
        : (hasUnpinnedThreads = true, true)

      return !!previousCluster && shouldUpdate
    })

    if (hasUnpinnedThreads) {
      this.hasHighlightedPinnedThreads = true
    }

    const removedClusters = [...previousClustersMap.values()].filter(
      cluster => !currentClustersMap.has(cluster.id),
    )

    // Handle cluster additions
    if (this.slidingWindow.numValues() === 0 && this._lastRenderedDataset === null) {
      this.bulkAddClusters(addedClusters, viewport)
    }
    else {
      for (const cluster of addedClusters) {
        let changeType = added.has(cluster.id) ? 'data' : 'aggregation'
        if (this.clusterComesFromFrameMove(cluster, removedClusters)) {
          changeType = 'frame_move'
        }
        this.addCluster(cluster, viewport, changeType)
      }
    }

    // Handle cluster removals
    const hasManyRemovals = removedClusters.filter(
      cluster => this.slidingWindow.isValueInWindow(cluster),
    ).length > 200

    for (const cluster of removedClusters) {
      let changeType = removed.has(cluster.id) ? 'data' : 'aggregation'
      if (this.clusterComesFromFrameMove(cluster, addedClusters)) {
        changeType = 'frame_move'
      }
      this.removeCluster(cluster, viewport, changeType, hasManyRemovals)
    }

    // Handle cluster updates
    for (const cluster of updatedClusters) {
      this.updateCluster(cluster, viewport)
    }

    // Update selection and emphasis states if needed
    const selectionChanged = this.ds.selectedPinId !== this._lastRenderedDataset?.selectedPinId
      || this.ds.dimUnselectedPins !== this._lastRenderedDataset?.dimUnselectedPins
    if (selectionChanged) {
      this.updateSelectedStates(this.ds.selectedPinId, this.ds.dimUnselectedPins)
    }

    const emphasisChanged = this.ds.emphasizedPinIds !== this._lastRenderedDataset?.emphasizedPinIds
    if (emphasisChanged) {
      this.updateEmphasizedElements(this.ds.emphasizedPinIds, this._lastRenderedDataset?.emphasizedPinIds)
    }

    // Handle zoom out state
    if (this.isZoomingOut) {
      this.isZoomingOut = false
      this.updateViewportVisibleClusters(viewport)
    }
  }

  /**
   * Determines the visibility state for a cluster based on selection and resolution status
   */
  getSelectedState(cluster: any, selectedPinId: string | null, dimUnselectedPins: boolean): PinVisibilityState {
    if (selectedPinId) {
      // If a pin is selected, active state if this cluster contains it, dimmed otherwise
      return cluster.pins.find((pin: any) => pin.id === selectedPinId)
        ? PinVisibilityState.ACTIVE
        : PinVisibilityState.DIMMED
    }
    else {
      // If no pin is selected, normal if contains unresolved pins, dimmed otherwise
      return !dimUnselectedPins && cluster.pins.find((pin: any) => !pin.isResolved)
        ? PinVisibilityState.NORMAL
        : PinVisibilityState.DIMMED
    }
  }

  /**
   * Updates the selected states of all visible clusters
   */
  updateSelectedStates(selectedPinId: string | null, dimUnselectedPins: boolean): void {
    // Update specifically selected pin if it's a single pin cluster
    if (selectedPinId) {
      const selectedCluster = this.ds.clusters.all().find((cluster: any) => cluster.id === selectedPinId)
      const selectedElement = this.clusterElementsById.get(selectedPinId)
      if (selectedElement && selectedCluster?.isSinglePin) {
        selectedElement.updatePinSelectedState(PinVisibilityState.ACTIVE)
      }
    }

    // Update all visible clusters
    for (const cluster of this.slidingWindow.allValuesInWindow()) {
      const clusterElement = this.clusterElementsById.get(cluster.id)
      if (!clusterElement)
        continue

      const visibilityState = this.getSelectedState(cluster, selectedPinId, dimUnselectedPins)

      if (cluster.isSinglePin) {
        clusterElement.updatePinSelectedState(visibilityState)
      }
      else {
        clusterElement.dimmed = visibilityState === PinVisibilityState.DIMMED
      }
    }
  }

  /**
   * Updates the emphasized state of cluster elements
   */
  updateEmphasizedElements(
    currentEmphasizedIds: string[],
    previousEmphasizedIds: string[] | undefined,
  ): void {
    const currentEmphasizedSet = new Set(currentEmphasizedIds)
    const previousEmphasizedSet = new Set(previousEmphasizedIds || [])

    this.slidingWindow.allValuesInWindow().forEach((cluster) => {
      const clusterElement = this.clusterElementsById.get(cluster.id)
      if (!clusterElement)
        return

      // Remove previous emphasis
      if (previousEmphasizedSet.size > 0) {
        const hasPreviousEmphasis = cluster.pins.find((pin: any) => previousEmphasizedSet.has(pin.id))
        if (hasPreviousEmphasis) {
          if (cluster.isSinglePin) {
            clusterElement.removeEmphasisStyle()
          }
          else {
            clusterElement.emphasized = false
          }
        }
      }

      // Apply current emphasis
      if (currentEmphasizedSet.size > 0) {
        const hasCurrentEmphasis = cluster.pins.find((pin: any) => currentEmphasizedSet.has(pin.id))
        if (hasCurrentEmphasis) {
          if (cluster.isSinglePin) {
            clusterElement.addEmphasisStyle()
          }
          else {
            clusterElement.emphasized = true
          }
        }
      }
    })
  }

  /**
   * Processes viewport updates and manages cluster visibility
   */
  processViewportUpdate(currentViewport: any, previousViewport: any): void {
    // Handle zoom scale changes
    if (previousViewport?.zoomScale !== currentViewport.zoomScale) {
      this.cancelAllDragging()
    }

    // Update visible clusters if not zooming out
    if (!this.isZoomingOut) {
      this.updateViewportVisibleClusters(currentViewport)
    }

    // Update element transforms on zoom changes
    if (previousViewport?.zoomScale !== currentViewport.zoomScale) {
      this.updateElementTransforms(currentViewport)
    }

    // Update wrapper position
    this.renderWrapperPosition(currentViewport)
  }

  /**
   * Main render method that processes viewport and dataset changes
   */
  render(currentViewport: any, previousViewport: any): void {
    reactTimerGroup.start('comments-render')

    let needsRender = false

    // Process viewport changes
    if (!isEqual(previousViewport, currentViewport)) {
      this.processViewportUpdate(currentViewport, previousViewport)
      needsRender = true
    }

    // Process dataset changes
    if (this._lastRenderedDataset !== this.ds) {
      this.processDatasetUpdate(currentViewport)
      needsRender = true
    }

    // Update performance tracking
    if (needsRender && performanceTracker) {
      performanceTracker.setNumberOfRenderedComments(this.clusterElementsById.size)
    }

    // Handle pointer events based on interaction states
    const pointerEventsChanged = currentViewport.isPanning !== previousViewport?.isPanning
      || currentViewport.isZooming !== previousViewport?.isZooming
      || this.shouldDisablePointerEvents !== this._lastRenderedShouldDisablePointerEvents

    if (pointerEventsChanged) {
      if (currentViewport.isPanning || currentViewport.isZooming || this.shouldDisablePointerEvents) {
        this.wrapper.classList.add('overlayPassthrough')
      }
      else {
        this.wrapper.classList.remove('overlayPassthrough')
      }
    }

    reactTimerGroup.stop('comments-render')
  }

  /**
   * Updates the wrapper element's position based on viewport
   */
  renderWrapperPosition(viewport: any): void {
    this.wrapper.style.top = `${viewport.y + viewport.height / 2}px`
    this.wrapper.style.left = `${viewport.x + viewport.width / 2}px`

    const offset = this.getWrapperOffset ? this.getWrapperOffset(viewport) : { x: 0, y: 0 }
    const translateX = (0 - viewport.offsetX) * viewport.zoomScale + offset.x
    const translateY = (0 - viewport.offsetY) * viewport.zoomScale + offset.y
    const transform = `translate(${translateX}px, ${translateY}px)`

    this.wrapper.style.transform = transform
  }

  /**
   * Focuses on one of the specified pin IDs if visible
   */
  focusOneOf(pinIds: Set<string>): void {
    this.focusOneOfIDs = pinIds

    for (const cluster of this.slidingWindow.allValuesInWindow()) {
      const hasTargetPin = cluster.pins.map((pin: any) => pin.id).some((id: string) => this.focusOneOfIDs.has(id))
      if (hasTargetPin) {
        const clusterElement = this.shadowRoot?.getElementById(cluster.id)?.firstElementChild
        if (clusterElement instanceof HTMLElement
          && clusterElement.getAttribute('data-testid') === PINNABLE_COMMENT_PIN_TEST_ID) {
          clusterElement.focus()
          this.focusOneOfIDs.clear()
          return
        }
      }
    }
  }

  /**
   * Updates transforms for all visible elements based on zoom scale
   */
  updateElementTransforms(viewport: any): void {
    for (const cluster of this.slidingWindow.allValuesInWindow()) {
      const clusterElement = this.clusterElementsById.get(cluster.id)
      if (!clusterElement)
        continue

      if (cluster.pins.length === 1) {
        // Single pin cluster - update position directly
        const pin = cluster.pins[0]
        clusterElement.position = pin
        clusterElement.zoomScale = viewport.zoomScale
        clusterElement.selectionBoxAnchor = pin.selectionBoxAnchor
        clusterElement.otherBoundingBoxes = pin.otherBoundingBoxes
        clusterElement.render()
      }
      else {
        // Multi-pin cluster - use cluster positioning
        clusterElement.positionClusterElement(cluster, viewport)
      }
    }
  }

  /**
   * Adds multiple clusters to the sliding window and DOM at once
   */
  bulkAddClusters(clusters: any[], viewport: any): void {
    this.slidingWindow.bulkAddValues(clusters)
    for (const cluster of clusters) {
      if (this.slidingWindow.isValueInWindow(cluster)) {
        this.addClusterToDom(cluster, viewport, 'initial')
      }
    }
  }

  /**
   * Updates an existing cluster by removing and re-adding it
   */
  updateCluster(cluster: any, viewport: any): void {
    if (cluster.isSinglePin) {
      // For single pin clusters, just update the existing element
      this.slidingWindow.removeValue(cluster)
      this.slidingWindow.addValue(cluster)
      this.updateAvatarPin(cluster, viewport)
    }
    else {
      // For multi-pin clusters, remove and re-add to handle aggregation changes
      this.removeCluster(cluster, viewport, 'update')
      this.addCluster(cluster, viewport, 'update')
    }
  }

  /**
   * Adds a cluster to the sliding window and DOM if it's in the visible area
   */
  addCluster(cluster: any, viewport: any, changeType: string): void {
    if (this.slidingWindow.addValue(cluster)) {
      this.addClusterToDom(cluster, viewport, changeType)
    }
  }

  /**
   * Removes a cluster from the sliding window and DOM
   */
  removeCluster(cluster: any, viewport: any, changeType: string, hasManyRemovals: boolean = false): void {
    const wasInWindow = this.slidingWindow.isValueInWindow(cluster)
    this.slidingWindow.removeValue(cluster)

    if (wasInWindow) {
      this.removeClusterFromDom(cluster, viewport, changeType, hasManyRemovals)
    }
  }

  /**
   * Applies cluster data to an avatar pin element
   */
  static applyClusterToAvatarPin(
    cluster: any,
    viewport: any,
    pinElement: any,
    selectedPinId: string | null,
    dimUnselectedPins: boolean,
    minimizeUnpinned: boolean = false,
  ): void {
    const pin = cluster.pins[0]
    const totalReplies = pin.avatars.reduce((sum: number, avatar: any) => sum + avatar.num_comments, 0) - 1

    const avatars = pin.avatars.map((avatar: any) => ({
      initial: avatar.avatar_user_handle[0],
      user_id: avatar.avatar_user_id,
      url: Sw(avatar.avatar_url),
    }))

    // Determine visibility state
    let visibilityState = PinVisibilityState.NORMAL
    if (selectedPinId) {
      visibilityState = selectedPinId === pin.id ? PinVisibilityState.ACTIVE : PinVisibilityState.DIMMED
    }
    else if (dimUnselectedPins || pin.isResolved) {
      visibilityState = PinVisibilityState.DIMMED
    }

    // Apply data to pin element
    pinElement.data = {
      id: pin.id,
      avatars,
      createdAt: pin.createdAt,
      preview: {
        author: pin.avatars[0].avatar_user_handle,
        messageMeta: pin.previewMessageMeta || [],
        updatedAt: new Date(Date.parse(pin.updatedAt)),
        unread: !!pin.isUnread,
        replies: totalReplies,
        numUnreadReplies: pin.numUnreadReplies,
        draft: pin.isDraft,
        feedPostTitle: pin.type === ThreadType.FEED_POST ? pin.feedPostTitle : undefined,
        pinVerticalStagger: pin.type === ThreadType.FEED_POST ? pin.pinVerticalStagger : undefined,
        numAttachments: pin.numAttachments,
        isPinnedToFile: pin.isPinnedToFile,
      },
      pending: pin.pending,
      type: pin.type,
    }

    pinElement.minimized = !pin.isPinnedToFile && minimizeUnpinned
    pinElement.updatePinSelectedState(visibilityState)
    pinElement.isDraggable = pin.isDraggable
    pinElement.onmouseenter = pin.onMouseEnter
    pinElement.onmouseleave = pin.onMouseLeave
    pinElement.position = pin
    pinElement.zoomScale = viewport.zoomScale
    pinElement.selectionBoxAnchor = pin.selectionBoxAnchor
    pinElement.otherBoundingBoxes = pin.otherBoundingBoxes
    pinElement.render()
  }

  /**
   * Updates an existing avatar pin element with new cluster data
   */
  updateAvatarPin(cluster: any, viewport: any): void {
    const pinElement = this.clusterElementsById.get(cluster.id)

    if (!pinElement) {
      // If element doesn't exist but should be visible, add it
      if (this.slidingWindow.isValueInWindow(cluster)) {
        this.addClusterToDom(cluster, viewport, 'initial')
      }
      return
    }

    ClusteredPinsElement.applyClusterToAvatarPin(
      cluster,
      viewport,
      pinElement,
      this.ds.selectedPinId,
      this.ds.dimUnselectedPins,
      this.ds.clusters.minimizeUnpinned,
    )
  }

  /**
   * Handles pin element click events
   */
  onPinElementClicked(pinId: string): void {
    if (this.onElementClicked) {
      this.onElementClicked(pinId)
    }
  }

  /**
   * Handles pin element drag end events
   */
  onPinElementDragEnd(pinId: string, _element: any): void {
    if (this.onElementDragEnd) {
      this.onElementDragEnd(pinId)
    }
    this.draggingElement = null
  }

  /**
   * Handles pin element drag move events
   */
  onPinElementDragMove(position: { x: number, y: number }): void {
    if (this.onElementDragMove) {
      this.onElementDragMove(position)
    }
  }

  /**
   * Handles pin element drag start events
   */
  onPinElementDragStart(pinId: string, element: any): void {
    if (this.draggingElement) {
      this.draggingElement.cancelDrag()
      console.error('Started dragging a new element without ending another drag')
    }

    this.draggingElement = element

    if (this.onElementDragStart) {
      this.onElementDragStart(pinId)
    }
  }

  /**
   * Handles pin element context menu events
   */
  onPinContextMenu(pinId: string, event: MouseEvent): void {
    if (this.onElementContextMenu) {
      this.onElementContextMenu(pinId, event)
    }
  }

  /**
   * Cancels all active dragging operations
   */
  cancelAllDragging(): void {
    if (this.draggingElement) {
      this.draggingElement.cancelDrag()
    }
    this.draggingElement = null
  }

  /**
   * Adds a cluster element to the DOM
   */
  addClusterToDom(cluster: any, viewport: any, changeType: string): void {
    // Skip if element already exists
    if (this.clusterElementsById.get(cluster.id)) {
      return
    }

    let clusterElement: any
    let parentCluster: any = null

    if (cluster.isSinglePin) {
      // Create appropriate pin element based on thread type
      const pin = cluster.pins[0]
      let pinElement: any

      switch (pin.type) {
        case ThreadType.COMMENT_THREAD:
          pinElement = new PinnableCommentPinElement()
          break
        case ThreadType.FEED_POST:
          pinElement = new PostPinElement()
          break
        case ThreadType.LITMUS_COMMENT_THREAD:
          pinElement = new CommentPinElement()
          break
        default:
          throwTypeError(pin)
      }

      // Apply cluster data to pin element
      ClusteredPinsElement.applyClusterToAvatarPin(
        cluster,
        viewport,
        pinElement,
        this.ds.selectedPinId,
        this.ds.dimUnselectedPins,
        this.ds.clusters.minimizeUnpinned,
      )

      // Setup accessibility
      if (labConfigurations.commentsA11y.getValue()) {
        pinElement.onkeydown = (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            this.onPinElementClicked(cluster.id)
          }
        }
      }

      // Setup event handlers
      pinElement.onPinClick = this.onPinElementClicked.bind(this)
      pinElement.onEndDrag = this.onPinElementDragEnd.bind(this)
      pinElement.onStartDrag = this.onPinElementDragStart.bind(this)
      pinElement.onUpdateDrag = this.onPinElementDragMove.bind(this)
      pinElement.onPinContextClick = this.onPinContextMenu.bind(this)
      pinElement.isDraggable = pin.isDraggable
      pinElement.renderer = this

      clusterElement = pinElement
      parentCluster = this._lastRenderedDataset?.clusters.getParentOf(pin.id) || null
    }
    else {
      // Create cluster element for multi-pin clusters
      let visibilityState = PinVisibilityState.NORMAL
      const clusterElementInstance = new FigmaCommentClusterElement()

      clusterElementInstance.avatarsMap = cluster.avatarMap
      clusterElementInstance.pinnedToFile = cluster.isPinnedToFile
      clusterElementInstance.minimized = !cluster.isPinnedToFile && this.ds.clusters.minimizeUnpinned
      clusterElementInstance.positionClusterElement(cluster, viewport)
      clusterElementInstance.unread = cluster.isUnread
      clusterElementInstance.threadCount = cluster.pins.length

      // Setup accessibility
      if (labConfigurations.commentsA11y.getValue()) {
        clusterElementInstance.id = formatPinCoordinates(cluster, cluster.cluster.threads.length)
        clusterElementInstance.onkeydown = cluster.onKeyDown
      }

      clusterElementInstance.onclick = cluster.onClick
      clusterElementInstance.creationChangeType = changeType

      // Determine visibility state
      if (this.ds.selectedPinId) {
        visibilityState = cluster.pins.some((pin: any) => pin.id === this.ds.selectedPinId)
          ? PinVisibilityState.ACTIVE
          : PinVisibilityState.DIMMED
      }
      else if (this.ds.dimUnselectedPins) {
        visibilityState = PinVisibilityState.DIMMED
      }

      // Find parent cluster for animation purposes
      let commonParent: any = null
      for (let i = 0; i < cluster.pins.length; i++) {
        const pin = cluster.pins[i]
        const pinParent = this._lastRenderedDataset?.clusters.getParentOf(pin.id)

        if (commonParent && pinParent !== commonParent) {
          commonParent = null
          break
        }
        commonParent = pinParent
      }

      if (commonParent) {
        parentCluster = commonParent
      }

      clusterElementInstance.dimmed = visibilityState === PinVisibilityState.DIMMED
      clusterElementInstance.render()
      clusterElement = clusterElementInstance
    }

    // Handle onboarding highlighting
    const isOnboardingCompleted = atomStoreManager.get(isOnboardingCompletedAtom)
    if (cluster.isSinglePin && !isOnboardingCompleted) {
      const onboardingCommentId = atomStoreManager.get(onboardingCommentIdAtom)
      const pin = cluster.pins[0]
      const isUserComment = !!pin?.isOurs
      const isTargetComment = !!onboardingCommentId && onboardingCommentId === pin?.id

      if (isUserComment && isTargetComment) {
        clusterElement.setAttribute('data-onboarding-key', UU)
        atomStoreManager.set(isOnboardingCompletedAtom, true)
      }
    }

    // Add element to DOM and maps
    this.clusterElementsById.set(cluster.id, clusterElement)
    this.wrapper.append(clusterElement)

    // Handle animations
    if (!this.ds.clusters.applyInstant) {
      if (changeType === 'data' && clusterElement.animateDatasetChange && cluster.isSinglePin) {
        clusterElement.animateDatasetChange({
          type: 'create',
          isMutatedByCurrentUser: cluster.pins[0]?.isOurs,
        })
        this._lastDatasetChangeAnimatedAt = Date.now()
      }
      else if (parentCluster && changeType === 'aggregation') {
        const offsetX = (viewport.zoomScale - 1) * parentCluster.x
        const offsetY = (viewport.zoomScale - 1) * parentCluster.y
        clusterElement.animateAggregationChange?.({
          type: 'split',
          position: {
            x: parentCluster.x + offsetX,
            y: parentCluster.y + offsetY,
          },
        }).then(() => {
          if (labConfigurations.commentsA11y.getValue()) {
            this.focusOneOf(this.focusOneOfIDs)
          }
        })
      }
    }
  }

  /**
   * Removes a cluster element from the DOM
   */
  removeClusterFromDom(
    cluster: any,
    viewport: any,
    changeType: string,
    hasManyRemovals: boolean = false,
  ): void {
    let animationPromise: Promise<any> | undefined
    const clusterElement = this.clusterElementsById.get(cluster.id)

    if (!clusterElement) {
      return
    }

    // Determine parent cluster for aggregation animations
    let parentCluster = this.ds?.clusters.getParentOf(cluster.pins[0].id) || null
    if (cluster.pins.length > 1) {
      const parentPinIds = parentCluster ? new Set(parentCluster.pins.map((pin: any) => pin.id)) : new Set()
      const allPinsInParent = cluster.pins.every((pin: any) => parentPinIds.has(pin.id))
      if (!allPinsInParent) {
        parentCluster = null
      }
    }

    // Handle animations if not instant or bulk removal
    if (!(hasManyRemovals || this.ds.clusters.applyInstant)) {
      if (changeType === 'data' && clusterElement.animateDatasetChange) {
        animationPromise = clusterElement.animateDatasetChange({
          type: 'destroy',
        })
      }
      else if (parentCluster && changeType === 'aggregation') {
        const offsetX = (viewport.zoomScale - 1) * parentCluster.x
        const offsetY = (viewport.zoomScale - 1) * parentCluster.y
        animationPromise = clusterElement.animateAggregationChange?.({
          type: 'join',
          position: {
            x: parentCluster.x + offsetX,
            y: parentCluster.y + offsetY,
          },
        })
      }
    }

    // Handle element removal after animations complete
    handlePromiseCompletion(animationPromise, () => {
      clusterElement.onRemove()
      clusterElement.remove()
    })

    this.clusterElementsById.delete(cluster.id)
  }

  /**
   * Updates which clusters are visible based on current viewport
   */
  updateViewportVisibleClusters(viewport: any): void {
    const visibleArea = getVisibleArea(viewport)
    const buffer = roundedDivision(78, viewport.zoomScale)
    const windowUpdate = this.slidingWindow.updateWindow(visibleArea, buffer)

    windowUpdate.additions.forEach((cluster) => {
      this.addClusterToDom(cluster, viewport, 'viewport_visible')
    })

    windowUpdate.removals.forEach((cluster) => {
      this.removeClusterFromDom(cluster, viewport, 'viewport_visible')
    })
  }

  /**
   * Updates the drag location of a specific pin
   */
  updatePinDragLocation(pinId: string, position: { x: number, y: number }): void {
    const pinElement = this.clusterElementsById.get(pinId)
    if (pinElement) {
      pinElement.updateDragLocation(position)
    }
  }

  /**
   * Gets the viewport rectangle for a specific pin
   */
  getPinViewportRect(pinId: string): { x: number, y: number, width: number, height: number } | null {
    if (pinId === NEW_COMMENT_ID) {
      return {
        x: 0,
        y: 0,
        height: 32,
        width: CommentPinElement.getPinSize(1).width,
      }
    }

    const pinElement = this.clusterElementsById.get(pinId)
    if (!pinElement) {
      return null
    }

    const size = pinElement.unhoveredSize
    return {
      width: size.width,
      height: -1 * size.height,
      x: pinElement.x,
      y: pinElement.y,
    }
  }

  /**
   * Gets the ID of the currently focused cluster
   */
  getFocusedClusterId(): string | null {
    return this.shadowRoot?.activeElement?.parentElement?.getAttribute('id') || null
  }

  /**
   * Focuses on a specific pin by its ID
   */
  focusPinById(pinId: string): void {
    const pinElement = this.clusterElementsById.get(pinId)?.firstElementChild
    if (pinElement instanceof HTMLElement) {
      pinElement.focus()
    }
  }

  // Register the custom element
  static desiredElementName = 'clustered-pins'
}

// Export the component and related values

export const Zb = ClusteredPinsElement
export const iZ = clusteredPinsInstance
export const WE = onboardingCommentIdAtom
export const ux = isOnboardingCompletedAtom
