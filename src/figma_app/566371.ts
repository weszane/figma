import { useMemo, useLayoutEffect, useEffect, useRef } from "react";
import { fp, eU, md, zl } from "../figma_app/27355";
import { wm } from "../905/19536";
import { Qw } from "../905/989992";
import { WE } from "../905/607410";
import { bu } from "../905/663269";
import { k } from "../905/745286";
import { GC, ff } from "../905/80725";
import { gc } from "../905/157003";
import { uf, Kh } from "../905/16369";
export function $$_2(e, t = {}) {
  return uf(e) ? function (e, t) {
    let r;
    let a;
    let o = k(t) ? e : h;
    [r, a] = fp(o);
    k(t) || (r = Qw.Paginated.disabled(), a = void 0);
    let l = useMemo(() => GC(a), [a]);
    return useMemo(() => [r, l], [r, l]);
  }(e, t) : Kh(e) ? function (e, t) {
    let r;
    let a;
    let o = k(t) ? e : h;
    [r, a] = fp(o);
    k(t) || (r = Qw.disabledSuspendable({
      release: () => {}
    }), a = void 0);
    let l = useMemo(() => ff(a), [a]);
    useLayoutEffect(() => {
      t.revalidateOnMount && l.refetch();
    }, [t.revalidateOnMount, l]);
    return useMemo(() => [r, l], [r, l]);
  }(e, t) : bu(e) ? m(gc(e.view)(e.args), t) : m(e, t);
}
let h = eU([null, null]);
function m(e, t) {
  return k(t) ? [md(e), void 0] : (md(h), [Qw.disabledSuspendable({
    release: () => {}
  }), void 0]);
}
export function $$g1(e, t = {}) {
  let r = k(t);
  let o = wm(() => e, [e]);
  let l = useMemo(() => r ? eU(e => o.map(t => e(t))) : eU(() => o.map(() => Qw.disabled())), [o, r]);
  useEffect(() => {
    let e = zl.sub(l, () => {});
    return () => {
      requestAnimationFrame(e);
    };
  }, [l]);
  return md(l);
}
let f = 0;
setInterval(() => {
  f = 0;
}, 3e3);
let $$E6 = function (...e) {
  let t = e.filter(e => "loading" === e.status).map(e => e.suspense);
  let r = e.filter(e => "loading" !== e.status).map(e => e.suspense);
  t.length > 0 && (f++, t.forEach(e => e.retain()), WE(Promise.all(t.map(e => e.getPromise()))));
  useEffect(() => {
    r.forEach(e => e.release());
  }, [r]);
  return [...e];
};
let y = {};
export function $$b4(e, t, r) {
  let i = r?.onResolveForMetrics;
  let a = r?.metricKey;
  let s = "loading" !== e.status;
  let l = "loaded" === e.status;
  "loading" === e.status && "suspend" === t && (a && (r?.willSuspend(), y[a] = performance.now()), e.suspense.retain(), WE(e.suspense.getPromise()));
  useEffect(() => {
    s && e.suspense.release();
  }, [s, e.suspense]);
  useEffect(() => {
    if (l && i && a && null != y[a]) {
      let e = performance.now() - y[a];
      delete y[a];
      i(e);
    }
  }, [l, i, a]);
  return e;
}
export function $$T0(e, t) {
  let r = useRef();
  useLayoutEffect(() => {
    "loading" === r.current && "loaded" === e.status && t(e.data);
    r.current = e.status;
  }, [e, t]);
}
export function $$I7(e, t) {
  let r = t?.enabled;
  let n = md(e);
  if (!1 !== r) return n;
}
export function $$S5(e, t) {
  return $$I7(e, t)?.mutate;
}
export function $$v3(e) {
  return t => zl.set(e, [t]);
}
export const DC = $$T0;
export const En = $$g1;
export const IT = $$_2;
export const Jl = $$v3;
export const QV = $$b4;
export const gY = $$S5;
export const mI = $$E6;
export const n_ = $$I7;