import { logBlockedSelectionEvent } from "../vendor/555736";
import { forceSelection, acceptSelection } from "../vendor/724102";
import o from "../vendor/436672";
import a from "../vendor/47428";
module.exports = function (t) {
  if (t._blockSelectEvents || t._latestEditorState !== t.props.editorState) {
    if (t._blockSelectEvents) {
      var e = t.props.editorState.getSelection();
      logBlockedSelectionEvent({
        anonymizedDom: "N/A",
        extraParams: JSON.stringify({
          stacktrace: Error().stack
        }),
        selectionState: JSON.stringify(e.toJS())
      });
    }
    return;
  }
  var r = t.props.editorState;
  var s = a(r, o(t));
  var u = s.selectionState;
  u !== r.getSelection() && (r = s.needsRecovery ? forceSelection(r, u) : acceptSelection(r, u), t.update(r));
};