function r(e, r, n) {
  switch (n.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, n[0]);
    case 2:
      return e.call(r, n[0], n[1]);
    case 3:
      return e.call(r, n[0], n[1], n[2]);
  }
  return e.apply(r, n);
}
module.exports = r;