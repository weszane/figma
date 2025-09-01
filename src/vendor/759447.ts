let $$r13 = Math.min;
let $$i8 = Math.max;
let $$A4 = Math.round;
let $$o6 = Math.floor;
let $$s3 = e => ({
  x: e,
  y: e
});
let a = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
let l = {
  start: "end",
  end: "start"
};
export function $$u16(e, t, n) {
  return $$i8(e, $$r13(t, n));
}
export function $$g11(e, t) {
  return "function" == typeof e ? e(t) : e;
}
export function $$c1(e) {
  return e.split("-")[0];
}
export function $$f7(e) {
  return e.split("-")[1];
}
export function $$d5(e) {
  return "x" === e ? "y" : "x";
}
export function $$h17(e) {
  return "y" === e ? "height" : "width";
}
export function $$p9(e) {
  return ["top", "bottom"].includes($$c1(e)) ? "y" : "x";
}
export function $$C2(e) {
  return $$d5($$p9(e));
}
export function $$I18(e, t, n) {
  void 0 === n && (n = !1);
  let r = $$f7(e);
  let i = $$C2(e);
  let A = $$h17(i);
  let o = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
  t.reference[A] > t.floating[A] && (o = $$y12(o));
  return [o, $$y12(o)];
}
export function $$E10(e) {
  let t = $$y12(e);
  return [B(e), t, B(t)];
}
function B(e) {
  return e.replace(/start|end/g, e => l[e]);
}
export function $$m14(e, t, n, r) {
  let i = $$f7(e);
  let A = function (e, t, n) {
    let r = ["left", "right"];
    let i = ["right", "left"];
    switch (e) {
      case "top":
      case "bottom":
        if (n) return t ? i : r;
        return t ? r : i;
      case "left":
      case "right":
        return t ? ["top", "bottom"] : ["bottom", "top"];
      default:
        return [];
    }
  }($$c1(e), "start" === n, r);
  i && (A = A.map(e => e + "-" + i), t && (A = A.concat(A.map(B))));
  return A;
}
export function $$y12(e) {
  return e.replace(/left|right|bottom|top/g, e => a[e]);
}
export function $$_15(e) {
  return "number" != typeof e ? {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  } : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
export function $$Q0(e) {
  let {
    x,
    y,
    width,
    height
  } = e;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}
export const B1 = $$Q0;
export const C0 = $$c1;
export const Dz = $$C2;
export const Jx = $$s3;
export const LI = $$A4;
export const PG = $$d5;
export const RI = $$o6;
export const Sg = $$f7;
export const T9 = $$i8;
export const TV = $$p9;
export const WJ = $$E10;
export const _3 = $$g11;
export const bV = $$y12;
export const jk = $$r13;
export const lP = $$m14;
export const nI = $$_15;
export const qE = $$u16;
export const sq = $$h17;
export const w7 = $$I18;