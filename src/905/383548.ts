import { F_ } from "../905/748636";
export let $$r1 = {
  arrow: "arrow",
  connector: "connector"
};
export function $$a0(e) {
  return e === $$r1.connector ? {
    defaultModalWidth: 409,
    pointerWidth: 4,
    pointerLength: 40,
    pointerTargetOverlap: 16,
    standardPointerOffset: 24
  } : {
    defaultModalWidth: 228,
    pointerWidth: 8,
    pointerLength: 8,
    pointerTargetOverlap: 4,
    standardPointerOffset: 16
  };
}
export function $$s2({
  width: e,
  height: t,
  targetRect: i,
  positioningConstants: r,
  alignPointerToLeft: a,
  alignPointerToTop: s,
  shouldCenterArrow: o,
  topPadding: l,
  arrowPosition: d = F_.TOP,
  targetType: c,
  viewportTopOffset: u,
  viewportBottomOffset: p
}) {
  let m;
  let h;
  let g = d === F_.TOP || d === F_.BOTTOM;
  let f = i.x + i.width / 2;
  a && (f = i.x + 24);
  let _ = i.y + i.height / 2;
  s && (_ = i.y + 24);
  let A = !1;
  switch (d) {
    case F_.TOP_RIGHT:
      m = i.y + l;
      break;
    case F_.TOP:
      m = i.y + i.height + r.pointerLength + l;
      break;
    case F_.BOTTOM:
      m = i.y - t - r.pointerLength - l;
      break;
    case F_.LEFT_TITLE:
    case F_.RIGHT_TITLE:
    case F_.RIGHT_BODY:
      (m = o ? _ - t / 2 : _ - r.pointerWidth - r.standardPointerOffset) < -1 && "dom" === c && (A = !0, m = -1);
      m + t > window.innerHeight && (A = !0, m = _ - t + r.pointerWidth + r.standardPointerOffset, "dom" === c && (m = Math.min(m, window.innerHeight - t - -1)));
  }
  let y = !1;
  switch (d) {
    case F_.TOP:
    case F_.BOTTOM:
      (h = o ? f - e / 2 : f - r.pointerWidth - r.standardPointerOffset) < -1 && ("dom" === c && (y = !0, h = -1), "best_effort" === o && (h = 12));
      h + e > window.innerWidth && (y = !0, h = "best_effort" === o ? window.innerWidth - e - 12 : f - e + r.pointerWidth + r.standardPointerOffset, "dom" === c && (h = Math.min(h, window.innerWidth - e - -1)));
      break;
    case F_.LEFT_TITLE:
      h = i.x + i.width + r.pointerLength + l;
      break;
    case F_.TOP_RIGHT:
    case F_.RIGHT_TITLE:
    case F_.RIGHT_BODY:
      h = i.x - e - r.pointerLength - l;
  }
  let b = 0;
  b = g ? (o && !y ? e / 2 : f - h) - r.pointerWidth : (o && !A ? t / 2 : _ - m) - r.pointerLength;
  let v = d;
  v === F_.TOP && window.innerHeight - m < t + 12 + (p || 0) ? (m = i.y - t - r.pointerLength - l, v = F_.BOTTOM) : v === F_.BOTTOM && m < 12 + (u || 0) ? (m = i.y + i.height + r.pointerLength + l, v = F_.TOP) : v === F_.LEFT_TITLE && window.innerWidth - h < e + 12 ? (h = i.x - e - r.pointerLength - l, v = F_.RIGHT_TITLE) : (v === F_.RIGHT_TITLE || v === F_.RIGHT_BODY || v === F_.TOP_RIGHT) && h < 12 && (h = i.x + i.width + r.pointerLength + l, v = F_.LEFT_TITLE);
  h + e > window.innerWidth - 12 && (h = window.innerWidth - e - 12);
  m + t > window.innerHeight - 12 && (m = window.innerHeight - t - 12);
  h < 12 && (h = 12);
  m < 12 && (m = 12);
  return {
    left: h,
    top: m,
    pointerOffset: b,
    pointerPosition: v
  };
}
export const P7 = $$a0;
export const gm = $$r1;
export const my = $$s2;