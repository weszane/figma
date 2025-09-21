import { jsxs, jsx } from "react/jsx-runtime";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { PublicLinkControlsSetting } from "../figma_app/482728";
export function $$l0(e) {
  let t = e.publicLinkControlsSetting === PublicLinkControlsSetting.BANNED ? getI18nString("org_settings.workspace_controls.public_link_controls_setting_banned") : getI18nString("org_settings.workspace_controls.public_link_controls_setting_allowed");
  let a = e.publicLinkControlsSetting === PublicLinkControlsSetting.BANNED || e.publicLinkControlsSetting === PublicLinkControlsSetting.ALLOWED ? null : getI18nString(`org_settings.workspace_controls.${e.publicLinkControlsSetting}`);
  let l = e.publicLinkControlsSetting === PublicLinkControlsSetting.BANNED ? cssBuilderInstance.colorTextSecondary.$ : cssBuilderInstance.colorTextSuccess.$;
  return jsxs("span", {
    className: cssBuilderInstance.flex.gap2.$,
    children: [jsx("span", {
      className: l,
      children: t
    }), jsx("span", {
      className: cssBuilderInstance.colorTextSecondary.$,
      children: a
    })]
  });
}
export const s = $$l0;