import { f as _$$f } from '../905/70820'
import { getRandomString } from '../905/87821'
import { addDeviceInfoToTarget, getGpuDeviceInfo } from '../905/190247'
import { SlowFrameTracker } from '../905/200059'
import { trackEventAnalytics } from '../905/449184'
import { reactTimerGroup } from '../905/542194'
import { getFeatureFlags } from '../905/601108'
import { PerformanceLogger } from '../905/817498'
import { ActiveStateTracker, AnnotationVisibilityTracker, AvgViewportSharpnessTracker, ChatStateTracker, CursorReactionTracker, GridResizingTracker, MinViewportSharpnessTracker, MouseMoveTracker, MultiplayerPanZoomTracker, MultiplayerUserCountTracker, PanTracker, RenderTreeStalenessThresholdTracker, RenderTreeStaleTracker, SelectionChangeTracker, UserTypingTracker, ViewportCoverageTracker, ZoomScaleTracker } from '../905/967662'
import { atomStoreManager } from '../figma_app/27355'
import { isNotNullish } from '../figma_app/95419'
import { getInitialOptions } from '../figma_app/169182'
import { mapEditorTypeToProductType } from '../figma_app/314264'
import { fullscreenValue } from '../figma_app/455680'
import { flattenObjectToTarget } from '../figma_app/493477'
import { getImageManager } from '../figma_app/624361'
import { getStickyWidgetEventName, PerformanceTracker } from '../figma_app/725044'
import { AppStateTsApi, AutosaveHelpers, CoverageStatus, fullscreenOptimizationExposureLoggingBinding, FullscreenPerfMetrics, gpuMetricsLoggingBinding, perfTimerFrameManagerBindings } from '../figma_app/763686'

/**
 * Timer thresholds for reporting.
 * (T)
 */
const timerThresholds: Record<string, number> = {
  'frame.react-render': 0.1,
  'frame.scene-render': 0.2,
  'frame.scene-render.render-tree-generation': 0.2,
}

/**
 * Timer keys to include in reports.
 * (I)
 */
const timerKeys: string[] = [
  'react',
  'frame',
  'frame.react-render',
  'frame.scene-render',
  'frame.scene-render.render-tree-generation',
  'frame.style-updater',
  'frame.symbol-updater',
  'frame.trigger-action',
  'fullscreen-handle-event',
  'fullscreen-handle-event.trigger-action',
  'frame.comments-render',
]

/**
 * State variables for multiplayer and file info.
 */
let multiplayerUserCount = 1 // (S)
let ongoingSpotlight = false // (v)
let currentFileKey: string | null = null // (A)
let fileLoadedTime = 0 // (x)
let fileLoadedTimestamp: number | null = null // (N)
let reportCount = 0 // (C)
let lastReportTime = -Infinity // (w)
let lastReportDuration = 0 // (O)
let performanceTracker: PerformanceTracker | null = null // ($$R31)
let chatStateTracker: ChatStateTracker | null = null // ($$L32)
let cursorReactionTracker: CursorReactionTracker | null = null // (P)
let annotationVisibilityTracker: AnnotationVisibilityTracker | null = null // ($$D11)

/**
 * Event trackers.
 */
const independentLayerAnimationTracker = new ActiveStateTracker() // (k)
const nonIndependentLayerAnimationTracker = new ActiveStateTracker() // (M)
const independentLayerTracker = new ActiveStateTracker() // (F)
const independentLayerAddedTracker = new ActiveStateTracker() // (j)
const independentLayerRemovedTracker = new ActiveStateTracker() // (U)
const userTypingTracker = new UserTypingTracker() // (B)
const gridResizingTracker = new GridResizingTracker() // (G)

/**
 * Timer hit counts for reporting.
 * ($$V)
 */
const timerHitCounts: Record<string, number> = {}

/**
 * Console warning state for elapsed hits.
 * (H)
 */
