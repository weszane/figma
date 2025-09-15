import { useId, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { jsx } from 'react/jsx-runtime';
import { reportError } from '../905/11';
import { U as _$$U } from '../905/18613';
import { HZ } from '../905/34809';
import { tl as _$$tl } from '../905/70982';
import { an, y$ } from '../905/81009';
import { combineWithHyphen, ShareContext } from '../905/91820';
import { selectWithShallowEqual } from '../905/103090';
import { h as _$$h, O as _$$O } from '../905/142086';
import { showModalHandler } from '../905/156213';
import { e as _$$e3 } from '../905/157975';
import { ServiceCategories as _$$e } from '../905/165054';
import { Fh, Mw, U1 } from '../905/191601';
import { J as _$$J, q as _$$q } from '../905/202542';
import { F as _$$F } from '../905/300562';
import { getI18nString } from '../905/303541';
import { getUserId } from '../905/372672';
import { iC } from '../905/466026';
import { NQ } from '../905/508367';
import { I as _$$I } from '../905/531560';
import { l as _$$l3 } from '../905/572910';
import { FlashActions } from '../905/573154';
import { customHistory } from '../905/612521';
import { buildFileUrl, buildFileUrlInternal, getDesignFileUrl } from '../905/612685';
import { j as _$$j, l as _$$l2 } from '../905/618243';
import { g_ } from '../905/646788';
import { e0 as _$$e2 } from '../905/696396';
import { D4, nz } from '../905/697795';
import { l as _$$l } from '../905/714607';
import { NA } from '../905/738636';
import { generateUrl, findBranchById, isDefaultFile } from '../905/760074';
import { noop } from '../905/834956';
import { BK } from '../905/848862';
import { n as _$$n, g4, m8, SW, Ul, v_ } from '../905/864644';
import { F as _$$F3 } from '../905/915030';
import { $S, mu } from '../905/918620';
import { sf } from '../905/929976';
import { fileEntityDataMapper } from '../905/943101';
import { nk } from '../figma_app/2023';
import { S as _$$S } from '../figma_app/11182';
import { isExternalRestricted } from '../figma_app/12796';
import { useAtomWithSubscription, Xr } from '../figma_app/27355';
import { copyShareLinkOptimistic } from '../figma_app/78808';
import { yN } from '../figma_app/88484';
import { GI } from '../figma_app/147337';
import { FFileType } from '../figma_app/191312';
import { FC } from '../figma_app/212807';
import { vt } from '../figma_app/231614';
import { MG } from '../figma_app/277330';
import { ce } from '../figma_app/347146';
import { _H, ae, CS, gX, nL, zj } from '../figma_app/448654';
import { useCurrentPlanUser, useIsOrgMemberOrAdminUser } from '../figma_app/465071';
import { throwError, throwTypeError } from '../figma_app/465776';
import { jn } from '../figma_app/522082';
import { isRootPath } from '../figma_app/528509';
import { nb, Tf, Y6 } from '../figma_app/543100';
import { setupResourceAtomHandler } from '../figma_app/566371';
import { setupDynamicConfigHandler } from '../figma_app/594947';
import { gO, z6 } from '../figma_app/598926';
import { UF } from '../figma_app/622574';
import { Z as _$$Z } from '../figma_app/640519';
import { wH } from '../figma_app/680166';
import { Cp, jB, Px, zS } from '../figma_app/722141';
import { a9 } from '../figma_app/741211';
import { getProductAccessTypeOrDefault } from '../figma_app/765689';
import { e as _$$e4 } from '../figma_app/831857';
import { V1 } from '../figma_app/834392';
import { dm, gp, OL } from '../figma_app/840917';
import { rC, we } from '../figma_app/861982';
import { D6 } from '../figma_app/863319';
import { desktopAPIInstance } from '../figma_app/876459';
import { Fb, iN, qP, X7 } from '../figma_app/909778';
import { ai } from '../figma_app/915202';
import { g4 as _$$g, b4, n_ } from '../figma_app/937413';
import { useDispatch } from 'react-redux';
function v({
  children: e,
  portalTarget: t,
  portalKey: i
}) {
  return createPortal(e, t, i);
}
let eC = {
  COPY_LINK: 'COPY_LINK',
  DELETE: 'DELETE',
  DUPLICATE: 'DUPLICATE',
  DUPLICATE_TO_DRAFTS: 'DUPLICATE_TO_DRAFTS',
  OPEN: 'OPEN',
  OPEN_NEW_TAB: 'OPEN_NEW_TAB',
  PIN_FILE_TO_FOLDER: 'PIN_FILE_TO_FOLDER',
  PIN_REPO_TO_FOLDER: 'PIN_REPO_TO_FOLDER',
  PIN_FILE_TO_WORKSPACE: 'PIN_FILE_TO_WORKSPACE',
  RENAME: 'RENAME',
  MOVE_FILE: 'MOVE_FILE',
  SHARE: 'SHARE',
  SHOW_IN_FOLDER: 'SHOW_IN_FOLDER',
  REMOVE_FROM_RECENTS: 'REMOVE_FROM_RECENTS',
  RESTORE_FROM_VERSION: 'RESTORE_FROM_VERSION',
  UNPIN_FILE_FROM_FOLDER: 'UNPIN_FILE_FROM_FOLDER',
  UNPIN_REPO_FROM_FOLDER: 'UNPIN_REPO_FROM_FOLDER',
  UNPIN_FILE_FROM_WORKSPACE: 'UNPIN_FILE_FROM_WORKSPACE',
  EDIT_WORKSPACE_PIN: 'EDIT_WORKSPACE_PIN',
  CREATE_BRANCH: 'CREATE_BRANCH',
  FAVORITE_FILE: 'FAVORITE_FILE',
  FAVORITE_PROTOTYPE: 'FAVORITE_PROTOTYPE',
  FAVORITE_REPO: 'FAVORITE_REPO',
  UNFAVORITE_FILE: 'UNFAVORITE_FILE',
  UNFAVORITE_PROTOTYPE: 'UNFAVORITE_PROTOTYPE',
  UNFAVORITE_REPO: 'UNFAVORITE_REPO',
  USE_IN_NEW_FILE: 'USE_IN_NEW_FILE',
  PUBLISH_ORG_TEMPLATE: 'PUBLISH_ORG_TEMPLATE',
  FILE_ANALYTICS: 'FILE_ANALYTICS',
  DELETE_FOREVER: 'DELETE_FOREVER',
  RESTORE: 'RESTORE',
  RESTORE_TO: 'RESTORE_TO'
};
export function $$eT1() {
  let e = `TILE_ACTION_DROPDOWN_${useId()}`;
  return BK(e);
}
export function $$ek0(e) {
  let t = FC();
  let i = useDispatch();
  let {
    user,
    currentUserOrgId
  } = t;
  let {
    dropdownShown,
    openFileFolderId,
    selectedView,
    tileSelect,
    pinnedFileKeys,
    isDrafts,
    folders,
    selectedBranchKeyByRepoId,
    fileKeysByRepoId,
    isOnDeleted,
    attributionContextKey
  } = selectWithShallowEqual(e => ({
    dropdownShown: e.dropdownShown,
    openFileFolderId: e.openFile?.folderId,
    selectedView: e.selectedView,
    tileSelect: e.tileSelect,
    pinnedFileKeys: e.pinnedFileKeys,
    isDrafts: e.selectedView.view === 'folder' && isRootPath(e.folders[e.selectedView.folderId]),
    folders: e.folders,
    selectedBranchKeyByRepoId: e.selectedBranchKeyByRepoId,
    fileKeysByRepoId: e.fileKeysByRepoId,
    isOnDeleted: e.selectedView.view === 'deletedFiles',
    attributionContextKey: e.sharingAttributionContextKey
  }));
  let eU = e.tile;
  let eB = getUserId();
  let [eV] = setupResourceAtomHandler(OL({
    userId: eB
  }));
  let eG = useMemo(() => eV?.data ?? {}, [eV]);
  let ez = eU.type === nb.FILE ? eU.file?.teamId : void 0;
  let eH = vt(ez);
  let eW = jn();
  let {
    hasPendingRequest,
    getUpgradeEligibility,
    getUpgradePathway
  } = wH({
    folderId: eU.type === nb.FILE ? eU.file.folderId : null,
    fileInBrowser: eU.type === nb.FILE ? eU.file : void 0
  });
  let e$ = GI('tile_action_dropdown');
  let eZ = setupDynamicConfigHandler('file_multi_move_limit').getDynamicConfig().get('fileLimit', 100);
  let eX = e => {
    if (e.file.folderId != null) {
      if (currentUserOrgId === e.file.parentOrgId) {
        i(sf({
          view: 'folder',
          folderId: e.file.folderId
        }));
        i(y$({
          type: _$$F3.FILES,
          tiles: [e]
        }));
      } else {
        let t = e.file.parentOrgId ? `/files/${e.file.parentOrgId}/project/${e.file.folderId}` : `/files/project/${e.file.folderId}`;
        t = user ? NQ(t, 'fuid', user.id) : t;
        customHistory.redirect(t);
      }
    }
  };
  let eQ = e => {
    i(sf({
      view: 'folder',
      folderId: e.repo.folder_id
    }));
    i(y$({
      type: _$$F3.REPOS,
      tiles: [e]
    }));
  };
  let eJ = t => {
    switch (e.searchIndexToLog != null && i(HZ({
      index: e.searchIndexToLog
    })), t.type) {
      case nb.FILE:
        let n = getDesignFileUrl(t.file);
        nz(n, t.file.key, selectedView, i);
        break;
      case nb.PINNED_FILE:
        nz(buildFileUrl(t), t.file.key, selectedView, i);
        break;
      case nb.PROTOTYPE:
        D4(t.prototype.url, t.prototype.file_key, t.prototype.page_id, selectedView);
        break;
      case nb.REPO:
        let r = findBranchById(t.repo, t.branches, selectedBranchKeyByRepoId);
        customHistory.redirect(generateUrl(r, t.repo, 'file'), '_blank');
        break;
      case nb.OFFLINE_FILE:
        i(NA({
          file: t.file,
          openNewFileIn: ai.NEW_TAB,
          source: _$$U.OFFLINE_FILE_TILE
        }));
        return;
      default:
        throwTypeError(t);
    }
  };
  let e0 = e => {
    e.folderId != null && i(gO({
      folderId: e.folderId,
      fileKey: e.key
    }));
  };
  let e1 = e => {
    e.folder_id != null && e.default_file_key != null && i(gO({
      folderId: e.folder_id,
      fileKey: e.default_file_key
    }));
  };
  let e2 = e => {
    let t = e.folderId;
    t != null && i(z6({
      folderId: t,
      fileKey: e.key
    }));
  };
  let e5 = e => {
    e.folder_id != null && e.default_file_key != null && i(z6({
      folderId: e.folder_id,
      fileKey: e.default_file_key
    }));
  };
  let e4 = e => {
    i(showModalHandler({
      type: _$$I(),
      data: {
        pinnedFileId: e
      }
    }));
  };
  let e3 = e => {
    i(showModalHandler({
      type: _$$l(),
      data: {
        pinnedFileId: e
      }
    }));
  };
  let e6 = e => {
    i(showModalHandler({
      type: g_,
      data: {
        fileKey: e.key,
        source: nk.fileBrowserTileActionMenu
      }
    }));
  };
  let e7 = e => {
    if (t0 !== _$$q.UPGRADE_NOT_NEEDED && getUpgradePathway(e) !== _$$J.AUTO_PATHWAY) return hasPendingRequest(e) ? getI18nString('upgrades.request_sent') : getI18nString('upgrades.request');
  };
  let e8 = e => !!hasPendingRequest(e) && t0 === _$$q.CANNOT_UPGRADE;
  let e9 = e => {
    switch (e.type) {
      case nb.FILE:
        let t = e.file;
        i(copyShareLinkOptimistic({
          fileKey: t.key,
          url: buildFileUrl({
            file: t,
            attributionContext: combineWithHyphen(attributionContextKey, ShareContext.FILE_TILE_CONTEXT_MENU),
            allowDefaulting: !0
          }),
          source: ShareContext.FILE_TILE_CONTEXT_MENU
        }));
        break;
      case nb.PINNED_FILE:
        i(copyShareLinkOptimistic({
          fileKey: e.file.key,
          url: buildFileUrl({
            file: e.file,
            attributionContext: combineWithHyphen(attributionContextKey, ShareContext.FILE_TILE_CONTEXT_MENU),
            allowDefaulting: !0
          }),
          source: ShareContext.FILE_TILE_CONTEXT_MENU
        }));
        break;
      case nb.PROTOTYPE:
        i(_$$S({
          url: buildFileUrlInternal({
            base: 'proto',
            file: {
              key: e.prototype.file_key
            },
            nodeId: e.prototype.page_id,
            attributionContext: combineWithHyphen(attributionContextKey, ShareContext.FILE_TILE_CONTEXT_MENU)
          })
        }));
        break;
      case nb.REPO:
        let n = findBranchById(e.repo, e.branches, selectedBranchKeyByRepoId);
        i(copyShareLinkOptimistic({
          fileKey: n.key,
          url: generateUrl(n, e.repo, 'file'),
          source: ShareContext.FILE_TILE_CONTEXT_MENU
        }));
    }
  };
  let te = Xr(Y6);
  let tt = e => {
    te({
      type: 'FILE',
      id: e.key
    });
    i(an());
  };
  let ti = e => {
    te({
      type: 'REPO',
      id: e.id
    });
    i(an());
  };
  let tn = e => {
    dm(e);
    i(an());
  };
  let tr = e => {
    i(_$$Z({
      fileKey: e.key
    }));
  };
  let ta = () => {
    i(n_({
      toDraft: !1
    }));
    i(an());
  };
  let ts = e => {
    e.folderId != null && i(showModalHandler({
      type: _$$e3,
      data: {
        fileKey: e.key,
        entrypoint: _$$F.FileNavigation
      }
    }));
  };
  let to = () => {
    let {
      selectedCount,
      deletableCount,
      allDrafts,
      filesByKey,
      reposById,
      offlineFilesByKey
    } = Mw(e.selectedTiles, e.permsByFileKey, e.permsByRepoId);
    if (deletableCount < selectedCount) {
      let e = getI18nString('tile.dropdown.no_permission_to_trash_error');
      i(FlashActions.error(e));
      return;
    }
    i(U1({
      filesByKey,
      reposById,
      offlineFilesByKey,
      allDrafts
    }));
  };
  let tl = () => {
    let t = m8(ty, e.permsByFileKey);
    let n = gX(tv, e.permsByRepoId);
    if (t.length + n.length < ty.length + tv.length) {
      i(FlashActions.error(getI18nString('flash.dont_have_permission_permanently_delete_files')));
      return;
    }
    i(Fh({
      fileKeys: t,
      repoIds: n
    }));
  };
  let td = () => {
    let t = g4(ty, e.permsByFileKey);
    let n = _H(tv, e.permsByRepoId);
    if (t.length + n.length === 0) {
      i(FlashActions.error(getI18nString('tile.dropdown.no_permission_to_restore_error')));
      return;
    }
    i(b4({
      fileKeys: t,
      repoIds: n
    }));
  };
  let tc = (t, n) => {
    let r = tS.length + tP.length;
    if (r === 0) {
      i(FlashActions.error(getI18nString('tile.dropdown.no_permission_to_restore_error')));
      return;
    }
    if (r === 1) {
      let r = e.selectedTiles[0];
      if (r?.type === nb.FILE) {
        _$$h(fileEntityDataMapper.toSinatra(r.file), null, i, void 0, void 0, {
          canMove: !!t?.canMove,
          isUserViewerRestricted: !!t?.isUserRestrictedForSeat,
          planUser: t?.planUser ?? null,
          inDrafts: !!t?.isDraftFile,
          draftsMoveData: t6,
          canMoveWithReasons: t?.canMoveWithReasons
        }, void 0, !0);
      } else if (r?.type === nb.REPO) {
        let e = r.branches.find(e => isDefaultFile(e, r.repo));
        _$$h(e ?? null, r.repo, i, void 0, void 0, {
          canMove: !!n?.canMove,
          isUserViewerRestricted: !!n?.isUserRestrictedForSeat,
          planUser: n?.planUser ?? null,
          inDrafts: !!n?.isDraftRepo,
          draftsMoveData: t6,
          canMoveWithReasons: n?.canMoveWithReasons
        }, void 0, !0);
      }
    } else {
      let t = e.selectedTiles.filter(e => e.type === nb.FILE).map(e => fileEntityDataMapper.toSinatra(e.file));
      let n = e.selectedTiles.filter(e => e.type === nb.REPO).map(e => e.repo);
      _$$O(t, n, i, void 0, !0);
    }
  };
  let tu = () => {
    i(_$$g());
    i(an());
  };
  let tp = () => {
    let e = Object.keys(tileSelect[_$$F3.REPOS]);
    e.length > 0 && i(iC({
      recent_repo_ids: e
    }));
    let t = [];
    for (let i of e) t = t.concat(fileKeysByRepoId[i]);
    let n = Object.keys(tileSelect[_$$F3.FILES]).concat(t);
    let r = n.map(e => ({
      key: e
    }));
    for (let e of (r.length > 0 && yN(r.map(e => e.key)).catch(e => {
      i(FlashActions.error(getI18nString('file_browser.file_browser_actions.recently_viewed_error', {
        numFiles: n.length
      })));
      return e;
    }), Object.keys(tileSelect[_$$F3.PROTOTYPES]))) {
      let [t, n, r] = e.split(',');
      i(_$$tl({
        fileKey: t,
        pageId: n
      }));
    }
    i(an());
  };
  let tm = () => {
    let t = e.sourceFile;
    let n = e.loadedQueries.createBranchStatus;
    if (!t || !n) return;
    let r = _$$e2.FILE_BROWSER;
    switch (n.status) {
      case 'upsell-org':
        i(_$$j({
          trackingContextName: r
        }));
        break;
      case 'enabled':
        i(_$$l2({
          trackingContextName: r,
          sourceFileKey: t.key,
          dispatchedFromEditor: !1
        }));
        break;
      case 'disabled':
      case 'hidden':
        break;
      default:
        throwTypeError(n.status);
    }
  };
  let th = (e, t, n) => {
    let r = {
      file: e,
      sectionId: t,
      entrypoint: 'dropdown',
      fileBrowserFavorite: !0
    };
    n ? i(Fb(r)) : i(qP(r));
  };
  let tg = (e, t) => {
    let n = {
      prototype: e,
      entrypoint: 'dropdown',
      fileBrowserEntryPoint: !0
    };
    t ? i(iN(n)) : i(X7(n));
  };
  let tf = (e, t, i, n) => {
    let r = e.is_favorited && t.some(e => e.id === i?.id);
    return {
      displayText: e.is_favorited ? `${getI18nString('favorited_resources.indicate_section_prefix')}: ${i?.name || getI18nString('sidebar.starred')}` : getI18nString('favorited_resources.add_to_sidebar'),
      children: t.map(({
        id: e,
        name: t
      }) => ({
        recordingKey: 'FAVORITE_FILE.CUSTOM',
        displayText: t === '' ? getI18nString('sidebar.starred') : t,
        isChecked: i?.id === e,
        alwaysShowCheckMarkOffset: r,
        callback: () => n(e)
      }))
    };
  };
  let t_ = (e, t, n, r) => {
    if (e.default_file_key === null) {
      console.error('Repo file key should not be null');
      return;
    }
    let a = {
      file: fileEntityDataMapper.toLiveGraph(t),
      repoId: e.id,
      sectionId: n,
      entrypoint: 'dropdown',
      fileBrowserFavorite: !0
    };
    r ? i(Fb(a)) : i(qP(a));
  };
  let tA = (t, n, r) => {
    if (r === 1) {
      let r = e.selectedTiles[0];
      if (r?.type === nb.FILE) {
        _$$h(fileEntityDataMapper.toSinatra(r.file), null, i, void 0, void 0, {
          canMove: !!t?.canMove,
          isUserViewerRestricted: !!t?.isUserRestrictedForSeat,
          planUser: t?.planUser ?? null,
          inDrafts: !!t?.isDraftFile,
          draftsMoveData: t6,
          hasConnectedPlanUserInOrg: t7,
          canMoveWithReasons: t?.canMoveWithReasons
        });
      } else if (r?.type === nb.REPO) {
        let e = r.branches.find(e => isDefaultFile(e, r.repo));
        _$$h(e ?? null, r.repo, i, void 0, void 0, {
          canMove: !!n?.canMove,
          isUserViewerRestricted: !!n?.isUserRestrictedForSeat,
          planUser: n?.planUser ?? null,
          inDrafts: !!n?.isDraftRepo,
          draftsMoveData: t6,
          hasConnectedPlanUserInOrg: t7,
          canMoveWithReasons: n?.canMoveWithReasons
        });
      }
    } else {
      let t = e.selectedTiles.filter(e => e.type === nb.FILE).map(e => fileEntityDataMapper.toSinatra(e.file));
      let n = e.selectedTiles.filter(e => e.type === nb.REPO).map(e => e.repo);
      _$$O(t, n, i);
    }
  };
  let ty = useMemo(() => Object.keys(tileSelect[_$$F3.FILES]), [tileSelect]);
  let tb = useMemo(() => Object.keys(tileSelect[_$$F3.PINNED_FILES]), [tileSelect]);
  let tv = useMemo(() => Object.keys(tileSelect[_$$F3.REPOS]), [tileSelect]);
  let tI = useMemo(() => Ul(ty, e.permsByFileKey) || [], [e.permsByFileKey, ty]);
  let tE = useMemo(() => _$$n(ty, e.permsByFileKey) || [], [e.permsByFileKey, ty]);
  let tx = useMemo(() => g4(ty, e.permsByFileKey) || [], [e.permsByFileKey, ty]);
  let tS = useMemo(() => SW(ty, e.permsByFileKey) || [], [e.permsByFileKey, ty]);
  let tw = useMemo(() => v_(ty, e.permsByFileKey).length, [e.permsByFileKey, ty]);
  let tC = useMemo(() => v_(tb, e.permsByFileKey).length, [e.permsByFileKey, tb]);
  let tT = useMemo(() => m8(ty, e.permsByFileKey) || [], [e.permsByFileKey, ty]);
  let tk = useMemo(() => isOnDeleted ? Object.keys(tileSelect[_$$F3.REPOS]).length : (nL(tv, selectedBranchKeyByRepoId, e.permsByRepoId) || []).length, [isOnDeleted, e.permsByRepoId, tileSelect, tv, selectedBranchKeyByRepoId]);
  let tR = useMemo(() => zj(tv, e.permsByRepoId) || [], [e.permsByRepoId, tv]);
  let tN = useMemo(() => _H(tv, e.permsByRepoId) || [], [e.permsByRepoId, tv]);
  let tP = useMemo(() => CS(tv, e.permsByRepoId) || [], [e.permsByRepoId, tv]);
  let tO = useMemo(() => gX(tv, e.permsByRepoId) || [], [e.permsByRepoId, tv]);
  let tD = useMemo(() => Object.keys(gp(tileSelect[_$$F3.OFFLINE_FILES], {
    offlineFiles: eG
  })), [eG, tileSelect]);
  let tL = useMemo(() => ae(tv, e.permsByRepoId) || [], [e.permsByRepoId, tv]);
  let tF = useMemo(() => Object.keys(tileSelect[_$$F3.FILES]).length + Object.keys(tileSelect[_$$F3.REPOS]).length + Object.keys(tileSelect[_$$F3.PROTOTYPES]).length, [tileSelect]);
  let tM = useMemo(() => Object.keys(tileSelect[_$$F3.FILES]).length + Object.keys(tileSelect[_$$F3.REPOS]).length, [tileSelect]);
  let tj = useMemo(() => {
    let t = new Set();
    let i = new Set();
    ty.forEach(n => {
      let r = e.permsByFileKey[n];
      r && (t.add(r.planType || ''), i.add(r.planId || ''));
    });
    tv.forEach(n => {
      let r = e.permsByRepoId[n];
      r && (t.add(r.planType || ''), i.add(r.planId || ''));
    });
    return t.size === 1 && (t.has('team') || i.size === 1);
  }, [e.permsByFileKey, e.permsByRepoId, ty, tv]);
  let tU = _$$e4();
  let tB = eU.type === nb.FILE ? eU.file : null;
  let tV = eU.type === nb.PINNED_FILE ? eU.file : null;
  let tG = tV || tB;
  let tz = eU.type === nb.REPO ? eU.repo : null;
  let tH = (tG && e.permsByFileKey[tG.key]) ?? null;
  let tW = (tz && e.permsByRepoId[tz.id]) ?? null;
  let tK = e.tile.type === nb.PROTOTYPE ? e.tile.prototype : null;
  let tY = tz != null && eU.branches ? eU.branches.find(e => isDefaultFile(e, tz)) : null;
  let tq = tY ? fileEntityDataMapper.toLiveGraph(tY) : null;
  let t$ = e.tile.type === nb.OFFLINE_FILE ? e.tile.file : null;
  let tZ = mu(e.tile.type === nb.FILE ? fileEntityDataMapper.toSinatra(e.tile.file) : null, eB);
  let tX = a9();
  let tQ = eU.type === nb.REPO ? tq : tG;
  let tJ = $S({
    fileKey: tQ?.key ?? '',
    file: tQ ? fileEntityDataMapper.toSinatra(tQ) : null
  });
  let t0 = useMemo(() => {
    let e = Tf.getEditorType(eU);
    if (!user || !e || !tQ) return null;
    let t = fileEntityDataMapper.toSinatra(tQ);
    let i = tJ.data?.file?.mustUpgradeToShareDraft ?? !1;
    return getUpgradeEligibility(getProductAccessTypeOrDefault(e), !_$$l3({
      file: {
        ...t,
        mustUpgradeToShareDraft: i
      },
      user,
      orgUser: tX,
      orgDraftsOwner: tX,
      teamUser: tZ
    }));
  }, [eU, tQ, user, tZ, getUpgradeEligibility, tX, tJ.data?.file?.mustUpgradeToShareDraft]);
  let t1 = Object.keys(tileSelect[_$$F3.FILES]).length;
  let t2 = Object.keys(tileSelect[_$$F3.PINNED_FILES]).length;
  let t5 = Object.keys(tileSelect[_$$F3.PROTOTYPES]).length;
  let t4 = Object.keys(tileSelect[_$$F3.REPOS]).length;
  let t3 = Object.keys(tileSelect[_$$F3.OFFLINE_FILES]).length;
  let t6 = jB({
    files: tB ? [fileEntityDataMapper.toSinatra(tB)] : [],
    repos: tz ? [tz] : [],
    destinationFolderId: Tf.getFolderId(eU),
    isDestinationDrafts: !1
  });
  let t7 = Cp(t6.destinationPlan?.key || null, t6.licenseType);
  let t8 = e.selectedTiles.filter(e => e.type === nb.FILE).map(e => e.file).some(e => e.editorType === FFileType.FIGMAKE) && t6.requiresUpgrade && !tU;
  let t9 = useCurrentPlanUser('TileActionDropdown');
  let ie = useIsOrgMemberOrAdminUser(t9).unwrapOr(!1);
  let it = useAtomWithSubscription(V1);
  let ii = dropdownShown?.data;
  if (!ii) return null;
  let ir = t1 + t2 + t4;
  let ia = ir + t3;
  let is = t1 + t2 + t4 + t5 + t3;
  let io = ir === 1;
  let il = ia === 1;
  if (is === 0) return jsx('div', {});
  let id = !0;
  let ic = !0;
  let iu = !0;
  let ip = !1;
  let im = !0;
  let ih = !0;
  let ig = !0;
  (tE.length + tR.length + tD.length < t1 || t5 > 0) && (id = !1);
  (tT.length + tO.length < t1 || t5 > 0 || t3 > 0) && (ic = !1);
  (tx.length < t1 || tN.length < t4 || t5 > 0 || t3 > 0) && (iu = !1);
  tS.length === t1 && tP.length === t4 && (ip = !0);
  (tw < t1 || tC < t2 || tk < t4 || t5 > 0 || t3 > 0) && (im = !1);
  t3 > 0 && (ih = !1);
  let i_ = tI.length + tL.length;
  i_ < ir && (ig = !1);
  let iA = '';
  io || (iA = getI18nString('tile.dropdown.multiple_file_suffix', {
    totalSelected: ir
  }));
  let iy = '';
  il || (iy = getI18nString('tile.dropdown.multiple_file_suffix', {
    totalSelected: ia
  }));
  let ib = ((t, n) => {
    let r = D6(currentUserOrgId);
    let a = r ? getI18nString('favorited_resources.remove_from_sidebar') : getI18nString('tile.favoriting.remove_from_favorites');
    return {
      [eC.COPY_LINK]: e => ({
        displayText: getI18nString('tile.dropdown.copy_link'),
        callback: () => e9(e)
      }),
      [eC.DELETE]: (e, i, n) => {
        let r = !1;
        if (e.type === nb.REPO) {
          let t = findBranchById(e.repo, e.branches, selectedBranchKeyByRepoId);
          r = !isDefaultFile(t, e.repo);
        }
        return {
          displayText: r ? getI18nString('tile.dropdown.move_file_and_branches_to_trash') : t === 1 ? getI18nString('tile.dropdown.trash_single_tile') : getI18nString('tile.dropdown.trash_file', {
            objText: i
          }),
          callback: to,
          disabled: n
        };
      },
      [eC.DUPLICATE]: (e, i) => ({
        displayText: t === 1 ? getI18nString('tile.dropdown.duplicate_single_tile') : getI18nString('tile.dropdown.duplicate', {
          objText: e
        }),
        callback: ta,
        disabled: i
      }),
      [eC.DUPLICATE_TO_DRAFTS]: (e, t) => ({
        displayText: n === 1 ? getI18nString('tile.dropdown.duplicate_to_draft_single_file_or_repo') : getI18nString('tile.dropdown.duplicate_to_draft', {
          objText: e
        }),
        callback: tu,
        disabled: t
      }),
      [eC.OPEN]: () => ({
        displayText: getI18nString('tile.dropdown.open'),
        callback: (t, i, n, r) => {
          e.openTile(r);
        }
      }),
      [eC.OPEN_NEW_TAB]: e => ({
        displayText: getI18nString('tile.dropdown.open_new_tab'),
        callback: () => eJ(e)
      }),
      [eC.PIN_FILE_TO_FOLDER]: e => ({
        displayText: getI18nString('tile.dropdown.pin_to_project'),
        callback: () => e0(e)
      }),
      [eC.PIN_REPO_TO_FOLDER]: e => ({
        displayText: getI18nString('tile.dropdown.pin_to_project'),
        callback: () => e1(e)
      }),
      [eC.PIN_FILE_TO_WORKSPACE]: t => {
        let i = !!e.loadedQueries.fileWorkspacePinActions && e.loadedQueries.fileWorkspacePinActions.workspaceHasMaxPins;
        return {
          displayText: getI18nString('tile.dropdown.pin_to_workspace'),
          callback: () => e$(t, i)
        };
      },
      [eC.REMOVE_FROM_RECENTS]: (e, t) => ({
        displayText: getI18nString('tile.dropdown.remove_from_recent_pluralized', {
          numFiles: e
        }),
        callback: tp,
        disabled: t
      }),
      [eC.RENAME]: e => {
        switch (e.type) {
          case nb.FILE:
            return {
              displayText: getI18nString('tile.dropdown.rename'),
              callback: () => tt(e.file)
            };
          case nb.REPO:
            let t = findBranchById(e.repo, e.branches, selectedBranchKeyByRepoId);
            return {
              displayText: isDefaultFile(t, e.repo) ? getI18nString('tile.dropdown.rename') : getI18nString('tile.dropdown.rename_file'),
              callback: () => ti(e.repo)
            };
          case nb.OFFLINE_FILE:
            return {
              displayText: getI18nString('tile.dropdown.rename'),
              callback: () => tn(e.file)
            };
          default:
            throwTypeError(e);
        }
      },
      [eC.MOVE_FILE]: (e, t, i) => ({
        displayText: e === 1 ? getI18nString('tile.dropdown.move_file') : getI18nString('tile.dropdown.move_object', {
          objText: t
        }),
        callback: () => tA(tH, tW, e),
        disabled: i || t8 || Px(t6, !!tH?.isFileTypeDisabled, t7),
        sideText: zS(t6, i || !!tH?.isFileTypeDisabled, t7),
        rightJustifySideText: !0
      }),
      [eC.RESTORE_FROM_VERSION]: e => {
        switch (e.type) {
          case nb.FILE:
            return {
              displayText: getI18nString('fullscreen_actions.toggle-version-history'),
              callback: () => {
                tr(e.file);
              }
            };
          case nb.REPO:
            let t = findBranchById(e.repo, e.branches, selectedBranchKeyByRepoId);
            return {
              displayText: getI18nString('fullscreen_actions.toggle-version-history'),
              callback: () => {
                tr(t);
              }
            };
          default:
            throwError(eC.RESTORE_FROM_VERSION);
        }
      },
      [eC.SHARE]: e => {
        let t = (() => {
          switch (e.type) {
            case nb.FILE:
            case nb.PINNED_FILE:
              return e.file;
            case nb.REPO:
              return findBranchById(e.repo, e.branches, selectedBranchKeyByRepoId);
            default:
              reportError(_$$e.WAYFINDING, new Error('Invalid tile type when rendering DropdownActionOptions.SHARE'), {
                extra: {
                  'tile.type': e.type,
                  'numFilesSelected': t1,
                  'numPinnedFilesSelected': t2,
                  'numReposSelected': t4
                }
              });
              return null;
          }
        })();
        let i = Tf.getEditorType(e);
        let n = getProductAccessTypeOrDefault(i);
        return {
          displayText: getI18nString('tile.dropdown.share'),
          callback: () => {
            t && e6(t);
          },
          sideText: e7(n),
          rightJustifySideText: !0,
          disabled: e8(n)
        };
      },
      [eC.SHOW_IN_FOLDER]: e => {
        switch (e.type) {
          case nb.FILE:
            return {
              displayText: getI18nString('tile.dropdown.show_in_project'),
              callback: () => eX(e)
            };
          case nb.REPO:
            return {
              displayText: getI18nString('tile.dropdown.show_in_project'),
              callback: () => eQ(e)
            };
          default:
            throwError(eC.SHOW_IN_FOLDER);
        }
      },
      [eC.UNPIN_FILE_FROM_FOLDER]: e => ({
        displayText: getI18nString('tile.dropdown.remove_project_pin'),
        callback: () => e2(e)
      }),
      [eC.UNPIN_REPO_FROM_FOLDER]: e => ({
        displayText: getI18nString('tile.dropdown.remove_project_pin'),
        callback: () => e5(e)
      }),
      [eC.UNPIN_FILE_FROM_WORKSPACE]: e => ({
        displayText: getI18nString('tile.dropdown.remove_workspace_pin'),
        callback: () => e4(e)
      }),
      [eC.EDIT_WORKSPACE_PIN]: e => ({
        displayText: getI18nString('tile.dropdown.edit_workspace_pin'),
        callback: () => e3(e)
      }),
      [eC.CREATE_BRANCH]: e => ({
        displayText: getI18nString('tile.dropdown.create_new_branch'),
        callback: tm,
        disabled: e
      }),
      [eC.DELETE_FOREVER]: (e, t) => ({
        displayText: getI18nString('tile.dropdown.delete_forever', {
          objectText: e
        }),
        callback: tl,
        disabled: t
      }),
      [eC.RESTORE]: (e, t, i) => ({
        displayText: getI18nString('tile.dropdown.restore', {
          objectText: e,
          numFiles: i
        }),
        callback: td,
        disabled: t
      }),
      [eC.RESTORE_TO]: (e, t, i) => ({
        displayText: getI18nString('tile.dropdown.restore_to', {
          objectText: e,
          numFiles: i
        }),
        callback: () => tc(tH, tW),
        disabled: t
      }),
      [eC.FAVORITE_FILE]: (t, i) => {
        let {
          favoriteSidebarSection
        } = e.loadedQueries;
        return r && i != null && i?.length > 0 ? tf({
          is_favorited: t.isFavorited
        }, i, favoriteSidebarSection, e => {
          th(t, e, favoriteSidebarSection?.id !== e);
        }) : {
          displayText: getI18nString('tile.favoriting.add_to_favorites'),
          callback: () => th(t, void 0, !0)
        };
      },
      [eC.FAVORITE_PROTOTYPE]: e => ({
        displayText: getI18nString('tile.favoriting.add_to_favorites'),
        callback: () => tg(e, !0)
      }),
      [eC.FAVORITE_REPO]: (t, i, n) => {
        let {
          favoriteSidebarSection
        } = e.loadedQueries;
        return r && n != null ? tf(t, n, favoriteSidebarSection, e => {
          t_(t, i, e, favoriteSidebarSection?.id !== e);
        }) : {
          displayText: getI18nString('tile.favoriting.add_to_favorites'),
          callback: () => t_(t, i, void 0, !0)
        };
      },
      [eC.UNFAVORITE_FILE]: e => ({
        displayText: a,
        callback: () => th(e, void 0, !1)
      }),
      [eC.UNFAVORITE_PROTOTYPE]: e => ({
        displayText: a,
        callback: () => tg(e, !1)
      }),
      [eC.UNFAVORITE_REPO]: (e, t) => ({
        displayText: a,
        callback: () => t_(e, t, void 0, !1)
      }),
      [eC.USE_IN_NEW_FILE]: e => rC({
        dispatch: i,
        fileKey: e.key,
        templateName: e.name
      }),
      [eC.PUBLISH_ORG_TEMPLATE]: e => {
        let t = !!Tf.getIsTeamTemplate(e);
        let n = Tf.getFileOrMainBranchKey(e);
        let r = Tf.getName(e);
        let a = Tf.getFolderId(e);
        let s = Tf.getTeamId(e);
        let o = Tf.getEditorType(e);
        let l = Tf.getOrgId(e);
        let d = isDrafts || a !== null && isRootPath(folders[a]);
        return we({
          dispatch: i,
          file: {
            key: n,
            name: r,
            folder_id: a,
            team_id: s,
            editor_type: o,
            parent_org_id: l
          },
          fileNeedsMovingBeforePublish: d,
          isPublished: t,
          source: 'file-browser-dropdown'
        });
      },
      [eC.FILE_ANALYTICS]: e => ({
        displayText: getI18nString('fullscreen.filename_view.file_analytics'),
        callback: () => ts(e)
      })
    };
  })(is, ir);
  let iv = (() => {
    let i = (tK && e.permsByPrototypeId[tK.file_key]) ?? null;
    let n = isExternalRestricted(user, currentUserOrgId);
    let r = !!tB && !!tB.teamId && eH;
    let a = selectedView.view === 'folder' && pinnedFileKeys[selectedView.folderId] || it && openFileFolderId && pinnedFileKeys[openFileFolderId] || [];
    let s = tB && a.includes(tB.key);
    let o = tV && a.includes(tV.key);
    let l = tz && tz.default_file_key && a.includes(tz.default_file_key);
    let d = s || o || l || Object.keys(tileSelect[_$$F3.PINNED_FILES]).length > 0;
    let u = t1 + t2 + t5 + t4 + t3 === 1;
    let p = !tB?.teamId && !tB?.parentOrgId && tB?.folderId === user?.personal_drafts_folder_id;
    let m = tG?.editorType === FFileType.FIGMAKE && !tU;
    let g = (tw > 0 || tC > 0 || tk > 0) && !n && !p && !r && !eW;
    let f = tR.length + tE.length + tD.length;
    let _ = tO.length + tT.length;
    let A = tN.length + tx.length;
    let y = tP.length + tS.length;
    let v = !isDrafts && A === 0 && y === 0 && _ === 0 && !e.tileActions.showInFolder && u;
    let I = D6(currentUserOrgId);
    return {
      [eC.COPY_LINK]: () => !!(e.tileActions.copyLink && u && !t$),
      [eC.DELETE]: () => !!(e.tileActions.$$delete && f > 0 && t2 === 0 && !p),
      [eC.DUPLICATE]: () => !!(e.tileActions.duplicate && g),
      [eC.DUPLICATE_TO_DRAFTS]: () => !!(e.tileActions.duplicateToDrafts && g),
      [eC.OPEN]: () => !!(e.tileActions.open && u),
      [eC.OPEN_NEW_TAB]: () => !!(e.tileActions.openNewTab && u && !desktopAPIInstance && !ce()),
      [eC.PIN_FILE_TO_FOLDER]: () => {
        let t = tH?.canPin;
        return !!(e.tileActions.pinToFolder && !d && t1 === 1 && v && t);
      },
      [eC.PIN_REPO_TO_FOLDER]: () => {
        let t = tW?.canPin;
        return !!(e.tileActions.pinToFolder && !d && t4 === 1 && v && t);
      },
      [eC.PIN_FILE_TO_WORKSPACE]: () => !!(u && (t1 === 1 || t4 === 1) && e.tileActions.pinToWorkspace && e.loadedQueries.fileWorkspacePinActions && e.loadedQueries.fileWorkspacePinActions.shouldShowPinFileToWorkspaceAction),
      [eC.REMOVE_FROM_RECENTS]: () => !!(e.tileActions.removeFromRecents && tF > 0),
      [eC.RENAME]: () => {
        let t = tH?.canRename;
        let i = tW?.canRename;
        return !!(e.tileActions.rename && u && (t1 === 1 && t || t4 === 1 && i || t3 === 1));
      },
      [eC.MOVE_FILE]: () => {
        let t = tH?.canOpenMoveModal;
        let i = tW?.canOpenMoveModal;
        return !!(e.tileActions.moveFile && t3 === 0 && (u && (t1 === 1 && t || t4 === 1 && i) || ir > 1 && ir <= eZ && i_ > 0));
      },
      [eC.RESTORE_FROM_VERSION]: () => {
        let t = tH?.canRestoreFromVersion;
        let i = !!tz && tW?.canEditBranch(selectedBranchKeyByRepoId[tz.id]);
        return !!(e.tileActions.restoreFromVersion && u && (t1 === 1 && t || t4 === 1 && i));
      },
      [eC.SHARE]: () => !!(e.tileActions.share && u && (t1 === 1 || t2 === 1 || t4 === 1) && !p && !tH?.isFileTypeDisabled && !m),
      [eC.SHOW_IN_FOLDER]: () => {
        let t = tH?.canShowInProject;
        let i = tW?.canShowInProject;
        return !!(e.tileActions.showInFolder && !p && u && (t4 === 1 && i || t1 === 1 && t));
      },
      [eC.UNPIN_FILE_FROM_FOLDER]: () => {
        let t = !!tH?.canPin;
        return !!(e.tileActions.pinToFolder && d && t2 <= 1 && v && t);
      },
      [eC.UNPIN_REPO_FROM_FOLDER]: () => {
        let t = tW?.canPin;
        return !!(e.tileActions.pinToFolder && d && t4 <= 1 && v && t);
      },
      [eC.UNPIN_FILE_FROM_WORKSPACE]: () => !!(e.tileActions.pinToWorkspace && u && e.loadedQueries.fileWorkspacePinActions && e.loadedQueries.fileWorkspacePinActions.canEditPin),
      [eC.EDIT_WORKSPACE_PIN]: () => !!(e.tileActions.pinToWorkspace && t1 === 1 && e.loadedQueries.fileWorkspacePinActions && e.loadedQueries.fileWorkspacePinActions.canEditPin),
      [eC.CREATE_BRANCH]: () => !!(e.tileActions.createBranch && u && (t1 === 1 || t2 === 1 || t4 === 1) && e.sourceFile && e.loadedQueries.createBranchStatus && e.loadedQueries.createBranchStatus.status !== 'hidden'),
      [eC.FAVORITE_FILE]: () => {
        if (selectedView.view === 'deletedFiles') return !1;
        let t = tH?.canFavorite && !p && e.loadedQueries.isResourceInUserPlan;
        let i = tH?.canFavorite && !tH?.isFavorited && !p && e.loadedQueries.isResourceInUserPlan;
        return !!(selectedView.view !== 'team' && !e.loadedQueries.hasMaxFavorites && !I && (i && t1 === 1 && u || tV && t2 === 1 && !tV?.isFavorited)) || (I && e.loadedQueries.userSidebarSections, !!t && t1 === 1 && !!u || !!tV && t2 === 1);
      },
      [eC.FAVORITE_PROTOTYPE]: () => {
        if (selectedView.view === 'deletedFiles' || selectedView.view === 'team') return !1;
        let t = i?.canFavorite && !p && e.loadedQueries.isResourceInUserPlan;
        return !!(!e.loadedQueries.hasMaxFavorites && !I && t5 === 1 && u && t);
      },
      [eC.FAVORITE_REPO]: () => {
        if (selectedView.view === 'deletedFiles') return !1;
        let t = tW?.canFavorite && !p && e.loadedQueries.isResourceInUserPlan;
        return !!(selectedView.view !== 'team' && !e.loadedQueries.hasMaxFavorites && !I && t4 === 1 && u && t) || (I && e.loadedQueries.userSidebarSections, t4 === 1 && !!u && !!t);
      },
      [eC.UNFAVORITE_FILE]: () => {
        if (selectedView.view === 'deletedFiles' || selectedView.view === 'team') return !1;
        let e = tH?.canFavorite && tH?.isFavorited;
        return !!(tB?.parentOrgId === currentUserOrgId && (t1 === 1 && u && e || tV && t2 === 1 && tV?.isFavorited));
      },
      [eC.UNFAVORITE_PROTOTYPE]: () => {
        if (selectedView.view === 'deletedFiles' || selectedView.view === 'team') return !1;
        let e = i?.canUnfavorite;
        return !!(t5 === 1 && u && e);
      },
      [eC.UNFAVORITE_REPO]: () => {
        if (selectedView.view === 'deletedFiles' || selectedView.view === 'team') return !1;
        let e = tW?.canUnfavorite;
        return !!(t4 === 1 && u && e);
      },
      [eC.USE_IN_NEW_FILE]: () => {
        let t = !!tH?.canUseInNewFile;
        return !!(u && tG && e.tileActions.publishOrgTemplate && t);
      },
      [eC.PUBLISH_ORG_TEMPLATE]: () => {
        let i = !!tH?.canEdit;
        let n = tG && UF({
          fileCanEdit: i,
          editor_type: tG.editorType,
          team_id: tG.teamId,
          state: t
        });
        return !!(u && tG && e.tileActions.publishOrgTemplate && n);
      },
      [eC.DELETE_FOREVER]: () => !!(e.tileActions.deleteForever && _ > 0),
      [eC.RESTORE]: () => !!(e.tileActions.restore && A > 0 && !n),
      [eC.RESTORE_TO]: () => !!(e.tileActions.restoreToOtherFolders && y > 0 && !n && !(e.tileActions.restore && A > 0)),
      [eC.FILE_ANALYTICS]: () => {
        let e = tG ?? tq;
        let t = MG(e ? {
          parentOrgId: e.parentOrgId || null
        } : null, !!e?.lastPublishedAt, ie);
        return !!(e && t);
      }
    };
  })();
  let iI = (e, ...t) => iv[e]() ? [].concat(ib[e](...t)) : [];
  let iE = [[...iI(eC.SHOW_IN_FOLDER, eU), ...iI(eC.OPEN, eU), ...iI(eC.OPEN_NEW_TAB, eU)], [...iI(eC.CREATE_BRANCH, e.loadedQueries.createBranchStatus != null && e.loadedQueries.createBranchStatus.status === 'disabled')], [...iI(eC.FILE_ANALYTICS, tG ?? tq)], [...iI(eC.FAVORITE_FILE, tG, e.loadedQueries.userSidebarSections), ...iI(eC.FAVORITE_PROTOTYPE, tK), ...iI(eC.FAVORITE_REPO, tz, tY, e.loadedQueries.userSidebarSections), ...iI(eC.UNFAVORITE_FILE, tG), ...iI(eC.UNFAVORITE_PROTOTYPE, tK), ...iI(eC.UNFAVORITE_REPO, tz, tY), ...iI(eC.PIN_FILE_TO_FOLDER, tB), ...iI(eC.PIN_REPO_TO_FOLDER, tz), ...iI(eC.UNPIN_FILE_FROM_FOLDER, tG), ...iI(eC.UNPIN_REPO_FROM_FOLDER, tz), ...iI(eC.PIN_FILE_TO_WORKSPACE, tB?.key || tY?.key), ...iI(eC.EDIT_WORKSPACE_PIN, e.loadedQueries.fileWorkspacePinActions?.existingFilePinId), ...iI(eC.UNPIN_FILE_FROM_WORKSPACE, e.loadedQueries.fileWorkspacePinActions?.existingFilePinId)], [...iI(eC.COPY_LINK, eU), ...iI(eC.SHARE, eU), ...iI(eC.DUPLICATE, iA, !im), ...iI(eC.DUPLICATE_TO_DRAFTS, iA, !im), ...iI(eC.USE_IN_NEW_FILE, tG), ...iI(eC.PUBLISH_ORG_TEMPLATE, eU)], [...iI(eC.RESTORE_FROM_VERSION, eU), ...iI(eC.RENAME, eU), ...iI(eC.MOVE_FILE, tM, iA, !(is === 1 || ig && tj)), ...iI(eC.DELETE, eU, iy, !id), ...iI(eC.REMOVE_FROM_RECENTS, tF, !ih), ...iI(eC.RESTORE, iA, !iu, ir), ...iI(eC.RESTORE_TO, iA, !ip, ir), ...iI(eC.DELETE_FOREVER, iA, !ic)]];
  let ix = [];
  iE.filter(e => e.length > 0).forEach(e => {
    ix.length > 0 && ix.push({
      displayText: '',
      separator: !0
    });
    ix.push(...e);
  });
  return jsx(v, {
    portalTarget: document.body,
    children: jsx(noop, {
      autofocusPrevOnDismount: !0,
      dispatch: i,
      items: ix,
      lean: 'right',
      minWidth: io ? void 0 : 140,
      onMount: e.onMount,
      onSelectItem: (e, t) => {
        e.callback && e.callback('', {}, i, t);
      },
      parentRect: ii.targetRect,
      recordingKey: 'tile-dropdown',
      showPoint: !1
    })
  });
}
export const w = $$ek0;
export const L = $$eT1;