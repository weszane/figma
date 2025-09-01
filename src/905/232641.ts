import { Point } from "../905/736624";
var $$r0 = (e => (e[e.BEFORE = 0] = "BEFORE", e[e.MIN = 1] = "MIN", e[e.CENTER = 2] = "CENTER", e[e.MAX = 3] = "MAX", e[e.AFTER = 4] = "AFTER", e))($$r0 || {});
var a = (e => (e[e.X = 0] = "X", e[e.Y = 1] = "Y", e))(a || {});
export function $$s2({
  referenceBoundingBox: e,
  modalSize: t,
  align: i,
  offset: r = new Point(0, 0)
}) {
  let a = new Point(0, 0);
  for (let n of [0, 1]) {
    let r = 0 === n ? i.x : i.y;
    let s = 0 === n ? t.width : t.height;
    let [o, l] = 0 === n ? [e.left, e.right] : [e.top, e.bottom];
    let d = 0;
    switch (r) {
      case 0:
        d = o - s;
        break;
      case 1:
        d = o;
        break;
      case 3:
        d = l - s;
        break;
      case 4:
        d = l;
        break;
      case 2:
        d = (o + l) / 2 - s / 2;
    }
    0 === n ? a.x = d : a.y = d;
  }
  a.x += r.x;
  a.y += r.y;
  return a;
}
let o = {
  0: {
    0: "left",
    1: "left",
    3: "right",
    4: "right"
  },
  1: {
    0: "top",
    1: "top",
    3: "bottom",
    4: "bottom"
  }
};
export function $$l1({
  positionRelativeTo: e,
  align: t,
  offset: i = new Point(0, 0),
  modalWidth: r
}) {
  if (!e.current) return new Point(0, 0);
  let a = e.current?.getBoundingClientRect();
  let s = {};
  for (let e of [0, 1]) {
    let n = 0 === e ? t.x : t.y;
    let l = function (e, t, i, n, r) {
      let a = 0 === e ? "x" : "y";
      if (2 === t) {
        if (0 !== e) throw Error("Vertical centering not supported!");
        return {
          x: (i.left + i.right) / 2 - r / 2
        };
      }
      let s = o[e][t];
      let l = 1 === t || 4 === t;
      let d = l ? o[e][1] : o[e][3];
      let c = 0 === e ? window.innerWidth : window.innerHeight;
      return {
        [d]: (l ? i[s] : c - i[s]) + n[a]
      };
    }(e, n, a, i, r);
    s = {
      ...s,
      ...l
    };
  }
  return s;
}
export const W3 = $$r0;
export const Yl = $$l1;
export const j4 = $$s2;