import _require2 from "../vendor/12983";
import _require from "../vendor/253566";
import { v4 } from "../vendor/127290";
import { STATSIG_STABLE_ID_KEY } from "../vendor/339781";
import { version } from "../vendor/948328";
var i = this && this.__awaiter || function(e, r, n, i) {
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
var s = this && this.__generator || function(e, r) {
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
var o = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var d = o(_require);
var p = o(_require2);
var m = function() {
  function e(e, r, n) {
    this.platform = null;
    this.nativeModules = null;
    this.sdkType = "js-client";
    this.reactNativeUUID = n;
    this.user = e;
    this.sdkVersion = version;
    this.statsigMetadata = {
      sdkType: this.sdkType,
      sdkVersion: this.sdkVersion
    };
    var i;
    var s = r;
    d.$$default.asyncStorage || (s = null !== (i = null != s ? s : p.$$default.getItem(STATSIG_STABLE_ID_KEY)) && void 0 !== i ? i : this.getUUID());
    s && (this.statsigMetadata.stableID = s);
  }
  e.prototype.saveStableID = function() {
    null != this.statsigMetadata.stableID && p.$$default.setItem(STATSIG_STABLE_ID_KEY, this.statsigMetadata.stableID);
  };
  e.prototype.initAsync = function() {
    return i(this, void 0, void 0, function() {
      var e;
      return s(this, function(r) {
        switch (r.label) {
          case 0:
            if (e = this.statsigMetadata.stableID) return [3, 2];
            return [4, d.$$default.getItemAsync(STATSIG_STABLE_ID_KEY)];
          case 1:
            e = null != (e = r.sent()) ? e : this.getUUID();
            r.label = 2;
          case 2:
            d.$$default.setItemAsync(STATSIG_STABLE_ID_KEY, e).catch(function() { });
            this.statsigMetadata.stableID = e;
            return [2, this];
        }
      });
    });
  };
  e.prototype.getSDKType = function() {
    return this.sdkType;
  };
  e.prototype.getSDKVersion = function() {
    return this.sdkVersion;
  };
  e.prototype.getStatsigMetadata = function() {
    this.statsigMetadata.sdkType = this.sdkType;
    this.statsigMetadata.sdkVersion = this.sdkVersion;
    return this.statsigMetadata;
  };
  e.prototype.getUser = function() {
    return this.user;
  };
  e.prototype.updateUser = function(e) {
    this.user = e;
  };
  e.prototype.setSDKPackageInfo = function(e) {
    this.sdkType = e.sdkType;
    this.sdkVersion = e.sdkVersion;
  };
  e.prototype.setPlatform = function(e) {
    this.platform = e;
    this.updateMetadataFromNativeModules();
  };
  e.prototype.setNativeModules = function(e) {
    this.nativeModules = e;
    this.updateMetadataFromNativeModules();
  };
  e.prototype.updateMetadataFromNativeModules = function() {
    var e;
    var r;
    var n;
    var i;
    var s;
    var o;
    var a;
    null != this.platform && null != this.nativeModules && (this.platform.OS?.toLocaleLowerCase() === "android" ? this.statsigMetadata.locale = this.nativeModules.I18nManager?.localeIdentifier : this.platform.OS?.toLocaleLowerCase() === "ios" && (this.statsigMetadata.locale = this.nativeModules.SettingsManager?.settings?.AppleLocale || this.nativeModules.SettingsManager?.settings?.AppleLanguages[0]));
  };
  e.prototype.getUUID = function() {
    var e;
    var r;
    return null !== (r = this.reactNativeUUID?.v4()) && void 0 !== r ? r : v4();
  };
  e.prototype.setRNDeviceInfo = function(e) {
    var r;
    var n;
    var i;
    var s;
    var o;
    this.statsigMetadata.appVersion = null !== (r = e.getVersion()) && void 0 !== r ? r : "";
    this.statsigMetadata.systemVersion = null !== (n = e.getSystemVersion()) && void 0 !== n ? n : "";
    this.statsigMetadata.systemName = null !== (i = e.getSystemName()) && void 0 !== i ? i : "";
    this.statsigMetadata.deviceModelName = null !== (s = e.getModel()) && void 0 !== s ? s : "";
    this.statsigMetadata.deviceModel = null !== (o = e.getDeviceId()) && void 0 !== o ? o : "";
  };
  e.prototype.setExpoConstants = function(e) {
    var r;
    var n;
    this.statsigMetadata.appVersion = null !== (n = null !== (r = e.nativeAppVersion) && void 0 !== r ? r : e.nativeBuildVersion) && void 0 !== n ? n : "";
  };
  e.prototype.setExpoDevice = function(e) {
    var r;
    var n;
    var i;
    var s;
    this.statsigMetadata.systemVersion = null !== (r = e.osVersion) && void 0 !== r ? r : "";
    this.statsigMetadata.systemName = null !== (n = e.osName) && void 0 !== n ? n : "";
    this.statsigMetadata.deviceModelName = null !== (i = e.modelName) && void 0 !== i ? i : "";
    this.statsigMetadata.deviceModel = null !== (s = e.modelId) && void 0 !== s ? s : "";
  };
  return e;
}();
exports.$$default = m; 
