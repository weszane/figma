import { A as _$$A } from "../vendor/20707";
import { A as _$$A2 } from "../vendor/710480";
import o from "../vendor/223108";
import { useLayoutEffect, useEffect, useRef, useCallback, useReducer, useMemo } from "react";
var a = o;
function d(e) {
  return "object" == typeof e && null != e && 1 === e.nodeType;
}
function p(e, r) {
  return (!r || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function g(e, r) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var n = getComputedStyle(e, null);
    return p(n.overflowY, r) || p(n.overflowX, r) || function (e) {
      var r = function (e) {
        if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
        try {
          return e.ownerDocument.defaultView.frameElement;
        } catch (e) {
          return null;
        }
      }(e);
      return !!r && (r.clientHeight < e.scrollHeight || r.clientWidth < e.scrollWidth);
    }(e);
  }
  return !1;
}
function m(e, r, n, i, s, o, a, h) {
  return o < e && a > r || o > e && a < r ? 0 : o <= e && h <= n || a >= r && h >= n ? o - e - i : a > r && h < n || o < e && h > n ? a - r + s : 0;
}
function v(e, r) {
  var n = window;
  var i = r.scrollMode;
  var s = r.block;
  var o = r.inline;
  var a = r.boundary;
  var h = r.skipOverflowHiddenElements;
  var p = "function" == typeof a ? a : function (e) {
    return e !== a;
  };
  if (!d(e)) throw TypeError("Invalid target");
  for (v = document.scrollingElement || document.documentElement, y = [], b = e, void 0; d(b) && p(b);) {
    var v;
    var y;
    var b;
    if ((b = b.parentElement) === v) {
      y.push(b);
      break;
    }
    null != b && b === document.body && g(b) && !g(document.documentElement) || null != b && g(b, h) && y.push(b);
  }
  for (O = n.visualViewport ? n.visualViewport.width : innerWidth, x = n.visualViewport ? n.visualViewport.height : innerHeight, w = window.scrollX || pageXOffset, k = window.scrollY || pageYOffset, _ = e.getBoundingClientRect(), S = _.height, E = _.width, A = _.top, C = _.right, T = _.bottom, I = _.left, P = "start" === s || "nearest" === s ? A : "end" === s ? T : A + S / 2, R = "center" === o ? I + E / 2 : "end" === o ? C : I, M = [], D = 0, void 0; D < y.length; D++) {
    var O;
    var x;
    var w;
    var k;
    var _;
    var S;
    var E;
    var A;
    var C;
    var T;
    var I;
    var P;
    var R;
    var M;
    var D;
    var N = y[D];
    var $ = N.getBoundingClientRect();
    var L = $.height;
    var j = $.width;
    var z = $.top;
    var Z = $.right;
    var F = $.bottom;
    var U = $.left;
    if ("if-needed" === i && A >= 0 && I >= 0 && T <= x && C <= O && A >= z && T <= F && I >= U && C <= Z) break;
    var Q = getComputedStyle(N);
    var V = parseInt(Q.borderLeftWidth, 10);
    var B = parseInt(Q.borderTopWidth, 10);
    var q = parseInt(Q.borderRightWidth, 10);
    var W = parseInt(Q.borderBottomWidth, 10);
    var Y = 0;
    var G = 0;
    var X = "offsetWidth" in N ? N.offsetWidth - N.clientWidth - V - q : 0;
    var H = "offsetHeight" in N ? N.offsetHeight - N.clientHeight - B - W : 0;
    if (v === N) {
      Y = "start" === s ? P : "end" === s ? P - x : "nearest" === s ? m(k, k + x, x, B, W, k + P, k + P + S, S) : P - x / 2;
      G = "start" === o ? R : "center" === o ? R - O / 2 : "end" === o ? R - O : m(w, w + O, O, V, q, w + R, w + R + E, E);
      Y = Math.max(0, Y + k);
      G = Math.max(0, G + w);
    } else {
      Y = "start" === s ? P - z - B : "end" === s ? P - F + W + H : "nearest" === s ? m(z, F, L, B, W + H, P, P + S, S) : P - (z + L / 2) + H / 2;
      G = "start" === o ? R - U - V : "center" === o ? R - (U + j / 2) + X / 2 : "end" === o ? R - Z + q + X : m(U, Z, j, V, q + X, R, R + E, E);
      var K = N.scrollLeft;
      var J = N.scrollTop;
      P += J - (Y = Math.max(0, Math.min(J + Y, N.scrollHeight - L + H)));
      R += K - (G = Math.max(0, Math.min(K + G, N.scrollWidth - j + X)));
    }
    M.push({
      el: N,
      top: Y,
      left: G
    });
  }
  return M;
}
var y = 0;
function b() {}
function O(e, r) {
  e && v(e, {
    boundary: r,
    block: "nearest",
    scrollMode: "if-needed"
  }).forEach(function (e) {
    var r = e.el;
    var n = e.top;
    var i = e.left;
    r.scrollTop = n;
    r.scrollLeft = i;
  });
}
function x(e, r, n) {
  return e === r || r instanceof n.Node && e.contains && e.contains(r);
}
function w(e, r) {
  var n;
  function i() {
    n && clearTimeout(n);
  }
  function s() {
    for (s = $$arguments.length, o = Array(s), a = 0, void 0; a < s; a++) {
      var s;
      var o;
      var a;
      o[a] = $$arguments[a];
    }
    i();
    n = setTimeout(function () {
      n = null;
      e.apply(void 0, o);
    }, r);
  }
  s.cancel = i;
  return s;
}
function k() {
  for (e = $$arguments.length, r = Array(e), n = 0, void 0; n < e; n++) {
    var e;
    var r;
    var n;
    r[n] = $$arguments[n];
  }
  return function (e) {
    for (n = $$arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1, void 0; s < n; s++) {
      var n;
      var i;
      var s;
      i[s - 1] = $$arguments[s];
    }
    return r.some(function (r) {
      r && r.apply(void 0, [e].concat(i));
      return e.preventDownshiftDefault || e.hasOwnProperty("nativeEvent") && e.nativeEvent.preventDownshiftDefault;
    });
  };
}
function _() {
  for (e = $$arguments.length, r = Array(e), n = 0, void 0; n < e; n++) {
    var e;
    var r;
    var n;
    r[n] = $$arguments[n];
  }
  return function (e) {
    r.forEach(function (r) {
      "function" == typeof r ? r(e) : r && (r.current = e);
    });
  };
}
function S() {
  return String(y++);
}
function E(e) {
  var r = e.isOpen;
  var n = e.resultCount;
  var i = e.previousResultCount;
  return r ? n ? n !== i ? n + " result" + (1 === n ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter key to select." : "" : "No results are available." : "";
}
function A(e, r) {
  return Object.keys(e).reduce(function (n, i) {
    n[i] = C(r, i) ? r[i] : e[i];
    return n;
  }, {});
}
function C(e, r) {
  return void 0 !== e[r];
}
function T(e) {
  var r = e.key;
  var n = e.keyCode;
  return n >= 37 && n <= 40 && 0 !== r.indexOf("Arrow") ? "Arrow" + r : r;
}
function I(e, r, n, i, s) {
  if (void 0 === s && (s = !0), 0 === n) return -1;
  var o = n - 1;
  ("number" != typeof r || r < 0 || r >= n) && (r = e > 0 ? -1 : o + 1);
  var a = r + e;
  a < 0 ? a = s ? o : 0 : a > o && (a = s ? 0 : o);
  var h = P(e, a, n, i, s);
  return -1 === h ? r >= n ? -1 : r : h;
}
function P(e, r, n, i, s) {
  var o = i(r);
  if (!o || !o.hasAttribute("disabled")) return r;
  if (e > 0) {
    for (var a = r + 1; a < n; a++) if (!i(a).hasAttribute("disabled")) return a;
  } else for (var h = r - 1; h >= 0; h--) if (!i(h).hasAttribute("disabled")) return h;
  return s ? e > 0 ? P(1, 0, n, i, !1) : P(-1, n - 1, n, i, !1) : -1;
}
function R(e, r, n, i) {
  void 0 === i && (i = !0);
  return r.some(function (r) {
    return r && (x(r, e, n) || i && x(r, n.document.activeElement, n));
  });
}
var M = w(function (e) {
  N(e).textContent = "";
}, 500);
function D(e, r) {
  var n = N(r);
  e && (n.textContent = e, M(r));
}
function N(e) {
  void 0 === e && (e = document);
  var r = e.getElementById("a11y-status-message");
  r || ((r = e.createElement("div")).setAttribute("id", "a11y-status-message"), r.setAttribute("role", "status"), r.setAttribute("aria-live", "polite"), r.setAttribute("aria-relevant", "additions text"), Object.assign(r.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(r));
  return r;
}
var $ = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function L(e, r, n) {
  var i = e.props;
  var o = e.type;
  var a = {};
  Object.keys(r).forEach(function (i) {
    j(i, e, r, n);
    n[i] !== r[i] && (a[i] = n[i]);
  });
  i.onStateChange && Object.keys(a).length && i.onStateChange(_$$A2({
    type: o
  }, a));
}
function j(e, r, n, i) {
  var o = r.props;
  var a = r.type;
  var h = "on" + q(e) + "Change";
  o[h] && void 0 !== i[e] && i[e] !== n[e] && o[h](_$$A2({
    type: a
  }, i));
}
function z(e, r) {
  return r.changes;
}
function Z(e) {
  var r = e.selectedItem;
  var n = e.itemToString;
  return r ? n(r) + " has been selected." : "";
}
var F = w(function (e, r) {
  D(e(), r);
}, 200);
var U = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
function Q(e) {
  var r = e.id;
  var n = void 0 === r ? "downshift-" + S() : r;
  var i = e.labelId;
  var s = e.menuId;
  var o = e.getItemId;
  var a = e.toggleButtonId;
  var d = e.inputId;
  return useRef({
    labelId: i || n + "-label",
    menuId: s || n + "-menu",
    getItemId: o || function (e) {
      return n + "-item-" + e;
    },
    toggleButtonId: a || n + "-toggle-button",
    inputId: d || n + "-input"
  }).current;
}
function V(e, r, n) {
  return void 0 !== e ? e : 0 === n.length ? -1 : n.indexOf(r);
}
function B(e) {
  return /^\S{1}$/.test(e);
}
function q(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
function W(e) {
  var r = useRef(e);
  r.current = e;
  return r;
}
function Y(e, r, n) {
  var i = useRef();
  var o = useRef();
  var a = useCallback(function (r, n) {
    o.current = n;
    var i = e(r = A(r, n.props), n);
    return n.props.stateReducer(r, _$$A2({}, n, {
      changes: i
    }));
  }, [e]);
  var d = useReducer(a, r);
  var p = d[0];
  var g = d[1];
  var m = W(n);
  var v = useCallback(function (e) {
    return g(_$$A2({
      props: m.current
    }, e));
  }, [m]);
  var y = o.current;
  useEffect(function () {
    y && i.current && i.current !== p && L(y, A(i.current, y.props), p);
    i.current = p;
  }, [p, n, y]);
  return [p, v];
}
function G(e, r, n) {
  var i = Y(e, r, n);
  var s = i[0];
  var o = i[1];
  return [A(s, n), o];
}
var X = {
  itemToString: function (e) {
    return e ? String(e) : "";
  },
  stateReducer: z,
  getA11ySelectionMessage: Z,
  scrollIntoView: O,
  circularNavigation: !1,
  environment: "undefined" == typeof window ? {} : window
};
function H(e, r, n) {
  void 0 === n && (n = $);
  var i = "default" + q(r);
  return i in e ? e[i] : n[r];
}
function K(e, r, n) {
  if (void 0 === n && (n = $), r in e) return e[r];
  var i = "initial" + q(r);
  return i in e ? e[i] : H(e, r, n);
}
function J(e) {
  var r = K(e, "selectedItem");
  var n = K(e, "isOpen");
  var i = K(e, "highlightedIndex");
  var s = K(e, "inputValue");
  return {
    highlightedIndex: i < 0 && r && n ? e.items.indexOf(r) : i,
    isOpen: n,
    selectedItem: r,
    inputValue: s
  };
}
function ee(e, r, n, i) {
  var s = e.items;
  var o = e.initialHighlightedIndex;
  var a = e.defaultHighlightedIndex;
  var h = r.selectedItem;
  var d = r.highlightedIndex;
  return 0 === s.length ? -1 : void 0 !== o && d === o ? o : void 0 !== a ? a : h ? 0 === n ? s.indexOf(h) : I(n, s.indexOf(h), s.length, i, !1) : 0 === n ? -1 : n < 0 ? s.length - 1 : 0;
}
function et(e, r, n, i) {
  var s = useRef({
    isMouseDown: !1,
    isTouchMove: !1
  });
  useEffect(function () {
    var o = function () {
      s.current.isMouseDown = !0;
    };
    var a = function (o) {
      s.current.isMouseDown = !1;
      e && !R(o.target, r.map(function (e) {
        return e.current;
      }), n) && i();
    };
    var h = function () {
      s.current.isTouchMove = !1;
    };
    var d = function () {
      s.current.isTouchMove = !0;
    };
    var p = function (o) {
      !e || s.current.isTouchMove || R(o.target, r.map(function (e) {
        return e.current;
      }), n, !1) || i();
    };
    n.addEventListener("mousedown", o);
    n.addEventListener("mouseup", a);
    n.addEventListener("touchstart", h);
    n.addEventListener("touchmove", d);
    n.addEventListener("touchend", p);
    return function () {
      n.removeEventListener("mousedown", o);
      n.removeEventListener("mouseup", a);
      n.removeEventListener("touchstart", h);
      n.removeEventListener("touchmove", d);
      n.removeEventListener("touchend", p);
    };
  }, [e, n]);
  return s;
}
var er = function () {
  return b;
};
function en(e, r, n) {
  var o = n.isInitialMount;
  var a = n.highlightedIndex;
  var d = n.items;
  var p = n.environment;
  var g = _$$A(n, ["isInitialMount", "highlightedIndex", "items", "environment"]);
  useEffect(function () {
    o || F(function () {
      return e(_$$A2({
        highlightedIndex: a,
        highlightedItem: d[a],
        resultCount: d.length
      }, g));
    }, p.document);
  }, r);
}
function ei(e) {
  var r = e.highlightedIndex;
  var n = e.isOpen;
  var i = e.itemRefs;
  var s = e.getItemNodeFromIndex;
  var o = e.menuElement;
  var a = e.scrollIntoView;
  var d = useRef(!0);
  U(function () {
    !(r < 0) && n && Object.keys(i.current).length && (!1 === d.current ? d.current = !0 : a(s(r), o));
  }, [r]);
  return d;
}
var es = b;
function eo(e, r, n) {
  var i;
  var o = r.type;
  var a = r.props;
  switch (o) {
    case n.ItemMouseMove:
      i = {
        highlightedIndex: r.index
      };
      break;
    case n.MenuMouseLeave:
      i = {
        highlightedIndex: -1
      };
      break;
    case n.ToggleButtonClick:
    case n.FunctionToggleMenu:
      i = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : ee(a, e, 0)
      };
      break;
    case n.FunctionOpenMenu:
      i = {
        isOpen: !0,
        highlightedIndex: ee(a, e, 0)
      };
      break;
    case n.FunctionCloseMenu:
      i = {
        isOpen: !1
      };
      break;
    case n.FunctionSetHighlightedIndex:
      i = {
        highlightedIndex: r.highlightedIndex
      };
      break;
    case n.FunctionSetInputValue:
      i = {
        inputValue: r.inputValue
      };
      break;
    case n.FunctionReset:
      i = {
        highlightedIndex: H(a, "highlightedIndex"),
        isOpen: H(a, "isOpen"),
        selectedItem: H(a, "selectedItem"),
        inputValue: H(a, "inputValue")
      };
      break;
    default:
      throw Error("Reducer called without proper action type.");
  }
  return _$$A2({}, e, i);
}
function ea(e, r, n, i, s) {
  for (o = e.toLowerCase(), a = 0, void 0; a < n.length; a++) {
    var o;
    var a;
    var h = (a + r + 1) % n.length;
    if (i(n[h]).toLowerCase().startsWith(o)) {
      var d = s(h);
      if (!(d && d.hasAttribute("disabled"))) return h;
    }
  }
  return r;
}
function el(e) {
  var r = e.isOpen;
  var n = e.resultCount;
  var i = e.previousResultCount;
  return r ? n ? n !== i ? n + " result" + (1 === n ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." : "" : "No results are available." : "";
}
a().array.isRequired;
a().func;
a().func;
a().func;
a().bool;
a().number;
a().number;
a().number;
a().bool;
a().bool;
a().bool;
a().any;
a().any;
a().any;
a().string;
a().string;
a().string;
a().func;
a().string;
a().func;
a().func;
a().func;
a().func;
a().func;
a().shape({
  addEventListener: a().func,
  removeEventListener: a().func,
  document: a().shape({
    getElementById: a().func,
    activeElement: a().any,
    body: a().any
  })
});
var eu = _$$A2({}, X, {
  getA11yStatusMessage: el
});
var ec = b;
var eh = 0;
var ed = 1;
var ef = 2;
var ep = 3;
var eg = 4;
var em = 5;
var ev = 6;
var ey = 7;
var eb = 8;
var eO = 9;
var ex = 10;
var ew = 11;
var ek = 12;
var e_ = 13;
var eS = 14;
var eE = 15;
var eA = 16;
var eC = 17;
var eT = 18;
var eI = 19;
var eP = 20;
var eR = 21;
var eM = 22;
var eD = Object.freeze({
  __proto__: null,
  MenuKeyDownArrowDown: 0,
  MenuKeyDownArrowUp: 1,
  MenuKeyDownEscape: 2,
  MenuKeyDownHome: 3,
  MenuKeyDownEnd: 4,
  MenuKeyDownEnter: 5,
  MenuKeyDownSpaceButton: 6,
  MenuKeyDownCharacter: 7,
  MenuBlur: 8,
  MenuMouseLeave: 9,
  ItemMouseMove: 10,
  ItemClick: 11,
  ToggleButtonClick: 12,
  ToggleButtonKeyDownArrowDown: 13,
  ToggleButtonKeyDownArrowUp: 14,
  ToggleButtonKeyDownCharacter: 15,
  FunctionToggleMenu: 16,
  FunctionOpenMenu: 17,
  FunctionCloseMenu: 18,
  FunctionSetHighlightedIndex: 19,
  FunctionSelectItem: 20,
  FunctionSetInputValue: 21,
  FunctionReset: 22
});
function eN(e, r) {
  var n;
  var i = r.type;
  var o = r.props;
  var a = r.shiftKey;
  switch (i) {
    case ew:
      n = {
        isOpen: H(o, "isOpen"),
        highlightedIndex: H(o, "highlightedIndex"),
        selectedItem: o.items[r.index]
      };
      break;
    case eE:
      var h = r.key;
      var d = "" + e.inputValue + h;
      var p = ea(d, e.selectedItem ? o.items.indexOf(e.selectedItem) : -1, o.items, o.itemToString, r.getItemNodeFromIndex);
      n = _$$A2({
        inputValue: d
      }, p >= 0 && {
        selectedItem: o.items[p]
      });
      break;
    case e_:
      n = {
        highlightedIndex: ee(o, e, 1, r.getItemNodeFromIndex),
        isOpen: !0
      };
      break;
    case eS:
      n = {
        highlightedIndex: ee(o, e, -1, r.getItemNodeFromIndex),
        isOpen: !0
      };
      break;
    case em:
    case ev:
      n = _$$A2({
        isOpen: H(o, "isOpen"),
        highlightedIndex: H(o, "highlightedIndex")
      }, e.highlightedIndex >= 0 && {
        selectedItem: o.items[e.highlightedIndex]
      });
      break;
    case ep:
      n = {
        highlightedIndex: P(1, 0, o.items.length, r.getItemNodeFromIndex, !1)
      };
      break;
    case eg:
      n = {
        highlightedIndex: P(-1, o.items.length - 1, o.items.length, r.getItemNodeFromIndex, !1)
      };
      break;
    case ef:
    case eb:
      n = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case ey:
      var g = r.key;
      var m = "" + e.inputValue + g;
      var v = ea(m, e.highlightedIndex, o.items, o.itemToString, r.getItemNodeFromIndex);
      n = _$$A2({
        inputValue: m
      }, v >= 0 && {
        highlightedIndex: v
      });
      break;
    case eh:
      n = {
        highlightedIndex: I(a ? 5 : 1, e.highlightedIndex, o.items.length, r.getItemNodeFromIndex, o.circularNavigation)
      };
      break;
    case ed:
      n = {
        highlightedIndex: I(a ? -5 : -1, e.highlightedIndex, o.items.length, r.getItemNodeFromIndex, o.circularNavigation)
      };
      break;
    case eP:
      n = {
        selectedItem: r.selectedItem
      };
      break;
    default:
      return eo(e, r, eD);
  }
  return _$$A2({}, e, n);
}
function e$(e) {
  void 0 === e && (e = {});
  ec(e, e$);
  var r = _$$A2({}, eu, e);
  var n = r.items;
  var o = r.scrollIntoView;
  var a = r.environment;
  var d = r.initialIsOpen;
  var p = r.defaultIsOpen;
  var g = r.itemToString;
  var m = r.getA11ySelectionMessage;
  var v = r.getA11yStatusMessage;
  var y = G(eN, J(r), r);
  var b = y[0];
  var O = y[1];
  var x = b.isOpen;
  var S = b.highlightedIndex;
  var E = b.selectedItem;
  var A = b.inputValue;
  var C = useRef(null);
  var I = useRef(null);
  var P = useRef({});
  var R = useRef(!0);
  var M = useRef(null);
  var D = Q(r);
  var N = useRef();
  var $ = useRef(!0);
  var L = W({
    state: b,
    props: r
  });
  var j = useCallback(function (e) {
    return P.current[D.getItemId(e)];
  }, [D]);
  en(v, [x, S, A, n], _$$A2({
    isInitialMount: $.current,
    previousResultCount: N.current,
    items: n,
    environment: a,
    itemToString: g
  }, b));
  en(m, [E], _$$A2({
    isInitialMount: $.current,
    previousResultCount: N.current,
    items: n,
    environment: a,
    itemToString: g
  }, b));
  var z = ei({
    menuElement: I.current,
    highlightedIndex: S,
    isOpen: x,
    itemRefs: P,
    scrollIntoView: o,
    getItemNodeFromIndex: j
  });
  useEffect(function () {
    M.current = w(function (e) {
      e({
        type: eR,
        inputValue: ""
      });
    }, 500);
    return function () {
      M.current.cancel();
    };
  }, []);
  useEffect(function () {
    A && M.current(O);
  }, [O, A]);
  es({
    isInitialMount: $.current,
    props: r,
    state: b
  });
  useEffect(function () {
    if ($.current) {
      (d || p || x) && I.current && I.current.focus();
      return;
    }
    if (x) {
      I.current && I.current.focus();
      return;
    }
    a.document.activeElement === I.current && C.current && (R.current = !1, C.current.focus());
  }, [x]);
  useEffect(function () {
    $.current || (N.current = n.length);
  });
  var Z = et(x, [I, C], a, function () {
    O({
      type: eb
    });
  });
  var F = er("getMenuProps", "getToggleButtonProps");
  useEffect(function () {
    $.current = !1;
  }, []);
  useEffect(function () {
    x || (P.current = {});
  }, [x]);
  var U = useMemo(function () {
    return {
      ArrowDown: function (e) {
        e.preventDefault();
        O({
          type: e_,
          getItemNodeFromIndex: j,
          shiftKey: e.shiftKey
        });
      },
      ArrowUp: function (e) {
        e.preventDefault();
        O({
          type: eS,
          getItemNodeFromIndex: j,
          shiftKey: e.shiftKey
        });
      }
    };
  }, [O, j]);
  var q = useMemo(function () {
    return {
      ArrowDown: function (e) {
        e.preventDefault();
        O({
          type: eh,
          getItemNodeFromIndex: j,
          shiftKey: e.shiftKey
        });
      },
      ArrowUp: function (e) {
        e.preventDefault();
        O({
          type: ed,
          getItemNodeFromIndex: j,
          shiftKey: e.shiftKey
        });
      },
      Home: function (e) {
        e.preventDefault();
        O({
          type: ep,
          getItemNodeFromIndex: j
        });
      },
      End: function (e) {
        e.preventDefault();
        O({
          type: eg,
          getItemNodeFromIndex: j
        });
      },
      Escape: function () {
        O({
          type: ef
        });
      },
      Enter: function (e) {
        e.preventDefault();
        O({
          type: em
        });
      },
      " ": function (e) {
        e.preventDefault();
        O({
          type: ev
        });
      }
    };
  }, [O, j]);
  var Y = useCallback(function () {
    O({
      type: eA
    });
  }, [O]);
  var X = useCallback(function () {
    O({
      type: eT
    });
  }, [O]);
  var H = useCallback(function () {
    O({
      type: eC
    });
  }, [O]);
  var K = useCallback(function (e) {
    O({
      type: eI,
      highlightedIndex: e
    });
  }, [O]);
  var ee = useCallback(function (e) {
    O({
      type: eP,
      selectedItem: e
    });
  }, [O]);
  var eo = useCallback(function () {
    O({
      type: eM
    });
  }, [O]);
  var ea = useCallback(function (e) {
    O({
      type: eR,
      inputValue: e
    });
  }, [O]);
  var el = useCallback(function (e) {
    return _$$A2({
      id: D.labelId,
      htmlFor: D.toggleButtonId
    }, e);
  }, [D]);
  var eD = useCallback(function (e, r) {
    var n;
    var o = void 0 === e ? {} : e;
    var a = o.onMouseLeave;
    var h = o.refKey;
    var d = void 0 === h ? "ref" : h;
    var p = o.onKeyDown;
    var g = o.onBlur;
    var m = o.ref;
    var v = _$$A(o, ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"]);
    var y = (void 0 === r ? {} : r).suppressRefError;
    var b = void 0 !== y && y;
    var x = L.current.state;
    var w = function (e) {
      var r = T(e);
      r && q[r] ? q[r](e) : B(r) && O({
        type: ey,
        key: r,
        getItemNodeFromIndex: j
      });
    };
    var S = function () {
      if (!1 === R.current) {
        R.current = !0;
        return;
      }
      Z.current.isMouseDown || O({
        type: eb
      });
    };
    var E = function () {
      O({
        type: eO
      });
    };
    F("getMenuProps", b, d, I);
    return _$$A2(((n = {})[d] = _(m, function (e) {
      I.current = e;
    }), n.id = D.menuId, n.role = "listbox", n["aria-labelledby"] = D.labelId, n.tabIndex = -1, n), x.isOpen && x.highlightedIndex > -1 && {
      "aria-activedescendant": D.getItemId(x.highlightedIndex)
    }, {
      onMouseLeave: k(a, E),
      onKeyDown: k(p, w),
      onBlur: k(g, S)
    }, v);
  }, [O, L, q, Z, F, D, j]);
  return {
    getToggleButtonProps: useCallback(function (e, r) {
      var n;
      var o = void 0 === e ? {} : e;
      var a = o.onClick;
      var h = o.onKeyDown;
      var d = o.refKey;
      var p = void 0 === d ? "ref" : d;
      var g = o.ref;
      var m = _$$A(o, ["onClick", "onKeyDown", "refKey", "ref"]);
      var v = (void 0 === r ? {} : r).suppressRefError;
      var y = void 0 !== v && v;
      var b = function () {
        O({
          type: ek
        });
      };
      var x = function (e) {
        var r = T(e);
        r && U[r] ? U[r](e) : B(r) && O({
          type: eE,
          key: r,
          getItemNodeFromIndex: j
        });
      };
      var w = _$$A2(((n = {})[p] = _(g, function (e) {
        C.current = e;
      }), n.id = D.toggleButtonId, n["aria-haspopup"] = "listbox", n["aria-expanded"] = L.current.state.isOpen, n["aria-labelledby"] = D.labelId + " " + D.toggleButtonId, n), m);
      m.disabled || (w.onClick = k(a, b), w.onKeyDown = k(h, x));
      F("getToggleButtonProps", y, p, C);
      return w;
    }, [O, L, U, F, D, j]),
    getLabelProps: el,
    getMenuProps: eD,
    getItemProps: useCallback(function (e) {
      var r;
      var n = void 0 === e ? {} : e;
      var o = n.item;
      var a = n.index;
      var h = n.onMouseMove;
      var d = n.onClick;
      var p = n.refKey;
      var g = void 0 === p ? "ref" : p;
      var m = n.ref;
      var v = _$$A(n, ["item", "index", "onMouseMove", "onClick", "refKey", "ref"]);
      var y = L.current;
      var b = y.state;
      var x = y.props;
      var w = function () {
        a !== b.highlightedIndex && (z.current = !1, O({
          type: ex,
          index: a
        }));
      };
      var S = function () {
        O({
          type: ew,
          index: a
        });
      };
      var E = V(a, o, x.items);
      if (E < 0) throw Error("Pass either item or item index in getItemProps!");
      var A = _$$A2(((r = {
        role: "option",
        "aria-selected": "" + (E === b.highlightedIndex),
        id: D.getItemId(E)
      })[g] = _(m, function (e) {
        e && (P.current[D.getItemId(E)] = e);
      }), r), v);
      v.disabled || (A.onMouseMove = k(h, w), A.onClick = k(d, S));
      return A;
    }, [O, L, z, D]),
    toggleMenu: Y,
    openMenu: H,
    closeMenu: X,
    setHighlightedIndex: K,
    selectItem: ee,
    reset: eo,
    setInputValue: ea,
    highlightedIndex: S,
    isOpen: x,
    selectedItem: E,
    inputValue: A
  };
}
e$.stateChangeTypes = eD;
var eL = 0;
var ej = 1;
var ez = 2;
var eZ = 3;
var eF = 4;
var eU = 5;
var eQ = 6;
var eV = 7;
var eB = 8;
var eq = 9;
var eW = 10;
var eY = 11;
var eG = 12;
var eX = 13;
var eH = 14;
var eK = 15;
var eJ = 16;
var e0 = 17;
var e1 = 18;
var e2 = 19;
var e5 = Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: 0,
  InputKeyDownArrowUp: 1,
  InputKeyDownEscape: 2,
  InputKeyDownHome: 3,
  InputKeyDownEnd: 4,
  InputKeyDownEnter: 5,
  InputChange: 6,
  InputBlur: 7,
  MenuMouseLeave: 8,
  ItemMouseMove: 9,
  ItemClick: 10,
  ToggleButtonClick: 11,
  FunctionToggleMenu: 12,
  FunctionOpenMenu: 13,
  FunctionCloseMenu: 14,
  FunctionSetHighlightedIndex: 15,
  FunctionSelectItem: 16,
  FunctionSetInputValue: 17,
  FunctionReset: 18,
  ControlledPropUpdatedSelectedItem: 19
});
function e3(e) {
  var r = J(e);
  var n = r.selectedItem;
  var i = r.inputValue;
  "" === i && n && void 0 === e.defaultInputValue && void 0 === e.initialInputValue && void 0 === e.inputValue && (i = e.itemToString(n));
  return _$$A2({}, r, {
    inputValue: i
  });
}
function e6(e, r, n) {
  var i = useRef();
  var s = Y(e, r, n);
  var o = s[0];
  var a = s[1];
  useEffect(function () {
    C(n, "selectedItem") && (i.current !== n.selectedItem && a({
      type: e2,
      inputValue: n.itemToString(n.selectedItem)
    }), i.current = o.selectedItem === i.current ? n.selectedItem : o.selectedItem);
  });
  return [A(o, n), a];
}
a().array.isRequired;
a().func;
a().func;
a().func;
a().bool;
a().number;
a().number;
a().number;
a().bool;
a().bool;
a().bool;
a().any;
a().any;
a().any;
a().string;
a().string;
a().string;
a().string;
a().string;
a().string;
a().func;
a().string;
a().string;
a().func;
a().func;
a().func;
a().func;
a().func;
a().func;
a().shape({
  addEventListener: a().func,
  removeEventListener: a().func,
  document: a().shape({
    getElementById: a().func,
    activeElement: a().any,
    body: a().any
  })
});
var e4 = b;
var e8 = _$$A2({}, X, {
  getA11yStatusMessage: E,
  circularNavigation: !0
});
function e7(e, r) {
  var n;
  var i = r.type;
  var o = r.props;
  var a = r.shiftKey;
  switch (i) {
    case eW:
      n = {
        isOpen: H(o, "isOpen"),
        highlightedIndex: H(o, "highlightedIndex"),
        selectedItem: o.items[r.index],
        inputValue: o.itemToString(o.items[r.index])
      };
      break;
    case eL:
      n = e.isOpen ? {
        highlightedIndex: I(a ? 5 : 1, e.highlightedIndex, o.items.length, r.getItemNodeFromIndex, o.circularNavigation)
      } : {
        highlightedIndex: ee(o, e, 1, r.getItemNodeFromIndex),
        isOpen: o.items.length >= 0
      };
      break;
    case ej:
      n = e.isOpen ? {
        highlightedIndex: I(a ? -5 : -1, e.highlightedIndex, o.items.length, r.getItemNodeFromIndex, o.circularNavigation)
      } : {
        highlightedIndex: ee(o, e, -1, r.getItemNodeFromIndex),
        isOpen: o.items.length >= 0
      };
      break;
    case eU:
      n = _$$A2({}, e.isOpen && e.highlightedIndex >= 0 && {
        selectedItem: o.items[e.highlightedIndex],
        isOpen: H(o, "isOpen"),
        highlightedIndex: H(o, "highlightedIndex"),
        inputValue: o.itemToString(o.items[e.highlightedIndex])
      });
      break;
    case ez:
      n = _$$A2({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case eZ:
      n = {
        highlightedIndex: P(1, 0, o.items.length, r.getItemNodeFromIndex, !1)
      };
      break;
    case eF:
      n = {
        highlightedIndex: P(-1, o.items.length - 1, o.items.length, r.getItemNodeFromIndex, !1)
      };
      break;
    case eV:
      n = _$$A2({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && r.selectItem && {
        selectedItem: o.items[e.highlightedIndex],
        inputValue: o.itemToString(o.items[e.highlightedIndex])
      });
      break;
    case eQ:
      n = {
        isOpen: !0,
        highlightedIndex: H(o, "highlightedIndex"),
        inputValue: r.inputValue
      };
      break;
    case eJ:
      n = {
        selectedItem: r.selectedItem,
        inputValue: o.itemToString(r.selectedItem)
      };
      break;
    case e2:
      n = {
        inputValue: r.inputValue
      };
      break;
    default:
      return eo(e, r, e5);
  }
  return _$$A2({}, e, n);
}
export function $$e90(e) {
  void 0 === e && (e = {});
  e4(e, $$e90);
  var r = _$$A2({}, e8, e);
  var n = r.initialIsOpen;
  var o = r.defaultIsOpen;
  var a = r.items;
  var d = r.scrollIntoView;
  var p = r.environment;
  var g = r.getA11yStatusMessage;
  var m = r.getA11ySelectionMessage;
  var v = r.itemToString;
  var y = e6(e7, e3(r), r);
  var b = y[0];
  var O = y[1];
  var x = b.isOpen;
  var w = b.highlightedIndex;
  var S = b.selectedItem;
  var E = b.inputValue;
  var A = useRef(null);
  var C = useRef({});
  var I = useRef(null);
  var P = useRef(null);
  var R = useRef(null);
  var M = useRef(!0);
  var D = Q(r);
  var N = useRef();
  var $ = W({
    state: b,
    props: r
  });
  var L = useCallback(function (e) {
    return C.current[D.getItemId(e)];
  }, [D]);
  en(g, [x, w, E, a], _$$A2({
    isInitialMount: M.current,
    previousResultCount: N.current,
    items: a,
    environment: p,
    itemToString: v
  }, b));
  en(m, [S], _$$A2({
    isInitialMount: M.current,
    previousResultCount: N.current,
    items: a,
    environment: p,
    itemToString: v
  }, b));
  var j = ei({
    menuElement: A.current,
    highlightedIndex: w,
    isOpen: x,
    itemRefs: C,
    scrollIntoView: d,
    getItemNodeFromIndex: L
  });
  es({
    isInitialMount: M.current,
    props: r,
    state: b
  });
  useEffect(function () {
    (n || o || x) && I.current && I.current.focus();
  }, []);
  useEffect(function () {
    M.current || (N.current = a.length);
  });
  var z = et(x, [R, A, P], p, function () {
    O({
      type: eV,
      selectItem: !1
    });
  });
  var Z = er("getInputProps", "getComboboxProps", "getMenuProps");
  useEffect(function () {
    M.current = !1;
  }, []);
  useEffect(function () {
    x || (C.current = {});
  }, [x]);
  var F = useMemo(function () {
    return {
      ArrowDown: function (e) {
        e.preventDefault();
        O({
          type: eL,
          shiftKey: e.shiftKey,
          getItemNodeFromIndex: L
        });
      },
      ArrowUp: function (e) {
        e.preventDefault();
        O({
          type: ej,
          shiftKey: e.shiftKey,
          getItemNodeFromIndex: L
        });
      },
      Home: function (e) {
        $.current.state.isOpen && (e.preventDefault(), O({
          type: eZ,
          getItemNodeFromIndex: L
        }));
      },
      End: function (e) {
        $.current.state.isOpen && (e.preventDefault(), O({
          type: eF,
          getItemNodeFromIndex: L
        }));
      },
      Escape: function () {
        var e = $.current.state;
        (e.isOpen || e.inputValue || e.selectedItem || e.highlightedIndex > -1) && O({
          type: ez
        });
      },
      Enter: function (e) {
        var r = $.current.state;
        r.isOpen && !(r.highlightedIndex < 0) && 229 !== e.which && (e.preventDefault(), O({
          type: eU,
          getItemNodeFromIndex: L
        }));
      }
    };
  }, [O, $, L]);
  var U = useCallback(function (e) {
    return _$$A2({
      id: D.labelId,
      htmlFor: D.inputId
    }, e);
  }, [D]);
  var B = useCallback(function (e, r) {
    var n;
    var o = void 0 === e ? {} : e;
    var a = o.onMouseLeave;
    var h = o.refKey;
    var d = void 0 === h ? "ref" : h;
    var p = o.ref;
    var g = _$$A(o, ["onMouseLeave", "refKey", "ref"]);
    var m = (void 0 === r ? {} : r).suppressRefError;
    Z("getMenuProps", void 0 !== m && m, d, A);
    return _$$A2(((n = {})[d] = _(p, function (e) {
      A.current = e;
    }), n.id = D.menuId, n.role = "listbox", n["aria-labelledby"] = D.labelId, n.onMouseLeave = k(a, function () {
      O({
        type: eB
      });
    }), n), g);
  }, [O, Z, D]);
  var q = useCallback(function (e) {
    var r;
    var n;
    var o = void 0 === e ? {} : e;
    var a = o.item;
    var h = o.index;
    var d = o.refKey;
    var p = void 0 === d ? "ref" : d;
    var g = o.ref;
    var m = o.onMouseMove;
    var v = o.onClick;
    o.onPress;
    var y = _$$A(o, ["item", "index", "refKey", "ref", "onMouseMove", "onClick", "onPress"]);
    var b = $.current;
    var x = b.props;
    var w = b.state;
    var S = V(h, a, x.items);
    if (S < 0) throw Error("Pass either item or item index in getItemProps!");
    var E = "onClick";
    var A = v;
    var T = function () {
      h !== w.highlightedIndex && (j.current = !1, O({
        type: eq,
        index: h
      }));
    };
    var P = function () {
      O({
        type: eW,
        index: h
      });
      I.current && I.current.focus();
    };
    return _$$A2(((r = {})[p] = _(g, function (e) {
      e && (C.current[D.getItemId(S)] = e);
    }), r.role = "option", r["aria-selected"] = "" + (S === w.highlightedIndex), r.id = D.getItemId(S), r), !y.disabled && ((n = {
      onMouseMove: k(m, T)
    })[E] = k(A, P), n), y);
  }, [O, $, j, D]);
  var Y = useCallback(function (e) {
    var r;
    var n = void 0 === e ? {} : e;
    var o = n.onClick;
    n.onPress;
    var a = n.refKey;
    var h = void 0 === a ? "ref" : a;
    var d = n.ref;
    var p = _$$A(n, ["onClick", "onPress", "refKey", "ref"]);
    var g = function () {
      O({
        type: eY
      });
      !$.current.state.isOpen && I.current && I.current.focus();
    };
    return _$$A2(((r = {})[h] = _(d, function (e) {
      P.current = e;
    }), r.id = D.toggleButtonId, r.tabIndex = -1, r), !p.disabled && _$$A2({}, {
      onClick: k(o, g)
    }), p);
  }, [O, $, D]);
  var G = useCallback(function (e, r) {
    var n;
    var o;
    var a = void 0 === e ? {} : e;
    var h = a.onKeyDown;
    var d = a.onChange;
    var p = a.onInput;
    var g = a.onBlur;
    a.onChangeText;
    var m = a.refKey;
    var v = void 0 === m ? "ref" : m;
    var y = a.ref;
    var b = _$$A(a, ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "refKey", "ref"]);
    var x = (void 0 === r ? {} : r).suppressRefError;
    Z("getInputProps", void 0 !== x && x, v, I);
    var w = $.current.state;
    var S = function (e) {
      var r = T(e);
      r && F[r] && F[r](e);
    };
    var E = function (e) {
      O({
        type: eQ,
        inputValue: e.target.value
      });
    };
    var A = function () {
      w.isOpen && !z.current.isMouseDown && O({
        type: eV,
        selectItem: !0
      });
    };
    var C = "onChange";
    var P = {};
    b.disabled || ((o = {})[C] = k(d, p, E), o.onKeyDown = k(h, S), o.onBlur = k(g, A), P = o);
    return _$$A2(((n = {})[v] = _(y, function (e) {
      I.current = e;
    }), n.id = D.inputId, n["aria-autocomplete"] = "list", n["aria-controls"] = D.menuId, n), w.isOpen && w.highlightedIndex > -1 && {
      "aria-activedescendant": D.getItemId(w.highlightedIndex)
    }, {
      "aria-labelledby": D.labelId,
      autoComplete: "off",
      value: w.inputValue
    }, P, b);
  }, [O, F, $, z, Z, D]);
  var X = useCallback(function (e, r) {
    var n;
    var o = void 0 === e ? {} : e;
    var a = o.refKey;
    var h = void 0 === a ? "ref" : a;
    var d = o.ref;
    var p = _$$A(o, ["refKey", "ref"]);
    var g = (void 0 === r ? {} : r).suppressRefError;
    Z("getComboboxProps", void 0 !== g && g, h, R);
    return _$$A2(((n = {})[h] = _(d, function (e) {
      R.current = e;
    }), n.role = "combobox", n["aria-haspopup"] = "listbox", n["aria-owns"] = D.menuId, n["aria-expanded"] = $.current.state.isOpen, n), p);
  }, [$, Z, D]);
  var H = useCallback(function () {
    O({
      type: eG
    });
  }, [O]);
  var K = useCallback(function () {
    O({
      type: eH
    });
  }, [O]);
  var J = useCallback(function () {
    O({
      type: eX
    });
  }, [O]);
  var ee = useCallback(function (e) {
    O({
      type: eK,
      highlightedIndex: e
    });
  }, [O]);
  var eo = useCallback(function (e) {
    O({
      type: eJ,
      selectedItem: e
    });
  }, [O]);
  return {
    getItemProps: q,
    getLabelProps: U,
    getMenuProps: B,
    getInputProps: G,
    getComboboxProps: X,
    getToggleButtonProps: Y,
    toggleMenu: H,
    openMenu: J,
    closeMenu: K,
    setHighlightedIndex: ee,
    setInputValue: useCallback(function (e) {
      O({
        type: e0,
        inputValue: e
      });
    }, [O]),
    selectItem: eo,
    reset: useCallback(function () {
      O({
        type: e1
      });
    }, [O]),
    highlightedIndex: w,
    isOpen: x,
    selectedItem: S,
    inputValue: E
  };
}
$$e90.stateChangeTypes = e5;
var te = {
  activeIndex: -1,
  selectedItems: []
};
function tt(e, r) {
  return K(e, r, te);
}
function tr(e, r) {
  return H(e, r, te);
}
function tn(e) {
  return {
    activeIndex: tt(e, "activeIndex"),
    selectedItems: tt(e, "selectedItems")
  };
}
function ti(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey) return !1;
  var r = e.target;
  return !(r instanceof HTMLInputElement) || "" === r.value || 0 === r.selectionStart && 0 === r.selectionEnd;
}
function ts(e) {
  var r = e.removedSelectedItem;
  return e.itemToString(r) + " has been removed.";
}
a().array;
a().array;
a().array;
a().func;
a().func;
a().func;
a().number;
a().number;
a().number;
a().func;
a().func;
a().string;
a().string;
a().shape({
  addEventListener: a().func,
  removeEventListener: a().func,
  document: a().shape({
    getElementById: a().func,
    activeElement: a().any,
    body: a().any
  })
});
var to = {
  itemToString: X.itemToString,
  stateReducer: X.stateReducer,
  environment: X.environment,
  getA11yRemovalMessage: ts,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
};
var ta = b;
var tl = 0;
var tu = 1;
var tc = 2;
var th = 3;
var td = 4;
var tf = 5;
var tp = 6;
var tg = 7;
var tm = 8;
var tv = 9;
var ty = 10;
var tb = 11;
var tO = 12;
var tx = Object.freeze({
  __proto__: null,
  SelectedItemClick: 0,
  SelectedItemKeyDownDelete: 1,
  SelectedItemKeyDownBackspace: 2,
  SelectedItemKeyDownNavigationNext: 3,
  SelectedItemKeyDownNavigationPrevious: 4,
  DropdownKeyDownNavigationPrevious: 5,
  DropdownKeyDownBackspace: 6,
  DropdownClick: 7,
  FunctionAddSelectedItem: 8,
  FunctionRemoveSelectedItem: 9,
  FunctionSetSelectedItems: 10,
  FunctionSetActiveIndex: 11,
  FunctionReset: 12
});
function tw(e, r) {
  var n;
  var i = r.type;
  var o = r.index;
  var a = r.props;
  var h = r.selectedItem;
  var d = e.activeIndex;
  var p = e.selectedItems;
  switch (i) {
    case tl:
      n = {
        activeIndex: o
      };
      break;
    case td:
      n = {
        activeIndex: d - 1 < 0 ? 0 : d - 1
      };
      break;
    case th:
      n = {
        activeIndex: d + 1 >= p.length ? -1 : d + 1
      };
      break;
    case tc:
    case tu:
      var g = d;
      1 === p.length ? g = -1 : d === p.length - 1 && (g = p.length - 2);
      n = _$$A2({
        selectedItems: [].concat(p.slice(0, d), p.slice(d + 1))
      }, {
        activeIndex: g
      });
      break;
    case tf:
      n = {
        activeIndex: p.length - 1
      };
      break;
    case tp:
      n = {
        selectedItems: p.slice(0, p.length - 1)
      };
      break;
    case tm:
      n = {
        selectedItems: [].concat(p, [h])
      };
      break;
    case tg:
      n = {
        activeIndex: -1
      };
      break;
    case tv:
      var m = d;
      var v = p.indexOf(h);
      1 === p.length ? m = -1 : v === p.length - 1 && (m = p.length - 2);
      n = _$$A2({
        selectedItems: [].concat(p.slice(0, v), p.slice(v + 1))
      }, {
        activeIndex: m
      });
      break;
    case ty:
      n = {
        selectedItems: r.selectedItems
      };
      break;
    case tb:
      n = {
        activeIndex: r.activeIndex
      };
      break;
    case tO:
      n = {
        activeIndex: tr(a, "activeIndex"),
        selectedItems: tr(a, "selectedItems")
      };
      break;
    default:
      throw Error("Reducer called without proper action type.");
  }
  return _$$A2({}, e, n);
}
function tk(e) {
  void 0 === e && (e = {});
  ta(e, tk);
  var r = _$$A2({}, to, e);
  var n = r.getA11yRemovalMessage;
  var o = r.itemToString;
  var a = r.environment;
  var d = r.keyNavigationNext;
  var p = r.keyNavigationPrevious;
  var g = G(tw, tn(r), r);
  var m = g[0];
  var v = g[1];
  var y = m.activeIndex;
  var b = m.selectedItems;
  var O = useRef(!0);
  var x = useRef(null);
  var w = useRef(b);
  var S = useRef();
  S.current = [];
  var E = W({
    state: m,
    props: r
  });
  useEffect(function () {
    if (!O.current) {
      if (b.length < w.current.length) {
        var e = w.current.find(function (e) {
          return 0 > b.indexOf(e);
        });
        D(n({
          itemToString: o,
          resultCount: b.length,
          removedSelectedItem: e,
          activeIndex: y,
          activeSelectedItem: b[y]
        }), a.document);
      }
      w.current = b;
    }
  }, [b.length]);
  useEffect(function () {
    !O.current && (-1 === y && x.current ? x.current.focus() : S.current[y] && S.current[y].focus());
  }, [y]);
  es({
    isInitialMount: O.current,
    props: r,
    state: m
  });
  var A = er("getDropdownProps");
  useEffect(function () {
    O.current = !1;
  }, []);
  var C = useMemo(function () {
    var e;
    (e = {})[p] = function () {
      v({
        type: td
      });
    };
    e[d] = function () {
      v({
        type: th
      });
    };
    e.Delete = function () {
      v({
        type: tu
      });
    };
    e.Backspace = function () {
      v({
        type: tc
      });
    };
    return e;
  }, [v, d, p]);
  var I = useMemo(function () {
    var e;
    (e = {})[p] = function (e) {
      ti(e) && v({
        type: tf
      });
    };
    e.Backspace = function (e) {
      ti(e) && v({
        type: tp
      });
    };
    return e;
  }, [v, p]);
  return {
    getSelectedItemProps: useCallback(function (e) {
      var r;
      var n = void 0 === e ? {} : e;
      var o = n.refKey;
      var a = void 0 === o ? "ref" : o;
      var h = n.ref;
      var d = n.onClick;
      var p = n.onKeyDown;
      var g = n.selectedItem;
      var m = n.index;
      var y = _$$A(n, ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"]);
      var b = E.current.state;
      if (0 > V(m, g, b.selectedItems)) throw Error("Pass either selectedItem or index in getSelectedItemProps!");
      var O = function () {
        v({
          type: tl,
          index: m
        });
      };
      var x = function (e) {
        var r = T(e);
        r && C[r] && C[r](e);
      };
      return _$$A2(((r = {})[a] = _(h, function (e) {
        e && S.current.push(e);
      }), r.tabIndex = m === b.activeIndex ? 0 : -1, r.onClick = k(d, O), r.onKeyDown = k(p, x), r), y);
    }, [v, E, C]),
    getDropdownProps: useCallback(function (e, r) {
      var n;
      var o = void 0 === e ? {} : e;
      var a = o.refKey;
      var h = void 0 === a ? "ref" : a;
      var d = o.ref;
      var p = o.onKeyDown;
      var g = o.onClick;
      var m = o.preventKeyAction;
      var y = void 0 !== m && m;
      var b = _$$A(o, ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"]);
      var O = (void 0 === r ? {} : r).suppressRefError;
      A("getDropdownProps", void 0 !== O && O, h, x);
      var w = function (e) {
        var r = T(e);
        r && I[r] && I[r](e);
      };
      var S = function () {
        v({
          type: tg
        });
      };
      return _$$A2(((n = {})[h] = _(d, function (e) {
        e && (x.current = e);
      }), n), !y && {
        onKeyDown: k(p, w),
        onClick: k(g, S)
      }, b);
    }, [v, I, A]),
    addSelectedItem: useCallback(function (e) {
      v({
        type: tm,
        selectedItem: e
      });
    }, [v]),
    removeSelectedItem: useCallback(function (e) {
      v({
        type: tv,
        selectedItem: e
      });
    }, [v]),
    setSelectedItems: useCallback(function (e) {
      v({
        type: ty,
        selectedItems: e
      });
    }, [v]),
    setActiveIndex: useCallback(function (e) {
      v({
        type: tb,
        activeIndex: e
      });
    }, [v]),
    reset: useCallback(function () {
      v({
        type: tO
      });
    }, [v]),
    selectedItems: b,
    activeIndex: y
  };
}
tk.stateChangeTypes = tx;
export const Bp = $$e90;