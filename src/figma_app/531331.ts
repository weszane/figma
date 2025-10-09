import { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { useSubscription } from "../figma_app/288654";
import { canCreateFileType } from "../figma_app/687776";
import { getI18nString } from "../905/303541";
import { getCollectionSummaryStatus } from "../figma_app/618433";
import { hideDropdownAction } from "../905/929976";
import { duplicateFileOptimistic } from "../figma_app/78808";
import { showModalHandler } from "../905/156213";
import { isBranchAlt } from "../905/760074";
import { consumptionPaywallUtils } from "../905/224";
import { setupOptimistPlanLoader } from "../905/352022";
import { fullscreenValue } from "../figma_app/455680";
import { canCreateTeamFile } from "../905/87821";
import { selectCurrentFile } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FPlanNameType, FFileType } from "../figma_app/191312";
import { FileNameViewDropdown, ProjectTilePermissions } from "../figma_app/43951";
import { getPermissionsStateMemoized } from "../figma_app/642025";
import { hasLocalOrPublishedContent } from "../figma_app/803787";
import { UpsellModalType } from "../905/165519";
import { PageFolderFile, FeatureFlag } from "../905/652992";
import { FEditorType } from "../figma_app/53721";
import { OrganizationType } from "../905/833838";
import { fileActionEnum } from "../figma_app/630077";
import { h as _$$h } from "../figma_app/270558";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { isBakeStarterPaywallEnabledWithoutLimit } from "../905/442612";
import { i as _$$i } from "../figma_app/43065";
import { M as _$$M } from "../figma_app/854365";
export function $$D0() {
  let e = useSelector(e => e.plans);
  let t = selectCurrentUser();
  let r = t?.external_restricted_org_id;
  return e.filter(e => e.has_drafts).map(e => ({
    workspaceName: e.plan_name,
    userId: t?.id ?? "",
    orgId: e.plan_type === OrganizationType.ORG ? e.plan_id : null,
    teamId: e.plan_type === OrganizationType.TEAM ? e.plan_id : null,
    draftFolderId: e.draft_folder_id,
    isDisabledDueToECC: null !== r && e.plan_id !== r,
    isFigJamDisabled: e.is_figjam_disabled,
    isFigmakeDisabled: e.is_figmake_disabled,
    isCooperDisabled: e.is_cooper_disabled,
    isSitesDisabled: e.is_sites_disabled,
    isSlidesDisabled: e.is_slides_disabled,
    isPlanLocked: e.is_plan_locked
  }));
}
export function $$k1() {
  let e = selectCurrentFile();
  let t = useDispatch<AppDispatch>();
  let r = useSelector(e => getPermissionsStateMemoized(e));
  let y = useSelector(hasLocalOrPublishedContent);
  let N = useSubscription(FileNameViewDropdown, {
    branchFileKey: e?.key || ""
  }, {
    enabled: !!e
  });
  let k = getCollectionSummaryStatus(e?.key || "");
  let M = k.data?.map(e => e.id) ?? [];
  let F = useSelector(e => e.selectedView);
  let j = useSelector(e => e.plans);
  let U = useSelector(e => e.teams);
  useEffect(() => {
    t(setupOptimistPlanLoader({
      loadedPlans: j
    }));
  }, []);
  let B = $$D0();
  let G = N.data?.file?.project;
  let V = G && e?.editorType && canCreateFileType(G, e.editorType);
  let H = e?.project && V;
  let z = F.editorType !== FEditorType.Whiteboard;
  let W = !!(e && z && isBranchAlt(e));
  let K = H ? W ? getI18nString("fullscreen.filename_view.duplicate-as-new") : getI18nString("fullscreen.filename_view.duplicate") : getI18nString("fullscreen.filename_view.duplicate-to-drafts");
  let Y = e?.currentPlanUser?.draftsFolderId;
  let $ = useSubscription(ProjectTilePermissions, {
    projectId: Y || ""
  }, {
    enabled: !!Y && getFeatureFlags().filter_pro_plus_sites_make_web
  });
  let X = useMemo(() => {
    if (!e || !Y) return !1;
    switch (e.editorType) {
      case "figmake":
        return $?.data?.project?.canCreateFigmakeFile;
      case "sites":
        return e?.plan?.tier === FPlanNameType.PRO || e?.plan?.tier === FPlanNameType.ORG || e?.plan?.tier === FPlanNameType.ENTERPRISE;
      default:
        return !0;
    }
  }, [e, Y, $]);
  let q = useMemo(() => {
    switch (e?.editorType) {
      case "figmake":
        return B.some(e => !e.isFigmakeDisabled && !e.isPlanLocked);
      case "sites":
        return B.some(e => !e.isSitesDisabled && !e.isPlanLocked);
      default:
        return B.some(e => !e.isPlanLocked);
    }
  }, [e, B]);
  let J = getFeatureFlags().dtm_deprecation_plan_picker_for_files;
  let Z = useMemo(() => {
    if (J) return q;
    if (e?.editorType !== "figmake" && e?.editorType !== "sites") return !0;
    if (e?.editorType === "figmake") return H || !!Y && $?.data?.project?.canCreateFigmakeFile;
    if (e?.editorType === "sites") {
      let e = !!j.find(e => "org" === e.plan_type || !e.is_guest && U?.[e.plan_id]?.pro_team);
      return H || e;
    }
  }, [e, H, Y, $?.data?.project?.canCreateFigmakeFile, U, j, q, J]);
  let Q = H || X;
  let ee = B.length > 0;
  return {
    duplicateFile: () => {
      if (!e) return;
      t(hideDropdownAction());
      let n = canCreateTeamFile(e, e.project, r);
      if (n) {
        e?.editorType === FFileType.SITES && _$$M ? t(showModalHandler({
          type: _$$M,
          data: {
            team: n
          }
        })) : e?.editorType === FFileType.FIGMAKE && isBakeStarterPaywallEnabledWithoutLimit() ? t(showModalHandler({
          type: _$$i,
          data: {
            team: n
          }
        })) : t(showModalHandler({
          type: ConsumptionPaywallModalPlansPricing,
          data: {
            team: n,
            resource: e?.editorType !== FFileType.FIGMAKE || getFeatureFlags().bake_starter_limit ? PageFolderFile.FILE : FeatureFlag.FIGMAKE,
            action: fileActionEnum.DUPLICATE_FILES,
            editorType: e?.editorType || FFileType.DESIGN,
            currentPlan: consumptionPaywallUtils.Plan.STARTER,
            upsellPlan: consumptionPaywallUtils.Plan.PRO,
            upsellSource: UpsellModalType.CREATE_NEW_FILE
          }
        }));
        return;
      }
      let i = (t, r) => {
        fullscreenValue.dispatchIfSaved(duplicateFileOptimistic({
          file: e,
          folderId: t,
          checkOssSalesExperiment: y,
          cmsCollectionIds: M,
          source: r
        }));
      };
      Q || !getFeatureFlags().dtm_deprecation_plan_picker_for_files ? i(void 0, "context_menu") : ee && t(showModalHandler({
        type: _$$h,
        data: {
          payload: {
            workspaces: B,
            onSelectWorkspace: (e, t) => {
              i(e.draftFolderId, t);
            },
            editorType: e.editorType,
            useCase: "fileDuplication"
          }
        }
      }));
    },
    duplicateDisplayText: K,
    canDuplicate: !!Z
  };
}
export const rc = $$D0;
export const tz = $$k1;
