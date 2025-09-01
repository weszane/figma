module.exports = function (e) {
  return e && e.toString ? e.toString() : String(e);
};