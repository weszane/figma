import i from "../vendor/384332";
var s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var o = /\\(\\)?/g;
var a = i(function (e) {
  var r = [];
  46 === e.charCodeAt(0) && r.push("");
  e.replace(s, function (e, n, i, s) {
    r.push(i ? s.replace(o, "$1") : n || e);
  });
  return r;
});
module.exports = a;