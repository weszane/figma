/**
 * Auto-layout system for organizing UI elements into structured layouts.
 * This module processes vertices (UI elements) and creates appropriate layout structures.
 *
 * Refactored for improved readability, type safety, and maintainability.
 * Changes: Renamed variables for clarity, added TypeScript interfaces, improved code organization,
 * added documentation comments, and simplified complex logic while preserving functionality.
 */

import { aalSettingsConfig } from "../905/55273"
import {
  areBoxesApproximatelyEqual,
  calculateAverageSpacing,
  calculateBoundingBox,
  calculateCenterDistance,
  calculateSpacingBetweenBoxes,
  calculateTransformedBoundingBox,
  compareWithTolerance,
  determineDominantAlignment,
  doBoxesOverlap,
  EPSILON,
  getCoordinateForAxis,
  getOppositeAxis,
  isApproximatelyEqual,
  isApproximatelyEqualOrGreater,
  mapAlignmentToConstraintType,
} from "../905/259345"
import { logger } from "../905/651849"

// ==================== INTERFACES ====================

interface Vertex {
  type: "NODE" | "LIST" | "GROUP" | "FRAME" | "INSTANCE"
  id: string
  x: number
  y: number
  width: number
  height: number
  node?: any // Original node reference
  signature: string
  children?: Vertex[]
  absolutePositionedChildren?: Vertex[]
  axis?: "X" | "Y"
  spacing?: number
  wrap?: boolean
  counterSpacing?: number
  layoutMode?: string
  primaryAxisAlignItems?: string
  counterAxisAlignItems?: string
  layoutSizingHorizontal?: string
  layoutSizingVertical?: string
  layoutWrap?: string
  itemSpacing?: number
  paddingLeft?: number
  paddingRight?: number
  paddingTop?: number
  paddingBottom?: number
  visible?: boolean
  removed?: boolean
}

interface Edge {
  id: string
  spacing: number
  axis: "X" | "Y"
  hitCount: number
  from: Vertex
  to: Vertex
}

interface LayoutOptions {
  maxHitCount: number
  enablePivotRule: boolean
}

interface VertexGroup {
  vertices: Vertex[]
  bbox: { left: number, top: number, right: number, bottom: number }
}

interface FrameCreationContext {
  value: number
}

type GraphAdjacencyMap = Map<string, Edge[]>

// ==================== UTILITY FUNCTIONS ====================

/**
 * Joins array elements with commas
 */
function joinWithCommas(elements: any[]): string {
  return elements.join(",")
}

/**
 * Gets the opposite vertex of an edge
 */
function getOppositeVertex(edge: Edge, vertex: Vertex): Vertex {
  if (edge.from.id !== vertex.id && edge.to.id !== vertex.id) {
    throw new Error("vertex is not in edge!")
  }
  return edge.from.id === vertex.id ? edge.to : edge.from
}

/**
 * Determines the direction of an edge relative to a vertex
 */
function getEdgeDirection(edge: Edge, vertex: Vertex): number {
  return edge.from.id === vertex.id ? 1 : -1
}

/**
 * Compares vertices based on area, x, y coordinates, and id
 */
function compareVertices(first: Vertex, second: Vertex): number {
  let result = -compareWithTolerance(first.width * first.height, second.width * second.height)
  if (result !== 0)
    return result

  result = compareWithTolerance(first.x, second.x)
  if (result !== 0)
    return result

  result = compareWithTolerance(first.y, second.y)
  if (result !== 0)
    return result

  return first.id.localeCompare(second.id)
}

/**
 * Compares edges based on spacing, hit count, and axis
 */
function compareEdges(first: Edge, second: Edge): number {
  let result = compareWithTolerance(first.spacing, second.spacing, EPSILON, true)
  if (result !== 0)
    return result

  result = compareWithTolerance(second.hitCount, first.hitCount)
  if (result !== 0)
    return result

  return compareWithTolerance(first.axis, second.axis)
}

// ==================== GRAPH BUILDING ====================

/**
 * Builds a graph from vertices
 */
function buildGraph(vertices: Vertex[]): GraphAdjacencyMap {
  const edgeMap: Map<string, Edge> = new Map()
  const adjacencyMap: GraphAdjacencyMap = new Map()

  function addEdge(fromVertex: Vertex, toVertex: Vertex, axis: "X" | "Y"): void {
    if (!toVertex)
      return

    // Create a unique edge ID
    const edgeId = fromVertex.id > toVertex.id ? `${toVertex.id}-${fromVertex.id}` : `${fromVertex.id}-${toVertex.id}`

    // If edge already exists with same axis, increment hit count
    if (edgeMap.has(edgeId)) {
      const existingEdge = edgeMap.get(edgeId)!
      if (existingEdge.axis === axis) {
        existingEdge.hitCount++
        return
      }
    }

    // Determine which vertex is "from" and which is "to" based on coordinate
    const from = getCoordinateForAxis(fromVertex, axis) < getCoordinateForAxis(toVertex, axis) ? fromVertex : toVertex
    const to = getCoordinateForAxis(fromVertex, axis) < getCoordinateForAxis(toVertex, axis) ? toVertex : fromVertex

    // Create new edge
    const edge: Edge = {
      id: edgeId,
      spacing: calculateSpacingBetweenBoxes(fromVertex, toVertex, axis),
      axis,
      hitCount: 1,
      from,
      to,
    }

    edgeMap.set(edgeId, edge)

    // Add to adjacency map
    if (!adjacencyMap.has(fromVertex.id))
      adjacencyMap.set(fromVertex.id, [])
    if (!adjacencyMap.has(toVertex.id))
      adjacencyMap.set(toVertex.id, [])

    adjacencyMap.get(fromVertex.id)!.push(edge)
    adjacencyMap.get(toVertex.id)!.push(edge)
  }

  // Sort vertices by x and y coordinates
  const sortedByX = [...vertices].sort((a, b) => {
    const result = compareWithTolerance(a.x, b.x)
    return result !== 0 ? result : compareWithTolerance(a.y, b.y)
  })

  const sortedByY = [...vertices].sort((a, b) => {
    const result = compareWithTolerance(a.y, b.y)
    return result !== 0 ? result : compareWithTolerance(a.x, b.x)
  })

  // Helper functions to find adjacent vertices
  function findAdjacentX(sortedIndex: number, yCoordinate: number, direction: number): Vertex | undefined {
    let currentIndex = sortedIndex + direction
    while (currentIndex >= 0 && currentIndex < sortedByX.length) {
      const candidate = sortedByX[currentIndex]
      if (!isApproximatelyEqual(candidate.x, sortedByX[sortedIndex].x)
        && candidate.y <= yCoordinate + EPSILON
        && candidate.y + candidate.height >= yCoordinate - EPSILON
        && !(isApproximatelyEqual(candidate.y + candidate.height, yCoordinate, 0.5)
          && candidate.x >= sortedByX[sortedIndex].x
          && candidate.x + candidate.width <= sortedByX[sortedIndex].x + sortedByX[sortedIndex].width)
        && !(isApproximatelyEqual(candidate.y, yCoordinate, 0.5)
          && candidate.x <= sortedByX[sortedIndex].x
          && candidate.x + candidate.width >= sortedByX[sortedIndex].x + sortedByX[sortedIndex].width)) {
        return candidate
      }
      currentIndex += direction
    }
  }

  function findAdjacentY(sortedIndex: number, xCoordinate: number, direction: number): Vertex | undefined {
    let currentIndex = sortedIndex + direction
    while (currentIndex >= 0 && currentIndex < sortedByY.length) {
      const candidate = sortedByY[currentIndex]
      if (!isApproximatelyEqual(candidate.y, sortedByY[sortedIndex].y)
        && candidate.x <= xCoordinate + EPSILON
        && candidate.x + candidate.width >= xCoordinate - EPSILON
        && !(candidate.x + candidate.width === xCoordinate
          && candidate.y >= sortedByY[sortedIndex].y
          && candidate.y + candidate.height <= sortedByY[sortedIndex].y + sortedByY[sortedIndex].height)
        && !(candidate.x === xCoordinate
          && candidate.y <= sortedByY[sortedIndex].y
          && candidate.y + candidate.height >= sortedByY[sortedIndex].y + sortedByY[sortedIndex].height)) {
        return candidate
      }
      currentIndex += direction
    }
  }

  // Process X-axis adjacencies
  for (let i = 0; i < sortedByX.length; i++) {
    const vertex = sortedByX[i]

    // Check for adjacent vertices in four positions
    const adjacent1 = findAdjacentX(i, vertex.y, -1)
    addEdge(vertex, adjacent1, "X")

    const adjacent2 = findAdjacentX(i, vertex.y + vertex.height, -1)
    addEdge(vertex, adjacent2, "X")

    const adjacent3 = findAdjacentX(i, vertex.y, 1)
    addEdge(vertex, adjacent3, "X")

    const adjacent4 = findAdjacentX(i, vertex.y + vertex.height, 1)
    addEdge(vertex, adjacent4, "X")
  }

  // Process Y-axis adjacencies
  for (let i = 0; i < sortedByY.length; i++) {
    const vertex = sortedByY[i]

    // Check for adjacent vertices in four positions
    const adjacent1 = findAdjacentY(i, vertex.x, -1)
    addEdge(vertex, adjacent1, "Y")

    const adjacent2 = findAdjacentY(i, vertex.x, 1)
    addEdge(vertex, adjacent2, "Y")

    const adjacent3 = findAdjacentY(i, vertex.x + vertex.width, -1)
    addEdge(vertex, adjacent3, "Y")

    const adjacent4 = findAdjacentY(i, vertex.x + vertex.width, 1)
    addEdge(vertex, adjacent4, "Y")
  }

  return adjacencyMap
}

