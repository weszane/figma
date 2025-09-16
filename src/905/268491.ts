// /Users/allen/sigma-main/src/905/268491.ts

import { clamp, roundToNearestMultiple } from '../905/875826'
import { toPixels } from '../905/893109'

/**
 * Represents a 2D point with x and y coordinates.
 */
interface Point {
  x: number
  y: number
}

/**
 * Represents a bounding box with top, left, bottom, right.
 */
interface Bounds {
  top: number
  left: number
  right: number
  bottom: number
}

// Original: $$a13
/**
 * Default origin point at (0, 0).
 */
export const originPoint: Point = {
  x: 0,
  y: 0,
}

// Original: $$s18
/**
 * Creates a new point with given x and y coordinates.
 * @param x - The x-coordinate.
 * @param y - The y-coordinate.
 * @returns A new Point object.
 */
export function createPoint(x: number, y: number): Point {
  return { x, y }
}

// Original: $$o2
/**
 * Checks if two points are equal.
 * @param p1 - First point.
 * @param p2 - Second point.
 * @returns True if points are equal, false otherwise.
 */
export function arePointsEqual(p1: Point, p2: Point): boolean {
  return p1.x === p2.x && p1.y === p2.y
}

// Original: $$l6
/**
 * Extracts point from a mouse event's client coordinates.
 * @param event - The mouse event.
 * @returns A point with clientX and clientY.
 */
export function pointFromMouseEvent(event: MouseEvent): Point {
  return { x: event.clientX, y: event.clientY }
}

// Original: $$d7
/**
 * Extracts point from a mouse event's movement deltas.
 * @param event - The mouse event.
 * @returns A point with movementX and movementY.
 */
export function pointFromMovement(event: MouseEvent): Point {
  return { x: event.movementX, y: event.movementY }
}

// Original: $$c10
/**
 * Gets the window's inner dimensions as a point.
 * @returns A point with innerWidth and innerHeight.
 */
export function getWindowSize(): Point {
  return { x: window.innerWidth, y: window.innerHeight }
}

// Original: $$u8
/**
 * Gets the top-left position of an element's bounding rect as a point.
 * @param element - The DOM element.
 * @returns A point with the element's x and y position.
 */
export function getElementPosition(element: Element): Point {
  const rect = element.getBoundingClientRect()
  return { x: rect.x, y: rect.y }
}

// Original: $$p0
/**
 * Converts a point to a CSS translate string.
 * @param point - The point to translate.
 * @returns A CSS transform string.
 */
export function toTranslateString(point: Point): string {
  return `translate(${point.x}px, ${point.y}px)`
}

// Original: $$m14
/**
 * Converts a point to CSS position styles (top and left).
 * @param point - The point.
 * @returns An object with top and left in pixels.
 */
export function toPositionStyles(point: Point): { top: string, left: string } {
  return {
    top: toPixels(point.y),
    left: toPixels(point.x),
  }
}

// Original: $$h3
/**
 * Rounds a point's coordinates to the nearest integers.
 * @param point - The point to round.
 * @returns A new point with rounded coordinates.
 */
export function roundPoint(point: Point): Point {
  return { x: Math.round(point.x), y: Math.round(point.y) }
}

// Original: $$g16
/**
 * Rounds a point's coordinates to the nearest multiple of the device pixel ratio inverse.
 * @param point - The point to round.
 * @returns A new point with rounded coordinates.
 */
export function roundToDevicePixel(point: Point): Point {
  const ratio = 1 / (window.devicePixelRatio || 1)
  return {
    x: roundToNearestMultiple(point.x, ratio),
    y: roundToNearestMultiple(point.y, ratio),
  }
}

// Original: $$f11
/**
 * Adds two points component-wise.
 * @param p1 - First point.
 * @param p2 - Second point.
 * @returns The sum of the points.
 */
export function addPoints(p1: Point, p2: Point): Point {
  return { x: p1.x + p2.x, y: p1.y + p2.y }
}

// Original: $$_4
/**
 * Subtracts the second point from the first component-wise.
 * @param p1 - First point.
 * @param p2 - Second point to subtract.
 * @returns The difference of the points.
 */
