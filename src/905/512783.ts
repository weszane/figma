/* eslint-disable accessor-pairs */
import dompurify from 'dompurify'
import { isEqual } from 'lodash-es'
import { FigmaAvatarsElement } from '../905/84612'
import { getI18nString } from '../905/303541'
import { isCommentStateActive } from '../905/380385'
import { isWebAnimationsApiSupported } from '../905/437800'
import { $N, S as _$$S, b9, C_, CA, Fm, Gb, gy, i1, ij, KV, kW, Nz, pd, rC, rX, se, sz, T7, tu, Ud, v3, V_, VH, wH, zn, Zr, ZR } from '../905/540111'
import { globalPerfTimer } from '../905/542194'
import { getFeatureFlags } from '../905/601108'
import { Point } from '../905/736624'
import { createAnimationPromise } from '../905/799129'
import { formatRelativeTimeStatic } from '../905/986103'
import { PinVisibilityState } from '../figma_app/70421'
import { isNullish } from '../figma_app/95419'
import { buildStaticUrl } from '../figma_app/169182'
import { isPinnedCommentsEnabled } from '../figma_app/591738'
import { renderMessageMeta } from '../figma_app/819288'
import { deregisterRecording, handleMouseEvent, registerRecording } from '../figma_app/878298'

// Helper function to check if any modifier keys are pressed
function isModifierKeyPressed(event: PointerEvent): boolean {
  return event.ctrlKey || event.altKey || event.shiftKey || event.metaKey
}

/**
 * DragManager handles drag interactions for an element.
 * It manages the drag state and emits drag events to subscribers.
 *
 * @class DragManager
 */
class DragManager {
  _element: HTMLElement | null = null
  _dragState: {
    start: { x: number, y: number }
    hasStarted: boolean
    mouseOffset: { x: number, y: number }
  } | null = null

  listener: ((state: { id: string, offset: { x: number, y: number } } | null) => void) | null = null
  handlers: {
    canDrag?: () => boolean
    onClick?: (event: PointerEvent) => void
    onDragStart?: (event: { id: string, offset: { x: number, y: number } }) => void
    onDragEnd?: (event: { id: string, offset: { x: number, y: number } }) => void
    onDragUpdate?: (event: { id: string, offset: { x: number, y: number } }) => void
  } | undefined = undefined

  renderer: { bounds?: { min: { x: number, y: number }, max: { x: number, y: number } } } | null = null

  static readonly MIN_DRAG_DISTANCE = 5

  constructor(element: HTMLElement, renderer?: { bounds?: { min: { x: number, y: number }, max: { x: number, y: number } } } | null) {
    this.element = element
    this.renderer = renderer || null
  }

  /**
   * Sets the element to be managed by the drag manager.
   * Cleans up previous element event listeners and sets up new ones.
   */
  set element(element: HTMLElement | null) {
    this.cancel()

    // Clean up previous element event listeners
    if (this._element) {
      this._element.onpointerdown = null
      this._element.onpointerenter = null
      this._element.onpointerleave = null
      this._element.onpointerup = null
      this._element.onpointercancel = null
      this._element.onpointerover = null
    }

    this._element = element

    // Set up event listener for the new element
    if (this._element) {
      this._element.onpointerdown = (event: PointerEvent) => {
        this.onPointerDown(event)
      }
    }
  }

  /**
   * Cancels the current drag operation.
   */
  cancel(): void {
    this._dragState = null
    this.emitDragState(null)
  }

  /**
   * Emits the current drag state to the listener.
   */
  emitDragState(state: { id: string, offset: { x: number, y: number } } | null): void {
    if (this.listener) {
      this.listener(state)
    }
  }

  /**
   * Subscribes a listener to drag state changes.
   */
  subscribe(listener: (state: { id: string, offset: { x: number, y: number } } | null) => void): typeof listener {
    if (this.listener) {
      this.unsubscribe(this.listener)
      console.error('Subscribing new listener without unsubscribing one')
    }
    this.listener = listener
    return listener
  }

  /**
   * Unsubscribes the current listener.
   */
  unsubscribe(listener: (state: { id: string, offset: { x: number, y: number } } | null) => void): void {
    this.listener = null
  }

  /**
   * Handles pointer down events to initiate drag operations.
   */
  onPointerDown(event: PointerEvent): void {
    // Only handle left mouse button (button 0) without modifier keys
    if (event.button !== 0 || isModifierKeyPressed(event)) {
      return
    }

    // Check if dragging is allowed
    const canDrag = this.handlers?.canDrag
    if (!this._element || (canDrag && !canDrag())) {
      return
    }

    event.stopPropagation()

    // Set up move and up event handlers
    this._element.onpointermove = (event: PointerEvent) => {
      this.onPointerMove(event)
    }

    this._element.onpointerup = (event: PointerEvent) => {
      this.onPointerUp(event)
    }

    // Capture the pointer to ensure we get all events
    this._element.setPointerCapture(event.pointerId)

    // Calculate initial mouse offset
    const elementRect = this._element.getBoundingClientRect()
    const mousePosition = {
      x: event.clientX,
      y: event.clientY,
    }

    const mouseOffset = Point.subtract(elementRect, mousePosition)

    // Initialize drag state
    this._dragState = {
      start: {
        x: event.clientX,
        y: event.clientY,
      },
      hasStarted: false,
      mouseOffset,
    }
  }

