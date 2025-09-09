import { LinterCppBindings } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { atomStoreManager } from "../figma_app/27355";
import { generateUUIDv4 } from "../905/871474";
import { fY, Iy, u2 } from "../figma_app/761118";
import { td } from "../figma_app/827216";
class o {
  constructor() {
    this._queue = [];
    this._guidSet = new Set();
  }
  get queue() {
    return this._queue;
  }
  get guidSet() {
    return this._guidSet;
  }
  size() {
    return this._queue.length;
  }
  add(...e) {
    for (let t of e) this._guidSet.has(t) || (this._queue.push(t), this._guidSet.add(t));
  }
  popAll() {
    return this.splice(0, this.size());
  }
  splice(e, t) {
    let i = this._queue.splice(e, t);
    for (let e of i) this._guidSet.$$delete(e);
    return i;
  }
  remove(e) {
    let t = this._queue.indexOf(e);
    -1 !== t && (this._queue.splice(t, 1), this._guidSet.$$delete(e));
  }
  clear() {
    this._queue = [];
    this._guidSet.clear();
  }
  isEmpty() {
    return 0 === this._queue.length;
  }
  toString() {
    return JSON.stringify({
      queue: this._queue,
      guidSet: Array.from(this._guidSet)
    });
  }
}
class c {
  constructor() {
    this._groupIdToGroup = new Map();
    this._violatingNodeIdToGroupIdSet = new Map();
    this._rootNodeIdToGroupIdSet = new Map();
    this._nodeSimilarityRelationships = new Map();
    this._similarityGroupIdSet = new Set();
    this._currentViolatingNodeIds = new Set();
    this._groupIdToGroup = new Map();
    this._violatingNodeIdToGroupIdSet = new Map();
    this._rootNodeIdToGroupIdSet = new Map();
    this._nodeSimilarityRelationships = new Map();
    this._similarityGroupIdSet = new Set();
  }
  get groupIdToGroup() {
    return this._groupIdToGroup;
  }
  get violatingNodeIdToGroupIdSet() {
    return this._violatingNodeIdToGroupIdSet;
  }
  get rootNodeIdToGroupIdSet() {
    return this._rootNodeIdToGroupIdSet;
  }
  get nodeSimilarityRelationships() {
    return this._nodeSimilarityRelationships;
  }
  get similarityGroupIdSet() {
    return this._similarityGroupIdSet;
  }
  set currentViolatingNodeIds(e) {
    this._currentViolatingNodeIds = e;
  }
  get currentViolatingNodeIds() {
    return this._currentViolatingNodeIds;
  }
  resetState() {
    this._groupIdToGroup = new Map();
    this._violatingNodeIdToGroupIdSet = new Map();
    this._rootNodeIdToGroupIdSet = new Map();
    this._nodeSimilarityRelationships = new Map();
    this._similarityGroupIdSet.clear();
    this._currentViolatingNodeIds.clear();
  }
  getSimilarNodeIdSet(e) {
    let t = this._nodeSimilarityRelationships.get(e);
    if (!t) return;
    let i = Array.from(t.entries()).reduce((e, [t, i]) => (i && e.add(t), e), new Set());
    i.add(e);
    return i.size > 1 ? i : void 0;
  }
  updateNodeSimilarityRelationships(e, t, i) {
    e !== t && (this._nodeSimilarityRelationships.has(e) || this._nodeSimilarityRelationships.set(e, new Map()), this._nodeSimilarityRelationships.has(t) || this._nodeSimilarityRelationships.set(t, new Map()), this._nodeSimilarityRelationships.get(e)?.set(t, i), this._nodeSimilarityRelationships.get(t)?.set(e, i));
  }
  invalidateGroupsForNodeIds(e) {
    this.removeNodeIdFromSimilarityCache({
      nodeIds: e
    });
    this.removeNodeIdsFromAllGroups({
      violatingNodeIds: e
    });
  }
  removeNodeIdFromSimilarityCache({
    nodeIds: e
  }) {
    for (let t of e) {
      let e = this._nodeSimilarityRelationships.get(t);
      if (e) {
        for (let i of e.keys()) {
          let e = this._nodeSimilarityRelationships.get(i);
          e && (e.$$delete(t), 0 === e.size && this._nodeSimilarityRelationships.$$delete(i));
        }
        this._nodeSimilarityRelationships.$$delete(t);
      }
    }
  }
  getLintingTargetIdSet() {
    let e = atomStoreManager.get(fY);
    return e ? new Set(e.guids) : new Set();
  }
  updateVisualGroupsMapAtom() {
    let e = new Map();
    let t = new Set();
    for (let e of this._currentViolatingNodeIds) {
      let i = this._violatingNodeIdToGroupIdSet.get(e);
      if (i) for (let e of i) t.add(e);
    }
    for (let i of t) {
      let t = this._groupIdToGroup.get(i);
      t && e.set(i, t);
    }
    atomStoreManager.set(Iy, e);
  }
  mapViolatingNodeIdAndRootIdsInGroup(e, t, i) {
    e.violatingNodeIdToRootNodeId.set(t, i);
    u(e.rootNodeIdToViolatingNodeIdSet, i).add(t);
  }
  detachNodeFromRoot(e, t, i) {
    let n = e.rootNodeIdToViolatingNodeIdSet.get(i);
    n && (n.$$delete(t), 0 === n.size && (e.rootNodeIdToViolatingNodeIdSet.$$delete(i), this._rootNodeIdToGroupIdSet.get(i)?.delete(e.id), this._rootNodeIdToGroupIdSet.get(i)?.size === 0 && this._rootNodeIdToGroupIdSet.$$delete(i)));
  }
  terminateGroup(e) {
    let t = this._groupIdToGroup.get(e);
    if (t) {
      for (let i of t.rootNodeIdToViolatingNodeIdSet.keys()) {
        let t = this._rootNodeIdToGroupIdSet.get(i);
        t?.delete(e);
        t?.size === 0 && this._rootNodeIdToGroupIdSet.$$delete(i);
      }
      for (let i of t.violatingNodeIdToRootNodeId.keys()) {
        let t = this._violatingNodeIdToGroupIdSet.get(i);
        t?.delete(e);
        t?.size === 0 && this._violatingNodeIdToGroupIdSet.$$delete(i);
      }
      this._groupIdToGroup.$$delete(e);
      this._similarityGroupIdSet.$$delete(e);
    }
  }
  pruneNewGroups({
    groupIds: e
  }) {
    let t = this.getLintingTargetIdSet();
    for (let i of e) {
      let e = this._groupIdToGroup.get(i);
      if (!e || e.rootNodeIdToViolatingNodeIdSet.size > 1) continue;
      let n = Array.from(e.rootNodeIdToViolatingNodeIdSet.keys())[0] ?? "";
      if (!t.has(n)) {
        if ("ANCESTRY" === e.type && !Array.from(this._rootNodeIdToGroupIdSet.get(n) ?? new Set()).some(e => this._similarityGroupIdSet.has(e))) continue;
        this.terminateGroup(i);
      }
    }
  }
  pruneEmptyGroups(e) {
    for (let t of e) {
      let e = this._groupIdToGroup.get(t);
      if (!e) continue;
      let i = 0 === e.violatingNodeIdToRootNodeId.size;
      let n = 0 === e.rootNodeIdToViolatingNodeIdSet.size;
      (i || n) && this.terminateGroup(t);
    }
  }
  removeViolatingNodeIdFromGroup(e, t) {
    let i = this._groupIdToGroup.get(t);
    if (!i) return !1;
    let n = i.violatingNodeIdToRootNodeId.get(e);
    n && this.detachNodeFromRoot(i, e, n);
    i.violatingNodeIdToRootNodeId.$$delete(e);
    this._violatingNodeIdToGroupIdSet.get(e)?.delete(t);
    this._violatingNodeIdToGroupIdSet.get(e)?.size === 0 && this._violatingNodeIdToGroupIdSet.$$delete(e);
    return !0;
  }
  removeNodeIdsFromAllGroups({
    violatingNodeIds: e
  }) {
    if (0 === e.length) return;
    let t = new Set();
    for (let i of e) {
      let e = this._violatingNodeIdToGroupIdSet.get(i);
      if (e) for (let n of e) {
        t.add(n);
        this.removeViolatingNodeIdFromGroup(i, n);
      }
    }
    this.pruneEmptyGroups(Array.from(t));
    this.updateVisualGroupsMapAtom();
  }
  getSizeKeyForRoot(e) {
    return `${e.type}-${Math.floor(e.size.x)}-${Math.floor(e.size.y)}`;
  }
  addViolatingNodeIdToExistingGroup({
    violatingNodeId: e,
    rootNodeId: t,
    groupId: i
  }) {
    if (!e || !t || !i) return !1;
    let n = this._groupIdToGroup.get(i);
    return !!n && (this.mapViolatingNodeIdAndRootIdsInGroup(n, e, t), u(this._violatingNodeIdToGroupIdSet, e).add(i), u(this._rootNodeIdToGroupIdSet, t).add(i), !0);
  }
  createNewGroup({
    rootNodeId: e,
    violatingNodeId: t,
    type: i
  }) {
    if (!e || !t) return "";
    let n = generateUUIDv4();
    let r = {
      id: n,
      rootNodeIdToViolatingNodeIdSet: new Map([[e, new Set([t])]]),
      violatingNodeIdToRootNodeId: new Map([[t, e]]),
      type: i
    };
    u(this._violatingNodeIdToGroupIdSet, t).add(n);
    u(this._rootNodeIdToGroupIdSet, e).add(n);
    this._groupIdToGroup.set(r.id, r);
    "SIMILARITY" === i && this._similarityGroupIdSet.add(r.id);
    return n;
  }
  updateOrCreateSimilarityGroup({
    violatingNodeId: e,
    rootId: t,
    matchingRootIds: i
  }) {
    for (let n of i) {
      let i = this._rootNodeIdToGroupIdSet.get(n);
      if (i) for (let n of i) {
        let i = this._groupIdToGroup.get(n);
        if (i && "SIMILARITY" === i.type) {
          this.addViolatingNodeIdToExistingGroup({
            violatingNodeId: e,
            rootNodeId: t,
            groupId: n
          });
          return n;
        }
      }
    }
    return this.createNewGroup({
      rootNodeId: t,
      violatingNodeId: e,
      type: "SIMILARITY"
    });
  }
  updateAncestryGroup({
    violatingNodeId: e,
    rootId: t
  }) {
    let i = this._rootNodeIdToGroupIdSet.get(t);
    if (i) for (let n of i) {
      let i = this._groupIdToGroup.get(n);
      if (i && "ANCESTRY" === i.type) {
        this.addViolatingNodeIdToExistingGroup({
          violatingNodeId: e,
          rootNodeId: t,
          groupId: n
        });
        return n;
      }
    }
    return null;
  }
  updateOrCreateAncestryGroup({
    violatingNodeId: e,
    rootId: t
  }) {
    return this.updateAncestryGroup({
      violatingNodeId: e,
      rootId: t
    }) || this.createNewGroup({
      rootNodeId: t,
      violatingNodeId: e,
      type: "ANCESTRY"
    });
  }
  isNodeInSimilarityGroup(e) {
    let t = this._violatingNodeIdToGroupIdSet.get(e);
    if (!t) return !1;
    for (let e of t) if (this._similarityGroupIdSet.has(e)) return !0;
    return !1;
  }
  isEligibleNodeType(e) {
    return "FRAME" === e.type;
  }
  hasGroup(e) {
    return this._violatingNodeIdToGroupIdSet.has(e);
  }
  getDebugInfo() {
    return {
      _groupIdToGroup: Array.from(this._groupIdToGroup.entries()).map(([e, t]) => [e, {
        ...t,
        rootNodeIdToViolatingNodeIdSet: Array.from(t.rootNodeIdToViolatingNodeIdSet.entries()).map(([e, t]) => [e, Array.from(t)]),
        violatingNodeIdToRootNodeId: Array.from(t.violatingNodeIdToRootNodeId.entries())
      }]),
      _violatingNodeIdToGroupIdSet: Array.from(this._violatingNodeIdToGroupIdSet.entries()).map(([e, t]) => [e, Array.from(t)]),
      _rootNodeIdToGroupId: Array.from(this._rootNodeIdToGroupIdSet.entries()).map(([e, t]) => [e, Array.from(t)]),
      _lintingTargetIds: Array.from(this.getLintingTargetIdSet()),
      _nodeIdToSimilarNodeIdSet: Array.from(this._nodeSimilarityRelationships.entries()).map(([e, t]) => [e, Array.from(t.keys())]),
      _similarityGroupIdSet: Array.from(this._similarityGroupIdSet)
    };
  }
}
function u(e, t) {
  e.has(t) || e.set(t, new Set());
  return e.get(t);
}
export class $$m0 {
  constructor() {
    this._TASK_DEADLINE_MS = 1e3 / 60;
    this.PROCESSOR_INTERVAL_MS = 100;
    this._lastYieldAt = 0;
    this._processorIntervalId = null;
    this._currentViolatingNodeIdsPayload = void 0;
    this._violationNodeIdsQueue = new o();
    this._groupState = new c();
    this._abortSignal = null;
    this.resetInternalState();
  }
  hasLinterAborted() {
    return this._abortSignal?.aborted ?? !0;
  }
  setAbortSignal(e) {
    this._abortSignal = e;
  }
  resetInternalAtomState() {
    atomStoreManager.set(Iy, new Map());
  }
  resetInternalState() {
    this.stopGroupingWorker();
    this._currentViolatingNodeIdsPayload = void 0;
    this._groupState.currentViolatingNodeIds = new Set();
    this._violationNodeIdsQueue.clear();
    this._lastYieldAt = 0;
    this._groupState.resetState();
    this._onGroupingCompleteCallback = void 0;
  }
  resetState() {
    this.resetInternalState();
    this.resetInternalAtomState();
  }
  startGroupingWorker(e) {
    this.resetState();
    this._onGroupingCompleteCallback = e;
    this._processorIntervalId || (this._processorIntervalId = setInterval(() => this.processBatchIntoVisualGroups(), this.PROCESSOR_INTERVAL_MS));
  }
  stopGroupingWorker() {
    this._processorIntervalId && (clearInterval(this._processorIntervalId), this._processorIntervalId = null);
  }
  addViolatingNodeIdsToQueue(e) {
    this._violationNodeIdsQueue.add(...e);
  }
  invalidateGroupsForNodeIds(e) {
    this._groupState.removeNodeIdFromSimilarityCache({
      nodeIds: e
    });
    this._groupState.removeNodeIdsFromAllGroups({
      violatingNodeIds: e
    });
  }
  yield() {
    return new Promise(e => {
      setTimeout(e, 0);
    });
  }
  getLintingTargetIdSet() {
    let e = atomStoreManager.get(fY);
    return e ? new Set(e.guids) : new Set();
  }
  async checkYield() {
    performance.now() - this._lastYieldAt > this._TASK_DEADLINE_MS && (await this.yield(), this._lastYieldAt = performance.now());
    return !1;
  }
  getSizeKeyForRoot(e) {
    return `${e.type}-${Math.floor(e.size.x)}-${Math.floor(e.size.y)}`;
  }
  async findMatchesInSizeBasket(e, t) {
    let i = this._groupState.getSimilarNodeIdSet(t);
    if (i) return i;
    let r = new Set();
    for (let i of e) {
      if (i === t) continue;
      let e = this._groupState.nodeSimilarityRelationships.get(t);
      if (e && e.has(i)) continue;
      await this.checkYield();
      let a = !!LinterCppBindings?.areFramesSimilar(t, i);
      if (this._groupState.updateNodeSimilarityRelationships(t, i, a), a) {
        r.add(i);
        r.add(t);
        break;
      }
    }
    return r;
  }
  async processBatchIntoVisualGroups() {
    if (this._currentViolatingNodeIdsPayload) return;
    if (this.hasLinterAborted()) {
      atomStoreManager.set(u2, td.IDLE);
      this.stopGroupingWorker();
      return;
    }
    if (this._violationNodeIdsQueue.isEmpty()) {
      this._onGroupingCompleteCallback?.(this._groupState);
      return;
    }
    let e = this.getLintingTargetIdSet();
    if (0 !== e.size) try {
      if (this._currentViolatingNodeIdsPayload = this._violationNodeIdsQueue.popAll(), !this._currentViolatingNodeIdsPayload?.length) {
        this._currentViolatingNodeIdsPayload = void 0;
        return;
      }
      this._groupState.currentViolatingNodeIds = new Set(this._currentViolatingNodeIdsPayload);
      let t = new Map();
      let i = new Map();
      let n = getSingletonSceneGraph();
      let a = new Set();
      let s = e => {
        e && a.add(e);
      };
      for (let r of this._currentViolatingNodeIdsPayload) {
        let a = n.get(r);
        for (; a;) {
          if (this._groupState.isEligibleNodeType(a)) {
            let e = this.getSizeKeyForRoot(a);
            u(t, e).add(a.guid);
            i.has(r) || i.set(r, []);
            i.get(r)?.push(a.guid);
          }
          if (e.has(a.guid)) {
            let e = 0;
            "CANVAS" !== a.type && (s(this._groupState.updateOrCreateAncestryGroup({
              violatingNodeId: r,
              rootId: a.guid
            })), e = 1);
            let t = i.get(r) ?? [];
            let n = t[t.length - 1 - e];
            n && s(this._groupState.updateOrCreateAncestryGroup({
              violatingNodeId: r,
              rootId: n
            }));
            break;
          }
          a = a.parentNode;
        }
      }
      for (let e of await this.findSimilarityGroups(i, t)) s(e);
      this._groupState.pruneNewGroups({
        groupIds: Array.from(a)
      });
    } catch (e) {
      this._currentViolatingNodeIdsPayload && this._violationNodeIdsQueue.add(...this._currentViolatingNodeIdsPayload);
    } finally {
      this._groupState.updateVisualGroupsMapAtom();
      this._currentViolatingNodeIdsPayload = void 0;
    }
  }
  async findSimilarityGroups(e, t) {
    let i = [];
    for (let n of this._currentViolatingNodeIdsPayload ?? []) {
      let r = e.get(n) ?? [];
      0 !== r.length && (getFeatureFlags().aip_flower_garden_more_groups ? await this.findAllSimilarElements({
        ancestors: r,
        sizeKeyToPotentialRootGuidSet: t,
        guid: n,
        similarityGroupIds: i
      }) : await this.binarySearchForSimilarElements({
        ancestors: r,
        sizeKeyToPotentialRootGuidSet: t,
        guid: n,
        similarityGroupIds: i
      }));
    }
    return i;
  }
  async findAllSimilarElements({
    ancestors: e,
    sizeKeyToPotentialRootGuidSet: t,
    guid: i,
    similarityGroupIds: n
  }) {
    let a = getSingletonSceneGraph();
    for (let r of e) {
      let e = a.get(r);
      if (!e) continue;
      let s = this.getSizeKeyForRoot(e);
      let o = t.get(s);
      if (o) {
        let e = await this.findMatchesInSizeBasket(o, r);
        if (e.size > 0) {
          let t = this._groupState.updateOrCreateSimilarityGroup({
            violatingNodeId: i,
            rootId: r,
            matchingRootIds: Array.from(e)
          });
          n.push(t);
        }
      }
    }
  }
  async binarySearchForSimilarElements({
    ancestors: e,
    sizeKeyToPotentialRootGuidSet: t,
    guid: i,
    similarityGroupIds: n
  }) {
    let a = getSingletonSceneGraph();
    let s = 0;
    let o = e.length - 1;
    let l = -1;
    let d = null;
    for (; s <= o;) {
      let i = Math.floor((s + o) / 2);
      let n = e[i] ?? "";
      let r = a.get(n);
      if (!r) {
        o = i - 1;
        continue;
      }
      let c = this.getSizeKeyForRoot(r);
      let u = t.get(c);
      if (u) {
        let e = await this.findMatchesInSizeBasket(u, n);
        e.size > 0 ? (l = i, d = e, s = i + 1) : o = i - 1;
      } else o = i - 1;
    }
    if (l >= 0 && d) {
      let t = this._groupState.updateOrCreateSimilarityGroup({
        violatingNodeId: i,
        rootId: e[l],
        matchingRootIds: Array.from(d)
      });
      n.push(t);
    }
  }
  getDebugInfo() {
    return {
      _groupState: this._groupState.getDebugInfo(),
      _currentViolatingNodeIdsPayload: this._currentViolatingNodeIdsPayload,
      _processorIntervalId: this._processorIntervalId,
      _lastYieldAt: this._lastYieldAt,
      _violationNodeIdsQueue: this._violationNodeIdsQueue.toString(),
      _lintingTargetIds: Array.from(this.getLintingTargetIdSet())
    };
  }
}
export const R = $$m0;