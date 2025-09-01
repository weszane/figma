exports.getDefaultSpanProps = exports.getDefaultTextProps = exports.getDefaultSvgProps = exports.getDefaultRectangleProps = exports.getDefaultLineProps = exports.getDefaultEllipseProps = exports.getDefaultAutoLayoutProps = exports.getDefaultFrameProps = exports.blurEffectDefaults = exports.shadowEffectDefaults = exports.imagePaintDefaults = exports.paintDefaults = exports.textStyleDefaults = exports.autoLayoutDefaults = exports.transformDefaults = exports.autoLayoutSizeDefaults = exports.sizeDefaults = exports.cornerDefaults = exports.pathDefaults = exports.geometryDefaults = exports.baseDefaults = void 0;
let i = {
  type: "solid",
  color: {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  },
  blendMode: "normal"
};
function n() {
  return Object.assign(Object.assign({
    name: "",
    hidden: !1,
    positioning: "auto"
  }, {
    x: 0,
    y: 0
  }), {
    blendMode: "normal",
    opacity: 1,
    effect: []
  });
}
function r() {
  return {
    fill: [],
    stroke: [],
    strokeWidth: 1,
    strokeAlign: "inside"
  };
}
function a() {
  return {
    fillPath: [],
    strokePath: []
  };
}
function s() {
  return {
    cornerRadius: 0
  };
}
function o() {
  return {
    width: 0,
    height: 0
  };
}
function l() {
  return {
    width: "hug-contents",
    height: "hug-contents"
  };
}
function d() {
  return {
    rotation: 0,
    flipVertical: !1
  };
}
function c() {
  return {
    direction: "horizontal",
    spacing: 0,
    padding: 0,
    horizontalAlignItems: "start",
    verticalAlignItems: "start"
  };
}
function u(e = !1) {
  return {
    fontFamily: "Roboto",
    letterSpacing: 0,
    textDecoration: "none",
    fontSize: 16,
    italic: !1,
    textCase: "original",
    fontWeight: 400,
    fontPostScriptName: "",
    fill: e ? [] : i
  };
}
function p() {
  return {
    visible: !0,
    opacity: 1,
    blendMode: "normal"
  };
}
function m() {
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n()), r()), d()), s()), {
    overflow: "hidden"
  });
}
exports.baseDefaults = n;
exports.geometryDefaults = r;
exports.pathDefaults = a;
exports.cornerDefaults = s;
exports.sizeDefaults = o;
exports.autoLayoutSizeDefaults = l;
exports.transformDefaults = d;
exports.autoLayoutDefaults = c;
exports.textStyleDefaults = u;
exports.paintDefaults = p;
exports.imagePaintDefaults = function () {
  return Object.assign(Object.assign({}, p()), {
    scaleMode: "fill",
    imageTransform: [[1, 0, 0], [0, 1, 0]],
    scalingFactor: 1,
    rotation: 0
  });
};
exports.shadowEffectDefaults = function () {
  return {
    blendMode: "normal",
    spread: 0,
    visible: !0
  };
};
exports.blurEffectDefaults = function () {
  return {
    visible: !0
  };
};
exports.getDefaultFrameProps = m;
exports.getDefaultAutoLayoutProps = function () {
  return Object.assign(Object.assign(Object.assign({}, m()), l()), c());
};
exports.getDefaultEllipseProps = function () {
  return Object.assign(Object.assign(Object.assign({}, n()), r()), d());
};
exports.getDefaultLineProps = function () {
  return Object.assign(Object.assign(Object.assign({}, n()), r()), {
    flipVertical: !1,
    strokeWidth: 1,
    direction: "horizontal"
  });
};
exports.getDefaultRectangleProps = function () {
  return Object.assign(Object.assign(Object.assign(Object.assign({}, n()), r()), d()), s());
};
exports.getDefaultSvgProps = function () {
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n()), r()), o()), d()), a());
};
exports.getDefaultTextProps = function () {
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n()), l()), d()), u(!1)), {
    paragraphSpacing: 0,
    paragraphIndent: 0,
    horizontalAlignText: "left",
    verticalAlignText: "top",
    lineHeight: "auto"
  });
};
exports.getDefaultSpanProps = function () {
  return Object.assign(Object.assign(Object.assign(Object.assign({}, n()), l()), d()), u(!0));
};