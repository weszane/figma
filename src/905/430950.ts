import { StrokeAlignment } from "../figma_app/763686";
import { r as _$$r } from "../905/249071";
import { M } from "../905/512402";
export let $$s0 = 12;
export function $$o3(e, t, i, n, r = 0) {
  let a = t.canvasSpaceToViewportSpace(e);
  a.x += r;
  i.fillCircle(a, 4, n);
}
export function $$l2(e, t, i, o, d, c = 0) {
  let p = t.canvasSpaceToViewportSpace(e);
  let m = Math.sqrt(392);
  p.x += c;
  i.renderFillAndStrokeRoundedRect(new _$$r(new M(p.x, p.y - m / 2 - 4), new M(m, m)), 3, .7853981635, d, o, 0, StrokeAlignment.INSIDE);
  $$u4(p, i, $$s0, 2, o);
}
export function $$d1(e, t, i, n, r, a = 0) {
  let o = t.canvasSpaceToViewportSpace(e);
  o.x += a;
  i.fillCircle(o, $$s0, r);
  $$u4(o, i, $$s0, 2, n);
}
export function $$c5(e, t, i, r, a, o = 0) {
  let l = t.canvasSpaceToViewportSpace(e);
  l.x += o;
  i.fillAndStrokeCircle(l, $$s0, a, r, 2, StrokeAlignment.INSIDE);
  $$u4(l, i, $$s0, 2, r);
}
export function $$u4(e, t, i, n, r) {
  let a = {
    x: e.x - n / 2,
    y: e.y - i / 2
  };
  let s = {
    x: e.x - i / 2,
    y: e.y - n / 2
  };
  t.fillRoundedRect({
    origin: a,
    size: {
      x: n,
      y: i
    }
  }, 3, r);
  t.fillRoundedRect({
    origin: s,
    size: {
      x: i,
      y: n
    }
  }, 3, r);
}
export const Bm = $$s0;
export const GJ = $$d1;
export const Z5 = $$l2;
export const ZR = $$o3;
export const ft = $$u4;
export const kP = $$c5;