  /**
   * Handles pointer up events to end drag operations.
   */
  onPointerUp(event: PointerEvent): boolean | void {
    // Release pointer capture
    if (this._element) {
      this._element.releasePointerCapture(event.pointerId)
    }

    if (!this._element) {
      return
    }

    // Clean up event handlers
    this._element.onpointerup = null
    this._element.onpointermove = null

    // If drag hasn't started, treat as a click
    if (!this._dragState || !this._dragState.hasStarted) {
      if (this.handlers?.onClick) {
        this.handlers.onClick(event)
      }
      return
    }

    // Calculate final offset and emit drag end event
    const offset = this.computeOffset(this._dragState, event)
    const dragEndEvent = {
      id: this._element.id,
      offset,
    }

    if (this.handlers?.onDragEnd) {
      this.handlers.onDragEnd(dragEndEvent)
    }

    this._dragState = null
    this.emitDragState(null)
    return true
  }

  /**
   * Computes the offset based on the current drag state and mouse position.
   */
  computeOffset(
    dragState: {
      start: { x: number, y: number }
      mouseOffset: { x: number, y: number }
    },
    event: PointerEvent,
  ): { x: number, y: number } {
    // Get current mouse position
    const currentPosition = {
      x: event.clientX,
      y: event.clientY,
    }

    // Calculate bounds if renderer is available
    let bounds: { max: { x: number, y: number }, min: { x: number, y: number } } | undefined
    if (this.renderer?.bounds) {
      const minBound = Point.subtract(this.renderer.bounds.min, dragState.mouseOffset)
      const maxBound = Point.subtract(this.renderer.bounds.max, dragState.mouseOffset)

      bounds = {
        max: {
          x: maxBound.x - 20,
          y: maxBound.y,
        },
        min: {
          x: minBound.x,
          y: minBound.y + 20,
        },
      }
    }

    // Bound the current position
    const boundedPosition = Point.bound(currentPosition, bounds)

    // Calculate offset from start position
    return Point.subtract(dragState.start, boundedPosition)
  }

  /**
   * Handles pointer move events during drag operations.
   */
  onPointerMove(event: PointerEvent): void {
    if (!this._dragState || !this._element) {
      return
    }

    const offset = this.computeOffset(this._dragState, event)

    // Check if drag has started (exceeded minimum drag distance)
    if (
      Math.max(Math.abs(offset.x), Math.abs(offset.y)) > DragManager.MIN_DRAG_DISTANCE
      && !this._dragState.hasStarted
    ) {
      const dragStartEvent = {
        id: this._element.id,
        offset: { x: 0, y: 0 },
      }

      this.emitDragState(dragStartEvent)

      if (this.handlers?.onDragStart) {
        this.handlers.onDragStart(dragStartEvent)
      }

      this._dragState.hasStarted = true
    }

    // Emit drag update event
    const dragUpdateEvent = {
      id: this._element.id,
      offset,
    }

    if (this.handlers?.onDragUpdate) {
      this.handlers.onDragUpdate(dragUpdateEvent)
    }

    this.emitDragState(dragUpdateEvent)
  }
}

/**
 * Creates an HTML template element from a string.
 * @param html - The HTML string to create a template from
 * @returns An HTMLTemplateElement
 */
function createTemplate(html: string): HTMLTemplateElement {
  const template = document.createElement('template')
  template.innerHTML = html
  return template
}

/**
 * CommentSelectionBox represents a selection box for comments in the UI.
 * It extends HTMLElement to create a custom web component.
 *
 * @class CommentSelectionBox
 * @extends HTMLElement
 */
class CommentSelectionBox extends HTMLElement {
  _bounds: { x: number, y: number, width: number, height: number } | null = null
  _lastBounds: { x: number, y: number, width: number, height: number } | null = null
  _borderOutside: boolean = false

  static readonly desiredElementName = 'figma-comment-selection-box'
  static readonly BORDER_WIDTH_PX = 2

  /**
   * Updates or creates a selection box element by ID.
   * @param container - The container element
   * @param bounds - The bounds for the selection box
   * @param className - The CSS class name for the element
   * @param borderOutside - Whether the border should be rendered outside the bounds
   * @returns The updated or created selection box element
   */
  static updateSelectionBoxById(
    container: HTMLElement,
    bounds: { x: number, y: number, width: number, height: number } | null,
    className: string,
    borderOutside: boolean = false,
  ): CommentSelectionBox | null {
    let element = container.getElementsByClassName(className)[0] as CommentSelectionBox | null

    // Create element if it doesn't exist
    if (bounds && !element) {
      element = document.createElement(this.desiredElementName) as CommentSelectionBox
      element.classList.add(className)
      container.prepend(element)
    }

    // Update element properties
    if (element) {
      element.bounds = bounds
      element.borderOutside = borderOutside

      if (bounds) {
        element.classList.remove(KV) // Remove hidden class
      }
      else {
        element.classList.add(KV) // Add hidden class
      }

      element.render()
    }

    return element || null
  }

  /**
   * Defines which attributes will trigger attributeChangedCallback
   */
  static get observedAttributes(): string[] {
    return ['x', 'y', 'height', 'width']
  }

  /**
   * Gets the bounds of the selection box
   */
  get bounds(): { x: number, y: number, width: number, height: number } | null {
    return this._bounds
  }

  /**
   * Sets the bounds of the selection box
   */
  set bounds(value: { x: number, y: number, width: number, height: number } | null) {
    if (!value) {
      this._bounds = value
      return
    }
    this._bounds = value
  }

  /**
   * Gets whether the border is rendered outside the bounds
   */
  get borderOutside(): boolean {
    return this._borderOutside
  }

