import { jsx, jsxs } from "react/jsx-runtime";
import { ServiceCategories as _$$e } from "../905/165054";
import { $n } from "../905/521428";
import { hasDesktopAPI } from "../figma_app/876459";
import { Ay } from "../905/612521";
import { tH } from "../905/751457";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { aV } from "../figma_app/305626";
import { Bg } from "../figma_app/973219";
export function $$m0(e, t) {
  return {
    ...e,
    children: jsx(tH, {
      boundaryKey: t,
      fallback: jsx(h, {}),
      team: _$$e.UNOWNED,
      children: e.children
    })
  };
}
function h() {
  let e = hasDesktopAPI();
  return jsxs(aV, {
    appendedClassName: Bg,
    children: [e ? getI18nString("fullscreen.error.generic_panel_error_desktop") : getI18nString("fullscreen.error.generic_panel_error_web"), jsx("div", {
      className: _$$s.mt8.$,
      children: jsx($n, {
        variant: "secondary",
        onClick: () => Ay.reload("Reload due to properties panel error"),
        children: e ? getI18nString("fullscreen.error.reload_tab") : getI18nString("fullscreen.error.refresh_page")
      })
    })]
  });
}
export const v = $$m0;