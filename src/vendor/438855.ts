import { setDraftEditorSelection } from "../vendor/938712";
import n from "../vendor/724039";
import i from "../vendor/151024";
import { createElement, Component } from "react";
import a from "../vendor/153658";
import s from "../vendor/848923";
var u = setDraftEditorSelection;
var c = function (t) {
  function e() {
    for (o = $$arguments.length, a = Array(o), s = 0, void 0; s < o; s++) {
      var e;
      var r;
      var n;
      var i;
      var o;
      var a;
      var s;
      a[s] = $$arguments[s];
    }
    r = function (t) {
      if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(e = t.call.apply(t, [this].concat(a)) || this);
    i = void 0;
    (n = "leaf") in r ? Object.defineProperty(r, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : r[n] = i;
    return e;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r._setSelection = function () {
    var t;
    var e = this.props.selection;
    if (null != e && e.getHasFocus()) {
      var r = this.props;
      var n = r.block;
      var i = r.start;
      var o = r.text;
      var c = n.getKey();
      var l = i + o.length;
      if (e.hasEdgeWithin(c, i, l)) {
        var f = this.leaf;
        f || a(!1);
        var p = f.firstChild;
        p || a(!1);
        p.nodeType === Node.TEXT_NODE ? t = p : s(p) ? t = f : (t = p.firstChild) || a(!1);
        u(e, t, c, i, l);
      }
    }
  };
  r.shouldComponentUpdate = function (t) {
    var e = this.leaf;
    e || a(!1);
    return e.textContent !== t.text || t.styleSet !== this.props.styleSet || t.forceSelection;
  };
  r.componentDidUpdate = function () {
    this._setSelection();
  };
  r.componentDidMount = function () {
    this._setSelection();
  };
  r.render = function () {
    var t = this;
    var e = this.props.block;
    var r = this.props.text;
    r.endsWith("\n") && this.props.isLast && (r += "\n");
    var a = this.props;
    var s = a.customStyleMap;
    var u = a.customStyleFn;
    var c = a.offsetKey;
    var l = a.styleSet;
    var f = l.reduce(function (t, e) {
      var r = {};
      var i = s[e];
      void 0 !== i && t.textDecoration !== i.textDecoration && (r.textDecoration = [t.textDecoration, i.textDecoration].join(" ").trim());
      return n(t, i, r);
    }, {});
    u && (f = n(f, u(l, e)));
    return createElement("span", {
      "data-offset-key": c,
      ref: function (e) {
        return t.leaf = e;
      },
      style: f
    }, createElement(i, null, r));
  };
  return e;
}(Component);
module.exports = c;