  /**
   * Sets whether the border is rendered outside the bounds
   */
  set borderOutside(value: boolean) {
    this._borderOutside = value
  }

  /**
   * Called when the element is added to the document
   */
  connectedCallback(): void {
    if (!this.classList.contains(Gb)) {
      this.classList.add(Gb)
    }
  }

  /**
   * Renders the selection box based on its bounds
   */
  render(): void {
    // Only render if connected and bounds have changed
    if (this.isConnected && this._lastBounds !== this.bounds) {
      if (this.bounds) {
        // Calculate dimensions with border adjustment
        const borderWidthAdjustment = this._borderOutside ? 2 * CommentSelectionBox.BORDER_WIDTH_PX : 0
        const positionAdjustment = this._borderOutside ? CommentSelectionBox.BORDER_WIDTH_PX : 0

        this.style.width = `${this.bounds.width + borderWidthAdjustment}px`
        this.style.height = `${this.bounds.height + borderWidthAdjustment}px`
        this.style.left = `${this.bounds.x - positionAdjustment}px`
        this.style.top = `${this.bounds.y - positionAdjustment}px`
        this.style.display = 'flex'
      }
      else {
        this.style.display = 'none'
      }

      this._lastBounds = this.bounds
    }
  }
}
/**
 * CommentPinElement represents a base comment pin element in the UI.
 * It extends HTMLElement to create a custom web component with drag and rendering capabilities.
 *
 * @class CommentPinElement
 * @extends HTMLElement
 */
export class CommentPinElement extends HTMLElement {
  // State properties
  _lastPosition: { x: number, y: number } | null = null
  _position: { x: number, y: number } = { x: 0, y: 0 }
  _lastData: any = null
  _data: any = null
  _dragManager: DragManager | null = null
  _lastDragOffset: { x: number, y: number } | null = null
  _dragOffset: { x: number, y: number } | null = null
  _lastSelectionBoxAnchor: { x: number, y: number } | null = null
  _selectionBoxAnchor: { x: number, y: number } | null = null
  _lastOtherBoundingBoxes: Record<string, any> = {}
  _otherBoundingBoxes: Record<string, any> = {}
  _lastRenderPosition: { x: number, y: number } | null = null
  _lastRenderedMessageMeta: any = null
  _lastZoomScale: number | null = null
  _zoomScale: number = 1

  // UI elements
  _loadingSpinner: Node | null = null
  pendingTimeout: number | null = null
  timestampUpdateInterval: number | null = null
  template: HTMLTemplateElement

  // Event handlers
  onClick: (event: MouseEvent) => void

  // Callback functions
  public canDrag: (() => boolean) | null = null
  public onStartDrag: ((event: { id: string, offset: { x: number, y: number } }, pin: CommentPinElement) => void) | null = null
  public onUpdateDrag: ((event: { id: string, offset: { x: number, y: number } }, pin: CommentPinElement) => void) | null = null
  public onEndDrag: ((event: { id: string, offset: { x: number, y: number } }, pin: CommentPinElement) => void) | null = null
  public onPinClick: ((id: string, event: MouseEvent) => void) | null = null
  public onPinContextClick: ((id: string, event: MouseEvent) => void) | null = null

  // Constants
  static readonly PENDING_DELAY_MS: number = 500
  static readonly MAX_PIN_AVATARS: number = 3
  static readonly ANIMATE_NEW_DURATION: number = 400
  static readonly ANIMATE_NEW_DELAY: number = 3500
  static readonly desiredElementName: string = 'figma-comment-pin'
  static readonly styles: string[] = [Nz, FigmaAvatarsElement.style]
  static readonly spinner: HTMLTemplateElement = createTemplate(`<div id="spinner" class="${_$$S}" />`)

  constructor() {
    super()

    // Initialize template
    this.template = createTemplate(`
    <div class="${kW}">
      <figma-avatars clamp=${CommentPinElement.MAX_PIN_AVATARS - 1}></figma-avatars>
      <div class="${$N}">
        <div class="${Ud}">
          <div class="${T7}" dir="auto"></div>
          <div class="${Zr}"><span></span></div>
        </div>
        <div class="${se}" dir="auto"></div>
        <span class="${V_}"></span>
      </div>
    </div>
    `)

    // Bind click handler
    this.onClick = handleMouseEvent(this, 'click', (event: MouseEvent) => {
      if (this.onPinClick) {
        globalPerfTimer.start('view_comment_thread')
        this.onPinClick(this.id, event)
      }
    })

    // Register for recording
    registerRecording(this)
  }

  /**
   * Gets the recording key for this pin
   * @returns The recording key string
   */
  recordingKey(): string {
    return `commentPin.${this._data?.id}`
  }

  /**
   * Cancels the current drag operation
   */
  cancelDrag(): void {
    this._dragManager?.cancel()
  }

  /**
   * Handles context menu click events
   * @param event - The mouse event
   */
  onContextClick(event: MouseEvent): void {
    if (this.onPinContextClick) {
      this.onPinContextClick(this.id, event)
    }
  }

  /**
   * Handles drag end events
   * @param event - The drag event
   */
  onDragEnd(event: { id: string, offset: { x: number, y: number } }): void {
    if (this.onEndDrag) {
      this.onEndDrag(event, this)
    }
    this.dragLocation = null
  }

  /**
   * Handles drag update events
   * @param event - The drag event
   */
  onDragUpdate(event: { id: string, offset: { x: number, y: number } }): void {
    this.dragLocation = event.offset
    this.render()
    if (this.onUpdateDrag) {
      this.onUpdateDrag(event, this)
    }
  }

