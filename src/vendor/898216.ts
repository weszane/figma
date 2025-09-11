import { ListNode, ListItemNode, registerList } from "../vendor/231521";
import { useLexicalComposerContext } from "../vendor/463802";
import { useEffect } from "react";
export function $$a0() {
  let [e] = useLexicalComposerContext();
  useEffect(() => {
    if (!e.hasNodes([ListNode, ListItemNode])) throw Error("ListPlugin: ListNode and/or ListItemNode not registered on editor");
  }, [e]);
  (function (e) {
    useEffect(() => registerList(e), [e]);
  })(e);
  return null;
}
export const Q = $$a0;