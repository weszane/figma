import classNames from 'classnames'
import { throttle } from 'lodash-es'
import { createContext, createRef, PureComponent, useMemo } from 'react'
import { H as _$$H } from 'react-dom'
import { jsx, jsxs } from 'react/jsx-runtime'
import { KeyCodes } from '../905/63728'
import { isInvalidValue } from '../905/216495'
import { VisualBellActions } from '../905/302958'
import { browserFeatures } from '../905/508367'
import { getFeatureFlags } from '../905/601108'
import { incrementValue } from '../905/668764'
import { isElementFocusable } from '../905/877503'
import { H } from '../figma_app/147959'
import { yesNoTrackingEnum } from '../figma_app/198712'
import { generateSlug, PanelIdentifiers } from '../figma_app/242339'
import { fullscreenValue } from '../figma_app/455680'
import { En } from '../figma_app/613182'
import { SnapshotLevel } from '../figma_app/763686'

import { BrowserInfo } from '../figma_app/778880'
import { _o, dc, kL, mh, NJ, r9, UV, xn } from '../figma_app/779179'

// Original code: let _ = 'devicePixelRatio' in window ? e => (function (e, t) { return Math.floor(e * t + 0.5) / t }(e, window.devicePixelRatio)) : e => Math.round(e)
// Refactored: Renamed to roundToPixel for clarity, added type annotations and JSDoc.
const roundToPixel: (value: number) => number = 'devicePixelRatio' in window
  ? (value: number) => {
      const pixelRatio = window.devicePixelRatio
      return Math.floor(value * pixelRatio + 0.5) / pixelRatio
    }
  : (value: number) => Math.round(value)

// Original code: class A { ... }
// Refactored: Renamed to ScrubEvent, added types, JSDoc, and made constructor parameters typed.
interface Distance {
  x: number
  y: number
}

interface ScrubEventData {
  target: EventTarget | null
  sourceEvent: Event
  canceled?: boolean
  distance?: Distance
  delta?: Distance
  isBigIncrement?: boolean
  isUnbounded?: boolean
}

/**
 * Represents a scrub event with details about the interaction.
 */
class ScrubEvent {
  target: EventTarget | null
  sourceEvent: Event
  canceled: boolean
  distance: Distance
  delta: Distance
  isBigIncrement: boolean
  isUnbounded: boolean

  constructor(
    target: EventTarget | null,
    sourceEvent: Event,
    canceled: boolean = false,
    distance: Distance = { x: 0, y: 0 },
    delta: Distance = { x: 0, y: 0 },
    isBigIncrement: boolean = false,
    isUnbounded: boolean = false,
  ) {
    this.target = target
    this.sourceEvent = sourceEvent
    this.canceled = canceled
    this.distance = distance
    this.delta = delta
    this.isBigIncrement = isBigIncrement
    this.isUnbounded = isUnbounded
  }
}



// Original code: class E { ... }
// Refactored: Renamed to CustomCursor, added types, JSDoc, split methods.
interface CursorSize {
  x: number
  y: number
}

// Original code: function w({ ... }) { ... }
// Refactored: Renamed to ScrubCursor, added types, JSDoc.
interface ScrubCursorProps {
  width?: number
  height?: number
  arrowWidth: number
  className?: string
  style?: React.CSSProperties
}


// Original code: let O = new class { ... }
// Refactored: Renamed to ScrubManager, added types, JSDoc, split into smaller methods, simplified conditionals.
// This is a large class; I've broken it into logical sections with private methods where possible.
interface ScrubManagerOptions {
  disablePointerLock?: boolean
}




// Original code: class A { ... }
// Refactored: Renamed to ScrubEvent, added types, JSDoc, and made constructor parameters typed.
interface Distance {
  x: number
  y: number
}

interface ScrubEventData {
  target: EventTarget | null
  sourceEvent: Event
  canceled?: boolean
  distance?: Distance
  delta?: Distance
  isBigIncrement?: boolean
  isUnbounded?: boolean
}



// Original code: class y { ... }
// Refactored: Renamed to WheelCapture, added types, JSDoc, split into smaller methods, simplified conditionals.
interface WheelMultiplier {
  x: number
  y: number
}

interface ScrubContext {
  cursorSize: any
  cursorStyle?: string 
  renderCursor: any
  wheelMultiplier?: number | WheelMultiplier
  wheelSingleAxis?: 'x' | 'y' | false
  onBegin?: (event: ScrubEvent) => boolean | void
  onChange?: (event: ScrubEvent) => void
  onEnd?: (event: ScrubEvent) => void

}

/**
 * Handles wheel-based scrubbing for a tracked element.
 */
class WheelCapture {
  trackedEl: HTMLElement
  ctx: ScrubContext
  distance: Distance
  batchTimer: number | null
  didChange: boolean
  ended: boolean
  multiplier: WheelMultiplier
  deltaMutator: (delta: Distance) => void

  constructor(trackedEl: HTMLElement, ctx: ScrubContext) {
    this.trackedEl = trackedEl
    this.ctx = ctx
    this.distance = { x: 0, y: 0 }
    this.batchTimer = null
    this.didChange = false
    this.ended = false

    this.multiplier = this.computeMultiplier(ctx.wheelMultiplier)

    // Determine delta mutator based on wheelSingleAxis
    switch (ctx.wheelSingleAxis || false) {
      case 'x':
        this.deltaMutator = (delta: Distance) => {
          if (Math.abs(delta.y) > Math.abs(delta.x)) {
            delta.x = delta.y
          }
          delta.x *= this.multiplier.x
          delta.y = 0
        }
        break
      case 'y':
        this.deltaMutator = (delta: Distance) => {
          if (Math.abs(delta.x) > Math.abs(delta.y)) {
            delta.y = delta.x
          }
          delta.x = 0
          delta.y *= this.multiplier.y
        }
        break
      default:
        this.deltaMutator = (delta: Distance) => {
          delta.x *= this.multiplier.x
          delta.y *= this.multiplier.y
        }
    }
  }

