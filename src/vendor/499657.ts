function r(e, r) {
  return function (n) {
    return null != n && n[e] === r && (void 0 !== r || e in Object(n));
  };
}
module.exports = r;