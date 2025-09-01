import { __rest } from "../vendor/56636";
import { createElement, forwardRef, useContext } from "react";
import { getInvalidFillParentCheckerRef, css, mergeRefs, ParentContext, warnInvalidConstraints } from "../figma_app/706870";
import { transformFromReactProps, getResetStyles, getCornerRadius, getOpacity, getBlendMode, getRectangleStrokeAndEffects, getVisibility, getItemLayout } from "../905/436288";
import { getFill } from "../905/393409";
import { normalizeProps } from "../905/202646";
import { getDefaultRectangleProps } from "../905/712000";
import { mergeProps } from "../905/545833";
exports.Rectangle = exports.domNodeFromRectangle = void 0;
function u(e, t, i, n = {}) {
  let l = getInvalidFillParentCheckerRef(Object.assign(Object.assign({}, e), {
    parent: t
  }));
  let {
    style,
    wrapperStyle
  } = function (e, t, i) {
    let {
      relativeBoundingBox
    } = transformFromReactProps(e);
    let r = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
      position: "relative"
    }, getResetStyles()), getCornerRadius(e)), getOpacity(e)), getFill(e.fill, {
      width: relativeBoundingBox.width,
      height: relativeBoundingBox.height
    })), getBlendMode(e)), getRectangleStrokeAndEffects(e)), getVisibility(e));
    let {
      style: _style,
      wrapperStyle: _wrapperStyle
    } = getItemLayout({
      props: e,
      parent: t,
      hasChildren: i
    });
    return {
      style: Object.assign(Object.assign({}, r), _style),
      wrapperStyle: _wrapperStyle
    };
  }(e, t, !1);
  let m = css(style);
  let h = createElement("div", Object.assign({
    "data-layer": e.name,
    ref: mergeRefs([l, i])
  }, mergeProps({
    className: m
  }, n)));
  return wrapperStyle && Object.keys(wrapperStyle).length > 0 ? createElement("div", {
    className: css(wrapperStyle)
  }, h) : h;
}
exports.domNodeFromRectangle = u;
exports.Rectangle = forwardRef(function (e, t) {
  let {
    attributes
  } = e;
  let s = __rest(e, ["attributes"]);
  let o = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, s), {
    parent: o
  }));
  return u(normalizeProps(Object.assign(Object.assign({}, getDefaultRectangleProps()), s)), o, t, attributes);
});