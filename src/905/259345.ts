import { aalSettingsConfig } from "../905/55273"

// Threshold for approximate equality comparisons
export const EPSILON = 2.001

/**
 * Checks if two numbers are approximately equal within a threshold (EPSILON)
 * Original name: $$a9
 */
export function isApproximatelyEqual(firstValue: number, secondValue: number, epsilon: number = EPSILON): boolean {
  return Math.abs(firstValue - secondValue) < epsilon
}

/**
 * Checks if two numbers are approximately equal or if the first is greater than the second
 * Original name: $$s1
 */
export function isApproximatelyEqualOrGreater(firstValue: number, secondValue: number, epsilon: number = EPSILON): boolean {
  return isApproximatelyEqual(firstValue, secondValue, epsilon) || firstValue > secondValue
}

/**
 * Compares two values with optional tolerance and absolute value comparison
 * Returns: -1 if first < second, 0 if equal within tolerance, 1 if first > second
 * Original name: $$o6
 */
export function compareWithTolerance(
  firstValue: number | string,
  secondValue: number | string,
  tolerance?: number,
  useAbsoluteValues: boolean = false,
): number {
  const firstNum = Number(firstValue)
  const secondNum = Number(secondValue)

  // If tolerance is provided and values are within tolerance, they're equal
  if (tolerance !== undefined && Math.abs(firstNum - secondNum) < tolerance) {
    return 0
  }

  // If using absolute values for comparison
  if (useAbsoluteValues) {
    const absFirst = Math.abs(firstNum)
    const absSecond = Math.abs(secondNum)

    if (absFirst > absSecond)
      return 1
    if (absFirst < absSecond)
      return -1
    return 0
  }

  // Standard comparison
  if (firstNum > secondNum)
    return 1
  if (firstNum < secondNum)
    return -1
  return 0
}

/**
 * Gets the opposite axis
 * Original name: $$l3
 */
export function getOppositeAxis(axis: "X" | "Y"): "X" | "Y" {
  return axis === "X" ? "Y" : "X"
}

/**
 * Transforms a point using a transformation matrix
 * Original name: d
 */
function transformPoint(matrix: { m00: number, m01: number, m10: number, m11: number }, point: { x: number, y: number }): { x: number, y: number } {
  return {
    x: matrix.m00 * point.x + matrix.m01 * point.y,
    y: matrix.m10 * point.x + matrix.m11 * point.y,
  }
}

/**
 * Calculates the bounding box that contains all given rectangles
 * Original name: $$c8
 */
export function calculateBoundingBox(rectangles: Array<{ left: number, top: number, right: number, bottom: number }>): { left: number, top: number, right: number, bottom: number } {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (const rect of rectangles) {
    minX = Math.min(minX, rect.left)
    minY = Math.min(minY, rect.top)
    maxX = Math.max(maxX, rect.right)
    maxY = Math.max(maxY, rect.bottom)
  }

  return {
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
  }
}

/**
 * Calculates bounding box for transformed elements
 * Original name: $$u14
 */
export function calculateTransformedBoundingBox(elements: Array<{
  x?: number
  y?: number
  width: number
  height: number
  relativeTransform?: number[][]
} | {
  x: number
  y: number
  width: number
  height: number
}>): { left: number, top: number, right: number, bottom: number } {
  let minX = Infinity
  let minY = Infinity
  let maxX = -Infinity
  let maxY = -Infinity

  for (const element of elements) {
    // Handle transformed elements
    let bounds = element

    if ("x" in element && "relativeTransform" in element && element.relativeTransform) {
      // Calculate transformed bounds
      const elementSize = { x: element.width, y: element.height }
      const transformMatrix = {
        m00: element.relativeTransform[0][0],
        m01: element.relativeTransform[0][1],
        m02: element.relativeTransform[0][2],
        m10: element.relativeTransform[1][0],
        m11: element.relativeTransform[1][1],
        m12: element.relativeTransform[1][2],
      }

      // Calculate size after transformation
      const calculateTransformedSize = (size: { x: number, y: number }, matrix: typeof transformMatrix) => {
        let result = { x: 0, y: 0 }

        for (const corner of [{ x: -1, y: 1 }, { x: 1, y: 1 }]) {
          const transformedPoint = transformPoint(matrix, {
            x: size.x * corner.x,
            y: size.y * corner.y,
          })

          result = {
            x: Math.max(result.x, Math.abs(transformedPoint.x)),
            y: Math.max(result.y, Math.abs(transformedPoint.y)),
          }
        }

        return result
      }

      const transformedSize = calculateTransformedSize(elementSize, transformMatrix)

      // Calculate position after transformation
      let position = {
        x: transformMatrix.m02,
        y: transformMatrix.m12,
      }

      const centerOffset = transformPoint(transformMatrix, {
        x: elementSize.x / 2,
        y: elementSize.y / 2,
      })

      position.x += centerOffset.x
      position.y += centerOffset.y
      position.x -= transformedSize.x / 2
      position.y -= transformedSize.y / 2

      bounds = {
        x: position.x,
        y: position.y,
        width: transformedSize.x,
        height: transformedSize.y,
      }
    }

    // Update bounding box
    if (bounds.x < minX)
      minX = bounds.x
    if (bounds.y < minY)
      minY = bounds.y
    if (bounds.x + bounds.width > maxX)
      maxX = bounds.x + bounds.width
    if (bounds.y + bounds.height > maxY)
      maxY = bounds.y + bounds.height
  }

  return {
    left: minX,
    top: minY,
    right: maxX,
    bottom: maxY,
  }
}

