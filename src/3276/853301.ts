import { jsx } from "react/jsx-runtime";
import { useCallback, forwardRef } from "react";
import { d4 } from "../vendor/514228";
import { m1T } from "../figma_app/763686";
import { t as _$$t } from "../905/303541";
import { VU } from "../905/625959";
import { o3, nt } from "../905/226610";
export function $$c0() {
  let e = d4(e => e.mirror.appModel.activeCanvasEditModeType === m1T.COMMENTS);
  let t = o3(nt.commentsA11y) && e;
  return useCallback(() => {
    if (!t) return;
    let e = document.querySelector("button[data-kb-comment-insertion-button]");
    e instanceof HTMLElement && e.focus();
  }, [t]);
}
export let $$m1 = forwardRef(function (e, t) {
  return jsx("button", {
    ref: t,
    tabIndex: -1,
    onClick: VU.get("create-comment", "keyboard"),
    type: "button",
    "aria-label": _$$t("comments.create-comment"),
    "data-kb-comment-insertion-button": !0
  });
});
export const D = $$c0;
export const J = $$m1;