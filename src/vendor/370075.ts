import n from "../vendor/71858";
module.exports = function (t) {
  var e = n(t);
  return {
    x: e.left,
    y: e.top,
    width: e.right - e.left,
    height: e.bottom - e.top
  };
};