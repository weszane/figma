import { nodebuffer, uint8array, arraybuffer } from "../vendor/82955";
import s, { hasOwnProperty, r as _$$r } from "../vendor/791097";
import o, { test } from "../vendor/913772";
function a(e) {
  return e;
}
function h(e, r) {
  for (var n = 0; n < e.length; ++n) r[n] = 255 & e.charCodeAt(n);
  return r;
}
function d(e) {
  var n = 65536;
  var i = [];
  var s = e.length;
  var a = exports.getTypeOf(e);
  var h = 0;
  var d = !0;
  try {
    switch (a) {
      case "uint8array":
        String.fromCharCode.apply(null, new Uint8Array(0));
        break;
      case "nodebuffer":
        String.fromCharCode.apply(null, o(0));
    }
  } catch (e) {
    d = !1;
  }
  if (!d) {
    for (p = "", g = 0, void 0; g < e.length; g++) {
      var p;
      var g;
      p += String.fromCharCode(e[g]);
    }
    return p;
  }
  for (; h < s && n > 1;) try {
    "array" === a || "nodebuffer" === a ? i.push(String.fromCharCode.apply(null, e.slice(h, Math.min(h + n, s)))) : i.push(String.fromCharCode.apply(null, e.subarray(h, Math.min(h + n, s))));
    h += n;
  } catch (e) {
    n = Math.floor(n / 2);
  }
  return i.join("");
}
function p(e, r) {
  for (var n = 0; n < e.length; n++) r[n] = e[n];
  return r;
}
exports.string2binary = function (e) {
  for (r = "", n = 0, void 0; n < e.length; n++) {
    var r;
    var n;
    r += String.fromCharCode(255 & e.charCodeAt(n));
  }
  return r;
};
exports.arrayBuffer2Blob = function (e, n) {
  exports.checkSupport("blob");
  n = n || "application/zip";
  try {
    return new Blob([e], {
      type: n
    });
  } catch (r) {
    try {
      var i = new (window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder)();
      i.append(e);
      return i.getBlob(n);
    } catch (e) {
      throw Error("Bug : can't construct the Blob.");
    }
  }
};
exports.applyFromCharCode = d;
var g = {};
g.string = {
  string: a,
  array: function (e) {
    return h(e, Array(e.length));
  },
  arraybuffer: function (e) {
    return g.string.uint8array(e).buffer;
  },
  uint8array: function (e) {
    return h(e, new Uint8Array(e.length));
  },
  nodebuffer: function (e) {
    return h(e, o(e.length));
  }
};
g.array = {
  string: d,
  array: a,
  arraybuffer: function (e) {
    return new Uint8Array(e).buffer;
  },
  uint8array: function (e) {
    return new Uint8Array(e);
  },
  nodebuffer: function (e) {
    return o(e);
  }
};
g.arraybuffer = {
  string: function (e) {
    return d(new Uint8Array(e));
  },
  array: function (e) {
    return p(new Uint8Array(e), Array(e.byteLength));
  },
  arraybuffer: a,
  uint8array: function (e) {
    return new Uint8Array(e);
  },
  nodebuffer: function (e) {
    return o(new Uint8Array(e));
  }
};
g.uint8array = {
  string: d,
  array: function (e) {
    return p(e, Array(e.length));
  },
  arraybuffer: function (e) {
    return e.buffer;
  },
  uint8array: a,
  nodebuffer: function (e) {
    return o(e);
  }
};
g.nodebuffer = {
  string: d,
  array: function (e) {
    return p(e, Array(e.length));
  },
  arraybuffer: function (e) {
    return g.nodebuffer.uint8array(e).buffer;
  },
  uint8array: function (e) {
    return p(e, new Uint8Array(e.length));
  },
  nodebuffer: a
};
exports.transformTo = function (e, n) {
  return (n || (n = ""), e) ? (exports.checkSupport(e), g[exports.getTypeOf(n)][e](n)) : n;
};
exports.getTypeOf = function (e) {
  return "string" == typeof e ? "string" : "[object Array]" === Object.prototype.toString.call(e) ? "array" : nodebuffer && test(e) ? "nodebuffer" : uint8array && e instanceof Uint8Array ? "uint8array" : arraybuffer && e instanceof ArrayBuffer ? "arraybuffer" : void 0;
};
exports.checkSupport = function (e) {
  if (!i[e.toLowerCase()]) throw Error(e + " is not supported by this browser");
};
exports.MAX_VALUE_16BITS = 65535;
exports.MAX_VALUE_32BITS = -1;
exports.pretty = function (e) {
  var r;
  var n;
  var i = "";
  for (n = 0; n < (e || "").length; n++) i += "\\x" + ((r = e.charCodeAt(n)) < 16 ? "0" : "") + r.toString(16).toUpperCase();
  return i;
};
exports.findCompression = function (e) {
  for (var r in s) if (hasOwnProperty(r) && _$$r.magic === e) return _$$r;
  return null;
};
exports.isRegExp = function (e) {
  return "[object RegExp]" === Object.prototype.toString.call(e);
};
exports.extend = function () {
  var e;
  var r;
  var n = {};
  for (e = 0; e < $$arguments.length; e++) for (r in $$arguments[e]) $$arguments[e].hasOwnProperty(r) && void 0 === n[r] && (n[r] = $$arguments[e][r]);
  return n;
};