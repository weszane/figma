import { platformName, browserName, browserFullVersion, browserArchitecture, deviceName, engineName, engineVersion, platformFullVersion, platformArchitecture } from "../vendor/234925";
import { contains } from "../vendor/693933";
import o from "../vendor/862615";
import a from "../vendor/131029";
function s(t, e, r, n) {
  if (t === r) return !0;
  if (!r.startsWith(t)) return !1;
  var o = r.slice(t.length);
  return !!e && (o = n ? n(o) : o, contains(o, e));
}
function u(t) {
  return "Windows" === platformName ? t.replace(/^\s*NT/, "") : t;
}
module.exports = o({
  isBrowser: function (t) {
    return s(browserName, browserFullVersion, t);
  },
  isBrowserArchitecture: function (t) {
    return s(browserArchitecture, null, t);
  },
  isDevice: function (t) {
    return s(deviceName, null, t);
  },
  isEngine: function (t) {
    return s(engineName, engineVersion, t);
  },
  isPlatform: function (t) {
    return s(platformName, platformFullVersion, t, u);
  },
  isPlatformArchitecture: function (t) {
    return s(platformArchitecture, null, t);
  }
}, a);