/**
 * Checks if two bounding boxes overlap on a specific axis with optional padding
 * Original name: p
 */
function doBoxesOverlapOnAxis(
  firstBox: { left: number, right: number, top: number, bottom: number },
  secondBox: { left: number, right: number, top: number, bottom: number },
  axis: "X" | "Y",
  padding: number = 0,
): boolean {
  if (axis === "X") {
    // Determine leftmost and rightmost boxes
    let leftBox = firstBox
    let rightBox = secondBox

    if (firstBox.left > secondBox.left) {
      leftBox = secondBox
      rightBox = firstBox
    }

    // Check horizontal overlap with padding
    return leftBox.left < rightBox.right + padding && leftBox.right > rightBox.left - padding
  }
  else {
    // Determine topmost and bottommost boxes
    let topBox = firstBox
    let bottomBox = secondBox

    if (firstBox.top > secondBox.top) {
      topBox = secondBox
      bottomBox = firstBox
    }

    // Check vertical overlap with padding
    return topBox.top < bottomBox.bottom + padding && topBox.bottom > bottomBox.top - padding
  }
}

/**
 * Checks if two bounding boxes overlap considering configured overlap thresholds
 * Original name: $$m4
 */
export function doBoxesOverlap(
  firstBox: { left: number, right: number, top: number, bottom: number },
  secondBox: { left: number, right: number, top: number, bottom: number },
): boolean {
  // Calculate dimensions
  const firstWidth = firstBox.right - firstBox.left
  const secondWidth = secondBox.right - secondBox.left
  const firstHeight = firstBox.bottom - firstBox.top
  const secondHeight = secondBox.bottom - secondBox.top

  // Calculate overlap thresholds
  const horizontalThreshold = -1 * Math.min(
    aalSettingsConfig.HORIZONTAL_AXIS_OVERLAP_PX,
    0.35 * firstWidth,
    0.35 * secondWidth,
  )

  const verticalThreshold = -1 * Math.min(
    aalSettingsConfig.VERTICAL_AXIS_OVERLAP_PX,
    0.35 * firstHeight,
    0.35 * secondHeight,
  )

  // Check overlap on both axes
  return doBoxesOverlapOnAxis(firstBox, secondBox, "X", horizontalThreshold)
    && doBoxesOverlapOnAxis(firstBox, secondBox, "Y", verticalThreshold)
}

/**
 * Checks if two bounding boxes are approximately equal
 * Original name: $$h7
 */
export function areBoxesApproximatelyEqual(
  firstBox: { left: number, top: number, right: number, bottom: number },
  secondBox: { left: number, top: number, right: number, bottom: number },
  epsilon: number = EPSILON,
): boolean {
  return isApproximatelyEqual(firstBox.left, secondBox.left, epsilon)
    && isApproximatelyEqual(firstBox.top, secondBox.top, epsilon)
    && isApproximatelyEqual(firstBox.right, secondBox.right, epsilon)
    && isApproximatelyEqual(firstBox.bottom, secondBox.bottom, epsilon)
}

/**
 * Gets coordinate value for specified axis
 * Original name: $$g11
 */
export function getCoordinateForAxis(box: { x: number, y: number }, axis: "X" | "Y"): number {
  return axis === "X" ? box.x : box.y
}

/**
 * Calculates spacing between two boxes along an axis
 * Original name: $$f13
 */
export function calculateSpacingBetweenBoxes(
  firstBox: { x: number, y: number, width: number, height: number },
  secondBox: { x: number, y: number, width: number, height: number },
  axis: "X" | "Y",
): number {
  // Ensure consistent ordering
  if (getCoordinateForAxis(secondBox, axis) < getCoordinateForAxis(firstBox, axis)) {
    [firstBox, secondBox] = [secondBox, firstBox]
  }

  // Calculate spacing
  return getCoordinateForAxis(secondBox, axis)
    - getCoordinateForAxis(firstBox, axis)
    - (axis === "X" ? firstBox.width : firstBox.height)
}

/**
 * Calculates average spacing between consecutive boxes
 * Original name: $$_0
 */
