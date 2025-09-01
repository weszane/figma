import { strlen } from "../vendor/425872";
import i from "../vendor/652015";
var o = function (t, e) {
  return t === e;
};
var a = function (t) {
  return !!t;
};
var s = [];
module.exports = function (t) {
  var e = t.getCharacterList().map(function (t) {
    return t.getStyle();
  }).toList();
  var r = e.flatten().toSet().map(function (r) {
    var s;
    s = [];
    i(e.map(function (t) {
      return t.has(r);
    }).toList(), o, a, function (e, i) {
      var o = t.getText();
      s.push({
        offset: strlen(o.slice(0, e)),
        length: strlen(o.slice(e, i)),
        style: r
      });
    });
    return s;
  });
  return Array.prototype.concat.apply(s, r.toJS());
};