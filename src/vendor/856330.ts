var r = 0x1fffffffffffff;
function n(e) {
  return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r;
}
module.exports = n;