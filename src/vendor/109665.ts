function r(e) {
  var r = -1;
  var n = Array(e.size);
  e.forEach(function (e, i) {
    n[++r] = [i, e];
  });
  return n;
}
module.exports = r;