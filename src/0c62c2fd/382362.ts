import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { memo, useMemo, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { z as _$$z } from "../vendor/999105";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { trackEventAnalytics } from "../905/449184";
import { xf } from "../figma_app/416935";
import { Uz } from "../905/63728";
import { useWebLoggerTimerEffect } from "../905/485103";
import { qc } from "../figma_app/858013";
import { getI18nString, renderI18nText } from "../905/303541";
import { cL } from "../905/748726";
import { hideModal, showModalHandler } from "../905/156213";
import { fu } from "../figma_app/831799";
import { u as _$$u } from "../1e926454/858319";
import { dr, eb as _$$eb, oU } from "../4452/405965";
import { selectUser } from "../905/372672";
import { FPermissionLevelType, FResourceCategoryType } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { H_ } from "../figma_app/336853";
import { canPerformActionBasedOnLevel, getPermissionLevelName } from "../figma_app/12796";
import { rq } from "../905/351260";
import { bp, Wj } from "../905/913057";
import { ls } from "../905/158283";
import { AccessLevelEnum } from "../905/557142";
import { Z as _$$Z } from "../figma_app/761870";
import { e as _$$e } from "../905/393279";
import { o6, gy } from "../905/986349";
import { r, X as _$$X } from "../905/308709";
import { F as _$$F } from "../905/154112";
import { $i } from "../905/635424";
import { w as _$$w } from "../905/733703";
import { $ as _$$$, t as _$$t2 } from "../905/628632";
import { nH } from "../4452/331328";
import { E as _$$E } from "../905/632989";
import { B as _$$B } from "../905/714743";
import { z6 } from "../figma_app/805373";
import { F as _$$F2, j as _$$j } from "../4452/869669";
import { ET, mi } from "../figma_app/907616";
import { wk, AA, Fl, Jt, zn, $S, JZ, j7, $w } from "../905/372455";
import { A as _$$A } from "../6828/70690";
import { A as _$$A2 } from "../1617/401431";
import { A as _$$A3 } from "../1617/442539";
import { i as _$$i } from "../1e926454/162932";
import { O as _$$O } from "../905/921963";
import { E4 } from "../905/144598";
import { DA, Vq, Zk, st, d3, TS, Lq } from "../figma_app/538002";
function Y(e) {
  let t = e.canAdmin;
  let r = jsx(_$$B, {
    className: wk,
    svg: _$$A2
  });
  e.sharingAudienceControl === FPermissionLevelType.ORG_EDIT || e.sharingAudienceControl === FPermissionLevelType.ORG_VIEW ? r = jsx("div", {
    className: AA,
    children: jsx(_$$B, {
      svg: _$$A3
    })
  }) : (e.sharingAudienceControl === FPermissionLevelType.WORKSPACE_EDIT || e.sharingAudienceControl === FPermissionLevelType.WORKSPACE_VIEW) && (r = jsx("div", {
    className: AA,
    children: e.workspace && jsx(z6, {
      entity: e.workspace,
      size: 24
    })
  }));
  let s = e.sharingAudienceControl === FPermissionLevelType.INVITE_ONLY && e.isTeamOrgBrowsable;
  let i = s ? Fl : Jt;
  return jsxs(_$$E, {
    className: t ? i : zn,
    onClick: t ? () => e.changeModalView(1) : void 0,
    "data-onboarding-key": _$$F2,
    children: [r, jsxs("div", {
      className: $S,
      children: [jsxs("div", {
        children: [e.sharingAudienceControl && ET(e.sharingAudienceControl, e.org, e.workspace), s && jsx("div", {
          className: JZ,
          children: getI18nString("team_creation.anyone_can_find_this_team")
        })]
      }), e.org && jsxs("div", {
        className: j7,
        "data-onboarding-key": _$$F2,
        children: [e.sharingAudienceControl && mi(e.sharingAudienceControl), t && jsx(_$$B, {
          svg: _$$A,
          className: $w
        }), t && jsx(_$$j, {})]
      })]
    })]
  });
}
let Z = memo(function ({
  roles: e,
  virtualItems: t,
  totalSize: r,
  user: i,
  parentOrg: n,
  team: o,
  teamOrgDomains: l,
  canAdmin: d,
  canEdit: c,
  isCurrentUserTeamOwner: u
}) {
  let m = useMemo(() => ({
    team: o,
    type: FResourceCategoryType.TEAM
  }), [o]);
  return jsx("div", {
    style: {
      height: `${r}px`,
      position: "relative"
    },
    children: t.map(t => {
      let r = t.index;
      let s = e[r];
      let _ = canPerformActionBasedOnLevel(s, d, c);
      return jsx(_$$O, {
        canEditRole: _,
        canMakeAdmin: d,
        currentOrg: n,
        currentUserOrgId: n?.id ?? null,
        isOwnerOfResource: u,
        orgDomains: l,
        readOnlyOverrideWarningMessage: null,
        resource: m,
        resourceName: o.name,
        role: s,
        user: i,
        virtualRowItem: t
      }, `role-row-${r}`);
    })
  });
});
export function $$ee0(e) {
  let t;
  let {
    teamId,
    initialInviteLevel,
    prepopulateEmail,
    initialView
  } = e;
  let $ = useDispatch();
  let G = selectUser();
  let V = useSelector(e => e.autocomplete);
  let z = useSelector(e => e.contacts);
  let H = useSelector(e => e.dropdownShown);
  let K = M4.Team.useValue(teamId).data;
  let q = dr(teamId);
  let ee = _$$eb(teamId);
  useWebLoggerTimerEffect("loaded" === q.status && "loaded" === ee.status, e => {
    let t = ee.data?.length ?? 0;
    let r = "unknown";
    r = t <= 100 ? "small" : t <= 300 ? "medium" : "large";
    trackEventAnalytics("share_modal_latency", {
      latency_ms: e,
      modal_type: "team",
      is_outlier: e > 500,
      role_size: r
    }, {
      forwardToDatadog: !0
    });
  });
  let et = q.data;
  let er = et && et.org;
  let ea = et && et.teamSharingSettings;
  let es = er ? er.id : null;
  let ei = et && et.workspace;
  let en = er && er.org_domains ? er.org_domains : ls;
  let eo = useMemo(() => ee.data?.sort((e, t) => e.pending === t.pending ? E4(e, z).toLocaleLowerCase() < E4(t, z).toLocaleLowerCase() ? -1 : 1 : e.pending ? 1 : -1) ?? [], [z, ee]);
  let el = et && et.pendingTeamRoleRequests ? et.pendingTeamRoleRequests : [];
  let {
    default: _default,
    inviteLevel,
    setInviteLevel
  } = oU({
    initialValue: initialInviteLevel,
    teamId,
    teamPermissions: et
  });
  let em = useMemo(() => {
    let e = [];
    et?.canAdmin && e.push(AccessLevelEnum.ADMIN);
    et?.canEdit && e.push(AccessLevelEnum.EDITOR);
    et?.canRead && e.push(AccessLevelEnum.VIEWER);
    return e;
  }, [et]);
  let {
    validateToken,
    searchResultToken
  } = _$$u({
    parentOrg: er,
    prepopulatedEmail: prepopulateEmail,
    orgDomains: en
  });
  let ef = e => {
    let t = _$$Z(e);
    $(rq({
      emails: t,
      resourceType: FResourceCategoryType.TEAM,
      resourceIdOrKey: teamId,
      level: inviteLevel,
      emailsToExclude: bp(z.usersByEmail, G, eo),
      source: "team_share_modal",
      orgName: er ? er.name : void 0,
      teamId
    }));
  };
  let eg = () => {
    $(hideModal());
    $(cL());
  };
  let [eh, ex] = useState(initialView || 0);
  let eb = () => 0 === eh ? jsx("div", {
    className: DA,
    children: jsx("p", {
      children: renderI18nText("team_view.team_permissions_modal.invite_other_members", {
        teamName: K?.name ?? ""
      })
    })
  }) : jsx(_$$w, {
    title: getI18nString("team_view.team_permissions_modal.share_settings"),
    onClick: () => ex(0)
  });
  let ev = !!K && !K.org_id;
  let ey = hS(e);
  let {
    sharingSuggestions,
    sharingSuggestionIdsToExclude,
    sharingSuggestionEmailsToExclude
  } = _$$$({
    orgId: es,
    teamId,
    contacts: z.usersByEmail,
    roles: eo,
    user: G,
    autocompleteTokens: V.tokens
  });
  let eE = useCallback(() => 36, []);
  let eI = useRef(null);
  let eN = _$$z({
    size: eo.length,
    parentRef: eI,
    estimateSize: eE,
    overscan: 10,
    paddingStart: 0
  });
  t = K && et ? 0 === eh ? et ? jsx(Fragment, {
    children: jsxs("div", {
      onKeyDown: e => {
        e.keyCode !== Uz.ESCAPE && e.stopPropagation();
      },
      children: [ev && jsxs(Fragment, {
        children: [jsx(_$$i, {
          includeCopyLinkButton: !0,
          teamId,
          dropdownShown: H,
          initialInviteLevel: _default,
          teamPermissions: {
            canAdmin: !!et?.canAdmin,
            canEdit: !!et?.canEdit
          }
        }), jsx("div", {
          className: Vq,
          children: renderI18nText("team_view.team_permissions_modal.invite_by_email")
        })]
      }), !!et?.canAdmin && jsx($i, {
        teamId,
        teamRoleRequests: el,
        teamRoles: eo
      }), r(G) ? jsx(_$$X, {
        resourceType: "team"
      }) : jsxs(Fragment, {
        children: [jsx("div", {
          className: Zk,
          children: jsx(_$$e, {
            SearchResultComponent: o6,
            TokenComponent: gy,
            autocomplete: V,
            buttonText: getI18nString("team_view.team_permissions_modal.invite"),
            dispatch: $,
            dropdownKey: "permissions-invite-dropdown",
            dropdownShown: H,
            fixedAutocompleteResults: !0,
            getSearchResults: e => Wj(e, z.usersByEmail, G, eo, es, teamId, null, {
              inviteLevel,
              source: "team-permissions-modal"
            }),
            getSelectText: getPermissionLevelName,
            hideDropdownOnEmpty: !0,
            inviteLevel,
            joinLinkShown: ev,
            onHideModal: eg,
            onInviteLevelChange: setInviteLevel,
            onSubmit: e => {
              if (er && er.domain_capture && en && en.domains.length > 0) {
                let t = _$$Z(e).filter(e => xf(e) && !H_(en.domains, e));
                if (er?.invite_whitelist_guest_invite_setting == null && t.length > 0) {
                  $(showModalHandler({
                    type: _$$F,
                    data: {
                      emails: t,
                      onConfirm: () => {
                        ef(e);
                      },
                      popStack: !0,
                      orgName: er.name
                    }
                  }));
                  return;
                }
              }
              ef(e);
            },
            options: em,
            placeholderText: getI18nString("team_creation.add_a_name_or_email"),
            searchResultToken,
            shouldAutoFocus: !ev,
            validateToken,
            validateTokensAsEmail: !0
          })
        }), jsx(_$$t2, {
          suggestions: sharingSuggestions ?? void 0,
          autocomplete: V,
          searchResultToken,
          resourceType: "team",
          resourceId: teamId,
          idsToExclude: sharingSuggestionIdsToExclude ?? void 0,
          emailsToExclude: sharingSuggestionEmailsToExclude ?? void 0
        })]
      }), er && jsx("div", {
        className: st,
        ref: eI,
        children: jsxs("div", {
          className: d3,
          children: [jsx("div", {
            className: TS,
            children: getI18nString("file_permissions_modal.who_has_access")
          }), jsx(Y, {
            team: K,
            workspace: ei,
            org: er,
            changeModalView: ex,
            sharingAudienceControl: ea?.sharingAudienceControl,
            isTeamOrgBrowsable: ea?.orgBrowsable,
            canAdmin: !!et?.canAdmin
          }), jsx(Z, {
            canAdmin: !!et?.canAdmin,
            canEdit: !!et?.canEdit,
            isCurrentUserTeamOwner: !!et?.isOwner,
            parentOrg: er,
            roles: eo,
            team: K,
            teamOrgDomains: en,
            totalSize: eN.totalSize,
            user: G,
            virtualItems: eN.virtualItems
          })]
        })
      })]
    }, "container")
  }) : jsx("div", {
    className: Lq,
    children: jsx(qc, {})
  }) : er ? ea && jsx(nH, {
    team: K,
    workspace: ei || void 0,
    org: er,
    teamSharingSettings: ea,
    hideModal: eg,
    goBack: () => ex(0)
  }) : jsx(Fragment, {}) : jsx("div", {
    className: Lq,
    children: jsx(qc, {})
  });
  return jsx(fu, {
    name: "Share Modal",
    properties: {
      resourceType: FResourceCategoryType.TEAM,
      resourceId: teamId
    },
    children: jsx(bL, {
      manager: ey,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: eb()
          })
        }), jsx(nB, {
          children: t
        })]
      })
    })
  });
}
export const TeamPermissionsModal = $$ee0;