function i(e, t = 3) {
  if (void 0 === e) return;
  let n = 10 ** t;
  return Math.round(e * n) / n;
}
function n(e) {
  return 4 === e.length ? {
    r: i(parseInt(e.slice(1, 2), 16) / 15),
    g: i(parseInt(e.slice(2, 3), 16) / 15),
    b: i(parseInt(e.slice(3, 4), 16) / 15),
    a: 1
  } : 5 === e.length ? {
    r: i(parseInt(e.slice(1, 2), 16) / 15),
    g: i(parseInt(e.slice(2, 3), 16) / 15),
    b: i(parseInt(e.slice(3, 4), 16) / 15),
    a: i(parseInt(e.slice(4, 5), 16) / 15)
  } : 7 === e.length ? {
    r: i(parseInt(e.slice(1, 3), 16) / 255),
    g: i(parseInt(e.slice(3, 5), 16) / 255),
    b: i(parseInt(e.slice(5, 7), 16) / 255),
    a: 1
  } : {
    r: i(parseInt(e.slice(1, 3), 16) / 255),
    g: i(parseInt(e.slice(3, 5), 16) / 255),
    b: i(parseInt(e.slice(5, 7), 16) / 255),
    a: i(parseInt(e.slice(7, 9), 16) / 255)
  };
}
function r(e, t, i) {
  var r;
  var a;
  var s;
  var o;
  var l;
  let d = null !== (r = i?.x) && void 0 !== r ? r : 0;
  let c = null !== (a = i?.y) && void 0 !== a ? a : 4;
  let u = null !== (s = i?.blur) && void 0 !== s ? s : 4;
  let p = null !== (o = i?.spread) && void 0 !== o ? o : 0;
  let m = null !== (l = i?.blendMode) && void 0 !== l ? l : "normal";
  return {
    type: e,
    color: "string" == typeof t ? n(t) : "color" in t ? t.color : t,
    blendMode: m,
    offset: {
      x: d,
      y: c
    },
    blur: u,
    spread: p,
    visible: !0
  };
}
function a(e) {
  return (e - 90) * Math.PI / 180;
}
function s(e) {
  let t = "string" == typeof e.color ? n(e.color) : e.color;
  return {
    position: e.position,
    color: t
  };
}
exports.horizontalScale = exports.leftRight = exports.right = exports.left = exports.verticalScale = exports.topBottom = exports.bottom = exports.top = exports.center = exports.angularGradient = exports.radialGradient = exports.linearGradient = exports.innerShadow = exports.dropShadow = exports.layerBlur = exports.backgroundBlur = exports.image = exports.solid = exports.hexToRgb = exports.round = exports.WINDING_RULE_DEFAULT_VALUE = void 0;
exports.WINDING_RULE_DEFAULT_VALUE = "nonzero";
exports.round = i;
exports.hexToRgb = n;
exports.solid = function (e, t) {
  var r;
  return {
    type: "solid",
    color: "string" == typeof e ? n(e) : e,
    blendMode: "normal",
    opacity: null !== (r = i(t)) && void 0 !== r ? r : 1,
    visible: !0
  };
};
exports.image = function (e, t = "fill", i) {
  return {
    type: "image",
    scaleMode: t,
    imageTransform: [[1, 0, 0], [0, 1, 0]],
    scalingFactor: 1,
    rotation: 0,
    imageRef: e,
    src: e,
    blendMode: "normal",
    visible: !0,
    opacity: 1,
    imageSize: i
  };
};
exports.backgroundBlur = function (e) {
  return {
    type: "background-blur",
    blur: e,
    visible: !0
  };
};
exports.layerBlur = function (e) {
  return {
    type: "layer-blur",
    blur: e,
    visible: !0
  };
};
exports.dropShadow = function (e, t) {
  return r("drop-shadow", e, t);
};
exports.innerShadow = function (e, t) {
  return r("inner-shadow", e, t);
};
exports.linearGradient = function (e, t = "vertical") {
  let i = a("number" == typeof t ? t : "horizontal" === t ? 90 : 180);
  return {
    type: "gradient-linear",
    gradientHandlePositions: [{
      x: 0,
      y: 0
    }, {
      x: Math.cos(i),
      y: Math.sin(i)
    }, {
      x: 0,
      y: 0
    }],
    gradientStops: e.map((t, i) => s({
      position: i / (e.length - 1),
      color: t
    }))
  };
};
exports.radialGradient = function (e, t) {
  var i;
  var n;
  var r;
  let {
    x,
    y
  } = null !== (i = t?.center) && void 0 !== i ? i : {
    x: .5,
    y: .5
  };
  let l = null !== (n = t?.width) && void 0 !== n ? n : 1;
  return {
    type: "gradient-radial",
    gradientHandlePositions: [{
      x,
      y
    }, {
      x,
      y: y + (null !== (r = t?.height) && void 0 !== r ? r : 1)
    }, {
      x: x + l,
      y
    }],
    gradientStops: e.map((t, i) => s({
      position: i / (e.length - 1),
      color: t
    }))
  };
};
exports.angularGradient = function (e, t) {
  var i;
  var n;
  var r;
  var o;
  var l;
  let d = a(null !== (i = t?.angle) && void 0 !== i ? i : 180);
  let c = null !== (r = t?.center?.x) && void 0 !== r ? r : .5;
  let u = null !== (l = t?.center?.y) && void 0 !== l ? l : .5;
  let p = Math.cos(d) + c;
  let m = Math.sin(d) + u;
  return {
    type: "gradient-angular",
    gradientHandlePositions: [{
      x: c,
      y: u
    }, {
      x: p,
      y: m
    }, {
      x: 0,
      y: 0
    }],
    gradientStops: e.map((t, i) => s({
      position: i / (e.length - 1),
      color: t
    }))
  };
};
exports.center = function (e = 0) {
  return {
    type: "center",
    offset: e
  };
};
exports.top = function (e = 0) {
  return {
    type: "top",
    offset: e
  };
};
exports.bottom = function (e = 0) {
  return {
    type: "bottom",
    offset: e
  };
};
exports.topBottom = function (e = 0, t = 0) {
  return {
    type: "top-bottom",
    topOffset: e,
    bottomOffset: t
  };
};
exports.verticalScale = function (e = 0, t = 0) {
  return {
    type: "vertical-scale",
    topOffsetPercent: e,
    bottomOffsetPercent: t
  };
};
exports.left = function (e = 0) {
  return {
    type: "left",
    offset: e
  };
};
exports.right = function (e = 0) {
  return {
    type: "right",
    offset: e
  };
};
exports.leftRight = function (e = 0, t = 0) {
  return {
    type: "left-right",
    leftOffset: e,
    rightOffset: t
  };
};
exports.horizontalScale = function (e = 0, t = 0) {
  return {
    type: "horizontal-scale",
    leftOffsetPercent: e,
    rightOffsetPercent: t
  };
};