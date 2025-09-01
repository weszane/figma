import i from "../vendor/742904";
function s(e) {
  var r = new e.constructor(e.byteLength);
  new i(r).set(new i(e));
  return r;
}
module.exports = s;