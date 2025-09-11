import { useLexicalComposerContext } from "../vendor/463802";
import { $getNodeByKey, $getSelection, $isNodeSelection, $createNodeSelection, $setSelection } from "../vendor/408361";
import { useState, useEffect, useCallback } from "react";
function a(e, r) {
  return e.getEditorState().read(() => {
    let e = $getNodeByKey(r);
    return null !== e && e.isSelected();
  });
}
export function $$h0(e) {
  let [r] = useLexicalComposerContext();
  let [n, h] = useState(() => a(r, e));
  useEffect(() => {
    let n = !0;
    let i = r.registerUpdateListener(() => {
      n && h(a(r, e));
    });
    return () => {
      n = !1;
      i();
    };
  }, [r, e]);
  return [n, useCallback(n => {
    r.update(() => {
      let r = $getSelection();
      $isNodeSelection(r) || (r = $createNodeSelection(), $setSelection(r));
      $isNodeSelection(r) && (n ? r.add(e) : r.$$delete(e));
    });
  }, [r, e]), useCallback(() => {
    r.update(() => {
      let e = $getSelection();
      $isNodeSelection(e) && e.clear();
    });
  }, [r])];
}
export const Y = $$h0;