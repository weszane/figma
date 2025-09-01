module.exports = function (t, e) {
  var r = t.getSelection();
  var n = t.getCurrentContent();
  var i = r.getStartKey();
  var o = r.getStartOffset();
  var a = i;
  var s = 0;
  if (e > o) {
    var u = n.getKeyBefore(i);
    null == u ? a = i : (a = u, s = n.getBlockForKey(u).getText().length);
  } else s = o - e;
  return r.merge({
    focusKey: a,
    focusOffset: s,
    isBackward: !0
  });
};