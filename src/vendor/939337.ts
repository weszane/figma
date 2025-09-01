var r;
r = function () {
  "use strict";

  var e = "function" == typeof Promise;
  var t = "object" == typeof self ? self : require.g;
  var r = "undefined" != typeof Symbol;
  var i = "undefined" != typeof Map;
  var A = "undefined" != typeof Set;
  var o = "undefined" != typeof WeakMap;
  var s = "undefined" != typeof WeakSet;
  var a = "undefined" != typeof DataView;
  var l = r && void 0 !== Symbol.iterator;
  var u = r && void 0 !== Symbol.toStringTag;
  var g = A && "function" == typeof Set.prototype.entries;
  var c = i && "function" == typeof Map.prototype.entries;
  var f = g && Object.getPrototypeOf(new Set().entries());
  var d = c && Object.getPrototypeOf(new Map().entries());
  var h = l && "function" == typeof Array.prototype[Symbol.iterator];
  var p = h && Object.getPrototypeOf([][Symbol.iterator]());
  var C = l && "function" == typeof String.prototype[Symbol.iterator];
  var I = C && Object.getPrototypeOf(""[Symbol.iterator]());
  return function (n) {
    var r = typeof n;
    if ("object" !== r) return r;
    if (null === n) return "null";
    if (n === t) return "global";
    if (Array.isArray(n) && (!1 === u || !(Symbol.toStringTag in n))) return "Array";
    if ("object" == typeof window && null !== window) {
      if ("object" == typeof window.location && n === window.location) return "Location";
      if ("object" == typeof window.document && n === window.document) return "Document";
      if ("object" == typeof window.navigator) {
        if ("object" == typeof window.navigator.mimeTypes && n === window.navigator.mimeTypes) return "MimeTypeArray";
        if ("object" == typeof window.navigator.plugins && n === window.navigator.plugins) return "PluginArray";
      }
      if (("function" == typeof window.HTMLElement || "object" == typeof window.HTMLElement) && n instanceof window.HTMLElement) {
        if ("BLOCKQUOTE" === n.tagName) return "HTMLQuoteElement";
        if ("TD" === n.tagName) return "HTMLTableDataCellElement";
        if ("TH" === n.tagName) return "HTMLTableHeaderCellElement";
      }
    }
    var l = u && n[Symbol.toStringTag];
    if ("string" == typeof l) return l;
    var g = Object.getPrototypeOf(n);
    return g === RegExp.prototype ? "RegExp" : g === Date.prototype ? "Date" : e && g === Promise.prototype ? "Promise" : A && g === Set.prototype ? "Set" : i && g === Map.prototype ? "Map" : s && g === WeakSet.prototype ? "WeakSet" : o && g === WeakMap.prototype ? "WeakMap" : a && g === DataView.prototype ? "DataView" : i && g === d ? "Map Iterator" : A && g === f ? "Set Iterator" : h && g === p ? "Array Iterator" : C && g === I ? "String Iterator" : null === g ? "Object" : Object.prototype.toString.call(n).slice(8, -1);
  };
};
module.exports = r();