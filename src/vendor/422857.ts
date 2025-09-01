import i from "../vendor/435815";
function s(e, r) {
  var n = i(this, e);
  var s = n.size;
  n.set(e, r);
  this.size += n.size == s ? 0 : 1;
  return this;
}
module.exports = s;