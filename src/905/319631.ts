import { jsx } from "react/jsx-runtime";
import { t as _$$t } from "../905/303541";
import { Lo } from "../905/156213";
import { bD } from "../figma_app/45218";
import { Ju, ZU } from "../905/102752";
import { yX } from "../figma_app/918700";
export let $$d0 = Ju(function ({
  error: e,
  dispatch: t,
  resourceType: i
}) {
  return jsx(yX, {
    confirmText: _$$t("general.done"),
    confirmationTitle: i === bD.PLUGIN ? _$$t("community.plugin_development.plugin_issue") : _$$t("community.plugin_development.widget_issue"),
    content: e.text,
    destructive: !0,
    disableClickOutsideToHide: !0,
    hideCancel: !0,
    hideOnConfirm: !1,
    onConfirm: () => {
      t(Lo());
    },
    popStack: !0,
    size: "small"
  });
}, "DevelopmentPluginErrorModal", ZU.YES);
export const r = $$d0;