import i from "../vendor/815428";
var s = /^\s+/;
function o(e) {
  return e ? e.slice(0, i(e) + 1).replace(s, "") : e;
}
module.exports = o;