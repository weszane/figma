import i from "../vendor/338036";
import s from "../vendor/422750";
var o = "[object Symbol]";
function a(e) {
  return "symbol" == typeof e || s(e) && i(e) == o;
}
module.exports = a;