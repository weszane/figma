import { A as _$$A } from "../vendor/710480";
import { A as _$$A2 } from "../vendor/343729";
import { A as _$$A3 } from "../vendor/179604";
import { createElement, PureComponent } from "react";
var a = Number.isNaN || function (e) {
  return "number" == typeof e && e != e;
};
function h(e, r) {
  return !!(e === r || a(e) && a(r));
}
function d(e, r) {
  if (e.length !== r.length) return !1;
  for (var n = 0; n < e.length; n++) if (!h(e[n], r[n])) return !1;
  return !0;
}
let p = function (e, r) {
  void 0 === r && (r = d);
  var n;
  var i;
  var s = [];
  var o = !1;
  return function () {
    for (a = [], h = 0, void 0; h < $$arguments.length; h++) {
      var a;
      var h;
      a[h] = $$arguments[h];
    }
    o && n === this && r(a, s) || (i = e.apply(this, a), o = !0, n = this, s = a);
    return i;
  };
};
var m = "object" == typeof performance && "function" == typeof performance.now ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function v(e) {
  cancelAnimationFrame(e.id);
}
function y(e, r) {
  var n = m();
  function i() {
    m() - n >= r ? e.call(null) : s.id = requestAnimationFrame(i);
  }
  var s = {
    id: requestAnimationFrame(i)
  };
  return s;
}
var b = -1;
function O(e) {
  if (void 0 === e && (e = !1), -1 === b || e) {
    var r = document.createElement("div");
    var n = r.style;
    n.width = "50px";
    n.height = "50px";
    n.overflow = "scroll";
    document.body.appendChild(r);
    b = r.offsetWidth - r.clientWidth;
    document.body.removeChild(r);
  }
  return b;
}
var x = null;
function w(e) {
  if (void 0 === e && (e = !1), null === x || e) {
    var r = document.createElement("div");
    var n = r.style;
    n.width = "50px";
    n.height = "50px";
    n.overflow = "scroll";
    n.direction = "rtl";
    var i = document.createElement("div");
    var s = i.style;
    s.width = "100px";
    s.height = "100px";
    r.appendChild(i);
    document.body.appendChild(r);
    r.scrollLeft > 0 ? x = "positive-descending" : (r.scrollLeft = 1, x = 0 === r.scrollLeft ? "negative" : "positive-ascending");
    document.body.removeChild(r);
  }
  return x;
}
var k = function (e, r, n, i) {
  var s;
  var o;
  var a;
  if ("column" === e ? (s = i.columnMetadataMap, o = r.columnWidth, a = i.lastMeasuredColumnIndex) : (s = i.rowMetadataMap, o = r.rowHeight, a = i.lastMeasuredRowIndex), n > a) {
    var h = 0;
    if (a >= 0) {
      var d = s[a];
      h = d.offset + d.size;
    }
    for (var p = a + 1; p <= n; p++) {
      var g = o(p);
      s[p] = {
        offset: h,
        size: g
      };
      h += g;
    }
    "column" === e ? i.lastMeasuredColumnIndex = n : i.lastMeasuredRowIndex = n;
  }
  return s[n];
};
var _ = function (e, r, n, i, s, o) {
  for (; s <= i;) {
    var a = s + Math.floor((i - s) / 2);
    var h = k(e, r, a, n).offset;
    if (h === o) return a;
    h < o ? s = a + 1 : h > o && (i = a - 1);
  }
  return s > 0 ? s - 1 : 0;
};
var S = 150;
var E = function (e, r) {
  return e;
};
function A(e) {
  var r;
  var n = e.getItemOffset;
  var a = e.getEstimatedTotalSize;
  var h = e.getItemSize;
  var d = e.getOffsetForIndexAndAlignment;
  var m = e.getStartIndexForOffset;
  var b = e.getStopIndexForStartIndex;
  var x = e.initInstanceProps;
  var k = e.shouldResetStyleCacheOnItemSizeChange;
  var _ = e.validateProps;
  (r = function (e) {
    function r(r) {
      var i;
      (i = e.call(this, r) || this)._instanceProps = x(i.props, _$$A2(i));
      i._outerRef = void 0;
      i._resetIsScrollingTimeoutId = null;
      i.state = {
        instance: _$$A2(i),
        isScrolling: !1,
        scrollDirection: "forward",
        scrollOffset: "number" == typeof i.props.initialScrollOffset ? i.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: !1
      };
      i._callOnItemsRendered = void 0;
      i._callOnItemsRendered = p(function (e, r, n, s) {
        return i.props.onItemsRendered({
          overscanStartIndex: e,
          overscanStopIndex: r,
          visibleStartIndex: n,
          visibleStopIndex: s
        });
      });
      i._callOnScroll = void 0;
      i._callOnScroll = p(function (e, r, n) {
        return i.props.onScroll({
          scrollDirection: e,
          scrollOffset: r,
          scrollUpdateWasRequested: n
        });
      });
      i._getItemStyle = void 0;
      i._getItemStyle = function (e) {
        var r;
        var s = i.props;
        var o = s.direction;
        var a = s.itemSize;
        var d = s.layout;
        var p = i._getItemStyleCache(k && a, k && d, k && o);
        if (p.hasOwnProperty(e)) r = p[e];else {
          var g = n(i.props, e, i._instanceProps);
          var m = h(i.props, e, i._instanceProps);
          var v = "horizontal" === o || "horizontal" === d;
          var y = "rtl" === o;
          var b = v ? g : 0;
          p[e] = r = {
            position: "absolute",
            left: y ? void 0 : b,
            right: y ? b : void 0,
            top: v ? 0 : g,
            height: v ? "100%" : m,
            width: v ? m : "100%"
          };
        }
        return r;
      };
      i._getItemStyleCache = void 0;
      i._getItemStyleCache = p(function (e, r, n) {
        return {};
      });
      i._onScrollHorizontal = function (e) {
        var r = e.currentTarget;
        var n = r.clientWidth;
        var s = r.scrollLeft;
        var o = r.scrollWidth;
        i.setState(function (e) {
          if (e.scrollOffset === s) return null;
          var r = i.props.direction;
          var a = s;
          if ("rtl" === r) switch (w()) {
            case "negative":
              a = -s;
              break;
            case "positive-descending":
              a = o - n - s;
          }
          a = Math.max(0, Math.min(a, o - n));
          return {
            isScrolling: !0,
            scrollDirection: e.scrollOffset < s ? "forward" : "backward",
            scrollOffset: a,
            scrollUpdateWasRequested: !1
          };
        }, i._resetIsScrollingDebounced);
      };
      i._onScrollVertical = function (e) {
        var r = e.currentTarget;
        var n = r.clientHeight;
        var s = r.scrollHeight;
        var o = r.scrollTop;
        i.setState(function (e) {
          if (e.scrollOffset === o) return null;
          var r = Math.max(0, Math.min(o, s - n));
          return {
            isScrolling: !0,
            scrollDirection: e.scrollOffset < r ? "forward" : "backward",
            scrollOffset: r,
            scrollUpdateWasRequested: !1
          };
        }, i._resetIsScrollingDebounced);
      };
      i._outerRefSetter = function (e) {
        var r = i.props.outerRef;
        i._outerRef = e;
        "function" == typeof r ? r(e) : null != r && "object" == typeof r && r.hasOwnProperty("current") && (r.current = e);
      };
      i._resetIsScrollingDebounced = function () {
        null !== i._resetIsScrollingTimeoutId && v(i._resetIsScrollingTimeoutId);
        i._resetIsScrollingTimeoutId = y(i._resetIsScrolling, S);
      };
      i._resetIsScrolling = function () {
        i._resetIsScrollingTimeoutId = null;
        i.setState({
          isScrolling: !1
        }, function () {
          i._getItemStyleCache(-1, null);
        });
      };
      return i;
    }
    _$$A3(r, e);
    r.getDerivedStateFromProps = function (e, r) {
      C(e, r);
      _(e);
      return null;
    };
    var A = r.prototype;
    A.scrollTo = function (e) {
      e = Math.max(0, e);
      this.setState(function (r) {
        return r.scrollOffset === e ? null : {
          scrollDirection: r.scrollOffset < e ? "forward" : "backward",
          scrollOffset: e,
          scrollUpdateWasRequested: !0
        };
      }, this._resetIsScrollingDebounced);
    };
    A.scrollToItem = function (e, r) {
      void 0 === r && (r = "auto");
      var n = this.props;
      var i = n.itemCount;
      var s = n.layout;
      var o = this.state.scrollOffset;
      e = Math.max(0, Math.min(e, i - 1));
      var a = 0;
      if (this._outerRef) {
        var h = this._outerRef;
        a = "vertical" === s ? h.scrollWidth > h.clientWidth ? O() : 0 : h.scrollHeight > h.clientHeight ? O() : 0;
      }
      this.scrollTo(d(this.props, e, r, o, this._instanceProps, a));
    };
    A.componentDidMount = function () {
      var e = this.props;
      var r = e.direction;
      var n = e.initialScrollOffset;
      var i = e.layout;
      if ("number" == typeof n && null != this._outerRef) {
        var s = this._outerRef;
        "horizontal" === r || "horizontal" === i ? s.scrollLeft = n : s.scrollTop = n;
      }
      this._callPropsCallbacks();
    };
    A.componentDidUpdate = function () {
      var e = this.props;
      var r = e.direction;
      var n = e.layout;
      var i = this.state;
      var s = i.scrollOffset;
      if (i.scrollUpdateWasRequested && null != this._outerRef) {
        var o = this._outerRef;
        if ("horizontal" === r || "horizontal" === n) {
          if ("rtl" === r) switch (w()) {
            case "negative":
              o.scrollLeft = -s;
              break;
            case "positive-ascending":
              o.scrollLeft = s;
              break;
            default:
              var a = o.clientWidth;
              var h = o.scrollWidth;
              o.scrollLeft = h - a - s;
          } else o.scrollLeft = s;
        } else o.scrollTop = s;
      }
      this._callPropsCallbacks();
    };
    A.componentWillUnmount = function () {
      null !== this._resetIsScrollingTimeoutId && v(this._resetIsScrollingTimeoutId);
    };
    A.render = function () {
      var e = this.props;
      var r = e.children;
      var n = e.className;
      var s = e.direction;
      var o = e.height;
      var h = e.innerRef;
      var d = e.innerElementType;
      var p = e.innerTagName;
      var m = e.itemCount;
      var v = e.itemData;
      var y = e.itemKey;
      var b = void 0 === y ? E : y;
      var O = e.layout;
      var x = e.outerElementType;
      var w = e.outerTagName;
      var k = e.style;
      var _ = e.useIsScrolling;
      var S = e.width;
      var A = this.state.isScrolling;
      var C = "horizontal" === s || "horizontal" === O;
      var T = C ? this._onScrollHorizontal : this._onScrollVertical;
      var I = this._getRangeToRender();
      var P = I[0];
      var R = I[1];
      var M = [];
      if (m > 0) for (var D = P; D <= R; D++) M.push(createElement(r, {
        data: v,
        key: b(D, v),
        index: D,
        isScrolling: _ ? A : void 0,
        style: this._getItemStyle(D)
      }));
      var N = a(this.props, this._instanceProps);
      return createElement(x || w || "div", {
        className: n,
        onScroll: T,
        ref: this._outerRefSetter,
        style: _$$A({
          position: "relative",
          height: o,
          width: S,
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          willChange: "transform",
          direction: s
        }, k)
      }, createElement(d || p || "div", {
        children: M,
        ref: h,
        style: {
          height: C ? "100%" : N,
          pointerEvents: A ? "none" : void 0,
          width: C ? N : "100%"
        }
      }));
    };
    A._callPropsCallbacks = function () {
      if ("function" == typeof this.props.onItemsRendered && this.props.itemCount > 0) {
        var e = this._getRangeToRender();
        var r = e[0];
        var n = e[1];
        var i = e[2];
        var s = e[3];
        this._callOnItemsRendered(r, n, i, s);
      }
      if ("function" == typeof this.props.onScroll) {
        var o = this.state;
        var a = o.scrollDirection;
        var h = o.scrollOffset;
        var d = o.scrollUpdateWasRequested;
        this._callOnScroll(a, h, d);
      }
    };
    A._getRangeToRender = function () {
      var e = this.props;
      var r = e.itemCount;
      var n = e.overscanCount;
      var i = this.state;
      var s = i.isScrolling;
      var o = i.scrollDirection;
      var a = i.scrollOffset;
      if (0 === r) return [0, 0, 0, 0];
      var h = m(this.props, a, this._instanceProps);
      var d = b(this.props, h, a, this._instanceProps);
      return [Math.max(0, h - (s && "backward" !== o ? 1 : Math.max(1, n))), Math.max(0, Math.min(r - 1, d + (s && "forward" !== o ? 1 : Math.max(1, n)))), h, d];
    };
    return r;
  }(PureComponent)).defaultProps = {
    direction: "ltr",
    itemData: void 0,
    layout: "vertical",
    overscanCount: 2,
    useIsScrolling: !1
  };
  return r;
}
var C = function (e, r) {
  e.children;
  e.direction;
  e.height;
  e.layout;
  e.innerTagName;
  e.outerTagName;
  e.width;
  r.instance;
};
var T = 50;
var I = function (e, r, n) {
  var i = e.itemSize;
  var s = n.itemMetadataMap;
  var o = n.lastMeasuredIndex;
  if (r > o) {
    var a = 0;
    if (o >= 0) {
      var h = s[o];
      a = h.offset + h.size;
    }
    for (var d = o + 1; d <= r; d++) {
      var p = i(d);
      s[d] = {
        offset: a,
        size: p
      };
      a += p;
    }
    n.lastMeasuredIndex = r;
  }
  return s[r];
};
var P = function (e, r, n) {
  var i = r.itemMetadataMap;
  var s = r.lastMeasuredIndex;
  return (s > 0 ? i[s].offset : 0) >= n ? R(e, r, s, 0, n) : M(e, r, Math.max(0, s), n);
};
var R = function (e, r, n, i, s) {
  for (; i <= n;) {
    var o = i + Math.floor((n - i) / 2);
    var a = I(e, o, r).offset;
    if (a === s) return o;
    a < s ? i = o + 1 : a > s && (n = o - 1);
  }
  return i > 0 ? i - 1 : 0;
};
var M = function (e, r, n, i) {
  for (s = e.itemCount, o = 1, void 0; n < s && I(e, n, r).offset < i;) {
    var s;
    var o;
    n += o;
    o *= 2;
  }
  return R(e, r, Math.min(n, s - 1), Math.floor(n / 2), i);
};
var D = function (e, r) {
  var n = e.itemCount;
  var i = r.itemMetadataMap;
  var s = r.estimatedItemSize;
  var o = r.lastMeasuredIndex;
  var a = 0;
  if (o >= n && (o = n - 1), o >= 0) {
    var h = i[o];
    a = h.offset + h.size;
  }
  return a + (n - o - 1) * s;
};
var $$N1 = A({
  getItemOffset: function (e, r, n) {
    return I(e, r, n).offset;
  },
  getItemSize: function (e, r, n) {
    return n.itemMetadataMap[r].size;
  },
  getEstimatedTotalSize: D,
  getOffsetForIndexAndAlignment: function (e, r, n, i, s, o) {
    var a = e.direction;
    var h = e.height;
    var d = e.layout;
    var p = e.width;
    var g = "horizontal" === a || "horizontal" === d ? p : h;
    var m = I(e, r, s);
    var v = Math.max(0, Math.min(D(e, s) - g, m.offset));
    var y = Math.max(0, m.offset - g + m.size + o);
    switch ("smart" === n && (n = i >= y - g && i <= v + g ? "auto" : "center"), n) {
      case "start":
        return v;
      case "end":
        return y;
      case "center":
        return Math.round(y + (v - y) / 2);
      default:
        if (i >= y && i <= v) return i;
        if (i < y) return y;
        return v;
    }
  },
  getStartIndexForOffset: function (e, r, n) {
    return P(e, n, r);
  },
  getStopIndexForStartIndex: function (e, r, n, i) {
    for (s = e.direction, o = e.height, a = e.itemCount, h = e.layout, d = e.width, p = "horizontal" === s || "horizontal" === h ? d : o, g = I(e, r, i), m = n + p, v = g.offset + g.size, y = r, void 0; y < a - 1 && v < m;) {
      var s;
      var o;
      var a;
      var h;
      var d;
      var p;
      var g;
      var m;
      var v;
      var y;
      v += I(e, ++y, i).size;
    }
    return y;
  },
  initInstanceProps: function (e, r) {
    var n = {
      itemMetadataMap: {},
      estimatedItemSize: e.estimatedItemSize || T,
      lastMeasuredIndex: -1
    };
    r.resetAfterIndex = function (e, i) {
      void 0 === i && (i = !0);
      n.lastMeasuredIndex = Math.min(n.lastMeasuredIndex, e - 1);
      r._getItemStyleCache(-1);
      i && r.forceUpdate();
    };
    return n;
  },
  shouldResetStyleCacheOnItemSizeChange: !1,
  validateProps: function (e) {
    e.itemSize;
  }
});
var $$$0 = A({
  getItemOffset: function (e, r) {
    return r * e.itemSize;
  },
  getItemSize: function (e, r) {
    return e.itemSize;
  },
  getEstimatedTotalSize: function (e) {
    var r = e.itemCount;
    return e.itemSize * r;
  },
  getOffsetForIndexAndAlignment: function (e, r, n, i, s, o) {
    var a = e.direction;
    var h = e.height;
    var d = e.itemCount;
    var p = e.itemSize;
    var g = e.layout;
    var m = e.width;
    var v = "horizontal" === a || "horizontal" === g ? m : h;
    var y = Math.max(0, d * p - v);
    var b = Math.min(y, r * p);
    var O = Math.max(0, r * p - v + p + o);
    switch ("smart" === n && (n = i >= O - v && i <= b + v ? "auto" : "center"), n) {
      case "start":
        return b;
      case "end":
        return O;
      case "center":
        var x = Math.round(O + (b - O) / 2);
        if (x < Math.ceil(v / 2)) return 0;
        if (x > y + Math.floor(v / 2)) return y;
        return x;
      default:
        if (i >= O && i <= b) return i;
        if (i < O) return O;
        return b;
    }
  },
  getStartIndexForOffset: function (e, r) {
    return Math.max(0, Math.min(e.itemCount - 1, Math.floor(r / e.itemSize)));
  },
  getStopIndexForStartIndex: function (e, r, n) {
    var i = e.direction;
    var s = e.height;
    var o = e.itemCount;
    var a = e.itemSize;
    var h = e.layout;
    var d = e.width;
    var p = Math.ceil((("horizontal" === i || "horizontal" === h ? d : s) + n - r * a) / a);
    return Math.max(0, Math.min(o - 1, r + p - 1));
  },
  initInstanceProps: function (e) {},
  shouldResetStyleCacheOnItemSizeChange: !0,
  validateProps: function (e) {
    e.itemSize;
  }
});
export const Y1 = $$$0;
export const _m = $$N1;