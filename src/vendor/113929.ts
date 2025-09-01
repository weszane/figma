import { encode, decode } from "../vendor/477865";
exports.encode = function (e) {
  var t;
  var n = "";
  var i = e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
  do {
    t = 31 & i;
    (i >>>= 5) > 0 && (t |= 32);
    n += encode(t);
  } while (i > 0);
  return n;
};
exports.decode = function (e, t, n) {
  var i;
  var o;
  var a;
  var s;
  var l = e.length;
  var u = 0;
  var c = 0;
  do {
    if (t >= l) throw Error("Expected more digits in base 64 VLQ value.");
    if (-1 === (s = decode(e.charCodeAt(t++)))) throw Error("Invalid base64 digit: " + e.charAt(t - 1));
    a = !!(32 & s);
    s &= 31;
    u += s << c;
    c += 5;
  } while (a);
  n.value = (o = (i = u) >> 1, (1 & i) == 1 ? -o : o);
  n.rest = t;
};