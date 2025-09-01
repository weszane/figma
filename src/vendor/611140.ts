import { Base64 } from "../vendor/414997";
import { sha256create } from "../vendor/928957";
exports.getUserCacheKey = exports.sha256Hash = exports.djb2Hash = exports.userCacheKeyHash = void 0;
var o = {};
function a(e) {
  for (r = 0, n = 0, void 0; n < e.length; n++) {
    var r;
    var n;
    r = (r << 5) - r + e.charCodeAt(n);
    r &= r;
  }
  return r;
}
function h(e) {
  return String(a(e));
}
function d(e) {
  return String(a(e) >>> 0);
}
function p(e) {
  var r = o[e];
  if (r) return r;
  var n = sha256create().update(e).arrayBuffer();
  var a = Base64.encodeArrayBuffer(n);
  o[e] = a;
  return a;
}
function g(e) {
  var r;
  var n = "userID:" + String(null !== (r = e?.userID) && void 0 !== r ? r : "");
  var i = e?.customIDs;
  if (null != i) for (s = 0, a = Object.entries(i), void 0; s < a.length; s++) {
    var s;
    var a;
    var d = a[s];
    n += ";" + d[0] + ":" + d[1];
  }
  var p = o[n];
  if (p) return p;
  var g = h(n);
  o[n] = g;
  return g;
}
exports.userCacheKeyHash = h;
exports.djb2Hash = d;
exports.sha256Hash = p;
exports.getUserCacheKey = g;