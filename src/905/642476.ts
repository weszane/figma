import { a7, I3 } from "../905/850029";
export function $$r0(e, t) {
  let i = a7(e, t);
  let r = I3(e, t);
  return {
    x: i.x,
    y: i.y,
    width: r.x - i.x,
    height: r.y - i.y
  };
}
export function $$a1(e, t) {
  return t.x >= e.x && t.x <= e.x + e.width && t.y >= e.y && t.y <= e.y + e.height;
}
function s(e) {
  return e.width < 0 || e.height < 0 || !isFinite(e.x) || !isFinite(e.y) || !isFinite(e.width) || !isFinite(e.height);
}
export function $$o2(e, t) {
  if (s(e)) return t;
  if (s(t)) return e;
  let i = a7({
    x: e.x,
    y: e.y
  }, {
    x: t.x,
    y: t.y
  });
  let r = I3({
    x: e.x + e.width,
    y: e.y + e.height
  }, {
    x: t.x + t.width,
    y: t.y + t.height
  });
  return {
    x: i.x,
    y: i.y,
    width: r.x - i.x,
    height: r.y - i.y
  };
}
export const bW = $$r0;
export const iZ = $$a1;
export const yX = $$o2;