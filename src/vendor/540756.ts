import { Repeat } from "../vendor/116740";
import i from "../vendor/300241";
import o from "../vendor/153658";
var a = Repeat;
module.exports = function (t, e, r, n) {
  e.isCollapsed() || o(!1);
  var s = null;
  if (null != r && (s = r.length), null == s || 0 === s) return t;
  var u = t.getBlockMap();
  var c = e.getStartKey();
  var l = e.getStartOffset();
  var f = u.get(c);
  var p = f.getText();
  var h = f.merge({
    text: p.slice(0, l) + r + p.slice(l, f.getLength()),
    characterList: i(f.getCharacterList(), a(n, s).toList(), l)
  });
  var d = l + s;
  return t.merge({
    blockMap: u.set(c, h),
    selectionAfter: e.merge({
      anchorOffset: d,
      focusOffset: d
    })
  });
};