// ==================== VERTEX PROCESSING ====================

/**
 * Checks if two vertices overlap with any other vertices
 */
function doVerticesOverlapWithOthers(from: Vertex, to: Vertex, allVertices: Vertex[]): boolean {
  const boundingBox = calculateTransformedBoundingBox([from, to])

  for (const vertex of allVertices) {
    if (vertex.id === from.id || vertex.id === to.id)
      continue

    const vertexBox = calculateTransformedBoundingBox([vertex])
    if (doBoxesOverlap(boundingBox, vertexBox))
      return true
  }

  return false
}

/**
 * Checks if two vertices satisfy the pivot rule
 */
function satisfiesPivotRule(
  from: Vertex,
  to: Vertex,
  axis: "X" | "Y",
  allVertices: Vertex[],
  maxIndex: number,
  adjacencyMap: GraphAdjacencyMap,
): boolean {
  const oppositeAxis = getOppositeAxis(axis)

  // Filter edges for both vertices
  const fromEdges = (adjacencyMap.get(from.id) || []).filter(edge => edge.to.id !== to.id && edge.axis === oppositeAxis)
  const toEdges = (adjacencyMap.get(to.id) || []).filter(edge => edge.from.id !== from.id && edge.axis === oppositeAxis)

  // Check all combinations of edges
  for (const fromEdge of fromEdges) {
    const fromOpposite = getOppositeVertex(fromEdge, from)

    for (const toEdge of toEdges) {
      const toOpposite = getOppositeVertex(toEdge, to)

      if (fromOpposite.id === toOpposite.id)
        continue

      // Check if vertices are beyond the max index
      if (allVertices.indexOf(fromOpposite) > maxIndex || allVertices.indexOf(toOpposite) > maxIndex) {
        return true
      }

      const fromDirection = getEdgeDirection(fromEdge, from)
      const toDirection = getEdgeDirection(toEdge, to)

      const spacingEqual = isApproximatelyEqual(fromEdge.spacing, toEdge.spacing)
      const centerDistanceEqual = isApproximatelyEqual(
        calculateCenterDistance(from, fromOpposite),
        calculateCenterDistance(to, toOpposite),
      )

      const signaturesEqual = fromOpposite.signature === toOpposite.signature
      const directionsEqual = fromDirection === toDirection

      if ((spacingEqual || centerDistanceEqual) && signaturesEqual && directionsEqual
        && (from.signature !== to.signature || fromOpposite.signature !== from.signature
          || fromEdge.spacing < calculateSpacingBetweenBoxes(from, to, axis))) {
        return true
      }
    }
  }

  return false
}

/**
 * Filters edges based on various criteria
 */
function filterEdges(
  edges: Edge[],
  includedVertices: Vertex[],
  allVertices: Vertex[],
  maxIndex: number,
  adjacencyMap: GraphAdjacencyMap,
  enablePivotRule: boolean,
): Edge | undefined {
  const validEdges = edges.filter((edge) => {
    const { from, to, axis } = edge
    return !(!includedVertices.includes(from) || !includedVertices.includes(to)
      || doVerticesOverlapWithOthers(from, to, allVertices)
      || (enablePivotRule && satisfiesPivotRule(from, to, axis, allVertices, maxIndex, adjacencyMap)))
  })

  return validEdges.length > 0 ? validEdges[0] : undefined
}

/**
 * Checks if all vertices have the same width or height
 */
function areVerticesUniform(vertices: Vertex[]): boolean {
  return vertices.length !== 0 && (
    vertices.every(vertex => vertex.width === vertices[0].width)
    || vertices.every(vertex => vertex.height === vertices[0].height)
  )
}

/**
 * Finds the leftmost and topmost vertices
 */
function findCornerVertices(vertices: Vertex[]): Vertex | undefined {
  if (vertices.length === 0)
    return undefined

  let leftmost = vertices[0]
  let topmost = vertices[0]

  let leftmostBox = calculateTransformedBoundingBox([leftmost])
  let topmostBox = calculateTransformedBoundingBox([topmost])

  for (const vertex of vertices) {
    const box = calculateTransformedBoundingBox([vertex])

    if (box.left < leftmostBox.left) {
      leftmostBox = box
      leftmost = vertex
    }

    if (box.top < topmostBox.top) {
      topmostBox = box
      topmost = vertex
    }
  }

  return topmost.id === leftmost.id ? leftmost : undefined
}

/**
 * Extends a chain of vertices along an axis
 */
function extendVertexChain(
  targetAxis: "X" | "Y",
  edge: Edge,
  vertices: Vertex[],
  edges: Edge[],
  adjacencyMap: GraphAdjacencyMap,
  allVertices: Vertex[],
  maxHitCount: number,
  leftBoundary: number,
  rightBoundary: number,
  maxIndex: number,
  enablePivotRule: boolean,
): boolean {
  if (edge.axis !== targetAxis)
    return false

  const direction = getEdgeDirection(edge, vertices[0])
  let foundOverlap = false

  // Process each vertex in the chain
  for (const vertex of [...vertices]) {
    // Continue while we have a valid vertex and haven't found an overlap
    for (let currentVertex = vertex; currentVertex && !foundOverlap && adjacencyMap.has(currentVertex.id);) {
      // Filter and sort adjacent edges
      const adjacentEdges = adjacencyMap.get(currentVertex.id)!
        .filter((adjacentEdge) => {
          // Check basic conditions
          if (adjacentEdge.axis !== edge.axis || adjacentEdge.hitCount < maxHitCount) {
            return false
          }

          const oppositeVertex = getOppositeVertex(adjacentEdge, currentVertex)

          // Check if vertex is already included or beyond max index
          if (vertices.includes(oppositeVertex) || allVertices.indexOf(oppositeVertex) >= maxIndex) {
            return false
          }

          // Check direction consistency
          if (Math.abs(direction) !== Math.abs(getEdgeDirection(adjacentEdge, currentVertex))) {
            return false
          }

          // Check spacing conditions
          if (!isApproximatelyEqual(adjacentEdge.spacing, edge.spacing)
            && adjacentEdge.spacing < edge.spacing + EPSILON
            && adjacentEdge.hitCount >= edges[edges.length - 1].hitCount) {
            foundOverlap = true
            return false
          }

          // If spacings aren't equal, skip this edge
          if (!isApproximatelyEqual(adjacentEdge.spacing, edge.spacing)) {
            return false
          }

          // Check boundary conditions
          const box = calculateTransformedBoundingBox([oppositeVertex])
          return !(box.left < leftBoundary - EPSILON) && !(box.right > rightBoundary + EPSILON)
        })
        .sort(compareEdges)

      // Break if we found an overlap
      if (foundOverlap)
        break

      // Find the next valid edge
      const nextEdge = filterEdges(adjacentEdges, allVertices, allVertices, maxIndex, adjacencyMap, enablePivotRule)
      if (!nextEdge)
        break

      // Check pivot rule if enabled
      const oppositeVertex = getOppositeVertex(nextEdge, currentVertex)
      if (enablePivotRule && satisfiesPivotRule(
        vertices[0],
        oppositeVertex,
        nextEdge.axis,
        allVertices,
        maxIndex,
        adjacencyMap,
      )) {
        break
      }

      // Add the new vertex and edge to our chain
      vertices.push(oppositeVertex)
      edges.push(nextEdge)
      currentVertex = oppositeVertex
    }
  }

  return foundOverlap
}

