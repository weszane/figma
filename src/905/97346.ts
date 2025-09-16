import classNames from 'classnames'
import { useRef, useState } from 'react'
import {
  addPoints,
  distanceFromOrigin,
  lineBoundsIntersection,
  normalizePoint,
  originPoint,
  pointFromMouseEvent,
  subtractPoints,
} from '../905/268491'
import { mergeProps } from '../905/475481'
import { l as noop } from '../905/490996'
import { hasSelection, isTextInputWithSelection } from '../905/914656'
import {
  EVENT_CAPTURE_CLASS,
  isEventTargetCurrent,
  preventEvent,
  stopEventPropagation,
} from '../905/955878'

/**
 * Pointer dead zone distances by pointer type.
 * @original c
 */
const POINTER_DEAD_ZONE: Record<string, number> = {
  mouse: 8,
  pen: 16,
  touch: 16,
}

/**
 * Returns the dead zone distance for a given pointer type.
 * @param pointerType
 * @returns number
 * @original u
 */
function getDeadZoneDistance(pointerType: string): number {
  return POINTER_DEAD_ZONE[pointerType] ?? POINTER_DEAD_ZONE.mouse
}

const DRAGGING_BODY_CLASS = 'use-drag__draggingBody__Nz68k'

/**
 * Hook for drag handling logic.
 * @param props
 * @returns [isDragging, getDragProps]
 * @original $$h0
 */
