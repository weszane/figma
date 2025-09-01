import { transformTo } from "../vendor/185149";
function s(e) {
  this.data = null;
  this.length = 0;
  this.index = 0;
  this.zero = 0;
}
s.prototype = {
  checkOffset: function (e) {
    this.checkIndex(this.index + e);
  },
  checkIndex: function (e) {
    if (this.length < this.zero + e || e < 0) throw Error("End of data reached (data length = " + this.length + ", asked index = " + e + "). Corrupted zip ?");
  },
  setIndex: function (e) {
    this.checkIndex(e);
    this.index = e;
  },
  skip: function (e) {
    this.setIndex(this.index + e);
  },
  byteAt: function (e) {},
  readInt: function (e) {
    var r;
    var n = 0;
    for (this.checkOffset(e), r = this.index + e - 1; r >= this.index; r--) n = (n << 8) + this.byteAt(r);
    this.index += e;
    return n;
  },
  readString: function (e) {
    return transformTo("string", this.readData(e));
  },
  readData: function (e) {},
  lastIndexOfSignature: function (e) {},
  readDate: function () {
    var e = this.readInt(4);
    return new Date((e >> 25 & 127) + 1980, (e >> 21 & 15) - 1, e >> 16 & 31, e >> 11 & 31, e >> 5 & 63, (31 & e) << 1);
  }
};
module.exports = s;