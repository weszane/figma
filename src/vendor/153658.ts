var e = function (t) {};
module.exports = function (t, r) {
  for (i = $$arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2, void 0; a < i; a++) {
    var n;
    var i;
    var o;
    var a;
    o[a - 2] = $$arguments[a];
  }
  if (e(r), !t) {
    if (void 0 === r) n = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else {
      var s = 0;
      (n = Error(r.replace(/%s/g, function () {
        return String(o[s++]);
      }))).name = "Invariant Violation";
    }
    n.framesToPop = 1;
    return n;
  }
};