  /**
   * Handles drag start events
   * @param event - The drag event
   */
  onDragStart(event: { id: string, offset: { x: number, y: number } }): void {
    if (this.onStartDrag) {
      this.onStartDrag(event, this)
    }
  }

  /**
   * Handles mouse enter events
   */
  onMouseEnter(): void {
    this.preview = true
  }

  /**
   * Handles mouse leave events
   */
  onMouseLeave(): void {
    this.preview = false
  }

  /**
   * Handles removal of the pin
   */
  onRemove(): void {
    deregisterRecording(this)
  }

  /**
   * Binds context click handler
   */
  bindContextClick(): void {
    this.oncontextmenu = this.onContextClick.bind(this)
  }

  /**
   * Sets whether the pin is draggable
   * @param draggable - Whether the pin should be draggable
   */
  set isDraggable(draggable: boolean) {
    if (draggable && !this._dragManager) {
      this._dragManager = new DragManager(this, this.renderer)
      this._dragManager.handlers = {
        onClick: this.onClick.bind(this),
        onDragStart: this.onDragStart.bind(this),
        onDragEnd: this.onDragEnd.bind(this),
        onDragUpdate: this.onDragUpdate.bind(this),
      }
    }
    else if (!draggable) {
      if (this._dragManager) {
        this._dragManager.element = null
      }
      this.onclick = this.onClick.bind(this)
    }
  }

  // Position getters and setters
  get x(): number {
    return this._position.x
  }

  get y(): number {
    return this._position.y
  }

  get position(): { x: number, y: number } {
    return this._position
  }

  set position(position: { x: number, y: number }) {
    this._position = { ...position }
  }

  set zoomScale(scale: number) {
    this._zoomScale = scale
  }

  set selectionBoxAnchor(anchor: { x: number, y: number } | null) {
    this._selectionBoxAnchor = anchor ? { ...anchor } : null
  }

  set otherBoundingBoxes(boundingBoxes: Record<string, any>) {
    this._otherBoundingBoxes = boundingBoxes && Object.keys(boundingBoxes).length > 0 ? boundingBoxes : {}
  }

  /**
   * Calculates position based on coordinates and scale
   * @param coords - The coordinates
   * @param scale - The scale factor
   * @returns The calculated position
   */
  static getPosition(coords: { x: number, y: number }, scale: number): { x: number, y: number } {
    const offsetX = (scale - 1) * coords.x
    const offsetY = (scale - 1) * coords.y
    return {
      x: coords.x + offsetX,
      y: coords.y + offsetY,
    }
  }

  /**
   * Gets selection box position
   * @param position - The current position
   * @param scale - The scale factor
   * @param anchor - The anchor point
   * @returns The selection box position
   */
  getSelectionBoxPosition(
    position: { x: number, y: number },
    scale: number,
    anchor: { x: number, y: number },
  ): { width: number, height: number, x: number, y: number } {
    const anchorPosition = this.constructor.getPosition(anchor, scale)
    const minX = Math.min(position.x, anchorPosition.x)
    const minY = Math.min(position.y, anchorPosition.y)
    return {
      width: Math.max(position.x - minX, anchorPosition.x - minX),
      height: Math.max(position.y - minY, anchorPosition.y - minY),
      x: minX - position.x,
      y: minY - position.y,
    }
  }

  /**
   * Gets selection box position from rectangle
   * @param rect - The rectangle
   * @param scale - The scale factor
   * @param position - The position
   * @returns The selection box position
   */
  getSelectionBoxPositionFromRect(
    rect: { width: number, height: number, x: number, y: number },
    scale: number,
    position: { x: number, y: number },
  ): { width: number, height: number, x: number, y: number } {
    return {
      width: rect.width * scale,
      height: rect.height * scale,
      x: rect.x * scale - position.x,
      y: rect.y * scale - position.y,
    }
  }

  // Data getters and setters
  get data(): any {
    return this._data
  }

  set data(data: any) {
    this._data = data ? { ...data } : null
    registerRecording(this)
  }

  set dragLocation(location: { x: number, y: number } | null) {
    this._dragOffset = location ? { ...location } : null
  }

  // Element getters
  get pinContainer(): Element {
    return this.getElementsByClassName(kW)[0]
  }

  get pinPreview(): Element {
    return this.pinContainer.getElementsByClassName($N)[0]
  }

  get previewText(): Element {
    return this.pinContainer.getElementsByClassName(se)[0]
  }

  get previewHeader(): Element {
    return this.pinContainer.getElementsByClassName(Ud)[0]
  }

  get previewAuthor(): Element {
    return this.pinContainer.getElementsByClassName(T7)[0]
  }

  get previewTimestamp(): Element {
    return this.pinContainer.getElementsByClassName(Zr)[0]
  }

  get avatarElements(): any {
    return this.pinContainer.getElementsByTagName(FigmaAvatarsElement.desiredElementName)[0]
  }

  get replySummary(): Element {
    return this.pinContainer.getElementsByClassName(V_)[0]
  }

  // Attribute setters
  set selected(selected: boolean) {
    if (selected) {
      this.setAttribute('hover-disabled', 'true')
      this.setAttribute('selected', 'true')
    }
    else {
      this.removeAttribute('hover-disabled')
      this.removeAttribute('selected')
    }
  }

  set dimmed(dimmed: boolean) {
    if (dimmed) {
      this.setAttribute('dimmed', 'true')
    }
    else {
      this.removeAttribute('dimmed')
    }
  }

