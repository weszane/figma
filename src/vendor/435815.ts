import i from "../vendor/941094";
function s(e, r) {
  var n = e.__data__;
  return i(r) ? n["string" == typeof r ? "string" : "hash"] : n.map;
}
module.exports = s;