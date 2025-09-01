import { round } from "../905/719694";
exports.applyMatrixToPoint = exports.roundBoundingBox = exports.roundTransform = exports.isRotated = exports.getRelativeBoundsAndRotation = exports.skipPosition = exports.rotatePoint = exports.multiply = exports.getCenteredRotation = exports.flipVertical = exports.isFlippedVertical = exports.getAngleDeg = exports.getAngle = void 0;
function r(e) {
  let t = e[0][0];
  return Math.atan2(e[0][1], t);
}
function a(e, t) {
  let [[i, n, r], [a, s, o]] = e;
  let [[l, d, c], [u, p, m]] = t;
  return [[i * l + n * u, i * d + n * p, i * c + n * m + r], [a * l + s * u, a * d + s * p, a * c + s * m + o]];
}
function s(e, t) {
  let [[i, n, r], [a, s, o]] = e;
  let [l, d] = t;
  return [i * l + n * d + r, a * l + s * d + o];
}
function o(e) {
  let [[t, i], [n, r]] = e;
  return [[t, i, 0], [n, r, 0]];
}
exports.getAngle = r;
exports.getAngleDeg = function (e) {
  return r(e) * (180 / Math.PI);
};
exports.isFlippedVertical = function (e) {
  let [[t, i], [n, r]] = e;
  return t * r - i * n < 0;
};
exports.flipVertical = function (e) {
  return a([[1, 0, 0], [0, -1, 0]], e);
};
exports.getCenteredRotation = function (e, t, i) {
  let n = e * Math.PI / 180;
  return a([[1, 0, t / 2], [0, 1, i / 2]], a([[Math.cos(n), Math.sin(n), 0], [-Math.sin(n), Math.cos(n), 0]], [[1, 0, -t / 2], [0, 1, -i / 2]]));
};
exports.multiply = a;
exports.rotatePoint = s;
exports.skipPosition = o;
exports.getRelativeBoundsAndRotation = function (e) {
  let {
    width,
    height
  } = e;
  let n = a([[1, 0, width / 2], [0, 1, height / 2]], a(o(e.relativeTransform), [[1, 0, -width / 2], [0, 1, -height / 2]]));
  let [r, l] = s(n, [0, 0]);
  let [d, c] = s(n, [0, height]);
  let [u, p] = s(n, [width, 0]);
  let [m, h] = s(n, [width, height]);
  let g = Math.min(r, d, u, m);
  let f = Math.min(l, c, p, h);
  let _ = Math.max(r, d, u, m) - g;
  let A = Math.max(l, c, p, h) - f;
  let y = a([[1, 0, (_ - width) / 2], [0, 1, (A - height) / 2]], n);
  let [[,, b], [,, v]] = y;
  return {
    relativeBoundingBox: {
      x: e.relativeTransform[0][2] - b,
      y: e.relativeTransform[1][2] - v,
      width: _,
      height: A
    },
    rotationOnlyTransform: y,
    relativeTransform: e.relativeTransform
  };
};
exports.isRotated = function (e) {
  if (!e.relativeTransform) return !1;
  let t = e.relativeTransform[0][0];
  let i = e.relativeTransform[0][1];
  let n = e.relativeTransform[1][0];
  let r = e.relativeTransform[1][1];
  return !(t - 1 < 1e-5 && i - 0 < 1e-5 && n - 0 < 1e-5 && r - 1 < 1e-5);
};
exports.roundTransform = function (e) {
  return [[round(e[0][0], 5), round(e[0][1], 5), round(e[0][2], 5)], [round(e[1][0], 5), round(e[1][1], 5), round(e[1][2], 5)]];
};
exports.roundBoundingBox = function (e) {
  return {
    x: round(e.x),
    y: round(e.y),
    width: round(e.width),
    height: round(e.height)
  };
};
exports.applyMatrixToPoint = function (e, t) {
  return [t[0] * e[0][0] + t[1] * e[0][1] + e[0][2], t[0] * e[1][0] + t[1] * e[1][1] + e[1][2]];
};