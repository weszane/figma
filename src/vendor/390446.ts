import i from "../vendor/670820";
function s(e, r, n) {
  var s = e.length;
  n = void 0 === n ? s : n;
  return !r && n >= s ? e : i(e, r, n);
}
module.exports = s;