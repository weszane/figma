import { string2binary, transformTo, arrayBuffer2Blob, getTypeOf, checkSupport, MAX_VALUE_16BITS, MAX_VALUE_32BITS, pretty, findCompression, isRegExp } from "../vendor/185149";
exports.string2binary = function (e) {
  return string2binary(e);
};
exports.string2Uint8Array = function (e) {
  return transformTo("uint8array", e);
};
exports.uint8Array2String = function (e) {
  return transformTo("string", e);
};
exports.string2Blob = function (e) {
  var r = transformTo("arraybuffer", e);
  return arrayBuffer2Blob(r);
};
exports.arrayBuffer2Blob = function (e) {
  return arrayBuffer2Blob(e);
};
exports.transformTo = function (e, r) {
  return transformTo(e, r);
};
exports.getTypeOf = function (e) {
  return getTypeOf(e);
};
exports.checkSupport = function (e) {
  return checkSupport(e);
};
exports.MAX_VALUE_16BITS = MAX_VALUE_16BITS;
exports.MAX_VALUE_32BITS = MAX_VALUE_32BITS;
exports.pretty = function (e) {
  return pretty(e);
};
exports.findCompression = function (e) {
  return findCompression(e);
};
exports.isRegExp = function (e) {
  return isRegExp(e);
};