/**
 * Finds wrapping candidates for a vertex
 */
function findWrappingCandidates(
  vertex: Vertex,
  axis: "X" | "Y",
  adjacencyMap: GraphAdjacencyMap,
  allVertices: Vertex[],
  maxIndex: number,
  maxHitCount: number,
): Edge[] {
  const oppositeAxis = axis === "X" ? "Y" : "X"
  const vertexEdges = adjacencyMap.get(vertex.id) || []

  // Filter edges along the opposite axis
  const candidateEdges: Edge[] = []
  for (const edge of vertexEdges) {
    if (edge.axis === oppositeAxis) {
      if (candidateEdges.length === 0 || isApproximatelyEqual(candidateEdges[0].spacing, edge.spacing)) {
        candidateEdges.push(edge)
      }
      else if (candidateEdges.length > 0 && candidateEdges[0].spacing > edge.spacing) {
        candidateEdges.length = 0 // Clear array
        candidateEdges.push(edge)
      }
    }
  }

  // Create edge-object pairs
  const edgeObjectPairs = candidateEdges.map(edge => ({
    other: getOppositeVertex(edge, vertex),
    edge,
  }))

  const validEdges: Edge[] = []

  // Process each pair
  for (const { other, edge } of edgeObjectPairs) {
    // Check if spacing exceeds threshold
    if (edge.spacing > aalSettingsConfig.WRAP_CANDIDATE_VERTICAL_THRESHOLD) {
      return []
    }

    // Check if dimensions are approximately equal
    if (!isApproximatelyEqual(other.width, vertex.width) && !isApproximatelyEqual(other.height, vertex.height)) {
      continue
    }

    const edgeChain: Edge[] = [edge]

    // Try to extend the chain
    if (extendVertexChain(
      oppositeAxis,
      edge,
      [vertex, other],
      edgeChain,
      adjacencyMap,
      allVertices,
      maxHitCount,
      -Infinity,
      Infinity,
      maxIndex,
      false, // disable pivot rule for wrapping
    )) {
      return []
    }

    validEdges.push(...edgeChain)
  }

  // Sort edges by top coordinate
  validEdges.sort((a, b) => {
    const boxA = calculateTransformedBoundingBox([a.from, a.to])
    const boxB = calculateTransformedBoundingBox([b.from, b.to])
    return compareWithTolerance(boxA.top, boxB.top)
  })

  return validEdges
}

/**
 * Groups edges by Y-axis alignment
 */
function groupEdgesByYAlignment(
  edges: Edge[],
  adjacencyMap: GraphAdjacencyMap,
  allVertices: Vertex[],
  maxHitCount: number,
  maxIndex: number,
  _enablePivotRule: boolean,
): Vertex[][] {
  const groups: Vertex[][] = []
  let leftBoundary = -Infinity
  let rightBoundary = Infinity
  const processedVertices = new Set<string>()

  for (const edge of edges) {
    if (edge.axis === "Y") {
      // Process both vertices of the edge
      for (const vertex of [edge.from, edge.to]) {
        if (processedVertices.has(vertex.id))
          continue
        processedVertices.add(vertex.id)

        // Find the best adjacent edge
        let bestEdge: Edge | undefined
        let bestVertex: Vertex | undefined

        for (const adjacentEdge of adjacencyMap.get(vertex.id) || []) {
          // Skip Y-axis edges or edges pointing in wrong direction
          if (adjacentEdge.axis === "Y" || getEdgeDirection(adjacentEdge, vertex) < 0)
            continue

          const oppositeVertex = getOppositeVertex(adjacentEdge, vertex)

          // Check if edges are aligned
          const isAligned = (() => {
            const axis = adjacentEdge.axis === "X" ? "Y" : "X"
            const fromBox = calculateTransformedBoundingBox([adjacentEdge.from])
            const toBox = calculateTransformedBoundingBox([adjacentEdge.to])

            if (axis === "Y") {
              return isApproximatelyEqual(fromBox.top, toBox.top)
                || isApproximatelyEqual(fromBox.bottom, toBox.bottom)
                || isApproximatelyEqual(
                  fromBox.top + (fromBox.bottom - fromBox.top) / 2,
                  toBox.top + (toBox.bottom - toBox.top) / 2,
                )
            }
            else {
              return isApproximatelyEqual(fromBox.left, toBox.left)
                || isApproximatelyEqual(fromBox.right, toBox.right)
                || isApproximatelyEqual(
                  fromBox.left + (fromBox.right - fromBox.left) / 2,
                  toBox.left + (toBox.right - toBox.left) / 2,
                )
            }
          })()

          // Update best edge if this one is better
          if ((!bestEdge || bestEdge.spacing) && isAligned) {
            bestEdge = adjacentEdge
            bestVertex = oppositeVertex
          }
        }

        // Skip if no suitable edge found or if vertices overlap
        if (!(bestVertex && doVerticesOverlapWithOthers(vertex, bestVertex, allVertices))) {
          groups.push([vertex])
          continue
        }

        const oppositeVertex = getOppositeVertex(bestEdge!, vertex)
        const vertexPair = [vertex, oppositeVertex]
        const edgeChain = [bestEdge!]

        // Try to extend the chain along X-axis
        if (extendVertexChain(
          "X",
          bestEdge!,
          vertexPair,
          edgeChain,
          adjacencyMap,
          allVertices,
          maxHitCount,
          leftBoundary,
          rightBoundary,
          maxIndex,
          false, // disable pivot rule for grouping
        )) {
          groups.push([vertex])
          break
        }

        groups.push(vertexPair)

        // Update boundaries
        const groupBox = calculateTransformedBoundingBox(vertexPair)
        leftBoundary = Math.max(leftBoundary, groupBox.left)
        rightBoundary = Math.min(rightBoundary, groupBox.right)
      }
    }
  }

  return groups
}

/**
 * Creates a frame from absolute and regular positioned children
 */
function createFrameFromVertices(absoluteChildren: Vertex[], regularChildren: Vertex[] = []): Vertex {
  const boundingBox = calculateTransformedBoundingBox([...absoluteChildren, ...regularChildren])

  return {
    type: "FRAME",
    id: `${regularChildren.map(child => child.id).join("-")}absolute${absoluteChildren.map(child => child.id).join("-")}`,
    x: boundingBox.left,
    y: boundingBox.top,
    width: boundingBox.right - boundingBox.left,
    height: boundingBox.bottom - boundingBox.top,
    absolutePositionedChildren: absoluteChildren,
    children: regularChildren,
    signature: `${joinWithCommas(regularChildren.map(child => child.signature))}absolute${joinWithCommas(absoluteChildren.map(child => child.signature))}`,
  }
}

/**
 * Main vertex processing function
 */
