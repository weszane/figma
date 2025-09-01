exports.LogLevel = exports.INIT_TIMEOUT_DEFAULT_MS = void 0;
var n;
var i = "https://featuregates.org/v1/";
var s = "https://events.statsigapi.net/v1/";
exports.INIT_TIMEOUT_DEFAULT_MS = 3e3;
(function (e) {
  e[e.NONE = 0] = "NONE";
  e[e.INFO = 1] = "INFO";
  e[e.DEBUG = 2] = "DEBUG";
})(n = exports.LogLevel || (exports.LogLevel = {}));
var o = function () {
  function e(e) {
    null == e && (e = {});
    var o;
    var a;
    var h;
    var d;
    var p;
    var g;
    var m;
    var v;
    var y;
    var b;
    var O;
    var x;
    var w;
    var k;
    var _;
    var S;
    var E;
    var A;
    var C;
    var T;
    var I;
    var P = null !== (o = e.api) && void 0 !== o ? o : i;
    this.api = P.endsWith("/") ? P : P + "/";
    this.disableCurrentPageLogging = null !== (a = e.disableCurrentPageLogging) && void 0 !== a && a;
    this.environment = null !== (h = e.environment) && void 0 !== h ? h : null;
    this.loggingIntervalMillis = this.normalizeNumberInput(e.loggingIntervalMillis, {
      default: 1e4,
      min: 1e3,
      max: 6e4
    });
    this.loggingBufferMaxSize = this.normalizeNumberInput(e.loggingBufferMaxSize, {
      default: 100,
      min: 2,
      max: 500
    });
    this.disableNetworkKeepalive = null !== (d = e.disableNetworkKeepalive) && void 0 !== d && d;
    this.overrideStableID = null !== (p = e.overrideStableID) && void 0 !== p ? p : null;
    this.localMode = null !== (g = e.localMode) && void 0 !== g && g;
    this.initTimeoutMs = e.initTimeoutMs && e.initTimeoutMs >= 0 ? e.initTimeoutMs : exports.INIT_TIMEOUT_DEFAULT_MS;
    this.disableErrorLogging = null !== (m = e.disableErrorLogging) && void 0 !== m && m;
    this.disableAutoMetricsLogging = null !== (v = e.disableAutoMetricsLogging) && void 0 !== v && v;
    this.initializeValues = null !== (y = e.initializeValues) && void 0 !== y ? y : null;
    var R = null !== (O = null !== (b = e.eventLoggingApi) && void 0 !== b ? b : e.api) && void 0 !== O ? O : s;
    this.eventLoggingApi = R.endsWith("/") ? R : R + "/";
    this.prefetchUsers = null !== (x = e.prefetchUsers) && void 0 !== x ? x : [];
    this.disableLocalStorage = null !== (w = e.disableLocalStorage) && void 0 !== w && w;
    this.initCompletionCallback = null !== (k = e.initCompletionCallback) && void 0 !== k ? k : null;
    this.updateCompletionCallback = null !== (_ = e.updateUserCompletionCallback) && void 0 !== _ ? _ : null;
    this.disableDiagnosticsLogging = null !== (S = e.disableDiagnosticsLogging) && void 0 !== S && S;
    this.logLevel = null !== (E = e?.logLevel) && void 0 !== E ? E : n.NONE;
    this.ignoreWindowUndefined = null !== (A = e?.ignoreWindowUndefined) && void 0 !== A && A;
    this.fetchMode = null !== (C = e.fetchMode) && void 0 !== C ? C : "network-only";
    this.disableLocalOverrides = null !== (T = e?.disableLocalOverrides) && void 0 !== T && T;
    this.gateEvaluationCallback = null !== (I = e?.gateEvaluationCallback) && void 0 !== I ? I : null;
  }
  e.prototype.getApi = function () {
    return this.api;
  };
  e.prototype.getEnvironment = function () {
    return this.environment;
  };
  e.prototype.getDisableCurrentPageLogging = function () {
    return this.disableCurrentPageLogging;
  };
  e.prototype.getLoggingIntervalMillis = function () {
    return this.loggingIntervalMillis;
  };
  e.prototype.getLoggingBufferMaxSize = function () {
    return this.loggingBufferMaxSize;
  };
  e.prototype.getDisableNetworkKeepalive = function () {
    return this.disableNetworkKeepalive;
  };
  e.prototype.getOverrideStableID = function () {
    return this.overrideStableID;
  };
  e.prototype.getLocalModeEnabled = function () {
    return this.localMode;
  };
  e.prototype.getInitTimeoutMs = function () {
    return this.initTimeoutMs;
  };
  e.prototype.getDisableErrorLogging = function () {
    return this.disableErrorLogging;
  };
  e.prototype.getDisableAutoMetricsLogging = function () {
    return this.disableAutoMetricsLogging;
  };
  e.prototype.getInitializeValues = function () {
    return this.initializeValues;
  };
  e.prototype.getEventLoggingApi = function () {
    return this.eventLoggingApi;
  };
  e.prototype.getPrefetchUsers = function () {
    return this.prefetchUsers;
  };
  e.prototype.getDisableLocalStorage = function () {
    return this.disableLocalStorage;
  };
  e.prototype.getInitCompletionCallback = function () {
    return this.initCompletionCallback;
  };
  e.prototype.getUpdateUserCompletionCallback = function () {
    return this.updateCompletionCallback;
  };
  e.prototype.getDisableDiagnosticsLogging = function () {
    return this.disableDiagnosticsLogging;
  };
  e.prototype.getLogLevel = function () {
    return this.logLevel;
  };
  e.prototype.getIgnoreWindowUndefined = function () {
    return this.ignoreWindowUndefined;
  };
  e.prototype.getFetchMode = function () {
    return this.fetchMode;
  };
  e.prototype.getDisableLocalOverrides = function () {
    return this.disableLocalOverrides;
  };
  e.prototype.getGateEvaluationCallback = function () {
    return this.gateEvaluationCallback;
  };
  e.prototype.normalizeNumberInput = function (e, r) {
    return null == e ? r.$$default : Math.max(Math.min(e, r.max), r.min);
  };
  return e;
}();
exports.$$default = o;