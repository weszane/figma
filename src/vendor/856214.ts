import i from "../vendor/771061";
function s(e) {
  if (e) {
    this.data = e;
    this.length = this.data.length;
    this.index = 0;
    this.zero = 0;
    for (var r = 0; r < this.data.length; r++) e[r] = 255 & e[r];
  }
}
s.prototype = new i();
s.prototype.byteAt = function (e) {
  return this.data[this.zero + e];
};
s.prototype.lastIndexOfSignature = function (e) {
  for (r = e.charCodeAt(0), n = e.charCodeAt(1), i = e.charCodeAt(2), s = e.charCodeAt(3), o = this.length - 4, void 0; o >= 0; --o) {
    var r;
    var n;
    var i;
    var s;
    var o;
    if (this.data[o] === r && this.data[o + 1] === n && this.data[o + 2] === i && this.data[o + 3] === s) return o - this.zero;
  }
  return -1;
};
s.prototype.readData = function (e) {
  if (this.checkOffset(e), 0 === e) return [];
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  this.index += e;
  return r;
};
module.exports = s;