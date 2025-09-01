import { Point } from "../905/736624";
var $$r0 = (e => (e[e.RELATIVE = 0] = "RELATIVE", e[e.CENTERED = 1] = "CENTERED", e))($$r0 || {});
export function $$a1(e, t, i, r) {
  switch (e) {
    case 0:
      return function (e, t, i) {
        let r;
        let a;
        let s = e.x;
        let o = e.y;
        s > o ? (r = Math.min(s, i.width), a = o / s * r) : (a = Math.min(o, i.height), r = s / o * a);
        let l = new Point(i.width / 2 - r / 2, i.height / 2 - a / 2);
        let d = t.subtract(i).subtract(l);
        let c = new Point(d.x / r, d.y / a);
        return {
          dragOffset: d,
          pointerPercentageOffset: c,
          draggingThumbSize: new Point(r, a)
        };
      }(t, i, r);
    case 1:
      return {
        dragOffset: t.scale(.5),
        pointerPercentageOffset: new Point(.5, .5),
        draggingThumbSize: t
      };
  }
}
export const N = $$r0;
export const T = $$a1;