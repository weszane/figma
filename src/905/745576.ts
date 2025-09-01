import { __rest } from "../vendor/56636";
import { forwardRef, createElement } from "react";
import { OverridesContext } from "../905/186990";
import { AutoLayout } from "../figma_app/947482";
import { Frame } from "../905/506090";
exports.Component = void 0;
exports.Component = forwardRef(function (e, t) {
  let {
    attributes,
    overrides = {}
  } = e;
  let d = __rest(e, ["attributes", "overrides"]);
  let c = Object.assign(Object.assign({}, d), {
    attributes
  });
  return createElement(OverridesContext.Provider, {
    value: overrides
  }, !function (e) {
    let t = {
      direction: !0,
      horizontalAlignItems: !0,
      padding: !0,
      spacing: !0,
      verticalAlignItems: !0
    };
    for (let i in e) if (i in t) return !0;
    return !1;
  }(d) ? createElement(Frame, Object.assign({}, c, {
    ref: t
  })) : createElement(AutoLayout, Object.assign({}, c, {
    ref: t
  })));
});