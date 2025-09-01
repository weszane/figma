import { useEffect } from "react";
import { DF } from "../vendor/463802";
export function $$a0({
  value: e
}) {
  let [t] = DF();
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