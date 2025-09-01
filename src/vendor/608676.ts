import _require4 from "../vendor/250242";
import _require3 from "../vendor/625526";
import _require2 from "../vendor/724191";
import _require from "react";
var i = this && this.__createBinding || (Object.create ? function (e, r, n, i) {
  void 0 === i && (i = n);
  Object.defineProperty(e, i, {
    enumerable: !0,
    get: function () {
      return r[n];
    }
  });
} : function (e, r, n, i) {
  void 0 === i && (i = n);
  e[i] = r[n];
});
var s = this && this.__setModuleDefault || (Object.create ? function (e, r) {
  Object.defineProperty(e, "default", {
    enumerable: !0,
    value: r
  });
} : function (e, r) {
  e.$$default = r;
});
var o = this && this.__importStar || function (e) {
  if (e && e.__esModule) return e;
  var r = {};
  if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && i(r, e, n);
  s(r, e);
  return r;
};
var a = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var h = o(_require);
var d = a(_require2);
var p = a(_require3);
var g = a(_require4);
function m(e) {
  var r = e.children;
  var n = e.sdkKey;
  var i = e.user;
  var s = e.options;
  var o = e.initializeValues;
  var a = e.setUser;
  var m = e.shutdownOnUnmount;
  var v = h.useState(0);
  var y = v[0];
  var b = v[1];
  var O = h.useState(!0);
  var x = O[0];
  var w = O[1];
  var k = h.useRef(!0);
  var _ = h.useMemo(function () {
    return i;
  }, [JSON.stringify(i)]);
  h.useMemo(function () {
    g.$$default.bootstrap(n, o, _, s);
    return o;
  }, [JSON.stringify(o)]);
  h.useEffect(function () {
    if (k.current) {
      k.current = !1;
      "undefined" != typeof window && (window.__STATSIG_SDK__ = g.$$default, window.__STATSIG_JS_SDK__ = p.$$default, window.__STATSIG_RERENDER_OVERRIDE__ = function () {
        b(y + 1);
      });
      return;
    }
    w(!1);
    g.$$default.updateUser(i).then(function () {
      b(y + 1);
      w(!0);
    });
  }, [_]);
  h.useEffect(function () {
    g.$$default.setReactContextUpdater(function () {
      return b(function (e) {
        return e + 1;
      });
    });
    return function () {
      m && g.$$default.shutdown();
      g.$$default.setReactContextUpdater(null);
    };
  }, []);
  var S = h.useMemo(function () {
    return {
      initialized: x,
      statsigPromise: null,
      userVersion: y,
      initStarted: g.$$default.initializeCalled(),
      updateUser: null != a ? a : function () {}
    };
  }, [x, y, g.$$default.initializeCalled(), a]);
  return h.$$default.createElement(d.$$default.Provider, {
    value: S
  }, r);
}
exports.$$default = m;