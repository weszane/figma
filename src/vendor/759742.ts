import n from "../vendor/400786";
import i from "../vendor/239424";
module.exports = function (t, e) {
  var r = e.getStartKey();
  var o = e.getStartOffset();
  var a = e.getEndKey();
  var s = e.getEndOffset();
  var u = i(t, e).getBlockMap();
  var c = u.keySeq();
  var l = c.indexOf(r);
  var f = c.indexOf(a) + 1;
  return n(u.slice(l, f).map(function (t, e) {
    var n = t.getText();
    var i = t.getCharacterList();
    return r === a ? t.merge({
      text: n.slice(o, s),
      characterList: i.slice(o, s)
    }) : e === r ? t.merge({
      text: n.slice(o),
      characterList: i.slice(o)
    }) : e === a ? t.merge({
      text: n.slice(0, s),
      characterList: i.slice(0, s)
    }) : t;
  }));
};