export function subtractPoints(p1: Point, p2: Point): Point {
  return { x: p1.x - p2.x, y: p1.y - p2.y }
}

// Original: $$A9
/**
 * Calculates the Euclidean distance from origin to the point.
 * @param point - The point.
 * @returns The distance.
 */
export function distanceFromOrigin(point: Point): number {
  return Math.hypot(point.x, point.y)
}

// Original: $$y1
/**
 * Calculates the Euclidean distance between two points.
 * @param p1 - First point.
 * @param p2 - Second point.
 * @returns The distance between the points.
 */
export function distanceBetweenPoints(p1: Point, p2: Point): number {
  return distanceFromOrigin(subtractPoints(p1, p2))
}

// Helper function (original: b)
/**
 * Calculates the squared distance between two points.
 * @param p1 - First point.
 * @param p2 - Second point.
 * @returns The squared distance.
 */
function squaredDistance(p1: Point, p2: Point): number {
  return (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2
}

// Original: $$v15
/**
 * Multiplies a point by a scalar or another point component-wise.
 * @param point - The point to multiply.
 * @param factor - Scalar or point multiplier.
 * @returns The scaled point.
 */
export function multiplyPoint(point: Point, factor: number | Point): Point {
  if (typeof factor === 'number') {
    return { x: point.x * factor, y: point.y * factor }
  }
  return { x: point.x * factor.x, y: point.y * factor.y }
}

// Original: $$I5
/**
 * Normalizes a point to a unit vector, optionally scaled.
 * @param point - The point to normalize.
 * @param scale - Optional scale factor (default 1).
 * @returns The normalized point.
 */
export function normalizePoint(point: Point, scale: number = 1): Point {
  return multiplyPoint(point, scale / distanceFromOrigin(point))
}

// Original: $$E17
/**
 * Clamps a point's coordinates within min and max bounds.
 * @param point - The point to clamp.
 * @param min - Minimum bounds.
 * @param max - Maximum bounds.
 * @returns The clamped point.
 */
export function clampPoint(point: Point, min: Point, max: Point): Point {
  return {
    x: clamp(point.x, min.x, max.x),
    y: clamp(point.y, min.y, max.y),
  }
}

// Helper function (original: S)
/**
 * Checks if a point is inside the given bounds.
 * @param point - The point to check.
 * @param bounds - The bounds.
 * @returns True if inside, false otherwise.
 */
function isPointInBounds(point: Point, bounds: Bounds): boolean {
  return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom
}

// Original: $$x12
/**
 * Calculates the intersection point of a line segment with bounds.
 * @param start - Start point of the line.
 * @param end - End point of the line.
 * @param bounds - The bounds to intersect with.
 * @returns The intersection point or null if none.
 */
export function lineBoundsIntersection(start: Point, end: Point, bounds: Bounds): Point | null {
  if (!isPointInBounds(start, bounds) && isPointInBounds(end, bounds))
    return null
  const dx = end.x - start.x
  const dy = end.y - start.y
  const right = dx >= 0 ? bounds.right : bounds.left
  const bottom = dy >= 0 ? bounds.bottom : bounds.top
  if (dx === 0)
    return { x: start.x, y: bottom }
  if (dy === 0)
    return { x: right, y: start.y }
  const slope = dy / dx
  const intercept = start.y - slope * start.x
  const candidateX = { x: right, y: slope * right + intercept }
  const candidateY = { x: (bottom - intercept) / slope, y: bottom }
  return squaredDistance(candidateX, start) < squaredDistance(candidateY, start) ? candidateX : candidateY
}

// Updated exports to match refactored names
export const BB = toTranslateString
export const Io = distanceBetweenPoints
export const LC = arePointsEqual
export const LI = roundPoint
export const Re = subtractPoints
export const S8 = normalizePoint
export const TX = pointFromMouseEvent
export const T_ = pointFromMovement
export const VN = getElementPosition
export const VO = distanceFromOrigin
export const Vu = getWindowSize
export const WQ = addPoints
export const bl = lineBoundsIntersection
export const f2 = originPoint
export const gU = toPositionStyles
export const hs = multiplyPoint
export const i_ = roundToDevicePixel
export const qE = clampPoint
export const t6 = createPoint