let hasWarnedElapsedHits = false

/**
 * Set multiplayer info and update performance tracker.
 * ($$z22)
 */
export function setMultiplayerPerfInfo(userCount: number, spotlight: unknown) {
  multiplayerUserCount = userCount
  ongoingSpotlight = isNotNullish(spotlight)
  performanceTracker?.setMultiplayerPerfInfo({
    multiplayerUserCount,
    ongoingSpotlight,
  })
}

/**
 * Reset file info and stop recording.
 * ($$W16)
 */
export function resetFileInfo() {
  currentFileKey = null
  fileLoadedTimestamp = null
  performanceTracker?.stopRecordingAndLog('closing-file')
  performanceTracker?.setFileInfo(null, 'unknown')
}

/**
 * Set file info and start recording.
 * ($$K4)
 */
export function setFileInfo(fileKey: string, editorType: any) {
  if (performanceTracker) {
    performanceTracker.setFileInfo(fileKey, mapEditorTypeToProductType(editorType))
    performanceTracker.startRecording(true)
    getImageManager().setPendingImagesCallback(performanceTracker.pendingImagesChanged)
  }
  currentFileKey = fileKey
  fileLoadedTimestamp = performance.now()
  fileLoadedTime++
  const editingFile = getInitialOptions().editing_file
  if (fileLoadedTime === 1 && editingFile) {
    trackEventAnalytics('Cold Boot Document Load', {
      fileKey: currentFileKey,
      fileVersion: AutosaveHelpers?.currentFileVersion() || 0,
      loadedTime: fileLoadedTimestamp,
      fileNodeCount: FullscreenPerfMetrics?.getFileNodeCount() || 0,
      fileTeamId: editingFile.team_id,
      fileParentOrgId: getInitialOptions().org_id,
    })
  }
}

/**
 * Update file info with editor type.
 * ($$Y1)
 */
export function updateFileInfo(editorType: any) {
  performanceTracker?.setFileInfo(currentFileKey, mapEditorTypeToProductType(editorType))
}

/**
 * Stop recording and log before scene rebuild.
 * ($$$15)
 */
export function stopRecordingBeforeSceneRebuild() {
  performanceTracker?.stopRecordingAndLog('about-to-rebuild-scene')
}

/**
 * Start recording without resetting.
 * ($$X5)
 */
export function startRecording() {
  performanceTracker?.startRecording(false)
}

/**
 * Record single frame named event for tile rendering.
 * ($$q0)
 */
export function recordTileRenderingActive() {
  performanceTracker?.recordSingleFrameNamedEvent('tileRenderingActive')
}

/**
 * Record single frame named event for table creation.
 * ($$J20)
 */
export function recordCreateTableActive() {
  performanceTracker?.recordSingleFrameNamedEvent('createTableActive')
}

/**
 * Record single frame named event for editing table text.
 * ($$Z28)
 */
export function recordEditTableTextActive() {
  performanceTracker?.recordSingleFrameNamedEvent('editTableTextActive')
}

/**
 * Record single frame named event for reordering table span.
 * ($$Q8)
 */
export function recordReorderTableSpanActive() {
  performanceTracker?.recordSingleFrameNamedEvent('reorderTableSpanActive')
}

/**
 * Record single frame named event for connecting diagram shape.
 * ($$ee7)
 */
export function recordConnectDiagramShapeActive() {
  performanceTracker?.recordSingleFrameNamedEvent('connectDiagramShapeWithConnectorActive')
}

/**
 * Record single frame named event for accessibility DOM.
 * ($$et19)
 */
export function recordAccessibilityDomActive() {
  performanceTracker?.recordSingleFrameNamedEvent('accessibilityDomActive')
}

/**
 * Node drag start event.
 * ($$er26)
 */
export function onNodeDragStart() {
  performanceTracker?.onNodeDragStart()
}

/**
 * Node drag end event.
 * ($$en25)
 */
