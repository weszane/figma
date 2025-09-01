!function (e) {
  "use strict";

  var t;
  var i = "File format is not recognized.";
  var n = "Error while reading zip file.";
  var r = "Error while reading file data.";
  var a = "text/plain";
  try {
    t = 0 === new Blob([new DataView(new ArrayBuffer(0))]).size;
  } catch (e) {}
  function s() {
    this.crc = -1;
  }
  function o() {}
  function l(e, t) {
    var i;
    var n;
    n = new Uint8Array(i = new ArrayBuffer(e));
    t && n.set(t, 0);
    return {
      buffer: i,
      array: n,
      view: new DataView(i)
    };
  }
  function d() {}
  function c(e) {
    var t;
    var i = this;
    i.size = 0;
    i.init = function (n, r) {
      (t = new p(new Blob([e], {
        type: a
      }))).init(function () {
        i.size = t.size;
        n();
      }, r);
    };
    i.readUint8Array = function (e, i, n, r) {
      t.readUint8Array(e, i, n, r);
    };
  }
  function u(t) {
    var i;
    var n = this;
    n.size = 0;
    n.init = function (e) {
      for (var r = t.length; "=" == t.charAt(r - 1);) r--;
      i = t.indexOf(",") + 1;
      n.size = Math.floor((r - i) * .75);
      e();
    };
    n.readUint8Array = function (n, r, a) {
      var s;
      var o = l(r);
      var d = 4 * Math.floor(n / 3);
      var c = 4 * Math.ceil((n + r) / 3);
      var u = e.atob(t.substring(d + i, c + i));
      var p = n - 3 * Math.floor(d / 4);
      for (s = p; s < p + r; s++) o.array[s - p] = u.charCodeAt(s);
      a(o.array);
    };
  }
  function p(e) {
    var t = this;
    t.size = 0;
    t.init = function (i) {
      t.size = e.size;
      i();
    };
    t.readUint8Array = function (t, i, n, r) {
      var a = new FileReader();
      a.onload = function (e) {
        n(new Uint8Array(e.target.result));
      };
      a.onerror = r;
      try {
        a.readAsArrayBuffer(function (e, t, i) {
          if (t < 0 || i < 0 || t + i > e.size) throw RangeError("offset:" + t + ", length:" + i + ", size:" + e.size);
          return e.slice ? e.slice(t, t + i) : e.webkitSlice ? e.webkitSlice(t, t + i) : e.mozSlice ? e.mozSlice(t, t + i) : e.msSlice ? e.msSlice(t, t + i) : void 0;
        }(e, t, i));
      } catch (e) {
        r(e);
      }
    };
  }
  function m() {}
  function h(e) {
    var i;
    this.init = function (e) {
      i = new Blob([], {
        type: a
      });
      e();
    };
    this.writeUint8Array = function (e, n) {
      i = new Blob([i, t ? e : e.buffer], {
        type: a
      });
      n();
    };
    this.getData = function (t, n) {
      var r = new FileReader();
      r.onload = function (e) {
        t(e.target.result);
      };
      r.onerror = n;
      r.readAsText(i, e);
    };
  }
  function g(t) {
    var i = "";
    var n = "";
    this.init = function (e) {
      i += "data:" + (t || "") + ";base64,";
      e();
    };
    this.writeUint8Array = function (t, r) {
      var a;
      var s = n.length;
      var o = n;
      for (a = 0, n = ""; a < 3 * Math.floor((s + t.length) / 3) - s; a++) o += String.fromCharCode(t[a]);
      for (; a < t.length; a++) n += String.fromCharCode(t[a]);
      o.length > 2 ? i += e.btoa(o) : n = o;
      r();
    };
    this.getData = function (t) {
      t(i + e.btoa(n));
    };
  }
  function f(e) {
    var i;
    this.init = function (t) {
      i = new Blob([], {
        type: e
      });
      t();
    };
    this.writeUint8Array = function (n, r) {
      i = new Blob([i, t ? n : n.buffer], {
        type: e
      });
      r();
    };
    this.getData = function (e) {
      e(i);
    };
  }
  function _(e, t, i, n, r, a, s, o, l, d) {
    var c;
    var u;
    var p;
    var m = 0;
    var h = t.sn;
    function g() {
      e.removeEventListener("message", f, !1);
      o(u, p);
    }
    function f(t) {
      var i = t.data;
      var r = i.data;
      var o = i.error;
      if (o) {
        o.toString = function () {
          return "Error: " + this.message;
        };
        l(o);
        return;
      }
      if (i.sn === h) switch ("number" == typeof i.codecTime && (e.codecTime += i.codecTime), "number" == typeof i.crcTime && (e.crcTime += i.crcTime), i.type) {
        case "append":
          r ? (u += r.length, n.writeUint8Array(r, function () {
            _();
          }, d)) : _();
          break;
        case "flush":
          p = i.crc;
          r ? (u += r.length, n.writeUint8Array(r, function () {
            g();
          }, d)) : g();
          break;
        case "progress":
          s && s(c + i.loaded, a);
          break;
        case "importScripts":
        case "newTask":
        case "echo":
          break;
        default:
          console.warn("zip.js:launchWorkerProcess: unknown message: ", i);
      }
    }
    function _() {
      (c = 524288 * m) <= a ? i.readUint8Array(r + c, Math.min(524288, a - c), function (i) {
        s && s(c, a);
        var n = 0 === c ? t : {
          sn: h
        };
        n.type = "append";
        n.data = i;
        try {
          e.postMessage(n, [i.buffer]);
        } catch (t) {
          e.postMessage(n);
        }
        m++;
      }, l) : e.postMessage({
        sn: h,
        type: "flush"
      });
    }
    u = 0;
    e.addEventListener("message", f, !1);
    _();
  }
  function A(e, t, i, n, r, a, o, l, d, c) {
    var u;
    var p = 0;
    var m = 0;
    var h = "input" === a;
    var g = "output" === a;
    var f = new s();
    !function a() {
      var s;
      if ((u = 524288 * p) < r) t.readUint8Array(n + u, Math.min(524288, r - u), function (t) {
        var n;
        try {
          n = e.append(t, function (e) {
            o && o(u + e, r);
          });
        } catch (e) {
          d(e);
          return;
        }
        n ? (m += n.length, i.writeUint8Array(n, function () {
          p++;
          setTimeout(a, 1);
        }, c), g && f.append(n)) : (p++, setTimeout(a, 1));
        h && f.append(t);
        o && o(u, r);
      }, d);else {
        try {
          s = e.flush();
        } catch (e) {
          d(e);
          return;
        }
        s ? (g && f.append(s), m += s.length, i.writeUint8Array(s, function () {
          l(m, f.get());
        }, c)) : l(m, f.get());
      }
    }();
  }
  function y(t, i, n, r, a, s, l, d, c, u, p) {
    var m = "input";
    e.zip.useWebWorkers && l ? _(t, {
      sn: i,
      codecClass: "NOOP",
      crcType: m
    }, n, r, a, s, c, d, u, p) : A(new o(), n, r, a, s, m, c, d, u, p);
  }
  function b(e) {
    var t;
    var i;
    var n = "";
    var r = ["\xc7", "\xfc", "\xe9", "\xe2", "\xe4", "\xe0", "\xe5", "\xe7", "\xea", "\xeb", "\xe8", "\xef", "\xee", "\xec", "\xc4", "\xc5", "\xc9", "\xe6", "\xc6", "\xf4", "\xf6", "\xf2", "\xfb", "\xf9", "\xff", "\xd6", "\xdc", "\xf8", "\xa3", "\xd8", "\xd7", "\u0192", "\xe1", "\xed", "\xf3", "\xfa", "\xf1", "\xd1", "\xaa", "\xba", "\xbf", "\xae", "\xac", "\xbd", "\xbc", "\xa1", "\xab", "\xbb", "_", "_", "_", "\xa6", "\xa6", "\xc1", "\xc2", "\xc0", "\xa9", "\xa6", "\xa6", "+", "+", "\xa2", "\xa5", "+", "+", "-", "-", "+", "-", "+", "\xe3", "\xc3", "+", "+", "-", "-", "\xa6", "-", "+", "\xa4", "\xf0", "\xd0", "\xca", "\xcb", "\xc8", "i", "\xcd", "\xce", "\xcf", "+", "+", "_", "_", "\xa6", "\xcc", "_", "\xd3", "\xdf", "\xd4", "\xd2", "\xf5", "\xd5", "\xb5", "\xfe", "\xde", "\xda", "\xdb", "\xd9", "\xfd", "\xdd", "\xaf", "\xb4", "\xad", "\xb1", "_", "\xbe", "\xb6", "\xa7", "\xf7", "\xb8", "\xb0", "\xa8", "\xb7", "\xb9", "\xb3", "\xb2", "_", " "];
    for (t = 0; t < e.length; t++) (i = 255 & e.charCodeAt(t)) > 127 ? n += r[i - 128] : n += String.fromCharCode(i);
    return n;
  }
  function v(e) {
    return decodeURIComponent(escape(e));
  }
  function I(e) {
    var t;
    var i = "";
    for (t = 0; t < e.length; t++) i += String.fromCharCode(e[t]);
    return i;
  }
  function E(e, t, i, n, r) {
    if (e.version = t.view.getUint16(i, !0), e.bitFlag = t.view.getUint16(i + 2, !0), e.compressionMethod = t.view.getUint16(i + 4, !0), e.lastModDateRaw = t.view.getUint32(i + 6, !0), e.lastModDate = function (e) {
      var t = (0xffff0000 & e) >> 16;
      var i = 65535 & e;
      try {
        return new Date(1980 + ((65024 & t) >> 9), ((480 & t) >> 5) - 1, 31 & t, (63488 & i) >> 11, (2016 & i) >> 5, (31 & i) * 2, 0);
      } catch (e) {}
    }(e.lastModDateRaw), (1 & e.bitFlag) == 1) {
      r("File contains encrypted entry.");
      return;
    }
    if ((n || (8 & e.bitFlag) != 8) && (e.crc32 = t.view.getUint32(i + 10, !0), e.compressedSize = t.view.getUint32(i + 14, !0), e.uncompressedSize = t.view.getUint32(i + 18, !0)), 0xffffffff === e.compressedSize || 0xffffffff === e.uncompressedSize) {
      r("File is using Zip64 (4gb+ file size).");
      return;
    }
    e.filenameLength = t.view.getUint16(i + 22, !0);
    e.extraFieldLength = t.view.getUint16(i + 24, !0);
  }
  function x(e) {
    return unescape(encodeURIComponent(e));
  }
  function S(e) {
    var t;
    var i = [];
    for (t = 0; t < e.length; t++) i.push(e.charCodeAt(t));
    return i;
  }
  s.prototype.append = function (e) {
    for (t = 0 | this.crc, i = this.table, n = 0, r = 0 | e.length, void 0; n < r; n++) {
      var t;
      var i;
      var n;
      var r;
      t = t >>> 8 ^ i[(t ^ e[n]) & 255];
    }
    this.crc = t;
  };
  s.prototype.get = function () {
    return ~this.crc;
  };
  s.prototype.table = function () {
    var e;
    var t;
    var i;
    var n = [];
    for (e = 0; e < 256; e++) {
      for (t = 0, i = e; t < 8; t++) 1 & i ? i = i >>> 1 ^ 0xedb88320 : i >>>= 1;
      n[e] = i;
    }
    return n;
  }();
  o.prototype.append = function (e, t) {
    return e;
  };
  o.prototype.flush = function () {};
  c.prototype = new d();
  c.prototype.constructor = c;
  u.prototype = new d();
  u.prototype.constructor = u;
  p.prototype = new d();
  p.prototype.constructor = p;
  m.prototype.getData = function (e) {
    e(this.data);
  };
  h.prototype = new m();
  h.prototype.constructor = h;
  g.prototype = new m();
  g.prototype.constructor = g;
  f.prototype = new m();
  f.prototype.constructor = f;
  var w = {
    deflater: ["z-worker.js", "deflate.js"],
    inflater: ["z-worker.js", "inflate.js"]
  };
  function C(t, i, n) {
    if (null !== e.zip.workerScripts && null !== e.zip.workerScriptsPath) {
      n(Error("Either zip.workerScripts or zip.workerScriptsPath may be set, not both."));
      return;
    }
    if (e.zip.workerScripts) {
      var r;
      var a;
      if (!Array.isArray(s = e.zip.workerScripts[t])) {
        n(Error("zip.workerScripts." + t + " is not an array!"));
        return;
      }
      r = s;
      a = document.createElement("a");
      s = r.map(function (e) {
        a.href = e;
        return a.href;
      });
    } else (s = w[t].slice(0))[0] = (e.zip.workerScriptsPath || "") + s[0];
    var s;
    var o = new Worker(s[0]);
    function l(e) {
      o.terminate();
      n(e);
    }
    o.codecTime = o.crcTime = 0;
    o.postMessage({
      type: "importScripts",
      scripts: s.slice(1)
    });
    o.addEventListener("message", function e(t) {
      var r = t.data;
      if (r.error) {
        o.terminate();
        n(r.error);
        return;
      }
      "importScripts" === r.type && (o.removeEventListener("message", e), o.removeEventListener("error", l), i(o));
    });
    o.addEventListener("error", l);
  }
  function T(e) {
    console.error(e);
  }
  e.zip = {
    Reader: d,
    Writer: m,
    BlobReader: p,
    Data64URIReader: u,
    TextReader: c,
    BlobWriter: f,
    Data64URIWriter: g,
    TextWriter: h,
    createReader: function (t, a, s) {
      s = s || T;
      t.init(function () {
        !function (t, a, s) {
          var o = 0;
          function d() {}
          d.prototype.getData = function (n, a, d, c) {
            var u = this;
            function p(e, t) {
              var i;
              c && ((i = l(4)).view.setUint32(0, t), u.crc32 != i.view.getUint32(0)) ? s("CRC failed.") : n.getData(function (e) {
                a(e);
              });
            }
            function m(e) {
              s(e || r);
            }
            function h(e) {
              s(e || "Error while writing file data.");
            }
            t.readUint8Array(u.offset, 30, function (r) {
              var a;
              var g = l(r.length, r);
              if (0x504b0304 != g.view.getUint32(0)) {
                s(i);
                return;
              }
              E(u, g, 4, !1, s);
              a = u.offset + 30 + u.filenameLength + u.extraFieldLength;
              n.init(function () {
                if (0 === u.compressionMethod) y(u._worker, o++, t, n, a, u.compressedSize, c, p, d, m, h);else {
                  var i;
                  var r;
                  var s;
                  var l;
                  i = u._worker;
                  r = o++;
                  s = u.compressedSize;
                  l = c ? "output" : "none";
                  e.zip.useWebWorkers ? _(i, {
                    sn: r,
                    codecClass: "Inflater",
                    crcType: l
                  }, t, n, a, s, d, p, m, h) : A(new e.zip.Inflater(), t, n, a, s, l, d, p, m, h);
                }
              }, h);
            }, m);
          };
          var c = {
            getEntries: function (e) {
              var r = this._worker;
              !function (e) {
                if (t.size < 22) {
                  s(i);
                  return;
                }
                function r(i, r) {
                  t.readUint8Array(t.size - i, i, function (t) {
                    for (var i = t.length - 22; i >= 0; i--) if (80 === t[i] && 75 === t[i + 1] && 5 === t[i + 2] && 6 === t[i + 3]) {
                      e(new DataView(t.buffer, i, 22));
                      return;
                    }
                    r();
                  }, function () {
                    s(n);
                  });
                }
                r(22, function () {
                  r(Math.min(65558, t.size), function () {
                    s(i);
                  });
                });
              }(function (a) {
                var o;
                var c;
                if (o = a.getUint32(16, !0), c = a.getUint16(8, !0), o < 0 || o >= t.size) {
                  s(i);
                  return;
                }
                t.readUint8Array(o, t.size - o, function (t) {
                  var n;
                  var a;
                  var o;
                  var u;
                  var p = 0;
                  var m = [];
                  var h = l(t.length, t);
                  for (n = 0; n < c; n++) {
                    if ((a = new d())._worker = r, 0x504b0102 != h.view.getUint32(p)) {
                      s(i);
                      return;
                    }
                    E(a, h, p + 6, !0, s);
                    a.commentLength = h.view.getUint16(p + 32, !0);
                    a.directory = (16 & h.view.getUint8(p + 38)) == 16;
                    a.offset = h.view.getUint32(p + 42, !0);
                    o = I(h.array.subarray(p + 46, p + 46 + a.filenameLength));
                    a.filename = (2048 & a.bitFlag) == 2048 ? v(o) : b(o);
                    a.directory || "/" != a.filename.charAt(a.filename.length - 1) || (a.directory = !0);
                    u = I(h.array.subarray(p + 46 + a.filenameLength + a.extraFieldLength, p + 46 + a.filenameLength + a.extraFieldLength + a.commentLength));
                    a.comment = (2048 & a.bitFlag) == 2048 ? v(u) : b(u);
                    m.push(a);
                    p += 46 + a.filenameLength + a.extraFieldLength + a.commentLength;
                  }
                  e(m);
                }, function () {
                  s(n);
                });
              });
            },
            close: function (e) {
              this._worker && (this._worker.terminate(), this._worker = null);
              e && e();
            },
            _worker: null
          };
          e.zip.useWebWorkers ? C("inflater", function (e) {
            c._worker = e;
            a(c);
          }, function (e) {
            s(e);
          }) : a(c);
        }(t, a, s);
      }, s);
    },
    createWriter: function (t, i, n, a) {
      n = n || T;
      a = !!a;
      t.init(function () {
        !function (t, i, n, a) {
          var s = {};
          var o = [];
          var d = 0;
          var c = 0;
          function u(e) {
            n(e || "Error while writing zip file.");
          }
          function p(e) {
            n(e || r);
          }
          var m = {
            add: function (i, r, m, h, g) {
              var f;
              var b;
              var v;
              var I = this._worker;
              function E(e, i) {
                var n = l(16);
                d += e || 0;
                n.view.setUint32(0, 0x504b0708);
                void 0 !== i && (f.view.setUint32(10, i, !0), n.view.setUint32(4, i, !0));
                r && (n.view.setUint32(8, e, !0), f.view.setUint32(14, e, !0), n.view.setUint32(12, r.size, !0), f.view.setUint32(18, r.size, !0));
                t.writeUint8Array(n.array, function () {
                  d += 16;
                  m();
                }, u);
              }
              function w() {
                var m;
                var w;
                if (g = g || {}, i = i.trim(), g.directory && "/" != i.charAt(i.length - 1) && (i += "/"), s.hasOwnProperty(i)) {
                  n("File already exists.");
                  return;
                }
                b = S(x(i));
                o.push(i);
                m = function () {
                  if (r) {
                    if (a || 0 === g.level) y(I, c++, r, t, 0, r.size, !0, E, h, p, u);else {
                      var i;
                      var n;
                      var s;
                      i = c++;
                      n = g.level;
                      s = "input";
                      e.zip.useWebWorkers ? _(I, {
                        sn: i,
                        options: {
                          level: n
                        },
                        codecClass: "Deflater",
                        crcType: s
                      }, r, t, 0, r.size, h, E, p, u) : A(new e.zip.Deflater(), r, t, 0, r.size, s, h, E, p, u);
                    }
                  } else E();
                };
                v = g.lastModDate || new Date();
                f = l(26);
                s[i] = {
                  headerArray: f.array,
                  directory: g.directory,
                  filename: b,
                  offset: d,
                  comment: S(x(g.comment || ""))
                };
                f.view.setUint32(0, 0x14000808);
                g.version && f.view.setUint8(0, g.version);
                a || 0 === g.level || g.directory || f.view.setUint16(4, 2048);
                f.view.setUint16(6, (v.getHours() << 6 | v.getMinutes()) << 5 | v.getSeconds() / 2, !0);
                f.view.setUint16(8, (v.getFullYear() - 1980 << 4 | v.getMonth() + 1) << 5 | v.getDate(), !0);
                f.view.setUint16(22, b.length, !0);
                (w = l(30 + b.length)).view.setUint32(0, 0x504b0304);
                w.array.set(f.array, 4);
                w.array.set(b, 30);
                d += w.array.length;
                t.writeUint8Array(w.array, m, u);
              }
              r ? r.init(w, p) : w();
            },
            close: function (e) {
              this._worker && (this._worker.terminate(), this._worker = null);
              var i;
              var n;
              var r;
              var a = 0;
              var c = 0;
              for (n = 0; n < o.length; n++) a += 46 + (r = s[o[n]]).filename.length + r.comment.length;
              for (n = 0, i = l(a + 22); n < o.length; n++) {
                r = s[o[n]];
                i.view.setUint32(c, 0x504b0102);
                i.view.setUint16(c + 4, 5120);
                i.array.set(r.headerArray, c + 6);
                i.view.setUint16(c + 32, r.comment.length, !0);
                r.directory && i.view.setUint8(c + 38, 16);
                i.view.setUint32(c + 42, r.offset, !0);
                i.array.set(r.filename, c + 46);
                i.array.set(r.comment, c + 46 + r.filename.length);
                c += 46 + r.filename.length + r.comment.length;
              }
              i.view.setUint32(c, 0x504b0506);
              i.view.setUint16(c + 8, o.length, !0);
              i.view.setUint16(c + 10, o.length, !0);
              i.view.setUint32(c + 12, a, !0);
              i.view.setUint32(c + 16, d, !0);
              t.writeUint8Array(i.array, function () {
                t.getData(e);
              }, u);
            },
            _worker: null
          };
          e.zip.useWebWorkers ? C("deflater", function (e) {
            m._worker = e;
            i(m);
          }, function (e) {
            n(e);
          }) : i(m);
        }(t, i, n, a);
      }, n);
    },
    useWebWorkers: !0,
    workerScriptsPath: null,
    workerScripts: null
  };
}(window);