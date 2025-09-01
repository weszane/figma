var n = this && this.__assign || function () {
  return (n = Object.assign || function (e) {
    for (n = 1, i = $$arguments.length, void 0; n < i; n++) {
      var r;
      var n;
      var i;
      for (var s in r = $$arguments[n]) Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }).apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", {
  value: !0
});
var i = function () {
  function e(e) {
    this.user = null;
    this.value = null;
    this.metadata = null;
    this.eventName = e;
    this.statsigMetadata = {};
    this.time = Date.now();
  }
  e.prototype.getName = function () {
    return this.eventName;
  };
  e.prototype.setValue = function (e) {
    this.value = e;
  };
  e.prototype.setMetadata = function (e) {
    this.metadata = e;
  };
  e.prototype.addStatsigMetadata = function (e, r) {
    this.statsigMetadata[e] = r;
  };
  e.prototype.setUser = function (e) {
    this.user = n({}, e);
    delete this.user.privateAttributes;
  };
  e.prototype.setSecondaryExposures = function (e) {
    void 0 === e && (e = []);
    this.secondaryExposures = e;
  };
  e.prototype.toJsonObject = function () {
    var e;
    return {
      eventName: this.eventName,
      user: this.user,
      value: this.value,
      metadata: this.metadata,
      time: this.time,
      statsigMetadata: this.statsigMetadata,
      secondaryExposures: null !== (e = this.secondaryExposures) && void 0 !== e ? e : void 0
    };
  };
  return e;
}();
exports.$$default = i;