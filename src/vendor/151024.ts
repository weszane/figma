import { createElement, Component } from "react";
import { isBrowser } from "../vendor/42266";
import s from "../vendor/153658";
import u from "../vendor/35020";
function n(t) {
  if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function i(t, e, r) {
  e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r;
  return t;
}
var c = isBrowser("IE <= 11");
var l = function (t) {
  function e(e) {
    var r;
    i(n(r = t.call(this, e) || this), "_forceFlag", void 0);
    i(n(r), "_node", void 0);
    r._forceFlag = !1;
    return r;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.shouldComponentUpdate = function (t) {
    var e = this._node;
    var r = "" === t.children;
    return (u(e) || s(!1), r) ? c ? "\n" !== e.textContent : "BR" !== e.tagName : e.textContent !== t.children;
  };
  r.componentDidMount = function () {
    this._forceFlag = !this._forceFlag;
  };
  r.componentDidUpdate = function () {
    this._forceFlag = !this._forceFlag;
  };
  r.render = function () {
    var t;
    var e;
    var r = this;
    return "" === this.props.children ? this._forceFlag ? (t = function (t) {
      return r._node = t;
    }, c ? createElement("span", {
      key: "A",
      "data-text": "true",
      ref: t
    }, "\n") : createElement("br", {
      key: "A",
      "data-text": "true",
      ref: t
    })) : (e = function (t) {
      return r._node = t;
    }, c ? createElement("span", {
      key: "B",
      "data-text": "true",
      ref: e
    }, "\n") : createElement("br", {
      key: "B",
      "data-text": "true",
      ref: e
    })) : createElement("span", {
      key: this._forceFlag ? "A" : "B",
      "data-text": "true",
      ref: function (t) {
        return r._node = t;
      }
    }, this.props.children);
  };
  return e;
}(Component);
module.exports = l;