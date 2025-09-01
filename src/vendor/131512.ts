import n from "../vendor/724039";
import o from "../vendor/438855";
import { encode } from "../vendor/999625";
import { createElement, Component } from "react";
import { setTop, getTop } from "../vendor/293805";
import { getScrollParent } from "../vendor/364627";
import { getDirection } from "../vendor/207799";
import { getHTMLDirIfDifferent } from "../vendor/414386";
import p from "../vendor/312623";
import h from "../vendor/370075";
import d from "../vendor/91812";
import g from "../vendor/327869";
import y from "../vendor/153658";
import v from "../vendor/952823";
import m from "../vendor/808828";
function i() {
  return (i = n || function (t) {
    for (var e = 1; e < $$arguments.length; e++) {
      var r = $$arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
var _ = function (t, e) {
  return t.getAnchorKey() === e || t.getFocusKey() === e;
};
var b = function (t) {
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
    (n = "_node") in r ? Object.defineProperty(r, n, {
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
  r.shouldComponentUpdate = function (t) {
    return this.props.block !== t.block || this.props.tree !== t.tree || this.props.direction !== t.direction || _(t.selection, t.block.getKey()) && t.forceSelection;
  };
  r.componentDidMount = function () {
    if (!this.props.preventScroll) {
      var t;
      var e = this.props.selection;
      var r = e.getEndKey();
      if (e.getHasFocus() && r === this.props.block.getKey()) {
        var n = this._node;
        if (null != n) {
          var i = getScrollParent(n);
          var o = d(i);
          if (i === window) {
            var a = h(n);
            (t = a.y + a.height - g().height) > 0 && window.scrollTo(o.x, o.y + t + 10);
          } else {
            v(n) || y(!1);
            (t = n.offsetHeight + n.offsetTop - (i.offsetTop + i.offsetHeight + o.y)) > 0 && setTop(i, getTop(i) + t + 10);
          }
        }
      }
    }
  };
  r._renderChildren = function () {
    var t = this;
    var e = this.props.block;
    var r = e.getKey();
    var n = e.getText();
    var u = this.props.tree.size - 1;
    var c = _(this.props.selection, r);
    return this.props.tree.map(function (p, h) {
      var d = p.get("leaves");
      if (0 === d.size) return null;
      var g = d.size - 1;
      var y = d.map(function (i, l) {
        var f = encode(r, h, l);
        var p = i.get("start");
        var d = i.get("end");
        return createElement(o, {
          key: f,
          offsetKey: f,
          block: e,
          start: p,
          selection: c ? t.props.selection : null,
          forceSelection: t.props.forceSelection,
          text: n.slice(p, d),
          styleSet: e.getInlineStyleAt(p),
          customStyleMap: t.props.customStyleMap,
          customStyleFn: t.props.customStyleFn,
          isLast: h === u && l === g
        });
      }).toArray();
      var v = p.get("decoratorKey");
      if (null == v || !t.props.decorator) return y;
      var _ = m(t.props.decorator);
      var b = _.getComponentForKey(v);
      if (!b) return y;
      var S = _.getPropsForKey(v);
      var w = encode(r, h, 0);
      var x = d.first().get("start");
      var k = d.last().get("end");
      var C = n.slice(x, k);
      var E = e.getEntityAt(p.get("start"));
      var O = getHTMLDirIfDifferent(getDirection(C), t.props.direction);
      var D = {
        contentState: t.props.contentState,
        decoratedText: C,
        dir: O,
        start: x,
        end: k,
        blockKey: r,
        entityKey: E,
        offsetKey: w
      };
      return createElement(b, i({}, S, D, {
        key: w
      }), y);
    }).toArray();
  };
  r.render = function () {
    var t = this;
    var e = this.props;
    var r = e.direction;
    var n = e.offsetKey;
    var i = p({
      "public/DraftStyleDefault/block": !0,
      "public/DraftStyleDefault/ltr": "LTR" === r,
      "public/DraftStyleDefault/rtl": "RTL" === r
    });
    return createElement("div", {
      "data-offset-key": n,
      className: i,
      ref: function (e) {
        return t._node = e;
      }
    }, this._renderChildren());
  };
  return e;
}(Component);
module.exports = b;