function processVertices(vertices: Vertex[], subset: Vertex[], containerDimensions?: { width?: number, height?: number }): Vertex[] {
  let layoutOptions: LayoutOptions = {
    maxHitCount: 4,
    enablePivotRule: true,
  }

  // Use subset if provided, otherwise use vertices
  if (!subset)
    subset = vertices

  {
    const processedVertices = new Map<string, boolean>()
    const containerHeight = containerDimensions?.height || Infinity
    const containerWidth = containerDimensions?.width || Infinity
    const widthThreshold = 0.1 * containerWidth
    const heightThreshold = 0.1 * containerHeight

    // Filter vertices that are likely background elements
    const backgroundVertices = vertices.filter(vertex =>
      vertex.height > 0.9 * containerHeight && vertex.width > 0.9 * containerWidth
      || vertex.x < -1 * widthThreshold || vertex.y < -1 * heightThreshold
      || vertex.x + vertex.width > containerWidth + widthThreshold
      || vertex.y + vertex.height > containerHeight + heightThreshold,
    )

    // Create a frame for background elements
    if (backgroundVertices.length > 0) {
      const backgroundFrame = createFrameFromVertices(backgroundVertices)
      vertices.push(backgroundFrame)
      subset.push(backgroundFrame)
      processedVertices.set(backgroundFrame.id, true)
    }

    // Mark background vertices as processed
    for (const vertex of backgroundVertices) {
      processedVertices.set(vertex.id, true)
    }

    // Filter out processed vertices
    vertices = vertices.filter(vertex => !processedVertices.has(vertex.id))
    subset = subset.filter(vertex => !processedVertices.has(vertex.id))

    // Sort vertices
    vertices.sort(compareVertices)
    subset.sort(compareVertices)

    // Group overlapping vertices
    const overlappingGroups = (() => {
      const groups: Vertex[][] = []
      const processed = new Set<string>()

      for (const vertex of vertices) {
        if (!processed.has(vertex.id)) {
          for (const otherVertex of vertices) {
            if (processed.has(otherVertex.id) || vertex.id === otherVertex.id)
              continue

            const vertexBox = calculateTransformedBoundingBox([vertex])
            const otherBox = calculateTransformedBoundingBox([otherVertex])

            if (doBoxesOverlap(vertexBox, otherBox)) {
              groups.push([vertex, otherVertex])
              processed.add(vertex.id)
              processed.add(otherVertex.id)
              break
            }
          }
        }
      }

      return groups
    })()

    const groupedVertices: Vertex[] = []

    // Process overlapping groups
    while (overlappingGroups.length > 0 && overlappingGroups[0]) {
      const group = overlappingGroups.pop()
      if (!group || processedVertices.get(group[0].id) || processedVertices.get(group[1].id))
        continue

      // Create group vertex
      const { vertex: groupVertex, oldGroupId } = (() => {
        const boundingBox = calculateTransformedBoundingBox(group)
        const groupNode = group.find(item => item.type === "GROUP")

        if (!groupNode) {
          return {
            vertex: {
              absolutePositionedChildren: [],
              type: "GROUP",
              id: `group-${group.map(item => item.id).join("-")}`,
              x: boundingBox.left,
              y: boundingBox.top,
              width: boundingBox.right - boundingBox.left,
              height: boundingBox.bottom - boundingBox.top,
              children: group,
              signature: `group-${joinWithCommas(group.map(item => item.signature))}`,
            } as Vertex,
            oldGroupId: undefined,
          }
        }
        else {
          const groupChildren = groupNode.children || []
          const combinedBox = calculateTransformedBoundingBox([...groupChildren, ...group])
          const remainingItems = [...groupChildren, ...group.filter(item => item.id !== groupNode.id)]

          return {
            vertex: {
              absolutePositionedChildren: [],
              type: "GROUP",
              id: `group-${remainingItems.map(item => item.id).join("-")}`,
              x: combinedBox.left,
              y: combinedBox.top,
              width: combinedBox.right - combinedBox.left,
              height: combinedBox.bottom - combinedBox.top,
              children: remainingItems,
              signature: `group-${joinWithCommas(group.map(item => item.signature))}`,
            } as Vertex,
            oldGroupId: groupNode.id,
          }
        }
      })()

      vertices.push(groupVertex)
      groupedVertices.push(groupVertex)

      const oldGroup = vertices.find(item => item.id === oldGroupId)
      const groupItems = [group[0], group[1], ...(oldGroup ? [oldGroup] : [])]
      const groupBox = calculateTransformedBoundingBox([groupVertex])
      const overlappingItems: Vertex[] = []

      // Find items that overlap with the group
      for (const item of vertices) {
        if (item.id !== groupVertex.id && !processedVertices.has(item.id)
          && item.id !== oldGroupId && item.id !== group[1].id && item.id !== group[0].id) {
          const isNodeOrGroup = (item: Vertex): boolean =>
            item.type === "NODE" || (item.type === "GROUP" && item.children?.every((child: Vertex) => child.type === "NODE" || (child.type === "GROUP" && child.children?.every((grandchild: Vertex) => grandchild.type === "NODE"))))

          if (isNodeOrGroup(item) && doBoxesOverlap(calculateTransformedBoundingBox([item]), groupBox)) {
            groupItems.push(item)
            overlappingItems.push(item)
            // Update group box to include this item
          }
        }
      }

      // Add overlapping items to group
      groupVertex.children = groupVertex.children?.concat(overlappingItems) || overlappingItems
      groupVertex.id = groupVertex.children.map(child => child.id).join("-")

      const updatedBox = calculateTransformedBoundingBox([groupVertex, ...overlappingItems])
      groupVertex.x = updatedBox.left
      groupVertex.y = updatedBox.top
      groupVertex.width = updatedBox.right - updatedBox.left
      groupVertex.height = updatedBox.bottom - updatedBox.top
      groupVertex.signature = joinWithCommas(groupVertex.children.map(child => child.signature))

      // Mark all group items as processed
      for (const item of groupItems) {
        processedVertices.set(item.id, true)
      }
    }

    // Process nested children
    const nestedChildrenMap = new Map<string, Vertex[]>()

    for (const group of groupedVertices) {
      // Process children that are significantly smaller than their parent
      for (const child of ("children" in group ? group.children || [] : [])) {
        if (isApproximatelyEqualOrGreater(child.x, group.x, Math.max(10, 0.1 * group.width))
          && isApproximatelyEqualOrGreater(child.y, group.y, Math.max(10, 0.1 * group.height))
          && isApproximatelyEqualOrGreater(child.width, group.width, Math.max(10, 0.1 * group.width))
          && isApproximatelyEqualOrGreater(child.height, group.height, Math.max(10, 0.1 * group.height))) {
          if (!nestedChildrenMap.has(group.id))
            nestedChildrenMap.set(group.id, [])
          nestedChildrenMap.get(group.id)?.push(child)
        }
      }

      const nestedChildren = nestedChildrenMap.get(group.id)
      if (nestedChildren?.length) {
        // Create a frame for nested children
        const createFrameWithoutNestedChildren = (parent: Vertex, nested: Vertex[]): Vertex => {
          const remainingChildren: Vertex[] = []
          const nestedIds = new Set(nested.map(child => child.id))

          for (const child of parent.children || []) {
            if (!nestedIds.has(child.id))
              remainingChildren.push(child)
          }

          return createFrameFromVertices(nested, remainingChildren)
        }

        const frame = createFrameWithoutNestedChildren(group, nestedChildren)
        processedVertices.set(group.id, true)
        vertices.push(frame)
        subset.push(frame)
      }
    }

    // Filter out processed vertices
    vertices = vertices.filter(vertex => !processedVertices.has(vertex.id))
    subset = subset.filter(vertex => !processedVertices.has(vertex.id)).concat(groupedVertices.filter(vertex => !processedVertices.has(vertex.id)))
  }

  // Main processing loop
  while (subset.length > 1 && layoutOptions.maxHitCount > 0) {
    let hasChanges = true

    while (hasChanges) {
      const { vertices: updatedVertices, verticesSubset: updatedSubset } = (() => {
        // Make a copy and sort
        let workingVertices = [...vertices].sort(compareVertices)

        // Build adjacency map
        const adjacencyMap = buildGraph(workingVertices)

        // Filter out overlapping edges
        for (const vertexId of adjacencyMap.keys()) {
          const edges = adjacencyMap.get(vertexId)!
          const nonOverlappingEdges = edges.filter(edge =>
            !doVerticesOverlapWithOthers(edge.from, edge.to, workingVertices),
          )

          if (nonOverlappingEdges.length < edges.length) {
            adjacencyMap.set(vertexId, nonOverlappingEdges)
          }
        }

        const processedVertices = new Map<string, boolean>()
        const vertexCount = workingVertices.length

        // Process each vertex
        for (let i = 0; i < vertexCount; i++) {
          let spacingOverride: number | undefined
          let counterSpacing: number | undefined

          const currentVertex = workingVertices[i]

          // Skip if vertex is not in subset, already processed, or has no edges
          if (!subset.includes(currentVertex) || processedVertices.has(currentVertex.id) || !adjacencyMap.has(currentVertex.id)) {
            continue
          }

          // Find the best edge
          const sortedEdges = adjacencyMap.get(currentVertex.id)!.sort(compareEdges)
          const bestEdge = filterEdges(
            sortedEdges,
            workingVertices,
            workingVertices,
            vertexCount,
            adjacencyMap,
            layoutOptions.enablePivotRule,
          )

          // Skip if no valid edge or hit count is too low
          if (!bestEdge || bestEdge.hitCount < layoutOptions.maxHitCount)
            continue

          const oppositeVertex = getOppositeVertex(bestEdge, currentVertex)

          // Skip if opposite vertex is beyond the limit
          if (workingVertices.indexOf(oppositeVertex) > vertexCount)
            continue

          // Create initial vertex pair and edge chain
          const vertexPair = [currentVertex, oppositeVertex]
          const edgeChain = [bestEdge]
          let shouldSkip = false

          // Process based on axis
          if (bestEdge.axis === "X") {
            shouldSkip = extendVertexChain(
              "X",
              bestEdge,
              vertexPair,
              edgeChain,
              adjacencyMap,
              workingVertices,
              layoutOptions.maxHitCount,
              -Infinity,
              Infinity,
              vertexCount,
              layoutOptions.enablePivotRule,
            )

            if (!shouldSkip && areVerticesUniform(vertexPair)) {
              const cornerVertex = findCornerVertices(vertexPair)
              if (cornerVertex) {
                const wrappingCandidates = findWrappingCandidates(
                  cornerVertex,
                  "X",
                  adjacencyMap,
                  workingVertices,
                  vertexCount,
                  layoutOptions.maxHitCount,
                )

                const groupedEdges = groupEdgesByYAlignment(
                  wrappingCandidates,
                  adjacencyMap,
                  workingVertices,
                  layoutOptions.maxHitCount,
                  vertexCount,
                  layoutOptions.enablePivotRule,
                )

                const flattenedVertices = groupedEdges.flat()

                // Apply transformation if conditions are met
                if (groupedEdges.length > 1 && groupedEdges[0].length > 1
                  && flattenedVertices.every(vertex => vertex.type !== "NODE" || vertex.node?.type !== "TEXT")) {
                  vertexPair.length = 0 // Clear array
                  vertexPair.push(...flattenedVertices)
                  spacingOverride = wrappingCandidates[0]?.spacing ?? 0
                  counterSpacing = bestEdge.spacing
                }
              }
            }
          }
          else {
            shouldSkip = extendVertexChain(
              "Y",
              bestEdge,
              vertexPair,
              edgeChain,
              adjacencyMap,
              workingVertices,
              layoutOptions.maxHitCount,
              -Infinity,
              Infinity,
              vertexCount,
              layoutOptions.enablePivotRule,
            )

            if (!shouldSkip && areVerticesUniform(vertexPair)) {
              const cornerVertex = findCornerVertices(vertexPair)
              if (cornerVertex) {
                const wrappingCandidates = findWrappingCandidates(
                  cornerVertex,
                  "X",
                  adjacencyMap,
                  workingVertices,
                  vertexCount,
                  layoutOptions.maxHitCount,
                )

                const groupedEdges = groupEdgesByYAlignment(
                  wrappingCandidates,
                  adjacencyMap,
                  workingVertices,
                  layoutOptions.maxHitCount,
                  vertexCount,
                  layoutOptions.enablePivotRule,
                )

                const flattenedVertices = groupedEdges.flat()

                // Apply transformation if conditions are met
                if (groupedEdges.length > 1 && groupedEdges[0].length > 1
                  && flattenedVertices.every(vertex => vertex.type !== "NODE" || vertex.node?.type !== "TEXT")) {
                  vertexPair.length = 0 // Clear array
                  vertexPair.push(...flattenedVertices)
                  spacingOverride = wrappingCandidates[0]?.spacing ?? 0
                  counterSpacing = calculateSpacingBetweenBoxes(
                    groupedEdges[0][0],
                    groupedEdges[0][1],
                    "X",
                  )
                }
              }
            }
          }

          // Skip if chain extension failed
          if (shouldSkip)
            continue

          // Sort vertices
          const sortedVertices = [...vertexPair].sort((a, b) =>
            spacingOverride !== undefined
              ? compareWithTolerance(a.y, b.y) !== 0
                ? compareWithTolerance(a.y, b.y)
                : compareWithTolerance(a.x, b.x)
              : bestEdge.axis === "X"
                ? compareWithTolerance(a.x, b.x)
                : compareWithTolerance(a.y, b.y),
          )

          const hasSpacingOverride = spacingOverride !== undefined

          // Create list vertex
          const listVertex: Vertex = {
            type: "LIST",
            id: sortedVertices.map(vertex => vertex.id).join("-"),
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            axis: hasSpacingOverride ? "X" : bestEdge.axis,
            spacing: spacingOverride ?? calculateAverageSpacing(sortedVertices, hasSpacingOverride ? "X" : bestEdge.axis),
            children: sortedVertices,
            wrap: hasSpacingOverride ?? false,
            counterSpacing: counterSpacing ?? 0,
            signature: joinWithCommas(sortedVertices.map(vertex => vertex.signature)),
          }

          // Set position and dimensions
          const listBox = calculateTransformedBoundingBox(sortedVertices)
          listVertex.x = listBox.left
          listVertex.y = listBox.top
          listVertex.width = listBox.right - listBox.left
          listVertex.height = listBox.bottom - listBox.top

          // Add to working vertices
          workingVertices.push(listVertex)

          // Mark vertices as processed and update adjacency map
          for (const vertex of vertexPair) {
            processedVertices.set(vertex.id, true)
            const vertexEdges = adjacencyMap.get(vertex.id)

            if (vertexEdges) {
              for (const edge of vertexEdges) {
                const opposite = getOppositeVertex(edge, vertex)
                const oppositeEdges = adjacencyMap.get(opposite.id)

                if (oppositeEdges) {
                  const edgeIndex = oppositeEdges.indexOf(edge)
                  if (edgeIndex !== -1) {
                    oppositeEdges.splice(edgeIndex, 1)
                  }
                }
              }
            }
          }
        }

        // Get newly added vertices
        const newVertices = workingVertices.slice(vertexCount)

        return {
          vertices: workingVertices.filter(vertex => !processedVertices.has(vertex.id)),
          verticesSubset: subset.filter(vertex => !processedVertices.has(vertex.id)).concat(newVertices),
        }
      })()

      // Update state
      hasChanges = vertices.length !== updatedVertices.length
      vertices = updatedVertices
      subset = updatedSubset

      // Error conditions
      if (vertices.length === 0)
        throw new Error("graph is empty!")
      if (vertices.length === 1)
        break
    }

    // Update layout options
    layoutOptions = (() => {
      const updatedOptions = { ...layoutOptions }
      updatedOptions.maxHitCount--

      if (updatedOptions.maxHitCount === 0 && updatedOptions.enablePivotRule) {
        updatedOptions.maxHitCount = 4
        updatedOptions.enablePivotRule = false
      }

      return updatedOptions
    })()
  }

  return vertices
}

