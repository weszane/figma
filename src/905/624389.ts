import { __rest } from "../vendor/56636";
import { createElement, forwardRef, useContext } from "react";
import { ParentContext, warnInvalidConstraints, css } from "../figma_app/706870";
import { getDefaultSvgProps } from "../905/712000";
import { getResetStyles, getSvgLayout, getBlendMode, getVisibility } from "../905/436288";
import { RenderNode } from "../905/563150";
import { renderTree } from "../905/816350";
import { normalizeProps } from "../905/202646";
import { mergeProps } from "../905/545833";
exports.SVG = exports.styleForSvg = exports.RenderTreeView = void 0;
function p(e, t) {
  return Object.assign(Object.assign(Object.assign(Object.assign({}, getResetStyles()), getSvgLayout({
    props: e,
    parent: t,
    hasChildren: !1
  })), getBlendMode(e)), getVisibility(e));
}
exports.RenderTreeView = ({
  node: e
}) => {
  let t = new Map();
  return createElement(RenderNode, {
    defMaker: (e, i) => {
      let n = t.get(e);
      return void 0 === n ? (n = createElement("defs", null, i(e)), t.set(e, n), n) : null;
    },
    node: e
  });
};
exports.styleForSvg = p;
exports.SVG = forwardRef(function (e, i) {
  let {
    attributes = {}
  } = e;
  let l = __rest(e, ["attributes"]);
  let m = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, l), {
    parent: m
  }));
  let h = normalizeProps(Object.assign(Object.assign({}, getDefaultSvgProps()), l));
  let g = p(h, m);
  let f = renderTree(h, {});
  let _ = css(g);
  return createElement("svg", Object.assign({
    "data-layer": h.name,
    ref: i
  }, mergeProps({
    className: _
  }, attributes)), createElement(exports.RenderTreeView, {
    node: f
  }));
});