import n from "../vendor/724039";
import o from "../vendor/297748";
import { encode } from "../vendor/999625";
import { createElement, cloneElement, Component } from "react";
import u from "../vendor/808828";
function i() {
  return (i = n || function (t) {
    for (var e = 1; e < $$arguments.length; e++) {
      var r = $$arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var c = function (t) {
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
    for (t = this.props, e = t.blockRenderMap, r = t.blockRendererFn, n = t.blockStyleFn, c = t.customStyleMap, l = t.customStyleFn, f = t.editorState, p = t.editorKey, h = t.textDirectionality, d = f.getCurrentContent(), g = f.getSelection(), y = f.mustForceSelection(), v = f.getDecorator(), m = u(f.getDirectionMap()), _ = d.getBlocksAsArray()[0], b = [], S = _, void 0; S;) {
      var t;
      var e;
      var r;
      var n;
      var c;
      var l;
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
      var w = S.getKey();
      var x = {
        blockRenderMap: e,
        blockRendererFn: r,
        blockStyleFn: n,
        contentState: d,
        customStyleFn: l,
        customStyleMap: c,
        decorator: v,
        editorKey: p,
        editorState: f,
        forceSelection: y,
        selection: g,
        block: S,
        direction: h || m.get(w),
        tree: f.getBlockTree(w)
      };
      var k = (e.get(S.getType()) || e.get("unstyled")).wrapper;
      b.push({
        block: createElement(o, i({
          key: w
        }, x)),
        wrapperTemplate: k,
        key: w,
        offsetKey: encode(w, 0, 0)
      });
      var C = S.getNextSiblingKey();
      S = C ? d.getBlockForKey(C) : null;
    }
    for (E = [], O = 0, void 0; O < b.length;) {
      var E;
      var O;
      var D = b[O];
      if (D.wrapperTemplate) {
        var K = [];
        do {
          K.push(b[O].block);
          O++;
        } while (O < b.length && b[O].wrapperTemplate === D.wrapperTemplate);
        var T = cloneElement(D.wrapperTemplate, {
          key: D.key + "-wrap",
          "data-offset-key": D.offsetKey
        }, K);
        E.push(T);
      } else {
        E.push(D.block);
        O++;
      }
    }
    return createElement("div", {
      "data-contents": "true"
    }, E);
  };
  return e;
}(Component);
module.exports = c;