export function onNodeDragEnd() {
  performanceTracker?.onNodeDragEnd()
}

/**
 * Tile renderer changed event.
 * ($$ei10)
 */
export function onTileRendererChanged(e: any) {
  performanceTracker?.onTileRendererChanged(e)
}

/**
 * Context restored event.
 * ($$ea9)
 */
export function onContextRestored() {
  performanceTracker?.onContextRestored()
}

/**
 * Update max render layer count.
 * ($$es2)
 */
export function updateMaxRenderLayerCount(count: number) {
  performanceTracker?.updateMaxRenderLayerCount(count)
}

/**
 * Update max rendered tile bytes used.
 * ($$eo12)
 */
export function updateMaxRenderedTileBytesUsed(bytes: number) {
  performanceTracker?.updateMaxRenderedTileBytesUsed(bytes)
}

/**
 * Increment number of animations from C++.
 * ($$el29)
 */
export function incrementNumAnimationsFromCpp() {
  performanceTracker?.incrementNumAnimationsFromCpp()
}

/**
 * Increment number of animations from TypeScript.
 * ($$ed6)
 */
export function incrementNumAnimationsFromTs() {
  performanceTracker?.incrementNumAnimationsFromTs()
}

/**
 * Set independent layer animation active.
 * ($$ec27)
 */
export function setIndependentLayerAnimationActive() {
  independentLayerAnimationTracker.setIsActive()
}

/**
 * Set non-independent layer animation active.
 * ($$eu17)
 */
export function setNonIndependentLayerAnimationActive() {
  nonIndependentLayerAnimationTracker.setIsActive()
}

/**
 * Set independent layer active.
 * ($$ep23)
 */
export function setIndependentLayerActive() {
  independentLayerTracker.setIsActive()
}

/**
 * Set independent layer added.
 * ($$e_3)
 */
export function setIndependentLayerAdded() {
  independentLayerAddedTracker.setIsActive()
}

/**
 * Set independent layer removed.
 * ($$eh30)
 */
export function setIndependentLayerRemoved() {
  independentLayerRemovedTracker.setIsActive()
}

/**
 * Record single frame named event for sticky creation.
 * ($$em13)
 */
export function recordCreateStickyActive() {
  performanceTracker?.recordSingleFrameNamedEvent('createStickyActive')
}

/**
 * Record single frame named event for section click.
 * ($$eg24)
 */
export function recordDifferentSectionClicked() {
  performanceTracker?.recordSingleFrameNamedEvent('differentSectionClicked')
}

/**
 * Record single frame named event for sticky widget.
 * ($$ef21)
 */
export function recordStickyWidgetEvent(e: any) {
  performanceTracker?.recordSingleFrameNamedEvent(getStickyWidgetEventName(e))
}

/**
 * Modifier keys for interactions.
 * (eE)
 */
const modifierKeys = ['ALT', 'META', 'SHIFT', 'CONTROL', 'RIGHT_ALT']

/**
 * Build analytics payload for slow interactions.
 * (ey)
 */
function buildSlowInteractionPayload(e: {
  fileKey: string
  fileNodeCount: number
  multiplayerUserCount: number
  ongoingSpotlight: boolean
  recentInteractions: any[]
  secondsSinceLoaded: number
  version: number
  randomID: string
  gpuDeviceInfo?: any
  nodeTypeHistogram?: any
}) {
  const {
    fileKey,
    fileNodeCount,
    multiplayerUserCount,
    ongoingSpotlight,
    recentInteractions,
    secondsSinceLoaded,
    version,
    randomID,
  } = e
  const payload: Record<string, any> = {
    fileKey,
    fileNodeCount,
    multiplayerUserCount,
    ongoingSpotlight,
    secondsSinceLoaded,
    version,
    randomID,
    reportCount,
  }
  for (let i = 0; i < recentInteractions.length; i++) {
    payload[`recentInteractions.${i}`] = JSON.stringify(recentInteractions[i])
  }
  addDeviceInfoToTarget(e.gpuDeviceInfo, payload)
  flattenObjectToTarget(e.nodeTypeHistogram, payload, 'nodeTypeHistogram')
  return payload
}

