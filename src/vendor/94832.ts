import { transformTo } from "../vendor/185149";
var s = function () {
  this.data = [];
};
s.prototype = {
  append: function (e) {
    e = transformTo("string", e);
    this.data.push(e);
  },
  finalize: function () {
    return this.data.join("");
  }
};
module.exports = s;