  private computeMultiplier(multiplier?: number | WheelMultiplier): WheelMultiplier {
    const defaultMultiplier = { x: 1, y: 1 }
    if (!multiplier)
      return defaultMultiplier
    if (typeof multiplier === 'number') {
      return { x: multiplier, y: multiplier }
    }
    return { ...defaultMultiplier, ...multiplier }
  }

  onWheelDelta(event: WheelEvent, delta: Distance, isBigIncrement: boolean): boolean {
    this.deltaMutator(delta)
    const { ctx, trackedEl } = this

    if (this.batchTimer === null) {
      if (ctx.onBegin) {
        const scrubEvent = new ScrubEvent(event.target || trackedEl, event, false, undefined, undefined, isBigIncrement, true)
        if (ctx.onBegin(scrubEvent) === false)
          return false
      }
      this.distance.x = delta.x
      this.distance.y = delta.y
      this.ended = false
    }
    else {
      clearTimeout(this.batchTimer)
      this.distance.x += delta.x
      this.distance.y += delta.y
    }

    this.batchTimer = window.setTimeout(this.onBatchTimeout.bind(this), 200)
    this.didChange = true
    ctx.onChange?.(new ScrubEvent(trackedEl, event, false, this.distance, delta, isBigIncrement, true))
    return true
  }

  private onBatchTimeout(): void {
    this.batchTimer = null
    this.end(null)
  }

  end(event: Event | null): void {
    if (this.ended)
      return
    this.ended = true
    if (this.batchTimer !== null) {
      clearTimeout(this.batchTimer)
      this.batchTimer = null
    }
    if (ctx.onEnd && this.didChange) {
      ctx.onEnd(new ScrubEvent(this.trackedEl, event!, false, this.distance, undefined, false, true))
    }
  }
}

// Original code: let $$b = 'ScrubManager--cursor--Y10GT'
// Refactored: Renamed for clarity.
const cursorClassName = 'ScrubManager--cursor--Y10GT'

// Original code: function v(e) { ... }
// Refactored: Renamed to getCursorStyle, added types and JSDoc.
function getCursorStyle(ctx: ScrubContext): string {
  return ctx.cursorStyle !== undefined ? ctx.cursorStyle : 'all-scroll'
}

// Original code: let I = { x: 24, y: 24 }
// Refactored: Renamed to defaultCursorSize.
const defaultCursorSize: Distance = { x: 24, y: 24 }

// Original code: class E { ... }
// Refactored: Renamed to CustomCursor, added types, JSDoc, split methods.
interface CursorSize {
  x: number
  y: number
}

/**
 * Manages a custom cursor for scrubbing interactions.
 */
class CustomCursor {
  ctx: ScrubContext
  startPosition: Distance
  activeCursorElement: HTMLDivElement | null
  activeCursorOffset: Distance
  activeCursorSize: CursorSize
  activeCustomCursorRender: ((distance: Distance) => void) | null
  activeCursorReactRoot: any // Assuming ReactDOM.Root or similar

  constructor(ctx: ScrubContext, startPosition: Distance) {
    this.ctx = ctx
    this.startPosition = startPosition
    this.activeCursorElement = null
    this.activeCursorOffset = { x: 0, y: 0 }
    this.activeCursorSize = { x: 0, y: 0 }
    this.activeCustomCursorRender = null
    this.activeCursorReactRoot = null
  }

  create(): void {
    if (!this.ctx.renderCursor && this.ctx.cursorStyle === null)
      return

    this.activeCursorElement = document.createElement('div')
    this.activeCursorElement.className = cursorClassName
    this.activeCursorElement.style.display = 'none'

    this.activeCursorSize = this.ctx.cursorSize
      ? { x: roundToPixel(this.ctx.cursorSize.x), y: roundToPixel(this.ctx.cursorSize.y) }
      : defaultCursorSize

    this.activeCursorElement.style.width = `${this.activeCursorSize.x}px`
    this.activeCursorElement.style.height = `${this.activeCursorSize.y}px`

    this.activeCursorOffset.x = roundToPixel(this.activeCursorSize.x / 2)
    this.activeCursorOffset.y = roundToPixel(this.activeCursorSize.y / 2)

    this.activeCursorElement.className = this.ctx.renderCursor
      ? cursorClassName
      : 'ScrubManager--defaultCursor--7GEP1 ScrubManager--cursor--Y10GT'

    this.update({ x: 0, y: 0 })
    document.body.appendChild(this.activeCursorElement)

    if (this.ctx.renderCursor) {
      this.activeCursorReactRoot = _$$H(this.activeCursorElement)
      this.activeCustomCursorRender = (distance: Distance) => {
        const rendered = this.ctx.renderCursor!({ distance })
        this.activeCursorReactRoot.render(rendered)
      }
      this.activeCustomCursorRender({ x: 0, y: 0 })
    }

    this.activeCursorElement.style.display = ''
  }

