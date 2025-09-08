import { registerModal } from "../905/102752";
import { jsx } from "react/jsx-runtime";
import { R } from "../905/441305";
import { getI18nString, renderI18nText } from "../905/303541";
import { FRequestStatusType } from "../figma_app/191312";
export let $$o0 = registerModal(function (e) {
  let {
    onConfirm,
    status,
    extensionType,
    open,
    onClose
  } = e;
  return jsx(R, {
    title: getI18nString("community.publishing.security_form.opt_out_title"),
    onConfirm,
    confirmText: getI18nString("community.publishing.security_form.opt_out_confirmation"),
    open,
    onClose,
    children: jsx(l, {
      extensionType,
      status
    })
  });
}, "ExtensionSecurityFormDeleteConfirmationModal");
function l({
  extensionType: e,
  status: t
}) {
  let i = null;
  switch (t) {
    case FRequestStatusType.APPROVED:
      i = "plugin" === e ? renderI18nText("community.publishing.security_form.approved.opt_out_desc.plugin") : renderI18nText("community.publishing.security_form.approved.opt_out_desc.widget");
      break;
    case FRequestStatusType.REJECTED:
    case FRequestStatusType.PENDING:
      i = renderI18nText("community.publishing.security_form.pending_rejected.opt_out_desc");
  }
  return i;
}
export const i = $$o0;