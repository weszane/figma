var r = 800;
var n = 16;
var i = Date.now;
function s(e) {
  var s = 0;
  var o = 0;
  return function () {
    var a = i();
    var h = n - (a - o);
    if (o = a, h > 0) {
      if (++s >= r) return $$arguments[0];
    } else s = 0;
    return e.apply(void 0, arguments);
  };
}
module.exports = s;