  set emphasized(emphasized: boolean) {
    if (emphasized) {
      this.setAttribute('emphasized', 'true')
    }
    else {
      this.removeAttribute('emphasized')
    }
  }

  set preview(preview: boolean) {
    if (preview) {
      this.setAttribute('preview', 'true')
    }
    else {
      this.removeAttribute('preview')
    }
  }

  set minimized(minimized: boolean) {
    if (minimized) {
      this.setAttribute('minimized', 'true')
    }
    else {
      this.removeAttribute('minimized')
    }
  }

  set selectionBox(bounds: { x: number, y: number, width: number, height: number } | null) {
    CommentSelectionBox.updateSelectionBoxById(this, bounds, `${this.id}_box_main`)
  }

  /**
   * Calculates remaining pending delay
   * @param data - The data object
   * @returns Remaining time in milliseconds
   */
  pendingDelayRemaining(data: any): number {
    return data.createdAt.getTime() + CommentPinElement.PENDING_DELAY_MS - new Date().getTime()
  }

  connectedCallback(): void {
    if (!this.classList.contains(ij)) {
      this.classList.add(ij)
    }
    if (!this.classList.contains(C_)) {
      this.classList.add(C_)
    }

    const clone = this.template.content.cloneNode(true)
    this.append(clone)

    CommentPinElement.observedAttributes.forEach((attr) => {
      this.attributeChangedCallback(attr, '', this.getAttribute(attr) || '')
    })

    if (this.data?.pending && this.pendingDelayRemaining(this.data) > 0) {
      const timeout = setTimeout(() => {
        clearTimeout(timeout)
        this.render()
      }, this.pendingDelayRemaining(this.data))
      this.pendingTimeout = timeout as unknown as number
    }

    this.render()
    this.bindContextClick()
    this.addEventListener('mouseenter', this.onMouseEnter.bind(this))
    this.addEventListener('mouseleave', this.onMouseLeave.bind(this))
  }

  disconnectedCallback(): void {
    if (this.pendingTimeout) {
      clearTimeout(this.pendingTimeout)
    }
    if (this.timestampUpdateInterval) {
      clearInterval(this.timestampUpdateInterval)
    }
    this.removeEventListener('mouseenter', this.onMouseEnter)
    this.removeEventListener('mouseleave', this.onMouseLeave)
  }

  /**
   * Animates the pin directionally
   * @param position - The target position
   * @param offset - The animation offset
   * @returns A promise that resolves when animation completes
   */
  animateDirectionally(position: { x: number, y: number } | null, offset: number): Promise<void> {
    if (!position || !isWebAnimationsApiSupported()) {
      return Promise.resolve()
    }

    const transform = `translate3d(${position.x}px, ${position.y}px, 0px) scale(.2)`
    return new Promise((resolve, reject) => {
      const animation = this.animate([
        {
          offset,
          transform,
        },
      ], {
        duration: 200,
      })

      animation.onfinish = () => resolve()
      animation.oncancel = () => reject()
    })
  }

  /**
   * Animates aggregation change
   * @param event - The aggregation event
   */
  async animateAggregationChange(event: any): Promise<void> {
    if (event.type === 'join') {
      this.setAttribute('hover-disabled', 'true')
      await this.animateDirectionally(event.position, 1)
      return
    }
    await this.animateDirectionally(event.position, 0)
  }

  /**
   * Animates dataset change
   * @param event - The dataset event
   */
  async animateDatasetChange(event: any): Promise<void> {
    const lastAnimatedAt = this.renderer?._lastDatasetChangeAnimatedAt
    if (
      event.type === 'create'
      && !event.isMutatedByCurrentUser
      && lastAnimatedAt
      && this.data
      && lastAnimatedAt < this.data.createdAt.getTime()
    ) {
      this.preview = true
      requestAnimationFrame(() => {
        this.style.setProperty('--expandAnimationTime', `${CommentPinElement.ANIMATE_NEW_DURATION / 1000}s`)
        this.classList.add(sz)
      })

      await createAnimationPromise(this.pinContainer, [
        {
          offset: 0,
          transform: 'scale(0.2)',
        },
        {
          offset: 1,
          transform: 'scale(1)',
        },
      ], {
        duration: CommentPinElement.ANIMATE_NEW_DURATION,
        endDelay: CommentPinElement.ANIMATE_NEW_DELAY,
      })

      this.classList.remove(sz)
      this.style.removeProperty('--expandAnimationTime')
      this.preview = false
    }
  }

  static get observedAttributes(): string[] {
    return ['hover-disabled', 'selected', 'dimmed', 'emphasized', 'preview', 'minimized']
  }

  /**
   * Gets reply preview string
   * @param previewData - The preview data
   * @returns The formatted reply preview string
   */
  getReplyPreviewString(previewData: any): string {
    const replyCount = previewData.replies || 0
    const attachmentCount = previewData.numAttachments
    const hasUnreadReplies = !!previewData.numUnreadReplies && previewData.numUnreadReplies !== replyCount

    const replyText = replyCount
      ? getI18nString('comments.preview_reply_count', {
        replyCount: hasUnreadReplies ? previewData.numUnreadReplies : replyCount,
        new: hasUnreadReplies ? 'true' : 'false',
      })
      : ''

    const attachmentText = attachmentCount
      ? getI18nString('comments.attachment_count', {
        attachmentCount,
      })
      : ''

    if (replyText) {
      return attachmentText ? `${replyText} · ${attachmentText}` : replyText
    }
    return attachmentText || ''
  }

