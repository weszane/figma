import _require from "../vendor/368474";
var i = this && this.__importDefault || function (e) {
  return e && e.__esModule ? e : {
    default: e
  };
};
exports.defaultErrorMap = void 0;
exports.setErrorMap = a;
exports.getErrorMap = h;
let s = i(_require);
exports.defaultErrorMap = s.$$default;
let o = s.$$default;
function a(e) {
  o = e;
}
function h() {
  return o;
}