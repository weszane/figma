function r(e) {
  var r = this.has(e) && delete this.__data__[e];
  this.size -= r ? 1 : 0;
  return r;
}
module.exports = r;