import { ServiceCategories as _$$e } from "../905/165054";
import r from "../vendor/781591";
import { $D } from "../905/11";
import { widgetErrorTracker } from "../905/250412";
import { c0 } from "../905/816730";
import { filterNotNullish } from "../figma_app/656233";
import { UU } from "../figma_app/397267";
import { cN } from "../905/409381";
import { z as _$$z } from "../905/239603";
import { BR, L3, Bb, L1, r8, QK, gJ, MQ, yL } from "../905/828428";
import { c8, ZW, _u, hH } from "../905/285398";
import { InternalError } from "../905/845428";
var a = r;
function d(e) {
  return (t, i, n, r) => {
    r.enableFullJsx && e(t, i, n, r);
  };
}
let c = d((e, t, i, n) => {
  e.props.componentId = i;
});
let u = d((e, t, i, n) => {
  e.props.componentProps = i;
});
let p = d((e, t, i, n) => {
  e.props.componentPropsNested = i;
});
let m = d((e, t, i, n) => {
  e.props.nestedInstancesVisibility = i;
});
let A = (e, t, i, n) => {
  n.enableFullJsx && (e.props.sharedPluginData = i);
};
let y = (e, t, i, n) => {
  n.enableFullJsx && (e.props.pluginData = i);
};
let b = (e, t, i, n) => {
  e.renderMetaData.width = i;
};
let v = (e, t, i, n) => {
  i?.type === "image" && (e.renderMetaData.fillSrc = i.src);
  let r = Array.isArray(i) ? i : [i];
  e.props.fills = U(r, "fill", n);
};
let I = (e, t, i, n) => {
  e.renderMetaData.key = String(t.key);
};
let E = (e, t, i, n) => {
  e.props.fontName = i;
};
let x = (e, t, i, n) => {
  let r = _$$z.union([_$$z.number(), _$$z.string()]).$$default(0).transform(V);
  e.props.letterSpacing = r.parse(i);
};
let S = (e, t, i, n) => {
  let r = _$$z.union([_$$z.number(), _$$z.string()]).$$default("auto").transform(V);
  e.props.lineHeight = r.parse(i);
};
let w = (e, t, i, n) => {
  let r = _$$z.string().$$default("none").transform(D);
  e.props.textDecoration = r.parse(i);
};
let C = (e, t, i, n) => {
  let r = _$$z.string().$$default("original").transform(D);
  e.props.textCase = r.parse(i);
};
let T = (e, t, i, n) => {
  let r = _$$z.number().$$default(16);
  e.props.fontSize = r.parse(i);
};
let k = (e, t, i, n) => {
  e.renderMetaData.children = i;
};
let R = (e, t, i, n) => {
  e.props.hyperlink = {
    type: "URL",
    value: t.href
  };
};
let N = (e, t, i, n) => {
  !0 === i || "number" == typeof i ? (e.props.textTruncation = "ENDING", e.props.maxLines = "number" == typeof i && i >= 1 ? Math.floor(i) : null) : e.props.textTruncation = "DISABLED";
};
function P(e, t, i, n) {
  "number" == typeof n ? e === t.direction ? i.props.itemSpacing = n : t.wrap && (i.props.counterAxisSpacing = n) : "auto" === n && (e === t.direction ? i.props.primaryAxisAlignItems = "SPACE_BETWEEN" : t.wrap && (i.props.counterAxisAlignContent = "SPACE_BETWEEN"));
}
let O = (e, t, i, n) => {
  e.renderMetaData.children = i;
};
function D(e) {
  return e.toUpperCase().replace(/-/g, "_");
}
function L(e) {
  let t = {};
  "number" == typeof e && (t.paddingLeft = e, t.paddingRight = e, t.paddingTop = e, t.paddingBottom = e);
  "object" == typeof e && (e.hasOwnProperty("vertical") && "number" == typeof e.vertical && (t.paddingTop = e.vertical, t.paddingBottom = e.vertical), e.hasOwnProperty("horizontal") && "number" == typeof e.horizontal && (t.paddingLeft = e.horizontal, t.paddingRight = e.horizontal), e.hasOwnProperty("top") && "number" == typeof e.top && (t.paddingTop = e.top), e.hasOwnProperty("left") && "number" == typeof e.left && (t.paddingLeft = e.left), e.hasOwnProperty("right") && "number" == typeof e.right && (t.paddingRight = e.right), e.hasOwnProperty("bottom") && "number" == typeof e.bottom && (t.paddingBottom = e.bottom));
  return t;
}
function F(e) {
  switch (e) {
    case "start":
      return "MIN";
    case "center":
      return "CENTER";
    case "end":
      return "MAX";
    case "baseline":
      return "BASELINE";
  }
}
function M(e) {
  if (e.length >= 7) {
    let t = 9 === e.length ? parseInt(e.slice(7, 9), 16) / 255 : 1;
    return {
      r: parseInt(e.slice(1, 3), 16) / 255,
      g: parseInt(e.slice(3, 5), 16) / 255,
      b: parseInt(e.slice(5, 7), 16) / 255,
      a: t
    };
  }
  let t = 5 === e.length ? parseInt(e.slice(4, 5), 16) / 15 : 1;
  return {
    r: parseInt(e.slice(1, 2), 16) / 15,
    g: parseInt(e.slice(2, 3), 16) / 15,
    b: parseInt(e.slice(3, 4), 16) / 15,
    a: t
  };
}
function j(e) {
  return "string" == typeof e ? M(e) : "object" != typeof e || e.hasOwnProperty("a") ? e : {
    ...e,
    a: 1
  };
}
function U(e, t, i) {
  return filterNotNullish(e.map(e => function (e, t, i) {
    if (!e) return null;
    if ("string" == typeof e) return function (e) {
      let {
        a,
        ...i
      } = M(e);
      return {
        type: "SOLID",
        color: i,
        blendMode: "NORMAL",
        opacity: a
      };
    }(e);
    if ("r" in e && "g" in e && "b" in e && "a" in e) {
      let t = e => {
        let t = e >= 0 && e <= 1;
        t || console.error(`Expected rgba value to be between 0 and 1 but got ${e}.`);
        return t;
      };
      let {
        r: _r,
        g,
        b,
        a
      } = e;
      if (!(t(_r) && t(g) && t(b) && t(a))) return null;
      let s = {
        ...e
      };
      let o = s.a;
      delete s.a;
      return {
        type: "SOLID",
        color: s,
        opacity: o
      };
    }
    let n = e.blendMode ? D(e.blendMode) : void 0;
    if ("solid" === e.type) {
      let t = "string" == typeof e.color ? M(e.color) : {
        ...e.color
      };
      let i = function (e, t) {
        let i = null != e.a ? e.a : void 0;
        let n = null != t.opacity ? t.opacity : void 0;
        return null != n && null != i ? n * i : n || i;
      }(t, e);
      delete t.a;
      return {
        type: "SOLID",
        color: t,
        blendMode: n,
        opacity: i
      };
    }
    return "image" === e.type ? {
      type: "IMAGE",
      scaleMode: e.scaleMode ? D(e.scaleMode) : "FILL",
      imageHash: e.imageHash || null,
      imageTransform: e.imageTransform,
      scalingFactor: e.scalingFactor,
      rotation: e.rotation,
      blendMode: n,
      opacity: e.opacity
    } : "gradient-linear" === e.type || "gradient-radial" === e.type || "gradient-angular" === e.type || "gradient-diamond" === e.type ? {
      type: D(e.type),
      blendMode: n,
      opacity: e.opacity ?? void 0,
      gradientStops: e.gradientStops,
      gradientTransform: cN(e.type, e.gradientHandlePositions)
    } : (B(t, e, i), null);
  }(e, t, i)));
}
function B(e, t, i) {
  let n = Error(`The following prop failed to match a valid value: ${e}={${JSON.stringify(t, null, 2)}}.`);
  if (i.isLocalWidget) throw n;
  widgetErrorTracker.trackInvalidPropError(n, i);
}
function V(e) {
  if ("number" == typeof e) return {
    unit: "PIXELS",
    value: e
  };
  if ("auto" === e) return {
    unit: "AUTO"
  };
  let t = parseFloat(e);
  return isNaN(t) ? void 0 : e.match(/.*%\w*/) ? {
    unit: "PERCENT",
    value: t
  } : e.match(/.*px\w*/) ? {
    unit: "PIXELS",
    value: t
  } : void 0;
}
let G = {
  name: "",
  hidden: !1,
  x: 0,
  y: 0,
  opacity: 1,
  effect: [],
  width: "hug-contents",
  height: "hug-contents",
  rotation: 0,
  flipVertical: !1,
  fontFamily: "Roboto",
  fontPostScriptName: "",
  horizontalAlignText: "left",
  verticalAlignText: "top",
  letterSpacing: 0,
  lineHeight: "auto",
  textDecoration: "none",
  textCase: "original",
  fontSize: 16,
  italic: !1,
  fill: {
    blendMode: "normal",
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    type: "solid"
  },
  blendMode: "pass-through",
  fontWeight: 400,
  paragraphIndent: 0,
  paragraphSpacing: 0
};
let z = {
  name: "",
  hidden: !1,
  x: 0,
  y: 0,
  opacity: 1,
  effect: [],
  height: "hug-contents",
  rotation: 0,
  flipVertical: !1,
  fontFamily: "Roboto",
  fontPostScriptName: "",
  horizontalAlignText: "left",
  verticalAlignText: "top",
  letterSpacing: 0,
  lineHeight: "auto",
  textDecoration: "none",
  textCase: "original",
  fontSize: 16,
  italic: !1,
  fill: {
    blendMode: "normal",
    color: {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    },
    type: "solid"
  },
  blendMode: "pass-through",
  fontWeight: 400,
  paragraphIndent: 0,
  paragraphSpacing: 0,
  multiline: !1
};
let H = {
  name: "",
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: "pass-through",
  opacity: 1,
  effect: [],
  fill: [],
  flipVertical: !1,
  stroke: [],
  strokeWidth: 1,
  strokeAlign: "inside",
  rotation: 0,
  cornerRadius: 0,
  overflow: "hidden"
};
let W = {
  name: "",
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: "pass-through",
  opacity: 1,
  effect: [],
  fill: [],
  stroke: [],
  strokeWidth: 1,
  strokeAlign: "inside",
  rotation: 0,
  flipVertical: !1,
  cornerRadius: 0,
  overflow: "hidden",
  width: "hug-contents",
  height: "hug-contents",
  direction: "horizontal",
  spacing: 0,
  padding: 0,
  horizontalAlignItems: "start",
  verticalAlignItems: "start"
};
let K = {
  name: "",
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: "pass-through",
  opacity: 1,
  effect: [],
  fill: [],
  stroke: [],
  strokeWidth: 1,
  strokeAlign: "inside",
  rotation: 0,
  flipVertical: !1,
  cornerRadius: 0
};
let Y = {
  name: "",
  hidden: !1,
  x: 0,
  y: 0,
  blendMode: "pass-through",
  opacity: 1,
  effect: [],
  fill: [],
  stroke: [],
  strokeWidth: 1,
  strokeAlign: "inside",
  rotation: 0,
  flipVertical: !1
};
let q = {
  name: "",
  hidden: !1,
  stroke: "#000000",
  strokeWidth: 1,
  blendMode: "pass-through",
  opacity: 1,
  fill: [],
  effect: [],
  length: 100,
  strokeCap: "none",
  x: 0,
  y: 0
};
function $(e) {
  if ("1.0.0" === e) return G;
}
function Q(e, t, i, r) {
  let a = [];
  try {
    a = c0(e, t, i);
  } catch (e) {
    $D(_$$e.EXTENSIBILITY, Error(`Error running widget prop validation: ${e}`));
  }
  if (a.length > 0) {
    if (r.isLocalWidget) {
      let e = "\n\n * ";
      throw `The following validation errors were surfaced:${e}${a.join(e)}`;
    }
    {
      let e = a.map(e => Error(e));
      widgetErrorTracker.trackValidationErrors(e, r);
    }
  }
}
function J({
  type: e,
  getDefaultPropsForVersion: t,
  propMappers: i,
  getSchemaForVersion: n
}) {
  return (r, a) => {
    let s = {
      type: e,
      props: {},
      renderMetaData: {}
    };
    let o = a.widgetApiVersion;
    let l = {
      ...t(o),
      ...r
    };
    for (let t in n && Q(l, n(o), e, a), l) for (let e of i) t in e && e[t](s, l, l[t], a);
    return s;
  };
}
let ee = {
  hidden: (e, t, i, n) => {
    e.props.visible = !i;
  },
  name: (e, t, i, n) => {
    e.props.name = String(i);
  },
  blendMode: (e, t, i, n) => {
    let r = _$$z.string().$$default("pass-through").transform(D);
    e.props.blendMode = r.parse(i);
  },
  opacity: (e, t, i, n) => {
    e.props.opacity = i;
  },
  effect: (e, t, i, n) => {
    e.props.effects = function e(t, i) {
      if (Array.isArray(t)) return Array.prototype.concat.apply([], t.map(t => e(t, i)));
      if (!t) return [];
      switch (t.type) {
        case "drop-shadow":
          return [{
            type: "DROP_SHADOW",
            color: j(t.color),
            offset: t.offset,
            visible: !0,
            radius: t.blur,
            spread: t.spread,
            showShadowBehindNode: t.showShadowBehindNode,
            blendMode: "NORMAL"
          }];
        case "inner-shadow":
          return [{
            type: "INNER_SHADOW",
            color: j(t.color),
            offset: t.offset,
            visible: !0,
            radius: t.blur,
            spread: t.spread,
            blendMode: "NORMAL"
          }];
        case "layer-blur":
          return [{
            blurType: "NORMAL",
            type: "LAYER_BLUR",
            visible: !0,
            radius: t.blur
          }];
        case "background-blur":
          return [{
            blurType: "NORMAL",
            type: "BACKGROUND_BLUR",
            visible: !0,
            radius: t.blur
          }];
        default:
          B("effects", t, i);
          return [];
      }
    }(i, n);
  },
  x: (e, t, i, n) => {
    "number" == typeof i ? e.renderMetaData.x = i : "object" == typeof i && (e.renderMetaData.constraints = e.renderMetaData.constraints ?? {}, e.renderMetaData.constraints.xConstraint = i);
  },
  y: (e, t, i, n) => {
    "number" == typeof i ? e.renderMetaData.y = i : "object" == typeof i && (e.renderMetaData.constraints = e.renderMetaData.constraints ?? {}, e.renderMetaData.constraints.yConstraint = i);
  },
  rotation: (e, t, i, n) => {
    e.props.rotation = i;
  },
  width: b,
  height: (e, t, i, n) => {
    e.renderMetaData.height = i;
  },
  onClick: (e, t, i, n) => {
    e.renderMetaData.onClick = i;
  },
  fill: v,
  stroke: (e, t, i, n) => {
    let r = Array.isArray(i) ? i : [i];
    e.props.strokes = U(r, "stroke", n);
  },
  strokeWidth: (e, t, i, n) => {
    e.props.strokeWeight = i;
  },
  strokeAlign: (e, t, i, n) => {
    e.props.strokeAlign = D(i);
  },
  strokeDashPattern: (e, t, i, n) => {
    e.props.dashPattern = i;
  },
  strokeCap: (e, t, i, n) => {
    e.props.strokeCap = D(i);
  },
  key: I,
  tooltip: (e, t, i, n) => {
    e.props.widgetTooltip = i;
  },
  hoverStyle: (e, t, i, n) => {
    let r = {};
    i?.fill && (r.fill = U(Array.isArray(i.fill) ? i.fill : [i.fill], "fill", n));
    i?.stroke && (r.stroke = U(Array.isArray(i.stroke) ? i.stroke : [i.stroke], "stroke", n));
    i?.opacity !== void 0 && (r.opacity = i.opacity);
    e.props.widgetHoverStyle = r;
  },
  positioning: (e, t, i, n) => {
    e.props.layoutPositioning = function (e) {
      switch (e) {
        case "auto":
          return "AUTO";
        case "absolute":
          return "ABSOLUTE";
      }
    }(i);
  },
  sharedPluginData: A,
  pluginData: y
};
let et = {
  minWidth: (e, t, i, n) => {
    e.props.minWidth = i;
  },
  minHeight: (e, t, i, n) => {
    e.props.minHeight = i;
  },
  maxWidth: (e, t, i, n) => {
    e.props.maxWidth = i;
  },
  maxHeight: (e, t, i, n) => {
    e.props.maxHeight = i;
  }
};
let ei = {
  cornerRadius: (e, t, i, n) => {
    "number" == typeof i ? e.props.cornerRadius = i : "object" == typeof i && ("number" == typeof i.bottomLeft && (e.props.bottomLeftRadius = i.bottomLeft), "number" == typeof i.topLeft && (e.props.topLeftRadius = i.topLeft), "number" == typeof i.bottomRight && (e.props.bottomRightRadius = i.bottomRight), "number" == typeof i.topRight && (e.props.topRightRadius = i.topRight));
  }
};
let en = {
  overflow: (e, t, i, n) => {
    e.props.clipsContent = "hidden" === i;
  },
  children: O
};
let er = {
  font: E,
  horizontalAlignText: (e, t, i, n) => {
    let r = _$$z.string().$$default("left").transform(D);
    e.props.textAlignHorizontal = r.parse(i);
  },
  verticalAlignText: (e, t, i, n) => {
    let r = _$$z.string().$$default("top").transform(D);
    e.props.textAlignVertical = r.parse(i);
  },
  letterSpacing: x,
  lineHeight: S,
  textDecoration: w,
  textCase: C,
  fontSize: T,
  paragraphIndent: (e, t, i, n) => {
    let r = _$$z.number().$$default(0);
    e.props.paragraphIndent = r.parse(i);
  },
  paragraphSpacing: (e, t, i, n) => {
    let r = _$$z.number().$$default(0);
    e.props.paragraphSpacing = r.parse(i);
  },
  children: k,
  href: R,
  truncate: N
};
let ea = J({
  type: "text",
  getDefaultPropsForVersion: $,
  getSchemaForVersion: BR,
  propMappers: [ee, er]
});
let es = J({
  type: "text",
  getDefaultPropsForVersion: $,
  getSchemaForVersion: BR,
  propMappers: [ee, et, er]
});
let eo = J({
  type: "input",
  getDefaultPropsForVersion: function (e) {
    if ("1.0.0" === e) return z;
  },
  getSchemaForVersion: L3,
  propMappers: [ee, er, {
    widgetInputBehavior: (e, t, i, n) => {
      e.props.widgetInputBehavior = i.toUpperCase();
    },
    truncate: N
  }]
});
let el = J({
  type: "frame",
  getDefaultPropsForVersion: function (e) {
    if ("1.0.0" === e) return H;
  },
  getSchemaForVersion: Bb,
  propMappers: [ee, et, en, ei]
});
let ed = J({
  type: "autolayout",
  getDefaultPropsForVersion: function (e) {
    if ("1.0.0" === e) return W;
  },
  getSchemaForVersion: L1,
  propMappers: [ee, et, en, ei, {
    direction: (e, t, i, n) => {
      e.props.layoutMode = "vertical" === i ? "VERTICAL" : "horizontal" === i ? "HORIZONTAL" : "NONE";
      e.renderMetaData.direction = i;
    },
    spacing: (e, t, i, n) => {
      "number" == typeof i ? (e.props.itemSpacing = i, t.wrap && (e.props.counterAxisSpacing = i)) : "auto" === i ? (e.props.primaryAxisAlignItems = "SPACE_BETWEEN", t.wrap && (e.props.counterAxisAlignContent = "SPACE_BETWEEN")) : UU(i) && ("horizontal" in i && P("horizontal", t, e, i.horizontal), "vertical" in i && P("vertical", t, e, i.vertical));
    },
    padding: (e, t, i, n) => {
      let r = L(i);
      for (let t in r) e.props[t] = r[t];
    },
    horizontalAlignItems: (e, t, i, n) => {
      let r = F(i);
      "horizontal" !== t.direction || "auto" === t.spacing || UU(t.spacing) && "horizontal" in t.spacing && "auto" === t.spacing.horizontal || (e.props.primaryAxisAlignItems = r);
      "vertical" === t.direction && (e.props.counterAxisAlignItems = r);
    },
    verticalAlignItems: (e, t, i, n) => {
      let r = F(i);
      "horizontal" === t.direction && (e.props.counterAxisAlignItems = r);
      "vertical" === t.direction && "auto" !== t.spacing && (e.props.primaryAxisAlignItems = r);
    },
    wrap: (e, t, i, n) => {
      e.props.layoutWrap = i ? "WRAP" : "NO_WRAP";
    }
  }]
});
let ec = J({
  type: "rectangle",
  getDefaultPropsForVersion: function (e) {
    if ("1.0.0" === e) return K;
  },
  getSchemaForVersion: r8,
  propMappers: [ee, et, ei]
});
let eu = J({
  type: "ellipse",
  getDefaultPropsForVersion: function (e) {
    if ("1.0.0" === e) return Y;
  },
  getSchemaForVersion: QK,
  propMappers: [ee, et, {
    arcData: (e, t, i, n) => {
      e.props.arcData = i;
    }
  }]
});
let ep = J({
  type: "line",
  getDefaultPropsForVersion: function (e) {
    if ("1.0.0" === e) return q;
  },
  getSchemaForVersion: gJ,
  propMappers: [a()(ee, ["width", "height"]), {
    length: b
  }]
});
let em = (e, t) => eh(e, t, ea);
function eh(e, t, i) {
  let n = i({
    ...e,
    font: c8(e)
  }, t);
  let r = ZW({
    vNode: n,
    options: t,
    Span: e_,
    fontProps: _u(e)
  });
  let {
    otherProps: {
      children,
      ...s
    }
  } = hH(n.props);
  let o = {
    ...n.renderMetaData,
    textStyle: r
  };
  delete o.children;
  return {
    ...n,
    props: s,
    renderMetaData: o
  };
}
let eg = J({
  type: "svg",
  getDefaultPropsForVersion: e => {},
  getSchemaForVersion: MQ,
  propMappers: [ee, {
    src: (e, t, i, n) => {
      e.renderMetaData.src = i;
    }
  }]
});
let ef = J({
  type: "fragment",
  getDefaultPropsForVersion: yL,
  propMappers: [{
    key: I,
    children: O
  }]
});
let e_ = J({
  type: "span",
  getDefaultPropsForVersion: () => ({}),
  propMappers: [{
    font: E,
    letterSpacing: x,
    lineHeight: S,
    textDecoration: w,
    textCase: C,
    fontSize: T,
    children: k,
    href: R,
    fill: v
  }]
});
let eA = J({
  type: "instance",
  getDefaultPropsForVersion: () => ({}),
  propMappers: [ee, {
    componentId: c,
    componentProps: u,
    componentPropsNested: p,
    nestedInstancesVisibility: m,
    sharedPluginData: A,
    pluginData: y
  }]
});
let $$eb0 = {
  Frame: el,
  AutoLayout: ed,
  Rectangle: ec,
  Ellipse: eu,
  Text: (e, t) => eh(e, t, es),
  SVG: eg,
  Image: (e, t) => ec({
    ...e,
    fill: {
      type: "image",
      src: e.src
    }
  }, t),
  Input: (e, t) => {
    Q(e, L3(t.widgetApiVersion), "input", t);
    let {
      placeholderProps,
      width = 200,
      value,
      onTextEditEnd,
      inputFrameProps,
      height = "hug-contents",
      inputBehavior = "wrap",
      x,
      y: _y,
      positioning,
      ...p
    } = e;
    let m = {
      ...inputFrameProps,
      x,
      y: _y,
      positioning,
      width: width ?? 200,
      height: height ?? "hug-contents"
    };
    let h = L(m.padding);
    let g = "number" == typeof width ? width - (h?.paddingLeft ?? 0) - (h?.paddingRight ?? 0) : "fill-parent";
    let f = "number" == typeof height ? height - (h?.paddingTop ?? 0) - (h?.paddingBottom ?? 0) : "hug-contents" === height || "fill-parent" === height ? height : "hug-contents";
    let {
      onClick,
      ...A
    } = e;
    let y = eh({
      ...A,
      widgetInputBehavior: inputBehavior,
      font: c8(e),
      children: value ?? "",
      width: g,
      height: f,
      truncate: "truncate" === inputBehavior,
      positioning: "auto"
    }, t, eo);
    let b = em({
      opacity: 0.3,
      ...p,
      ...placeholderProps,
      font: placeholderProps ? c8(placeholderProps) : c8(e),
      children: e.placeholder ?? "",
      hidden: !!e.value,
      width: "fill-parent",
      height: "fill-parent",
      x: h.paddingLeft ?? 0,
      y: h.paddingTop ?? 0,
      positioning: "absolute"
    }, t);
    let v = ed({
      ...m,
      onClick,
      children: [b, y]
    }, t);
    v.renderMetaData.onTextEditEnd = onTextEditEnd;
    v.type = "inputframe";
    return v;
  },
  Line: ep,
  Fragment: ef,
  Span: () => {
    throw new InternalError("Span is not valid outside of a Text component");
  }
};
let $$ev1 = {
  Instance: eA
};
function eI(e) {
  return "Frame" === e || "AutoLayout" === e || "Fragment" === e;
}
export function $$eE2(e, t) {
  return ex(e.type, t)({
    ...e.props,
    children: eI(e.type) ? function e(t, i) {
      if (null == t || !1 === t) return t;
      if (Array.isArray(t)) return t.map(t => e(t, i));
      let n = typeof t;
      if ("string" == typeof t || "number" == typeof t) throw new InternalError(`Invalid node child of type "${n}": ${JSON.stringify(t)}`);
      if (!eI(t.type)) {
        let e = ex(t.type, i);
        if (!e) throw new InternalError(`${t.type} is not a built in component`);
        return e({
          ...t.props,
          children: t.children
        }, i);
      }
      return ex(t.type, i)({
        ...t.props,
        children: e(t.children, i)
      }, i);
    }(e.children, t) : e.children
  }, t);
}
function ex(e, t) {
  let i = $$eb0[e];
  !i && t.enableFullJsx && (i = $$ev1[e]);
  return i;
}
export const HB = $$eb0;
export const cd = $$ev1;
export const P5 = $$eE2;