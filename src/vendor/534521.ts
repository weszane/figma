import { a as _$$a } from "../vendor/833496";
import { s as _$$s } from "../vendor/878996";
import { T } from "../vendor/324039";
import { Yn } from "../vendor/316592";
export let $$h2 = "No stack, consider using an instance of Error";
export function $$d0({
  stackTrace: e,
  originalError: r,
  handlingStack: n,
  componentStack: i,
  startClocks: s,
  nonErrorPrefix: d,
  useFallbackStack: b = !0,
  source: O,
  handling: x
}) {
  let w = $$v1(r);
  !e && w && (e = T(r));
  return {
    startClocks: s,
    source: O,
    handling: x,
    handlingStack: n,
    componentStack: i,
    originalError: r,
    type: e ? e.name : void 0,
    message: p(e, w, d, r),
    stack: e ? Yn(e) : b ? $$h2 : void 0,
    causes: w ? y(r, O) : void 0,
    fingerprint: g(r),
    context: m(r)
  };
}
function p(e, r, n, o) {
  return e?.message && e?.name ? e.message : r ? "Empty message" : `${n} ${_$$s(_$$a(o))}`;
}
function g(e) {
  return $$v1(e) && "dd_fingerprint" in e ? String(e.dd_fingerprint) : void 0;
}
function m(e) {
  if (null !== e && "object" == typeof e && "dd_context" in e) return e.dd_context;
}
export function $$v1(e) {
  return e instanceof Error || "[object Error]" === Object.prototype.toString.call(e);
}
function y(e, r) {
  let n = e;
  let i = [];
  for (; $$v1(n?.cause) && i.length < 10;) {
    let e = T(n.cause);
    i.push({
      message: n.cause.message,
      source: r,
      type: e?.name,
      stack: e && Yn(e)
    });
    n = n.cause;
  }
  return i.length ? i : void 0;
}
export const As = $$d0;
export const bJ = $$v1;
export const e6 = $$h2;