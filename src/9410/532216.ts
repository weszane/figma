import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect, memo, useMemo, useCallback, Fragment as _$$Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YJ, hE, Ov, rm, g8, MJ, r1, mc, b as _$$b, bL } from "../figma_app/860955";
import { IconButton } from "../905/443068";
import { O as _$$O } from "../905/969533";
import { getFeatureFlags } from "../905/601108";
import c from "classnames";
import { trackEventAnalytics } from "../905/449184";
import { generateRecordingKey } from "../figma_app/878298";
import { WN } from "../figma_app/638601";
import { renderI18nText, getI18nString } from "../905/303541";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { isZoomIntegration } from "../figma_app/469876";
import { Um } from "../905/848862";
import { c as _$$c } from "../figma_app/740884";
import { eg as _$$eg, O0 } from "../figma_app/452252";
import { i as _$$i } from "../figma_app/825649";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { collaborationHostNameAtom, handleCollaborationHostNameMessage } from "../figma_app/564528";
import { s as _$$s } from "../cssbuilder/589278";
import { OA } from "../figma_app/419216";
import { lQ } from "../905/934246";
import { EventShield } from "../905/821217";
import { ColorSpaceEnum, ColorProfileEnum, Fullscreen, AppStateTsApi } from "../figma_app/763686";
import { getResourceDataOrFallback } from "../905/663269";
import { useSubscription } from "../figma_app/288654";
import { R as _$$R } from "../905/304671";
import { useIsSelectedViewFullscreenCooper } from "../figma_app/828186";
import { Dl } from "../figma_app/601682";
import { useCanUseDevModeDemoFile } from "../figma_app/473493";
import { ju } from "../figma_app/88239";
import { n6 } from "../905/234821";
import { TrackingProvider } from "../figma_app/831799";
import { JT } from "../figma_app/173838";
import { isDesignFileType, isDevHandoffEditorType } from "../figma_app/976749";
import { h as _$$h } from "../905/864281";
import { kD, J3, JU, kN } from "../figma_app/622574";
import { logAndTrackCTA } from "../figma_app/314264";
import { getRepoByIdAlt, isDefaultFile, isBranchAlt } from "../905/760074";
import { m as _$$m, t as _$$t2 } from "../905/364535";
import { $n } from "../905/930279";
import { ck } from "../905/87821";
import { SR } from "../figma_app/852050";
import { BI, m0 as _$$m2 } from "../figma_app/546509";
import { selectCurrentFile, selectOpenFileObject } from "../figma_app/516028";
import { selectCurrentUser } from "../905/372672";
import { FileManagePermission, FileNameViewDropdown } from "../figma_app/43951";
import { getPermissionsStateMemoized, isOrgUserExternallyRestrictedFromState } from "../figma_app/642025";
import { p9, fA, F9 } from "../figma_app/803787";
import { jB, Cp, Px, zS } from "../figma_app/722141";
import { UpsellModalType } from "../905/165519";
import { FEditorType } from "../figma_app/53721";
import { TeamOrgType } from "../figma_app/10554";
import { Yh, c1 } from "../figma_app/357047";
import { e0 as _$$e } from "../905/696396";
import { AM, pT } from "../905/467351";
import { Z5, R5 } from "../figma_app/861982";
import { Ah } from "../figma_app/221114";
import { k$, gN, id, _o, Dz, TV } from "../figma_app/847915";
import { formatI18nMessage } from "../905/482208";
import { UN } from "../905/525678";
import { Pu, Qq, MJ as _$$MJ, Oo } from "../figma_app/4616";
import { jT } from "../figma_app/277330";
import { tz } from "../figma_app/531331";
import { DF, RG } from "../figma_app/146384";
import { F as _$$F } from "../figma_app/928238";
import { useIsSelectedFigmakeFullscreen } from "../figma_app/552876";
import { useIsFullscreenSitesView } from "../905/561485";
import { e as _$$e2 } from "../figma_app/831857";
import { sO } from "../figma_app/21029";
import { fx, PF } from "../figma_app/657972";
import { z6 } from "../905/963340";
import { R6 } from "../figma_app/504823";
import { jK, hP } from "../figma_app/829197";
import { useFloatingTree } from "@floating-ui/react";
import { RR } from "../figma_app/307841";
import { l as _$$l } from "../905/714607";
import { I as _$$I } from "../905/531560";
import { qP, Fb } from "../figma_app/909778";
import { $m } from "../figma_app/78808";
import { Rh } from "../905/844322";
import { kj, U1 } from "../905/191601";
import { vg } from "../figma_app/91703";
import { showModalHandler } from "../905/156213";
import { VK } from "../905/880488";
import { isRestrictedPlanAccess } from "../figma_app/765689";
import { F as _$$F2 } from "../905/300562";
import { T0, gV, t$ } from "../figma_app/863319";
import { getProjectUrl } from "../figma_app/528509";
import { FC } from "../figma_app/212807";
import { fileEntityDataMapper } from "../905/943101";
import { FFileType, FPlanNameType } from "../figma_app/191312";
import { exitVersionHistoryMode, enterVersionHistoryMode } from "../figma_app/841351";
import { Ay } from "../figma_app/86921";
import { Q as _$$Q } from "../figma_app/113686";
import { e as _$$e3 } from "../905/225961";
import { e as _$$e4 } from "../905/157975";
import { dD } from "../905/519113";
import { RR as _$$RR } from "../905/514666";
import { $3 } from "../905/946937";
import { HiddenLabel } from "../905/270045";
import { pH, GI } from "../figma_app/147337";
var u = c;
function S(e) {
  let {
    targetKey
  } = e;
  let [i, a] = useState(!1);
  let [s, o] = useAtomValueAndSetter(collaborationHostNameAtom);
  let l = isZoomIntegration() && null !== s && !i;
  useEffect(() => (window.addEventListener("message", handleCollaborationHostNameMessage), () => {
    window.removeEventListener("message", handleCollaborationHostNameMessage);
  }), []);
  let d = s ? renderI18nText("fullscreen.filename_view.zoom-integration-popup-header-with-name", {
    hostName: s
  }) : getI18nString("fullscreen.filename_view.zoom-integration-popup-header");
  return jsx(Fragment, {
    children: l && jsx(OA, {
      targetKey,
      isUI3: e.isUI3,
      dismissModal: () => {
        a(!0);
        o(null);
      },
      width: 268,
      background: "dark",
      title: jsx("div", {
        className: _$$s.alignLeft.$,
        children: d
      }),
      children: jsx("p", {
        className: _$$s.textBodyMedium.alignLeft.$,
        children: getI18nString("fullscreen.filename_view.zoom-integration-popup-body")
      })
    })
  });
}
function em(e, t) {
  e = e.filter(e => e && UN(e, {
    isDesktopMenu: !1,
    isReadOnly: t.appModel.isReadOnly,
    isSearching: !!t.isSearching,
    selectedView: t.selectedView,
    isLimitedDevMode: t.isLimitedDevMode
  }));
  let i = [];
  let n = {
    header: "",
    items: []
  };
  for (let t of (i.push(n), e)) k$(t) ? (n = {
    header: "",
    items: []
  }, i.push(n)) : gN(t) ? n.header = t.name : n.items.push(t);
  return 1 === i.length || i.every(e => !e.header) ? e.map(e => ef(e, t)) : i.map(e => jsx(YJ, {
    title: jsx(hE, {
      children: e.header
    }),
    children: e.items.map(e => ef(e, t))
  }, e.header));
}
function ef(e, t) {
  if (!e || k$(e) || gN(e) || id(e)) return null;
  let i = _o(e) && e.disabled || !e.name && !(_o(e) && Yh(t.appModel, e.action));
  if (!(_o(e) && e.disabledAndForceVisible) && i && t.removeDisabledItems) return null;
  let n = Dz(e);
  return _o(e) ? jsxs(Pu, {
    onClick: () => e.callback?.(e.action, {}, t.dispatch),
    recordingKey: e.recordingKey || e.action || e.name,
    children: [(TV(e) || _o(e)) && e.displayText || formatI18nMessage(n, e.args), e.rightIcon && jsx(Ov, {
      children: e.rightIcon
    }), e.rightText && jsx(Ov, {
      children: e.rightText
    }), e.shortcutText && jsx(rm, {
      children: e.shortcutText
    })]
  }, e.name) : TV(e) && e.children ? jsxs(g8, {
    children: [jsx(Qq, {
      recordingKey: e.childDropdown && e.childDropdown.recordingKey || e.name,
      children: e.displayText
    }), jsx(MJ, {
      children: em(e.children, t)
    })]
  }, e.name) : null;
}
let eI = memo(function () {
  let e = R6();
  let {
    colorProfilePreference
  } = jK();
  let i = hP(colorProfilePreference) === ColorSpaceEnum.DISPLAY_P3 ? "p3" : "srgb";
  let n = [{
    value: ColorProfileEnum.SRGB,
    label: getI18nString("fullscreen.filename_view.color_management.color_profile_srgb")
  }, {
    value: ColorProfileEnum.DISPLAY_P3,
    label: getI18nString("fullscreen.filename_view.color_management.color_profile_display_p3")
  }].sort((t, i) => t.value === e && i.value !== e ? -1 : t.value !== e && i.value === e ? 1 : 0);
  return jsx(YJ, {
    children: jsxs(g8, {
      children: [jsx(Qq, {
        children: getI18nString("fullscreen.filename_view.color_management.file_color_profile")
      }), jsx(MJ, {
        children: jsxs(z6, {
          title: jsx(r1, {
            children: getI18nString("fullscreen.filename_view.color_management.file_color_profile")
          }),
          value: ColorProfileEnum[e],
          onChange: e => {
            e === ColorProfileEnum[ColorProfileEnum.SRGB] ? Fullscreen && Fullscreen.triggerAction("change-document-color-profile-to-srgb", {}) : e === ColorProfileEnum[ColorProfileEnum.DISPLAY_P3] && Fullscreen && Fullscreen.triggerAction("change-document-color-profile-to-display-p3", {});
          },
          children: [e === ColorProfileEnum.LEGACY && jsx(_$$MJ, {
            value: ColorProfileEnum[ColorProfileEnum.LEGACY],
            children: getI18nString("fullscreen.filename_view.color_management.menu_item_title.legacy_file", {
              colorProfile: getI18nString(`fullscreen.properties_panel.export_settings_color_profile.${i}`)
            })
          }), n.map(e => jsx(_$$MJ, {
            value: ColorProfileEnum[e.value],
            children: getI18nString("fullscreen.filename_view.color_management.menu_item_title.legacy.assign", {
              color_profile: e.label
            })
          }, e.value))]
        })
      })]
    })
  });
});
var e1 = (e => (e.DISABLED = "disabled", e.PUBLISH = "publish", e.SHOW_UPSELL_MODAL = "show_upsell_modal", e))(e1 || {});
function e2() {
  let e = useDispatch();
  return () => {
    e(showModalHandler({
      type: dD,
      data: {
        entrypoint: _$$RR.FILENAME_VIEW_DROPDOWN
      }
    }));
  };
}
function e3() {
  let e = selectCurrentFile();
  let t = useSubscription(FileManagePermission({
    fileKey: e?.key || ""
  }), {
    enabled: !!e?.key
  });
  return useMemo(() => {
    if (!e) return {};
    let i = !1;
    let r = !1;
    let n = !1;
    let a = null;
    "loaded" === t.status && (i = !!t.data?.file?.canTrash && !!getResourceDataOrFallback(t.data?.file?.canTrash), n = !!getResourceDataOrFallback(t.data?.file?.canMove), r = !!(t.data.file && isRestrictedPlanAccess(t.data.file.editorType ?? FFileType.DESIGN, t.data.file.currentPlanUser)), a = getResourceDataOrFallback(t.data?.file?.canMoveWithReasons) || null);
    return {
      userCanTrashFile: i,
      userIsVRForSeat: r,
      userCanMove: n,
      userCanMoveWithReasons: a
    };
  }, [t, e]);
}
let e6 = memo(function () {
  let e = useSelector(e => e.currentUserOrgId);
  let t = useSelector(e => e.currentTeamId);
  let i = _$$Q({
    currentOrgId: e,
    currentTeamId: t
  });
  let o = !!selectCurrentUser();
  let l = function () {
    let e = useSelector(selectOpenFileObject);
    let t = useSelector(e => e.currentUserOrgId);
    let i = useSelector(e => e.currentTeamId);
    let r = _$$Q({
      currentOrgId: t,
      currentTeamId: i
    });
    return useMemo(() => {
      if (e && "loaded" === r.status) return T0(r.data, e.key);
    }, [e, r]);
  }();
  let d = !!l;
  let c = selectCurrentUser();
  let u = selectCurrentFile();
  let p = te();
  let h = "loaded" === i.status && gV(i.data, e);
  let m = i.data?.currentUser?.userSidebarSections != null ? getResourceDataOrFallback(i.data.currentUser.userSidebarSections) : null;
  let f = i.data?.currentUser?.baseOrgUser?.fileBrowserPreferences?.orderedSidebarSections ?? [];
  let g = t$(m ?? [], f);
  let _ = g.find(e => e.id === l?.resource.sidebarSectionId);
  let x = u?.folderId === c?.personal_drafts_folder_id;
  let y = pH(u?.key ?? null, {
    enabled: !!u
  });
  if (e9 || !o) return null;
  let b = !x && !!p && !(h && !d);
  let C = "loaded" === y.status && y.data && u;
  return b || C ? jsxs(YJ, {
    children: [b && jsx(e7, {
      isFavorited: d,
      favoriteSection: _,
      sections: g
    }), C && jsx(e8, {})]
  }) : null;
});
let e7 = memo(function ({
  isFavorited: e,
  favoriteSection: t,
  sections: i
}) {
  let o = function () {
    let e = useDispatch();
    let t = useSelector(selectOpenFileObject);
    let i = useSelector(e => e.currentUserOrgId);
    let r = useSelector(e => e.currentTeamId);
    let s = _$$Q({
      currentOrgId: i,
      currentTeamId: r
    });
    let o = useMemo(() => {
      if (t && "loaded" === s.status) return T0(s.data, t.key);
    }, [t, s]);
    return (i, r) => {
      if (!t) return;
      let n = {
        entrypoint: "editor",
        favoriteId: o?.resource.id,
        sectionId: r,
        file: fileEntityDataMapper.toLiveGraph(t),
        fileBrowserEntryPoint: !1
      };
      i ? e(qP(n)) : e(Fb(n));
    };
  }();
  let l = getI18nString("favorited_resources.add_to_sidebar");
  e && (l = `${getI18nString("favorited_resources.indicate_section_prefix")}: ${t?.name || getI18nString("sidebar.starred")}`);
  return jsxs(Fragment, {
    children: [jsxs(g8, {
      children: [jsx(Qq, {
        children: l
      }), jsx(MJ, {
        children: jsxs(z6, {
          title: jsx(HiddenLabel, {
            children: l
          }),
          value: t?.id || (e ? getI18nString("sidebar.starred") : void 0),
          recordingKey: "favorite-custom",
          onChange: e => {
            e === getI18nString("sidebar.starred") ? o(!1) : o(!!t && t.id === e, e);
          },
          children: [0 === i.length && jsx(_$$MJ, {
            value: getI18nString("sidebar.starred"),
            children: getI18nString("sidebar.starred")
          }, getI18nString("sidebar.starred")), i.map(e => jsx(_$$MJ, {
            value: e.id,
            children: e.name || getI18nString("sidebar.starred")
          }, e.id))]
        })
      })]
    }), e && jsx(Pu, {
      recordingKey: "favorite-custom-remove",
      onClick: () => o(!0, t?.id),
      children: getI18nString("favorited_resources.remove_from_sidebar")
    })]
  });
});
let e8 = memo(function () {
  let e = selectCurrentFile();
  let t = function () {
    let e = useDispatch();
    return t => {
      e(showModalHandler({
        type: _$$l(),
        data: {
          pinnedFileId: t
        }
      }));
    };
  }();
  let i = function () {
    let e = useDispatch();
    return t => {
      e(showModalHandler({
        type: _$$I(),
        data: {
          pinnedFileId: t
        }
      }));
    };
  }();
  let n = pH(e?.key ?? null, {
    enabled: !!e
  });
  let s = GI("filename-context-menu");
  if ("loaded" !== n.status || !n.data || !e) return null;
  let {
    canPinFileToWorkspace,
    canEditPin,
    existingFilePinId,
    workspaceHasMaxPins
  } = n.data;
  return canPinFileToWorkspace ? jsx(Pu, {
    recordingKey: "pin-to-workspace",
    onClick: () => s(e.key, workspaceHasMaxPins),
    children: getI18nString("tile.dropdown.pin_to_workspace")
  }) : canEditPin ? jsxs(Fragment, {
    children: [jsx(Pu, {
      onClick: () => t(existingFilePinId),
      children: getI18nString("tile.dropdown.edit_workspace_pin")
    }), jsx(Pu, {
      onClick: () => i(existingFilePinId),
      children: getI18nString("tile.dropdown.remove_workspace_pin")
    })]
  }) : null;
});
let e9 = ck();
let te = () => {
  let e = selectCurrentFile();
  let t = useSelector(e => e.plans);
  return useMemo(() => !!t.find(t => e?.plan?.tier === FPlanNameType.ORG || e?.plan?.tier === FPlanNameType.ENTERPRISE ? `organization::${t.plan_id}` === e?.plan?.id : `team::${t.plan_id}` === e?.plan?.id), [t, e?.plan?.tier, e?.plan?.id]);
};
let tt = ck();
let ti = memo(function ({
  recordingKey: e = ""
}) {
  let t = useSelector(e => e.mirror.appModel);
  let i = useSelector(e => e.selectedView);
  let o = useSelector(e => getPermissionsStateMemoized(e));
  let l = useSelector(e => e.userStateLoaded);
  let c = selectCurrentFile();
  let u = useSelector(e => e.fileVersion);
  let m = useSelector(e => e.repos);
  let g = !!selectCurrentUser();
  let _ = useDispatch();
  SR();
  let {
    archiveBranch,
    deleteBranch,
    deleteFile,
    restoreBranch,
    openFileAnalytics,
    projectUrl,
    publish,
    toggleVersionHistory,
    resetFileThumbnail,
    rename,
    closeSelectMenu
  } = {
    deleteBranch: function () {
      let e = selectCurrentFile();
      let t = useDispatch();
      return () => {
        e && t(showModalHandler({
          type: _$$e3,
          data: {
            fileName: e.name,
            onConfirm: () => t(kj({
              fileKeys: {
                [e.key]: !0
              },
              userInitiated: !0
            }))
          }
        }));
      };
    }(),
    rename: function () {
      let e = useDispatch();
      return useCallback(() => {
        e(vg());
      }, [e]);
    }(),
    deleteFile: function () {
      let e = selectCurrentFile();
      let t = e?.canDelete;
      let i = useSelector(selectOpenFileObject);
      let r = JT();
      let n = r && r.profile.entityType === TeamOrgType.TEAM;
      let s = useDispatch();
      let o = useSelector(e => e.repos);
      return () => {
        if (!e || !i) return;
        let r = getRepoByIdAlt(e, o);
        let a = !!Ay && t && !n;
        r && isDefaultFile(e, r) ? e.repo?.canEdit && !r.trashed_at && s(U1({
          filesByKey: {},
          reposById: {
            [r.id]: {
              repo: r,
              main_file: i
            }
          }
        })) : a && s(U1({
          filesByKey: {
            [e.key]: i
          }
        }));
      };
    }(),
    archiveBranch: function () {
      let e = useSelector(selectOpenFileObject);
      let t = useDispatch();
      return () => {
        e && (t(VK({
          fileKeys: {
            [e.key]: e
          },
          userInitiated: !0
        })), trackEventAnalytics("Branch Archived", {
          fileKey: e.key,
          fileRepoId: e.file_repo_id
        }));
      };
    }(),
    restoreBranch: function () {
      let e = useSelector(selectOpenFileObject);
      let t = useDispatch();
      return () => {
        e && t(Rh({
          fileKeys: {
            [e.key]: e
          },
          userInitiated: !0
        }));
      };
    }(),
    openFileAnalytics: function () {
      let e = selectCurrentFile();
      let t = useDispatch();
      return useCallback(() => {
        e && t(showModalHandler({
          type: _$$e4,
          data: {
            fileKey: e.key,
            entrypoint: _$$F2.FileView
          }
        }));
      }, [e, t]);
    }(),
    projectUrl: function () {
      let e = selectCurrentFile();
      let t = FC();
      let i = useSelector(e => e.isOpenFileLoadedFromLiveGraph);
      return useMemo(() => {
        if (!e) return;
        let r = e.project;
        return r && r.path && "" !== r.path ? getProjectUrl(r.id, r.orgId ?? null, r.teamId, t, !!r?.team?.canView, "filename_view_dropdown_helpers.useProjectUrl", i) : null;
      }, [e, t, i]);
    }(),
    publish: function () {
      let e = useAtomWithSubscription(p9);
      let t = useSelector(fA);
      let i = selectCurrentFile();
      let r = e2();
      let s = function () {
        let e = selectCurrentFile();
        let t = useSelector(e => e.teams);
        let i = useDispatch();
        return () => {
          if (!e) return;
          let r = e.teamId && t[e.teamId];
          i(showModalHandler({
            type: $3,
            data: {
              afterFileMove: e2,
              team: r || null
            }
          }));
        };
      }();
      let o = useMemo(() => i && e ? t ? "publish" : "show_upsell_modal" : "disabled", [t, e, i]);
      return "disabled" === o ? null : () => {
        i && "show_upsell_modal" === o ? s() : "publish" === o && r();
      };
    }(),
    toggleVersionHistory: function () {
      let e = useDispatch();
      let t = useSelector(e => e.mirror.appModel.activeCanvasEditModeType);
      return () => {
        Ah(t) ? e(exitVersionHistoryMode()) : e(enterVersionHistoryMode({
          source: _$$e.EDITOR_TOOLBAR
        }));
      };
    }(),
    resetFileThumbnail: function () {
      let e = useDispatch();
      let t = selectCurrentFile();
      return () => {
        t && e($m({
          file_key: t.key,
          thumbnail_guid: null
        }));
      };
    }(),
    closeSelectMenu: function () {
      let e = useFloatingTree();
      return () => {
        e && e.events.emit("click");
      };
    }()
  };
  let ep = sO();
  let ef = useIsFullscreenSitesView();
  let ew = useIsSelectedFigmakeFullscreen();
  let eS = !!(getFeatureFlags().ds_pubplat_sts || getFeatureFlags().ds_pubplat_sts_code);
  let ej = useIsSelectedViewFullscreenCooper();
  let eA = isDesignFileType();
  let eO = isDevHandoffEditorType();
  let eL = BI();
  let eU = _$$m2();
  let eK = o.user;
  let eV = Dl(c);
  let eW = ju("filename_menu");
  let eq = useSelector(F9);
  let eQ = jT(c, eq).unwrapOr(!1);
  let e$ = useSubscription(FileNameViewDropdown, {
    branchFileKey: c?.key || ""
  }, {
    enabled: !!c
  });
  let e1 = DF(c, eK);
  let e5 = _$$e2();
  let {
    userCanTrashFile,
    userCanMove
  } = e3();
  let e8 = JT();
  let e9 = e8 && e8.profile.entityType === TeamOrgType.TEAM;
  let te = !!eK && userCanTrashFile && !e9;
  let ti = jB({
    files: [{
      editor_type: c?.editorType ?? null,
      folder_id: c?.project?.id ?? null
    }],
    repos: [],
    destinationFolderId: c?.project?.id ?? null,
    isDestinationDrafts: !1
  });
  let tr = Cp(ti.destinationPlan ? {
    type: ti.destinationPlan.key.type,
    parentId: ti.destinationPlan.key.parentId
  } : null, ti.licenseType);
  let tn = function (e, t) {
    let {
      userIsVRForSeat,
      userCanMove: _userCanMove,
      userCanMoveWithReasons
    } = e3();
    let s = selectCurrentFile();
    let o = RR();
    let l = useSubscription(FileManagePermission({
      fileKey: s?.key || ""
    }), {
      enabled: !!s?.key
    });
    return useMemo(() => ({
      canMove: !!_userCanMove,
      isUserViewerRestricted: !!userIsVRForSeat,
      planUser: l.data?.file?.currentPlanUser ?? null,
      inDrafts: !!l.data?.file?.isDraftFile,
      isBillingRemodelEnabled: o,
      draftsMoveData: e,
      hasConnectedPlanUserInOrg: t,
      canMoveWithReasons: userCanMoveWithReasons || void 0
    }), [_userCanMove, userIsVRForSeat, l.data?.file?.currentPlanUser, l.data?.file?.isDraftFile, o, e, t, userCanMoveWithReasons]);
  }(ti, !!tr);
  let ta = useCanUseDevModeDemoFile();
  let ts = _$$R();
  let to = !1;
  c && i.editorType && (to = i.editorType === FEditorType.Slides && getResourceDataOrFallback(c.org?.isSlidesDisabled) || i.editorType === FEditorType.Sites && !!c.org?.isSitesDisabled || i.editorType === FEditorType.Cooper && !!c.org?.isCooperDisabled);
  let tl = ew && ti.requiresUpgrade && !e5;
  let td = !!ts && Px(ti, to);
  let tc = ta || td || tl;
  let tu = $n();
  let tp = useSelector(e => e.mirror.appModel.topLevelMode);
  let th = _$$F();
  let tm = n6();
  let tf = kD();
  let tg = J3();
  let t_ = JU(tg);
  let tx = tg === kN.FILE_IN_DRAFTS;
  let ty = _$$h.useTrackingContext({
    trigger: UpsellModalType.FILE_DUPLICATE
  });
  useEffect(() => {
    eU && (eU._move_to_project = () => {
      userCanMove && !tc && RG(_, c, m, tn)();
    });
    eL?.updateFilePermissionV2?.(e1, !!userCanMove && !tc, !!te);
  }, [e1, userCanMove, te, tc, _, eL, eU, c, m, tn]);
  let tb = tz();
  let tC = g && !tt && (eA || eO || ef && eS);
  let tv = eq && eV;
  let tE = jsx(Pu, {
    disabled: !publish,
    recordingKey: generateRecordingKey(e, "publishVersion"),
    onClick: publish ? () => {
      closeSelectMenu();
      publish();
    } : lQ,
    children: getI18nString("fullscreen.filename_view.publish-styles-and-components")
  });
  let tT = eV && jsx(Pu, {
    recordingKey: generateRecordingKey(e, "codeConnect"),
    onClick: eW,
    children: getI18nString("dev_handoff.component_browser.menu_item")
  });
  let tw = !!eQ && jsx(Pu, {
    recordingKey: generateRecordingKey(e, "viewFileAnalytics"),
    onClick: openFileAnalytics,
    children: getI18nString("fullscreen.filename_view.file_analytics")
  });
  if (!c) return null;
  let tS = AppStateTsApi && AppStateTsApi.uiState().isRecovery.getCopy();
  let tj = i.editorType;
  let tI = !c.canExport;
  let tk = tj === FEditorType.Whiteboard && !!c.org?.figjamDisabledAt || tj === FEditorType.Slides && getResourceDataOrFallback(c.org?.isSlidesDisabled) || tj === FEditorType.Sites && !!c.org?.isSitesDisabled || tj === FEditorType.Cooper && !!c.org?.isCooperDisabled || isOrgUserExternallyRestrictedFromState(o) || tI;
  let tN = tj !== FEditorType.Whiteboard;
  let tA = !!(tN && isBranchAlt(c));
  let tO = "loaded" === e$.status && (null === e$.data.file || e$.data.file && AM(e$.data.file) === pT.MERGED);
  let tL = tA && ("loaded" !== e$.status || tO);
  let tR = eK && c.canManage;
  let tD = !!(tA && c.trashedAt);
  let tM = tD && !tL;
  let tP = c.folderId === eK?.personal_drafts_folder_id;
  let tF = c.canEdit && !!c.thumbnailGuid;
  let tB = !tt && i.editorType === FEditorType.Design && c.canEdit;
  let tU = em(_$$m(tu, _$$e.EDITOR_TOOLBAR, tp, tm), {
    appModel: t,
    selectedView: i,
    dispatch: _
  });
  let tG = em(_$$t2(tu, _$$e.EDITOR_TOOLBAR, tp), {
    appModel: t,
    selectedView: i,
    dispatch: _
  });
  return jsx(TrackingProvider, {
    name: _$$e.EDITOR_FILENAME_DROPDOWN,
    properties: {
      ...ty,
      slideConversionDropdownEntrypoint: th
    },
    children: jsx(mc, {
      children: jsxs(EventShield, {
        eventListeners: ["onPointerEnter", "onPointerLeave", "onMouseEnter", "onMouseLeave"],
        children: [tU.map((e, t) => jsx(_$$Fragment, {
          children: e
        }, `merging-${t}`)), tA && tG.map((e, t) => jsx(_$$Fragment, {
          children: e
        }, `branching-${t}`)), g && !tt && !tS && !ew && jsx(Pu, {
          disabled: !Yh(t, "enter-history-mode"),
          recordingKey: generateRecordingKey(e, "toggleVersionHistory"),
          onClick: toggleVersionHistory,
          children: Ah(t.activeCanvasEditModeType) ? getI18nString("fullscreen.filename_view.version-history-hide") : getI18nString("fullscreen.filename_view.version-history-show")
        }), jsxs(YJ, {
          children: [!!tf && Z5({
            dispatch: _,
            fileKey: tf?.fileKey || "",
            templateName: tf?.name || ""
          }), t_ && !ew && R5({
            dispatch: _,
            file: {
              key: c.key,
              name: c.name,
              folder_id: c.folderId,
              team_id: c.teamId,
              editor_type: c.editorType,
              parent_org_id: c.parentOrgId
            },
            isPublished: !!tf,
            fileNeedsMovingBeforePublish: tx,
            source: "filename-context-menu"
          }), tC && jsx(Fragment, {
            children: tv ? jsxs(g8, {
              children: [jsx(Qq, {
                children: getI18nString("fullscreen.filename_view.library_actions")
              }), jsxs(MJ, {
                children: [tE, tT, tw]
              })]
            }) : jsxs(Fragment, {
              children: [tE, tw]
            })
          }), tN && !ep && !ej && !ef && !tS && !ew && jsxs(Pu, {
            disabled: !eK,
            recordingKey: generateRecordingKey(e, "exportSelectedExportables"),
            onClick: () => {
              Fullscreen && Fullscreen.triggerAction("export-selected-exportables", {
                source: "toolbar"
              });
            },
            children: [getI18nString("fullscreen.filename_view.export"), jsx(Ov, {
              children: jsx(rm, {
                children: c1(t.keyboardShortcuts, "export-selected-exportables")
              })
            })]
          }), th && c.canEdit && jsx(Pu, {
            onClick: () => {
              logAndTrackCTA({
                name: "slides_file_dropdown_entrypoint"
              });
              fx(c, u).then(e => {
                PF(_, e);
              });
            },
            recordingKey: generateRecordingKey(e, "copyToFigmaSlides"),
            disabled: !eK,
            children: getI18nString("slides.general.copy_current_page_to_figma_slides")
          })]
        }), jsx(e6, {}), !tA && tG.length > 0 && jsx(YJ, {
          children: tG.map((e, t) => jsx(_$$Fragment, {
            children: e
          }, `branching-group-${t}`))
        }), tB && jsx(eI, {}), jsxs(YJ, {
          children: [g && !tt && !tP && (!getFeatureFlags().filter_pro_plus_sites_make_web || tb.canDuplicate) && jsx(Pu, {
            disabled: !l || tk,
            recordingKey: generateRecordingKey(e, "duplicate"),
            onClick: tb.duplicateFile,
            children: tb.duplicateDisplayText
          }), g && !tD && jsx(Pu, {
            disabled: !e1,
            recordingKey: generateRecordingKey(e, "rename"),
            onClick: () => {
              closeSelectMenu();
              rename();
            },
            children: tA ? getI18nString("fullscreen.filename_view.rename-branch") : getI18nString("fullscreen.filename_view.rename")
          }), g && !tt && tM && jsx(Pu, {
            disabled: !tR,
            recordingKey: generateRecordingKey(e, "restore"),
            onClick: restoreBranch,
            children: getI18nString("fullscreen.filename_view.restore")
          }), g && !tt && projectUrl && "" !== projectUrl && jsx(Oo, {
            recordingKey: "goToProject",
            href: projectUrl,
            newTab: !0,
            children: getI18nString("fullscreen.filename_view.go_to_project")
          }), g && !tt && !tA && jsxs(Pu, {
            disabled: tc,
            "data-onboarding-key": "FILENAME_VIEW_MOVE_TO_PROJECT",
            recordingKey: generateRecordingKey(e, "moveToProject"),
            onClick: RG(_, c, m, tn),
            children: [getI18nString("fullscreen.filename_view.move_file"), ts && jsx(Ov, {
              children: zS(ti, tc, tr)
            })]
          }), g && !tt && !tD && !tP && userCanTrashFile && jsx(Pu, {
            disabled: !te,
            recordingKey: generateRecordingKey(e, "delete"),
            onClick: tA ? archiveBranch : deleteFile,
            children: tA ? getI18nString("fullscreen.filename_view.archive-branch") : getI18nString("fullscreen.filename_view.move_to_trash")
          }), g && !tt && tD && jsx(Pu, {
            disabled: !tR,
            onClick: deleteBranch,
            children: tA ? getI18nString("fullscreen.filename_view.archive-branch") : getI18nString("fullscreen.filename_view.move_to_trash")
          })]
        }), !!tF && jsx(YJ, {
          children: jsx(Pu, {
            recordingKey: generateRecordingKey(e, "resetFileThumbnail"),
            onClick: resetFileThumbnail,
            children: getFeatureFlags().dse_library_pg_thumbnails ? getI18nString("fullscreen.filename_view.restore_default_file_thumbnail") : getI18nString("fullscreen.filename_view.restore_default_thumbnail")
          })
        })]
      })
    })
  });
});
export function $$tr0(e) {
  let t = useDispatch();
  let i = Um();
  let c = i?.type === _$$eg;
  let v = useSelector(e => e.isRenaming);
  let E = isUserNotLoggedInAndEditorSupported();
  let T = WN();
  let w = useCallback(() => !E || (T("LEFT_PANEL_FILE_NAME_CHEVRON"), !1), [E, T]);
  let {
    getTriggerProps,
    manager
  } = _$$b();
  let k = getTriggerProps();
  let N = getFeatureFlags().eu_filename_dropdown;
  return useMemo(() => v ? null : jsx("div", {
    children: jsxs("div", {
      className: u()("file_menu--chevronContainer--rxTVi", {
        "file_menu--selected--URB0u": c || e.isDropdownVisibleWithDelay,
        "file_menu--enableSecondaryHover--h5duI": !(c || e.isDropdownVisibleWithDelay)
      }),
      onMouseEnter: () => {
        e.setFileMenuIsHovered?.(!0);
      },
      onMouseLeave: () => {
        e.setFileMenuIsHovered?.(!1);
      },
      children: [isZoomIntegration() && jsx(S, {
        isUI3: !0,
        targetKey: O0
      }), N ? jsxs(bL, {
        manager,
        children: [jsx(IconButton, {
          ...k,
          recordingKey: generateRecordingKey(e.recordingKey, "chevron"),
          "aria-label": getI18nString("fullscreen.filename_view.edit_file_menu"),
          children: jsx(_$$O, {})
        }), jsx(ti, {
          recordingKey: e.recordingKey
        })]
      }) : jsxs(Fragment, {
        children: [jsx(_$$c, {
          ariaLabel: getI18nString("fullscreen.filename_view.edit_file_menu"),
          canOpenDropdown: w,
          className: "file_menu--chevron--55jNJ",
          dataOnboardingKey: O0,
          dataTestId: "filename-menu-chevron",
          dropdownKey: _$$eg,
          recordingKey: e.recordingKey,
          toggleOnClick: !0
        }), jsx(_$$i, {
          dropdownTargetRect: i?.data?.targetRect,
          dispatch: t,
          dropdownVisible: c,
          recordingKey: e.recordingKey,
          activatePathOnMount: i?.data?.activatePathOnMount,
          trackEvent: trackEventAnalytics
        })]
      })]
    })
  }), [w, t, i?.data?.activatePathOnMount, i?.data?.targetRect, c, v, manager, e, k, N]);
}
export const m = $$tr0;