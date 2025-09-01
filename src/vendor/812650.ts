for (I = self.crypto || self.msCrypto, B = "-_", g = 36, void 0; g--;) {
  var I;
  var B;
  var g;
  B += g.toString(36);
}
for (g = 36; g-- - 10;) B += g.toString(36).toUpperCase();
module.exports = function (A) {
  var Q = "";
  var C = I.getRandomValues(new Uint8Array(A || 21));
  for (g = A || 21; g--;) Q += B[63 & C[g]];
  return Q;
};