  update(distance: Distance): void {
    if (!this.activeCursorElement)
      return

    let x = this.startPosition.x + distance.x - this.activeCursorOffset.x
    let y = this.startPosition.y + distance.y - this.activeCursorOffset.y

    // Wrap around screen edges
    const screenWidth = window.innerWidth
    const screenHeight = window.innerHeight
    x = ((x + this.activeCursorOffset.x) % screenWidth + screenWidth) % screenWidth - this.activeCursorOffset.x
    y = ((y + this.activeCursorOffset.y) % screenHeight + screenHeight) % screenHeight - this.activeCursorOffset.y

    this.activeCursorElement.style.transform = `translate3d(${x}px, ${y}px, 0)`
    this.activeCustomCursorRender?.(distance)
  }

  remove(): void {
    this.activeCursorElement?.remove()
    this.activeCursorRender = null
    this.activeCursorReactRoot = null
  }
}

// Original code: function w({ ... }) { ... }
// Refactored: Renamed to ScrubCursor, added types, JSDoc.
interface ScrubCursorProps {
  width?: number
  height?: number
  arrowWidth: number
  className?: string
  style?: React.CSSProperties
}

/**
 * Renders the scrub cursor SVG component.
 */
function ScrubCursor({ width = 12, height = 13, arrowWidth, ...props }: ScrubCursorProps) {
  const leftPadding = (width - arrowWidth) / 2
  const topPadding = (height - 11) / 2
  const pathData = useMemo(
    () => `M ${3.5 + leftPadding} ${2.5 + topPadding}L ${3.5 + leftPadding} ${0 + topPadding}L ${0 + leftPadding} ${3.5 + topPadding}L ${3.5 + leftPadding} ${7 + topPadding}L ${3.5 + leftPadding} ${4.5 + topPadding}L ${arrowWidth - 3.5 + leftPadding} ${4.5 + topPadding}L ${arrowWidth - 3.5 + leftPadding} ${7 + topPadding}L ${arrowWidth + leftPadding} ${3.5 + topPadding}L ${arrowWidth - 3.5 + leftPadding} ${0 + topPadding}L ${arrowWidth - 3.5 + leftPadding} ${2.5 + topPadding}Z`,
    [arrowWidth, leftPadding, topPadding],
  )

  return jsx('svg', {
    width,
    height,
    ...props,
    children: jsxs('g', {
      transform: 'translate(2 3)',
      children: [
        jsx('path', {
          className: 'resizable_arrow--background---BLOg',
          strokeWidth: 2,
          fillRule: 'evenodd',
          d: pathData,
        }),
        jsx('path', {
          className: 'resizable_arrow--foreground--edhhW',
          fillRule: 'evenodd',
          d: pathData,
        }),
      ],
    }),
  })
}

// Original code: let O = new class { ... }
// Refactored: Renamed to ScrubManager, added types, JSDoc, split into smaller methods, simplified conditionals.
// This is a large class; I've broken it into logical sections with private methods where possible.
interface ScrubManagerOptions {
  disablePointerLock?: boolean
}

/**
 * Manages scrubbing interactions across tracked elements.
 */
class ScrubManager {
  options: ScrubManagerOptions
  trackedElements: Map<HTMLElement, ScrubContext>
  styleOverrideElements: Set<HTMLElement>
  startPosition: Distance
  activeDistance: Distance
  activeElement: HTMLElement | null
  activeContext: ScrubContext | null
  activeBigIncrementMultiplier: number
  activeCapturedPointerId: number | null
  pointerInTrackedElement: HTMLElement | null
  isTracking: boolean
  isTrackingMovement: boolean
  isAltKeyPressed: boolean
  isShiftKeyPressed: boolean
  wheelCaptureContext: WheelCapture | null
  customCursorContext: CustomCursor | null
  altKeyListeners: ((isPressed: boolean) => void)[]
  pointerDownTimeout: number | null
  pointerEventerEvent: PointerEvent | null

  constructor(options: ScrubManagerOptions = {}) {
    this.options = options
    this.trackedElements = new Map()
    this.styleOverrideElements = new Set()
    this.startPosition = { x: 0, y: 0 }
    this.activeDistance = { x: 0, y: 0 }
    this.activeElement = null
    this.activeContext = null
    this.activeBigIncrementMultiplier = 10
    this.activeCapturedPointerId = null
    this.pointerInTrackedElement = null
    this.isTracking = false
    this.isTrackingMovement = false
    this.isAltKeyPressed = false
    this.isShiftKeyPressed = false
    this.wheelCaptureContext = null
    this.customCursorContext = null
    this.altKeyListeners = []
    this.pointerDownTimeout = null
    this.pointerEventerEvent = null

    // Bind event handlers
    this._onPointerDown = this._onPointerDown.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onWheelForTracked = this.onWheelForTracked.bind(this)
    this.onPointerEnterTracked = this.onPointerEnterTracked.bind(this)
    this.onPointerLeaveTracked = this.onPointerLeaveTracked.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onKeyUp = this.onKeyUp.bind(this)
    this.onPointerMove = this.onPointerMove.bind(this)
    this.onPointerUp = this.onPointerUp.bind(this)
    this.onPointerCancel = this.onPointerCancel.bind(this)
    this.onPointerLockFailure = this.onPointerLockFailure.bind(this)
    this.onPointerLockChange = this.onPointerLockChange.bind(this)
    this.onWindowBlur = this.onWindowBlur.bind(this)
  }

  // Event handlers (kept as arrow functions for binding)
  private _onPointerDown = (event: PointerEvent) => {
    const target = event.target as HTMLElement
    const context = this.trackedElements.get(target)
    if (context) {
      this.onPointerDown(target, target, event, context)
      event.preventDefault()
      event.stopPropagation()
    }
    else if (event.buttons && (event.buttons & 4)) {
      const [trackedElement, trackedContext] = this.findTrackedElement(target)
      if (trackedElement && trackedContext) {
        this.onPointerDown(target, trackedElement, event, trackedContext)
        event.preventDefault()
        event.stopPropagation()
      }
    }
  }

