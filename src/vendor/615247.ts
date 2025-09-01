import _require from "../vendor/794116";
for (i = _require, s = [], o = 0, void 0; o < 256; ++o) {
  var i;
  var s;
  var o;
  s.push((o + 256).toString(16).substr(1));
}
export let $$a0 = function (e) {
  var r = $$arguments.length > 1 && void 0 !== $$arguments[1] ? $$arguments[1] : 0;
  var n = (s[e[r + 0]] + s[e[r + 1]] + s[e[r + 2]] + s[e[r + 3]] + "-" + s[e[r + 4]] + s[e[r + 5]] + "-" + s[e[r + 6]] + s[e[r + 7]] + "-" + s[e[r + 8]] + s[e[r + 9]] + "-" + s[e[r + 10]] + s[e[r + 11]] + s[e[r + 12]] + s[e[r + 13]] + s[e[r + 14]] + s[e[r + 15]]).toLowerCase();
  if (!i.A(n)) throw TypeError("Stringified UUID is invalid");
  return n;
};
export const A = $$a0;