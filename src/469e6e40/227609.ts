import E from 'classnames';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import _require from '../0c62c2fd/322783';
import _require2 from '../0c62c2fd/586544';
import { l as _$$l, m as _$$m } from '../469e6e40/61410';
import { E as _$$E4 } from '../469e6e40/82885';
import { k as _$$k5 } from '../469e6e40/115523';
import { d2, Ok, UW, Vc } from '../469e6e40/142718';
import { E as _$$E2 } from '../469e6e40/190466';
import { F as _$$F } from '../469e6e40/308608';
import { bX, Kz, T_, x8 } from '../469e6e40/336248';
import ao from '../469e6e40/341785';
import { p as _$$p } from '../469e6e40/348454';
import { i as _$$i2 } from '../469e6e40/375056';
import { p as _$$p4 } from '../469e6e40/470485';
import { yE } from '../469e6e40/471025';
import { Js, yG } from '../469e6e40/488538';
import { M as _$$M } from '../469e6e40/490222';
import { dG, Gb, Hy, kL, Mc, nf, nM, r2, U0 } from '../469e6e40/504232';
import { r as _$$r } from '../469e6e40/505264';
import { E as _$$E3 } from '../469e6e40/510393';
import { u as _$$u } from '../469e6e40/510414';
import { i as _$$i } from '../469e6e40/549061';
import { J as _$$J } from '../469e6e40/564885';
import { Dg } from '../469e6e40/615314';
import { S as _$$S } from '../469e6e40/679996';
import { h as _$$h2 } from '../469e6e40/689859';
import { d as _$$d } from '../469e6e40/744116';
import { _ as _$$_, Y as _$$Y2 } from '../469e6e40/781142';
import { I as _$$I } from '../469e6e40/815692';
import { Q as _$$Q2 } from '../469e6e40/825225';
import { Sn, wr } from '../469e6e40/875985';
import { S as _$$S4 } from '../469e6e40/885592';
import { k as _$$k2 } from '../469e6e40/952112';
import { q as _$$q } from '../469e6e40/977739';
import { Q as _$$Q } from '../905/11928';
import { isLoaded, isLoading } from '../905/18797';
import { createModalConfig, registerModal } from '../905/102752';
import { KindEnum } from '../905/129884';
import { t as _$$t2 } from '../905/150656';
import { showModalHandler } from '../905/156213';
import { ServiceCategories as _$$e } from '../905/165054';
import { UpsellModalType } from '../905/165519';
import { b as _$$b3 } from '../905/173822';
import { h as _$$h } from '../905/207101';
import { V as _$$V } from '../905/223767';
import { Cj } from '../905/270084';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { R as _$$R } from '../905/304671';
import { collaboratorSet } from '../905/332483';
import { createOptimistThunk } from '../905/350402';
import { $S } from '../905/351260';
import { UpgradeAction } from '../905/370443';
import { selectCurrentUser } from '../905/372672';
import { b as _$$b5 } from '../905/388233';
import { r as _$$r2 } from '../905/398386';
import { s as _$$s2 } from '../905/411990';
import { rq } from '../905/425180';
import { Link } from '../905/438674';
import { k as _$$k3 } from '../905/443820';
import { analyticsEventManager, trackEventAnalytics } from '../905/449184';
import { AutoLayout } from '../905/470281';
import { X as _$$X } from '../905/482718';
import { ProductAccessTypeEnum } from '../905/513035';
import { Dd } from '../905/519092';
import { Button } from '../905/521428';
import { BillingSections, DashboardSections, MemberSections } from '../905/548208';
import { AccessLevelEnum } from '../905/557142';
import { mL, UC } from '../905/563637';
import { FlashActions } from '../905/573154';
import { z as _$$z } from '../905/595507';
import { getFeatureFlags } from '../905/601108';
import { e as _$$e3 } from '../905/621515';
import { v as _$$v3 } from '../905/621749';
import { K as _$$K } from '../905/628118';
import { s as _$$s4 } from '../905/645504';
import { adminPermissionConfig } from '../905/654645';
import { A as _$$A3 } from '../905/658244';
import { e0 as _$$e4 } from '../905/696396';
import { IX } from '../905/712921';
import { IT, liveStoreInstance } from '../905/713695';
import { logError } from '../905/714362';
import { gB, getResourceDataOrFallback, Xm } from '../905/723791';
import { yN } from '../905/727738';
import { OrganizationType } from '../905/833838';
import { teamAPIClient } from '../905/834575';
import { tb as _$$tb } from '../905/848667';
import { EL, F_ } from '../905/858282';
import { A as _$$A } from '../905/920142';
import { hideDropdownAction, selectViewAction } from '../905/929976';
import { styleBuilderInstance } from '../905/941192';
import { b as _$$b } from '../905/946806';
import { B as _$$B2 } from '../905/950875';
import { ck } from '../905/952832';
import { V as _$$V2 } from '../905/965990';
import { TextWithTruncation } from '../905/984674';
import { h1 } from '../905/986103';
import { resourceUtils } from '../905/989992';
import { BP, k_, TG } from '../1881/866163';
import { S as _$$S2 } from '../4452/304860';
import { b as _$$b2 } from '../4452/320061';
import { p as _$$p2 } from '../4452/321313';
import { w as _$$w } from '../4452/417339';
import { B as _$$B } from '../4452/541264';
import { v as _$$v } from '../4452/562448';
import { S as _$$S3 } from '../4452/606725';
import { VU, zx } from '../4452/650793';
import { R as _$$R3 } from '../7021/67076';
import { d as _$$d3 } from '../7021/966231';
import { L as _$$L } from '../c5e2cae0/262856';
import { fm } from '../c5e2cae0/453906';
import { cssBuilderInstance } from '../cssbuilder/589278';
import { iq7, L69 } from '../figma_app/6204';
import { II } from '../figma_app/11182';
import { canPerformActionBasedOnLevel } from '../figma_app/12796';
import { fAD } from '../figma_app/27776';
import { TeamAdminSettingsPage, TeamById, UserFlagByName } from '../figma_app/43951';
import { hY, ww } from '../figma_app/80683';
import { G6, j2 } from '../figma_app/84966';
import { isNotNullish } from '../figma_app/95419';
import { ER } from '../figma_app/102449';
import { vn } from '../figma_app/109538';
import { isCutover, LegacyConfigGroups } from '../figma_app/121751';
import { UserFieldEnum } from '../figma_app/135698';
import { b_, Ji, sH } from '../figma_app/149367';
import { FBillingPeriodType, FOrganizationLevelType, FPlanNameType } from '../figma_app/191312';
import { toggleFigmaLibrariesThunk, batchDeleteTeamMembers, fetchTeamMembersThunk, setTeamOptimistThunk } from '../figma_app/240735';
import { N as _$$N2 } from '../figma_app/268271';
import { useSubscription } from '../figma_app/288654';
import { useSeatManagementWidgetProExperiment, useSeatManagementWidgetExperiment } from '../figma_app/297957';
import { y3 } from '../figma_app/307841';
import { getFutureDateOrNull, hasValidSubscription, isTeamInGracePeriod } from '../figma_app/345997';
import { p as _$$p3 } from '../figma_app/353099';
import { z as _$$z2 } from '../figma_app/369596';
import { bE } from '../figma_app/375098';
import { getSelectedView } from '../figma_app/386952';
import { useShadowReadLoaded } from '../figma_app/391338';
import { bv, IU } from '../figma_app/421401';
import { isSelectedTeamAdminConsoleMissingResources } from '../figma_app/422062';
import { useIsStudentPlan, useIsTeamAdminUser, useTeamPlanFeatures, useTeamPlanPublicInfo, useTeamPlanUser } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { Bq, WX } from '../figma_app/482142';
import { R as _$$R2 } from '../figma_app/522082';
import { cE, oi } from '../figma_app/527041';
import { k as _$$k6, Q as _$$Q3 } from '../figma_app/527200';
import { y2 } from '../figma_app/563413';
import { getCurrentTeam, getDashboardSectionLabel, getUserFieldLabel } from '../figma_app/598018';
import { isProrationBillingEnabledForCurrentPlan } from '../figma_app/618031';
import { isTeamEligibleForUpgrade } from '../figma_app/630077';
import { SecureLink } from '../figma_app/637027';
import { g as _$$g } from '../figma_app/638694';
import { bQ, Ti } from '../figma_app/658324';
import { EntityType } from '../figma_app/707808';
import { ProductAccessMap } from '../figma_app/765689';
import { parsePxInt } from '../figma_app/783094';
import { i9 } from '../figma_app/805373';
import { Agb, zRx } from '../figma_app/822011';
import { createEmptyAddress } from '../figma_app/831101';
import { TrackingProvider, TrackedDiv, withTracking } from '../figma_app/831799';
import { ps } from '../figma_app/845611';
import { vS } from '../figma_app/846003';
import { LoadingSpinner } from '../figma_app/858013';
import { MenuSeparator } from '../figma_app/860955';
import { v as _$$v2 } from '../figma_app/899624';
import { getMemberSection, getBillingSection } from '../figma_app/915977';
import { Badge, BadgeColor } from '../figma_app/919079';
import { Be, BO, C8, Hq } from '../figma_app/920435';
import { qH } from '../figma_app/934005';
import { fB, l4, Of } from '../figma_app/982327';
import ar from '../vendor/635';
import z from '../vendor/529640';
let n;
let s;
let C = E;
function $({
  team: e
}) {
  return jsx(_$$F, {
    supportedLicenses: [ProductAccessMap.DESIGN, ProductAccessMap.WHITEBOARD],
    planType: ps.TEAM,
    planId: e.id,
    isOrgAdmin: !1
  });
}
function B({
  team: e
}) {
  let t = useDispatch();
  let a = useSelector(e => e.avatarEditorState);
  let n = useTeamPlanFeatures().unwrapOr(null);
  let s = useSubscription(UserFlagByName, {
    name: 'seen_connected_project_in_admin_dashboard_banner'
  });
  let o = !useMemo(() => s.status !== 'loaded' || !!s.data?.currentUser?.userFlagByName, [s]) && n?.tier === Agb.PRO && getFeatureFlags().fc_initial_onboarding_enabled;
  return jsxs('div', {
    'style': styleBuilderInstance.add({
      width: '780px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }).$,
    'data-testid': 'admin-dashboard-tab',
    'children': [jsxs('div', {
      className: cssBuilderInstance.flex.flexRow.gap24.py24.px16.justifyStart.$,
      children: [jsx(ER, {
        dispatch: t,
        entityType: ck.TEAM,
        entity: e,
        size: 80,
        avatarEditorState: a
      }), jsxs('div', {
        className: cssBuilderInstance.flex.flexColumn.justifyCenter.itemsStart.$,
        children: [jsx(TextWithTruncation, {
          fontWeight: 'regular',
          fontSize: 24,
          children: e.name
        }), e.community_profile_handle && jsxs(TrackedDiv, {
          className: C()(cssBuilderInstance.lh24.font13.cursorPointer.$, 'admin_dashboard_tab--communityHandle--uBlsg'),
          onClick: () => {
            t(selectViewAction({
              view: 'communityHub',
              subView: 'handle',
              handle: e.community_profile_handle
            }));
          },
          children: ['@', e.community_profile_handle]
        })]
      })]
    }), o && jsx(_$$k2, {
      openConnectedProjects: () => {
        t(selectViewAction({
          view: 'teamAdminConsole',
          teamId: n?.key.parentId ?? '',
          teamAdminConsoleViewTab: DashboardSections.CONTENT,
          teamAdminConsoleViewSecondaryTab: MemberSections.CONNECTED_PROJECTS
        }));
      }
    }), jsx('div', {
      className: cssBuilderInstance.mb16.$
    }), e.pro_team && jsx(AutoLayout, {
      spacing: 16,
      direction: 'vertical',
      children: jsx('div', {
        className: cssBuilderInstance.mb16.$,
        children: jsx($, {
          team: e
        })
      })
    })]
  });
}
let V = z;
let eq = registerModal(e => {
  let {
    team
  } = e;
  let {
    id,
    name
  } = t;
  let s = e.members.length;
  let r = e.members.filter(e => e.id).map(e => e.id).join();
  return jsx(TrackingProvider, {
    name: 'Team Remove Members Modal',
    properties: {
      memberCount: s,
      memberIds: r,
      teamId: id
    },
    children: jsx(Dd, {
      destructive: !0,
      title: getI18nString('team_view.remove_members_modal.title', {
        member_count: s,
        member_identity: e.members[0]?.name || e.members[0]?.email
      }),
      confirmText: getI18nString('team_view.remove_members_modal.confirmation'),
      onConfirm: e.onConfirm,
      children: jsx('p', {
        children: e.includesPendingTeamRole ? getI18nString('team_view.remove_members_modal.pending_role_removal_copy', {
          member_count: s,
          user_name_or_email: e.members[0]?.name || e.members[0]?.email,
          team_name: name
        }) : getFeatureFlags().ext_figma_apps ? getI18nString('team_view.remove_members_modal.confirmed_role_removal_copy_v2', {
          member_count: s,
          user_name_or_email: e.members[0]?.name || e.members[0]?.email,
          team_name: name
        }) : getI18nString('team_view.remove_members_modal.confirmed_role_removal_copy', {
          member_count: s,
          user_name_or_email: e.members[0]?.name || e.members[0]?.email,
          team_name: name
        })
      })
    })
  });
}, 'ConfirmMembersRemoveModal');
function eJ() {
  let e = getCurrentTeam();
  let t = e?.pro_team === void 0 ? Xm() : gB(e.pro_team);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: L69,
    priority: _$$N2.DEFAULT_MODAL
  }, [t]);
  _$$h(() => {
    show({
      canShow: e => !0
    });
  });
  return jsx(rq, {
    arrowPosition: F_.BOTTOM,
    description: e?.pro_team ? renderI18nText('admin_settings.people.onboarding.click_on_a_person') : renderI18nText('admin_settings.people.onboarding.click_on_a_person.no_paid_status'),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      ctaTrackingDescriptor: UpgradeAction.GOT_IT,
      type: 'button',
      onClick: complete
    },
    shouldCenterArrow: EL.BEST_EFFORT,
    targetKey: fB,
    title: renderI18nText('admin_settings.people.onboarding.easily_manage_people'),
    trackingContextName: `${Of} flyout tooltip`
  }, 'flyout');
}
let e0 = createOptimistThunk((e, {
  member: t,
  team: s
}) => {
  let {
    id
  } = s;
  e.dispatch(showModalHandler({
    type: n ??= registerModal(_$$A3.createLazyComponent(() => Promise.all([]).then(_require).then(e => e.ConfirmDowngradeEditorsModal), createModalConfig('ConfirmDowngradeEditorsModal')), 'ConfirmDowngradeEditorsModal'),
    data: {
      editors: [t],
      team: s,
      onConfirm: () => {
        let a = t.last_active ? new Date(1e3 * t.last_active).toDateString() : 'never';
        t.id && e.dispatch(_$$z({
          editor: {
            id: t.id,
            img_url: t.img_url,
            name: t.name ?? '',
            email: t.email,
            last_active: a,
            team_id: id
          }
        }));
        e.dispatch(VisualBellActions.enqueue({
          type: 'team-editors-downgraded',
          message: getI18nString('downgrade_member_visual_bell.text', {
            numMembers: t.id ? 1 : 0,
            userName: t.name ?? t.email
          })
        }));
      }
    }
  }));
});
function e1(e) {
  return e.id ? {
    id: e.id,
    img_url: e.img_url,
    name: e.name,
    email: e.email
  } : {
    email: e.email,
    name: void 0
  };
}
function e2(e) {
  return jsx('span', {
    className: e.className || '',
    children: e.cellContent || '\u2013'
  });
}
let e4 = 'TeamMemberFlyout';
let e5 = withTracking(e => {
  let {
    billing,
    dispatch,
    team
  } = e;
  let d = billing.summary.monthly_subscription ? IX.MONTH : IX.YEAR;
  let c = useCallback(e => {
    dispatch(II({
      emailList: e
    }));
  }, [dispatch]);
  let _ = useCallback(e => {
    let t = [];
    let a = [];
    e.forEach(e => {
      !(!e.id || e.team_role?.pending) && e.email && (t.push(e.email), a.push(e.id));
    });
    dispatch(batchDeleteTeamMembers({
      teamId: team.id,
      userIds: a,
      emails: t
    }));
  }, [dispatch, team]);
  let u = useCallback(e => {
    let {
      member,
      newLevel
    } = e;
    let s = member.team_role;
    let i = () => {
      let e = s?.pending;
      if (member.id && newLevel === AccessLevelEnum.NONE && !e) {
        _([member]);
        return;
      }
      s && dispatch(yN({
        role: s,
        level: newLevel
      }));
    };
    s && newLevel === AccessLevelEnum.OWNER ? dispatch(showModalHandler({
      type: _$$b3,
      data: {
        resourceType: s.resource_type,
        resourceName: team.name,
        newOwnerName: s.user.handle,
        onConfirmTransfer: () => {
          i();
        }
      }
    })) : s && newLevel === AccessLevelEnum.VIEWER && !s.pending ? dispatch(e0({
      team,
      member
    })) : i();
  }, [_, dispatch, team]);
  let m = _$$s2();
  let p = useCallback(e => m({
    teamId: team.id,
    prepopulatedEmail: e.email,
    canAdmin: !0
  }), [team.id, m]);
  let g = useCallback(e => {
    u({
      member: e,
      newLevel: AccessLevelEnum.NONE
    });
  }, [u]);
  let b = useCallback(e => {
    let t = e.find(e => e?.team_role?.pending);
    dispatch(showModalHandler({
      type: eq,
      data: {
        members: e,
        team,
        onConfirm: () => {
          _(e);
          e.forEach(e => {
            e.team_role?.pending && u({
              member: e,
              newLevel: AccessLevelEnum.NONE
            });
          });
          let t = e.length === 1 ? e[0].name || e[0].email : getI18nString('team_view.upgrade.members_length_users', {
            memberLength: e.length
          });
          dispatch(VisualBellActions.enqueue({
            type: 'team-users-removed',
            message: getI18nString('team_view.upgrade.members_removed_text_removed_from_this_props_team_name', {
              membersRemovedText: t,
              teamName: team.name
            })
          }));
        },
        includesPendingTeamRole: !!t
      }
    }));
  }, [_, u, dispatch, team]);
  let v = useCallback(e => {
    e.team_role && dispatch($S({
      role: e.team_role
    }));
  }, [dispatch]);
  let f = e => e.member.email;
  let j = useSeatManagementWidgetProExperiment()(_$$v2(billing?.summary));
  let y = () => {
    let t = e.team;
    return [{
      name: getUserFieldLabel(UserFieldEnum.NAME),
      className: Mc,
      getSortValue: e => e.member.name || e.member.email,
      cellComponent: M
    }, ...(t.canAdmin && hasValidSubscription(t) ? Js({
      columnClassName: nM,
      selectorOuterClassName: Gb,
      selectorInnerClassName: r2,
      currency: e.billing.summary.currency,
      forceHidePendingSeats: e.forceHidePendingSeats
    }) : []), ...(j ? [{
      name: getUserFieldLabel(UserFieldEnum.BILLING_INTERVAL),
      className: Mc,
      getSortValue: e => 'current_seat_billing_interval' in e.member ? e.member.current_seat_billing_interval?.toString() ?? '-' : '-',
      sortReversed: !0,
      cellComponent: D
    }] : []), {
      name: getUserFieldLabel(UserFieldEnum.ACTIVE_AT),
      className: dG,
      getSortValue: e => e.member.last_active || 0,
      sortNumerically: !0,
      sortReversed: !0,
      cellComponent: P
    }];
  };
  let w = useMemo(() => e.filteredMembers.map(t => {
    let a = e.currentMemberId === t.id;
    return {
      teamId: e.team.id,
      member: t,
      dispatch: e.dispatch,
      isCurrentMember: a,
      dropdownShown: e.dropdownShown,
      onRemoveMemberOrChangeMemberPermission: u
    };
  }), [e.dispatch, u, e.currentMemberId, e.dropdownShown, e.filteredMembers, e.team.id]);
  let k = _$$B();
  let E = useRef(null);
  let C = useRef(null);
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(useCallback(e => w.find(t => t.member.email === e), [w]), {
    interactionConfig: [{
      ref: k,
      shouldClearHighlight: !0
    }, {
      ref: E,
      shouldClearHighlight: !1
    }, {
      ref: C,
      shouldClearHighlight: !1
    }],
    onHighlight: () => {
      E.current?.focus();
    },
    onClear: _$$b2(e4)
  });
  let R = useCallback(e => !(e.member.team_role?.pending && !e.member.team_user), []);
  let O = useCallback(e => {
    dispatch(showModalHandler({
      type: s ??= registerModal(_$$A3.createLazyComponent(() => Promise.all([]).then(_require2).then(e => e.MemberEditAccessModal), createModalConfig('MemberEditAccessModal')), 'MemberEditAccessModal'),
      data: {
        memberEmail: e.email,
        teamId: team.id,
        userId: e.id
      }
    }));
  }, [dispatch, team.id]);
  let L = useCallback(t => {
    let a = !t.member.team_role;
    let n = t.member.team_role?.pending || !1;
    let s = t.member.team_role?.level === AccessLevelEnum.OWNER;
    let i = k_(t.member, t.isCurrentMember, e.team);
    let {
      canAdmin,
      canEdit
    } = e.team;
    let o = t.member.canEditRole;
    let d = t.member.canRemoveUser;
    let _ = (e, t) => e ? [t] : [];
    let m = [..._(R(t), {
      text: getI18nString('team_view.settings.manage'),
      innerText: 'Manage (menu cell)',
      callback: () => {
        setHighlightedItemId(t.member.email);
      }
    }), ..._(canAdmin && R(t), {
      text: getI18nString('team_view.settings.see_edit_access'),
      callback: () => {
        O(t.member);
      }
    }), {
      text: getI18nString('team_view.settings.copy_email'),
      callback: () => {
        c([t.member.email]);
      }
    }, ..._(a && canEdit && !n, {
      text: getI18nString('team_view.settings.invite_to_team'),
      callback: () => {
        p(t.member);
      }
    }), ..._(i === 'revoke', {
      text: getI18nString('team_view.settings.revoke_admin_access'),
      callback: () => u({
        member: t.member,
        newLevel: AccessLevelEnum.EDITOR
      })
    }), ..._(i === 'grant', {
      text: getI18nString('team_view.settings.grant_admin_access'),
      callback: () => u({
        member: t.member,
        newLevel: AccessLevelEnum.ADMIN
      })
    })];
    let x = [..._(n && o, {
      text: getI18nString('team_view.settings.resend_invite'),
      callback: () => {
        v(t.member);
      }
    }), ..._(!t.isCurrentMember && d, {
      text: getI18nString('team_view.settings.remove'),
      callback: () => {
        b([t.member]);
      }
    }), ..._(t.isCurrentMember && !s, {
      text: getI18nString('team_view.settings.leave_team'),
      callback: () => {
        g(t.member);
      }
    })];
    x.length > 0 && (m.push({
      isDivider: !0
    }), m = m.concat(x));
    return m;
  }, [R, c, p, g, u, b, v, e.team, setHighlightedItemId, O]);
  let D = e => {
    let t = 'current_seat_billing_interval' in e.member && e.member.current_seat_billing_interval ? e.member.current_seat_billing_interval === FBillingPeriodType.YEAR ? getI18nString('team_view.team_members_table.billing_interval_annual') : getI18nString('team_view.team_members_table.billing_interval_monthly') : getI18nString('team_view.team_members_table.billing_interval_empty');
    return jsx(e2, {
      cellContent: t
    });
  };
  let M = (e, t, a, n) => {
    let {
      member,
      isCurrentMember
    } = e;
    let l = e1(member);
    let o = BP(member);
    let d = n === 0 ? fB : void 0;
    return member.team_role?.pending ? jsx(i9, {
      'badge': o,
      'data-onboarding-key': d,
      'defaultText': '-',
      'entity': l,
      'overrideHandle': l.email,
      'showIsMe': !1
    }) : jsx(_$$r, {
      'className': U0,
      'data-onboarding-key': d,
      'dispatch': e.dispatch,
      'entity': l,
      'showIsMe': isCurrentMember,
      'showTooltip': !0,
      'size': 24,
      'badge': o
    });
  };
  let P = t => {
    let {
      member
    } = t;
    return member.last_active ? jsx(Button, {
      variant: 'link',
      onClick: t => {
        t.stopPropagation();
        e.dispatch(showModalHandler({
          type: _$$J,
          data: {
            planType: OrganizationType.TEAM,
            planId: e.team.id,
            planUserId: member.id,
            planUserDisplayName: member.name || member.email,
            activityType: 'all'
          }
        }));
      },
      children: jsx(h1, {
        capitalize: !0,
        date: new Date(1e3 * member.last_active)
      })
    }) : jsx(e2, {});
  };
  let U = () => {
    let t = () => {
      e.onFilter(Ok);
    };
    let a = renderI18nText('team_view.team_members_table.default_empty_state');
    let n = jsx('span', {
      children: renderI18nText('team_view.team_members_table.member_filter_empty_state', {
        reset_link: jsx('a', {
          className: nf,
          onClick: () => t(),
          children: getI18nString('team_view.team_members_table.member_filter_empty_reset_link')
        })
      })
    });
    let s = renderI18nText('team_view.team_members_table.search_empty_state');
    let r = Object.values(e.filters).some(e => !!e);
    return r && e.searchQuery ? e.lastFilterAction === Vc.SEARCH ? s : n : r ? n : e.searchQuery ? s : a;
  };
  let F = () => jsx('div', {
    className: Hy,
    children: jsxs('div', {
      className: cE,
      children: [jsx('div', {
        className: cssBuilderInstance.pr8.$,
        children: jsx(y2, {
          onChange: e.onSearch,
          query: e.searchQuery,
          clearSearch: () => {
            e.onSearch('');
          },
          placeholder: getI18nString('team_view.search_bar.search_members_with_ellipsis')
        })
      }), jsx(bv, {
        label: getUserFieldLabel(UserFieldEnum.ACTIVE_AT),
        dispatch: e.dispatch,
        dropdownShown: e.dropdownShown,
        dropdownType: 'FILTER_LAST_ACTIVE_DROPDOWN',
        selectedValue: e.filters.lastActiveFilter,
        values: [UW.MORE_SEVEN_DAYS, UW.MORE_THIRTY_DAYS, UW.MORE_THREE_MONTHS],
        getCount: t => e.filterCounts.lastActive[t],
        getDisplayText: e => function (e) {
          switch (e) {
            case UW.MORE_SEVEN_DAYS:
              return getI18nString('team_view.team_members_table.filters.last_active..more_than_7_days_ago');
            case UW.MORE_THIRTY_DAYS:
              return getI18nString('team_view.team_members_table.filters.last_active..more_than_30_days_ago');
            case UW.MORE_THREE_MONTHS:
              return getI18nString('team_view.team_members_table.filters.last_active..more_than_3_months_ago');
            default:
              throwTypeError(e);
          }
        }(e),
        updateFilter: t => e.onFilter({
          lastActiveFilter: t
        })
      }), e.team.canAdmin && e.team.pro_team && jsx(yG, {
        dispatch: e.dispatch,
        dropdownShown: e.dropdownShown,
        filters: e.filters,
        filterCounts: e.filterCounts,
        onFilter: e.onFilter
      }), j && jsx(bv, {
        label: getUserFieldLabel(UserFieldEnum.BILLING_INTERVAL),
        dispatch: e.dispatch,
        dropdownShown: e.dropdownShown,
        dropdownType: 'FILTER_BILLING_INTERVAL_DROPDOWN',
        selectedValue: e.filters.billingIntervalFilter ?? null,
        values: [FBillingPeriodType.MONTH, FBillingPeriodType.YEAR],
        getCount: t => e.filterCounts.billingInterval?.[t] ?? 0,
        getDisplayText: e => e === FBillingPeriodType.MONTH ? getI18nString('team_view.team_members_table.billing_interval_monthly') : getI18nString('team_view.team_members_table.billing_interval_annual'),
        updateFilter: t => e.onFilter({
          billingIntervalFilter: t ?? void 0
        })
      })]
    })
  });
  let q = t => {
    let a = t.map(e => e.member);
    if (a.length === 0) return jsx(Fragment, {});
    let n = a.map(e => e.email);
    let s = a.every(e => e.canRemoveUser);
    let r = a.some(e => e.team_role?.pending) && a.some(e => !e.team_user);
    let l = a.length > 20;
    let o = !!t.find(e => e.isCurrentMember);
    let {
      canAdmin
    } = e.team;
    let _ = a.filter(e => e.id).map(e => e.id);
    let u = {
      userCount: _.length
    };
    let m = _.join();
    return jsxs(Fragment, {
      children: [canAdmin && !r && a.length === 1 && jsx(IU, {
        label: getI18nString('team_view.settings.see_edit_access'),
        onClick: () => {
          O(a[0]);
        }
      }), jsx(IU, {
        trackingProperties: {
          ...u,
          copiedUserIds: m
        },
        label: getI18nString('team_view.settings.copy_get_plural_or_singular_selected_members_length_email', {
          numEmails: a.length
        }),
        onClick: () => {
          c(n);
        }
      }), s && !o && jsx(IU, {
        label: getI18nString('team_view.settings.remove'),
        trackingProperties: {
          ...u,
          removedUserIds: m
        },
        onClick: () => {
          b(a.map(e => e));
        },
        disabled: l,
        ...(l ? {
          tooltip: getI18nString('team_view.settings.you_can_only_remove_limit_users_at_a_time', {
            batchLimit: 20
          })
        } : {})
      })]
    });
  };
  let $ = useCallback(e => {
    let t = L(e);
    return jsx(zx, {
      children: t.map((e, t) => e.isDivider ? jsx(MenuSeparator, {}, `divider${t}`) : jsx(_$$p, {
        onClick: e.callback,
        children: e.text
      }, e.text))
    });
  }, [L]);
  let B = jsx('div', {
    'className': kL,
    'data-testid': 'team-members-table',
    'children': jsx(e3, {
      initialSortState: {
        columnName: getUserFieldLabel(UserFieldEnum.NAME),
        isReversed: !1
      },
      items: w,
      columns: y(),
      render: (t, a, n) => jsx(Cj, {
        actionBar: q,
        columns: y(),
        emptyContent: jsx(AutoLayout, {
          height: 200,
          verticalAlignItems: 'center',
          horizontalAlignItems: 'center',
          children: U()
        }),
        getItemKey: f,
        highlightState: {
          itemKey: highlightedItem?.member.email ?? null,
          setItemKey: setHighlightedItemId
        },
        isRowClickable: R,
        itemTypeContext: {
          itemType: 'user',
          getSelectedCountString: e => getI18nString('multi_select_list.selected_count_user', {
            numSelected: e
          })
        },
        items: n,
        minContentWidth: parsePxInt(fAD),
        onRowClick: e => {
          R(e) && (highlightedItem?.member.email === e.member.email ? clearHighlightedItemId() : setHighlightedItemId(e.member.email));
        },
        onScroll: () => e.dispatch(hideDropdownAction()),
        onSetSortState: a,
        rightActionColumns: [{
          name: 'menu-cell',
          className: oi,
          cellComponent: $
        }, VU],
        scrollContentRef: C,
        sortState: t,
        stickyContent: F()
      })
    })
  });
  return jsxs(Fragment, {
    children: [B, w.length > 0 && jsx(eJ, {}), jsx(_$$E2.Root, {
      open: !!highlightedItem,
      onClose: clearHighlightedItemId,
      trackingName: e4,
      trackingProperties: {
        teamId: e.team.id,
        userId: highlightedItem?.member.team_user?.user_id
      },
      ref: E,
      children: highlightedItem && jsx(_$$E2.Contents, {
        avatarEntity: e1(highlightedItem.member),
        badge: BP(highlightedItem.member),
        currency: billing.summary.currency,
        isMe: highlightedItem.member.team_role?.user_id === e.currentMemberId,
        member: highlightedItem.member,
        onRemoveMemberOrChangeMemberPermission: e => {
          highlightedItem.onRemoveMemberOrChangeMemberPermission({
            member: highlightedItem.member,
            newLevel: e
          });
        },
        onRemoveUserFromTeam: () => {
          b([highlightedItem.member]);
        },
        planType: FOrganizationLevelType.TEAM,
        renewalTerm: d,
        team: e.team
      })
    })]
  });
}, 'Pro Team Members Table');
function e3({
  initialSortState: e,
  items: t,
  columns: a,
  render: n
}) {
  let [s, i, r] = _$$z2(e, t, a);
  return n(s, i, r);
}
function e8(e) {
  let [t, a] = function () {
    let e = getSelectedView();
    let [t, a] = useState({
      ...Ok,
      ...(e.view === 'teamAdminConsole' ? e.membersTabInitialFilters : void 0)
    });
    return [t, a];
  }();
  let [n, s] = useState('');
  let [l, o] = useState(Vc.FILTER);
  let d = TG(e.team.id);
  let c = isCutover('migrate_team_data_to_livegraph', LegacyConfigGroups.GROUP_1);
  let _ = useShadowReadLoaded({
    oldValue: resourceUtils.useMemoizedLoaded(e.membersList),
    newValue: d,
    label: adminPermissionConfig.TeamMembersTable.teamMembersByTeamId,
    enableFullRead: c,
    comparator: ts,
    contextArgs: {
      teamId: e.team.id
    },
    maxReports: 5
  });
  let u = {};
  if (_.status === 'loading') return jsx(LoadingSpinner, {});
  _.status === 'errors' ? e.dispatch(VisualBellActions.enqueue({
    message: getI18nString('file_browser.file_browser_actions.team_member_fetch_error'),
    error: !0
  })) : u = _.data || {};
  let m = _$$A().subtract(3, 'days');
  let p = _$$A().subtract(30, 'days');
  let x = _$$A().subtract(3, 'months');
  let b = Object.values(u);
  n && (d2.set(Object.values(u)), b = d2.search(n));
  b = b.filter(e => {
    if (t.lastActiveFilter) {
      let a = e.last_active ? _$$A(1e3 * e.last_active) : 0;
      if (t.lastActiveFilter === UW.MORE_SEVEN_DAYS && a > m || t.lastActiveFilter === UW.MORE_THIRTY_DAYS && a > p || t.lastActiveFilter === UW.MORE_THREE_MONTHS && a > x) return !1;
    }
    return !!b_(e, t.seatTypeFilter) && (!t.billingIntervalFilter || !('current_seat_billing_interval' in e) || e.current_seat_billing_interval === t.billingIntervalFilter);
  });
  let v = {
    lastActive: {
      [UW.MORE_SEVEN_DAYS]: 0,
      [UW.MORE_THIRTY_DAYS]: 0,
      [UW.MORE_THREE_MONTHS]: 0
    },
    ...sH(),
    billingInterval: {
      [FBillingPeriodType.MONTH]: 0,
      [FBillingPeriodType.YEAR]: 0
    }
  };
  Object.values(b).forEach(e => {
    let t = e.last_active ? _$$A(1e3 * e.last_active) : 0;
    if (t < x && (v.lastActive[UW.MORE_THREE_MONTHS] += 1), t < p && (v.lastActive[UW.MORE_THIRTY_DAYS] += 1), t < m && (v.lastActive[UW.MORE_SEVEN_DAYS] += 1), Ji(e, v), 'current_seat_billing_interval' in e && e.current_seat_billing_interval && v.billingInterval) {
      let t = e.current_seat_billing_interval;
      v.billingInterval[t] ??= 0;
      v.billingInterval[t] += 1;
    }
  });
  return jsx('div', {
    className: cssBuilderInstance.flex.flexColumn.$,
    children: jsx(e5, {
      billing: e.billing,
      currentMemberId: e.currentMemberId,
      dispatch: e.dispatch,
      dropdownShown: e.dropdownShown,
      filterCounts: v,
      filteredMembers: b,
      filters: t,
      forceHidePendingSeats: !c,
      lastFilterAction: l,
      onFilter: e => {
        a({
          ...t,
          ...e
        });
        o(Vc.FILTER);
      },
      onSearch: e => {
        s(e);
        o(Vc.SEARCH);
      },
      searchQuery: n,
      team: e.team
    })
  });
}
let e6 = ['user', 'user_id', 'team_id'];
let e7 = ['id', 'name', 'img_url', 'ecc_upgrading_locked'];
let e9 = ['team_id', 'pending_email', 'invite'];
let te = ['last_design_active', 'last_whiteboard_active', 'edit_roles', 'view_roles', 'seat_type', 'edu_edit_access_allowed'];
let tt = ['whiteboard_paid_status', 'design_paid_status', 'drafts_folder_id', 'show_figjam_user_onboarding', 'created_at', 'updated_at', '_internal_only_written_by_backfill', 'has_shown_figjam_admin_onboarding'];
let ta = ['upgrade_method', 'billable_product_key', 'prev_billable_product_key', 'seat_id', '_internal_only_written_by_backfill', 'team_user_id', 'downgrade_actor_id', 'downgrade_reason', 'downgraded_at', 'account_type_request_id', 'entry_point', 'batch_timestamp', 'updated_at', 'resource_name'];
function tn(e, t, a, n, s) {
  if (n === 'created_at' || n === 'assigned_at' || n === 'updated_at') {
    let i = _$$tb(V()(t, n))?.getTime();
    let r = _$$tb(V()(a, n))?.getTime();
    if (i === r) return;
    i && r || e.push({
      newValue: r,
      oldValue: i,
      severity: 'high',
      path: s
    });
    Math.floor(r / 1e3) !== Math.floor(i / 1e3) && e.push({
      newValue: r,
      oldValue: i,
      severity: 'high',
      path: s
    });
    return;
  }
  let i = V()(t, n);
  let r = V()(a, n);
  (i !== null || r !== null) && (void 0 !== i || void 0 !== r) && (i !== null || void 0 !== r) && (void 0 !== i || r !== null) && i !== r && e.push({
    newValue: r,
    oldValue: i,
    severity: 'high',
    path: s
  });
}
function ts(e, t) {
  let a = [];
  Object.entries(e).forEach(([e, n]) => {
    let s = t[e];
    if (!s) {
      a.push({
        newValue: n,
        oldValue: s,
        severity: 'high',
        path: [e]
      });
      return;
    }
    let i = n.team_role?.pending && !n.team_user;
    Object.entries(n).forEach(([t, r]) => {
      if (!(i && e7.includes(t)) && !te.includes(t)) {
        if (t === 'team_user' && n.team_user) {
          let i = n.team_user;
          let r = s.team_user;
          Object.entries(i).forEach(([n, s]) => {
            if (!tt.includes(n)) {
              if (n === 'active_seat_type') {
                let s = i?.active_seat_type;
                let l = r?.active_seat_type;
                if (s !== l && !s != !l) {
                  if (!s || !l) {
                    a.push({
                      newValue: l,
                      oldValue: s,
                      severity: 'high',
                      path: [e, t, n]
                    });
                    return;
                  }
                  Object.entries(s).forEach(([t, n]) => {
                    tn(a, s, l, 'key', [e, 'team_user', 'active_seat_type', t]);
                  });
                }
              } else {
                tn(a, i, r, n, [e, 'team_user', n]);
              }
            }
          });
        } else if (t === 'team_role' && n.team_role) {
          let t = n.team_role;
          let i = s.team_role;
          Object.entries(t).forEach(([s, r]) => {
            if (!(n.team_role.pending && e6.includes(s) || e9.includes(s))) {
              if (s === 'user') {
                let n = t.user;
                let s = i?.user;
                Object.entries(n).forEach(([t, i]) => {
                  tn(a, n, s, t, [e, 'team_role', 'user']);
                });
              } else {
                tn(a, t, i, s, [e, 'team_role', s]);
              }
            }
          });
        } else if (t === 'design_editor_upgrade' || t === 'whiteboard_editor_upgrade') {
          let i = V()(n, t);
          let r = V()(s, t);
          if (i === r) return;
          if (!i || !r) {
            if (i === null && r === null || void 0 === i && void 0 === r || i === null && void 0 === r || void 0 === i && r === null) return;
            a.push({
              newValue: r,
              oldValue: i,
              severity: 'high',
              path: [e, t]
            });
            return;
          }
          Object.entries(i).forEach(([n, s]) => {
            ta.includes(n) || tn(a, i, r, n, [e, t, n]);
          });
        } else {
          tn(a, n, s, t, [e, t]);
        }
      }
    });
  });
  Object.entries(t).forEach(([t, n]) => {
    let s = e[t];
    s || a.push({
      newValue: s,
      oldValue: n,
      severity: 'high',
      path: [t]
    });
  });
  return a;
}
let tF = 'settings_table--link--mol4m';
let tq = 'settings_table--boldText--wLdS9 settings_table--modalText--7TuKM';
let t$ = {
  aiFeaturesToggle: 'ai-features-setting-toggle',
  aiDataSharingToggle: 'ai-data-sharing-toggle',
  aiFeaturesEnableButton: 'ai-features-enable-button'
};
function tB(e) {
  return e ? _$$A(e).format('MMMM D, YYYY') : '';
}
function tG(e) {
  let t;
  let {
    team,
    settingsData
  } = e;
  let s = _$$R();
  let r = useDispatch();
  let d = e.billing.summary.annual_subscription;
  let c = e.billing.summary.monthly_subscription;
  let _ = e.billing.summary.shipping_address;
  let m = !!e.billing.summary.has_billing_address;
  let p = !!settingsData?.studentTeamAt && !settingsData?.isAiDataSharingEnabled;
  t = useTeamPlanFeatures();
  let g = collaboratorSet.reduce((e, a) => {
    switch (a) {
      case ProductAccessTypeEnum.EXPERT:
        return e || t.unwrapOr(null)?.upgradeApprovalSettingsExpert === zRx.INSTANT_APPROVAL;
      case ProductAccessTypeEnum.DEVELOPER:
        return e || t.unwrapOr(null)?.upgradeApprovalSettingsDeveloper === zRx.INSTANT_APPROVAL;
      case ProductAccessTypeEnum.CONTENT:
        return e || getResourceDataOrFallback(t.unwrapOr(null)?.upgradeApprovalSettingsContent) === zRx.INSTANT_APPROVAL;
      case ProductAccessTypeEnum.COLLABORATOR:
        return e || t.unwrapOr(null)?.upgradeApprovalSettingsCollaborator === zRx.INSTANT_APPROVAL;
      default:
        throwTypeError(a);
    }
  }, !1);
  _$$S(UC, () => {
    r(showModalHandler({
      type: _$$q,
      data: {
        planType: fm.TEAM,
        planId: e.team.id
      }
    }));
  });
  _$$h(() => {
    e.billing.summary.show_vat_gst && _$$S(mL, () => {
      Hq({
        team: e.team,
        dispatch: r
      });
    });
  });
  let b = async e => {
    try {
      await teamAPIClient.updateAiFeaturesDisabled({
        teamId: team.id,
        aiFeaturesDisabled: e
      });
      r(setTeamOptimistThunk({
        team: {
          id: team.id,
          ai_features_disabled: e
        },
        userInitiated: !0
      }));
      let t = e ? getI18nString('admin_settings.ai.disable_success') : getI18nString('admin_settings.ai.enable_success');
      r(FlashActions.flash(t));
    } catch {
      r(FlashActions.error(getI18nString('file_browser.file_browser_actions.team_update_error')));
    }
  };
  let v = async e => {
    try {
      await teamAPIClient.updateAiDataSharing({
        teamId: team.id,
        enabled: e
      });
      trackEventAnalytics('ai_data_sharing_toggled', {
        team_id: team.id,
        enabled: e
      });
      r(FlashActions.flash(getI18nString('admin_settings.ai.data_sharing.update_success')));
    } catch (e) {
      r(FlashActions.error(getI18nString('admin_settings.ai.data_sharing.update_error')));
    }
  };
  let j = getFeatureFlags().ai_ga;
  let y = [];
  j ? settingsData.aiFeaturesDisabledAt && y.push(jsx(AutoLayout, {
    padding: {
      top: 8
    },
    children: jsx(_$$p2, {
      onEnable: () => {
        b(!1);
      },
      planId: team.id,
      planType: FOrganizationLevelType.TEAM,
      testId: t$.aiFeaturesEnableButton
    })
  })) : y.push(jsx(T_, {
    label: getI18nString('admin_settings.ai.features_toggle.label'),
    description: jsx('p', {
      children: renderI18nText('admin_settings.ai.features_toggle.description.team', {
        learnMoreLink: jsx(SecureLink, {
          href: _$$d3.aiFeatures,
          target: '_blank',
          trusted: !0,
          children: renderI18nText('general.learn_more')
        })
      })
    }),
    isActive: !settingsData.aiFeaturesDisabledAt,
    testId: t$.aiFeaturesToggle,
    onToggle: e => {
      b(!e);
    }
  }, getI18nString('admin_settings.ai.features_toggle.label')));
  y.push(jsx(T_, {
    label: getI18nString('admin_settings.ai.data_sharing.label'),
    description: jsx('p', {
      children: renderI18nText('admin_settings.ai.data_sharing.description.team', {
        learnMoreLink: jsx(SecureLink, {
          href: _$$d3.aiDataSharing,
          target: '_blank',
          trusted: !0,
          children: renderI18nText('general.learn_more')
        })
      })
    }),
    isActive: settingsData.isAiDataSharingEnabled,
    testId: t$.aiDataSharingToggle,
    onToggle: v,
    disabled: p,
    tooltipText: p ? getI18nString('admin_settings.ai.data_sharing.disabled_for_student_teams') : void 0
  }, getI18nString('admin_settings.ai.data_sharing.label')));
  return jsx(Fragment, {
    children: jsx(TrackingProvider, {
      name: 'Team Admin Console Settings Table',
      properties: {
        teamId: e.team.id
      },
      children: jsxs('div', {
        'className': Dg,
        'data-testid': 'admin-console-settings-table',
        'children': [e.team.pro_team && jsx(Kz, {
          title: getI18nString('settings_table.team_profile'),
          settings: tV({
            team: e.team,
            teamName: e.team.name,
            legalName: e.team.legal_name ?? '',
            canSeeBillingAddressExp: m,
            dispatch: r
          })
        }), jsx(Kz, {
          title: getI18nString('settings_table.plan'),
          settings: tz({
            teamBillingSummary: e.billing.summary,
            dispatch: r,
            team: e.team,
            canSeeBillingAddressExp: m
          })
        }), e.team.pro_team && jsx(Kz, {
          title: getI18nString('plan_settings.billing_section_header'),
          description: tW(c, d),
          settings: tH({
            annualSub: d,
            dispatch: r,
            monthlySub: c,
            team: e.team,
            showSeatUpgradeDigests: g,
            billingContact: e.billing.summary.billing_contact,
            currency: e.billing.summary.currency,
            showVatGst: e.billing.summary.show_vat_gst,
            shippingAddress: _,
            canSeeBillingAddressExp: m,
            isBillingRemodelEnabled: s
          })
        }), isTeamEligibleForUpgrade(e.team) && jsx(Kz, {
          title: getI18nString('settings_table.resources'),
          settings: [jsx(T_, {
            label: getI18nString('settings_tab.ui_kits_toggle_label'),
            description: getI18nString('settings_tab.ui_kits_toggle_description'),
            isActive: !e.team.figma_provided_libraries_disabled,
            testId: 'figma-provided-libraries-setting-toggle',
            onToggle: t => {
              r(toggleFigmaLibrariesThunk({
                figma_provided_libraries_disabled: !t,
                teamId: e.team.id
              }));
              analyticsEventManager.trackDefinedEvent('preset_libraries.team_status_changed', {
                userId: e.userId,
                teamId: e.team.id,
                isEnabled: t
              });
            }
          }, 'figma_libraries')]
        }), jsx(Kz, {
          title: getI18nString('admin_settings.ai.section_title'),
          badge: j ? void 0 : jsxs(Fragment, {
            children: [jsx(Badge, {
              color: BadgeColor.BRAND,
              text: getI18nString('general.beta')
            }), jsx(_$$B2, {
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': getI18nString('admin_settings.ai.section_title.free_in_beta'),
              'data-tooltip-timeout-delay': 50
            })]
          }),
          settings: y
        })]
      })
    })
  });
}
let tz = ({
  teamBillingSummary: e,
  dispatch: t,
  team: a,
  canSeeBillingAddressExp: n
}) => {
  let {
    monthly_subscription,
    annual_subscription,
    currency,
    show_vat_gst,
    plan_canceled
  } = e;
  let c = a.id;
  let _ = [];
  let u = isTeamInGracePeriod(a);
  let m = Ti({
    planId: c,
    planType: FOrganizationLevelType.TEAM
  });
  if (!monthly_subscription && !annual_subscription) {
    let e = jsx('span', {
      children: renderI18nText('settings_table.upgrade_to_the_professional_plan_or_to_an_organization_and_get_access_to_shared_team_libraries_advanced_security_features_and_more', {
        more: jsx('a', {
          className: tF,
          href: '/pricing',
          onClick: e => {
            e.stopPropagation();
          },
          target: '_blank',
          children: renderI18nText('settings_table.more')
        })
      })
    });
    if (u) {
      let t = new Date(a.grace_period_end);
      e = jsx('span', {
        children: renderI18nText('settings_table.to_keep_using_paid_features_like_unlimited_team_figma_files_projects_and_team_libraries_after_your_free_professional_plan_expires_on_date_purchase_the_professional_plan_for_your_team', {
          date: t
        })
      });
    }
    _.push(jsx(x8, {
      label: u ? getI18nString('settings_table.purchase_professional_plan') : getI18nString('settings_table.upgrade_your_plan'),
      onClick: () => {
        u ? tJ(t, c) : tK(t, c, UpsellModalType.BILLING_SETTINGS);
      },
      description: e
    }));
    return _;
  }
  if (_.push(jsx(x8, {
    label: getI18nString('settings_table.upgrade_your_plan'),
    description: jsx('span', {
      children: renderI18nText('settings_table.consolidate_your_teams_access_shared_libraries_enable_advanced_security_features_and_more', {
        more: jsx('a', {
          className: tF,
          href: '/organization',
          target: '_blank',
          onClick: e => e.stopPropagation(),
          children: renderI18nText('settings_table.more')
        })
      })
    }),
    onClick: () => {
      t(Bq({
        openInNewTab: !0,
        upsellSource: UpsellModalType.TEAM_SETTINGS_VIEW
      }));
    }
  })), plan_canceled || !monthly_subscription) {
    _.push(jsx(x8, {
      label: getI18nString('settings_table.reactivate_plan'),
      description: getI18nString('settings_table.reactivate_your_subscription_of_professional'),
      onClick: () => {
        C8({
          team: a,
          dispatch: t,
          cancelling: !0,
          monthlySub: monthly_subscription,
          annualSub: annual_subscription,
          currency,
          canSeeBillingAddressExp: n
        });
      }
    }));
    return _;
  }
  let p = _$$l({
    teamBillingSummary: e,
    hasOpenInvoice: !!m.data?.length,
    currentDate: _$$A().toDate()
  });
  switch (p?.id) {
    case _$$m.ADD_ANNUAL_PLAN:
      _.push(jsx(x8, {
        label: getI18nString('settings_table.add_an_annual_plan'),
        description: getI18nString('settings_table.convert_all_monthly_seats'),
        onClick: () => {
          p.perform({
            dispatch: t
          });
        }
      }));
      break;
    case _$$m.TRIAL_READ_ONLY:
      _.push(jsx(bX, {
        label: getI18nString('settings_table.add_an_annual_plan'),
        description: getI18nString('settings_table.your_annual_plan_starts', {
          date: new Date(p.trialEnd)
        })
      }));
      break;
    case _$$m.ADJUST_COTERM_SEATS:
    case _$$m.ADJUST_RENEWAL_SEATS:
      _.push(jsx(x8, {
        testId: 'settings-table-add-seats-setting',
        label: getI18nString('settings_table.add_additional_seats'),
        description: getI18nString('settings_table.add_seats_to_your_annual_plan'),
        onClick: () => {
          p.perform({
            dispatch: t
          });
        }
      }));
  }
  _.push(jsx(x8, {
    label: getI18nString('settings_table.cancel_plan'),
    description: getI18nString('settings_table.cancel_your_subscription_of_professional'),
    onClick: () => {
      t(showModalHandler({
        type: _$$v3,
        data: {
          teamId: c
        }
      }));
    }
  }));
  n || _.push(jsx(x8, {
    label: getI18nString('settings_table.change_payment_method'),
    description: getI18nString('settings_table.change_and_update_the_payment_method_on_file'),
    onClick: () => C8({
      team: a,
      dispatch: t,
      cancelling: !1,
      monthlySub: monthly_subscription,
      annualSub: annual_subscription,
      currency,
      canSeeBillingAddressExp: n
    })
  }));
  show_vat_gst && !n && _.push(jsx(x8, {
    label: getI18nString('settings_table.vat_gst'),
    description: getI18nString('settings_table.change_vat_gst_id'),
    onClick: () => Hq({
      team: a,
      dispatch: t
    })
  }));
  return _;
};
let tV = ({
  team: e,
  teamName: t,
  legalName: a,
  canSeeBillingAddressExp: n,
  dispatch: s
}) => {
  let r = [];
  r.push(jsx(x8, {
    label: n ? getI18nString('settings_table.display_name.label') : getI18nString('settings_table.names'),
    description: n ? getI18nString('settings_table.change_display_name') : getI18nString('settings_table.change_names'),
    onClick: () => {
      s(showModalHandler({
        type: _$$L,
        data: {
          modalTitle: n ? getI18nString('settings_table.update_team_profile') : getI18nString('settings_table.edit_names'),
          displayName: t,
          legalName: a,
          updateNameImmediately: !0,
          team: e,
          canSeeBillingAddressExp: n
        }
      }));
    }
  }));
  return r;
};
let tW = (e, t) => {
  let a = e != null && e.current_period_end != null && e.canceled_at == null;
  let n = t != null && t.current_period_end != null && t.canceled_at == null;
  let s = e != null && e.canceled_at;
  let r = t != null && t.canceled_at;
  let l = null;
  if (n && a) {
    let a = tB(e?.current_period_end);
    let n = tB(t?.current_period_end);
    l = renderI18nText('team_view.settings_table.multiple_subscription_renewal', {
      monthly_billing_date: jsx('span', {
        className: tq,
        children: renderI18nText('team_view.settings_table.billing_date', {
          billing_date: a
        })
      }),
      annual_billing_date: jsx('span', {
        className: tq,
        children: renderI18nText('team_view.settings_table.billing_date', {
          billing_date: n
        })
      })
    });
  } else if (n) {
    let e = tB(t.current_period_end);
    l = renderI18nText('team_view.settings_table.single_subscription_renewal_annual', {
      billing_date: jsx('span', {
        className: tq,
        children: renderI18nText('team_view.settings_table.billing_date', {
          billing_date: e
        })
      })
    });
  } else if (a) {
    let t = tB(e.current_period_end);
    l = renderI18nText('team_view.settings_table.single_subscription_renewal_monthly', {
      billing_date: jsx('span', {
        className: tq,
        children: renderI18nText('team_view.settings_table.billing_date', {
          billing_date: t
        })
      })
    });
  } else if (r && s) {
    l = renderI18nText('team_view.settings_table.renewal_information_canceled_team_annual_and_monthly');
  } else if (r) {
    l = renderI18nText('team_view.settings_table.renewal_information_canceled_team_annual');
  } else if (s) {
    l = renderI18nText('team_view.settings_table.renewal_information_canceled_team_monthly');
  } else if (e != null || t != null) {
    logError('billing', 'Ambiguous pro team renewal status', {
      monthly_period_end: e?.current_period_end,
      monthly_canceled_at: e?.canceled_at,
      annual_period_end: t?.current_period_end,
      annual_canceled_at: t?.canceled_at
    });
    return jsx(Fragment, {});
  }
  return jsx('div', {
    className: 'settings_table--sectionDescription--jmGd-',
    children: jsx('span', {
      children: l
    })
  });
};
let tH = ({
  monthlySub: e,
  annualSub: t,
  dispatch: a,
  team: n,
  billingContact: s,
  currency: r,
  showVatGst: l,
  shippingAddress: o,
  canSeeBillingAddressExp: d,
  isBillingRemodelEnabled: c,
  showSeatUpgradeDigests: _
}) => {
  let u = [];
  if (d && u.push(jsx(x8, {
    label: getI18nString('team_view.settings_table.update_payment_details.payment_details'),
    description: getI18nString('team_view.settings_table.update_payment_details.update_payment_method'),
    onClick: () => C8({
      team: n,
      dispatch: a,
      cancelling: !1,
      monthlySub: e,
      annualSub: t,
      currency: r,
      canSeeBillingAddressExp: d
    })
  })), d && u.push(jsx(x8, {
    label: getI18nString('team_view.settings_table.update_invoice_details.invoice_details'),
    description: getI18nString('team_view.settings_table.update_invoice_details.update_invoice_details'),
    onClick: () => a(showModalHandler({
      type: _$$u,
      data: {
        teamId: n.id,
        shippingAddress: o || createEmptyAddress(),
        legalCompanyName: n.legal_name || '',
        canSeeBillingAddressExp: d
      }
    }))
  })), l && d && u.push(jsx(x8, {
    label: getI18nString('settings_table.vat_gst'),
    description: getI18nString('settings_table.change_vat_gst_id'),
    onClick: () => Hq({
      team: n,
      dispatch: a
    })
  })), c) {
    let n = e && !t || e && t ? IX.MONTH : IX.YEAR;
    u.push(jsx(x8, {
      label: getI18nString('plan_settings.auto_approval_settings'),
      description: getI18nString('plan_settings.auto_approval_settings_description'),
      onClick: _$$S2({
        dispatch: a,
        currency: r,
        renewalTerm: n
      })
    }, 'auto-approval-settings'));
  } else {
    u.push(jsx(x8, {
      label: getI18nString('plan_settings.default_role'),
      description: renderI18nText('plan_settings.default_role_description', {
        plan_type: getI18nString('settings_table.team')
      }),
      onClick: () => {
        a(showModalHandler({
          type: _$$h2,
          data: {
            planType: fm.TEAM,
            planId: n.id
          }
        }));
      }
    }, 'default-role'));
  }
  u.push(jsx(x8, {
    label: getI18nString('plan_settings.seat_upgrade_digests'),
    description: getI18nString('plan_settings.seat_upgrade_digests_description'),
    disabled: !_,
    currentValue: _ ? null : jsx(_$$I, {}),
    onClick: () => {
      a(showModalHandler({
        type: _$$q,
        data: {
          planType: fm.TEAM,
          planId: n.id
        }
      }));
    }
  }));
  u.push(jsx(x8, {
    label: getI18nString('settings_table.billing_contacts'),
    description: getI18nString('settings_table.billing_contacts_description'),
    onClick: () => {
      tY(a, n, s || '');
    }
  }));
  return u;
};
let tY = (e, t, a) => {
  let n = async a => await BO({
    email: a,
    dispatch: e,
    teamId: t.id
  });
  e(showModalHandler({
    type: _$$E3,
    data: {
      currentContacts: a,
      onSubmit: n,
      isOrg: !1
    }
  }));
};
let tJ = (e, t) => {
  e(WX({
    teamId: t,
    openInNewTab: !1,
    selectedView: {
      view: 'team',
      teamId: t
    }
  }));
};
let tK = (e, t, a) => {
  e(showModalHandler({
    type: _$$V,
    data: {
      teamId: t,
      upsellSource: a,
      openCheckoutInNewTab: !0
    }
  }));
};
function an() {
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: iq7,
    priority: _$$N2.SECONDARY_MODAL
  });
  _$$h(() => {
    show();
  });
  return jsx(_$$X, {
    isShowing,
    position: _$$Q.CENTER,
    trackingContextName: 'TeamAdminAuthorityOverlay',
    title: renderI18nText('team_admin_authority_overlay.title'),
    description: renderI18nText('team_admin_authority_overlay.description'),
    primaryCta: {
      label: renderI18nText('general.got_it'),
      ctaTrackingDescriptor: UpgradeAction.GOT_IT,
      type: 'button',
      onClick: complete
    },
    onClose: complete
  });
}
let al = ar;
let ad = ao;
function ah({
  selectedTab: e,
  teamId: t,
  secondaryTabs: a,
  rightContent: n,
  billing: s
}) {
  let l = _$$R();
  let o = useTeamPlanPublicInfo();
  let d = useIsStudentPlan(o).unwrapOr(!1);
  let c = _$$v2(s?.summary);
  let _ = _$$s2();
  let u = useCallback(() => _({
    teamId: t,
    initialView: 0,
    canAdmin: !0
  }), [t, _]);
  return jsxs('div', {
    'data-testid': 'team-admin-console-header',
    'children': [jsx(_$$K, {
      title: e === DashboardSections.MEMBERS ? renderI18nText('team_admin.members_tab.header') : getDashboardSectionLabel(e),
      rightActions: jsxs(Fragment, {
        children: [e === DashboardSections.MEMBERS && jsxs(AutoLayout, {
          width: 'hug-contents',
          direction: 'horizontal',
          spacing: 8,
          children: [l && !d && jsxs(Fragment, {
            children: [jsx(yE, {
              planParentId: t,
              planType: FOrganizationLevelType.TEAM,
              isActiveAnnualPlan: c
            }), jsx('div', {
              className: cssBuilderInstance.mr8.$
            })]
          }), jsx(_$$V2, {
            icon: 'plus-32',
            variant: 'primary',
            onClick: u,
            trackingProperties: {
              action: 'Add members to team'
            },
            children: jsx(TextWithTruncation, {
              children: renderI18nText('team_admin.members_tab.invite_users')
            })
          })]
        }), n]
      })
    }), a && jsx('div', {
      className: 'team_admin_console_header--secondaryTabs--FRPCy',
      children: a
    })]
  });
}
function ay(e) {
  let t = _$$R3();
  return jsx(_$$Q2, {
    minContentWidth: 1024,
    children: jsx('div', {
      className: cssBuilderInstance.pb36.$,
      children: jsx(_$$S4, {
        invoices: e.planInvoices,
        adjustAnnualSeatsAction: e.adjustAnnualSeatsAction,
        currentDate: t,
        stickyContent: jsx(Fragment, {})
      })
    })
  });
}
function aw(e) {
  let t = bQ({
    planType: FOrganizationLevelType.TEAM,
    planId: e.teamId
  });
  return t.status !== 'loaded' || e.isLoading ? jsx('div', {
    'className': cssBuilderInstance.flex.alignCenter.justifyCenter.p24.$,
    'data-testid': 'invoices-tab-loading',
    'children': jsx(_$$k3, {})
  }) : jsx(ay, {
    planInvoices: t.data,
    billingSummary: e.billingSummary,
    adjustAnnualSeatsAction: e.adjustAnnualSeatsAction
  });
}
function ak(e) {
  return jsx(TrackingProvider, {
    name: _$$e4.BILLING_INVOICES_TAB,
    properties: {
      teamId: e.teamId
    },
    children: jsx(aw, {
      ...e
    })
  });
}
function aA(e) {
  let t = useDispatch();
  let a = bQ({
    planType: FOrganizationLevelType.TEAM,
    planId: e.team.id
  });
  let n = isProrationBillingEnabledForCurrentPlan();
  let s = useSeatManagementWidgetProExperiment();
  let o = useSeatManagementWidgetExperiment();
  let d = e.billingSummary.annual_subscription;
  let c = e.billingSummary.annual_subscription?.trial_end ? getFutureDateOrNull(e.billingSummary.annual_subscription.trial_end) : null;
  let _ = _$$v2(e.billingSummary);
  let u = n && _ && o();
  let m = hY(e.team.id, FOrganizationLevelType.TEAM);
  let p = ww(u ? {
    teamId: e.team.id
  } : null);
  let g = useMemo(() => u && p.status !== 'disabled' ? p.transform(e => ({
    split: 'billing_interval',
    data: e
  })) : m.transform(e => ({
    split: 'none',
    data: e
  })), [u, m, p]);
  let h = useMemo(() => u && p.status !== 'disabled' ? p.transform(e => {
    let t = {
      available: 0,
      total: 0,
      assigned: 0
    };
    collaboratorSet.forEach(a => {
      t.available += e.year[a]?.available ?? 0;
      t.assigned += e.year[a]?.assigned ?? 0;
      t.total += e.year[a]?.total ?? 0;
    });
    return t;
  }) : resourceUtils.loaded(null), [u, p]);
  let x = useCallback(() => {
    e.setActiveTab(BillingSections.INVOICES);
  }, [e.setActiveTab]);
  let b = useCallback(t => {
    e.setActiveTab(BillingSections.INVOICES, {
      planInvoiceId: t
    });
  }, [e.setActiveTab]);
  let v = useMemo(() => _ && n && s(_) ? () => {
    t(selectViewAction({
      view: 'teamAdminConsole',
      teamId: e.team.id,
      teamAdminConsoleViewTab: DashboardSections.MEMBERS,
      membersTabInitialFilters: {
        billingIntervalFilter: FBillingPeriodType.YEAR
      }
    }));
  } : null, [_, t, s, e.team.id, n]);
  let f = useCallback(() => {
    if (!n && _) return null;
    t(selectViewAction({
      view: 'teamAdminConsole',
      teamId: e.team.id,
      teamAdminConsoleViewTab: DashboardSections.MEMBERS,
      membersTabInitialFilters: s(_) ? {
        billingIntervalFilter: FBillingPeriodType.MONTH
      } : void 0
    }));
  }, [t, e.team.id, n, _, s]);
  let j = useCallback(() => {
    t(selectViewAction({
      view: 'teamAdminConsole',
      teamId: e.team.id,
      teamAdminConsoleViewTab: DashboardSections.MEMBERS
    }));
  }, [t, e.team.id]);
  let y = useCallback(() => {
    C8({
      team: e.team,
      dispatch: t,
      cancelling: !0,
      monthlySub: e.billingSummary.monthly_subscription,
      annualSub: e.billingSummary.annual_subscription,
      canSeeBillingAddressExp: e.billingSummary.has_billing_address
    });
  }, [e.team, t, e.billingSummary]);
  let w = G6(e.team.id);
  let k = !!w.data?.show && w.data.inTrial;
  let E = !!w.data?.show && w.data.nextRenewalDate;
  let C = !!w.data?.show && w.data.renewalConfirmed;
  let N = useMemo(() => w.data?.show && E && j2({
    shouldAutoRenew: !0,
    onTrial: k,
    hasNonAdjustableRenewalSeats: !1
  }) ? () => {
    t(showModalHandler({
      type: vn,
      data: {
        renewalDate: E
      }
    }));
  } : null, [w.data?.show, E, k, t]);
  return a.status !== 'loaded' || g.status !== 'loaded' || h.status !== 'loaded' || w.status === 'loading' || e.isLoading ? jsx('div', {
    'className': cssBuilderInstance.flex.alignCenter.justifyCenter.p24.$,
    'data-testid': 'billing-overview-tab-loading',
    'children': jsx(_$$k3, {})
  }) : jsx(_$$i2, {
    adjustAnnualSeatsAction: e.adjustAnnualSeatsAction,
    adjustRenewalSeats: N,
    annualSeats: h.data,
    contractStartBanner: !e.expiresAt && jsx(_$$E4, {
      team: e.team,
      billingSummary: e.billingSummary
    }),
    invoices: a.data,
    isAnnualProPlan: !!_,
    isELA: !1,
    manageAnnualSeats: v,
    manageMonthlySeats: f,
    manageSeatCounts: j,
    planCanceledProps: e.expiresAt ? {
      expiresAt: e.expiresAt,
      onReactivateClick: y
    } : null,
    planCurrency: e.billingSummary.currency,
    planId: e.team.id,
    planStarting: !!(d && c),
    planType: FOrganizationLevelType.TEAM,
    renewalConfirmed: C,
    seatCountsWithSplit: g.data,
    shouldAutoRenew: !0,
    showPlanSubscriptionCard: !!d,
    viewAllInvoices: x,
    viewInvoice: b
  });
}
function aR(e) {
  return jsx(TrackingProvider, {
    name: _$$e4.BILLING_OVERVIEW_TAB,
    properties: {
      teamId: e.team.id
    },
    children: jsx(aA, {
      ...e
    })
  });
}
function aO(e) {
  let t = useDispatch();
  let a = _$$R3();
  let n = useCallback((a, n) => {
    t(selectViewAction({
      view: 'teamAdminConsole',
      teamId: e.team.id,
      teamAdminConsoleViewTab: DashboardSections.BILLING,
      teamAdminConsoleViewSecondaryTab: a,
      ...(n?.planInvoiceId && {
        initialHighlightedInvoiceId: n.planInvoiceId
      })
    }));
  }, [t, e.team.id]);
  let [s, o, d] = _$$t2.useManagedTabs({
    overview: !0,
    invoices: !0
  }, e.activeTab, n);
  let c = bQ({
    planType: FOrganizationLevelType.TEAM,
    planId: e.team.id
  }, {
    revalidateOnMount: !0
  });
  let _ = useMemo(() => function (e, t) {
    if (!e.plan_canceled) return null;
    let a = [e.annual_subscription, e.monthly_subscription].map(e => e?.canceled_at ? e?.current_period_end : null).filter(isNotNullish);
    let n = a.filter(e => _$$A(e).isAfter(t));
    let s = ad()(n, e => _$$A(e).valueOf());
    if (s) return _$$A(s).toDate();
    let i = a.filter(e => _$$A(e).isBefore(t));
    let r = al()(i, e => _$$A(e).valueOf());
    return r ? _$$A(r).toDate() : null;
  }(e.billingSummary, a), [e.billingSummary, a]);
  let u = useMemo(() => e.isBillingSummaryLoading || c.status !== 'loaded' ? null : _$$l({
    teamBillingSummary: e.billingSummary,
    hasOpenInvoice: !!c.data.find(e => e.state === qH.OPEN),
    currentDate: a
  }), [a, c.data, c.status, e.billingSummary, e.isBillingSummaryLoading]);
  return jsxs(Fragment, {
    children: [jsx(_$$p3, {
      children: jsx(_$$s4, {
        planType: FOrganizationLevelType.TEAM
      })
    }), jsx(TrackingProvider, {
      name: _$$e4.BILLING_VIEW,
      properties: {
        teamId: e.team.id
      },
      children: jsxs('div', {
        className: cssBuilderInstance.hFull.flex.flexColumn.$,
        children: [jsx(ah, {
          selectedTab: DashboardSections.BILLING,
          teamId: e.team.id,
          secondaryTabs: jsxs(_$$t2.TabStrip, {
            manager: d,
            children: [jsx(_$$t2.Tab, {
              ...s.overview,
              'data-onboarding-key': l4,
              'children': getI18nString('team_view.toolbar.billing.overview')
            }), jsx(_$$t2.Tab, {
              ...s.invoices,
              children: getI18nString('team_view.toolbar.billing.invoices')
            })]
          }),
          rightContent: jsx(_$$p4, {
            isLoading: e.isBillingSummaryLoading
          })
        }), jsxs('div', {
          className: 'billing_view--tabPanelContainer--Y7VJk',
          children: [jsx(_$$t2.TabPanel, {
            ...o.overview,
            children: jsx(aR, {
              team: e.team,
              setActiveTab: n,
              billingSummary: e.billingSummary,
              expiresAt: _,
              isLoading: e.isBillingSummaryLoading,
              adjustAnnualSeatsAction: u
            })
          }), jsx(_$$t2.TabPanel, {
            ...o.invoices,
            children: jsx(ak, {
              teamId: e.team.id,
              billingSummary: e.billingSummary,
              isLoading: e.isBillingSummaryLoading,
              adjustAnnualSeatsAction: u
            })
          })]
        })]
      })
    })]
  });
}
function aP(e) {
  let t = useDispatch();
  let a = useTeamPlanPublicInfo();
  let n = a?.data?.tier === FPlanNameType.STUDENT;
  let [s, o, d] = _$$t2.useManagedTabs({
    'abandoned-drafts': !0,
    'connected-projects': !n
  }, e.activeTab, useCallback(a => {
    t(selectViewAction({
      view: 'teamAdminConsole',
      teamId: e.team.id,
      teamAdminConsoleViewTab: DashboardSections.CONTENT,
      teamAdminConsoleViewSecondaryTab: a
    }));
  }, [t, e.team.id]));
  let c = _$$b5(a?.data?.tier);
  return jsx(TrackingProvider, {
    name: _$$e4.CONTENT_VIEW,
    properties: {
      teamId: e.team.id
    },
    children: jsxs('div', {
      className: cssBuilderInstance.hFull.flex.flexColumn.$,
      children: [jsx(ah, {
        selectedTab: DashboardSections.CONTENT,
        teamId: e.team.id,
        secondaryTabs: jsxs(_$$t2.TabStrip, {
          manager: d,
          children: [jsx(_$$t2.Tab, {
            ...s['abandoned-drafts'],
            children: getI18nString('team_view.toolbar.drafts')
          }), jsxs(_$$t2.Tab, {
            ...s['connected-projects'],
            ...(c && {
              'data-onboarding-key': _$$k6
            }),
            children: [getI18nString('team_view.toolbar.connected_projects'), c && jsx(_$$Q3, {})]
          })]
        })
      }), jsxs('div', {
        className: 'content_view--tabPanelContainer--2h2yj',
        children: [jsx(_$$t2.TabPanel, {
          ...o['abandoned-drafts'],
          children: jsx(_$$M, {
            planType: OrganizationType.TEAM,
            team: e.team
          })
        }), jsx(_$$t2.TabPanel, {
          ...o['connected-projects'],
          height: 'fill',
          children: jsx(_$$k5, {
            showResourceConnectionInviteModal: e.showResourceConnectionInviteModal,
            showResourceConnectionFlyout: e.showResourceConnectionFlyout
          })
        })]
      })]
    })
  });
}
let aq = 'dismissed_dangling_team_user_backfill_banner';
let a$ = liveStoreInstance.Query({
  fetch: async ({
    teamId: e
  }) => (await teamAPIClient.showDanglingTeamUserBackfillBanner({
    teamId: e
  })).data
});
export function $$aB1(e, t) {
  let a = useSelector(t => t.teams[e]);
  let n = selectCurrentUser();
  let s = useSelector(t => t.teamMembersByTeamId[e]);
  return useMemo(() => t.transform(e => {
    if (!n || !a || !s) return {};
    let t = e.team?.isOwner;
    let i = e.team?.canAdmin;
    let r = e.team?.canEdit;
    return Object.entries(s).reduce((e, [a, n]) => {
      let s = n.team_role?.level || -1;
      e[a] = {
        ...n,
        canEditRole: !!n.team_role && canPerformActionBasedOnLevel(n.team_role, !!i, !!r),
        canMakeOwner: !!(n.team_role && t),
        canMakeAdmin: !!(n.team_role && i),
        canRemoveUser: s < AccessLevelEnum.OWNER
      };
      return e;
    }, {});
  }), [n, a, s, t]);
}
export function $$aG0(e) {
  let t;
  let a = useDispatch();
  let n = useSelector(e => e.teams);
  let s = n[e.teamId];
  let k = useTeamPlanUser();
  let E = useIsTeamAdminUser(k);
  let C = E.status === 'loaded' && isSelectedTeamAdminConsoleMissingResources({
    isAdminTeam: E.data,
    teamId: e.teamId,
    teamAdminConsoleViewTab: e.selectedTab,
    teams: n
  });
  let S = getSelectedView();
  let N = vS(S);
  useEffect(() => {
    C && a(selectViewAction({
      view: 'resourceUnavailable',
      resourceType: N
    }));
  }, [C, a, N]);
  _$$w(s?.id);
  let I = selectCurrentUser();
  let T = useSubscription(TeamById, {
    teamId: e.teamId
  });
  let R = useMemo(() => T.transform(e => ({
    canAdmin: !!e.team?.canAdmin,
    canEdit: !!e.team?.canEdit,
    canRead: !!e.team?.canRead
  })), [T]);
  let D = useSelector(e => e.loadingState);
  let P = useSelector(e => e.teamBilling);
  let U = useSelector(e => e.dropdownShown);
  let F = $$aB1(e.teamId, T);
  let q = function (e, t) {
    let a = useDispatch();
    let n = useSelector(t => e && t.userTeamFlags?.[e]?.[aq]);
    let [s] = IT(a$({
      teamId: e
    }), {
      enabled: !!e && getFeatureFlags().dangling_team_users_backfill_banner && t === DashboardSections.MEMBERS
    });
    let {
      show_banner
    } = s.status === 'loaded' ? s.data.meta : {
      show_banner: !1
    };
    return e && show_banner && !n ? jsx(wr, {
      color: Sn.LIGHT_BLUE,
      onClose: () => {
        a(bE({
          all_team_flags: [{
            team_id: e,
            flags: {
              [aq]: !0
            }
          }]
        }));
      },
      trackingContext: 'Team Admin Console View Banner',
      trackingProperties: {
        teamId: e,
        source: 'team_admin_dangling_team_user_backfill_banner'
      },
      children: jsx(AutoLayout, {
        horizontalAlignItems: 'end',
        width: 'fill-parent',
        children: jsxs(AutoLayout, {
          horizontalAlignItems: 'start',
          children: [jsx(_$$b, {}), jsx('span', {
            children: renderI18nText('team_admin.members_tab.fixed_issue_members_list')
          }), jsx(Link, {
            href: 'https://help.figma.com/hc/articles/26628690415255',
            children: renderI18nText('team_admin.members_tab.fixed_issue_members_list_read_more')
          })]
        })
      })
    }) : null;
  }(e.teamId, e.selectedTab);
  let $ = _$$R();
  let G = _$$R2(e.teamId);
  let z = y3(s?.created_at, s?.last_upgraded_at);
  let V = s && (G || e.selectedTab === DashboardSections.SETTINGS && s.pro_team);
  let W = Ti(V ? {
    planId: s.id,
    planType: FOrganizationLevelType.TEAM
  } : null);
  useEffect(() => {
    if (s) {
      if ($) {
        let e = Be.loadingKeyForPayload({
          teamId: s.id
        });
        isLoading(D, e) || isLoaded(D, e) || a(Be({
          teamId: s.id
        }));
      }
      if (e.selectedTab === DashboardSections.BILLING) {
        let e = Be.loadingKeyForPayload({
          teamId: s.id
        });
        isLoading(D, e) || isLoaded(D, e) || a(Be({
          teamId: s.id
        }));
      } else if (e.selectedTab === DashboardSections.MEMBERS) {
        let e = Be.loadingKeyForPayload({
          teamId: s.id
        });
        let t = fetchTeamMembersThunk.loadingKeyForPayload({
          teamId: s.id
        });
        isLoading(D, t) || isLoaded(D, t) || a(fetchTeamMembersThunk({
          teamId: s.id
        }));
        isLoading(D, e) || isLoaded(D, e) || a(Be({
          teamId: s.id
        }));
      } else if (e.selectedTab === DashboardSections.SETTINGS) {
        let e = Be.loadingKeyForPayload({
          teamId: s.id
        });
        isLoading(D, e) || isLoaded(D, e) || a(Be({
          teamId: s.id
        }));
      }
    }
  }, [a, e.selectedTab, D, s, G, $, V]);
  let H = useSubscription(TeamAdminSettingsPage, {
    teamId: e.teamId
  }, {
    enabled: e.selectedTab === DashboardSections.SETTINGS
  });
  let Y = getResourceDataOrFallback(H.data?.team);
  let J = useMemo(() => F.unwrapOr({}), [F]);
  if (!I || R.status === 'loaded' && !R.data.canAdmin || !s) {
    return jsx(_$$S3, {
      resourceType: EntityType.TEAM
    });
  }
  let K = !1;
  let X = !0;
  let Q = e.selectedTab;
  switch (e.selectedTab === DashboardSections.DASHBOARD && (!(s.pro_team && R.status === 'loaded' && R.data?.canAdmin) || s.student_team) && (Q = DashboardSections.MEMBERS), Q) {
    case DashboardSections.DASHBOARD:
      if ($) {
        t = jsx(_$$i, {
          teamBilling: P
        });
        X = !1;
        break;
      }
      t = jsx(B, {
        team: s
      });
      X = !1;
      K = isLoading(D, Be.loadingKeyForPayload({
        teamId: s.id
      }));
      break;
    case DashboardSections.MEMBERS:
      K = F.status === 'loading' || R.status === 'loading' || isLoading(D, fetchTeamMembersThunk.loadingKeyForPayload({
        teamId: s.id
      })) || isLoading(D, Be.loadingKeyForPayload({
        teamId: s.id
      }));
      let ee = {
        ...s,
        canAdmin: !!R.data?.canAdmin,
        canRead: !!R.data?.canRead,
        canEdit: !!R.data?.canEdit
      };
      t = jsx(e8, {
        team: ee,
        dispatch: a,
        membersList: J,
        currentMemberId: I?.id,
        dropdownShown: U,
        billing: P
      }, `admin-team-members-${s.id}`);
      break;
    case DashboardSections.BILLING:
      let et = Be.loadingKeyForPayload({
        teamId: s.id
      });
      X = !1;
      t = jsx(aO, {
        team: s,
        activeTab: getBillingSection(e.selectedSecondaryTab),
        billingSummary: P.summary,
        isBillingSummaryLoading: isLoading(D, et) || !isLoaded(D, et),
        nextPostBillingRemodelGaRenewal: P.summary.analyze_data_contract_v2_start
      });
      break;
    case DashboardSections.SETTINGS:
      K = isLoading(D, Be.loadingKeyForPayload({
        teamId: s.id
      })) || !Y;
      t = jsx(tG, {
        team: s,
        settingsData: Y,
        userId: I?.id,
        billing: P
      });
      break;
    case DashboardSections.CONTENT:
      X = !1;
      t = jsx(aP, {
        team: s,
        activeTab: getMemberSection(e.selectedSecondaryTab),
        showResourceConnectionInviteModal: e.showResourceConnectionInviteModal,
        showResourceConnectionFlyout: e.showResourceConnectionFlyout
      });
      break;
    case DashboardSections.DRAFTS:
      t = jsx(_$$M, {
        planType: OrganizationType.TEAM,
        team: s
      });
      break;
    default:
      return throwTypeError(Q);
  }
  V && (K ||= W.status === 'loading');
  let en = K || R.status === 'loading' || C;
  return jsx(_$$r2, {
    containerClass: 'team_admin_console_view--fileBrowserContentContainer---V4EB',
    scrollableContainerClass: 'team_admin_console_view--fileBrowserScrollableContainer--njnP5',
    toolbar: jsx(_$$g, {}),
    banner: $ && !G ? jsx(_$$_, {
      entryPoint: _$$Y2.FILE_BROWSER
    }) : null,
    belowToolbarBanner: q,
    content: jsxs(Fragment, {
      children: [en ? jsx('div', {
        className: 'admin_settings_page--container--LZSr8',
        children: jsx(LoadingSpinner, {
          className: 'admin_settings_page--innerLoadingSpinner--cXsGF'
        })
      }) : jsxs(Fragment, {
        children: [X && jsx(ah, {
          selectedTab: Q,
          teamId: e.teamId,
          billing: P
        }), t]
      }), z && jsx(_$$d, {
        isTeam: !0,
        team: s
      }), jsx(_$$p3, {
        children: jsx(an, {})
      })]
    }),
    errorBoundaryConfig: {
      figmaTeam: _$$e.SCALE,
      boundaryKeySuffix: 'TeamAdminConsoleView'
    }
  });
}
export const TeamAdminConsoleView = $$aG0;
export const useTeamMembers = $$aB1;