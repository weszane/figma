import i from "../vendor/236553";
function s(e, r) {
  var n = [];
  i(e, function (e, i, s) {
    r(e, i, s) && n.push(e);
  });
  return n;
}
module.exports = s;