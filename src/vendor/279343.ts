import { _ } from "../vendor/211375";
import { ph, q3, L0 } from "../vendor/558916";
var A = function (e) {
  return e;
};
var $$o4 = function (e) {
  for (t = Math.max(e.startIndex - e.overscan, 0), n = Math.min(e.endIndex + e.overscan, e.count - 1), r = [], i = t, void 0; i <= n; i++) {
    var t;
    var n;
    var r;
    var i;
    r.push(i);
  }
  return r;
};
var $$s2 = function (e, t) {
  var n = e.scrollElement;
  if (n) {
    var r = function (e) {
      t({
        width: Math.round(e.width),
        height: Math.round(e.height)
      });
    };
    r(n.getBoundingClientRect());
    var i = new ResizeObserver(function (e) {
      var t = e[0];
      if (null != t && t.borderBoxSize) {
        var i = t.borderBoxSize[0];
        if (i) {
          r({
            width: i.inlineSize,
            height: i.blockSize
          });
          return;
        }
      }
      r(n.getBoundingClientRect());
    });
    i.observe(n, {
      box: "border-box"
    });
    return function () {
      i.unobserve(n);
    };
  }
};
var $$a0 = function (e, t) {
  var n = e.scrollElement;
  if (n) {
    var r = function () {
      t(n[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
    };
    r();
    n.addEventListener("scroll", r, {
      passive: !0
    });
    return function () {
      n.removeEventListener("scroll", r);
    };
  }
};
var l = function (e, t, n) {
  if (null != t && t.borderBoxSize) {
    var r = t.borderBoxSize[0];
    if (r) return Math.round(r[n.options.horizontal ? "inlineSize" : "blockSize"]);
  }
  return Math.round(e.getBoundingClientRect()[n.options.horizontal ? "width" : "height"]);
};
var $$u1 = function (e, t, n) {
  var r;
  var i;
  var A = t.adjustments;
  var o = t.behavior;
  n.scrollElement || null == r.scrollTo || r.scrollTo(((i = {})[n.options.horizontal ? "left" : "top"] = e + (void 0 === A ? 0 : A), i.behavior = o, i));
};
var $$g3 = function (e) {
  var t;
  var n;
  var s = this;
  this.unsubs = [];
  this.scrollElement = null;
  this.isScrolling = !1;
  this.isScrollingTimeoutId = null;
  this.scrollToIndexTimeoutId = null;
  this.measurementsCache = [];
  this.itemSizeCache = new Map();
  this.pendingMeasuredCacheIndexes = [];
  this.scrollDirection = null;
  this.scrollAdjustments = 0;
  this.measureElementCache = new Map();
  this.observer = (t = null, n = function () {
    return t || ("undefined" != typeof ResizeObserver ? t = new ResizeObserver(function (e) {
      e.forEach(function (e) {
        s._measureElement(e.target, e);
      });
    }) : null);
  }, {
    disconnect: function () {
      var e;
      return null == (e = n()) ? void 0 : e.disconnect();
    },
    observe: function (e) {
      var t;
      return null == (t = n()) ? void 0 : t.observe(e, {
        box: "border-box"
      });
    },
    unobserve: function (e) {
      var t;
      return null == (t = n()) ? void 0 : t.unobserve(e);
    }
  });
  this.range = {
    startIndex: 0,
    endIndex: 0
  };
  this.setOptions = function (e) {
    Object.entries(e).forEach(function (t) {
      var n = t[0];
      void 0 === t[1] && delete e[n];
    });
    s.options = _({
      debug: !1,
      initialOffset: 0,
      overscan: 1,
      paddingStart: 0,
      paddingEnd: 0,
      scrollPaddingStart: 0,
      scrollPaddingEnd: 0,
      horizontal: !1,
      getItemKey: A,
      rangeExtractor: $$o4,
      onChange: function () {},
      measureElement: l,
      initialRect: {
        width: 0,
        height: 0
      },
      scrollMargin: 0,
      scrollingDelay: 150,
      indexAttribute: "data-index",
      initialMeasurementsCache: [],
      lanes: 1
    }, e);
  };
  this.notify = function () {
    null == s.options.onChange || s.options.onChange(s);
  };
  this.cleanup = function () {
    s.unsubs.filter(Boolean).forEach(function (e) {
      return e();
    });
    s.unsubs = [];
    s.scrollElement = null;
  };
  this._didMount = function () {
    s.measureElementCache.forEach(s.observer.observe);
    return function () {
      s.observer.disconnect();
      s.cleanup();
    };
  };
  this._willUpdate = function () {
    var e = s.options.getScrollElement();
    s.scrollElement !== e && (s.cleanup(), s.scrollElement = e, s._scrollToOffset(s.scrollOffset, {
      adjustments: void 0,
      behavior: void 0
    }), s.unsubs.push(s.options.observeElementRect(s, function (e) {
      var t = s.scrollRect;
      s.scrollRect = e;
      (s.options.horizontal ? e.width !== t.width : e.height !== t.height) && s.maybeNotify();
    })), s.unsubs.push(s.options.observeElementOffset(s, function (e) {
      s.scrollAdjustments = 0;
      s.scrollOffset !== e && (null !== s.isScrollingTimeoutId && (clearTimeout(s.isScrollingTimeoutId), s.isScrollingTimeoutId = null), s.isScrolling = !0, s.scrollDirection = s.scrollOffset < e ? "forward" : "backward", s.scrollOffset = e, s.maybeNotify(), s.isScrollingTimeoutId = setTimeout(function () {
        s.isScrollingTimeoutId = null;
        s.isScrolling = !1;
        s.scrollDirection = null;
        s.maybeNotify();
      }, s.options.scrollingDelay));
    })));
  };
  this.getSize = function () {
    return s.scrollRect[s.options.horizontal ? "width" : "height"];
  };
  this.memoOptions = ph(function () {
    return [s.options.count, s.options.paddingStart, s.options.scrollMargin, s.options.getItemKey];
  }, function (e, t, n, r) {
    s.pendingMeasuredCacheIndexes = [];
    return {
      count: e,
      paddingStart: t,
      scrollMargin: n,
      getItemKey: r
    };
  }, {
    key: !1
  });
  this.getFurthestMeasurement = function (e, t) {
    for (n = new Map(), r = new Map(), i = t - 1, void 0; i >= 0; i--) {
      var n;
      var r;
      var i;
      var A = e[i];
      if (!n.has(A.lane)) {
        var o = r.get(A.lane);
        if (null == o || A.end > o.end ? r.set(A.lane, A) : A.end < o.end && n.set(A.lane, !0), n.size === s.options.lanes) break;
      }
    }
    return r.size === s.options.lanes ? Array.from(r.values()).sort(function (e, t) {
      return e.end - t.end;
    })[0] : void 0;
  };
  this.getMeasurements = ph(function () {
    return [s.memoOptions(), s.itemSizeCache];
  }, function (e, t) {
    var n = e.count;
    var r = e.paddingStart;
    var i = e.scrollMargin;
    var A = e.getItemKey;
    var o = s.pendingMeasuredCacheIndexes.length > 0 ? Math.min.apply(Math, s.pendingMeasuredCacheIndexes) : 0;
    s.pendingMeasuredCacheIndexes = [];
    for (a = s.measurementsCache.slice(0, o), l = o, void 0; l < n; l++) {
      var a;
      var l;
      var u = A(l);
      var g = 1 === s.options.lanes ? a[l - 1] : s.getFurthestMeasurement(a, l);
      var c = g ? g.end : r + i;
      var f = t.get(u);
      var d = "number" == typeof f ? f : s.options.estimateSize(l);
      var h = c + d;
      var p = g ? g.lane : l % s.options.lanes;
      a[l] = {
        index: l,
        start: c,
        size: d,
        end: h,
        key: u,
        lane: p
      };
    }
    s.measurementsCache = a;
    return a;
  }, {
    key: !1,
    debug: function () {
      return s.options.debug;
    }
  });
  this.calculateRange = ph(function () {
    return [s.getMeasurements(), s.getSize(), s.scrollOffset];
  }, function (e, t, n) {
    return s.range = function (e) {
      for (t = e.measurements, n = e.outerSize, r = e.scrollOffset, i = t.length - 1, A = c(0, i, function (e) {
        return t[e].start;
      }, r), o = A, void 0; o < i && t[o].end < r + n;) {
        var t;
        var n;
        var r;
        var i;
        var A;
        var o;
        o++;
      }
      return {
        startIndex: A,
        endIndex: o
      };
    }({
      measurements: e,
      outerSize: t,
      scrollOffset: n
    });
  }, {
    key: !1,
    debug: function () {
      return s.options.debug;
    }
  });
  this.maybeNotify = ph(function () {
    var e = s.calculateRange();
    return [e.startIndex, e.endIndex, s.isScrolling];
  }, function () {
    s.notify();
  }, {
    key: !1,
    debug: function () {
      return s.options.debug;
    },
    initialDeps: [this.range.startIndex, this.range.endIndex, this.isScrolling]
  });
  this.getIndexes = ph(function () {
    return [s.options.rangeExtractor, s.calculateRange(), s.options.overscan, s.options.count];
  }, function (e, t, n, i) {
    return e(_({}, t, {
      overscan: n,
      count: i
    }));
  }, {
    key: !1,
    debug: function () {
      return s.options.debug;
    }
  });
  this.indexFromElement = function (e) {
    var t = s.options.indexAttribute;
    var n = e.getAttribute(t);
    return n ? parseInt(n, 10) : (console.warn("Missing attribute name '" + t + "={index}' on measured element."), -1);
  };
  this._measureElement = function (e, t) {
    var n;
    var r = s.indexFromElement(e);
    var i = s.measurementsCache[r];
    if (i) {
      var A = s.measureElementCache.get(i.key);
      if (!e.isConnected) {
        s.observer.unobserve(e);
        e === A && s.measureElementCache.$$delete(i.key);
        return;
      }
      A !== e && (A && s.observer.unobserve(A), s.observer.observe(e), s.measureElementCache.set(i.key, e));
      var o = s.options.measureElement(e, t, s);
      var a = o - (null != (n = s.itemSizeCache.get(i.key)) ? n : i.size);
      0 !== a && (i.start < s.scrollOffset && s._scrollToOffset(s.scrollOffset, {
        adjustments: s.scrollAdjustments += a,
        behavior: void 0
      }), s.pendingMeasuredCacheIndexes.push(r), s.itemSizeCache = new Map(s.itemSizeCache.set(i.key, o)), s.notify());
    }
  };
  this.measureElement = function (e) {
    e && s._measureElement(e, void 0);
  };
  this.getVirtualItems = ph(function () {
    return [s.getIndexes(), s.getMeasurements()];
  }, function (e, t) {
    for (n = [], r = 0, i = e.length, void 0; r < i; r++) {
      var n;
      var r;
      var i;
      var A = t[e[r]];
      n.push(A);
    }
    return n;
  }, {
    key: !1,
    debug: function () {
      return s.options.debug;
    }
  });
  this.getVirtualItemForOffset = function (e) {
    var t = s.getMeasurements();
    return q3(t[c(0, t.length - 1, function (e) {
      return q3(t[e]).start;
    }, e)]);
  };
  this.getOffsetForAlignment = function (e, t) {
    var n = s.getSize();
    "auto" === t && (t = e <= s.scrollOffset ? "start" : e >= s.scrollOffset + n ? "end" : "start");
    "start" === t || ("end" === t ? e -= n : "center" === t && (e -= n / 2));
    var r = s.options.horizontal ? "scrollWidth" : "scrollHeight";
    return Math.max(Math.min((s.scrollElement ? "document" in s.scrollElement ? s.scrollElement.document.documentElement[r] : s.scrollElement[r] : 0) - s.getSize(), e), 0);
  };
  this.getOffsetForIndex = function (e, t) {
    void 0 === t && (t = "auto");
    e = Math.max(0, Math.min(e, s.options.count - 1));
    var n = q3(s.getMeasurements()[e]);
    if ("auto" === t) {
      if (n.end >= s.scrollOffset + s.getSize() - s.options.scrollPaddingEnd) t = "end";else {
        if (!(n.start <= s.scrollOffset + s.options.scrollPaddingStart)) return [s.scrollOffset, t];
        t = "start";
      }
    }
    var r = "end" === t ? n.end + s.options.scrollPaddingEnd : n.start - s.options.scrollPaddingStart;
    return [s.getOffsetForAlignment(r, t), t];
  };
  this.isDynamicMode = function () {
    return s.measureElementCache.size > 0;
  };
  this.cancelScrollToIndex = function () {
    null !== s.scrollToIndexTimeoutId && (clearTimeout(s.scrollToIndexTimeoutId), s.scrollToIndexTimeoutId = null);
  };
  this.scrollToOffset = function (e, t) {
    var n = void 0 === t ? {} : t;
    var r = n.align;
    var i = n.behavior;
    s.cancelScrollToIndex();
    "smooth" === i && s.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    s._scrollToOffset(s.getOffsetForAlignment(e, void 0 === r ? "start" : r), {
      adjustments: void 0,
      behavior: i
    });
  };
  this.scrollToIndex = function (e, t) {
    var n = void 0 === t ? {} : t;
    var r = n.align;
    var A = n.behavior;
    e = Math.max(0, Math.min(e, s.options.count - 1));
    s.cancelScrollToIndex();
    "smooth" === A && s.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    var o = s.getOffsetForIndex(e, void 0 === r ? "auto" : r);
    var a = o[0];
    var l = o[1];
    s._scrollToOffset(a, {
      adjustments: void 0,
      behavior: A
    });
    "smooth" !== A && s.isDynamicMode() && (s.scrollToIndexTimeoutId = setTimeout(function () {
      if (s.scrollToIndexTimeoutId = null, s.measureElementCache.has(s.options.getItemKey(e))) {
        var t = s.getOffsetForIndex(e, l)[0];
        L0(t, s.scrollOffset) || s.scrollToIndex(e, {
          align: l,
          behavior: A
        });
      } else s.scrollToIndex(e, {
        align: l,
        behavior: A
      });
    }));
  };
  this.scrollBy = function (e, t) {
    var n = (void 0 === t ? {} : t).behavior;
    s.cancelScrollToIndex();
    "smooth" === n && s.isDynamicMode() && console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");
    s._scrollToOffset(s.scrollOffset + e, {
      adjustments: void 0,
      behavior: n
    });
  };
  this.getTotalSize = function () {
    var e;
    return ((null == (e = s.getMeasurements()[s.options.count - 1]) ? void 0 : e.end) || s.options.paddingStart) - s.options.scrollMargin + s.options.paddingEnd;
  };
  this._scrollToOffset = function (e, t) {
    var n = t.adjustments;
    var r = t.behavior;
    s.options.scrollToFn(e, {
      behavior: r,
      adjustments: n
    }, s);
  };
  this.measure = function () {
    s.itemSizeCache = new Map();
    s.notify();
  };
  this.setOptions(e);
  this.scrollRect = this.options.initialRect;
  this.scrollOffset = this.options.initialOffset;
  this.measurementsCache = this.options.initialMeasurementsCache;
  this.measurementsCache.forEach(function (e) {
    s.itemSizeCache.set(e.key, e.size);
  });
  this.maybeNotify();
};
var c = function (e, t, n, r) {
  for (; e <= t;) {
    var i = (e + t) / 2 | 0;
    var A = n(i);
    if (A < r) e = i + 1;else {
      if (!(A > r)) return i;
      t = i - 1;
    }
  }
  return e > 0 ? e - 1 : 0;
};
export const AO = $$a0;
export const Ox = $$u1;
export const T6 = $$s2;
export const YV = $$g3;
export const vp = $$o4;