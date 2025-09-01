import { mKm } from "../figma_app/763686";
import { Ji } from "../figma_app/387100";
import { h, v6, KY, jd, iz, qK, Pm } from "../figma_app/17669";
import { sJ } from "../905/532366";
import { si } from "../figma_app/941074";
let l = {
  position: !0,
  size: !0,
  flex: !0,
  color: !0,
  radius: !0,
  typography: !0
};
export function $$d1(e, t, i = !0) {
  let {
    position,
    size,
    flex,
    radius,
    color,
    typography
  } = {
    ...l,
    ...(t ?? {})
  };
  let f = (e, t) => !i || t !== e;
  let _ = [];
  position && function (e, t) {
    let i = Ji(e);
    if (i && "CANVAS" !== i.type && ("NONE" === i.stackMode || "AUTO" !== e.stackPositioning)) {
      t.push("absolute");
      let {
        horizontalConstraint,
        verticalConstraint
      } = e;
      switch (horizontalConstraint) {
        case "MIN":
          t.push(`left-${h(e.x)}`);
          break;
        case "MAX":
          t.push(`right-${h(i.size.x - e.x - e.size.x)}`);
      }
      switch (verticalConstraint) {
        case "MIN":
          t.push(`top-${h(e.y)}`);
          break;
        case "MAX":
          t.push(`bottom-${h(i.size.y - e.y - e.size.y)}`);
      }
    }
  }(e, _);
  size && function (e, t, i) {
    let r = "TEXT" === e.type || e.childrenNodes.length > 0;
    e.stackHorizontalLayoutSize === mKm.FILL_CONTAINER ? i.push("w-full") : r && e.stackHorizontalLayoutSize === mKm.HUG_CONTENT ? t || i.push("w-fit") : e.stackHorizontalLayoutSize !== mKm.FIXED && (r || e.stackHorizontalLayoutSize !== mKm.HUG_CONTENT) || i.push(`w-${h(e.size.x)}`);
    e.stackVerticalLayoutSize === mKm.FILL_CONTAINER ? i.push("h-full") : r && e.stackVerticalLayoutSize === mKm.HUG_CONTENT ? t || i.push("h-fit") : e.stackVerticalLayoutSize !== mKm.FIXED && (r || e.stackVerticalLayoutSize !== mKm.HUG_CONTENT) || i.push(`h-${h(e.size.y)}`);
    "number" == typeof e.minWidth && i.push(`min-w-${h(e.minWidth)}`);
    "number" == typeof e.maxWidth && i.push(`max-w-${h(e.maxWidth)}`);
    "number" == typeof e.minHeight && i.push(`min-h-${h(e.minHeight)}`);
    "number" == typeof e.maxHeight && i.push(`max-h-${h(e.maxHeight)}`);
  }(e, i, _);
  flex && e.isStack && function (e, t, i, n) {
    if (t.push("flex"), "VERTICAL" === e.stackMode && t.push("flex-col"), "WRAP" === e.stackWrap && t.push("flex-wrap"), e.childrenNodes.length > 1) {
      let i = "SPACE_BETWEEN" === e.stackPrimaryAlignItems || "SPACE_EVENLY" === e.stackPrimaryAlignItems ? null : e.stackSpacing;
      "number" == typeof i && n(0, i) && t.push(`gap-${h(i)}`);
    }
    switch (e.stackCounterAlignItems) {
      case "MIN":
        i || t.push("items-start");
        break;
      case "MAX":
        t.push("items-end");
        break;
      case "CENTER":
        t.push("items-center");
        break;
      case "BASELINE":
        t.push("items-baseline");
    }
    switch (e.stackPrimaryAlignItems) {
      case "MIN":
        i || t.push("justify-start");
        break;
      case "MAX":
        t.push("justify-end");
        break;
      case "CENTER":
        t.push("justify-center");
        break;
      case "SPACE_EVENLY":
      case "SPACE_BETWEEN":
        t.push("justify-between");
    }
    let r = {
      top: e.stackTopPadding ?? 0,
      right: e.stackRightPadding ?? 0,
      bottom: e.stackBottomPadding ?? 0,
      left: e.stackLeftPadding ?? 0
    };
    r.top === r.bottom && r.bottom === r.left && r.left === r.right ? n(0, r.top) && t.push(`p-${h(r.top)}`) : r && (r.top === r.bottom ? n(0, r.top) && t.push(`py-${h(r.top)}`) : (n(0, r.top) && t.push(`pt-${h(r.top)}`), n(0, r.bottom) && t.push(`pb-${h(r.bottom)}`)), r.left === r.right ? n(0, r.left) && t.push(`px-${h(r.left)}`) : (n(0, r.left) && t.push(`pl-${h(r.left)}`), n(0, r.right) && t.push(`pr-${h(r.right)}`)));
  }(e, _, !!i, f);
  radius && function (e, t, i) {
    if (e.rectangleCornerRadiiIndependent) {
      let {
        rectangleTopLeftCornerRadius,
        rectangleTopRightCornerRadius,
        rectangleBottomLeftCornerRadius,
        rectangleBottomRightCornerRadius
      } = e;
      if (rectangleTopLeftCornerRadius === rectangleTopRightCornerRadius && rectangleTopRightCornerRadius === rectangleBottomLeftCornerRadius && rectangleBottomLeftCornerRadius === rectangleBottomRightCornerRadius) i(0, rectangleTopLeftCornerRadius) && t.push(`rounded${v6(rectangleTopLeftCornerRadius)}`);else {
        let e = {
          topLeft: i(0, rectangleTopLeftCornerRadius),
          topRight: i(0, rectangleTopRightCornerRadius),
          bottomLeft: i(0, rectangleBottomLeftCornerRadius),
          bottomRight: i(0, rectangleBottomRightCornerRadius)
        };
        e.topLeft && e.bottomLeft && rectangleTopLeftCornerRadius === rectangleBottomLeftCornerRadius && (t.push(`rounded-l${v6(rectangleTopLeftCornerRadius)}`), e.topLeft = !1, e.bottomLeft = !1);
        e.topRight && e.bottomRight && rectangleTopRightCornerRadius === rectangleBottomRightCornerRadius && (t.push(`rounded-r${v6(rectangleTopRightCornerRadius)}`), e.topRight = !1, e.bottomRight = !1);
        e.topLeft && e.topRight && rectangleTopLeftCornerRadius === rectangleTopRightCornerRadius && (t.push(`rounded-t${v6(rectangleTopLeftCornerRadius)}`), e.topLeft = !1, e.topRight = !1);
        e.bottomLeft && e.bottomRight && rectangleBottomLeftCornerRadius === rectangleBottomRightCornerRadius && (t.push(`rounded-b${v6(rectangleBottomLeftCornerRadius)}`), e.bottomLeft = !1, e.bottomRight = !1);
        e.topLeft && t.push(`rounded-tl${v6(rectangleTopLeftCornerRadius)}`);
        e.bottomLeft && t.push(`rounded-bl${v6(rectangleBottomLeftCornerRadius)}`);
        e.topRight && t.push(`rounded-tr${v6(rectangleTopRightCornerRadius)}`);
        e.bottomRight && t.push(`rounded-br${v6(rectangleBottomRightCornerRadius)}`);
      }
    } else i(0, e.cornerRadius) && t.push(`rounded${v6(e.cornerRadius)}`);
  }(e, _, f);
  "TEXT" === e.type ? (typography && function (e, t, i) {
    if ("TEXT" !== e.type) return;
    let {
      fontSize,
      fontName: {
        style
      }
    } = e;
    "number" == typeof fontSize && t.push(`text-${KY(fontSize)}`);
    let o = style.replace(/\s/g, "").toLowerCase();
    let l = sJ[o];
    "number" == typeof l && i(400, l) && t.push(`font-${jd(l)}`);
  }(e, _, f), color && typography && function (e, t, i) {
    let n = $$u0(e.fills);
    if (n && i("#000", n.hexStr)) {
      let {
        hexStr,
        opacitySuffix
      } = n;
      t.push(`text-${iz(hexStr)}${opacitySuffix}`);
    }
  }(e, _, f), typography && function (e, t, i) {
    if ("TEXT" === e.type) {
      switch (e.textAlignHorizontal) {
        case "LEFT":
          i || t.push("text-left");
          break;
        case "RIGHT":
          t.push("text-right");
          break;
        case "CENTER":
          t.push("text-center");
          break;
        case "JUSTIFIED":
          t.push("text-justified");
      }
      switch (e.textAlignVertical) {
        case "TOP":
          i || t.push("align-top");
          break;
        case "CENTER":
          t.push("align-middle");
          break;
        case "BOTTOM":
          t.push("align-bottom");
      }
    }
  }(e, _, !!i)) : color && (function (e, t) {
    let i = $$u0(e.fills);
    if (i) {
      let {
        hexStr,
        opacitySuffix
      } = i;
      t.push(`bg-${iz(hexStr)}${opacitySuffix}`);
    }
  }(e, _), function (e, t, i, n) {
    let r = $$u0(e.strokePaints.data);
    if (r && (e.strokeWeight > 0 || e.borderStrokeWeightsIndependent && [e.borderBottomWeight, e.borderLeftWeight, e.borderRightWeight, e.borderTopWeight].some(e => e > 0))) {
      if (i) {
        let {
          hexStr,
          opacitySuffix
        } = r;
        t.push(`border-${iz(hexStr)}${opacitySuffix}`);
      }
      let s = e => 1 === e ? "" : `-${qK(e)}`;
      if (e.borderStrokeWeightsIndependent) {
        let {
          borderLeftWeight,
          borderBottomWeight,
          borderRightWeight,
          borderTopWeight
        } = e;
        borderLeftWeight === borderRightWeight && borderRightWeight === borderBottomWeight && borderBottomWeight === borderTopWeight ? t.push(`border${s(borderLeftWeight)}`) : (borderLeftWeight === borderRightWeight ? n(0, borderLeftWeight) && t.push(`border-x${s(borderLeftWeight)}`) : (n(0, borderLeftWeight) && t.push(`border-l${s(borderLeftWeight)}`), n(0, borderRightWeight) && t.push(`border-r${s(borderRightWeight)}`)), borderBottomWeight === borderTopWeight ? n(0, borderBottomWeight) && t.push(`border-y${s(borderBottomWeight)}`) : (n(0, borderTopWeight) && t.push(`border-t${s(borderTopWeight)}`), n(0, borderBottomWeight) && t.push(`border-b${s(borderBottomWeight)}`)));
      } else t.push(`border${s(e.strokeWeight)}`);
    }
  }(e, _, !!color, f));
  return _;
}
export function $$c2(e) {
  return 1 === e ? "" : `/${Pm(e)}`;
}
export function $$u0(e) {
  let t = e.reverse().find(e => "SOLID" === e.type && !!e.visible && 0 !== e.opacity);
  return t && t.color ? {
    hexStr: si(t.color),
    opacitySuffix: $$c2(t.opacity ?? t.color.a)
  } : null;
}
export const DI = $$u0;
export const Ed = $$d1;
export const JQ = $$c2;