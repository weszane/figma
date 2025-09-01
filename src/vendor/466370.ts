import n from "../vendor/209540";
module.exports = function (t, e) {
  if (t._latestEditorState.getSelection().isCollapsed()) {
    e.preventDefault();
    return;
  }
  t.setClipboard(n(t._latestEditorState));
};