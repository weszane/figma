import { useLexicalComposerContext } from "../vendor/463802";
import { $filter, $getNearestBlockElementAncestorOrThrow } from "../vendor/425002";
import { KEY_TAB_COMMAND, $getSelection, $isRangeSelection, $isBlockElementNode, $createRangeSelection, $normalizeSelection, INSERT_TAB_COMMAND, OUTDENT_CONTENT_COMMAND, INDENT_CONTENT_COMMAND, COMMAND_PRIORITY_EDITOR } from "../vendor/408361";
import { useEffect } from "react";
export function $$o0() {
  let [e] = useLexicalComposerContext();
  useEffect(() => e.registerCommand(KEY_TAB_COMMAND, t => {
    let i = $getSelection();
    if (!$isRangeSelection(i)) return !1;
    t.preventDefault();
    let r = !function (e) {
      let t = e.getNodes();
      if ($filter(t, e => $isBlockElementNode(e) && e.canIndent() ? e : null).length > 0) return !0;
      let i = e.anchor;
      let r = e.focus;
      let a = r.isBefore(i) ? r : i;
      let o = a.getNode();
      let u = $getNearestBlockElementAncestorOrThrow(o);
      if (u.canIndent()) {
        let e = u.getKey();
        let t = $createRangeSelection();
        if (t.anchor.set(e, 0, "element"), t.focus.set(e, 0, "element"), (t = $normalizeSelection(t)).anchor.is(a)) return !0;
      }
      return !1;
    }(i) ? INSERT_TAB_COMMAND : t.shiftKey ? OUTDENT_CONTENT_COMMAND : INDENT_CONTENT_COMMAND;
    return e.dispatchCommand(r, void 0);
  }, COMMAND_PRIORITY_EDITOR));
  return null;
}
export const m = $$o0;