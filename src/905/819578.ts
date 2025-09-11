import { useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
export function $$a0({
  value: e
}) {
  let [t] = useLexicalComposerContext();
  useEffect(() => {
    try {
      JSON.stringify(t.getEditorState().toJSON()) !== e && t.update(() => {
        let i = t.parseEditorState(e);
        t.setEditorState(i);
      });
    } catch (e) {
      console.error("Error updating editor state", e);
    }
  }, [t, e]);
  return null;
}
export const D = $$a0;
