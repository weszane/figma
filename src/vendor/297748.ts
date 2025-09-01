import n from "../vendor/724039";
import s from "../vendor/642487";
import { encode } from "../vendor/999625";
import { cloneElement, createRef, createElement, Component } from "react";
import { setTop, getTop } from "../vendor/293805";
import { getScrollParent } from "../vendor/364627";
import p from "../vendor/370075";
import h from "../vendor/91812";
import d from "../vendor/327869";
import { List } from "../vendor/116740";
import y from "../vendor/153658";
import v from "../vendor/952823";
function i() {
  return (i = n || function (t) {
    for (var e = 1; e < $$arguments.length; e++) {
      var r = $$arguments[e];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
    }
    return t;
  }).apply(this, arguments);
}
function o(t) {
  for (var e = 1; e < $$arguments.length; e++) {
    var r = null != $$arguments[e] ? $$arguments[e] : {};
    var n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
      return Object.getOwnPropertyDescriptor(r, t).enumerable;
    })));
    n.forEach(function (e) {
      a(t, e, r[e]);
    });
  }
  return t;
}
function a(t, e, r) {
  e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r;
  return t;
}
List;
var m = function (t, e) {
  return t.getAnchorKey() === e || t.getFocusKey() === e;
};
var _ = function (t, e) {
  var r = t.getNextSiblingKey();
  return !!r && e.getBlockForKey(r).getType() === t.getType();
};
var b = function (t, e, r) {
  var n = [];
  var i = !0;
  var o = !1;
  var a = void 0;
  try {
    for (l = r.reverse()[Symbol.iterator](), void 0; !(i = (s = l.next()).done); i = !0) {
      var s;
      var l;
      var f = s.value;
      if (f.type !== e) break;
      n.push(f);
    }
  } catch (t) {
    o = !0;
    a = t;
  } finally {
    try {
      i || null == l.$$return || l.$$return();
    } finally {
      if (o) throw a;
    }
  }
  r.splice(r.indexOf(n[0]), n.length + 1);
  var p = n.reverse();
  var h = p[0].key;
  r.push(cloneElement(t, {
    key: "".concat(h, "-wrap"),
    "data-offset-key": encode(h, 0, 0)
  }, p));
  return r;
};
var S = function (t, e) {
  var r = e.get(t.getType()) || e.get("unstyled");
  var n = r.wrapper;
  return {
    Element: r.element || e.get("unstyled").element,
    wrapperTemplate: n
  };
};
var w = function (t, e) {
  var r = e(t);
  return r ? {
    CustomComponent: r.component,
    customProps: r.props,
    customEditable: r.editable
  } : {};
};
var x = function (t, e, r, n, i, a) {
  var s = {
    "data-block": !0,
    "data-editor": e,
    "data-offset-key": r,
    key: t.getKey(),
    ref: a
  };
  var u = n(t);
  u && (s.className = u);
  void 0 !== i.customEditable && (s = o({}, s, {
    contentEditable: i.customEditable,
    suppressContentEditableWarning: !0
  }));
  return s;
};
var k = function (t) {
  function e() {
    for (r = $$arguments.length, n = Array(r), i = 0, void 0; i < r; i++) {
      var e;
      var r;
      var n;
      var i;
      n[i] = $$arguments[i];
    }
    a(function (t) {
      if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t;
    }(e = t.call.apply(t, [this].concat(n)) || this), "wrapperRef", createRef());
    return e;
  }
  e.prototype = Object.create(t.prototype);
  e.prototype.constructor = e;
  e.__proto__ = t;
  var r = e.prototype;
  r.shouldComponentUpdate = function (t) {
    var e = this.props;
    var r = e.block;
    var n = e.direction;
    var i = e.tree;
    var o = !r.getChildKeys().isEmpty();
    var a = r !== t.block || i !== t.tree || n !== t.direction || m(t.selection, t.block.getKey()) && t.forceSelection;
    return o || a;
  };
  r.componentDidMount = function () {
    var t;
    var e = this.props.selection;
    var r = e.getEndKey();
    if (e.getHasFocus() && r === this.props.block.getKey()) {
      var n = this.wrapperRef.current;
      if (n) {
        var i = getScrollParent(n);
        var o = h(i);
        if (i === window) {
          var a = p(n);
          (t = a.y + a.height - d().height) > 0 && window.scrollTo(o.x, o.y + t + 10);
        } else {
          v(n) || y(!1);
          (t = n.offsetHeight + n.offsetTop - (i.offsetHeight + o.y)) > 0 && setTop(i, getTop(i) + t + 10);
        }
      }
    }
  };
  r.render = function () {
    var t = this;
    var r = this.props;
    var n = r.block;
    var a = r.blockRenderMap;
    var l = r.blockRendererFn;
    var f = r.blockStyleFn;
    var p = r.contentState;
    var h = r.decorator;
    var d = r.editorKey;
    var g = r.editorState;
    var y = r.customStyleFn;
    var v = r.customStyleMap;
    var k = r.direction;
    var C = r.forceSelection;
    var E = r.selection;
    var O = r.tree;
    var D = null;
    n.children.size && (D = n.children.reduce(function (r, n) {
      var i = encode(n, 0, 0);
      var s = p.getBlockForKey(n);
      var h = w(s, l);
      var y = h.CustomComponent || e;
      var v = S(s, a);
      var m = v.Element;
      var k = v.wrapperTemplate;
      var C = x(s, d, i, f, h, null);
      var E = o({}, t.props, {
        tree: g.getBlockTree(n),
        blockProps: h.customProps,
        offsetKey: i,
        block: s
      });
      r.push(createElement(m, C, createElement(y, E)));
      !k || _(s, p) || b(k, m, r);
      return r;
    }, []));
    var K = n.getKey();
    var T = encode(K, 0, 0);
    var M = w(n, l);
    var A = M.CustomComponent;
    var I = null != A ? createElement(A, i({}, this.props, {
      tree: g.getBlockTree(K),
      blockProps: M.customProps,
      offsetKey: T,
      block: n
    })) : createElement(s, {
      block: n,
      children: D,
      contentState: p,
      customStyleFn: y,
      customStyleMap: v,
      decorator: h,
      direction: k,
      forceSelection: C,
      hasSelection: m(E, K),
      selection: E,
      tree: O
    });
    if (n.getParentKey()) return I;
    var B = S(n, a).Element;
    var L = x(n, d, T, f, M, this.wrapperRef);
    return createElement(B, L, I);
  };
  return e;
}(Component);
module.exports = k;