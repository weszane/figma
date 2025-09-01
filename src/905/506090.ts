import { __rest } from "../vendor/56636";
import { useContext, Children, isValidElement, createElement, forwardRef } from "react";
import { transformFromReactProps, getResetStyles, getCornerRadius, getOpacity, getFill, getBlendMode, getOverflow, getVisibility, getItemLayout, getFrameStrokeAndEffects } from "../905/436288";
import { normalizeProps } from "../905/202646";
import { css, ParentContext, warnInvalidConstraints, getInvalidFillParentCheckerRef, mergeRefs } from "../figma_app/706870";
import { OverridesContext, findOverride, applyOverride } from "../905/186990";
import { mergeProps } from "../905/545833";
import { getDefaultFrameProps } from "../905/712000";
exports.Frame = exports.domNodeFromFrame = exports.styleForFrame = void 0;
function u(e, t, i) {
  let {
    relativeBoundingBox
  } = transformFromReactProps(e);
  let r = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, getResetStyles()), getCornerRadius(e)), getOpacity(e)), getFill(e.fill, {
    width: relativeBoundingBox.width,
    height: relativeBoundingBox.height
  })), getBlendMode(e)), getOverflow(e)), getVisibility(e)), {
    position: "relative"
  });
  let {
    style,
    wrapperStyle
  } = getItemLayout({
    props: e,
    parent: t,
    hasChildren: i
  });
  let {
    style: _style,
    overlayStyle
  } = getFrameStrokeAndEffects(e);
  return {
    style: Object.assign(Object.assign(Object.assign({}, r), style), _style),
    overlayStyle,
    wrapperStyle
  };
}
function p({
  figmaLayerName: e,
  styles: t,
  attributes: i = {},
  children: a,
  ref: s
}) {
  let {
    style,
    overlayStyle,
    wrapperStyle
  } = t;
  let {
    style: _style2
  } = i;
  let h = __rest(i, ["style"]);
  let g = useContext(OverridesContext);
  let f = Children.toArray(a).map(e => {
    if (isValidElement(e)) {
      let {
        name,
        figmaLayer
      } = e.props;
      let n = findOverride(g, {
        name: null != figmaLayer ? figmaLayer : name
      });
      return applyOverride(e, n);
    }
    return e;
  });
  if (overlayStyle && Object.keys(overlayStyle).length > 0) {
    let e = Object.assign({
      position: "absolute",
      pointerEvents: "none",
      inset: 0,
      borderRadius: style.borderRadius
    }, overlayStyle);
    f.push(createElement("div", {
      className: css(e),
      key: "fg-overlay"
    }));
  }
  let _ = {
    children: f,
    className: css(Object.assign(Object.assign(Object.assign({}, style), "function" == typeof i.onClick || "function" == typeof i.onMouseDown || "function" == typeof i.onMouseUp || "function" == typeof i.onPointerDown || "function" == typeof i.onPointerUp ? {
      userSelect: "none",
      cursor: "default"
    } : {}), _style2))
  };
  return wrapperStyle && Object.keys(wrapperStyle).length > 0 ? createElement("div", {
    "data-fg-tag": "wrapper",
    className: css(wrapperStyle),
    ref: s
  }, createElement("div", Object.assign({
    "data-layer": e
  }, mergeProps(_, h)))) : createElement("div", Object.assign({
    "data-layer": e
  }, mergeProps(_, h), {
    ref: s
  }));
}
exports.styleForFrame = u;
exports.domNodeFromFrame = p;
exports.Frame = forwardRef(function (e, t) {
  let {
    attributes,
    children
  } = e;
  let l = __rest(e, ["attributes", "children"]);
  let d = useContext(ParentContext);
  warnInvalidConstraints(Object.assign(Object.assign({}, l), {
    parent: d
  }));
  let m = normalizeProps(Object.assign(Object.assign({}, getDefaultFrameProps()), l));
  let h = getInvalidFillParentCheckerRef(Object.assign(Object.assign({}, m), {
    parent: d
  }));
  let g = u(m, d, Children.count(children) > 0);
  return createElement(ParentContext.Provider, {
    value: {
      type: "frame",
      props: m
    }
  }, p({
    figmaLayerName: m.name,
    styles: g,
    attributes,
    children,
    ref: mergeRefs([h, t])
  }));
});