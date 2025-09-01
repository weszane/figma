import { forceSelection, acceptSelection } from "../vendor/724102";
import { isBrowser } from "../vendor/42266";
module.exports = function (t, e) {
  var r = t._latestEditorState;
  var o = r.getSelection();
  if (!o.getHasFocus()) {
    var a = o.set("hasFocus", !0);
    t.props.onFocus && t.props.onFocus(e);
    isBrowser("Chrome < 60.0.3081.0") ? t.update(forceSelection(r, a)) : t.update(acceptSelection(r, a));
  }
};