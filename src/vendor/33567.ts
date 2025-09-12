import _require4 from "../vendor/250242";
import _require3 from "statsig-js";
import _require2 from "../vendor/724191";
import _require from "react";
import { version } from "../vendor/494629";
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
function v(e) {
  var r = h.useRef(null);
  h.useEffect(function () {
    r.current = e;
  }, [e]);
  return r.current;
}
function y(e) {
  var r = e.children;
  var n = e.sdkKey;
  var i = e.user;
  var s = e.setUser;
  var o = e.options;
  var a = e.waitForCache;
  var y = e.waitForInitialization;
  var O = e.initializingComponent;
  var x = e.mountKey;
  var w = e.shutdownOnUnmount;
  var k = void 0 !== w && w;
  var _ = e._reactNativeDependencies;
  var S = !!_;
  var E = h.useState(!1);
  var A = E[0];
  var C = E[1];
  var T = h.useState(!1);
  var I = T[0];
  var P = T[1];
  var R = h.useRef(null);
  var M = h.useState(0);
  var D = M[0];
  var N = M[1];
  var $ = h.useRef(new Promise(function (e) {
    R.current = e;
  }));
  var L = h.useMemo(function () {
    return i;
  }, [JSON.stringify(i)]);
  var j = v(null != x ? x : null);
  h.useEffect(function () {
    if (g.$$default.initializeCalled()) {
      $.current = new Promise(function (e) {
        R.current = e;
      });
      var e = void 0 === x || j !== x;
      e && P(!1);
      g.$$default.updateUser(i).then(function () {
        R.current && R.current();
        N(function (e) {
          return e + 1;
        });
        e && P(!0);
      });
      return;
    }
    g.$$default.setSDKPackageInfo({
      sdkType: "react-client",
      sdkVersion: version
    });
    S && (g.$$default.setSDKPackageInfo(_.SDKPackageInfo), g.$$default.setAppState(_.AppState), g.$$default.setAsyncStorage(_.AsyncStorage), g.$$default.setNativeModules(_.NativeModules), g.$$default.setPlatform(_.Platform), g.$$default.setRNDeviceInfo(_.RNDevice), g.$$default.setReactNativeUUID(_.ReactNativeUUID), g.$$default.setExpoConstants(_.Constants), g.$$default.setExpoDevice(_.ExpoDevice));
    g.$$default.setOnCacheLoadedCallback(function () {
      C(!0);
    });
    g.$$default.initialize(n, L, o).then(function () {
      P(!0);
      R.current && R.current();
    });
    "undefined" != typeof window && (window.__STATSIG_SDK__ = g.$$default, window.__STATSIG_JS_SDK__ = p.$$default, window.__STATSIG_RERENDER_OVERRIDE__ = function () {
      N(D + 1);
    });
  }, [L]);
  h.useEffect(function () {
    g.$$default.setReactContextUpdater(function () {
      return N(function (e) {
        return e + 1;
      });
    });
    return function () {
      k && g.$$default.shutdown();
      g.$$default.setReactContextUpdater(null);
    };
  }, []);
  var z = b(!0 === a, !0 === y, I, A, r, O);
  var Z = h.useMemo(function () {
    return {
      initialized: I,
      statsigPromise: $,
      userVersion: D,
      initStarted: g.$$default.initializeCalled(),
      updateUser: null != s ? s : function () {}
    };
  }, [I, $, D, g.$$default.initializeCalled(), s]);
  return h.$$default.createElement(d.$$default.Provider, {
    value: Z
  }, z);
}
function b(e, r, n, i, s, o) {
  return !0 !== r && !0 !== e || e && i || r && n ? s : (r || e) && null != o ? o : null;
}
exports.$$default = y;
