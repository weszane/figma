import i, { toStringTag } from "../vendor/50613";
import s from "../vendor/627335";
import o from "../vendor/744082";
var a = "[object Null]";
var h = "[object Undefined]";
var d = i ? toStringTag : void 0;
function p(e) {
  return null == e ? void 0 === e ? h : a : d && d in Object(e) ? s(e) : o(e);
}
module.exports = p;