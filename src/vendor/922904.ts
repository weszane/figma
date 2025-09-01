import { transformTo } from "../vendor/185149";
var s = function (e) {
  this.data = new Uint8Array(e);
  this.index = 0;
};
s.prototype = {
  append: function (e) {
    0 !== e.length && (e = transformTo("uint8array", e), this.data.set(e, this.index), this.index += e.length);
  },
  finalize: function () {
    return this.data;
  }
};
module.exports = s;