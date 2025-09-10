import { isNotNullish } from "src/figma_app/95419";
import { flattenObjectToTarget } from "src/figma_app/493477";
import { AutosaveHelpers, FullscreenPerfMetrics, fullscreenOptimizationExposureLoggingBinding, gpuMetricsLoggingBinding, perfTimerFrameManagerBindings, AppStateTsApi, CoverageStatus } from "src/figma_app/763686";
import { getFeatureFlags } from "src/905/601108";
import { atomStoreManager } from "src/figma_app/27355";
import { trackEventAnalytics } from "src/905/449184";
import { reactTimerGroup } from "src/905/542194";
import { jY, AH } from "src/figma_app/725044";
import { zF, xV, q5, l$, vu, H0 as _$$H, as, nc, Pn, eO, I7, t8, bF, vw, Ti, W, Fy } from "src/905/967662";
import { getInitialOptions } from "src/figma_app/169182";
import { q, l as _$$l } from "src/905/190247";
import { N as _$$N } from "src/905/200059";
import { s as _$$s } from "src/905/817498";
import { Dc } from "src/figma_app/314264";
import { fullscreenValue } from "src/figma_app/455680";
import { ds } from "src/905/87821";
import { f as _$$f } from "src/905/70820";
import { Jr } from "src/figma_app/624361";
let T = {
  "frame.react-render": .1,
  "frame.scene-render": .2,
  "frame.scene-render.render-tree-generation": .2
};
let I = ["react", "frame", "frame.react-render", "frame.scene-render", "frame.scene-render.render-tree-generation", "frame.style-updater", "frame.symbol-updater", "frame.trigger-action", "fullscreen-handle-event", "fullscreen-handle-event.trigger-action", "frame.comments-render"];
let S = 1;
let v = !1;
let A = null;
let x = 0;
let N = null;
let C = 0;
let w = -1 / 0;
let O = 0;
let $$R31 = null;
let $$L32 = null;
let P = null;
let $$D11 = null;
let k = new zF();
let M = new zF();
let F = new zF();
let j = new zF();
let U = new zF();
let B = new xV();
let G = new q5();
let $$V = {};
let H = !1;
export function $$z22(e, t) {
  S = e;
  v = isNotNullish(t);
  $$R31 && $$R31.setMultiplayerPerfInfo({
    multiplayerUserCount: S,
    ongoingSpotlight: v
  });
}
export function $$W16() {
  A = null;
  N = null;
  $$R31?.stopRecordingAndLog("closing-file");
  $$R31?.setFileInfo(null, "unknown");
}
export function $$K4(e, t) {
  $$R31 && ($$R31.setFileInfo(e, Dc(t)), $$R31.startRecording(!0), Jr().setPendingImagesCallback($$R31.pendingImagesChanged));
  A = e;
  N = performance.now();
  x++;
  let r = getInitialOptions().editing_file;
  1 === x && r && trackEventAnalytics("Cold Boot Document Load", {
    fileKey: A,
    fileVersion: AutosaveHelpers && AutosaveHelpers.currentFileVersion() || 0,
    loadedTime: N,
    fileNodeCount: FullscreenPerfMetrics && FullscreenPerfMetrics.getFileNodeCount() || 0,
    fileTeamId: r.team_id,
    fileParentOrgId: getInitialOptions().org_id
  });
}
export function $$Y1(e) {
  $$R31?.setFileInfo(A, Dc(e));
}
export function $$$15() {
  $$R31?.stopRecordingAndLog("about-to-rebuild-scene");
}
export function $$X5() {
  $$R31?.startRecording(!1);
}
export function $$q0() {
  $$R31?.recordSingleFrameNamedEvent("tileRenderingActive");
}
export function $$J20() {
  $$R31?.recordSingleFrameNamedEvent("createTableActive");
}
export function $$Z28() {
  $$R31?.recordSingleFrameNamedEvent("editTableTextActive");
}
export function $$Q8() {
  $$R31?.recordSingleFrameNamedEvent("reorderTableSpanActive");
}
export function $$ee7() {
  $$R31?.recordSingleFrameNamedEvent("connectDiagramShapeWithConnectorActive");
}
export function $$et19() {
  $$R31?.recordSingleFrameNamedEvent("accessibilityDomActive");
}
export function $$er26() {
  $$R31?.onNodeDragStart();
}
export function $$en25() {
  $$R31?.onNodeDragEnd();
}
export function $$ei10(e) {
  $$R31?.onTileRendererChanged(e);
}
export function $$ea9() {
  $$R31?.onContextRestored();
}
export function $$es2(e) {
  $$R31?.updateMaxRenderLayerCount(e);
}
export function $$eo12(e) {
  $$R31?.updateMaxRenderedTileBytesUsed(e);
}
export function $$el29() {
  $$R31?.incrementNumAnimationsFromCpp();
}
export function $$ed6() {
  $$R31?.incrementNumAnimationsFromTs();
}
export function $$ec27() {
  k.setIsActive();
}
export function $$eu17() {
  M.setIsActive();
}
export function $$ep23() {
  F.setIsActive();
}
export function $$e_3() {
  j.setIsActive();
}
export function $$eh30() {
  U.setIsActive();
}
export function $$em13() {
  $$R31?.recordSingleFrameNamedEvent("createStickyActive");
}
export function $$eg24() {
  $$R31?.recordSingleFrameNamedEvent("differentSectionClicked");
}
export function $$ef21(e) {
  $$R31?.recordSingleFrameNamedEvent(jY(e));
}
let eE = ["ALT", "META", "SHIFT", "CONTROL", "RIGHT_ALT"];
function ey(e) {
  let {
    fileKey,
    fileNodeCount,
    multiplayerUserCount,
    ongoingSpotlight,
    recentInteractions,
    secondsSinceLoaded,
    version,
    randomID
  } = e;
  let c = {
    fileKey,
    fileNodeCount,
    multiplayerUserCount,
    ongoingSpotlight,
    secondsSinceLoaded,
    version,
    randomID,
    reportCount: C
  };
  for (let e = 0; e < recentInteractions.length; e++) c[`recentInteractions.${e}`] = JSON.stringify(recentInteractions[e]);
  q(e.gpuDeviceInfo, c);
  flattenObjectToTarget(e.nodeTypeHistogram, c, "nodeTypeHistogram");
  return c;
}
function eb(e) {
  trackEventAnalytics("Slow Editor Interaction", e);
  w = performance.now();
  O = e.duration;
}
function eT(...e) {}
export function $$eI18() {
  if (!fullscreenValue?.isReady()) return;
  let e = {};
  let t = reactTimerGroup.report();
  let r = 0;
  for (let n of t) {
    !function t(r, n = "") {
      let i = n.length > 0 ? `${n}.${r.name}` : r.name;
      let a = $$V[i] || r.hitCount;
      let s = r.hitCount - a;
      s > r.elapsedTimes.length && (H || (console.warn(`Too many elapsed hits of ${i} since last report`), H = !0), s = r.elapsedTimes.length);
      let o = 0;
      let l = r.elapsedTimes.length;
      for (let e = l - s; e < l; e++) o += r.elapsedTimes[e];
      for (let n of (e[i] = o, $$V[i] = r.hitCount, r.children)) t(n, i);
    }(n);
    r += e[n.name];
  }
  !function () {
    if (r / 1e3 < .2) return;
    let [t, n] = null === A || null === N ? [null, []] : FullscreenPerfMetrics ? [{
      gpuDeviceInfo: _$$l(),
      fileKey: A,
      fileNodeCount: FullscreenPerfMetrics.getFileNodeCount(),
      multiplayerUserCount: S,
      ongoingSpotlight: v,
      nodeTypeHistogram: FullscreenPerfMetrics.getNodeTypeHistogram(),
      recentInteractions: FullscreenPerfMetrics.getRecentInteractions(),
      secondsSinceLoaded: (performance.now() - N) / 1e3,
      version: 1,
      randomID: ds(),
      reportCount: C
    }, FullscreenPerfMetrics.getSlowInteractions()] : [{
      gpuDeviceInfo: _$$l(),
      fileKey: A,
      fileNodeCount: 0,
      multiplayerUserCount: S,
      ongoingSpotlight: v,
      nodeTypeHistogram: {},
      recentInteractions: [],
      secondsSinceLoaded: (performance.now() - N) / 1e3,
      version: 1,
      randomID: ds(),
      reportCount: C
    }, []];
    if (null == t) return;
    let s = {};
    for (let t in e) -1 !== I.indexOf(t) && (s[t] = e[t] / 1e3);
    let o = n.map(e => {
      let r = e.interaction;
      let n = {
        kind: "interaction",
        type: r.type,
        subtype: r.subtype,
        frame: e.frame,
        collapsed: !1,
        duration: e.duration,
        ...ey(t)
      };
      if (eE.forEach(e => n["modifier." + e] = null), "MOUSE" === r.type) for (let e of (n.collapsed = r.collapsed, eE)) n["modifier." + e] = -1 !== r.modifiers.indexOf(e);
      flattenObjectToTarget(s, n, "timer");
      return n;
    });
    for (let r in e) {
      let n = e[r] / 1e3;
      let a = T[r];
      if ("number" == typeof a && n >= a) {
        let e = {
          kind: "timer",
          type: r,
          subtype: null,
          frame: null,
          collapsed: !1,
          duration: n,
          ...ey(t)
        };
        flattenObjectToTarget(s, e, "timer");
        eE.forEach(t => e["modifier." + t] = null);
        o.push(e);
      }
    }
    if (0 === o.length) return;
    let l = [];
    let d = o;
    let c = 60 - (performance.now() - w) / 1e3;
    if (0 === (d = d.filter(e => c <= 0 || e.duration >= 2 * O)).length && l.push(`we're in the report cooldown period (${c}s to go) and no reports were long enough to override it (the last report duration was ${O}s)`), c > 0 && d.length, null === N) return;
    let u = 60 - (performance.now() - N) / 1e3;
    u > 0 && l.push(`we're in the document loading cooldown period (${u}s to go)`);
    l.length > 0 ? function (e) {
      if (1 === e.length) return e[0];
      if (2 === e.length) return e[0] + " and " + e[1];
      let t = e.slice(0, e.length - 1).join(", ");
      t += ", and ";
      return t += e[2];
    }(l) : ((d = d.sort((e, t) => e.duration - t.duration)).forEach(eb), C++);
  }();
  FullscreenPerfMetrics && (FullscreenPerfMetrics.clearNodeTypeHistogram(), FullscreenPerfMetrics.clearSlowInteractions());
}
function eS(e) {
  let t = 0;
  let r = 0;
  let n = [];
  for (let i of e) 1 === i.path.length && "frame" === i.path[0] ? (r = i.elapsedTime, n.push(i)) : i.path.length > 1 && "frame" === i.path[0] ? (t += i.elapsedTime, n.push(i)) : 1 === i.path.length && n.push(i);
  if (t > 0) {
    let e = r - t;
    n.push({
      path: ["frame", "unaccounted-time"],
      elapsedTime: e
    });
  }
  return n;
}
export function $$ev14() {
  if (!$$R31 && getFeatureFlags().frame_distribution_tracker_edit) {
    let e = e => {
      let t = fullscreenOptimizationExposureLoggingBinding && fullscreenOptimizationExposureLoggingBinding.getAndClearHistogramBatchFields();
      if (!t || 0 === t.size) return;
      let r = new Map();
      t.forEach((e, t) => {
        r.set(t, e > 0);
      });
      e.optimizationExposures = JSON.stringify(Object.fromEntries(r));
    };
    ($$R31 = new AH("editor_frame_distributions", eS, 2, !0, new _$$s(), t => {
      e(t);
    }, !1, (e, t = !1) => {
      if (fullscreenOptimizationExposureLoggingBinding) {
        let t = new Map();
        fullscreenOptimizationExposureLoggingBinding.getAndClearSlowFrameTrackerFields().forEach((e, r) => {
          t.set(r, e > 0);
        });
        e[_$$N.optimizationExposuresKey] = JSON.stringify(Object.fromEntries(t));
      }
      gpuMetricsLoggingBinding && (e[_$$N.gpuMetricsCurrentFrameKey] = gpuMetricsLoggingBinding.getFullscreenCurrentFrameGpuMetricsJSON().toString());
      perfTimerFrameManagerBindings && (e[_$$N.cpuTimerTreeCurrentFrameKey] = perfTimerFrameManagerBindings.getCurrentFrameCpuTimerTreeJSON().toString());
      t && (gpuMetricsLoggingBinding && (e[_$$N.gpuMetricsPreviousFrameKey] = gpuMetricsLoggingBinding.getFullscreenPreviousFrameGpuMetricsJSON().toString()), perfTimerFrameManagerBindings && (e[_$$N.cpuTimerTreePreviousFrameKey] = perfTimerFrameManagerBindings.getPreviousFrameCpuTimerTreeJSON().toString()));
      let r = AppStateTsApi && AppStateTsApi.activeRunningAnimations() || [];
      e[_$$N.activeAnimationsKey] = r;
      let n = atomStoreManager.get(_$$f);
      n > 0 && (e[_$$N.numberOfDevAnnotationsVisibleKey] = n);
    }, e => {
      fullscreenOptimizationExposureLoggingBinding && fullscreenOptimizationExposureLoggingBinding.clearSlowFrameTrackerFields();
      gpuMetricsLoggingBinding && gpuMetricsLoggingBinding.nextFrame(e);
      perfTimerFrameManagerBindings?.nextFrame(e);
    })).addEventTracker("selectionChanged", new l$());
    $$R31.addEventTracker("zoomActive", new vu());
    $$R31.addEventTracker("panActive", new _$$H());
    $$R31.addEventTracker("viewportHasGaps", new as(CoverageStatus.DEFINITELY_COVERED_ONLY));
    $$R31.addEventTracker("viewportIncludingOutdatedHasGaps", new as(CoverageStatus.DEFINITELY_COVERED_AND_OUTDATED));
    $$R31.addEventTracker("multipleMultiplayerUsersInFile", new nc(2, () => S));
    $$R31.addEventTracker("multipleMultiplayerUsersInFileAndPanningOrZooming", new Pn(2, () => S));
    $$R31.addEventTracker("viewportHasBlurryRegions", new eO(1));
    $$R31.addEventTracker("viewportHasVeryBlurryRegions", new eO(.5));
    $$R31.addEventTracker("viewportIsBlurry", new I7(1));
    $$R31.addEventTracker("viewportIsVeryBlurry", new I7(.5));
    $$R31.addEventTracker("timeSlicedEditRenderingActive", new t8());
    $$R31.addEventTracker("stalenessIsHigh", new bF(1e3));
    $$R31.addEventTracker("stalenessIsVeryHigh", new bF(2e3));
    $$R31.addEventTracker("moveCursorActive", new vw());
    $$L32 = new Ti();
    $$R31.addEventTracker("cursorChatActive", $$L32);
    P = new W();
    $$R31.addEventTracker("cursorReactionActive", P);
    $$R31.trackOtherUserCursorMoved();
    $$D11 = new Fy();
    $$R31.addEventTracker("devModeAnnotationsVisible", $$D11);
    $$R31.addEventTracker("independentLayerAnimationActive", k);
    $$R31.addEventTracker("nonIndependentLayerAnimationActive", M);
    $$R31.addEventTracker("independentLayerActive", F);
    $$R31.addEventTracker("independentLayerAdded", j);
    $$R31.addEventTracker("independentLayerRemoved", U);
    $$R31.addEventTracker("isTypingTextActive", B);
    $$R31.addEventTracker("isResizingGrid", G);
  }
}
export const Ad = $$q0;
export const B8 = $$Y1;
export const Cd = $$es2;
export const Cr = $$e_3;
export const Dd = $$K4;
export const Dg = $$X5;
export const E7 = $$ed6;
export const H0 = $$ee7;
export const HF = $$Q8;
export const JA = $$ea9;
export const LH = $$ei10;
export const NB = $$D11;
export const P2 = $$eo12;
export const PY = $$em13;
export const Ts = $$ev14;
export const Ug = $$$15;
export const V = $$W16;
export const Zp = $$eu17;
export const fl = $$eI18;
export const gf = $$et19;
export const iW = $$J20;
export const jp = $$ef21;
export const k6 = $$z22;
export const kq = $$ep23;
export const o3 = $$eg24;
export const p7 = $$en25;
export const se = $$er26;
export const sl = $$ec27;
export const vK = $$Z28;
export const w4 = $$el29;
export const wl = $$eh30;
export const ye = $$R31;
export const zw = $$L32;
