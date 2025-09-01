import i from "../vendor/782017";
function s(e, r) {
  var n = r ? i(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
module.exports = s;