/**
 * Groups vertices into rows based on proximity
 */
function groupVerticesIntoRows(vertices: Vertex[], maxSpacing: number = 40): Vertex[][] {
  const groups: VertexGroup[] = []
  const processedVertices = new Set<string>()
  const adjacencyMap = buildGraph(vertices)

  // Group connected vertices
  for (const vertex of vertices) {
    const addConnectedVertices = (startVertex: Vertex) => {
      if (!processedVertices.has(startVertex.id)) {
        const connected: Vertex[] = []
        processedVertices.add(startVertex.id)

        // Add directly connected vertices (X-axis only)
        const connectedEdges = (adjacencyMap.get(startVertex.id) || []).filter(edge => edge.axis === "X")
        for (const edge of connectedEdges) {
          const opposite = getOppositeVertex(edge, startVertex)
          connected.push(opposite)
        }

        connected.unshift(startVertex) // Add start vertex first
        groups.push({
          vertices: connected,
          bbox: calculateTransformedBoundingBox(connected),
        })
      }
    }

    if (processedVertices.has(vertex.id))
      continue
    const connected: Vertex[] = []
    addConnectedVertices(vertex)
    groups.push({
      vertices: connected,
      bbox: calculateTransformedBoundingBox(connected),
    })
  }

  // Sort groups by vertical position
  groups.sort((a, b) => compareWithTolerance(a.bbox.top, b.bbox.top))

  const rowGroups: VertexGroup[] = []
  const processedGroupIndices = new Set<number>()
  let previousSpacing = 0
  let currentBoundingBox = null

  // Group rows based on vertical spacing
  groups.forEach((group, index) => {
    if (index === 0) {
      processedGroupIndices.add(index)
      rowGroups.push(group)
      currentBoundingBox = group.bbox
      return
    }

    if (processedGroupIndices.has(index))
      return

    const { bbox } = group
    previousSpacing = index === 0 ? bbox.top : bbox.top - currentBoundingBox!.bottom

    const rowGroup: VertexGroup = {
      vertices: group.vertices,
      bbox,
    }

    currentBoundingBox = bbox

    // Check subsequent groups for inclusion in this row
    for (let i = index + 1; i < groups.length; i++) {
      if (processedGroupIndices.has(i))
        continue

      const nextGroup = groups[i]
      const { bbox: nextBbox } = nextGroup
      const spacing = nextBbox.top - currentBoundingBox.bottom

      // Break if spacing exceeds threshold
      if (spacing > previousSpacing + EPSILON || spacing > maxSpacing)
        break

      // Add group to current row
      rowGroup.vertices.push(...nextGroup.vertices)
      rowGroup.bbox = calculateTransformedBoundingBox(rowGroup.vertices)
      currentBoundingBox = rowGroup.bbox
      processedGroupIndices.add(i)
    }

    processedGroupIndices.add(index)
    rowGroups.push(rowGroup)
  })

  return rowGroups.map(group => group.vertices)
}

