import { imagePaintDefaults, paintDefaults, shadowEffectDefaults, blurEffectDefaults } from "../905/712000";
import { exists } from "../905/372580";
import { solid, WINDING_RULE_DEFAULT_VALUE, hexToRgb } from "../905/719694";
exports.normalizeEffect = exports.normalizePadding = exports.normalizeVerticalConstraint = exports.normalizeHorizontalConstraint = exports.normalizeSvgPath = exports.normalizePath = exports.normalizeFill = exports.normalizePaint = exports.normalizeProps = void 0;
function s(e) {
  return "image" === e.type ? Object.assign(Object.assign({}, imagePaintDefaults()), e) : Object.assign(Object.assign({}, paintDefaults()), e);
}
function o(e = []) {
  return "string" == typeof e ? e.startsWith("--") ? [{
    type: "css-var",
    value: e,
    visible: !0
  }] : [s(solid(e))] : Array.isArray(e) ? e.map(s) : "type" in e ? [s(e)] : [Object.assign(Object.assign({
    type: "solid"
  }, paintDefaults()), {
    color: e
  })];
}
function l(e) {
  return "string" == typeof e ? {
    path: e,
    windingRule: WINDING_RULE_DEFAULT_VALUE
  } : e;
}
function d(e = []) {
  return Array.isArray(e) ? e.map(l) : [l(e)];
}
function c(e) {
  return exists(e) ? "number" == typeof e ? {
    type: "left",
    offset: e
  } : e : {
    type: "left",
    offset: 0
  };
}
function u(e) {
  return exists(e) ? "number" == typeof e ? {
    type: "top",
    offset: e
  } : e : {
    type: "top",
    offset: 0
  };
}
function p(e) {
  var t;
  var i;
  var n;
  var a;
  var s;
  var o;
  var l;
  var d;
  return exists(e) && ("object" != typeof e || 0 !== Object.keys(e).length) ? "number" == typeof e ? {
    top: e,
    right: e,
    bottom: e,
    left: e
  } : "vertical" in e || "horizontal" in e ? {
    top: null !== (t = e.vertical) && void 0 !== t ? t : 0,
    bottom: null !== (i = e.vertical) && void 0 !== i ? i : 0,
    right: null !== (n = e.horizontal) && void 0 !== n ? n : 0,
    left: null !== (a = e.horizontal) && void 0 !== a ? a : 0
  } : {
    top: null !== (s = e.top) && void 0 !== s ? s : 0,
    right: null !== (o = e.right) && void 0 !== o ? o : 0,
    bottom: null !== (l = e.bottom) && void 0 !== l ? l : 0,
    left: null !== (d = e.left) && void 0 !== d ? d : 0
  } : {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function m(e = []) {
  return (Array.isArray(e) ? e : [e]).map(e => {
    if ("drop-shadow" === e.type || "inner-shadow" === e.type) {
      let t = e.color;
      return Object.assign(Object.assign(Object.assign({}, shadowEffectDefaults()), e), {
        color: "string" == typeof t ? hexToRgb(t) : t
      });
    }
    return Object.assign(Object.assign({}, blurEffectDefaults()), e);
  });
}
exports.normalizeProps = function (e) {
  let t = {};
  for (let i in e) switch (i) {
    case "fill":
      t.fill = o(e.fill);
      break;
    case "fillPath":
      t.fillPath = d(e.fillPath);
      break;
    case "strokePath":
      t.strokePath = d(e.strokePath);
      break;
    case "stroke":
      t.stroke = o(e.stroke);
      break;
    case "effect":
      t.effect = m(e.effect);
      break;
    case "padding":
      t.padding = p(e.padding);
      break;
    case "x":
      t.x = c(e.x);
      break;
    case "y":
      t.y = u(e.y);
      break;
    default:
      t[i] = e[i];
  }
  return t;
};
exports.normalizePaint = s;
exports.normalizeFill = o;
exports.normalizePath = l;
exports.normalizeSvgPath = d;
exports.normalizeHorizontalConstraint = c;
exports.normalizeVerticalConstraint = u;
exports.normalizePadding = p;
exports.normalizeEffect = m;