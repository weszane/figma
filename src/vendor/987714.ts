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
  var a = {
    parse: function (i, r) {
      var o;
      var h = (r = r || {}).dynamicTyping || !1;
      if (w(h) && (r.dynamicTypingFunction = h, h = {}), r.dynamicTyping = h, r.transform = !!w(r.transform) && r.transform, r.worker && a.WORKERS_SUPPORTED) {
        var c = function () {
          if (!a.WORKERS_SUPPORTED) return !1;
          var i;
          var r;
          i = t.URL || t.webkitURL || null;
          r = e.toString();
          var o = a.BLOB_URL || (a.BLOB_URL = i.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ", "(", r, ")();"], {
            type: "text/javascript"
          })));
          var h = new t.Worker(o);
          h.onmessage = g;
          h.id = s++;
          return n[h.id] = h;
        }();
        c.userStep = r.step;
        c.userChunk = r.chunk;
        c.userComplete = r.complete;
        c.userError = r.error;
        r.step = w(r.step);
        r.chunk = w(r.chunk);
        r.complete = w(r.complete);
        r.error = w(r.error);
        delete r.worker;
        return void c.postMessage({
          input: i,
          config: r,
          workerId: c.id
        });
      }
      var p = null;
      a.NODE_STREAM_INPUT;
      "string" == typeof i ? (i = 65279 === (o = i).charCodeAt(0) ? o.slice(1) : o, p = r.download ? new u(r) : new f(r)) : !0 === i.readable && w(i.read) && w(i.on) ? p = new d(r) : (t.File && i instanceof File || i instanceof Object) && (p = new l(r));
      return p.stream(i);
    },
    unparse: function (e, t) {
      var i = !1;
      var r = !0;
      var n = ",";
      var s = "\r\n";
      var o = '"';
      var h = o + o;
      var u = !1;
      var l = null;
      var f = !1;
      !function () {
        if ("object" == typeof t) {
          if ("string" != typeof t.delimiter || a.BAD_DELIMITERS.filter(function (e) {
            return -1 !== t.delimiter.indexOf(e);
          }).length || (n = t.delimiter), ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (i = t.quotes), "boolean" != typeof t.skipEmptyLines && "string" != typeof t.skipEmptyLines || (u = t.skipEmptyLines), "string" == typeof t.newline && (s = t.newline), "string" == typeof t.quoteChar && (o = t.quoteChar), "boolean" == typeof t.header && (r = t.header), Array.isArray(t.columns)) {
            if (0 === t.columns.length) throw Error("Option columns is empty");
            l = t.columns;
          }
          void 0 !== t.escapeChar && (h = t.escapeChar + o);
          ("boolean" == typeof t.escapeFormulae || t.escapeFormulae instanceof RegExp) && (f = t.escapeFormulae instanceof RegExp ? t.escapeFormulae : /^[=+\-@\t\r].*$/);
        }
      }();
      var d = RegExp(p(o), "g");
      if ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e)) {
        if (!e.length || Array.isArray(e[0])) return c(null, e, u);
        if ("object" == typeof e[0]) return c(l || Object.keys(e[0]), e, u);
      } else if ("object" == typeof e) {
        "string" == typeof e.data && (e.data = JSON.parse(e.data));
        Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields || l), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data]));
        return c(e.fields || [], e.data || [], u);
      }
      throw Error("Unable to serialize unrecognized input");
      function c(e, t, i) {
        var a = "";
        "string" == typeof e && (e = JSON.parse(e));
        "string" == typeof t && (t = JSON.parse(t));
        var o = Array.isArray(e) && 0 < e.length;
        var h = !Array.isArray(t[0]);
        if (o && r) {
          for (var u = 0; u < e.length; u++) {
            0 < u && (a += n);
            a += m(e[u], u);
          }
          0 < t.length && (a += s);
        }
        for (var l = 0; l < t.length; l++) {
          var f = o ? e.length : t[l].length;
          var d = !1;
          var c = o ? 0 === Object.keys(t[l]).length : 0 === t[l].length;
          if (i && !o && (d = "greedy" === i ? "" === t[l].join("").trim() : 1 === t[l].length && 0 === t[l][0].length), "greedy" === i && o) {
            for (p = [], g = 0, void 0; g < f; g++) {
              var p;
              var g;
              var _ = h ? e[g] : g;
              p.push(t[l][_]);
            }
            d = "" === p.join("").trim();
          }
          if (!d) {
            for (var y = 0; y < f; y++) {
              0 < y && !c && (a += n);
              var v = o && h ? e[y] : y;
              a += m(t[l][v], y);
            }
            l < t.length - 1 && (!i || 0 < f && !c) && (a += s);
          }
        }
        return a;
      }
      function m(e, t) {
        if (null == e) return "";
        if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
        var r = !1;
        f && "string" == typeof e && f.test(e) && (e = "'" + e, r = !0);
        var s = e.toString().replace(d, h);
        return (r = r || !0 === i || "function" == typeof i && i(e, t) || Array.isArray(i) && i[t] || function (e, t) {
          for (var i = 0; i < t.length; i++) if (-1 < e.indexOf(t[i])) return !0;
          return !1;
        }(s, a.BAD_DELIMITERS) || -1 < s.indexOf(n) || " " === s.charAt(0) || " " === s.charAt(s.length - 1)) ? o + s + o : s;
      }
    }
  };
  if (a.RECORD_SEP = "\x1e", a.UNIT_SEP = "\x1f", a.BYTE_ORDER_MARK = "\uFEFF", a.BAD_DELIMITERS = ["\r", "\n", '"', a.BYTE_ORDER_MARK], a.WORKERS_SUPPORTED = !i && !!t.Worker, a.NODE_STREAM_INPUT = 1, a.LocalChunkSize = 0xa00000, a.RemoteChunkSize = 5242880, a.DefaultDelimiter = ",", a.Parser = m, a.ParserHandle = c, a.NetworkStreamer = u, a.FileStreamer = l, a.StringStreamer = f, a.ReadableStreamStreamer = d, t.jQuery) {
    var o = t.jQuery;
    o.fn.parse = function (e) {
      var i = e.config || {};
      var r = [];
      this.each(function (e) {
        if (!("INPUT" === o(this).prop("tagName").toUpperCase() && "file" === o(this).attr("type").toLowerCase() && t.FileReader) || !this.files || 0 === this.files.length) return !0;
        for (var n = 0; n < this.files.length; n++) r.push({
          file: this.files[n],
          inputElem: this,
          instanceConfig: o.extend({}, i)
        });
      });
      n();
      return this;
      function n() {
        if (0 !== r.length) {
          var t;
          var i;
          var n;
          var h;
          var u = r[0];
          if (w(e.before)) {
            var l = e.before(u.file, u.inputElem);
            if ("object" == typeof l) {
              if ("abort" === l.action) {
                t = "AbortError";
                i = u.file;
                n = u.inputElem;
                h = l.reason;
                return void (w(e.error) && e.error({
                  name: t
                }, i, n, h));
              }
              if ("skip" === l.action) return void s();
              "object" == typeof l.config && (u.instanceConfig = o.extend(u.instanceConfig, l.config));
            } else if ("skip" === l) return void s();
          }
          var f = u.instanceConfig.complete;
          u.instanceConfig.complete = function (e) {
            w(f) && f(e, u.file, u.inputElem);
            s();
          };
          a.parse(u.file, u.instanceConfig);
        } else w(e.complete) && e.complete();
      }
      function s() {
        r.splice(0, 1);
        n();
      }
    };
  }
  function h(e) {
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
      this._handle = new c(t);
      (this._handle.streamer = this)._config = t;
    }).call(this, e);
    this.parseChunk = function (e, i) {
      if (this.isFirstChunk && w(this._config.beforeFirstChunk)) {
        var n = this._config.beforeFirstChunk(e);
        void 0 !== n && (e = n);
      }
      this.isFirstChunk = !1;
      this._halted = !1;
      var s = this._partialLine + e;
      this._partialLine = "";
      var o = this._handle.parse(s, this._baseIndex, !this._finished);
      if (!this._handle.paused() && !this._handle.aborted()) {
        var h = o.meta.cursor;
        this._finished || (this._partialLine = s.substring(h - this._baseIndex), this._baseIndex = h);
        o && o.data && (this._rowCount += o.data.length);
        var u = this._finished || this._config.preview && this._rowCount >= this._config.preview;
        if (r) t.postMessage({
          results: o,
          workerId: a.WORKER_ID,
          finished: u
        });else if (w(this._config.chunk) && !i) {
          if (this._config.chunk(o, this._handle), this._handle.paused() || this._handle.aborted()) return void (this._halted = !0);
          o = void 0;
          this._completeResults = void 0;
        }
        this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(o.data), this._completeResults.errors = this._completeResults.errors.concat(o.errors), this._completeResults.meta = o.meta);
        this._completed || !u || !w(this._config.complete) || o && o.meta.aborted || (this._config.complete(this._completeResults, this._input), this._completed = !0);
        u || o && o.meta.paused || this._nextChunk();
        return o;
      }
      this._halted = !0;
    };
    this._sendError = function (e) {
      w(this._config.error) ? this._config.error(e) : r && this._config.error && t.postMessage({
        workerId: a.WORKER_ID,
        error: e,
        finished: !1
      });
    };
  }
  function u(e) {
    var t;
    (e = e || {}).chunkSize || (e.chunkSize = a.RemoteChunkSize);
    h.call(this, e);
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
        if (t = new XMLHttpRequest(), this._config.withCredentials && (t.withCredentials = this._config.withCredentials), i || (t.onload = k(this._chunkLoaded, this), t.onerror = k(this._chunkError, this)), t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
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
  function l(e) {
    (e = e || {}).chunkSize || (e.chunkSize = a.LocalChunkSize);
    h.call(this, e);
    var t;
    var i;
    var r = "undefined" != typeof FileReader;
    this.stream = function (e) {
      this._input = e;
      i = e.slice || e.webkitSlice || e.mozSlice;
      r ? ((t = new FileReader()).onload = k(this._chunkLoaded, this), t.onerror = k(this._chunkError, this)) : t = new FileReaderSync();
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
  function f(e) {
    var t;
    h.call(this, e = e || {});
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
  function d(e) {
    h.call(this, e = e || {});
    var t = [];
    var i = !0;
    var r = !1;
    this.pause = function () {
      h.prototype.pause.apply(this, arguments);
      this._input.pause();
    };
    this.resume = function () {
      h.prototype.resume.apply(this, arguments);
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
    this._streamData = k(function (e) {
      try {
        t.push("string" == typeof e ? e : e.toString(this._config.encoding));
        i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
      } catch (e) {
        this._streamError(e);
      }
    }, this);
    this._streamError = k(function (e) {
      this._streamCleanUp();
      this._sendError(e);
    }, this);
    this._streamEnd = k(function () {
      this._streamCleanUp();
      r = !0;
      this._streamData("");
    }, this);
    this._streamCleanUp = k(function () {
      this._input.removeListener("data", this._streamData);
      this._input.removeListener("end", this._streamEnd);
      this._input.removeListener("error", this._streamError);
    }, this);
  }
  function c(e) {
    var t;
    var i;
    var r;
    var n = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/;
    var s = /^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/;
    var o = this;
    var h = 0;
    var u = 0;
    var l = !1;
    var f = !1;
    var d = [];
    var c = {
      data: [],
      errors: [],
      meta: {}
    };
    if (w(e.step)) {
      var g = e.step;
      e.step = function (t) {
        if (c = t, k()) y();else {
          if (y(), 0 === c.data.length) return;
          h += t.data.length;
          e.preview && h > e.preview ? i.abort() : (c.data = c.data[0], g(c, o));
        }
      };
    }
    function _(t) {
      return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length;
    }
    function y() {
      c && r && (b("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + a.DefaultDelimiter + "'"), r = !1);
      e.skipEmptyLines && (c.data = c.data.filter(function (e) {
        return !_(e);
      }));
      k() && function () {
        if (c) {
          if (Array.isArray(c.data[0])) {
            for (var t = 0; k() && t < c.data.length; t++) c.data[t].forEach(i);
            c.data.splice(0, 1);
          } else c.data.forEach(i);
        }
        function i(t, i) {
          w(e.transformHeader) && (t = e.transformHeader(t, i));
          d.push(t);
        }
      }();
      return function () {
        if (!c || !e.header && !e.dynamicTyping && !e.transform) return c;
        function t(t, i) {
          var r;
          var a = e.header ? {} : [];
          for (r = 0; r < t.length; r++) {
            var o;
            var h;
            var l = r;
            var f = t[r];
            e.header && (l = r >= d.length ? "__parsed_extra" : d[r]);
            e.transform && (f = e.transform(f, l));
            o = l;
            h = f;
            e.dynamicTypingFunction && void 0 === e.dynamicTyping[o] && (e.dynamicTyping[o] = e.dynamicTypingFunction(o));
            f = !0 === (e.dynamicTyping[o] || e.dynamicTyping) ? "true" === h || "TRUE" === h || "false" !== h && "FALSE" !== h && (!function (e) {
              if (n.test(e)) {
                var t = parseFloat(e);
                if (-0x20000000000000 < t && t < 0x20000000000000) return !0;
              }
              return !1;
            }(h) ? s.test(h) ? new Date(h) : "" === h ? null : h : parseFloat(h)) : h;
            "__parsed_extra" === l ? (a[l] = a[l] || [], a[l].push(f)) : a[l] = f;
          }
          e.header && (r > d.length ? b("FieldMismatch", "TooManyFields", "Too many fields: expected " + d.length + " fields but parsed " + r, u + i) : r < d.length && b("FieldMismatch", "TooFewFields", "Too few fields: expected " + d.length + " fields but parsed " + r, u + i));
          return a;
        }
        var i = 1;
        !c.data.length || Array.isArray(c.data[0]) ? (c.data = c.data.map(t), i = c.data.length) : c.data = t(c.data, 0);
        e.header && c.meta && (c.meta.fields = d);
        u += i;
        return c;
      }();
    }
    function k() {
      return e.header && 0 === d.length;
    }
    function b(e, t, i, r) {
      var n = {
        type: e,
        code: t,
        message: i
      };
      void 0 !== r && (n.row = r);
      c.errors.push(n);
    }
    this.parse = function (n, s, o) {
      var h = e.quoteChar || '"';
      if (e.newline || (e.newline = function (e, t) {
        e = e.substring(0, 1048576);
        var i = RegExp(p(t) + "([^]*?)" + p(t), "gm");
        var r = (e = e.replace(i, "")).split("\r");
        var n = e.split("\n");
        var s = 1 < n.length && n[0].length < r[0].length;
        if (1 === r.length || s) return "\n";
        for (a = 0, o = 0, void 0; o < r.length; o++) {
          var a;
          var o;
          "\n" === r[o][0] && a++;
        }
        return a >= r.length / 2 ? "\r\n" : "\r";
      }(n, h)), r = !1, e.delimiter) w(e.delimiter) && (e.delimiter = e.delimiter(n), c.meta.delimiter = e.delimiter);else {
        var u = function (t, i, r, n, s) {
          var o;
          var h;
          var u;
          var l;
          s = s || [",", "	", "|", ";", a.RECORD_SEP, a.UNIT_SEP];
          for (var f = 0; f < s.length; f++) {
            var d = s[f];
            var c = 0;
            var p = 0;
            var g = 0;
            u = void 0;
            for (y = new m({
              comments: n,
              delimiter: d,
              newline: i,
              preview: 10
            }).parse(t), v = 0, void 0; v < y.data.length; v++) {
              var y;
              var v;
              if (r && _(y.data[v])) g++;else {
                var k = y.data[v].length;
                p += k;
                void 0 !== u ? 0 < k && (c += Math.abs(k - u), u = k) : u = k;
              }
            }
            0 < y.data.length && (p /= y.data.length - g);
            (void 0 === h || c <= h) && (void 0 === l || l < p) && 1.99 < p && (h = c, o = d, l = p);
          }
          return {
            successful: !!(e.delimiter = o),
            bestDelimiter: o
          };
        }(n, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
        u.successful ? e.delimiter = u.bestDelimiter : (r = !0, e.delimiter = a.DefaultDelimiter);
        c.meta.delimiter = e.delimiter;
      }
      var f = v(e);
      e.preview && e.header && f.preview++;
      t = n;
      c = (i = new m(f)).parse(t, s, o);
      y();
      return l ? {
        meta: {
          paused: !0
        }
      } : c || {
        meta: {
          paused: !1
        }
      };
    };
    this.paused = function () {
      return l;
    };
    this.pause = function () {
      l = !0;
      i.abort();
      t = w(e.chunk) ? "" : t.substring(i.getCharIndex());
    };
    this.resume = function () {
      o.streamer._halted ? (l = !1, o.streamer.parseChunk(t, !0)) : setTimeout(o.resume, 3);
    };
    this.aborted = function () {
      return f;
    };
    this.abort = function () {
      f = !0;
      i.abort();
      c.meta.aborted = !0;
      w(e.complete) && e.complete(c);
      t = "";
    };
  }
  function p(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function m(e) {
    var t;
    var i = (e = e || {}).delimiter;
    var r = e.newline;
    var n = e.comments;
    var s = e.step;
    var o = e.preview;
    var h = e.fastMode;
    var u = t = void 0 === e.quoteChar || null === e.quoteChar ? '"' : e.quoteChar;
    if (void 0 !== e.escapeChar && (u = e.escapeChar), ("string" != typeof i || -1 < a.BAD_DELIMITERS.indexOf(i)) && (i = ","), n === i) throw Error("Comment character same as delimiter");
    !0 === n ? n = "#" : ("string" != typeof n || -1 < a.BAD_DELIMITERS.indexOf(n)) && (n = !1);
    "\n" !== r && "\r" !== r && "\r\n" !== r && (r = "\n");
    var l = 0;
    var f = !1;
    this.parse = function (a, d, c) {
      if ("string" != typeof a) throw Error("Input must be a string");
      var m = a.length;
      var g = i.length;
      var _ = r.length;
      var y = n.length;
      var v = w(s);
      var k = [];
      var b = [];
      var C = [];
      var E = l = 0;
      if (!a) return Q();
      if (e.header && !d) {
        var x = a.split(r)[0].split(i);
        var S = [];
        var R = {};
        var O = !1;
        for (var A in x) {
          var M = x[A];
          w(e.transformHeader) && (M = e.transformHeader(M, A));
          var T = M;
          var L = R[M] || 0;
          for (0 < L && (O = !0, T = M + "_" + L), R[M] = L + 1; S.includes(T);) T = T + "_" + L;
          S.push(T);
        }
        if (O) {
          var I = a.split(r);
          I[0] = S.join(i);
          a = I.join(r);
        }
      }
      if (h || !1 !== h && -1 === a.indexOf(t)) {
        for (W = a.split(r), D = 0, void 0; D < W.length; D++) {
          var W;
          var D;
          if (C = W[D], l += C.length, D !== W.length - 1) l += r.length;else if (c) break;
          if (!n || C.substring(0, y) !== n) {
            if (v) {
              if (k = [], q(C.split(i)), J(), f) return Q();
            } else q(C.split(i));
            if (o && o <= D) {
              k = k.slice(0, o);
              return Q(!0);
            }
          }
        }
        return Q();
      }
      for (z = a.indexOf(i, l), F = a.indexOf(r, l), U = RegExp(p(u) + p(t), "g"), P = a.indexOf(t, l), void 0;;) {
        var z;
        var F;
        var U;
        var P;
        if (a[l] !== t) {
          if (n && 0 === C.length && a.substring(l, l + y) === n) {
            if (-1 === F) return Q();
            l = F + _;
            F = a.indexOf(r, l);
            z = a.indexOf(i, l);
          } else if (-1 !== z && (z < F || -1 === F)) {
            C.push(a.substring(l, z));
            l = z + g;
            z = a.indexOf(i, l);
          } else {
            if (-1 === F) break;
            if (C.push(a.substring(l, F)), K(F + _), v && (J(), f)) return Q();
            if (o && k.length >= o) return Q(!0);
          }
        } else for (P = l, l++;;) {
          if (-1 === (P = a.indexOf(t, P + 1))) {
            c || b.push({
              type: "Quotes",
              code: "MissingQuotes",
              message: "Quoted field unterminated",
              row: k.length,
              index: l
            });
            return N();
          }
          if (P === m - 1) return N(a.substring(l, P).replace(U, t));
          if (t !== u || a[P + 1] !== u) {
            if (t === u || 0 === P || a[P - 1] !== u) {
              -1 !== z && z < P + 1 && (z = a.indexOf(i, P + 1));
              -1 !== F && F < P + 1 && (F = a.indexOf(r, P + 1));
              var j = H(-1 === F ? z : Math.min(z, F));
              if (a.substr(P + 1 + j, g) === i) {
                C.push(a.substring(l, P).replace(U, t));
                a[l = P + 1 + j + g] !== t && (P = a.indexOf(t, l));
                z = a.indexOf(i, l);
                F = a.indexOf(r, l);
                break;
              }
              var B = H(F);
              if (a.substring(P + 1 + B, P + 1 + B + _) === r) {
                if (C.push(a.substring(l, P).replace(U, t)), K(P + 1 + B + _), z = a.indexOf(i, l), P = a.indexOf(t, l), v && (J(), f)) return Q();
                if (o && k.length >= o) return Q(!0);
                break;
              }
              b.push({
                type: "Quotes",
                code: "InvalidQuotes",
                message: "Trailing quote on quoted field is malformed",
                row: k.length,
                index: l
              });
              P++;
            }
          } else P++;
        }
      }
      return N();
      function q(e) {
        k.push(e);
        E = l;
      }
      function H(e) {
        var t = 0;
        if (-1 !== e) {
          var i = a.substring(P + 1, e);
          i && "" === i.trim() && (t = i.length);
        }
        return t;
      }
      function N(e) {
        c || (void 0 === e && (e = a.substring(l)), C.push(e), l = m, q(C), v && J());
        return Q();
      }
      function K(e) {
        l = e;
        q(C);
        C = [];
        F = a.indexOf(r, l);
      }
      function Q(e) {
        return {
          data: k,
          errors: b,
          meta: {
            delimiter: i,
            linebreak: r,
            aborted: f,
            truncated: !!e,
            cursor: E + (d || 0)
          }
        };
      }
      function J() {
        s(Q());
        k = [];
        b = [];
      }
    };
    this.abort = function () {
      f = !0;
    };
    this.getCharIndex = function () {
      return l;
    };
  }
  function g(e) {
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
        pause: y,
        resume: y
      };
      if (w(i.userStep)) {
        for (var a = 0; a < t.results.data.length && (i.userStep({
          data: t.results.data[a],
          errors: t.results.errors,
          meta: t.results.meta
        }, s), !r); a++);
        delete t.results;
      } else w(i.userChunk) && (i.userChunk(t.results, s, t.file), delete t.results);
    }
    t.finished && !r && _(t.workerId, t.results);
  }
  function _(e, t) {
    var i = n[e];
    w(i.userComplete) && i.userComplete(t);
    i.terminate();
    delete n[e];
  }
  function y() {
    throw Error("Not implemented.");
  }
  function v(e) {
    if ("object" != typeof e || null === e) return e;
    var t = Array.isArray(e) ? [] : {};
    for (var i in e) t[i] = v(e[i]);
    return t;
  }
  function k(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }
  function w(e) {
    return "function" == typeof e;
  }
  r && (t.onmessage = function (e) {
    var i = e.data;
    if (void 0 === a.WORKER_ID && i && (a.WORKER_ID = i.workerId), "string" == typeof i.input) t.postMessage({
      workerId: a.WORKER_ID,
      results: a.parse(i.input, i.config),
      finished: !0
    });else if (t.File && i.input instanceof File || i.input instanceof Object) {
      var r = a.parse(i.input, i.config);
      r && t.postMessage({
        workerId: a.WORKER_ID,
        results: r,
        finished: !0
      });
    }
  });
  (u.prototype = Object.create(h.prototype)).constructor = u;
  (l.prototype = Object.create(h.prototype)).constructor = l;
  (f.prototype = Object.create(f.prototype)).constructor = f;
  (d.prototype = Object.create(h.prototype)).constructor = d;
  return a;
}) ? i.apply(exports, r) : i) && (module.exports = n);