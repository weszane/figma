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
import { AH, jY } from '../figma_app/725044'
import { AppStateTsApi, AutosaveHelpers, CoverageStatus, fullscreenOptimizationExposureLoggingBinding, FullscreenPerfMetrics, gpuMetricsLoggingBinding, perfTimerFrameManagerBindings } from '../figma_app/763686'

let T = {
  'frame.react-render': 0.1,
  'frame.scene-render': 0.2,
  'frame.scene-render.render-tree-generation': 0.2,
}
let I = ['react', 'frame', 'frame.react-render', 'frame.scene-render', 'frame.scene-render.render-tree-generation', 'frame.style-updater', 'frame.symbol-updater', 'frame.trigger-action', 'fullscreen-handle-event', 'fullscreen-handle-event.trigger-action', 'frame.comments-render']
let S = 1
let v = !1
let A = null
let x = 0
let N = null
let C = 0
let w = -1 / 0
let O = 0
let $$R31 = null
let $$L32 = null
let P = null
let $$D11 = null
let k = new ActiveStateTracker()
let M = new ActiveStateTracker()
let F = new ActiveStateTracker()
let j = new ActiveStateTracker()
let U = new ActiveStateTracker()
let B = new UserTypingTracker()
let G = new GridResizingTracker()
let $$V = {}
let H = !1
export function $$z22(e, t) {
  S = e
  v = isNotNullish(t)
  $$R31 && $$R31.setMultiplayerPerfInfo({
    multiplayerUserCount: S,
    ongoingSpotlight: v,
  })
}
export function $$W16() {
  A = null
  N = null
  $$R31?.stopRecordingAndLog('closing-file')
  $$R31?.setFileInfo(null, 'unknown')
}
export function $$K4(e, t) {
  $$R31 && ($$R31.setFileInfo(e, mapEditorTypeToProductType(t)), $$R31.startRecording(!0), getImageManager().setPendingImagesCallback($$R31.pendingImagesChanged))
  A = e
  N = performance.now()
  x++
  let r = getInitialOptions().editing_file
  x === 1 && r && trackEventAnalytics('Cold Boot Document Load', {
    fileKey: A,
    fileVersion: AutosaveHelpers && AutosaveHelpers.currentFileVersion() || 0,
    loadedTime: N,
    fileNodeCount: FullscreenPerfMetrics && FullscreenPerfMetrics.getFileNodeCount() || 0,
    fileTeamId: r.team_id,
    fileParentOrgId: getInitialOptions().org_id,
  })
}
export function $$Y1(e) {
  $$R31?.setFileInfo(A, mapEditorTypeToProductType(e))
}
export function $$$15() {
  $$R31?.stopRecordingAndLog('about-to-rebuild-scene')
}
export function $$X5() {
  $$R31?.startRecording(!1)
}
export function $$q0() {
  $$R31?.recordSingleFrameNamedEvent('tileRenderingActive')
}
export function $$J20() {
  $$R31?.recordSingleFrameNamedEvent('createTableActive')
}
export function $$Z28() {
  $$R31?.recordSingleFrameNamedEvent('editTableTextActive')
}
export function $$Q8() {
  $$R31?.recordSingleFrameNamedEvent('reorderTableSpanActive')
}
export function $$ee7() {
  $$R31?.recordSingleFrameNamedEvent('connectDiagramShapeWithConnectorActive')
}
export function $$et19() {
  $$R31?.recordSingleFrameNamedEvent('accessibilityDomActive')
}
export function $$er26() {
  $$R31?.onNodeDragStart()
}
export function $$en25() {
  $$R31?.onNodeDragEnd()
}
export function $$ei10(e) {
  $$R31?.onTileRendererChanged(e)
}
export function $$ea9() {
  $$R31?.onContextRestored()
}
export function $$es2(e) {
  $$R31?.updateMaxRenderLayerCount(e)
}
export function $$eo12(e) {
  $$R31?.updateMaxRenderedTileBytesUsed(e)
}
export function $$el29() {
  $$R31?.incrementNumAnimationsFromCpp()
}
export function $$ed6() {
  $$R31?.incrementNumAnimationsFromTs()
}
export function $$ec27() {
  k.setIsActive()
}
export function $$eu17() {
  M.setIsActive()
}
export function $$ep23() {
  F.setIsActive()
}
export function $$e_3() {
  j.setIsActive()
}
export function $$eh30() {
  U.setIsActive()
}
export function $$em13() {
  $$R31?.recordSingleFrameNamedEvent('createStickyActive')
}
export function $$eg24() {
  $$R31?.recordSingleFrameNamedEvent('differentSectionClicked')
}
export function $$ef21(e) {
  $$R31?.recordSingleFrameNamedEvent(jY(e))
}
let eE = ['ALT', 'META', 'SHIFT', 'CONTROL', 'RIGHT_ALT']
function ey(e) {
  let {
    fileKey,
    fileNodeCount,
    multiplayerUserCount,
    ongoingSpotlight,
    recentInteractions,
    secondsSinceLoaded,
    version,
    randomID,
  } = e
  let c = {
    fileKey,
    fileNodeCount,
    multiplayerUserCount,
    ongoingSpotlight,
    secondsSinceLoaded,
    version,
    randomID,
    reportCount: C,
  }
  for (let e = 0; e < recentInteractions.length; e++) c[`recentInteractions.${e}`] = JSON.stringify(recentInteractions[e])
  addDeviceInfoToTarget(e.gpuDeviceInfo, c)
  flattenObjectToTarget(e.nodeTypeHistogram, c, 'nodeTypeHistogram')
  return c
}
function eb(e) {
  trackEventAnalytics('Slow Editor Interaction', e)
  w = performance.now()
  O = e.duration
}
function eT(...e) {}
export function $$eI18() {
  if (!fullscreenValue?.isReady())
    return
  let e = {}
  let t = reactTimerGroup.report()
  let r = 0
  for (let n of t) {
    !(function t(r, n = '') {
      let i = n.length > 0 ? `${n}.${r.name}` : r.name
      let a = $$V[i] || r.hitCount
      let s = r.hitCount - a
      s > r.elapsedTimes.length && (H || (console.warn(`Too many elapsed hits of ${i} since last report`), H = !0), s = r.elapsedTimes.length)
      let o = 0
      let l = r.elapsedTimes.length
      for (let e = l - s; e < l; e++) o += r.elapsedTimes[e]
      for (let n of (e[i] = o, $$V[i] = r.hitCount, r.children)) t(n, i)
    }(n))
    r += e[n.name]
  }
  !(function () {
    if (r / 1e3 < 0.2)
      return
    let [t, n] = A === null || N === null
      ? [null, []]
      : FullscreenPerfMetrics
        ? [{
            gpuDeviceInfo: getGpuDeviceInfo(),
            fileKey: A,
            fileNodeCount: FullscreenPerfMetrics.getFileNodeCount(),
            multiplayerUserCount: S,
            ongoingSpotlight: v,
            nodeTypeHistogram: FullscreenPerfMetrics.getNodeTypeHistogram(),
            recentInteractions: FullscreenPerfMetrics.getRecentInteractions(),
            secondsSinceLoaded: (performance.now() - N) / 1e3,
            version: 1,
            randomID: getRandomString(),
            reportCount: C,
          }, FullscreenPerfMetrics.getSlowInteractions()]
        : [{
            gpuDeviceInfo: getGpuDeviceInfo(),
            fileKey: A,
            fileNodeCount: 0,
            multiplayerUserCount: S,
            ongoingSpotlight: v,
            nodeTypeHistogram: {},
            recentInteractions: [],
            secondsSinceLoaded: (performance.now() - N) / 1e3,
            version: 1,
            randomID: getRandomString(),
            reportCount: C,
          }, []]
    if (t == null)
      return
    let s = {}
    for (let t in e) I.includes(t) && (s[t] = e[t] / 1e3)
    let o = n.map((e) => {
      let r = e.interaction
      let n = {
        kind: 'interaction',
        type: r.type,
        subtype: r.subtype,
        frame: e.frame,
        collapsed: !1,
        duration: e.duration,
        ...ey(t),
      }
      if (eE.forEach(e => n[`modifier.${e}`] = null), r.type === 'MOUSE') {
        for (let e of (n.collapsed = r.collapsed, eE)) n[`modifier.${e}`] = r.modifiers.includes(e)
      }
      flattenObjectToTarget(s, n, 'timer')
      return n
    })
    for (let r in e) {
      let n = e[r] / 1e3
      let a = T[r]
      if (typeof a == 'number' && n >= a) {
        let e = {
          kind: 'timer',
          type: r,
          subtype: null,
          frame: null,
          collapsed: !1,
          duration: n,
          ...ey(t),
        }
        flattenObjectToTarget(s, e, 'timer')
        eE.forEach(t => e[`modifier.${t}`] = null)
        o.push(e)
      }
    }
    if (o.length === 0)
      return
    let l = []
    let d = o
    let c = 60 - (performance.now() - w) / 1e3
    if ((d = d.filter(e => c <= 0 || e.duration >= 2 * O)).length === 0 && l.push(`we're in the report cooldown period (${c}s to go) and no reports were long enough to override it (the last report duration was ${O}s)`), c > 0 && d.length, N === null)
      return
    let u = 60 - (performance.now() - N) / 1e3
    u > 0 && l.push(`we're in the document loading cooldown period (${u}s to go)`)
    l.length > 0
      ? (function (e) {
          if (e.length === 1)
            return e[0]
          if (e.length === 2)
            return `${e[0]} and ${e[1]}`
          let t = e.slice(0, e.length - 1).join(', ')
          t += ', and '
          return t += e[2]
        }(l))
      : ((d = d.sort((e, t) => e.duration - t.duration)).forEach(eb), C++)
  }())
  FullscreenPerfMetrics && (FullscreenPerfMetrics.clearNodeTypeHistogram(), FullscreenPerfMetrics.clearSlowInteractions())
}
function eS(e) {
  let t = 0
  let r = 0
  let n = []
  for (let i of e) i.path.length === 1 && i.path[0] === 'frame' ? (r = i.elapsedTime, n.push(i)) : i.path.length > 1 && i.path[0] === 'frame' ? (t += i.elapsedTime, n.push(i)) : i.path.length === 1 && n.push(i)
  if (t > 0) {
    let e = r - t
    n.push({
      path: ['frame', 'unaccounted-time'],
      elapsedTime: e,
    })
  }
  return n
}
export function $$ev14() {
  if (!$$R31 && getFeatureFlags().frame_distribution_tracker_edit) {
    let e = (e) => {
      let t = fullscreenOptimizationExposureLoggingBinding && fullscreenOptimizationExposureLoggingBinding.getAndClearHistogramBatchFields()
      if (!t || t.size === 0)
        return
      let r = new Map()
      t.forEach((e, t) => {
        r.set(t, e > 0)
      })
      e.optimizationExposures = JSON.stringify(Object.fromEntries(r))
    };
    ($$R31 = new AH('editor_frame_distributions', eS, 2, !0, new PerformanceLogger(), (t) => {
      e(t)
    }, !1, (e, t = !1) => {
      if (fullscreenOptimizationExposureLoggingBinding) {
        let t = new Map()
        fullscreenOptimizationExposureLoggingBinding.getAndClearSlowFrameTrackerFields().forEach((e, r) => {
          t.set(r, e > 0)
        })
        e[SlowFrameTracker.optimizationExposuresKey] = JSON.stringify(Object.fromEntries(t))
      }
      gpuMetricsLoggingBinding && (e[SlowFrameTracker.gpuMetricsCurrentFrameKey] = gpuMetricsLoggingBinding.getFullscreenCurrentFrameGpuMetricsJSON().toString())
      perfTimerFrameManagerBindings && (e[SlowFrameTracker.cpuTimerTreeCurrentFrameKey] = perfTimerFrameManagerBindings.getCurrentFrameCpuTimerTreeJSON().toString())
      t && (gpuMetricsLoggingBinding && (e[SlowFrameTracker.gpuMetricsPreviousFrameKey] = gpuMetricsLoggingBinding.getFullscreenPreviousFrameGpuMetricsJSON().toString()), perfTimerFrameManagerBindings && (e[SlowFrameTracker.cpuTimerTreePreviousFrameKey] = perfTimerFrameManagerBindings.getPreviousFrameCpuTimerTreeJSON().toString()))
      let r = AppStateTsApi && AppStateTsApi.activeRunningAnimations() || []
      e[SlowFrameTracker.activeAnimationsKey] = r
      let n = atomStoreManager.get(_$$f)
      n > 0 && (e[SlowFrameTracker.numberOfDevAnnotationsVisibleKey] = n)
    }, (e) => {
      fullscreenOptimizationExposureLoggingBinding && fullscreenOptimizationExposureLoggingBinding.clearSlowFrameTrackerFields()
      gpuMetricsLoggingBinding && gpuMetricsLoggingBinding.nextFrame(e)
      perfTimerFrameManagerBindings?.nextFrame(e)
    })).addEventTracker('selectionChanged', new SelectionChangeTracker())
    $$R31.addEventTracker('zoomActive', new ZoomScaleTracker())
    $$R31.addEventTracker('panActive', new PanTracker())
    $$R31.addEventTracker('viewportHasGaps', new ViewportCoverageTracker(CoverageStatus.DEFINITELY_COVERED_ONLY))
    $$R31.addEventTracker('viewportIncludingOutdatedHasGaps', new ViewportCoverageTracker(CoverageStatus.DEFINITELY_COVERED_AND_OUTDATED))
    $$R31.addEventTracker('multipleMultiplayerUsersInFile', new MultiplayerUserCountTracker(2, () => S))
    $$R31.addEventTracker('multipleMultiplayerUsersInFileAndPanningOrZooming', new MultiplayerPanZoomTracker(2, () => S))
    $$R31.addEventTracker('viewportHasBlurryRegions', new MinViewportSharpnessTracker(1))
    $$R31.addEventTracker('viewportHasVeryBlurryRegions', new MinViewportSharpnessTracker(0.5))
    $$R31.addEventTracker('viewportIsBlurry', new AvgViewportSharpnessTracker(1))
    $$R31.addEventTracker('viewportIsVeryBlurry', new AvgViewportSharpnessTracker(0.5))
    $$R31.addEventTracker('timeSlicedEditRenderingActive', new RenderTreeStaleTracker())
    $$R31.addEventTracker('stalenessIsHigh', new RenderTreeStalenessThresholdTracker(1e3))
    $$R31.addEventTracker('stalenessIsVeryHigh', new RenderTreeStalenessThresholdTracker(2e3))
    $$R31.addEventTracker('moveCursorActive', new MouseMoveTracker())
    $$L32 = new ChatStateTracker()
    $$R31.addEventTracker('cursorChatActive', $$L32)
    P = new CursorReactionTracker()
    $$R31.addEventTracker('cursorReactionActive', P)
    $$R31.trackOtherUserCursorMoved()
    $$D11 = new AnnotationVisibilityTracker()
    $$R31.addEventTracker('devModeAnnotationsVisible', $$D11)
    $$R31.addEventTracker('independentLayerAnimationActive', k)
    $$R31.addEventTracker('nonIndependentLayerAnimationActive', M)
    $$R31.addEventTracker('independentLayerActive', F)
    $$R31.addEventTracker('independentLayerAdded', j)
    $$R31.addEventTracker('independentLayerRemoved', U)
    $$R31.addEventTracker('isTypingTextActive', B)
    $$R31.addEventTracker('isResizingGrid', G)
  }
}
export const Ad = $$q0
export const B8 = $$Y1
export const Cd = $$es2
export const Cr = $$e_3
export const Dd = $$K4
export const Dg = $$X5
export const E7 = $$ed6
export const H0 = $$ee7
export const HF = $$Q8
export const JA = $$ea9
export const LH = $$ei10
export const NB = $$D11
export const P2 = $$eo12
export const PY = $$em13
export const Ts = $$ev14
export const Ug = $$$15
export const V = $$W16
export const Zp = $$eu17
export const fl = $$eI18
export const gf = $$et19
export const iW = $$J20
export const jp = $$ef21
export const k6 = $$z22
export const kq = $$ep23
export const o3 = $$eg24
export const p7 = $$en25
export const se = $$er26
export const sl = $$ec27
export const vK = $$Z28
export const w4 = $$el29
export const wl = $$eh30
export const ye = $$R31
export const zw = $$L32
