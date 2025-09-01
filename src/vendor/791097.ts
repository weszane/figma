import _require from "../vendor/730274";
exports.STORE = {
  magic: "\0\0",
  compress: function (e, r) {
    return e;
  },
  uncompress: function (e) {
    return e;
  },
  compressInputType: null,
  uncompressInputType: null
};
exports.DEFLATE = _require;