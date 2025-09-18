import U from 'classnames';
import { produce } from 'immer';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { $8, b8, cJ, Cp, Ee, Gb, hV, Hy, kL, Mc, n$, nf, PJ, r2, Sx, U0, Uj, VG, Wu, xw, Y8 } from '../469e6e40/123707';
import { UW } from '../469e6e40/142718';
import { E as _$$E2 } from '../469e6e40/190466';
import { pp } from '../469e6e40/241454';
import { m as _$$m2 } from '../469e6e40/248185';
import { y as _$$y } from '../469e6e40/261450';
import { lJ } from '../469e6e40/336481';
import { p as _$$p3 } from '../469e6e40/348454';
import { _ as _$$_, x as _$$x } from '../469e6e40/446220';
import { dK, yE } from '../469e6e40/471025';
import { mC } from '../469e6e40/488538';
import { r as _$$r2 } from '../469e6e40/505264';
import { ep as _$$ep, Pt, qj, QV, VS } from '../469e6e40/512236';
import { km, W3 } from '../469e6e40/519291';
import { A as _$$A2 } from '../469e6e40/557114';
import { J as _$$J3 } from '../469e6e40/564885';
import { J as _$$J4 } from '../469e6e40/855786';
import { Y as _$$Y2 } from '../469e6e40/924996';
import { getRumLoggingConfig } from '../905/16237';
import { ModalRootComponent } from '../905/38914';
import { Ef } from '../905/81982';
import { s as _$$s2 } from '../905/82276';
import { e as _$$e5 } from '../905/86132';
import { registerModal } from '../905/102752';
import { KindEnum } from '../905/129884';
import { hideModal, popModalStack, showModalHandler } from '../905/156213';
import { ServiceCategories as _$$e } from '../905/165054';
import { j as _$$j } from '../905/206476';
import { h as _$$h } from '../905/207101';
import { UNASSIGNED } from '../905/247093';
import { H as _$$H } from '../905/256791';
import { B as _$$B } from '../905/261906';
import { Label } from '../905/270045';
import { Cj } from '../905/270084';
import { Checkbox } from '../905/274480';
import { U as _$$U } from '../905/275247';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { R as _$$R } from '../905/304671';
import { collaboratorSet, designSet } from '../905/332483';
import { $ as _$$$, V as _$$V } from '../905/355181';
import { BannerMessage } from '../905/363675';
import { UpgradeAction } from '../905/370443';
import { Ck } from '../905/372455';
import { getUserId } from '../905/372672';
import { FRequestsStr } from '../905/384551';
import { rq } from '../905/425180';
import { useModalManager } from '../905/437088';
import { GroupType } from '../905/441038';
import { k as _$$k3 } from '../905/443820';
import { trackEventAnalytics } from '../905/449184';
import { o as _$$o } from '../905/451156';
import { U as _$$U2 } from '../905/455766';
import { AutoLayout, Spacer } from '../905/470281';
import { b as _$$b } from '../905/484176';
import { H as _$$H2 } from '../905/507464';
import { ProductAccessTypeEnum, ViewAccessTypeEnum } from '../905/513035';
import { Dd, OJ } from '../905/519092';
import { APILoadingStatus } from '../905/520829';
import { Button } from '../905/521428';
import { VisualBellIcon } from '../905/576487';
import { Pf } from '../905/590952';
import { AdvancedSet } from '../905/596651';
import { p as _$$p } from '../905/597320';
import { getFeatureFlags } from '../905/601108';
import { setupThemeContext } from '../905/614223';
import { e as _$$e4 } from '../905/621515';
import { K as _$$K2 } from '../905/628118';
import { getResourceDataOrFallback } from '../905/663269';
import { In } from '../905/672640';
import { BannerButton } from '../905/692618';
import { P as _$$P } from '../905/697522';
import { IX } from '../905/712921';
import { u as _$$u } from '../905/774364';
import { OrganizationType } from '../905/833838';
import { TextWithTruncation } from '../905/838445';
import { useCurrentUserOrg } from '../905/845253';
import { tb as _$$tb } from '../905/848667';
import { Um } from '../905/848862';
import { EL, F_ } from '../905/858282';
import { XHR } from '../905/910117';
import { debounce } from '../905/915765';
import { A as _$$A } from '../905/920142';
import { hideDropdownAction, selectViewAction } from '../905/929976';
import { lQ } from '../905/934246';
import { sx as _$$sx } from '../905/941192';
import { b as _$$b2 } from '../905/946806';
import { A as _$$A4 } from '../905/956262';
import { h1 } from '../905/986103';
import { F4, v$ } from '../1881/125927';
import { A as _$$A3 } from '../3850/566892';
import { b as _$$b3 } from '../4452/320061';
import { B as _$$B2 } from '../4452/541264';
import { v as _$$v } from '../4452/562448';
import { VU, zx } from '../4452/650793';
import { s as _$$s3 } from '../cssbuilder/589278';
import { EKN, fQh, swf } from '../figma_app/6204';
import { II } from '../figma_app/11182';
import { getPermissionLevelNameCapitalized } from '../figma_app/12796';
import { useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355';
import { fAD, lRB } from '../figma_app/27776';
import { yo } from '../figma_app/28323';
import { getPaidStatus } from '../figma_app/35887';
import { AdminRequestDashOrgInfo, OrgIdpGroupsView, OrgInviteModalView, OrgUsersByIdView, WorkspacesCanAdminView } from '../figma_app/43951';
import { mapFileTypeToEditorType } from '../figma_app/53721';
import { BannerInset } from '../figma_app/59509';
import { G as _$$G, h as _$$h2 } from '../figma_app/124713';
import { IM } from '../figma_app/149367';
import { Xf } from '../figma_app/153916';
import { f as _$$f } from '../figma_app/157238';
import { JR, Wi } from '../figma_app/162641';
import { getGroupTypeLabel } from '../figma_app/173467';
import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241';
import { FMemberRoleType, FOrganizationLevelType, FPlanAccessType, FPlanFeatureType, FPlanNameType, FProductAccessType, FUserRoleType, FUserTypeClassification } from '../figma_app/191312';
import { getProductAccessTypeByKey } from '../figma_app/217457';
import { c$, gw } from '../figma_app/236327';
import { Bg } from '../figma_app/246699';
import { N as _$$N } from '../figma_app/268271';
import { DialogTitle, DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader } from '../figma_app/272243';
import { useSubscription } from '../figma_app/288654';
import { usePlanInviteWithSeatExperiment } from '../figma_app/297957';
import { V as _$$V2 } from '../figma_app/312987';
import { logAndTrackCTA } from '../figma_app/314264';
import { L7 } from '../figma_app/329496';
import { du } from '../figma_app/336853';
import { p as _$$p2 } from '../figma_app/353099';
import { m as _$$m } from '../figma_app/369596';
import { isValidEmail } from '../figma_app/416935';
import { bv, IV, uw, Vq } from '../figma_app/421401';
import { e6 as _$$e3, Z as _$$Z, B7, hn, JB, O4, pv, RF, X_ } from '../figma_app/425283';
import { useIsOrgAdminUser, useTeamPlanFeatures, useTeamPlanPublicInfo, useTeamPlanUser } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { Y as _$$Y3 } from '../figma_app/515088';
import { NJ } from '../figma_app/518077';
import { $u, cE, oi } from '../figma_app/527041';
import { userFlagExistsAtomFamily } from '../figma_app/545877';
import { y2 } from '../figma_app/563413';
import { JT, Qi } from '../figma_app/599327';
import { d as _$$d } from '../figma_app/603561';
import { aM as _$$aM, CC, dL, k_, Mj, o8, PR, RC, rH, w6, XO, zT } from '../figma_app/609194';
import { C5, hX } from '../figma_app/614170';
import { $z, Me } from '../figma_app/617427';
import { isProrationBillingEnabledForCurrentPlan } from '../figma_app/618031';
import { sortByPropertyWithOptions } from '../figma_app/656233';
import { jL } from '../figma_app/658324';
import { EQ, mm, MX, NV, RG } from '../figma_app/684446';
import { a9 as _$$a, Ew, oo, vu } from '../figma_app/741211';
import { K as _$$K, O as _$$O } from '../figma_app/748328';
import { isCoreProductAccessType, ProductAccessMap } from '../figma_app/765689';
import { isMobileUA } from '../figma_app/778880';
import { parsePxInt } from '../figma_app/783094';
import { TrackedDiv, TrackingProvider, useTracking, withTracking, wrapWithTracking } from '../figma_app/831799';
import { ps, ZY } from '../figma_app/845611';
import { SectionType } from '../figma_app/858344';
import { MenuSeparator } from '../figma_app/860955';
import { BadgeColor } from '../figma_app/919079';
import { truncate } from '../figma_app/930338';
import { findMainWorkspaceUser, getUserBadge, hasScimMetadata } from '../figma_app/951233';
import { ColumnName, DefaultFilters, DefaultSortConfig, FilterKeys, getDefaultCounts, isUserObject, LastEditPeriod, SpecialUserTypes } from '../figma_app/967319';
import { uo } from '../figma_app/990058';
import { Fb, MB } from '../figma_app/996356';
import eT from '../vendor/128080';
let F = U;
let eg = new class {
  constructor() {
    this.TeamsSchemaValidator = createNoOpValidator();
  }
  getTeams(e) {
    return this.TeamsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/license_group/${e.licenseGroupId}/teams`, APIParameterUtils.toAPIParameters({
      includeSecretTeams: e.includeSecretTeams
    })));
  }
  submitReview(e) {
    return XHR.post(`/api/license_group/${e.licenseGroupId}/review`);
  }
  getMemberCSVExport(e) {
    return XHR.post(`/api/billing_group/${e.billingGroupId}/export_members`);
  }
}();
let eb = registerModal(({
  licenseGroupId: e,
  licenseGroupName: t,
  orgId: a
}) => {
  let s = useDispatch();
  return jsx(Dd, {
    headerClassName: 'complete_license_group_review_modal--header--ee93k',
    maxWidth: 360,
    minWidth: 360,
    fixedTop: !1,
    title: getI18nString('license_group_admin.billing_banner.review.confirmation_modal.title.seat_rename', {
      billingGroupName: t
    }),
    confirmText: getI18nString('general.confirm'),
    onConfirm: () => {
      eg.submitReview({
        licenseGroupId: e
      }).then(({
        data: e
      }) => s(yo({
        licenseGroup: e.meta,
        orgId: a
      }))).catch(e => {
        s(VisualBellActions.enqueue({
          error: !0,
          message: e.message
        }));
      });
    },
    children: jsx(TextWithTruncation, {
      children: renderI18nText('license_group_admin.billing_banner.review.confirmation_modal.body.seat_rename')
    })
  });
}, 'CompleteLicenseGroupReviewModal');
var eN = (e => (e[e.INVITE_USERS = 0] = 'INVITE_USERS', e[e.ADD_MEMBERS = 1] = 'ADD_MEMBERS', e))(eN || {});
function eI(e) {
  switch (e) {
    case 1:
      return {
        name: getI18nString('add_unassigned_members_modal.add_members_tab'),
        view: 1
      };
    case 0:
      return {
        name: getI18nString('add_unassigned_members_modal.invite_users_tab'),
        view: 0
      };
  }
}
let eA = eT;
function e9(e) {
  return 'orgUser' in e && void 0 !== e.orgUser;
}
function te() {
  return jsx(Fragment, {
    children: '\u2013'
  });
}
let tt = e => e.last_seen || void 0;
let ta = e => e.last_edit || void 0;
function tn(e) {
  return e9(e) ? e.orgUser.scim_metadata ? e.orgUser.scim_metadata[e.org.featured_scim_metadata] : void 0 : e.idpUser.scim_metadata ? e.idpUser.scim_metadata[e.org.featured_scim_metadata] : void 0;
}
function ts(e) {
  let t;
  let a = e.orgUser.active_seat_type?.key ?? ViewAccessTypeEnum.VIEW;
  switch (a) {
    case ProductAccessTypeEnum.COLLABORATOR:
      t = getI18nString('add_unassigned_members_modal.bundles.collaborator.tooltip');
      break;
    case ProductAccessTypeEnum.DEVELOPER:
      t = getI18nString('add_unassigned_members_modal.bundles.developer.tooltip');
      break;
    case ProductAccessTypeEnum.EXPERT:
      t = getI18nString('add_unassigned_members_modal.bundles.expert.tooltip');
      break;
    case ProductAccessTypeEnum.CONTENT:
      t = getI18nString('add_unassigned_members_modal.bundles.content.tooltip');
      break;
    case ViewAccessTypeEnum.VIEW:
      t = getI18nString('add_unassigned_members_modal.bespoke_seat_type.view.tooltip');
      break;
    default:
      throwTypeError(a);
  }
  return jsx('div', {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': t,
    'data-testid': `${a.toString()}-seat-icon-wrapper-${e.orgUser.id}`,
    'children': jsx(_$$B, {
      type: a,
      size: '16'
    })
  });
}
function ti(e) {
  let t = [];
  e.orgUser.design_paid_status === FPlanFeatureType.FULL && t.push(jsx('div', {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('add_unassigned_members_modal.design_file_icon.tooltip.seat_rename'),
    'children': jsx(_$$H2, {
      'data-testid': `design-file-icon-${e.orgUser.id}`
    })
  }, `design-file-icon-${e.orgUser.id}`));
  getPaidStatus(e.orgUser, FProductAccessType.DEV_MODE) === FPlanFeatureType.FULL && t.push(jsx('div', {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('add_unassigned_members_modal.dev_mode_file_icon.tooltip'),
    'children': jsx(_$$P, {
      'data-testid': `devmode-file-icon-${e.orgUser.id}`
    })
  }, `devmode-file-icon-${e.orgUser.id}`));
  e.orgUser.whiteboard_paid_status === FPlanFeatureType.FULL && t.push(jsx('div', {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('add_unassigned_members_modal.whiteboard_file_icon.tooltip.seat_rename'),
    'children': jsx(_$$j, {
      'data-testid': `figjam-file-icon-${e.orgUser.id}`
    })
  }, `figjam-file-icon-${e.orgUser.id}`));
  return jsx(AutoLayout, {
    spacing: 4,
    children: t
  });
}
function tr(e) {
  if (!e9(e.item)) {
    let t = e.item.idpUser.isOrgInvite ? {
      text: getI18nString('members_table.org_user_name_cell.pending_badge'),
      dataTooltip: getI18nString('members_table.idp_user.pending_invite'),
      dataTooltipType: KindEnum.TEXT,
      dataTooltipShowAbove: !0,
      dataTooltipTimeout: 0
    } : {
      text: getI18nString('members_table.org_user_name_cell.pending_scim_badge')
    };
    return jsx(_$$r2, {
      className: U0,
      defaultText: '',
      dispatch: e.item.dispatch,
      entity: e.item.idpUser,
      showTooltip: !0,
      size: 24,
      badge: {
        color: BadgeColor.DEFAULT,
        ...t
      }
    });
  }
  let t = e.item.isMe;
  return jsx(tl, {
    orgUser: e.item.orgUser,
    dispatch: e.item.dispatch,
    isMe: t,
    dataOnboardingKeyPrefix: _$$Z
  });
}
function tl({
  orgUser: e,
  dispatch: t,
  isMe: a,
  dataOnboardingKeyPrefix: s
}) {
  return jsx(_$$r2, {
    'className': U0,
    'dispatch': t,
    'entity': e.user,
    'showIsMe': a,
    'showTooltip': !0,
    'size': 24,
    'badge': getUserBadge(e),
    'isScimUser': hasScimMetadata(e),
    'data-onboarding-key': s ? `${s}-${e.id}` : void 0
  });
}
function to({
  item: e
}) {
  if (!e9(e) || !e.orgUser.last_edit) return jsx(te, {});
  {
    let t = ta(e.orgUser);
    return t ? jsx(Button, {
      variant: 'link',
      onClick: t => {
        t.stopPropagation();
        e.dispatch(showModalHandler({
          type: _$$J3,
          data: {
            planType: OrganizationType.ORG,
            planId: e.orgUser.org_id,
            planUserId: e.orgUser.id,
            planUserDisplayName: e.orgUser.user.handle || e.orgUser.user.email,
            activityType: 'edit'
          }
        }));
      },
      children: jsx(h1, {
        capitalize: !0,
        date: t
      })
    }) : jsx(te, {});
  }
}
function td({
  item: e
}) {
  if (!e9(e)) return jsx(te, {});
  let t = tt(e.orgUser);
  return t ? jsx(h1, {
    capitalize: !0,
    date: t
  }) : jsx(te, {});
}
function tc({
  item: e
}) {
  let t = e9(e) && _$$tb(e.orgUser?.active_seat_upgrade_date);
  return t ? jsx('div', {
    children: renderI18nText('members_table.user_upgrade_date', {
      upgradeDate: t
    })
  }) : jsx(te, {});
}
function t_({
  item: e
}) {
  if (e9(e) && e.orgUser.active_seat_upgrade_date) {
    let t = e.orgUser.active_seat_upgrade_method;
    if (!t) return jsx(te, {});
    let a = Qi(e.orgUser.user.handle, t.upgrade_method, t.reason, t.actor_name, t.resource_name, e.orgUser.active_seat_type?.key);
    if (a) {
      return jsx(TextWithTruncation, {
        truncate: 'line-clamp',
        lineClamp: 2,
        children: a
      });
    }
  }
  return jsx(te, {});
}
function tu({
  item: e,
  areDropdownsDisabled: t,
  workspacesCanMoveTo: a,
  orgUsersByUserId: s
}) {
  if (e9(e)) {
    let i = findMainWorkspaceUser(e.orgUser);
    let r = null;
    if (i?.idp_group) {
      let e = a.find(e => e.id === i.workspace_id)?.name || '';
      let t = jsx('div', {
        className: `${Ck}`,
        children: truncate(e, _$$A2)
      });
      r = jsx(lJ, {
        label: t,
        icon: _$$A3
      });
    } else {
      r = jsx(_$$J4, {
        currentWorkspaceId: findMainWorkspaceUser(e.orgUser)?.workspace_id,
        disabled: t,
        workspacesCanMoveTo: a,
        onChangeWorkspace: t => e.onChangeWorkspace([e.orgUser.id], t)
      });
    }
    let {
      updateReason,
      updateTimestamp
    } = L7(i, s);
    return jsx('div', {
      className: Y8,
      children: jsx(tp, {
        reason: updateReason,
        timestamp: updateTimestamp,
        children: r
      })
    });
  }
  return jsx(te, {});
}
function tm({
  item: e,
  areDropdownsDisabled: t,
  groupsCanMoveUserTo: a,
  orgUsersByUserId: s
}) {
  if (e9(e)) {
    let i = e.orgUser.license_group_member;
    let r = null;
    if (i?.idp_group) {
      let e = a.find(e => e.id === i.license_group_id)?.name || '';
      let t = jsx('div', {
        className: `${Ck}`,
        children: truncate(e, _$$A2)
      });
      r = jsx(lJ, {
        label: t,
        icon: _$$A3
      });
    } else {
      r = jsx(_$$Y2, {
        orgUser: e.orgUser,
        disabled: t,
        groupsCanMoveUserTo: a,
        onChangeLicenseGroup: e.onChangeLicenseGroup
      });
    }
    let {
      updateReason,
      updateTimestamp
    } = mm(e.orgUser.license_group_member, s);
    return jsx('div', {
      className: hV,
      children: jsx(tp, {
        reason: updateReason,
        timestamp: updateTimestamp,
        children: r
      })
    });
  }
  return jsx(te, {});
}
function tp({
  reason: e,
  timestamp: t,
  onboardingKey: a,
  hideTooltip: s,
  children: i
}) {
  if (s || !e || !t) {
    return jsx(Fragment, {
      children: i
    });
  }
  let r = getI18nString('members_table.user_upgrade_reason_and_date.tooltip', {
    upgradeReason: e,
    upgradeDate: new Date(t)
  });
  return jsx('div', {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': r,
    'data-tooltip-show-above': !0,
    'data-tooltip-timeout-delay': 50,
    'data-tooltip-max-width': 300,
    'data-onboarding-key': a,
    'children': i
  });
}
function tb({
  selectedItems: e,
  orgUsersCurrentlyLoading: t,
  moreOrgUsersToFetch: a,
  loadingSelectableUsers: s,
  selectedAll: i,
  totalSelectableOrgUsers: r,
  rowItems: l,
  selectableOrgUsers: o
}) {
  let d = null;
  let c = null;
  let _ = e.map(e => e.orgUser);
  let u = _.map(e => e.id);
  let m = new Set(u);
  let p = u;
  if (i && r === null) {
    return jsx(AutoLayout, {
      children: jsx(Wi, {
        className: _$$s3.h12.w150.$,
        animationType: JR.SHIMMER,
        dataTestId: 'loading-unassigned-select-all'
      })
    });
  }
  let g = !1;
  if (i && r !== null && (g = t || a), g && s) {
    return jsx(AutoLayout, {
      children: jsx(Wi, {
        className: _$$s3.h12.w150.$,
        animationType: JR.SHIMMER,
        dataTestId: 'loading-unassigned-select-all'
      })
    });
  }
  if (g) {
    let e = new Set(l.map(e => e.orgUser).map(e => e.id).filter(e => !m.has(e)));
    p = o.filter(t => !e.has(t.id)).map(e => e.id);
  }
  let h = (e, t) => jsxs('div', {
    className: 'add_unassigned_members_modal--avatarPile--rJ86G',
    children: [jsx('div', {
      className: 'add_unassigned_members_modal--user1--tV7Tv add_unassigned_members_modal--userBase--6lin9',
      children: jsx(_$$H, {
        user: e.orgUser.user,
        size: Pf.MEDIUM20
      })
    }), jsx('div', {
      className: 'add_unassigned_members_modal--user2---enz4 add_unassigned_members_modal--userBase--6lin9',
      children: jsx(_$$H, {
        user: t.orgUser.user,
        size: Pf.MEDIUM20
      })
    })]
  });
  if (p.length === 0 || e.length === 0) return null;
  if (p.length === 1) {
    d = getI18nString('add_unassigned_members_modal.user_selected', {
      userName: e[0].orgUser.user.handle
    });
    c = jsx(_$$H, {
      user: e[0].orgUser.user
    });
  } else if (p.length === 2) {
    d = getI18nString('add_unassigned_members_modal.user_a_and_user_b_selected', {
      userName1: e[0].orgUser.user.handle,
      userName2: e[1].orgUser.user.handle
    });
    c = h(e[0], e[1]);
  } else {
    let t = p.length - 2;
    d = getI18nString('add_unassigned_members_modal.user_a_and_user_b_and_n_others_selected', {
      userName1: e[0].orgUser.user.handle,
      userName2: e[1].orgUser.user.handle,
      remainingCount: t
    });
    c = h(e[0], e[1]);
  }
  return jsxs(AutoLayout, {
    spacing: 8,
    children: [c, jsx(TextWithTruncation, {
      children: d
    })]
  });
}
function tv({
  org: e,
  licenseGroup: t,
  workspace: a,
  workspaceId: l,
  defaultFilters: o,
  queueOrgUsersRefetch: d,
  invoices: c,
  addPendingOrgUserIds: _
}) {
  let {
    properties
  } = useTracking();
  let [m, g] = useState(!1);
  let [h, v] = useState(DefaultSortConfig);
  let f = useCallback(e => {
    v(t => {
      let a = e === ColumnName.SEARCH_SCORE ? ColumnName.SEARCH_SCORE : ColumnName.NAME;
      return {
        columnName: a,
        isReversed: t.columnName === a && !t.isReversed
      };
    });
  }, [v]);
  let [j, y] = useState('');
  let w = useCallback(e => {
    y(e);
    e ? f(ColumnName.SEARCH_SCORE) : e === '' && f(DefaultSortConfig.columnName);
  }, [f, y]);
  let k = useMemo(() => debounce(w, 300), [w]);
  let [C, S] = useState(o);
  let I = e => {
    S({
      ...C,
      ...e
    });
  };
  let [T, A] = useState(new Date().toISOString());
  let {
    sortedUsers,
    status,
    fetchMore
  } = oo({
    searchQuery: j !== '' ? j : void 0,
    sort: h,
    filter: C
  });
  let {
    status: _status,
    users,
    totalSelectable
  } = Ew({
    searchQuery: j !== '' ? j : void 0,
    filter: C,
    selectedAll: m
  });
  let q = status !== 'loaded' || !!fetchMore;
  let B = _$$a();
  let G = useDispatch();
  let z = _$$R();
  let V = useMemo(() => sortedUsers.map(t => ({
    org: e,
    isMe: B.user_id === t.user_id,
    orgUser: t,
    dispatch: G
  })), [e, sortedUsers, B, G]);
  if (useEffect(() => {
    V.length === 0 && A(new Date().toISOString());
  }, [V]), !t && !a) {
    return null;
  }
  if (!j && eA()(C, o) && V.length === 0 && !q) {
    return jsxs(AutoLayout, {
      direction: 'vertical',
      horizontalAlignItems: 'center',
      verticalAlignItems: 'center',
      height: 160,
      spacing: 0,
      dataTestId: 'add-unassigned-modal-empty-content',
      children: [jsx(TextWithTruncation, {
        color: 'secondary',
        children: renderI18nText('add_unassigned_members_modal.no_unassigned_users')
      }), jsx(TextWithTruncation, {
        color: 'secondary',
        children: renderI18nText(t?.id ? 'add_unassigned_members_modal.all_users_have_been_assigned_billing_groups' : 'add_unassigned_members_modal.all_users_have_been_assigned_workspaces', {
          orgName: e.name
        })
      })]
    });
  }
  let Y = !!t;
  let K = function (e, t, a) {
    let s = [];
    s.push({
      name: _$$aM(ColumnName.NAME, e.featured_scim_metadata),
      sorting_key: ColumnName.NAME,
      className: Mc,
      getSortValue: e => e.orgUser.user.handle || e.orgUser.user.email,
      cellComponent: e => jsx(tl, {
        orgUser: e.orgUser,
        dispatch: e.dispatch,
        isMe: e.isMe
      })
    });
    t && (a ? s.push({
      name: getI18nString('add_unassigned_members_modal.role_column.seat_type'),
      className: '',
      cellComponent: ts
    }) : s.push({
      name: getI18nString('add_unassigned_members_modal.role_column.seat_rename'),
      className: '',
      cellComponent: ti
    }));
    return s;
  }(e, Y, z);
  let Q = Y && (c?.length || 0) > 0;
  return jsxs(Fragment, {
    children: [jsxs('div', {
      className: _$$s3.p16.pb8.flex.flexColumn.$,
      children: [jsx(TextWithTruncation, {
        children: t?.id ? renderI18nText('add_unassigned_members_modal.billing_group_description', {
          licenseGroupName: t?.name
        }) : renderI18nText('add_unassigned_members_modal.workspace_description', {
          workspaceName: a?.name
        })
      }), jsx(y2, {
        styleOverrides: {
          width: '100%',
          marginTop: '16px',
          marginBottom: '8px'
        },
        onChange: k,
        query: j,
        clearSearch: () => w(''),
        placeholder: getI18nString('add_unassigned_members_modal.search_bar.placeholder')
      }), Q && jsx('div', {
        'className': 'add_unassigned_members_modal--filters--20WXO',
        'data-testid': 'add-unassigned-members-tab-filters',
        'children': jsx(Checkbox, {
          checked: C.newEditorFilter,
          onChange: () => {
            let e = !C.newEditorFilter;
            I({
              newEditorFilter: e
            });
            logAndTrackCTA({
              ...properties,
              filterType: 'NewEditorFilter',
              isFilterEnabled: e
            });
          },
          label: jsx(Label, {
            children: renderI18nText('members_table.menu_bar_filter.new_since_last_invoice')
          })
        })
      })]
    }), jsx(Cj, {
      columns: K,
      emptyContent: jsx('div', {
        'className': _$$s3.mt24.$,
        'data-testid': 'add-unassigned-modal-empty-search-content',
        'children': jsx(TextWithTruncation, {
          color: 'secondary',
          children: renderI18nText('add_unassigned_members_modal.no_unassigned_users_found')
        })
      }),
      footer: a => {
        let s = a.map(e => e.orgUser.id);
        let i = () => {
          l && G(uo({
            orgId: e.id,
            lastUpdateTimestampOverride: T,
            successCallback: () => {
              G(VisualBellActions.enqueue({
                message: s.length <= _$$O ? getI18nString('add_unassigned_members_modal.workspaces_success_message.instant', {
                  numUsers: s.length
                }) : getI18nString('add_unassigned_members_modal.workspaces_success_message', {
                  numUsers: s.length
                }),
                type: 'workspace-changed'
              }));
            },
            params: {
              org_user_ids: s,
              workspace_id: l
            }
          }));
        };
        let r = () => {
          let a = t?.id;
          a && G(uo({
            orgId: e.id,
            lastUpdateTimestampOverride: T,
            params: {
              org_user_ids: s,
              license_group_id: a
            },
            successCallback: () => {
              G(VisualBellActions.enqueue({
                message: s.length <= _$$O ? getI18nString('add_unassigned_members_modal.billing_groups_success_message.instant', {
                  numUsers: s.length
                }) : getI18nString('add_unassigned_members_modal.billing_groups_success_message', {
                  numUsers: s.length
                }),
                type: 'license-group-changed'
              }));
            }
          }));
        };
        return jsx('div', {
          children: jsxs(AutoLayout, {
            padding: 16,
            children: [jsx(tb, {
              selectedItems: a,
              orgUsersCurrentlyLoading: status !== 'loaded',
              moreOrgUsersToFetch: !!fetchMore,
              loadingSelectableUsers: _status === APILoadingStatus.LOADING,
              selectedAll: m,
              totalSelectableOrgUsers: totalSelectable,
              rowItems: V,
              selectableOrgUsers: users
            }), jsx(Spacer, {}), jsx(_$$$, {
              variant: 'primary',
              disabled: !a.length,
              onClick: () => {
                t ? r() : i();
                G(popModalStack());
                s.length <= _$$O && _(s);
                d();
              },
              dataTestId: 'assign-members-button',
              children: renderI18nText('add_unassigned_members_modal.add_members_button')
            })]
          })
        });
      },
      getItemKey: e => e.orgUser.user_id,
      isLoading: q,
      itemTypeContext: {
        itemType: 'user',
        getSelectedCountString: e => getI18nString('multi_select_list.selected_count_user', {
          numSelected: e
        })
      },
      items: V,
      minContentWidth: 448,
      onFetchMore: fetchMore,
      onSetSortState: f,
      onToggleSelectAll: e => g(!e),
      paddingEnd: 8,
      scrollContainerInnerClassName: 'add_unassigned_members_modal--scrollContainerInner--RDKqP',
      sortState: h,
      styleOverrideClassNames: {
        header: 'add_unassigned_members_modal--header--eVm5d add_unassigned_members_modal--extendedRow--pepxT',
        row: 'add_unassigned_members_modal--row--c5OEj add_unassigned_members_modal--unassignedRowBackgroundStyles--5Z7vK add_unassigned_members_modal--extendedRow--pepxT',
        checkboxColumn: 'add_unassigned_members_modal--checkboxColumn--022zc',
        selectedRow: 'add_unassigned_members_modal--selectedRow--BI4N4 add_unassigned_members_modal--unassignedRowBackgroundStyles--5Z7vK add_unassigned_members_modal--extendedRow--pepxT',
        tableWrapper: 'add_unassigned_members_modal--tableWrapper--VhH73'
      }
    })]
  });
}
let tf = registerModal(({
  licenseGroupId: e,
  workspaceId: t,
  queueOrgUsersRefetch: a,
  invoices: r,
  addPendingOrgUserIds: l
}) => {
  let o = useDispatch();
  let d = useCurrentUserOrg();
  let [c, _] = useState(eN.ADD_MEMBERS);
  let m = useSelector(({
    licenseGroups: t
  }) => e ? t[e] : void 0);
  let g = useSubscription(OrgInviteModalView, {
    workspaceId: t
  }, {
    enabled: !!t
  });
  let h = g.data?.workspace;
  if (!d || e && t) return null;
  let x = {
    ...DefaultFilters
  };
  e ? x.licenseGroupFilter = _$$s2 : t && (x.workspaceFilter = UNASSIGNED);
  return jsx(TrackingProvider, {
    name: 'Add Unassigned Members Modal',
    children: jsx(OJ, {
      title: e => {
        let t = [eI(eN.ADD_MEMBERS), eI(eN.INVITE_USERS)];
        let a = e => {
          _(e.view);
        };
        return jsxs(AutoLayout, {
          children: [t.map(e => jsx(_$$o, {
            onClick: () => a(e),
            tab: e.view,
            selectedTab: c,
            children: jsx(TextWithTruncation, {
              fontSize: 11,
              children: e.name
            })
          }, e.view)), jsx(Spacer, {}), e]
        });
      },
      maxWidth: 480,
      onClose: () => {
        o(popModalStack());
      },
      containerClassName: c === eN.ADD_MEMBERS ? 'add_unassigned_members_modal--unassignedMembersTab--gWAtH' : 'add_unassigned_members_modal--inviteTab--dPRBa',
      innerContainerClassName: _$$s3.hFull.flex.flexColumn.$,
      fixedTop: !0,
      children: c === eN.ADD_MEMBERS ? jsx(tv, {
        org: d,
        licenseGroup: m,
        workspace: h,
        workspaceId: t,
        defaultFilters: x,
        queueOrgUsersRefetch: a,
        invoices: r,
        addPendingOrgUserIds: l
      }) : jsx(v$, {
        buttonClassName: 'add_unassigned_members_modal--multiLineButton--IdSKt',
        descriptionClassName: 'add_unassigned_members_modal--inviteDescription--iMS-D',
        dispatch: o,
        licenseGroupId: e,
        modalWrapperClassName: 'add_unassigned_members_modal--inviteModalWrapper--IPw0O',
        multiLineForm: !0,
        workspaceId: t
      })
    })
  });
}, 'ADD_UNASSIGNED_MEMBERS_MODAL');
function tj(e) {
  let t = _$$R();
  return jsx('div', {
    className: _$$s3.px32.$$if(t, _$$s3.py16, _$$s3.pb24).flex.$,
    style: _$$sx.add({
      minWidth: e.minWidth ?? 0
    }).$,
    children: e.children
  });
}
function ty(e) {
  let t = useDispatch();
  return e.requiresReview ? jsxs(Fragment, {
    children: [jsx(BannerButton, {
      onClick: () => {
        t(showModalHandler({
          type: tf,
          data: {
            licenseGroupId: e.licenseGroup.id,
            queueOrgUsersRefetch: e.queueOrgUsersRefetch,
            invoices: e.invoices,
            addPendingOrgUserIds: e.addPendingOrgUserIds
          }
        }));
      },
      children: getI18nString('license_group_admin.billing_banner.review.add_members')
    }), jsx(BannerButton, {
      onClick: () => {
        t(showModalHandler({
          type: eb,
          data: {
            licenseGroupId: e.licenseGroup.id,
            licenseGroupName: e.licenseGroup.name,
            orgId: e.orgId
          }
        }));
      },
      children: getI18nString('license_group_admin.billing_banner.review.confirm_editors.seat_rename')
    })]
  }) : null;
}
function tw(e) {
  return e.inReviewPeriod && !e.requiresReview ? jsx(_$$U, {}) : jsx(_$$b2, {});
}
function tk(e) {
  let t;
  let a;
  let s = _$$R();
  let i = Xf(e.orgId);
  let r = _$$_(e.licenseGroup.id, {
    enabled: !s
  });
  let l = {};
  r.data?.fullPaidStatusCounts?.forEach(({
    licenseType: e,
    count: t
  }) => {
    if (!isCoreProductAccessType(e)) return;
    let a = getProductAccessTypeByKey(e);
    designSet.has(a) && (l[a] = t);
  });
  let o = i.data?.invoices ?? [];
  let d = C5(o, 'upcoming') || C5(o, 'locked');
  if (i.status === 'loading' || r.status === 'loading') {
    return jsx(tj, {
      children: jsx('div', {
        className: 'x78zum5 xl56j7k x6s0dn4 xe8gcm xh8yej3',
        children: jsx(_$$k3, {
          'data-testid': 'bg-invoice-banner-loading'
        })
      })
    });
  }
  if (i.status !== 'loaded' || !['loaded', 'disabled'].includes(r.status) || !d) return null;
  let _ = hX(o);
  let u = NV(e.licenseGroup, o);
  let m = 'default';
  u ? (m = 'warn', t = getI18nString('license_group_admin.billing_dashboard.billing_banner.review_and_confirm'), a = getI18nString('license_group_admin.billing_banner.review.subtitle.seat_rename')) : (_ ? (m = 'success', t = getI18nString('license_group_admin.billing_banner.completed_at_date_new', {
    date: _$$A(e.licenseGroup.last_reviewed_at).toDate()
  })) : t = getI18nString('license_group_admin.billing_banner.default_new', {
    date: _$$A(d.due_at).toDate()
  }), a = null);
  let p = m === 'warn' ? {
    variant: m
  } : {
    variant: m,
    icon: jsx(tw, {
      inReviewPeriod: _,
      requiresReview: u
    })
  };
  return jsx(tj, {
    minWidth: u && !s ? '31rem' : void 0,
    children: jsxs(BannerInset, {
      ...p,
      'data-testid': 'bg-invoice-banner-msg',
      'children': [jsx(BannerMessage, {
        title: t,
        children: a
      }), jsx(ty, {
        queueOrgUsersRefetch: e.queueOrgUsersRefetch,
        addPendingOrgUserIds: e.addPendingOrgUserIds,
        orgId: e.orgId,
        requiresReview: u,
        licenseGroup: e.licenseGroup,
        invoices: o
      })]
    })
  });
}
function tE(e) {
  let t = useSelector(e => e.selectedView.view !== 'licenseGroup' ? null : e.licenseGroups[e.selectedView.licenseGroupId]);
  let a = useTeamPlanPublicInfo().unwrapOr(null);
  let s = a?.key;
  return s?.parentId && s?.type === FOrganizationLevelType.ORG && t ? jsx(tk, {
    orgId: s.parentId,
    licenseGroup: t,
    queueOrgUsersRefetch: e.queueOrgUsersRefetch,
    addPendingOrgUserIds: e.addPendingOrgUserIds
  }) : null;
}
function tT(e) {
  let t = useDispatch();
  let a = [ps.ORG, e.org.id].toString();
  let [s] = useAtomValueAndSetter(_$$Y3);
  let r = s[a] ?? 0;
  return r === 0 ? null : jsx(TrackedDiv, {
    onClick: () => {
      t(selectViewAction({
        view: 'billingGroupDashboard',
        selectedTab: FRequestsStr.REQUESTS
      }));
    },
    className: _$$s3.cursorPointer.mt24.$,
    children: jsx(AutoLayout, {
      height: 'hug-contents',
      padding: {
        left: 32,
        right: 32
      },
      children: jsxs(AutoLayout, {
        verticalAlignItems: 'center',
        horizontalAlignItems: 'center',
        padding: {
          bottom: 20,
          left: 12,
          top: 16
        },
        height: 75,
        cornerRadius: 8,
        backgroundColor: 'selected',
        width: 'fill-parent',
        children: [jsxs(AutoLayout, {
          spacing: 0,
          direction: 'vertical',
          height: 'hug-contents',
          children: [jsxs(AutoLayout, {
            direction: 'horizontal',
            spacing: 4,
            padding: 0,
            height: 'hug-contents',
            children: [jsx(In, {
              icon: 'share-32'
            }), jsx(TextWithTruncation, {
              fontSize: 13,
              fontWeight: 'medium',
              children: renderI18nText('billing_group_admin.upgrade_request_banner.title', {
                orgName: e.org.name,
                numRequests: renderI18nText('billing_group_admin.upgrade_request_banner.title_num_requests', {
                  numRequests: r
                })
              })
            })]
          }), jsx('div', {
            className: _$$s3.ml36.$,
            children: jsx(TextWithTruncation, {
              fontSize: 11,
              fontWeight: 'regular',
              children: renderI18nText('billing_group_admin.upgrade_request_banner.subtitle')
            })
          })]
        }), jsx(Spacer, {}), jsx('div', {
          className: _$$s3.mr16.$,
          children: jsx(In, {
            icon: 'chevron-right-32'
          })
        })]
      })
    })
  });
}
function tL() {
  let e = useSelector(e => e.currentUserOrgId);
  let t = useSubscription(OrgIdpGroupsView, {
    orgId: e
  });
  let a = (t.status === 'loading' ? [] : getResourceDataOrFallback(t.data?.org?.orgSamlConfigs) ?? []).map(e => e.idpGroups).flat();
  let n = {};
  let s = [];
  a.forEach(e => {
    e.deletedAt || (n[e.id] = e, s.push(e.id));
  });
  return {
    idpGroupIds: s,
    idpGroupsById: n
  };
}
function tD({
  selectedIdpGroupId: e,
  onFilterUpdate: t,
  getCount: a
}) {
  let {
    idpGroupIds,
    idpGroupsById
  } = tL();
  let l = useDispatch();
  let o = Um();
  return idpGroupIds.length ? jsx(bv, {
    'data-testid': 'idp-group-menubar-filter',
    'dispatch': l,
    'dropdownShown': o,
    'dropdownType': 'FILTER_IDP_GROUP_DROPDOWN',
    'getCount': a,
    'getDisplayText': e => idpGroupsById[e]?.name ?? '',
    'label': getI18nString('members_table.menu_bar_filter.scim_group'),
    'selectedValue': e,
    'updateFilter': e => t(e),
    'values': idpGroupIds
  }) : null;
}
function tM() {
  let e = MX();
  let t = useSelector(({
    user: e
  }) => e?.id);
  let a = useTeamPlanUser().unwrapOr(null);
  let n = a?.key.type === FUserTypeClassification.ORG_USER && a?.permission === FMemberRoleType.ADMIN;
  let r = RG();
  let l = useSelector(({
    selectedView: e
  }) => e.view === 'orgAdminSettings');
  return useMemo(() => {
    if (!t || !r || !l) return [];
    let {
      groupsUserIsAdminOf,
      otherLicenseGroups,
      allAdminableLicenseGroups
    } = EQ(e, t, !n);
    return groupsUserIsAdminOf.length === 0 && otherLicenseGroups.length === 0 ? [] : allAdminableLicenseGroups.map(e => e.id).concat(_$$s2);
  }, [t, r, l, e, n]);
}
function tP({
  selectedLicenseGroupId: e,
  onFilterUpdate: t,
  getCount: a
}) {
  let s = useDispatch();
  let r = Um();
  let l = useSelector(({
    licenseGroups: e
  }) => e);
  let o = tM();
  return o.length === 0 ? null : jsx(bv, {
    label: getI18nString('members_table.menu_bar_filter.billing_group'),
    dispatch: s,
    dropdownShown: r,
    dropdownType: 'FILTER_LICENSE_GROUP_DROPDOWN',
    values: o,
    selectedValue: e,
    getCount: a,
    getDisplayText: e => CC(e, l),
    updateFilter: e => t(e)
  });
}
let tH = 'seen_billing_group_admin_onboarding';
var tY = (e => (e.AddMembersToBillingGroup = 'AddMembersToBillingGroup', e.UpdateRolesInBillingGroup = 'UpdateRolesInBillingGroups', e))(tY || {});
function tJ(e) {
  let t = userFlagExistsAtomFamily(tH);
  let a = useAtomWithSubscription(t);
  let {
    show,
    isShowing,
    complete
  } = _$$e4({
    overlay: fQh,
    priority: _$$N.SECONDARY_MODAL
  }, [a]);
  _$$h(() => {
    show({
      canShow: e => !e && !isMobileUA
    });
  });
  let l = ['AddMembersToBillingGroup'];
  e.targetOrgUserId && l.push('UpdateRolesInBillingGroups');
  let o = l.length;
  let d = _$$A4({
    numSteps: o,
    onComplete: complete
  });
  return jsx(_$$U2, {
    currentStep: d.currentStep,
    isShowing,
    children: l.map((t, a) => jsx(tK, {
      step: t,
      stepCounter: o > 1 ? {
        stepNum: a + 1,
        totalNumSteps: o
      } : void 0,
      isShowing,
      isFinalStep: a === l.length - 1,
      next: d.next,
      complete,
      targetOrgUserId: e.targetOrgUserId
    }, t))
  });
}
function tK(e) {
  let {
    step,
    stepCounter,
    isShowing,
    isFinalStep,
    next,
    complete
  } = e;
  let o = isFinalStep ? {
    label: renderI18nText('general.got_it'),
    onClick: complete,
    type: 'button',
    ctaTrackingDescriptor: UpgradeAction.GOT_IT
  } : {
    label: renderI18nText('general.next'),
    onClick: next,
    type: 'button',
    ctaTrackingDescriptor: UpgradeAction.NEXT
  };
  switch (step) {
    case 'AddMembersToBillingGroup':
      return jsx(rq, {
        clickOutsideToHide: !0,
        description: renderI18nText('billing_group_admin_onboarding.step_one_description'),
        emphasized: !0,
        isShowing,
        onClose: complete,
        primaryCta: o,
        stepCounter,
        targetKey: X_,
        title: renderI18nText('billing_group_admin_onboarding.step_one_heading'),
        trackingContextName: O4,
        userFlagOnShow: tH
      });
    case 'UpdateRolesInBillingGroups':
      return jsx(rq, {
        clickOutsideToHide: !0,
        description: renderI18nText('billing_group_admin_onboarding.step_two_description.seat_rename'),
        emphasized: !0,
        isShowing,
        onClose: complete,
        primaryCta: o,
        stepCounter,
        targetKey: `${_$$e3}-${e.targetOrgUserId}`,
        title: renderI18nText('billing_group_admin_onboarding.step_two_heading.seat_rename'),
        trackingContextName: O4,
        userFlagOnShow: tH
      });
    default:
      throwTypeError(step);
  }
}
function tQ(e) {
  let {
    isShowing,
    show,
    complete
  } = _$$e4({
    overlay: swf,
    priority: _$$N.DEFAULT_MODAL
  });
  _$$h(() => {
    show({
      canShow: () => e.isOrgAdminTable && !isMobileUA
    });
  });
  return jsx(rq, {
    clickOutsideToHide: !0,
    description: renderI18nText('org_admin_onboarding.people_tab.tooltip.filter_people.description'),
    emphasized: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      type: 'button',
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    shouldCenterArrow: EL.BEST_EFFORT,
    targetKey: RF,
    title: renderI18nText('org_admin_onboarding.people_tab.tooltip.filter_people.title'),
    trackingContextName: `${pv} - filter`
  }, 'flyout');
}
function tZ(e) {
  let {
    show,
    isShowing,
    complete
  } = _$$e4({
    overlay: EKN,
    priority: _$$N.DEFAULT_MODAL
  });
  _$$h(() => {
    show();
  });
  return jsx(rq, {
    arrowPosition: F_.BOTTOM,
    description: renderI18nText('admin_settings.people.onboarding.click_on_a_person'),
    emphasized: !0,
    isShowing,
    onClose: complete,
    onTargetLost: complete,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      type: 'button',
      onClick: complete,
      ctaTrackingDescriptor: UpgradeAction.GOT_IT
    },
    shouldCenterArrow: EL.BEST_EFFORT,
    targetKey: `${_$$Z}-${e.targetOrgUserId}`,
    title: renderI18nText('admin_settings.people.onboarding.easily_manage_people'),
    trackingContextName: JB
  }, 'flyout');
}
var t8 = (e => (e.BILLING_GROUPS = 'BILLING_GROUPS', e.CHARGED = 'CHARGED', e.LAST_EDIT = 'LAST_EDIT', e.SEAT_TYPE = 'SEAT_TYPE', e.USER_TYPE = 'USER_TYPE', e.WORKSPACES = 'WORKSPACES', e.LAST_ACTIVE = 'LAST_ACTIVE', e.IDP_GROUPS = 'IDP_GROUPS', e.BILLING_INTERVAL = 'BILLING_INTERVAL', e))(t8 || {});
var t6 = (e => (e.ACCESS = 'ACCESS', e.BILLING = 'BILLING', e))(t6 || {});
let t7 = {
  [t8.BILLING_INTERVAL]: null,
  [t8.BILLING_GROUPS]: null,
  [t8.WORKSPACES]: null,
  [t8.CHARGED]: null,
  [t8.LAST_EDIT]: null,
  [t8.SEAT_TYPE]: null,
  [t8.USER_TYPE]: null,
  [t8.LAST_ACTIVE]: null,
  [t8.IDP_GROUPS]: null
};
t8.BILLING_INTERVAL;
t8.BILLING_GROUPS;
t8.WORKSPACES;
t8.CHARGED;
t8.LAST_EDIT;
t8.SEAT_TYPE;
t8.USER_TYPE;
t8.LAST_ACTIVE;
t8.IDP_GROUPS;
let t9 = () => ({
  [t8.SEAT_TYPE]: getI18nString('people_table_filters.billing_filters.labels.seat_type'),
  [t8.USER_TYPE]: getI18nString('people_table_filters.access_filters.labels.user_type'),
  [t8.CHARGED]: getI18nString('people_table_filters.billing_filters.labels.charged'),
  [t8.BILLING_GROUPS]: getI18nString('people_table_filters.billing_filters.labels.billing_groups'),
  [t8.LAST_EDIT]: getI18nString('people_table_filters.access_filters.labels.last_edit'),
  [t8.WORKSPACES]: getI18nString('people_table_filters.access_filters.labels.workspaces'),
  [t8.LAST_ACTIVE]: getI18nString('people_table_filters.access_filters.labels.last_active'),
  [t8.IDP_GROUPS]: getI18nString('people_table_filters.access_filters.labels.idp_groups'),
  [t8.BILLING_INTERVAL]: getI18nString('team_view.team_members_table_column.billing_interval')
});
let ae = () => ({
  [ProductAccessTypeEnum.EXPERT]: getI18nString('people_table_filters.billing_filters.seat_type_options.full'),
  [ProductAccessTypeEnum.DEVELOPER]: getI18nString('people_table_filters.billing_filters.seat_type_options.dev'),
  [ProductAccessTypeEnum.COLLABORATOR]: getI18nString('people_table_filters.billing_filters.seat_type_options.collab'),
  [ViewAccessTypeEnum.VIEW]: getI18nString('people_table_filters.billing_filters.seat_type_options.view'),
  [UW.MORE_SEVEN_DAYS]: getI18nString('people_table_filters.access_filters.last_active_options.seven_days_ago'),
  [UW.MORE_THIRTY_DAYS]: getI18nString('people_table_filters.access_filters.last_active_options.thirty_days_ago'),
  [UW.MORE_THREE_MONTHS]: getI18nString('people_table_filters.access_filters.last_active_options.three_months_ago'),
  [LastEditPeriod['3mo']]: getI18nString('people_table_filters.access_filters.last_edit_options.three_months_ago'),
  [LastEditPeriod['6mo']]: getI18nString('people_table_filters.access_filters.last_edit_options.six_months_ago'),
  [LastEditPeriod['1yr']]: getI18nString('people_table_filters.access_filters.last_edit_options.one_year_ago'),
  [FUserRoleType.ADMIN]: getI18nString('people_table_filters.access_filters.user_type_options.admin'),
  [FUserRoleType.GUEST]: getI18nString('people_table_filters.access_filters.user_type_options.guest'),
  [FUserRoleType.MEMBER]: getI18nString('people_table_filters.access_filters.user_type_options.member'),
  [SpecialUserTypes.IDP]: getI18nString('people_table_filters.access_filters.user_type_options.pending'),
  [SpecialUserTypes.UNVERIFIED]: getI18nString('people_table_filters.access_filters.user_type_options.unverified'),
  new: getI18nString('people_table_filters.billing_filters.charged_options.new_charges')
});
function at(e) {
  let t = t9();
  let a = ae();
  return [{
    type: t8.SEAT_TYPE,
    label: t[t8.SEAT_TYPE],
    filterComponent: km.SELECT,
    enabled: e => !0,
    options: [{
      display: getI18nString('people_table_filters.billing_filters.seat_type_options.all'),
      value: null
    }, {
      display: a[ProductAccessTypeEnum.EXPERT],
      value: ProductAccessTypeEnum.EXPERT
    }, {
      display: a[ProductAccessTypeEnum.DEVELOPER],
      value: ProductAccessTypeEnum.DEVELOPER
    }, {
      display: a[ProductAccessTypeEnum.COLLABORATOR],
      value: ProductAccessTypeEnum.COLLABORATOR
    }, {
      display: a[ViewAccessTypeEnum.VIEW],
      value: ViewAccessTypeEnum.VIEW
    }]
  }, {
    type: t8.CHARGED,
    label: t[t8.CHARGED],
    filterComponent: km.SELECT,
    enabled: (e, {
      billingEnabled: t,
      isELA: a
    }) => (e === FPlanNameType.ORG || e === FPlanNameType.ENTERPRISE) && !!t && !a,
    options: [{
      display: getI18nString('people_table_filters.billing_filters.charged_options.all_charges'),
      value: null
    }, {
      display: a.$$new,
      value: 'new'
    }]
  }, {
    type: t8.BILLING_GROUPS,
    label: t[t8.BILLING_GROUPS],
    filterComponent: km.SELECT,
    enabled: (e, {
      billingGroupsEnabled: t
    }) => !!t && e === FPlanNameType.ENTERPRISE,
    options: [{
      display: getI18nString('people_table_filters.billing_filters.billing_group_options.all_billing_groups'),
      value: null
    }, ...e]
  }];
}
function aa(e, t) {
  let a = t9();
  let n = ae();
  return [{
    type: t8.USER_TYPE,
    label: a[t8.USER_TYPE],
    filterComponent: km.SELECT,
    enabled: e => e === FPlanNameType.ORG || e === FPlanNameType.ENTERPRISE,
    options: [{
      display: getI18nString('people_table_filters.access_filters.user_type_options.all'),
      value: null
    }, {
      display: n[FUserRoleType.ADMIN],
      value: FUserRoleType.ADMIN
    }, {
      display: n[FUserRoleType.MEMBER],
      value: FUserRoleType.MEMBER
    }, {
      display: n[FUserRoleType.GUEST],
      value: FUserRoleType.GUEST
    }, {
      display: n[SpecialUserTypes.IDP],
      value: SpecialUserTypes.IDP
    }, {
      display: n[SpecialUserTypes.UNVERIFIED],
      value: SpecialUserTypes.UNVERIFIED
    }]
  }, {
    type: t8.LAST_EDIT,
    label: a[t8.LAST_EDIT],
    filterComponent: km.SELECT,
    enabled: e => e === FPlanNameType.ORG || e === FPlanNameType.ENTERPRISE,
    options: [{
      display: getI18nString('people_table_filters.access_filters.last_edit_options.all_time'),
      value: null
    }, {
      display: n[LastEditPeriod['3mo']],
      value: LastEditPeriod['3mo']
    }, {
      display: n[LastEditPeriod['6mo']],
      value: LastEditPeriod['6mo']
    }, {
      display: n[LastEditPeriod['1yr']],
      value: LastEditPeriod['1yr']
    }]
  }, {
    type: t8.LAST_ACTIVE,
    label: a[t8.LAST_ACTIVE],
    filterComponent: km.SELECT,
    enabled: e => e === FPlanNameType.STUDENT || e === FPlanNameType.PRO,
    options: [{
      display: getI18nString('people_table_filters.access_filters.last_active_options.all_time'),
      value: null
    }, {
      display: n[UW.MORE_SEVEN_DAYS],
      value: UW.MORE_SEVEN_DAYS
    }, {
      display: n[UW.MORE_THIRTY_DAYS],
      value: UW.MORE_THIRTY_DAYS
    }, {
      display: n[UW.MORE_THREE_MONTHS],
      value: UW.MORE_THREE_MONTHS
    }]
  }, {
    type: t8.WORKSPACES,
    label: a[t8.WORKSPACES],
    filterComponent: km.SELECT,
    enabled: (e, {
      workspacesEnabled: t
    }) => e === FPlanNameType.ENTERPRISE && !!t,
    options: [{
      display: getI18nString('people_table_filters.access_filters.workspace_options.all_workspaces'),
      value: null
    }, ...e]
  }, {
    type: t8.IDP_GROUPS,
    label: a[t8.IDP_GROUPS],
    filterComponent: km.SELECT,
    enabled: (e, {
      idpGroupsEnabled: t
    }) => e === FPlanNameType.ENTERPRISE && !!t,
    options: [{
      display: getI18nString('people_table_filters.access_filters.idp_groups_options.all'),
      value: null
    }, ...t]
  }];
}
function an(e) {
  return Object.fromEntries(Object.keys(t8).map(t => [t, {
    default: null,
    current: e[t]
  }]));
}
function as(e, t) {
  let a = function (e) {
    let {
      billingGroups,
      hasBilling,
      idpGroups,
      plan,
      workspaces,
      isELA
    } = e;
    let l = plan?.tier;
    return l ? [{
      type: t6.BILLING,
      title: getI18nString('people_table_filters.section_headers.billing'),
      filters: at(billingGroups).filter(e => e.enabled(l, {
        billingEnabled: hasBilling,
        billingGroupsEnabled: !!billingGroups.length,
        isELA
      }))
    }, {
      type: t6.ACCESS,
      title: getI18nString('people_table_filters.section_headers.access'),
      filters: aa(workspaces, idpGroups).filter(e => e.enabled(l, {
        workspacesEnabled: !!workspaces.length,
        idpGroupsEnabled: !!idpGroups.length
      }))
    }] : [];
  }(t);
  let [n, i] = useState(an(e));
  return {
    filterValues: n,
    filterSections: a,
    handleChange: useCallback((e, t) => {
      i(produce(a => {
        a[e].current = t === 'DEFAULT_FILTER_VALUE' ? null : t;
      }));
    }, []),
    resetFilters: useCallback(() => {
      i(an(t7));
    }, []),
    setFilterValues: i
  };
}
function ai(e) {
  let {
    plan,
    isELA,
    hasBilling
  } = e;
  return plan && !isELA && hasBilling ? [{
    type: t8.CHARGED,
    value: 'new',
    display: getI18nString('people_table_filters.suggested_filters.new_charges')
  }] : [];
}
function ar(e) {
  let {
    afterApply,
    filterCounts,
    view
  } = e;
  let r = useCallback(e => {
    afterApply(Object.fromEntries(Object.entries(e).map(([e, t]) => [e, t])));
  }, [afterApply]);
  let l = useMemo(() => ({
    [t8.SEAT_TYPE]: {},
    [t8.BILLING_GROUPS]: {},
    [t8.WORKSPACES]: {},
    [t8.CHARGED]: {},
    [t8.USER_TYPE]: {},
    [t8.LAST_EDIT]: {},
    [t8.LAST_ACTIVE]: {},
    [t8.IDP_GROUPS]: {},
    [t8.BILLING_INTERVAL]: {},
    ...Object.fromEntries(Object.entries(filterCounts).filter(([, e]) => void 0 !== e))
  }), [filterCounts]);
  switch (view) {
    case 'orgAdminSettings':
      return jsx(al, {
        ...e,
        handleApply: r,
        normalizedFilterCounts: l
      });
    case 'workspace':
      return jsx(ad, {
        ...e,
        handleApply: r,
        normalizedFilterCounts: l
      });
    case 'licenseGroup':
      return jsx(ac, {
        ...e,
        handleApply: r,
        normalizedFilterCounts: l
      });
    case 'pro':
      return jsx(a_, {
        ...e,
        handleApply: r,
        normalizedFilterCounts: l
      });
  }
}
function al(e) {
  let t = function (e) {
    let t = useTeamPlanFeatures().unwrapOr(null);
    let a = useSubscription(WorkspacesCanAdminView, {
      orgId: t?.key?.parentId ?? null
    }, {
      enabled: t?.tier === FPlanNameType.ENTERPRISE
    });
    let n = tM();
    let r = useSelector(({
      licenseGroups: e
    }) => e);
    let l = Xf(t?.key?.parentId, t?.type === FOrganizationLevelType.ORG);
    let {
      idpGroupIds,
      idpGroupsById
    } = tL();
    return useMemo(() => {
      let s = n.reduce((e, t) => (e.push({
        value: t,
        display: r[t]?.name ?? getI18nString('license_group.unassigned')
      }), e), []);
      let i = idpGroupIds.reduce((e, t) => (idpGroupsById[t] && e.push({
        value: t,
        display: idpGroupsById[t].name
      }), e), []);
      let c = !!l?.data?.invoices?.length;
      return ['loading', 'errors'].includes(a.status) || l.status !== 'loaded' ? {
        plan: t,
        hasBilling: c,
        workspaces: [],
        idpGroups: i,
        billingGroups: s,
        isELA: e,
        loading: !0
      } : {
        plan: t,
        workspaces: a.transform(e => e.org?.workspaces?.length ? (sortByPropertyWithOptions(e.org.workspaces, 'name'), e.org.workspaces.concat({
          id: UNASSIGNED,
          name: getI18nString('license_group.unassigned'),
          canAdmin: !0
        }).map(({
          id: e,
          name: t
        }) => ({
          display: t,
          value: e
        }))) : []).data ?? [],
        billingGroups: s,
        hasBilling: c,
        idpGroups: i,
        isELA: e,
        loading: !1
      };
    }, [l, t, a, n, r, idpGroupIds, idpGroupsById, e]);
  }(!!e.isELA);
  let {
    filterSections
  } = as(e.currentFilters, t);
  let r = function (e) {
    let t = t9();
    return [{
      type: t8.BILLING_GROUPS,
      label: t[t8.BILLING_GROUPS],
      filterComponent: km.SELECT,
      enabled: (e, {
        billingGroupsEnabled: t
      }) => !!t && e === FPlanNameType.ENTERPRISE,
      options: [{
        display: getI18nString('people_table_filters.billing_filters.billing_group_options.all_billing_groups'),
        value: null
      }, ...e]
    }];
  }(t.billingGroups).filter(e => e.enabled(t.plan?.tier ?? null, {
    billingGroupsEnabled: !!t.billingGroups.length
  }));
  let l = ai(t);
  return jsx(W3, {
    analyticsPageName: 'people',
    ariaLabel: getI18nString('people_table_filters.filter_button_aria_label'),
    currentFilters: e.currentFilters,
    filterCounts: e.normalizedFilterCounts,
    filterSections,
    loading: t.loading,
    onApply: e.handleApply,
    onboardingKey: e.onboardingKey,
    rowFilters: r,
    suggestedFilters: l
  });
}
let ao = [];
function ad(e) {
  let t = useMemo(() => [{
    type: t8.USER_TYPE,
    label: getI18nString('people_table_filters.access_filters.labels.user_type'),
    filterComponent: km.SELECT,
    options: [{
      display: getI18nString('people_table_filters.access_filters.user_type_options.all'),
      value: null
    }, {
      display: getI18nString('people_table_filters.access_filters.user_type_options.admin'),
      value: FUserRoleType.ADMIN
    }, {
      display: getI18nString('people_table_filters.access_filters.user_type_options.member'),
      value: FUserRoleType.MEMBER
    }, {
      display: getI18nString('people_table_filters.access_filters.user_type_options.guest'),
      value: FUserRoleType.GUEST
    }, {
      display: getI18nString('people_table_filters.access_filters.user_type_options.pending'),
      value: SpecialUserTypes.IDP
    }, {
      display: getI18nString('people_table_filters.access_filters.user_type_options.unverified'),
      value: SpecialUserTypes.UNVERIFIED
    }]
  }, {
    type: t8.LAST_EDIT,
    label: getI18nString('people_table_filters.access_filters.labels.last_edit'),
    filterComponent: km.SELECT,
    options: [{
      display: getI18nString('people_table_filters.access_filters.last_edit_options.all_time'),
      value: null
    }, {
      display: getI18nString('people_table_filters.access_filters.last_edit_options.three_months_ago'),
      value: LastEditPeriod['3mo']
    }, {
      display: getI18nString('people_table_filters.access_filters.last_edit_options.six_months_ago'),
      value: LastEditPeriod['6mo']
    }, {
      display: getI18nString('people_table_filters.access_filters.last_edit_options.one_year_ago'),
      value: LastEditPeriod['1yr']
    }]
  }], []);
  return jsx(W3, {
    analyticsPageName: 'workspace-people',
    ariaLabel: getI18nString('people_table_filters.filter_button_aria_label'),
    currentFilters: e.currentFilters,
    filterCounts: e.normalizedFilterCounts,
    filterSections: ao,
    onApply: e.handleApply,
    onboardingKey: e.onboardingKey,
    rowFilters: t
  });
}
function ac(e) {
  let t;
  let a = useTeamPlanFeatures().unwrapOr(null);
  let s = Xf(a?.key?.parentId, a?.type === FOrganizationLevelType.ORG);
  let i = !!s?.data?.invoices?.length;
  t = !!e.isELA;
  let r = [{
    type: t6.BILLING,
    title: getI18nString('people_table_filters.section_headers.billing'),
    filters: at([]).filter(e => e.enabled(FPlanNameType.ENTERPRISE, {
      billingEnabled: i,
      billingGroupsEnabled: !1,
      isELA: t
    }))
  }, {
    type: t6.ACCESS,
    title: getI18nString('people_table_filters.section_headers.access'),
    filters: aa([], []).filter(e => e.enabled(FPlanNameType.ENTERPRISE, {
      workspacesEnabled: !1,
      idpGroupsEnabled: !1
    }))
  }];
  let l = ai({
    plan: a,
    isELA: !!e.isELA,
    hasBilling: i
  });
  return jsx(W3, {
    analyticsPageName: 'people-billing-groups',
    ariaLabel: getI18nString('people_table_filters.filter_button_aria_label'),
    currentFilters: {
      ...e.currentFilters,
      [t8.BILLING_GROUPS]: null
    },
    filterCounts: e.normalizedFilterCounts,
    filterSections: r,
    loading: !a || s.status !== 'loaded',
    onApply: e.handleApply,
    onboardingKey: e.onboardingKey,
    rowFilters: ao,
    suggestedFilters: l
  });
}
function a_(e) {
  let t = useTeamPlanFeatures().unwrapOr(null);
  let {
    filterSections
  } = as(e.currentFilters, {
    plan: t,
    isELA: !1,
    hasBilling: !1,
    billingGroups: ao,
    workspaces: ao,
    idpGroups: ao,
    loading: !1
  });
  return jsx(W3, {
    analyticsPageName: 'people',
    ariaLabel: getI18nString('people_table_filters.filter_button_aria_label'),
    currentFilters: e.currentFilters,
    filterCounts: e.normalizedFilterCounts,
    filterSections,
    onApply: e.handleApply,
    onboardingKey: e.onboardingKey,
    rowFilters: ao,
    suggestedFilters: ao
  });
}
let ay = new AdvancedSet([FProductAccessType.DESIGN, FProductAccessType.WHITEBOARD, FProductAccessType.DEV_MODE]);
new AdvancedSet([FProductAccessType.DESIGN, FProductAccessType.WHITEBOARD, FProductAccessType.DEV_MODE, FProductAccessType.SLIDES, FProductAccessType.FIGMAKE]);
let aF = 'BULK_SEAT_CHANGE_DROPDOWN';
function aq({
  dropdownShown: e,
  lastFetchTimestamp: t,
  orgId: a,
  orgUserIds: r,
  queueFilterCountsRefetch: l
}) {
  let o = useDispatch();
  let d = useCallback(e => {
    o(showModalHandler({
      type: a$,
      data: {
        orgId: a,
        seatType: e,
        orgUserIds: r,
        queueFilterCountsRefetch: l,
        lastFetchTimestamp: t
      }
    }));
  }, [o, a, r, l, t]);
  let c = useMemo(() => [jsx(c$, {
    onClick: () => d(ProductAccessTypeEnum.EXPERT),
    children: getI18nString('general.bundle.expert')
  }, '1'), jsx(c$, {
    onClick: () => d(ProductAccessTypeEnum.COLLABORATOR),
    children: getI18nString('general.bundle.collaborator')
  }, '2'), jsx(c$, {
    onClick: () => d(ProductAccessTypeEnum.DEVELOPER),
    children: getI18nString('general.bundle.developer')
  }, '3'), jsx(c$, {
    onClick: () => d(ViewAccessTypeEnum.VIEW),
    children: getI18nString('checkout.view')
  }, '4')], [d]);
  let _ = e?.type === aF;
  return jsxs(_$$V2, {
    dispatch: o,
    showingDropdown: _,
    type: aF,
    children: [getI18nString('members_table.change_seats_button', {
      userCount: r.length
    }), _ && jsx(gw, {
      dispatch: o,
      style: e.data.position,
      className: n$,
      children: c
    })]
  });
}
let a$ = registerModal(e => {
  let {
    seatType,
    queueFilterCountsRefetch,
    onClose,
    orgId,
    orgUserIds,
    lastFetchTimestamp
  } = e;
  let c = JT(seatType);
  let _ = orgUserIds.length;
  let u = useModalManager(e);
  let m = useDispatch();
  let [p, g] = useState(!1);
  let h = useCallback(() => {
    g(!0);
    m(uo({
      orgId,
      seatTypeProducts: {},
      params: {
        org_user_ids: orgUserIds,
        paid_statuses: seatType === ViewAccessTypeEnum.VIEW ? collaboratorSet.dict(() => FPlanAccessType.STARTER) : {
          [seatType]: FPlanAccessType.FULL
        },
        entry_point: _$$h2.MEMBERS_TAB
      },
      lastUpdateTimestampOverride: lastFetchTimestamp,
      successCallback: () => {
        queueFilterCountsRefetch();
        jL({
          planType: FOrganizationLevelType.ORG,
          planId: orgId
        });
        m(VisualBellActions.enqueue({
          message: getI18nString('members_table.bulk_seat_change_success', {
            userCount: _
          }),
          type: 'bulk-seat-change'
        }));
        onClose();
      },
      errorCallback: () => {
        g(!1);
      }
    }));
  }, [orgId, seatType, onClose, m, queueFilterCountsRefetch, orgUserIds, lastFetchTimestamp, _]);
  let x = getRumLoggingConfig();
  return jsx(TrackingProvider, {
    name: 'Confirm Bulk Seat Change Modal',
    properties: {
      seatType,
      userCount: _
    },
    trackingOptions: x,
    children: jsx(ModalRootComponent, {
      manager: u,
      width: 'lg',
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString('members_table.confirm_bulk_seat_change_title')
          })
        }), jsx(DialogBody, {
          children: getI18nString('members_table.confirm_bulk_seat_change_body', {
            seatType: c,
            userCount: _
          })
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx($z, {
              disabled: p,
              onClick: onClose,
              variant: 'secondary',
              children: getI18nString('general.cancel')
            }), jsx($z, {
              disabled: p,
              onClick: h,
              variant: 'primary',
              trackingProperties: {
                seatType,
                userCount: _
              },
              trackingOptions: x,
              children: getI18nString('general.confirm')
            })]
          })
        })]
      })
    })
  });
});
function aV(e) {
  let t = useDispatch();
  let a = getUserBadge(e.orgUser);
  return jsx(_$$r2, {
    defaultText: '',
    dispatch: t,
    entity: e.user,
    size: 32,
    badge: a,
    showTooltip: !0
  });
}
let aJ = 'guest_resources--disclaimer--2MOEQ';
function aK(e) {
  let t = useDispatch();
  return jsxs('tr', {
    className: 'x17akokd xdpxx8g xjp7ctv',
    children: [jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: (() => {
        if (e.hasCheckedAccess && e.resource.can_view) {
          let a = e.resource.file;
          return jsx(Button, {
            variant: 'link',
            onClick: () => {
              t(selectViewAction({
                view: 'fullscreen',
                fileKey: a.key,
                editorType: mapFileTypeToEditorType(a.editor_type)
              }));
              t(hideModal());
            },
            children: a.name
          });
        }
        {
          let t = e.resource.file;
          let a = `file_tooltip_${t.key}`;
          let s = e.hasCheckedAccess ? getI18nString('members_tab.member_modal.file_no_access_tooltip') : void 0;
          let i = e.hasCheckedAccess ? 'guest_resources--inaccessibleFileName--Gfs-t guest_resources--fileName--7esj0' : 'guest_resources--fileName--7esj0';
          return jsxs('div', {
            'className': 'guest_resources--columnName--HYgDE table--column--974RA',
            'data-tooltip-proxy-element-id': a,
            'children': [jsx('div', {
              'id': a,
              'className': 'guest_resources--inaccessibleFileIcon--syWHM',
              'data-tooltip-type': KindEnum.TEXT,
              'data-tooltip': s
            }), jsx('p', {
              className: i,
              children: t.name
            })]
          });
        }
      })()
    }), jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: e.resource.team ? e.resource.team.name : '-'
    }), jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: getPermissionLevelNameCapitalized(e.resource.level)
    })]
  });
}
function aX(e) {
  let t = e.resource.folder;
  let a = useDispatch();
  let s = e.hasCheckedAccess && !!e.resource.can_view;
  let r = s || !e.hasCheckedAccess ? void 0 : getI18nString('members_tab.member_modal.not_project_member_tooltip');
  let l = `folder_tooltip_${e.resource.folder.id}`;
  return jsxs('tr', {
    className: 'x17akokd xdpxx8g xjp7ctv',
    children: [s ? jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: jsx(Button, {
        variant: 'link',
        onClick: () => {
          a(selectViewAction({
            view: 'folder',
            folderId: t.id
          }));
          a(hideModal());
        },
        children: e.resource.folder.name
      })
    }) : jsx('td', {
      'className': 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      'data-tooltip-proxy-element-id': l,
      'children': jsx('p', {
        'id': l,
        'className': e.hasCheckedAccess ? 'guest_resources--inaccessibleName--WIl1B' : void 0,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': r,
        'data-tooltip-max-width': 200,
        'children': e.resource.folder.name
      })
    }), jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: renderI18nText('members_tab.member_modal.file_count_label', {
        fileCount: e.resource.file_count
      })
    }), jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: getPermissionLevelNameCapitalized(e.resource.level)
    })]
  });
}
function aQ(e) {
  let t = e.resource.team;
  let a = e.hasCheckedAccess && !!e.resource.can_view;
  let s = a || !e.hasCheckedAccess;
  let r = useDispatch();
  let l = a ? () => {
    r(selectViewAction({
      view: 'team',
      teamId: t.id
    }));
    r(hideModal());
  } : void 0;
  return jsxs('tr', {
    className: 'x17akokd xdpxx8g xjp7ctv',
    children: [jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: jsx(Button, {
        'variant': 'link',
        'onClick': l,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': s ? void 0 : 'You\'re not a member of this team',
        'data-tooltip-max-width': 200,
        'data-tooltip-proxy-element-id': `team_tooltip_${t.id}`,
        'children': t.name
      })
    }), jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: renderI18nText('members_tab.member_modal.project_count_label', {
        projectCount: t.projects
      })
    }), jsx('td', {
      className: 'x1n5zjp5 x1gcgh60 x1vi7shn xp6roeo x1qxcl5b xb3r6kr xuxw1ft xlyipyv',
      children: getPermissionLevelNameCapitalized(e.resource.level)
    })]
  });
}
let aZ = withTracking(e => {
  let {
    files,
    folders,
    teams
  } = e.resources;
  let i = files.length + folders.length + teams.length > 0;
  return jsxs(AutoLayout, {
    direction: 'vertical',
    spacing: 16,
    children: [jsx(aV, {
      user: e.user,
      orgUser: e.orgUser
    }), !Bg(e.org.shared_container_setting) && jsx('p', {
      className: aJ,
      children: i ? renderI18nText('members_tab.member_modal.guest_access.can_also_view_public_links_label', {
        name: e.user.handle
      }) : renderI18nText('members_tab.member_modal.guest_access.can_view_public_links_label', {
        name: e.user.handle
      })
    }), Bg(e.org.shared_container_setting) && !i && jsx('p', {
      className: aJ,
      children: renderI18nText('members_tab.member_modal.guest_access.no_access_label', {
        name: e.user.handle
      })
    }), teams.length > 0 && jsxs('table', {
      className: 'x1bamp8i x112ta8 x1mwwwfo xh8yej3 xrvj5dj x1prmi52',
      children: [jsx('thead', {
        className: 'xjp7ctv',
        children: jsxs('tr', {
          className: 'x17akokd xdpxx8g xjp7ctv',
          children: [jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.teams_table.team_column')
          }), jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.teams_table.projects_column')
          }), jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.teams_table.permissions_column')
          })]
        })
      }), jsx('tbody', {
        className: 'xjp7ctv',
        children: teams.map(t => jsx(aQ, {
          resource: t,
          hasCheckedAccess: e.resources.has_checked_access
        }, t.team.id))
      })]
    }), folders.length > 0 && jsxs('table', {
      className: 'x1bamp8i x112ta8 x1mwwwfo xh8yej3 xrvj5dj x1prmi52',
      children: [jsx('thead', {
        className: 'xjp7ctv',
        children: jsxs('tr', {
          className: 'x17akokd xdpxx8g xjp7ctv',
          children: [jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.projects_table.project_column')
          }), jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.projects_table.files_column')
          }), jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.projects_table.permissions_column')
          })]
        })
      }), jsx('tbody', {
        className: 'xjp7ctv',
        children: folders.map(t => jsx(aX, {
          resource: t,
          hasCheckedAccess: e.resources.has_checked_access
        }, t.folder.id))
      })]
    }), files.length > 0 && jsxs('table', {
      className: 'x1bamp8i x112ta8 x1mwwwfo xh8yej3 xrvj5dj x1prmi52',
      children: [jsx('thead', {
        className: 'xjp7ctv',
        children: jsxs('tr', {
          className: 'x17akokd xdpxx8g xjp7ctv',
          children: [jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.files_table.file_column')
          }), jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.files_table.team_column')
          }), jsx('th', {
            className: 'x1nn34kk x1n5zjp5 xkezfkh xb3r6kr xuxw1ft xlyipyv',
            children: renderI18nText('members_tab.member_modal.guest_access.files_table.permissions_column')
          })]
        })
      }), jsx('tbody', {
        className: 'xjp7ctv',
        children: files.map(t => jsx(aK, {
          resource: t,
          hasCheckedAccess: e.resources.has_checked_access
        }, t.file.key))
      })]
    })]
  });
}, 'Guest Access Tab');
let a1 = registerModal(e => {
  let t = useModalManager(e);
  let [a, r] = useState(null);
  useEffect(() => {
    _$$G.getGuestResources({
      orgUserId: e.orgUser.id
    }).then(e => {
      r(e.data.meta);
    });
  }, [e.orgUser.id]);
  let l = getUserId();
  let o = useSelector(e => e.selectedView);
  return wrapWithTracking(jsx(ModalRootComponent, {
    width: 'lg',
    height: 'dynamic',
    manager: t,
    children: jsxs(DialogContents, {
      children: [jsx(DialogHeader, {
        children: jsx(DialogTitle, {
          children: renderI18nText('members_table.org_user_menu.view_guest_access')
        })
      }), jsx(DialogBody, {
        children: a ? jsx(aZ, {
          user: e.user,
          orgUser: e.orgUser,
          onRemoveUser: e.onRemoveUser,
          org: e.org,
          resources: a
        }) : jsx('div', {
          className: 'xrvj5dj x1ku5rj1 x5mc7k8',
          children: jsx(_$$k3, {})
        })
      }), o.view === 'orgAdminSettings' && a && jsx(DialogFooter, {
        children: jsx(DialogActionStrip, {
          children: jsx($z, {
            variant: 'secondary',
            onClick: e.onRemoveUser,
            children: renderI18nText('members_tab.member_modal.remove_user_button')
          })
        })
      })]
    })
  }), 'Guest Management Modal', {
    viewingUserId: l,
    guestUserId: e.user.id,
    guestOrgUserId: e.orgUser.id,
    currentOrgId: e.orgUser.org_id
  });
});
function a2({
  item: e,
  setHighlightedItemKey: t,
  isCurrentUserOrgAdmin: a
}) {
  let s = useDispatch();
  return e9(e) ? jsxs(zx, {
    children: [jsx(_$$p3, {
      onClick: () => t(e.orgUser.id),
      children: getI18nString('members_table.org_user_menu.manage')
    }, 'manage'), e.orgUser.permission === FUserRoleType.GUEST && !1 !== e.orgUser.is_email_validated && jsx(a4, {
      ...e,
      children: getI18nString('members_table.org_user_menu.view_guest_access')
    }), !!e.orgUser.user.email && jsx(_$$p3, {
      onClick: e.onCopyEmail,
      children: getI18nString('members_table.org_user_menu.copy_email')
    }), !e.orgUser.is_email_validated && jsx(_$$p3, {
      onClick: () => e.onResendVerification([e.orgUser.id]),
      children: renderI18nText('members_table.org_user_menu.resend_verification')
    }), jsx(a5, {
      ...e
    }, 'change-admin-access'), !e.isMe && (a || e.orgUser.permission !== FUserRoleType.ADMIN) && jsxs(Fragment, {
      children: [jsx(MenuSeparator, {}), jsx(_$$p3, {
        onClick: () => e.onDelete([e.orgUser.id]),
        children: getI18nString('members_table.org_user_menu.remove')
      })]
    })]
  }) : e.idpUser.isOrgInvite ? jsxs(zx, {
    children: [jsx(_$$p3, {
      onClick: () => {
        s(MB({
          emails: [e.idpUser.email],
          isResentInvite: !0
        }));
      },
      children: getI18nString('members_table.org_invite_menu.resend_invite')
    }, 'resend'), jsx(_$$p3, {
      onClick: e.onCopyEmail,
      children: getI18nString('members_table.org_invite_menu.copy_email')
    }, 'copy'), jsx(_$$p3, {
      onClick: () => {
        s(Fb({
          idpUser: e.idpUser
        }));
      },
      children: getI18nString('members_table.org_invite_menu.remove')
    }, 'remove')]
  }) : jsx(zx, {
    children: jsx(_$$p3, {
      onClick: e.onCopyEmail,
      children: getI18nString('members_table.scim_menu.copy_email')
    }, 'copy')
  });
}
function a4(e) {
  let t = useDispatch();
  return jsx(_$$p3, {
    onClick: () => {
      t(showModalHandler({
        type: a1,
        data: {
          user: e.orgUser.user,
          orgUser: e.orgUser,
          org: e.org,
          onRemoveUser: () => {
            e.onDelete([e.orgUser.id]);
          },
          onChangeAccountType: e.onChangeAccountType
        }
      }));
    },
    children: e.children
  });
}
function a5(e) {
  let t = useSelector(e => e.selectedView);
  let a = e.orgUser.scim_is_admin != null;
  switch (k_(e.orgUser, e.isMe, t.view)) {
    case 'revoke':
      return jsx(_$$p3, {
        onClick: () => {
          e.onChangeMemberPermission({
            id: e.orgUser.id,
            org_id: e.org.id,
            updated_at: e.orgUser.updated_at,
            permission: FUserRoleType.MEMBER
          }, e.dispatch, e.queueFilterCountsRefetch);
        },
        disabled: a,
        children: getI18nString('members_table.org_user_menu.revoke_admin_access')
      });
    case 'grant':
      return jsx(_$$p3, {
        onClick: () => {
          e.onChangeMemberPermission({
            id: e.orgUser.id,
            org_id: e.org.id,
            updated_at: e.orgUser.updated_at,
            permission: FUserRoleType.ADMIN
          }, e.dispatch, e.queueFilterCountsRefetch);
        },
        disabled: a,
        children: getI18nString('members_table.org_user_menu.grant_admin_access')
      });
    default:
      return null;
  }
}
var a7 = (e => (e[e.SEARCH = 0] = 'SEARCH', e[e.FILTER = 1] = 'FILTER', e))(a7 || {});
function a9(e, t, a) {
  XHR.post(`/api/orgs/${t}/resend_email_verifications`, {
    org_user_ids: e
  }).then(() => {
    a(VisualBellActions.enqueue({
      message: getI18nString('members_table.verification_sent'),
      type: 'orgRoster.resendVerification',
      icon: VisualBellIcon.CHECK
    }));
  }, () => {
    a(VisualBellActions.enqueue({
      message: getI18nString('members_table.cannot_send_verification_email'),
      type: 'orgRoster.resendVerification',
      icon: VisualBellIcon.EXCLAMATION,
      error: !0
    }));
  });
}
function ne(e, t) {
  t(II({
    emailList: e
  }));
}
function nt(e) {
  return e.permissionFilter || e.newEditorFilter || e.lastEditFilter;
}
let na = 'OrgMemberFlyout';
function nn(e) {
  let t = _$$B2();
  let a = useRef(null);
  let i = useRef(null);
  let r = isProrationBillingEnabledForCurrentPlan();
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(useCallback(t => e.sortedItems.find(e => 'orgUser' in e && e.orgUser.id === t), [e.sortedItems]), {
    interactionConfig: [{
      ref: t,
      shouldClearHighlight: !0
    }, {
      ref: a,
      shouldClearHighlight: !1
    }, {
      ref: i,
      shouldClearHighlight: !1
    }],
    onHighlight: () => {
      a.current?.focus();
    },
    onClear: _$$b3(na)
  });
  let _ = useTeamPlanUser();
  let g = useIsOrgAdminUser(_).unwrapOr(!1);
  let h = useMemo(() => {
    let t = [{
      name: 'menu-cell',
      className: oi,
      cellComponent: e => jsx(a2, {
        item: e,
        setHighlightedItemKey: setHighlightedItemId,
        isCurrentUserOrgAdmin: g
      })
    }];
    e.filters.permissionFilter !== SpecialUserTypes.IDP && t.push(VU);
    return t;
  }, [e.filters.permissionFilter, setHighlightedItemId, g]);
  let b = useMemo(() => e.columns.length <= 5 ? parsePxInt(fAD) : parsePxInt(lRB), [e.columns.length]);
  let [v, f] = useState(!1);
  let [j, y] = useState(!1);
  let [C, T] = useState(new Date().toISOString());
  let U = useSubscription(AdminRequestDashOrgInfo, {
    orgId: e.org.id
  }, {
    enabled: e.selectedView.view === 'licenseGroup'
  });
  let G = ZY({
    isIntendedAudience: U.status === 'loaded' && !!U.data?.org?.bigmaEnabledAt && !g
  });
  let ei = e.filters.permissionFilter === 'provisional';
  let er = useMemo(() => e.filterCountsViewResult.status === 'loaded' ? e.filterCountsViewResult.data : getDefaultCounts(), [e.filterCountsViewResult]);
  useEffect(() => {
    let t = Date.now() - e.startTime;
    e.isLoading || e.startTime === 0 || trackEventAnalytics('Org Admin Members Table V2 Load Succeeded', {
      orgId: e.org.id,
      durationMs: t
    }, {
      forwardToDatadog: !0
    });
  }, [e.startTime, e.org.id, e.isLoading]);
  useEffect(() => {
    e.sortedItems.length === 0 && T(new Date().toISOString());
  }, [e.sortedItems]);
  let {
    status,
    users,
    totalSelectable
  } = Ew({
    searchQuery: $$nr1(e.searchQuery),
    filter: e.filters,
    selectedAll: j
  });
  let ec = (t, a, n) => _$$ep(t, a, e.org, e.dispatch, e.queueFilterCountsRefetch, n);
  let e_ = (t, a, n) => qj(t, a, e.licenseGroupsById, g, e.org, e.dispatch, e.queueFilterCountsRefetch, n);
  let eu = usePlanInviteWithSeatExperiment();
  function em(e, t) {
    let a = new Set();
    e.forEach(e => {
      a.add(t(e));
    });
    return a;
  }
  let ep = (t, a, s) => {
    let i = a ? em(a, e => findMainWorkspaceUser(e)?.workspace_id) : new Set();
    let r = {
      type: uw.NONE
    };
    if (i.size === 1) {
      let e = Array.from(i)[0];
      r = e == null ? {
        type: uw.UNASSIGNED
      } : {
        type: uw.WORKSPACE,
        workspaceId: e
      };
    }
    return jsx(Vq, {
      workspaces: e.workspacesCanMoveTo,
      selectedWorkspace: r,
      onChange: e => {
        ec(t, e?.id ?? '', s);
      }
    });
  };
  let eh = (t, a, s) => {
    let i = e.licenseGroupsUserIsAdminOf.concat(e.licenseGroupsUserIsNotAdminOf);
    let r = a ? em(a, e => e.license_group_member?.license_group_id) : new Set();
    let l = {
      type: uw.NONE
    };
    if (r.size === 1) {
      let e = Array.from(r)[0];
      l = e == null ? {
        type: uw.UNASSIGNED
      } : {
        type: uw.WORKSPACE,
        workspaceId: e
      };
    }
    return jsx(IV, {
      licenseGroups: i,
      selectedLicenseGroup: l,
      onChange: e => {
        e_(t, e?.id ?? '', s);
      }
    });
  };
  let ex = () => jsx(Fragment, {
    children: e.selectedView.view === 'licenseGroup' && jsx('div', {
      className: _$$s3.pb12.$$if(ef, _$$s3.pl32).$,
      children: jsx(TextWithTruncation, {
        fontWeight: 'medium',
        fontSize: 13,
        children: getGroupTypeLabel(GroupType.MEMBERS)
      })
    })
  });
  let {
    onFilter
  } = e;
  let ev = useCallback(e => {
    onFilter({
      [FilterKeys.seatTypeFilter]: e[t8.SEAT_TYPE]?.current ?? null,
      [FilterKeys.workspaceFilter]: e[t8.WORKSPACES]?.current ?? null,
      [FilterKeys.licenseGroupFilter]: e[t8.BILLING_GROUPS]?.current ?? null,
      [FilterKeys.permissionFilter]: e[t8.USER_TYPE]?.current ?? null,
      [FilterKeys.lastEditFilter]: e[t8.LAST_EDIT]?.current ?? null,
      [FilterKeys.newEditorFilter]: !!e[t8.CHARGED]?.current,
      [FilterKeys.idpGroupFilter]: e[t8.IDP_GROUPS]?.current ?? null
    });
  }, [onFilter]);
  let ef = e.selectedView.view === 'orgAdminSettings' || getFeatureFlags().ff_new_filters_wsbg;
  let ey = () => {
    let t;
    let a = !eS && !eN;
    return ef ? jsxs(Fragment, {
      children: [ex(), jsxs('div', {
        className: F()(Sx, {
          [Hy]: !a,
          [Ee]: a
        }),
        children: [jsx('div', {
          className: cE,
          children: jsx(y2, {
            'data-onboarding-key': B7,
            'onChange': e.onSearch,
            'query': e.searchQuery,
            'clearSearch': e.onClearSearch,
            'placeholder': getI18nString('team_view.search_bar.search_members_with_ellipsis')
          })
        }), jsxs('div', {
          className: _$$s3.flex.flexRow.gap8.mlAuto.$,
          children: [jsx(ar, {
            afterApply: ev,
            currentFilters: (t = e.filters, {
              ...t7,
              [t8.BILLING_GROUPS]: t[FilterKeys.licenseGroupFilter],
              [t8.WORKSPACES]: t[FilterKeys.workspaceFilter],
              [t8.CHARGED]: t[FilterKeys.newEditorFilter] ? 'new' : null,
              [t8.LAST_EDIT]: t[FilterKeys.lastEditFilter],
              [t8.SEAT_TYPE]: t[FilterKeys.seatTypeFilter],
              [t8.USER_TYPE]: t[FilterKeys.permissionFilter],
              [t8.IDP_GROUPS]: t[FilterKeys.idpGroupFilter]
            }),
            filterCounts: {
              [t8.BILLING_GROUPS]: er.licenseGroups,
              [t8.WORKSPACES]: er.workspaces,
              [t8.LAST_EDIT]: er.lastEdit,
              [t8.SEAT_TYPE]: er.seatTypes,
              [t8.USER_TYPE]: er.permission,
              [t8.IDP_GROUPS]: er.idpGroups
            },
            isELA: e.isELA,
            onboardingKey: RF,
            view: e.selectedView.view
          }), eI]
        })]
      })]
    }) : (ay.withOverrides({
      [ProductAccessMap.WHITEBOARD]: 'figjam',
      [ProductAccessMap.DEV_MODE]: 'devMode'
    }).withSuffix('AccountType'), jsx('div', {
      className: F()({
        [Hy]: !a,
        [Ee]: a
      }),
      children: jsxs('div', {
        className: cE,
        children: [jsx(y2, {
          'data-onboarding-key': B7,
          'onChange': e.onSearch,
          'query': e.searchQuery,
          'clearSearch': e.onClearSearch,
          'placeholder': getI18nString('team_view.search_bar.search_members_with_ellipsis')
        }), jsx('div', {
          className: _$$s3.pl8.$
        }), w6(e.selectedView.view) && jsx(_$$y, {
          selectedWorkspaceId: e.filters.workspaceFilter,
          onFilterUpdate: t => {
            e.onFilter({
              workspaceFilter: t
            });
          },
          getCount: e => er.workspaces?.[e] ?? 0
        }), PR(e.selectedView.view) && jsx(tP, {
          selectedLicenseGroupId: e.filters.licenseGroupFilter,
          onFilterUpdate: t => {
            e.onFilter({
              licenseGroupFilter: t
            });
          },
          getCount: e => er.licenseGroups?.[e] ?? 0
        }), rH(e.org.id, e.selectedView.view) && jsx(tD, {
          selectedIdpGroupId: e.filters.idpGroupFilter,
          onFilterUpdate: t => {
            e.onFilter({
              idpGroupFilter: t
            });
          },
          getCount: e => er.idpGroups?.[e] ?? 0
        }), jsx(bv, {
          'data-onboarding-key': hn,
          'dispatch': e.dispatch,
          'dropdownShown': e.dropdownShown,
          'dropdownType': 'FILTER_ACCOUNT_TYPE_DROPDOWN',
          'getCount': e => er.permission[e],
          'getDisplayText': e => zT(e),
          'label': getI18nString('members_table.menu_bar_filter.account_type'),
          'selectedValue': e.filters.permissionFilter,
          'updateFilter': t => e.onFilter({
            permissionFilter: t
          }),
          'values': [FUserRoleType.ADMIN, FUserRoleType.MEMBER, FUserRoleType.GUEST, SpecialUserTypes.IDP, SpecialUserTypes.UNVERIFIED]
        }), XO(e.selectedView.view) && jsx(IM, {
          dispatch: e.dispatch,
          dropdownShown: e.dropdownShown,
          selectedValue: e.filters.seatTypeFilter,
          updateFilter: t => e.onFilter({
            seatTypeFilter: t
          }),
          getCount: e => er.seatTypes?.[e] ?? 0
        }), jsx(bv, {
          label: getI18nString('members_table.menu_bar_filter.last_edit'),
          dispatch: e.dispatch,
          dropdownShown: e.dropdownShown,
          dropdownType: 'FILTER_LAST_EDIT_DROPDOWN',
          values: Object.values(LastEditPeriod),
          selectedValue: e.filters.lastEditFilter,
          getDisplayText: e => Mj(e),
          getCount: e => er.lastEdit[e],
          updateFilter: t => e.onFilter({
            lastEditFilter: t
          })
        }), (e.invoices?.length || 0) > 0 && RC(e.selectedView.view) && !e.isELA && jsx(TrackedDiv, {
          className: $u,
          onClick: () => e.onFilter({
            newEditorFilter: !e.filters.newEditorFilter
          }),
          trackingProperties: {
            filterType: 'NewEditorFilter',
            isFilterEnabled: !e.filters.newEditorFilter
          },
          children: jsx(Checkbox, {
            checked: e.filters.newEditorFilter,
            label: jsx(Label, {
              children: getI18nString('members_table.menu_bar_filter.new_charges_since_last_invoice')
            }),
            onChange: lQ
          })
        })]
      })
    }));
  };
  let eE = {
    licenseGroupIdFilter: e.filters.licenseGroupFilter,
    permissionFilter: e.filters.permissionFilter,
    lastEditFilter: e.filters.lastEditFilter,
    newEditorFilter: e.filters.newEditorFilter
  };
  let eS = e.selectedView.view === 'workspace';
  let eN = e.selectedView.view === 'licenseGroup';
  let eI = jsx(Me, {
    'aria-label': getI18nString('members_table.csv_export.get_csv'),
    'trackingProperties': {
      action: 'Export CSV'
    },
    'onClick': () => {
      v || (f(!0), e.dispatch(VisualBellActions.enqueue({
        message: getI18nString('members_table.csv_export.preparing_request'),
        type: 'orgRoster.exportCSV',
        icon: VisualBellIcon.SPINNER
      })), (e.selectedView.view !== 'orgAdminSettings' ? e.selectedView.view === 'licenseGroup' ? eg.getMemberCSVExport({
        billingGroupId: e.filters.licenseGroupFilter
      }) : _$$u.getMemberCSVExport({
        workspaceId: e.filters.workspaceFilter
      }) : _$$G.getMemberCSVExport({
        orgId: e.org.id
      })).then(() => {
        e.dispatch(VisualBellActions.enqueue({
          message: getI18nString('members_table.csv_export.generating'),
          type: 'orgRoster.exportCSV',
          icon: VisualBellIcon.CHECK
        }));
      }, () => {
        e.dispatch(VisualBellActions.enqueue({
          message: getI18nString('members_table.csv_export.error'),
          type: 'orgRoster.exportCSV',
          icon: VisualBellIcon.EXCLAMATION,
          error: !0
        }));
      }), f(!1));
    },
    'htmlAttributes': {
      'data-testid': 'members-get-CSV-button'
    },
    'children': jsx(_$$b, {})
  });
  let eT = e.selectedView.view === 'orgAdminSettings';
  let eA = e.selectedView.view === 'licenseGroup' && e.selectedView.licenseGroupId;
  let eR = jsxs(AutoLayout, {
    spacing: 8,
    width: 'hug-contents',
    children: [eT && !getFeatureFlags().user_groups && jsxs(Fragment, {
      children: [jsx(yE, {
        planParentId: e.org.id,
        planType: FOrganizationLevelType.ORG
      }), jsx('div', {
        className: _$$s3.mr8.$
      })]
    }), eA && jsxs(Fragment, {
      children: [jsx(dK, {
        licenseGroupId: eA
      }), jsx('div', {
        className: _$$s3.mr8.$
      })]
    }), e.selectedView.view !== 'orgAdminSettings' || getFeatureFlags().user_groups ? jsx(_$$V, {
      'icon': 'plus-32',
      'variant': 'primary',
      'onClick': () => {
        let t = e.filters.workspaceFilter ?? void 0;
        t === UNASSIGNED && (t = void 0);
        let a = e.filters.licenseGroupFilter ?? void 0;
        a === _$$s2 && (a = void 0);
        e.dispatch(showModalHandler({
          type: tf,
          data: {
            workspaceId: t,
            licenseGroupId: a,
            addPendingOrgUserIds: e.addPendingOrgUserIds || lQ,
            queueOrgUsersRefetch: e.queueOrgUsersRefetch || lQ,
            invoices: e.invoices
          }
        }));
      },
      'trackingProperties': {
        action: 'Add Members'
      },
      'data-onboarding-key': X_,
      'children': jsx(TextWithTruncation, {
        children: renderI18nText('members_table.add_members_button')
      })
    }) : jsx(_$$V, {
      icon: 'plus-32',
      variant: 'primary',
      onClick: () => {
        let t = e.filters.workspaceFilter ?? void 0;
        t === UNASSIGNED && (t = void 0);
        let a = e.filters.licenseGroupFilter ?? void 0;
        a === _$$s2 && (a = void 0);
        eu({
          isPlanAdmin: !0
        }) ? e.dispatch(showModalHandler({
          type: _$$e5(),
          data: {
            planType: FOrganizationLevelType.ORG,
            workspaceId: t,
            licenseGroupId: a
          }
        })) : e.dispatch(showModalHandler({
          type: F4,
          data: {
            workspaceId: t,
            licenseGroupId: a
          }
        }));
      },
      trackingProperties: {
        action: 'Invite Users'
      },
      children: jsx(TextWithTruncation, {
        children: renderI18nText('members_table.invite_users_button')
      })
    }), !ef && eI]
  });
  let eO = null;
  eO = getFeatureFlags().user_groups && e.selectedView.view === 'orgAdminSettings' ? null : eS ? jsx(_$$m2, {
    selectedSecondaryTab: SectionType.MEMBERS,
    rightActions: eR
  }) : jsx(_$$K2, {
    isLoading: e.isTitleLoading,
    title: e.title ?? getI18nString('members_table.header'),
    rightActions: eR
  });
  let eL = e.customEmptyState && e.sortedItems.length === 0 && !e.isLoading && !nt(e.filters) && !e.searchQuery;
  let eD = useMemo(() => e.sortedItems.find(e => e9(e)), [e.sortedItems]);
  let eM = jsxs('div', {
    className: F()(kL, {
      [Wu]: eS
    }),
    children: [eO, G && jsx(tT, {
      org: e.org
    }), eN && jsx('div', {
      className: 'x7hzu26 x5hng5x',
      children: jsx(tE, {
        queueOrgUsersRefetch: e.queueOrgUsersRefetch || lQ,
        addPendingOrgUserIds: e.addPendingOrgUserIds || lQ
      })
    }), !isMobileUA && e.sortedItems.length > 0 && jsxs(Fragment, {
      children: [jsx(_$$p2, {
        children: jsx(tQ, {
          isOrgAdminTable: e.selectedView.view === 'orgAdminSettings'
        })
      }), eD && jsx(tZ, {
        targetOrgUserId: eD.orgUser.id
      })]
    }), !isMobileUA && eN && (!e.isLoading || e.sortedItems.length > 0) && jsx(_$$p2, {
      children: jsx(tJ, {
        targetOrgUserId: eD?.orgUser.id ?? null
      })
    }), eL ? jsxs(AutoLayout, {
      direction: 'vertical',
      height: 'hug-contents',
      padding: {
        horizontal: 32
      },
      children: [ex(), e.customEmptyState]
    }) : jsxs(Fragment, {
      children: [ef && ey(), jsx(Cj, {
        actionBar: t => {
          let a = t.filter(e9).map(e => e.orgUser);
          let s = a.map(e => e.id);
          let i = new Set(s);
          let l = s;
          if (j && totalSelectable === null) {
            return jsx('div', {
              style: _$$sx.w150.$,
              children: jsx(Wi, {
                className: _$$s3.h12.w150.$,
                animationType: JR.SHIMMER_ON_MENU
              })
            });
          }
          let o = !1;
          if (j && totalSelectable !== null && (o = e.isLoading), o && status === APILoadingStatus.LOADING) {
            return jsx('div', {
              style: _$$sx.w150.$,
              children: jsx(Wi, {
                className: _$$s3.h12.w150.$,
                animationType: JR.SHIMMER_ON_MENU
              })
            });
          }
          let d = a;
          if (o) {
            let t = new Set(e.sortedItems.filter(e9).map(e => e.orgUser).map(e => e.id).filter(e => !i.has(e)));
            l = (d = users.filter(e => !t.has(e.id))).map(e => e.id);
          }
          let c = em(a, e => e.is_email_validated);
          let _ = !o && c.size === 1 && c.has(!1);
          let u = l.includes(e.myOrgUser.id);
          let m = a.some(e => !!e.scim_account_type || !!e.scim_whiteboard_paid_status);
          let p = a.some(e => !!e.workspace_users?.find(e => e.is_main_workspace && e.idp_group));
          let g = a.some(e => !!e.license_group_member?.idp_group);
          let h = d.map(e => e.user.email).filter(e => void 0 !== e);
          if (l.length === 0) return jsx(Fragment, {});
          let x = a.filter(e => e.ecc_upgrading_locked).length > 0;
          return jsxs(setupThemeContext, {
            mode: 'dark',
            children: [dL(e.selectedView.view) && !m && !x && !r && jsx(aq, {
              queueFilterCountsRefetch: e.queueFilterCountsRefetch,
              orgId: e.org.id,
              orgUserIds: l,
              dropdownShown: e.dropdownShown,
              lastFetchTimestamp: o ? C : null
            }), jsx(Button, {
              onClick: () => ne(h, e.dispatch),
              variant: 'ghost',
              children: getI18nString('members_table.copy_emails_button', {
                userCount: l.length
              })
            }), _ && jsx(Button, {
              onClick: () => a9(l, e.org.id, e.dispatch),
              children: getI18nString('members_table.resend_verification_button')
            }), !p && !!e.workspacesCanMoveTo.length && w6(e.selectedView.view) && ep(l, o ? null : a, o ? C : null), e.isLicenseGroupsEnabled && !g && PR(e.selectedView.view) && eh(l, o ? null : a, o ? C : null), !u && (e.isCurrentUserOrgAdmin || a.every(e => e.permission !== FUserRoleType.ADMIN)) && jsx(Button, {
              variant: 'ghost',
              onClick: () => QV(l, e.org, e.dispatch),
              children: getI18nString('members_table.remove_users_button', {
                userCount: l.length
              })
            })]
          });
        },
        columns: e.columns,
        emptyContent: jsx(_$$p, {
          children: (() => {
            let t = () => {
              e.onFilter({
                ...DefaultFilters,
                licenseGroupFilter: e.filters.licenseGroupFilter
              });
            };
            let a = renderI18nText('members_table.no_members_to_show');
            let s = jsxs('span', {
              children: [renderI18nText('members_table.no_members_to_show'), ' ', jsx('a', {
                className: nf,
                onClick: () => t(),
                children: renderI18nText('multi_select_list.reset_filters')
              })]
            });
            let i = renderI18nText('members_table.no_members_match_your_search_query');
            return nt(e.filters) && e.searchQuery ? e.lastFilterAction === 0 ? i : s : nt(e.filters) ? s : e.searchQuery ? i : a;
          })()
        }),
        getItemKey: ns,
        getTotalSelected: j && totalSelectable !== null && e.isLoading ? (e, t) => totalSelectable - (t.length - e.length) : void 0,
        hasNewScrollContext: !0,
        highlightState: {
          itemKey: highlightedItem?.orgUser.id ?? null,
          setItemKey: setHighlightedItemId
        },
        isBannerHeightDynamic: !0,
        isLoading: e.isLoading,
        itemTypeContext: {
          itemType: 'user',
          getSelectedCountString: e => j && !totalSelectable ? '' : getI18nString('multi_select_list.selected_count_user', {
            numSelected: e
          })
        },
        items: e.sortedItems,
        minContentWidth: b,
        onFetchMore: e.onFetchMore,
        onRowClick: e => {
          e9(e) && (highlightedItem?.orgUser.id === e.orgUser.id ? clearHighlightedItemId() : setHighlightedItemId(e.orgUser.id));
        },
        onScroll: () => e.dispatch(hideDropdownAction()),
        onSetSortState: e.onSort,
        onToggleSelectAll: e => e ? y(!1) : y(!0),
        rightActionColumns: h,
        scrollAwayContent: e.additionalScrollAwayContent,
        scrollContentRef: i,
        selectAllDisabled: ei,
        sortState: e.sortState,
        stickyContent: ef ? void 0 : jsxs(Fragment, {
          children: [ex(), ey()]
        }),
        trackingProperties: {
          batchAction: eE
        },
        unselectableItemKeys: e.unselectableItemKeys
      })]
    })]
  });
  return jsxs(Fragment, {
    children: [eM, jsx(_$$E2.Root, {
      open: !!highlightedItem,
      onClose: clearHighlightedItemId,
      trackingName: na,
      trackingProperties: {
        orgId: e.org.id,
        userId: highlightedItem?.orgUser.user.id
      },
      ref: a,
      children: highlightedItem && jsx(_$$E2.Contents, {
        avatarEntity: highlightedItem.orgUser.user,
        badge: getUserBadge(highlightedItem.orgUser, {
          showMember: !0
        }),
        currency: e.currency,
        isCurrentUserOrgAdmin: e.isCurrentUserOrgAdmin,
        isMe: e.myOrgUser.user_id === highlightedItem.orgUser.user_id,
        licenseGroupsById: e.licenseGroupsById,
        org: e.org,
        orgUser: highlightedItem.orgUser,
        orgUsersByUserId: e.allOrgUsersByUserId,
        planType: FOrganizationLevelType.ORG,
        queueFilterCountsRefetch: e.queueFilterCountsRefetch,
        renewalTerm: IX.YEAR,
        workspacesCanMoveTo: e.workspacesCanMoveTo
      })
    })]
  });
}
let ns = e => e9(e) ? e.orgUser.id : e.idpUser.email;
let ni = /\s+|,\s*|;\s*/;
export function $$nr1(e) {
  return e ? e.length <= 75 || e.split(ni).every(isValidEmail) ? e : e.substring(0, 75) : '';
}
let nl = new Ef([], {
  threshold: 0.1,
  matchAllTokens: !0,
  tokenize: !1,
  distance: 300,
  keys: [{
    name: 'user.handle',
    weight: 1
  }, {
    name: 'user.name',
    weight: 1
  }, {
    name: 'user.email',
    weight: 1
  }]
});
let no = (e, t, a, n, s, i, r) => {
  let l = t => QV(t, n, e);
  let o = (t, a, s) => Pt(t, a, s, n, e, r, null);
  return d => ({
    dispatch: e,
    dropdownShown: t,
    isMe: a.user_id === d.user_id,
    isOrgGuest: d.permission === FUserRoleType.GUEST,
    onChangeAccountType: o,
    onChangeLicenseGroup: (t, a) => qj(t, a, s, i, n, e, r, null),
    onChangeWorkspace: (t, a) => _$$ep(t, a, n, e, r, null),
    onChangeMemberPermission: VS,
    onCopyEmail: () => {
      ne([d.user.email], e);
    },
    onDelete: l,
    onResendVerification: () => {
      a9([d.id], n.id, e);
    },
    org: n,
    orgUser: d,
    queueFilterCountsRefetch: r,
    seatType: d.active_seat_type?.key
  });
};
let nd = (e, t, a) => n => ({
  dispatch: e,
  dropdownShown: t,
  idpUser: n,
  onCopyEmail: () => {
    ne([n.email], e);
  },
  org: a,
  seatType: n.seat_type_key
});
export function $$nc0(e) {
  let {
    org,
    dropdownShown,
    invoices,
    searchQuery,
    setSearchQuery,
    filters,
    sort,
    startTime,
    isLoading
  } = e;
  let M = useDispatch();
  let P = useSelector(e => e.selectedView);
  let U = useSelector(e => {
    let t = e.currentUserOrgId;
    return e.orgUsersByOrgId[t];
  });
  let {
    sortedUsers,
    status,
    fetchMore,
    queueRefetch
  } = oo({
    searchQuery: $$nr1(searchQuery),
    sort,
    filter: filters
  });
  let {
    optimisticIds,
    addOptimisticIds
  } = _$$K(sortedUsers);
  let V = useSubscription(OrgUsersByIdView, {
    orgId: org.id,
    orgUserIds: optimisticIds
  }, {
    enabled: optimisticIds.length > 0
  });
  let W = useMemo(() => (V.status === 'loaded' ? getResourceDataOrFallback(V.data?.org)?.baseOrgUserMembersById ?? [] : []).map(e => _$$f(e)), [V.status, V.data?.org]);
  let H = useMemo(() => searchQuery && W.length !== 0 ? (nl.set(W), nl.search(searchQuery)) : W, [searchQuery, W]);
  let Y = useCallback(e => function (e, t) {
    let a = t[FilterKeys.licenseGroupFilter];
    let n = t[FilterKeys.workspaceFilter];
    let s = t[FilterKeys.permissionFilter];
    let i = t[FilterKeys.lastEditFilter];
    let r = t[FilterKeys.newEditorFilter];
    if (s === SpecialUserTypes.IDP && isUserObject(e) || s === SpecialUserTypes.UNVERIFIED && (!isUserObject(e) || !1 !== e.is_email_validated) || s && s !== SpecialUserTypes.IDP && s !== SpecialUserTypes.UNVERIFIED && (isUserObject(e) && !1 === e.is_email_validated || (isUserObject(e) ? e.permission : null) !== s)) return !1;
    if (i) {
      let t;
      if (isUserObject(e) && (t = e.last_edit), !t) return !1;
      let a = null;
      if (i === '3mo' ? a = _$$A().subtract(3, 'month') : i === '6mo' ? a = _$$A().subtract(6, 'month') : i === '1yr' && (a = _$$A().subtract(1, 'year')), _$$A(t).isAfter(a)) return !1;
    }
    if (r && !isUserObject(e)) return !1;
    if (a) {
      if (!isUserObject(e)) return !1;
      let t = e.license_group_member?.license_group_id;
      if (!t && a !== _$$s2 || t && a !== t) return !1;
    }
    if (n) {
      if (!isUserObject(e)) return !1;
      let t = e.workspace_users?.find(e => e.is_main_workspace)?.workspace_id;
      if (!t && n !== UNASSIGNED || t && n !== t) return !1;
    }
    return !0;
  }(e, filters), [filters]);
  let J = useMemo(() => H.filter(Y), [H, Y]);
  let K = useMemo(() => sortedUsers.filter(Y), [sortedUsers]);
  let [X, Q] = useState(a7.FILTER);
  let Z = _$$a();
  let ee = !!(Z && Z.permission === FUserRoleType.ADMIN);
  let et = useSelector(e => e.licenseGroups);
  let ea = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  let en = RG();
  let {
    filterCountsViewResult,
    queueFilterCountsRefetch
  } = vu(org.id, $$nr1(searchQuery), filters);
  let {
    groupsUserIsAdminOf,
    otherLicenseGroups,
    allAdminableLicenseGroups
  } = _$$x();
  let ed = NJ(org.id);
  let ec = useMemo(() => ed.data ?? [], [ed.data]);
  let e_ = useCallback(e => isUserObject(e) ? no(M, dropdownShown, Z, org, et, ee, queueFilterCountsRefetch)(e) : nd(M, dropdownShown, org)(e), [M, dropdownShown, Z, org, et, ee, queueFilterCountsRefetch]);
  let eu = useMemo(() => K.map(e_), [K, e_]);
  let em = useMemo(() => J.map(e_), [J, e_]);
  let ep = new Set([...K, ...J].filter(e => !isUserObject(e)).map(e => e.email));
  let eg = {
    columnName: sort.columnName === ColumnName.SEARCH_SCORE ? ColumnName.SEARCH_SCORE : _$$aM(sort.columnName ?? ColumnName.NAME, org.featured_scim_metadata),
    isReversed: sort.isReversed
  };
  let eh = function (e, t, a, s, i, r, l, o, d, c) {
    let _ = [];
    if (_.push({
      name: _$$aM(ColumnName.NAME, e.featured_scim_metadata),
      sorting_key: ColumnName.NAME,
      className: Mc,
      getSortValue: e => e9(e) ? e.orgUser.user.handle || e.orgUser.user.email : e.idpUser.email,
      cellComponent: (e, t, a) => jsx(tr, {
        item: e,
        disabled: !!t,
        setHighlightedItemKey: a.setItemKey
      })
    }), XO(o) && (c && c !== ViewAccessTypeEnum.VIEW && (_.push({
      name: _$$aM(ColumnName.UPGRADE_DATE, e.featured_scim_metadata),
      sorting_key: ColumnName.UPGRADE_DATE,
      className: PJ,
      getSortValue: e => {
        if (e9(e)) return e.orgUser?.active_seat_upgrade_date;
      },
      sortReversed: !0,
      cellComponent: e => jsx(tc, {
        item: e
      })
    }), _.push({
      name: _$$aM(ColumnName.UPGRADE_REASON, e.featured_scim_metadata),
      sorting_key: ColumnName.UPGRADE_REASON,
      className: xw,
      getSortValue: e => {
        if (e9(e)) return e.orgUser?.active_seat_upgrade_method?.upgrade_method?.toString();
      },
      sortReversed: !0,
      cellComponent: e => jsx(t_, {
        item: e
      })
    })), _.push(...mC({
      columnClassName: Cp,
      selectorOuterClassName: Gb,
      selectorInnerClassName: r2,
      currency: d,
      queueFilterCountsRefetch: l,
      hideTooltip: !!(c && c !== ViewAccessTypeEnum.VIEW)
    }))), i.length > 0 && o8(o)) {
      let t = {};
      i.forEach(e => {
        t[e.id] = e;
      });
      _.push({
        name: _$$aM(ColumnName.WORKSPACE, e.featured_scim_metadata),
        sorting_key: ColumnName.WORKSPACE,
        className: Uj,
        getSortValue: e => {
          if (e9(e)) {
            let a = findMainWorkspaceUser(e.orgUser);
            return a ? t[a.workspace_id]?.name ?? 'aaa-unassigned' : 'aaa-unassigned';
          }
          return 'zzz-idpUser';
        },
        getSecondarySortValue: e => {
          if (e9(e)) return findMainWorkspaceUser(e.orgUser)?.assigned_at ?? void 0;
        },
        sortSecondaryReversed: !0,
        cellComponent: (e, t) => jsx(tu, {
          item: e,
          areDropdownsDisabled: !!t,
          workspacesCanMoveTo: i,
          orgUsersByUserId: r
        })
      });
    }
    t && PR(o) && _.push({
      name: _$$aM(ColumnName.LICENSE_GROUP, e.featured_scim_metadata),
      sorting_key: ColumnName.LICENSE_GROUP,
      className: VG,
      getSortValue: e => e9(e) ? e.orgUser.license_group_member?.license_group_id && a[e.orgUser.license_group_member.license_group_id]?.name || 'aaa-unassigned' : 'zzz-idpUser',
      getSecondarySortValue: e => {
        if (e9(e) && e.orgUser.license_group_member) return e.orgUser.license_group_member.assigned_at;
      },
      sortSecondaryReversed: !0,
      cellComponent: (e, t) => jsx(tm, {
        item: e,
        areDropdownsDisabled: !!t,
        groupsCanMoveUserTo: s,
        orgUsersByUserId: r
      })
    });
    e.featured_scim_metadata && _.push({
      name: du(e.featured_scim_metadata),
      sorting_key: ColumnName.SCIM_DATA,
      className: b8,
      getSortValue: e => tn(e) ? `a${tn(e)}` : 'z',
      cellComponent: e => tn(e) ? jsx('span', {
        children: tn(e)
      }) : jsx(te, {})
    });
    _.push({
      name: _$$aM(ColumnName.LAST_ACTIVE, e.featured_scim_metadata),
      sorting_key: ColumnName.LAST_ACTIVE,
      className: cJ,
      getSortValue: e => e9(e) ? tt(e.orgUser) : void 0,
      sortReversed: !0,
      cellComponent: e => jsx(td, {
        item: e
      })
    });
    (c === ProductAccessTypeEnum.EXPERT || c === ProductAccessTypeEnum.COLLABORATOR) && _.push({
      name: _$$aM(ColumnName.LAST_EDIT, e.featured_scim_metadata),
      sorting_key: ColumnName.LAST_EDIT,
      className: $8,
      getSortValue: e => e9(e) ? ta(e.orgUser) : void 0,
      sortReversed: !0,
      cellComponent: e => jsx(to, {
        item: e
      })
    });
    return _;
  }(org, en, et, allAdminableLicenseGroups, ec, U, queueFilterCountsRefetch, P.view, e.currency, filters.seatTypeFilter);
  let [, ex] = useState(eg);
  let eb = useMemo(() => {
    if (em.length === 0) return eu;
    let e = eh.find(e => e.name === sort.columnName);
    return _$$m(eu, em, e || eh[0], sort);
  }, [eu, em, eh, sort]);
  let [ev, ef] = useState(!1);
  useEffect(() => {
    let e = 'membersTabOrgJoinRequest' in P ? P.membersTabOrgJoinRequest : null;
    e && !ev && (M(showModalHandler({
      type: pp,
      data: {
        selectedOrgJoinRequest: e
      }
    })), ef(!0));
  }, [M, ev, P]);
  let ej = useCallback(e => {
    let a = !1;
    e === ColumnName.SEARCH_SCORE ? a = !1 : sort.columnName === e && (a = !sort.isReversed);
    let n = {
      isReversed: a,
      columnName: e
    };
    M(selectViewAction({
      ...P,
      orgAdminMembersTabSort: n,
      orgAdminMembersTabFilters: filters
    }));
    let s = e === ColumnName.SEARCH_SCORE ? ColumnName.SEARCH_SCORE : _$$aM(e, org.featured_scim_metadata);
    ex(e => ({
      columnName: s,
      isReversed: e.columnName === s && !e.isReversed
    }));
  }, [M, filters, org.featured_scim_metadata, ex, sort.columnName, sort.isReversed, P]);
  let ey = useCallback(e => {
    e !== searchQuery && trackEventAnalytics('Org user search performed', {
      orgId: org.id,
      queryLength: e.length
    });
    setSearchQuery(e);
    Q(a7.SEARCH);
    e ? ej(ColumnName.SEARCH_SCORE) : e === '' && ej(DefaultSortConfig.columnName);
  }, [ej, org.id, searchQuery, setSearchQuery]);
  let ew = useMemo(() => debounce(ey, 300), [ey]);
  return jsx(nn, {
    addPendingOrgUserIds: addOptimisticIds,
    additionalScrollAwayContent: e.additionalScrollAwayContent,
    allOrgUsersByUserId: U,
    columns: eh,
    currency: e.currency,
    customEmptyState: e.customEmptyState,
    dispatch: M,
    dropdownShown,
    filterCountsViewResult,
    filters,
    invoices,
    isCurrentUserOrgAdmin: ee,
    isELA: ea,
    isLicenseGroupsEnabled: en,
    isLoading: status !== 'loaded' || !!fetchMore || isLoading,
    isTitleLoading: e.isTitleLoading,
    lastFilterAction: X,
    licenseGroupsById: et,
    licenseGroupsUserIsAdminOf: groupsUserIsAdminOf,
    licenseGroupsUserIsNotAdminOf: otherLicenseGroups,
    myOrgUser: Z,
    onClearSearch: () => ey(''),
    onFetchMore: fetchMore,
    onFilter: e => {
      let t = {
        ...filters,
        ...e
      };
      M(selectViewAction({
        ...P,
        orgAdminMembersTabFilters: t,
        orgAdminMembersTabSort: sort
      }));
      Q(a7.FILTER);
    },
    onSearch: ew,
    onSort: ej,
    org,
    queueFilterCountsRefetch,
    queueOrgUsersRefetch: queueRefetch,
    searchQuery,
    selectedView: P,
    sortState: sort,
    sortedItems: eb,
    startTime,
    title: e.title,
    unselectableItemKeys: ep,
    workspacesCanMoveTo: ec
  });
}
export const KX = $$nc0;
export const Bk = $$nr1;