// ==================== EXPORTED FUNCTIONS ====================

/**
 * Logging function for debugging
 */
export function logVerMessage(prefix: string, message: string, level: number = 0): void {
  const shouldLog = aalSettingsConfig.LOG_FILTERS.length === 0 || aalSettingsConfig.LOG_FILTERS.includes(prefix)
  if (level >= aalSettingsConfig.LOG_LEVEL && shouldLog) {
    logger.log(`${level} ${prefix}: ${message}`)
  }
}

/**
 * Class for managing vertex-node mappings
 */
export class VertexNodeMap {
  private vertexIdToNode: { [key: string]: any } = {}

  getNodeForVertexId(vertexId: string): any {
    return this.vertexIdToNode[vertexId]
  }

  setNodeForVertexId(vertexId: string, node: any): void {
    this.vertexIdToNode[vertexId] = node
  }

  clearAfterComplete(): void {
    this.vertexIdToNode = {}
  }
}

/**
 * Custom error for graph resolution failures
 */
class GraphResolutionError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "GraphResolutionError"
  }
}

/**
 * Processes a frame with children
 */
function processFrameWithChildren(
  frame: any,
  absoluteChildren: Vertex[] = [],
  pluginApi: any,
  nodeManager: any,
  frameContext: FrameCreationContext,
  options?: { noRecurse?: boolean, recurseOnlySingleLayer?: boolean },
  containerDimensions?: { width: number, height: number },
): any {
  let children = "children" in frame ? frame.children : []
  const absoluteChildIds = absoluteChildren.map(child => child.id)

  // Filter out absolute children and connectors
  children = children.filter((child: any) =>
    !absoluteChildIds.includes(child.id) && child.type !== "CONNECTOR" && child.visible,
  )

  // Handle empty children case
  if (children.length === 0) {
    if (frame.type === "FRAME") {
      setDefaultLayout(frame, undefined)
    }
    return frame
  }

  // Return early for instances
  if (frame.type === "INSTANCE")
    return frame

  const childrenBoundingBox = calculateTransformedBoundingBox(children)
  const childBoundingBoxes: { [key: string]: any } = {}

  // Calculate bounding boxes for each child
  children.forEach((child: any) => {
    childBoundingBoxes[child.id] = calculateTransformedBoundingBox([child])
  })

  // Handle single non-frame child
  if (children.length === 1 && children[0].type !== "FRAME") {
    setDefaultLayout(frame, childrenBoundingBox)
    return frame
  }

  // Process children with layout algorithm
  const layoutResult = processVertices(
    children.map((child: any) => ({
      type: "NODE",
      id: child.id,
      x: childBoundingBoxes[child.id].left,
      y: childBoundingBoxes[child.id].top,
      width: childBoundingBoxes[child.id].right - childBoundingBoxes[child.id].left,
      height: childBoundingBoxes[child.id].bottom - childBoundingBoxes[child.id].top,
      node: child,
      signature: getNodeSignature(child),
    })),
    [],
    containerDimensions,
  )

  const frameWidth = frame.width
  const frameHeight = frame.height

  // Handle case where no layout was determined
  if (layoutResult.length === 0 || (layoutResult[0] as Vertex).layoutMode === "NONE") {
    setDefaultLayout(frame, childrenBoundingBox)
    return frame
  }

  // Handle instance case
  if ((layoutResult[0] as Vertex).type === "INSTANCE")
    return frame

  // Handle case where layout result is the same as first child
  if ((layoutResult[0] as Vertex).id === children[0]?.id) {
    setDefaultLayout(frame, childrenBoundingBox)
    return frame
  }

  // Apply layout properties to frame
  const resultVertex = layoutResult[0] as Vertex
  frame.layoutMode = resultVertex.layoutMode
  frame.primaryAxisAlignItems = resultVertex.primaryAxisAlignItems
  frame.counterAxisAlignItems = resultVertex.counterAxisAlignItems
  frame.setSharedPluginData("AAL", "was_auto_auto_layouted_but_existing", "true")

  // Update child positions
  frame.children.forEach((child: any) => {
    if ("layoutPositioning" in child && child.visible) {
      const originalX = child.x
      const originalY = child.y
      child.layoutPositioning = "ABSOLUTE"
      child.x = originalX - frame.paddingLeft!
      child.y = originalY - frame.paddingTop!
    }
  })

  frame.layoutSizingHorizontal = resultVertex.layoutSizingHorizontal
  frame.layoutWrap = resultVertex.layoutWrap
  frame.itemSpacing = resultVertex.itemSpacing

  // Append layout result children
  resultVertex.children?.forEach((child: any) => {
    frame.appendChild(child)
  })

  // Filter out absolute positioned children that match the container
  const nonMatchingBoxes = Object.entries(childBoundingBoxes)
    .filter(([childId, box]) => {
      const node = pluginApi.getNodeById(childId)
      const isApproxEqual = areBoxesApproximatelyEqual(box as any, childrenBoundingBox, 0.1)
      return node && !("layoutPositioning" in node && node.layoutPositioning === "ABSOLUTE" && isApproxEqual)
    })
    .map(([_, box]) => box)

  // Update container bounding box if needed
  if (nonMatchingBoxes.length > 0) {
    const updatedBox = calculateBoundingBox(nonMatchingBoxes)
    childrenBoundingBox.left = updatedBox.left
    childrenBoundingBox.top = updatedBox.top
    childrenBoundingBox.right = updatedBox.right
    childrenBoundingBox.bottom = updatedBox.bottom
  }

  // Set padding values
  if (childrenBoundingBox.left >= 0) {
    frame.paddingLeft = childrenBoundingBox.left
  }
  else {
    logger.log("paddingLeftCandidate is negative", childrenBoundingBox.left)
  }

  const paddingRightCandidate = frameWidth - childrenBoundingBox.right
  if (paddingRightCandidate >= 0) {
    frame.paddingRight = paddingRightCandidate
  }
  else {
    logger.log("paddingRightCandidate is negative", paddingRightCandidate)
  }

  if (childrenBoundingBox.top >= 0) {
    frame.paddingTop = childrenBoundingBox.top
  }
  else {
    logger.log("paddingTopCandidate is negative", childrenBoundingBox.top)
  }

  const paddingBottomCandidate = frameHeight - childrenBoundingBox.bottom
  if (paddingBottomCandidate >= 0) {
    frame.paddingBottom = paddingBottomCandidate
  }
  else {
    logger.log("paddingBottomCandidate is negative", childrenBoundingBox.top)
  }

  frame.resize(frameWidth, frameHeight)
  return frame
}

