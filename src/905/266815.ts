import { useCallback, useState } from "react";
import { useDispatch } from "../vendor/514228";
import { getI18nString } from "../905/303541";
import { S } from "../figma_app/11182";
import { q5 } from "../figma_app/516028";
import { _6 } from "../figma_app/386952";
import { jN } from "../905/612685";
import { FFileType } from "../figma_app/191312";
import { sn } from "../905/301347";
export function $$p1() {
  let e = useDispatch();
  let t = sn();
  let i = _6();
  let a = "prototype" === i.view;
  let p = q5();
  let m = a ? i.file.editor_type : p?.editorType;
  return useCallback(i => {
    let n = jN({
      file: {
        key: i.key,
        editorType: m || FFileType.DESIGN
      },
      base: a ? "proto" : "file",
      nodeId: i.client_meta?.node_id,
      allowDefaulting: !1,
      commentId: i.parent_id ?? i.id,
      ...t
    });
    return e(S({
      url: n
    }));
  }, [e, t, a, m]);
}
export function $$m0() {
  let [e, t] = useState(null);
  return [e, () => {
    e?.endsWith("\xa0") ? t(getI18nString("comments.accessibility_reply_added")) : t(getI18nString("comments.accessibility_reply_added") + "\xa0");
  }];
}
export const R = $$m0;
export const v = $$p1;