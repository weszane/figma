exports.cssTransformFromNodeTransform = exports.mergeProps = exports.htmlColorFromFigColor = void 0;
exports.htmlColorFromFigColor = function (e) {
  let {
    r: _r,
    g,
    b,
    a
  } = e;
  return `rgba(${255 * _r}, ${255 * g}, ${255 * b}, ${a})`;
};
exports.mergeProps = function e(...t) {
  let i = {};
  for (let n of t) {
    for (let t in i) {
      let r = i[t];
      let a = n[t];
      ("attributes" === t || "style" === t) && "object" == typeof a ? i[t] = e(r, a) : "className" === t && "string" == typeof r && "string" == typeof a ? i[t] = [r, a].join(" ") : void 0 !== a && (i[t] = a);
    }
    for (let e in n) void 0 === i[e] && (i[e] = n[e]);
  }
  return i;
};
exports.cssTransformFromNodeTransform = function (e) {
  if (void 0 === e) return;
  let [[t, i, n], [r, a, s]] = e;
  if (1 !== t || 0 !== r || 0 !== i || 1 !== a || 0 !== n || 0 !== s) return `matrix(${t},${r},${i},${a},${n},${s})`;
};