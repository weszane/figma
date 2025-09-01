export function $$n3(e) {
  return {
    x: e.x,
    y: e.y,
    width: e.w,
    height: e.h
  };
}
export function $$r0(e, t) {
  let i = Math.max(e.x, t.x);
  let n = Math.max(e.y, t.y);
  let r = Math.min(e.x + e.width, t.x + t.width);
  let a = Math.min(e.y + e.height, t.y + t.height);
  return r >= i && a >= n ? {
    x: i,
    y: n,
    width: r - i,
    height: a - n
  } : null;
}
export function $$a2(e, t) {
  return e.x >= t.x && e.y >= t.y && e.x + e.width <= t.x + t.width && e.y + e.height <= t.y + t.height;
}
export function $$s1(e, t) {
  let i = e.x;
  let n = e.x + e.width;
  let r = e.y;
  let a = e.y + e.height;
  let s = t.x;
  let o = t.x + t.width;
  let l = t.y;
  let d = t.y + t.height;
  if (n >= s && o >= i && a >= l && d >= r) return 0;
  let c = Math.max(0, Math.max(s - n, i - o));
  let u = Math.max(0, Math.max(l - a, r - d));
  return Math.sqrt(c * c + u * u);
}
export const E$ = $$r0;
export const M$ = $$s1;
export const oP = $$a2;
export const rb = $$n3;