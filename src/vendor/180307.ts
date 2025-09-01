module.exports = function (t) {
  return Object.keys(t).map(function (e) {
    return t[e];
  });
};