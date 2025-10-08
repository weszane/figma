import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, memo, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "../905/443068";
import { C as _$$C } from "../905/520159";
import { customHistory } from "../905/612521";
import { useSingleEffect } from "../905/791079";
import { useLatestRef } from "../figma_app/922077";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { hideModal, popModalStack } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { R as _$$R } from "../905/782411";
import { selectCurrentFile } from "../figma_app/516028";
import { selectPermissionsState } from "../figma_app/212807";
import { FMemberRoleType, FOrganizationLevelType } from "../figma_app/191312";
import { useCurrentPublicPlan, getParentOrgIdIfOrgLevel, useCurrentPlanUser, checkOrgUserPermission } from "../figma_app/465071";
import { isAccountSettingsModalShown } from "../figma_app/193867";
import { p as _$$p } from "../905/763242";
import { FEditorType } from "../figma_app/53721";
import { LIBRARY_PREFERENCES_MODAL, SHARED_FONTS_MODAL, LibraryTabEnum } from "../figma_app/633080";
import { registerModal, ModalSupportsBackground } from "../905/102752";
import { s as _$$s2 } from "../905/715327";
import { SharedFontsComponent } from "../905/375507";
import { s as _$$s3 } from "../905/587936";
import { _K, SE } from "../905/542608";
import { Z } from "../905/582804";
import { c as _$$c } from "../905/300572";
import { b as _$$b } from "../905/359141";
function L(e) {
  let t = useSelector(e => e.selectedView);
  let r = useLatestRef(t);
  let n = useSelector(e => e.modalShown?.type);
  let s = useDispatch();
  let o = "fullscreen" !== t.view && r?.view === t.view;
  let l = !("fullscreen" === t.view && r?.view === "fullscreen" && t.fileKey === r.fileKey) && !o;
  useEffect(() => {
    r && l && n === e && s(hideModal());
  }, [s, e, n, l, r]);
}
let P = memo(function ({
  initialTab: e,
  teamId: t,
  initialUpdatesModalScope: r,
  entrypoint: i,
  sessionId: s,
  resourceConnection: o
}) {
  L(LIBRARY_PREFERENCES_MODAL);
  let c = useSelector(e => e.selectedView);
  let u = useSelector(e => isAccountSettingsModalShown(e));
  let p = selectCurrentFile();
  let _ = useCurrentPublicPlan("LibraryPreferencesModal").unwrapOr(null);
  let f = getParentOrgIdIfOrgLevel(_);
  let E = new URLSearchParams(customHistory.location.search).get("teamToMoveFileToOnNavigate");
  let T = _$$R();
  useSingleEffect(() => {
    T({
      updateSource: "library_modal_open"
    });
  });
  return jsx(TrackingProvider, {
    name: "Library Preference Modal",
    properties: {
      fileKey: p?.key,
      fileTeamId: p?.teamId,
      selectedTeamId: "team" === c.view ? c.teamId : null,
      orgId: f,
      inPublishDraftExp: !!E,
      entryPoint: i
    },
    children: o && t ? jsx(j, {
      teamId: t,
      resourceConnection: o
    }) : u ? jsx(M, {}) : "fullscreen" === c.view && c.editorType !== FEditorType.Whiteboard ? jsx(_$$b, {
      entrypoint: i,
      initialTab: e,
      initialUpdatesModalScope: r,
      sessionId: s
    }) : "team" === c.view ? jsx(F, {
      initialTab: e,
      teamId: c.teamId
    }) : t ? jsx(F, {
      initialTab: e,
      teamId: t
    }) : void 0
  });
});
let $$D0 = registerModal(P, LIBRARY_PREFERENCES_MODAL, ModalSupportsBackground.YES);
let $$k1 = registerModal(function ({
  entrypoint: e
}) {
  L(SHARED_FONTS_MODAL);
  let t = useDispatch();
  useEffect(() => {
    SharedFontsComponent.loadSharedFonts(t);
  }, [t]);
  return jsx(P, {
    initialTab: LibraryTabEnum.FONTS,
    entrypoint: e
  });
}, SHARED_FONTS_MODAL, ModalSupportsBackground.YES);
function M() {
  let e = _K();
  return jsx(_$$s3, {
    width: e,
    title: jsx(_$$c, {
      availableTabs: [LibraryTabEnum.LIBRARIES],
      selectedTab: LibraryTabEnum.LIBRARIES
    }),
    children: jsx(Z, {
      children: jsx(_$$s2, {
        showingDefaultSubscriptionsForUser: !0,
        showingDefaultSubscriptionsForTeamId: null,
        width: e
      })
    })
  });
}
function F({
  initialTab: e,
  teamId: t
}) {
  let r = useDispatch();
  let s = useSelector(e => e.sharedFonts);
  let o = useSelector(e => _$$p(e));
  let l = useCurrentPlanUser("TeamLibraryPreferencesModal").unwrapOr(null);
  let d = !!(l && checkOrgUserPermission(l, FMemberRoleType.ADMIN));
  let c = selectPermissionsState();
  let u = useMemo(() => {
    let e = [LibraryTabEnum.LIBRARIES];
    o && e.push(LibraryTabEnum.FONTS);
    return e;
  }, [o]);
  let {
    selectedTab,
    setSelectedTab
  } = SE(u, e);
  let h = _K(o);
  return jsx(_$$s3, {
    width: h,
    title: jsx(_$$c, {
      availableTabs: u,
      selectedTab,
      setSelectedTab
    }),
    children: jsxs(Z, {
      widerWidth: o,
      children: [selectedTab === LibraryTabEnum.LIBRARIES && jsx(_$$s2, {
        showingDefaultSubscriptionsForTeamId: t,
        showingDefaultSubscriptionsForUser: !1,
        width: h
      }), selectedTab === LibraryTabEnum.FONTS && jsx(SharedFontsComponent, {
        dispatch: r,
        teamId: t,
        width: h,
        resourceType: "team",
        useModalViewComponent: !0,
        canAdminOrg: !!d,
        permissionsState: c,
        sharedFonts: s
      })]
    })
  });
}
function j({
  teamId: e,
  resourceConnection: t
}) {
  let r = useDispatch();
  let i = _K(!0);
  let l = t.hostPlanType === FOrganizationLevelType.TEAM;
  return jsx(_$$s3, {
    width: i,
    title: jsxs("div", {
      className: cssBuilderInstance.pl4.flex.flexRow.justifyBetween.itemsCenter.gap4.$,
      children: [jsx(IconButton, {
        onClick: () => {
          r(popModalStack());
        },
        "aria-label": getI18nString("resource_connection.aria_label.button"),
        children: jsx(_$$C, {})
      }), renderI18nText("design_systems.libraries_modal.allow_external_teams_to_use_libraries", {
        projectName: t.projectName
      })]
    }),
    children: jsx(Z, {
      widerWidth: !0,
      children: jsx(_$$s2, {
        showingDefaultSubscriptionsForTeamId: l ? e : null,
        showingDefaultSubscriptionsForUser: !1,
        width: i,
        resourceConnectionId: t.id,
        planType: t.hostPlanType
      })
    })
  });
}
export const T = $$D0;
export const lN = $$k1;