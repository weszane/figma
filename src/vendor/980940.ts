module.exports = function (t, e) {
  var r;
  var n = t.getSelection();
  var i = n.getStartKey();
  var o = n.getStartOffset();
  var a = t.getCurrentContent();
  var s = i;
  e > a.getBlockForKey(i).getText().length - o ? (s = a.getKeyAfter(i), r = 0) : r = o + e;
  return n.merge({
    focusKey: s,
    focusOffset: r
  });
};