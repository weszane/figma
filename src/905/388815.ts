import { useEffect } from "react";
import { $createLinkNode } from "@lexical/link";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { PASTE_COMMAND, $getSelection, $isRangeSelection, $createTextNode, COMMAND_PRIORITY_HIGH } from "lexical";
import { normalizeUrl } from "../905/999278";
let l = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g;
let $$d0 = function () {
  let [e] = useLexicalComposerContext();
  useEffect(() => {
    let t = e.registerCommand(PASTE_COMMAND, t => {
      let i = t.clipboardData;
      if (!i) return !1;
      let n = i.getData("text");
      return !!function (e) {
        if (!new RegExp(l).test(e)) return !1;
        try {
          new URL(e);
          return !0;
        } catch (e) {
          return !1;
        }
      }(n) && "" !== normalizeUrl(n) && (e.update(() => {
        let e = $getSelection();
        if ($isRangeSelection(e)) {
          let t = $createLinkNode(n, {
            target: "_blank",
            rel: "noreferrer noopener nofollow ugc"
          });
          let i = e.getTextContent();
          let a = $createTextNode(i || n);
          t.append(a);
          e.insertNodes([t]);
        }
      }), t.preventDefault(), !0);
    }, COMMAND_PRIORITY_HIGH);
    return () => {
      t();
    };
  }, [e]);
  return null;
};
export const A = $$d0;