export function setupDragHandler(props: {
  disabled?: boolean
  deadZone?: boolean
  customButtonCheck?: boolean
  onBeforeDrag?: (event: PointerEvent) => boolean | Element | void
  onDragStart?: (event: PointerEvent, helpers: { registerAbortSignal: (signal: AbortSignal) => void }) => void
  onDrag?: (event: PointerEvent & { delta: { x: number, y: number } }, helpers: { updateStart: (fn: (pt: { x: number, y: number }) => void) => void }) => void
  onDragEnd?: (event: Partial<PointerEvent> & { delta?: { x: number, y: number }, cancelled?: boolean }) => void
}) {
  // Drag start point
  const startPointRef = useRef(originPoint)
  // Current pointer id
  const pointerIdRef = useRef<number | null>(null)
  // Element with pointer capture
  const pointerCaptureRef = useRef<Element | null>(null)
  // Element for dead zone logic
  const deadZoneElementRef = useRef<Element | null>(null)
  // Drag start timestamp
  const dragStartTimeRef = useRef(0)
  // Drag end handler reference
  const dragEndHandlerRef = useRef<(event?: PointerEvent | null, cancelled?: boolean) => void>(noop)
  // Dragging state
  const [isDragging, setDragging] = useState(false)

  if (props.disabled) {
    return [false, (...args: any[]) => mergeProps(...args)] as const
  }

  /**
   * Updates the drag start point.
   * @param updater
   * @original A
   */
  const updateStartPoint = (updater: (pt: { x: number, y: number }) => any) => {
    startPointRef.current = updater(startPointRef.current)
  }

  /**
   * Registers an abort signal for drag cancellation.
   * @param signal
   * @original y
   */
  const registerAbortSignal = (signal: AbortSignal) => {
    signal.addEventListener('abort', () => dragEndHandlerRef.current(null, true))
  }

  /**
   * Calculates the drag delta from the start point.
   * @param event
   * @returns delta point
   * @original b
   */
  const getDragDelta = (event: PointerEvent) =>
    subtractPoints(pointFromMouseEvent(event), startPointRef.current)

  /**
   * Initiates drag logic.
   * @param event
   * @param target
   * @original v
   */
  const startDrag = (event: PointerEvent, target: Element) => {
    setDragging(true)
    pointerCaptureRef.current = target
    target.setPointerCapture(event.pointerId)
    target.setAttribute('data-pointer-capture', '')
    document.body.classList.add(DRAGGING_BODY_CLASS)
    if (event.pointerType !== 'mouse') {
      document.addEventListener('touchmove', preventEvent, { passive: false })
    }
    props.onDragStart?.(event, { registerAbortSignal })
    const delta = getDragDelta(event)
    props.onDrag?.(Object.assign(event, { delta }), { updateStart: updateStartPoint })
  }

  /**
   * Ends drag logic.
   * @param event
   * @param cancelled
   * @original I
   */
  const endDrag = (event?: PointerEvent | null, cancelled?: boolean) => {
    if (!event || event.pointerId === pointerIdRef.current) {
      if (cancelled && deadZoneElementRef.current) {
        deadZoneElementRef.current = null
        pointerIdRef.current = null
        return
      }
      pointerCaptureRef.current?.removeAttribute('data-pointer-capture')
      pointerCaptureRef.current = null
      document.removeEventListener('touchmove', preventEvent)
      document.body.classList.remove(DRAGGING_BODY_CLASS)
      if (!cancelled)
        window.getSelection()?.empty()
      setDragging(false)
      pointerIdRef.current = null
      if (cancelled && !event) {
        props.onDragEnd?.({ cancelled })
      }
      else {
        const delta = event ? getDragDelta(event) : undefined
        props.onDragEnd?.(Object.assign(event ?? {}, { delta, cancelled }))
      }
    }
  }

  /**
   * Handles dead zone logic and drag initiation.
   * @param event
   * @returns boolean
   * @original E
   */
  const handleDeadZone = (event: PointerEvent): boolean => {
    if (!props.deadZone || !deadZoneElementRef.current)
      return false
    const isPointerMove = event.type === 'pointermove'
    const delta = getDragDelta(event)
    const isInDeadZone = distanceFromOrigin(delta) < getDeadZoneDistance(event.pointerType)
    if (isPointerMove && isInDeadZone)
      return true
    if (
      event.buttons === 0
      || (event.pointerType !== 'mouse' && performance.now() - dragStartTimeRef.current > 900)
      || hasSelection(event.currentTarget as HTMLElement)
      || isTextInputWithSelection(event.target as HTMLElement)
    ) {
      endDrag(event, true)
      return true
    }
    if (isInDeadZone) {
      const intersection = lineBoundsIntersection(
        startPointRef.current,
        pointFromMouseEvent(event),
        (event.currentTarget as Element).getBoundingClientRect(),
      )
      if (!intersection)
        return true
      startPointRef.current = intersection
    }
    else {
      const normalized = normalizePoint(delta, getDeadZoneDistance(event.pointerType))
      startPointRef.current = addPoints(startPointRef.current, normalized)
    }
    startDrag(event, deadZoneElementRef.current)
    deadZoneElementRef.current = null
    return true
  }

  dragEndHandlerRef.current = endDrag

  /**
   * Drag event handlers and props.
   * @original x
   */
  const dragProps = {
    /**
     * Pointer down event handler.
     * @original onPointerDown
     */
    onPointerDown(event: PointerEvent) {
      if (
        pointerIdRef.current != null
        || (!props.customButtonCheck && event.button !== 0)
        || (event.target as Element).hasAttribute('data-temporary-fpl-no-drag')
      ) {
        return
      }
      const beforeDragResult = props.onBeforeDrag?.(event)
      if (beforeDragResult === false)
        return
      event.stopPropagation()
      startPointRef.current = pointFromMouseEvent(event)
      pointerIdRef.current = event.pointerId
      dragStartTimeRef.current = performance.now()
      const dragTarget
        = beforeDragResult instanceof Element ? beforeDragResult : (event.currentTarget as Element)
      if (
        props.deadZone
        && !isEventTargetCurrent(event)
        && !(event.target as Element).hasAttribute('data-no-dead-zone')
      ) {
        deadZoneElementRef.current = dragTarget
        return
      }
      window.getSelection()?.empty()
      startDrag(event, dragTarget)
    },
    /**
     * Pointer move event handler.
     * @original onPointerMove
     */
    onPointerMove(event: PointerEvent) {
      if (event.pointerId !== pointerIdRef.current || handleDeadZone(event))
        return
      const delta = getDragDelta(event)
      props.onDrag?.(Object.assign(event, { delta }), { updateStart: updateStartPoint })
    },
    /**
     * Pointer leave event handler.
     * @original onPointerLeave
     */
    onPointerLeave(event: PointerEvent) {
      if (event.pointerId === pointerIdRef.current)
        handleDeadZone(event)
    },
    /**
     * Pointer up event handler.
     * @original onPointerUp
     */
    onPointerUp(event: PointerEvent) {
      endDrag(event, !!(props.deadZone && deadZoneElementRef.current))
    },
    /**
     * Lost pointer capture event handler.
     * @original onLostPointerCapture
     */
    onLostPointerCapture(event: PointerEvent) {
      if (
        event.pointerType !== 'touch'
        && document.pointerLockElement !== event.target
      ) {
        endDrag(event, !!(props.deadZone && deadZoneElementRef.current))
      }
    },
    /**
     * Pointer cancel event handler.
     * @original onPointerCancel
     */
    onPointerCancel(event: PointerEvent) {
      endDrag(event, true)
    },
    /**
     * Mouse down event handler (stops propagation).
     * @original onMouseDown
     */
    onMouseDown: stopEventPropagation,
    /**
     * Drag class names.
     * @original className
     */
    className: classNames(
      'use-drag__base__YCEp1',
      EVENT_CAPTURE_CLASS,
      { 'use-drag__dragging__ZATZH': isDragging },
    ),
  }

  return [
    isDragging,
    (...args: any[]) => mergeProps(dragProps, ...args),
  ] as const
}

// Export aliases for backward compatibility
export const YJ = setupDragHandler // $$h0
export const M = setupDragHandler // M
export const i = setupDragHandler // i
