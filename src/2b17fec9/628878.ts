import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $filter, $getNearestBlockElementAncestorOrThrow } from "../vendor/425002";
import { KEY_TAB_COMMAND, $getSelection, $isRangeSelection, $isBlockElementNode, $createRangeSelection, $normalizeSelection, INSERT_TAB_COMMAND, OUTDENT_CONTENT_COMMAND, INDENT_CONTENT_COMMAND, COMMAND_PRIORITY_EDITOR } from "lexical";
import { useEffect } from "react";
export function $$o0() {
  let [e] = useLexicalComposerContext();
  useEffect(() => e.registerCommand(KEY_TAB_COMMAND, t => {
    let i = $getSelection();
    if (!$isRangeSelection(i)) return !1;
    t.preventDefault();
    let n = !function (e) {
      let t = e.getNodes();
      if ($filter(t, e => $isBlockElementNode(e) && e.canIndent() ? e : null).length > 0) return !0;
      let i = e.anchor;
      let n = e.focus;
      let s = n.isBefore(i) ? n : i;
      let o = s.getNode();
      let l = $getNearestBlockElementAncestorOrThrow(o);
      if (l.canIndent()) {
        let e = l.getKey();
        let t = $createRangeSelection();
        if (t.anchor.set(e, 0, "element"), t.focus.set(e, 0, "element"), (t = $normalizeSelection(t)).anchor.is(s)) return !0;
      }
      return !1;
    }(i) ? INSERT_TAB_COMMAND : t.shiftKey ? OUTDENT_CONTENT_COMMAND : INDENT_CONTENT_COMMAND;
    return e.dispatchCommand(n, void 0);
  }, COMMAND_PRIORITY_EDITOR));
  return null;
}
export const m = $$o0;
