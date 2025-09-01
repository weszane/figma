var r = function (e) {
  return n(e) && !i(e);
};
function n(e) {
  return !!e && "object" == typeof e;
}
function i(e) {
  var r = Object.prototype.toString.call(e);
  return "[object RegExp]" === r || "[object Date]" === r || o(e);
}
var s = "function" == typeof Symbol && Symbol.$$for ? Symbol.$$for("react.element") : 60103;
function o(e) {
  return e.$$typeof === s;
}
function a(e) {
  return Array.isArray(e) ? [] : {};
}
function h(e, r) {
  return !1 !== r.clone && r.isMergeableObject(e) ? O(a(e), e, r) : e;
}
function d(e, r, n) {
  return e.concat(r).map(function (e) {
    return h(e, n);
  });
}
function p(e, r) {
  if (!r.customMerge) return O;
  var n = r.customMerge(e);
  return "function" == typeof n ? n : O;
}
function g(e) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function (r) {
    return Object.propertyIsEnumerable.call(e, r);
  }) : [];
}
function m(e) {
  return Object.keys(e).concat(g(e));
}
function v(e, r) {
  try {
    return r in e;
  } catch (e) {
    return !1;
  }
}
function y(e, r) {
  return v(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r));
}
function b(e, r, n) {
  var i = {};
  n.isMergeableObject(e) && m(e).forEach(function (r) {
    i[r] = h(e[r], n);
  });
  m(r).forEach(function (s) {
    y(e, s) || (v(e, s) && n.isMergeableObject(r[s]) ? i[s] = p(s, n)(e[s], r[s], n) : i[s] = h(r[s], n));
  });
  return i;
}
function O(e, n, i) {
  (i = i || {}).arrayMerge = i.arrayMerge || d;
  i.isMergeableObject = i.isMergeableObject || r;
  i.cloneUnlessOtherwiseSpecified = h;
  var s = Array.isArray(n);
  return s !== Array.isArray(e) ? h(n, i) : s ? i.arrayMerge(e, n, i) : b(e, n, i);
}
O.all = function (e, r) {
  if (!Array.isArray(e)) throw Error("first argument should be an array");
  return e.reduce(function (e, n) {
    return O(e, n, r);
  }, {});
};
var x = O;
module.exports = x;