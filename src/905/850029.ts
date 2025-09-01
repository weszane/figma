export function $$n3(e, t) {
  return e.x === t.x && e.y === t.y;
}
export function $$r1(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y)
  };
}
export function $$a2(e, t) {
  return {
    x: e.x + t.x,
    y: e.y + t.y
  };
}
export function $$s0(e, t) {
  return {
    x: Math.max(e.x, t.x),
    y: Math.max(e.y, t.y)
  };
}
export const I3 = $$s0;
export const a7 = $$r1;
export const dC = $$a2;
export const wv = $$n3;