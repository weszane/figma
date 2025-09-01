module.exports = function (e, r) {
  return new Buffer(e, r);
};
module.exports.test = function (e) {
  return Buffer.isBuffer(e);
};