/**
 * Track slow editor interaction event.
 * (eb)
 */
function trackSlowEditorInteraction(e: { duration: number }) {
  trackEventAnalytics('Slow Editor Interaction', e)
  lastReportTime = performance.now()
  lastReportDuration = e.duration
}

/**
 * Report fullscreen performance metrics.
 * ($$eI18)
 */
export function reportFullscreenPerfMetrics() {
  if (!fullscreenValue?.isReady())
    return

  const elapsedTimes: Record<string, number> = {}
  const timerReport = reactTimerGroup.report()
  let totalElapsed = 0

  // Collect elapsed times for timers
  for (const timer of timerReport) {
    (function collectElapsedTimes(t, prefix = '') {
      const key = prefix.length > 0 ? `${prefix}.${t.name}` : t.name
      const prevHitCount = timerHitCounts[key] || t.hitCount
      const newHits = t.hitCount - prevHitCount
      let hits = newHits
      if (hits > t.elapsedTimes.length) {
        if (!hasWarnedElapsedHits) {
          console.warn(`Too many elapsed hits of ${key} since last report`)
          hasWarnedElapsedHits = true
        }
        hits = t.elapsedTimes.length
      }
      let sum = 0
      const len = t.elapsedTimes.length
      for (let i = len - hits; i < len; i++) sum += t.elapsedTimes[i]
      elapsedTimes[key] = sum
      timerHitCounts[key] = t.hitCount
      for (const child of t.children) collectElapsedTimes(child, key)
    })(timer)
    totalElapsed += elapsedTimes[timer.name]
  }

  // Only report if total elapsed time is significant
  if (totalElapsed / 1000 < 0.2)
    return

  // Build report payload
  let fileInfo: any, slowInteractions: any[]
  if (currentFileKey === null || fileLoadedTimestamp === null) {
    fileInfo = null
    slowInteractions = []
  }
  else if (FullscreenPerfMetrics) {
    fileInfo = {
      gpuDeviceInfo: getGpuDeviceInfo(),
      fileKey: currentFileKey,
      fileNodeCount: FullscreenPerfMetrics.getFileNodeCount(),
      multiplayerUserCount,
      ongoingSpotlight,
      nodeTypeHistogram: FullscreenPerfMetrics.getNodeTypeHistogram(),
      recentInteractions: FullscreenPerfMetrics.getRecentInteractions(),
      secondsSinceLoaded: (performance.now() - fileLoadedTimestamp) / 1000,
      version: 1,
      randomID: getRandomString(),
      reportCount,
    }
    slowInteractions = FullscreenPerfMetrics.getSlowInteractions()
  }
  else {
    fileInfo = {
      gpuDeviceInfo: getGpuDeviceInfo(),
      fileKey: currentFileKey,
      fileNodeCount: 0,
      multiplayerUserCount,
      ongoingSpotlight,
      nodeTypeHistogram: {},
      recentInteractions: [],
      secondsSinceLoaded: (performance.now() - fileLoadedTimestamp) / 1000,
      version: 1,
      randomID: getRandomString(),
      reportCount,
    }
    slowInteractions = []
  }
  if (fileInfo == null)
    return

  // Build timer summary
  const timerSummary: Record<string, number> = {}
  for (const key in elapsedTimes) {
    if (timerKeys.includes(key)) {
      timerSummary[key] = elapsedTimes[key] / 1000
    }
  }

  // Build interaction events
  const events: any[] = slowInteractions.map((interactionObj) => {
    const interaction = interactionObj.interaction
    const event: Record<string, any> = {
      kind: 'interaction',
      type: interaction.type,
      subtype: interaction.subtype,
      frame: interactionObj.frame,
      collapsed: false,
      duration: interactionObj.duration,
      ...buildSlowInteractionPayload(fileInfo),
    }
    modifierKeys.forEach(key => (event[`modifier.${key}`] = null))
    if (interaction.type === 'MOUSE') {
      event.collapsed = interaction.collapsed
      modifierKeys.forEach((key) => {
        event[`modifier.${key}`] = interaction.modifiers.includes(key)
      })
    }
    flattenObjectToTarget(timerSummary, event, 'timer')
    return event
  })

  // Add timer events exceeding thresholds
  for (const key in elapsedTimes) {
    const duration = elapsedTimes[key] / 1000
    const threshold = timerThresholds[key]
    if (typeof threshold === 'number' && duration >= threshold) {
      const event: Record<string, any> = {
        kind: 'timer',
        type: key,
        subtype: null,
        frame: null,
        collapsed: false,
        duration,
        ...buildSlowInteractionPayload(fileInfo),
      }
      flattenObjectToTarget(timerSummary, event, 'timer')
      modifierKeys.forEach(k => (event[`modifier.${k}`] = null))
      events.push(event)
    }
  }

  // If no events, skip reporting
  if (events.length === 0)
    return

  // Cooldown logic
  const cooldownMessages: string[] = []
  let filteredEvents = events
  const cooldown = 60 - (performance.now() - lastReportTime) / 1000
  filteredEvents = filteredEvents.filter(
      e => cooldown <= 0 || e.duration >= 2 * lastReportDuration,
    )
  if (
    filteredEvents.length === 0
  ) {
    cooldownMessages.push(
      `we're in the report cooldown period (${cooldown}s to go) and no reports were long enough to override it (the last report duration was ${lastReportDuration}s)`,
    )
  }
  if (cooldown > 0 && filteredEvents.length) {
    // Still in cooldown, but some events qualify
  }
  if (fileLoadedTimestamp === null)
    return
  const docCooldown = 60 - (performance.now() - fileLoadedTimestamp) / 1000
  if (docCooldown > 0) {
    cooldownMessages.push(
      `we're in the document loading cooldown period (${docCooldown}s to go)`,
    )
  }

  if (cooldownMessages.length > 0) {
    // Only log cooldown messages
    function joinMessages(msgs: string[]): string {
      if (msgs.length === 1)
        return msgs[0]
      if (msgs.length === 2)
        return `${msgs[0]} and ${msgs[1]}`
      let joined = msgs.slice(0, msgs.length - 1).join(', ')
      joined += ', and '
      return (joined += msgs[msgs.length - 1])
    }
    joinMessages(cooldownMessages)
  }
  else {
    // Sort and report events
    filteredEvents = filteredEvents.sort((a, b) => a.duration - b.duration)
    filteredEvents.forEach(trackSlowEditorInteraction)
    reportCount++
  }

  // Clear metrics after reporting
  FullscreenPerfMetrics?.clearNodeTypeHistogram()
  FullscreenPerfMetrics?.clearSlowInteractions()
}

