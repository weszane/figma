import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useMemoStable } from '../905/19536';
import { isValidValue, MIXED_MARKER } from '../905/216495';
import { getFeatureFlags } from '../905/601108';
import { getSingletonSceneGraph } from '../905/700578';
import { useAtomValueAndSetter } from '../figma_app/27355';
import { useDeepEqualSceneValue } from '../figma_app/167249';
import { isNotInFocusedNodeView, getFocusedNodeId } from '../figma_app/327588';
import { isSelfDesignMode } from '../figma_app/357367';
import { y7 } from '../figma_app/385874';
import { gI, Pc } from '../figma_app/396464';
import { C1 } from '../figma_app/505098';
import { Lk, x } from '../figma_app/639711';
import { uN } from '../figma_app/646357';
import { useSceneGraphSelection, useSceneGraphSelector } from '../figma_app/722362';
import { LayoutTabType } from '../figma_app/763686';
import { selectSceneGraphSelectionKeys } from '../figma_app/889655';
import { useLatestRef } from '../figma_app/922077';
import { createSelector } from '../vendor/925040';
function v(e, t, r = !0) {
  let n = getSingletonSceneGraph();
  if (r && (!e.visible || e.locked)) return [];
  let i = [];
  i.push(...e.childrenGuids.flatMap(e => {
    let i = n.get(e);
    return i ? v(i, t, r) : [];
  }));
  t(e) && i.push(e);
  return i;
}
export function $$A10(e) {
  return e.fills.some(e => e.type === 'IMAGE');
}
export function $$x11(e) {
  return v(e, e => getFeatureFlags().buzz_video_export ? $$A10(e) || e.fills.some(e => e.type === 'VIDEO') : $$A10(e));
}
var $$N3 = (e => (e.TEXT = 'TEXT', e.IMAGE = 'IMAGE', e.INSTANCE = 'INSTANCE', e))($$N3 || {});
var C = (e => (e.INSTANCE = 'INSTANCE', e.DETACHED = 'DETACHED', e.MIXED = 'MIXED', e))(C || {});
export function $$w1() {
  let e = getSingletonSceneGraph();
  let t = gI();
  let r = useSelector(selectSceneGraphSelectionKeys);
  let a = null;
  let s = !1;
  for (let r of t) {
    let t = e.get(r);
    if (t && (t.type === 'INSTANCE' ? (s = !0, a === null ? a = 'INSTANCE' : a !== 'INSTANCE' && (a = 'MIXED')) : t.type === 'FRAME' && (a === null ? a = 'DETACHED' : a !== 'DETACHED' && (a = 'MIXED')), a === 'MIXED')) break;
  }
  let l = a === 'INSTANCE';
  let d = a === 'DETACHED';
  let c = r.filter(e => t.includes(e));
  let u = c.length > 0;
  let p = u && c.length === t.length;
  return useMemo(() => ({
    onlyInstances: l,
    onlyDetached: d,
    onlyCooperFrames: p,
    anyCooperFrames: u,
    hasInstanceSelected: s
  }), [l, d, p, u, s]);
}
export function $$O14() {
  let e = useSceneGraphSelection();
  return useMemoStable(() => {
    let t = getSingletonSceneGraph();
    let r = new Set();
    Object.keys(e).forEach(e => {
      let n = t.get(e)?.containingCooperFrameId();
      n && r.add(n);
    });
    return Array.from(r.values());
  }, [e]);
}
export function $$R2(e) {
  return P(useDeepEqualSceneValue(t => t.get(e)?.fills ?? []));
}
export function $$L8(e) {
  return P(e.fills);
}
function P(e) {
  let t = getFeatureFlags().buzz_video_export;
  let r = null;
  let n = null;
  if (isValidValue(r) || r === null) {
    let i = [null, null];
    e.forEach((e, r) => {
      (e.type === 'IMAGE' || t && e.type === 'VIDEO') && (i = [e, r]);
    });
    i && r === null ? (r = i[0], n = i[1]) : i && r !== i[0] && (r = MIXED_MARKER, n = null);
  }
  return {
    mediaPaint: r && isValidValue(r) ? y7(r) : r,
    mediaPaintIndex: n
  };
}
export function $$D6(e) {
  let t = useDeepEqualSceneValue((e, t) => t.map(t => {
    let r = e.get(t);
    return r ? v(r, $$A10).map(e => e.guid) : [];
  }).flat(), e);
  return useMemoStable(() => t, [t]);
}
export function $$k9(e) {
  let t = useDeepEqualSceneValue((e, t) => t.map(t => {
    let r = e.get(t);
    return r ? $$x11(r).map(e => e.guid) : [];
  }).flat(), e);
  return useMemoStable(() => t, [t]);
}
export let $$M12 = createSelector([C1], e => {
  if (!e) return [];
  let t = new Set();
  Object.keys(e).forEach(e => {
    let r = getSingletonSceneGraph().get(e);
    let n = r?.containingCooperFrameId();
    n && n !== '-1:-1' && t.add(n);
  });
  return Array.from(t);
});
export function $$F4() {
  let e = gI();
  let t = useSceneGraphSelector();
  if (e.length === 1) {
    let r = t.get(e[0] ?? '');
    let n = t.get(r?.symbolId ?? '');
    let i = n?.componentKey;
    if (i) {
      let e = uN(i);
      if (e) return e;
    }
  }
  return null;
}
export function $$j16() {
  let e = gI();
  let t = getFocusedNodeId();
  let r = [...e];
  t && r.push(t);
  return r;
}
export function $$U7() {
  let e;
  let t = isNotInFocusedNodeView();
  let r = isSelfDesignMode();
  e = $$j16();
  let a = useDeepEqualSceneValue((e, t) => t.every(t => {
    let r = e.get(t);
    return !!r && !!r.isInstance;
  }), e) && !!e.length;
  let [s, l] = useAtomValueAndSetter(Lk);
  let c = useSelector(e => e.mirror.sceneGraphSelection);
  let u = useLatestRef(c);
  let m = e => e.some(e => {
    let t = getSingletonSceneGraph().get(e);
    let r = t?.containingCooperFrameId();
    let n = r && getSingletonSceneGraph().get(r);
    return t && n && n.isInstance && t.isInstanceSublayer && t.isOrInCooperFrame;
  });
  let g = useMemo(() => m(Object.keys(c)), [c]);
  let f = useMemo(() => m(u ? Object.keys(u) : []), [u]);
  let E = s === x.TEMPLATES;
  useEffect(() => {
    r && E && !t && a && g && !f && l(x.FIELDS);
  }, [t, a, g, f, l, E, r]);
}
export function $$B17() {
  return useSelector(e => e.mirror.appModel.activeCanvasEditModeType === LayoutTabType.COOPER_BULK_CREATE);
}
export function $$G5(e) {
  return useDeepEqualSceneValue((e, t) => {
    let r = e.get(t);
    return r?.hasVideoPaintOrHasVideoPaintDescendant;
  }, e);
}
export function $$V15() {
  let e = useSelector(selectSceneGraphSelectionKeys);
  let t = useSceneGraphSelector();
  return useMemo(() => e.length > 0 && e.every(e => {
    let r = t.get(e);
    return r?.fills?.some(e => e.type === 'VIDEO');
  }), [e, t]);
}
export function $$H0() {
  let e = Pc();
  let t = useSceneGraphSelector();
  return e.some(e => {
    let r = t.get(e);
    return r?.hasVideoPaintOrHasVideoPaintDescendant;
  });
}
export function $$z13(e) {
  let t = useSceneGraphSelector();
  return e.some(e => {
    let r = t.get(e);
    return r?.hasVideoPaintOrHasVideoPaintDescendant;
  });
}
export const B2 = $$H0;
export const Cl = $$w1;
export const DW = $$R2;
export const PU = $$N3;
export const Pn = $$F4;
export const Uo = $$G5;
export const aK = $$D6;
export const bE = $$U7;
export const eG = $$L8;
export const hn = $$k9;
export const nL = $$A10;
export const oJ = $$x11;
export const qr = $$M12;
export const t9 = $$z13;
export const tc = $$O14;
export const uM = $$V15;
export const yB = $$j16;
export const z7 = $$B17;