  render(): void {
    if (this._lastData?.id !== this._data?.id) {
      this.id = this._data?.id || ''
    }

    if (!this.isConnected || !this._position || !this.data) {
      return
    }

    const isPendingOrHoverDisabled = this.data.pending || this.getAttribute('hover-disabled')
    this.syncStyle(isPendingOrHoverDisabled, Fm)

    if (this.data.pending && this.pendingDelayRemaining(this.data) <= 0) {
      this.addLoadingSpinner()
    }
    else {
      this.removeLoadingSpinnerIfPresent()
    }

    if (
      this._lastPosition?.x !== this._position?.x
      || this._lastPosition?.y !== this._position?.y
      || this._lastDragOffset !== this._dragOffset
      || this._lastDragOffset?.x !== this._dragOffset?.x
      || this._lastDragOffset?.y !== this._dragOffset?.y
      || this._lastZoomScale !== this._zoomScale
      || this._lastSelectionBoxAnchor !== this._selectionBoxAnchor
      || !isEqual(this._lastOtherBoundingBoxes, this._otherBoundingBoxes)
    ) {
      const offsetX = this._dragOffset?.x || 0
      const offsetY = this._dragOffset?.y || 0
      const scaledPosition = this.constructor.getPosition(this._position, this._zoomScale)
      const renderPosition = Point.subtract(scaledPosition, { x: offsetX, y: offsetY })

      if (
        this._lastRenderPosition?.x !== renderPosition.x
        || this._lastRenderPosition?.y !== renderPosition.y
      ) {
        this.style.setProperty('transform', `translate3d(${renderPosition.x}px, ${renderPosition.y}px, 0px) scale(var(--scale, 1))`)
        this._lastRenderPosition = renderPosition
      }

      const selectionBoxBounds = this._selectionBoxAnchor
        ? this.getSelectionBoxPosition(renderPosition, this._zoomScale, this._selectionBoxAnchor)
        : null

      CommentSelectionBox.updateSelectionBoxById(
        this,
        selectionBoxBounds,
        `${this.id}_box_main`,
        !!this._data && !isCommentStateActive(this._data.type),
      )

      if (getFeatureFlags().xr_debounce_threshold) {
        const allKeys = new Set([
          ...Object.keys(this._otherBoundingBoxes),
          ...Object.keys(this._lastOtherBoundingBoxes),
        ])

        for (const key of allKeys) {
          const boundingBox = this._otherBoundingBoxes[key]
          const boxBounds = boundingBox
            ? this.getSelectionBoxPositionFromRect(boundingBox, this._zoomScale, renderPosition)
            : null
          CommentSelectionBox.updateSelectionBoxById(
            this,
            boxBounds,
            `${this.id}_box_${key}`,
            !!this._data && !isCommentStateActive(this._data.type),
          )
        }
      }

      this._lastPosition = this._position
      this._lastDragOffset = this._dragOffset
      this._lastZoomScale = this._zoomScale
      this._lastSelectionBoxAnchor = this._selectionBoxAnchor
      this._lastOtherBoundingBoxes = this._otherBoundingBoxes
    }

    if (this._lastData?.avatars !== this._data?.avatars) {
      const avatars = this._data?.avatars || []
      this.avatarElements.avatars = avatars

      if (avatars.length > 1) {
        this.pinContainer.classList.add(tu)
        this.pinPreview.classList.add(tu)
      }
      else {
        this.pinContainer.classList.remove(tu)
        this.pinPreview.classList.remove(tu)
      }
    }

    const previewData = this._data?.preview
    if (this._lastData?.preview !== previewData) {
      this.previewAuthor.innerText = previewData.author

      if (previewData.unread) {
        this.classList.add(gy)
      }
      else {
        this.classList.remove(gy)
      }

      this.replySummary.innerText = this.getReplyPreviewString(previewData)
    }

    if (this.getAttribute('preview')) {
      if (this._lastRenderedMessageMeta !== previewData.messageMeta) {
        const messageMetaHtml = renderMessageMeta(previewData.messageMeta)
        this.previewText.innerHTML = dompurify().sanitize(messageMetaHtml, {
          ALLOWED_TAGS: ['img', 'span'],
          ALLOWED_ATTR: ['src', 'class'],
          ALLOWED_URI_REGEXP: new RegExp(buildStaticUrl('emoji/*')),
        })
        this._lastRenderedMessageMeta = previewData.messageMeta
      }

      this.previewTimestamp.innerText = formatRelativeTimeStatic(this._data?.createdAt, 'short')
    }

    this.renderOtherChanges(this._lastData, this._data)
    this._lastData = this._data
  }

  /**
   * Sets class based on attribute value
   * @param expectedValue - The expected attribute value
   * @param attributeName - The attribute name
   * @param actualValue - The actual attribute value
   * @param className - The class name to toggle
   */
  setClassOn(
    expectedValue: string,
    attributeName: string,
    actualValue: string,
    className: string,
  ): void {
    if (attributeName === expectedValue) {
      if (actualValue) {
        this.classList.add(className)
      }
      else {
        this.classList.remove(className)
      }
    }
  }

  /**
   * Synchronizes styling based on condition
   * @param condition - The condition to check
   * @param className - The class name to toggle
   * @param element - The element to apply styling to (defaults to this)
   */
  syncStyle(condition: any, className: string, element: HTMLElement = this): void {
    const shouldHaveClass = !!condition
    if (shouldHaveClass && !element.classList.contains(className)) {
      element.classList.add(className)
    }
    else if (!shouldHaveClass && element.classList.contains(className)) {
      element.classList.remove(className)
    }
  }

