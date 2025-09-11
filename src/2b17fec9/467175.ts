import { useEffect } from "react";
import { $isListNode, $getListDepth, $isListItemNode } from "@lexical/list";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INDENT_CONTENT_COMMAND, $getSelection, $isRangeSelection, $isElementNode, COMMAND_PRIORITY_CRITICAL } from "lexical";
export function $$o0({
  maxDepth: e
}) {
  let [t] = useLexicalComposerContext();
  useEffect(() => t.registerCommand(INDENT_CONTENT_COMMAND, () => !function (e) {
    let t = $getSelection();
    if (!$isRangeSelection(t)) return !1;
    let i = function (e) {
      let t = e.getNodes();
      return new Set(0 === t.length ? [e.anchor.getNode().getParentOrThrow(), e.focus.getNode().getParentOrThrow()] : t.map(e => $isElementNode(e) ? e : e.getParentOrThrow()));
    }(t);
    let n = 0;
    for (let e of i) if ($isListNode(e)) n = Math.max($getListDepth(e) + 1, n); else {
      if (!$isListItemNode(e)) return !1;
      let t = e.getParent();
      if (!$isListNode(t)) throw Error("LimitIndentLevelPlugin: A ListItemNode must have a ListNode for a parent.");
      n = Math.max($getListDepth(t) + 1, n);
    }
    return n <= e;
  }(e ?? 7), COMMAND_PRIORITY_CRITICAL), [t, e]);
  return null;
}
export const A = $$o0;
