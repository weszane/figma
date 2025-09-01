import i from "../vendor/771061";
import { string2binary } from "../vendor/185149";
function o(e, r) {
  this.data = e;
  r || (this.data = string2binary(this.data));
  this.length = this.data.length;
  this.index = 0;
  this.zero = 0;
}
o.prototype = new i();
o.prototype.byteAt = function (e) {
  return this.data.charCodeAt(this.zero + e);
};
o.prototype.lastIndexOfSignature = function (e) {
  return this.data.lastIndexOf(e) - this.zero;
};
o.prototype.readData = function (e) {
  this.checkOffset(e);
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  this.index += e;
  return r;
};
module.exports = o;