  attributeChangedCallback(attributeName: string, oldValue: string, newValue: string): void {
    if (oldValue !== newValue && this.isConnected) {
      this.setClassOn('selected', attributeName, newValue, wH)
      this.setClassOn('dimmed', attributeName, newValue, rX)
      this.setClassOn('preview', attributeName, newValue, VH)

      if (isPinnedCommentsEnabled()) {
        this.setClassOn('minimized', attributeName, newValue, pd)
      }

      if (attributeName === 'emphasized' && newValue) {
        this.style.setProperty('--scale', '1.1')
      }
      else {
        this.style.removeProperty('--scale')
      }

      this.render()
    }
  }

  /**
   * Adds emphasis styling
   */
  addEmphasisStyle(): void {
    this.emphasized = true
  }

  /**
   * Updates pin selected state
   * @param state - The visibility state
   */
  updatePinSelectedState(state: PinVisibilityState): void {
    this.selected = state === PinVisibilityState.ACTIVE
    this.dimmed = state === PinVisibilityState.DIMMED
  }

  /**
   * Removes emphasis styling
   */
  removeEmphasisStyle(): void {
    this.emphasized = false
  }

  /**
   * Updates drag location
   * @param location - The new drag location
   */
  updateDragLocation(location: { x: number, y: number } | null): void {
    this.dragLocation = location
    this.render()
  }

  /**
   * Adds loading spinner
   */
  addLoadingSpinner(): void {
    if (!this._loadingSpinner) {
      this._loadingSpinner = CommentPinElement.spinner.content.cloneNode(true)
      this.pinContainer.prepend(this._loadingSpinner)
    }

    this.avatarElements.style.setProperty('opacity', '0')
    this.avatarElements.style.setProperty('visibility', 'hidden')
    this.avatarElements.style.setProperty('position', 'absolute')
  }

  /**
   * Removes loading spinner if present
   */
  removeLoadingSpinnerIfPresent(): void {
    if (this._loadingSpinner) {
      this.removeChild(this._loadingSpinner)
    }

    this.avatarElements.style.removeProperty('position')
    this.avatarElements.style.removeProperty('opacity')
    this.avatarElements.style.removeProperty('visibility')
  }

  /**
   * Renders other changes (to be overridden by subclasses)
   * @param oldData - The old data
   * @param newData - The new data
   */
  protected renderOtherChanges(oldData: any, newData: any): void { }

  /**
   * Gets the unhovered size of the pin
   * @returns The size dimensions
   */
  get unhoveredSize(): { width: number, height: number } {
    return CommentPinElement.getPinSize(this._data?.avatars.length || 1)
  }

  /**
   * Gets the pin size based on avatar count
   * @param avatarCount - The number of avatars
   * @returns The size dimensions
   */
  static getPinSize(avatarCount: number): { width: number, height: number } {
    return {
      width: 23 * Math.min(avatarCount - 1, 2) + 32,
      height: 32,
    }
  }
}
export let PINNABLE_COMMENT_PIN_TEST_ID = 'pinnable-comment-pin'
export class PinnableCommentPinElement extends CommentPinElement {
  _pinnedToFileIcon: Node | null = null

  static readonly desiredElementName = 'figma-pinnable-comment-pin'

  static readonly pinnedToFileIcon: HTMLTemplateElement = createTemplate(`
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="white"/>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.8282 8.00021L13.4799 6.40922L14.3638 5.87889L13.6349 5.15002L10.85 2.36511L10.1211 1.63623L9.59082 2.52012L7.9999 5.17169L4.81792 6.23235L3.75726 6.5859L4.54783 7.37647L6.23213 9.06078L3.14622 12.1467L2.79266 12.5002L3.49977 13.2074L3.85332 12.8538L6.93924 9.76788L8.62354 11.4522L9.41411 12.2428L9.76765 11.1821L10.8282 8.00021ZM8.97708 10.3915L9.87954 7.684L9.99652 7.33305L9.99646 7.33309L9.87948 7.68404L8.97704 10.3915L8.97708 10.3915ZM12.751 5.68039L12.751 5.68035L10.3197 3.24899L10.3196 3.24906L12.751 5.68039ZM8.31613 6.12037L8.66702 6.00341L8.66701 6.00343L8.31606 6.12041L5.6085 7.02293L5.60849 7.02292L8.31613 6.12037Z" fill="#007BE5"/>
    </svg>
  `)

  constructor() {
    super()
    this._pinnedToFileIcon = null
    this.template = createTemplate(`
    <div class="${kW}" tabIndex="0" data-testid="${PINNABLE_COMMENT_PIN_TEST_ID}">
      <div class="${v3}"></div>
      <figma-avatars clamp=${CommentPinElement.MAX_PIN_AVATARS - 1}></figma-avatars>
      <div class="${$N}">
        <div class="${Ud}">
          <div class="${T7}" dir="auto"></div>
          <div class="${Zr}"><span></span></div>
        </div>
        <div class="${se}" dir="auto"></div>
        <span class="${V_}"></span>
      </div>
    </div>
    `)
    registerRecording(this)
  }

  /**
   * Gets the pinned to file indicator element
   * @returns The pinned to file indicator element
   */
  get pinnedThreadToFileIndicator(): Element {
    return this.pinContainer.getElementsByClassName(v3)[0]
  }

  /**
   * Adds the pinned to file icon if it's not already present
   */
  addIconWhenPinnedToFileIfAbsent(): void {
    if (!this._pinnedToFileIcon) {
      this._pinnedToFileIcon = PinnableCommentPinElement.pinnedToFileIcon.content.cloneNode(true)
      this.pinnedThreadToFileIndicator.prepend(this._pinnedToFileIcon)
    }
  }

