import n from "../vendor/824648";
import i from "../vendor/438855";
import { encode } from "../vendor/999625";
import { List } from "../vendor/116740";
import { createElement, Component } from "react";
import u from "../vendor/312623";
List;
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
    var r = t.contentState;
    var a = t.customStyleFn;
    var c = t.customStyleMap;
    var l = t.decorator;
    var f = t.direction;
    var p = t.forceSelection;
    var h = t.hasSelection;
    var d = t.selection;
    var g = t.tree;
    var y = e.getKey();
    var v = e.getText();
    var m = g.size - 1;
    var _ = this.props.children || g.map(function (t, u) {
      var g = t.get("decoratorKey");
      var _ = t.get("leaves");
      var b = _.size - 1;
      var S = _.map(function (t, r) {
        var n = encode(y, u, r);
        var l = t.get("start");
        var f = t.get("end");
        return createElement(i, {
          key: n,
          offsetKey: n,
          block: e,
          start: l,
          selection: h ? d : null,
          forceSelection: p,
          text: v.slice(l, f),
          styleSet: e.getInlineStyleAt(l),
          customStyleMap: c,
          customStyleFn: a,
          isLast: g === m && r === b
        });
      }).toArray();
      return g && l ? createElement(n, {
        block: e,
        children: S,
        contentState: r,
        decorator: l,
        decoratorKey: g,
        direction: f,
        leafSet: t,
        text: v,
        key: u
      }) : S;
    }).toArray();
    return createElement("div", {
      "data-offset-key": encode(y, 0, 0),
      className: u({
        "public/DraftStyleDefault/block": !0,
        "public/DraftStyleDefault/ltr": "LTR" === f,
        "public/DraftStyleDefault/rtl": "RTL" === f
      })
    }, _);
  };
  return e;
}(Component);
module.exports = c;