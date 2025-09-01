import { compareByGeneratedPositionsInflated } from "../vendor/671438";
function i() {
  this._array = [];
  this._sorted = !0;
  this._last = {
    generatedLine: -1,
    generatedColumn: 0
  };
}
i.prototype.unsortedForEach = function (e, t) {
  this._array.forEach(e, t);
};
i.prototype.add = function (e) {
  var t;
  var n;
  var i;
  var o;
  var a;
  (n = (t = this._last).generatedLine, i = e.generatedLine, o = t.generatedColumn, a = e.generatedColumn, i > n || i == n && a >= o || 0 >= compareByGeneratedPositionsInflated(t, e)) ? this._last = e : this._sorted = !1;
  this._array.push(e);
};
i.prototype.toArray = function () {
  this._sorted || (this._array.sort(compareByGeneratedPositionsInflated), this._sorted = !0);
  return this._array;
};
exports.P = i;