export function $$n0(e, t) {
  t.parent = e;
  e.children = e.children || [];
  e.children.push(t);
}
export function $$r2(e, t) {
  let i = (e, r = 0, s) => {
    let o;
    let {
      result,
      visitChildren: _visitChildren = !0
    } = $$a3(e) ? t(e, r, s) : {
      result: null,
      visitChildren: !0
    };
    let c = result ? {
      value: result
    } : null;
    let u = 0;
    c ? (u = 1, o = c) : o = s || {};
    c && s && $$n0(s, c);
    _visitChildren && e.children?.forEach(e => i(e, r + u, o));
    return o;
  };
  return i(e);
}
export function $$a3(e) {
  return void 0 !== e.value;
}
export function $$s6(e) {
  let t = [e];
  for (; t.length > 0;) {
    let e = t.pop();
    if (e && $$a3(e)) return !1;
    t.push(...(e?.children || []));
  }
  return !0;
}
export function $$o4(e) {
  return Array.isArray(e) ? 0 === e.length : $$s6(e);
}
export function $$l1(e) {
  if (Array.isArray(e)) return e;
  let t = [];
  let i = e => {
    e.value && t.push(e.value);
    e.children?.forEach(i);
  };
  i(e);
  return t;
}
export const NI = $$n0;
export const NU = $$l1;
export const X$ = $$r2;
export const aR = $$a3;
export const iM = $$o4;
export const lE = function e(t, i) {
  if ($$a3(t) && i(t.value)) return t.value;
  if (t.children) for (let n of t.children) {
    let t = e(n, i);
    if (t) return t;
  }
  return null;
};
export const mf = $$s6;