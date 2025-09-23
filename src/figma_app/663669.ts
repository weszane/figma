import type { SceneNode } from '../905/499575'
import type { ViewportInfo } from '../figma_app/62612'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { getSingletonSceneGraph } from '../905/700578'
import { getViewportInfo, getVisibleArea } from '../figma_app/62612'

export const FRAME_SELECTION_VERSION = '1.2'

interface FrameSelectionConfig {
  noPanningZoomingMs: number
  screenAreaThresholdPercentage: number
  frameVisiblePercentage: number
  frameNotVisiblePercentage: number
  largestFrameWeight: number
  mostCentralFrameWeight: number
  maxDepth: number
}

const DEFAULT_FRAME_SELECTION_CONFIG: FrameSelectionConfig = {
  noPanningZoomingMs: 300,
  screenAreaThresholdPercentage: 0.12,
  frameVisiblePercentage: 0.9,
  frameNotVisiblePercentage: 0.25,
  largestFrameWeight: 0.3,
  mostCentralFrameWeight: 0.7,
  maxDepth: 6,
}

/**
 * Custom hook to get the best frame based on visibility and position
 * @param viewportInfo - Current viewport information
 * @param isPanningOrZooming - Whether user is currently panning or zooming
 * @param configOverride - Optional configuration overrides
 * @returns The GUID of the best frame or undefined
 */
export function useBestFrame(
  viewportInfo: ViewportInfo,
  isPanningOrZooming: boolean,
  configOverride?: Partial<FrameSelectionConfig>,
): string | undefined {
  const config = getFrameSelectionConfig(configOverride)
  const [bestFrameGuid, setBestFrameGuid] = useState<string | undefined>(undefined)
  const { viewportIsStable } = useViewportStability(isPanningOrZooming, config)

  useEffect(() => {
    if (viewportIsStable && !isPanningOrZooming) {
      setBestFrameGuid(getBestFrame(viewportInfo, config))
    }
  }, [viewportInfo, isPanningOrZooming, viewportIsStable, config])

  return bestFrameGuid
}

/**
 * Determines the best frame based on visibility and position heuristics
 * @param viewportInfo - Current viewport information
 * @param config - Configuration for frame selection
 * @returns The GUID of the best frame or undefined
 */
export function getBestFrame(
  viewportInfo: ViewportInfo,
  config: FrameSelectionConfig,
): string | undefined {
  const sceneGraph = getSingletonSceneGraph()
  const currentPage = sceneGraph.getCurrentPage()

  if (!currentPage) {
    return undefined
  }

  // Try to find a single dominant frame first
  const dominantFrame: any = findDominantFrame(currentPage, viewportInfo, config)
  if (dominantFrame) {
    return dominantFrame.guid
  }

  // Find all visible frames
  const visibleFrames = findAllVisibleFrames(currentPage, viewportInfo, config)
  if (!visibleFrames.length) {
    return undefined
  }

  // Filter frames that are mostly visible
  let candidateFrames = visibleFrames.filter(frame =>
    isFrameMostlyVisible(frame, viewportInfo, config.frameVisiblePercentage),
  )

  // If no mostly visible frames, consider all visible frames
  if (candidateFrames.length === 0) {
    candidateFrames.push(...visibleFrames)
  }

  // Select the best frame based on size and centrality
  const bestFrame: any = selectBestFrame(candidateFrames, viewportInfo, config)
  if (bestFrame) {
    // Walk up the parent chain to find the top-level frame
    return findTopLevelFrame(bestFrame, viewportInfo, config).guid
  }
}

/**
 * Gets the frame selection configuration with defaults
 * @param overrides - Optional configuration overrides
 * @returns Complete configuration object
 */
export function getFrameSelectionConfig(overrides: Partial<FrameSelectionConfig> = {}): FrameSelectionConfig {
  return {
    ...DEFAULT_FRAME_SELECTION_CONFIG,
    ...overrides,
  }
}

/**
 * Hook to determine viewport stability based on debouncing
 * @param isPanningOrZooming - Whether user is currently panning or zooming
 * @param config - Configuration for frame selection
 * @returns Object with debounced viewport info and stability status
 */
export function useViewportStability(
  isPanningOrZooming: boolean,
  config: FrameSelectionConfig,
) {
  const effectiveConfig = getFrameSelectionConfig(config)
  const viewportInfo = getViewportInfo({
    subscribeToUpdates_expensive: !isPanningOrZooming,
  })

  const [debouncedViewportInfo, { isPending }] = useDebounce(
    viewportInfo,
    effectiveConfig.noPanningZoomingMs,
    {
      equalityFn: (prev, next) => (
        prev.x === next.x
        && prev.y === next.y
        && prev.width === next.width
        && prev.height === next.height
        && prev.offsetX === next.offsetX
        && prev.offsetY === next.offsetY
        && prev.zoomScale === next.zoomScale
      ),
    },
  )

  return {
    debouncedViewportInfo,
    viewportIsStable: !isPending(),
  }
}

