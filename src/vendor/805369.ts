import i from "../vendor/38454";
var s = "__lodash_hash_undefined__";
function o(e, r) {
  var n = this.__data__;
  this.size += this.has(e) ? 0 : 1;
  n[e] = i && void 0 === r ? s : r;
  return this;
}
module.exports = o;