import { yA as isAndroid, Md as isMac, Uo as isWebDriver } from '../905/881471'

const EVENT_CAPTURE_CLASS = 'js-fullscreen-prevent-event-capture'
const EVENT_CAPTURE_KEYS_CLASS = 'js-fullscreen-prevent-event-capture-keys'
const WHEEL_EVENT_CAPTURE_CLASS = 'js-fullscreen-wheel-event-capture'

/**
 * Prevents default and stops propagation of an event
 * @param event - The event to handle
 */
export function preventAndStopEvent(event: Event): void {
  event.preventDefault()
  event.stopPropagation()
}

/**
 * Executes a handler function and returns whether the event's default was prevented
 * @param event - The event to handle
 * @param handler - Optional handler function
 * @returns Whether the event's default was prevented
 */
export function executeEventHandler(event: Event, handler?: ((e: Event) => void) | null): boolean {
  handler?.(event)
  return event.defaultPrevented
}

/**
 * Prevents default behavior of an event
 * @param event - The event to handle
 */
export function preventEvent(event: Event): void {
  event.preventDefault()
}

/**
 * Stops propagation of an event
 * @param event - The event to handle
 */
export function stopEventPropagation(event: Event): void {
  event.stopPropagation()
}

/**
 * Checks if event coordinates are at origin (0,0)
 * @param event - The mouse/touch event to check
 * @returns Whether coordinates are at origin
 */
export function isEventAtOrigin(event: React.MouseEvent | React.TouchEvent): boolean {
  // For MouseEvent, we can access clientX and clientY directly
  if ('clientX' in event) {
    return event.clientX === 0 && event.clientY === 0
  }

  // For TouchEvent, we need to check the first touch
  if ('touches' in event && event.touches.length > 0) {
    const touch = event.touches[0]
    return touch.clientX === 0 && touch.clientY === 0
  }

  return false
}

/**
 * Checks if event target is the current target
 * @param event - The event to check
 * @returns Whether target equals currentTarget
 */
export function isEventTargetCurrent(event: Event): boolean {
  return event.target === event.currentTarget
}

/**
 * Checks if current target does not contain the event target
 * @param event - The event to check
 * @returns Whether current target contains event target
 */
export function isEventTargetOutside(event: Event): boolean {
  if (!event.currentTarget || !event.target) {
    return false
  }

  // Type check to ensure currentTarget is an Element or Document
  if (event.currentTarget instanceof Element || event.currentTarget instanceof Document) {
    return !event.currentTarget.contains(event.target as Node)
  }

  return false
}

/**
 * Adds an event listener and returns a cleanup function
 * @param element - The element to attach listener to
 * @param eventType - The event type
 * @param handler - The event handler
 * @param options - Event listener options
 * @returns Cleanup function to remove the listener
 */
export function addEventlistenerWithCleanup(element: EventTarget | null, eventType: string, handler: EventListener, options?: boolean | AddEventListenerOptions): (() => void) | undefined {
  if (element) {
    element.addEventListener(eventType, handler, options)
    return () => element.removeEventListener(eventType, handler, options)
  }
  return undefined
}

/**
 * Creates a function that executes multiple cleanup functions
 * @param cleanups - Array of cleanup functions
 * @returns A function that executes all cleanup functions
 */
export function createCleanupExecutor(...cleanups: Array<(() => void) | null | undefined>): () => void {
  return () => {
    for (const cleanup of cleanups) {
      cleanup?.()
    }
  }
}

/**
 * Checks if an event is a fake touch event
 * @param event - The event to check
 * @returns Whether the event is a fake touch event
 */
export function isFakeTouchEvent(event: Event): boolean {
  const nativeEvent = getNativeEvent(event)
  if ((isMac || isWebDriver) && nativeEvent.target instanceof Element) {
    // Type check for MouseEvent properties
    if ('clientX' in nativeEvent && 'clientY' in nativeEvent) {
      const clientX = (nativeEvent as MouseEvent).clientX
      const clientY = (nativeEvent as MouseEvent).clientY
      if (!(Number.isInteger(clientX) && Number.isInteger(clientY))) {
        return false
      }
      const rect = nativeEvent.target.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      return clientX >= Math.floor(centerX) && clientX <= Math.ceil(centerX) && clientY >= Math.floor(centerY) && clientY <= Math.ceil(centerY)
    }
  }

  // For non-TouchEvents, check the properties directly on the event
  return !isAndroid
    &&  (nativeEvent as any).width === 0
    &&  (nativeEvent as any).height === 0
    || ((nativeEvent as any).width === 1
      && (nativeEvent as any).height === 1
       && (nativeEvent as any).pressure === 0
       && (nativeEvent as any).detail === 0
       && (nativeEvent as any).pointerType === 'mouse')
}
const processedEvents = new WeakSet<Event>()

/**
 * Marks an event as processed
 * @param event - The event to mark
 */
export function markEventAsProcessed(event: Event): void {
  processedEvents.add(getNativeEvent(event))
}

/**
 * Checks if an event has been processed
 * @param event - The event to check
 * @returns Whether the event has been processed
 */
export function isEventProcessed(event: Event): boolean {
  return processedEvents.has(getNativeEvent(event))
}

/**
 * Gets the native event from a potential wrapped event
 * @param event - The event to unwrap
 * @returns The native event
 */
function getNativeEvent(event: Event): Event {
  return 'nativeEvent' in event
    ? (event as {
      nativeEvent: Event
    }).nativeEvent
    : event
}
export const Dm = EVENT_CAPTURE_CLASS
export const EM = isEventProcessed
export const Ju = preventAndStopEvent
export const NC = isEventTargetCurrent
export const SK = isEventAtOrigin
export const ch = addEventlistenerWithCleanup
export const dG = stopEventPropagation
export const kB = markEventAsProcessed
export const n4 = isFakeTouchEvent
export const qJ = isEventTargetOutside
export const s7 = EVENT_CAPTURE_KEYS_CLASS
export const sY = executeEventHandler
export const wo = preventEvent
export const yM = WHEEL_EVENT_CAPTURE_CLASS
export const z_ = createCleanupExecutor
