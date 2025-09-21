import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useState, useEffect, PureComponent, createRef, useMemo, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import l from "../vendor/805353";
import { trackEventAnalytics } from "../905/449184";
import { parsePxInt } from "../figma_app/783094";
import { KeyCodes } from "../905/63728";
import { useSubscription } from "../figma_app/288654";
import { getResourceDataOrFallback, Xm, gB } from "../905/723791";
import { getAtomMutate } from "../figma_app/566371";
import { useWebLoggerTimerEffect } from "../905/485103";
import { ms, c$, wv } from "../figma_app/236327";
import { BigTextInputForwardRef, ButtonBasePrimary, ButtonSecondary, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { p as _$$p } from "../905/991924";
import { LazyInputForwardRef } from "../905/408237";
import { BlueLoadingSpinner } from "../figma_app/858013";
import { P as _$$P } from "../905/347284";
import { SvgComponent } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { R as _$$R } from "../905/304671";
import { SX, mq } from "../figma_app/199513";
import { convertTeamToRaw } from "../905/628874";
import { FolderViewType, getProjectUrl } from "../905/316062";
import { f as _$$f } from "../0c62c2fd/277163";
import { selectViewAction, showDropdownThunk } from "../905/929976";
import { iK, HK, CU, xH, OT, t3, Pb, Mi, w3, EN, Dp, hq, Ww, zv, TL, qb, YG, qM, Mn, JG } from "../905/586954";
import { z as _$$z } from "../905/404751";
import { hideModal, popModalStack, showModalHandler, hideSpecificModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { convertLgSeatTypeProduct } from "../figma_app/217457";
import { FFileType, FAccessLevelType, FPlanFeatureType, FPaymentHealthStatusType, FPlanRestrictionType } from "../figma_app/191312";
import { mapUserProperties, mapResourceAccess } from "../figma_app/349248";
import { AccountTypeEnum } from "../figma_app/35887";
import { AccessLevelEnum } from "../905/557142";
import { hasRootPathOptional, findOwnerFolder, getSidebarPath, isTeamFolderV2 } from "../figma_app/528509";
import { z as _$$z2 } from "../905/875422";
import { MoveFileCurrentProject, AccessibleFoldersV2, TeamFileCountsByTeamId } from "../figma_app/43951";
import { isRecentsAndSharingView } from "../figma_app/193867";
import { sortItemsByOrder, DEFAULT_TEAM_FILE_COUNTS, isTeamAllowedToAddFiles, AddOperationType } from "../figma_app/598018";
import { b as _$$b, A as _$$A } from "../figma_app/965813";
import { X as _$$X } from "../905/698965";
import { OrganizationType } from "../905/833838";
import { KindEnum } from "../905/129884";
import { e0 as _$$e2 } from "../905/696396";
import { createNoOpValidator } from "../figma_app/181241";
import { isElementHidden } from "../905/826900";
import { OJ } from "../905/519092";
import { v as _$$v } from "../905/92662";
import { logDebug, logError } from "../905/714362";
import { XHR } from "../905/910117";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { X0 } from "../905/784221";
import { debounce } from "../905/915765";
import { getFileCreationPermissions, canCreateFileType } from "../figma_app/687776";
import { createOptimistThunk } from "../905/350402";
import { hasProjectRestrictions, hasTeamStatePaidAccess } from "../figma_app/345997";
import { KH } from "../905/81982";
import { NU } from "../905/163189";
import { getDraftsSidebarString } from "../figma_app/633080";
import { desktopAPIInstance } from "../figma_app/876459";
import { FlashActions } from "../905/573154";
import { openCreateTeamFlow } from "../figma_app/976345";
import { hasStarterTeamLoopholeAccess } from "../figma_app/297957";
import { KQ } from "../figma_app/475472";
import { pw } from "../figma_app/805373";
import { A as _$$A2 } from "../svg/367542";
import { A as _$$A3 } from "../6828/7452";
import { A as _$$A4 } from "../6041/578888";
import { A as _$$A5 } from "../svg/992724";
import { A as _$$A6 } from "../svg/90724";
import { A as _$$A7 } from "../svg/8108";
import { A as _$$A8 } from "../svg/391205";
import { A as _$$A9 } from "../1617/763016";
var d = l;
function R(e) {
  let t = useDispatch();
  let r = useCallback(r => {
    r.stopPropagation();
    e.team.canEdit && (trackEventAnalytics("New Folder", {
      trackingContext: e.trackingContextName
    }), t(SX({
      where: FolderViewType.FolderListView,
      team: {
        ...convertTeamToRaw(e.team),
        canEdit: e.team.canEdit
      }
    })));
  }, [t, e.team, e.trackingContextName]);
  return e.team.canEdit ? jsx(_$$f, {
    data_tooltip: getI18nString("sidebar.new_project"),
    data_onboarding_key: "new-project-icon",
    innerText: "Creates new project",
    onClick: r,
    isBackgroundTransparent: e.isBackgroundTransparent
  }) : null;
}
let Z = new class {
  constructor() {
    this.TeamRestrictionsListsSchemaValidator = createNoOpValidator();
  }
  getTeamRestrictionsLists(e) {
    return this.TeamRestrictionsListsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/team_restrictions_lists", {
      team_ids: e.teamIds
    }));
  }
}();
function ei(e) {
  return jsxs("div", {
    className: "page_move--fileCreateNameContainer--JBcti",
    children: [jsx("div", {
      className: "page_move--fileCreateNameSvgContainer--nm5eH",
      children: jsx(_$$v, {})
    }), jsx(BigTextInputForwardRef, {
      value: e.newFileName,
      onChange: e.onChange,
      maxLength: 255,
      autoFocus: !0,
      placeholder: getI18nString("page_move.add_new_file_name"),
      className: "page_move--fileCreateNameInput--0yBR8"
    })]
  });
}
var eo = (e => (e.SHARE_DRAFT = "share_draft", e.MOVE_DRAFT = "move_draft", e.CREATE_FILE = "create_file", e))(eo || {});
function el({
  planName: e,
  planType: t,
  planId: r,
  fileKey: s,
  upgradeReason: i
}) {
  return jsx(TrackingProvider, {
    name: "Viewer Upgrade Awareness Banner",
    properties: {
      entryPoint: i,
      fileKey: s,
      orgId: t === OrganizationType.ORG ? r : void 0,
      teamId: t === OrganizationType.ORG ? void 0 : r
    },
    children: jsx("div", {
      className: i === eo.MOVE_DRAFT ? _$$s.pt8.pb4.px8.$ : void 0,
      children: jsx(_$$_, {
        dataTestId: "viewer-upgrade-banner",
        color: _$$S.INFORMATION,
        text: jsxs(Fragment, {
          children: [jsx("p", {
            className: _$$s.fontSemiBold.$,
            children: renderI18nText("viewer_upgrade_awareness.you_re_working_in_drafts_on_a_free_seat")
          }), jsx("p", {
            children: function (e, t, r) {
              switch (r) {
                case eo.SHARE_DRAFT:
                  if (t === OrganizationType.ORG) {
                    if (e) return renderI18nText("viewer_upgrade_awareness.sharing_a_draft_will_move_you_to_a_paid_seat_org", {
                      planName: e
                    });
                    return renderI18nText("viewer_upgrade_awareness.sharing_a_draft_will_move_you_to_a_paid_seat_in_your_organization");
                  }
                  if (e) return renderI18nText("viewer_upgrade_awareness.sharing_a_draft_will_move_you_to_a_paid_seat_team", {
                    planName: e
                  });
                  return renderI18nText("viewer_upgrade_awareness.sharing_a_draft_will_move_you_to_a_paid_seat_in_your_team");
                case eo.MOVE_DRAFT:
                  if (t === OrganizationType.ORG) {
                    if (e) return renderI18nText("viewer_upgrade_awareness.moving_a_draft_will_change_you_to_a_paid_seat_org", {
                      planName: e
                    });
                    return renderI18nText("viewer_upgrade_awareness.moving_a_draft_will_change_you_to_a_paid_seat_in_your_organization");
                  }
                  if (e) return renderI18nText("viewer_upgrade_awareness.moving_a_draft_will_change_you_to_a_paid_seat_team", {
                    planName: e
                  });
                  return renderI18nText("viewer_upgrade_awareness.moving_a_draft_will_change_you_to_a_paid_seat_in_your_team");
              }
            }(e, t, i)
          })]
        })
      })
    })
  });
}
let eh = "32px";
let ex = parsePxInt(eh);
let eb = e => e?.id || iK;
let ev = new KH({
  keys: ["folder.path", "team.name"],
  threshold: .3,
  tokenize: !0
});
let ey = (e, t, r, a, s) => !(e.orgId !== s && t?.orgId !== s || !e.canEdit || t && hasProjectRestrictions(e, t, r) && !hasRootPathOptional(e)) && (!a || !!hasTeamStatePaidAccess(t));
let ew = (e, t, r) => !r || !!hasTeamStatePaidAccess(e);
let ej = (e, t = !1) => {
  let r = [];
  Object.keys(e.folders).forEach(a => {
    let s = e.folders[a];
    let i = s.teamId ? e.teams[s.teamId] : null;
    ey(s, i, e.user, t, e.orgId) && (hasRootPathOptional(s) && (s = {
      ...s,
      path: getDraftsSidebarString()
    }), r.push(s));
  });
  ev.set(r.map(t => {
    let r = t.teamId && e.teams[t.teamId] && {
      name: e.teams[t.teamId].name
    };
    let a = {
      path: t.path,
      teamId: t.teamId,
      id: t.id,
      subscription: !!t.subscription,
      ...getFileCreationPermissions(t)
    };
    return r ? {
      folder: a,
      team: r
    } : {
      folder: a
    };
  }));
};
let eT = ({
  folders: e,
  roles: t,
  user: r,
  orgUsers: a,
  teams: s,
  orgId: i,
  implicitTeamRolesTeamIds: n
}, l, d, c) => {
  let u = Object.create(null);
  let m = 0;
  let _ = 0;
  let p = findOwnerFolder(r && r.id, e, t.byFolderId, r && i ? a[i][r.id] : null);
  for (let e in u[HK] = [], u[iK] = [], t.byTeamId) ew(s[e], r, l) && (_++, u[e] = []);
  n && n.forEach(e => {
    ew(s[e], r, l) && (_++, u[e] = []);
  });
  Object.keys(e).forEach(t => {
    let a = {
      ...e[t]
    };
    let n = ey(a, a.teamId ? s[a.teamId] : null, r, l, i);
    if (getFeatureFlags().file_move_show_all_resources) {
      if (n && (!d || a.subscription || hasRootPathOptional(a))) {
        let e = a.teamId ? s[a.teamId] : null;
        u[p && a.id === p.id ? HK : eb(e)].push(a);
        m++;
      }
    } else if (n && (a.subscription || hasRootPathOptional(a))) {
      let e = a.teamId ? s[a.teamId] : null;
      u[p && a.id === p.id ? HK : eb(e)].push(a);
      m++;
    }
  });
  let f = m + _;
  c(CU({
    indexCount: f
  }));
  c(xH());
  return u;
};
let eE = (e, t, r, a, s) => {
  let i = Object.create(null);
  let n = Object.create(null);
  let o = [];
  let l = 0;
  let d = 0;
  if (s) {
    let t = e.indexOf(s);
    t > -1 && (e.splice(t, 1), e.splice(1, 0, s));
  }
  e.forEach(e => {
    if (n[e] = l, d += 8, e !== iK && e !== HK) {
      let t = {
        type: _$$b.NEW_FOLDER_TEAM,
        id: e,
        positionTop: d
      };
      o.push(t);
      d += ex;
      l += 1;
    }
    let r = t[e];
    l += r.length;
    r.sort((e, t) => "" === e.path ? -1 : "" === t.path ? 1 : e.path.toLowerCase() < t.path.toLowerCase() ? -1 : 1);
    let c = Array.from(r);
    a && s && e === s && c.forEach((e, t) => {
      e.id === a && (r.splice(t, 1), r.unshift(e));
    });
    r.forEach(e => {
      let t = {
        type: _$$b.FOLDER_ROW,
        id: e.id,
        positionTop: d
      };
      d += ex;
      o.push(t);
    });
    i[e] = r;
    d += 9;
  });
  return [i, n, o];
};
let eI = (e, t, r) => {
  let a = Object.create(null);
  let s = Object.create(null);
  let i = 0;
  let n = 0;
  let o = t.orgId && t.user ? t.orgUsers[t.orgId][t.user.id] : null;
  let l = findOwnerFolder(t.user ? t.user.id : null, t.folders, t.roles.byFolderId, o);
  for (let r of e) {
    let e = r.item.folder;
    let o = l && e.id === l.id ? 0 : r.score;
    let d = e.teamId ? t.teams[e.teamId] : null;
    let c = l && e.id === l.id ? HK : eb(d);
    !(c in a) && (a[c] = [], c !== iK && c !== HK && n++);
    a[c].push(e);
    null == s[c] ? s[c] = o : s[c] = Math.min(s[c], o);
    i++;
  }
  let d = i + n;
  r(CU({
    indexCount: d
  }));
  return [s, a];
};
let eN = e => (t, r) => {
  if (t === iK) return 1;
  let a = e[t];
  let s = e[r];
  return a ? s && a.name.toLowerCase() < s.name.toLowerCase() ? -1 : 1 : -1;
};
let eC = e => (t, r) => e[t] - e[r];
let eS = async (e, t, r, a, s = !1, i = !1, o, l, d, c) => {
  var u;
  var m;
  let _ = e.getState();
  let p = null;
  let f = null;
  t.type === _$$A.FILE ? (p = t.file.parent_org_id || null, f = t.file.team_id) : t.type === _$$A.REPO ? (p = t.repo.parent_org_id || null, f = t.repo.team_id) : t.type === _$$A.FILE_IMPORT && (p = t.orgId);
  let g = [];
  if (r) {
    let e = eI(await ev.search(r), a, o);
    m = e[0];
    (g = Object.keys(u = e[1])).length && g.sort(eC(m));
  } else {
    u = eT(a, s, !!c, e.dispatch);
    a.user ? (g.push(HK), g = g.concat(sortItemsByOrder(Object.values(a.teams), a.fileBrowserPreferences?.orderedTeamIds || [])), u[iK].length > 0 && g.push(iK)) : (g = Object.keys(u)).sort(eN(a.teams));
  }
  let h = (() => {
    switch (t.type) {
      case _$$A.FILE:
        return [t.file.editor_type];
      case _$$A.REPO:
        return [FFileType.DESIGN];
      case _$$A.FILE_IMPORT:
        return t.files.map(e => NU(e));
      default:
        throwTypeError(t);
    }
  })();
  let x = new Set(Object.values(u).flat().filter(e => h.every(t => !!t && canCreateFileType(e, t))).map(e => e.id));
  let b = g.filter(e => {
    if (e === iK) return null === u || u[e].length > 0;
    let t = a.teams;
    if (e !== HK) {
      let r = t[e]?.orgId || null;
      if (p || r) {
        if (r !== p) return !1;
      } else if (f && e === iK) return !1;
    }
    return !t[e]?.deletedAt && !!u[e]?.some(e => x.has(e.id));
  });
  let [v, y, w] = eE(b, u, i, l, d);
  e.dispatch(OT({
    rows: w
  }));
  e.dispatch(t3({
    indexOffsets: y
  }));
  e.dispatch(Pb({
    foldersByTeamId: v
  }));
  e.dispatch(Mi({
    teamIds: b
  }));
  r || e.dispatch(w3({
    userTeamCount: b.length
  }));
  _.fileMove.isSearchResult !== i && e.dispatch(EN({
    isSearchResult: i
  }));
  let j = HK in y && w[0].type === _$$b.FOLDER_ROW;
  r && j ? e.dispatch(Dp({
    indexAt: 0
  })) : r && !j && e.dispatch(Dp({
    indexAt: 1
  }));
};
let ek = (e, t, r, a = !1, s, i, n) => {
  eS(e, t, "", r, a, !1, e.dispatch, i, n, s);
};
let eR = debounce((e, t, r, a, s = !1) => {
  eS(e, t, r, a, s, !!r, e.dispatch);
}, 200);
let eA = createOptimistThunk((e, t) => {
  ej(t.userResources, t.modalData.isPublishing);
  ek(e, t.modalData, t.userResources, t.modalData.isPublishing, !1, t.currentFolderId, t.currentFolderTeamId);
});
let eO = createOptimistThunk((e, t) => {
  eR(e, t.modalData, t.query, t.userResources);
  e.dispatch(hq(t));
});
let eU = "file_move--main--fz-As";
let eW = "file_move--iconContainer--2ExyP";
let e$ = "file_move--folderRowWrapper--R5vx1";
let eG = "file_move--folderRow--ZBYjx";
let eV = "file_move--horizontalDivider--g43mL";
function eH(e) {
  let t = useSelector(e => e.user);
  let [r, n] = useState("");
  let o = e.dispatch;
  let [l, d] = useState(!0);
  return jsx("form", {
    onSubmit: t => {
      t.preventDefault();
      trackEventAnalytics("Create Team Inline", {
        trackingContext: e.trackingContextName
      });
      r ? (o(KQ({
        teamName: r,
        orgAccess: FAccessLevelType.PUBLIC,
        dontRedirect: !0
      })), d(!0), n("")) : o(FlashActions.error(getI18nString("flash.team_name_cannot_be_empty")));
    },
    children: jsx("div", {
      className: "file_move--teamCreateRow--GglhU file_move--folderRow--ZBYjx",
      children: l ? jsxs("button", {
        type: "button",
        className: "file_move--rowButton--CSDNV",
        onClick: () => {
          null != t && !e.orgId && hasStarterTeamLoopholeAccess({
            userId: t.id,
            teams: Object.values(e.teams),
            rolesByTeamId: e.rolesByTeamId
          }) ? (o(hideModal()), o(openCreateTeamFlow({
            openInNewTab: !desktopAPIInstance
          }))) : (d(!1), o(xH()));
        },
        children: [jsx(SvgComponent, {
          className: "file_move--newProjectIconFileMove--V9037 sidebar--icon--wMzUY",
          svg: _$$A2
        }), jsx("span", {
          className: "file_move--newFolderNameCustomSections--OqBS9 sidebar--sectionNameCustomSections--9e7LZ sidebar--sectionTextCustomSections---1KFn sidebar--sectionContentCustomSections--wI9mZ ellipsis--ellipsis--Tjyfa",
          children: renderI18nText("file_browser.inline_team_creation.button_text")
        })]
      }) : jsxs(Fragment, {
        children: [jsx("div", {
          className: eW,
          children: jsx(pw, {
            size: 16,
            shape: "SQUARE",
            color: "#E5E5E5"
          })
        }), jsx("div", {
          className: "file_move--newTeamTitleText--cax1f file_move--teamTitleText--4XOM- ellipsis--ellipsis--Tjyfa",
          children: jsx(BigTextInputForwardRef, {
            value: r || "",
            onChange: e => {
              n(e.target.value);
            },
            onBlur: () => {
              d(!0);
            },
            className: "file_move--newTeamInput--0kCF4",
            maxLength: e.teamNameMaxWidth,
            placeholder: getI18nString("file_browser.inline_team_creation.placeholder"),
            autoFocus: !0
          })
        })]
      })
    })
  });
}
let e0 = parsePxInt(eh);
let e1 = "FileMoveModalContent";
export function $$e48(e) {
  return "folder" === e.view || isRecentsAndSharingView(e) ? "_self" : "_blank";
}
export function $$e29(e) {
  return !!e.subscription || hasRootPathOptional(e);
}
export function $$e57(e) {
  switch (e.type) {
    case _$$A.FILE:
      let t = e.file;
      return t?.folder_id || null;
    case _$$A.REPO:
      let r = e.repo;
      return r?.folder_id || null;
    case _$$A.FILE_IMPORT:
      return null;
    default:
      throwTypeError(e);
  }
}
export function $$e83(e) {
  let t = null;
  e.type === _$$A.FILE ? t = e.file.parent_org_id || null : e.type === _$$A.REPO ? t = e.repo.parent_org_id || null : e.type === _$$A.FILE_IMPORT && (t = e.orgId);
  let r = useSelector(e => e.orgById);
  let n = t ? r[t] : null;
  let o = useSelector(e => e.fileMove);
  let l = useSelector(e => !!e.creatingNewFolder);
  let d = useSelector(e => e.dropdownShown);
  let u = useSelector(e => e.selectedView);
  let m = $$e57(e);
  let f = _$$R();
  let h = useSubscription(MoveFileCurrentProject, {
    projectId: m
  }, {
    enabled: !!m
  });
  let x = useSubscription(AccessibleFoldersV2, {
    orgId: t
  });
  "errors" === x.status && (console.error("Loading AccessibleFolders from LiveGraph: "), console.error(x.errors));
  let b = "loaded" === x.status && ("loaded" === h.status || e.type === _$$A.FILE_IMPORT) ? {
    fetched: x,
    transformed: function (e, t, r, a) {
      let s = {
        id: e.currentUser.id,
        student_validated_at: e.currentUser.studentValidatedAt && e.currentUser.studentValidatedAt.toString()
      };
      let i = {};
      let n = {};
      let o = {};
      let l = {
        byFolderId: {},
        byTeamId: {}
      };
      let d = mapUserProperties(e.currentUser);
      let c = [];
      let u = e => {
        n[e.id] = {
          ...e,
          canEdit: !0,
          canRename: !!e.path
        };
      };
      e.currentUser.allOrgUsers && e.currentUser.allOrgUsers.forEach(e => {
        o[e.orgId] = {
          [e.userId]: {
            ...e,
            type: AccountTypeEnum.ORG_USER,
            account_type: e.accountType,
            design_paid_status: e.accountType,
            id: e.id,
            org_id: e.orgId,
            user_id: e.userId,
            user: {
              id: e.user.id,
              email: e.user.email || void 0,
              img_url: e.user.imgUrl,
              name: e.user.name || void 0,
              handle: e.user.handle
            },
            permission: e.permission,
            drafts_folder_id: e.draftsFolderId,
            created_at: e.createdAt.toString(),
            updated_at: e.updatedAt?.toString() || "",
            disabled_at: e.disabledAt && e.disabledAt.toString(),
            whiteboard_paid_status: e.whiteboardPaidStatus || FPlanFeatureType.STARTER,
            show_figjam_user_onboarding: null,
            has_shown_figjam_admin_launch_onboarding: null,
            has_shown_figjam_admin_onboarding: null,
            ecc_upgrading_locked: null,
            dev_mode_paid_status: e.devModePaidStatus || FPlanFeatureType.RESTRICTED,
            ...(a ? {
              active_seat_type: convertLgSeatTypeProduct(e.activeSeatTypeUpgrade?.billableProduct)
            } : void 0)
          }
        };
        e.draftsProject && (u(e.draftsProject), e.draftsProject.ownerRole && (l.byFolderId[e.draftsProject.id] = {
          [s.id]: mapResourceAccess(e.draftsProject.ownerRole, d, null, null)
        }));
      });
      e.currentUser.teamEditRoles && e.currentUser.teamEditRoles.forEach(e => {
        if (!e.team) return;
        let {
          id,
          projects
        } = e.team;
        i[id] = {
          ...e.team,
          canView: e.level >= AccessLevelEnum.VIEWER,
          canEdit: e.level >= AccessLevelEnum.EDITOR,
          canAdmin: e.level >= AccessLevelEnum.ADMIN,
          currentTeamUser: e.team.currentTeamUser,
          licenseGroup: null
        };
        l.byTeamId[id] = {
          [s.id]: mapResourceAccess(e, d, null, null)
        };
        projects && projects.forEach(e => u(e));
      });
      let m = e && e.org ? e.org : null;
      if (m) {
        if (t) {
          let e = getResourceDataOrFallback(t.project);
          e && e.canEdit && u(e);
        }
        m.teams && m.teams.forEach(e => {
          let {
            id,
            orgEditProjects
          } = e;
          if (!i[id]) {
            let r = e.canEdit;
            let a = e.canAdmin;
            let s = e.licenseGroup;
            i[id] = {
              ...e,
              canView: !1,
              canEdit: r ?? !1,
              canAdmin: a ?? !1,
              licenseGroup: s || null
            };
            c.push(id);
          }
          let a = getResourceDataOrFallback(orgEditProjects);
          a && a.forEach(e => {
            u(e);
          });
        });
      }
      e.currentUser.teamRoles?.forEach(e => {
        if (!e.team) return;
        let {
          id
        } = e.team;
        i[id] || (i[id] = {
          ...e.team,
          canEdit: !1,
          canAdmin: !1,
          canView: !1,
          currentTeamUser: e.team.currentTeamUser,
          licenseGroup: null
        }, l.byTeamId[id] = {
          [s.id]: mapResourceAccess(e, d, null, null)
        });
      });
      e.currentUser.projectEditRoles && e.currentUser.projectEditRoles.forEach(e => {
        e.project && (u(e.project), l.byFolderId[e.project.id] = {
          [s.id]: mapResourceAccess(e, d, null, null)
        });
      });
      e.currentUser.draftsProject && (u(e.currentUser.draftsProject), e.currentUser.draftsProject.ownerRole && (l.byFolderId[e.currentUser.draftsProject.id] = {
        [s.id]: mapResourceAccess(e.currentUser.draftsProject.ownerRole, d, null, null)
      }));
      return {
        org: m,
        user: s,
        teams: i,
        folders: n,
        roles: l,
        orgUsers: o,
        orgId: r,
        fileBrowserPreferences: e.currentUser.fileBrowserPreferences,
        implicitTeamRolesTeamIds: c
      };
    }(x.data, e.type !== _$$A.FILE_IMPORT ? h.data : null, t, f)
  } : null;
  let v = null === b ? {
    loaded: !1
  } : {
    loaded: !0,
    userResources: b.transformed
  };
  let y = null == m || null === b ? null : b.transformed.folders[m];
  let w = y ? y.teamId : null;
  let j = useDispatch();
  useEffect(() => {
    v.loaded && j(eA({
      modalData: e,
      userResources: v.userResources,
      currentFolderId: m,
      currentFolderTeamId: w
    }));
  }, [b && b.fetched]);
  let T = [];
  if (v.loaded && !t) for (let e in v.userResources.teams) {
    let t = v.userResources.teams[e];
    "ok" !== t.subscription && T.push(t.id);
  }
  let E = function (e) {
    let [t, r] = useState(Xm());
    let a = e.join(",");
    useEffect(() => {
      if (0 === a.length) {
        r(gB({}));
        return;
      }
      r(Xm());
      let e = !1;
      (async () => {
        let t = await Z.getTeamRestrictionsLists({
          teamIds: a
        });
        e || r(gB(t.data.meta));
      })();
      return () => {
        e = !0;
      };
    }, [a]);
    return t;
  }(T);
  if ("loaded" === E.status && v.loaded) for (let e in v.userResources.teams) {
    let t = v.userResources.teams[e];
    E.data[e] && (t.restrictionsList = E.data[e]);
  }
  useWebLoggerTimerEffect("loaded" === x.status, e => {
    trackEventAnalytics("file_move_modal_latency", {
      latency_ms: e
    }, {
      forwardToDatadog: !0
    });
  });
  return jsx($$e32, {
    creatingNewFolder: l,
    currentOrg: n,
    dispatch: j,
    dropdownShown: d,
    fileMove: o,
    fileMoveData: e,
    isBillingRemodelEnabled: f,
    modalId: e._modalId,
    selectedView: u,
    userResources: v
  });
}
function e6(e) {
  let t = null != e.orgId;
  let r = e.subscription === FPaymentHealthStatusType.INCOMPLETE || e.subscription === FPaymentHealthStatusType.OK;
  return {
    id: e.id,
    subscription: e.subscription,
    starter_team: !t && !r,
    pro_team: r,
    org_team: t,
    student_team: !!e.studentTeamAt,
    deleted_at: e.deletedAt?.toString() || null
  };
}
export class $$e32 extends PureComponent {
  constructor() {
    super(...arguments);
    this.state = {
      newFileName: ""
    };
    this.FILE_MOVE_DROPDOWN = "file-move-dropdown";
    this.setScrollContainer = e => {
      this.scrollContainer = e;
    };
    this.scrollContainerRef = createRef();
    this.isMovePageToNewFile = getFeatureFlags().move_page_to_new_file && this.props.fileMoveData.isMovePageToNewFile;
    this.onScroll = () => {
      clearTimeout(this.previousTimeOutKey);
      this.props.fileMove.upDownKeyPressed && this.props.dispatch(Ww({
        canFocus: !1
      }));
      this.previousTimeOutKey = setTimeout(() => {
        this.props.fileMove.canMouseFocus || this.props.dispatch(Ww({
          canFocus: !0
        }));
      }, 200);
    };
    this.onkeydown = e => {
      if (!this.props.userResources.loaded || this.props.creatingNewFolder || this.props.fileMove.folderRenaming || this.props.fileMove.isSearchFocused) return;
      let t = document.getElementById(e1);
      if (isElementHidden(t)) return;
      let {
        userResources
      } = this.props.userResources;
      switch (e.keyCode) {
        case KeyCodes.ESCAPE:
          this.onClose();
          break;
        case KeyCodes.UP_ARROW:
          this.props.dispatch(zv());
          break;
        case KeyCodes.DOWN_ARROW:
          this.props.fileMove.indexCount && this.props.dispatch(TL({
            upperBound: this.props.fileMove.indexCount
          }));
          break;
        case KeyCodes.ENTER:
          {
            if (-1 === this.props.fileMove.focusedIndex) return;
            let e = this.props.fileMove.folderRows[this.props.fileMove.focusedIndex];
            if (e.type === _$$b.NEW_FOLDER_TEAM) {
              let t = e.id;
              let a = userResources.teams[t];
              this.props.dispatch(SX({
                where: this.props.modalId.type,
                team: {
                  ...convertTeamToRaw(a),
                  canEdit: !0
                }
              }));
            } else if (e.type === _$$b.FOLDER_ROW) {
              let t = userResources.folders[e.id];
              if (!t) break;
              this.move(t);
            }
          }
      }
    };
    this.onClose = () => {
      this.props.fileMoveData.displayBanner ? this.props.dispatch(popModalStack()) : this.props.dispatch(hideModal());
    };
    this.openOrgView = e => {
      this.props.dispatch(selectViewAction({
        view: "org",
        orgId: e,
        orgViewTab: _$$X.HOME
      }));
    };
    this.onOrgViewLinkClick = () => {
      this.props.dispatch(hideModal());
      this.props.currentOrg && this.openOrgView(this.props.currentOrg.id);
    };
    this.moveToSelectedFolder = () => {
      let e = this.getFocusedFolder();
      if (!e) return;
      let t = () => {
        this.move(e);
      };
      if (this.isMovePageToNewFile && this.props.fileMoveData.type !== _$$A.FILE_IMPORT) {
        var r;
        var a;
        var s;
        this.onClose();
        let t = this.props.fileMoveData.type === _$$A.FILE ? this.props.fileMoveData.fileKey : this.props.fileMoveData.repoId;
        r = this.props.fileMoveData.page_id;
        a = e.id;
        s = this.state.newFileName;
        logDebug("startMovePagesJob", "Send request to start move pages job.");
        XHR.post(`/api/files/${t}/move_pages`, {
          folder_id: a,
          page_ids: r,
          file_name: s
        }).catch(e => {
          logError("startMovePagesJob", "Error with starting move pages job.", {
            err: e
          });
        }).then(() => {
          logDebug("startMovePagesJob", "Move pages job successfully started.");
        });
        return;
      }
      let i = this.props.fileMoveData;
      if (i.type === _$$A.FILE && i.file.is_team_template && hasRootPathOptional(e)) {
        this.props.dispatch(showModalHandler({
          type: X0,
          data: {
            title: renderI18nText("templates.confirmation.move_to_drafts.title", {
              count: 1
            }),
            content: renderI18nText("templates.confirmation.move_to_drafts.description"),
            confirmText: renderI18nText("templates.confirmation.move_to_drafts.button_v2"),
            destructive: !1,
            onConfirm: t
          }
        }));
        return;
      }
      t();
    };
    this.move = d()(e => {
      let t = this.props.fileMoveData;
      switch (t.type) {
        case _$$A.FILE:
          this.moveFile(e, t.file);
          break;
        case _$$A.REPO:
          this.moveRepo(e, t.repo);
          break;
        case _$$A.FILE_IMPORT:
          for (let r of t.files) this.props.dispatch(_$$z2({
            name: r.name,
            blob: new Blob([r.contents]),
            folderId: e.id
          }));
          break;
        default:
          throwTypeError(t);
      }
    }, 2e3, {
      leading: !0,
      trailing: !1
    });
    this.closeModal = () => {
      this.props.dispatch(hideSpecificModal(this.props.modalId));
    };
    this.moveFile = (e, t) => {
      if (e && e.id !== t.folder_id) {
        if (this.props.userResources.loaded) {
          let r = this.props.userResources.userResources.teams[e.teamId || ""] || null;
          this.closeModal();
          this.props.dispatch(_$$z({
            files: [t],
            folder: e,
            team: r,
            fromFileModal: !0,
            onFinishCallback: this.props.fileMoveData.afterFileMove?.callback
          }));
        }
      } else this.onClose();
    };
    this.moveRepo = (e, t) => {
      if (e && e.id !== t.folder_id) {
        if (this.props.userResources.loaded) {
          let r = this.props.userResources.userResources.teams[e.teamId || ""] || null;
          this.closeModal();
          this.props.dispatch(_$$z({
            files: [],
            repos: [t],
            folder: e,
            team: r,
            fromFileModal: !0
          }));
        }
      } else this.onClose();
    };
    this.getModalTitle = () => {
      let e = this.props.fileMoveData;
      if (this.isMovePageToNewFile) return getI18nString("file_browser.file_move.move_pages_to_new_file");
      if (e.type === _$$A.FILE_IMPORT) return 1 === e.files.length ? getI18nString("file_browser.file_move.modal_header_import_file", {
        fileName: e.files[0].name
      }) : getI18nString("file_browser.file_move.modal_header_import_files");
      {
        let t = e.type === _$$A.FILE ? e.file.name : e.repo.name;
        return getI18nString("file_browser.file_move.modal_header_move_file", {
          fileName: t
        });
      }
    };
    this.getFocusedFolder = () => {
      if (!this.props.userResources.loaded) return null;
      let {
        userResources
      } = this.props.userResources;
      let t = this.props.fileMove.folderRows[this.props.fileMove.focusedIndex];
      return t && t.type === _$$b.FOLDER_ROW ? userResources.folders[t.id] : null;
    };
    this.onFileMoveContextMenu = (e, t) => {
      e.stopPropagation();
      e.preventDefault();
      this.props.fileMove.folderRenaming || this.props.dispatch(showDropdownThunk({
        type: this.FILE_MOVE_DROPDOWN,
        data: {
          folderId: t.id,
          position: {
            top: e.clientY,
            left: e.clientX,
            right: "auto",
            bottom: "auto"
          }
        }
      }));
    };
    this.handleInputChange = e => {
      this.setState({
        newFileName: e.currentTarget.value
      });
    };
    this.renderViewerUpgradeAwarenessBanner = (e, t, r) => {
      if (!this.props.userResources.loaded) return null;
      let {
        userResources
      } = this.props.userResources;
      if (!hasRootPathOptional(t) || hasRootPathOptional(r)) return null;
      let i = this.props.fileMoveData.type === _$$A.FILE ? this.props.fileMoveData.fileKey : "";
      if (userResources.orgId) {
        if (userResources.org?.k12GoogleOrg) return null;
        let t = userResources.orgUsers[userResources.orgId];
        let r = t && userResources.user ? t[userResources.user.id] : null;
        let n = !1;
        if (e === FFileType.DESIGN ? n = r?.design_paid_status === FPlanFeatureType.STARTER : e === FFileType.WHITEBOARD && (n = r?.whiteboard_paid_status === FPlanFeatureType.STARTER), n) return jsx(el, {
          planName: this.props.currentOrg?.name,
          planType: OrganizationType.ORG,
          planId: userResources.orgId,
          fileKey: i,
          upgradeReason: eo.MOVE_DRAFT
        });
      } else {
        let t = r?.teamId;
        let n = t ? userResources.teams[t] : null;
        if (n && e6(n).pro_team) {
          let t = !1;
          if (e === FFileType.DESIGN ? t = n.currentTeamUser?.designPaidStatus === FPlanRestrictionType.STARTER : e === FFileType.WHITEBOARD && (t = n.currentTeamUser?.whiteboardPaidStatus === FPlanRestrictionType.STARTER), t) return jsx(el, {
            planName: n.name,
            planType: OrganizationType.TEAM,
            planId: n.id,
            fileKey: i,
            upgradeReason: eo.MOVE_DRAFT
          });
        }
      }
      return null;
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.onkeydown);
    this.componentMountedAt = new Date();
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onkeydown);
  }
  componentDidUpdate(e, t) {
    !e.userResources.loaded && this.props.userResources.loaded && (this.props.fileMoveData.autoSelect && this.props.dispatch(qb({
      fileMove: this.props.fileMove
    })), this.props.dispatch(YG({
      isSearchFocused: !0
    })));
    let r = this.props.fileMove.focusedIndex;
    if (this.props.fileMove.upDownKeyPressed && e.fileMove.focusedIndex !== r) {
      if (!this.scrollContainerRef.current || -1 === r) return;
      let e = this.props.fileMove.folderRows[r].positionTop;
      let t = this.scrollContainer.getScrollTop();
      let a = this.scrollContainerRef.current.clientHeight;
      e < t ? 0 === r ? this.scrollContainer.scrollToTop() : this.scrollContainer.scrollTo(e) : e + e0 > t + a && (null != this.props.fileMove.indexCount && r === this.props.fileMove.indexCount - 1 ? this.scrollContainer.scrollToBottom() : this.scrollContainer.scrollTo(e - a + e0));
    }
    this.props.fileMove.upDownKeyPressed && this.props.dispatch(qM());
  }
  renderDropdown() {
    if (!this.props.userResources.loaded) return;
    let {
      userResources
    } = this.props.userResources;
    let t = this.props.dropdownShown;
    if (!(t && t.type === this.FILE_MOVE_DROPDOWN && t.data && t.data.folderId)) return null;
    let r = userResources.folders[t.data.folderId];
    return r ? jsx($$ta0, {
      folder: r,
      dropdownShown: this.props.dropdownShown,
      selectedView: this.props.selectedView,
      dispatch: this.props.dispatch
    }) : null;
  }
  render() {
    let e;
    let t;
    let r;
    let s = this.props.fileMoveData.modalWidth || 288;
    let i = this.getModalTitle();
    if (!this.props.userResources.loaded) return jsx(OJ, {
      title: i,
      fixedTop: !0,
      minWidth: s,
      maxWidth: s,
      onClose: this.onClose,
      truncateTitleText: !0,
      children: jsx("div", {
        className: eU,
        children: jsx(BlueLoadingSpinner, {
          className: "file_move--spinner--eDfAF"
        })
      })
    });
    let {
      userResources
    } = this.props.userResources;
    let l = $$e57(this.props.fileMoveData);
    let d = null == l ? null : userResources.folders[l];
    let c = this.getFocusedFolder();
    e = this.isMovePageToNewFile ? null != c && 0 !== this.state.newFileName.length : this.props.fileMoveData.type === _$$A.FILE_IMPORT ? null != c : null != c && null != d && c.id !== d.id;
    let u = 0 === this.props.fileMove.teamOrder.length;
    let m = !this.props.fileMove.folderSearchQuery && this.props.fileMove.userTeamCount && this.props.fileMove.userTeamCount <= 1 && this.props.fileMoveData.type !== _$$A.FILE_IMPORT;
    let _ = this.props.fileMoveData;
    switch (_.type) {
      case _$$A.FILE:
        t = {
          fileKey: _.fileKey,
          fileTeamId: _.file && _.file?.team_id,
          fileMoveModalEmptyState: m,
          orgId: this.props.currentOrg && this.props.currentOrg?.id
        };
        r = _.file.editor_type ?? FFileType.DESIGN;
        break;
      case _$$A.REPO:
        t = {
          repoId: _.repoId,
          fileMoveModalEmptyState: m,
          orgId: this.props.currentOrg && this.props.currentOrg?.id
        };
        r = FFileType.DESIGN;
        break;
      case _$$A.FILE_IMPORT:
        t = {};
        r = null;
        break;
      default:
        throwTypeError(_);
    }
    return jsx(TrackingProvider, {
      name: _$$e2.FILE_MOVE_MODAL,
      properties: t,
      children: jsxs(OJ, {
        title: i,
        fixedTop: !0,
        minWidth: s,
        maxWidth: s,
        onClose: this.onClose,
        truncateTitleText: !0,
        children: [m ? jsx("div", {
          className: "file_move--mainZeroState--HWbCa file_move--main--fz-As",
          id: e1,
          children: jsxs("div", {
            className: "file_move--zeroStateModal--yrur1",
            children: [jsx("div", {
              style: {
                paddingTop: "100px"
              },
              children: renderI18nText("file_browser.file_move.zero_state")
            }), this.props.currentOrg && jsx("div", {
              className: _$$s.pt20.$,
              children: jsx(ButtonBasePrimary, {
                onClick: this.onOrgViewLinkClick,
                children: this.props.currentOrg.bigma_enabled ? getI18nString("file_browser.file_move.view_workspaces") : getI18nString("file_browser.file_move.view_teams")
              })
            })]
          })
        }) : jsxs("div", {
          className: eU,
          id: e1,
          children: [this.isMovePageToNewFile ? jsx(ei, {
            newFileName: this.state.newFileName,
            onChange: this.handleInputChange
          }) : jsxs(Fragment, {
            children: [r && d && c && !this.props.isBillingRemodelEnabled && this.renderViewerUpgradeAwarenessBanner(r, d, c), jsx("div", {
              className: "file_move--searchWrapperNew--fSvPz",
              children: jsx($$e74, {
                fileMoveData: this.props.fileMoveData,
                folderCount: this.props.fileMove.indexCount,
                focusedIndex: this.props.fileMove.focusedIndex,
                getFocusedFolder: this.getFocusedFolder,
                searchQuery: this.props.fileMove.folderSearchQuery,
                moveFolder: this.move,
                dispatch: this.props.dispatch,
                userResources
              })
            })]
          }), jsx("div", {
            className: eV
          }), this.props.fileMoveData.displayBanner && !this.isMovePageToNewFile && jsxs(Fragment, {
            children: [this.props.fileMoveData.displayBanner, jsx("div", {
              className: eV
            })]
          }), this.props.fileMove.folderSearchQuery && !this.isMovePageToNewFile && u ? jsx("div", {
            className: "file_move--emptyModal--o-ei-",
            children: renderI18nText("search.file_move.no_results_found", {
              folderSearchQuery: this.props.fileMove.folderSearchQuery
            })
          }) : jsx(_$$P, {
            width: s,
            className: "file_move--teamSectionBody--jIFZO",
            ref: this.setScrollContainer,
            scrollContainerRef: this.scrollContainerRef,
            onScroll: this.onScroll,
            children: jsx($$tt6, {
              componentMountedAt: this.componentMountedAt,
              creatingNewFolder: this.props.creatingNewFolder,
              currentFolderId: l,
              dispatch: this.props.dispatch,
              fileEditorType: r,
              fileMove: this.props.fileMove,
              folders: userResources.folders,
              indexOffsets: this.props.fileMove.indexOffsets,
              onDoubleClick: this.moveToSelectedFolder,
              onFileMoveContextMenu: this.onFileMoveContextMenu,
              orgId: userResources.orgId,
              rolesByTeamId: userResources.roles.byTeamId,
              selectedView: this.props.selectedView,
              teamNameMaxWidth: s - 88,
              teams: userResources.teams
            })
          }), jsxs("div", {
            className: "file_move--footer--pBClJ",
            children: [jsx(ButtonSecondary, {
              onClick: this.onClose,
              children: renderI18nText("modal.cancel")
            }), jsx(ButtonBasePrimaryTracked, {
              disabled: !e,
              onClick: this.moveToSelectedFolder,
              children: this.props.fileMoveData.moveText || getI18nString("file_browser.file_move.move")
            })]
          })]
        }), this.renderDropdown(), jsx($$ts1, {
          fileMove: this.props.fileMove,
          creatingNewFolder: this.props.creatingNewFolder
        })]
      })
    });
  }
}
$$e32.displayName = "FileMoveModal";
export class $$e74 extends PureComponent {
  constructor(e) {
    super(e);
    this.onFocus = () => {
      this.props.dispatch(xH());
      this.props.dispatch(YG({
        isSearchFocused: !0
      }));
    };
    this.onBlur = () => {
      this.props.dispatch(YG({
        isSearchFocused: !1
      }));
    };
    this.onChange = e => {
      e.stopPropagation();
      this.props.dispatch(eO({
        modalData: this.props.fileMoveData,
        query: e.currentTarget.value,
        userResources: this.props.userResources
      }));
    };
    this.onSearchKeyDown = e => {
      e.stopPropagation();
      let t = this.searchInputRef.current;
      switch (e.keyCode) {
        case KeyCodes.DOWN_ARROW:
          t && t.blur();
          null != this.props.folderCount && this.props.dispatch(TL({
            upperBound: this.props.folderCount
          }));
          break;
        case KeyCodes.UP_ARROW:
          t && t.blur();
          this.props.dispatch(zv());
          break;
        case KeyCodes.ESCAPE:
          if (!t) break;
          t.value ? (t.value = "", this.props.dispatch(eO({
            modalData: this.props.fileMoveData,
            query: "",
            userResources: this.props.userResources
          }))) : this.props.dispatch(hideModal());
          this.props.dispatch(xH());
          break;
        case KeyCodes.TAB:
          t && t.blur();
          this.props.dispatch(xH());
          break;
        case KeyCodes.ENTER:
          {
            t && t.blur();
            let e = this.props.getFocusedFolder();
            e && this.props.moveFolder(e);
          }
      }
    };
    this.searchInputRef = createRef();
  }
  componentDidMount() {
    let e = this.searchInputRef.current;
    e && e.focus();
  }
  render() {
    return jsxs("div", {
      className: "file_move--searchContainer--VZId9",
      children: [jsx("div", {
        className: eW,
        children: jsx(SvgComponent, {
          svg: _$$A6
        })
      }), jsx(LazyInputForwardRef, {
        ref: this.searchInputRef,
        placeholder: getI18nString("file_browser.file_move.search_placeholder"),
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.onSearchKeyDown,
        className: this.props.searchQuery ? "file_move--searchInputNew--No-wL" : "file_move--searchInputEmptyNew--Gv7eB file_move--searchInputNew--No-wL",
        value: this.props.searchQuery,
        onChange: this.onChange
      })]
    });
  }
}
export function $$e95(e) {
  let {
    team,
    teamId
  } = e;
  let [i, {
    onMouseOver: n,
    onMouseOut: o
  }] = (() => {
    let [e, t] = useState(!1);
    let r = useCallback(() => t(!0), [t]);
    let a = useCallback(() => t(!1), [t]);
    return useMemo(() => [e, {
      onMouseOver: r,
      onMouseOut: a
    }], [e, r, a]);
  })();
  let l = useSubscription(TeamFileCountsByTeamId, {
    teamId: team?.id ?? ""
  }, {
    enabled: !!team?.id
  });
  let d = l.data?.team?.teamFileCounts || DEFAULT_TEAM_FILE_COUNTS;
  let c = e.fileNotInTeam && e.fileEditorType && team && !isTeamAllowedToAddFiles(team, {
    type: AddOperationType.ADD_FILE,
    editorType: e.fileEditorType,
    teamFileCounts: d
  });
  return jsx(Fragment, {
    children: e.showTitle && jsxs("div", {
      className: "file_move--teamTitleNew--1hv9- text--fontPos12--YsUAh text--_fontBase--QdLsd",
      onMouseOver: n,
      onMouseLeave: o,
      children: [(teamId === iK || teamId === HK) && jsx("div", {
        className: eW,
        children: jsx(SvgComponent, {
          svg: _$$A8
        })
      }), jsxs("div", {
        className: "file_move--teamTitleRow--hMU87",
        children: [jsxs("div", {
          className: "file_move--teamName--Jmsoa",
          children: [jsx("div", {
            className: "file_move--teamTitleText--4XOM- ellipsis--ellipsis--Tjyfa",
            style: {
              maxWidth: e.teamNameMaxWidth
            },
            children: teamId === iK || teamId === HK ? getI18nString("file_browser.shared_projects") : team.name
          }), c && jsx("div", {
            className: "file_move--warningIcon--MVFCa",
            children: jsx(SvgComponent, {
              svg: _$$A4,
              "data-tooltip-type": KindEnum.TEXT,
              "data-tooltip": getI18nString("file_browser.file_move.paywall_team_tooltip")
            })
          })]
        }), i && team && !c && jsx("div", {
          className: "file_move--newProjButton--7b5Xq",
          children: jsx(R, {
            team,
            isBackgroundTransparent: !0,
            trackingContextName: _$$e2.FILE_MOVE_MODAL
          })
        })]
      })]
    })
  });
}
function te(e) {
  let t = useRef(null);
  let [r, n] = useState(!1);
  let o = useDispatch();
  useEffect(() => {
    !r && e.isTeamNew && t.current && e.hasFolderSection && (o(Dp({
      indexAt: e.firstFolderFocusedIndex
    })), t.current.scrollIntoView(), n(!0));
  }, [e.isTeamNew, e.hasFolderSection, e.firstFolderFocusedIndex, r, t, o]);
  return jsx("div", {
    className: e.className,
    ref: t,
    children: e.children
  });
}
export function $$tt6(e) {
  let {
    fileMove,
    teams,
    selectedView
  } = e;
  let i = Object.values(teams).map(e => e6(e));
  return jsxs("div", {
    children: [null != fileMove.teamOrder && fileMove.teamOrder.map(s => {
      let i = s !== HK;
      let n = s !== iK && s !== HK;
      let o = (fileMove.foldersByTeamId?.[s] || []).length > 0;
      if (!(i || n || o)) return null;
      let l = teams[s];
      if (!l && !(s === iK || s === HK) || s === HK && !e.orgId) return null;
      let d = l ? new Date(teams[s].createdAt) : void 0;
      let c = d && d > e.componentMountedAt;
      let u = fileMove.indexOffsets[s] + 1;
      let m = !!e.currentFolderId && s !== e.folders[e.currentFolderId]?.teamId;
      return jsxs(te, {
        className: "file_move--teamSection--mI5yE",
        isTeamNew: c,
        firstFolderFocusedIndex: u,
        hasFolderSection: o,
        children: [jsx($$e95, {
          team: l,
          teamId: s,
          showTitle: i,
          isACustomTeam: n,
          fileNotInTeam: m,
          teamNameMaxWidth: e.teamNameMaxWidth,
          indexOffsets: e.indexOffsets,
          fileEditorType: e.fileEditorType
        }), o && (fileMove.foldersByTeamId[s] || []).map((r, i) => {
          let o = i + e.indexOffsets[s];
          n && (o += 1);
          return jsx(tr, {
            currentFolderId: e.currentFolderId,
            focusedFolderIndex: fileMove.focusedIndex,
            folder: r,
            folderBeingRenamed: fileMove.folderRenaming,
            folders: e.folders,
            index: o,
            isSearchingFolders: !!fileMove.isSearchResult,
            onDoubleClick: e.onDoubleClick,
            onFileMoveContextMenu: e.onFileMoveContextMenu,
            trackingContextName: _$$e2.FILE_MOVE_MODAL
          }, `${r.teamId} ${r.id}`);
        })]
      }, `Team Section ${s}`);
    }), !e.orgId && jsx(eH, {
      teamNameMaxWidth: e.teamNameMaxWidth,
      trackingContextName: _$$e2.FILE_MOVE_MODAL,
      orgId: e.orgId,
      selectedView,
      teams: i,
      rolesByTeamId: e.rolesByTeamId,
      dispatch: e.dispatch
    })]
  });
}
function tr(e) {
  let t = useDispatch();
  let r = getAtomMutate(mq);
  let s = (a, s) => {
    trackEventAnalytics("Rename Folder", {
      trackingContext: e.trackingContextName
    });
    r({
      folderId: a.id,
      folderName: s
    });
    t(Mn());
  };
  let n = (t, r) => {
    e.onFileMoveContextMenu(r, t);
  };
  let o = e.folderBeingRenamed === e.folder.id;
  let l = e.focusedFolderIndex === e.index;
  let d = e.folderBeingRenamed ? e$ : l ? "file_move--folderRowWrapperFocusedNew--XWjyz file_move--folderRowWrapper--R5vx1" : e$;
  let {
    folder
  } = e;
  return jsx("div", {
    className: d,
    onMouseDown: () => {
      t(Dp({
        indexAt: e.index
      }));
    },
    onContextMenu: e => n(folder, e),
    onDoubleClick: () => {
      o || e.onDoubleClick();
    },
    children: o ? jsx("div", {
      className: eG,
      children: jsx(_$$p, {
        className: "file_move--renameInput--WL-5T",
        placeholderValue: getSidebarPath(folder),
        submit: e => s(folder, e),
        cancel: () => {
          t(Mn());
        }
      }, `input ${folder.id}`)
    }) : ((t, r) => {
      let s = $$e29(t) && e.isSearchingFolders;
      let i = e.focusedFolderIndex && e.focusedFolderIndex > -1 ? r : e.currentFolderId === t.id;
      let n = isTeamFolderV2(t) ? _$$A9 : _$$A5;
      return jsxs("div", {
        className: eG,
        children: [jsx("div", {
          className: eW,
          children: jsx(SvgComponent, {
            svg: i ? _$$A3 : n
          })
        }), jsx("span", {
          className: "file_move--folderName--YbDNz ellipsis--ellipsis--Tjyfa",
          children: getSidebarPath(t)
        }), jsx("div", {
          className: eW,
          children: s && jsx(SvgComponent, {
            svg: _$$A7
          })
        })]
      });
    })(folder, l)
  }, `${folder.teamId} ${folder.id}`);
}
$$e74.displayName = "FileMoveSearch";
export class $$ta0 extends PureComponent {
  constructor() {
    super(...arguments);
    this.renameFolder = () => {
      this.props.dispatch(JG({
        folderId: this.props.folder.id
      }));
    };
  }
  render() {
    let e = this.props.folder;
    let t = e.canRename;
    let r = $$e48(this.props.selectedView);
    return jsxs(ms, {
      className: "file_move--fileMoveContextMenu--47Rjw",
      style: this.props.dropdownShown.data.position,
      children: [jsx(c$, {
        disabled: !t,
        onClick: this.renameFolder,
        children: renderI18nText("file_browser.file_move.context_menu_rename")
      }), jsx(wv, {}), jsx(c$, {
        href: getProjectUrl(e.id, e.orgId),
        target: r,
        children: renderI18nText("file_browser.file_move.context_menu_show_in_files")
      })]
    });
  }
}
$$ta0.displayName = "FileMoveDropdown";
export class $$ts1 extends PureComponent {
  constructor() {
    super(...arguments);
    this.hiddenDivRef = e => {
      this.hiddenDiv = e;
    };
  }
  componentDidUpdate() {
    !this.props.fileMove || this.props.fileMove.folderRenaming || this.props.fileMove.isSearchFocused || this.props.creatingNewFolder || null == this.hiddenDiv || this.hiddenDiv.focus();
  }
  render() {
    return jsx("div", {
      ref: this.hiddenDivRef,
      tabIndex: 0
    });
  }
}
$$ts1.displayName = "FileMoveHiddenDiv";
export const FileMoveDropdown = $$ta0;
export const FileMoveHiddenDiv = $$ts1;
export const FileMoveModal = $$e32;
export const FileMoveModalComponent = $$e83;
export const FileMoveSearch = $$e74;
export const TeamSection = $$e95;
export const TeamsDisplay = $$tt6;
export const getCurrentFolderId = $$e57;
export const getTargetAttribute = $$e48;
export const isSubscribedLG = $$e29;