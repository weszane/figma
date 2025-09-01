var r = Object.prototype;
function n(e) {
  var n = e && e.constructor;
  return e === ("function" == typeof n && n.prototype || r);
}
module.exports = n;