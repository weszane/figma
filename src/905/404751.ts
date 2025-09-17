import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { getResourceDataOrFallback } from "../905/663269";
import { subscribeMultipleAndAwaitAll } from "../905/553831";
import { reportError } from "../905/11";
import { FlashActions } from "../905/573154";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { v as _$$v } from "../905/556792";
import { createOptimistThunk } from "../905/350402";
import { Cy } from "../905/844322";
import { popModalStack, showModalHandler, hideModal } from "../905/156213";
import { getProductAccessTypeOrDefault } from "../figma_app/765689";
import { consumptionPaywallUtils } from "../905/224";
import { mE } from "../905/561087";
import { isTeamFolder, isTeamFolderV2, hasRootPathOptional } from "../figma_app/528509";
import { FPermissionDenialReason, FFileType } from "../figma_app/191312";
import { RepoCanMove, RepoCanMoveWithReasons, FileCanMoveWithReasons } from "../figma_app/43951";
import { Y9, fm } from "../figma_app/680166";
import { FeatureFlag, PageFolderFile } from "../905/652992";
import { TeamOrgType } from "../figma_app/10554";
import { fileActionEnum } from "../figma_app/630077";
import { J } from "../905/202542";
import { folderAPIInstance } from "../905/522628";
import { jsx } from "react/jsx-runtime";
import { throwTypeError } from "../figma_app/465776";
import { ConfirmationModal } from "../905/441305";
import { registerModal } from "../905/102752";
import { ConsumptionPaywallModalPlansPricing } from "../905/739964";
import { W as _$$W2 } from "../905/442612";
import { i } from "../figma_app/43065";
import { M as _$$M } from "../figma_app/854365";
import { i as _$$i } from "../905/46262";
import { PE } from "../905/15667";
var N = (e => (e[e.TEMPLATE_TO_DRAFTS = 0] = "TEMPLATE_TO_DRAFTS", e[e.MOVING_FROM_MULTIPLE_FOLDERS_FROM_TEAM = 1] = "MOVING_FROM_MULTIPLE_FOLDERS_FROM_TEAM", e[e.MOVING_ACROSS_TEAMS = 2] = "MOVING_ACROSS_TEAMS", e[e.MOVING_FROM_MULTIPLE_ORPHANED_ORG_FOLDERS = 3] = "MOVING_FROM_MULTIPLE_ORPHANED_ORG_FOLDERS", e[e.MOVING_FROM_ORPHANED_ORG_FOLDER = 4] = "MOVING_FROM_ORPHANED_ORG_FOLDER", e[e.MOVING_FROM_MULTIPLE_FOLDERS = 5] = "MOVING_FROM_MULTIPLE_FOLDERS", e[e.MOVING_FROM_FOLDER = 6] = "MOVING_FROM_FOLDER", e))(N || {});
let P = registerModal(function (e) {
  let {
    title,
    children,
    confirmText
  } = function (e, t) {
    let {
      type
    } = e;
    switch (type) {
      case 0:
        return {
          title: renderI18nText("templates.confirmation.move_to_drafts.title", {
            count: t
          }),
          children: t > 1 ? renderI18nText("templates.confirmation.move_to_drafts.description.multiselect_v2") : renderI18nText("templates.confirmation.move_to_drafts.description"),
          confirmText: renderI18nText("templates.confirmation.move_to_drafts.button_v2")
        };
      case 1:
      case 2:
        return {
          children: renderI18nText("file_browser.file_browser_actions.confirm_move_from_team", {
            teamName: e.teamName,
            numFiles: t
          })
        };
      case 3:
        return {
          children: renderI18nText("file_browser.file_browser_actions.confirm_move_from_shared_project_multiple", {
            projectName: e.folderName
          })
        };
      case 4:
        return {
          children: renderI18nText("file_browser.file_browser_actions.confirm_move_from_shared_project", {
            projectName: e.folderName,
            numFiles: t
          })
        };
      case 5:
        return {
          children: renderI18nText("file_browser.file_browser_actions.confirm_move_from_project_multiple")
        };
      case 6:
        return {
          children: renderI18nText("file_browser.file_browser_actions.confirm_move_from_project", {
            numFiles: t
          })
        };
      default:
        throwTypeError(type);
    }
  }(e.modalConfig, e.numFilesMoved);
  t = title ?? renderI18nText("modal.are_you_sure");
  n = confirmText ?? renderI18nText("file_browser.file_move.move");
  return jsx(ConfirmationModal, {
    title,
    confirmText,
    onConfirm: e.onConfirm,
    onClose: e.onClose,
    open: !0,
    children
  });
}, "file-move-confirm-modal");
let U = (e, t) => e.find(e => getProductAccessTypeOrDefault(e.editor_type) === t)?.key ?? null;
let B = (e, t, i, n) => {
  let r = i.length + (n ? n.length : 0) > 1;
  i.length > 0 && t.dispatch(Cy({
    files: i,
    folderName: e.folder.path,
    folderId: e.folder.id,
    isMultiMove: r
  }));
  n && n.length > 0 && t.dispatch(mE({
    repos: n,
    folderId: e.folder.id,
    folderName: e.folder.path,
    isMultiMove: r
  }));
};
let V = (e, t, i, n, r) => {
  let a = t.getState();
  if (e.draftsMoveData?.licenseType && e.draftsMoveData?.requiresUpgrade) {
    let s = U(i, e.draftsMoveData.licenseType);
    let o = e.draftsMoveData.isAdminSelfUpgrade ? J.ADMIN_AUTO_PATHWAY : J.AUTO_PATHWAY;
    Y9({
      licenseType: e.draftsMoveData.licenseType,
      dispatch: t.dispatch,
      entryPoint: PE.FileMoveUpsell,
      upgradeReason: _$$i.RESOURCE_MOVED_FROM_DRAFTS,
      upgradePathway: o,
      plan: e.draftsMoveData.destinationPlan ?? null,
      onUpgrade: () => {
        B(e, t, i, n);
      },
      fileKey: s,
      skipConfirmationModal: e.fromFileModal,
      folderId: r.id,
      extraErrorContext: {
        userId: a.user?.id,
        currentFolderId: i.map(e => e.folder_id).toString(),
        destinationFolderId: r.id,
        upgradePathway: o
      }
    })({});
  } else B(e, t, i, n);
};
let G = async (e, t, i, n, r) => {
  let a = i.length + (n ? n.length : 0) > 1;
  i.length > 0 && (await t.dispatch(Cy({
    files: i,
    folderId: r.id,
    folderName: r.path,
    fromFileModal: e.fromFileModal,
    onFinishCallback: e.onFinishCallback,
    isMultiMove: a,
    restoreFiles: e.restoreFiles
  })));
  n && n.length > 0 && (await t.dispatch(mE({
    repos: n,
    folderId: r.id,
    fromFileModal: e.fromFileModal,
    folderName: e.folder.path,
    isMultiMove: a,
    onFinishCallback: e.onFinishCallback,
    restoreFiles: e.restoreFiles
  })));
};
let $$z = async (e, t, i, n, r, a) => {
  let s = t.getState();
  if (!a && e.draftsMoveData?.licenseType && e.draftsMoveData?.requiresUpgrade) {
    let a = U(i, e.draftsMoveData.licenseType);
    let o = e.draftsMoveData.isAdminSelfUpgrade ? J.ADMIN_AUTO_PATHWAY : J.AUTO_PATHWAY;
    Y9({
      licenseType: e.draftsMoveData.licenseType,
      dispatch: t.dispatch,
      entryPoint: PE.FileMoveUpsell,
      upgradeReason: _$$i.RESOURCE_MOVED_FROM_DRAFTS,
      upgradePathway: o,
      plan: e.draftsMoveData.destinationPlan ?? null,
      fileKey: a,
      onUpgrade: async () => {
        await G(e, t, i, n, r);
      },
      onError: () => {
        t.dispatch(popModalStack());
        t.dispatch(VisualBellActions.enqueue({
          message: "Encountered an error. Please try again.",
          error: !0
        }));
      },
      skipConfirmationModal: e.fromFileModal,
      folderId: r.id,
      extraErrorContext: {
        userId: s.user?.id,
        currentFolderId: i.map(e => e.folder_id).toString(),
        destinationFolderId: r.id,
        upgradePathway: o
      }
    })({});
  } else await G(e, t, i, n, r);
};
let H = async (e, t, i, n, r, a) => {
  if (!a) {
    await $$z(e, t, i, n, r);
    return;
  }
  t.dispatch(showModalHandler({
    type: P,
    data: {
      modalConfig: a,
      numFilesMoved: i.length,
      onConfirm: () => V(e, t, i, n, r),
      onClose: () => t.dispatch(hideModal())
    }
  }));
};
let W = (e, t, i) => {
  let n = [FPermissionDenialReason.FILE_REPO_DENY_CONNECTED_GUEST_CAN_MOVE, FPermissionDenialReason.FILE_DENY_CONNECTED_GUEST_CAN_MOVE];
  return !!(!e.result && n.some(t => e.publicDenyReasons.includes(t))) && (i.dispatch(showModalHandler({
    type: _$$v(),
    data: {
      fileKey: t
    }
  })), !0);
};
let $$K0 = createOptimistThunk(async (e, t) => {
  let {
    files,
    repos,
    team,
    onError
  } = t;
  if (0 === files.length + (repos?.length || 0)) return;
  let g = e.getState();
  let _ = t.folder;
  let C = t.draftsMoveData?.requiresUpgrade;
  let T = null;
  for (let i of t.files) {
    let t = i.folder_id ? g.folders[i.folder_id] ?? null : null;
    let n = g.figFilePublishedAsHubFile[i.key] || null;
    let r = n && g.hubFiles[n] || null;
    if (r?.publisher.entity_type === TeamOrgType.TEAM) {
      e.dispatch(FlashActions.error(getI18nString("file_browser.file_browser_actions.cant_move_published_file", {
        fileName: i.name,
        teamName: r.publisher.name
      })));
      return;
    }
    T || (T = t);
  }
  if (repos && repos.length > 0) {
    let t = await subscribeMultipleAndAwaitAll(RepoCanMove, repos.map(e => ({
      id: e.id
    })));
    let i = await subscribeMultipleAndAwaitAll(RepoCanMoveWithReasons, repos.map(e => ({
      id: e.id
    })));
    for (let t = 0; t < repos.length; t++) {
      let n = repos[t];
      let r = i[t];
      let s = r && getResourceDataOrFallback(getResourceDataOrFallback(r.result.data?.repo)?.hasPermission);
      if (s && n?.default_file_key && W(s, n.default_file_key, e)) return;
    }
    for (let i = 0; i < repos.length; i++) {
      let n = repos[i];
      let r = n.folder_id ? g.folders[n.folder_id] ?? null : null;
      if (!getResourceDataOrFallback(t[i].result.data?.repo)?.hasPermission && !C) {
        let t = r ? getI18nString("file_browser.file_browser_actions.remove_files_from_project_permission", {
          projectName: r.name
        }) : getI18nString("file_browser.file_browser_actions.remove_files_from_this_project_permission");
        e.dispatch(FlashActions.error(t));
        return;
      }
      T || (T = r);
    }
  }
  if (files.length > 0) {
    let t = await subscribeMultipleAndAwaitAll(FileCanMoveWithReasons, files.map(e => ({
      key: e.key
    })));
    for (let n = 0; n < files.length; n++) {
      let r = files[n];
      let s = t[n];
      let o = s && getResourceDataOrFallback(s.result.data?.file)?.hasPermission;
      if (o && r && W(o, r.key, e)) return;
    }
  }
  let k = isTeamFolder(T);
  let R = isTeamFolderV2(_);
  let P = T?.team_id !== _.teamId;
  if (_.teamId && (!T || P || k !== R)) {
    if (team && _.isEditingLockedForUser && !R) {
      let t = files.some(e => e.editor_type === FFileType.FIGMAKE);
      e.dispatch(showModalHandler({
        type: ConsumptionPaywallModalPlansPricing,
        data: {
          team,
          resource: t && !getFeatureFlags().bake_starter_limit ? FeatureFlag.FIGMAKE : PageFolderFile.FILE,
          action: fileActionEnum.MOVE_FILES,
          editorType: files.every(e => e.editor_type === files[0].editor_type) ? files[0].editor_type : null,
          multipleResources: files.length > 1,
          currentPlan: consumptionPaywallUtils.Plan.STARTER,
          upsellPlan: consumptionPaywallUtils.Plan.PRO
        }
      }));
      return;
    }
    if (files.length > 0) {
      let t = files.filter(e => "design" === e.editor_type).length;
      let a = files.filter(e => "whiteboard" === e.editor_type).length;
      let s = files.filter(e => "slides" === e.editor_type).length;
      let c = files.filter(e => "sites" === e.editor_type).length;
      let u = files.filter(e => "figmake" === e.editor_type).length;
      try {
        await folderAPIInstance.getCanMoveFiles({
          numDesignFiles: t,
          numWhiteboardFiles: a,
          numSlidesFiles: s,
          numSitesFiles: c,
          numFigmakeFiles: u,
          firstFileKey: files[0].key,
          destFolderId: _.id
        });
      } catch (t) {
        if (onError && onError(), t.data?.failure_info?.code === "ERR_FILE_LIMIT") {
          if (!team) {
            reportError(_$$e.WORKFLOW, Error("Team object is null in tryMove"));
            return;
          }
          c > 0 && _$$M && !getFeatureFlags().sts_starter_enabled ? e.dispatch(showModalHandler({
            type: _$$M,
            data: {
              team
            }
          })) : u > 0 && _$$W2() ? e.dispatch(showModalHandler({
            type: i,
            data: {
              team
            }
          })) : e.dispatch(showModalHandler({
            type: ConsumptionPaywallModalPlansPricing,
            data: {
              team,
              resource: u > 0 && !getFeatureFlags().bake_starter_limit ? FeatureFlag.FIGMAKE : PageFolderFile.FILE,
              action: fileActionEnum.MOVE_FILES,
              currentPlan: consumptionPaywallUtils.Plan.STARTER,
              upsellPlan: consumptionPaywallUtils.Plan.PRO,
              editorType: files.every(e => e.editor_type === files[0].editor_type) ? files[0].editor_type : null,
              multipleResources: files.length > 1
            }
          }));
          return;
        }
        if (!C) {
          e.dispatch(FlashActions.error(t.data?.message || getI18nString("file_browser.file_browser_actions.file_processing_error")));
          return;
        }
      }
    }
  }
  let {
    modalConfig,
    alwaysShowModal
  } = function (e, t) {
    let i = !1;
    let n = null;
    let r = hasRootPathOptional(t);
    e.some(e => e.is_team_template) && r && (n = {
      type: N.TEMPLATE_TO_DRAFTS
    }, i = !0);
    return {
      modalConfig: n,
      alwaysShowModal: i
    };
  }(files, _);
  if (t.fromFileModal && !alwaysShowModal) {
    await $$z(t, e, files, repos, _);
    return;
  }
  if (t.draftsMoveData?.cannotUpgradeDisableAction) {
    e.dispatch(VisualBellActions.enqueue({
      message: "Can't upgrade",
      error: !0
    }));
    return;
  }
  if (t.draftsMoveData?.licenseType && t.draftsMoveData?.requiresUpgrade && t.draftsMoveData.isAdminSelfUpgrade && !t.draftsMoveData.shouldShowCurf && !t.draftsMoveData.shouldShowScim) {
    let n = U(files, t.draftsMoveData.licenseType);
    Y9({
      licenseType: t.draftsMoveData?.licenseType,
      dispatch: e.dispatch,
      entryPoint: PE.FileMoveUpsell,
      upgradeReason: _$$i.RESOURCE_MOVED_FROM_DRAFTS,
      upgradePathway: J.ADMIN_AUTO_PATHWAY,
      plan: t.draftsMoveData?.destinationPlan ?? null,
      fileKey: n,
      onUpgrade: async () => {
        await G(t, e, files, repos, _);
      },
      onError: () => {
        e.dispatch(popModalStack());
        e.dispatch(VisualBellActions.enqueue({
          message: "Encountered an error. Please try again.",
          error: !0
        }));
      },
      skipConfirmationModal: t.fromFileModal,
      folderId: _.id,
      extraErrorContext: {
        userId: g.user?.id,
        currentFolderId: files.map(e => e.folder_id).toString(),
        destinationFolderId: _.id,
        upgradePathway: J.ADMIN_AUTO_PATHWAY
      }
    })({});
    return;
  }
  if (t.draftsMoveData?.licenseType && t.draftsMoveData?.requiresManualUpgrade) {
    if (t.draftsMoveData?.upgradeRequested) {
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("upgrades.drafts_move.request_sent_bell")
      }));
      return;
    }
    let n = U(files, t.draftsMoveData.licenseType);
    let r = t.draftsMoveData?.getIsEligibleForProvisionalAccess ? t.draftsMoveData.getIsEligibleForProvisionalAccess : () => !1;
    fm({
      licenseType: t.draftsMoveData?.licenseType,
      dispatch: e.dispatch,
      entryPoint: PE.FileMoveUpsell,
      plan: t.draftsMoveData?.destinationPlan ?? null,
      planUser: t.draftsMoveData?.destinationPlanUser ?? null,
      fileKey: n,
      onRequestWithProvisionalAccess: async () => {
        await $$z(t, e, files, repos, _, !0);
      },
      folderId: _.id,
      getIsEligibleForProvisionalAccess: r
    })({});
    return;
  }
  await H(t, e, files, repos, _, modalConfig);
});
export const z = $$K0;