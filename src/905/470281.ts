import { jsx } from "react/jsx-runtime";
import { createContext, forwardRef, useContext, useRef, useImperativeHandle, useLayoutEffect } from "react";
import { isNullish } from "../figma_app/95419";
import { Uw, K } from "../905/499018";
let a = {
  cornerRadius: 0
};
let s = {
  strokeColor: "transparent",
  strokeWidth: 0
};
let o = {
  width: "fill-parent",
  height: "fill-parent"
};
function c(e) {
  switch (e) {
    case "center":
      return "center";
    case "end":
      return "flex-end";
    case "start":
      return "flex-start";
    case "baseline":
      return "baseline";
    case "space-between":
      return "space-between";
    case "stretch":
      return "stretch";
  }
}
let u = "autolayout--ignoreSpacing--Qyi-n";
let p = createContext(0);
let $$m0 = forwardRef(function (e, t) {
  let i = useContext(p);
  let {
    dataTestId,
    children,
    ...g
  } = e;
  let f = useRef(null);
  useImperativeHandle(t, () => f.current);
  useLayoutEffect(() => {
    for (let e of f.current.children) "absolute" === window.getComputedStyle(e).position && e.classList.add(u);
  }, []);
  let {
    usesSpacing,
    style
  } = function (e, t) {
    let {
      cornerRadius,
      padding,
      width,
      height,
      direction,
      spacing,
      verticalAlignItems,
      horizontalAlignItems,
      backgroundColor
    } = e;
    let m = {};
    Object.assign(m, function (e) {
      let {
        strokeColor,
        strokeWidth
      } = e;
      let n = {};
      (0 !== strokeWidth.top || 0 !== strokeWidth.right || 0 !== strokeWidth.bottom || 0 !== strokeWidth.left) && (n.borderWidth = `${strokeWidth.top}px ${strokeWidth.right}px ${strokeWidth.bottom}px ${strokeWidth.left}px`, n.borderStyle = "solid", n.borderColor = Uw(strokeColor));
      return n;
    }(e));
    m.boxSizing = "border-box";
    cornerRadius.some(e => 0 !== e) && (m.borderRadius = cornerRadius.map(e => `${e}px`).join(" "));
    (0 !== padding.top || 0 !== padding.right || 0 !== padding.bottom || 0 !== padding.left) && (m.padding = `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`);
    "number" == typeof width ? (m.width = width, m.minWidth = width) : "fill-parent" === width ? m.width = "100%" : "hug-contents" === width ? m.width = "max-content" : width.endsWith("%") && (m.width = width);
    "number" == typeof height ? (m.height = height, m.minHeight = height) : "fill-parent" === height ? m.height = "100%" : "hug-contents" === height ? m.height = "max-content" : height.endsWith("%") && (m.height = height);
    backgroundColor && (m.backgroundColor = K(backgroundColor));
    m.display = "flex";
    m.flexDirection = "vertical" === direction ? "column" : "row";
    "horizontal" === direction ? (m.justifyContent = c(horizontalAlignItems), m.alignItems = c(verticalAlignItems)) : "vertical" === direction && (m.justifyContent = c(verticalAlignItems), m.alignItems = c(horizontalAlignItems));
    let h = !1;
    let g = "0px";
    let f = "0px";
    if ("auto" === spacing) m.justifyContent = "space-between";else {
      let e;
      h = !0;
      e = "number" == typeof spacing ? `${spacing}px` : spacing;
      "horizontal" === direction ? g = e : f = e;
      t % 2 == 0 ? (m["--autolayout-spacing-horizontal-even"] = g, m["--autolayout-spacing-vertical-even"] = f) : (m["--autolayout-spacing-horizontal-odd"] = g, m["--autolayout-spacing-vertical-odd"] = f);
    }
    return {
      usesSpacing: h,
      style: m
    };
  }(function (e) {
    var t;
    var i;
    var n;
    let r = {};
    for (let a in e) switch (a) {
      case "padding":
        r.padding = (n = e.padding, isNullish(n) ? {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        } : "number" == typeof n ? {
          top: n,
          right: n,
          bottom: n,
          left: n
        } : "vertical" in n || "horizontal" in n ? {
          top: n.vertical ?? 0,
          bottom: n.vertical ?? 0,
          right: n.horizontal ?? 0,
          left: n.horizontal ?? 0
        } : {
          top: n.top ?? 0,
          right: n.right ?? 0,
          bottom: n.bottom ?? 0,
          left: n.left ?? 0
        });
        break;
      case "strokeWidth":
        r.strokeWidth = (t = e.strokeWidth, isNullish(t) ? {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        } : "number" == typeof t ? {
          top: t,
          right: t,
          bottom: t,
          left: t
        } : {
          top: t.top ?? 0,
          right: t.right ?? 0,
          bottom: t.bottom ?? 0,
          left: t.left ?? 0
        });
        break;
      case "cornerRadius":
        r.cornerRadius = (i = e.cornerRadius, isNullish(i) ? [0, 0, 0, 0] : "number" == typeof i ? [i, i, i, i] : [i.topLeft ?? 0, i.topRight ?? 0, i.bottomRight ?? 0, i.bottomLeft ?? 0]);
        break;
      default:
        r[a] = e[a];
    }
    return r;
  }({
    ...{
      ...a,
      ...s,
      ...o,
      ...function (e) {
        let t = e.direction ?? "horizontal";
        return {
          direction: t,
          spacing: 8,
          padding: 0,
          horizontalAlignItems: "start",
          verticalAlignItems: "horizontal" === t ? "center" : "start"
        };
      }(g),
      backgroundColor: "transparent",
      dataTestId: ""
    },
    ...g
  }), i);
  return jsx(p.Provider, {
    value: i + 1,
    children: jsx("div", {
      ref: f,
      className: usesSpacing ? i % 2 == 0 ? "autolayout--containerEven--6FZdS" : "autolayout--containerOdd--Rpg-5" : void 0,
      style,
      children,
      "data-testid": dataTestId
    })
  });
});
export function $$h1({
  minSize: e = 0
}) {
  return jsx("div", {
    "aria-hidden": "true",
    className: u,
    style: {
      flexGrow: 1,
      flexShrink: 0,
      flexBasis: e
    }
  });
}
export const Y = $$m0;
export const M = $$h1;