import { __rest } from "../vendor/56636";
import { forwardRef, useContext, createElement } from "react";
import { ParentContext, warnInvalidConstraints, css } from "../figma_app/706870";
import { transformFromReactProps, getResetStyles, getOpacity, getFill, getBlendMode, getItemLayout, getRectangleStrokeAndEffects, getVisibility } from "../905/436288";
import { normalizeProps } from "../905/202646";
import { getDefaultEllipseProps } from "../905/712000";
import { mergeProps } from "../905/545833";
exports.Ellipse = exports.styleForEllipse = void 0;
function c(e, t) {
  let {
    relativeBoundingBox
  } = transformFromReactProps(e);
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, getResetStyles()), getOpacity(e)), getFill(e.fill, {
    width: relativeBoundingBox.width,
    height: relativeBoundingBox.height
  })), getBlendMode(e)), getItemLayout({
    props: e,
    parent: t,
    hasChildren: !1
  }).style), getRectangleStrokeAndEffects(e)), getVisibility(e)), {
    height: e.height + "px",
    width: e.width + "px",
    borderRadius: "50%"
  });
}
exports.styleForEllipse = c;
exports.Ellipse = forwardRef(function (e, t) {
  let {
    attributes,
    children
  } = e;
  let u = __rest(e, ["attributes", "children"]);
  let p = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, u), {
    parent: p
  }));
  let m = normalizeProps(Object.assign(Object.assign({}, getDefaultEllipseProps()), u));
  let h = css(c(m, p));
  return createElement("div", Object.assign({
    "data-layer": m.name
  }, mergeProps(attributes, {
    className: h
  }), {
    ref: t
  }));
});