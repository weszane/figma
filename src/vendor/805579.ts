function r(e) {
  var r = -1;
  var n = Array(e.size);
  e.forEach(function (e) {
    n[++r] = [e, e];
  });
  return n;
}
module.exports = r;