export function calculateAverageSpacing(
  boxes: Array<{ x: number, y: number, width: number, height: number }>,
  axis: "X" | "Y",
): number {
  // Calculate spacings between consecutive boxes
  const spacings: number[] = []

  if (boxes.length < 2) {
    return 0
  }

  for (let i = 0; i + 1 < boxes.length; i++) {
    spacings.push(calculateSpacingBetweenBoxes(boxes[i], boxes[i + 1], axis))
  }

  // Calculate average
  const sum = spacings.reduce((acc, spacing) => acc + spacing, 0)
  return sum / spacings.length
}

/**
 * Maps alignment values to constraint types
 * Original name: $$A2
 */
export function mapAlignmentToConstraintType(alignment: string): "MIN" | "MAX" | "CENTER" {
  switch (alignment) {
    case "left":
      return "MIN"
    case "right":
      return "MAX"
    default:
      return "CENTER"
  }
}

/**
 * Determines dominant alignment of elements relative to a reference box
 * Original name: $$y5
 */
export function determineDominantAlignment(
  elements: Array<{ x: number, y: number, width: number, height: number }>,
  referenceBox: { left: number, top: number, right: number, bottom: number },
  axis: "X" | "Y",
): "left" | "center" | "right" {
  // Handle empty array
  if (!elements.length) {
    return "left"
  }

  // Initialize alignment counters
  const alignmentCounts = {
    left: 0,
    center: 0,
    right: 0,
    defer: 0,
  }

  // Count alignments for each element
  for (const element of elements) {
    const elementBounds = calculateTransformedBoundingBox([element])

    // Determine alignment for this element
    const alignment = (() => {
      const primaryEdge = axis === "Y" ? "left" : "top"
      const secondaryEdge = axis === "Y" ? "right" : "bottom"

      const distanceToPrimary = Math.abs(referenceBox[primaryEdge] - elementBounds[primaryEdge])
      const overlapWithSecondary = Math.max(0, referenceBox[secondaryEdge] - elementBounds[secondaryEdge])

      // Special cases
      if (distanceToPrimary < 1 && overlapWithSecondary < 1) {
        return "defer"
      }

      if (distanceToPrimary > 5 * overlapWithSecondary + 5) {
        return "right"
      }

      if (5 * distanceToPrimary + 5 < overlapWithSecondary) {
        return "left"
      }

      if (Math.abs(overlapWithSecondary - distanceToPrimary) <= (referenceBox[secondaryEdge] - referenceBox[primaryEdge]) * 0.33
        && distanceToPrimary !== 0
        && overlapWithSecondary !== 0) {
        return "center"
      }

      return distanceToPrimary > overlapWithSecondary ? "right" : "left"
    })()

    // Increment counter
    if (alignment) {
      alignmentCounts[alignment as keyof typeof alignmentCounts]++
    }
  }

  // Special case: all elements have same height when checking X axis
  if (axis === "X" && elements.every(element => element.height === elements[0].height)) {
    return "center"
  }

  // Find dominant alignment
  let maxCount = 0
  let hasTie = false
  let dominantAlignment: "left" | "center" | "right" = axis === "X" ? "center" : "left"

  for (const alignment of ["left", "center", "right"] as const) {
    const count = alignmentCounts[alignment]

    if (count > maxCount) {
      maxCount = count
      dominantAlignment = alignment
      hasTie = false
    }
    else if (count && count === maxCount) {
      hasTie = true
    }
  }

  // Handle ties
  if (hasTie) {
    if (alignmentCounts.left > alignmentCounts.right) {
      return "left"
    }
    else if (alignmentCounts.right > alignmentCounts.left) {
      return "right"
    }
    else {
      return "center"
    }
  }

  return dominantAlignment
}

/**
 * Calculates Euclidean distance between centers of two rectangles
 * Original name: $$b12
 */
export function calculateCenterDistance(
  firstRect: { x: number, y: number, width: number, height: number },
  secondRect: { x: number, y: number, width: number, height: number },
): number {
  const firstCenterX = firstRect.x + firstRect.width / 2
  const firstCenterY = firstRect.y + firstRect.height / 2
  const secondCenterX = secondRect.x + secondRect.width / 2
  const secondCenterY = secondRect.y + secondRect.height / 2

  return Math.sqrt(
    (firstCenterX - secondCenterX) ** 2
    + (firstCenterY - secondCenterY) ** 2,
  )
}

// Export aliases for backward compatibility
export const BS = calculateAverageSpacing
export const JX = isApproximatelyEqualOrGreater
export const LZ = mapAlignmentToConstraintType
export const MM = getOppositeAxis
export const Nj = doBoxesOverlap
export const Nv = determineDominantAlignment
export const _d = compareWithTolerance
export const cA = areBoxesApproximatelyEqual
export const mW = calculateBoundingBox
export const n4 = isApproximatelyEqual
export const p8 = EPSILON
export const s9 = getCoordinateForAxis
export const sH = calculateCenterDistance
export const uM = calculateSpacingBetweenBoxes
export const uS = calculateTransformedBoundingBox
