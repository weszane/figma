var r = /\s/;
function n(e) {
  for (var n = e.length; n-- && r.test(e.charAt(n)););
  return n;
}
module.exports = n;