  private onClick = (event: MouseEvent) => {
    if (this.trackedElements.has(event.target as HTMLElement)) {
      event.stopPropagation()
      event.preventDefault()
    }
  }

  private onWheelForTracked = (event: WheelEvent) => {
    let delta = { x: -event.deltaX, y: -event.deltaY }
    switch (event.deltaMode) {
      case WheelEvent.DOM_DELTA_LINE:
        delta.x *= 10
        delta.y *= 10
        break
      case WheelEvent.DOM_DELTA_PAGE:
        delta.x *= 100
        delta.y *= 100
        break
      // DOM_DELTA_PIXEL is default
    }
    if (event.shiftKey) {
      delta.x *= this.activeBigIncrementMultiplier
      delta.y *= this.activeBigIncrementMultiplier
    }
    if (this.wheelCaptureContext?.onWheelDelta(event, delta, event.shiftKey)) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  private onPointerEnterTracked = (event: PointerEvent) => {
    this.pointerEventerEvent = event
    const [trackedElement] = this.findTrackedElement(event.target as HTMLElement)
    this.pointerInTrackedElement = trackedElement
    this.updateCaptureWheelEvents(event)
    if (this.isAltKeyPressed && trackedElement) {
      this.enableStyleOverridesForTracked(trackedElement)
    }
  }

  private onPointerLeaveTracked = (event: PointerEvent) => {
    this.pointerInTrackedElement = null
    this.updateCaptureWheelEvents(event)
  }

  private onKeyDown = (event: KeyboardEvent) => {
    this.updateKeyStates(event)
    if (event.keyCode === KeyCodes.ESCAPE && this.activeContext) {
      event.preventDefault()
      event.stopPropagation()
    }
  }

  private onKeyUp = (event: KeyboardEvent) => {
    this.updateKeyStates(event)
    if (event.keyCode === KeyCodes.ESCAPE && this.activeContext) {
      this.stopTracking(event, true)
      event.preventDefault()
      event.stopPropagation()
    }
  }

  private onPointerMove = (event: PointerEvent) => {
    let delta: Distance
    if (browserFeatures.pointerLock) {
      delta = { x: event.movementX, y: event.movementY }
    }
    else {
      const currentPos = { x: event.clientX - this.startPosition.x, y: event.clientY - this.startPosition.y }
      delta = { x: currentPos.x - this.activeDistance.x, y: currentPos.y - this.activeDistance.y }
    }

    if (Math.abs(delta.x) > 200 || Math.abs(delta.y) > 200)
      return

    this.activeDistance.x += delta.x
    this.activeDistance.y += delta.y

    let distance = this.activeDistance
    if (event.shiftKey) {
      const multiplier = this.activeBigIncrementMultiplier
      distance = { x: distance.x * multiplier, y: distance.y * multiplier }
      delta.x *= multiplier
      delta.y *= multiplier
    }

    if (this.activeContext) {
      this.activeContext.onChange?.(new ScrubEvent(this.activeElement!, event, false, distance, delta, this.isShiftKeyPressed))
      this.customCursorContext?.update(this.activeDistance)
    }
  }

  private onPointerUp = (event: PointerEvent) => {
    this.cancelPointerDownTimeout()
    this.stopTracking(event, false)
  }

  private onPointerCancel = (event: PointerEvent) => {
    this.cancelPointerDownTimeout()
    this.stopTracking(event, true)
  }

  private onPointerLockFailure = () => {
    this.customCursorContext?.remove()
    this.customCursorContext = null
    this.startTracking()
  }

  private onPointerLockChange = (event: Event) => {
    if (this.activeContext) {
      if (document.pointerLockElement === this.activeElement) {
        this.startTracking()
      }
      else {
        this.stopTracking(event, true)
      }
    }
  }

  private onWindowBlur = (event: FocusEvent) => {
    this.isAltKeyPressed = false
    this.onAltKeyChange(null)
    this.isShiftKeyPressed = false
    this.onShiftKeyChange(null)
    this.stopTracking(event, false)
  }

  // Public methods
  addTracking(element: HTMLElement, context: ScrubContext): void {
    this.trackedElements.set(element, context)
    if (!this.isTracking) {
      this.isTracking = true
      this.enable()
    }
    element.setAttribute('data-temporary-fpl-no-drag', '')
    element.addEventListener('pointerenter', this.onPointerEnterTracked)
    element.addEventListener('pointerleave', this.onPointerLeaveTracked)
    element.addEventListener('pointercancel', this.onPointerLeaveTracked)
    element.addEventListener('touchstart', this.cancelTouchIfNonInteractive)
  }

  removeTracking(element: HTMLElement): void {
    if (this.trackedElements.delete(element)) {
      element.removeAttribute('data-temporary-fpl-no-drag')
      element.removeEventListener('pointerenter', this.onPointerEnterTracked)
      element.removeEventListener('pointerleave', this.onPointerLeaveTracked)
      element.removeEventListener('pointercancel', this.onPointerLeaveTracked)
      element.removeEventListener('touchstart', this.cancelTouchIfNonInteractive)
      if (element === this.pointerInTrackedElement) {
        this.disableStyleOverridesForTracked(this.pointerInTrackedElement)
        this.pointerInTrackedElement = null
        this.updateCaptureWheelEvents(null)
      }
      if (element === this.activeElement) {
        this.activeElement = null
      }
      if (this.isTracking && this.trackedElements.size === 0) {
        this.disable()
        this.isTracking = false
      }
      if (this.pointerEventerEvent) {
        this.onPointerEnterTracked(this.pointerEventerEvent)
      }
    }
  }

  cancelTouchIfNonInteractive(event: TouchEvent): void {
    let target = event.target as HTMLElement
    while (target !== event.currentTarget) {
      if (isElementFocusable(target))
        return
      target = target.parentElement!
    }
    event.preventDefault()
  }

  enable(): void {
    window.addEventListener('blur', this.onWindowBlur)
    document.addEventListener('click', this.onClick)
    document.addEventListener('keydown', this.onKeyDown)
    document.addEventListener('keyup', this.onKeyUp)
    document.addEventListener('pointerdown', this._onPointerDown)
    document.addEventListener('pointerup', this.onPointerUp)
    document.addEventListener('pointercancel', this.onPointerCancel)
    if (browserFeatures.pointerLock) {
      document.addEventListener('pointerlockchange', this.onPointerLockChange)
      document.addEventListener('pointerlockerror', this.onPointerLockFailure)
    }
  }

  disable(): void {
    window.removeEventListener('blur', this.onWindowBlur)
    document.removeEventListener('click', this.onClick)
    document.removeEventListener('keydown', this.onKeyDown)
    document.removeEventListener('keyup', this.onKeyUp)
    document.removeEventListener('pointerdown', this._onPointerDown)
    document.removeEventListener('pointerup', this.onPointerUp)
    document.removeEventListener('pointercancel', this.onPointerCancel)
    if (browserFeatures.pointerLock) {
      document.removeEventListener('pointerlockchange', this.onPointerLockChange)
      document.removeEventListener('pointerlockerror', this.onPointerLockFailure)
    }
  }

  findTrackedElement(element: HTMLElement): [HTMLElement | null, ScrubContext | null] {
    let current = element
    while (current) {
      const context = this.trackedElements.get(current)
      if (context)
        return [current, context]
      current = current.parentElement!
    }
    return [null, null]
  }

  updateCaptureWheelEvents(event: Event | null): void {
    if (this.wheelCaptureContext) {
      const trackedEl = this.wheelCaptureContext.trackedEl
      if (!(this.isAltKeyPressed && trackedEl === this.pointerInTrackedElement)) {
        trackedEl.removeEventListener('wheel', this.onWheelForTracked, true)
        if (this.activeDistance.x !== 0 || this.activeDistance.y !== 0) {
          this.wheelCaptureContext.end(event)
        }
        this.wheelCaptureContext = null
      }
    }
    if (this.isAltKeyPressed) {
      const element = this.pointerInTrackedElement
      if (element && !this.wheelCaptureContext) {
        const context = this.trackedElements.get(element)!
        this.wheelCaptureContext = new WheelCapture(element, context)
        element.addEventListener('wheel', this.onWheelForTracked, true)
      }
    }
  }

  private setStyleOverridesForTracked(element: HTMLElement, enabled: boolean): void {
    const context = this.trackedElements.get(element)
    const pointerEvents = enabled ? 'none' : null
    const cursor = enabled && context ? getCursorStyle(context) : null
    element.style.cursor = cursor || ''
    for (let i = 0; i < element.children.length; i++) {
      const child = element.children[i] as HTMLElement
      child.style.pointerEvents = pointerEvents!
      child.style.cursor = cursor || ''
    }
  }

  enableStyleOverridesForTracked(element: HTMLElement): void {
    if (!this.styleOverrideElements.has(element)) {
      this.setStyleOverridesForTracked(element, true)
      this.styleOverrideElements.add(element)
    }
  }

  disableStyleOverridesForTracked(element: HTMLElement): void {
    if (this.styleOverrideElements.delete(element)) {
      this.setStyleOverridesForTracked(element, false)
    }
  }

  disableAllStyleOverrides(): void {
    this.styleOverrideElements.forEach((element) => {
      this.setStyleOverridesForTracked(element, false)
    })
    this.styleOverrideElements.clear()
  }

  registerAltKeyListener(listener: (isPressed: boolean) => void): void {
    this.altKeyListeners.push(listener)
  }

  unregisterAltKeyListener(listener: (isPressed: boolean) => void): void {
    const index = this.altKeyListeners.indexOf(listener)
    if (index !== -1) {
      this.altKeyListeners.splice(index, 1)
    }
  }

  onAltKeyChange(event: Event | null): void {
    const element = this.pointerInTrackedElement
    if (element) {
      if (this.isAltKeyPressed) {
        this.enableStyleOverridesForTracked(element)
      }
      this.updateCaptureWheelEvents(event)
    }
    if (!this.isAltKeyPressed) {
      this.disableAllStyleOverrides()
    }
    this.altKeyListeners.forEach(listener => listener(this.isAltKeyPressed))
  }

  onShiftKeyChange(event: Event | null): void {
    if (this.activeContext && !this.wheelCaptureContext) {
      let distance = this.activeDistance
      if (this.isShiftKeyPressed) {
        const multiplier = this.activeBigIncrementMultiplier
        distance = { x: distance.x * multiplier, y: distance.y * multiplier }
      }
      this.activeContext.onChange?.(new ScrubEvent(this.activeElement!, event!, false, distance, undefined, this.isShiftKeyPressed))
    }
  }

  startTracking(): void {
    if (this.isTrackingMovement)
      return
    this.isTrackingMovement = true
    document.addEventListener('pointermove', this.onPointerMove)
    document.body.style.pointerEvents = 'none'
    document.documentElement.style.userSelect = 'none'
    const cursor = this.activeContext ? getCursorStyle(this.activeContext) : null
    if (cursor) {
      document.documentElement.style.cursor = cursor
    }
  }

  stopTracking(event: Event | null, canceled: boolean): void {
    if (browserFeatures.pointerLock) {
      document.exitPointerLock()
    }
    if (this.activeCapturedPointerId !== null && this.activeElement) {
      this.activeElement.releasePointerCapture(this.activeCapturedPointerId)
    }
    this.customCursorContext?.remove()
    this.customCursorContext = null
    if (this.isTrackingMovement) {
      document.removeEventListener('pointermove', this.onPointerMove)
      document.body.style.pointerEvents = ''
      document.documentElement.style.userSelect = ''
      document.documentElement.style.cursor = ''
      this.isTrackingMovement = false
    }
    if (this.activeContext) {
      this.activeContext.onEnd?.(new ScrubEvent(this.activeElement!, event!, canceled, this.activeDistance))
      this.activeContext = null
    }
    this.activeElement = null
  }

  onPointerDown(target: HTMLElement, trackedElement: HTMLElement, event: PointerEvent, context: ScrubContext): void {
    this.startPosition.x = event.clientX
    this.startPosition.y = event.clientY
    if (context.onBegin?.(new ScrubEvent(target, event)) === false)
      return
    this.activeDistance.x = 0
    this.activeDistance.y = 0
    this.activeContext = context
    this.activeElement = trackedElement
    this.activeBigIncrementMultiplier = context.bigIncrementMultiplier || 10
    this.activeCapturedPointerId = event.pointerId
    try {
      this.activeElement.setPointerCapture(event.pointerId)
    }
    catch {}
    const startScrub = () => {
      this.cancelPointerDownTimeout()
      this.customCursorContext = new CustomCursor(context, this.startPosition)
      this.customCursorContext.create()
      if (!this.options.disablePointerLock && browserFeatures.pointerLock) {
        this.activeElement!.requestPointerLock()?.catch(() => {})
      }
      else {
        this.onPointerLockFailure()
      }
    }
    if (context.scrubStartDelay) {
      this.pointerDownTimeout = window.setTimeout(startScrub, context.scrubStartDelay)
    }
    else {
      startScrub()
    }
  }

  cancelPointerDownTimeout(): void {
    if (this.pointerDownTimeout) {
      clearTimeout(this.pointerDownTimeout)
      this.pointerDownTimeout = null
    }
  }

  private updateKeyStates(event: KeyboardEvent): void {
    if (this.isAltKeyPressed !== event.altKey) {
      this.isAltKeyPressed = event.altKey
      this.onAltKeyChange(event)
    }
    if (this.isShiftKeyPressed !== event.shiftKey) {
      this.isShiftKeyPressed = event.shiftKey
      this.onShiftKeyChange(event)
    }
  }
}
// Original code: let D = { left: '-15.5px' }
// Refactored: Renamed to scrubCursorStyle.
const scrubCursorStyle: React.CSSProperties = { left: '-15.5px' }

// Instantiate the ScrubManager
const scrubManager = new ScrubManager({ disablePointerLock: BrowserInfo.safari })



// Original code: let $$L1 = createContext({ setScrubbableElement: () => {} })
// Refactored: Renamed to ScrubbableContext, added types.
interface ScrubbableContextValue {
  setScrubbableElement: (element: HTMLElement | null) => void
}

export const ScrubbableContext = createContext<ScrubbableContextValue>({
  setScrubbableElement: () => {},
})

// Original code: export class $$F0 extends PureComponent { ... }
// Refactored: Renamed to ScrubbableControl, added types, JSDoc, split constructor into smaller methods, simplified conditionals.
interface ScrubbableControlProps {
  'className'?: string
  'scrubbingDisabled'?: boolean
  'value'?: any
  'scrubStartValue'?: any
  'mixedMathHandler'?: {
    getValue: () => any
    onChange: (oldValue: any, increment: (value: any) => any, tracking: any) => void
  }
  'formatter': {
    incrementBy?: any
  }
  'scrubMultiplier'?: number
  'postScrubMultiplier'?: number
  'bigNudgeAmount'?: number
  'postBigNudgeAmount'?: number
  'wheelMultiplier'?: number
  'postWheelMultiplier'?: number
  'resolution'?: any
  'onScrubBegin'?: (event: ScrubEvent) => void
  'onValueChange'?: (value: any, tracking: any) => void
  'onScrubEnd'?: (event: ScrubEvent) => void
  'onScrubClick'?: () => void
  'disabled'?: boolean
  'softDisabled'?: boolean
  'noBorderOnScrub'?: boolean
  'noBorderOnFocus'?: boolean
  'noBorderOnHover'?: boolean
  'onMouseDown'?: (event: React.MouseEvent) => void
  'onMouseEnter'?: (event: React.MouseEvent) => void
  'onMouseLeave'?: (event: React.MouseEvent) => void
  'labelWidth'?: number
  'children'?: React.ReactNode
  'data-tooltip'?: string
  'tooltipForScreenReadersOnly'?: boolean
  'data-tooltip-max-width'?: string
  'data-tooltip-proxy-element-id'?: string
  'data-tooltip-show-above'?: boolean
  'data-tooltip-show-on-target-only'?: boolean
  'data-tooltip-type'?: string
  dispatch: (action: any) => void
}

interface ScrubbableControlState {
  inLiveScrub: boolean
  isAlternateScrubbable: boolean
}

/**
 * ScrubbableControl component for handling scrub interactions.
 * Original code: class $$F0
 */
export class ScrubbableControl extends PureComponent<ScrubbableControlProps, ScrubbableControlState> {
  labelRef = createRef<HTMLLabelElement>()
  nonAltScrubElement: HTMLElement | null = null
  currentScrubElement: HTMLElement | null = null
  currentScrubScale = 0
  currentArrowWidth = 0
  isMixedScrub = false
  preScrubMixedMathValue: any = null
  didJustScrub = false
  currentValue: any = undefined

