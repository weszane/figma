import { createElement, PureComponent } from "react";
var s = function (e, r) {
  if (!(e instanceof r)) throw TypeError("Cannot call a class as a function");
};
var o = function () {
  function e(e, r) {
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      i.enumerable = i.enumerable || !1;
      i.configurable = !0;
      "value" in i && (i.writable = !0);
      Object.defineProperty(e, i.key, i);
    }
  }
  return function (r, n, i) {
    n && e(r.prototype, n);
    i && e(r, i);
    return r;
  };
}();
var a = Object.assign || function (e) {
  for (var r = 1; r < $$arguments.length; r++) {
    var n = $$arguments[r];
    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
  }
  return e;
};
var h = function (e, r) {
  if ("function" != typeof r && null !== r) throw TypeError("Super expression must either be null or a function, not " + typeof r);
  e.prototype = Object.create(r && r.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  });
  r && (Object.setPrototypeOf ? Object.setPrototypeOf(e, r) : e.__proto__ = r);
};
var d = function (e, r) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r && ("object" == typeof r || "function" == typeof r) ? r : e;
};
var p = function () {
  function e(e, r) {
    var n = [];
    var i = !0;
    var s = !1;
    var o = void 0;
    try {
      for (h = e[Symbol.iterator](), void 0; !(i = (a = h.next()).done) && (n.push(a.value), !r || n.length !== r); i = !0) {
        var a;
        var h;
        ;
      }
    } catch (e) {
      s = !0;
      o = e;
    } finally {
      try {
        !i && h.$$return && h.$$return();
      } finally {
        if (s) throw o;
      }
    }
    return n;
  }
  return function (r, n) {
    if (Array.isArray(r)) return r;
    if (Symbol.iterator in Object(r)) return e(r, n);
    throw TypeError("Invalid attempt to destructure non-iterable instance");
  };
}();
var g = void 0;
"undefined" != typeof window ? g = window : "undefined" != typeof self ? g = self : g = require.g;
var m = null;
var v = null;
var y = 20;
var b = g.clearTimeout;
var O = g.setTimeout;
var x = g.cancelAnimationFrame || g.mozCancelAnimationFrame || g.webkitCancelAnimationFrame;
var w = g.requestAnimationFrame || g.mozRequestAnimationFrame || g.webkitRequestAnimationFrame;
function k(e) {
  var r = void 0;
  var n = void 0;
  var i = void 0;
  var s = void 0;
  var o = void 0;
  var a = void 0;
  var h = void 0;
  var d = "undefined" != typeof document && document.attachEvent;
  if (!d) {
    a = function (e) {
      var r = e.__resizeTriggers__;
      var n = r.firstElementChild;
      var i = r.lastElementChild;
      var s = n.firstElementChild;
      i.scrollLeft = i.scrollWidth;
      i.scrollTop = i.scrollHeight;
      s.style.width = n.offsetWidth + 1 + "px";
      s.style.height = n.offsetHeight + 1 + "px";
      n.scrollLeft = n.scrollWidth;
      n.scrollTop = n.scrollHeight;
    };
    o = function (e) {
      return e.offsetWidth !== e.__resizeLast__.width || e.offsetHeight !== e.__resizeLast__.height;
    };
    h = function (e) {
      if (!(e.target.className && "function" == typeof e.target.className.indexOf && 0 > e.target.className.indexOf("contract-trigger") && 0 > e.target.className.indexOf("expand-trigger"))) {
        var r = this;
        a(this);
        this.__resizeRAF__ && m(this.__resizeRAF__);
        this.__resizeRAF__ = v(function () {
          o(r) && (r.__resizeLast__.width = r.offsetWidth, r.__resizeLast__.height = r.offsetHeight, r.__resizeListeners__.forEach(function (n) {
            n.call(r, e);
          }));
        });
      }
    };
    var p = !1;
    var y = "";
    i = "animationstart";
    var b = "Webkit Moz O ms".split(" ");
    var O = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" ");
    var x = "";
    var w = document.createElement("fakeelement");
    if (void 0 !== w.style.animationName && (p = !0), !1 === p) {
      for (var k = 0; k < b.length; k++) if (void 0 !== w.style[b[k] + "AnimationName"]) {
        y = "-" + (x = b[k]).toLowerCase() + "-";
        i = O[k];
        p = !0;
        break;
      }
    }
    r = "@" + y + "keyframes " + (n = "resizeanim") + " { from { opacity: 0; } to { opacity: 0; } } ";
    s = y + "animation: 1ms " + n + "; ";
  }
  var _ = function (n) {
    if (!n.getElementById("detectElementResize")) {
      var i = (r || "") + ".resize-triggers { " + (s || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }';
      var o = n.head || n.getElementsByTagName("head")[0];
      var a = n.createElement("style");
      a.id = "detectElementResize";
      a.type = "text/css";
      null != e && a.setAttribute("nonce", e);
      a.styleSheet ? a.styleSheet.cssText = i : a.appendChild(n.createTextNode(i));
      o.appendChild(a);
    }
  };
  return {
    addResizeListener: function (e, r) {
      if (d) e.attachEvent("onresize", r);else {
        if (!e.__resizeTriggers__) {
          var s = e.ownerDocument;
          var o = g.getComputedStyle(e);
          o && "static" === o.position && (e.style.position = "relative");
          _(s);
          e.__resizeLast__ = {};
          e.__resizeListeners__ = [];
          (e.__resizeTriggers__ = s.createElement("div")).className = "resize-triggers";
          var p = s.createElement("div");
          p.className = "expand-trigger";
          p.appendChild(s.createElement("div"));
          var m = s.createElement("div");
          m.className = "contract-trigger";
          e.__resizeTriggers__.appendChild(p);
          e.__resizeTriggers__.appendChild(m);
          e.appendChild(e.__resizeTriggers__);
          a(e);
          e.addEventListener("scroll", h, !0);
          i && (e.__resizeTriggers__.__animationListener__ = function (r) {
            r.animationName === n && a(e);
          }, e.__resizeTriggers__.addEventListener(i, e.__resizeTriggers__.__animationListener__));
        }
        e.__resizeListeners__.push(r);
      }
    },
    removeResizeListener: function (e, r) {
      if (d) e.detachEvent("onresize", r);else if (e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(r), 1), !e.__resizeListeners__.length) {
        e.removeEventListener("scroll", h, !0);
        e.__resizeTriggers__.__animationListener__ && (e.__resizeTriggers__.removeEventListener(i, e.__resizeTriggers__.__animationListener__), e.__resizeTriggers__.__animationListener__ = null);
        try {
          e.__resizeTriggers__ = !e.removeChild(e.__resizeTriggers__);
        } catch (e) {}
      }
    }
  };
}
null == x || null == w ? (m = b, v = function (e) {
  return O(e, y);
}) : (m = function (e) {
  var r = p(e, 2);
  var n = r[0];
  var i = r[1];
  x(n);
  b(i);
}, v = function (e) {
  var r = w(function () {
    b(n);
    e();
  });
  var n = O(function () {
    x(r);
    e();
  }, y);
  return [r, n];
});
var _ = function (e) {
  function r() {
    s(this, r);
    for (o = $$arguments.length, a = Array(o), h = 0, void 0; h < o; h++) {
      var e;
      var n;
      var i;
      var o;
      var a;
      var h;
      a[h] = $$arguments[h];
    }
    n = i = d(this, (e = r.__proto__ || Object.getPrototypeOf(r)).call.apply(e, [this].concat(a)));
    i.state = {
      height: i.props.defaultHeight || 0,
      width: i.props.defaultWidth || 0
    };
    i._onResize = function () {
      var e = i.props;
      var r = e.disableHeight;
      var n = e.disableWidth;
      var s = e.onResize;
      if (i._parentNode) {
        var o = i._parentNode.offsetHeight || 0;
        var a = i._parentNode.offsetWidth || 0;
        var h = window.getComputedStyle(i._parentNode) || {};
        var d = parseInt(h.paddingLeft, 10) || 0;
        var p = parseInt(h.paddingRight, 10) || 0;
        var g = parseInt(h.paddingTop, 10) || 0;
        var m = parseInt(h.paddingBottom, 10) || 0;
        var v = o - g - m;
        var y = a - d - p;
        (r || i.state.height === v) && (n || i.state.width === y) || (i.setState({
          height: o - g - m,
          width: a - d - p
        }), s({
          height: o,
          width: a
        }));
      }
    };
    i._setRef = function (e) {
      i._autoSizer = e;
    };
    return d(i, n);
  }
  h(r, e);
  o(r, [{
    key: "componentDidMount",
    value: function () {
      var e = this.props.nonce;
      this._autoSizer && this._autoSizer.parentNode && this._autoSizer.parentNode.ownerDocument && this._autoSizer.parentNode.ownerDocument.defaultView && this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement && (this._parentNode = this._autoSizer.parentNode, this._detectElementResize = k(e), this._detectElementResize.addResizeListener(this._parentNode, this._onResize), this._onResize());
    }
  }, {
    key: "componentWillUnmount",
    value: function () {
      this._detectElementResize && this._parentNode && this._detectElementResize.removeResizeListener(this._parentNode, this._onResize);
    }
  }, {
    key: "render",
    value: function () {
      var e = this.props;
      var r = e.children;
      var n = e.className;
      var s = e.disableHeight;
      var o = e.disableWidth;
      var h = e.style;
      var d = this.state;
      var p = d.height;
      var g = d.width;
      var m = {
        overflow: "visible"
      };
      var v = {};
      var y = !1;
      s || (0 === p && (y = !0), m.height = 0, v.height = p);
      o || (0 === g && (y = !0), m.width = 0, v.width = g);
      return createElement("div", {
        className: n,
        ref: this._setRef,
        style: a({}, m, h)
      }, !y && r(v));
    }
  }]);
  return r;
}(PureComponent);
_.defaultProps = {
  onResize: function () {},
  disableHeight: !1,
  disableWidth: !1,
  style: {}
};
export let $$S0 = _;
export const A = $$S0;