function e() {
  var t;
  document.documentElement && (t = document.documentElement.clientWidth);
  !t && document.body && (t = document.body.clientWidth);
  return t || 0;
}
function r() {
  var t;
  document.documentElement && (t = document.documentElement.clientHeight);
  !t && document.body && (t = document.body.clientHeight);
  return t || 0;
}
function n() {
  return {
    width: window.innerWidth || e(),
    height: window.innerHeight || r()
  };
}
n.withoutScrollbars = function () {
  return {
    width: e(),
    height: r()
  };
};
module.exports = n;