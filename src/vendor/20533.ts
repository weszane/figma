Object.defineProperty(exports, "__esModule", {
  value: !0
});
var n = function () {
  function e(e, r, n, i, s, o, a, h, d) {
    void 0 === s && (s = []);
    void 0 === o && (o = "");
    void 0 === a && (a = null);
    void 0 === h && (h = null);
    void 0 === d && (d = null);
    this.onDefaultValueFallback = null;
    this.name = e;
    this.value = JSON.parse(JSON.stringify(null != r ? r : {}));
    this.ruleID = null != n ? n : "";
    this.secondaryExposures = s;
    this.allocatedExperimentName = o;
    this.evaluationDetails = i;
    this.onDefaultValueFallback = a;
    this.groupName = h;
    this.idType = d;
  }
  e.prototype.get = function (e, r, n) {
    var i;
    var s;
    var o = this.getValue(e, r);
    if (null == o) return r;
    var a = Array.isArray(r) ? "array" : typeof r;
    var h = Array.isArray(o) ? "array" : typeof o;
    return n ? n(o) ? o : (null === (i = this.onDefaultValueFallback) || void 0 === i || i.call(this, this, e, a, h), r) : null == r || a === h ? o : (null === (s = this.onDefaultValueFallback) || void 0 === s || s.call(this, this, e, a, h), r);
  };
  e.prototype.getValue = function (e, r) {
    return null == e ? this.value : (null == r && (r = null), null == this.value[e]) ? r : this.value[e];
  };
  e.prototype.getRuleID = function () {
    return this.ruleID;
  };
  e.prototype.getGroupName = function () {
    return this.groupName;
  };
  e.prototype.getIDType = function () {
    return this.idType;
  };
  e.prototype.getName = function () {
    return this.name;
  };
  e.prototype.getEvaluationDetails = function () {
    return this.evaluationDetails;
  };
  e.prototype._getSecondaryExposures = function () {
    return this.secondaryExposures;
  };
  e.prototype._getAllocatedExperimentName = function () {
    return this.allocatedExperimentName;
  };
  return e;
}();
exports.$$default = n;