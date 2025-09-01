import _require from "../vendor/581997";
import { DiagnosticsKey, DiagnosticsEvent } from "../vendor/914052";
var i;
var s = this && this.__awaiter || function(e, r, n, i) {
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
var o = this && this.__generator || function(e, r) {
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
var a = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
exports.StatsigEndpoint = void 0;
var h = a(_require);
!function(e) {
  e.Initialize = "initialize";
  e.Rgstr = "rgstr";
  e.LogEventBeacon = "log_event_beacon";
}(i = exports.StatsigEndpoint || (exports.StatsigEndpoint = {}));
var p = 204;
var g = function() {
  function e(e) {
    this.retryCodes = {
      408: !0,
      500: !0,
      502: !0,
      503: !0,
      504: !0,
      522: !0,
      524: !0,
      599: !0
    };
    this.canUseKeepalive = !1;
    this.sdkInternal = e;
    this.leakyBucket = {};
    this.init();
  }
  e.prototype.init = function() {
    if (!this.sdkInternal.getOptions().getDisableNetworkKeepalive()) try {
      this.canUseKeepalive = "keepalive" in new Request("");
    } catch (e) {
      this.canUseKeepalive = !1;
    }
  };
  e.prototype.fetchValues = function(e, r, n, s, o) {
    var a = {
      user: e,
      prefetchUsers: o,
      statsigMetadata: this.sdkInternal.getStatsigMetadata(),
      sinceTime: null != r ? r : void 0,
      acceptsDeltas: !0,
      hash: "djb2"
    };
    return this.postWithTimeout(i.Initialize, a, s, n, 3);
  };
  e.prototype.postWithTimeout = function(e, r, n, a, h, p) {
    var g = this;
    void 0 === a && (a = 0);
    void 0 === h && (h = 0);
    void 0 === p && (p = 1e3);
    e === i.Initialize && n?.mark(DiagnosticsKey.INITIALIZE, DiagnosticsEvent.START, "network_request");
    var m = !1;
    var v = null;
    var y = null;
    var b = [];
    var O = function(e) {
      return function(r) {
        m && y ? r(y) : b.push(r);
        return e;
      };
    };
    0 != a && (v = new Promise(function(e, r) {
      setTimeout(function() {
        m = !0;
        r(Error("The initialization timeout of " + a + "ms has been hit before the network request has completed."));
      }, a);
    }));
    var x = this.postToEndpoint(e, r, h, p).then(function(a) {
      if (e === i.Initialize) {
        n?.mark(DiagnosticsKey.INITIALIZE, DiagnosticsEvent.END, "network_request", a.status);
        var v;
        var O = a?.data?.is_delta === !0;
        n?.addMetadata("is_delta", O);
      }
      if (!a.ok) return Promise.reject(Error("Request to " + e + " failed with status " + a.status));
      if ("object" != typeof a.data) {
        var x = Error("Request to " + e + " received invalid response type. Expected 'object' but got '" + typeof a.data + "'");
        g.sdkInternal.getErrorBoundary().logError("postWithTimeoutInvalidRes", x, function() {
          return s(g, void 0, void 0, function() {
            return o(this, function(n) {
              return [2, this.getErrorData(e, r, h, p, a)];
            });
          });
        });
        return Promise.reject(x);
      }
      var w = a.data;
      return g.sdkInternal.getErrorBoundary().capture("postWithTimeout", function() {
        return s(g, void 0, void 0, function() {
          return o(this, function(e) {
            y = w;
            m && (b.forEach(function(e) {
              return e(w);
            }), b = []);
            return [2, Promise.resolve(w)];
          });
        });
      }, function() {
        return Promise.resolve({});
      }, {
        getExtraData: function() {
          return s(g, void 0, void 0, function() {
            return o(this, function(n) {
              return [2, this.getErrorData(e, r, h, p, a)];
            });
          });
        }
      });
    }).catch(function(r) {
      e === i.Initialize && n?.mark(DiagnosticsKey.INITIALIZE, DiagnosticsEvent.END, "network_request", !1);
      return Promise.reject(r);
    });
    var w = v ? Promise.race([x, v]) : x;
    w.eventually = O(w);
    return w;
  };
  e.prototype.sendLogBeacon = function(e) {
    if (this.sdkInternal.getOptions().getLocalModeEnabled()) return !0;
    var r = new URL(this.sdkInternal.getOptions().getEventLoggingApi() + i.LogEventBeacon);
    r.searchParams.append("k", this.sdkInternal.getSDKKey());
    e.clientTime = Date.now() + "";
    var n = null;
    try {
      n = JSON.stringify(e);
    } catch (e) {
      return !1;
    }
    return navigator.sendBeacon(r.toString(), n);
  };
  e.prototype.postToEndpoint = function(e, r, n, a, d) {
    void 0 === n && (n = 0);
    void 0 === a && (a = 1e3);
    void 0 === d && (d = !1);
    return s(this, void 0, void 0, function() {
      var g;
      var m;
      var v;
      var y;
      var b;
      var O = this;
      return o(this, function(x) {
        if (this.sdkInternal.getOptions().getLocalModeEnabled()) return [2, Promise.reject("no network requests in localMode")];
        if ("function" != typeof fetch) return [2, Promise.reject("fetch is not defined")];
        if ("undefined" == typeof window && !this.sdkInternal.getOptions().getIgnoreWindowUndefined()) return [2, Promise.reject("window is not defined")];
        if (g = ([i.Initialize].includes(e) ? this.sdkInternal.getOptions().getApi() : this.sdkInternal.getOptions().getEventLoggingApi()) + e, null != (m = this.leakyBucket[g]) && m >= 30) return [2, Promise.reject(Error("Request failed because you are making the same request too frequently."))];
        if (null == m ? this.leakyBucket[g] = 1 : this.leakyBucket[g] = m + 1, v = e === i.Initialize && h.$$default.encodeInitializeCall && "undefined" != typeof window && "function" == typeof window?.btoa, y = JSON.stringify(r), v) try {
          y = window.btoa(y).split("").reverse().join("");
        } catch (e) {
          v = !1;
        }
        b = {
          method: "POST",
          body: y,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "STATSIG-API-KEY": this.sdkInternal.getSDKKey(),
            "STATSIG-CLIENT-TIME": Date.now() + "",
            "STATSIG-SDK-TYPE": this.sdkInternal.getSDKType(),
            "STATSIG-SDK-VERSION": this.sdkInternal.getSDKVersion(),
            "STATSIG-ENCODED": v ? "1" : "0"
          }
        };
        this.canUseKeepalive && d && (b.keepalive = !0);
        return [2, fetch(g, b).then(function(e) {
          return s(O, void 0, void 0, function() {
            var r;
            var i;
            var s;
            return o(this, function(o) {
              switch (o.label) {
                case 0:
                  if (!e.ok) return [3, 4];
                  if (r = e, e.status !== p) return [3, 1];
                  r.data = {
                    has_updates: !1,
                    is_no_content: !0
                  };
                  return [3, 3];
                case 1:
                  return [4, e.text()];
                case 2:
                  i = o.sent();
                  r.data = JSON.parse(i);
                  o.label = 3;
                case 3:
                  return [2, Promise.resolve(r)];
                case 4:
                  this.retryCodes[e.status] || (n = 0);
                  return [4, e.text()];
                case 5:
                  s = o.sent();
                  return [2, Promise.reject(Error(e.status + ": " + s))];
              }
            });
          });
        }).catch(function(i) {
          return n > 0 ? new Promise(function(i, s) {
            setTimeout(function() {
              O.leakyBucket[g] = Math.max(O.leakyBucket[g] - 1, 0);
              O.postToEndpoint(e, r, n - 1, 2 * a, d).then(i).catch(s);
            }, a);
          }) : Promise.reject(i);
        }).$$finally(function() {
          O.leakyBucket[g] = Math.max(O.leakyBucket[g] - 1, 0);
        })];
      });
    });
  };
  e.prototype.supportsKeepalive = function() {
    return this.canUseKeepalive;
  };
  e.prototype.getErrorData = function(e, r, n, i, a) {
    var h;
    return s(this, void 0, void 0, function() {
      var s;
      return o(this, function(o) {
        try {
          s = {};
          (null !== (h = a.headers) && void 0 !== h ? h : []).forEach(function(e, r) {
            s[r] = e;
          });
          return [2, {
            responseInfo: {
              headers: s,
              status: a.status,
              statusText: a.statusText,
              type: a.type,
              url: a.url,
              redirected: a.redirected,
              bodySnippet: a.data ? JSON.stringify(a.data).slice(0, 500) : null
            },
            requestInfo: {
              endpointName: e,
              bodySnippet: JSON.stringify(r).slice(0, 500),
              retries: n,
              backoff: i
            }
          }];
        } catch (e) {
          return [2, {
            statusText: "statsig::failed to extract extra data"
          }];
        }
        return [2];
      });
    });
  };
  return e;
}();
exports.$$default = g; 