/**
 * Checks if a frame is mostly visible in the viewport
 * @param frame - The frame to check
 * @param viewportInfo - Current viewport information
 * @param threshold - Visibility threshold percentage
 * @returns Whether the frame is mostly visible
 */
export function isFrameMostlyVisible(
  frame: FrameNode,
  viewportInfo: ViewportInfo,
  threshold: number,
): boolean {
  return getFrameVisibilityPercentage(frame, viewportInfo) >= threshold
}

/**
 * Calculates what percentage of a frame is visible in the viewport
 * @param frame - The frame to check
 * @param viewportInfo - Current viewport information
 * @returns Percentage of frame that is visible (0-1)
 */
function getFrameVisibilityPercentage(
  frame: FrameNode,
  viewportInfo: ViewportInfo,
): number {
  return getVisibleAreaOfFrame(frame, viewportInfo)
    / (frame.absoluteBoundingBox.width * frame.absoluteBoundingBox.height)
}

/**
 * Calculates the visible area of a frame in the viewport
 * @param frame - The frame to check
 * @param viewportInfo - Current viewport information
 * @returns Visible area in pixels
 */
function getVisibleAreaOfFrame(
  frame: any,
  viewportInfo: ViewportInfo,
): number {
  const { offsetX, offsetY, zoomScale, width, height } = viewportInfo

  const visibleLeft = Math.max(
    frame.absoluteBoundingBox.x,
    offsetX - width / 2 / zoomScale,
  )

  const visibleRight = Math.min(
    frame.absoluteBoundingBox.x + frame.absoluteBoundingBox.w,
    offsetX + width / 2 / zoomScale,
  )

  const visibleTop = Math.max(
    frame.absoluteBoundingBox.y,
    offsetY - height / 2 / zoomScale,
  )

  const visibleBottom = Math.min(
    frame.absoluteBoundingBox.y + frame.absoluteBoundingBox.h,
    offsetY + height / 2 / zoomScale,
  )

  const visibleWidth = Math.max(0, visibleRight - visibleLeft)
  const visibleHeight = Math.max(0, visibleBottom - visibleTop)

  return visibleWidth * visibleHeight
}

/**
 * Finds a dominant frame when only one frame is mostly visible
 * @param page - Current page node
 * @param viewportInfo - Current viewport information
 * @param config - Configuration for frame selection
 * @returns The dominant frame or undefined
 */
function findDominantFrame(
  page: SceneNode,
  viewportInfo: ViewportInfo,
  config: FrameSelectionConfig,
): FrameNode | undefined {
  // Get all top-level frames and sections
  const topLevelFrames: FrameNode[] = []
  for (const child of page.childrenNodes) {
    if (child.type === 'FRAME') {
      topLevelFrames.push(child as FrameNode)
    }
    else if (child.type === 'SECTION') {
      // For sections, include their frame children
      const section = child
      for (const sectionChild of section.childrenNodes) {
        if (sectionChild.type === 'FRAME') {
          topLevelFrames.push(sectionChild as FrameNode)
        }
      }
    }
  }

  // Categorize frames by visibility
  const visibleFrames: FrameNode[] = []
  const notVisibleFrames: FrameNode[] = []

  for (const frame of topLevelFrames) {
    const visibility = getFrameVisibilityPercentage(frame, viewportInfo)
    if (visibility >= config.frameVisiblePercentage) {
      visibleFrames.push(frame)
    }
    else if (visibility < config.frameNotVisiblePercentage) {
      notVisibleFrames.push(frame)
    }
  }

  // If exactly one frame is visible and all others are not visible, return the visible one
  if (visibleFrames.length === 1 && notVisibleFrames.length === topLevelFrames.length - 1) {
    return visibleFrames[0]
  }

  return undefined
}

/**
 * Finds all visible frames in the scene graph up to a certain depth
 * @param root - Root node to search from
 * @param viewportInfo - Current viewport information
 * @param config - Configuration for frame selection
 * @returns Array of visible frames
 */
