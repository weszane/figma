import { debugState } from "../905/407919"
import { activateNewComment, setNewAnchorPosition } from "../figma_app/770088"

export interface MouseEventHandler {
  (position: { x: number, y: number }): void
}

export interface CommentCreator {
  (stablePath: string, x: number, y: number): void
}

export interface MouseEventManager {
  handleMouseDown: (x: number, y: number) => void
  handleMouseMove: (x: number, y: number) => void
  handleMouseUp: (x: number, y: number) => void
  createNewCommentAtPosition: CommentCreator
}

// Event listener registry for mouse events
const mouseEventListeners: {
  mousedown: Set<MouseEventHandler>
  mousemove: Set<MouseEventHandler>
  mouseup: Set<MouseEventHandler>
} = {
  mousedown: new Set(),
  mousemove: new Set(),
  mouseup: new Set(),
}

/**
 * Subscribe to a mouse event
 * @param eventType - The type of mouse event to subscribe to
 * @param handler - The handler function to be called when the event occurs
 */
export function subscribeToMouseEvent(eventType: keyof typeof mouseEventListeners, handler: MouseEventHandler): void {
  mouseEventListeners[eventType].add(handler)
}

/**
 * Unsubscribe from a mouse event
 * @param eventType - The type of mouse event to unsubscribe from
 * @param handler - The handler function to remove
 */
export function unsubscribeFromMouseEvent(eventType: keyof typeof mouseEventListeners, handler: MouseEventHandler): void {
  mouseEventListeners[eventType].delete(handler)
}

/**
 * Create an event dispatcher for a specific mouse event type
 * @param eventType - The type of mouse event to dispatch
 * @returns A function that dispatches the event to all registered handlers
 */
function createEventDispatcher(eventType: keyof typeof mouseEventListeners): (x: number, y: number) => void {
  return (x: number, y: number) => {
    for (const handler of mouseEventListeners[eventType]) {
      handler({
        x,
        y,
      })
    }
  }
}

/**
 * Create a new comment at a specific position
 * @param stablePath - The stable path for the comment
 * @param x - X coordinate for the comment position
 * @param y - Y coordinate for the comment position
 */
function createNewCommentAtPosition(stablePath: string, x: number, y: number): void {
  debugState.dispatch(setNewAnchorPosition({
    anchorPosition: {
      x,
      y,
    },
  }))
  debugState.dispatch(activateNewComment({
    stablePath,
  }))
}

// Global mouse event manager instance
export let mouseEventManager: MouseEventManager | undefined

/**
 * Initialize the mouse event manager
 */
export function initializeMouseEventManager(): void {
  mouseEventManager = {
    handleMouseDown: createEventDispatcher("mousedown"),
    handleMouseMove: createEventDispatcher("mousemove"),
    handleMouseUp: createEventDispatcher("mouseup"),
    createNewCommentAtPosition,
  }
}

// Export aliases for backward compatibility
export const on = subscribeToMouseEvent
export const AU = unsubscribeFromMouseEvent
export const T6 = initializeMouseEventManager
export const lS = mouseEventManager
