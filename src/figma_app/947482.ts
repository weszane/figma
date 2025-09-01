import { __rest } from "../vendor/56636";
import { forwardRef, useContext, Children, createElement } from "react";
import { ParentContext, warnInvalidConstraints, getInvalidFillParentCheckerRef, mergeRefs } from "../figma_app/706870";
import { styleForFrame, domNodeFromFrame } from "../905/506090";
import { getParentLayout, getVisibility } from "../905/436288";
import { getDefaultAutoLayoutProps } from "../905/712000";
import { normalizeProps } from "../905/202646";
exports.AutoLayout = exports.styleForAutoLayout = void 0;
function c(e, t, r) {
  let {
    style,
    overlayStyle,
    wrapperStyle
  } = styleForFrame(e, t, r);
  return {
    style: Object.assign(Object.assign(Object.assign({}, style), getParentLayout(e)), getVisibility(e)),
    overlayStyle,
    wrapperStyle
  };
}
exports.styleForAutoLayout = c;
exports.AutoLayout = forwardRef(function (e, t) {
  let {
    attributes,
    children
  } = e;
  let u = __rest(e, ["attributes", "children"]);
  let p = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, u), {
    parent: p
  }));
  let _ = normalizeProps(Object.assign(Object.assign({}, getDefaultAutoLayoutProps()), u));
  let h = getInvalidFillParentCheckerRef(Object.assign(Object.assign({}, _), {
    parent: p
  }));
  let m = c(_, p, Children.count(children) > 0);
  return createElement(ParentContext.Provider, {
    value: {
      type: "autolayout",
      props: _
    }
  }, domNodeFromFrame({
    figmaLayerName: _.name,
    styles: m,
    attributes,
    children,
    ref: mergeRefs([h, t])
  }));
});