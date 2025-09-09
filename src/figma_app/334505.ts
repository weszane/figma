import { useMemo, useEffect } from "react";
import { useSelector } from "react-redux";
import { LayoutTabType } from "../figma_app/763686";
import { l as _$$l } from "../905/716947";
import { getSingletonSceneGraph } from "../905/700578";
import { getFeatureFlags } from "../905/601108";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { useMemoStable } from "../905/19536";
import { Mz } from "../vendor/925040";
import { ZC } from "../figma_app/39751";
import { LU, jw } from "../figma_app/327588";
import { Lk, x } from "../figma_app/639711";
import { gI, Pc } from "../figma_app/396464";
import { isValidValue, MIXED_MARKER } from "../905/216495";
import { y7 } from "../figma_app/385874";
import { KH, eY } from "../figma_app/722362";
import { uN } from "../figma_app/646357";
import { Fk } from "../figma_app/167249";
import { Sh } from "../figma_app/889655";
import { C1 } from "../figma_app/505098";
import { HW } from "../figma_app/357367";
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
  return e.fills.some(e => "IMAGE" === e.type);
}
export function $$x11(e) {
  return v(e, e => getFeatureFlags().buzz_video_export ? $$A10(e) || e.fills.some(e => "VIDEO" === e.type) : $$A10(e));
}
var $$N3 = (e => (e.TEXT = "TEXT", e.IMAGE = "IMAGE", e.INSTANCE = "INSTANCE", e))($$N3 || {});
var C = (e => (e.INSTANCE = "INSTANCE", e.DETACHED = "DETACHED", e.MIXED = "MIXED", e))(C || {});
export function $$w1() {
  let e = getSingletonSceneGraph();
  let t = gI();
  let r = useSelector(Sh);
  let a = null;
  let s = !1;
  for (let r of t) {
    let t = e.get(r);
    if (t && ("INSTANCE" === t.type ? (s = !0, null === a ? a = "INSTANCE" : "INSTANCE" !== a && (a = "MIXED")) : "FRAME" === t.type && (null === a ? a = "DETACHED" : "DETACHED" !== a && (a = "MIXED")), "MIXED" === a)) break;
  }
  let l = "INSTANCE" === a;
  let d = "DETACHED" === a;
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
  let e = KH();
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
  return P(Fk(t => t.get(e)?.fills ?? []));
}
export function $$L8(e) {
  return P(e.fills);
}
function P(e) {
  let t = getFeatureFlags().buzz_video_export;
  let r = null;
  let n = null;
  if (isValidValue(r) || null === r) {
    let i = [null, null];
    e.forEach((e, r) => {
      ("IMAGE" === e.type || t && "VIDEO" === e.type) && (i = [e, r]);
    });
    i && null === r ? (r = i[0], n = i[1]) : i && r !== i[0] && (r = MIXED_MARKER, n = null);
  }
  return {
    mediaPaint: r && isValidValue(r) ? y7(r) : r,
    mediaPaintIndex: n
  };
}
export function $$D6(e) {
  let t = Fk((e, t) => t.map(t => {
    let r = e.get(t);
    return r ? v(r, $$A10).map(e => e.guid) : [];
  }).flat(), e);
  return useMemoStable(() => t, [t]);
}
export function $$k9(e) {
  let t = Fk((e, t) => t.map(t => {
    let r = e.get(t);
    return r ? $$x11(r).map(e => e.guid) : [];
  }).flat(), e);
  return useMemoStable(() => t, [t]);
}
export let $$M12 = Mz([C1], e => {
  if (!e) return [];
  let t = new Set();
  Object.keys(e).forEach(e => {
    let r = getSingletonSceneGraph().get(e);
    let n = r?.containingCooperFrameId();
    n && "-1:-1" !== n && t.add(n);
  });
  return Array.from(t);
});
export function $$F4() {
  let e = gI();
  let t = eY();
  if (1 === e.length) {
    let r = t.get(e[0] ?? "");
    let n = t.get(r?.symbolId ?? "");
    let i = n?.componentKey;
    if (i) {
      let e = uN(i);
      if (e) return _$$l(e);
    }
  }
  return null;
}
export function $$j16() {
  let e = gI();
  let t = LU();
  let r = [...e];
  t && r.push(t);
  return r;
}
export function $$U7() {
  var e;
  let t = jw();
  let r = HW();
  e = $$j16();
  let a = Fk((e, t) => t.every(t => {
    let r = e.get(t);
    return !!r && !!r.isInstance;
  }), e) && !!e.length;
  let [s, l] = useAtomValueAndSetter(Lk);
  let c = useSelector(e => e.mirror.sceneGraphSelection);
  let u = ZC(c);
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
  return Fk((e, t) => {
    let r = e.get(t);
    return r?.hasVideoPaintOrHasVideoPaintDescendant;
  }, e);
}
export function $$V15() {
  let e = useSelector(Sh);
  let t = eY();
  return useMemo(() => e.length > 0 && e.every(e => {
    let r = t.get(e);
    return r?.fills?.some(e => "VIDEO" === e.type);
  }), [e, t]);
}
export function $$H0() {
  let e = Pc();
  let t = eY();
  return e.some(e => {
    let r = t.get(e);
    return r?.hasVideoPaintOrHasVideoPaintDescendant;
  });
}
export function $$z13(e) {
  let t = eY();
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