/**
 * Calculate frame distribution for performance tracker.
 * (eS)
 */
function calculateFrameDistribution(e: { path: string[], elapsedTime: number }[]) {
  let total = 0
  let frameTime = 0
  const result: typeof e = []
  for (const item of e) {
    if (item.path.length === 1 && item.path[0] === 'frame') {
      frameTime = item.elapsedTime
      result.push(item)
    }
    else if (item.path.length > 1 && item.path[0] === 'frame') {
      total += item.elapsedTime
      result.push(item)
    }
    else if (item.path.length === 1) {
      result.push(item)
    }
  }
  if (total > 0) {
    const unaccounted = frameTime - total
    result.push({
      path: ['frame', 'unaccounted-time'],
      elapsedTime: unaccounted,
    })
  }
  return result
}

/**
 * Initialize performance tracker and event trackers.
 * ($$ev14)
 */
export function setupPerformanceTracker() {
  if (!performanceTracker && getFeatureFlags().frame_distribution_tracker_edit) {
    const optimizationExposureCallback = (e: Record<string, any>) => {
      const batchFields
        = fullscreenOptimizationExposureLoggingBinding?.getAndClearHistogramBatchFields()
      if (!batchFields || batchFields.size === 0)
        return
      const exposures = new Map<string, boolean>()
      batchFields.forEach((value, key) => {
        exposures.set(key, value > 0)
      })
      e.optimizationExposures = JSON.stringify(Object.fromEntries(exposures))
    }

    performanceTracker = new PerformanceTracker(
      'editor_frame_distributions',
      calculateFrameDistribution,
      2,
      true,
      new PerformanceLogger(),
      optimizationExposureCallback,
      false,
      (e, previous = false) => {
        if (fullscreenOptimizationExposureLoggingBinding) {
          const exposures = new Map<string, boolean>()
          fullscreenOptimizationExposureLoggingBinding
            .getAndClearSlowFrameTrackerFields()
            .forEach((value, key) => {
              exposures.set(key, value > 0)
            })
          e[SlowFrameTracker.optimizationExposuresKey] = JSON.stringify(
            Object.fromEntries(exposures),
          )
        }
        if (gpuMetricsLoggingBinding) {
          e[SlowFrameTracker.gpuMetricsCurrentFrameKey]
            = gpuMetricsLoggingBinding.getFullscreenCurrentFrameGpuMetricsJSON().toString()
        }
        if (perfTimerFrameManagerBindings) {
          e[SlowFrameTracker.cpuTimerTreeCurrentFrameKey]
            = perfTimerFrameManagerBindings.getCurrentFrameCpuTimerTreeJSON().toString()
        }
        if (previous) {
          if (gpuMetricsLoggingBinding) {
            e[SlowFrameTracker.gpuMetricsPreviousFrameKey]
              = gpuMetricsLoggingBinding.getFullscreenPreviousFrameGpuMetricsJSON().toString()
          }
          if (perfTimerFrameManagerBindings) {
            e[SlowFrameTracker.cpuTimerTreePreviousFrameKey]
              = perfTimerFrameManagerBindings.getPreviousFrameCpuTimerTreeJSON().toString()
          }
        }
        const activeAnimations
          = AppStateTsApi?.activeRunningAnimations() || []
        e[SlowFrameTracker.activeAnimationsKey] = activeAnimations
        const devAnnotationsVisible = atomStoreManager.get(_$$f)
        if (devAnnotationsVisible > 0) {
          e[SlowFrameTracker.numberOfDevAnnotationsVisibleKey] = devAnnotationsVisible
        }
      },
      (e) => {
        fullscreenOptimizationExposureLoggingBinding?.clearSlowFrameTrackerFields()
        gpuMetricsLoggingBinding?.nextFrame(e)
        perfTimerFrameManagerBindings?.nextFrame(e)
      },
    )

    // Add event trackers
    performanceTracker.addEventTracker('selectionChanged', new SelectionChangeTracker())
    performanceTracker.addEventTracker('zoomActive', new ZoomScaleTracker())
    performanceTracker.addEventTracker('panActive', new PanTracker())
    performanceTracker.addEventTracker(
      'viewportHasGaps',
      new ViewportCoverageTracker(CoverageStatus.DEFINITELY_COVERED_ONLY),
    )
    performanceTracker.addEventTracker(
      'viewportIncludingOutdatedHasGaps',
      new ViewportCoverageTracker(CoverageStatus.DEFINITELY_COVERED_AND_OUTDATED),
    )
    performanceTracker.addEventTracker(
      'multipleMultiplayerUsersInFile',
      new MultiplayerUserCountTracker(2, () => multiplayerUserCount),
    )
    performanceTracker.addEventTracker(
      'multipleMultiplayerUsersInFileAndPanningOrZooming',
      new MultiplayerPanZoomTracker(2, () => multiplayerUserCount),
    )
    performanceTracker.addEventTracker(
      'viewportHasBlurryRegions',
      new MinViewportSharpnessTracker(1),
    )
    performanceTracker.addEventTracker(
      'viewportHasVeryBlurryRegions',
      new MinViewportSharpnessTracker(0.5),
    )
    performanceTracker.addEventTracker(
      'viewportIsBlurry',
      new AvgViewportSharpnessTracker(1),
    )
    performanceTracker.addEventTracker(
      'viewportIsVeryBlurry',
      new AvgViewportSharpnessTracker(0.5),
    )
    performanceTracker.addEventTracker(
      'timeSlicedEditRenderingActive',
      new RenderTreeStaleTracker(),
    )
    performanceTracker.addEventTracker(
      'stalenessIsHigh',
      new RenderTreeStalenessThresholdTracker(1000),
    )
    performanceTracker.addEventTracker(
      'stalenessIsVeryHigh',
      new RenderTreeStalenessThresholdTracker(2000),
    )
    performanceTracker.addEventTracker('moveCursorActive', new MouseMoveTracker())
    chatStateTracker = new ChatStateTracker()
    performanceTracker.addEventTracker('cursorChatActive', chatStateTracker)
    cursorReactionTracker = new CursorReactionTracker()
    performanceTracker.addEventTracker('cursorReactionActive', cursorReactionTracker)
    performanceTracker.trackOtherUserCursorMoved()
    annotationVisibilityTracker = new AnnotationVisibilityTracker()
    performanceTracker.addEventTracker('devModeAnnotationsVisible', annotationVisibilityTracker)
    performanceTracker.addEventTracker(
      'independentLayerAnimationActive',
      independentLayerAnimationTracker,
    )
    performanceTracker.addEventTracker(
      'nonIndependentLayerAnimationActive',
      nonIndependentLayerAnimationTracker,
    )
    performanceTracker.addEventTracker('independentLayerActive', independentLayerTracker)
    performanceTracker.addEventTracker('independentLayerAdded', independentLayerAddedTracker)
    performanceTracker.addEventTracker('independentLayerRemoved', independentLayerRemovedTracker)
    performanceTracker.addEventTracker('isTypingTextActive', userTypingTracker)
    performanceTracker.addEventTracker('isResizingGrid', gridResizingTracker)
  }
}

