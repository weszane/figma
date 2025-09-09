import { useMemo } from "react";
import { useSelector } from "react-redux";
import { isValidSessionLocalID, parseSessionLocalID } from "../905/871411";
import { bV } from "../figma_app/387100";
import { getSingletonSceneGraph } from "../905/700578";
import { useMemoStable } from "../905/19536";
export function $$c7(e, t) {
  return "SLIDE_ROW" === e.type || t && e.isStateGroup;
}
export function $$u2() {
  let e = function () {
    let e = function () {
      let e = function () {
        let e = getSingletonSceneGraph();
        return e && e.isValidScene ? bV(e, "0:1") : [];
      }().filter(e => "SLIDE_GRID" === e.type);
      if (e.length) {
        if (e.length > 1) {
          console.warn("Multiple canvas grid node found");
          return;
        }
        return e[0];
      }
    }();
    return e ? e.childrenNodes.filter(e => $$c7(e, !0)) : (console.warn("No valid canvas grid node found"), []);
  }();
  let t = [];
  for (let r of e) {
    let e = r.childrenNodes.filter(e => e.isCooperFrame);
    t = t.concat(e);
  }
  return t;
}
export function $$p3() {
  return $$u2().map(e => e.guid);
}
export function $$_0() {
  let e = $$p3();
  return useMemoStable(() => e, [e]);
}
export function $$h4() {
  let e = useSelector(e => e.mirror.sceneGraphSelection);
  return useMemo(() => {
    let t = new Set();
    Object.keys(e).forEach(e => {
      let r = getSingletonSceneGraph().get(e);
      let n = r?.containingCooperFrameId();
      n && isValidSessionLocalID(parseSessionLocalID(n)) && t.add(n);
    });
    let r = Array.from(t);
    return 1 === r.length ? r[0] : null;
  }, [e]);
}
export function $$m6() {
  let e = useSelector(e => e.mirror.sceneGraphSelection);
  return useMemoStable(() => {
    let t = new Set();
    Object.keys(e).forEach(e => {
      let r = getSingletonSceneGraph().get(e);
      let n = r?.containingCooperFrameId();
      n && isValidSessionLocalID(parseSessionLocalID(n)) && t.add(n);
    });
    return [...t];
  }, [e]);
}
export function $$g5() {
  let e = useSelector(e => e.mirror.sceneGraphSelection);
  return useMemoStable(() => {
    let t = new Set();
    Object.keys(e).forEach(e => {
      let r = getSingletonSceneGraph().get(e);
      r && $$c7(r, !0) && t.add(r.guid);
    });
    return [...t];
  }, [e]);
}
export function $$f1(e) {
  let t = e.containingCooperFrame();
  return !!t && t.isInstance;
}
export const Pc = $$_0;
export const Pk = $$f1;
export const Wn = $$u2;
export const XR = $$p3;
export const bd = $$h4;
export const dS = $$g5;
export const gI = $$m6;
export const qq = $$c7;