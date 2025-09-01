import { A as _$$A } from "../vendor/471459";
import { A as _$$A2 } from "../vendor/687669";
let s = function (t) {
  return _$$A2(t) && "[object Arguments]" == _$$A(t);
};
var l = Object.prototype;
var o = l.hasOwnProperty;
var a = l.propertyIsEnumerable;
export let $$c0 = s(function () {
  return arguments;
}()) ? s : function (t) {
  return _$$A2(t) && o.call(t, "callee") && !a.call(t, "callee");
};
export const A = $$c0;