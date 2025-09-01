var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
exports.encode = function (e, r) {
  for (g = "", m = 0, void 0; m < e.length;) {
    var i;
    var s;
    var o;
    var a;
    var h;
    var d;
    var p;
    var g;
    var m;
    i = e.charCodeAt(m++);
    s = e.charCodeAt(m++);
    o = e.charCodeAt(m++);
    a = i >> 2;
    h = (3 & i) << 4 | s >> 4;
    d = (15 & s) << 2 | o >> 6;
    p = 63 & o;
    isNaN(s) ? d = p = 64 : isNaN(o) && (p = 64);
    g = g + n.charAt(a) + n.charAt(h) + n.charAt(d) + n.charAt(p);
  }
  return g;
};
exports.decode = function (e, r) {
  var i;
  var s;
  var o;
  var a;
  var h;
  var d;
  var p;
  var g = "";
  var m = 0;
  for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); m < e.length;) {
    a = n.indexOf(e.charAt(m++));
    h = n.indexOf(e.charAt(m++));
    d = n.indexOf(e.charAt(m++));
    p = n.indexOf(e.charAt(m++));
    i = a << 2 | h >> 4;
    s = (15 & h) << 4 | d >> 2;
    o = (3 & d) << 6 | p;
    g += String.fromCharCode(i);
    64 != d && (g += String.fromCharCode(s));
    64 != p && (g += String.fromCharCode(o));
  }
  return g;
};