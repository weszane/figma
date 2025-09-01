var i = function () {
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
var s = o(["", ""], ["", ""]);
function o(e, r) {
  return Object.freeze(Object.defineProperties(e, {
    raw: {
      value: Object.freeze(r)
    }
  }));
}
function a(e, r) {
  if (!(e instanceof r)) throw TypeError("Cannot call a class as a function");
}
let h = function () {
  function e() {
    for (r = this, n = $$arguments.length, i = Array(n), s = 0, void 0; s < n; s++) {
      var r;
      var n;
      var i;
      var s;
      i[s] = $$arguments[s];
    }
    a(this, e);
    this.tag = function (e) {
      for (n = $$arguments.length, i = Array(n > 1 ? n - 1 : 0), s = 1, void 0; s < n; s++) {
        var n;
        var i;
        var s;
        i[s - 1] = $$arguments[s];
      }
      return "function" == typeof e ? r.interimTag.bind(r, e) : "string" == typeof e ? r.transformEndResult(e) : (e = e.map(r.transformString.bind(r)), r.transformEndResult(e.reduce(r.processSubstitutions.bind(r, i))));
    };
    i.length > 0 && Array.isArray(i[0]) && (i = i[0]);
    this.transformers = i.map(function (e) {
      return "function" == typeof e ? e() : e;
    });
    return this.tag;
  }
  i(e, [{
    key: "interimTag",
    value: function (e, r) {
      for (n = $$arguments.length, i = Array(n > 2 ? n - 2 : 0), o = 2, void 0; o < n; o++) {
        var n;
        var i;
        var o;
        i[o - 2] = $$arguments[o];
      }
      return this.tag(s, e.apply(void 0, [r].concat(i)));
    }
  }, {
    key: "processSubstitutions",
    value: function (e, r, n) {
      var i = this.transformSubstitution(e.shift(), r);
      return "".concat(r, i, n);
    }
  }, {
    key: "transformString",
    value: function (e) {
      var r = function (e, r) {
        return r.onString ? r.onString(e) : e;
      };
      return this.transformers.reduce(r, e);
    }
  }, {
    key: "transformSubstitution",
    value: function (e, r) {
      var n = function (e, n) {
        return n.onSubstitution ? n.onSubstitution(e, r) : e;
      };
      return this.transformers.reduce(n, e);
    }
  }, {
    key: "transformEndResult",
    value: function (e) {
      var r = function (e, r) {
        return r.onEndResult ? r.onEndResult(e) : e;
      };
      return this.transformers.reduce(r, e);
    }
  }]);
  return e;
}();
var d = {
  separator: "",
  conjunction: "",
  serial: !1
};
let p = function () {
  var e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : d;
  return {
    onSubstitution: function (r, n) {
      if (Array.isArray(r)) {
        var i = r.length;
        var s = e.separator;
        var o = e.conjunction;
        var a = e.serial;
        var h = n.match(/(\n?[^\S\n]+)$/);
        if (r = h ? r.join(s + h[1]) : r.join(s + " "), o && i > 1) {
          var d = r.lastIndexOf(s);
          r = r.slice(0, d) + (a ? s : "") + " " + o + r.slice(d + 1);
        }
      }
      return r;
    }
  };
};
function g(e) {
  if (!Array.isArray(e)) return Array.from(e);
  for (r = 0, n = Array(e.length), void 0; r < e.length; r++) {
    var r;
    var n;
    n[r] = e[r];
  }
  return n;
}
let m = function () {
  var e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : "initial";
  return {
    onEndResult: function (r) {
      if ("initial" === e) {
        var n = r.match(/^[^\S\n]*(?=\S)/gm);
        var i = n && Math.min.apply(Math, g(n.map(function (e) {
          return e.length;
        })));
        if (i) {
          var s = RegExp("^.{" + i + "}", "gm");
          return r.replace(s, "");
        }
        return r;
      }
      if ("all" === e) return r.replace(/^[^\S\n]+/gm, "");
      throw Error("Unknown type: " + e);
    }
  };
};
let v = function () {
  var e = $$arguments.length > 0 && void 0 !== $$arguments[0] ? $$arguments[0] : "";
  return {
    onEndResult: function (r) {
      if ("" === e) return r.trim();
      if ("start" === (e = e.toLowerCase()) || "left" === e) return r.replace(/^\s*/, "");
      if ("end" === e || "right" === e) return r.replace(/\s*$/, "");
      throw Error("Side not supported: " + e);
    }
  };
};
new h(p({
  separator: ","
}), m, v);
new h(p({
  separator: ",",
  conjunction: "and"
}), m, v);
new h(p({
  separator: ",",
  conjunction: "or"
}), m, v);
let y = function (e) {
  return {
    onSubstitution: function (r, n) {
      if (null != e && "string" == typeof e) "string" == typeof r && r.includes(e) && (r = r.split(e));else throw Error("You need to specify a string character to split by.");
      return r;
    }
  };
};
var b = function (e) {
  return null != e && !Number.isNaN(e) && "boolean" != typeof e;
};
let O = function () {
  return {
    onSubstitution: function (e) {
      return Array.isArray(e) ? e.filter(b) : b(e) ? e : "";
    }
  };
};
new h(y("\n"), O, p, m, v);
let x = function (e, r) {
  return {
    onSubstitution: function (n, i) {
      if (null == e || null == r) throw Error("replaceSubstitutionTransformer requires at least 2 arguments.");
      return n?.toString().replace(e, r);
    }
  };
};
new h(y("\n"), p, m, v, x(/&/g, "&amp;"), x(/</g, "&lt;"), x(/>/g, "&gt;"), x(/"/g, "&quot;"), x(/'/g, "&#x27;"), x(/`/g, "&#x60;"));
let w = function (e, r) {
  return {
    onEndResult: function (n) {
      if (null == e || null == r) throw Error("replaceResultTransformer requires at least 2 arguments.");
      return n.replace(e, r);
    }
  };
};
let oneLine = new h(w(/(?:\n(?:\s*))+/g, " "), v);
new h(w(/(?:\n\s*)/g, ""), v);
new h(p({
  separator: ","
}), w(/(?:\s+)/g, " "), v);
new h(p({
  separator: ",",
  conjunction: "or"
}), w(/(?:\s+)/g, " "), v);
new h(p({
  separator: ",",
  conjunction: "and"
}), w(/(?:\s+)/g, " "), v);
new h(p, m, v);
new h(p, w(/(?:\s+)/g, " "), v);
new h(m, v);
new h(m("all"), v);
export const TN = oneLine;
