import { undo, set } from "../vendor/724102";
module.exports = function (t, e, r) {
  var i = undo(e);
  if ("spellcheck-change" === e.getLastChangeType()) {
    var o = i.getCurrentContent();
    r(set(i, {
      nativelyRenderedContent: o
    }));
    return;
  }
  if (t.preventDefault(), !e.getNativelyRenderedContent()) {
    r(i);
    return;
  }
  r(set(e, {
    nativelyRenderedContent: null
  }));
  setTimeout(function () {
    r(i);
  }, 0);
};