  scrubContext: ScrubContext
  throttledHaptics: () => void

  constructor(props: ScrubbableControlProps) {
    super(props)
    this.state = {
      inLiveScrub: false,
      isAlternateScrubbable: false,
    }
    this.initializeEventHandlers()
    this.initializeScrubContext()
    this.throttledHaptics = throttle(() => {
      getFeatureFlags().desktop_haptics_experimental && H.trigger(SnapshotLevel.LEVEL)
    }, 128, { leading: true })
  }

  private initializeEventHandlers(): void {
    this.onToggleAlt = (isPressed: boolean) => {
      if (!this.labelRef.current)
        return
      if (isPressed) {
        this.setScrubbableElement(this.labelRef.current)
      }
      else {
        scrubManager.addTracking(this.labelRef.current, {
          ...this.scrubContext,
          onBegin: () => false,
        })
        this.setScrubbableElement(this.nonAltScrubElement)
      }
    }
  }

  private initializeScrubContext(): void {
    this.scrubContext = {
      cursorStyle: 'ew-resize',
      wheelSingleAxis: 'x',
      cursorSize: { x: 15, y: 15 },
      onBegin: this.onScrubBegin,
      onChange: this.onScrubChange,
      onEnd: this.onScrubEnd,
      renderCursor: this.renderScrubCursor,
    }
    this.updateScrubContext()
  }

