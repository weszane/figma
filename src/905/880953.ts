import { __rest } from "../vendor/56636";
import { forwardRef, useContext, createElement } from "react";
import { isAutoLayout, ParentContext, warnInvalidConstraints, getInvalidFillParentCheckerRef, mergeRefs, css } from "../figma_app/706870";
import { getResetStyles, getFill, getBlendMode, getOpacity, getEffectsStyle, getVisibility, getConstraintPositioning } from "../905/436288";
import { normalizeProps } from "../905/202646";
import { mergeProps } from "../905/545833";
import { getDefaultLineProps } from "../905/712000";
exports.Line = exports.styleForLine = void 0;
function c(e, t) {
  let i = "horizontal" === e.direction;
  let n = "fill-parent" === e.length;
  let r = `${e.strokeWidth.toFixed(2)}px`;
  let o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, getResetStyles()), getFill(e.stroke)), getBlendMode(e)), getOpacity(e)), getEffectsStyle(e.effect)), getVisibility(e));
  if (!t && n) {
    let t = i ? "100%" : r;
    let n = i ? r : "100%";
    return {
      style: Object.assign(Object.assign(Object.assign({}, o), {
        width: t,
        height: n
      }), getConstraintPositioning(e))
    };
  }
  if (!t || !isAutoLayout(t)) {
    let t = i ? e.length : e.strokeWidth;
    let n = i ? e.strokeWidth : e.length;
    return {
      style: Object.assign(Object.assign(Object.assign({}, o), {
        width: `${t}px`,
        height: `${n}px`
      }), getConstraintPositioning(e))
    };
  }
  let l = isAutoLayout(t) ? t.props.direction : void 0;
  let d = {
    overflow: "visible"
  };
  let c = Object.assign(Object.assign({}, o), {
    position: "relative"
  });
  return (i ? (c.top = -e.strokeWidth + "px", c.height = r, d.height = "0px") : (c.width = r, d.width = "0px"), e.direction === l) ? (n && (d.flexGrow = 1), i ? (c.width = "100%", d.width = n ? void 0 : `${e.length}px`) : (c.height = "100%", d.height = n ? void 0 : `${e.length}px`), {
    wrapperStyle: d,
    style: c
  }) : (i ? (c.width = "100%", n ? d.alignSelf = "stretch" : d.width = `${e.length}px`) : (c.height = "100%", n ? d.alignSelf = "stretch" : d.height = `${e.length}px`), {
    style: c,
    wrapperStyle: d
  });
}
exports.styleForLine = c;
exports.Line = forwardRef(function (e, t) {
  let {
    attributes = {},
    children
  } = e;
  let u = __rest(e, ["attributes", "children"]);
  let p = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, u), {
    parent: p
  }));
  let m = normalizeProps(Object.assign(Object.assign(Object.assign({}, getDefaultLineProps()), {
    stroke: []
  }), u));
  let h = getInvalidFillParentCheckerRef(Object.assign(Object.assign({}, m), {
    parent: p
  }));
  let {
    style,
    wrapperStyle
  } = c(m, p);
  let _ = createElement("div", Object.assign({
    "data-layer": m.name,
    ref: mergeRefs([h, t])
  }, mergeProps({
    className: css(style)
  }, attributes)));
  return wrapperStyle ? createElement("div", {
    className: css(wrapperStyle)
  }, _) : _;
});