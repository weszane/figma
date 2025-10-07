/**
 * Utility functions for the cursor system
 */

import type { BoundingBox, CursorTransform, Position, ViewportInfo } from './types'
import { CURSOR_POSITIONING } from './constants'

/**
 * Calculate cursor transform based on hand position and viewport
 */
export function calculateCursorTransform(
  basePosition: Position,
  isHandOnRight: boolean,
  viewportZoomScale: number,
  includeOffset: boolean = true,
): CursorTransform {
  const rotationDirection = isHandOnRight ? 1 : -1
  const rotation = rotationDirection * (Math.PI / 4)
  const baseOffset = CURSOR_POSITIONING.BASE_OFFSET / viewportZoomScale

  const position: Position = {
    x: basePosition.x + baseOffset * Math.sin(rotation),
    y: basePosition.y - baseOffset * Math.cos(rotation),
  }

  if (includeOffset) {
    const additionalOffset = CURSOR_POSITIONING.COLLISION_OFFSET / viewportZoomScale
    position.x += additionalOffset
    position.y += additionalOffset
  }

  return { position, rotation }
}

/**
 * Check if cursor is valid for interaction
 */
export function isCursorValidForInteraction(
  cursor: any,
  currentPageId: string,
  currentSessionId: string,
  observingSessionId?: string,
): boolean {
  // Must be editor device
  if (cursor.deviceName !== 'editor') {
    return false
  }

  // Must have valid canvas position
  if (!cursor.mouse?.canvasSpacePosition
    || isNaN(cursor.mouse.canvasSpacePosition.x)
    || !cursor.mouse.pageId) {
    return false
  }

  // Must be on correct page
  if (cursor.mouse.pageId !== currentPageId) {
    return false
  }

  // Check for recent activity (unless it's the observing session)
  const isRecentlyActive = cursor.lastMouseMoveMs !== -1
    && window.performance.now() - cursor.lastMouseMoveMs <= 60000 // 1 minute

  if (!isRecentlyActive && observingSessionId !== cursor.sessionID) {
    return false
  }

  // Must not be current session
  if (cursor.sessionID === currentSessionId) {
    return false
  }

  return true
}

/**
 * Check if animated cursor exists for session
 */
export function hasAnimatedCursorForSession(entities: any[], sessionId: string): boolean {
  return entities.some(entity =>
    entity.type === 'AnimatedCursorEntity'
    && entity.customData?.sessionId === sessionId,
  )
}

/**
 * Check if current file type supports cursor interactions
 */
export function shouldShowCursorInteractions(): boolean {
  // This would need to be implemented based on the actual file type checking logic
  // For now, returning true as a placeholder
  return true
}

/**
 * Create selection box style for AI animations
 */
export function createSelectionBoxStyle(
  viewportInfo: ViewportInfo,
  boundingBox: BoundingBox,
): React.CSSProperties {
  const { zoomScale } = viewportInfo
  const width = boundingBox.w * zoomScale
  const height = boundingBox.h * zoomScale
  const offsetX = (zoomScale - 1) * boundingBox.x
  const offsetY = (zoomScale - 1) * boundingBox.y

  return {
    transform: `translate(${boundingBox.x + offsetX}px, ${boundingBox.y + offsetY}px)`,
    width: `${width}px`,
    height: `${height}px`,
  }
}

/**
 * Calculate text width using canvas measurement
 */
export function measureTextWidth(text: string, font: string = '14px Inter, sans-serif'): number {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')

  if (!context) {
    return text.length * 8 // Fallback estimation
  }

  context.font = font
  return context.measureText(text).width
}

/**
 * Calculate chat state width based on content
 */
export function calculateChatStateWidth(currentInput: string, previousLine: string): number {
  const currentWidth = measureTextWidth(currentInput)
  const previousWidth = measureTextWidth(previousLine)
  return Math.max(currentWidth, previousWidth)
}

/**
 * Linear interpolation utility
 */
export function lerp(start: number, end: number, progress: number): number {
  return start * (1 - progress) + end * progress
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Calculate distance between two positions
 */
export function calculateDistance(pos1: Position, pos2: Position): number {
  const deltaX = pos1.x - pos2.x
  const deltaY = pos1.y - pos2.y
  return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
}

/**
 * Calculate midpoint between two positions
 */
export function calculateMidpoint(pos1: Position, pos2: Position): Position {
  return {
    x: (pos1.x + pos2.x) / 2,
    y: (pos1.y + pos2.y) / 2,
  }
}

/**
 * Normalize vector to unit length
 */
export function normalizeVector(vector: Position): Position {
  const magnitude = Math.sqrt(vector.x * vector.x + vector.y * vector.y)
  if (magnitude === 0) {
    return { x: 0, y: 0 }
  }
  return {
    x: vector.x / magnitude,
    y: vector.y / magnitude,
  }
}

/**
 * Create memoized cursor map from array
 */
export function createCursorMap(cursors: any[]): Record<string, any> {
  return cursors.reduce((map, cursor) => {
    map[cursor.sessionID] = cursor
    return map
  }, {})
}

/**
 * Debounce function execution
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timeoutId: number

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => func(...args), delay)
  }
}

/**
 * Throttle function execution
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let lastExecution = 0

  return (...args: Parameters<T>) => {
    const now = Date.now()
    if (now - lastExecution >= delay) {
      func(...args)
      lastExecution = now
    }
  }
}

/**
 * Check if value is within range
 */
export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}

/**
 * Generate random number within range
 */
export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min
}

/**
 * Convert degrees to radians
 */
export function degreesToRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Convert radians to degrees
 */
export function radiansToDegrees(radians: number): number {
  return radians * (180 / Math.PI)
}

/**
 * Format session ID for display
 */
export function formatSessionId(sessionId: string): string {
  return sessionId.length > 8 ? `${sessionId.substring(0, 8)}...` : sessionId
}

/**
 * Validate position object
 */
export function isValidPosition(position: any): position is Position {
  return (
    typeof position === 'object'
    && position !== null
    && typeof position.x === 'number'
    && typeof position.y === 'number'
    && !isNaN(position.x)
    && !isNaN(position.y)
  )
}

/**
 * Deep clone object (simple implementation)
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime()) as unknown as T
  }

  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as unknown as T
  }

  const cloned = {} as T
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key])
    }
  }

  return cloned
}