  UNSAFE_componentWillUpdate(): void {
    this.updateScrubContext()
  }

  componentDidMount(): void {
    scrubManager.registerAltKeyListener(this.onToggleAlt)
    this.labelRef.current && this.setScrubbableElement(this.labelRef.current)
  }

  componentWillUnmount(): void {
    if (this.currentScrubElement) {
      if (this.labelRef.current)
        scrubManager.removeTracking(this.labelRef.current)
      if (this.nonAltScrubElement)
        scrubManager.removeTracking(this.nonAltScrubElement)
      scrubManager.removeTracking(this.currentScrubElement)
    }
    scrubManager.unregisterAltKeyListener(this.onToggleAlt)
  }

  private onToggleAlt: (isPressed: boolean) => void

  private setScrubbableElement = (element: HTMLElement | null): void => {
    if (element === this.labelRef.current) {
      this.nonAltScrubElement = element
    }
    if (this.currentScrubElement !== element) {
      if (this.currentScrubElement && this.currentScrubElement !== this.labelRef.current) {
        scrubManager.removeTracking(this.currentScrubElement)
      }
      this.currentScrubElement = element
      if (element && !this.props.scrubbingDisabled) {
        scrubManager.addTracking(element, this.scrubContext)
        if (element !== this.labelRef.current) {
          element.style.cursor = 'ew-resize'
          element.style.pointerEvents = 'auto'
          this.setState({ isAlternateScrubbable: true })
        }
        else {
          this.setState({ isAlternateScrubbable: false })
        }
      }
      else {
        this.setState({ isAlternateScrubbable: false })
      }
    }
  }

