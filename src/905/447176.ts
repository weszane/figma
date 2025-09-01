import { rb } from "../905/209596";
import { Si, FZ } from "../figma_app/262240";
export function $$a0(e) {
  let t = !1;
  let i = rb(e);
  Si(e, e => e.clipsContent && function (e, t) {
    let i = e.x + e.width < t.x;
    let n = e.x > t.x + t.width;
    let r = e.y + e.height < t.y;
    let a = e.y > t.y + t.height;
    return i || n || r || a;
  }(i, {
    x: e.x,
    y: e.y,
    width: e.w,
    height: e.h
  }) ? (t = !0, FZ.BREAK) : FZ.CONTINUE);
  return t;
}
export const _ = $$a0;