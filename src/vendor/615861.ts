var r = 0x1fffffffffffff;
var n = /^(?:0|[1-9]\d*)$/;
function i(e, i) {
  var s = typeof e;
  return !!(i = i) && ("number" == s || "symbol" != s && n.test(e)) && e > -1 && e % 1 == 0 && e < i;
}
module.exports = i;