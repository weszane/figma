import _require from "../vendor/914052";
import { StatsigUninitializedError, StatsigInvalidArgumentError } from "../vendor/45259";
var i = this && this.__createBinding || (Object.create ? function(e, r, n, i) {
  void 0 === i && (i = n);
  Object.defineProperty(e, i, {
    enumerable: !0,
    get: function() {
      return r[n];
    }
  });
} : function(e, r, n, i) {
  void 0 === i && (i = n);
  e[i] = r[n];
});
var s = this && this.__setModuleDefault || (Object.create ? function(e, r) {
  Object.defineProperty(e, "default", {
    enumerable: !0,
    value: r
  });
} : function(e, r) {
  e.$$default = r;
});
var o = this && this.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(r, e, n);
  s(r, e);
  return r;
};
var a = this && this.__awaiter || function(e, r, n, i) {
  function s(e) {
    return e instanceof n ? e : new n(function(r) {
      r(e);
    });
  }
  return new (n || (n = Promise))(function(n, o) {
    function a(e) {
      try {
        d(i.next(e));
      } catch (e) {
        o(e);
      }
    }
    function h(e) {
      try {
        d(i.$$throw(e));
      } catch (e) {
        o(e);
      }
    }
    function d(e) {
      e.done ? n(e.value) : s(e.value).then(a, h);
    }
    d((i = i.apply(e, r || [])).next());
  });
};
var h = this && this.__generator || function(e, r) {
  var n;
  var i;
  var s;
  var o;
  var a = {
    label: 0,
    sent: function() {
      if (1 & s[0]) throw s[1];
      return s[1];
    },
    trys: [],
    ops: []
  };
  o = {
    next: h(0),
    throw: h(1),
    return: h(2)
  };
  "function" == typeof Symbol && (o[Symbol.iterator] = function() {
    return this;
  });
  return o;
  function h(e) {
    return function(r) {
      return d([e, r]);
    };
  }
  function d(o) {
    if (n) throw TypeError("Generator is already executing.");
    for (; a;) try {
      if (n = 1, i && (s = 2 & o[0] ? i.$$return : o[0] ? i.$$throw || ((s = i.$$return) && s.call(i), 0) : i.next) && !(s = s.call(i, o[1])).done) return s;
      switch (i = 0, s && (o = [2 & o[0], s.value]), o[0]) {
        case 0:
        case 1:
          s = o;
          break;
        case 4:
          a.label++;
          return {
            value: o[1],
            done: !1
          };
        case 5:
          a.label++;
          i = o[1];
          o = [0];
          continue;
        case 7:
          o = a.ops.pop();
          a.trys.pop();
          continue;
        default:
          if (!(s = (s = a.trys).length > 0 && s[s.length - 1]) && (6 === o[0] || 2 === o[0])) {
            a = 0;
            continue;
          }
          if (3 === o[0] && (!s || o[1] > s[0] && o[1] < s[3])) {
            a.label = o[1];
            break;
          }
          if (6 === o[0] && a.label < s[1]) {
            a.label = s[1];
            s = o;
            break;
          }
          if (s && a.label < s[2]) {
            a.label = s[2];
            a.ops.push(o);
            break;
          }
          s[2] && a.ops.pop();
          a.trys.pop();
          continue;
      }
      o = r.call(e, a);
    } catch (e) {
      o = [6, e];
      i = 0;
    } finally {
      n = s = 0;
    }
    if (5 & o[0]) throw o[1];
    return {
      value: o[0] ? o[1] : void 0,
      done: !0
    };
  }
};
exports.ExceptionEndpoint = void 0;
var p = o(_require);
exports.ExceptionEndpoint = "https://statsigapi.net/v1/sdk_exception";
var g = function() {
  function e(e, r) {
    void 0 === r && (r = !1);
    this.sdkKey = e;
    this.seen = new Set();
    r || 0 !== Math.floor(1e4 * Math.random()) || (this.diagnostics = new p.$$default("error_boundary", 30));
  }
  e.prototype.setStatsigMetadata = function(e) {
    this.statsigMetadata = e;
  };
  e.prototype.swallow = function(e, r, n) {
    void 0 === n && (n = {});
    this.capture(e, r, function() { }, n);
  };
  e.prototype.capture = function(e, r, n, i) {
    var s = this;
    var o = void 0 === i ? {} : i;
    var a = o.getExtraData;
    var h = o.diagnosticsKey;
    var d = -1;
    try {
      d = this.beginMarker(h);
      var p = r();
      var g = !0;
      if (p instanceof Promise) return p.catch(function(r) {
        g = !1;
        return s.onCaught(e, r, n, a);
      }).then(function(e) {
        s.endMarker(h, g, d);
        return e;
      });
      this.endMarker(h, !0, d);
      return p;
    } catch (r) {
      this.endMarker(h, !1, d);
      return this.onCaught(e, r, n, a);
    }
  };
  e.prototype.logError = function(e, n, i) {
    var s = this;
    (function() {
      return a(s, void 0, void 0, function() {
        var s;
        var o;
        var a;
        var d;
        var p;
        var g;
        var m;
        var v;
        var y;
        return h(this, function(h) {
          switch (h.label) {
            case 0:
              if (h.trys.push([0, 4, , 5]), "function" != typeof i) return [3, 2];
              return [4, i()];
            case 1:
              o = h.sent();
              return [3, 3];
            case 2:
              o = null;
              h.label = 3;
            case 3:
              if (s = o, p = (d = (a = null != n ? n : Error("[Statsig] Error was empty")) instanceof Error) ? a.name : "No Name", this.seen.has(p)) return [2];
              this.seen.add(p);
              m = JSON.stringify({
                tag: e,
                exception: p,
                info: d ? a.stack : this.getDescription(a),
                statsigMetadata: g = null !== (y = this.statsigMetadata) && void 0 !== y ? y : {},
                extra: null != s ? s : {}
              });
              return [2, fetch(exports.ExceptionEndpoint, {
                method: "POST",
                headers: {
                  "STATSIG-API-KEY": this.sdkKey,
                  "STATSIG-SDK-TYPE": String(g.sdkType),
                  "STATSIG-SDK-VERSION": String(g.sdkVersion),
                  "Content-Type": "application/json",
                  "Content-Length": "" + m.length
                },
                body: m
              })];
            case 4:
              v = h.sent();
              return [3, 5];
            case 5:
              return [2];
          }
        });
      });
    })().catch(function() { });
  };
  e.prototype.getDiagnostics = function() {
    var e;
    return null !== (e = this.diagnostics) && void 0 !== e ? e : null;
  };
  e.prototype.beginMarker = function(e) {
    if (void 0 === e && (e = null), !e || !this.diagnostics) return -1;
    var r = this.diagnostics.getCount();
    return this.diagnostics.mark(e, p.DiagnosticsEvent.START, e + "_" + r) ? r : -1;
  };
  e.prototype.endMarker = function(e, r, n) {
    void 0 === e && (e = null);
    e && this.diagnostics && -1 !== n && this.diagnostics.mark(e, p.DiagnosticsEvent.END, e + "_" + n, r);
  };
  e.prototype.onCaught = function(e, r, n, i) {
    if (r instanceof StatsigUninitializedError || r instanceof StatsigInvalidArgumentError) throw r;
    console.error("[Statsig] An unexpected exception occurred.", r);
    this.logError(e, r, i);
    return n();
  };
  e.prototype.getDescription = function(e) {
    try {
      return JSON.stringify(e);
    } catch (e) {
      return "[Statsig] Failed to get string for error.";
    }
  };
  return e;
}();
exports.$$default = g; 