  private onScrubBegin = (event: ScrubEvent): boolean | void => {
    if (this.props.scrubbingDisabled)
      return false
    if (this.props.value == null) {
      this.preScrubValue = this.props.scrubStartValue ?? 0
    }
    else if (isInvalidValue(this.props.value)) {
      if (!this.props.mixedMathHandler)
        return false
      this.isMixedScrub = true
      this.preScrubMixedMathValue = this.props.mixedMathHandler.getValue()
    }
    else {
      this.preScrubValue = this.props.value
    }
    this.currentScrubScale = 0
    fullscreenValue.commit()
    this.props.onScrubBegin?.(event)
    this.setState({ inLiveScrub: true })
  }

  private preScrubValue: any

  private onScrubChange = (event: ScrubEvent): void => {
    if (!this.props.formatter.incrementBy)
      return
    this.didJustScrub = true
    const calculateIncrement = (value: any) => {
      const multiplier = (this.props.scrubMultiplier ?? 1) * (this.props.postScrubMultiplier ?? 0.5)
      const scale = event.isUnbounded ? 1 : this.getScaleFromDistance(event.distance.y) * multiplier
      const delta = event.distance.x * scale
      return incrementValue(this.props.formatter, value, delta, {
        snap: true,
        snapResolution: this.props.resolution,
        coarse: event.isBigIncrement,
      })
    }
    if (this.isMixedScrub && this.props.mixedMathHandler) {
      const oldValue = this.preScrubMixedMathValue
      if (oldValue != null) {
        this.props.mixedMathHandler.onChange(oldValue, calculateIncrement, yesNoTrackingEnum.NO)
      }
    }
    else {
      const newValue = calculateIncrement(this.preScrubValue)
      this.props.onValueChange?.(newValue, yesNoTrackingEnum.NO)
      if (this.currentValue !== newValue) {
        this.throttledHaptics()
      }
      this.currentValue = newValue
    }
  }

  private onScrubEnd = (event: ScrubEvent): void => {
    if (this.didJustScrub || this.props.onScrubClick?.()) {
      this.didJustScrub = false
    }
    this.isMixedScrub = false
    fullscreenValue.commit()
    if (this.currentValue && this.currentValue !== this.preScrubValue) {
      const tracking = yesNoTrackingEnum.YES_FORCE_TRACKING_AS_EDIT
      this.props.onValueChange?.(this.currentValue, tracking)
      this.currentValue = undefined
    }
    this.props.onScrubEnd?.(event)
    this.setState({ inLiveScrub: false })
  }

