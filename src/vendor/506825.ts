var r = Object.prototype.hasOwnProperty;
function n(e) {
  var n = e.length;
  var i = new e.constructor(n);
  n && "string" == typeof e[0] && r.call(e, "index") && (i.index = e.index, i.input = e.input);
  return i;
}
module.exports = n;