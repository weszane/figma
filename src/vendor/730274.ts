import { deflateRaw, inflateRaw } from "../vendor/323834";
var i = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array;
exports.uncompressInputType = i ? "uint8array" : "array";
exports.compressInputType = i ? "uint8array" : "array";
exports.magic = "\b\0";
exports.compress = function (e, r) {
  return deflateRaw(e, {
    level: r.level || -1
  });
};
exports.uncompress = function (e) {
  return inflateRaw(e);
};