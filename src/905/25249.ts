import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useLayoutEffect, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError, debug } from "../figma_app/465776";
import { ServiceCategories as _$$e } from "../905/165054";
import { useModalManager } from "../905/437088";
import { BannerFullWidth } from "../figma_app/59509";
import { BannerMessage } from "../905/363675";
import { Link } from "../905/438674";
import { DialogBackButton, DialogContents, DialogHeader, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { ModalRootComponent } from "../905/38914";
import { L as _$$L } from "../905/857916";
import { r as _$$r } from "../905/857502";
import { trackEventAnalytics } from "../905/449184";
import { isValidEmail } from "../figma_app/416935";
import { useSubscription } from "../figma_app/288654";
import { useWebLoggerTimerEffect } from "../905/485103";
import { reportError } from "../905/11";
import { useSprigWithSampling } from "../905/99656";
import { LoadingOverlay } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { cL } from "../905/748726";
import { um } from "../905/14223";
import { le } from "../figma_app/11182";
import { hideModal, showModalHandler } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { xT, Q3 } from "../figma_app/199513";
import { useCurrentUserOrg } from "../905/845253";
import { selectPermissionsState } from "../figma_app/212807";
import { selectUser } from "../905/372672";
import { FPermissionLevelType, FTeamAccessPermissionType, FResourceCategoryType, FPlanNameType } from "../figma_app/191312";
import { FolderPermissions } from "../figma_app/43951";
import { liveStoreInstance } from "../905/713695";
import { H_ } from "../figma_app/336853";
import { getPermissionLevelName } from "../figma_app/12796";
import { ob, t9, yI } from "../905/915142";
import { getReadOnlyOverrideMessageForFolder } from "../figma_app/642025";
import { isProOrStudentPlan } from "../figma_app/465071";
import { rq } from "../905/351260";
import { bp, Wj } from "../905/913057";
import { UpsellModalType } from "../905/165519";
import { AccessLevelEnum } from "../905/557142";
import { Z as _$$Z } from "../figma_app/761870";
import { registerModal } from "../905/102752";
import { e as _$$e2 } from "../905/393279";
import { Ni, Dp } from "../905/249410";
import { o6, gy } from "../905/986349";
import { ButtonPrimitive } from "../905/632989";
import { truncate } from "../figma_app/930338";
import { SvgComponent } from "../905/714743";
import { z6 } from "../figma_app/805373";
import { useAtomWithSubscription } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { e as _$$e3 } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N as _$$N2 } from "../figma_app/268271";
import { rq as _$$rq } from "../905/425180";
import { R as _$$R } from "../905/11928";
import { F_ } from "../905/858282";
import { SqV, BWk } from "../figma_app/6204";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { E as _$$E2 } from "../905/453826";
import { zl } from "../figma_app/641749";
import { rn } from "../figma_app/903573";
import { R as _$$R2 } from "../905/298004";
import { WZ } from "../905/893645";
import { ET, mi, _9, J4, YU, Iz } from "../figma_app/907616";
import { rG, zc, AA, wk, Jt, zn, $S, jq, mL, j7, $w, KU } from "../905/372455";
import { A as _$$A2 } from "../6828/70690";
import { A as _$$A3 } from "../1617/892083";
import { A as _$$A4 } from "../1617/401431";
import { A as _$$A5 } from "../1617/442539";
import { A as _$$A6 } from "../1617/357072";
import { O as _$$O } from "../905/921963";
import { E4 } from "../905/144598";
import { r as _$$r2, X as _$$X } from "../905/308709";
import { F as _$$F } from "../905/154112";
import { z as _$$z, Z as _$$Z2 } from "../905/306088";
import { i as _$$i } from "../905/385727";
import { st, d3, bV, hO, tb, w3, dF, zY, DA, Sc, KN, Zk, KZ, l2, VA, Lq } from "../figma_app/538002";
import { $ as _$$$, t as _$$t2 } from "../905/628632";
let eu = "seen_sharing_clarity_project_modal_overlay";
let ep = userFlagExistsAtomFamily(eu);
let em = "sc_project_creation_team_access_onboarding_key";
function eh() {
  let e = useAtomWithSubscription(ep);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: SqV,
    priority: _$$N2.DEFAULT_MODAL
  }, [e]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  return jsx(_$$rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: jsx("p", {
      children: renderI18nText("rcs.sharing_clarity.project_creation_team_access_description")
    }),
    disableHighlight: !0,
    emphasized: !0,
    isShowing,
    onClose: complete,
    targetKey: em,
    title: renderI18nText("rcs.sharing_clarity.project_creation_team_access_title"),
    trackingContextName: "Sharing Clarity Project Creation Team Access Onboarding",
    userFlagOnShow: eu,
    zIndex: _$$R.MODAL
  });
}
let eI = "seen_sharing_clarity_project_modal_overlay";
let eE = "sc_project_modal_onboarding_key";
let ex = "sc_project_modal_team_access_onboarding_key";
let eS = userFlagExistsAtomFamily(eI);
let ew = rn("sc_project_modal_onboarding", _$$R2(BWk));
function eC() {
  let e = useAtomWithSubscription(eS);
  let {
    show,
    uniqueId,
    isShowing,
    complete
  } = _$$e3({
    overlay: BWk,
    priority: _$$N2.DEFAULT_MODAL
  }, [e]);
  let o = useDispatch();
  let l = zl(ew);
  _$$h(() => {
    "reset" === l.currentState ? show() : show({
      canShow: e => !e
    });
  });
  _$$E2(uniqueId, "Reset Onboarding", () => {
    show();
  });
  let d = {
    label: renderI18nText("rcs.sharing_clarity.learn_more"),
    type: "link",
    href: "https://help.figma.com/hc/articles/360038006494-Create-a-new-project",
    ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
  };
  let c = [{
    title: renderI18nText("rcs.sharing_clarity.project_permissions_modal_step_1_title"),
    description: renderI18nText("rcs.sharing_clarity.project_permissions_modal_step_1_description"),
    trackingContextName: "Sharing Clarity Project Modal Onboarding",
    targetKey: eE,
    emphasized: !0,
    zIndex: _$$R.MODAL,
    secondaryCta: d
  }, {
    title: renderI18nText("rcs.sharing_clarity.project_permissions_modal_step_2_title"),
    description: renderI18nText("rcs.sharing_clarity.project_permissions_modal_step_2_description"),
    trackingContextName: "Sharing Clarity Project Modal Team Access Onboarding",
    targetKey: ex,
    emphasized: !0,
    zIndex: _$$R.MODAL,
    secondaryCta: d
  }];
  return jsx(WZ, {
    isShowing,
    steps: c,
    onComplete: () => {
      o(postUserFlag({
        [eI]: !0
      }));
      complete();
    }
  });
}
function eL(e) {
  let {
    folder,
    team,
    org
  } = e;
  let a = e.folderCanEdit;
  let s = a && team?.canEdit;
  let o = folder.is_invite_only;
  let l = !folder.is_invite_only && !folder.is_view_only;
  let d = !folder.is_invite_only && folder.is_view_only;
  let c = !e.audienceAccessRow || e.sharingAudienceControl !== FPermissionLevelType.INVITE_ONLY;
  let u = jsx("div", {
    className: o ? rG : zc,
    children: jsx(SvgComponent, {
      svg: _$$A6
    })
  });
  if (e.audienceAccessRow) {
    let t = e.sharingAudienceControl === FPermissionLevelType.ORG_EDIT || e.sharingAudienceControl === FPermissionLevelType.ORG_VIEW;
    let i = e.sharingAudienceControl === FPermissionLevelType.WORKSPACE_EDIT || e.sharingAudienceControl === FPermissionLevelType.WORKSPACE_VIEW;
    t && org ? u = jsx("div", {
      className: zc,
      children: jsx(SvgComponent, {
        svg: _$$A5
      })
    }) : i && (u = e.workspace ? jsx(z6, {
      entity: e.workspace,
      size: 24
    }) : jsx("div", {
      className: zc,
      children: jsx(SvgComponent, {
        svg: _$$A3
      })
    }));
  }
  let p = c ? jsx("div", {
    className: AA,
    children: u
  }) : jsx(SvgComponent, {
    className: wk,
    svg: _$$A4
  });
  let m = e.org ? ex : em;
  if (e.audienceAccessRow && !e.org) return jsx(Fragment, {});
  let h = e.audienceAccessRow && a;
  let g = !e.audienceAccessRow && o && s;
  let f = !e.audienceAccessRow && !o && team;
  let _ = h || g || f;
  let A = Jt;
  let y = zn;
  return jsxs(Fragment, {
    children: [jsxs(ButtonPrimitive, {
      className: _ ? A : y,
      onClick: _ ? () => e.changeModalView && e.changeModalView() : void 0,
      disabled: !_,
      "data-testid": e.audienceAccessRow ? "audience-access-row" : "team-access-row",
      children: [p, jsx("div", {
        className: $S,
        children: jsxs("div", {
          className: jq,
          children: [e.audienceAccessRow && e.sharingAudienceControl ? jsx("div", {
            children: ET(e.sharingAudienceControl, e.org, e.workspace, !1, folder.name)
          }) : (() => {
            let e = team ? team.name : getI18nString("folder_permissions_modal.project_name_s_team", {
              projectName: truncate(folder.name, 30)
            });
            return jsx("span", {
              className: team && folder.is_invite_only ? mL : void 0,
              children: renderI18nText("permissions.anyone_in_container_name", {
                containerName: e
              })
            });
          })(), (() => {
            if (e.audienceAccessRow) return e.org && jsxs("div", {
              className: j7,
              "data-onboarding-key": eE,
              children: [e.sharingAudienceControl && mi(e.sharingAudienceControl), a && jsx(SvgComponent, {
                svg: _$$A2,
                className: $w
              })]
            });
            if (!s) {
              if (o) return jsx(Fragment, {});
              if (team) return renderI18nText("folder_access_row.num_people", {
                num: e.teamRoles.length.toString()
              });
              if (l) return jsx("div", {
                className: j7,
                children: renderI18nText("permissions.level_name.can_access")
              });
              if (d) return jsx("div", {
                className: j7,
                children: renderI18nText("permissions.level_name.can_view")
              });
            }
            return o ? jsx("a", {
              className: KU,
              children: jsx("div", {
                "data-onboarding-key": m,
                children: renderI18nText("folder_access_row.give_access")
              })
            }) : jsx(Fragment, {
              children: jsxs("div", {
                className: j7,
                "data-onboarding-key": m,
                children: [renderI18nText("folder_access_row.num_people", {
                  num: e.teamRoles.length.toString()
                }), jsx(SvgComponent, {
                  svg: _$$A2,
                  className: $w
                })]
              })
            });
          })()]
        })
      })]
    }), a && org && jsx(eC, {}), a && !org && jsx(eh, {})]
  });
}
function ez(e) {
  let t = useMemo(() => e.teamRoles.sort((e, t) => {
    if (e.pending === t.pending && !e.pending) return e.user && t.user ? e.user.handle.toLowerCase() < t.user.handle.toLowerCase() ? -1 : 1 : -1;
    if (e.pending === t.pending && e.pending) {
      let i = e.pendingEmail || "";
      let n = t.pendingEmail || "";
      return i.toLowerCase() < n.toLowerCase() ? -1 : 1;
    }
    return e.pending ? 1 : -1;
  }), [e.teamRoles]);
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.colorTextSecondary.$,
      "data-testid": "team-access-settings-description",
      children: e.teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_EDIT ? renderI18nText("folder_share_settings.the_following_people_have_access_team", {
        teamName: e.teamName
      }) : renderI18nText("folder_share_settings.the_following_people_have_access_team_view_only", {
        teamName: e.teamName
      })
    }), jsx("div", {
      className: st,
      children: jsx("div", {
        className: d3,
        children: jsx("div", {
          children: t.map((t, i) => {
            let r = t.user;
            let a = t.userId || "";
            return jsx(_$$i, {
              user: {
                id: a,
                name: r?.name || "",
                email: r?.email || "",
                img_url: r?.imgUrl || "",
                handle: r?.handle || ""
              },
              level: e.teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_EDIT ? t.level : 100,
              id: a,
              pending: t.pending,
              pendingEmail: t.pendingEmail || ""
            }, "user-team-row-static-" + i);
          })
        })
      })
    })]
  });
}
function eH(e) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: bV,
      children: getI18nString("folder_permissions_modal.what_team_members_can_do_project", {
        teamName: e.teamName
      })
    }), jsxs(_$$z, {
      value: e.selectedTeamAccess,
      onChange: e.setSelectedTeamAccess,
      dataTestId: "permissions-team-access-level-radio-group",
      children: [jsx(_$$Z2, {
        value: FTeamAccessPermissionType.TEAM_ACCESS_EDIT,
        className: hO,
        children: jsx("p", {
          className: tb,
          children: renderI18nText("file_browser.folder_settings.team_access_same_as_team")
        })
      }, "edit"), jsx("p", {
        className: w3,
        children: renderI18nText("file_browser.folder_settings.team_access_same_as_team_subtitle")
      }), jsx(_$$Z2, {
        value: FTeamAccessPermissionType.TEAM_ACCESS_VIEW,
        className: hO,
        children: jsx("p", {
          className: tb,
          children: renderI18nText("file_browser.folder_settings.team_access_view_only")
        })
      }, "view-only"), jsx("p", {
        className: w3,
        children: renderI18nText("file_browser.folder_settings.team_access_view_only_subtitle")
      }), jsx(_$$Z2, {
        value: FTeamAccessPermissionType.TEAM_ACCESS_DISABLED,
        className: hO,
        children: jsx("p", {
          className: tb,
          children: renderI18nText("file_browser.folder_settings.team_access_disable")
        })
      }, "team-access-disabled"), jsx("p", {
        className: w3,
        children: renderI18nText("file_browser.folder_settings.team_access_disabled_subtitle")
      })]
    })]
  });
}
export let $$eK0 = registerModal(function (e) {
  let t = useModalManager({
    ...e,
    onClose: () => {
      ep(hideModal());
    }
  });
  let {
    folderId
  } = e;
  let q = selectUser();
  let Q = useSelector(e => e.autocomplete);
  let J = useSelector(e => e.contacts);
  let ee = useSelector(e => e.dropdownShown);
  let et = useSelector(e => e.orgDomains);
  let ei = selectPermissionsState();
  let en = liveStoreInstance.Folder.useValue(folderId).data;
  let er = useSelector(e => en?.team_id && e.teams[en.team_id] || null);
  let ea = useCurrentUserOrg() || null;
  let [es, eo] = useState(AccessLevelEnum.VIEWER);
  let [el, ed] = useState(0);
  let [ec, eu] = useState(!1);
  let ep = useDispatch();
  let em = useSubscription(FolderPermissions, {
    projectId: folderId,
    currentOrgId: ea?.id || null
  }, {
    enabled: !!folderId
  });
  useLayoutEffect(() => {
    "loaded" === em.status && null === em.data.project && ep(hideModal());
  }, [em, ep]);
  let {
    Sprig
  } = useSprigWithSampling();
  useWebLoggerTimerEffect("loaded" === em.status, e => {
    let t = em.data?.project?.roles?.length ?? 0;
    let i = "unknown";
    i = t <= 100 ? "small" : t <= 300 ? "medium" : "large";
    trackEventAnalytics("share_modal_latency", {
      latency_ms: e,
      modal_type: "project",
      is_outlier: e > 1e3,
      role_size: i
    }, {
      forwardToDatadog: !0
    });
  });
  let eg = useMemo(() => ob(em), [em]);
  let {
    org,
    sharingAudienceControl,
    teamAccess,
    team,
    canEdit,
    isOwner,
    canModifyRoles,
    canRead,
    workspace,
    resourceConnection,
    planPublicInfo
  } = eg || {
    org: null,
    sharingAudienceControl: null,
    teamAccess: null,
    team: null,
    canEdit: !1,
    isOwner: !1,
    canModifyRoles: !1,
    canRead: !1,
    workspace: null,
    resourceConnection: null,
    planPublicInfo: null
  };
  let eC = org ? org.id : null;
  let ek = org && org.org_domains ? org.org_domains : {
    domains: [],
    isFetching: !1,
    fetchedAt: null
  };
  let eR = (eg?.roles || []).sort((e, t) => e.pending === t.pending ? E4(e, J).toLocaleLowerCase() < E4(t, J).toLocaleLowerCase() ? -1 : 1 : e.pending ? 1 : -1);
  let eN = e => {
    eo(e);
  };
  let eP = e => t9(e, org, et);
  let eO = e => yI(e, J.usersByEmail[e] || e, org, ek, q.email);
  useEffect(() => () => {
    ep(cL());
  }, [ep]);
  let eD = e => {
    ep(rq({
      emails: _$$Z(e),
      resourceType: FResourceCategoryType.FOLDER,
      resourceIdOrKey: folderId,
      level: es,
      emailsToExclude: bp(J.usersByEmail, q, eR),
      orgName: org ? org.name : void 0,
      teamId: en?.team_id || ""
    }));
  };
  let eB = e => {
    if (org && org.domain_capture && ek && ek.domains.length > 0) {
      let t = _$$Z(e).filter(e => isValidEmail(e) && !H_(ek.domains, e));
      if (null == org.invite_whitelist_guest_invite_setting && t.length > 0) {
        ep(showModalHandler({
          type: _$$F,
          data: {
            emails: t,
            onConfirm: () => {
              eD(e);
            },
            popStack: !0,
            orgName: org.name
          }
        }));
        return;
      }
    }
    eD(e);
  };
  let eV = () => {
    ep(le({
      view: "folder",
      folderId
    }));
  };
  let eK = () => {
    if (e1(teamAccess), teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED) {
      ed(0);
      return;
    }
    ed(2);
  };
  let eY = () => {
    ep(hideModal());
    ep(cL());
    e$();
  };
  let eq = () => {
    ed(0);
    eJ(eZ());
    e5(eX());
  };
  let e$ = useCallback(() => {
    Sprig("track", "sharing_clarity_share_project_modal_exit");
  }, [Sprig]);
  useEffect(() => {
    ep(um());
  }, [ep]);
  let eZ = useCallback(() => sharingAudienceControl === FPermissionLevelType.ORG_EDIT || sharingAudienceControl === FPermissionLevelType.ORG_VIEW ? _9.ORG : sharingAudienceControl === FPermissionLevelType.WORKSPACE_EDIT || sharingAudienceControl === FPermissionLevelType.WORKSPACE_VIEW ? _9.WORKSPACE : _9.INVITE_ONLY, [sharingAudienceControl]);
  let eX = useCallback(() => sharingAudienceControl === FPermissionLevelType.ORG_EDIT || sharingAudienceControl === FPermissionLevelType.WORKSPACE_EDIT ? J4.EDIT : (sharingAudienceControl === FPermissionLevelType.ORG_VIEW || FPermissionLevelType.WORKSPACE_VIEW, J4.VIEW), [sharingAudienceControl]);
  let [eQ, eJ] = useState(eZ());
  let [e0, e1] = useState(teamAccess);
  let [e2, e5] = useState(eX());
  useEffect(() => {
    eJ(eZ());
    e5(eX());
    e1(teamAccess);
  }, [sharingAudienceControl, eZ, eX, e1, teamAccess]);
  let e4 = !1;
  eC ? e4 = !0 : isProOrStudentPlan(planPublicInfo) && (e4 = !0);
  let {
    sharingSuggestions,
    sharingSuggestionIdsToExclude,
    sharingSuggestionEmailsToExclude
  } = _$$$({
    orgId: eC,
    teamId: team?.id ?? null,
    disabled: !e4,
    contacts: J.usersByEmail,
    roles: eR,
    user: q,
    autocompleteTokens: Q.tokens
  });
  let e8 = (e, t) => e === _9.ORG && t === J4.EDIT ? FPermissionLevelType.ORG_EDIT : e === _9.ORG && t === J4.VIEW ? FPermissionLevelType.ORG_VIEW : e === _9.WORKSPACE && t === J4.EDIT ? FPermissionLevelType.WORKSPACE_EDIT : e === _9.WORKSPACE && t === J4.VIEW ? FPermissionLevelType.WORKSPACE_VIEW : FPermissionLevelType.INVITE_ONLY;
  if (!en) return jsx(LoadingOverlay, {});
  let e9 = () => {
    let e = en && en.team_id;
    let t = en && teamAccess && e && jsx(eL, {
      team: team || null,
      folder: en,
      folderTeamAccess: teamAccess,
      folderCanEdit: canEdit || void 0,
      org,
      teamRoles: team?.roles ?? [],
      changeModalView: () => {
        if (teamAccess === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED) {
          ed(3);
          return;
        }
        ed(2);
      }
    });
    let i = canEdit && team?.canEdit;
    return teamAccess !== FTeamAccessPermissionType.TEAM_ACCESS_DISABLED || i ? t : null;
  };
  let te = () => {
    let e = e => e.level !== AccessLevelEnum.OWNER && e.level !== AccessLevelEnum.ADMIN && !!canModifyRoles;
    return jsx(Fragment, {
      children: eR.map((t, i) => jsx(_$$O, {
        canEditRole: e(t),
        canMakeAdmin: !1,
        currentOrg: org,
        currentUserOrgId: eC,
        isOwnerOfResource: isOwner,
        orgDomains: ek,
        readOnlyOverrideWarningMessage: getReadOnlyOverrideMessageForFolder(t, ei),
        resource: {
          folder: en,
          type: FResourceCategoryType.FOLDER
        },
        resourceName: en.name,
        role: t,
        user: q
      }, `role-row-${i}`))
    });
  };
  let tt = () => {
    if (e0) {
      if (planPublicInfo?.tier === FPlanNameType.STARTER) {
        if (!team) {
          reportError(_$$e.WORKFLOW, Error("Cannot read team when user tries to update team access for starter team"));
          return;
        }
        e0 === FTeamAccessPermissionType.TEAM_ACCESS_VIEW ? ep(showModalHandler({
          type: Ni,
          data: {
            team,
            editorType: null,
            upsellSource: UpsellModalType.FOLDER_PERMISSION_MODAL
          }
        })) : e0 === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED && ep(showModalHandler({
          type: Dp,
          data: {
            team,
            editorType: null,
            upsellSource: UpsellModalType.FOLDER_PERMISSION_MODAL
          }
        }));
        return;
      }
      if (ep(xT({
        folder: en,
        teamAccess: e0
      })), e0 === FTeamAccessPermissionType.TEAM_ACCESS_DISABLED) {
        ed(0);
        return;
      }
      ed(2);
    }
  };
  let ti = team?.name ?? getI18nString("folder_permissions_modal.project_name_s_team", {
    projectName: en.name
  });
  let tn = (e, t) => {
    let i = t?.goBackAction ? jsx(DialogBackButton, {
      onClick: t.goBackAction
    }) : null;
    return jsxs("div", {
      className: dF,
      "data-testid": "folder-permissions-modal-title",
      children: [jsxs("div", {
        className: zY,
        children: [t?.goBackAction ? i : null, e]
      }), t?.rightSideActions]
    });
  };
  return jsx(TrackingProvider, {
    name: "Share Modal",
    properties: {
      resourceType: FResourceCategoryType.FOLDER,
      resourceId: folderId,
      currentView: el
    },
    children: jsx(ModalRootComponent, {
      manager: t,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: (() => {
            if (!eg) return jsx("div", {
              className: DA
            });
            switch (el) {
              case 0:
                let e = jsx(Button, {
                  onClick: () => {
                    eV();
                    eu(!0);
                    setTimeout(() => {
                      eu(!1);
                    }, 4e3);
                  },
                  htmlAttributes: {
                    role: ec ? "status" : "button"
                  },
                  "aria-live": "polite",
                  variant: "link",
                  iconPrefix: !ec && jsx(_$$r, {
                    className: Sc
                  }),
                  children: ec ? renderI18nText("file_permissions_modal.link_copied") : renderI18nText("file_permissions_modal.copy_folder_link")
                });
                return tn(getI18nString("folder_permissions_modal.share_this_project"), {
                  goBackAction: void 0,
                  rightSideActions: e
                });
              case 1:
                return tn(getI18nString("team_view.team_permissions_modal.share_settings"), {
                  goBackAction: eq
                });
              case 3:
                return tn(getI18nString("file_browser.folder_settings.change_team_access_team_name", {
                  teamName: ti
                }), {
                  goBackAction: eK
                });
              case 2:
                let t = canEdit && team?.canEdit;
                let i = jsx(Button, {
                  variant: "link",
                  onClick: () => ed(3),
                  children: renderI18nText("file_browser.folder_settings.change_team_access")
                });
                return tn(getI18nString("file_browser.folder_settings.change_team_access_title", {
                  teamName: team?.name ?? ""
                }), {
                  goBackAction: eq,
                  rightSideActions: t ? i : void 0
                });
              default:
                throwTypeError(el);
            }
          })()
        }), jsx(DialogBody, {
          children: eg ? {
            0: (() => {
              let e = [];
              canEdit && e.push(AccessLevelEnum.EDITOR);
              canRead && e.push(AccessLevelEnum.VIEWER);
              debug(e.length > 0, "there should be at least one role (the user's own)");
              return jsxs(Fragment, {
                children: [_$$r2(q) ? jsx(_$$X, {
                  resourceType: "folder"
                }) : jsxs(Fragment, {
                  children: [resourceConnection && jsx("div", {
                    className: KN,
                    children: jsx(BannerFullWidth, {
                      variant: "brand",
                      icon: jsx(_$$L, {}),
                      children: jsx(BannerMessage, {
                        children: renderI18nText("folder_permissions_modal.this_is_a_connected_project_banner", {
                          hostPlanName: jsx("span", {
                            className: _$$s.fontSemiBold.$,
                            children: resourceConnection.hostPlanName
                          }),
                          connectedPlanName: jsx("span", {
                            className: _$$s.fontSemiBold.$,
                            children: resourceConnection.connectedPlanName
                          }),
                          connectedProjectLink: jsx(Link, {
                            href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
                            newTab: !0,
                            children: getI18nString("resource_connection.connected_project_link")
                          })
                        })
                      })
                    })
                  }), jsx("div", {
                    className: Zk,
                    children: jsx(_$$e2, {
                      SearchResultComponent: o6,
                      TokenComponent: gy,
                      autocomplete: Q,
                      buttonText: getI18nString("folder_permissions_modal.send_invite"),
                      dispatch: ep,
                      dropdownKey: "permissions-invite-dropdown",
                      dropdownShown: ee,
                      getSearchResults: e => Wj(e, J.usersByEmail, q, eR, eC, en.team_id, null, {
                        inviteLevel: es,
                        source: "folder-permissions-modal"
                      }),
                      getSelectText: getPermissionLevelName,
                      hideDropdownOnEmpty: !0,
                      inviteLevel: es,
                      onHideModal: eY,
                      onInviteLevelChange: eN,
                      onSubmit: eB,
                      options: e,
                      placeholderText: getI18nString("team_creation.add_a_name_or_email"),
                      searchResultToken: eP,
                      shouldAutoFocus: !0,
                      validateToken: eO,
                      validateTokensAsEmail: !0
                    })
                  }), e4 && jsx(_$$t2, {
                    suggestions: sharingSuggestions ?? void 0,
                    autocomplete: Q,
                    searchResultToken: eP,
                    resourceType: "folder",
                    resourceId: folderId,
                    idsToExclude: sharingSuggestionIdsToExclude ?? void 0,
                    emailsToExclude: sharingSuggestionEmailsToExclude ?? void 0
                  })]
                }), jsx("div", {
                  className: st,
                  children: jsxs("div", {
                    className: d3,
                    children: [jsx("div", {
                      className: KZ,
                      children: getI18nString("file_permissions_modal.who_has_access")
                    }), en && en.team_id && jsx(eL, {
                      team: team || null,
                      folder: en,
                      changeModalView: () => ed(1),
                      audienceAccessRow: !0,
                      sharingAudienceControl: sharingAudienceControl || void 0,
                      workspace: workspace || void 0,
                      org: org || void 0,
                      folderCanEdit: canEdit || void 0,
                      teamRoles: team?.roles ?? []
                    }), e9(), te()]
                  })
                })]
              });
            })(),
            1: jsxs("div", {
              className: l2,
              children: [jsx("div", {
                className: bV,
                children: getI18nString("project_creation.who_has_access")
              }), er && jsx(YU, {
                resourceType: FResourceCategoryType.FOLDER,
                value: eQ,
                onChange: eJ,
                workspace: workspace || void 0,
                org: org || void 0,
                team: er,
                audienceAccessLevel: e2
              }), eQ !== _9.INVITE_ONLY && jsxs(Fragment, {
                children: [jsx("div", {
                  className: bV,
                  children: getI18nString("folder_permissions_modal.what_they_can_do")
                }), jsx(Iz, {
                  selectedPermissionsLevel: e2,
                  setSelectedPermissionsLevel: e5
                }), jsx("div", {
                  className: VA,
                  children: e2 === J4.VIEW ? getI18nString("project_creation.can_view_and_comment") : getI18nString("project_creation.can_create_and_edit_files")
                })]
              })]
            }),
            2: teamAccess ? jsx(ez, {
              teamRoles: team?.roles ?? [],
              teamName: ti,
              teamAccess,
              goBack: eq
            }) : jsx(Fragment, {}),
            3: e0 ? jsx(eH, {
              selectedTeamAccess: e0,
              setSelectedTeamAccess: e1,
              teamName: ti,
              goBack: eK
            }) : jsx(Fragment, {})
          }[el] : jsx("div", {
            className: Lq,
            "data-testid": "loading-spinner",
            children: jsx(LoadingOverlay, {})
          })
        }), (1 === el || 3 === el) && jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(Button, {
              onClick: eq,
              variant: "secondary",
              children: renderI18nText("project_creation.cancel")
            }), jsx(Button, {
              onClick: () => {
                if (e0 !== teamAccess) {
                  tt();
                  return;
                }
                let e = e8(eQ, e2);
                ep(Q3({
                  folder: en,
                  sharingAudienceControl: e
                }));
                ed(0);
              },
              variant: "primary",
              children: renderI18nText("team_view.team_permissions_modal.save")
            })]
          })
        })]
      })
    })
  });
});
var eY = (e => (e[e.INVITE = 0] = "INVITE", e[e.AUDIENCE_ACCESS = 1] = "AUDIENCE_ACCESS", e[e.TEAM_ACCESS = 2] = "TEAM_ACCESS", e[e.TEAM_ACCESS_CHANGE_PERMISSIONS = 3] = "TEAM_ACCESS_CHANGE_PERMISSIONS", e))(eY || {});
export const W = $$eK0;