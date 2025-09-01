var i = "NOT_FOUND";
function s(e) {
  var r;
  return {
    get: function (n) {
      return r && e(r.key, n) ? r.value : i;
    },
    put: function (e, n) {
      r = {
        key: e,
        value: n
      };
    },
    getEntries: function () {
      return r ? [r] : [];
    },
    clear: function () {
      r = void 0;
    }
  };
}
function o(e, r) {
  var n = [];
  function s(e) {
    var s = n.findIndex(function (n) {
      return r(e, n.key);
    });
    if (s > -1) {
      var o = n[s];
      s > 0 && (n.splice(s, 1), n.unshift(o));
      return o.value;
    }
    return i;
  }
  function o(r, o) {
    s(r) === i && (n.unshift({
      key: r,
      value: o
    }), n.length > e && n.pop());
  }
  return {
    get: s,
    put: o,
    getEntries: function () {
      return n;
    },
    clear: function () {
      n = [];
    }
  };
}
var a = function (e, r) {
  return e === r;
};
function h(e) {
  return function (r, n) {
    if (null === r || null === n || r.length !== n.length) return !1;
    for (i = r.length, s = 0, void 0; s < i; s++) {
      var i;
      var s;
      if (!e(r[s], n[s])) return !1;
    }
    return !0;
  };
}
export function $$d0(e, r) {
  var n = "object" == typeof r ? r : {
    equalityCheck: r
  };
  var d = n.equalityCheck;
  var p = void 0 === d ? a : d;
  var g = n.maxSize;
  var m = void 0 === g ? 1 : g;
  var v = n.resultEqualityCheck;
  var y = h(p);
  var b = 1 === m ? s(y) : o(m, y);
  function O() {
    var r = b.get(arguments);
    if (r === i) {
      if (r = e.apply(null, arguments), v) {
        var n = b.getEntries().find(function (e) {
          return v(e.value, r);
        });
        n && (r = n.value);
      }
      b.put(arguments, r);
    }
    return r;
  }
  O.clearCache = function () {
    return b.clear();
  };
  return O;
}
export const UI = $$d0;