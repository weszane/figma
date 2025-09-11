import { useLexicalComposerContext } from "../vendor/463802";
import { useLayoutEffect, useEffect } from "react";
let o = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? useLayoutEffect : useEffect;
export function $$a0({
  ignoreHistoryMergeTagChange: e = !0,
  ignoreSelectionChange: r = !1,
  onChange: n
}) {
  let [s] = useLexicalComposerContext();
  o(() => {
    if (n) return s.registerUpdateListener(({
      editorState: i,
      dirtyElements: o,
      dirtyLeaves: a,
      prevEditorState: h,
      tags: d
    }) => {
      r && 0 === o.size && 0 === a.size || e && d.has("history-merge") || h.isEmpty() || n(i, s, d);
    });
  }, [s, e, r, n]);
  return null;
}
export const D = $$a0;