import n from "../vendor/507517";
module.exports = function (t) {
  var e = n(t);
  var r = 0;
  var i = 0;
  var o = 0;
  var a = 0;
  if (e.length) {
    if (e.length > 1 && 0 === e[0].width) {
      var s = e[1];
      r = s.top;
      i = s.right;
      o = s.bottom;
      a = s.left;
    } else {
      var u = e[0];
      r = u.top;
      i = u.right;
      o = u.bottom;
      a = u.left;
    }
    for (var c = 1; c < e.length; c++) {
      var l = e[c];
      0 !== l.height && 0 !== l.width && (r = Math.min(r, l.top), i = Math.max(i, l.right), o = Math.max(o, l.bottom), a = Math.min(a, l.left));
    }
  }
  return {
    top: r,
    right: i,
    bottom: o,
    left: a,
    width: i - a,
    height: o - r
  };
};