Object.defineProperty(exports, "__esModule", {
  value: !0
});
var n = function () {
  function e(e, r, n, i, s, o, a, h, d, p) {
    void 0 === s && (s = null);
    void 0 === o && (o = []);
    void 0 === a && (a = []);
    void 0 === h && (h = "");
    void 0 === d && (d = []);
    void 0 === p && (p = null);
    this.logParameterFunction = s;
    this.name = e;
    this.value = JSON.parse(JSON.stringify(null != r ? r : {}));
    this.ruleID = null != n ? n : "";
    this.evaluationDetails = i;
    this.secondaryExposures = o;
    this.undelegatedSecondaryExposures = a;
    this.allocatedExperimentName = h;
    this.explicitParameters = d;
    this.groupName = p;
  }
  e._create = function (r, n, i, s, o, a, h, d, p, g) {
    void 0 === o && (o = null);
    void 0 === a && (a = []);
    void 0 === h && (h = []);
    void 0 === d && (d = "");
    void 0 === p && (p = []);
    void 0 === g && (g = null);
    return new e(r, n, i, s, o, a, h, d, p, g);
  };
  e.prototype.get = function (e, r, n) {
    var i = this;
    var s = this.value[e];
    if (null == s) return r;
    var o = function () {
      i.logLayerParameterExposure(e);
      return s;
    };
    return n ? n(s) ? o() : r : null == r || typeof s == typeof r && Array.isArray(r) === Array.isArray(s) ? o() : r;
  };
  e.prototype.getValue = function (e, r) {
    void 0 == r && (r = null);
    var n = this.value[e];
    null != n && this.logLayerParameterExposure(e);
    return null != n ? n : r;
  };
  e.prototype.getRuleID = function () {
    return this.ruleID;
  };
  e.prototype.getGroupName = function () {
    return this.groupName;
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
  e.prototype._getUndelegatedSecondaryExposures = function () {
    return this.undelegatedSecondaryExposures;
  };
  e.prototype._getAllocatedExperimentName = function () {
    return this.allocatedExperimentName;
  };
  e.prototype._getExplicitParameters = function () {
    return this.explicitParameters;
  };
  e.prototype._getEvaluationDetails = function () {
    return this.evaluationDetails;
  };
  e.prototype.logLayerParameterExposure = function (e) {
    var r;
    null === (r = this.logParameterFunction) || void 0 === r || r.call(this, this, e);
  };
  return e;
}();
exports.$$default = n;