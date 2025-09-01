import { Ck, ff, Ni, B$, Cy, hV, kF, Iq } from "../vendor/408361";
var s = function (e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.$$default : e;
}(function (e) {
  let r = new URLSearchParams();
  r.append("code", e);
  for (let e = 1; e < $$arguments.length; e++) r.append("v", $$arguments[e]);
  throw Error(`Minified Lexical error #${e}; visit https://lexical.dev/docs/error?${r} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`);
});
let o = new Map();
function a(e) {
  let r = {};
  for (let n of e.split(";")) if ("" !== n) {
    let [e, i] = n.split(/:([^]+)/);
    e && i && (r[e.trim()] = i.trim());
  }
  return r;
}
export function $$h3(e, r) {
  let n = e.getStartEndPoints();
  if (r.isSelected(e) && !r.isSegmented() && !r.isToken() && null !== n) {
    let [s, o] = n;
    let a = e.isBackward();
    let h = s.getNode();
    let d = o.getNode();
    let p = r.is(h);
    let g = r.is(d);
    if (p || g) {
      let [n, s] = Ck(e);
      let o = h.is(d);
      let p = r.is(a ? d : h);
      let g = r.is(a ? h : d);
      let m;
      let v = 0;
      o ? (v = n > s ? s : n, m = n > s ? n : s) : p ? (v = a ? s : n, m = void 0) : g && (v = 0, m = a ? n : s);
      r.__text = r.__text.slice(v, m);
      return r;
    }
  }
  return r;
}
export function $$d1(e) {
  if ("text" === e.type) return e.offset === e.getNode().getTextContentSize();
  let r = e.getNode();
  ff(r) || s(177);
  return e.offset === r.getChildrenSize();
}
export function $$p4(e) {
  let r = e.getStyle();
  let n = a(r);
  o.set(r, n);
}
export function $$g6(e, r) {
  if (null === e) return;
  let n = e.getStartEndPoints();
  let o = n ? n[0] : null;
  if (null !== o && "root" === o.key) {
    let e = r();
    let n = Ni();
    let s = n.getFirstChild();
    return void (s ? s.replace(e, !0) : n.append(e));
  }
  let a = e.getNodes();
  let h = null !== o && function (e, r) {
    let n = e;
    for (; null !== n && null !== n.getParent() && !r(n);) n = n.getParentOrThrow();
    return r(n) ? n : null;
  }(o.getNode(), x);
  h && -1 === a.indexOf(h) && a.push(h);
  for (let e = 0; e < a.length; e++) {
    let n = a[e];
    if (!x(n)) continue;
    ff(n) || s(178);
    let o = r();
    o.setFormat(n.getFormatType());
    o.setIndent(n.getIndent());
    n.replace(o, !0);
  }
}
export function $$m0(e, r) {
  let n = B$(e.focus, r);
  return Cy(n) && !n.isIsolated() || ff(n) && !n.isInline() && !n.canBeEmpty();
}
function v(e, r, n, i) {
  e.modify(r ? "extend" : "move", n, i);
}
function y(e) {
  let r = e.anchor.getNode();
  return "rtl" === (hV(r) ? r : r.getParentOrThrow()).getDirection();
}
export function $$b2(e, r, n) {
  let i = y(e);
  v(e, r, n ? !i : i, "character");
}
export function $$O5(e) {
  let r = e.anchor;
  let n = e.focus;
  let s = r.getNode().getTopLevelElementOrThrow().getParentOrThrow();
  let o = s.getFirstDescendant();
  let a = s.getLastDescendant();
  let h = "element";
  let d = "element";
  let p = 0;
  kF(o) ? h = "text" : ff(o) || null === o || (o = o.getParentOrThrow());
  kF(a) ? (d = "text", p = a.getTextContentSize()) : ff(a) || null === a || (a = a.getParentOrThrow());
  o && a && (r.set(o.getKey(), 0, h), n.set(a.getKey(), p, d));
}
function x(e) {
  if (Cy(e) || !ff(e) || Iq(e)) return !1;
  let r = e.getFirstChild();
  let n = r?.isInline();
  return !e.isInline() && !1 !== e.canBeEmpty() && n;
}
export const Cb = $$m0;
export const Nx = $$d1;
export const Rk = $$b2;
export const SD = $$h3;
export const Xg = $$p4;
export const e1 = $$O5;
export const zI = $$g6;