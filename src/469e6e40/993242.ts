import { jsxs, jsx } from "react/jsx-runtime";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { w_ } from "../figma_app/482728";
export function $$l0(e) {
  let t = e.publicLinkControlsSetting === w_.BANNED ? getI18nString("org_settings.workspace_controls.public_link_controls_setting_banned") : getI18nString("org_settings.workspace_controls.public_link_controls_setting_allowed");
  let a = e.publicLinkControlsSetting === w_.BANNED || e.publicLinkControlsSetting === w_.ALLOWED ? null : getI18nString(`org_settings.workspace_controls.${e.publicLinkControlsSetting}`);
  let l = e.publicLinkControlsSetting === w_.BANNED ? _$$s.colorTextSecondary.$ : _$$s.colorTextSuccess.$;
  return jsxs("span", {
    className: _$$s.flex.gap2.$,
    children: [jsx("span", {
      className: l,
      children: t
    }), jsx("span", {
      className: _$$s.colorTextSecondary.$,
      children: a
    })]
  });
}
export const s = $$l0;