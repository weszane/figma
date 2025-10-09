import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ServiceCategories } from "../905/165054";
import { useSubscription } from "../figma_app/288654";
import { LoadingOverlay } from "../figma_app/858013";
import { KX } from "../469e6e40/623537";
import { re } from "../469e6e40/421552";
import { G as _$$G } from "../469e6e40/623116";
import { g as _$$g } from "../figma_app/638694";
import { K } from "../905/628118";
import { r as _$$r } from "../905/398386";
import { selectViewAction } from "../905/929976";
import { useLibraryInfo } from "../figma_app/933328";
import { NJ } from "../figma_app/518077";
import { WorkspaceAdminSettingsView, WorkspaceInfoView } from "../figma_app/43951";
import { isBigmaEnabledAlias2 } from "../figma_app/336853";
import { DefaultFilters, DefaultSortConfig } from "../figma_app/967319";
import { EntityType } from "../figma_app/707808";
import { SectionType } from "../figma_app/858344";
import { UNASSIGNED } from "../905/247093";
import { z6 } from "../figma_app/805373";
import { getResourceDataOrFallback } from "../905/723791";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { m as _$$m } from "../469e6e40/248185";
import { FAccessType } from "../figma_app/191312";
import { PublicLinkControlsSetting } from "../figma_app/482728";
import { getFeatureFlags } from "../905/601108";
import A from "classnames";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { renderI18nText, getI18nString } from "../905/303541";
import { P as _$$P } from "../469e6e40/816817";
import { s as _$$s2 } from "../469e6e40/993242";
import { sJ } from "../469e6e40/485925";
import { Kz } from "../469e6e40/336248";
import { nF, lF } from "../469e6e40/68843";
var R = A;
function F(e) {
  let t = jsx("div", {
    className: R()(cssBuilderInstance.minW150.maxW300.mr8.$, "settings_section--loadingBlock--zK-f-")
  });
  let a = e.finishedLoading ? jsx(_$$s2, {
    publicLinkControlsSetting: e.publicLinkControlsSetting
  }) : t;
  let s = e.finishedLoading ? e.publicLinkControlsMaxExp ? jsx("div", {
    className: R()(cssBuilderInstance.pl16.pt8.$, "settings_section--secondaryText--hGnD9"),
    children: jsx(q, {
      expiration: e.publicLinkControlsMaxExp
    })
  }, 2) : null : t;
  let i = e.finishedLoading ? jsx(_$$P, {
    exportControlsSetting: e.exportControlsSetting
  }) : t;
  let r = [jsx("div", {
    className: cssBuilderInstance.pl16.flex.gap4.pt16.$,
    children: renderI18nText("workspace_admin_tab.public_sharing_setting", {
      settingComponent: a
    })
  }, 2)];
  s && r.push(s);
  getFeatureFlags().plan_level_file_export_controls && r.push(jsx("div", {
    className: cssBuilderInstance.pl16.flex.gap4.pt8.$,
    children: renderI18nText("workspace_admin_tab.export_controls_setting", {
      settingComponent: i
    })
  }, 2));
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: cssBuilderInstance.mt16.mb8.$,
      children: jsx(_$$_, {
        dataTestId: "workspace-settings-banner",
        color: _$$S.PLAIN,
        padding: 8,
        text: renderI18nText("workspace_admin_tab.workspace_settings_banner")
      })
    }), jsx("div", {
      className: "settings_section--settingsWrapper---d2uY settings_section--settingsWrapper--jaCzz text--fontPos11--2LvXf text--_fontBase--QdLsd",
      children: jsx(Kz, {
        title: getI18nString("settings_tab.section_header.external_access"),
        settings: r
      })
    })]
  });
}
function q(e) {
  let {
    initialMaxDuration,
    initialIsTimeMeasuredInDays
  } = sJ(parseInt(e.expiration));
  let s = renderI18nText(initialIsTimeMeasuredInDays ? "workspace_admin_tab.public_link_sharing_expiration_setting.days" : "workspace_admin_tab.public_link_sharing_expiration_setting.hours", {
    time: initialMaxDuration
  });
  return jsx("div", {
    className: cssBuilderInstance.gap4.$,
    children: s
  }, 3);
}
function $({
  workspaceId: e
}) {
  let t = useSubscription(WorkspaceAdminSettingsView, {
    workspaceId: e
  });
  let a = useSelector(e => e.orgById[e.currentUserOrgId]);
  return jsxs(Fragment, {
    children: [jsx(_$$m, {
      selectedSecondaryTab: SectionType.SETTINGS
    }), jsx("div", {
      className: "settings_section--container--QpIP- admin_settings_page--container--LZSr8",
      children: jsx("div", {
        className: cssBuilderInstance.bt1.bSolid.colorBorder.$,
        children: jsx(F, {
          finishedLoading: "loaded" === t.status,
          publicLinkControlsSetting: t.data?.workspace?.publicLinkControlsSetting ?? PublicLinkControlsSetting.ALLOWED,
          publicLinkControlsMaxExp: t.data?.workspace?.publicLinkControlsMaxExpiration,
          exportControlsSetting: getResourceDataOrFallback(t.data?.workspace?.fileExportSetting) ?? a?.shared_container_setting?.file_export_setting ?? FAccessType.ALLOWED
        })
      })
    })]
  });
}
function G({
  workspaceId: e,
  selectedTab: t
}) {
  let a = useSelector(({
    orgById: e,
    currentUserOrgId: t
  }) => e[t]);
  let g = useSelector(({
    dropdownShown: e
  }) => e);
  let x = useSelector(({
    teamRoleRequests: e
  }) => e);
  let j = useSelector(({
    user: e
  }) => e);
  let E = useSelector(({
    selectedView: e
  }) => e);
  let C = useSubscription(WorkspaceInfoView, {
    workspaceId: e
  });
  let S = "loaded" !== C.status;
  let N = C.data?.workspace;
  let [I] = useLibraryInfo({
    currentOrgId: a.id,
    excludeDrafts: !0
  });
  let T = I.data || null;
  let A = Date.now();
  let [R, O] = useState("");
  let L = jsx(LoadingOverlay, {});
  let D = null;
  switch (t) {
    case SectionType.MEMBERS:
      let M = {
        ...DefaultFilters,
        ...E.orgAdminMembersTabFilters,
        workspaceFilter: e
      };
      let P = E.orgAdminMembersTabSort || DefaultSortConfig;
      D = jsx(KX, {
        currency: void 0,
        dropdownShown: g,
        filters: M,
        invoices: void 0,
        isLoading: !1,
        org: a,
        searchQuery: R,
        setSearchQuery: O,
        sort: P,
        startTime: A
      });
      break;
    case SectionType.TEAMS:
      let U = E.teamsTabViewingUnassigned ? UNASSIGNED : e;
      D = jsx(_$$G, {
        org: a,
        dropdownShown: g,
        teamRoleRequests: x,
        user: j,
        selectedWorkspaceId: U
      });
      break;
    case SectionType.LIBRARIES:
      D = jsx(re, {
        org: a,
        workspaceId: e,
        libraryStats: T,
        isLoading: null === T
      });
      break;
    case SectionType.SETTINGS:
      if (!isBigmaEnabledAlias2(a)) break;
      D = jsx($, {
        workspaceId: e
      });
  }
  let F = S ? L : jsxs(Fragment, {
    children: [!!N && jsx(K, {
      title: N.name,
      avatar: jsx(z6, {
        entity: N,
        size: 32
      })
    }), D]
  });
  return jsx(_$$r, {
    containerClass: nF,
    scrollableContainerClass: lF,
    toolbar: jsx(_$$g, {}),
    content: F,
    errorBoundaryConfig: {
      figmaTeam: ServiceCategories.SCALE,
      boundaryKeySuffix: "WorkspaceAdminSettingsPageView"
    }
  });
}
export function $$z0({
  workspaceId: e,
  selectedTab: t
}) {
  let a = useDispatch<AppDispatch>();
  let r = useSelector(({
    orgById: e,
    currentUserOrgId: t
  }) => e[t]);
  let l = NJ(r.id);
  let o = "loading" === l.status;
  let d = !!l.data?.find(t => t.id === e);
  let c = useMemo(() => !o && !d, [d, o]);
  let _ = useMemo(() => o || c, [o, c]);
  return (useEffect(() => {
    c && a(selectViewAction({
      view: "resourceUnavailable",
      resourceType: EntityType.WORKSPACE
    }));
  }, [a, c]), _) ? null : jsx(G, {
    workspaceId: e,
    selectedTab: t
  });
}
export const WorkspaceAdminSettingsPageView = $$z0;
