function r(e, r, n, i) {
  var s = -1;
  var o = e?.length;
  for (i && o && (n = e[++s]); ++s < o;) n = r(n, e[s], s, e);
  return n;
}
module.exports = r;