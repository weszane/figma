import _require5 from "../vendor/12983";
import _require4 from "../vendor/253566";
import _require3 from "../vendor/406270";
import _require2 from "../vendor/459111";
import _require from "../vendor/20533";
import { INTERNAL_STORE_KEY, STICKY_DEVICE_EXPERIMENTS_KEY, OVERRIDES_STORE_KEY } from "../vendor/339781";
import { sha256Hash, getUserCacheKey, djb2Hash } from "../vendor/611140";
var i;
var s = this && this.__assign || function() {
  return (s = Object.assign || function(e) {
    for (n = 1, i = $$arguments.length, void 0; n < i; n++) {
      var r;
      var n;
      var i;
      for (var s in r = $$arguments[n]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }).apply(this, arguments);
};
var o = this && this.__awaiter || function(e, r, n, i) {
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
var a = this && this.__generator || function(e, r) {
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
var h = this && this.__importDefault || function(e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
exports.EvaluationReason = void 0;
var d = h(_require);
var p = h(_require2);
var g = h(_require3);
var y = h(_require4);
var b = h(_require5);
!function(e) {
  e.Network = "Network";
  e.Bootstrap = "Bootstrap";
  e.InvalidBootstrap = "InvalidBootstrap";
  e.Cache = "Cache";
  e.Prefetch = "Prefetch";
  e.Sticky = "Sticky";
  e.LocalOverride = "LocalOverride";
  e.Unrecognized = "Unrecognized";
  e.Uninitialized = "Uninitialized";
  e.Error = "Error";
  e.NetworkNotModified = "NetworkNotModified";
}(i = exports.EvaluationReason || (exports.EvaluationReason = {}));
var O = 10;
var x = function() {
  function e(e, r) {
    this.overrides = {
      gates: {},
      configs: {},
      layers: {}
    };
    this.sdkInternal = e;
    this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey();
    this.values = {};
    this.userValues = {
      feature_gates: {},
      dynamic_configs: {},
      sticky_experiments: {},
      layer_configs: {},
      has_updates: !1,
      time: 0,
      evaluation_time: 0
    };
    this.stickyDeviceExperiments = {};
    this.loaded = !1;
    this.reason = i.Uninitialized;
    r ? this.bootstrap(r) : this.loadFromLocalStorage();
  }
  e.prototype.updateUser = function(e) {
    this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey();
    return this.setUserValueFromCache(e);
  };
  e.prototype.loadFromAsyncStorage = function() {
    return o(this, void 0, void 0, function() {
      var e;
      var r;
      return a(this, function(n) {
        switch (n.label) {
          case 0:
            e = this.parseCachedValues;
            return [4, y.$$default.getItemAsync(INTERNAL_STORE_KEY)];
          case 1:
            r = [n.sent()];
            return [4, y.$$default.getItemAsync(STICKY_DEVICE_EXPERIMENTS_KEY)];
          case 2:
            e.apply(this, r.concat([n.sent()]));
            this.userCacheKey = this.sdkInternal.getCurrentUserCacheKey();
            this.loaded = !0;
            return [2];
        }
      });
    });
  };
  e.prototype.bootstrap = function(e) {
    var r;
    var n;
    var s;
    var o = this.sdkInternal.getCurrentUserCacheKey();
    var a = this.sdkInternal.getCurrentUser();
    var h = g.$$default.isValid(a, e) ? i.Bootstrap : i.InvalidBootstrap;
    this.loaded = !0;
    try {
      var d = e;
      this.userValues.feature_gates = null !== (r = d.feature_gates) && void 0 !== r ? r : {};
      this.userValues.dynamic_configs = null !== (n = d.dynamic_configs) && void 0 !== n ? n : {};
      this.userValues.layer_configs = null !== (s = d.layer_configs) && void 0 !== s ? s : {};
      this.userValues.evaluation_time = Date.now();
      this.userValues.time = Date.now();
      this.userValues.hash_used = d.hash_used;
      this.values[o] = this.userValues;
      this.reason = h;
      this.loadOverrides();
    } catch (e) {
      return;
    }
  };
  e.prototype.loadFromLocalStorage = function() {
    y.$$default.asyncStorage || (this.parseCachedValues(b.$$default.getItem(INTERNAL_STORE_KEY), b.$$default.getItem(STICKY_DEVICE_EXPERIMENTS_KEY)), this.loaded = !0);
  };
  e.prototype.isLoaded = function() {
    return this.loaded;
  };
  e.prototype.getLastUpdateTime = function(e) {
    var r = sha256Hash(JSON.stringify(e));
    return this.userValues.user_hash == r ? this.userValues.time : null;
  };
  e.prototype.parseCachedValues = function(e, r) {
    try {
      this.values = e ? JSON.parse(e) : this.values;
      this.setUserValueFromCache();
    } catch (e) {
      this.removeFromStorage(INTERNAL_STORE_KEY);
    }
    try {
      var n = r ? JSON.parse(r) : null;
      n && (this.stickyDeviceExperiments = n);
    } catch (e) {
      this.removeFromStorage(STICKY_DEVICE_EXPERIMENTS_KEY);
    }
    this.loadOverrides();
  };
  e.prototype.setUserValueFromCache = function(e) {
    void 0 === e && (e = !1);
    var r;
    var n = this.values[this.userCacheKey];
    return null == n ? (this.resetUserValues(), this.reason = i.Uninitialized, null) : (this.userValues = n, this.reason = e ? i.Prefetch : i.Cache, null !== (r = n.evaluation_time) && void 0 !== r ? r : 0);
  };
  e.prototype.removeFromStorage = function(e) {
    var r = this;
    y.$$default.removeItemAsync(e).catch(function(e) {
      return r.sdkInternal.getErrorBoundary().logError("removeFromStorage", e);
    });
    b.$$default.removeItem(e);
  };
  e.prototype.loadOverrides = function() {
    if (!this.sdkInternal.getOptions().getDisableLocalOverrides()) {
      var e = b.$$default.getItem(OVERRIDES_STORE_KEY);
      if (null != e) try {
        this.overrides = JSON.parse(e);
      } catch (e) {
        b.$$default.removeItem(OVERRIDES_STORE_KEY);
      }
    }
  };
  e.prototype.setEvaluationReason = function(e) {
    this.reason = e;
  };
  e.prototype.save = function(e, r) {
    return o(this, void 0, void 0, function() {
      var n;
      var s;
      var o;
      var h;
      return a(this, function(a) {
        switch (a.label) {
          case 0:
            if (n = getUserCacheKey(e), (s = r).is_delta) return [2, this.saveInitDeltas(e, r)];
            this.mergeInitializeResponseIntoUserMap(s, this.values, n, e, function(e) {
              return e;
            });
            (o = this.values[n]) && n && n == this.userCacheKey && (this.userValues = o, this.reason = i.Network);
            h = this;
            return [4, this.writeValuesToStorage(this.values)];
          case 1:
            h.values = a.sent();
            return [2];
        }
      });
    });
  };
  e.prototype.saveWithoutUpdatingClientState = function(e, r) {
    return o(this, void 0, void 0, function() {
      var n;
      var i;
      var s;
      return a(this, function(o) {
        switch (o.label) {
          case 0:
            n = getUserCacheKey(e);
            i = r;
            s = JSON.parse(JSON.stringify(this.values));
            this.mergeInitializeResponseIntoUserMap(i, s, n, e, function(e) {
              return e;
            });
            return [4, this.writeValuesToStorage(s)];
          case 1:
            o.sent();
            return [2];
        }
      });
    });
  };
  e.prototype.saveInitDeltas = function(e, r) {
    var n;
    return o(this, void 0, void 0, function() {
      var s;
      var o;
      var h;
      var d;
      var p = this;
      return a(this, function(a) {
        switch (a.label) {
          case 0:
            s = getUserCacheKey(e);
            o = r;
            this.mergeInitializeResponseIntoUserMap(o, this.values, s, e, function(e, r) {
              var n;
              var i = null !== (n = p.values[r]) && void 0 !== n ? n : p.getDefaultUserCacheValues();
              return p.mergeUserCacheValues(i, e);
            });
            Object.keys(null !== (n = o.prefetched_user_values) && void 0 !== n ? n : {}).forEach(function(e) {
              var r = p.values[e];
              r && w(o, r);
            });
            (h = this.values[s]) && s == this.userCacheKey && (w(o, h), this.userValues = h, this.reason = i.Network);
            d = this;
            return [4, this.writeValuesToStorage(this.values)];
          case 1:
            d.values = a.sent();
            return [2];
        }
      });
    });
  };
  e.prototype.mergeInitializeResponseIntoUserMap = function(e, r, n, i, s) {
    if (e.prefetched_user_values) for (o = Object.keys(e.prefetched_user_values), a = 0, h = o, void 0; a < h.length; a++) {
      var o;
      var a;
      var h;
      var d = h[a];
      var p = e.prefetched_user_values[d];
      r[d] = s(this.convertAPIDataToCacheValues(p, d), d);
    }
    if (n) {
      var g = this.convertAPIDataToCacheValues(e, n);
      if (e.has_updates && e.time) {
        var m = sha256Hash(JSON.stringify(i));
        g.user_hash = m;
      }
      r[n] = s(g, n);
    }
  };
  e.prototype.getDefaultUserCacheValues = function() {
    return {
      feature_gates: {},
      layer_configs: {},
      dynamic_configs: {},
      sticky_experiments: {},
      time: 0,
      evaluation_time: 0
    };
  };
  e.prototype.mergeUserCacheValues = function(e, r) {
    return {
      feature_gates: s(s({}, e.feature_gates), r.feature_gates),
      layer_configs: s(s({}, e.layer_configs), r.layer_configs),
      dynamic_configs: s(s({}, e.dynamic_configs), r.dynamic_configs),
      sticky_experiments: e.sticky_experiments,
      time: r.time,
      evaluation_time: r.evaluation_time
    };
  };
  e.prototype.writeValuesToStorage = function(e) {
    return o(this, void 0, void 0, function() {
      return a(this, function(r) {
        switch (r.label) {
          case 0:
            if (e = Object.fromEntries(Object.entries(e).sort(function(e, r) {
              var n;
              var i;
              var s = e[1];
              var o = r[1];
              return null == s ? 1 : null == o ? -1 : (null !== (n = o?.evaluation_time) && void 0 !== n ? n : o?.time) - (null !== (i = s?.evaluation_time) && void 0 !== i ? i : s?.time);
            }).slice(0, O)), !y.$$default.asyncStorage) return [3, 2];
            return [4, y.$$default.setItemAsync(INTERNAL_STORE_KEY, JSON.stringify(e))];
          case 1:
            r.sent();
            return [3, 3];
          case 2:
            b.$$default.setItem(INTERNAL_STORE_KEY, JSON.stringify(e));
            r.label = 3;
          case 3:
            return [2, e];
        }
      });
    });
  };
  e.prototype.checkGate = function(e, r) {
    void 0 === r && (r = !1);
    var n;
    var s;
    var o = this.getHashedSpecName(e);
    var a = {
      name: e,
      value: !1,
      rule_id: "",
      secondary_exposures: []
    };
    if (r || null == this.overrides.gates[e]) {
      var h = this.userValues?.feature_gates[o];
      h && (a = h);
      s = this.getEvaluationDetails(null != h);
    } else {
      a = {
        name: e,
        value: this.overrides.gates[e],
        rule_id: "override",
        secondary_exposures: []
      };
      s = this.getEvaluationDetails(!1, i.LocalOverride);
    }
    return {
      evaluationDetails: s,
      gate: a
    };
  };
  e.prototype.getConfig = function(e, r) {
    void 0 === r && (r = !1);
    var n;
    var s;
    var o;
    var a;
    var h = this.getHashedSpecName(e);
    if (r || null == this.overrides.configs[e]) {
      if (this.userValues?.dynamic_configs[h] != null) {
        var p = this.userValues?.dynamic_configs[h];
        a = this.getEvaluationDetails(!0);
        o = this.createDynamicConfig(e, p, a);
      } else {
        a = this.getEvaluationDetails(!1);
        o = new d.$$default(e, {}, "", a);
      }
    } else {
      a = this.getEvaluationDetails(!1, i.LocalOverride);
      o = new d.$$default(e, this.overrides.configs[e], "override", a, [], "", this.makeOnConfigDefaultValueFallback(this.sdkInternal.getCurrentUser()));
    }
    return o;
  };
  e.prototype.getExperiment = function(e, r, n) {
    if (void 0 === r && (r = !1), void 0 === n && (n = !1), n || null == this.overrides.configs[e]) {
      var s;
      var o;
      var a = this.getLatestValue(e, "dynamic_configs");
      o = this.getEvaluationDetails(null != a);
      var h = this.getPossiblyStickyValue(e, a, r, !1, o);
      s = this.createDynamicConfig(e, h, o);
    } else {
      o = this.getEvaluationDetails(!1, i.LocalOverride);
      s = new d.$$default(e, this.overrides.configs[e], "override", o);
    }
    return s;
  };
  e.prototype.getLayer = function(e, r, n) {
    if (null != this.overrides.layers[r]) {
      var s;
      var o;
      var a;
      var h;
      var d = this.getEvaluationDetails(!1, i.LocalOverride);
      return p.$$default._create(r, null !== (s = this.overrides.layers[r]) && void 0 !== s ? s : {}, "override", d, e);
    }
    var g = this.getLatestValue(r, "layer_configs");
    var m = this.getEvaluationDetails(null != g);
    var v = this.getPossiblyStickyValue(r, g, n, !0, m);
    return p.$$default._create(r, null !== (o = v?.value) && void 0 !== o ? o : {}, null !== (a = v?.rule_id) && void 0 !== a ? a : "", m, e, v?.secondary_exposures, v?.undelegated_secondary_exposures, null !== (h = v?.allocated_experiment_name) && void 0 !== h ? h : "", v?.explicit_parameters, v?.group_name);
  };
  e.prototype.overrideConfig = function(e, r) {
    try {
      JSON.stringify(r);
    } catch (e) {
      console.warn("Failed to stringify given config override.  Dropping", e);
      return;
    }
    this.overrides.configs[e] = r;
    this.saveOverrides();
  };
  e.prototype.overrideLayer = function(e, r) {
    try {
      JSON.stringify(r);
    } catch (e) {
      console.warn("Failed to stringify given layer override.  Dropping", e);
      return;
    }
    this.overrides.layers[e] = r;
    this.saveOverrides();
  };
  e.prototype.overrideGate = function(e, r) {
    this.overrides.gates[e] = r;
    this.saveOverrides();
  };
  e.prototype.removeGateOverride = function(e) {
    null == e ? this.overrides.gates = {} : delete this.overrides.gates[e];
    this.saveOverrides();
  };
  e.prototype.removeConfigOverride = function(e) {
    null == e ? this.overrides.configs = {} : delete this.overrides.configs[e];
    this.saveOverrides();
  };
  e.prototype.removeLayerOverride = function(e) {
    null == e ? this.overrides.layers = {} : delete this.overrides.layers[e];
    this.saveOverrides();
  };
  e.prototype.getAllOverrides = function() {
    return this.overrides;
  };
  e.prototype.saveOverrides = function() {
    try {
      b.$$default.setItem(OVERRIDES_STORE_KEY, JSON.stringify(this.overrides));
    } catch (e) {
      console.warn("Failed to persist gate/config overrides");
    }
  };
  e.prototype.getLatestValue = function(e, r) {
    var n;
    var i;
    var s;
    var o;
    var a;
    var h = this.getHashedSpecName(e);
    return null !== (s = this.userValues?.[r]?.[h]) && void 0 !== s ? s : this.userValues?.[r]?.[e];
  };
  e.prototype.getPossiblyStickyValue = function(e, r, n, s, o) {
    if (!n) {
      this.removeStickyValue(e);
      return r;
    }
    var a;
    var h = this.getStickyValue(e);
    if (!h) {
      this.attemptToSaveStickyValue(e, r);
      return r;
    }
    var d = null;
    return (null == (d = s ? this.getLatestValue(null !== (a = h?.allocated_experiment_name) && void 0 !== a ? a : "", "dynamic_configs") : r) ? void 0 : d.is_experiment_active) == !0 ? (o.reason = i.Sticky, h) : (r?.is_experiment_active == !0 ? this.attemptToSaveStickyValue(e, r) : this.removeStickyValue(e), r);
  };
  e.prototype.createDynamicConfig = function(e, r, n) {
    var i;
    var s;
    var o;
    return new d.$$default(e, null !== (i = r?.value) && void 0 !== i ? i : {}, null !== (s = r?.rule_id) && void 0 !== s ? s : "", n, r?.secondary_exposures, null !== (o = r?.allocated_experiment_name) && void 0 !== o ? o : "", this.makeOnConfigDefaultValueFallback(this.sdkInternal.getCurrentUser()), r?.group_name, r?.id_type);
  };
  e.prototype.getStickyValue = function(e) {
    var r;
    var n;
    var i = this.getHashedSpecName(e);
    return null !== (n = this.userValues?.sticky_experiments[i]) && void 0 !== n ? n : this.stickyDeviceExperiments[i];
  };
  e.prototype.attemptToSaveStickyValue = function(e, r) {
    if (r && r.is_user_in_experiment && r.is_experiment_active) {
      var n;
      var i = this.getHashedSpecName(e);
      !0 === r.is_device_based ? this.stickyDeviceExperiments[i] = r : this.userValues?.sticky_experiments && (this.userValues.sticky_experiments[i] = r);
      this.saveStickyValuesToStorage();
    }
  };
  e.prototype.removeStickyValue = function(e) {
    if (0 !== Object.keys(null !== (n = this.userValues?.sticky_experiments) && void 0 !== n ? n : {}).length || 0 !== Object.keys(null !== (i = this.stickyDeviceExperiments) && void 0 !== i ? i : {}).length) {
      var r;
      var n;
      var i;
      var s;
      var o = this.getHashedSpecName(e);
      null === (s = this.userValues) || void 0 === s || delete s.sticky_experiments[o];
      delete this.stickyDeviceExperiments[o];
      this.saveStickyValuesToStorage();
    }
  };
  e.prototype.saveStickyValuesToStorage = function() {
    this.values[this.userCacheKey] = this.userValues;
    this.setItemToStorage(INTERNAL_STORE_KEY, JSON.stringify(this.values));
    this.setItemToStorage(STICKY_DEVICE_EXPERIMENTS_KEY, JSON.stringify(this.stickyDeviceExperiments));
  };
  e.prototype.getGlobalEvaluationDetails = function() {
    var e;
    var r;
    return {
      reason: null !== (e = this.reason) && void 0 !== e ? e : i.Uninitialized,
      time: null !== (r = this.userValues.evaluation_time) && void 0 !== r ? r : 0
    };
  };
  e.prototype.getEvaluationDetails = function(e, r) {
    var n;
    return e ? {
      reason: this.reason,
      time: null !== (n = this.userValues.evaluation_time) && void 0 !== n ? n : Date.now()
    } : {
      reason: null != r ? r : this.reason == i.Uninitialized ? i.Uninitialized : i.Unrecognized,
      time: Date.now()
    };
  };
  e.prototype.resetUserValues = function() {
    this.userValues = {
      feature_gates: {},
      dynamic_configs: {},
      sticky_experiments: {},
      layer_configs: {},
      time: 0,
      evaluation_time: 0
    };
  };
  e.prototype.getHashedSpecName = function(e) {
    switch (this.userValues.hash_used) {
      case "djb2":
        return djb2Hash(e);
      case "none":
        return e;
      default:
        return sha256Hash(e);
    }
  };
  e.prototype.convertAPIDataToCacheValues = function(e, r) {
    var n;
    var i;
    return {
      feature_gates: e.feature_gates,
      layer_configs: e.layer_configs,
      dynamic_configs: e.dynamic_configs,
      sticky_experiments: null !== (i = this.values[r]?.sticky_experiments) && void 0 !== i ? i : {},
      time: null == e.time || isNaN(e.time) ? 0 : e.time,
      evaluation_time: Date.now(),
      hash_used: e.hash_used
    };
  };
  e.prototype.setItemToStorage = function(e, r) {
    var n = this;
    y.$$default.asyncStorage ? y.$$default.setItemAsync(e, r).catch(function(e) {
      n.sdkInternal.getErrorBoundary().logError("setItemToStorage", e);
    }) : b.$$default.setItem(e, r);
  };
  e.prototype.makeOnConfigDefaultValueFallback = function(e) {
    var r = this;
    return function(n, i, s, o) {
      r.isLoaded() && r.sdkInternal.getLogger().logConfigDefaultValueFallback(e, "Parameter " + i + " is a value of type " + o + ".\n          Returning requested defaultValue type " + s, {
        name: n.getName(),
        ruleID: n.getRuleID(),
        parameter: i,
        defaultValueType: s,
        valueType: o
      });
    };
  };
  return e;
}();
function w(e, r) {
  var n;
  var i;
  var s;
  (null !== (n = e.deleted_configs) && void 0 !== n ? n : []).forEach(function(e) {
    delete r.dynamic_configs[e];
  });
  (null !== (i = e.deleted_gates) && void 0 !== i ? i : []).forEach(function(e) {
    delete r.feature_gates[e];
  });
  (null !== (s = e.deleted_layers) && void 0 !== s ? s : []).forEach(function(e) {
    delete r.layer_configs[e];
  });
}
exports.$$default = x; 
