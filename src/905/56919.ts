import { useState, useId, useMemo, useCallback, useEffect } from "react";
import { preventAndStopEvent } from "../905/955878";
import { positiveModulo } from "../905/875826";
import { getObjectKeys } from "../905/36803";
import { nD, Kq, aM, eR } from "../905/336566";
let l = {
  ArrowUp: (e, t) => "vertical" === t ? e - 1 : e,
  ArrowRight: (e, t) => "horizontal" === t ? e + 1 : e,
  ArrowDown: (e, t) => "vertical" === t ? e + 1 : e,
  ArrowLeft: (e, t) => "horizontal" === t ? e - 1 : e,
  Home: () => 0,
  End: () => -1
};
export function $$d1(e, t) {
  let [i, r] = useState(() => "function" == typeof t?.defaultActive ? t.defaultActive() : t?.defaultActive ?? nD(e)[0]);
  return $$c0(e, i, r, t);
}
export function $$c0(e, t, i, d) {
  let c = d?.orientation ?? "horizontal";
  let u = useId();
  let p = useMemo(() => nD(e), [e]);
  let m = useCallback((e, t) => {
    i(e);
    t || Kq(u, e);
  }, [i, u]);
  let h = useMemo(() => ({
    activeTab: t,
    tabs: p,
    tabGroupId: u,
    setActiveTab: m,
    orientation: c
  }), [t, p, u, m, c]);
  useEffect(() => {
    e[t] || m(p[0]);
  }, [e, t, p, m]);
  let g = useCallback(e => {
    if (!l[e.key] || e.getModifierState("Alt") || e.getModifierState("Control") || e.getModifierState("CapsLock")) return;
    preventAndStopEvent(e);
    let i = p.indexOf(t);
    let n = l[e.key]?.(i, c) ?? i;
    let s = p.length;
    e.repeat && (n > s - 1 || n < 0) || m(p[positiveModulo(n, s)]);
  }, [t, p, c, m]);
  return [useMemo(() => getObjectKeys(e).reduce((t, i) => (t[i] = {
    id: i,
    display: e[i],
    manager: h,
    triggerId: aM(u, i),
    panelId: eR(u, i),
    onKeyDown: g,
    actionOnPointerDown: d?.actionOnPointerDown ?? !0,
    recordingKey: d?.recordingKey ? `${d.recordingKey}.${i}` : void 0
  }, t), {}), [h, u, g, e, d?.actionOnPointerDown, d?.recordingKey]), useMemo(() => getObjectKeys(e).reduce((t, i) => (t[i] = {
    id: i,
    display: e[i],
    manager: h,
    triggerId: aM(u, i),
    panelId: eR(u, i)
  }, t), {}), [u, e, h]), h];
}
export const H = $$c0;
export const u = $$d1;