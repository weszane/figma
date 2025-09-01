import { now } from "../vendor/404228";
exports.DiagnosticsKey = exports.DiagnosticsEvent = void 0;
var i;
var s;
!function (e) {
  e.START = "start";
  e.END = "end";
}(i = exports.DiagnosticsEvent || (exports.DiagnosticsEvent = {}));
(function (e) {
  e.OVERALL = "overall";
  e.INITIALIZE = "initialize";
  e.INITIALIZE_WITH_DELTA = "initialize_with_delta";
  e.CHECK_GATE = "check_gate";
  e.GET_CONFIG = "get_config";
  e.GET_EXPERIMENT = "get_experiment";
  e.GET_LAYER = "get_layer";
})(s = exports.DiagnosticsKey || (exports.DiagnosticsKey = {}));
var a = function () {
  function e(e, r) {
    this.context = e;
    this.capacity = r;
    this.markers = [];
    this.metadata = {};
  }
  e.prototype.reset = function () {
    this.markers = [];
    this.metadata = {};
  };
  e.prototype.getCount = function () {
    return this.markers.length;
  };
  e.prototype.getMarkers = function () {
    return {
      context: this.context,
      markers: this.markers,
      metadata: this.metadata
    };
  };
  e.prototype.addMetadata = function (e, r) {
    this.metadata[e] = r;
  };
  e.prototype.mark = function (e, r, n, i) {
    void 0 === n && (n = null);
    void 0 === i && (i = null);
    return (!this.capacity || !(this.markers.length >= this.capacity)) && (this.markers.push({
      key: e,
      step: n,
      action: r,
      value: i,
      timestamp: now()
    }), !0);
  };
  return e;
}();
exports.$$default = a;