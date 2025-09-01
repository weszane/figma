var r = Function.prototype.toString;
function n(e) {
  if (null != e) {
    try {
      return r.call(e);
    } catch (e) {}
    try {
      return e + "";
    } catch (e) {}
  }
  return "";
}
module.exports = n;