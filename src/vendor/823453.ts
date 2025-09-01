var r = /\w*$/;
function n(e) {
  var n = new e.constructor(e.source, r.exec(e));
  n.lastIndex = e.lastIndex;
  return n;
}
module.exports = n;