  /**
   * Renders additional changes specific to pinnable comment pins
   * @param oldData - The previous data
   * @param newData - The new data
   */
  protected renderOtherChanges(oldData: any, newData: any): void {
    const newPreview = newData?.preview
    const oldPreview = oldData?.preview

    if (newPreview && isPinnedCommentsEnabled()) {
      if (newPreview.isPinnedToFile) {
        this.addIconWhenPinnedToFileIfAbsent()
        this.pinnedThreadToFileIndicator.classList.add(ZR)
      }
      else {
        this.pinnedThreadToFileIndicator.classList.remove(ZR)
      }

      if (isNullish(oldPreview?.isPinnedToFile)) {
        this.pinnedThreadToFileIndicator.classList.add(rC)
      }
    }
  }
}

export class PostPinElement extends CommentPinElement {
  static readonly desiredElementName = 'figma-post-pin'

  static readonly feedIcon: string = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="6.5" y="6.5" width="4.14286" height="5.85714" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
      <rect x="13.3574" y="11.6426" width="4.14286" height="5.85714" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
      <rect x="13.3574" y="6.5" width="4.14286" height="2.42857" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
      <rect x="6.5" y="15.0713" width="4.14286" height="2.42857" rx="0.5" stroke="var(--color-icon)" stroke-opacity="0.9"/>
    </svg>
  `

  static readonly template: HTMLTemplateElement = createTemplate(`
    <div class="${zn}">
      <div class="${i1}">
        ${PostPinElement.feedIcon}
        <figma-avatars clamp=${CommentPinElement.MAX_PIN_AVATARS - 1}></figma-avatars>
      </div>
      <div class="${$N}">
        <div class="${Ud}">
          <div class="${T7}" dir="auto"></div>
          <div class="${Zr}"><span></span></div>
        </div>
        <div class="${CA}" dir="auto"></div>
        <div class="${se}" dir="auto"></div>
        <span class="${V_}"></span>
      </div>
    </div>
  `)

  constructor() {
    super()
    registerRecording(this)
  }

  /**
   * Calculates position with vertical adjustment for post pins
   * @param coords - The coordinates
   * @param scale - The scale factor
   * @returns The adjusted position
   */
  static getPosition(coords: { x: number, y: number }, scale: number): { x: number, y: number } {
    const offsetX = (scale - 1) * coords.x
    const offsetY = (scale - 1) * coords.y
    return {
      x: coords.x + offsetX,
      y: coords.y + offsetY - 1,
    }
  }

  connectedCallback(): void {
    if (!this.classList.contains(ij)) {
      this.classList.add(ij)
    }
    if (!this.classList.contains(b9)) {
      this.classList.add(b9)
    }
    if (!this.classList.contains(C_)) {
      this.classList.add(C_)
    }

    const clone = PostPinElement.template.content.cloneNode(true)
    this.append(clone)

    PostPinElement.observedAttributes.forEach((attr) => {
      this.attributeChangedCallback(attr, '', this.getAttribute(attr) || '')
    })

    this.render()
    this.bindContextClick()
    this.addEventListener('mouseenter', this.onMouseEnter.bind(this))
    this.addEventListener('mouseleave', this.onMouseLeave.bind(this))
  }

  /**
   * Gets the pin container element
   * @returns The pin container element
   */
  get pinContainer(): Element {
    return this.getElementsByClassName(zn)[0]
  }

  /**
   * Gets the title text element
   * @returns The title text element
   */
  get titleText(): Element {
    return this.pinContainer.getElementsByClassName(CA)[0]
  }

  /**
   * Gets the pin size for post pins
   * @param avatarCount - The number of avatars
   * @returns The size dimensions
   */
  static getPinSize(avatarCount: number): { width: number, height: number } {
    return {
      width: 23 * Math.min(avatarCount - 1, 2) + 32 + 24,
      height: 32,
    }
  }

  /**
   * Renders additional changes specific to post pins
   * @param oldData - The previous data
   * @param newData - The new data
   */
  protected renderOtherChanges(oldData: any, newData: any): void {
    if (oldData?.preview !== newData.preview) {
      this.titleText.textContent = newData.preview?.feedPostTitle ?? ''

      if (oldData?.preview?.pinVerticalStagger !== newData.preview?.pinVerticalStagger) {
        const stagger = newData.preview?.pinVerticalStagger ?? 0
        const offset = stagger * PostPinElement.getPinSize(0).height
        this.pinContainer.setAttribute('style', `transform: translateY(${offset}px)`)
      }
    }
  }
}

'customElements' in window && !customElements.get(CommentPinElement.desiredElementName) && customElements.define(CommentPinElement.desiredElementName, CommentPinElement)
'customElements' in window && !customElements.get(PinnableCommentPinElement.desiredElementName) && customElements.define(PinnableCommentPinElement.desiredElementName, PinnableCommentPinElement)
'customElements' in window && !customElements.get(PostPinElement.desiredElementName) && customElements.define(PostPinElement.desiredElementName, PostPinElement)
'customElements' in window && !customElements.get(CommentSelectionBox.desiredElementName) && customElements.define(CommentSelectionBox.desiredElementName, CommentSelectionBox)
export const XC = CommentPinElement
export const tR = PINNABLE_COMMENT_PIN_TEST_ID
export const aT = PinnableCommentPinElement
export const b1 = PostPinElement
