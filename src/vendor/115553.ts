import { set } from "../vendor/724102";
module.exports = function (t, e) {
  t.setMode("composite");
  t.update(set(t._latestEditorState, {
    inCompositionMode: !0
  }));
  t._onCompositionStart(e);
};