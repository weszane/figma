import n from "../vendor/776854";
module.exports = function (t) {
  var e = t.getSelection();
  if (!e.rangeCount) return null;
  var r = n(e.getRangeAt(0));
  var i = r.top;
  var o = r.right;
  var a = r.bottom;
  var s = r.left;
  return 0 === i && 0 === o && 0 === a && 0 === s ? null : r;
};