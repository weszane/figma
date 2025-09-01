import i from "../vendor/112746";
var s = 1 / 0;
var o = 17976931348623157e292;
function a(e) {
  return e ? (e = i(e)) === s || e === -s ? (e < 0 ? -1 : 1) * o : e == e ? e : 0 : 0 === e ? e : 0;
}
module.exports = a;