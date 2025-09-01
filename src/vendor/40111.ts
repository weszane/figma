var r = Math.floor;
var n = Math.random;
function i(e, i) {
  return e + r(n() * (i - e + 1));
}
module.exports = i;