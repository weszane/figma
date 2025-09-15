import { jsx } from "react/jsx-runtime";
import { getI18nString } from "../905/303541";
import { popModalStack } from "../905/156213";
import { HubTypeEnum } from "../figma_app/45218";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { ConfirmationModal2 } from "../figma_app/918700";
export let $$d0 = registerModal(function ({
  error: e,
  dispatch: t,
  resourceType: i
}) {
  return jsx(ConfirmationModal2, {
    confirmText: getI18nString("general.done"),
    confirmationTitle: i === HubTypeEnum.PLUGIN ? getI18nString("community.plugin_development.plugin_issue") : getI18nString("community.plugin_development.widget_issue"),
    content: e.text,
    destructive: !0,
    disableClickOutsideToHide: !0,
    hideCancel: !0,
    hideOnConfirm: !1,
    onConfirm: () => {
      t(popModalStack());
    },
    popStack: !0,
    size: "small"
  });
}, "DevelopmentPluginErrorModal", ModalSupportsBackground.YES);
export const r = $$d0;
