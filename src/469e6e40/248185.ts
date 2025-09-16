import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AutoLayout, Spacer } from "../905/470281";
import { selectViewAction } from "../905/929976";
import { _6 } from "../figma_app/386952";
import { throwTypeError } from "../figma_app/465776";
import { getI18nString } from "../905/303541";
import { DUserRole, sectionKeys, SectionType } from "../figma_app/858344";
import { f, r as _$$r } from "../905/136283";
export function $$$$m0({
  selectedSecondaryTab: e,
  rightActions: t
}) {
  let a = useDispatch();
  let m = _6();
  let p = "workspace" === m.view && m.subView === DUserRole.ADMIN ? m.workspaceId : null;
  let g = "workspace" === m.view && m.subView === DUserRole.ADMIN ? m.orgAdminOriginTab : void 0;
  let h = useCallback(e => {
    p && a(selectViewAction({
      view: "workspace",
      subView: DUserRole.ADMIN,
      selectedTab: e,
      workspaceId: p,
      orgAdminOriginTab: g
    }));
  }, [a, p, g]);
  if (null === p) return jsx(Fragment, {});
  let x = sectionKeys;
  let b = e || x[0];
  return jsxs(AutoLayout, {
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
            case SectionType.TEAMS:
              return getI18nString("workspace_admin_tab.teams");
            case SectionType.MEMBERS:
              return getI18nString("workspace_admin_tab.members");
            case SectionType.LIBRARIES:
              return getI18nString("workspace_admin_tab.libraries");
            case SectionType.SETTINGS:
              return getI18nString("workspace_admin_tab.settings");
            default:
              throwTypeError(e);
          }
        }(e)
      }, e))
    }), jsx(Spacer, {}), t]
  });
}
export const m = $$$$m0;