import { exists } from "../905/372580";
exports.getTextStyle = exports.parseLineHeight = exports.cssFromFontWeight = exports.getFill = exports.getEffectsStyle = exports.cssDropShadow = exports.cssBoxShadow = exports.cssFilterFromBlurEffectRadius = exports.concatFilter = exports.concatOptional = exports.cssBlendMode = exports.supportedBlendModesSet = exports.cssBackgroundFromPaint = exports.cssFillAngularGradient = exports.cssFillRadialGradient = exports.cssFillLinearGradient = exports.decimalToPercent = exports.cssVarToString = exports.colorToHex = exports.colorToString = exports.colorToRgba = void 0;
let r = e => ("00" + Math.round(255 * e).toString(16).toUpperCase()).substr(-2);
let a = e => Math.round(255 * e);
let s = e => e.toFixed(2);
exports.colorToRgba = ({
  r: e,
  g: t,
  b: i,
  a: n = 1
}, r = 1) => `rgba(${a(e)}, ${a(t)}, ${a(i)}, ${s(n * r)})`;
exports.colorToString = (e, i = 1) => 1 !== e.a || 1 !== i ? exports.colorToRgba(e, i) : exports.colorToHex(e);
let o = e => `${r(e.r)}${r(e.g)}${r(e.b)}`;
let l = (e, t = 1) => `${r(e.r)}${r(e.g)}${r(e.b)}${r(e.a * t)}`;
function d({
  value: e
}) {
  let t = e.replace("--", "");
  return `var(--${t}, var(--fallback-${t}))`;
}
function c(e, t) {
  t && console.warn(`Warning in color '${t}': ${e}`);
}
exports.colorToHex = (e, t = 1) => {
  if (1 === e.a && 1 === t) {
    let t = o(e);
    return t[0] === t[1] && t[2] === t[3] && t[4] === t[5] ? `#${t[0]}${t[2]}${t[4]}` : `#${t}`;
  }
  {
    let i = l(e, t);
    return i[0] === i[1] && i[2] === i[3] && i[4] === i[5] && i[6] === i[7] ? `#${i[0]}${i[2]}${i[4]}${i[6]}` : `#${i}`;
  }
};
exports.cssVarToString = d;
exports.decimalToPercent = (e, t = 0) => {
  let i = 100 * e;
  return t > 0 && i !== Math.round(i) ? `${i.toFixed(t)}%` : `${Math.round(i)}%`;
};
let u = e => Object.assign(Object.assign({}, e), {
  type: "gradient-linear",
  gradientHandlePositions: [{
    x: 0,
    y: 1
  }, {
    x: 0,
    y: 0
  }, {
    x: 0,
    y: 0
  }],
  gradientStops: [{
    color: e.color,
    position: 0
  }, {
    color: e.color,
    position: 1
  }]
});
exports.cssFillLinearGradient = (e, i) => {
  if (e.gradientHandlePositions.length < 2) {
    c("Linear gradients must have 2 handles", i);
    return;
  }
  let {
    gradientStops,
    gradientHandlePositions: [{
      x: r,
      y: a
    }, {
      x: s,
      y: o
    }],
    opacity
  } = e;
  let d = Math.atan2(s - r, a - o);
  let u = 180 / Math.PI * d + (d < 0 ? 360 : 0);
  let p = gradientStops.map(({
    color: e,
    position: i
  }) => `${exports.colorToString(e, opacity)} ${exports.decimalToPercent(i, 2)}`).join(", ");
  return `linear-gradient(${Math.round(u)}deg, ${p})`;
};
exports.cssFillRadialGradient = (e, i) => {
  if (e.gradientHandlePositions.length < 3) {
    c("Radial gradients must have 3 handles", i);
    return;
  }
  let {
    gradientStops,
    gradientHandlePositions: [{
      x: r,
      y: a
    }, {
      x: s,
      y: o
    }, {
      x: l,
      y: d
    }],
    opacity
  } = e;
  let p = gradientStops.map(({
    color: e,
    position: i
  }) => `${exports.colorToString(e, opacity)} ${exports.decimalToPercent(i, 2)}`).join(", ");
  let m = Math.sqrt((l - r) * (l - r) + (d - a) * (d - a));
  let h = Math.sqrt((s - r) * (s - r) + (o - a) * (o - a));
  return `radial-gradient(${exports.decimalToPercent(m, 2)} ${exports.decimalToPercent(h, 2)} at ${exports.decimalToPercent(r, 2)} ${exports.decimalToPercent(a, 2)}, ${p})`;
};
exports.cssFillAngularGradient = (e, i) => {
  if (e.gradientHandlePositions.length < 2) {
    c("Angular gradients must have 2 handles", i);
    return;
  }
  c("Angular gradients can only be approximated in CSS (scaling might be lost)", i);
  let {
    gradientStops,
    gradientHandlePositions: [{
      x: r,
      y: a
    }, {
      x: s,
      y: o
    }]
  } = e;
  let l = 180 * Math.atan2(o - a, s - r) / Math.PI + 90;
  let d = gradientStops.map(({
    color: e,
    position: i
  }) => `${exports.colorToString(e)} ${360 * i}deg`).join(", ");
  return `conic-gradient(from ${Math.round(l)}deg at ${exports.decimalToPercent(r, 2)} ${exports.decimalToPercent(a, 2)}, ${d})`;
};
let p = (e, i) => {
  c("Diamond gradients can only be approximated in CSS", i);
  let {
    gradientStops,
    opacity
  } = e;
  let a = gradientStops.map(({
    color: e,
    position: i
  }) => `${exports.colorToString(e, opacity)} ${exports.decimalToPercent(i / 2, 2)}`).join(", ");
  return ["bottom right", "bottom left", "top left", "top right"].map(e => `linear-gradient(to ${e}, ${a}) ${e} / 50% 50% no-repeat`).join(", ");
};
let m = (e, t, i) => {
  var n;
  var r;
  let a = {};
  switch (1 !== e.opacity && c("Image paint opacity not supported", i), a.background = `url("${e.src}")`, a.backgroundPosition = "50% 50%", a.backgroundRepeat = "no-repeat", a.backgroundSize = "auto", e.scaleMode) {
    case "fill":
      a.backgroundSize = "cover";
      break;
    case "fit":
      a.backgroundSize = "contain";
      break;
    case "tile":
      let s = e.imageSize;
      let o = null !== (n = e.scalingFactor) && void 0 !== n ? n : 1;
      let l = s ? `${s.width * o}px` : `${Math.round(100 * o)}%`;
      let d = s ? `${s.height * o}px` : `${Math.round(100 * o)}%`;
      a.backgroundSize = `${l} ${d}`;
      a.backgroundPosition = "0% 0%";
      a.backgroundRepeat = "repeat";
      break;
    case "crop":
      let u = null !== (r = e.imageTransform) && void 0 !== r ? r : [[1, 0, 0], [0, 1, 0]];
      let p = 100 / u[0][0];
      let m = 100 / u[1][1];
      a.backgroundSize = `${p.toFixed(2)}% ${m.toFixed(2)}%`;
      let h = t ? -(t.width / u[0][0]) * u[0][2] : 0;
      let g = t ? -(t.height / u[1][1]) * u[1][2] : 0;
      a.backgroundPosition = `${h.toFixed(2)}px ${g.toFixed(2)}px`;
      a.backgroundRepeat = "no-repeat";
  }
  e.rotation && c("Image paint rotation not supported", i);
  return `${a.background} ${a.backgroundPosition} / ${a.backgroundSize} ${a.backgroundRepeat}`;
};
function h(e, i, n, r) {
  let a = e.type;
  switch (e.type) {
    case "css-var":
      return d(e);
    case "solid":
      if (i) return exports.colorToString(e.color, e.opacity);
      return exports.cssFillLinearGradient(u(e), r);
    case "gradient-linear":
      return exports.cssFillLinearGradient(e, r);
    case "gradient-radial":
      return exports.cssFillRadialGradient(e, r);
    case "gradient-angular":
      return exports.cssFillAngularGradient(e, r);
    case "gradient-diamond":
      return p(e, r);
    case "image":
      return m(e, n, r);
    default:
      c(`Paint type ${a} not supported`, r);
      return;
  }
}
exports.cssBackgroundFromPaint = h;
let g = "normal";
function f(e, i) {
  if (exports.supportedBlendModesSet.has(e.blendMode)) return e.blendMode;
  c(`Blend mode ${e.blendMode} not supported`, i);
}
function _(e) {
  return `blur(${Math.sqrt(e)}px)`;
}
function A(e) {
  return "string" == typeof e ? e.startsWith("--") ? d({
    type: "css-var",
    value: e,
    visible: !0
  }) : e : exports.colorToString(e);
}
function y(e) {
  var t;
  let i = `${e.offset.x}px ${e.offset.y}px ${e.blur}px ${null !== (t = e.spread) && void 0 !== t ? t : 0}px ${A(e.color)}`;
  return "inner-shadow" === e.type ? `inset ${i}` : i;
}
function b(e) {
  return `${e.offset.x}px ${e.offset.y}px ${e.blur}px ${A(e.color)}`;
}
exports.supportedBlendModesSet = new Set(["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]);
exports.cssBlendMode = f;
exports.concatOptional = (e, t) => e ? `${e}, ${t}` : t;
exports.concatFilter = (e, t) => e ? `${e} ${t}` : t;
exports.cssFilterFromBlurEffectRadius = _;
exports.cssBoxShadow = y;
exports.cssDropShadow = b;
exports.getEffectsStyle = function (e, i = !0) {
  let n = {};
  e.filter(e => e.visible).forEach(e => {
    switch (e.type) {
      case "layer-blur":
        n.filter = exports.concatFilter(n.filter, _(e.blur));
        break;
      case "background-blur":
        n.backdropFilter = exports.concatFilter(n.backdropFilter, _(e.blur));
        break;
      case "drop-shadow":
        i ? n.boxShadow = exports.concatOptional(n.boxShadow, y(e)) : n.filter = exports.concatFilter(n.filter, `drop-shadow(${b(e)})`);
        break;
      case "inner-shadow":
        n.boxShadow = exports.concatOptional(n.boxShadow, y(e));
    }
  });
  return n;
};
exports.getFill = (e, i, r) => {
  let a = e.filter(({
    visible: e = !0
  }) => e).reverse();
  let s = {};
  let {
    blendMode = [],
    background
  } = a.reduce((e, n, a, s) => {
    var o;
    let l = h(n, a === s.length - 1, i, r);
    let d = "css-var" === n.type ? g : null !== (o = f(n, r)) && void 0 !== o ? o : g;
    return l ? {
      background: exports.concatOptional(e.background, l),
      blendMode: [...e.blendMode, d]
    } : e;
  }, {
    background: void 0,
    blendMode: []
  });
  blendMode.some(e => e !== g) && (s.backgroundBlendMode = blendMode.join(", "));
  exists(background) && (s.background = background);
  return s;
};
let v = [["thin", 100], ["extralight", 200], ["light", 300], ["normal", 400], ["medium", 500], ["semibold", 600], ["bold", 700], ["extrabold", 800], ["black", 900]];
function I({
  lineHeightUnit: e,
  lineHeightPx: t,
  lineHeightPercentFontSize: i
}) {
  switch (e) {
    case "pixels":
      return t + "px";
    case "font-size-%":
      return i + "%";
  }
}
function E(e) {
  if ("number" == typeof e) return e;
  switch (e) {
    case "thin":
      return 100;
    case "extra-light":
      return 200;
    case "light":
      return 300;
    case "normal":
      return 400;
    case "medium":
      return 500;
    case "semi-bold":
      return 600;
    case "bold":
      return 700;
    case "extra-bold":
      return 800;
    case "black":
      return 900;
  }
}
function x(e) {
  if ("string" == typeof e) {
    if ("auto" === e) return {
      lineHeightPercentFontSize: 100,
      lineHeightPx: 0,
      lineHeightUnit: "intrinsic-%"
    };
    let [, t, i] = Array.from(function* (e, t) {
      let i;
      let n = t.global ? t.flags : t.flags + "g";
      let r = new RegExp(t, n);
      for (; i = r.exec(e);) yield i;
    }(e, /(\d+\.?\d+)([px\%]+)/g))[0];
    if (!exists(t) || !exists(i)) throw Error(`Invalid lineHeight string: ${e}`);
    if ("%" === i) return {
      lineHeightPx: 0,
      lineHeightPercentFontSize: parseFloat(t),
      lineHeightUnit: "font-size-%"
    };
    if ("px" === i) return {
      lineHeightPx: parseInt(t),
      lineHeightPercentFontSize: 0,
      lineHeightUnit: "pixels"
    };
    throw Error(`Invalid lineHeight string: ${e}`);
  }
  return {
    lineHeightPercentFontSize: 0,
    lineHeightPx: e,
    lineHeightUnit: "pixels"
  };
}
exports.cssFromFontWeight = E;
exports.parseLineHeight = x;
exports.getTextStyle = function (e) {
  let t = {};
  if (!e) return {};
  e.fontFamily && (t.fontFamily = e.fontFamily);
  e.fontSize && (t.fontSize = e.fontSize + "px");
  let {
    fontPostScriptName
  } = e;
  let n = v.find(([e, t]) => fontPostScriptName?.toLowerCase().includes(e));
  if (n ? t.fontWeight = n[1] : e.fontWeight && (t.fontWeight = E(e.fontWeight)), e.italic && (t.fontStyle = "italic"), e.textDecoration && (t.textDecoration = function (e) {
    switch (e) {
      case "strikethrough":
        return "line-through";
      case "underline":
        return "underline";
    }
  }(e.textDecoration)), !e.textDecoration && e.href && (t.textDecoration = "underline"), e.textCase) {
    let i = function (e) {
      switch (e) {
        case "upper":
          return "uppercase";
        case "lower":
          return "lowercase";
        case "title":
          return "capitalize";
      }
    }(e.textCase);
    i && (t.textTransform = i);
    let n = function (e) {
      switch (e) {
        case "small-caps":
        case "small-caps-forced":
          return "small-caps";
      }
    }(e.textCase);
    n && (t.fontVariant = n);
  }
  if (e.letterSpacing && (t.letterSpacing = e.letterSpacing + "px"), e.lineHeightUnit) t.lineHeight = I(e);else if (e.lineHeight) {
    let i = x(e.lineHeight);
    t.lineHeight = I(i);
  }
  e.paragraphIndent && (t.textIndent = e.paragraphIndent + "px");
  return t;
};