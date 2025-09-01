import { exists } from "../905/372580";
import { isRotated, getCenteredRotation, flipVertical, getRelativeBoundsAndRotation } from "../905/346946";
import { cssFilterFromBlurEffectRadius, concatOptional, cssDropShadow, getEffectsStyle, colorToString, cssBlendMode } from "../905/393409";
import { transformDefaults } from "../905/712000";
import { isAutoLayout, ABSOLUTE_CLASS } from "../figma_app/706870";
import { concatFilter, cssVarToString } from "../905/436288";
exports.transformFromReactProps = exports.getSvgLayout = exports.getConstraintPositioning = exports.getItemLayout = exports.getParentLayout = exports.getOpacity = exports.getTextColor = exports.getBlendMode = exports.getTextLayout = exports.getTextAlign = exports.getFrameStrokeAndEffects = exports.getRectangleStrokeAndEffects = exports.getTextEffects = exports.getCornerRadius = exports.cornerRadiusToArray = exports.getOverflow = exports.getVisibility = exports.getResetStyles = void 0;
function d(e) {
  var t;
  var i;
  var r;
  var a;
  let {
    cornerRadius
  } = e;
  if (exists(cornerRadius) && 0 !== cornerRadius) return "number" == typeof cornerRadius ? [cornerRadius, cornerRadius, cornerRadius, cornerRadius] : [null !== (t = cornerRadius.topLeft) && void 0 !== t ? t : 0, null !== (i = cornerRadius.topRight) && void 0 !== i ? i : 0, null !== (r = cornerRadius.bottomRight) && void 0 !== r ? r : 0, null !== (a = cornerRadius.bottomLeft) && void 0 !== a ? a : 0];
}
function c({
  props: e,
  parent: t,
  hasChildren: i,
  ignoreRotation: a = !1
}) {
  let s;
  let d = {};
  if (exists(t) && isAutoLayout(t) && "absolute" !== e.positioning) {
    var c;
    let n = Object.assign(Object.assign({}, isAutoLayout(t) && ("horizontal" === t.props.direction && "fill-parent" === e.width || "vertical" === t.props.direction && "fill-parent" === e.height) ? {
      flexGrow: 1,
      flexBasis: 0
    } : {
      flexShrink: 0
    }), isAutoLayout(t) && ("horizontal" === t.props.direction && "fill-parent" === e.height || "vertical" === t.props.direction && "fill-parent" === e.width) ? {
      alignSelf: "stretch"
    } : {});
    e.padding && (0 !== (c = e.padding).top || 0 !== c.bottom || 0 !== c.left || 0 !== c.right) && i ? (d = n, s = {
      width: "100%",
      height: "100%"
    }) : s = n;
  } else s = exists(t) ? u(e) : {
    position: "relative"
  };
  exists(t) || "fill-parent" !== e.width || (s.width = "100%");
  exists(t) || "fill-parent" !== e.height || (s.height = "100%");
  let {
    width,
    height
  } = e;
  let _ = g(e);
  if (isRotated(_) && "number" == typeof width && "number" == typeof height) {
    let e = Object.assign(Object.assign({}, function (e, t, i) {
      let {
        width,
        height
      } = e;
      return {
        width: t / width * 100 + "%",
        height: i / height * 100 + "%",
        left: (width - t) / 2 / width * 100 + "%",
        top: (height - i) / 2 / height * 100 + "%"
      };
    }(_.relativeBoundingBox, width, height)), a ? {} : h(_));
    return {
      wrapperStyle: Object.assign(Object.assign(Object.assign({}, d), s), function (e) {
        let {
          width,
          height
        } = e;
        let n = {};
        n.width = width.toFixed(2) + "px";
        n.height = height.toFixed(2) + "px";
        return n;
      }(_.relativeBoundingBox)),
      style: e
    };
  }
  {
    let {
      transform
    } = h(_);
    let i = Object.keys(d).length > 0;
    return {
      style: Object.assign(Object.assign(Object.assign({}, s), i ? {} : m(e)), {
        transform: exists(transform) && !a ? concatFilter(s.transform, transform) : s.transform
      }),
      wrapperStyle: i ? Object.assign(Object.assign({}, d), m(e)) : void 0
    };
  }
}
function u(e) {
  let t = {
    position: "absolute"
  };
  let i = 0;
  let n = 0;
  "direction" in e && ("vertical" === e.direction && (i = e.strokeWidth / 2), "horizontal" === e.direction && (n = e.strokeWidth / 2));
  let {
    x,
    y
  } = e;
  switch (x.type) {
    case "left":
      t.left = x.offset - i + "px";
      break;
    case "right":
      t.right = x.offset + i + "px";
      break;
    case "left-right":
      t.left = x.leftOffset - i + "px";
      t.width = `calc(100% - (${x.leftOffset}px + ${x.rightOffset}px))`;
      break;
    case "center":
      t.transform = "translateX(-50%)";
      t.left = `calc(50% + ${Math.round(x.offset)}px)`;
      break;
    case "horizontal-scale":
      {
        t.left = x.leftOffsetPercent.toFixed(2) + "%";
        let e = 100 - (x.leftOffsetPercent + x.rightOffsetPercent);
        t.width = `${e.toFixed(2)}%`;
      }
  }
  switch (y.type) {
    case "top":
      t.top = y.offset - n + "px";
      break;
    case "bottom":
      t.bottom = y.offset + n + "px";
      break;
    case "top-bottom":
      t.top = y.topOffset - n + "px";
      t.height = `calc(100% - (${y.topOffset}px + ${y.bottomOffset}px))`;
      break;
    case "center":
      t.transform = concatFilter(t.transform, "translateY(-50%)");
      t.top = `calc(50% + ${Math.round(y.offset)}px)`;
      break;
    case "vertical-scale":
      {
        t.top = y.topOffsetPercent.toFixed(2) + "%";
        let e = 100 - (y.topOffsetPercent + y.bottomOffsetPercent);
        t.height = `${e.toFixed(2)}%`;
      }
  }
  return t;
}
function p(e) {
  switch (e) {
    case "center":
      return "center";
    case "end":
      return "flex-end";
    case "start":
      return "flex-start";
    case "baseline":
      return "baseline";
  }
}
function m(e) {
  var t;
  var i;
  var n;
  var r;
  let a = {};
  "number" != typeof e.width || e.x?.type === "left-right" || e.x?.type === "horizontal-scale" || (a.width = e.width.toFixed(2) + "px");
  "number" != typeof e.height || e.y?.type === "top-bottom" || e.y?.type === "vertical-scale" || (a.height = e.height.toFixed(2) + "px");
  return a;
}
function h(e) {
  let {
    relativeTransform
  } = e;
  let i = relativeTransform[0][0];
  let n = relativeTransform[0][1];
  let r = relativeTransform[1][0];
  let a = relativeTransform[1][1];
  return 1 === i && 0 === r && 0 === n && 1 === a ? {} : {
    transform: `matrix(${i},${r},${n},${a},0,0)`
  };
}
function g(e) {
  var t;
  let i = "number" == typeof e.width ? e.width : 0;
  let n = "number" == typeof e.height ? e.height : 0;
  let a = getCenteredRotation(null !== (t = e.rotation) && void 0 !== t ? t : transformDefaults().rotation, i, n);
  e.flipVertical && (a = flipVertical(a));
  let {
    relativeBoundingBox,
    rotationOnlyTransform
  } = getRelativeBoundsAndRotation({
    width: i,
    height: n,
    relativeTransform: a
  });
  return {
    relativeTransform: a,
    relativeBoundingBox,
    rotationOnlyTransform
  };
}
exports.getResetStyles = function () {
  return {
    boxSizing: "border-box"
  };
};
exports.getVisibility = function (e) {
  return !0 === e.hidden ? {
    display: "none"
  } : {};
};
exports.getOverflow = function (e) {
  return {
    overflow: e.overflow
  };
};
exports.cornerRadiusToArray = d;
exports.getCornerRadius = function (e) {
  let t = d(e);
  return exists(t) ? {
    borderRadius: t.map(e => `${e}px`).join(" ")
  } : {};
};
exports.getTextEffects = function (e) {
  let t = {};
  e.filter(e => e.visible).forEach(e => {
    switch (e.type) {
      case "layer-blur":
        t.filter = cssFilterFromBlurEffectRadius(e.blur);
        break;
      case "background-blur":
        t.backdropFilter = cssFilterFromBlurEffectRadius(e.blur);
        break;
      case "drop-shadow":
        t.textShadow = concatOptional(t.textShadow, cssDropShadow(e));
        break;
      case "inner-shadow":
        console.warn("Inner shadow is not supported on text");
    }
  });
  return t;
};
exports.getRectangleStrokeAndEffects = function (e) {
  let t = getEffectsStyle(e.effect);
  let {
    stroke,
    strokeWidth = 0,
    strokeAlign
  } = e;
  if (stroke) {
    let e = stroke.find(e => "css-var" === e.type || "solid" === e.type && !1 !== e.visible && e.color);
    if (e) {
      let i;
      if ("css-var" === e.type) i = cssVarToString(e);else {
        let {
          color,
          opacity
        } = e;
        i = colorToString(color, opacity);
      }
      switch (strokeAlign) {
        case "inside":
          t.boxShadow = concatOptional(t.boxShadow, `0px 0px 0px ${strokeWidth}px ${i} inset`);
          break;
        case "outside":
          t.boxShadow = concatOptional(t.boxShadow, `0px 0px 0px ${strokeWidth}px ${i}`);
          break;
        case "center":
          t.boxShadow = concatOptional(t.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${i} inset`);
          t.boxShadow = concatOptional(t.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${i}`);
      }
    }
  }
  return t;
};
exports.getFrameStrokeAndEffects = function (e) {
  let t = "hidden" === e.overflow;
  let {
    fill,
    effect
  } = e;
  let r = t && fill.some(e => !1 !== e.visible);
  let s = getEffectsStyle(effect, r);
  let o = {};
  let {
    stroke,
    strokeWidth = 0,
    strokeAlign
  } = e;
  if (stroke) {
    let e = stroke.find(e => "css-var" === e.type || "solid" === e.type && !1 !== e.visible && e.color);
    if (e) {
      let i;
      if ("css-var" === e.type) i = cssVarToString(e);else {
        let {
          color,
          opacity
        } = e;
        i = colorToString(color, opacity);
      }
      switch (strokeAlign) {
        case "inside":
          t ? o.boxShadow = `0px 0px 0px ${strokeWidth}px ${i} inset` : s.boxShadow = concatOptional(s.boxShadow, `0px 0px 0px ${strokeWidth}px ${i} inset`);
          break;
        case "outside":
          s.boxShadow = concatOptional(s.boxShadow, `0px 0px 0px ${strokeWidth}px ${i}`);
          break;
        case "center":
          t ? o.boxShadow = `0px 0px 0px ${strokeWidth / 2}px ${i} inset` : s.boxShadow = concatOptional(s.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${i} inset`);
          s.boxShadow = concatOptional(s.boxShadow, `0px 0px 0px ${strokeWidth / 2}px ${i}`);
      }
    }
  }
  return {
    style: s,
    overlayStyle: o
  };
};
exports.getTextAlign = function (e) {
  let t = {};
  e.horizontalAlignText && (t.textAlign = function (e) {
    switch (e) {
      case "center":
        return "center";
      case "left":
        return "left";
      case "right":
        return "right";
      case "justified":
        return "justify";
    }
  }(e.horizontalAlignText));
  e.verticalAlignText && (t.display = "flex", t.flexDirection = "column", t.justifyContent = function (e) {
    switch (e) {
      case "bottom":
        return "flex-end";
      case "center":
        return "center";
      case "top":
        return "flex-start";
    }
  }(e.verticalAlignText));
  return t;
};
exports.getTextLayout = function (e, t) {
  let {
    style,
    wrapperStyle
  } = c({
    props: e,
    parent: t,
    hasChildren: !1
  });
  let {
    width,
    height
  } = e;
  let o = g(e);
  isRotated(o) || ("hug-contents" === width && "hug-contents" === height ? (delete style.width, delete style.height) : "hug-contents" === height ? delete style.height : "hug-contents" === width && console.warn("Text cannot have hug-contents on width only"));
  ("hug-contents" !== width || "hug-contents" !== height) && (style.wordBreak = "break-word");
  return {
    style,
    wrapperStyle
  };
};
exports.getBlendMode = function (e) {
  return {
    mixBlendMode: cssBlendMode(e)
  };
};
exports.getTextColor = function (e, t = 1) {
  var i;
  var r;
  let s = {};
  let o = e.fill.find(e => !1 !== e.visible);
  exists(o) && ("css-var" === o.type && (s.color = cssVarToString(o)), "solid" === o.type && o.color && (s.color = colorToString(Object.assign(Object.assign({}, o.color), {
    a: o.color.a * (null !== (i = o.opacity) && void 0 !== i ? i : 1) * (null !== (r = e.opacity) && void 0 !== r ? r : 1) * t
  }))));
  return s;
};
exports.getOpacity = function (e) {
  let t = e.opacity;
  return void 0 !== t && 1 !== t ? {
    opacity: t
  } : {};
};
exports.getParentLayout = function (e) {
  let t = {};
  let {
    padding
  } = e;
  let {
    direction,
    spacing,
    verticalAlignItems,
    horizontalAlignItems
  } = e;
  (0 !== padding.top || 0 !== padding.right || 0 !== padding.bottom || 0 !== padding.left) && (t.padding = `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`);
  t.display = "flex";
  t.flexDirection = "vertical" === direction ? "column" : "row";
  "horizontal" === direction ? t.justifyContent = p(horizontalAlignItems) : "vertical" === direction && (t.alignItems = p(horizontalAlignItems));
  "horizontal" === direction ? t.alignItems = p(verticalAlignItems) : "vertical" === direction && (t.justifyContent = p(verticalAlignItems));
  "number" == typeof spacing ? Object.assign(t, {
    [`> *:not(.${ABSOLUTE_CLASS}) ~ *:not(.${ABSOLUTE_CLASS})`]: {
      ["horizontal" === direction ? "marginLeft" : "marginTop"]: `${spacing}px`
    }
  }) : "auto" === spacing && (t.justifyContent = "space-between");
  return t;
};
exports.getItemLayout = c;
exports.getConstraintPositioning = u;
exports.getSvgLayout = function ({
  props: e,
  parent: t,
  hasChildren: i
}) {
  let {
    style,
    wrapperStyle
  } = c({
    props: e,
    parent: t,
    hasChildren: i,
    ignoreRotation: !0
  });
  let a = void 0 === wrapperStyle ? style : wrapperStyle;
  a.overflow = "visible";
  ("0.00%" === a.height || "0.00px" === a.height) && (a.height = "1px");
  ("0.00%" === a.width || "0.00px" === a.width) && (a.width = "1px");
  return a;
};
exports.transformFromReactProps = g;