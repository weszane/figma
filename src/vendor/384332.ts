import i from "../vendor/643300";
var s = 500;
function o(e) {
  var r = i(e, function (e) {
    n.size === s && n.clear();
    return e;
  });
  var n = r.cache;
  return r;
}
module.exports = o;