import b from 'classnames';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { um } from '../905/14223';
import { s_ } from '../905/17223';
import { d as _$$d2 } from '../905/49800';
import { rw } from '../905/54367';
import { ModalSupportsBackground, registerModal } from '../905/102752';
import { Ib } from '../905/129884';
import { M as _$$M } from '../905/130634';
import { H as _$$H } from '../905/154301';
import { hideModal, hideSpecificModal, popModalStack, showModalHandler, updateModal } from '../905/156213';
import { UpsellModalType } from '../905/165519';
import { b as _$$b } from '../905/173822';
import { V as _$$V } from '../905/223767';
import { getI18nString, renderI18nText } from '../905/303541';
import { createOptimistThunk } from '../905/350402';
import { $S } from '../905/351260';
import { c as _$$c } from '../905/370443';
import { selectUser } from '../905/372672';
import { k as _$$k } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { OJ } from '../905/519092';
import { ex as _$$ex } from '../905/524523';
import { r6 } from '../905/542608';
import { DashboardSections, NavigationRoutes } from '../905/548208';
import { AccessLevelEnum } from '../905/557142';
import { s as _$$s2 } from '../905/573154';
import { nl } from '../905/590952';
import { getFeatureFlags } from '../905/601108';
import { DP } from '../905/640017';
import { adminPermissionConfig } from '../905/654645';
import { getResourceDataOrFallback } from '../905/663269';
import { xN } from '../905/672897';
import { d as _$$d } from '../905/693444';
import { S3 } from '../905/708054';
import { IT } from '../905/713695';
import { B as _$$B } from '../905/714743';
import { oA as _$$oA } from '../905/723791';
import { yN } from '../905/727738';
import { Qq } from '../905/736956';
import { p as _$$p } from '../905/763242';
import { AutoLayout } from '../905/470281';
import { $ as _$$$ } from '../905/834575';
import { P as _$$P } from '../905/842406';
import { Um } from '../905/848862';
import { h as _$$h2 } from '../905/857431';
import { h as _$$h } from '../905/864281';
import { o as _$$o } from '../905/895626';
import { j7, oB, sf } from '../905/929976';
import { B as _$$B2 } from '../905/950875';
import { ck } from '../905/952832';
import { E as _$$E } from '../905/984674';
import { j as _$$j } from '../1577/266226';
import { A as _$$A6 } from '../1617/401431';
import { A as _$$A7 } from '../1617/442539';
import { p as _$$p2 } from '../4452/321313';
import { dW } from '../4452/331328';
import { r as _$$r } from '../4452/840214';
import { Y as _$$Y } from '../4452/914022';
import { A as _$$A5 } from '../5724/663128';
import { A as _$$A3 } from '../6828/154709';
import { d as _$$d3 } from '../7021/966231';
import { s as _$$s } from '../cssbuilder/589278';
import { i as _$$i } from '../figma_app/4979';
import { canPerformActionBasedOnLevel, getPermissionLevelNameCapitalized } from '../figma_app/12796';
import { PendingAssetTransferRequestByTeam, PendingTeamRoleRequestsByTeamId, TeamAdminSettingsPage, TeamById, TeamMembersModalView, TeamSettings } from '../figma_app/43951';
import { FL } from '../figma_app/102449';
import { DQ, Pw } from '../figma_app/121751';
import { J as _$$J } from '../figma_app/179602';
import { FAccessLevelType, FMemberRoleType, FOrganizationLevelType, FPermissionLevelType, FPlanNameType, FResourceCategoryType, FUserTypeClassification } from '../figma_app/191312';
import { c$, MM, ms, wv } from '../figma_app/236327';
import { useSubscription } from '../figma_app/288654';
import { hasValidSubscription } from '../figma_app/345997';
import { useLatencyLogger, useShadowRead } from '../figma_app/391338';
import { Lg, Lq } from '../figma_app/392626';
import { checkOrgUserPermission, isOrgOrEnterprisePlan } from '../figma_app/465071';
import { debug } from '../figma_app/465776';
import { T as _$$T, lN } from '../figma_app/472024';
import { Bq } from '../figma_app/482142';
import { Jd, UF } from '../figma_app/494261';
import { kb } from '../figma_app/502247';
import { handleSuspenseRetainRelease } from '../figma_app/566371';
import { cD, pG } from '../figma_app/598018';
import { X8 } from '../figma_app/634656';
import { CY } from '../figma_app/637027';
import { canAdminTeam, getPermissionsState } from '../figma_app/642025';
import { filterNotNullish } from '../figma_app/656233';
import { isMobileUA } from '../figma_app/778880';
import { az, z6 } from '../figma_app/805373';
import { $z, fu } from '../figma_app/831799';
import { kt, qc } from '../figma_app/858013';
import { wO } from '../figma_app/907616';
import { utilityNoop } from '../figma_app/918700';
import { Ex, zE } from '../figma_app/919079';
import { A as _$$A4 } from '../svg/443105';
import { A as _$$A8 } from '../svg/783902';
import { A as _$$A2 } from '../svg/977613';
let y = b;
let F = _$$ex('restricted_edu_tooltip', e => {
  let {
    text,
    title
  } = e;
  return jsxs('span', {
    className: Qq,
    children: [jsx('span', {
      style: {
        fontWeight: 600
      },
      children: title
    }), ' ', text]
  });
}, e => ({
  title: e.getAttribute('data-tooltip-title'),
  text: e.getAttribute('data-tooltip-text')
}));
let B = 'members_list_row--column--lYSr0';
let U = 'members_list_row--permissionsColumnModal--vpl7C members_list_row--column--lYSr0';
let G = 'members_list_row--roleRowWithRequests--Dmagz members_list_row--_membersListRowGridWithRequests--CLLCo members_list_row--_membersListRowGridWithRequestsBase--lj--X';
let V = 'members_list_row--roleRowWithRequestsModal--XkEe8 members_list_row--_membersListRowGridWithRequestsBase--lj--X';
let $ = 'members_list_row--acceptDenyText--FS9XK text--fontPos13--xW8hS text--_fontBase--QdLsd blue_link--blueLink--9rlnd';
let W = 'members_list_row--nameAndEmailColumn--8GdN6 members_list_row--column--lYSr0 members_list_row--_showWhenNarrow--FR1xk';
let z = 'members_list_row--nameColumn--mEVQ- members_list_row--column--lYSr0 members_list_row--_hideWhenNarrow--8VpM-';
let H = 'members_list_row--emailColumn--v-F6U members_list_row--column--lYSr0 members_list_row--_hideWhenNarrow--8VpM-';
let Q = 'members_list_row--fixedContextMenu--7vBtK';
let Y = 'members_list_row--select--Dxew7 members_list_row--column--lYSr0';
let K = 'members_list_row--dropdownIcon--mJelI';
let X = 'members_list_row--avatarWithHandle--yirlt';
let et = 'team-member-list-row-dropdown';
function ea(e) {
  let t = useDispatch();
  let a = selectUser();
  let i = _$$P();
  let l = Um();
  let o = useMemo(() => e.teamLgResult.transform(({
    team: t
  }) => ({
    teamName: t?.name,
    isCurrentUserTeamOwner: t?.isOwner,
    canMakeTeamMemberAdmin: t?.canAdmin,
    canEditTeamMemberRole: canPerformActionBasedOnLevel(e.teamRole, !!t?.canAdmin, !!t?.canEdit)
  })).unwrapOr(null), [e.teamLgResult, e.teamRole]);
  let d = useRef(null);
  let u = () => l && l.type === et && l.data.roleId === e.teamRole.id;
  let m = a => {
    if (u()) {
      t(oB());
    } else {
      if (!d.current) return;
      let s = d.current?.getBoundingClientRect();
      let n = s.bottom + a > window.innerHeight;
      let r = window.innerHeight - s.bottom;
      t(j7({
        type: et,
        data: {
          roleId: e.teamRole.id,
          position: {
            top: n ? 'auto' : s.top,
            bottom: n ? r : 'auto',
            left: s.left - 28,
            right: 'auto'
          }
        }
      }));
    }
  };
  let _ = () => {
    t($S({
      role: e.teamRole
    }));
  };
  let p = a => {
    debug(e.teamRole.resource_type === FResourceCategoryType.TEAM, 'MembersListRow is only for team roles');
    let s = () => t(yN({
      role: e.teamRole,
      level: a
    }));
    a === AccessLevelEnum.OWNER ? t(showModalHandler({
      type: _$$b,
      data: {
        resourceType: e.teamRole.resource_type,
        resourceName: o?.teamName || '',
        newOwnerName: e.teamRole.user.handle,
        onConfirmTransfer: s
      }
    })) : s();
  };
  let g = (a, s) => {
    e.isModal && t(hideModal());
    t(sf({
      view: 'user',
      userId: s.id,
      userViewTab: _$$o.INTERNAL_PROFILE
    }));
  };
  let x = (t, n) => {
    let r;
    e.teamRole.pending || (r = g);
    return jsx(az, {
      className: e.isModal ? 'members_list_row--avatarWithHandleModal--EOxtN admin_settings_page--avatarWithHandle--awCiS ellipsis--ellipsis--Tjyfa' : X,
      defaultFallbackAvatarSvg: e.teamRole.pending ? _$$A2 : void 0,
      defaultText: '--',
      enabled: e.teamRole.pending,
      entity: t,
      includeUserEmailAddress: n,
      initializableEntityProperties: ['handle', 'name', 'email'],
      onClick: r,
      overrideHandle: n ? t.handle || t.name || t.email : void 0,
      showIsMe: e.teamRole.user_id === a.id,
      size: 24
    });
  };
  let b = e.teamRole.pending ? ((e, t) => {
    let a = i?.usersByEmail[e.user.email] || {};
    return {
      ...a,
      ...e.user,
      id: e.user.id,
      email: a?.email ?? t ?? e.user.email
    };
  })(e.teamRole, e.emailLg) : e.teamRole.user;
  return jsxs('div', {
    'className': y()({
      [G]: !e.isModal,
      [V]: e.isModal
    }),
    'data-testid': 'members-list-row',
    'children': [e.isModal && jsx('div', {
      className: 'members_list_row--nameColumnModal--rT7n9 members_list_row--column--lYSr0',
      children: x(b, !0)
    }), !e.isModal && jsxs(Fragment, {
      children: [jsx('div', {
        className: z,
        children: x(b, !1)
      }), jsx('div', {
        className: W,
        children: x(b, !0)
      }), jsx('div', {
        className: H,
        children: jsx(_$$E, {
          truncate: !0,
          children: b.email
        })
      }), jsx('div', {})]
    }), jsxs('div', {
      className: e.isModal ? U : B,
      children: [(() => {
        if (e.isEduRestrictedLg) {
          return jsx(_$$B, {
            'className': 'members_list_row--warningIcon--G9r-7',
            'data-tooltip': F,
            'data-tooltip-max-width': 250,
            'data-tooltip-offset-y': 10,
            'data-tooltip-text': getI18nString('team_view.upgrade.to_continue_editing_they_need_to_verify_their_education_status_at_www_figma_com_education_apply'),
            'data-tooltip-timeout-delay': 50,
            'data-tooltip-title': getI18nString('team_view.upgrade.can_only_view', {
              teamMember: 'handle' in e.teamRole.user ? e.teamRole.user.handle : e.teamRole.user.email ?? ''
            }),
            'data-tooltip-type': Ib.SPECIAL,
            'dataTestId': 'restricted-edu-user-tooltip',
            'svg': _$$A4
          });
        }
      })(), (() => {
        let t;
        let n = [];
        let r = !1;
        if (e.teamRole.user_id !== a.id || o?.isCurrentUserTeamOwner) {
          if (!o?.canEditTeamMemberRole) {
            return jsx('span', {
              className: 'members_list_row--nonDropdownPadding--a8tyP',
              children: getPermissionLevelNameCapitalized(e.teamRole.level)
            });
          }
          o?.isCurrentUserTeamOwner && !e.teamRole.pending && n.push(AccessLevelEnum.OWNER);
          o?.canMakeTeamMemberAdmin && n.push(AccessLevelEnum.ADMIN);
          n.push(AccessLevelEnum.EDITOR);
          n.push(AccessLevelEnum.VIEWER);
          r = e.teamRole.pending;
        } else {
          n.push(e.teamRole.level);
        }
        let i = -24 * Math.max(0, n.indexOf(e.teamRole.level));
        u() && l.data && l.data.position && (t = {
          ...l.data.position
        }, t.top += i);
        return jsxs('div', {
          ref: d,
          children: [jsxs('div', {
            className: Y,
            onClick: () => m(120 + i),
            children: [jsx('span', {
              children: getPermissionLevelNameCapitalized(e.teamRole.level)
            }), jsx(_$$B, {
              svg: _$$A3,
              className: K
            })]
          }), u() && jsxs(ms, {
            className: Q,
            style: t,
            children: [n.map(t => jsx(MM, {
              onClick: e.teamRole.level !== t ? () => p(t) : void 0,
              checked: e.teamRole.level === t,
              children: getPermissionLevelNameCapitalized(t)
            }, t)), jsx(wv, {}), r && jsx(c$, {
              onClick: _,
              children: renderI18nText('file_browser.team.resend_invite')
            }), jsx(c$, {
              onClick: () => p(AccessLevelEnum.NONE),
              children: e.teamRole.user_id !== a.id || o?.isCurrentUserTeamOwner ? renderI18nText('file_browser.team.remove_confirm') : renderI18nText('file_browser.team.leave_confirm')
            })]
          })]
        });
      })()]
    })]
  });
}
let er = 'team-pending-member-role-request-dropdown';
let ei = () => {
  let e = useSelector(e => e.dropdownShown);
  return e && e?.type === er ? e : null;
};
function el(e) {
  let t = useDispatch();
  let a = ei();
  let i = useRef(null);
  let [l, o] = useState(e.request.level);
  let d = useSelector(t => e.request.teamId && t.roles.byTeamId[e.request.teamId] ? t.roles.byTeamId[e.request.teamId][e.request.user.id] : null);
  let u = useMemo(() => d ? [AccessLevelEnum.EDITOR] : [AccessLevelEnum.VIEWER, AccessLevelEnum.EDITOR], [d]);
  let m = {
    id: e.request.user.id,
    img_url: e.request.user.imgUrl,
    handle: e.request.user.handle,
    name: e.request.user.name ?? '',
    email: e.request.user.email ?? ''
  };
  let _ = s => {
    if (a) {
      t(oB());
    } else {
      let a = i && i.current && i.current.getBoundingClientRect();
      let n = a?.bottom ?? 0 + s > window.innerHeight;
      let r = window.innerHeight - (a?.bottom ?? 0);
      t(j7({
        type: er,
        data: {
          requestId: e.request.id,
          position: {
            top: n ? 'auto' : a?.top,
            bottom: n ? r : 'auto',
            left: a?.left ?? -28,
            right: 'auto'
          }
        }
      }));
    }
  };
  let p = e => {
    o(e);
    t(oB());
  };
  let g = useMemo(() => -24 * Math.max(0, u.indexOf(l)), [l, u]);
  let h = useMemo(() => {
    let e;
    a && a.data && a.data.position && (e = {
      ...a.data.position
    }, e.top += g);
    return e;
  }, [a, g]);
  let x = (e, a) => {
    t(sf({
      view: 'user',
      userId: a.id,
      userViewTab: _$$o.INTERNAL_PROFILE
    }));
  };
  let v = (e, t) => jsx(az, {
    entity: e,
    initializableEntityProperties: ['handle', 'name', 'email'],
    size: 24,
    className: X,
    onClick: x,
    overrideHandle: t ? e.handle || e.name || e.email : void 0,
    defaultText: '--'
  });
  let b = {
    request_id: e.request.id,
    team_id: e.request.teamId,
    type: l,
    response: 'accept',
    source: 'TeamPendingMembersRow'
  };
  return jsxs('div', {
    className: e.isModal ? V : G,
    children: [e.isModal && jsx('div', {
      className: B,
      children: v(m, !0)
    }), !e.isModal && jsxs(Fragment, {
      children: [jsx('div', {
        className: z,
        children: v(m, !1)
      }), jsx('div', {
        className: W,
        children: v(m, !0)
      }), jsx('div', {
        className: H,
        children: m.email
      })]
    }), jsxs('div', {
      className: y()({
        [B]: !0,
        'members_list_row--flexRight--iwR1Y': e.isModal
      }),
      children: [jsx('span', {
        onClick: () => {
          b.response = 'deny';
          trackEventAnalytics('permission_request_responded', b);
          t(UF({
            requestId: e.request.id
          }));
        },
        className: $,
        role: 'button',
        tabIndex: -1,
        children: renderI18nText('file_browser.team.dismiss')
      }), jsx('span', {
        onClick: () => {
          trackEventAnalytics('permission_request_responded', b);
          t(Jd({
            requestId: e.request.id,
            level: l,
            teamId: e.request.teamId,
            email: e.request.user.email ?? '',
            user: m
          }));
        },
        className: $,
        role: 'button',
        tabIndex: -1,
        children: renderI18nText('file_browser.team.approve')
      })]
    }), jsx('div', {
      className: e.isModal ? U : B,
      children: jsxs('div', {
        ref: i,
        children: [jsxs('div', {
          className: Y,
          role: 'button',
          tabIndex: 0,
          onClick: () => {
            u.length > 1 && _(120 + g);
          },
          children: [jsx('span', {
            children: getPermissionLevelNameCapitalized(l)
          }), u.length > 1 && jsx(_$$B, {
            svg: _$$A3,
            className: K
          })]
        }), a && a.data.requestId === e.request.id && u.length > 1 && jsx(ms, {
          className: Q,
          style: h,
          children: u.map(e => jsx(MM, {
            onClick: l !== e ? () => {
              p(e);
            } : void 0,
            checked: l === e,
            children: getPermissionLevelNameCapitalized(e)
          }, e))
        })]
      })
    })]
  });
}
function eo(e) {
  let t = useSubscription(PendingTeamRoleRequestsByTeamId, {
    teamId: e.teamId
  });
  if (t.status === 'loaded') {
    let a = t.data.team?.pendingTeamRoleRequests?.map(t => jsx(el, {
      request: t,
      isModal: e.isModal
    }, t.id));
    return a && a.length > 0 ? jsxs(Fragment, {
      children: [a, jsx('div', {
        className: e.isModal ? 'members_list_row--pendingRequestDividerModal--tjuPV members_list_row--pendingRequestDivider--djtil' : 'members_list_row--pendingRequestDivider--djtil'
      })]
    }) : jsx(Fragment, {});
  }
  return jsx(Fragment, {});
}
function ed(e) {
  let {
    rolesByUserId,
    lgDataLoaded,
    lgData
  } = function (e) {
    let t = useSubscription(TeamMembersModalView, {
      teamId: e
    });
    let a = t.transform(e => e.team?.roles.reduce((t, a) => {
      let s = !!e.team?.studentTeamAt;
      t[ec({
        id: a.id,
        user_id: a.userId,
        pending: a.pending
      })] = function (e, t) {
        let a = {
          id: t.id,
          created_at: t.createdAt.toISOString(),
          updated_at: t.updatedAt.toISOString(),
          level: t.level,
          resource_type: FResourceCategoryType.TEAM,
          resource_id_or_key: t.resourceId,
          hasValidEduGracePeriod: !!t.eduGracePeriod?.isValid,
          isStudent: !!t.user?.studentValidatedAt,
          isStudentTeam: e
        };
        return t.pending ? {
          ...a,
          user_id: null,
          pending: !0,
          pendingEmail: t.pendingEmail,
          user: {
            id: t.user?.id ?? '',
            email: t.pendingEmail ?? void 0
          }
        } : {
          ...a,
          user_id: t.userId,
          pending: !1,
          pendingEmail: null,
          user: {
            id: t.user?.id ?? '',
            email: t.user?.email ?? '',
            img_url: t.user?.imgUrl ?? '',
            handle: t.user?.handle ?? ''
          }
        };
      }(s, a);
      return t;
    }, {}));
    return {
      rolesByUserId: a.data ?? {},
      lgData: a.data,
      lgDataLoaded: t.status === 'loaded'
    };
  }(e.teamId);
  let i = useSelector(t => t.teamMembersByTeamId[e.teamId] || {});
  let l = useSubscription(TeamById, {
    teamId: e.teamId
  });
  let o = e => {
    if (!lgDataLoaded || !lgData) return null;
    let t = ec(e);
    if (!lgData[t]) return !1;
    let s = lgData[t];
    return !!s.isStudentTeam && s.level !== AccessLevelEnum.VIEWER && !e.pending && !s.level && !(s.isStudent || lgData[t].hasValidEduGracePeriod);
  };
  let d = e => {
    if (!lgDataLoaded || !lgData) return null;
    let t = ec(e);
    return lgData[t]?.user?.email ?? null;
  };
  let u = (() => {
    let e = {};
    Object.values(i).forEach(t => {
      t.team_role && (e[t.team_role.id] = t);
    });
    return e;
  })();
  let v = (() => {
    let e = [];
    let a = {};
    let s = new Set();
    Object.values(rolesByUserId).forEach(t => {
      if (t.pending) {
        e.push(t);
        return;
      }
      a[t.user.id] = t;
      s.add(t.user?.email);
    });
    let n = e.filter(e => !s.has(e.user?.email));
    return Object.values(a).concat(...n).sort((e, t) => !0 === e.pending && !0 === t.pending ? e.user.email.toLowerCase() < t.user.email.toLowerCase() ? -1 : 1 : !0 === e.pending ? 1 : !0 === t.pending ? -1 : e.user.handle.toLowerCase() < t.user.handle.toLowerCase() ? -1 : 1);
  })();
  let b = !v.some(e => e.level === AccessLevelEnum.OWNER || e.level === AccessLevelEnum.ADMIN);
  let y = l.status === 'loading';
  return (useLatencyLogger({
    isReady: l.status === 'loaded',
    label: adminPermissionConfig.MembersListRow.teamV2,
    variant: 'new'
  }), v.length === 0) ? jsx('div', {
    children: renderI18nText('file_browser.team.no_members')
  }) : y || !lgDataLoaded ? jsx('div', {
    className: 'members_list--loadingSpinnerContainer--2hZae',
    children: jsx(_$$k, {})
  }) : jsxs('div', {
    children: [jsx(eo, {
      teamId: e.teamId,
      isModal: !0
    }), v.map(t => jsx('div', {
      className: 'members_list--memberRowForModal--g9CYe',
      children: jsx(ea, {
        teamId: e.teamId,
        teamMember: u[t.id],
        teamRole: t,
        teamIsOrphaned: b,
        isModal: !0,
        teamLgResult: l,
        isEduRestrictedLg: o(t),
        emailLg: d(t)
      }, `team-role-${t.id}`)
    }, t.id))]
  });
}
function ec(e) {
  return e.pending ? `pending-${e.id}` : e.user_id ?? '';
}
function eI(e) {
  return jsxs('div', {
    className: 'mobile_settings_tool_bar--fixedToolbar--DJIrS',
    style: {
      width: e.width
    },
    children: [jsx('div', {
      className: 'mobile_settings_tool_bar--tabContainer--yD8Zf',
      children: e.tabs
    }), jsx(s_, {
      dispatch: e.dispatch,
      customStyle: {
        position: 'static',
        marginTop: '8px',
        marginRight: '15px',
        marginLeft: 'auto'
      }
    })]
  });
}
function eN(e) {
  let t = useSelector(e => e.roles || {});
  return hasValidSubscription(e.team) && e.canAdmin ? jsx('div', {
    className: _$$s.font12.lh16.pt8.pr32.pb16.pl4.colorText.$,
    children: renderI18nText('file_browser.team_settings_modal.paid_status_explanation_no_link')
  }) : jsx('div', {
    className: 'team_settings_modal--membersHeader--Ac-UZ',
    children: jsxs(_$$E, {
      color: 'secondary',
      fontSize: 12,
      children: [e.team.name, renderI18nText('file_browser.team_settings_modal.members_tab_header', {
        numMembers: pG(t, e.team.id).length
      })]
    })
  });
}
let tn = {
  spinner: 'ai-settings-spinner',
  dataSharingEnabledSwitch: 'ai-settings-ai-enabled-switch',
  aiEnabledSwitch: 'ai-settings-data-sharing-enabled-switch',
  aiEnabledButton: 'ai-settings-ai-enabled-button'
};
let tr = registerModal(() => {
  let e = useDispatch();
  let t = cD();
  let a = useSubscription(TeamAdminSettingsPage, {
    teamId: t
  });
  let n = _$$oA(a.data?.team);
  let i = !n;
  let l = !!n?.studentTeamAt && !n?.isAiDataSharingEnabled;
  let o = !!n?.aiFeaturesDisabledAt;
  let u = getFeatureFlags().ai_ga;
  let m = async a => {
    try {
      await _$$$.updateAiFeaturesDisabled({
        teamId: t,
        aiFeaturesDisabled: !a
      });
      let s = a ? getI18nString('admin_settings.ai.enable_success') : getI18nString('admin_settings.ai.disable_success');
      e(_$$s2.flash(s));
    } catch {
      e(_$$s2.error(getI18nString('file_browser.file_browser_actions.team_update_error')));
    }
  };
  let p = async a => {
    try {
      await _$$$.updateAiDataSharing({
        teamId: t,
        enabled: a
      });
      trackEventAnalytics('ai_data_sharing_toggled', {
        team_id: t,
        enabled: a
      });
      e(_$$s2.flash(getI18nString('admin_settings.ai.data_sharing.update_success')));
    } catch (t) {
      e(_$$s2.error(getI18nString('admin_settings.ai.data_sharing.update_error')));
    }
  };
  let g = null;
  u ? o && (g = jsx(AutoLayout, {
    children: jsx(_$$p2, {
      onEnable: () => m(!0),
      planId: t,
      planType: FOrganizationLevelType.TEAM,
      testId: tn.aiEnabledButton
    })
  })) : g = jsxs(AutoLayout, {
    horizontalAlignItems: 'space-between',
    verticalAlignItems: 'start',
    children: [jsxs(AutoLayout, {
      direction: 'vertical',
      spacing: 4,
      children: [jsx(_$$E, {
        fontWeight: 'medium',
        children: renderI18nText('admin_settings.ai.features_toggle.label')
      }), jsx(_$$E, {
        color: 'secondary',
        children: renderI18nText('admin_settings.ai.features_toggle.description.team', {
          learnMoreLink: jsx(CY, {
            href: _$$d3.aiFeatures,
            target: '_blank',
            trusted: !0,
            children: jsx(_$$E, {
              children: renderI18nText('general.learn_more')
            })
          })
        })
      })]
    }), jsx(_$$d2, {
      label: jsx(Fragment, {}),
      checked: !n?.aiFeaturesDisabledAt,
      onChange: m,
      htmlAttributes: {
        'data-testid': tn.aiEnabledSwitch
      }
    })]
  });
  return jsx(OJ, {
    title: jsxs(AutoLayout, {
      width: 'hug-contents',
      padding: {
        left: 8
      },
      children: [jsx(_$$E, {
        fontWeight: 'medium',
        children: renderI18nText('admin_settings.ai.section_title')
      }), !u && jsx(Ex, {
        color: zE.BRAND,
        text: getI18nString('general.beta')
      })]
    }),
    onClose: () => {
      e(popModalStack());
    },
    fixedTop: !0,
    children: i ? jsx(AutoLayout, {
      padding: 64,
      children: jsx(qc, {
        testId: tn.spinner
      })
    }) : jsxs(AutoLayout, {
      direction: 'vertical',
      padding: {
        top: 20,
        left: 16,
        right: 16,
        bottom: 16
      },
      spacing: 16,
      children: [g, jsxs(AutoLayout, {
        horizontalAlignItems: 'space-between',
        verticalAlignItems: 'start',
        children: [jsxs(AutoLayout, {
          direction: 'vertical',
          spacing: 4,
          children: [jsx(_$$E, {
            fontWeight: 'medium',
            children: renderI18nText('admin_settings.ai.data_sharing.label')
          }), jsx(_$$E, {
            color: 'secondary',
            children: renderI18nText('admin_settings.ai.data_sharing.description.team', {
              learnMoreLink: jsx(CY, {
                href: _$$d3.aiDataSharing,
                target: '_blank',
                trusted: !0,
                children: jsx(_$$E, {
                  children: renderI18nText('general.learn_more')
                })
              })
            })
          })]
        }), jsx(_$$d2, {
          label: jsx(Fragment, {}),
          checked: n.isAiDataSharingEnabled,
          onChange: p,
          disabled: l,
          htmlAttributes: {
            'data-testid': tn.dataSharingEnabledSwitch,
            'data-tooltip': l ? getI18nString('admin_settings.ai.data_sharing.disabled_for_student_teams') : void 0,
            'data-tooltip-type': Ib.TEXT,
            'data-tooltip-show-above': !0,
            'data-tooltip-timeout-delay': 50,
            'data-tooltip-tip-align-right': !0
          }
        })]
      })]
    })
  });
}, 'TEAM_AI_SETTINGS_MODAL');
let ti = 'settings_view--blueLink--F3vR6 blue_link--blueLink--9rlnd';
let tl = 'settings_view--redLink--LDeOm blue_link--blueLink--9rlnd';
let to = 'settings_view--section--jKGaH';
let td = 'settings_view--sectionHeader--BTMnl text--fontPos13--xW8hS text--_fontBase--QdLsd';
let tc = 'settings_view--upgradeBanner--RCQfq';
let tu = 'settings_view--upgrageBannerIcon--yMYzd';
let tm = 'settings_view--upgradeBannerBody--n82sx';
let t_ = 'settings_view--blueLinkForBanner--b0V8l settings_view--blueLink--F3vR6 blue_link--blueLink--9rlnd';
let tp = 'settings_view--accessIcon--7RIy3';
function tf(e) {
  let t = useDispatch();
  let a = DP();
  let i = e.team;
  let l = useSelector(e => getPermissionsState(e));
  let o = i.org_id ? l.orgById[i.org_id] : null;
  let d = useMemo(() => ({
    teamId: i.id,
    orgId: i.org_id,
    canAdmin: canAdminTeam(i.id, l),
    description: i.description || '',
    communityProfileHandle: i.community_profile_handle,
    communityProfileId: i.community_profile_id
  }), [i, l]);
  let [u] = IT(TeamSettings({
    teamId: e.team.id
  }));
  let [m] = handleSuspenseRetainRelease(u);
  let p = useMemo(() => {
    if (m.status !== 'loaded' || !m.data.team) return null;
    let t = m.data.team;
    return {
      teamId: e.teamId,
      orgId: t?.orgId,
      canAdmin: t?.canAdmin,
      description: t?.description || '',
      communityProfileId: t?.communityProfile?.id || null,
      communityProfileHandle: t?.communityProfile?.profileHandle ?? null
    };
  }, [m, e.teamId]);
  let f = useShadowRead({
    oldValue: d,
    newValue: p,
    label: adminPermissionConfig.TeamSettingsView.teamInfo,
    enableFullRead: DQ(Pw.GROUP_7),
    contextArgs: {
      teamId: e.teamId
    }
  });
  let v = useMemo(() => {
    if (m.status !== 'loaded' || !m.data.team || !m.data.team.currentPlanUser) return null;
    let e = m.data.team.currentPlanUser;
    let t = m.data.team.plan.tier;
    return {
      isProOrStudentTeam: t === FPlanNameType.PRO || t === FPlanNameType.STUDENT,
      isStudentTeam: t === FPlanNameType.STUDENT,
      canAdminOrg: !!e && checkOrgUserPermission(e, FMemberRoleType.ADMIN),
      isOrgGuest: e?.key.type === FUserTypeClassification.ORG_USER && e?.permission === FMemberRoleType.GUEST
    };
  }, [m]);
  let b = !v?.isOrgGuest;
  let y = v?.canAdminOrg || f?.canAdmin && !f?.orgId;
  let j = !!useSelector(e => _$$p(e));
  let A = X8(!!m.data?.team?.canEdit, isOrgOrEnterprisePlan(m.data?.team?.plan ?? null));
  let w = e.billing.summary.annual_subscription;
  let N = e.billing.summary.monthly_subscription;
  let R = !!w && !w.canceled_at;
  let C = !!N && !N.canceled_at;
  let k = !f?.orgId && !v?.isProOrStudentTeam && f?.canAdmin;
  let M = useMemo(() => {
    if (m.status === 'loaded' && m.data) return m.data.team?.workspace;
  }, [m]);
  let L = m.data?.team && getResourceDataOrFallback(m.data.team)?.hasActiveProjectConnection;
  let P = useSubscription(PendingAssetTransferRequestByTeam, {
    teamId: i.id
  });
  let D = getFeatureFlags().ai_ga;
  let F = P.data?.team?.pendingAssetTransferRequest;
  let B = F && {
    id: F.id,
    source_user_email: F.sourceUser?.email,
    destination_user_email: F.destinationUser?.email,
    is_transfer_copy: F.isTransferCopy
  } || void 0;
  if (m.status !== 'loaded') return null;
  let U = () => {
    if (!v?.isProOrStudentTeam) {
      t(showModalHandler({
        type: _$$V,
        data: {
          teamId: f?.teamId,
          upsellSource: UpsellModalType.TEAM_SETTINGS_MODAL,
          openCheckoutInNewTab: !0,
          onDone: () => {
            t(hideSpecificModal({
              type: 'TEAM_SETTINGS_MODAL'
            }));
          }
        }
      }));
      return;
    }
    t(Bq({
      openInNewTab: !0,
      upsellSource: UpsellModalType.TEAM_SETTINGS_VIEW
    }));
  };
  let G = e => {
    t(showModalHandler({
      type: _$$H,
      data: {
        team: i,
        subscriptionStatus: e
      }
    }));
  };
  let V = e => e.sharing_audience_control ? e.sharing_audience_control : e.org_access ? e.org_access === FAccessLevelType.PUBLIC && e.default_permission === 'edit' ? FPermissionLevelType.ORG_EDIT : e.org_access === FAccessLevelType.PUBLIC ? FPermissionLevelType.ORG_VIEW : void 0 : FPermissionLevelType.INVITE_ONLY;
  return jsxs('div', {
    children: [jsxs('div', {
      children: [jsxs('div', {
        className: to,
        children: [jsx('div', {
          className: td,
          children: renderI18nText('file_browser.team_settings.team_name')
        }), jsx('div', {
          children: i.name
        }), f?.canAdmin && jsx('div', {
          children: jsx('button', {
            className: ti,
            onClick: () => {
              t(showModalHandler({
                type: _$$h2(),
                data: {
                  team: i
                }
              }));
            },
            children: renderI18nText('file_browser.team_settings.change_name')
          })
        })]
      }), (f?.canAdmin || f?.description) && jsxs('div', {
        className: to,
        children: [jsx('div', {
          className: td,
          children: renderI18nText('file_browser.about')
        }), jsx('div', {
          children: f?.description
        }), f?.canAdmin && jsx('div', {
          children: jsx('button', {
            className: ti,
            onClick: () => {
              t(showModalHandler({
                type: _$$r(),
                data: {
                  team: i
                }
              }));
            },
            children: f?.description ? renderI18nText('file_browser.team.change_description') : renderI18nText('file_browser.team.add_a_description')
          })
        })]
      })]
    }), f?.canAdmin && i.org_access !== FAccessLevelType.SECRET && jsxs('div', {
      className: to,
      children: [jsx('div', {
        className: td,
        children: renderI18nText('file_browser.team_settings_modal.community_profile')
      }), jsx('div', {
        children: f?.communityProfileHandle ? getI18nString('file_browser.team_settings.team_community_handle', {
          communityProfileHandle: f?.communityProfileHandle
        }) : ''
      }), jsx('div', {
        children: jsx('button', {
          className: ti,
          onClick: () => {
            t(showModalHandler({
              type: S3,
              data: {
                teamId: f?.teamId,
                profileId: f?.communityProfileId || '',
                profileHandle: f?.communityProfileHandle || ''
              }
            }));
          },
          children: f?.communityProfileHandle ? getI18nString('file_browser.team_settings.change_profile_handle') : getI18nString('file_browser.team_settings.set_profile_handle')
        })
      }), f?.communityProfileHandle && jsx('div', {
        children: jsx('button', {
          className: ti,
          onClick: () => {
            f?.communityProfileId && f?.communityProfileHandle && t(showModalHandler({
              type: _$$M,
              data: {
                dispatch: t,
                profileId: f?.communityProfileId,
                handle: f?.communityProfileHandle
              }
            }));
          },
          children: renderI18nText('file_browser.team_settings.delete_profile')
        })
      }), f?.communityProfileHandle && f?.orgId && jsx('div', {
        children: jsx('button', {
          className: ti,
          onClick: () => {
            f?.communityProfileId && t(showModalHandler({
              type: _$$J,
              data: {
                profileId: f?.communityProfileId || '',
                profileHandle: f?.communityProfileHandle || '',
                emptyStateText: getI18nString('file_browser.team_settings.community_restricted_handles', {
                  communityProfileHandle: f?.communityProfileHandle || ''
                })
              }
            }));
          },
          children: renderI18nText('file_browser.team_settings.manage_restricted_commenters')
        })
      })]
    }), jsxs('div', {
      className: to,
      children: [jsx('div', {
        className: td,
        children: f?.orgId ? renderI18nText('file_browser.team_settings.shared') : renderI18nText('file_browser.team_settings_modal.libraries')
      }), jsx('div', {
        children: jsx('button', {
          className: ti,
          onClick: () => {
            t(showModalHandler({
              type: _$$T,
              data: {
                teamId: f?.teamId,
                entrypoint: r6.TEAMS_SETTINGS_VIEW_TEAM_LIBRARIES
              }
            }));
          },
          children: renderI18nText('file_browser.team_settings.view_team_libraries')
        })
      }), j && jsx('div', {
        children: jsx('button', {
          className: ti,
          onClick: () => {
            t(showModalHandler({
              type: lN,
              data: {
                entrypoint: r6.TEAMS_SETTINGS_VIEW_TEAM_FONTS
              }
            }));
          },
          children: renderI18nText('file_browser.team_settings.view_team_fonts')
        })
      }), A && jsx('div', {
        children: jsx('button', {
          className: ti,
          onClick: () => {
            t(showModalHandler({
              type: _$$j,
              data: {
                showMakeDefaultButton: !0,
                entryPoint: 'team settings',
                theme: a === 'dark' ? 'dark' : 'light'
              }
            }));
          },
          children: renderI18nText('file_browser.team_settings.view_team_figjam_palettes')
        })
      })]
    }), f?.orgId != null && i.org_access && jsxs('div', {
      className: to,
      children: [jsx('div', {
        className: td,
        children: renderI18nText('file_browser.settings.access')
      }), jsxs('div', {
        children: [(() => {
          let e = V(i);
          let t = M || null;
          let a = jsx(_$$B, {
            className: tp,
            svg: _$$A6
          });
          (e === FPermissionLevelType.ORG_EDIT || e === FPermissionLevelType.ORG_VIEW) && o ? a = jsx('div', {
            className: tp,
            children: jsx(_$$B, {
              svg: _$$A7
            })
          }) : (e === FPermissionLevelType.WORKSPACE_EDIT || e === FPermissionLevelType.WORKSPACE_VIEW) && (a = jsx('div', {
            className: tp,
            children: t && jsx(z6, {
              entity: t,
              size: 20
            })
          }));
          return jsxs('div', {
            className: 'settings_view--accessDescription--qxQcN',
            children: [a, jsx('div', {
              children: wO(FResourceCategoryType.TEAM, o, t, e)
            })]
          });
        })(), f?.canAdmin && o && jsx('span', {
          role: 'button',
          tabIndex: 0,
          className: 'settings_view--editAccessLink--HOsAC modal--blueLink--9GcJu blue_link--blueLink--9rlnd',
          onClick: () => {
            t(showModalHandler({
              type: dW,
              data: {
                team: i,
                goBack: () => {
                  t(popModalStack());
                }
              }
            }));
          },
          children: renderI18nText('team_view.team_permissions_modal.change')
        })]
      }), !f?.canAdmin && jsx('div', {
        children: jsx(_$$E, {
          color: 'secondary',
          children: renderI18nText('file_browser.team_settings.team_admins_and_owners_can_change')
        })
      })]
    }), k && jsxs('div', {
      className: to,
      children: [jsxs('div', {
        className: td,
        children: [renderI18nText('admin_settings.ai.section_title'), !D && jsxs(Fragment, {
          children: [jsx('span', {
            className: _$$s.inlineFlex.ml8.$,
            children: jsx(Ex, {
              color: zE.BRAND,
              text: getI18nString('general.beta')
            })
          }), jsx(_$$B2, {
            'data-tooltip-type': Ib.TEXT,
            'data-tooltip': getI18nString('admin_settings.ai.section_title.free_in_beta'),
            'data-tooltip-timeout-delay': 50
          })]
        })]
      }), jsx('div', {
        children: jsx('button', {
          className: ti,
          onClick: () => {
            t(showModalHandler({
              type: tr
            }));
          },
          children: renderI18nText('admin_settings.ai.manage_settings_link')
        })
      })]
    }), v?.isProOrStudentTeam && !v?.isStudentTeam && f?.canAdmin && jsxs('div', {
      className: to,
      children: [jsx('div', {
        className: td,
        children: renderI18nText('settings_table.plan_and_billing')
      }), jsx('div', {
        children: renderI18nText('file_browser.team_settings_modal.admin_console_billing_nudge')
      }), jsx('button', {
        className: ti,
        onClick: () => {
          t(sf({
            view: 'teamAdminConsole',
            teamId: e.team.id,
            teamAdminConsoleViewTab: DashboardSections.BILLING
          }));
          t(popModalStack());
        },
        children: renderI18nText('file_browser.team_settings_modal.admin_console_billing_button')
      })]
    }), b && jsxs('div', {
      className: to,
      children: [jsx('div', {
        className: td,
        children: renderI18nText('file_browser.team_settings.transfer')
      }), jsxs('div', {
        children: [B && jsxs(Fragment, {
          children: [jsx('div', {
            children: renderI18nText('file_browser.team_settings.source_user_sent_destination_user_a_request_to_transfer_this_team', {
              sourceUserEmail: B.source_user_email,
              destinationUserEmail: B.destination_user_email
            })
          }), y && jsx('div', {
            children: jsx('button', {
              className: tl,
              onClick: () => {
                B && t(showModalHandler({
                  type: _$$d(),
                  data: {
                    pending: B,
                    canRevokeProjectTransfer: !0,
                    isTransferTeam: !0
                  }
                }));
              },
              children: renderI18nText('file_browser.folder_settings.revoke')
            })
          })]
        }), !B && y && (L ? renderI18nText('file_browser.team_settings.transfer_teams_without_active_connected_projects') : renderI18nText('file_browser.team_settings.transfer_team_link_to_an_external_organization', {
          transferTeamLink: jsx('button', {
            className: ti,
            onClick: () => {
              t(showModalHandler({
                type: Lg(),
                data: {
                  teamId: i.id,
                  entryPoint: Lq.ORG_TEAM_SETTINGS
                }
              }));
            },
            children: renderI18nText('file_browser.team_settings.transfer_team')
          })
        })), !B && !y && jsxs(Fragment, {
          children: [jsx('div', {
            children: renderI18nText('file_browser.team_settings.only_org_name_admins_can_select_an_external_organization_to_manage_this_team', {
              orgName: o?.name
            })
          }), jsx('div', {
            children: jsx('button', {
              className: ti,
              onClick: () => {
                t(showModalHandler({
                  type: _$$Y(),
                  data: {
                    planId: i.org_id || i.id,
                    planType: i.org_id ? FOrganizationLevelType.ORG : FOrganizationLevelType.TEAM,
                    planName: i.name,
                    entryPoint: Lq.ORG_TEAM_SETTINGS,
                    resourceType: 'team',
                    resourceIdOrKey: i.id
                  }
                }));
              },
              children: renderI18nText('file_browser.team_settings.see_who_can_help_with_transfers')
            })
          })]
        })]
      })]
    }), !v?.isProOrStudentTeam && !f?.orgId && f?.canAdmin && jsxs(Fragment, {
      children: [jsxs('div', {
        className: to,
        children: [jsx('div', {
          className: td,
          children: renderI18nText('team_view.settings_table.delete_team')
        }), jsx('div', {
          children: renderI18nText('team_view.settings_table.delete_team_description')
        }), jsx('div', {
          children: jsx('button', {
            className: tl,
            onClick: () => G(R || C),
            children: renderI18nText('file_browser.team_settings.delete_team')
          })
        })]
      }), jsxs('div', {
        className: tc,
        children: [jsx(_$$B, {
          className: tu,
          svg: _$$A5
        }), jsxs('div', {
          className: tm,
          children: [jsx('strong', {
            children: renderI18nText('upgrade.ready_to_go_beyond_free_plan')
          }), jsxs('div', {
            children: [renderI18nText('upgrade.more_features'), jsx($z, {
              className: t_,
              onClick: U,
              trackingProperties: {
                trackingDescriptor: _$$c.UPGRADE,
                upsellSource: UpsellModalType.TEAM_SETTINGS_MODAL
              },
              children: renderI18nText('upgrade.view_plans')
            })]
          })]
        })]
      })]
    }), v?.isProOrStudentTeam && f?.canAdmin && jsxs('div', {
      className: tc,
      children: [jsx(_$$B, {
        className: tu,
        svg: _$$A5
      }), jsx('div', {
        className: tm,
        children: jsxs('div', {
          children: [renderI18nText('file_browser.team_settings_modal.upgrade_to_organization'), jsx($z, {
            className: t_,
            onClick: U,
            trackingProperties: {
              trackingDescriptor: _$$c.UPGRADE_TO_ORGANIZATION,
              upsellSource: UpsellModalType.TEAM_SETTINGS_MODAL
            },
            children: renderI18nText('file_browser.team_settings_modal.upgrade')
          })]
        })
      })]
    })]
  });
}
let tb = rw();
export var $$ty1 = (e => (e.SETTINGS = 'SETTINGS', e.MEMBERS = 'MEMBERS', e))($$ty1 || {});
let tj = createOptimistThunk(async (e, {
  teamId: t,
  canViewTeam: a
}) => {
  await kb.promise;
  t && a && xN(t, e);
});
function tI(e) {
  let t = {
    MEMBERS: getI18nString('file_browser.team_settings_modal.members_tab'),
    SETTINGS: getI18nString('file_browser.team_settings_modal.settings_tab')
  };
  let a = useRef(null);
  let {
    setToolbarWidth
  } = e;
  useEffect(() => {
    if (a) {
      let e = a.current?.offsetWidth;
      e && setToolbarWidth(e);
    }
  }, [setToolbarWidth]);
  let l = e.team.org_id;
  let d = l ? [jsx('div', {
    className: 'team_settings_modal--settingsHeader--tGppe',
    children: t.SETTINGS
  }, 'SETTINGS')] : filterNotNullish(Object.entries(t).map(([t, a]) => {
    if (t === 'SETTINGS' && e.canEditTeam || t === 'MEMBERS') {
      return jsx(tb, {
        tab: t,
        mobileNavTabTitle: a,
        selectedTab: e.selectedTab,
        onClick: () => e.setTab(t),
        children: a
      }, t);
    }
  }));
  return e.isMobile ? jsx(eI, {
    tabs: d,
    dispatch: e.dispatch,
    width: '100vw'
  }) : jsxs('div', {
    className: 'team_settings_modal--settingsModalToolbarFixedContainer--oecTk',
    style: {
      minWidth: e.contentWidth
    },
    ref: a,
    children: [jsx(_$$i, {
      containerClassName: `${l ? 'team_settings_modal--toolBarSettingsOnly--281il team_settings_modal--toolBarContainer--O-2hM' : 'team_settings_modal--toolBarContainerFullWidth--XliLu team_settings_modal--toolBarContainer--O-2hM'} team_settings_modal--borderRadius--NeGkl`,
      tabs: d
    }), jsx(s_, {
      dispatch: e.dispatch,
      className: l ? 'team_settings_modal--settingsOnlyCloseButton--r1V-e' : 'team_settings_modal--settingsCloseButton--nkdXd',
      onClose: () => tS(e.dispatch, e.team, e.viewOnClose)
    })]
  });
}
let tE = 'TEAM_SETTINGS_MODAL';
let tS = (e, t, a) => {
  e(sf(a));
};
let $$tT0 = registerModal(e => {
  let t = useDispatch();
  let a = useRef(null);
  let [i, o] = useState(-1);
  let c = _$$h.useTrackingContext({
    trigger: UpsellModalType.TEAM_SETTINGS_MODAL
  });
  let {
    canAdmin,
    canEdit,
    canView,
    entryView
  } = e;
  let h = e.teamSettingsProps;
  let x = useSelector(e => e.teams[h.team.id]);
  let f = useSelector(e => e.avatarEditorState);
  if (useEffect(() => {
    t(um());
  }, [t]), useEffect(() => {
    x && t(tj({
      teamId: x.id,
      canViewTeam: canView ?? !1
    }));
  }, [canView, t, x]), !x) {
    return null;
  }
  let v = isMobileUA;
  let b = v ? window.innerWidth : Math.min(0.7 * window.innerWidth, 650);
  let y = v ? window.innerWidth : Math.max(b, i);
  let j = canAdmin ? jsx(FL, {
    entity: x,
    entityType: ck.TEAM,
    avatarEditorState: f,
    size: 80,
    dispatch: t,
    avatarSvg: _$$A8,
    svgSizeRatio: 0.6
  }) : jsx(nl, {
    team: x,
    size: 80,
    avatarSvg: _$$A8,
    svgSizeRatio: 0.6
  });
  return jsx(fu, {
    name: 'Team Settings Modal',
    properties: {
      teamId: x.id,
      ...c
    },
    children: jsxs(utilityNoop, {
      popStack: !0,
      size: y,
      height: v ? window.innerHeight : 0.8 * window.innerHeight,
      className: v ? 'team_settings_modal--fullScreenModal--tXKWs team_settings_modal--modal--MGDMF modal--modal--fXC8G modal--modalShadow--d-rJf modal--modalBare--AlP7E' : 'team_settings_modal--modalNoPadding--G-piu team_settings_modal--modal--MGDMF modal--modal--fXC8G modal--modalShadow--d-rJf modal--modalBare--AlP7E',
      modalRef: a,
      onHide: () => tS(t, x, entryView),
      children: [jsx(tI, {
        selectedTab: e.tab,
        setTab: e => {
          t(updateModal({
            type: tE,
            data: {
              tab: e,
              canAdmin,
              canEdit,
              canView,
              teamSettingsProps: h,
              entryView
            }
          }));
          let s = entryView.view === 'team' ? {
            view: 'team',
            teamId: x.id,
            teamViewTab: e === 'SETTINGS' ? NavigationRoutes.SETTINGS : NavigationRoutes.MEMBERS
          } : entryView;
          t(sf(s));
          let n = a.current;
          n && (n.scrollTop = 0);
        },
        dispatch: t,
        isMobile: v,
        contentWidth: b,
        setToolbarWidth: o,
        team: x,
        viewOnClose: entryView,
        canEditTeam: canEdit ?? !1
      }), jsxs('div', {
        className: 'team_settings_modal--modalBody--NruoE',
        children: [jsx('div', {
          className: 'team_settings_modal--avatarContainer--xDqae',
          children: j
        }), e.tab === 'SETTINGS' && jsx(fu, {
          name: 'Team Settings',
          children: jsx(Suspense, {
            fallback: jsx('div', {
              className: 'x1bpp3o7',
              children: jsx(kt, {})
            }),
            children: jsx('div', {
              className: 'team_settings_modal--settingsContainer--rJ9jC',
              children: jsx(tf, {
                teamId: h.team.id,
                team: x,
                billing: h.billing
              })
            })
          })
        }), e.tab === 'MEMBERS' && jsxs('div', {
          className: 'team_settings_modal--membersContainer--dci-C',
          children: [jsx(eN, {
            team: x,
            canAdmin
          }), jsx(ed, {
            teamId: x.id
          })]
        })]
      })]
    })
  });
}, tE, ModalSupportsBackground.YES);
export const ut = $$tT0;
export const am = $$ty1;