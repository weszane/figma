import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ComponentPropType, SceneGraphHelpers } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { getFeatureFlags } from "../905/601108";
import { useMemoStable } from "../905/19536";
import { isInvalidValue, MIXED_MARKER } from "../905/216495";
import { selectSceneGraph } from "../figma_app/889655";
import { Yg, OE, Yi, k4, wd, ZH, aO, m5 } from "../figma_app/164212";
import { s as _$$s } from "../figma_app/335489";
import { C1 } from "../figma_app/505098";
import { vf, Jm } from "../figma_app/583247";
export function $$m1(e, t, r) {
  let a = useMemo(vf, []);
  let o = useSelector(selectSceneGraph);
  let d = useSelector(C1);
  let p = Yg(e, o);
  let m = useSelector(t => a(t, e));
  let g = r ? p : d;
  let I = $$f0(e, t);
  let S = useMemoStable(() => g && I ? E(I, e, g) : [], [g, e, I]);
  let v = useMemoStable(() => g ? y(S, e.filter(e => {
    let t = o.get(e);
    return t?.isInstanceOrCodeInstance;
  }), o, g) : {}, [e, o, g, S]);
  let A = useMemoStable(() => I && g ? b(I, g, o) : [], [I, g, o]);
  let x = useMemoStable(() => {
    let t = e.reduce((e, t) => {
      let r = o.get(t);
      let n = r?.symbolId;
      n && n !== defaultSessionLocalIDString && e.add(n);
      return e;
    }, new Set());
    return A.filter(e => t.has(e.guid));
  }, [A, e, o]);
  let N = useMemoStable(() => I && g ? T(I, e, g) : {}, [I, e, g]);
  return useMemo(() => ({
    typedPropDefsExcludingHidden: S,
    variantPropDefs: m,
    assignmentValuesByDefId: v,
    allStateVariantProps: A,
    backingStateVariantProps: x,
    statePropertyValues: N,
    productComponentGUID: I
  }), [S, m, v, A, x, N, I]);
}
export function $$g2(e, t, r, i) {
  let a;
  let s = useMemoStable(() => r ? E(r, [e], t) : [], [e, r, t]);
  let o = useMemoStable(() => r ? Jm(r, t) : [], [r, t]);
  let d = useMemoStable(() => y(s, [e], i, t), [e, t, i, s]);
  let c = useMemoStable(() => r && i.get(r)?.isStateGroup ? b(r, t, i) : [], [r, t, i]);
  let u = useMemoStable(() => r ? T(r, [e], t) : {}, [e, r, t]);
  let p = i.get(e)?.symbolId;
  p && i.get(p)?.isState || (a = []);
  a = c.filter(e => p === e.guid);
  return useMemo(() => ({
    typedPropDefsExcludingHidden: s,
    variantPropDefs: o,
    assignmentValuesByDefId: d,
    allStateVariantProps: c,
    backingStateVariantProps: a,
    statePropertyValues: u
  }), [s, o, d, c, a, u]);
}
export function $$f0(e, t) {
  let r = useSelector(selectSceneGraph);
  if (t !== OE.DEFINITION) return Yi(e, r) || k4(e, r) || "";
  {
    let t = wd(e, r);
    return t && !isInvalidValue(t) ? t.guid : "";
  }
}
function E(e, t, r) {
  let n = ZH(t, r);
  return aO(e, r).filter(e => !n.has(e.explicitDefID) && !(e.type === ComponentPropType.IMAGE && !getFeatureFlags().ds_image_props_sites) && !(e.type === ComponentPropType.SLOT && !getFeatureFlags().dse_slots));
}
function y(e, t, r, n) {
  let i = {};
  e.forEach(e => {
    let s = new Set();
    let o = new Set();
    for (let i of t) {
      let t = n[i]?.assignments?.[e.explicitDefID];
      if (t) {
        if (t.isMixed) {
          s.add(MIXED_MARKER);
          continue;
        }
        if (t.value && "object" == typeof t.value && "value" in t.value && t.value.value && "object" == typeof t.value.value && "stablePathToNode" in t.value.value && "indexOrKey" in t.value.value) {
          let e = t.value.value.stablePathToNode;
          let n = e && 1 === e.length ? r.get(e[0]) : null;
          if (n && n.isState && n.containingStateGroupId) {
            let e = SceneGraphHelpers.getExplicitPropDefIDBinding(n.guid, t.value.value.indexOrKey);
            t.value.value.stablePathToNode = [n.containingStateGroupId];
            t.value.value.indexOrKey = e;
          }
        }
        if (null != t.value) {
          let e = JSON.stringify(t.value);
          o.has(e) || s.add(t.value);
          o.add(e);
        }
      }
    }
    i[e.explicitDefID] = m5(e.type, s, r);
  });
  return i;
}
function b(e, t, r) {
  let n = r.get(e);
  return n?.isStateGroup ? n.childrenNodes.reduce((e, r) => {
    let n = t[r.guid]?.stateVariantProps;
    n ? e.push({
      ...n,
      guid: r.guid
    }) : e.push({
      propertyValues: r.statePropertyValues,
      guid: r.guid
    });
    return e;
  }, []) : [];
}
function T(e, t, r) {
  let n = r[e]?.stateGroupVariantProps?.propertySortOrder ?? [];
  return _$$s(r, t, n);
}
export const RB = $$f0;
export const an = $$m1;
export const nj = $$g2;