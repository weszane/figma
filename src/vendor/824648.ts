import n from "../vendor/724039";
import { encode } from "../vendor/999625";
import { createElement, Component } from "react";
import { getDirection } from "../vendor/207799";
import { getHTMLDirIfDifferent } from "../vendor/414386";
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
  e.prototype.render = function () {
    var t = this.props;
    var e = t.block;
    var r = t.children;
    var n = t.contentState;
    var c = t.decorator;
    var l = t.decoratorKey;
    var f = t.direction;
    var p = t.leafSet;
    var h = t.text;
    var d = e.getKey();
    var g = p.get("leaves");
    var y = c.getComponentForKey(l);
    var v = c.getPropsForKey(l);
    var m = encode(d, parseInt(l, 10), 0);
    var _ = h.slice(g.first().get("start"), g.last().get("end"));
    var b = getHTMLDirIfDifferent(getDirection(_), f);
    return createElement(y, i({}, v, {
      contentState: n,
      decoratedText: _,
      dir: b,
      key: m,
      entityKey: e.getEntityAt(p.get("start")),
      offsetKey: m
    }), r);
  };
  return e;
}(Component);
module.exports = c;