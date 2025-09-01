module.exports = {
  getRemovalRange: function (t, e, r, n, i) {
    var o;
    var a = r.split(" ");
    a = a.map(function (t, e) {
      if ("forward" === i) {
        if (e > 0) return " " + t;
      } else if (e < a.length - 1) return t + " ";
      return t;
    });
    for (s = n, u = null, c = null, l = 0, void 0; l < a.length; l++) {
      var s;
      var u;
      var c;
      var l;
      if (t < (o = s + a[l].length) && s < e) {
        null !== u || (u = s);
        c = o;
      } else if (null !== u) break;
      s = o;
    }
    var f = n + r.length;
    var p = u === n;
    var h = c === f;
    (!p && h || p && !h) && ("forward" === i ? c !== f && c++ : u !== n && u--);
    return {
      start: u,
      end: c
    };
  }
};