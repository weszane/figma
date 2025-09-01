import i from "../vendor/856214";
function s(e) {
  e && (this.data = e, this.length = this.data.length, this.index = 0, this.zero = 0);
}
s.prototype = new i();
s.prototype.readData = function (e) {
  if (this.checkOffset(e), 0 === e) return new Uint8Array(0);
  var r = this.data.subarray(this.zero + this.index, this.zero + this.index + e);
  this.index += e;
  return r;
};
module.exports = s;