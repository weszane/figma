var i;
var n;
var r;
n = [];
void 0 !== (r = "function" == typeof (i = function e() {
  "use strict";

  var t = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {};
  var i = !t.document && !!t.postMessage;
  var n = i && /blob:/i.test((t.location || {}).protocol);
  var r = {};
  var a = 0;
  var s = {};
  if (s.parse = function (i, n) {
    var o = (n = n || {}).dynamicTyping || !1;
    if (I(o) && (n.dynamicTypingFunction = o, o = {}), n.dynamicTyping = o, n.transform = !!I(n.transform) && n.transform, n.worker && s.WORKERS_SUPPORTED) {
      var l = function () {
        if (!s.WORKERS_SUPPORTED) return !1;
        var i;
        var n;
        i = t.URL || t.webkitURL || null;
        n = e.toString();
        var o = s.BLOB_URL || (s.BLOB_URL = i.createObjectURL(new Blob(["(", n, ")();"], {
          type: "text/javascript"
        })));
        var l = new t.Worker(o);
        l.onmessage = _;
        l.id = a++;
        r[l.id] = l;
        return l;
      }();
      l.userStep = n.step;
      l.userChunk = n.chunk;
      l.userComplete = n.complete;
      l.userError = n.error;
      n.step = I(n.step);
      n.chunk = I(n.chunk);
      n.complete = I(n.complete);
      n.error = I(n.error);
      delete n.worker;
      l.postMessage({
        input: i,
        config: n,
        workerId: l.id
      });
      return;
    }
    var h = null;
    return i === s.NODE_STREAM_INPUT && "undefined" == typeof PAPA_BROWSER_CONTEXT ? (h = new m(n)).getStream() : ("string" == typeof i ? h = n.download ? new d(n) : new u(n) : !0 === i.readable && I(i.read) && I(i.on) ? h = new p(n) : (t.File && i instanceof File || i instanceof Object) && (h = new c(n)), h.stream(i));
  }, s.unparse = function (e, t) {
    var i = !1;
    var n = !0;
    var r = ",";
    var a = "\r\n";
    var o = '"';
    var l = o + o;
    var d = !1;
    var c = null;
    var u = !1;
    (function () {
      if ("object" == typeof t) {
        if ("string" != typeof t.delimiter || s.BAD_DELIMITERS.filter(function (e) {
          return -1 !== t.delimiter.indexOf(e);
        }).length || (r = t.delimiter), ("boolean" == typeof t.quotes || "function" == typeof t.quotes || Array.isArray(t.quotes)) && (i = t.quotes), ("boolean" == typeof t.skipEmptyLines || "string" == typeof t.skipEmptyLines) && (d = t.skipEmptyLines), "string" == typeof t.newline && (a = t.newline), "string" == typeof t.quoteChar && (o = t.quoteChar), "boolean" == typeof t.header && (n = t.header), Array.isArray(t.columns)) {
          if (0 === t.columns.length) throw Error("Option columns is empty");
          c = t.columns;
        }
        void 0 !== t.escapeChar && (l = t.escapeChar + o);
        "boolean" == typeof t.escapeFormulae && (u = t.escapeFormulae);
      }
    })();
    var p = RegExp(g(o), "g");
    if ("string" == typeof e && (e = JSON.parse(e)), Array.isArray(e)) {
      if (!e.length || Array.isArray(e[0])) return m(null, e, d);
      if ("object" == typeof e[0]) return m(c || Object.keys(e[0]), e, d);
    } else if ("object" == typeof e) {
      "string" == typeof e.data && (e.data = JSON.parse(e.data));
      Array.isArray(e.data) && (e.fields || (e.fields = e.meta && e.meta.fields), e.fields || (e.fields = Array.isArray(e.data[0]) ? e.fields : "object" == typeof e.data[0] ? Object.keys(e.data[0]) : []), Array.isArray(e.data[0]) || "object" == typeof e.data[0] || (e.data = [e.data]));
      return m(e.fields || [], e.data || [], d);
    }
    throw Error("Unable to serialize unrecognized input");
    function m(e, t, i) {
      var s = "";
      "string" == typeof e && (e = JSON.parse(e));
      "string" == typeof t && (t = JSON.parse(t));
      var o = Array.isArray(e) && e.length > 0;
      var l = !Array.isArray(t[0]);
      if (o && n) {
        for (var d = 0; d < e.length; d++) {
          d > 0 && (s += r);
          s += h(e[d], d);
        }
        t.length > 0 && (s += a);
      }
      for (var c = 0; c < t.length; c++) {
        var u = o ? e.length : t[c].length;
        var p = !1;
        var m = o ? 0 === Object.keys(t[c]).length : 0 === t[c].length;
        if (i && !o && (p = "greedy" === i ? "" === t[c].join("").trim() : 1 === t[c].length && 0 === t[c][0].length), "greedy" === i && o) {
          for (g = [], f = 0, void 0; f < u; f++) {
            var g;
            var f;
            var _ = l ? e[f] : f;
            g.push(t[c][_]);
          }
          p = "" === g.join("").trim();
        }
        if (!p) {
          for (var A = 0; A < u; A++) {
            A > 0 && !m && (s += r);
            var y = o && l ? e[A] : A;
            s += h(t[c][y], A);
          }
          c < t.length - 1 && (!i || u > 0 && !m) && (s += a);
        }
      }
      return s;
    }
    function h(e, t) {
      if (null == e) return "";
      if (e.constructor === Date) return JSON.stringify(e).slice(1, 25);
      !0 === u && "string" == typeof e && null !== e.match(/^[=+\-@].*$/) && (e = "'" + e);
      var n = e.toString().replace(p, l);
      return "boolean" == typeof i && i || "function" == typeof i && i(e, t) || Array.isArray(i) && i[t] || function (e, t) {
        for (var i = 0; i < t.length; i++) if (e.indexOf(t[i]) > -1) return !0;
        return !1;
      }(n, s.BAD_DELIMITERS) || n.indexOf(r) > -1 || " " === n.charAt(0) || " " === n.charAt(n.length - 1) ? o + n + o : n;
    }
  }, s.RECORD_SEP = "\x1e", s.UNIT_SEP = "\x1f", s.BYTE_ORDER_MARK = "\uFEFF", s.BAD_DELIMITERS = ["\r", "\n", '"', s.BYTE_ORDER_MARK], s.WORKERS_SUPPORTED = !i && !!t.Worker, s.NODE_STREAM_INPUT = 1, s.LocalChunkSize = 0xa00000, s.RemoteChunkSize = 5242880, s.DefaultDelimiter = ",", s.Parser = f, s.ParserHandle = h, s.NetworkStreamer = d, s.FileStreamer = c, s.StringStreamer = u, s.ReadableStreamStreamer = p, "undefined" == typeof PAPA_BROWSER_CONTEXT && (s.DuplexStreamStreamer = m), t.jQuery) {
    var o = t.jQuery;
    o.fn.parse = function (e) {
      var i = e.config || {};
      var n = [];
      this.each(function (e) {
        if (!("INPUT" === o(this).prop("tagName").toUpperCase() && "file" === o(this).attr("type").toLowerCase() && t.FileReader) || !this.files || 0 === this.files.length) return !0;
        for (var r = 0; r < this.files.length; r++) n.push({
          file: this.files[r],
          inputElem: this,
          instanceConfig: o.extend({}, i)
        });
      });
      r();
      return this;
      function r() {
        if (0 === n.length) {
          I(e.complete) && e.complete();
          return;
        }
        var t = n[0];
        if (I(e.before)) {
          var i;
          var r;
          var l;
          var d;
          var c = e.before(t.file, t.inputElem);
          if ("object" == typeof c) {
            if ("abort" === c.action) {
              i = "AbortError";
              r = t.file;
              l = t.inputElem;
              d = c.reason;
              I(e.error) && e.error({
                name: i
              }, r, l, d);
              return;
            }
            if ("skip" === c.action) {
              a();
              return;
            }
            "object" == typeof c.config && (t.instanceConfig = o.extend(t.instanceConfig, c.config));
          } else if ("skip" === c) {
            a();
            return;
          }
        }
        var u = t.instanceConfig.complete;
        t.instanceConfig.complete = function (e) {
          I(u) && u(e, t.file, t.inputElem);
          a();
        };
        s.parse(t.file, t.instanceConfig);
      }
      function a() {
        n.splice(0, 1);
        r();
      }
    };
  }
  function l(e) {
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
      var t = b(e);
      t.chunkSize = parseInt(t.chunkSize);
      e.step || e.chunk || (t.chunkSize = null);
      this._handle = new h(t);
      this._handle.streamer = this;
      this._config = t;
    }).call(this, e);
    this.parseChunk = function (e, i) {
      if (this.isFirstChunk && I(this._config.beforeFirstChunk)) {
        var r = this._config.beforeFirstChunk(e);
        void 0 !== r && (e = r);
      }
      this.isFirstChunk = !1;
      this._halted = !1;
      var a = this._partialLine + e;
      this._partialLine = "";
      var o = this._handle.parse(a, this._baseIndex, !this._finished);
      if (this._handle.paused() || this._handle.aborted()) {
        this._halted = !0;
        return;
      }
      var l = o.meta.cursor;
      this._finished || (this._partialLine = a.substring(l - this._baseIndex), this._baseIndex = l);
      o && o.data && (this._rowCount += o.data.length);
      var d = this._finished || this._config.preview && this._rowCount >= this._config.preview;
      if (n) t.postMessage({
        results: o,
        workerId: s.WORKER_ID,
        finished: d
      });else if (I(this._config.chunk) && !i) {
        if (this._config.chunk(o, this._handle), this._handle.paused() || this._handle.aborted()) {
          this._halted = !0;
          return;
        }
        o = void 0;
        this._completeResults = void 0;
      }
      this._config.step || this._config.chunk || (this._completeResults.data = this._completeResults.data.concat(o.data), this._completeResults.errors = this._completeResults.errors.concat(o.errors), this._completeResults.meta = o.meta);
      !this._completed && d && I(this._config.complete) && (!o || !o.meta.aborted) && (this._config.complete(this._completeResults, this._input), this._completed = !0);
      d || o && o.meta.paused || this._nextChunk();
      return o;
    };
    this._sendError = function (e) {
      I(this._config.error) ? this._config.error(e) : n && this._config.error && t.postMessage({
        workerId: s.WORKER_ID,
        error: e,
        finished: !1
      });
    };
  }
  function d(e) {
    var t;
    (e = e || {}).chunkSize || (e.chunkSize = s.RemoteChunkSize);
    l.call(this, e);
    i ? this._nextChunk = function () {
      this._readChunk();
      this._chunkLoaded();
    } : this._nextChunk = function () {
      this._readChunk();
    };
    this.stream = function (e) {
      this._input = e;
      this._nextChunk();
    };
    this._readChunk = function () {
      if (this._finished) {
        this._chunkLoaded();
        return;
      }
      if (t = new XMLHttpRequest(), this._config.withCredentials && (t.withCredentials = this._config.withCredentials), i || (t.onload = v(this._chunkLoaded, this), t.onerror = v(this._chunkError, this)), t.open(this._config.downloadRequestBody ? "POST" : "GET", this._input, !i), this._config.downloadRequestHeaders) {
        var e = this._config.downloadRequestHeaders;
        for (var n in e) t.setRequestHeader(n, e[n]);
      }
      if (this._config.chunkSize) {
        var r = this._start + this._config.chunkSize - 1;
        t.setRequestHeader("Range", "bytes=" + this._start + "-" + r);
      }
      try {
        t.send(this._config.downloadRequestBody);
      } catch (e) {
        this._chunkError(e.message);
      }
      i && 0 === t.status && this._chunkError();
    };
    this._chunkLoaded = function () {
      if (4 === t.readyState) {
        var e;
        if (t.status < 200 || t.status >= 400) {
          this._chunkError();
          return;
        }
        this._start += this._config.chunkSize ? this._config.chunkSize : t.responseText.length;
        this._finished = !this._config.chunkSize || this._start >= (null === (e = t.getResponseHeader("Content-Range")) ? -1 : parseInt(e.substring(e.lastIndexOf("/") + 1)));
        this.parseChunk(t.responseText);
      }
    };
    this._chunkError = function (e) {
      var i = t.statusText || e;
      this._sendError(Error(i));
    };
  }
  function c(e) {
    (e = e || {}).chunkSize || (e.chunkSize = s.LocalChunkSize);
    l.call(this, e);
    var t;
    var i;
    var n = "undefined" != typeof FileReader;
    this.stream = function (e) {
      this._input = e;
      i = e.slice || e.webkitSlice || e.mozSlice;
      n ? ((t = new FileReader()).onload = v(this._chunkLoaded, this), t.onerror = v(this._chunkError, this)) : t = new FileReaderSync();
      this._nextChunk();
    };
    this._nextChunk = function () {
      this._finished || this._config.preview && !(this._rowCount < this._config.preview) || this._readChunk();
    };
    this._readChunk = function () {
      var e = this._input;
      if (this._config.chunkSize) {
        var r = Math.min(this._start + this._config.chunkSize, this._input.size);
        e = i.call(e, this._start, r);
      }
      var a = t.readAsText(e, this._config.encoding);
      n || this._chunkLoaded({
        target: {
          result: a
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
  function u(e) {
    var t;
    e = e || {};
    l.call(this, e);
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
  function p(e) {
    e = e || {};
    l.call(this, e);
    var t = [];
    var i = !0;
    var n = !1;
    this.pause = function () {
      l.prototype.pause.apply(this, arguments);
      this._input.pause();
    };
    this.resume = function () {
      l.prototype.resume.apply(this, arguments);
      this._input.resume();
    };
    this.stream = function (e) {
      this._input = e;
      this._input.on("data", this._streamData);
      this._input.on("end", this._streamEnd);
      this._input.on("error", this._streamError);
    };
    this._checkIsFinished = function () {
      n && 1 === t.length && (this._finished = !0);
    };
    this._nextChunk = function () {
      this._checkIsFinished();
      t.length ? this.parseChunk(t.shift()) : i = !0;
    };
    this._streamData = v(function (e) {
      try {
        t.push("string" == typeof e ? e : e.toString(this._config.encoding));
        i && (i = !1, this._checkIsFinished(), this.parseChunk(t.shift()));
      } catch (e) {
        this._streamError(e);
      }
    }, this);
    this._streamError = v(function (e) {
      this._streamCleanUp();
      this._sendError(e);
    }, this);
    this._streamEnd = v(function () {
      this._streamCleanUp();
      n = !0;
      this._streamData("");
    }, this);
    this._streamCleanUp = v(function () {
      this._input.removeListener("data", this._streamData);
      this._input.removeListener("end", this._streamEnd);
      this._input.removeListener("error", this._streamError);
    }, this);
  }
  function m(e) {
    var t = b(e);
    var i = !0;
    var n = !1;
    var r = [];
    var a = null;
    this._onCsvData = function (e) {
      var t = e.data;
      a.push(t) || this._handle.paused() || this._handle.pause();
    };
    this._onCsvComplete = function () {
      a.push(null);
    };
    t.step = v(this._onCsvData, this);
    t.complete = v(this._onCsvComplete, this);
    l.call(this, t);
    this._nextChunk = function () {
      n && 1 === r.length && (this._finished = !0);
      r.length ? r.shift()() : i = !0;
    };
    this._addToParseQueue = function (e, n) {
      r.push(v(function () {
        if (this.parseChunk("string" == typeof e ? e : e.toString(t.encoding)), I(n)) return n();
      }, this));
      i && (i = !1, this._nextChunk());
    };
    this._onRead = function () {
      this._handle.paused() && this._handle.resume();
    };
    this._onWrite = function (e, t, i) {
      this._addToParseQueue(e, i);
    };
    this._onWriteComplete = function () {
      n = !0;
      this._addToParseQueue("");
    };
    this.getStream = function () {
      return a;
    };
    (a = new Duplex({
      readableObjectMode: !0,
      decodeStrings: !1,
      read: v(this._onRead, this),
      write: v(this._onWrite, this)
    })).once("finish", v(this._onWriteComplete, this));
  }
  function h(e) {
    var t;
    var i;
    var n;
    var r = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/;
    var a = /^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/;
    var o = this;
    var l = 0;
    var d = 0;
    var c = !1;
    var u = !1;
    var p = [];
    var m = {
      data: [],
      errors: [],
      meta: {}
    };
    if (I(e.step)) {
      var h = e.step;
      e.step = function (t) {
        if (m = t, y()) A();else {
          if (A(), 0 === m.data.length) return;
          l += t.data.length;
          e.preview && l > e.preview ? i.abort() : (m.data = m.data[0], h(m, o));
        }
      };
    }
    function _(t) {
      return "greedy" === e.skipEmptyLines ? "" === t.join("").trim() : 1 === t.length && 0 === t[0].length;
    }
    function A() {
      if (m && n && (v("Delimiter", "UndetectableDelimiter", "Unable to auto-detect delimiting character; defaulted to '" + s.DefaultDelimiter + "'"), n = !1), e.skipEmptyLines) for (var t = 0; t < m.data.length; t++) _(m.data[t]) && m.data.splice(t--, 1);
      y() && function () {
        if (m) {
          if (Array.isArray(m.data[0])) {
            for (var t = 0; y() && t < m.data.length; t++) m.data[t].forEach(i);
            m.data.splice(0, 1);
          } else m.data.forEach(i);
        }
        function i(t, i) {
          I(e.transformHeader) && (t = e.transformHeader(t, i));
          p.push(t);
        }
      }();
      return function () {
        if (!m || !e.header && !e.dynamicTyping && !e.transform) return m;
        function t(t, i) {
          var n;
          var s = e.header ? {} : [];
          for (n = 0; n < t.length; n++) {
            var o = n;
            var l = t[n];
            e.header && (o = n >= p.length ? "__parsed_extra" : p[n]);
            e.transform && (l = e.transform(l, o));
            l = function (t, i) {
              if (e.dynamicTypingFunction && void 0 === e.dynamicTyping[t] && (e.dynamicTyping[t] = e.dynamicTypingFunction(t)), !0 === (e.dynamicTyping[t] || e.dynamicTyping)) return "true" === i || "TRUE" === i || "false" !== i && "FALSE" !== i && (function (e) {
                if (r.test(e)) {
                  var t = parseFloat(e);
                  if (t > -0x20000000000000 && t < 0x20000000000000) return !0;
                }
                return !1;
              }(i) ? parseFloat(i) : a.test(i) ? new Date(i) : "" === i ? null : i);
              return i;
            }(o, l);
            "__parsed_extra" === o ? (s[o] = s[o] || [], s[o].push(l)) : s[o] = l;
          }
          e.header && (n > p.length ? v("FieldMismatch", "TooManyFields", "Too many fields: expected " + p.length + " fields but parsed " + n, d + i) : n < p.length && v("FieldMismatch", "TooFewFields", "Too few fields: expected " + p.length + " fields but parsed " + n, d + i));
          return s;
        }
        var i = 1;
        !m.data.length || Array.isArray(m.data[0]) ? (m.data = m.data.map(t), i = m.data.length) : m.data = t(m.data, 0);
        e.header && m.meta && (m.meta.fields = p);
        d += i;
        return m;
      }();
    }
    function y() {
      return e.header && 0 === p.length;
    }
    function v(e, t, i, n) {
      var r = {
        type: e,
        code: t,
        message: i
      };
      void 0 !== n && (r.row = n);
      m.errors.push(r);
    }
    this.parse = function (r, a, o) {
      var l = e.quoteChar || '"';
      if (e.newline || (e.newline = function (e, t) {
        e = e.substring(0, 1048576);
        var i = RegExp(g(t) + "([^]*?)" + g(t), "gm");
        var n = (e = e.replace(i, "")).split("\r");
        var r = e.split("\n");
        var a = r.length > 1 && r[0].length < n[0].length;
        if (1 === n.length || a) return "\n";
        for (s = 0, o = 0, void 0; o < n.length; o++) {
          var s;
          var o;
          "\n" === n[o][0] && s++;
        }
        return s >= n.length / 2 ? "\r\n" : "\r";
      }(r, l)), n = !1, e.delimiter) I(e.delimiter) && (e.delimiter = e.delimiter(r), m.meta.delimiter = e.delimiter);else {
        var d = function (t, i, n, r, a) {
          var o;
          var l;
          var d;
          var c;
          a = a || [",", "	", "|", ";", s.RECORD_SEP, s.UNIT_SEP];
          for (var u = 0; u < a.length; u++) {
            var p = a[u];
            var m = 0;
            var h = 0;
            var g = 0;
            d = void 0;
            for (A = new f({
              comments: r,
              delimiter: p,
              newline: i,
              preview: 10
            }).parse(t), y = 0, void 0; y < A.data.length; y++) {
              var A;
              var y;
              if (n && _(A.data[y])) {
                g++;
                continue;
              }
              var b = A.data[y].length;
              if (h += b, void 0 === d) {
                d = b;
                continue;
              }
              b > 0 && (m += Math.abs(b - d), d = b);
            }
            A.data.length > 0 && (h /= A.data.length - g);
            (void 0 === l || m <= l) && (void 0 === c || h > c) && h > 1.99 && (l = m, o = p, c = h);
          }
          e.delimiter = o;
          return {
            successful: !!o,
            bestDelimiter: o
          };
        }(r, e.newline, e.skipEmptyLines, e.comments, e.delimitersToGuess);
        d.successful ? e.delimiter = d.bestDelimiter : (n = !0, e.delimiter = s.DefaultDelimiter);
        m.meta.delimiter = e.delimiter;
      }
      var u = b(e);
      e.preview && e.header && u.preview++;
      t = r;
      m = (i = new f(u)).parse(t, a, o);
      A();
      return c ? {
        meta: {
          paused: !0
        }
      } : m || {
        meta: {
          paused: !1
        }
      };
    };
    this.paused = function () {
      return c;
    };
    this.pause = function () {
      c = !0;
      i.abort();
      t = I(e.chunk) ? "" : t.substring(i.getCharIndex());
    };
    this.resume = function () {
      o.streamer._halted ? (c = !1, o.streamer.parseChunk(t, !0)) : setTimeout(o.resume, 3);
    };
    this.aborted = function () {
      return u;
    };
    this.abort = function () {
      u = !0;
      i.abort();
      m.meta.aborted = !0;
      I(e.complete) && e.complete(m);
      t = "";
    };
  }
  function g(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function f(e) {
    var t;
    var i = (e = e || {}).delimiter;
    var n = e.newline;
    var r = e.comments;
    var a = e.step;
    var o = e.preview;
    var l = e.fastMode;
    var d = t = void 0 === e.quoteChar ? '"' : e.quoteChar;
    if (void 0 !== e.escapeChar && (d = e.escapeChar), ("string" != typeof i || s.BAD_DELIMITERS.indexOf(i) > -1) && (i = ","), r === i) throw Error("Comment character same as delimiter");
    !0 === r ? r = "#" : ("string" != typeof r || s.BAD_DELIMITERS.indexOf(r) > -1) && (r = !1);
    "\n" !== n && "\r" !== n && "\r\n" !== n && (n = "\n");
    var c = 0;
    var u = !1;
    this.parse = function (e, s, p) {
      if ("string" != typeof e) throw Error("Input must be a string");
      var m = e.length;
      var h = i.length;
      var f = n.length;
      var _ = r.length;
      var A = I(a);
      c = 0;
      var y = [];
      var b = [];
      var v = [];
      var E = 0;
      if (!e) return F();
      if (l || !1 !== l && -1 === e.indexOf(t)) {
        for (x = e.split(n), S = 0, void 0; S < x.length; S++) {
          var x;
          var S;
          if (v = x[S], c += v.length, S !== x.length - 1) c += n.length;else if (p) break;
          if (!r || v.substring(0, _) !== r) {
            if (A) {
              if (y = [], P(v.split(i)), M(), u) return F();
            } else P(v.split(i));
            if (o && S >= o) {
              y = y.slice(0, o);
              return F(!0);
            }
          }
        }
        return F();
      }
      for (w = e.indexOf(i, c), C = e.indexOf(n, c), T = RegExp(g(d) + g(t), "g"), k = e.indexOf(t, c), void 0;;) {
        var w;
        var C;
        var T;
        var k;
        if (e[c] === t) {
          for (k = c, c++;;) {
            if (-1 === (k = e.indexOf(t, k + 1))) {
              p || b.push({
                type: "Quotes",
                code: "MissingQuotes",
                message: "Quoted field unterminated",
                row: y.length,
                index: c
              });
              return D();
            }
            if (k === m - 1) return D(e.substring(c, k).replace(T, t));
            if (t === d && e[k + 1] === d) {
              k++;
              continue;
            }
            if (t === d || 0 === k || e[k - 1] !== d) {
              -1 !== w && w < k + 1 && (w = e.indexOf(i, k + 1));
              -1 !== C && C < k + 1 && (C = e.indexOf(n, k + 1));
              var R = O(-1 === C ? w : Math.min(w, C));
              if (e.substr(k + 1 + R, h) === i) {
                v.push(e.substring(c, k).replace(T, t));
                c = k + 1 + R + h;
                e[k + 1 + R + h] !== t && (k = e.indexOf(t, c));
                w = e.indexOf(i, c);
                C = e.indexOf(n, c);
                break;
              }
              var N = O(C);
              if (e.substring(k + 1 + N, k + 1 + N + f) === n) {
                if (v.push(e.substring(c, k).replace(T, t)), L(k + 1 + N + f), w = e.indexOf(i, c), k = e.indexOf(t, c), A && (M(), u)) return F();
                if (o && y.length >= o) return F(!0);
                break;
              }
              b.push({
                type: "Quotes",
                code: "InvalidQuotes",
                message: "Trailing quote on quoted field is malformed",
                row: y.length,
                index: c
              });
              k++;
            }
          }
          continue;
        }
        if (r && 0 === v.length && e.substring(c, c + _) === r) {
          if (-1 === C) return F();
          c = C + f;
          C = e.indexOf(n, c);
          w = e.indexOf(i, c);
          continue;
        }
        if (-1 !== w && (w < C || -1 === C)) {
          v.push(e.substring(c, w));
          c = w + h;
          w = e.indexOf(i, c);
          continue;
        }
        if (-1 !== C) {
          if (v.push(e.substring(c, C)), L(C + f), A && (M(), u)) return F();
          if (o && y.length >= o) return F(!0);
          continue;
        }
        break;
      }
      return D();
      function P(e) {
        y.push(e);
        E = c;
      }
      function O(t) {
        var i = 0;
        if (-1 !== t) {
          var n = e.substring(k + 1, t);
          n && "" === n.trim() && (i = n.length);
        }
        return i;
      }
      function D(t) {
        p || (void 0 === t && (t = e.substring(c)), v.push(t), c = m, P(v), A && M());
        return F();
      }
      function L(t) {
        c = t;
        P(v);
        v = [];
        C = e.indexOf(n, c);
      }
      function F(e) {
        return {
          data: y,
          errors: b,
          meta: {
            delimiter: i,
            linebreak: n,
            aborted: u,
            truncated: !!e,
            cursor: E + (s || 0)
          }
        };
      }
      function M() {
        a(F());
        y = [];
        b = [];
      }
    };
    this.abort = function () {
      u = !0;
    };
    this.getCharIndex = function () {
      return c;
    };
  }
  function _(e) {
    var t = e.data;
    var i = r[t.workerId];
    var n = !1;
    if (t.error) i.userError(t.error, t.file);else if (t.results && t.results.data) {
      var a = {
        abort: function () {
          n = !0;
          A(t.workerId, {
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
      if (I(i.userStep)) {
        for (var s = 0; s < t.results.data.length && (i.userStep({
          data: t.results.data[s],
          errors: t.results.errors,
          meta: t.results.meta
        }, a), !n); s++);
        delete t.results;
      } else I(i.userChunk) && (i.userChunk(t.results, a, t.file), delete t.results);
    }
    t.finished && !n && A(t.workerId, t.results);
  }
  function A(e, t) {
    var i = r[e];
    I(i.userComplete) && i.userComplete(t);
    i.terminate();
    delete r[e];
  }
  function y() {
    throw Error("Not implemented.");
  }
  function b(e) {
    if ("object" != typeof e || null === e) return e;
    var t = Array.isArray(e) ? [] : {};
    for (var i in e) t[i] = b(e[i]);
    return t;
  }
  function v(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }
  function I(e) {
    return "function" == typeof e;
  }
  n && (t.onmessage = function (e) {
    var i = e.data;
    if (void 0 === s.WORKER_ID && i && (s.WORKER_ID = i.workerId), "string" == typeof i.input) t.postMessage({
      workerId: s.WORKER_ID,
      results: s.parse(i.input, i.config),
      finished: !0
    });else if (t.File && i.input instanceof File || i.input instanceof Object) {
      var n = s.parse(i.input, i.config);
      n && t.postMessage({
        workerId: s.WORKER_ID,
        results: n,
        finished: !0
      });
    }
  });
  d.prototype = Object.create(l.prototype);
  d.prototype.constructor = d;
  c.prototype = Object.create(l.prototype);
  c.prototype.constructor = c;
  u.prototype = Object.create(u.prototype);
  u.prototype.constructor = u;
  p.prototype = Object.create(l.prototype);
  p.prototype.constructor = p;
  "undefined" == typeof PAPA_BROWSER_CONTEXT && (m.prototype = Object.create(l.prototype), m.prototype.constructor = m);
  return s;
}) ? i.apply(exports, n) : i) && (module.exports = r);