import { jsx } from "react/jsx-runtime";
import { useMemo, useCallback, useEffect } from "react";
import { d4 } from "../vendor/514228";
import { Ez5, ywP, RYP, glU } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { oA } from "../905/663269";
import { Rs } from "../figma_app/288654";
import { t as _$$t } from "../905/303541";
import { V3 } from "../figma_app/976345";
import { l as _$$l } from "../905/714607";
import { I as _$$I } from "../905/531560";
import { pH, GI } from "../figma_app/147337";
import { to as _$$to } from "../figma_app/828186";
import { Dl } from "../figma_app/601682";
import { xo } from "../figma_app/473493";
import { ju } from "../figma_app/88239";
import { qP, Fb } from "../figma_app/909778";
import { oB } from "../905/929976";
import { $m } from "../figma_app/78808";
import { Rh } from "../905/844322";
import { U1, kj } from "../905/191601";
import { vg } from "../figma_app/91703";
import { to as _$$to2 } from "../905/156213";
import { VK } from "../905/880488";
import { n6 } from "../905/234821";
import { fu } from "../figma_app/831799";
import { JT } from "../figma_app/173838";
import { h as _$$h } from "../905/864281";
import { kD, J3, JU, kN } from "../figma_app/622574";
import { Cu } from "../figma_app/314264";
import { _R } from "../figma_app/765689";
import { Kz, up, SA } from "../905/760074";
import { t as _$$t2, m as _$$m } from "../905/364535";
import { $n } from "../905/930279";
import { F as _$$F } from "../905/300562";
import { T0, gV, t$ as _$$t$ } from "../figma_app/863319";
import { cU } from "../figma_app/528509";
import { Y5 } from "../figma_app/455680";
import { R6 } from "../figma_app/504823";
import { jK, hP } from "../figma_app/829197";
import { ck } from "../905/87821";
import { SR } from "../figma_app/852050";
import { BI, m0 } from "../figma_app/546509";
import { q5, Cq } from "../figma_app/516028";
import { iZ } from "../905/372672";
import { fileEntityDataMapper } from "../905/943101";
import { FFileType, FPlanNameType } from "../figma_app/191312";
import { dTR, iY3 } from "../figma_app/43951";
import { getPermissionsStateMemoized, isOrgUserExternallyRestrictedFromState } from "../figma_app/642025";
import { fA, p9, F9 } from "../figma_app/803787";
import { jB, Cp, Px, zS } from "../figma_app/722141";
import { b as _$$b } from "../905/165519";
import { Eg, _b } from "../figma_app/841351";
import { nT } from "../figma_app/53721";
import { o1 } from "../figma_app/10554";
import { Yh, c1 } from "../figma_app/357047";
import { e0 as _$$e } from "../905/696396";
import { Q as _$$Q } from "../figma_app/113686";
import { e as _$$e2 } from "../905/225961";
import { AM, pT } from "../905/467351";
import { rC, we } from "../figma_app/861982";
import { jv } from "../905/525678";
import { Ah } from "../figma_app/221114";
import { e as _$$e3 } from "../905/157975";
import { jT } from "../figma_app/277330";
import { dD } from "../905/519113";
import { RR } from "../905/514666";
import { $3 } from "../905/946937";
import { j as _$$j } from "../905/834956";
import { tz as _$$tz } from "../figma_app/531331";
import { Oc } from "../figma_app/552876";
import { cJ } from "../905/561485";
import { e as _$$e4 } from "../figma_app/831857";
import { sO } from "../figma_app/21029";
import { fx, PF } from "../figma_app/657972";
import { DF, RG } from "../figma_app/146384";
import { F as _$$F3 } from "../figma_app/928238";
let $$eN0 = "FILENAME_VIEW_MOVE_TO_PROJECT";
let eC = ck();
var ew = (e => (e.DISABLED = "disabled", e.PUBLISH = "publish", e.SHOW_UPSELL_MODAL = "show_upsell_modal", e))(ew || {});
export function $$eO1({
  trackEvent: e,
  dropdownTargetRect: t,
  recordingKey: r,
  dispatch: z,
  dropdownVisible: ew,
  activatePathOnMount: eO,
  leanPadding: eR
}) {
  let eL = d4(e => e.mirror.appModel);
  let eP = d4(e => e.selectedView);
  let eD = d4(e => getPermissionsStateMemoized(e));
  let ek = d4(e => e.userStateLoaded);
  let eM = q5();
  let eF = d4(e => e.isOpenFileLoadedFromLiveGraph);
  let ej = d4(e => e.fileVersion);
  let eU = Cq({
    useSinatraType: !0
  });
  let eB = d4(e => e.repos);
  let eG = d4(e => e.teams);
  let eV = d4(e => e.currentUserOrgId);
  let eH = d4(e => e.currentTeamId);
  let ez = !!iZ();
  let eW = d4(e => e.plans);
  let eK = _$$Q({
    currentOrgId: eV,
    currentTeamId: eH
  });
  let eY = sO();
  let e$ = cJ();
  let eX = Oc();
  let eq = !!(getFeatureFlags().ds_pubplat_sts || getFeatureFlags().ds_pubplat_sts_code);
  let eJ = _$$to();
  let eZ = _$$F3();
  let eQ = _$$e4();
  let e0 = Dl(eM);
  let e1 = ju("filename_menu");
  let e2 = BI();
  let e5 = m0();
  let e3 = Rs(dTR({
    fileKey: eM?.key || ""
  }), {
    enabled: !!eM?.key
  });
  let e4 = d4(fA);
  let e8 = md(p9);
  SR();
  let e6 = Rs(iY3({
    branchFileKey: eM?.key || ""
  }), {
    enabled: !!eM
  });
  let e7 = JT();
  let e9 = useMemo(() => {
    if (eM && "loaded" === eK.status) return T0(eK.data, eM.key);
  }, [eM, eK]);
  let te = d4(F9);
  let tt = d4(e => e.mirror.appModel.topLevelMode);
  let tr = jT(eM, te).unwrapOr(!1);
  let tn = $n();
  let ti = n6();
  let ta = kD();
  let ts = J3();
  let to = JU(ts);
  let tl = ts === kN.FILE_IN_DRAFTS;
  let td = pH(eM?.key ?? null, {
    enabled: !!eM
  });
  let tc = GI("filename-context-menu");
  let tu = !!Ez5 && Ez5.uiState().isRecovery.getCopy();
  let tp = useMemo(() => e8 ? e4 ? "publish" : "show_upsell_modal" : "disabled", [e4, e8]);
  let t_ = R6();
  let {
    colorProfilePreference
  } = jK();
  let tm = hP(colorProfilePreference);
  let tg = _$$h.useTrackingContext({
    trigger: _$$b.FILE_DUPLICATE
  });
  let tf = useMemo(() => "disabled" !== tp || e0 || !!tr, [tp, e0, tr]);
  let tE = !1;
  let ty = !1;
  let tb = !1;
  let tT = null;
  "loaded" === e3.status && (tE = !!e3.data?.file?.canTrash && !!oA(e3.data?.file?.canTrash), ty = !!oA(e3.data?.file?.canMove), tb = !!(e3.data.file && _R(e3.data.file.editorType ?? FFileType.DESIGN, e3.data.file.currentPlanUser)), tT = oA(e3.data?.file?.canMoveWithReasons) || null);
  let tI = jB({
    files: [{
      editor_type: eM?.editorType ?? null,
      folder_id: eM?.project?.id ?? null
    }],
    repos: [],
    destinationFolderId: eM?.project?.id ?? null,
    isDestinationDrafts: !1
  });
  let tS = Cp(tI.destinationPlan?.key || null, tI.licenseType);
  let tv = xo();
  let tA = ty;
  let tx = !1;
  eM && eP.editorType && (tx = eP.editorType === nT.Slides && oA(eM.org?.isSlidesDisabled) || eP.editorType === nT.Sites && !!eM.org?.isSitesDisabled || eP.editorType === nT.Cooper && !!eM.org?.isCooperDisabled);
  let tN = eX && tI.requiresUpgrade && !eQ;
  let tC = Px(tI, tx);
  let tw = tv || tC || tN;
  let tO = eD.user;
  let tR = DF(eM, tO);
  let tL = e7 && e7.profile.entityType === o1.TEAM;
  let tP = !!tO && tE && !tL;
  let tD = useCallback(() => ({
    canMove: !!tA,
    isUserViewerRestricted: !!tb,
    planUser: e3.data?.file?.currentPlanUser ?? null,
    inDrafts: !!e3.data?.file?.isDraftFile,
    draftsMoveData: tI,
    hasConnectedPlanUserInOrg: tS,
    canMoveWithReasons: tT || void 0
  }), [tA, tI, e3.data?.file?.currentPlanUser, e3.data?.file?.isDraftFile, tS, tb, tT]);
  useEffect(() => {
    e5 && (e5._move_to_project = () => {
      tA && !tw && RG(z, eM, eB, tD())();
    });
    e2?.updateFilePermissionV2?.(tR, tA && !tw, tP);
  }, [tR, tA, tP, tw, z, e2, e5, eM, tD, eB]);
  let tk = _$$tz();
  if (!eM || !ew) return null;
  let tM = eP.editorType;
  let tF = tM !== nT.Whiteboard;
  let tj = !!(tF && Kz(eM));
  let tU = "loaded" === eK.status && gV(eK.data, eV);
  let tB = "loaded" === e6.status && (null === e6.data.file || e6.data.file && AM(e6.data.file) === pT.MERGED);
  let tG = tj && ("loaded" !== e6.status || tB);
  let tV = !eM.canExport;
  let tH = tM === nT.Whiteboard && !!eM.org?.figjamDisabledAt || tM === nT.Slides && oA(eM.org?.isSlidesDisabled) || tM === nT.Sites && !!eM.org?.isSitesDisabled || tM === nT.Cooper && !!eM.org?.isCooperDisabled || isOrgUserExternallyRestrictedFromState(eD) || tV;
  let tz = tO && eM.canManage;
  let tW = !!(tj && eM.trashedAt);
  let tK = tW && !tG;
  let tY = !!e9;
  let t$ = !!eW.find(e => eM?.plan?.tier === FPlanNameType.ORG || eM?.plan?.tier === FPlanNameType.ENTERPRISE ? `organization::${e.plan_id}` === eM?.plan?.id : `team::${e.plan_id}` === eM?.plan?.id);
  let tX = eM.project;
  let tq = null;
  tX && "" !== tX.path && (tq = tX);
  let tJ = eM.folderId === tO?.personal_drafts_folder_id;
  let tZ = eM.canEdit && !!eM.thumbnailGuid;
  let tQ = eK.data?.currentUser?.baseOrgUser?.fileBrowserPreferences?.orderedSidebarSections ?? [];
  let t0 = eK.data?.currentUser?.userSidebarSections != null ? oA(eK.data.currentUser.userSidebarSections) : null;
  let t1 = _$$t$(t0 ?? [], tQ);
  let t2 = t1.find(e => e.id === e9?.resource.sidebarSectionId);
  let t5 = () => {
    let e = [];
    0 === t1.length && e.push({
      recordingKey: "favorite-custom",
      displayText: _$$t("sidebar.starred"),
      isChecked: !1,
      callback: () => t6(!1)
    });
    t1.map(t => {
      e.push({
        recordingKey: "favorite-custom",
        displayText: "" === t.name ? _$$t("sidebar.starred") : t.name,
        isChecked: !!t2 && t2.id === t.id,
        callback: () => t6(!!t2 && t2.id === t.id, t.id)
      });
    });
    return e;
  };
  let t3 = () => {
    if ("loaded" !== td.status || !td.data) return [];
    let {
      canPinFileToWorkspace,
      canEditPin,
      existingFilePinId,
      workspaceHasMaxPins
    } = td.data;
    return canPinFileToWorkspace ? [{
      displayText: _$$t("tile.dropdown.pin_to_workspace"),
      callback: () => tc(eM.key, workspaceHasMaxPins)
    }] : canEditPin ? [{
      displayText: _$$t("tile.dropdown.edit_workspace_pin"),
      callback: () => t7(existingFilePinId)
    }, {
      displayText: _$$t("tile.dropdown.remove_workspace_pin"),
      callback: () => t9(existingFilePinId)
    }] : [];
  };
  let t4 = () => {
    z(_$$to2({
      type: dD,
      data: {
        entrypoint: RR.FILENAME_VIEW_DROPDOWN
      }
    }));
  };
  let t8 = () => {
    let e = eM.teamId && eG[eM.teamId];
    z(_$$to2({
      type: $3,
      data: {
        afterFileMove: t4,
        team: e || null
      }
    }));
  };
  let t6 = (e, t) => {
    if (!eU) return;
    let r = {
      entrypoint: "editor",
      favoriteId: e9?.resource.id,
      sectionId: t,
      file: fileEntityDataMapper.toLiveGraph(eU),
      fileBrowserEntryPoint: !1
    };
    e ? z(qP(r)) : z(Fb(r));
  };
  let t7 = e => {
    z(_$$to2({
      type: _$$l(),
      data: {
        pinnedFileId: e
      }
    }));
  };
  let t9 = e => {
    z(_$$to2({
      type: _$$I(),
      data: {
        pinnedFileId: e
      }
    }));
  };
  let re = !eC && eP.editorType === nT.Design && eM.canEdit;
  let rt = jv(_$$t2(tn, _$$e.EDITOR_TOOLBAR, tt), {
    appModel: eL,
    selectedView: eP
  });
  let rr = jv(_$$m(tn, _$$e.EDITOR_TOOLBAR, tt, ti), {
    appModel: eL,
    selectedView: eP
  });
  let rn = (() => {
    if (eC || !ez) return [];
    let e = [];
    !tJ && (t$ && (!tU || tY) && e.push({
      displayText: tY ? _$$t("favorited_resources.indicate_section_prefix") + ": " + (t2 && "" !== t2.name ? t2.name : _$$t("sidebar.starred")) : _$$t("favorited_resources.add_to_sidebar"),
      children: t5()
    }), tY && e.push({
      recordingKey: "favorite-custom-remove",
      displayText: _$$t("favorited_resources.remove_from_sidebar"),
      callback: () => t6(!0, t2?.id)
    }));
    e.push(...t3());
    return e;
  })();
  let ri = (e, t) => e ? t : [];
  let ra = [...rr, ...ri(tj, rt), {
    separator: !0,
    displayText: ""
  }, ...ri(ez && !eC && !tu && !eX, [{
    disabled: !Yh(eL, "enter-history-mode"),
    recordingKey: "toggleVersionHistory",
    displayText: Ah(eL.activeCanvasEditModeType) ? _$$t("fullscreen.filename_view.version-history-hide") : _$$t("fullscreen.filename_view.version-history-show"),
    callback: () => {
      z(oB());
      Ah(eL.activeCanvasEditModeType) ? z(Eg()) : z(_b({
        source: _$$e.EDITOR_TOOLBAR
      }));
    }
  }]), ...ri(!!ta, [rC({
    dispatch: z,
    fileKey: ta?.fileKey || "",
    templateName: ta?.name || ""
  })]), ...ri(to && !eX, [we({
    dispatch: z,
    file: {
      key: eM.key,
      name: eM.name,
      folder_id: eM.folderId,
      team_id: eM.teamId,
      editor_type: eM.editorType,
      parent_org_id: eM.parentOrgId
    },
    fileNeedsMovingBeforePublish: tl,
    isPublished: !!ta,
    source: "filename-context-menu"
  })]), ...ri(ez && !eC && !(tF && tj) && tM !== nT.Whiteboard && !eJ && !eY && !eX && (!e$ || eq) && tf, [{
    recordingKey: "libraryActions",
    displayText: _$$t("fullscreen.filename_view.library_actions"),
    children: [{
      disabled: "disabled" === tp,
      recordingKey: "publishVersion",
      displayText: _$$t("fullscreen.filename_view.publish-styles-and-components"),
      callback: () => {
        "show_upsell_modal" === tp ? t8() : "publish" === tp && t4();
      }
    }, ...ri(e0, [{
      recordingKey: "codeConnect",
      displayText: _$$t("dev_handoff.component_browser.menu_item"),
      callback: () => {
        e1();
      }
    }]), ...ri(!!tr, [{
      recordingKey: "viewFileAnalytics",
      displayText: _$$t("fullscreen.filename_view.file_analytics"),
      callback: () => {
        z(_$$to2({
          type: _$$e3,
          data: {
            fileKey: eM.key,
            entrypoint: _$$F.FileView
          }
        }));
      }
    }])]
  }]), ...ri(tF && !eY && !eJ && !e$ && !tu && !eX, [{
    disabled: !tO,
    recordingKey: "exportSelectedExportables",
    displayText: _$$t("fullscreen.filename_view.export"),
    shortcut: eL.keyboardShortcuts && c1(eL.keyboardShortcuts, "export-selected-exportables"),
    callback: () => {
      Y5.triggerAction("export-selected-exportables", {
        source: "toolbar"
      });
    }
  }]), ...ri(eZ && eM.canEdit, [{
    disabled: !tO,
    recordingKey: "copyToFigmaSlides",
    displayText: _$$t("slides.general.copy_current_page_to_figma_slides"),
    callback: () => {
      Cu({
        name: "slides_file_dropdown_entrypoint"
      });
      fx(eM, ej).then(e => {
        PF(z, e);
      });
    }
  }]), {
    separator: !0,
    displayText: ""
  }, ...ri(!tj, rt), {
    separator: !0,
    displayText: ""
  }, ...ri(re, [{
    displayText: _$$t("fullscreen.filename_view.color_management.file_color_profile"),
    children: function (e, t) {
      switch (e) {
        case ywP.LEGACY:
          return [{
            displayText: _$$t("fullscreen.filename_view.color_management.menu_item_title.legacy_file", {
              colorProfile: t === RYP.DISPLAY_P3 ? _$$t("fullscreen.properties_panel.export_settings_color_profile.p3") : _$$t("fullscreen.properties_panel.export_settings_color_profile.srgb")
            }),
            isChecked: !0
          }, {
            displayText: _$$t("fullscreen.filename_view.color_management.menu_item_title.legacy.assign", {
              color_profile: _$$t("fullscreen.filename_view.color_management.color_profile_srgb")
            }),
            callback: () => {
              glU.triggerAction("change-document-color-profile-to-srgb", {});
            }
          }, {
            displayText: _$$t("fullscreen.filename_view.color_management.menu_item_title.legacy.assign", {
              color_profile: _$$t("fullscreen.filename_view.color_management.color_profile_display_p3")
            }),
            callback: () => {
              glU.triggerAction("change-document-color-profile-to-display-p3", {});
            }
          }];
        case ywP.SRGB:
          return [{
            displayText: _$$t("fullscreen.filename_view.color_management.color_profile_srgb"),
            isChecked: !0
          }, {
            displayText: _$$t("fullscreen.filename_view.color_management.menu_item_title", {
              color_profile: _$$t("fullscreen.filename_view.color_management.color_profile_display_p3")
            }),
            callback: () => {
              glU.triggerAction("change-document-color-profile-to-display-p3", {});
            }
          }];
        case ywP.DISPLAY_P3:
          return [{
            displayText: _$$t("fullscreen.filename_view.color_management.color_profile_display_p3"),
            isChecked: !0
          }, {
            displayText: _$$t("fullscreen.filename_view.color_management.menu_item_title", {
              color_profile: _$$t("fullscreen.filename_view.color_management.color_profile_srgb")
            }),
            callback: () => {
              glU.triggerAction("change-document-color-profile-to-srgb", {});
            }
          }];
      }
    }(t_, tm)
  }]), {
    separator: !0,
    displayText: ""
  }, ...ri(ez && !eC && !tJ && (!getFeatureFlags().filter_pro_plus_sites_make_web || tk.canDuplicate), [{
    disabled: !ek || tH,
    recordingKey: "duplicate",
    displayText: tk.duplicateDisplayText,
    callback: tk.duplicateFile
  }]), ...ri(ez && !tW, [{
    disabled: !tR,
    recordingKey: "rename",
    displayText: tj ? _$$t("fullscreen.filename_view.rename-branch") : _$$t("fullscreen.filename_view.rename"),
    callback: () => {
      z(oB());
      z(vg());
    }
  }]), ...ri(ez && !eC && tK, [{
    disabled: !tz,
    displayText: "Restore",
    callback: () => {
      z(oB());
      eU && z(Rh({
        fileKeys: {
          [eM.key]: eU
        },
        userInitiated: !0
      }));
    }
  }]), ...ri(ez && !eC && !!tq, [{
    disabled: !1,
    displayText: _$$t("fullscreen.filename_view.go_to_project"),
    callback: () => {
      if (tq) {
        let e = cU(tq.id, tq.orgId ?? null, tq.teamId, eD, !!tq?.team?.canView, "FilenameViewDropdown._goToProject", eF);
        z(V3({
          url: e
        }));
      }
    }
  }]), ...ri(ez && !eC && !tj, [{
    disabled: tw,
    sideText: zS(tI, tw, tS),
    rightJustifySideText: !0,
    recordingKey: "moveToProject",
    "data-onboarding-key": $$eN0,
    displayText: _$$t("fullscreen.filename_view.move_file"),
    callback: RG(z, eM, eB, tD())
  }]), ...ri(rn.length > 0, [...rn]), ...ri(ez && !eC && !tW && !tJ && tE, [{
    disabled: !tP,
    recordingKey: "delete",
    displayText: tj ? _$$t("fullscreen.filename_view.archive-branch") : _$$t("fullscreen.filename_view.move_to_trash"),
    callback: tj ? () => {
      z(oB());
      eU && (z(VK({
        fileKeys: {
          [eM.key]: eU
        },
        userInitiated: !0
      })), e("Branch Archived", {
        fileKey: eM.key,
        fileRepoId: eM.fileRepoId
      }));
    } : () => {
      if (z(oB()), !eM || !eU) return;
      let e = up(eM, eB);
      e && SA(eM, e) ? eM.repo?.canEdit && !e.trashed_at && z(U1({
        filesByKey: {},
        reposById: {
          [e.id]: {
            repo: e,
            main_file: eU
          }
        }
      })) : tP && z(U1({
        filesByKey: {
          [eM.key]: eU
        }
      }));
    }
  }]), ...ri(ez && !eC && tW, [{
    disabled: !tz,
    displayText: _$$t("fullscreen.filename_view.delete-branch"),
    callback: () => {
      z(oB());
      z(_$$to2({
        type: _$$e2,
        data: {
          fileName: eM.name,
          onConfirm: () => z(kj({
            fileKeys: {
              [eM.key]: !0
            },
            userInitiated: !0
          }))
        }
      }));
    }
  }]), ...ri(!!tZ, [{
    separator: !0,
    displayText: ""
  }, {
    recordingKey: "resetFileThumbnail",
    displayText: getFeatureFlags().dse_library_pg_thumbnails ? _$$t("fullscreen.filename_view.restore_default_file_thumbnail") : _$$t("fullscreen.filename_view.restore_default_thumbnail"),
    callback: () => {
      z($m({
        file_key: eM.key,
        thumbnail_guid: null
      }));
    }
  }])];
  return jsx(fu, {
    name: _$$e.EDITOR_FILENAME_DROPDOWN,
    properties: {
      ...tg,
      slideConversionDropdownEntrypoint: eZ
    },
    children: jsx(_$$j, {
      activatePathOnMount: eO,
      allowCodegenOptions: eP.editorType === nT.Design,
      dispatch: z,
      items: ra,
      lean: "right",
      leanPadding: eR,
      onSelectItem: e => {
        e.callback && e.callback("", {}, z);
      },
      parentRect: t,
      recordingKey: r,
      shouldUsePortal: !0,
      showPoint: !1
    })
  });
}
export const s = $$eN0;
export const i = $$eO1;