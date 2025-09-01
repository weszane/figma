import i from "../vendor/409308";
function s(e) {
  this.data = e;
  this.length = this.data.length;
  this.index = 0;
  this.zero = 0;
}
s.prototype = new i();
s.prototype.readData = function (e) {
  this.checkOffset(e);
  var r = this.data.slice(this.zero + this.index, this.zero + this.index + e);
  this.index += e;
  return r;
};
module.exports = s;