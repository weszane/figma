import { slice } from "../vendor/431847";
import { sort } from "../vendor/431847";
var r = sort;
var i = slice;
function A(e, t) {
  var n = e.getCall(0);
  var r = t.getCall(0);
  return (n && n.callId || -1) < (r && r.callId || -1) ? -1 : 1;
}
module.exports = function (e) {
  return r(i(e), A);
};