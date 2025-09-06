import { c2 } from "../905/382883";
import { _7 } from "../figma_app/562352";
import { AD } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { logError } from "../905/714362";
import { oV } from "../905/216495";
import { JL } from "../figma_app/690664";
import { Zr } from "../figma_app/114522";
import { Y3 } from "../figma_app/346422";
import { $5 } from "../figma_app/504321";
import { D } from "../figma_app/446411";
import { D as _$$D } from "../905/382895";
import { E } from "../905/618325";
export class $$f1 {
  constructor() {
    this.hasSubscribedToSceneGraphChanges = !1;
    this._codeInstanceGuidToSnapshotInfoAtom = atom({});
    this._codeInstanceGuidToRuntimeComponentPropInfoAtom = atom({});
    this._codeInstanceGuidToStaticComponentPropInfoAtom = atom({});
    this._scenegraphSelectionAtom = atom([]);
    this.selectedFigmaFiberIdsAtom = atom(e => e(this.selectedFiberNodeInfosAtom).map(e => e.figmaFiberId));
    this.selectedFiberNodeInfosAtom = atom(e => {
      let t = e(this._scenegraphSelectionAtom);
      if (0 === t.length) return [];
      let r = e(this._codeInstanceGuidToSnapshotInfoAtom);
      return t.map(e => {
        let t = r[e.codeInstanceGuid];
        return t?.fiberNodes[e.figmaFiberId] || (logError("direct_manipulation", "No fiber node found for selected node", {}, {
          reportAsSentryError: !0
        }), null);
      }).filter(e => null !== e);
    });
    this._editedStylesAtom = atom({});
    this.selectedElementsClassToStyles = new Map();
    this.hasPopoverOpenAtom = atom(!1);
    this._bundledSourceCode = new Map();
    this.sourceCodeOffsetRemapper = new E();
    this.codeFileNodeIdsWithRecentlyAddedImageAssetImports = new Set();
    this._unsubscribes = [];
    this._editingSnippetsAtom = atom({
      snippets: {},
      isLoading: !0,
      asyncRequestCounter: 0
    });
    this._unsubscribes.push(atomStoreManager.sub(this.selectedFigmaFiberIdsAtom, () => {
      this.selectedElementIdsChanged();
    }));
  }
  createSceneGraphNodesForDirectManipulation(e, t, r) {
    let n = getSingletonSceneGraph();
    let i = n.get(t);
    if (!i) return;
    let a = (e, t) => "REACT_FIBER" === e.type && e.name === t;
    let l = new Map();
    l.set(t, [...i.childrenNodes]);
    let d = [];
    (e.fiberParentToChildren[e.rootFigmaFiberId] ?? []).forEach(e => d.push({
      fiberId: e,
      parentGuid: t
    }));
    let c = new Map();
    for (; d.length;) {
      let t;
      let {
        fiberId,
        parentGuid
      } = d.shift();
      let s = e.fiberNodes[fiberId];
      if (!s) continue;
      let o = l.get(parentGuid);
      for (; o.length && !t;) {
        let e = o.shift();
        if (a(e, s.displayName)) {
          t = e;
          break;
        }
        e.removeSelfAndChildren();
      }
      if (!t) {
        t = n.createNode("REACT_FIBER");
        let e = n.get(parentGuid);
        let r = o.length ? e.childrenGuids.indexOf(o[0].guid) : e.childrenGuids.length;
        e.insertChild(t, r);
      }
      c.set(fiberId, t.guid);
      t.name = s.displayName;
      t.opacity = 0;
      t.reactFiberId = fiberId;
      let u = s.elementInfo?.rect ?? e.componentBoundingRects[fiberId];
      u && (t.x = u.left, t.y = u.top, t.size = {
        x: u.width,
        y: u.height
      });
      let p = e.fiberParentToChildren[fiberId] ?? [];
      p.length && (l.set(t.guid, [...t.childrenNodes]), p.forEach(e => d.push({
        fiberId: e,
        parentGuid: t.guid
      })));
    }
    for (let [e, t] of l) t.forEach(e => e.removeSelfAndChildren());
    for (let n of (this._bundledSourceCode.set(t, r), atomStoreManager.set(this._codeInstanceGuidToSnapshotInfoAtom, r => ({
      ...r,
      [t]: e
    })), this.hasSubscribedToSceneGraphChanges || (this.hasSubscribedToSceneGraphChanges = !0, this._unsubscribes.push(getSingletonSceneGraph().onChange(this.onSceneGraphChange.bind(this), {
      allowDeferral: !0
    }))), e.classToStyles)) this.selectedElementsClassToStyles.set(n.className, n);
  }
  setRuntimeComponentPropInfo(e, t) {
    atomStoreManager.set(this._codeInstanceGuidToRuntimeComponentPropInfoAtom, r => ({
      ...r,
      [e]: t
    }));
  }
  setStaticComponentPropInfo(e, t) {
    atomStoreManager.set(this._codeInstanceGuidToStaticComponentPropInfoAtom, r => ({
      ...r,
      [e]: t
    }));
  }
  removeDirectManipulationSceneGraphNodes(e) {
    let t = getSingletonSceneGraph().get(e);
    t && t.childrenNodes.forEach(e => e.removeSelfAndChildren());
  }
  onSceneGraphChange() {
    let e = getSingletonSceneGraph().getDirectlySelectedNodes().map(e => {
      let t = e.reactFiberId;
      if (!t) return null;
      {
        let r = e.containingCodeInstanceId;
        return r !== AD ? {
          fiberNodeGuid: e.guid,
          figmaFiberId: t,
          codeInstanceGuid: r
        } : (logError("direct_manipulation", "No containingCodeInstance for selected node", {}, {
          reportAsSentryError: !0
        }), null);
      }
    }).filter(e => null !== e);
    atomStoreManager.set(this._scenegraphSelectionAtom, t => c2(t, e) ? t : e);
  }
  get editedStylesAtom() {
    return this._editedStylesAtom;
  }
  addClassStyleFromLocalEdit(e, t) {
    this.selectedElementsClassToStyles.set(e, t);
  }
  addLocalComputedStyleEditToSelectedNodes(e) {
    let t = atomStoreManager.get(this.selectedFigmaFiberIdsAtom);
    0 !== t.length && atomStoreManager.set(this._editedStylesAtom, r => {
      let n = structuredClone(r);
      for (let r of t) for (let t of (n[r] = {}, e)) for (let e of t.cssRules) for (let t of e.propertiesExpandedFromShorthand.length > 0 ? e.propertiesExpandedFromShorthand : [e.property]) n[r][t] = e.computedStylesValue;
      return n;
    });
  }
  clearLocalComputedStyleEditForSelectedNodes(e) {
    let t = atomStoreManager.get(this.selectedFigmaFiberIdsAtom);
    0 !== t.length && atomStoreManager.set(this._editedStylesAtom, r => {
      let n = structuredClone(r);
      for (let r of t) {
        let t = n[r];
        if (t) for (let r of e) delete t[r];
      }
      return n;
    });
  }
  get editingSnippetsAtom() {
    return this._editingSnippetsAtom;
  }
  updateAnalyticsRecordClassNameEdit(e) {}
  updateAnalyticsRecordGoToSourceClick() {}
  goToSource() {
    let e = atomStoreManager.get(this.selectedFigmaFiberIdsAtom);
    if (0 === e.length) return;
    let t = e[0];
    if (!t) return;
    let r = atomStoreManager.get(this.editingSnippetsAtom).snippets[t];
    r && (this.updateAnalyticsRecordGoToSourceClick(), _$$D(r, Zr, e => atomStoreManager.set(JL, e)));
  }
  async getCachedOrFetchCodeSnippets(e) {
    if (e) {
      let e = atomStoreManager.get(this._editingSnippetsAtom);
      if (!e.isLoading) return Object.values(e.snippets);
    }
    return await this.fetchNewCodeSnippets();
  }
  async fetchNewCodeSnippets() {
    let e = atomStoreManager.get(this._scenegraphSelectionAtom);
    if (0 === e.length) {
      atomStoreManager.set(this._editingSnippetsAtom, e => ({
        ...e,
        asyncRequestCounter: e.asyncRequestCounter + 1,
        isLoading: !1
      }));
      return null;
    }
    let t = atomStoreManager.get(this._editingSnippetsAtom).asyncRequestCounter + 1;
    atomStoreManager.set(this._editingSnippetsAtom, r => {
      let n = {};
      for (let [t, i] of Object.entries(r.snippets)) e.some(e => e.figmaFiberId === t) && (n[t] = i);
      return {
        snippets: n,
        asyncRequestCounter: t,
        isLoading: !0
      };
    });
    let r = [];
    let n = atomStoreManager.get(this._codeInstanceGuidToSnapshotInfoAtom);
    let a = e.length;
    for (let i of e) {
      let e = n[i.codeInstanceGuid];
      if (!e?.fiberNodes[i.figmaFiberId]) {
        logError("direct_manipulation", "No fiber node found for selected node", {}, {
          reportAsSentryError: !0
        });
        a--;
        continue;
      }
      let s = this._bundledSourceCode.get(i.codeInstanceGuid);
      if (!s) {
        logError("direct_manipulation", "No bundled source code found for selected node", {}, {
          reportAsSentryError: !0
        });
        a--;
        continue;
      }
      let d = this.getSnippetPromise(i.figmaFiberId, e, s);
      r.push(d);
      d.then(e => {
        atomStoreManager.set(this._editingSnippetsAtom, r => {
          if (r.asyncRequestCounter !== t || !e) return r;
          a--;
          let n = {
            ...r.snippets,
            [i.figmaFiberId]: e
          };
          return {
            ...r,
            snippets: n,
            isLoading: a > 0
          };
        });
      });
    }
    return await _7(r).then(e => e.flatMap(e => "resolve" === e.type && e.resolve ? e.resolve : []));
  }
  async getSnippetPromise(e, t, r) {
    let n = [];
    let i = e;
    for (; i;) {
      let e = t.fiberNodes[i];
      let r = e?.sourceCodeJSXCallId ?? null;
      let a = r ? t.sourceCodeJSXCalls[r] : null;
      a ? n.push(a) : n.push(null);
      i = e?.parentFigmaFiberId;
    }
    let a = t.codeBuildId;
    if (0 === n.length || null === n[0] || !a) return null;
    let s = [];
    for (let e of n) {
      if (null === e) continue;
      let t = this.sourceCodeOffsetRemapper.translateBundledSourceCodeToCurrentCodeFileOffsets(e, a, r);
      if (!t) return null;
      s.push(t);
    }
    return await Y3(s);
  }
  destroy() {
    for (let e of this._unsubscribes) e();
    this._unsubscribes = [];
  }
  selectedElementIdsChanged() {
    let e = null !== atomStoreManager.get(this.selectedFigmaFiberIdsAtom);
    atomStoreManager.set(this._editingSnippetsAtom, {
      snippets: {},
      isLoading: e,
      asyncRequestCounter: 0
    });
    e && this.fetchNewCodeSnippets();
  }
}
export function $$E0(e, t) {
  let r;
  let n = useAtomWithSubscription(t.selectedFiberNodeInfosAtom);
  let i = useAtomWithSubscription(t.editedStylesAtom);
  for (let t of n) {
    let n = function (t) {
      let r = i[t.figmaFiberId];
      return r && void 0 !== r[e] ? r[e] : t.elementInfo?.computedStyles[e];
    }(t);
    if (void 0 !== n) {
      if (void 0 === r) r = n;else if (r !== n) return oV;
    }
  }
  return r;
}
export function $$y4(e, t, r = 10) {
  let n = $$E0(e, t);
  if ("string" == typeof n) {
    let e = parseInt(n, r);
    return isNaN(e) ? void 0 : e;
  }
  return n;
}
export function $$b2(e, t) {
  let r = $$E0(e, t);
  if ("string" == typeof r) {
    let e = parseFloat(r);
    return isNaN(e) ? void 0 : e;
  }
  return r;
}
export function $$T3(e) {
  let t = useAtomWithSubscription(e.editingSnippetsAtom, {
    deferToFrame: !0
  });
  if (t.isLoading) return D.Loading;
  {
    let e = Object.values(t.snippets);
    if (0 === e.length) return D.Disabled;
    for (let t of e) if (!$5(t)) return D.Disabled;
    return D.Enabled;
  }
}
export const CQ = $$E0;
export const Mj = $$f1;
export const aV = $$b2;
export const lj = $$T3;
export const wc = $$y4;