/**
 * Sets default layout properties for a frame
 */
function setDefaultLayout(frame: any, boundingBox?: { left: number, top: number, right: number, bottom: number }): void {
  const width = frame.width
  const height = frame.height

  // Set layout mode based on dimensions
  frame.layoutMode = width <= height ? "VERTICAL" : "HORIZONTAL"
  frame.layoutSizingHorizontal = "FIXED"
  frame.layoutSizingVertical = "FIXED"
  frame.resize(width, height)

  // Set padding if bounding box is provided
  if (boundingBox) {
    const frameWidth = frame.width
    const frameHeight = frame.height

    if (boundingBox.left >= 0) {
      frame.paddingLeft = boundingBox.left
    }
    else {
      logger.log("paddingLeftCandidate is negative", boundingBox.left)
    }

    const paddingRightCandidate = frameWidth - boundingBox.right
    if (paddingRightCandidate >= 0) {
      frame.paddingRight = paddingRightCandidate
    }
    else {
      logger.log("paddingRightCandidate is negative", paddingRightCandidate)
    }

    if (boundingBox.top >= 0) {
      frame.paddingTop = boundingBox.top
    }
    else {
      logger.log("paddingTopCandidate is negative", boundingBox.top)
    }

    const paddingBottomCandidate = frameHeight - boundingBox.bottom
    if (paddingBottomCandidate >= 0) {
      frame.paddingBottom = paddingBottomCandidate
    }
    else {
      logger.log("paddingBottomCandidate is negative", boundingBox.top)
    }
  }
}

/**
 * Gets a signature for a node based on its type and properties
 */
function getNodeSignature(node: any): string {
  if (node.type === "FRAME" || node.type === "GROUP" || node.type === "INSTANCE" || node.type === "COMPONENT") {
    return node.children.length === 0
      ? "FRAME"
      : joinWithCommas(node.children.map((child: any) => getNodeSignature(child)))
  }

  if (node.type === "TEXT") {
    return [typeof node.fontSize === "number" ? node.fontSize : "mixed", typeof node.fontName === "object" && "family" in node.fontName ? node.fontName.family : "mixed"]
      .join(",")
  }

  return node.type
}

/**
 * Checks if a node should use auto-layout
 */
function shouldUseAutoLayout(node: any): boolean {
  return (node.type === "FRAME" || node.type === "COMPONENT")
    && (node.layoutMode === "NONE" || node.layoutMode === undefined)
}

/**
 * Main layout function - processes vertices and creates layout structure
 */
