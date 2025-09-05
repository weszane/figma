import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { Ez5 } from "../figma_app/763686";
import { Y } from "../905/912236";
import { fn, sH } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { k9 } from "../905/19536";
import { KH } from "../figma_app/722362";
import { ut } from "../figma_app/84367";
import { Fk } from "../figma_app/167249";
export function $$_0() {
  let e = useSelector(e => e.mirror.sceneGraphSelection);
  return useMemo(() => {
    let t = new Set();
    Object.keys(e).forEach(e => {
      let r = getSingletonSceneGraph().get(e);
      let n = r?.containingSlideId;
      n && fn(sH(n)) && t.add(n);
    });
    let r = Array.from(t);
    return 1 === r.length ? r[0] : null;
  }, [e]);
}
export function $$h1() {
  let e = KH();
  return k9(() => {
    let t = getSingletonSceneGraph();
    return e && t ? Object.keys(e).filter(e => t.get(e)?.isSlideOrTemplate() ?? !1) : [];
  }, [e]);
}
export function $$m5() {
  let e = KH();
  return k9(() => {
    let t = getSingletonSceneGraph();
    let r = new Set();
    Object.keys(e).forEach(e => {
      let n = t.get(e)?.containingSlideId;
      n && r.add(n);
    });
    return Array.from(r.values());
  }, [e]);
}
export function $$g4() {
  let e = KH();
  return k9(() => {
    let t = getSingletonSceneGraph();
    let r = new Set();
    Object.keys(e).forEach(e => {
      let n = t.get(e);
      if (n?.type === "SLIDE_ROW") n.childrenNodes.forEach(e => {
        let t = e.childSlideOrSelfId;
        t && r.add(t);
      });else {
        let e = n?.containingSlideId;
        e && r.add(e);
      }
    });
    return Array.from(r.values());
  }, [e]);
}
export function $$f2() {
  let e = ut(Ez5?.canvasGrid().canvasGridArray, []).flat();
  return Fk((e, t) => {
    for (let r of t) {
      let t = e.get(r);
      if (Y(t) && !t.isSkippedSlide) return r;
    }
    return null;
  }, e);
}
export function $$E3() {
  let e = function () {
    let e = ut(Ez5?.canvasGrid().canvasGridArray, []).flat();
    let t = new Set($$m5());
    if (!e.length || !t.size) return [];
    let r = [];
    for (let n of e) if (t.has(n) && (r.push(n), t.$$delete(n)), 0 === t.size) break;
    return r;
  }();
  return Fk((e, t) => {
    for (let r of t) {
      let t = e.get(r);
      if (Y(t) && !t.isSkippedSlide) return r;
    }
    return null;
  }, e);
}
export const Jb = $$_0;
export const Wj = $$h1;
export const Xe = $$f2;
export const _Q = $$E3;
export const ax = $$g4;
export const l5 = $$m5;