import i from "../vendor/38454";
var s = "__lodash_hash_undefined__";
var o = Object.prototype.hasOwnProperty;
function a(e) {
  var r = this.__data__;
  if (i) {
    var n = r[e];
    return n === s ? void 0 : n;
  }
  return o.call(r, e) ? r[e] : void 0;
}
module.exports = a;