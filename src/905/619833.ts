import { Ju } from "../905/102752";
import { t as _$$t } from "../905/303541";
import { h } from "../905/142086";
import { to } from "../905/156213";
import { jsx } from "react/jsx-runtime";
import { R } from "../905/441305";
import { E } from "../905/984674";
import { YM } from "../905/122282";
let d = Ju(function (e) {
  let {
    confirmText,
    content,
    open,
    onConfirm,
    onClose,
    title
  } = e;
  return jsx(R, {
    title,
    confirmText,
    onConfirm,
    open,
    onClose,
    recordingKey: "moveTemplateConfirmationModal",
    children: jsx(E, {
      children: content
    })
  });
}, "MOVE_TEMPLATE_CONFIRMATION_MODAL");
export function $$u0({
  file: e,
  dispatch: t
}) {
  t(to({
    type: d,
    data: {
      title: _$$t("templates.confirmation.move_from_drafts.title"),
      content: _$$t("templates.confirmation.move_from_drafts.description"),
      confirmText: _$$t("templates.confirmation.move_from_drafts.button"),
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