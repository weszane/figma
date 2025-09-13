import { registerModal } from "../905/102752";
import { getI18nString } from "../905/303541";
import { h } from "../905/142086";
import { showModalHandler } from "../905/156213";
import { jsx } from "react/jsx-runtime";
import { ConfirmationModal } from "../905/441305";
import { TextWithTruncation } from "../905/984674";
import { YM } from "../905/122282";
let d = registerModal(function (e) {
  let {
    confirmText,
    content,
    open,
    onConfirm,
    onClose,
    title
  } = e;
  return jsx(ConfirmationModal, {
    title,
    confirmText,
    onConfirm,
    open,
    onClose,
    recordingKey: "moveTemplateConfirmationModal",
    children: jsx(TextWithTruncation, {
      children: content
    })
  });
}, "MOVE_TEMPLATE_CONFIRMATION_MODAL");
export function $$u0({
  file: e,
  dispatch: t
}) {
  t(showModalHandler({
    type: d,
    data: {
      title: getI18nString("templates.confirmation.move_from_drafts.title"),
      content: getI18nString("templates.confirmation.move_from_drafts.description"),
      confirmText: getI18nString("templates.confirmation.move_from_drafts.button"),
      destructive: !1,
      onConfirm: i => {
        i.preventDefault();
        h(e, null, t, {
          handlesVisualBell: !0,
          callback: () => {
            e.editor_type && YM(t, e.key, e.editor_type, "move-from-drafts");
          }
        });
      }
    }
  }));
}
export const x = $$u0;