import { jsx } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { $n } from "../905/521428";
import { Rs } from "../figma_app/288654";
import { _, S } from "../figma_app/490799";
import { renderI18nText } from "../905/303541";
import { sf } from "../905/929976";
import { FOrganizationLevelType, FPlanNameType } from "../figma_app/191312";
import { SharingGroupsByLibraryKey } from "../figma_app/43951";
import { S2, px, Um } from "../figma_app/465071";
import { J7, SN } from "../figma_app/650409";
import { DashboardSections, MemberSections } from "../905/548208";
export function $$g1(e, t) {
  let i = S2().unwrapOr(null);
  let n = px();
  let r = Um(n).unwrapOr(!1);
  let a = Rs(SharingGroupsByLibraryKey, {
    libraryKey: e
  });
  let o = a.data?.libraryKeyToFile?.file?.fileSharingGroups;
  let l = o?.map(e => e.resourceConnection).filter(Boolean);
  if ("loaded" !== a.status) return {
    status: "loading",
    data: null
  };
  let d = t && (i?.key.parentId !== t || i?.key.type !== FOrganizationLevelType.TEAM);
  return l?.length && !d && r ? {
    status: "loaded",
    data: l
  } : {
    status: "loaded",
    data: null
  };
}
export function $$f0({
  connectedProjects: e,
  onRedirect: t,
  padding: i
}) {
  let s = useDispatch();
  let u = S2().unwrapOr(null);
  let g = e => {
    u && (u.key.type === FOrganizationLevelType.ORG ? s(sf({
      view: "orgAdminSettings",
      orgAdminSettingsViewTab: J7.CONTENT,
      orgAdminSettingsViewSecondaryTab: SN.CONNECTED_PROJECTS,
      showResourceConnectionFlyout: e
    })) : u.key.type === FOrganizationLevelType.TEAM && s(sf({
      view: "teamAdminConsole",
      teamId: u.key.parentId,
      isProTeam: u.tier === FPlanNameType.PRO,
      teamAdminConsoleViewTab: DashboardSections.CONTENT,
      teamAdminConsoleViewSecondaryTab: MemberSections.CONNECTED_PROJECTS,
      showResourceConnectionFlyout: e
    })), t && t());
  };
  return jsx("div", {
    style: {
      padding: i ?? 0
    },
    children: jsx(_, {
      color: S.PLAIN,
      text: renderI18nText("resources_tab.libraries.external_teams_have_access", {
        connectedProjects: (() => {
          if (e?.length) {
            let t = e[0]?.projectLimitedInfo?.name;
            return 1 === e.length && t ? jsx($n, {
              variant: "link",
              onClick: () => {
                g(e[0].id);
              },
              children: t
            }) : jsx($n, {
              variant: "link",
              onClick: () => {
                g();
              },
              children: renderI18nText("resources_tab.libraries.connected_projects")
            });
          }
        })()
      })
    })
  });
}
export const U = $$f0;
export const X = $$g1;