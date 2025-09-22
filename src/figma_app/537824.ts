import { ServiceCategories as _$$e } from "../905/165054";
import { AppStateTsApi, LinterCppBindings, FileSourceType } from "../figma_app/763686";
import { getSingletonSceneGraph, ReduxSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { fY, Og, jq, v4, VG, qL, m7, qZ } from "../figma_app/761118";
import { debugState } from "../905/407919";
import { reportError } from "../905/11";
import { fetchDynamicConfig } from "../figma_app/594947";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { fullscreenValue } from "../figma_app/455680";
import { jf, Vs, qc, QH, pc, LU, Rg } from "../figma_app/407414";
import { d7 } from "../figma_app/99772";
import { Lt, Fh, hf } from "../figma_app/210234";
import { c as _$$c } from "../905/140802";
import { eU, F7, yU } from "../figma_app/908460";
import { O } from "../905/412672";
import { R as _$$R } from "../905/182603";
import { Av, az, yd, rJ, L2, I as _$$I, ZM, rT, KV, zZ } from "../figma_app/542202";
import { B } from "../905/610974";
import { g as _$$g } from "../905/748145";
import { p as _$$p } from "../905/223871";
import { Violation } from "../905/940056";
import { eA, gZ, YS, fQ } from "../905/695660";
import { td } from "../figma_app/827216";
let $$O0 = 25e3;
let R = "suggestion ignored";
class L {
  constructor(e, t, r, n, i) {
    this._layerLimit = $$O0;
    this.designLinterStateManager = e;
    this.designLinterGrouper = t;
    this.designLinterRuleManager = r;
    this.designLinterFixWorker = n;
    this.linterResponsivenessDebouncer = i;
  }
  initialize() {
    this.designLinterStateManager.getStatus() === td.UNINITIALIZED && (atomStoreManager.set(Av, performance.now()), this.designLinterStateManager.setStatus(td.INITIALIZED), fetchDynamicConfig("aip_flower_garden_node_limit").then(e => this._layerLimit = e.get("nodeLimit", $$O0)), this.linterResponsivenessDebouncer.initialize((e, t) => {
      this.triggerResponsivenessUpdate(e, t);
    }));
  }
  get layerLimit() {
    return this._layerLimit;
  }
  get enabledRules() {
    return this.designLinterRuleManager.getEnabledRules();
  }
  get linterAbortSignal() {
    return this.designLinterStateManager.linterAbortController.signal;
  }
  getRuleById(e) {
    return this.designLinterRuleManager.getRuleById(e);
  }
  getDirectlySelectedNodes() {
    let e = getSingletonSceneGraph();
    return e.getCurrentPage()?.directlySelectedNodes ?? [];
  }
  extractLintableNodes(e) {
    let t = [];
    let r = new Set();
    for (let n of e) eA(n, e => gZ(e) ? void 0 : YS(e) ? "skip" : (r.has(e.guid) || (t.push(e), r.add(e.guid)), fQ(e)) ? "skip" : void 0);
    return {
      lintableNodes: t,
      lintableGuids: Array.from(r)
    };
  }
  getLintingTargetNodes() {
    let e = atomStoreManager.get(fY);
    if (!e) return null;
    let t = getSingletonSceneGraph();
    let r = [];
    for (let n of e.guids) {
      let e = t.get(n);
      e && r.push(e);
    }
    return {
      selectedNodes: r
    };
  }
  processFixedViolations(e) {
    let t = this.designLinterStateManager.processFixedViolations(e);
    this.designLinterGrouper.invalidateGroupsForNodeIds(t);
    this.designLinterFixWorker.removePromisesForViolations(e);
  }
  onGroupingComplete(e) {
    let t = this.designLinterStateManager.getStatus();
    if (t === td.GROUPING_PENDING && (this.designLinterStateManager.setStatus(td.GROUPING_COMPLETE), jf(e), t === td.GROUPING_PENDING)) {
      let e = atomStoreManager.get(az);
      let t = e ? performance.now() - e : -1;
      Vs(t);
    }
  }
  async runDetectionOnSelection({
    selectedNodes: e,
    abortSignal: t
  }) {
    let {
      lintableNodes
    } = this.extractLintableNodes(e);
    if (!t.aborted) {
      atomStoreManager.set(yd, lintableNodes.length);
      try {
        qc(lintableNodes.length);
        this.designLinterStateManager.setStatus(td.DETECTING);
        let {
          violations,
          violatingNodeIds
        } = await this.getViolationsForNodes({
          nodes: lintableNodes,
          abortSignal: t
        });
        if (t.aborted) return;
        this.designLinterStateManager.addNewViolations(violations);
        violations.forEach(e => this.requestFix(e));
        QH(violations);
        pc();
        this.designLinterStateManager.setStatus(td.GROUPING_PENDING);
        this.designLinterGrouper.addViolatingNodeIdsToQueue(violatingNodeIds);
      } catch (e) {
        if (e instanceof eU) return;
        this.teardownLinter();
        reportError(_$$e.AI_PRODUCTIVITY, e);
      }
    }
  }
  async updateViolationsForNodes(e, t) {
    if (getFeatureFlags().aip_flower_garden_full_responsiveness) try {
      if (this.designLinterStateManager.getStatus() !== td.GROUPING_COMPLETE) return;
      this.designLinterStateManager.setStatus(td.RESPONDING_TO_CANVAS_CHANGE);
      let r = e.filter(e => !t.includes(e));
      let n = getSingletonSceneGraph();
      let i = r.reduce((e, t) => {
        let r = n.get(t);
        r && e.push(r);
        return e;
      }, []);
      let {
        lintableNodes,
        lintableGuids
      } = this.extractLintableNodes(i);
      let l = this.designLinterStateManager.linterAbortController.signal;
      let {
        violations
      } = await this.getViolationsForNodes({
        nodes: lintableNodes,
        abortSignal: l
      });
      let {
        cleanNodeIds,
        newViolations
      } = this.designLinterStateManager.processObservedViolations(violations, lintableGuids, t);
      for (let e of newViolations) this.requestFix(e);
      this.designLinterGrouper.invalidateGroupsForNodeIds(Array.from(cleanNodeIds));
      this.designLinterGrouper.invalidateGroupsForNodeIds(t);
    } catch (e) {
      console.error("Error updating violations:", e);
    } finally {
      let e = this.designLinterStateManager.getStatus();
      e === td.RESPONDING_TO_CANVAS_CHANGE ? this.designLinterStateManager.setStatus(td.GROUPING_COMPLETE) : reportError(_$$e.AI_PRODUCTIVITY, Error("Linter status changed during updateViolationsForNodes"), {
        extra: {
          currentStatus: e
        }
      });
    }
  }
  yield() {
    return new Promise(e => {
      setTimeout(e, 0);
    });
  }
  waitForDataToLoad({
    isDataLoaded: e,
    retryDelayMs: t,
    timeoutMs: r,
    abortSignal: n
  }) {
    return new Promise(i => {
      let a = () => {
        if (n.aborted) {
          i(!1);
          return;
        }
        if (e()) {
          i(!0);
          return;
        }
        if (Date.now() - s >= r) {
          i(!1);
          return;
        }
        setTimeout(a, t);
      };
      let s = Date.now();
      a();
    });
  }
  teardownLinter() {
    AppStateTsApi?.uiState()?.showDesignLinter?.set(!1);
    this.designLinterStateManager.resetLinterAbortController();
    this.designLinterStateManager.setStatus(td.INITIALIZED);
    this.clearLinterScene();
    this.linterResponsivenessDebouncer.clearState();
  }
  onNodeChanged(e) {
    this.linterResponsivenessDebouncer.onNodeChanged(e);
  }
  triggerResponsivenessUpdate(e, t) {
    this.updateViolationsForNodes(e, t);
  }
  async areLinterDependenciesReady(e) {
    let t = (await fetchDynamicConfig("aip_flower_garden_modal_data_loading")).get("libraryContextTimeoutMs", 5e3);
    if (!(await this.waitForDataToLoad({
      isDataLoaded: _$$c,
      retryDelayMs: 100,
      timeoutMs: t,
      abortSignal: e
    }))) return !e.aborted && (this.teardownLinter(), Lt({
      message: getI18nString("design_linter.library_selector.loading_failed_bell"),
      icon: VisualBellIcon.CLOSE_FILLED,
      type: "libraries loading error",
      timeUntilDequeueMs: 1 / 0
    }), !1);
    let r = atomStoreManager.get(az);
    let n = r ? performance.now() - r : void 0;
    atomStoreManager.set(rJ, n);
    LU();
    return !0;
  }
  countNodesInLintingTarget() {
    return LinterCppBindings?.countNodesInLintingTarget() || 0;
  }
  isLayerLimitExceeded(e) {
    let t = !1;
    try {
      e || (e = this.countNodesInLintingTarget());
      e && e > this.layerLimit && (t = !0, Rg(e, this.layerLimit));
    } catch (e) {
      console.error("Error checking layer limit:", e);
      t = !0;
    }
    return t;
  }
  dispatchSuggestionIgnoredBell(e) {
    let t = {
      text: getI18nString("comments.undo"),
      action: () => {
        atomStoreManager.set(Og, []);
      }
    };
    Lt({
      button: t,
      message: getI18nString("design_linter.suggestion_ignored"),
      type: R,
      onDequeue: () => {
        atomStoreManager.get(Og).length > 0 && e();
      }
    });
  }
  resetStateForLibrarySelection() {
    this.clearLinterScene();
    atomStoreManager.set(jq, {
      status: "invalidated",
      subscribedStylesByFileKey: {},
      localStyles: null,
      allStyles: []
    });
    atomStoreManager.set(v4, {
      status: "invalidated",
      libraryVariables: [],
      libraryVariableSetIdToSet: {},
      libraryKeys: new Set()
    });
    atomStoreManager.set(VG, new Map());
    atomStoreManager.set(qL, new Map());
  }
  validateAndSetupDetection() {
    if (this.isLinterDetecting() || this.designLinterStateManager.getStatus() === td.DETECTION_REQUESTED) return !1;
    this.designLinterStateManager.setStatus(td.DETECTION_REQUESTED);
    atomStoreManager.set(az, performance.now());
    atomStoreManager.set(L2, []);
    let e = this.countNodesInLintingTarget();
    if (!e) throw new F7();
    if (this.isLayerLimitExceeded(e)) throw new yU();
    atomStoreManager.set(L2, []);
    this.designLinterStateManager.resetViolationsState();
    this.designLinterFixWorker.teardownFixWorker();
    this.linterResponsivenessDebouncer.clearState();
    this.clearLinterScene();
    atomStoreManager.set(d7);
    return !0;
  }
  propagateAbortSignal() {
    let e = this.designLinterStateManager.linterAbortController.signal;
    this.designLinterFixWorker.setAbortSignal(e);
    this.designLinterGrouper.setAbortSignal(e);
    this.linterResponsivenessDebouncer.setAbortSignal(e);
  }
  setTopLevelLintingTargetNodes() {
    let e = this.getDirectlySelectedNodes();
    let t = e.map(e => e.guid);
    LinterCppBindings?.setLintingTarget(t);
    atomStoreManager.set(fY, {
      guids: t
    });
    return {
      selectedNodes: e
    };
  }
  getPreviousLintingTarget() {
    let e = this.getLintingTargetNodes();
    return e ? {
      selectedNodes: e.selectedNodes
    } : this.setTopLevelLintingTargetNodes();
  }
  async requestDetectionInternal({
    selectedNodes: e
  }) {
    let t = this.designLinterStateManager.resetLinterAbortController().signal;
    if (this.validateAndSetupDetection()) {
      if (this.clearLinterVisualBells(), !(await this.areLinterDependenciesReady(t))) return !1;
      this.propagateAbortSignal();
      this.designLinterGrouper.startGroupingWorker(e => this.onGroupingComplete(e));
      await this.runDetectionOnSelection({
        selectedNodes: e,
        abortSignal: t
      });
    }
  }
  async requestDetection() {
    atomStoreManager.set(_$$I, "initial");
    let {
      selectedNodes
    } = this.setTopLevelLintingTargetNodes();
    await this.requestDetectionInternal({
      selectedNodes
    });
  }
  async refreshDetection() {
    atomStoreManager.set(_$$I, "updated");
    let e = this.getPreviousLintingTarget();
    e && (await this.requestDetectionInternal({
      selectedNodes: e.selectedNodes
    }));
  }
  markViolationsAsPendingIgnored(e, t) {
    this.clearLinterVisualBells();
    atomStoreManager.set(Og, e);
    this.dispatchSuggestionIgnoredBell(t);
  }
  ignoreViolationsForGuidsWithGroupKey(e, t) {
    let r = this.designLinterStateManager.ignoreViolationsForGuidsWithGroupKey(e, t);
    this.designLinterGrouper.invalidateGroupsForNodeIds(r);
  }
  ignoreAllViolationIds(e) {
    let t = this.designLinterStateManager.ignoreViolationIds(e);
    this.designLinterGrouper.invalidateGroupsForNodeIds(t);
  }
  async getViolationsForNodes({
    nodes: e,
    abortSignal: t
  }) {
    if (t.aborted) throw new eU();
    let r = performance.now();
    let n = 1e3 / 60;
    let i = [];
    let a = new Set();
    let s = performance.now();
    atomStoreManager.set(ZM, null);
    atomStoreManager.set(rT, null);
    atomStoreManager.set(KV, null);
    atomStoreManager.set(zZ, null);
    let l = new Map();
    let d = new Map();
    let c = new Map();
    let u = Fh();
    try {
      for (let s of this.enabledRules) {
        let o = performance.now();
        let p = [];
        for (let o of e) {
          let e;
          if (t.aborted) throw new eU();
          let l = performance.now();
          performance.now() - r > n && (await this.yield(), r = performance.now());
          try {
            e = await s.detect({
              node: o,
              detectionMetadata: u
            });
          } catch (e) {
            console.error(`Error detecting violations for rule ${s.id} on node ${o.guid}:`, e);
            continue;
          }
          let d = !!e.didSkipNode;
          let c = e.failedGuidToContext;
          let _ = Object.keys(c) ?? [];
          if (!_.length) {
            d || p.push(performance.now() - l);
            continue;
          }
          for (let e of _) {
            let t = Violation.createViolationList({
              ruleId: s.id,
              guid: e,
              detectionContext: c[e],
              nodeType: o.type
            });
            i.push(...t);
            a.add(e);
          }
          d || p.push(performance.now() - l);
        }
        this.addRuleDetectionTimesToMaps(s.id, o, p, l, d, c);
      }
      atomStoreManager.set(ZM, performance.now() - s);
      atomStoreManager.set(rT, l);
      atomStoreManager.set(KV, d);
      atomStoreManager.set(zZ, c);
    } catch (e) {
      throw Error("Error detecting violations: " + e);
    }
    return {
      violations: i,
      violatingNodeIds: Array.from(a)
    };
  }
  addRuleDetectionTimesToMaps(e, t, r, n, i, a) {
    let s = r.sort((e, t) => e - t);
    let o = Math.ceil(.95 * s.length) - 1;
    let l = s[o] ?? null;
    a.set(e, l);
    let d = performance.now() - t;
    n.set(e, d);
    i.set(e, d / s.length);
  }
  async requestFix(e) {
    let t = null;
    try {
      t = await this.designLinterFixWorker.enqueueFetchRequest(e);
    } catch (e) {}
    return t;
  }
  async applyFixContextToViolations({
    violationsWithFixContexts: e,
    shouldSkipCommit: t = !1,
    abortSignal: r
  }) {
    let n = [];
    let i = [];
    try {
      let s = getSingletonSceneGraph();
      let o = hf();
      for (let {
        violations,
        fixContext
      } of e) {
        let e = !0;
        for (let l of violations) {
          if (r?.aborted) throw new eU();
          let t = this.getRuleById(l.ruleId);
          if (!t) {
            console.warn("Rule not found for violation", l);
            continue;
          }
          let d = s.get(l.guid);
          if (!d) {
            console.warn("Node not found for violation", l);
            continue;
          }
          let {
            detectionContext
          } = l;
          try {
            (await t.fix({
              node: d,
              detectionContext,
              fixContext,
              fixMetadata: o,
              forFixPreview: !1,
              shouldLogFix: e
            })) ? n.push(l) : i.push(l);
          } catch (e) {
            i.push(l);
          }
          e = !1;
        }
      }
      t || fullscreenValue.commit();
      this.processFixedViolations(n);
    } catch (e) {
      throw Error("Error fixing violations: " + e);
    }
    return {
      fixedViolations: n,
      failedViolations: i
    };
  }
  isLinterDetecting() {
    return this.designLinterStateManager.isLinterDetecting();
  }
  async applyFixesToThumbnailNode(e, t, r) {
    let n = [];
    let i = [];
    try {
      let a = [];
      let s = hf();
      for (let {
        violation,
        selectedFix
      } of e) {
        let e = this.getRuleById(violation.ruleId);
        if (!e) {
          console.error("Rule not found for violation");
          continue;
        }
        a.push(this.generateFixThumbnailNodePromise(violation, e, selectedFix, violation.guid, t, s, n, i, r));
      }
      await Promise.allSettled(a);
    } catch (e) {
      throw Error("Error applying fixes to thumbnail node: " + e);
    }
  }
  generateFixThumbnailNodePromise(e, t, r, n, s, o, l, d, c) {
    return new Promise(async (u, p) => {
      try {
        if (c.aborted) throw Error("Signal aborted");
        let p = new ReduxSceneGraph(FileSourceType.LINTER);
        let _ = s.get(n);
        if (!_) throw Error("Guid for node to fix not found in map");
        let h = p.get(_);
        if (!h) throw Error("Node to fix not found");
        if (c.aborted) throw Error("Signal aborted");
        let m = r?.fixContext;
        if (!m) throw Error("Fix context on selected fix not found");
        let {
          detectionContext
        } = e;
        (await t.fix({
          node: h,
          detectionContext,
          fixContext: m,
          fixMetadata: o,
          forFixPreview: !0
        })) ? l.push(e) : d.push(e);
        u();
      } catch (t) {
        d.push(e);
        p();
        return;
      }
    });
  }
  getIsViolationActive(e) {
    return this.designLinterStateManager.isViolationActive(e);
  }
  getIsViolationIgnored(e) {
    return this.designLinterStateManager.isViolationIgnored(e);
  }
  getIsViolationFixed(e) {
    return this.designLinterStateManager.isViolationFixed(e);
  }
  clearLinterScene() {
    LinterCppBindings?.clearLinterScene();
    atomStoreManager.set(qL, new Map());
  }
  getLinterStatus() {
    return this.designLinterStateManager.getStatus();
  }
  clearLinterVisualBells() {
    debugState.dispatch(VisualBellActions.dequeue({
      matchType: R
    }));
  }
  debugLinterState() {
    if (!getFeatureFlags().aip_flower_garden_debug) return;
    let e = atomStoreManager.get(m7);
    let t = atomStoreManager.get(VG);
    navigator.clipboard.writeText(JSON.stringify({
      grouper: this.designLinterGrouper.getDebugInfo(),
      violationsState: Array.from(e.entries()).map(([e, t]) => ({
        guid: e,
        violations: Array.from(t.entries()).map(([e, t]) => ({
          ruleId: e,
          violation: t
        }))
      })),
      fixesCache: Array.from(t.entries()).map(([e, {
        fix: t,
        status: r
      }]) => ({
        groupKey: e,
        fix: t,
        status: r
      }))
    }));
  }
}
let P = null;
export function $$D1() {
  if (!qZ()) return null;
  if (!P) {
    let e = new _$$g();
    (P = new L(new _$$p(), new _$$R(), e, new O(e), new B())).initialize();
  }
  return P;
}
export const W3 = $$O0;
export const r8 = $$D1;