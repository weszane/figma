import i from "../vendor/654714";
import s from "../vendor/422750";
var o = Object.prototype;
var a = o.hasOwnProperty;
var h = o.propertyIsEnumerable;
var d = i(function () {
  return arguments;
}()) ? i : function (e) {
  return s(e) && a.call(e, "callee") && !h.call(e, "callee");
};
module.exports = d;