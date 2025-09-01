module.exports = function (t) {
  var e = {};
  return function (r) {
    e.hasOwnProperty(r) || (e[r] = t.call(this, r));
    return e[r];
  };
};