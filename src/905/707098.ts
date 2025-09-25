import { isNotNull } from "../905/8035";
var $$r5 = (e => (e[e.StyleNotSet = 0] = "StyleNotSet", e[e.StyleNotFound = 1] = "StyleNotFound", e))($$r5 || {});
export function $$a1(e, t, i, n) {
  if (!(t in e)) {
    let r = n(i);
    e[t] = r;
  }
  return e[t];
}
export function $$s6(e, t) {
  let i;
  if ("string" == typeof e.fillStyleId) {
    let r = e.fillStyleId;
    return (i = t.resolveColor(r), isNotNull(i)) ? i : 1;
  }
  return 0;
}
export function $$o10(e, t) {
  let i;
  if ("string" == typeof e.strokeStyleId) {
    let r = e.strokeStyleId;
    return (i = t.resolveColor(r), isNotNull(i)) ? i : 1;
  }
  return 0;
}
export function $$l0(e, t) {
  let i;
  if ("string" == typeof e.effectStyleId) {
    let r = e.effectStyleId;
    return (i = t.resolveEffect(r), isNotNull(i)) ? i : 1;
  }
  return 0;
}
export function $$d4(e, t) {
  let i;
  if ("string" == typeof e.textStyleId) {
    let r = e.textStyleId;
    return (i = t.resolveTextStyle(r), isNotNull(i)) ? i : 1;
  }
  return 0;
}
export function $$c8(e) {
  return 0 !== e && 1 !== e;
}
export function $$u3(e, t) {
  return e && void 0 !== e[t];
}
export var $$p7 = (e => (e[e.NotFound = 0] = "NotFound", e[e.NotResolved = 1] = "NotResolved", e[e.Resolved = 2] = "Resolved", e[e.Matching = 3] = "Matching", e))($$p7 || {});
export function $$m9(e, t, i, n) {
  if (!n) return null;
  if ($$u3(e, i)) return function (e, t) {
    if (!t) return {
      status: 0
    };
    let i = e.resolveVariable(t.id);
    return i ? {
      name: i.name,
      codeSyntax: i.codeSyntax ?? void 0,
      status: 2,
      id: i.id
    } : {
      status: 1
    };
  }(n, e[i]);
  let r = t?.[i];
  return r && 0 !== r.length ? {
    status: 3,
    vars: r
  } : null;
}
export function $$h2(e) {
  return !!e && 2 === e.status;
}
export const $r = $$l0;
export const H2 = $$a1;
export const HN = $$h2;
export const Hb = $$u3;
export const V$ = $$d4;
export const _2 = $$r5;
export const fl = $$s6;
export const jg = $$p7;
export const oQ = $$c8;
export const ut = $$m9;
export const wI = $$o10;