export function $$u0(e, t) {
  if (!e) return !1;
  let a = window.getComputedStyle(e);
  let u = /(auto|scroll)/.test(a.overflow + a.overflowX + a.overflowY);
  u && t && (u = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth);
  return u;
}
export const o = $$u0;