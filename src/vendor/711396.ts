var r = "Expected a function";
function n(e) {
  if ("function" != typeof e) throw TypeError(r);
  return function () {
    var r = arguments;
    switch (r.length) {
      case 0:
        return !e.call(this);
      case 1:
        return !e.call(this, r[0]);
      case 2:
        return !e.call(this, r[0], r[1]);
      case 3:
        return !e.call(this, r[0], r[1], r[2]);
    }
    return !e.apply(this, r);
  };
}
module.exports = n;