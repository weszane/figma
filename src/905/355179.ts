import { __rest } from "../vendor/56636";
import { mergeProps } from "../905/545833";
import { getTextColor, getTextStyle } from "../905/436288";
import { createElement } from "react";
import { normalizeProps } from "../905/202646";
import { css } from "../figma_app/706870";
exports.Span = exports.styleForSpanInTextNode = void 0;
function d(e) {
  return Object.assign(Object.assign({
    display: "inline",
    position: "relative"
  }, getTextColor(e, 1)), getTextStyle(e));
}
exports.styleForSpanInTextNode = d;
exports.Span = function (e) {
  let {
    attributes = {},
    children
  } = e;
  let a = __rest(e, ["attributes", "children"]);
  let c = d(normalizeProps(Object.assign({
    fill: []
  }, a)));
  return e.href ? createElement("a", Object.assign({
    href: e.href
  }, mergeProps(attributes, {
    className: css(Object.assign(Object.assign({}, c), {
      cursor: "default"
    }))
  })), children) : createElement("span", Object.assign({}, mergeProps({
    className: css(c)
  }, attributes)), children);
};