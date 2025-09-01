import i from "../vendor/416412";
function s(e, r) {
  for (var n = e.length; n--;) if (i(e[n][0], r)) return n;
  return -1;
}
module.exports = s;