import { QP } from "../vendor/202832";
import { v4, W1, t1, IT, Fm, vW, B9, bP, Pw, Fg, Hg, km, k$, BM, Eu, gW, Cv, vQ } from "../figma_app/17669";
import { AD, Zx } from "../figma_app/197743";
import { mKm } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { hN } from "../905/532366";
import { Lo, QW } from "../figma_app/941074";
import { O } from "../3383/83383";
export function $$o1(e, t) {
  let r = {};
  let n = QP(e);
  let o = n.includes("flex-col") ? "vertical" : "horizontal";
  for (let e of n.split(AD)) {
    let {
      classParts,
      isNegative
    } = Zx(e);
    v4(classParts, isNegative, r);
    W1(classParts, isNegative, r);
    t1(classParts, r);
    IT(classParts, r);
    Fm(classParts, r, t ?? "");
    vW(classParts, r);
    B9(classParts, r);
    bP(classParts, r);
    Pw(classParts, o, r);
    Fg(classParts, r, t ?? "");
    Hg(classParts, r);
    km(classParts, r, t ?? "");
    k$(classParts, r);
    BM(classParts, r);
    Eu(e, r);
    gW(e, r);
    Cv(classParts, isNegative, r);
    vQ(classParts, isNegative, r);
  }
  return r;
}
function _(e, t) {
  try {
    e.fontName = {
      ...e.fontName,
      style: t
    };
    return !0;
  } catch (e) {
    return !1;
  }
}
export function $$h0(e, t, r) {
  let n = getSingletonSceneGraph().get(e);
  if (!n) {
    console.warn("applyToNode", "Node not found", {
      guid: e
    });
    return;
  }
  let i = r || function (e) {
    switch (e.type) {
      case "TEXT":
        return "Text";
      case "SYMBOL":
      case "INSTANCE":
      case "FRAME":
        return "AutoLayout";
      default:
        return null;
    }
  }(n);
  if (!i) {
    console.warn("applyToNode", "Unsupported element type", {
      type: n.type
    });
    return;
  }
  let a = $$o1(t, i);
  if ("AutoLayout" === i && a.direction) {
    let e = "vertical" === a.direction ? "VERTICAL" : "HORIZONTAL";
    "HORIZONTAL" !== e && "WRAP" === n.stackWrap && (n.stackWrap = "NO_WRAP");
    n.stackMode = e;
  }
  for (let e of Object.keys(a)) {
    let t = a[e];
    try {
      switch (e) {
        case "width":
          "fill-parent" === t && (n.stackHorizontalLayoutSize = mKm.FILL_CONTAINER);
          "hug-contents" === t && (n.stackHorizontalLayoutSize = mKm.HUG_CONTENT);
          "number" == typeof t && (n.stackHorizontalLayoutSize = mKm.FIXED, n.resizeWithConstraints(t, n.size.y));
          break;
        case "height":
          "fill-parent" === t && (n.stackVerticalLayoutSize = mKm.FILL_CONTAINER);
          "hug-contents" === t && (n.stackVerticalLayoutSize = mKm.HUG_CONTENT);
          "number" == typeof t && (n.stackVerticalLayoutSize = mKm.FIXED, n.resizeWithConstraints(n.size.x, t));
          break;
        case "hidden":
          n.visible = !t;
          break;
        case "padding":
          "AutoLayout" === i && "object" == typeof t && t && ("top" in t && "number" == typeof t.top && (n.stackTopPadding = t.top), "bottom" in t && "number" == typeof t.bottom && (n.stackBottomPadding = t.bottom), "left" in t && "number" == typeof t.left && (n.stackLeftPadding = t.left), "right" in t && "number" == typeof t.right && (n.stackRightPadding = t.right));
          break;
        case "cornerRadius":
          if ("AutoLayout" === i && "object" == typeof t && t) {
            let e = !1;
            "topLeft" in t && "number" == typeof t.topLeft && (n.rectangleTopLeftCornerRadius = t.topLeft, e = !0);
            "bottomLeft" in t && "number" == typeof t.bottomLeft && (n.rectangleBottomLeftCornerRadius = t.bottomLeft, e = !0);
            "topRight" in t && "number" == typeof t.topRight && (n.rectangleTopRightCornerRadius = t.topRight, e = !0);
            "bottomRight" in t && "number" == typeof t.bottomRight && (n.rectangleBottomRightCornerRadius = t.bottomRight, e = !0);
            e && (n.rectangleCornerRadiiIndependent = !0);
          }
          break;
        case "textDecoration":
          "TEXT" === n.type && "string" == typeof t && ("underline" === t && (n.textDecoration = "UNDERLINE"), "strikethrough" === t && (n.textDecoration = "STRIKETHROUGH"), "none" === t && (n.textDecoration = "NONE"));
          break;
        case "textCase":
          "TEXT" === n.type && "string" == typeof t && ("upper" === t && (n.textCase = "UPPER"), "lower" === t && (n.textCase = "LOWER"), "title" === t && (n.textCase = "TITLE"), "original" === t && (n.textCase = "ORIGINAL"), "small-caps" === t && (n.textCase = "SMALL_CAPS"), "small-caps-forced" === t && (n.textCase = "SMALL_CAPS_FORCED"));
          break;
        case "fontSize":
          "TEXT" === n.type && "number" == typeof t && (n.fontSize = t);
          break;
        case "spacing":
          "AutoLayout" === i && ("number" == typeof t ? n.stackSpacing = t : "object" == typeof t && t ? ("VERTICAL" === n.stackMode && "vertical" in t && "number" == typeof t.vertical && (n.stackSpacing = t.vertical), "HORIZONTAL" === n.stackMode && ("horizontal" in t && "number" == typeof t.horizontal && (n.stackSpacing = t.horizontal), "WRAP" === n.stackWrap && "vertical" in t && "number" == typeof t.vertical && (n.stackCounterSpacing = t.vertical))) : "auto" === t && (n.stackPrimaryAlignItems = "SPACE_BETWEEN", "WRAP" === n.stackWrap && (n.stackCounterAlignContent = "SPACE_BETWEEN")));
          break;
        case "minWidth":
        case "maxWidth":
        case "minHeight":
        case "maxHeight":
          "AutoLayout" === i && "number" == typeof t && (n[e] = t);
          break;
        case "opacity":
          "number" == typeof t && (n.opacity = t);
          break;
        case "strokeWidth":
          "AutoLayout" === i && "number" == typeof t && (n.strokeWeight = t, n.borderStrokeWeightsIndependent = !1, n.borderTopWeight = t, n.borderBottomWeight = t, n.borderLeftWeight = t, n.borderRightWeight = t);
          break;
        case "lineHeight":
          if ("Text" === i && ("string" == typeof t || "number" == typeof t)) {
            let e = O(t ?? "");
            e && ("AUTO" === e.units ? n.lineHeight = {
              units: "PERCENT",
              value: 100
            } : "PIXELS" === e.units ? n.lineHeight = e : "PERCENT" === e.units ? n.lineHeight = {
              units: "RAW",
              value: e.value / 100
            } : n.lineHeight = e);
          }
          break;
        case "horizontalAlignText":
          "Text" === i && "string" == typeof t && ("left" === t && (n.textAlignHorizontal = "LEFT"), "center" === t && (n.textAlignHorizontal = "CENTER"), "right" === t && (n.textAlignHorizontal = "RIGHT"), "justify" === t && (n.textAlignHorizontal = "JUSTIFIED"));
          break;
        case "verticalAlignText":
          "Text" === i && "string" == typeof t && ("top" === t && (n.textAlignVertical = "TOP"), "center" === t && (n.textAlignVertical = "CENTER"), "bottom" === t && (n.textAlignVertical = "BOTTOM"));
          break;
        case "fill":
          "string" == typeof t && Lo(t) && (n.fills = [{
            type: "SOLID",
            color: {
              ...QW(t),
              a: 1
            },
            visible: !0,
            opacity: 1,
            blendMode: "NORMAL"
          }]);
          break;
        case "stroke":
          "Text" !== i && "string" == typeof t && Lo(t) && (n.strokePaints = {
            data: [{
              type: "SOLID",
              color: {
                ...QW(t),
                a: 1
              },
              visible: !0,
              opacity: 1,
              blendMode: "NORMAL"
            }],
            blobs: []
          });
          break;
        case "direction":
          break;
        case "verticalAlignItems":
          "AutoLayout" === i && "VERTICAL" === n.stackMode && ("start" === t ? n.stackPrimaryAlignItems = "MIN" : "center" === t ? n.stackPrimaryAlignItems = "CENTER" : "end" === t && (n.stackPrimaryAlignItems = "MAX"));
          "AutoLayout" === i && "HORIZONTAL" === n.stackMode && ("start" === t ? n.stackCounterAlignItems = "MIN" : "center" === t ? n.stackCounterAlignItems = "CENTER" : "end" === t ? n.stackCounterAlignItems = "MAX" : "baseline" === t && (n.stackCounterAlignItems = "BASELINE"));
          break;
        case "horizontalAlignItems":
          "AutoLayout" === i && "HORIZONTAL" === n.stackMode && ("start" === t ? n.stackPrimaryAlignItems = "MIN" : "center" === t ? n.stackPrimaryAlignItems = "CENTER" : "end" === t && (n.stackPrimaryAlignItems = "MAX"));
          "AutoLayout" === i && "VERTICAL" === n.stackMode && ("start" === t ? n.stackCounterAlignItems = "MIN" : "center" === t ? n.stackCounterAlignItems = "CENTER" : "end" === t && (n.stackCounterAlignItems = "MAX"));
          break;
        case "wrap":
          "AutoLayout" === i && "HORIZONTAL" === n.stackMode && (n.stackWrap = t ? "WRAP" : "NO_WRAP");
          break;
        case "italic":
          _(n, "Italic") || console.warn("applyToNode", "Failed to set italic property", {
            k: e,
            v: t,
            type: n.type
          });
          break;
        case "fontWeight":
          if ("number" == typeof t) {
            let e = hN[t];
            if (e && _(n, e)) break;
          }
          console.warn("applyToNode", "Failed to set font weight property", {
            k: e,
            v: t,
            type: n.type
          });
          break;
        default:
          console.warn("applyToNode", "Unhandled property", {
            k: e,
            v: t,
            type: n.type
          });
      }
    } catch (r) {
      console.warn("applyToNode", "Error setting property", {
        k: e,
        v: t,
        error: r,
        type: n.type
      });
    }
  }
}
export { Ed } from "../905/389786";
export const w = $$h0;
export const Pr = $$o1;