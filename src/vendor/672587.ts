function r(e, r) {
  var n = -1;
  var i = e.length;
  for (r || (r = Array(i)); ++n < i;) r[n] = e[n];
  return r;
}
module.exports = r;