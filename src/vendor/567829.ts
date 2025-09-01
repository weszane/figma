var n;
"undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== require.g && require.g;
n = function () {
  "use strict";

  var t;
  var e = "3.7.7";
  var r = "function" == typeof Buffer;
  var n = "function" == typeof TextDecoder ? new TextDecoder() : void 0;
  var o = "function" == typeof TextEncoder ? new TextEncoder() : void 0;
  var i = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=");
  t = {};
  i.forEach(function (e, r) {
    return t[e] = r;
  });
  var a = t;
  var u = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  var c = String.fromCharCode.bind(String);
  var s = "function" == typeof Uint8Array.from ? Uint8Array.from.bind(Uint8Array) : function (t) {
    return new Uint8Array(Array.prototype.slice.call(t, 0));
  };
  var f = function (t) {
    return t.replace(/=/g, "").replace(/[+\/]/g, function (t) {
      return "+" == t ? "-" : "_";
    });
  };
  var l = function (t) {
    return t.replace(/[^A-Za-z0-9\+\/]/g, "");
  };
  var d = function (t) {
    for (a = "", u = t.length % 3, c = 0, void 0; c < t.length;) {
      var e;
      var r;
      var n;
      var o;
      var a;
      var u;
      var c;
      if ((r = t.charCodeAt(c++)) > 255 || (n = t.charCodeAt(c++)) > 255 || (o = t.charCodeAt(c++)) > 255) throw TypeError("invalid character found");
      a += i[(e = r << 16 | n << 8 | o) >> 18 & 63] + i[e >> 12 & 63] + i[e >> 6 & 63] + i[63 & e];
    }
    return u ? a.slice(0, u - 3) + "===".substring(u) : a;
  };
  var h = "function" == typeof btoa ? function (t) {
    return btoa(t);
  } : r ? function (t) {
    return Buffer.from(t, "binary").toString("base64");
  } : d;
  var p = r ? function (t) {
    return Buffer.from(t).toString("base64");
  } : function (t) {
    for (e = [], r = 0, n = t.length, void 0; r < n; r += 4096) {
      var e;
      var r;
      var n;
      e.push(c.apply(null, t.subarray(r, r + 4096)));
    }
    return h(e.join(""));
  };
  var g = function (t, e) {
    void 0 === e && (e = !1);
    return e ? f(p(t)) : p(t);
  };
  var b = function (t) {
    if (t.length < 2) {
      var e = t.charCodeAt(0);
      return e < 128 ? t : e < 2048 ? c(192 | e >>> 6) + c(128 | 63 & e) : c(224 | e >>> 12 & 15) + c(128 | e >>> 6 & 63) + c(128 | 63 & e);
    }
    var e = 65536 + (t.charCodeAt(0) - 55296) * 1024 + (t.charCodeAt(1) - 56320);
    return c(240 | e >>> 18 & 7) + c(128 | e >>> 12 & 63) + c(128 | e >>> 6 & 63) + c(128 | 63 & e);
  };
  var y = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var A = function (t) {
    return t.replace(y, b);
  };
  var x = r ? function (t) {
    return Buffer.from(t, "utf8").toString("base64");
  } : o ? function (t) {
    return p(o.encode(t));
  } : function (t) {
    return h(A(t));
  };
  var v = function (t, e) {
    void 0 === e && (e = !1);
    return e ? f(x(t)) : x(t);
  };
  var m = function (t) {
    return v(t, !0);
  };
  var S = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
  var U = function (t) {
    switch (t.length) {
      case 4:
        var e = ((7 & t.charCodeAt(0)) << 18 | (63 & t.charCodeAt(1)) << 12 | (63 & t.charCodeAt(2)) << 6 | 63 & t.charCodeAt(3)) - 65536;
        return c((e >>> 10) + 55296) + c((1023 & e) + 56320);
      case 3:
        return c((15 & t.charCodeAt(0)) << 12 | (63 & t.charCodeAt(1)) << 6 | 63 & t.charCodeAt(2));
      default:
        return c((31 & t.charCodeAt(0)) << 6 | 63 & t.charCodeAt(1));
    }
  };
  var w = function (t) {
    return t.replace(S, U);
  };
  var C = function (t) {
    if (t = t.replace(/\s+/g, ""), !u.test(t)) throw TypeError("malformed base64.");
    t += "==".slice(2 - (3 & t.length));
    for (o = "", i = 0, void 0; i < t.length;) {
      var e;
      var r;
      var n;
      var o;
      var i;
      e = a[t.charAt(i++)] << 18 | a[t.charAt(i++)] << 12 | (r = a[t.charAt(i++)]) << 6 | (n = a[t.charAt(i++)]);
      o += 64 === r ? c(e >> 16 & 255) : 64 === n ? c(e >> 16 & 255, e >> 8 & 255) : c(e >> 16 & 255, e >> 8 & 255, 255 & e);
    }
    return o;
  };
  var B = "function" == typeof atob ? function (t) {
    return atob(l(t));
  } : r ? function (t) {
    return Buffer.from(t, "base64").toString("binary");
  } : C;
  var L = r ? function (t) {
    return s(Buffer.from(t, "base64"));
  } : function (t) {
    return s(B(t).split("").map(function (t) {
      return t.charCodeAt(0);
    }));
  };
  var I = function (t) {
    return L(E(t));
  };
  var z = r ? function (t) {
    return Buffer.from(t, "base64").toString("utf8");
  } : n ? function (t) {
    return n.decode(L(t));
  } : function (t) {
    return w(B(t));
  };
  var E = function (t) {
    return l(t.replace(/[-_]/g, function (t) {
      return "-" == t ? "+" : "/";
    }));
  };
  var V = function (t) {
    return z(E(t));
  };
  var T = function (t) {
    return {
      value: t,
      enumerable: !1,
      writable: !0,
      configurable: !0
    };
  };
  var k = function () {
    var t = function (t, e) {
      return Object.defineProperty(String.prototype, t, T(e));
    };
    t("fromBase64", function () {
      return V(this);
    });
    t("toBase64", function (t) {
      return v(this, t);
    });
    t("toBase64URI", function () {
      return v(this, !0);
    });
    t("toBase64URL", function () {
      return v(this, !0);
    });
    t("toUint8Array", function () {
      return I(this);
    });
  };
  var P = function () {
    var t = function (t, e) {
      return Object.defineProperty(Uint8Array.prototype, t, T(e));
    };
    t("toBase64", function (t) {
      return g(this, t);
    });
    t("toBase64URI", function () {
      return g(this, !0);
    });
    t("toBase64URL", function () {
      return g(this, !0);
    });
  };
  var O = {
    version: e,
    VERSION: e,
    atob: B,
    atobPolyfill: C,
    btoa: h,
    btoaPolyfill: d,
    fromBase64: V,
    toBase64: v,
    encode: v,
    encodeURI: m,
    encodeURL: m,
    utob: A,
    btou: w,
    decode: V,
    isValid: function (t) {
      if ("string" != typeof t) return !1;
      var e = t.replace(/\s+/g, "").replace(/={0,2}$/, "");
      return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
    },
    fromUint8Array: g,
    toUint8Array: I,
    extendString: k,
    extendUint8Array: P,
    extendBuiltins: function () {
      k();
      P();
    }
  };
  O.Base64 = {};
  Object.keys(O).forEach(function (t) {
    return O.Base64[t] = O[t];
  });
  return O;
};
module.exports = n();