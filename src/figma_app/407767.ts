import { ViewType, Fullscreen } from "../figma_app/763686";
import { hV } from "../figma_app/387100";
import { getFeatureFlags } from "../905/601108";
import s from "../vendor/675871";
import { debugState } from "../905/407919";
import { getInitialOptions } from "../figma_app/169182";
import { T1 } from "../figma_app/545293";
import { cJ } from "../figma_app/976749";
import { qc } from "../figma_app/62612";
import { p8 } from "../figma_app/722362";
import { selectCurrentFile } from "../figma_app/516028";
import { Ls, m3, ZA } from "../figma_app/645694";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { C7 } from "../figma_app/144974";
import { JL } from "../figma_app/663669";
import { PV, Ou } from "../figma_app/257779";
var o = s;
export function $$b10() {
  getInitialOptions().anticipation_config || (getInitialOptions().anticipation_config = PV);
  return getInitialOptions().anticipation_config;
}
var T = (e => (e[e.DEFAULT = 2] = "DEFAULT", e))(T || {});
export function $$I3() {
  return 2;
}
export function $$S2() {
  return JL;
}
export function $$v11(e) {
  let t = 0;
  hV(e, e => !e || e.isInternalOnlyNode || e.opacity <= 0 || !e.visible ? "skip" : (t += 1, "INSTANCE" === e.type) ? "skip" : void 0);
  return t;
}
export function $$A8(e, t) {
  let r = e.absoluteBoundingBox;
  let n = t.absoluteBoundingBox;
  return {
    size: {
      width: r.w,
      height: r.h
    },
    fragmentSize: {
      width: n.w,
      height: n.h
    },
    relativePosition: {
      x: r.x - n.x,
      y: r.y - n.y
    }
  };
}
function x(e, t) {
  let r = {
    x: e.relativePosition.x + e.size.width / 2,
    y: e.relativePosition.y + e.size.height / 2
  };
  let n = {
    x: r.x / e.fragmentSize.width,
    y: r.y / e.fragmentSize.height
  };
  let i = {
    x: t.relativePosition.x + t.size.width / 2,
    y: t.relativePosition.y + t.size.height / 2
  };
  let a = {
    x: i.x / t.fragmentSize.width,
    y: i.y / t.fragmentSize.height
  };
  let s = {
    x: 1 - Math.abs(n.x - a.x),
    y: 1 - Math.abs(n.y - a.y)
  };
  return Math.sqrt(Math.pow(s.x, 2) + Math.pow(s.y, 2));
}
export function $$N0({
  usage: e,
  filteringConfig: t,
  subscribedLibraryKeys: r,
  fragment: n,
  targetNodePositionInfo: i
}) {
  if (!e.libraryKey || !r?.has(e.libraryKey)) return null;
  let a = {
    size: {
      width: e.positionInfo.width,
      height: e.positionInfo.height
    },
    fragmentSize: {
      width: n.width,
      height: n.height
    },
    relativePosition: {
      x: e.positionInfo.relativeX,
      y: e.positionInfo.relativeY
    }
  };
  let s = i ? x(a, i) : 0;
  if ((t?.proximityScoreThreshold || 0) > s) return null;
  switch (a.proximityScore = s, e.type) {
    case "symbol":
      return {
        fragment: n,
        key: e.key,
        libraryKey: e.libraryKey,
        positionInfo: a,
        type: PrimaryWorkflowEnum.COMPONENT
      };
    case "state_group":
      return {
        fragment: n,
        key: e.key,
        libraryKey: e.libraryKey,
        positionInfo: a,
        type: PrimaryWorkflowEnum.STATE_GROUP,
        stateComponentKey: e.stateComponentKey
      };
    default:
      return null;
  }
}
export function $$C1({
  scene: e,
  root: t,
  fragment: r,
  targetNodePositionInfo: n,
  filteringConfig: a,
  subscribedLibraryKeys: s,
  includeNestedComponents: o,
  includeComponentProps: l
}) {
  let d = [];
  let c = o ? void 0 : "skip";
  let u = !!n;
  hV(t, t => {
    if (!t || t.isInternalOnlyNode || t.opacity <= 0 || !t.visible) return "skip";
    if ("INSTANCE" === t.type) {
      let i = {
        fragment: r
      };
      let o = t.symbolId;
      if (!o) return c;
      if (u) {
        let r = $$A8(t, e.get(t.findContainingTopLevelFrameOrSelf()));
        let s = n ? x(r, n) : 0;
        if ((a?.proximityScoreThreshold || 0) > s) return c;
        i.positionInfo = {
          ...r,
          proximityScore: s
        };
      }
      let p = e.get(o);
      if (!p) return c;
      let _ = l ? t.componentProperties() : void 0;
      if (p.isState) {
        let t = e.get(p.containingStateGroupId);
        if (!t) return c;
        i = {
          ...i,
          type: PrimaryWorkflowEnum.STATE_GROUP,
          key: t.stateGroupKey,
          stateComponentKey: p.componentKey,
          libraryKey: t.sourceLibraryKey,
          props: _
        };
      } else i = {
        ...i,
        type: PrimaryWorkflowEnum.COMPONENT,
        key: p.componentKey,
        libraryKey: p.sourceLibraryKey,
        props: _
      };
      i.key && i.libraryKey && i.libraryKey.length && p.publishID && p.isSubscribedAsset && i.libraryKey && (!s || s?.has(i.libraryKey)) && d.push(i);
      return c;
    }
  });
  return d;
}
export function $$w9(e) {
  let t = {};
  e.forEach(e => {
    let {
      key,
      type,
      libraryKey,
      fragment,
      positionInfo,
      asset
    } = e;
    t[key] || (t[key] = {
      type,
      key,
      libraryKey,
      asset,
      count: 0,
      fragmentCount: 0,
      countPerFragment: {},
      scorePerFragment: {},
      stateCounts: {},
      proximityScores: [],
      avgCountPerFragment: 0,
      avgScorePerFragment: 0,
      avgProximityScore: 0
    });
    let l = t[key];
    l.count++;
    positionInfo && l.proximityScores.push(positionInfo.proximityScore);
    let d = fragment ? `${fragment.file_key}.${fragment.node_id}` : null;
    if (fragment && d && (!l.countPerFragment[d] && (l.countPerFragment[d] = 0, l.scorePerFragment[d] = fragment.score, l.fragmentCount++), l.countPerFragment[d]++), type === PrimaryWorkflowEnum.STATE_GROUP) {
      let {
        stateComponentKey
      } = e;
      l.stateCounts[stateComponentKey] || (l.stateCounts[stateComponentKey] = 0);
      l.stateCounts[stateComponentKey]++;
    }
  });
  Object.values(t).forEach(e => {
    let t = Object.values(e.countPerFragment);
    e.avgCountPerFragment = t.length > 0 ? o()(t) : 0;
    let r = Object.values(e.scorePerFragment);
    e.avgScorePerFragment = r.length > 0 ? o()(r) : 0;
    e.avgProximityScore = e.proximityScores.length > 0 ? o()(e.proximityScores) : 0;
  });
  return t;
}
export function $$O15({
  scene: e,
  topLevelNode: t
}) {
  return $$w9($$C1({
    scene: e,
    root: t,
    includeNestedComponents: !0,
    includeComponentProps: !1
  }));
}
export function $$R5({
  componentUsage: e,
  rankingConfig: t
}) {
  let r = Object.values(e);
  let n = {
    count: Math.max(...r.map(e => e.count)),
    fragmentCount: Math.max(...r.map(e => e.fragmentCount)),
    avgCountPerFragment: Math.max(...r.map(e => e.avgCountPerFragment)),
    avgScorePerFragment: Math.max(...r.map(e => e.avgScorePerFragment)),
    avgProximityScore: Math.max(...r.map(e => e.avgProximityScore))
  };
  let i = {
    count: Math.min(...r.map(e => e.count)),
    fragmentCount: Math.min(...r.map(e => e.fragmentCount)),
    avgCountPerFragment: Math.min(...r.map(e => e.avgCountPerFragment)),
    avgScorePerFragment: Math.min(...r.map(e => e.avgScorePerFragment)),
    avgProximityScore: Math.min(...r.map(e => e.avgProximityScore))
  };
  return r.map(e => {
    let r = (e, t, r) => r === t ? 0 : (e - t) / (r - t);
    let a = r(e.count, i.count, n.count) * t.count;
    let s = r(e.fragmentCount, i.fragmentCount, n.fragmentCount) * t.fragmentCount;
    let o = r(e.avgCountPerFragment, i.avgCountPerFragment, n.avgCountPerFragment) * t.avgCountPerFragment;
    let l = r(e.avgScorePerFragment, i.avgScorePerFragment, n.avgScorePerFragment) * t.avgScorePerFragment;
    let d = r(e.avgProximityScore, i.avgProximityScore, n.avgProximityScore) * t.avgProximityScore;
    return {
      ...e,
      key: e.key,
      score: a + s + o + l + d
    };
  }).sort((e, t) => t.score - e.score);
}
export function $$L12({
  componentUsage: e,
  contextComponentUsage: t
}) {
  Object.values(e).forEach(({
    key: r,
    countPerFragment: n
  }) => {
    let i = t[r];
    if (!i) return;
    let a = function (e) {
      if (0 === e.length) return 0;
      if (1 === e.length) return e[0];
      let t = [...e].sort((e, t) => e - t);
      let r = Math.floor(t.length / 2);
      return t.length % 2 != 0 ? t[r] : (t[r - 1] + t[r]) / 2;
    }(Object.values(n));
    i.count < a || delete e[r];
  });
}
export function $$P14() {
  let e = getFeatureFlags().anticipation;
  let t = C7();
  let r = selectCurrentFile()?.canEdit;
  let i = p8("topLevelMode") === ViewType.LAYOUT;
  let s = cJ();
  return e && t && r && i && !!Fullscreen && !s;
}
var D = (e => (e.ASSET_NOT_FOUND = "asset_not_found", e.STATE_TO_STATE_GROUP = "state_to_state_group", e))(D || {});
export function $$k4(e) {
  let t = function (e, t) {
    let r = debugState.getState();
    let n = Ls(r);
    let i = m3(r);
    let a = {};
    e.forEach(({
      type: e,
      key: r
    }) => {
      switch (e) {
        case PrimaryWorkflowEnum.COMPONENT:
          let s = n[r];
          s && (a[r] = {
            ...s,
            suggestionSource: t
          });
          break;
        case PrimaryWorkflowEnum.STATE_GROUP:
          let o = i[r];
          o && (a[r] = {
            ...o,
            suggestionSource: t
          });
      }
    });
    return a;
  }(e.map(({
    key: e,
    type: t
  }) => ({
    type: t,
    key: e
  })), Ou.FRAGMENTS);
  let r = ZA(debugState.getState());
  let n = {
    asset_not_found: [],
    state_to_state_group: []
  };
  let i = [];
  e.forEach(e => {
    let a = t[e.key];
    if (!a) {
      n.asset_not_found.push({
        before: e,
        after: null
      });
      return;
    }
    let s = {
      ...e,
      asset: a
    };
    if (e.type === PrimaryWorkflowEnum.COMPONENT && a.type === PrimaryWorkflowEnum.COMPONENT && a.containing_frame?.containingStateGroup) {
      let t = a.containing_frame.containingStateGroup.nodeId;
      let i = t ? r[e.libraryKey]?.[t] : null;
      i ? (s = {
        ...e,
        key: i.key,
        type: PrimaryWorkflowEnum.STATE_GROUP,
        stateComponentKey: e.key,
        asset: {
          ...i,
          suggestionSource: Ou.FRAGMENTS
        }
      }, n.state_to_state_group.push({
        before: e,
        asset: a,
        after: s
      })) : n.state_to_state_group.push({
        before: e,
        asset: a,
        after: null
      });
    }
    i.push(s);
  });
  return {
    updatedComponentInfo: i,
    debugData: n
  };
}
export function $$M16(e) {
  if (e) return JSON.stringify({
    x: e.x,
    y: e.y
  });
}
export function $$F7(e) {
  if (e) return JSON.stringify({
    x: e.x,
    y: e.y,
    w: e.w,
    h: e.h
  });
}
export function $$j13(e) {
  let t = qc(e);
  return JSON.stringify({
    x: t.x,
    y: t.y,
    w: t.width,
    h: t.height
  });
}
export function $$U6(e) {
  let t = Date.now();
  return {
    thumbnail: T1(e),
    duration: Date.now() - t
  };
}
export const AP = $$N0;
export const Ag = $$C1;
export const GD = $$S2;
export const OD = $$I3;
export const Pt = $$k4;
export const Sg = $$R5;
export const ZU = $$U6;
export const ay = $$F7;
export const e_ = $$A8;
export const iG = $$w9;
export const k1 = $$b10;
export const mA = $$v11;
export const n1 = $$L12;
export const op = $$j13;
export const r8 = $$P14;
export const w3 = $$O15;
export const x_ = $$M16;