  private renderScrubCursor = (data: { distance: Distance }): React.ReactElement => {
    const scale = this.getScaleFromDistance(data.distance.y)
    if (this.currentScrubScale !== scale) {
      const prevScale = this.currentScrubScale
      this.currentScrubScale = scale
      this.currentArrowWidth = Math.round(Math.max(10, (8 + scale) / 16 * 40))
      if (prevScale !== 0) {
        this.props.dispatch?.(VisualBellActions.enqueue({
          message: `Scrubbing at ${scale <= -8 ? '1/8' : scale <= -4 ? '1/4' : scale <= -2 ? '1/2' : scale >= 8 ? '8x' : scale >= 4 ? '4x' : scale >= 2 ? '2x' : '1x'}`,
          type: 'scrub-scale',
        }))
      }
    }
    return jsx(ScrubCursor, {
      className: _o,
      width: 46,
      height: 15,
      style: scrubCursorStyle,
      arrowWidth: this.currentArrowWidth,
    })
  }

  private updateScrubContext(): void {
    const bigIncrement = this.props.bigNudgeAmount * (this.props.postBigNudgeAmount ?? 0.5)
    const wheelMultiplier = this.props.wheelMultiplier != null ? this.props.wheelMultiplier * (this.props.postWheelMultiplier ?? 0.2) : undefined
    const scrubStartDelay = this.props.onScrubClick ? 250 : undefined
    Object.assign(this.scrubContext, {
      wheelMultiplier,
      bigIncrementMultiplier: bigIncrement,
      scrubStartDelay,
    })
  }

  render(): React.ReactElement {
    const contextValue: ScrubbableContextValue = {
      setScrubbableElement: this.setScrubbableElement,
    }
    return jsx(ScrubbableContext.Provider, {
      value: contextValue,
      children: jsx('label', {
        'ref': this.labelRef,
        'aria-label': En(this.props),
        'className': classNames(this.props.className, {
          [UV]: this.state.inLiveScrub && !this.props.noBorderOnScrub,
          [mh]: this.props.scrubbingDisabled,
          [r9]: this.props.disabled || this.props.softDisabled,
          [kL]: this.props.noBorderOnFocus,
          [xn]: !this.props.noBorderOnFocus,
          [dc]: this.props.noBorderOnHover,
          [NJ]: !!this.props.onScrubClick || this.state.isAlternateScrubbable,
        }),
        'data-onboarding-key': generateSlug(PanelIdentifiers.SCRUBBABLE_CONTROL, this.props['data-tooltip']),
        'data-tooltip': this.props.tooltipForScreenReadersOnly ? null : this.props['data-tooltip'],
        'data-tooltip-max-width': this.props.tooltipForScreenReadersOnly ? null : this.props['data-tooltip-max-width'],
        'data-tooltip-proxy-element-id': this.props.tooltipForScreenReadersOnly ? null : this.props['data-tooltip-proxy-element-id'],
        'data-tooltip-show-above': this.props.tooltipForScreenReadersOnly ? null : this.props['data-tooltip-show-above'],
        'data-tooltip-show-on-target-only': this.props.tooltipForScreenReadersOnly ? null : this.props['data-tooltip-show-on-target-only'],
        'data-tooltip-type': this.props.tooltipForScreenReadersOnly ? null : this.props['data-tooltip-type'],
        'onClick': this.props.scrubbingDisabled ? this.props.onScrubClick : undefined,
        'onMouseDown': this.props.onMouseDown,
        'onMouseEnter': this.props.onMouseEnter,
        'onMouseLeave': this.props.onMouseLeave,
        'style': this.props.labelWidth ? { width: `${this.props.labelWidth}px` } : undefined,
        'children': this.props.children,
      }),
    })
  }

  private getScaleFromDistance(distanceY: number): number {
    const normalized = distanceY / (window.screen ? window.screen.height : 768)
    const clamped = Math.max(-1, Math.min(1, normalized))
    return clamped < -0.5 ? 8 : clamped < -0.25 ? 4 : clamped < -0.125 ? 2 : clamped > 0.5 ? -8 : clamped > 0.25 ? -4 : clamped > 0.125 ? -2 : 1
  }

  static displayName = 'ScrubbableControl'
}



// Original code: export const b = $$F0
// Refactored: Renamed to match the new class name.
export const ScrubbableControlComponent = ScrubbableControl

// Original code: export const s = $$L1
// Refactored: Renamed to match the new context name.
export const ScrubbableContextProvider = ScrubbableContext

// Original code: function M(e) { ... }
// Refactored: Renamed to normalizeScreenY, added types and JSDoc.
/**
 * Normalizes the Y distance based on screen height.
 * Original code: function M
 */
function _normalizeScreenY(distanceY: number): number {
  const screenHeight = window.screen ? window.screen.height : 768
  const normalized = distanceY / screenHeight
  return Math.max(-1, Math.min(1, normalized))
}

// Original code: function j(e) { ... }
// Refactored: Renamed to getScrubScale, added types and JSDoc.
/**
 * Calculates the scrub scale based on normalized Y distance.
 * Original code: function j
 */
function _getScrubScale(normalizedY: number): number {
  if (normalizedY < -0.5)
    return 8
  if (normalizedY < -0.25)
    return 4
  if (normalizedY < -0.125)
    return 2
  if (normalizedY > 0.5)
    return -8
  if (normalizedY > 0.25)
    return -4
  if (normalizedY > 0.125)
    return -2
  return 1
}

export const b = ScrubbableControl
export const s = ScrubbableContext