function findAllVisibleFrames(
  root: SceneNode,
  viewportInfo: ViewportInfo,
  config: FrameSelectionConfig,
): FrameNode[] {
  const { width, height } = getVisibleArea(viewportInfo) as Rect
  const totalVisibleArea = width * height
  const visibleFrames: FrameNode[] = []

  // BFS traversal with depth limit
  const queue: Array<{ node: SceneNode, depth: number }> = [
    { node: root, depth: 0 },
  ]

  while (queue.length > 0) {
    const { node, depth } = queue.pop()!

    // Skip if max depth reached or node is not visible
    if (
      depth >= config.maxDepth
      || !node.visible
      || node.isInternalOnlyNode
      || node.opacity <= 0
    ) {
      continue
    }

    // Check if node type is valid for processing
    const isValidNodeType = (
      node.type === 'CANVAS'
      || node.type === 'DOCUMENT'
      || node.type === 'FRAME'
      || node.type === 'GROUP'
      || node.type === 'SECTION'
      || node.type === 'SLIDE_GRID'
      || node.type === 'SLIDE_ROW'
      || node.type === 'RESPONSIVE_SET'
      || node.type === 'SLIDE'
      || node.type === 'SECTION_OVERLAY'
    )

    // Check if node occupies enough screen area
    const hasSufficientArea = isValidNodeType
      && (getVisibleAreaOfFrame(node, viewportInfo) / totalVisibleArea)
      >= config.screenAreaThresholdPercentage

    if (hasSufficientArea) {
      // If it's a frame, add it to results
      if (node.type === 'FRAME') {
        visibleFrames.push(node as unknown as FrameNode)
      }

      // Add children to queue
      for (const child of node.childrenNodes) {
        queue.push({
          node: child,
          depth: depth + 1,
        })
      }
    }
  }

  return visibleFrames
}

/**
 * Selects the best frame from candidates based on size and centrality
 * @param frames - Candidate frames to evaluate
 * @param viewportInfo - Current viewport information
 * @param config - Configuration for frame selection
 * @returns The best frame or undefined
 */
function selectBestFrame(
  frames: FrameNode[],
  viewportInfo: ViewportInfo,
  config: FrameSelectionConfig,
): FrameNode | undefined {
  if (frames.length === 0) {
    return undefined
  }

  if (frames.length === 1) {
    return frames[0]
  }

  // Calculate distances from center for each frame
  const centerDistances = frames.map((frame) => {
    const { x, y, width, height } = getVisibleArea(viewportInfo) as Rect
    const viewportCenterX = x + width / 2
    const viewportCenterY = y + height / 2

    const frameCenterX = frame.absoluteBoundingBox.x + frame.absoluteBoundingBox.width / 2
    const frameCenterY = frame.absoluteBoundingBox.y + frame.absoluteBoundingBox.height / 2

    return Math.sqrt(
      (viewportCenterX - frameCenterX) ** 2
      + (viewportCenterY - frameCenterY) ** 2,
    )
  })

  // Calculate visible areas for each frame
  const visibleAreas = frames.map(frame =>
    getVisibleAreaOfFrame(frame, viewportInfo),
  )

  // Normalize values to 0-1 range
  const maxDistance = Math.max(...centerDistances)
  const maxArea = Math.max(...visibleAreas)

  const normalizedDistances = centerDistances.map(d => d / maxDistance)
  const normalizedAreas = visibleAreas.map(a => a / maxArea)

  // Calculate scores (higher is better)
  // Prefer larger frames that are closer to center
  const scores = normalizedDistances.map((distance, index) =>
    config.largestFrameWeight * normalizedAreas[index]
    - config.mostCentralFrameWeight * distance,
  )

  // Find frame with highest score
  const bestIndex = scores.indexOf(Math.max(...scores))
  return frames[bestIndex]
}

/**
 * Finds the top-level frame in a hierarchy
 * @param frame - Starting frame
 * @param viewportInfo - Current viewport information
 * @param config - Configuration for frame selection
 * @returns The top-level frame
 */
function findTopLevelFrame(
  frame: SceneNode,
  viewportInfo: ViewportInfo,
  config: FrameSelectionConfig,
) {
  let currentFrame = frame

  // Walk up the parent chain while parents are frames and mostly visible
  while (
    currentFrame.parentNode
    && currentFrame.parentNode.type === 'FRAME'
    && isFrameMostlyVisible(
      currentFrame.parentNode,
      viewportInfo,
      config.frameVisiblePercentage,
    )
  ) {
    currentFrame = currentFrame.parentNode
  }

  return currentFrame
}

export const JL = FRAME_SELECTION_VERSION
export const Mw = isFrameMostlyVisible
export const Z9 = getFrameSelectionConfig
export const fX = getBestFrame
export const pJ = useViewportStability
export const pW = useBestFrame
