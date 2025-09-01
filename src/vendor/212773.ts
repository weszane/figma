function r(e, r) {
  var n = e.length;
  for (e.sort(r); n--;) e[n] = e[n].value;
  return e;
}
module.exports = r;