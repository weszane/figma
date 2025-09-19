import { useMemo } from "react";
import { useSelector } from "react-redux";
import a from "../vendor/77708";
import { selectWithShallowEqual } from "../905/103090";
import { uQ } from "../figma_app/311375";
import { isInvalidValue, isValidValue } from "../905/216495";
import { filterValidImagePaints, hashToHexString } from "../figma_app/385874";
import { selectOpenFileKey } from "../figma_app/516028";
import { useDeepEqualSceneValue } from "../figma_app/167249";
import { ut } from "../figma_app/328423";
var s = a;
var $$h11 = (e => (e.TOP = "top", e.RIGHT = "right", e.BOTTOM = "bottom", e.LEFT = "left", e))($$h11 || {});
var $$m2 = (e => (e.TOP_LEFT = "top_left", e.TOP_RIGHT = "top_right", e.BOTTOM_LEFT = "bottom_left", e.BOTTOM_RIGHT = "bottom_right", e))($$m2 || {});
function g(e) {
  return isInvalidValue(e) ? 0 : e ?? 0;
}
function f(e) {
  return "NONE" !== e && "GRID" !== e;
}
export function $$E16(e, t) {
  return "NONE" !== e || !!t && f(t.stackMode);
}
export function $$y4(e, t) {
  return f(e) || !!t && f(t.stackMode);
}
export function $$b14(e) {
  return useSelector(t => {
    let r = t.mirror.selectionProperties;
    return $$E16(t.mirror.selectionProperties.stackMode, t.mirror.selectionProperties.inferredAutoLayoutResult) ? "NONE" !== r.stackMode ? r[function (e) {
      switch (e) {
        case "top":
          return "stackVerticalPadding";
        case "right":
          return "stackPaddingRight";
        case "bottom":
          return "stackPaddingBottom";
        case "left":
          return "stackHorizontalPadding";
      }
    }(e)] ?? 0 : r.inferredAutoLayoutResult?.[`stackPadding${s()(e)}`] ?? 0 : 0;
  });
}
export function $$T0(e) {
  let t = uQ();
  return useDeepEqualSceneValue((t, r) => {
    let n = t?.get(r);
    if (!n) return {};
    let i = n.parentNode;
    return i && (i?.stackMode === "HORIZONTAL" || "VERTICAL" === i.stackMode) && n?.stackPositioning !== "ABSOLUTE" ? function (e, t, r) {
      if (!t || !r || "NONE" === r.stackMode || "GRID" === r.stackMode) return {};
      let n = r.childrenNodes.filter(e => e?.stackPositioning !== "ABSOLUTE").map(e => e?.guid);
      let i = n.indexOf(t.guid);
      let a = 0 === i;
      let s = i === n.length - 1;
      if ("HORIZONTAL" === r.stackMode) switch (e) {
        case "top":
          return {
            distance: r.stackTopPadding,
            type: "padding"
          };
        case "bottom":
          return {
            distance: r.stackBottomPadding,
            type: "padding"
          };
        case "left":
          return a ? {
            distance: r.stackLeftPadding,
            type: "padding"
          } : {
            distance: r.stackSpacing,
            type: "spacing"
          };
        case "right":
          return s ? {
            distance: r.stackRightPadding,
            type: "padding"
          } : {
            distance: r.stackSpacing,
            type: "spacing"
          };
      } else switch (e) {
        case "top":
          return a ? {
            distance: r.stackTopPadding,
            type: "padding"
          } : {
            distance: r.stackSpacing,
            type: "spacing"
          };
        case "bottom":
          return s ? {
            distance: r.stackBottomPadding,
            type: "padding"
          } : {
            distance: r.stackSpacing,
            type: "spacing"
          };
        case "left":
          return {
            distance: r.stackLeftPadding,
            type: "padding"
          };
        case "right":
          return {
            distance: r.stackRightPadding,
            type: "padding"
          };
      }
    }(e, n, i) : function (e, t, r) {
      if (!t || !r || "CANVAS" === r.type || "DOCUMENT" === r.type || "SECTION" === r.type) return {};
      let n = t.absoluteBoundingBox;
      let i = r.absoluteBoundingBox;
      switch (e) {
        case "top":
          return {
            distance: n.y - i.y,
            type: "distance"
          };
        case "bottom":
          return {
            distance: i.y + i.h - (n.h + n.y),
            type: "distance"
          };
        case "left":
          return {
            distance: n.x - i.x,
            type: "distance"
          };
        case "right":
          return {
            distance: i.w + i.x - (n.x + n.w),
            type: "distance"
          };
      }
    }(e, n, i);
  }, t);
}
export function $$I8(e) {
  return useSelector(t => {
    let r = t.mirror.selectionProperties;
    let {
      borderStrokeWeightsIndependent,
      strokePaints,
      strokeWeight
    } = r;
    return borderStrokeWeightsIndependent && isValidValue(borderStrokeWeightsIndependent) ? r[`border${s()(e)}Visible`] ? g(r[`border${s()(e)}Weight`]) : 0 : strokePaints && isValidValue(strokePaints) && Array.isArray(strokePaints) && strokePaints.length && (strokePaints.filter(e => !!e && e.visible && (e.opacity ?? 0) > 0) || []).length ? g(strokeWeight) : 0;
  });
}
export function $$S10() {
  return selectWithShallowEqual(e => ut(e.mirror.selectionProperties, g));
}
export function $$v7(e) {
  let t = $$S10();
  switch (e) {
    case "top_left":
      return t.topLeft;
    case "top_right":
      return t.topRight;
    case "bottom_left":
      return t.bottomLeft;
    case "bottom_right":
      return t.bottomRight;
  }
}
export function $$A17() {
  let e = $$b14("left");
  let t = $$b14("right");
  let r = $$I8("left");
  let n = $$I8("right");
  let a = useSelector(e => {
    let {
      bordersTakeSpace,
      stackMode,
      inferredAutoLayoutResult
    } = e.mirror.selectionProperties;
    return $$E16(stackMode, inferredAutoLayoutResult) && bordersTakeSpace;
  });
  return useSelector(e => g(e.mirror.selectionProperties.width)) - (e + t + (a ? r + n : 0));
}
export function $$x12() {
  let e = $$b14("top");
  let t = $$b14("bottom");
  let r = $$I8("top");
  let n = $$I8("bottom");
  let a = useSelector(e => {
    let {
      bordersTakeSpace,
      stackMode,
      inferredAutoLayoutResult
    } = e.mirror.selectionProperties;
    return $$E16(stackMode, inferredAutoLayoutResult) && bordersTakeSpace;
  });
  return useSelector(e => g(e.mirror.selectionProperties.height)) - (e + t + (a ? r + n : 0));
}
export let $$N9 = 12;
function C(e) {
  return e && e > 2 ? Math.min(e, $$N9) : 2;
}
export function $$w6(e) {
  return {
    borderTopLeftRadius: C(e.topLeft),
    borderTopRightRadius: C(e.topRight),
    borderBottomRightRadius: C(e.bottomRight),
    borderBottomLeftRadius: C(e.bottomLeft)
  };
}
export function $$O5(e, t) {
  let r = C(t);
  let n = "top_left" === e || "top_right" === e ? "top" : "bottom";
  let i = "top_left" === e || "bottom_left" === e ? "left" : "right";
  let a = "top" === n ? "bottom" : "top";
  let o = "left" === i ? "right" : "left";
  return {
    [`border${s()(n)}${s()(i)}Radius`]: r,
    top: "top" === n ? 0 : void 0,
    bottom: "bottom" === n ? 0 : void 0,
    left: "left" === i ? 0 : void 0,
    right: "right" === i ? 0 : void 0,
    [`border${s()(n)}Width`]: "1px",
    [`border${s()(a)}Width`]: "0px",
    [`border${s()(i)}Width`]: "1px",
    [`border${s()(o)}Width`]: "0px"
  };
}
export function $$R15(e) {
  return !!e && "-" !== e && "string" == typeof e;
}
export let $$L3 = (e = "NONE") => "HORIZONTAL" === e || "VERTICAL" === e;
export function $$P1(e = 0) {
  if (0 === e) return "-";
  let t = `${e}`.indexOf(".");
  if (-1 === t || t > 3) return `${Math.round(e)}`;
  let r = parseFloat(e.toFixed(4 - t - 1));
  return 0 === r ? "-" : `${r}`;
}
export function $$D13() {
  let e = useSelector(selectOpenFileKey);
  let t = useSelector(e => e.mirror.selectionProperties.fillPaints) || null;
  let r = useMemo(() => filterValidImagePaints(t)?.filter(e => e.opacity > 0 && e.visible && e.image), [t]);
  if (r?.length !== 1 || !r[0]?.image) return null;
  let a = hashToHexString(r[0].image);
  return e && a ? r[0] : null;
}
export const $L = $$T0;
export const B5 = $$P1;
export const Ck = $$m2;
export const Cs = $$L3;
export const Dq = $$y4;
export const EN = $$O5;
export const F9 = $$w6;
export const Fr = $$v7;
export const Qz = $$I8;
export const Tk = $$N9;
export const W7 = $$S10;
export const gP = $$h11;
export const jt = $$x12;
export const lK = $$D13;
export const tr = $$b14;
export const u9 = $$R15;
export const xj = $$E16;
export const yV = $$A17;