import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { forwardRef, useRef, useImperativeHandle, useState, useCallback } from "react";
import { j } from "../figma_app/465776";
import { p } from "../905/71149";
import { jk } from "../905/499018";
import { Ib } from "../905/129884";
function d(e, t) {
  return t ? e.scrollHeight > e.offsetHeight : e.scrollWidth > e.offsetWidth;
}
export let $$c0 = forwardRef(function (e, t) {
  let {
    fontFamily,
    fontSize,
    fontWeight,
    color,
    truncate
  } = e;
  let h = useRef(null);
  useImperativeHandle(t, () => ({
    get isTruncated() {
      let e = h.current;
      if (!e || !truncate) return !1;
      return d(e, "line-clamp" === truncate);
    }
  }));
  let g = e.showTooltipWhenTruncated ?? !!truncate;
  let f = {};
  let [_, A] = useState(null);
  let y = useCallback(e => {
    let t = e.target;
    d(t, "line-clamp" === truncate) ? A(t.innerText) : A(null);
  }, [truncate, A]);
  fontSize && Object.assign(f, p(fontSize));
  fontWeight && (f.fontWeight = function (e) {
    switch (e) {
      case "regular":
        return 400;
      case "medium":
        return 500;
      case "semi-bold":
        return 600;
      case "bold":
        return 700;
      case "extra-bold":
        return 800;
      case "black":
        return 900;
      default:
        j(e);
        return 400;
    }
  }(fontWeight));
  color && (f.color = jk(color));
  fontFamily && (f.fontFamily = function (e) {
    let t = "Inter, sans-serif";
    switch (e) {
      case "primary":
        return t;
      case "monospace":
        return "Roboto Mono, monospace";
      case "whyte":
        return "Whyte, sans-serif";
      case "whyte-inktrap":
        return "WhyteInktrap, sans-serif";
      default:
        j(e);
        return t;
    }
  }(fontFamily));
  truncate && "line-clamp" !== truncate && Object.assign(f, function (e) {
    let t = {
      maxWidth: "100%",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    };
    switch (e) {
      case "end":
        return t;
      case "start":
        return {
          ...t,
          direction: "rtl",
          textAlign: "left"
        };
      default:
        j(e);
        return t;
    }
  }(!0 === truncate ? "end" : truncate));
  "line-clamp" === truncate && e.lineClamp && Object.assign(f, {
    maxWidth: "100%",
    overflow: "hidden",
    display: "-webkit-inline-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: e.lineClamp
  });
  return jsxs("span", {
    ref: h,
    style: f,
    onMouseEnter: g ? y : void 0,
    "data-tooltip-type": g ? Ib.TEXT : void 0,
    "data-tooltip": g ? _ : void 0,
    children: [e.children, "rtl" === f.direction ? jsx(Fragment, {
      children: "\u200E"
    }) : null]
  });
});
export const EY = $$c0;