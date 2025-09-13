import { jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { FileExportSetting } from "../figma_app/482728";
export function $$l0({
  exportControlsSetting: e
}) {
  return jsx("span", {
    className: _$$s.flex.gap2.$,
    children: jsx("span", {
      className: _$$s.colorTextSecondary.$,
      children: function (e) {
        switch (e) {
          case FileExportSetting.BANNED:
            return getI18nString("org_settings.workspace_controls.banned");
          case FileExportSetting.MEMBERS_ONLY:
            return getI18nString("org_settings.workspace_controls.members_only");
          default:
            return getI18nString("org_settings.workspace_controls.allowed");
        }
      }(e)
    })
  });
}
export const P = $$l0;