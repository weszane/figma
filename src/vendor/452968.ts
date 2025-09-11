import { useLexicalComposerContext } from "../vendor/463802";
import { CLEAR_EDITOR_COMMAND, $getRoot, $getSelection, $createParagraphNode, $isRangeSelection, COMMAND_PRIORITY_EDITOR } from "../vendor/408361";
import { useLayoutEffect, useEffect } from "react";
let a = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
export function $$o0({
  onClear: e
}) {
  let [t] = useLexicalComposerContext();
  a(() => t.registerCommand(CLEAR_EDITOR_COMMAND, i => (t.update(() => {
    if (null == e) {
      let e = $getRoot();
      let t = $getSelection();
      let i = $createParagraphNode();
      e.clear();
      e.append(i);
      null !== t && i.select();
      $isRangeSelection(t) && (t.format = 0);
    } else e();
  }), !0), COMMAND_PRIORITY_EDITOR), [t, e]);
  return null;
}
export const Q = $$o0;