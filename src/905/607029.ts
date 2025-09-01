import { __rest } from "../vendor/56636";
import { createElement } from "react";
import { mergeProps } from "../905/545833";
import { css } from "../figma_app/706870";
exports.Paragraph = void 0;
exports.Paragraph = function (e) {
  let {
    children,
    spacing
  } = e;
  let o = __rest(e, ["children", "spacing"]);
  return createElement("p", Object.assign({}, mergeProps(o, {
    className: css(spacing ? {
      marginBottom: spacing
    } : {})
  })), children);
};