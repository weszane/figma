import { LinkNode, TOGGLE_LINK_COMMAND, $toggleLink } from "../vendor/491721";
import { useLexicalComposerContext } from "../vendor/463802";
import { mergeRegister, objectKlassEquals } from "../vendor/425002";
import { COMMAND_PRIORITY_LOW, PASTE_COMMAND, $getSelection, $isRangeSelection, $isElementNode } from "../vendor/408361";
import { useEffect } from "react";
export function $$d0({
  validateUrl: e
}) {
  let [r] = useLexicalComposerContext();
  useEffect(() => {
    if (!r.hasNodes([LinkNode])) throw Error("LinkPlugin: LinkNode not registered on editor");
    return mergeRegister(r.registerCommand(TOGGLE_LINK_COMMAND, r => {
      if (null === r) {
        $toggleLink(r);
        return !0;
      }
      if ("string" == typeof r) return !(void 0 !== e && !e(r)) && ($toggleLink(r), !0);
      {
        let {
          url,
          target,
          rel,
          title
        } = r;
        $toggleLink(url, {
          rel,
          target,
          title
        });
        return !0;
      }
    }, COMMAND_PRIORITY_LOW), void 0 !== e ? r.registerCommand(PASTE_COMMAND, n => {
      let s = $getSelection();
      if (!$isRangeSelection(s) || s.isCollapsed() || !objectKlassEquals(n, ClipboardEvent)) return !1;
      let h = n;
      if (null === h.clipboardData) return !1;
      let d = h.clipboardData.getData("text");
      return !!e(d) && !s.getNodes().some(e => $isElementNode(e)) && (r.dispatchCommand(TOGGLE_LINK_COMMAND, d), n.preventDefault(), !0);
    }, COMMAND_PRIORITY_LOW) : () => {});
  }, [r, e]);
  return null;
}
export const W = $$d0;