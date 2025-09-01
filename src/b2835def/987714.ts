var i;
var r;
var n;
r = [];
void 0 !== (n = "function" == typeof (i = function e() {
  "use strict";

  var t = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {};
  var i = !t.document && !!t.postMessage;
  var r = t.IS_PAPA_WORKER || !1;
  var n = {};
  var s = 0;
  var l = {
    parse: function (i, r) {
      var a;
      var o = (r = r || {}).dynamicTyping || !1;
      if (b(o) && (r.dynamicTypingFunction = o, o = {}), r.dynamicTyping = o, r.transform = !!b(r.transform) && r.transform, r.worker && l.WORKERS_SUPPORTED) {
        var f = function () {
          if (!l.WORKERS_SUPPORTED) return !1;
          var i;
          var r;
          i = t.URL || t.webkitURL || null;
          r = e.toString();
          var a = l.BLOB_URL || (l.BLOB_URL = i.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", r, ")();"], {
            type: "text/javascript"
          })));
          var o = new t.Worker(a);
          o.onmessage = m;
          o.id = s++;
          return n[o.id] = o;
        }();
        f.userStep = r.step;
        f.userChunk = r.chunk;
        f.userComplete = r.complete;
        f.userError = r.error;
        r.step = b(r.step);
        r.chunk = b(r.chunk);
        r.complete = b(r.complete);
        r.error = b(r.error);
        delete r.worker;
        return void f.postMessage({
          input: i,
          config: r,
          workerId: f.id
        });
      }
      var p = null;
      l.NODE_STREAM_INPUT;
      "string" == typeof i ? (i = 65279 === (a = i).charCodeAt(0) ? a.slice(1) : a, p = r.download ? new d(r) : new c(r)) : !0 === i.readable && b(i.read) && b(i.on) ? p = new h(r) : (t.File && i instanceof File || i instanceof Object) && (p = new u(r));
      return p.stream(i);
    },
    unparse: function (e, t) {
      var i = !1;
      var r = !0;
      var n = ",";
      var s = "\r\n";
      var a = '"';
      var o = a + a;
      var d = !1;
      var u = null;
      var c = !1;
      !function () {
        if ("object" == typeof t) {
          if ("string" != typeof t.delimiter || l.BAD_DELIMITERS.filter(function (e) {
            return -1 !== t.delimiter.indexOf(e);
          }).length || (n = t.delimiter), ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (i = t.quotes), "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (d = t.skipEmptyLines), "string" == typeof t.newline && (s = t.newline), "string" == typeof t.quoteChar && (a = t.quoteChar), "boolean" == typeof t.header && (r = t.header), Array.isArray(t.columns)) {
            if (0 === t.columns.length) throw Error("Option columns is empty");
            u = t.columns;
          }
          void 0 !== t.escapeChar && (o = t.escapeChar + a);
          ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (c = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      }();
      var h = RegExp(p(a), "g");
      if ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e)) {
        if (!e.length || Array.isArray(e[0])) return f(null, e, d);
        if ("object" == typeof e[0]) return f(u || Object.keys(e[0]), e, d);
      } else if ("object" == typeof e) {
        "string" == typeof e.data && (e.data = JSON.parse(e.data));
        Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || u), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data]));
        return f(e.fields || [], e.data || [], d);
      }
      throw Error("Unable to serialize unrecognized input");
      function f(e, t, i) {
        var l = "";
        "string" == typeof e && (e = JSON.parse(e));
        "string" == typeof t && (t = JSON.parse(t));
        var a = Array.isArray(e) && 0 < e.length;
        var o = !Array.isArray(t[0]);
        if (a && r) {
          for (var d = 0; d < e.length; d++) {
            0 < d && (l += n);
            l += g(e[d], d);
          }
          0 < t.length && (l += s);
        }
        for (var u = 0; u < t.length; u++) {
          var c = a ? e.length : t[u].length;
          var h = !1;
          var f = a ? 0 === Object.keys(t[u]).length : 0 === t[u].length;
          if (i && !a && (h = "greedy" === i ? "" === t[u].join("").trim() : 1 === t[u].length && 0 === t[u][0].length), "greedy" === i && a) {
            for (p = [], m = 0, void 0; m < c; m++) {
              var p;
              var m;
              var _ = o ? e[m] : m;
              p.push(t[u][_]);
            }
            h = "" === p.join("").trim();
          }
          if (!h) {
            for (var x = 0; x < c; x++) {
              0 < x && !f && (l += n);
              var v = a && o ? e[x] : x;
              l += g(t[u][v], x);
            }
            u < t.length - 1 && (!i || 0 < c && !f) && (l += s);
          }
        }
        return l;
      }
      function g(e, t) {
        if (null == e) return "";
        if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
        var r = !1;
        c && "string" == typeof e && c.test(e) && (e = "'" + e, r = !0);
        var s = e.toString().replace(h, o);
        return (r = r || !0 === i || "function" == typeof i && i(e, t) || Array.isArray(i) && i[t] || function (e, t) {
          for (var i = 0; i < t.length; i++) if (-1 < e.indexOf(t[i])) return !0;
          return !1;
        }(s, l.BAD_DELIMITERS) || -1 < s.indexOf(n) || " " === s.charAt(0) || " " === s.charAt(s.length - 1)) ? a + s + a : s;
      }
    }
  };
  if (l.RECORD_SEP = "\x1e", l.UNIT_SEP = "\x1f", l.BYTE_ORDER_MARK = "\uFEFF", l.BAD_DELIMITERS = ["\r", "\n", '"', l.BYTE_ORDER_MARK], l.WORKERS_SUPPORTED = !i && !!t.Worker, l.NODE_STREAM_INPUT = 1, l.LocalChunkSize = 0xa00000, l.RemoteChunkSize = 5242880, l.DefaultDelimiter = ",", l.Parser = g, l.ParserHandle = f, l.NetworkStreamer = d, l.FileStreamer = u, l.StringStreamer = c, l.ReadableStreamStreamer = h, t.jQuery) {
    var a = t.jQuery;
    a.fn.parse = function (e) {
      var i = e.config || {};
      var r = [];
      this.each(function (e) {
        if (!("INPUT" === a(this).prop("tagName").toUpperCase() && "file" === a(this).attr("type").toLowerCase() && t.FileReader) || !this.files || 0 === this.files.length) return !0;
        for (var n = 0; n < this.files.length; n++) r.push({
          file: this.files[n],
          inputElem: this,
          instanceConfig: a.extend({}, i)
        });
      });
      n();
      return this;
      function n() {
        if (0 !== r.length) {
          var t;
          var i;
          var n;
          var o;
          var d = r[0];
          if (b(e.before)) {
            var u = e.before(d.file, d.inputElem);
            if ("object" == typeof u) {
              if ("abort" === u.action) {
                t = "AbortError";
                i = d.file;
                n = d.inputElem;
                o = u.reason;
                return void (b(e.error) && e.error({
                  name: t
                }, i, n, o));
              }
              if ("skip" === u.action) return void s();
              "object" == typeof u.config && (d.instanceConfig = a.extend(d.instanceConfig, u.config));
            } else if ("skip" === u) return void s();
          }
          var c = d.instanceConfig.complete;
          d.instanceConfig.complete = function (e) {
            b(c) && c(e, d.file, d.inputElem);
            s();
          };
          l.parse(d.file, d.instanceConfig);
        } else b(e.complete) && e.complete();
      }
      function s() {
        r.splice(0, 1);
        n();
      }
    };
  }
  function o(e) {
    this._handle = null;
    this._finished = !1;
    this._completed = !1;
    this._halted = !1;
    this._input = null;
    this._baseIndex = 0;
    this._partialLine = "";
    this._rowCount = 0;
    this._start = 0;
    this._nextChunk = null;
    this.isFirstChunk = !0;
    this._completeResults = {
      data: [],
      errors: [],
      meta: {}
    };
    (function (e) {
      var t = v(e);
      t.chunkSize = parseInt(t.chunkSize);
      e.step || e.chunk || (t.chunkSize = null);
      this._handle = new f(t);
      (this._handle.streamer = this)._config = t;
    }).call(this, e);
    this.parseChunk = function (e, i) {
      if (this.isFirstChunk && b(this._config.beforeFirstChunk)) {
        var n = this._config.beforeFirstChunk(e);
        void 0 !== n && (e = n);
      }
      this.isFirstChunk = !1;
      this._halted = !1;
      var s = this._partialLine + e;
      this._partialLine = "";
      var a = this._handle.parse(s, this._baseIndex, !this._finished);
      if (!this._handle.paused() && !this._handle.aborted()) {
        var o = a.meta.cursor;
        this._finished || (this._partialLine = s.substring(o - this._baseIndex), this._baseIndex = o);
        a && a.data && (this._rowCount += a.data.length);
        var d = this._finished || this._config.preview && this._rowCount >= this._config.preview;
        if (r) t.postMessage({
          results: a,
          workerId: l.WORKER_ID,
          finished: d
        });else if (b(this._config.chunk) && !i) {
          if (this._config.chunk(a, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
          a = void 0;
          this._completeResults = void 0;
        }
        this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(a.data), this._completeResults.errors = this._completeResults.errors.concat(a.errors), this._completeResults.meta = a.meta);
        this._completed || !d || !b(this._config.complete) || a && a.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0);
        d || a && a.meta.paused || this._nextChunk();
        return a;
      }
      this._halted = !0;
    };
    this._sendError = function (e) {
      b(this._config.error) ? this._config.error(e) : r && this._config.error && t.postMessage({
        workerId: l.WORKER_ID,
        error: e,
        finished: !1
      });
    };
  }
  function d(e) {
    var t;
    (e = e || {}).chunkSize || (e.chunkSize = l.RemoteChunkSize);
    o.call(this, e);
    this._nextChunk = i ? function () {
      this._readChunk();
      this._chunkLoaded();
    } : function () {
      this._readChunk();
    };
    this.stream = function (e) {
      this._input = e;
      this._nextChunk();
    };
    this._readChunk = function () {
      if (this._finished) this._chunkLoaded();else {
        if (t = new XMLHttpRequest(), this._config.withCredentials && (t.withCredentials = this._config.withCredentials), i || (t.onload = y(this._chunkLoaded, this), t.onerror = y(this._chunkError, this)), t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
          var e = this._config.downloadRequestHeaders;
          for (var r in e) t.setRequestHeader(r, e[r]);
        }
        if (this._config.chunkSize) {
          var n = this._start + this._config.chunkSize - 1;
          t.setRequestHeader("Range", "bytes=" + this._start + "-" + n);
        }
        try {
          t.send(this._config.downloadRequestBody);
        } catch (e) {
          this._chunkError(e.message);
        }
        i && 0 === t.status && this._chunkError();
      }
    };
    this._chunkLoaded = function () {
      var e;
      4 === t.readyState && (t.status < 200 || 400 <= t.status ? this._chunkError() : (this._start += this._config.chunkSize ? this._config.chunkSize : t.responseText.length, this._finished = !this._config.chunkSize || this._start >= (null === (e = t.getResponseHeader("Content-Range")) ? -1 : parseInt(e.substring(e.lastIndexOf("/") + 1))), this.parseChunk(t.responseText)));
    };
    this._chunkError = function (e) {
      var i = t.statusText || e;
      this._sendError(Error(i));
    };
  }
  function u(e) {
    (e = e || {}).chunkSize || (e.chunkSize = l.LocalChunkSize);
    o.call(this, e);
    var t;
    var i;
    var r = "undefined" != typeof FileReader;
    this.stream = function (e) {
      this._input = e;
      i = e.slice || e.webkitSlice || e.mozSlice;
      r ? ((t = new FileReader()).onload = y(this._chunkLoaded, this), t.onerror = y(this._chunkError, this)) : t = new FileReaderSync();
      this._nextChunk();
    };
    this._nextChunk = function () {
      this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
    };
    this._readChunk = function () {
      var e = this._input;
      if (this._config.chunkSize) {
        var n = Math.min(this._start + this._config.chunkSize, this._input.size);
        e = i.call(e, this._start, n);
      }
      var s = t.readAsText(e, this._config.encoding);
      r || this._chunkLoaded({
        target: {
          result: s
        }
      });
    };
    this._chunkLoaded = function (e) {
      this._start += this._config.chunkSize;
      this._finished = !this._config.chunkSize || this._start >= this._input.size;
      this.parseChunk(e.target.result);
    };
    this._chunkError = function () {
      this._sendError(t.error);
    };
  }
  function c(e) {
    var t;
    o.call(this, e = e || {});
    this.stream = function (e) {
      t = e;
      return this._nextChunk();
    };
    this._nextChunk = function () {
      if (!this._finished) {
        var e;
        var i = this._config.chunkSize;
        i ? (e = t.substring(0, i), t = t.substring(i)) : (e = t, t = "");
        this._finished = !t;
        return this.parseChunk(e);
      }
    };
  }
  function h(e) {
    o.call(this, e = e || {});
    var t = [];
    var i = !0;
    var r = !1;
    this.pause = function () {
      o.prototype.pause.apply(this, arguments);
      this._input.pause();
    };
    this.resume = function () {
      o.prototype.resume.apply(this, arguments);
      this._input.resume();
    };
    this.stream = function (e) {
      this._input = e;
      this._input.on("data", this._streamData);
      this._input.on("end", this._streamEnd);
      this._input.on("error", this._streamError);
    };
    this._checkIsFinished = function () {
      r && 1 === t.length && (this._finished = !0);
    };
    this._nextChunk = function () {
      this._checkIsFinished();
      t.length ? this.parseChunk(t.shift()) : i = !0;
    };
    this._streamData = y(function (e) {
      try {
        t.push("string" == typeof e ? e : e.toString(this._config.encoding));
        i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
      } catch (e) {
        this._streamError(e);
      }
    }, this);
    this._streamError = y(function (e) {
      this._streamCleanUp();
      this._sendError(e);
    }, this);
    this._streamEnd = y(function () {
      this._streamCleanUp();
      r = !0;
      this._streamData("");
    }, this);
    this._streamCleanUp = y(function () {
      this._input.removeListener("data", this._streamData);
      this._input.removeListener("end", this._streamEnd);
      this._input.removeListener("error", this._streamError);
    }, this);
  }
  function f(e) {
    var t;
    var i;
    var r;
    var n = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/;
    var s = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/;
    var a = this;
    var o = 0;
    var d = 0;
    var u = !1;
    var c = !1;
    var h = [];
    var f = {
      data: [],
      errors: [],
      meta: {}
    };
    if (b(e.step)) {
      var m = e.step;
      e.step = function (t) {
        if (f = t, y()) x();else {
          if (x(), 0 === f.data.length) return;
          o += t.data.length;
          e.preview && o > e.preview ? i.abort() : (f.data = f.data[0], m(f, a));
        }
      };
    }
    function _(t) {
      return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length;
    }
    function x() {
      f && r && (w("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + l.DefaultDelimiter + "'"), r = !1);
      e.skipEmptyLines && (f.data = f.data.filter(function (e) {
        return !_(e);
      }));
      y() && function () {
        if (f) {
          if (Array.isArray(f.data[0])) {
            for (var t = 0; y() && t < f.data.length; t++) f.data[t].forEach(i);
            f.data.splice(0, 1);
          } else f.data.forEach(i);
        }
        function i(t, i) {
          b(e.transformHeader) && (t = e.transformHeader(t, i));
          h.push(t);
        }
      }();
      return function () {
        if (!f || !e.header && !e.dynamicTyping && !e.transform) return f;
        function t(t, i) {
          var r;
          var l = e.header ? {} : [];
          for (r = 0; r < t.length; r++) {
            var a;
            var o;
            var u = r;
            var c = t[r];
            e.header && (u = r >= h.length ? "__parsed_extra" : h[r]);
            e.transform && (c = e.transform(c, u));
            a = u;
            o = c;
            e.dynamicTypingFunction && void 0 === e.dynamicTyping[a] && (e.dynamicTyping[a] = e.dynamicTypingFunction(a));
            c = !0 === (e.dynamicTyping[a] || e.dynamicTyping) ? "true" === o || "TRUE" === o || "false" !== o && "FALSE" !== o && (!function (e) {
              if (n.test(e)) {
                var t = parseFloat(e);
                if (-0x20000000000000 < t && t < 0x20000000000000) return !0;
              }
              return !1;
            }(o) ? s.test(o) ? new Date(o) : "" === o ? null : o : parseFloat(o)) : o;
            "__parsed_extra" === u ? (l[u] = l[u] || [], l[u].push(c)) : l[u] = c;
          }
          e.header && (r > h.length ? w("FieldMismatch", "TooManyFields", "Too many fields: expected " + h.length + " fields but parsed " + r, d + i) : r < h.length && w("FieldMismatch", "TooFewFields", "Too few fields: expected " + h.length + " fields but parsed " + r, d + i));
          return l;
        }
        var i = 1;
        !f.data.length || Array.isArray(f.data[0]) ? (f.data = f.data.map(t), i = f.data.length) : f.data = t(f.data, 0);
        e.header && f.meta && (f.meta.fields = h);
        d += i;
        return f;
      }();
    }
    function y() {
      return e.header && 0 === h.length;
    }
    function w(e, t, i, r) {
      var n = {
        type: e,
        code: t,
        message: i
      };
      void 0 !== r && (n.row = r);
      f.errors.push(n);
    }
    this.parse = function (n, s, a) {
      var o = e.quoteChar || '"';
      if (e.newline || (e.newline = function (e, t) {
        e = e.substring(0, 1048576);
        var i = RegExp(p(t) + "([^]*?)" + p(t), "gm");
        var r = (e = e.replace(i, "")).split("\r");
        var n = e.split("\n");
        var s = 1 < n.length && n[0].length < r[0].length;
        if (1 === r.length || s) return "\n";
        for (l = 0, a = 0, void 0; a < r.length; a++) {
          var l;
          var a;
          "\n" === r[a][0] && l++;
        }
        return l >= r.length / 2 ? "\r\n" : "\r";
      }(n, o)), r = !1, e.delimiter) b(e.delimiter) && (e.delimiter = e.delimiter(n), f.meta.delimiter = e.delimiter);else {
        var d = function (t, i, r, n, s) {
          var a;
          var o;
          var d;
          var u;
          s = s || [",", "	", "|", ";", l.RECORD_SEP, l.UNIT_SEP];
          for (var c = 0; c < s.length; c++) {
            var h = s[c];
            var f = 0;
            var p = 0;
            var m = 0;
            d = void 0;
            for (x = new g({
              comments: n,
              delimiter: h,
              newline: i,
              preview: 10
            }).parse(t), v = 0, void 0; v < x.data.length; v++) {
              var x;
              var v;
              if (r && _(x.data[v])) m++;else {
                var y = x.data[v].length;
                p += y;
                void 0 !== d ? 0 < y && (f += Math.abs(y - d), d = y) : d = y;
              }
            }
            0 < x.data.length && (p /= x.data.length - m);
            (void 0 === o || f <= o) && (void 0 === u || u < p) && 1.99 < p && (o = f, a = h, u = p);
          }
          return {
            successful: !!(e.delimiter = a),
            bestDelimiter: a
          };
        }(n, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
        d.successful ? e.delimiter = d.bestDelimiter : (r = !0, e.delimiter = l.DefaultDelimiter);
        f.meta.delimiter = e.delimiter;
      }
      var c = v(e);
      e.preview && e.header && c.preview++;
      t = n;
      f = (i = new g(c)).parse(t, s, a);
      x();
      return u ? {
        meta: {
          paused: !0
        }
      } : f || {
        meta: {
          paused: !1
        }
      };
    };
    this.paused = function () {
      return u;
    };
    this.pause = function () {
      u = !0;
      i.abort();
      t = b(e.chunk) ? "" : t.substring(i.getCharIndex());
    };
    this.resume = function () {
      a.streamer._halted ? (u = !1, a.streamer.parseChunk(t, !0)) : setTimeout(a.resume, 3);
    };
    this.aborted = function () {
      return c;
    };
    this.abort = function () {
      c = !0;
      i.abort();
      f.meta.aborted = !0;
      b(e.complete) && e.complete(f);
      t = "";
    };
  }
  function p(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function g(e) {
    var t;
    var i = (e = e || {}).delimiter;
    var r = e.newline;
    var n = e.comments;
    var s = e.step;
    var a = e.preview;
    var o = e.fastMode;
    var d = t = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar;
    if (void 0 !== e.escapeChar && (d = e.escapeChar), ("string" != typeof i || -1 < l.BAD_DELIMITERS.indexOf(i)) && (i = ","), n === i) throw Error("Comment character same as delimiter");
    !0 === n ? n = "#" : ("string" != typeof n || -1 < l.BAD_DELIMITERS.indexOf(n)) && (n = !1);
    "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
    var u = 0;
    var c = !1;
    this.parse = function (l, h, f) {
      if ("string" != typeof l) throw Error("Input must be a string");
      var g = l.length;
      var m = i.length;
      var _ = r.length;
      var x = n.length;
      var v = b(s);
      var y = [];
      var w = [];
      var j = [];
      var S = u = 0;
      if (!l) return Q();
      if (e.header && !h) {
        var k = l.split(r)[0].split(i);
        var E = [];
        var C = {};
        var A = !1;
        for (var I in k) {
          var T = k[I];
          b(e.transformHeader) && (T = e.transformHeader(T, I));
          var R = T;
          var O = C[T] || 0;
          for (0 < O && (A = !0, R = T + "_" + O), C[T] = O + 1; E.includes(R);) R = R + "_" + O;
          E.push(R);
        }
        if (A) {
          var M = l.split(r);
          M[0] = E.join(i);
          l = M.join(r);
        }
      }
      if (o || !1 !== o && -1 === l.indexOf(t)) {
        for (P = l.split(r), F = 0, void 0; F < P.length; F++) {
          var P;
          var F;
          if (j = P[F], u += j.length, F !== P.length - 1) u += r.length;else if (f) break;
          if (!n || j.substring(0, x) !== n) {
            if (v) {
              if (y = [], B(j.split(i)), W(), c) return Q();
            } else B(j.split(i));
            if (a && a <= F) {
              y = y.slice(0, a);
              return Q(!0);
            }
          }
        }
        return Q();
      }
      for (V = l.indexOf(i, u), D = l.indexOf(r, u), K = RegExp(p(d) + p(t), "g"), L = l.indexOf(t, u), void 0;;) {
        var V;
        var D;
        var K;
        var L;
        if (l[u] !== t) {
          if (n && 0 === j.length && l.substring(u, u + x) === n) {
            if (-1 === D) return Q();
            u = D + _;
            D = l.indexOf(r, u);
            V = l.indexOf(i, u);
          } else if (-1 !== V && (V < D || -1 === D)) {
            j.push(l.substring(u, V));
            u = V + m;
            V = l.indexOf(i, u);
          } else {
            if (-1 === D) break;
            if (j.push(l.substring(u, D)), G(D + _), v && (W(), c)) return Q();
            if (a && y.length >= a) return Q(!0);
          }
        } else for (L = u, u++;;) {
          if (-1 === (L = l.indexOf(t, L + 1))) {
            f || w.push({
              type: "Quotes",
              code: "MissingQuotes",
              message: "Quoted field unterminated",
              row: y.length,
              index: u
            });
            return q();
          }
          if (L === g - 1) return q(l.substring(u, L).replace(K, t));
          if (t !== d || l[L + 1] !== d) {
            if (t === d || 0 === L || l[L - 1] !== d) {
              -1 !== V && V < L + 1 && (V = l.indexOf(i, L + 1));
              -1 !== D && D < L + 1 && (D = l.indexOf(r, L + 1));
              var N = U(-1 === D ? V : Math.min(V, D));
              if (l.substr(L + 1 + N, m) === i) {
                j.push(l.substring(u, L).replace(K, t));
                l[u = L + 1 + N + m] !== t && (L = l.indexOf(t, u));
                V = l.indexOf(i, u);
                D = l.indexOf(r, u);
                break;
              }
              var z = U(D);
              if (l.substring(L + 1 + z, L + 1 + z + _) === r) {
                if (j.push(l.substring(u, L).replace(K, t)), G(L + 1 + z + _), V = l.indexOf(i, u), L = l.indexOf(t, u), v && (W(), c)) return Q();
                if (a && y.length >= a) return Q(!0);
                break;
              }
              w.push({
                type: "Quotes",
                code: "InvalidQuotes",
                message: "Trailing quote on quoted field is malformed",
                row: y.length,
                index: u
              });
              L++;
            }
          } else L++;
        }
      }
      return q();
      function B(e) {
        y.push(e);
        S = u;
      }
      function U(e) {
        var t = 0;
        if (-1 !== e) {
          var i = l.substring(L + 1, e);
          i && "" === i.trim() && (t = i.length);
        }
        return t;
      }
      function q(e) {
        f || (void 0 === e && (e = l.substring(u)), j.push(e), u = g, B(j), v && W());
        return Q();
      }
      function G(e) {
        u = e;
        B(j);
        j = [];
        D = l.indexOf(r, u);
      }
      function Q(e) {
        return {
          data: y,
          errors: w,
          meta: {
            delimiter: i,
            linebreak: r,
            aborted: c,
            truncated: !!e,
            cursor: S + (h || 0)
          }
        };
      }
      function W() {
        s(Q());
        y = [];
        w = [];
      }
    };
    this.abort = function () {
      c = !0;
    };
    this.getCharIndex = function () {
      return u;
    };
  }
  function m(e) {
    var t = e.data;
    var i = n[t.workerId];
    var r = !1;
    if (t.error) i.userError(t.error, t.file);else if (t.results && t.results.data) {
      var s = {
        abort: function () {
          r = !0;
          _(t.workerId, {
            data: [],
            errors: [],
            meta: {
              aborted: !0
            }
          });
        },
        pause: x,
        resume: x
      };
      if (b(i.userStep)) {
        for (var l = 0; l < t.results.data.length && (i.userStep({
          data: t.results.data[l],
          errors: t.results.errors,
          meta: t.results.meta
        }, s), !r); l++);
        delete t.results;
      } else b(i.userChunk) && (i.userChunk(t.results, s, t.file), delete t.results);
    }
    t.finished && !r && _(t.workerId, t.results);
  }
  function _(e, t) {
    var i = n[e];
    b(i.userComplete) && i.userComplete(t);
    i.terminate();
    delete n[e];
  }
  function x() {
    throw Error("Not implemented.");
  }
  function v(e) {
    if ("object" != typeof e || null === e) return e;
    var t = Array.isArray(e) ? [] : {};
    for (var i in e) t[i] = v(e[i]);
    return t;
  }
  function y(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }
  function b(e) {
    return "function" == typeof e;
  }
  r && (t.onmessage = function (e) {
    var i = e.data;
    if (void 0 === l.WORKER_ID && i && (l.WORKER_ID = i.workerId), "string" == typeof i.input) t.postMessage({
      workerId: l.WORKER_ID,
      results: l.parse(i.input, i.config),
      finished: !0
    });else if (t.File && i.input instanceof File || i.input instanceof Object) {
      var r = l.parse(i.input, i.config);
      r && t.postMessage({
        workerId: l.WORKER_ID,
        results: r,
        finished: !0
      });
    }
  });
  (d.prototype = Object.create(o.prototype)).constructor = d;
  (u.prototype = Object.create(o.prototype)).constructor = u;
  (c.prototype = Object.create(c.prototype)).constructor = c;
  (h.prototype = Object.create(o.prototype)).constructor = h;
  return l;
}) ? i.apply(exports, r) : i) && (module.exports = n);