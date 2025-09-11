import { $isCodeNode } from "@lexical/code";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $isAtNodeEnd } from "@lexical/selection";
import { KEY_BACKSPACE_COMMAND, $getSelection, $isRangeSelection, $isRootNode, $isLineBreakNode, $createParagraphNode, COMMAND_PRIORITY_NORMAL } from "lexical";
export function $$o0() {
  let [e] = useLexicalComposerContext();
  e.registerCommand(KEY_BACKSPACE_COMMAND, e => {
    let t = $getSelection();
    if ($isRangeSelection(t)) {
      let o = t.anchor.getNode();
      let l = o.getParent();
      if (l && $isRootNode(l) && $isCodeNode(o) && $isAtNodeEnd(t.anchor)) {
        var i = o.getChildren();
        if (i.length > 0) {
          var r = i[i.length - 1];
          $isLineBreakNode(r) && r.remove();
        }
        let t = $createParagraphNode();
        i.length > 0 ? o.insertAfter(t) : o.replace(t);
        t.select();
        e.preventDefault();
        return !0;
      }
    }
    return !1;
  }, COMMAND_PRIORITY_NORMAL);
  return null;
}
export const A = $$o0;
