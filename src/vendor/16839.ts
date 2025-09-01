import n from "../vendor/724039";
import o from "../vendor/131512";
import { encode } from "../vendor/999625";
import { createElement, cloneElement, Component } from "react";
import u from "../vendor/312623";
import c from "../vendor/739426";
import l from "../vendor/808828";
function i() {
  return (i = n || function (t) {
    for (var e = 1; e < $$arguments.length; e++) {
      var r = $$arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var f = function (t) {
  function e() {
    return t.apply(this, arguments) || this;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.shouldComponentUpdate = function (t) {
    var e = this.props.editorState;
    var r = t.editorState;
    if (e.getDirectionMap() !== r.getDirectionMap() || e.getSelection().getHasFocus() !== r.getSelection().getHasFocus()) return !0;
    var n = r.getNativelyRenderedContent();
    var i = e.isInCompositionMode();
    var o = r.isInCompositionMode();
    if (e === r || null !== n && r.getCurrentContent() === n || i && o) return !1;
    var a = e.getCurrentContent();
    var s = r.getCurrentContent();
    var u = e.getDecorator();
    var c = r.getDecorator();
    return i !== o || a !== s || u !== c || r.mustForceSelection();
  };
  r.render = function () {
    for (t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, f = t.customStyleMap, p = t.customStyleFn, h = t.editorState, d = t.editorKey, g = t.preventScroll, y = t.textDirectionality, v = h.getCurrentContent(), m = h.getSelection(), _ = h.mustForceSelection(), b = h.getDecorator(), S = l(h.getDirectionMap()), w = v.getBlocksAsArray(), x = [], k = null, C = null, E = 0, void 0; E < w.length; E++) {
      var t;
      var e;
      var r;
      var n;
      var f;
      var p;
      var h;
      var d;
      var g;
      var y;
      var v;
      var m;
      var _;
      var b;
      var S;
      var w;
      var x;
      var k;
      var C;
      var E;
      var O = w[E];
      var D = O.getKey();
      var K = O.getType();
      var T = r(O);
      var M = void 0;
      var A = void 0;
      var I = void 0;
      T && (M = T.component, A = T.props, I = T.editable);
      var B = y || S.get(D);
      var L = encode(D, 0, 0);
      var R = {
        contentState: v,
        block: O,
        blockProps: A,
        blockStyleFn: n,
        customStyleMap: f,
        customStyleFn: p,
        decorator: b,
        direction: B,
        forceSelection: _,
        offsetKey: L,
        preventScroll: g,
        selection: m,
        tree: h.getBlockTree(D)
      };
      var F = e.get(K) || e.get("unstyled");
      var N = F.wrapper;
      var P = F.element || e.get("unstyled").element;
      var z = O.getDepth();
      var j = "";
      n && (j = n(O));
      "li" === P && (j = c(j, u({
        "public/DraftStyleDefault/unorderedListItem": "unordered-list-item" === K,
        "public/DraftStyleDefault/orderedListItem": "ordered-list-item" === K,
        "public/DraftStyleDefault/reset": C !== N || null === k || z > k,
        "public/DraftStyleDefault/depth0": 0 === z,
        "public/DraftStyleDefault/depth1": 1 === z,
        "public/DraftStyleDefault/depth2": 2 === z,
        "public/DraftStyleDefault/depth3": 3 === z,
        "public/DraftStyleDefault/depth4": z >= 4,
        "public/DraftStyleDefault/listLTR": "LTR" === B,
        "public/DraftStyleDefault/listRTL": "RTL" === B
      })));
      var U = M || o;
      var q = {
        className: j,
        "data-block": !0,
        "data-editor": d,
        "data-offset-key": L,
        key: D
      };
      void 0 !== I && (q = function (t) {
        for (var e = 1; e < $$arguments.length; e++) {
          var r = null != $$arguments[e] ? $$arguments[e] : {};
          var n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
            return Object.getOwnPropertyDescriptor(r, t).enumerable;
          })));
          n.forEach(function (e) {
            var n;
            n = r[e];
            e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : t[e] = n;
          });
        }
        return t;
      }({}, q, {
        contentEditable: I,
        suppressContentEditableWarning: !0
      }));
      var H = createElement(P, q, createElement(U, i({}, R, {
        key: D
      })));
      x.push({
        block: H,
        wrapperTemplate: N,
        key: D,
        offsetKey: L
      });
      k = N ? O.getDepth() : null;
      C = N;
    }
    for (W = [], V = 0, void 0; V < x.length;) {
      var W;
      var V;
      var J = x[V];
      if (J.wrapperTemplate) {
        var G = [];
        do {
          G.push(x[V].block);
          V++;
        } while (V < x.length && x[V].wrapperTemplate === J.wrapperTemplate);
        var X = cloneElement(J.wrapperTemplate, {
          key: J.key + "-wrap",
          "data-offset-key": J.offsetKey
        }, G);
        W.push(X);
      } else {
        W.push(J.block);
        V++;
      }
    }
    return createElement("div", {
      "data-contents": "true"
    }, W);
  };
  return e;
}(Component);
module.exports = f;