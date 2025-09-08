import { registerModal } from "../905/102752";
import { jsx } from "react/jsx-runtime";
import { useCallback } from "react";
import { lQ } from "../905/934246";
import { R } from "../905/441305";
import { getI18nString } from "../905/303541";
export let $$l0 = registerModal(function ({
  comment: e,
  onCancel: t,
  onClose: i,
  onConfirm: l,
  onConfirmComplete: d,
  ...c
}) {
  let u = useCallback(() => {
    l();
    i();
    d?.();
  }, [i, l, d]);
  let p = useCallback(() => {
    i();
    t?.();
  }, [i, t]);
  return jsx(R, {
    autofocusConfirm: !0,
    onCancel: p,
    onConfirm: u,
    onClose: lQ,
    confirmText: getI18nString("general.delete"),
    destructive: !0,
    recordingKey: "commentDeleteConfirmModal",
    title: getI18nString("comments.delete_comment"),
    ...c,
    children: !e || e.parent_id ? getI18nString("comments.are_you_sure_you_want_to_delete_this_comment_this_action_cannot_be_undone") : getI18nString("comments.delete_confirmation_thread")
  });
}, "confirm-comment-deletion-modal");
export const E = $$l0;