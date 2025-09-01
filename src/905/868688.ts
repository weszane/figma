import { __rest } from "../vendor/56636";
import { forwardRef, useContext, createElement, cloneElement } from "react";
import { ParentContext, warnInvalidConstraints, css } from "../figma_app/706870";
import { getDefaultTextProps } from "../905/712000";
import { getResetStyles, getOpacity, getTextColor, getTextStyle, getTextAlign, getTextEffects, getVisibility, getTextLayout } from "../905/436288";
import { normalizeProps } from "../905/202646";
import { mergeProps } from "../905/545833";
exports.applyTextProp = exports.Text = exports.styleForTextNode = void 0;
function c(e, t, i) {
  let n = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    display: "inline-block"
  }, getResetStyles()), getOpacity(e)), getTextColor(e, i)), getTextStyle(e)), getTextAlign(e)), getTextEffects(e.effect)), getVisibility(e));
  let {
    style,
    wrapperStyle
  } = getTextLayout(e, t);
  return {
    style: Object.assign(Object.assign({}, n), style),
    wrapperStyle
  };
}
exports.styleForTextNode = c;
exports.Text = forwardRef(function (e, t) {
  let {
    attributes = {},
    children
  } = e;
  let u = __rest(e, ["attributes", "children"]);
  let p = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, u), {
    parent: p
  }));
  let m = normalizeProps(Object.assign(Object.assign({}, getDefaultTextProps()), u));
  let {
    style,
    wrapperStyle
  } = c(m, p);
  let f = {
    "data-layer": m.name,
    children: Array.isArray(children) ? createElement("div", null, children) : children,
    className: css(Object.assign(Object.assign({}, style), m.href ? {
      cursor: "default"
    } : {})),
    ref: t
  };
  let _ = m.href ? createElement("a", Object.assign({
    href: m.href
  }, mergeProps(attributes, f))) : createElement("div", Object.assign({}, mergeProps(attributes, f)));
  return wrapperStyle && Object.keys(wrapperStyle).length > 0 ? createElement("div", {
    className: css(wrapperStyle)
  }, _) : _;
});
exports.applyTextProp = function (e, t) {
  return void 0 !== t ? cloneElement(e, {
    children: t
  }) : e;
};