export function processVerticesLayout(
  nodes: any[],
  pluginApi: any,
  nodeManager: any,
  frameContext: FrameCreationContext,
  options?: any,
  containerDimensions?: { width: number, height: number },
  isRecursiveCall: boolean = false,
): any {
  // Filter valid nodes
  const validNodes = nodes.filter(node =>
    !(!node || (node.parent && nodes.includes(node.parent)))
    && node.type !== "CONNECTOR"
    && (!("visible" in node) || !!node.visible),
  )

  if (validNodes.length === 0)
    throw new Error("no nodes to stack!")

  const parent = validNodes[0].parent
  let insertIndex = Infinity
  const siblingIds = parent?.children.map((child: any) => child.id) || []

  // Find the earliest insert index
  for (let i = 0; i < validNodes.length; i++) {
    const index = siblingIds.indexOf(validNodes[i].id)
    if (index < insertIndex) {
      insertIndex = index
      if (index === 0)
        break
    }
  }

  // Convert nodes to vertices
  let vertices: Vertex[] = validNodes.map((node) => {
    const boundingBox = calculateTransformedBoundingBox([node])
    return {
      type: "NODE",
      id: node.id,
      x: boundingBox.left,
      y: boundingBox.top,
      width: boundingBox.right - boundingBox.left,
      height: boundingBox.bottom - boundingBox.top,
      node,
      signature: getNodeSignature(node),
    }
  })

  const containerBox = calculateTransformedBoundingBox(vertices)
  let containerWidth = validNodes.length === 1 ? validNodes[0].width : containerBox.right - containerBox.left
  let containerHeight = validNodes.length === 1 ? validNodes[0].height : containerBox.bottom - containerBox.top

  // Override dimensions if provided
  if (containerDimensions) {
    containerWidth = containerDimensions.width
    containerHeight = containerDimensions.height
  }

  // Apply segmentation strategy
  switch (aalSettingsConfig.PRE_SEGMENTATION_STRATEGY) {
    case "blobify": {
      let hasChanges = true
      let spacingThreshold = 12

      while (hasChanges && vertices.length > 1) {
        const blobGroups = (() => {
          const groups: Vertex[][] = []
          const processed = new Set<string>()
          const adjacencyMap = buildGraph(vertices)

          for (const vertex of vertices) {
            const addConnectedVertices = (startVertex: Vertex) => {
              if (!processed.has(startVertex.id)) {
                const connected: Vertex[] = []
                processed.add(startVertex.id)

                // Add connected vertices within spacing threshold
                const connectedEdges = (adjacencyMap.get(startVertex.id) || [])
                  .filter(edge => edge.spacing <= spacingThreshold)

                for (const edge of connectedEdges) {
                  const opposite = getOppositeVertex(edge, startVertex)
                  connected.push(opposite)
                }

                connected.unshift(startVertex)
                groups.push(connected)
              }
            }

            if (processed.has(vertex.id))
              continue
            const connected: Vertex[] = []
            addConnectedVertices(vertex)
            groups.push(connected)
          }

          return groups
        })()

        const originalLength = vertices.length

        // Process each blob group
        for (const group of blobGroups) {
          const rowGroups = groupVerticesIntoRows(group, spacingThreshold)
          for (const rowGroup of rowGroups) {
            vertices = processVertices(vertices, rowGroup, containerDimensions)
          }
        }

        // Check if changes occurred or if we should continue with increased threshold
        hasChanges = vertices.length !== originalLength
        if (!hasChanges && spacingThreshold < 80) {
          spacingThreshold += 8
          hasChanges = true
        }
      }
      break
    }

    case "rowify":
      // Group vertices into rows and process
      for (const rowGroup of groupVerticesIntoRows(vertices)) {
        vertices = processVertices(vertices, rowGroup, containerDimensions)
      }
  }

  // Final processing if we still have multiple vertices
  if (vertices.length > 1) {
    vertices = processVertices(vertices, vertices, containerDimensions)
  }

  // Handle case where we couldn't resolve to a single vertex
  if (vertices.length !== 1) {
    const error = new GraphResolutionError(`graph could not resolve: ${vertices.length} vertices`)
    logger.log(error)

    vertices.forEach((vertex, index) => {
      logger.log(`${index}: ${getVertexDescription(vertex, 0)}\n\n`)
    })

    return error
  }

  // Flatten nested lists
  const flattenNestedLists = (vertex: Vertex): Vertex => {
    if (vertex.type !== "LIST" || vertex.wrap)
      return vertex

    const flattenedChildren: Vertex[] = []

    for (const child of vertex.children || []) {
      const processedChild = flattenNestedLists(child)

      if (processedChild.type === "LIST"
        && !processedChild.wrap
        && processedChild.wrap === vertex.wrap
        && processedChild.axis === vertex.axis
        && isApproximatelyEqual(processedChild.spacing!, vertex.spacing!)
        && isApproximatelyEqual(processedChild.counterSpacing!, vertex.counterSpacing!)) {
        flattenedChildren.push(...(processedChild.children || []))
        continue
      }

      flattenedChildren.push(processedChild)
    }

    return {
      ...vertex,
      children: flattenedChildren,
    }
  }

  const flattenedVertex = flattenNestedLists(vertices[0])

  // Convert vertex structure to actual nodes
  const convertVertexToNode = (vertex: Vertex, api: any, manager: any, context: FrameCreationContext, opts: any): any => {
    // Handle leaf nodes
    if (vertex.type !== "LIST" && vertex.type !== "GROUP" && vertex.type !== "FRAME") {
      return vertex.node
    }

    // Handle frames and groups
    if (vertex.type === "FRAME" || vertex.type === "GROUP") {
      const frame = api.createFrame()
      frame.fills = []
      frame.x = vertex.x
      frame.y = vertex.y
      frame.name = context.value === 1 ? "Frame" : `Frame ${context.value}`
      context.value += 1
      frame.resize(vertex.width, vertex.height)

      // Process children
      const processedChildren = (vertex.absolutePositionedChildren || [])
        .concat(vertex.children || [])
        .map(child => convertVertexToNode(child, api, manager, context, opts))

      processedChildren.forEach((child: any) => {
        frame.appendChild(child)
        child.x = child.x - vertex.x
        child.y = child.y - vertex.y
      })

      // Handle absolute positioned children
      if (!vertex.absolutePositionedChildren || vertex.absolutePositionedChildren.length === 0) {
        const childPositions: { [key: string]: { x: number, y: number } } = {}

        frame.children.forEach((child: any) => {
          childPositions[child.id] = {
            x: child.x,
            y: child.y,
          }
        })

        setDefaultLayout(frame)

        frame.children.forEach((child: any) => {
          if ("layoutPositioning" in child) {
            child.layoutPositioning = "ABSOLUTE"
            child.x = childPositions[child.id].x ?? 0
            child.y = childPositions[child.id].y ?? 0

            if ("layoutPositioning" in child && "constraints" in child) {
              child.constraints = {
                horizontal: "MAX",
                vertical: "MIN",
              }
            }
          }
        })
      }
      else {
        const processedFrame = processFrameWithChildren(
          frame,
          vertex.absolutePositionedChildren,
          api,
          manager,
          context,
          opts,
        )

        // Handle absolute children
        if (processedFrame.type === "FRAME" && vertex.absolutePositionedChildren) {
          vertex.absolutePositionedChildren.forEach((absoluteChild: Vertex) => {
            const convertedChild = convertVertexToNode(absoluteChild, api, manager, context, opts)
            if (!convertedChild.removed) {
              processedFrame.insertChild(0, convertedChild)
              if (processedFrame.layoutMode !== "NONE") {
                convertedChild.layoutPositioning = "ABSOLUTE"
              }
              convertedChild.x = 0
              convertedChild.y = 0
            }
          })
        }
      }

      manager.setNodeForVertexId(vertex.id, frame)
      return frame
    }

    // Process list children
    for (const child of vertex.children || []) {
      convertVertexToNode(child, api, manager, context, opts)
    }

    // Determine alignment and create frame
    const alignmentBox = calculateTransformedBoundingBox([vertex])
    const dominantAlignment = determineDominantAlignment(
      vertex.children || [],
      alignmentBox,
      vertex.axis!,
    )

    let alignmentType = "MIN"
    alignmentType = mapAlignmentToConstraintType(dominantAlignment)

    const frame = api.createFrame()
    frame.x = vertex.x
    frame.y = vertex.y
    frame.name = context.value === 1 ? "Frame" : `Frame ${context.value}`
    context.value += 1
    frame.layoutMode = vertex.axis === "X" ? "HORIZONTAL" : "VERTICAL"

    if (vertex.wrap) {
      frame.layoutWrap = vertex.wrap ? "WRAP" : "NO_WRAP"
      frame.counterAxisSpacing = vertex.counterSpacing
    }

    frame.setSharedPluginData("AAL", "was_auto_auto_layouted", "true")
    frame.itemSpacing = isNaN(vertex.spacing!) ? 0 : vertex.spacing!
    frame.resize(isNaN(vertex.width) ? frame.width : vertex.width, isNaN(vertex.height) ? frame.height : vertex.height)
    frame.layoutSizingHorizontal = "FIXED"
    frame.layoutSizingVertical = "FIXED"
    frame.fills = []
    frame.clipsContent = false

    // Add children to frame
    vertex.children?.forEach((child: Vertex) => {
      if (child.type === "LIST" || child.type === "GROUP" || child.type === "FRAME") {
        const node = manager.getNodeForVertexId(child.id)
        if (node) {
          frame.appendChild(node)
        }
        else {
          logger.log("Could not find vertex in store", vertex.id)
        }
      }
      else {
        frame.appendChild(child.node)
        const node = child.node

        if ("layoutSizingVertical" in node
          && (node.layoutSizingVertical === "FILL" || node.layoutSizingHorizontal === "FILL")
          && (isApproximatelyEqual(node.height, child.height, 0.1) || isApproximatelyEqual(node.width, child.width, 0.1))
          && child.height > 0.001 && child.width > 0.001) {
          node.resize(
            isNaN(child.width) || child.width < 0.001 ? node.width : child.width,
            isNaN(child.height) || child.height < 0.001 ? node.height : child.height,
          )
        }
      }
    })

    frame.primaryAxisAlignItems = "MIN"
    if (alignmentType) {
      frame.counterAxisAlignItems = alignmentType
    }

    // Special spacing adjustments for horizontal layouts
    if (frame.layoutMode === "HORIZONTAL") {
      if (frame.children.length === 2
        && (frame.itemSpacing > 0.2 * frame.width
          || (frame.itemSpacing > 0.1 * frame.width && frame.children[0].width > 0.7 * frame.width))) {
        frame.primaryAxisAlignItems = "SPACE_BETWEEN"
      }

      if (frame.children.length === 3
        && (frame.itemSpacing > 0.15 * frame.width
          || (frame.itemSpacing > 0.05 * frame.width && frame.children[1].width > 0.5 * frame.width))) {
        frame.primaryAxisAlignItems = "SPACE_BETWEEN"
      }
    }

    manager.setNodeForVertexId(vertex.id, frame)
    return frame
  }

  const resultNode = convertVertexToNode(flattenedVertex, pluginApi, nodeManager, frameContext, options)

  // Insert result into parent if it exists
  if (parent?.insertChild) {
    parent.insertChild(insertIndex, resultNode)
  }

  // Handle recursive processing
  if (flattenedVertex.type === "NODE" && shouldUseAutoLayout(flattenedVertex.node) && !options?.noRecurse) {
    return processFrameWithChildren(
      flattenedVertex.node,
      [],
      pluginApi,
      nodeManager,
      frameContext,
      options,
    )
  }

  if (flattenedVertex.type === "LIST") {
    const processChildren = (vertex: Vertex) => {
      if (vertex.type === "NODE" && shouldUseAutoLayout(vertex.node)) {
        processFrameWithChildren(
          vertex.node,
          [],
          pluginApi,
          nodeManager,
          frameContext,
          options,
        )
      }
      else if ("children" in vertex && vertex.children) {
        vertex.children.forEach(processChildren)
      }
    }

    if (!options?.noRecurse) {
      flattenedVertex.children?.forEach(processChildren)
    }

    // Position result if it's a top-level element
    if ((resultNode.parent?.type === "PAGE" || isRecursiveCall) && containerBox) {
      resultNode.x = containerBox.left
      resultNode.y = containerBox.top
    }

    // Resize if dimensions don't match
    if (!isApproximatelyEqual(containerWidth, resultNode.width)) {
      resultNode.resize(containerWidth, resultNode.height)
    }

    if (!isApproximatelyEqual(containerHeight, resultNode.height)) {
      resultNode.resize(resultNode.width, containerHeight)
    }
  }

  return resultNode
}

/**
 * Gets a description of a vertex for debugging
 */
function getVertexDescription(vertex: Vertex, indentLevel: number = 0): string {
  if (vertex.type === "NODE") {
    return vertex.node?.name || "Unnamed Node"
  }

  if (vertex.type === "LIST" || vertex.type === "GROUP") {
    return `\n${" ".repeat(indentLevel)}${vertex.type}: ${(vertex.children || [])
      .map(child => getVertexDescription(child, indentLevel + 2))
      .join(", ")}`
  }

  return ""
}

// ==================== EXPORTS ====================

export const Oc = VertexNodeMap
export const aJ = processVerticesLayout
export const Rm = logVerMessage
