import { useMemo, useRef, useEffect, createContext, useContext } from "react";
import { useStore, useSelector } from "../vendor/514228";
import { c2 } from "../905/382883";
import { Im } from "../figma_app/493477";
import { juq } from "../figma_app/763686";
import { ReduxSceneGraph } from "../905/700578";
import { R } from "../905/103090";
import { T } from "../905/868547";
let u = e => e?.mirror?.sceneGraph;
let p = () => useStore();
export function $$_7() {
  return useSelector(u);
}
export function $$h3() {
  return useMemo(() => new ReduxSceneGraph(juq.PLAYGROUND), []);
}
export let $$m1 = () => useSelector(e => e.mirror.sceneGraphSelection);
export function $$g5() {
  return !useSelector(e => Im(e.mirror.sceneGraphSelection));
}
export function $$f9() {
  let e = $$m1();
  let t = $$_7();
  if (1 !== Object.keys(e).length) return null;
  let r = Object.keys(e)[0];
  return t.get(r);
}
export function $$E2() {
  let e = useRef(null);
  let t = $$f9();
  return c2(t, e.current) ? e.current : (e.current = t, t);
}
export function $$y8(e) {
  let t = p();
  let r = $$m1();
  let i = useRef();
  i.current = () => {
    e(t.getState());
  };
  useEffect(() => {
    i.current();
  }, [r]);
}
export function $$b6() {
  return useSelector(e => e?.mirror?.appModel?.currentTool);
}
export function $$T4() {
  return useSelector(e => T(e?.progressBarState?.mode));
}
export function $$I10(e) {
  return useSelector(t => t.mirror.appModel[e]);
}
export function $$S12(...e) {
  return R(t => {
    let r = t.mirror.appModel;
    let n = {};
    for (let t of e) n[t] = r[t];
    return n;
  });
}
export let $$v11 = createContext(null);
export function $$A0() {
  let e = useSelector(e => e.mirror.sceneGraph);
  return useContext($$v11) || e;
}
export const B9 = $$A0;
export const KH = $$m1;
export const Mw = $$E2;
export const T3 = $$h3;
export const aV = $$T4;
export const ax = $$g5;
export const dH = $$b6;
export const eY = $$_7;
export const f4 = $$y8;
export const f9 = $$f9;
export const p8 = $$I10;
export const q0 = $$v11;
export const s6 = $$S12;