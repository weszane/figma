import i from "../vendor/435815";
function s(e) {
  var r = i(this, e).$$delete(e);
  this.size -= r ? 1 : 0;
  return r;
}
module.exports = s;