import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { wA } from "../vendor/514228";
import { Y, M } from "../905/830372";
import { sf } from "../905/929976";
import { _6 } from "../figma_app/386952";
import { xb } from "../figma_app/465776";
import { t as _$$t } from "../905/303541";
import { V0, rj, m2 } from "../figma_app/858344";
import { f, r as _$$r } from "../905/136283";
export function $$$$m0({
  selectedSecondaryTab: e,
  rightActions: t
}) {
  let a = wA();
  let m = _6();
  let p = "workspace" === m.view && m.subView === V0.ADMIN ? m.workspaceId : null;
  let g = "workspace" === m.view && m.subView === V0.ADMIN ? m.orgAdminOriginTab : void 0;
  let h = useCallback(e => {
    p && a(sf({
      view: "workspace",
      subView: V0.ADMIN,
      selectedTab: e,
      workspaceId: p,
      orgAdminOriginTab: g
    }));
  }, [a, p, g]);
  if (null === p) return jsx(Fragment, {});
  let x = rj;
  let b = e || x[0];
  return jsxs(Y, {
    padding: {
      vertical: 16,
      horizontal: 32
    },
    height: "hug-contents",
    dataTestId: "workspace-admin-settings-secondary-tabs",
    children: [jsx(f, {
      tabs: x.map(e => jsx(_$$r, {
        tab: e,
        isSelected: b === e,
        onClick: h,
        tabName: function (e) {
          switch (e) {
            case m2.TEAMS:
              return _$$t("workspace_admin_tab.teams");
            case m2.MEMBERS:
              return _$$t("workspace_admin_tab.members");
            case m2.LIBRARIES:
              return _$$t("workspace_admin_tab.libraries");
            case m2.SETTINGS:
              return _$$t("workspace_admin_tab.settings");
            default:
              xb(e);
          }
        }(e)
      }, e))
    }), jsx(M, {}), t]
  });
}
export const m = $$$$m0;