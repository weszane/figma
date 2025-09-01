import { t as _$$t } from "../905/303541";
import { $0 } from "../905/944871";
import { UK } from "../figma_app/506549";
import { wX, WG } from "../905/964786";
export function $$o0(e) {
  return [...function ({
    isReadOnly: e,
    extensionMenuProps: t,
    includeDisabled: i,
    filters: s
  }) {
    let o = [];
    if (!t.userCanViewPlugins) return o;
    for (let l of $0(t, s)) if ("submenu" === l.type && (l.name === _$$t("widgets.development") || l.name === _$$t("fullscreen_actions.plugins-menu-saved-plugins"))) for (let n of l.submenu) o.push(...UK({
      item: n,
      isReadOnly: e,
      extensionMenuProps: t,
      includeDisabled: i
    }));else o.push(...UK({
      item: l,
      isReadOnly: e,
      extensionMenuProps: t,
      includeDisabled: i
    }));
    return o;
  }(e), ...function ({
    isReadOnly: e,
    extensionMenuProps: t,
    includeDisabled: i,
    filters: r
  }) {
    let o = [];
    if (e) return o;
    for (let l of wX(t, r)) if ("submenu" === l.type && (l.name === _$$t("widgets.development") || l.name === _$$t("fullscreen_actions.widgets-menu-saved-widgets"))) for (let n of l.submenu) o.push(...UK({
      item: n,
      isReadOnly: e,
      extensionMenuProps: t,
      includeDisabled: i
    }));else o.push(...UK({
      item: l,
      isReadOnly: e,
      extensionMenuProps: t,
      includeDisabled: i
    }));
    return o;
  }(e), ...WG(e.extensionMenuProps)];
}
export const M = $$o0;