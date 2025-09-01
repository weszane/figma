import i from "../vendor/38454";
var s = Object.prototype.hasOwnProperty;
function o(e) {
  var r = this.__data__;
  return i ? void 0 !== r[e] : s.call(r, e);
}
module.exports = o;