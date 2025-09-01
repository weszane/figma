export function $$r0(e, t) {
  $$s1(t) ? e.frameMaskDisabled = !1 : e.frameMaskDisabled = !0;
}
export function $$s1(e) {
  let t = null != e.styles.overflowX && "visible" !== e.styles.overflowX;
  let i = null != e.styles.overflowY && "visible" !== e.styles.overflowY;
  return t || i;
}
export const D = $$r0;
export const h = $$s1;