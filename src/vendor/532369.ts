import { nodebuffer } from "../vendor/82955";
import { getTypeOf, transformTo, extend, string2binary, isRegExp, checkSupport, arrayBuffer2Blob } from "../vendor/185149";
import o from "../vendor/124335";
import { LOCAL_FILE_HEADER, CENTRAL_FILE_HEADER, CENTRAL_DIRECTORY_END } from "../vendor/127762";
import h from "../vendor/205656";
import { decode, encode } from "../vendor/181617";
import { STORE, x as _$$x } from "../vendor/791097";
import g from "../vendor/379404";
import m from "../vendor/913772";
import { utf8encode, utf8decode } from "../vendor/837721";
import y from "../vendor/94832";
import b from "../vendor/922904";
var O = function (e) {
  if (e._data instanceof g && (e._data = e._data.getContent(), e.options.binary = !0, e.options.base64 = !1, "uint8array" === getTypeOf(e._data))) {
    var r = e._data;
    e._data = new Uint8Array(r.length);
    0 !== r.length && e._data.set(r, 0);
  }
  return e._data;
};
var x = function (e) {
  var r = O(e);
  return "string" === getTypeOf(r) ? !e.options.binary && nodebuffer ? m(r, "utf-8") : e.asBinary() : r;
};
var w = function (e) {
  var r = O(this);
  return null == r ? "" : (this.options.base64 && (r = decode(r)), r = e && this.options.binary ? D.utf8decode(r) : transformTo("string", r), e || this.options.binary || (r = transformTo("string", D.utf8encode(r))), r);
};
var k = function (e, r, n) {
  this.name = e;
  this.dir = n.dir;
  this.date = n.date;
  this.comment = n.comment;
  this.unixPermissions = n.unixPermissions;
  this.dosPermissions = n.dosPermissions;
  this._data = r;
  this.options = n;
  this._initialMetadata = {
    dir: n.dir,
    date: n.date
  };
};
k.prototype = {
  asText: function () {
    return w.call(this, !0);
  },
  asBinary: function () {
    return w.call(this, !1);
  },
  asNodeBuffer: function () {
    var e = x(this);
    return transformTo("nodebuffer", e);
  },
  asUint8Array: function () {
    var e = x(this);
    return transformTo("uint8array", e);
  },
  asArrayBuffer: function () {
    return this.asUint8Array().buffer;
  }
};
var _ = function (e, r) {
  var n;
  var i = "";
  for (n = 0; n < r; n++) {
    i += String.fromCharCode(255 & e);
    e >>>= 8;
  }
  return i;
};
var S = function (e) {
  !0 === (e = e || {}).base64 && (null === e.binary || void 0 === e.binary) && (e.binary = !0);
  (e = extend(e, h)).date = e.date || new Date();
  null !== e.compression && (e.compression = e.compression.toUpperCase());
  return e;
};
var E = function (e, r, n) {
  var i;
  var o = getTypeOf(r);
  if ("string" == typeof (n = S(n)).unixPermissions && (n.unixPermissions = parseInt(n.unixPermissions, 8)), n.unixPermissions && 16384 & n.unixPermissions && (n.dir = !0), n.dosPermissions && 16 & n.dosPermissions && (n.dir = !0), n.dir && (e = C(e)), n.createFolders && (i = A(e)) && T.call(this, i, !0), n.dir || null == r) {
    n.base64 = !1;
    n.binary = !1;
    r = null;
    o = null;
  } else if ("string" === o) n.binary && !n.base64 && !0 !== n.optimizedBinaryString && (r = string2binary(r));else {
    if (n.base64 = !1, n.binary = !0, !o && !(r instanceof g)) throw Error("The data of '" + e + "' is in an unsupported format !");
    "arraybuffer" === o && (r = transformTo("uint8array", r));
  }
  var a = new k(e, r, n);
  this.files[e] = a;
  return a;
};
var A = function (e) {
  "/" == e.slice(-1) && (e = e.substring(0, e.length - 1));
  var r = e.lastIndexOf("/");
  return r > 0 ? e.substring(0, r) : "";
};
var C = function (e) {
  "/" != e.slice(-1) && (e += "/");
  return e;
};
var T = function (e, r) {
  r = void 0 !== r && r;
  e = C(e);
  this.files[e] || E.call(this, e, null, {
    dir: !0,
    createFolders: r
  });
  return this.files[e];
};
var I = function (e, r, n) {
  var i;
  var a = new g();
  e._data instanceof g ? (a.uncompressedSize = e._data.uncompressedSize, a.crc32 = e._data.crc32, 0 === a.uncompressedSize || e.dir ? (r = STORE, a.compressedContent = "", a.crc32 = 0) : e._data.compressionMethod === r.magic ? a.compressedContent = e._data.getCompressedContent() : (i = e._data.getContent(), a.compressedContent = r.compress(transformTo(r.compressInputType, i), n))) : ((i = x(e)) && 0 !== i.length && !e.dir || (r = STORE, i = ""), a.uncompressedSize = i.length, a.crc32 = o(i), a.compressedContent = r.compress(transformTo(r.compressInputType, i), n));
  a.compressedSize = a.compressedContent.length;
  a.compressionMethod = r.magic;
  return a;
};
var P = function (e, r) {
  var n = e;
  e || (n = r ? 16893 : 33204);
  return (65535 & n) << 16;
};
var R = function (e, r) {
  return 63 & (e || 0);
};
var M = function (e, r, n, i, h, d) {
  n.compressedContent;
  var p;
  var g;
  var m;
  var y;
  var b = d !== utf8encode;
  var O = transformTo("string", d(r.name));
  var x = transformTo("string", utf8encode(r.name));
  var w = r.comment || "";
  var k = transformTo("string", d(w));
  var S = transformTo("string", utf8encode(w));
  var E = x.length !== r.name.length;
  var A = S.length !== w.length;
  var C = r.options;
  var T = "";
  var I = "";
  var M = "";
  m = r._initialMetadata.dir !== r.dir ? r.dir : C.dir;
  y = r._initialMetadata.date !== r.date ? r.date : C.date;
  var D = 0;
  var N = 0;
  m && (D |= 16);
  "UNIX" === h ? (N = 798, D |= P(r.unixPermissions, m)) : (N = 20, D |= R(r.dosPermissions, m));
  p = (y.getHours() << 6 | y.getMinutes()) << 5 | y.getSeconds() / 2;
  g = (y.getFullYear() - 1980 << 4 | y.getMonth() + 1) << 5 | y.getDate();
  E && (I = _(1, 1) + _(o(O), 4) + x, T += "up" + _(I.length, 2) + I);
  A && (M = _(1, 1) + _(this.crc32(k), 4) + S, T += "uc" + _(M.length, 2) + M);
  var $ = "";
  $ += "\n\0";
  $ += !b && (E || A) ? "\0\b" : "\0\0";
  $ += n.compressionMethod;
  $ += _(p, 2);
  $ += _(g, 2);
  $ += _(n.crc32, 4);
  $ += _(n.compressedSize, 4);
  $ += _(n.uncompressedSize, 4);
  $ += _(O.length, 2);
  $ += _(T.length, 2);
  return {
    fileRecord: LOCAL_FILE_HEADER + $ + O + T,
    dirRecord: CENTRAL_FILE_HEADER + _(N, 2) + $ + _(k.length, 2) + "\0\0\0\0" + _(D, 4) + _(i, 4) + O + T + k,
    compressedObject: n
  };
};
var D = {
  load: function (e, r) {
    throw Error("Load method is not defined. Is the file jszip-load.js included ?");
  },
  filter: function (e) {
    var r;
    var n;
    var i;
    var o;
    var a = [];
    for (r in this.files) {
      o = new k((i = this.files[r]).name, i._data, extend(i.options));
      n = r.slice(this.root.length, r.length);
      r.slice(0, this.root.length) === this.root && e(n, o) && a.push(o);
    }
    return a;
  },
  file: function (e, r, n) {
    if (1 == $$arguments.length) {
      if (!isRegExp(e)) return this.filter(function (r, n) {
        return !n.dir && r === e;
      })[0] || null;
      var i = e;
      return this.filter(function (e, r) {
        return !r.dir && i.test(e);
      });
    }
    e = this.root + e;
    E.call(this, e, r, n);
    return this;
  },
  folder: function (e) {
    if (!e) return this;
    if (isRegExp(e)) return this.filter(function (r, n) {
      return n.dir && e.test(r);
    });
    var r = this.root + e;
    var n = T.call(this, r);
    var i = this.clone();
    i.root = n.name;
    return i;
  },
  remove: function (e) {
    e = this.root + e;
    var r = this.files[e];
    if (r || ("/" != e.slice(-1) && (e += "/"), r = this.files[e]), r && !r.dir) delete this.files[e];else for (n = this.filter(function (r, n) {
      return n.name.slice(0, e.length) === e;
    }), i = 0, void 0; i < n.length; i++) {
      var n;
      var i;
      delete this.files[n[i].name];
    }
    return this;
  },
  generate: function (e) {
    e = extend(e || {}, {
      base64: !0,
      compression: "STORE",
      compressionOptions: null,
      type: "base64",
      platform: "DOS",
      comment: null,
      mimeType: "application/zip",
      encodeFileName: utf8encode
    });
    checkSupport(e.type);
    ("darwin" === e.platform || "freebsd" === e.platform || "linux" === e.platform || "sunos" === e.platform) && (e.platform = "UNIX");
    "win32" === e.platform && (e.platform = "DOS");
    var r;
    var n;
    var i = [];
    var o = 0;
    var h = 0;
    var g = transformTo("string", e.encodeFileName(e.comment || this.comment || ""));
    for (var m in this.files) {
      var O = this.files[m];
      var x = O.options.compression || e.compression.toUpperCase();
      var w = _$$x;
      if (!w) throw Error(x + " is not a valid compression method !");
      var k = O.options.compressionOptions || e.compressionOptions || {};
      var S = I.call(this, O, w, k);
      var E = M.call(this, m, O, S, o, e.platform, e.encodeFileName);
      o += E.fileRecord.length + S.compressedSize;
      h += E.dirRecord.length;
      i.push(E);
    }
    var A = "";
    A = CENTRAL_DIRECTORY_END + "\0\0\0\0" + _(i.length, 2) + _(i.length, 2) + _(h, 4) + _(o, 4) + _(g.length, 2) + g;
    var C = e.type.toLowerCase();
    for (n = 0, r = "uint8array" === C || "arraybuffer" === C || "blob" === C || "nodebuffer" === C ? new b(o + h + A.length) : new y(o + h + A.length); n < i.length; n++) {
      r.append(i[n].fileRecord);
      r.append(i[n].compressedObject.compressedContent);
    }
    for (n = 0; n < i.length; n++) r.append(i[n].dirRecord);
    r.append(A);
    var T = r.finalize();
    switch (e.type.toLowerCase()) {
      case "uint8array":
      case "arraybuffer":
      case "nodebuffer":
        return transformTo(e.type.toLowerCase(), T);
      case "blob":
        return arrayBuffer2Blob(transformTo("arraybuffer", T), e.mimeType);
      case "base64":
        return e.base64 ? encode(T) : T;
      default:
        return T;
    }
  },
  crc32: function (e, r) {
    return o(e, r);
  },
  utf8encode: function (e) {
    return transformTo("string", utf8encode(e));
  },
  utf8decode: function (e) {
    return utf8decode(e);
  }
};
module.exports = D;