// Exported aliases for refactored functions and trackers
export const Ad = recordTileRenderingActive
export const B8 = updateFileInfo
export const Cd = updateMaxRenderLayerCount
export const Cr = setIndependentLayerAdded
export const Dd = setFileInfo
export const Dg = startRecording
export const E7 = incrementNumAnimationsFromTs
export const H0 = recordConnectDiagramShapeActive
export const HF = recordReorderTableSpanActive
export const JA = onContextRestored
export const LH = onTileRendererChanged
export const NB = annotationVisibilityTracker
export const P2 = updateMaxRenderedTileBytesUsed
export const PY = recordCreateStickyActive
export const Ts = setupPerformanceTracker
export const Ug = stopRecordingBeforeSceneRebuild
export const V = resetFileInfo
export const Zp = setNonIndependentLayerAnimationActive
export const fl = reportFullscreenPerfMetrics
export const gf = recordAccessibilityDomActive
export const iW = recordCreateTableActive
export const jp = recordStickyWidgetEvent
export const k6 = setMultiplayerPerfInfo
export const kq = setIndependentLayerActive
export const o3 = recordDifferentSectionClicked
export const p7 = onNodeDragEnd
export const se = onNodeDragStart
export const sl = setIndependentLayerAnimationActive
export const vK = recordEditTableTextActive
export const w4 = incrementNumAnimationsFromCpp
export const wl = setIndependentLayerRemoved
export const ye = performanceTracker
export const zw = chatStateTracker
