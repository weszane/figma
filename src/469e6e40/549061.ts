import d from 'classnames';
import { Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { l as _$$l } from '../469e6e40/61410';
import { Q as _$$Q2 } from '../469e6e40/276592';
import { A as _$$A } from '../469e6e40/634763';
import { k as _$$k3 } from '../469e6e40/952112';
import { getRumLoggingConfig } from '../905/16237';
import { E as _$$E2 } from '../905/53857';
import { B as _$$B2 } from '../905/55104';
import { useSprigWithSampling } from '../905/99656';
import { showModalHandler } from '../905/156213';
import { ServiceCategories as _$$e } from '../905/165054';
import { R as _$$R2 } from '../905/165069';
import { h as _$$h } from '../905/207101';
import { U as _$$U } from '../905/275247';
import { w as _$$w2 } from '../905/281010';
import { VisualBellActions } from '../905/302958';
import { getI18nString, renderI18nText } from '../905/303541';
import { N_ } from '../905/332483';
import { Q as _$$Q } from '../905/363675';
import { c as _$$c } from '../905/370443';
import { getUserId } from '../905/372672';
import { FRequestsStr } from '../905/384551';
import { _ as _$$_ } from '../905/410717';
import { rq } from '../905/425180';
import { w as _$$w } from '../905/433065';
import { k as _$$k } from '../905/443820';
import { isCollaboratorType, ProductAccessTypeEnum } from '../905/513035';
import { DashboardSections, MemberSections } from '../905/548208';
import { VisualBellIcon } from '../905/576487';
import { H8, Pf } from '../905/590952';
import { getFeatureFlags } from '../905/601108';
import { EM, QL } from '../905/609392';
import { e as _$$e3 } from '../905/621515';
import { ResourceStatus, getResourceDataOrFallback } from '../905/663269';
import { $ as _$$$ } from '../905/692618';
import { e0 as _$$e2 } from '../905/696396';
import { G as _$$G } from '../905/750789';
import { AutoLayout } from '../905/470281';
import { O as _$$O } from '../905/833838';
import { sZ } from '../905/845253';
import { sf } from '../905/929976';
import { lQ } from '../905/934246';
import { O as _$$O2 } from '../905/936515';
import { sx } from '../905/941192';
import { ck } from '../905/952832';
import { a as _$$a } from '../905/964520';
import { h1 } from '../905/986103';
import { k as _$$k5 } from '../4452/48052';
import { m as _$$m } from '../4452/114445';
import { b as _$$b } from '../4452/320061';
import { Zu } from '../4452/396452';
import { W as _$$W } from '../4452/420937';
import { E as _$$E } from '../4452/428395';
import { B as _$$B } from '../4452/541264';
import { n as _$$n } from '../4452/550447';
import { v as _$$v } from '../4452/562448';
import { LX } from '../4452/780544';
import { s as _$$s2, u as _$$u2 } from '../4452/791117';
import { A$, aN, Td, uH, V4, x9, Z4 } from '../4452/846771';
import { q as _$$q } from '../4452/876838';
import { g as _$$g } from '../4452/983384';
import { R as _$$R } from '../7021/67076';
import { s as _$$s } from '../cssbuilder/589278';
import { TaD } from '../figma_app/6204';
import { useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355';
import { AdminRequestDashboardView, AdminRequestDashOrgInfo, UserFlagByName } from '../figma_app/43951';
import { Yy } from '../figma_app/59509';
import { hY } from '../figma_app/80683';
import { Pn, Yo } from '../figma_app/84966';
import { ER } from '../figma_app/102449';
import { BC } from '../figma_app/149367';
import { Xf } from '../figma_app/153916';
import { Wi } from '../figma_app/162641';
import { FOrganizationLevelType, FUserRoleType } from '../figma_app/191312';
import { Zx } from '../figma_app/217457';
import { m$ } from '../figma_app/240735';
import { useSubscription } from '../figma_app/288654';
import { ce } from '../figma_app/347146';
import { fq, uE, ur } from '../figma_app/451028';
import { useIsAdminUser, useTeamPlanFeatures, useTeamPlanUser } from '../figma_app/465071';
import { Sm } from '../figma_app/482728';
import { _ as _$$_2, S as _$$S } from '../figma_app/490799';
import { Y as _$$Y2 } from '../figma_app/515088';
import { r1 } from '../figma_app/545877';
import { tI } from '../figma_app/599327';
import { d as _$$d } from '../figma_app/603561';
import { $z, Me } from '../figma_app/617427';
import { k as _$$k4 } from '../figma_app/618031';
import { CY } from '../figma_app/637027';
import { G_, J7, SN } from '../figma_app/650409';
import { EQ, MX } from '../figma_app/684446';
import { wY } from '../figma_app/708845';
import { fu } from '../figma_app/831799';
import { ps, V7, Xv, z7, ZY } from '../figma_app/845611';
import { kt } from '../figma_app/858013';
import { desktopAPIInstance } from '../figma_app/876459';
import { Ex, vj, zE } from '../figma_app/919079';
import es from '../vendor/923386';
let c = d;
function R({
  gridColumnStart: e,
  gridColumnEnd: t,
  isLoading: a,
  children: s
}) {
  return jsx('div', {
    style: sx.hFitContent.add({
      gridColumnStart: e,
      gridColumnEnd: t
    }).$$if(a, sx.h48.$, sx.add({
      borderRadius: '13px'
    }).borderBox.b1.colorBorder.$).$,
    children: a ? jsx(Wi, {
      className: _$$s.wFull.hFull.$
    }) : s
  });
}
function U({
  isLoading: e,
  plan: t
}) {
  let a = useDispatch();
  let s = useSelector(e => e.avatarEditorState);
  return e ? jsx(Wi, {
    className: _$$s.h32.w400.$
  }) : jsxs(AutoLayout, {
    height: 'hug-contents',
    spacing: 16,
    children: [jsx(ER, {
      dispatch: a,
      entityType: t?.key.type === FOrganizationLevelType.ORG ? ck.ORG : ck.TEAM,
      entity: {
        ...t,
        id: t?.key.parentId ?? void 0
      },
      avatarEditorState: s,
      size: 32
    }), jsx('div', {
      className: _$$s.textHeadingLarge.$,
      children: t?.name ? renderI18nText('admin_dashboard.title_with_plan', {
        planName: t.name
      }) : renderI18nText('admin_dashboard.title_without_plan')
    })]
  });
}
function J(e) {
  let t = useDispatch();
  return jsx(_$$$, {
    onClick: () => {
      t(sf({
        view: 'orgAdminSettings',
        orgAdminSettingsViewTab: J7.BILLING,
        orgAdminSettingsViewSecondaryTab: G_.INVOICES,
        initialHighlightedInvoiceId: e.planInvoiceId
      }));
    },
    children: getI18nString('admin_dashboard.billing_notice.view_invoice_label')
  });
}
function K() {
  let e = useDispatch();
  return jsx(_$$$, {
    onClick: () => {
      e(sf({
        view: 'orgAdminSettings',
        orgAdminSettingsViewTab: J7.BILLING,
        orgAdminSettingsViewSecondaryTab: G_.OVERVIEW
      }));
    },
    children: getI18nString('admin_dashboard.billing_notice.view_billing_label')
  });
}
function X(e) {
  let t;
  if (!e.dashboardBillingNotice) return null;
  let a = null;
  let s = null;
  switch (e.dashboardBillingNotice.id) {
    case fq.ORG_OPEN_INVOICE:
      t = getI18nString('admin_dashboard.billing_notice.org_open_invoice_title', {
        pastDueAt: e.dashboardBillingNotice.data.pastDueAt
      });
      a = getI18nString('admin_dashboard.billing_notice.make_payment_soon_subtitle');
      s = jsx(J, {
        planInvoiceId: e.dashboardBillingNotice.data.planInvoiceId
      });
      break;
    case fq.ORG_PAST_DUE_INVOICE:
      t = getI18nString('admin_dashboard.billing_notice.org_past_due_invoice_title', {
        pastDueAt: e.dashboardBillingNotice.data.pastDueAt
      });
      a = getI18nString('admin_dashboard.billing_notice.make_payment_soon_subtitle');
      s = jsx(J, {
        planInvoiceId: e.dashboardBillingNotice.data.planInvoiceId
      });
      break;
    case fq.ORG_UPCOMING_TRUE_UP_LOCKED:
      t = getI18nString('billing_status.locked', {
        dueDate: e.dashboardBillingNotice.data.issuedAt
      });
      s = jsx(K, {});
      break;
    case fq.ORG_UPCOMING_TRUE_UP_REVIEW:
      t = getI18nString('billing_status.review.org_admin', {
        dueDate: e.dashboardBillingNotice.data.issuedAt
      });
      s = jsx(K, {});
      break;
    case fq.ORG_UPCOMING_RENEWAL_NON_AUTOMATIC:
      t = getI18nString('billing_status.review.renewal', {
        renewalDate: e.dashboardBillingNotice.data.periodStartAt
      });
      a = getI18nString('admin_dashboard.billing_notice.contact_account_manager_subtitle');
      s = jsx(K, {});
      break;
    case fq.ORG_UPCOMING_ADDITIVE_INVOICE:
      t = getI18nString('admin_dashboard.billing_notice.quarterly_invoice_title', {
        issuedAt: e.dashboardBillingNotice.data.issuedAt
      });
      s = jsx(K, {});
      break;
    case fq.ORG_UPCOMING_INVOICE:
      t = getI18nString('billing_status.default', {
        dueDate: e.dashboardBillingNotice.data.issuedAt
      });
      s = jsx(K, {});
      break;
    case fq.BILLING_GROUP_UPCOMING_TRUE_UP:
      t = getI18nString('license_group_admin.billing_dashboard.billing_banner.review_and_confirm');
      a = jsx(_$$Q2, {
        billingGroupsToBeReviewed: e.dashboardBillingNotice.data.groupsToReview
      });
      break;
    case fq.BILLING_GROUP_UPCOMING_RENEWAL:
      t = getI18nString('license_group_admin.billing_dashboard.billing_banner.upcoming_renewal.title', {
        renewalDate: e.dashboardBillingNotice.data.periodStartAt
      });
      a = getI18nString('license_group_admin.billing_dashboard.billing_banner.upcoming_renewal.subtitle');
      break;
    default:
      e.dashboardBillingNotice;
      return null;
  }
  return jsxs(Yy, {
    'data-testid': 'billing-notice-banner',
    'icon': jsx(_$$A, {}),
    'children': [jsx(_$$Q, {
      title: t,
      children: a
    }), s]
  });
}
function Q(e) {
  let t = Xf(e.orgId);
  let a = sZ();
  let i = useMemo(() => a ? uE({
    invoices: t.data?.invoices ?? [],
    org: a,
    campfireRenewalEnabled: !0,
    renewalAt: Pn(t.data)
  }) : null, [a, t.data]);
  return jsx(X, {
    dashboardBillingNotice: i
  });
}
function Z(e) {
  let t = MX();
  let a = Xf(e.orgId);
  let i = useTeamPlanUser().unwrapOr(null);
  let r = i?.userId ?? null;
  let l = useMemo(() => Pn(a.data), [a.data]);
  let o = Yo(l ? {
    planKey: {
      parentId: e.orgId,
      type: FOrganizationLevelType.ORG
    },
    nextRenewalDate: l
  } : null);
  let d = useMemo(() => ur({
    invoices: a.data?.invoices ?? [],
    licenseGroups: t,
    renewalConfirmed: o,
    userId: r,
    renewalAt: l
  }), [a.data?.invoices, t, o, r, l]);
  return jsx(X, {
    dashboardBillingNotice: d
  });
}
function ee(e) {
  return e.plan?.key.type === FOrganizationLevelType.ORG && e.plan?.key.parentId ? e.isOrgAdmin ? jsx(Q, {
    orgId: e.plan.key.parentId
  }) : jsx(Z, {
    orgId: e.plan.key.parentId
  }) : null;
}
let ei = es;
function eo({
  label: e,
  count: t
}) {
  return jsxs('h3', {
    className: 'x78zum5 x6s0dn4 x167g77z',
    children: [jsx('span', {
      children: e
    }), jsx('span', {
      className: 'x78zum5 x6s0dn4',
      children: t
    })]
  });
}
function e_({
  seatIcon: e,
  seatLabel: t,
  seatCount: a,
  isSeatCountLoading: s,
  dataTestId: i
}) {
  let r = '-';
  if (typeof a == 'string') {
    let e = Number(a);
    r = isNaN(e) ? a : e.toLocaleString();
  } else {
    typeof a == 'number' && (r = a.toLocaleString());
  }
  return jsxs('div', {
    className: _$$s.flex.itemsCenter.justifyBetween.$,
    children: [jsxs('div', {
      className: _$$s.flex.gap8.itemsCenter.$,
      children: [e, t]
    }), s ? jsx(_$$k, {
      size: 'sm',
      htmlAttributes: {
        'data-testid': `${i}-loading-spinner`
      }
    }) : jsx('div', {
      'className': _$$s.colorTextSecondary.$,
      'data-testid': i,
      'children': r
    })]
  });
}
function eu({
  planParentId: e,
  planType: t,
  isELA: a,
  onAddSeats: s,
  onManage: i
}) {
  let r;
  let l;
  let o;
  let d;
  let c;
  let _ = hY(e, t);
  let u = _.status === 'loading';
  let m = '-';
  if (_.data) {
    let {
      view,
      ...t
    } = _.data;
    d = (r = ei()(Object.values(t), e => e.assigned)) + (l = ei()(Object.values(t), e => e.available)) + (o = _.data.view?.assigned ?? 0);
    c = r + o;
    m = a ? c.toLocaleString() : d.toLocaleString();
  }
  let p = [{
    seatIcon: jsx(_$$U, {}),
    seatLabel: getI18nString('admin_dashboard.seat_counts_overview_card.assigned_seats'),
    seatCount: r,
    dataTestId: 'assigned-seats-count'
  }, {
    seatIcon: jsx(_$$w, {
      style: {
        '--color-icon-tertiary': 'var(--color-icon)'
      }
    }),
    seatLabel: getI18nString('admin_dashboard.seat_counts_overview_card.available_seats'),
    seatCount: a ? getI18nString('general.unlimited') : l,
    dataTestId: 'available-seats-count'
  }, {
    seatIcon: jsx(_$$_, {}),
    seatLabel: getI18nString('admin_dashboard.seat_counts_overview_card.view_seats'),
    seatCount: o,
    dataTestId: 'view-seats-count'
  }];
  let g = getRumLoggingConfig();
  return jsx(fu, {
    name: _$$e2.SEAT_COUNTS_OVERVIEW_CARD,
    properties: {
      planType: t,
      planId: e
    },
    children: jsxs('div', {
      className: _$$s.flex.flexColumn.$,
      children: [jsxs('div', {
        className: _$$s.flex.p16.itemsCenter.justifyBetween.bb1.bSolid.colorBorder.$,
        children: [jsx('div', {
          className: _$$s.textHeadingSmall.$,
          children: jsx(eo, {
            label: jsx('div', {
              children: getI18nString('admin_dashboard.seat_counts_overview_card.total_seats')
            }),
            count: !u && jsx(Ex, {
              dataTestId: 'total-seats-count-badge-value',
              text: m,
              color: zE.INVERT,
              subtle: !0,
              size: vj.LARGE,
              className: _$$s.colorBorder.px4.py0.$
            })
          })
        }), jsxs('div', {
          className: _$$s.flex.gap8.$,
          children: [s && jsx($z, {
            variant: 'secondary',
            onClick: s,
            trackingProperties: {
              trackingDescriptor: _$$c.ADD_SEATS
            },
            trackingOptions: g,
            children: getI18nString('admin_dashboard.seat_counts_overview_card.add_seats')
          }), jsx($z, {
            onClick: i,
            trackingProperties: {
              trackingDescriptor: _$$c.MANAGE_SEATS
            },
            trackingOptions: g,
            children: getI18nString('admin_dashboard.seat_counts_overview_card.manage')
          })]
        })]
      }), jsx('div', {
        className: _$$s.flex.flexColumn.textBodyLarge.gap8.rowGap16.p16.$,
        children: p.map(({
          seatIcon: e,
          seatLabel: t,
          seatCount: a,
          dataTestId: s
        }) => jsx(e_, {
          seatIcon: e,
          seatLabel: t,
          seatCount: a,
          isSeatCountLoading: u,
          dataTestId: s
        }, t))
      })]
    })
  });
}
function eO({
  numOfBillingGroupsManaged: e
}) {
  let t = useTeamPlanFeatures();
  let a = useTeamPlanUser();
  let s = useIsAdminUser(a).unwrapOr(!1);
  let i = r1('seen_admin_dashboard_onboarding');
  let r = useAtomWithSubscription(i);
  let {
    show,
    isShowing,
    complete
  } = _$$e3({
    overlay: TaD,
    priority: _$$g(TaD)
  }, [r, t]);
  _$$h(() => {
    show({
      canShow: (e, t) => !e && !!t.name
    });
  });
  return jsx(rq, {
    clickOutsideToHide: !0,
    description: s ? renderI18nText('admin_dashboard.onboarding_overlay.description', {
      planName: getResourceDataOrFallback(t.data?.name)
    }) : renderI18nText('license_group_admin.onboarding.admin_dashboard_onboarding_overlay_description', {
      numOfBillingGroupsManaged: e
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: renderI18nText('general.got_it'),
      onClick: complete,
      type: 'button',
      ctaTrackingDescriptor: _$$c.GOT_IT
    },
    targetKey: LX,
    title: renderI18nText('admin_dashboard.onboarding_overlay.title'),
    trackingContextName: '',
    userFlagOnShow: 'seen_admin_dashboard_onboarding'
  });
}
let tt = 'seat_requests_table_mini_view--secondaryIcon--1HOyO';
function ta() {
  return jsx('span', {
    children: '\xA0 \xB7 \xA0'
  });
}
function tn({
  request: e
}) {
  return jsxs('div', {
    'data-testid': 'seat-requests-mini-view-row-avatar',
    'className': 'seat_requests_table_mini_view--avatarContainer--mUfUL',
    'children': [jsx(H8, {
      user: {
        id: e.userId,
        name: e.name ?? '',
        email: e.email ?? void 0,
        imgUrl: e.imgUrl ?? ''
      },
      size: Pf.LARGE
    }), e.hasBeenNudged ? jsx('div', {
      'className': c()(tt, 'seat_requests_table_mini_view--reminderIcon--N-ZQn'),
      'data-testid': 'seat-requests-mini-view-row-avatar-reminder',
      'children': jsx(_$$O2, {
        style: sx.add({
          rotate: '35deg',
          marginLeft: '-2px',
          marginTop: '-2px'
        }).$
      })
    }) : jsx('div', {
      'className': c()(tt, 'seat_requests_table_mini_view--planIcon--czwRc'),
      'data-testid': 'seat-requests-mini-view-row-avatar-seat-type',
      'children': jsx(BC, {
        type: e.billableProductKey,
        removeBackgroundColor: !0,
        size: '16'
      })
    })]
  });
}
function ts({
  request: e
}) {
  return jsx(Fragment, {
    children: jsxs('div', {
      'className': _$$s.overflowXHidden.mtAuto.mbAuto.$,
      'data-testid': 'seat-requests-mini-view-row-seat-request',
      'children': [jsx('div', {
        className: _$$s.font11.lh16.$,
        children: renderI18nText('admin_dashboard.requests.requested_a_seat', {
          name: jsx('span', {
            className: _$$s.fontBold.$,
            children: e.name ?? ''
          }),
          boldedSeat: jsx('span', {
            className: _$$s.fontBold.$,
            children: renderI18nText('admin_dashboard.requests.product_seat', {
              billableProductKey: tI(e.billableProductKey)
            })
          })
        })
      }), !!e.message && jsx(_$$G, {
        'text': e.message,
        'className': _$$s.mt4.colorTextSecondary.$,
        'data-testid': 'seat-requests-mini-view-row-note'
      }), jsxs('div', {
        'className': _$$s.flex.noWrap.pt4.textBodyMedium.colorTextSecondary.$,
        'data-testid': 'seat-requests-mini-view-row-metadata',
        'children': [jsx(_$$G, {
          text: e.email ?? ''
        }), e.orgPermission === FUserRoleType.GUEST && jsx('div', {
          className: 'seat_requests_table_mini_view--guestBadge--sjqEB',
          children: jsxs(_$$E2, {
            variant: 'defaultOutline',
            children: [' ', renderI18nText('admin_dashboard.requests.badge.guest')]
          })
        }), jsx(ta, {}), e.lastNudgedAt ? jsx('div', {
          className: 'seat_requests_table_mini_view--reminder--SVXyk',
          children: renderI18nText('admin_dashboard.requests.reminder_sent', {
            time: jsx(h1, {
              date: e.updatedAt
            })
          })
        }) : jsx(h1, {
          capitalize: !0,
          date: e.createdAt
        })]
      })]
    })
  });
}
function ti({
  requestId: e,
  onApproveClick: t,
  onGetDetailsClick: a,
  seatType: s,
  seatCost: i,
  isELA: r,
  isProrationBillingEnabled: l
}) {
  let o = useAtomWithSubscription(aN);
  let d = useAtomWithSubscription(V4);
  let c = getRumLoggingConfig();
  return jsxs('div', {
    'className': _$$s.flex.gap8.$,
    'data-testid': 'seat-requests-mini-view-row-cta',
    'children': [jsx($z, {
      variant: 'secondary',
      onClick: t,
      htmlAttributes: {
        'data-testid': 'seat-requests-mini-view-row-approve',
        ...Td(s, i, r, l)
      },
      trackingProperties: {
        trackingDescriptor: _$$c.APPROVE,
        requestId: e
      },
      trackingOptions: c,
      disabled: !!o || d.has(e),
      children: jsx(Zu, {
        text: getI18nString('admin_dashboard.requests.approve'),
        showSpinner: o === 'approving' && d.has(e)
      })
    }), jsx(Me, {
      'aria-label': getI18nString('admin_dashboard.requests.details.title'),
      'onClick': a,
      'htmlAttributes': {
        'data-testid': 'seat-requests-mini-view-row-more-details'
      },
      'trackingProperties': {
        trackingDescriptor: _$$c.REQUEST_DETAILS,
        requestId: e
      },
      'trackingOptions': c,
      'children': jsx(_$$a, {})
    })]
  });
}
function tr({
  plan: e,
  request: t,
  selected: a,
  tabIndex: s,
  onApproveClick: i,
  onGetDetailsClick: r,
  isELA: l,
  isProrationBillingEnabled: o
}) {
  let {
    calculateCostForSeatTypeIncrease
  } = _$$n(e, t);
  let _ = calculateCostForSeatTypeIncrease();
  return jsxs('div', {
    'className': c()('seat_requests_table_mini_view--miniViewRow--cJDil', {
      'seat_requests_table_mini_view--selected--9k2SJ': a
    }),
    'role': 'option',
    'tabIndex': s,
    'aria-selected': a,
    'data-testid': 'seat-requests-mini-view-row',
    'onClick': r,
    'children': [jsxs('div', {
      'className': _$$s.flex.gap12.overflowXHidden.$,
      'data-testid': 'seat-requests-mini-view-row-info',
      'children': [jsx(tn, {
        request: t
      }), jsx(ts, {
        request: t
      })]
    }), jsx(ti, {
      requestId: t.id,
      onApproveClick: i,
      onGetDetailsClick: r,
      seatType: t.billableProductKey,
      seatCost: _,
      isELA: l,
      isProrationBillingEnabled: o
    })]
  });
}
let tl = 'approving-all-requests';
let to = 'RequestFlyout';
let td = (e, t, a) => {
  e(sf({
    view: 'seatRequests',
    adminPlanType: t,
    planId: a
  }));
};
let tc = e => {
  e(sf({
    view: 'billingGroupDashboard',
    selectedTab: FRequestsStr.ALL_REQUESTS
  }));
};
function t_({
  plan: e,
  hasBillingGroups: t,
  numOfBillingGroupsManaged: a,
  isOrgAdmin: s
}) {
  let r = useDispatch();
  let l = getRumLoggingConfig();
  return jsxs(Fragment, {
    children: [jsx($z, {
      variant: 'secondary',
      onClick: () => {
        e.key.type === 'team' || s ? td(r, e.key.type === 'team' ? _$$O.TEAM : _$$O.ORG, e.key.parentId ?? '') : tc(r);
      },
      htmlAttributes: {
        'data-testid': 'seat-requests-mini-view-all-requests',
        'data-onboarding-key': LX
      },
      trackingProperties: {
        trackingDescriptor: t && s ? _$$c.ALL_REQUESTS : _$$c.VIEW_ALL
      },
      trackingOptions: l,
      children: t && s ? renderI18nText('admin_dashboard.requests.all_requests') : renderI18nText('admin_dashboard.requests.view_all')
    }), jsx(eO, {
      numOfBillingGroupsManaged: a
    })]
  });
}
function tu({
  plan: e,
  isOrgAdmin: t
}) {
  let a = _$$B();
  let l = useRef(null);
  let o = useRef(null);
  let [d, c] = useState({
    loading: !0,
    requestId: void 0,
    request: void 0,
    costShownInEmail: void 0
  });
  let _ = _$$k4();
  let {
    seatAvailability,
    status
  } = _$$k5(e);
  let p = useDispatch();
  let {
    Sprig
  } = useSprigWithSampling();
  let [f, j] = useState(!1);
  let [y, E] = useAtomValueAndSetter(aN);
  let S = useSelector(({
    selectedView: e
  }) => e);
  let N = uH;
  let {
    dispatchSuccess,
    dispatchSuccessWithRequesterName,
    dispatchRequestAlreadyHandled,
    dispatchProcessingError,
    dispatchGenericError
  } = _$$s2();
  let [M, P] = useAtomValueAndSetter(_$$Y2);
  let [U, F] = useAtomValueAndSetter(V4);
  let [q, $] = useState(new Set());
  let [B, z] = useState(new Set());
  let [V, W] = useState(null);
  let [H, Y] = useState(0);
  let [J, K] = useState(0);
  let X = e?.key.type === 'team' ? ps.TEAM : ps.ORG;
  let Q = e.key.parentId ?? '';
  let Z = MX();
  let ee = getUserId();
  let et = X === ps.ORG;
  let ea = useMemo(() => et ? EQ(Z, ee, !1).groupsUserIsAdminOf : [], [Z, ee, et]);
  let en = useMemo(() => ea ? ea.map(e => e.id) : [], [ea]);
  let es = useMemo(() => t ? [null, ...en] : en, [en, t]);
  let ei = useMemo(() => JSON.stringify({
    refreshNonce: H,
    billing_group_ids: es
  }), [H, es]);
  let er = useMemo(() => JSON.stringify({
    billing_group_ids: es
  }), [es]);
  let ed = useSubscription(AdminRequestDashboardView, {
    planType: X,
    planId: Q,
    sortOrder: null,
    filterParams: ei,
    firstPageSize: 25
  });
  let e_ = z7({
    planType: X,
    planId: Q,
    filterParams: ei,
    processedRequestIds: B
  });
  let eu = z7({
    planType: X,
    planId: Q,
    filterParams: JSON.stringify({
      refreshNonce: ei,
      billing_group_ids: es
    }),
    processedRequestIds: B
  });
  let eC = z7({
    planType: X,
    planId: Q,
    filterParams: JSON.stringify({
      refreshNonce: ei,
      billing_group_ids: t ? null : es
    }),
    processedRequestIds: B
  });
  let eS = useSubscription(AdminRequestDashOrgInfo, {
    orgId: Q
  }, {
    enabled: et
  });
  let eN = ed.status === 'loaded';
  let eI = eN && !!ed.data?.adminDashboardRequests?.isLoadingNextPage;
  let eT = eN && !!ed.data?.adminDashboardRequests?.hasNextPage();
  let eA = et && eS.status === 'loaded' && eS.data?.org?.bigmaEnabledAt && !!t;
  let eR = et && eS.status === 'loaded' ? eS.data?.org?.orgSharedSetting?.configuredUpgradeRequestSetting : void 0;
  let eO = ZY({
    isIntendedAudience: et && eS.status === 'loaded' && eS.data?.org?.bigmaEnabledAt !== null && !1 === t
  });
  _$$u2(et, t);
  let eQ = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  let e2 = !eN || d.loading || eC === null;
  let e4 = e_?.length ?? 0;
  let e5 = eu?.length ?? 0;
  let e3 = [X, Q].toString();
  let e8 = M[e3];
  let e6 = e5 ? Math.max(e5, 0) : 0;
  let e7 = eu && e8 !== e6;
  useEffect(() => {
    if (e7) {
      let e = {
        ...M
      };
      e[e3] = e6;
      P(e);
    }
  }, [e7, e3, e6]);
  useEffect(() => {
    eN && W(new Date());
  }, [eN]);
  let e9 = useMemo(() => {
    let e = new Set(q);
    if (!eN || !ed?.data?.adminDashboardRequests) return [];
    let t = ed.data?.adminDashboardRequests.reduce((t, a) => {
      let n = a.id;
      let s = a.request;
      let i = a.user;
      let r = a.userId;
      if (s.status !== ResourceStatus.Loaded || i.status !== ResourceStatus.Loaded) return t;
      let l = s.data;
      let o = i.data;
      if (!l || !o) {
        e.has(n) || e.add(n);
        return t;
      }
      if (!l.billableProductKey) return t;
      let d = Zx(l.billableProductKey);
      if (e.has(n)) return t;
      if (l.status !== 'pending') {
        e.has(n) || e.add(n);
        return t;
      }
      let c = !!l.lastNudgedAt;
      let _ = l.requestableTeamUser?.currentSeat;
      t.push({
        id: n,
        createdAt: l.createdAt,
        updatedAt: l.updatedAt,
        name: o.name,
        email: o.email,
        imgUrl: o.imgUrl,
        message: l.message && l.message.trim().length > 0 ? l.message : null,
        jobTitle: o.profile?.jobTitle ?? null,
        userId: r,
        hasBeenNudged: c,
        lastNudgedAt: l.lastNudgedAt,
        billableProductKey: d,
        currentSeat: {
          billableProductKey: _?.billableProductKey,
          billingInterval: _?.billingInterval
        },
        orgPermission: l.requestableOrgUser?.permission
      });
      return t;
    }, []);
    z(t => new Set([...t, ...new Set(e)]));
    return t.sort((e, t) => t.updatedAt.getTime() - e.updatedAt.getTime());
  }, [eN, ed.data, q]);
  useEffect(() => {
    Sprig && e9.length > 0 && (X === ps.TEAM ? e9.length >= 1 : e9.length > 1) && Sprig('track', 'admin-dashboard-multiple-pending-requests');
  }, [e9.length, Sprig, X]);
  let te = useCallback(e => e9.find(t => t.id === e), [e9]);
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(te, {
    interactionConfig: [{
      ref: o,
      shouldClearHighlight: !1
    }, {
      ref: l,
      shouldClearHighlight: !1
    }, {
      ref: a,
      shouldClearHighlight: !0
    }],
    onHighlight: () => {
      o.current?.focus();
    },
    onClear: _$$b(to)
  });
  let {
    requestFlyout
  } = _$$m({
    request: highlightedItem,
    billingGroups: Z,
    flyoutRef: o,
    open: !!highlightedItem,
    onClose: clearHighlightedItemId,
    onApprove: () => tp({
      approve: !0,
      selectedRequestIds: highlightedItem ? [highlightedItem.id] : [],
      shouldProcessAsSingleRequest: !0,
      singleRequestSelectionMethod: Xv.SINGLE,
      sprig: Sprig,
      isHandlingInFlyout: !0
    }),
    onDecline: () => tp({
      approve: !1,
      selectedRequestIds: highlightedItem ? [highlightedItem.id] : [],
      shouldProcessAsSingleRequest: !0,
      singleRequestSelectionMethod: Xv.SINGLE,
      sprig: Sprig,
      isHandlingInFlyout: !0
    }),
    trackingName: to,
    trackingProperties: {
      requestId: highlightedItem?.id
    }
  });
  let ti = useMemo(() => new Set(e9?.filter(e => [ProductAccessTypeEnum.DEVELOPER, ProductAccessTypeEnum.EXPERT].includes(e.billableProductKey) && e.message?.includes('Dev Mode')).map(e => e.id)), [e9]);
  _$$R2(() => {
    let e = QL('viewRequestId');
    e && (e9.find(t => t.id === e) ? setHighlightedItemId(e) : dispatchRequestAlreadyHandled(), EM('viewRequestId'));
  }, e2, e => !e);
  useEffect(() => {
    let e = QL('approvalRequestId');
    let t = QL('costShown');
    c(a => ({
      ...a,
      requestId: e,
      loading: !!e,
      costShownInEmail: t === 'true' || t !== 'false' && void 0
    }));
    EM('approvalRequestId');
    EM('costShown');
  }, []);
  useEffect(() => {
    async function e(e) {
      let t = await _$$q(e, p);
      c(e => ({
        ...e,
        request: t,
        loading: !1
      }));
    }
    d.requestId && e(d.requestId);
  }, [d.requestId, p, e9]);
  let tu = e2 || status === 'loading';
  _$$R2(() => {
    if (!d.requestId) return;
    let e = d.request;
    if (!e) return;
    let t = d.costShownInEmail;
    let a = e.billableProductKey || '';
    let n = isCollaboratorType(a) && seatAvailability[a] > 0;
    if (_ && !n && !t) {
      setHighlightedItemId(d.requestId);
      return;
    }
    let s = e.requestableOrgUser?.user.name ?? e.requestableTeamUser?.user.name ?? '';
    tp({
      approve: !0,
      selectedRequestIds: [d.requestId],
      shouldProcessAsSingleRequest: !0,
      singleRequestSelectionMethod: Xv.EMAIL,
      priceIncreaseAuthorizedInEmail: t,
      successHandler: s ? () => {
        dispatchSuccessWithRequesterName({
          requesterName: s
        });
        c({
          loading: !1,
          requestId: void 0,
          request: void 0
        });
      } : dispatchSuccess
    });
  }, tu, e => !e);
  _$$R2(() => {
    QL('approveAllRequests') && (p(showModalHandler({
      type: _$$W,
      data: {
        plan: e,
        numRequestsToApprove: e5,
        filteredRowCount: e4,
        isELA: eQ,
        onConfirm: y ? lQ : () => {
          tp({
            approve: !0,
            approveAll: !0,
            selectedRequestIds: []
          });
        },
        entryPoint: N
      }
    })), EM('approveAllRequests'));
  }, !e2 && e_ !== null && eu !== null, e => e);
  let tp = ({
    approve: e,
    selectedRequestIds: t,
    approveAll: a = !1,
    shouldProcessAsSingleRequest: n = !1,
    singleRequestSelectionMethod: s,
    successHandler: i = dispatchSuccess,
    sprig: r,
    priceIncreaseAuthorizedInEmail: l = !1,
    isHandlingInFlyout: o = !1
  }) => {
    let d = o ? A$ : N;
    let c = 'dashDeepLinkEntryPoint' in S && S.dashDeepLinkEntryPoint || d;
    (() => {
      if (n) {
        let a = s || Xv.SINGLE;
        tg({
          approve: e,
          requestId: t[0],
          selectionMethod: a,
          entryPoint: c,
          successHandler: i,
          priceIncreaseAuthorizedInEmail: l
        });
      } else {
        th({
          approve: e,
          selectedRequestIds: t,
          approveAll: a
        });
      }
    })();
    r && n && r('track', e ? 'admin-dashboard-request-approved' : 'admin-dashboard-request-declined');
    r && X === ps.TEAM && !e && t.some(e => ti.has(e)) && r('track', 'admin-dashboard-dev-mode-decline');
  };
  let tg = ({
    approve: e,
    requestId: t,
    selectionMethod: a = Xv.SINGLE,
    entryPoint: n = N,
    successHandler: s = dispatchSuccess,
    priceIncreaseAuthorizedInEmail: i = !1
  }) => {
    F(e => new Set(e).add(t));
    E(e ? 'approving' : 'declining');
    let r = e ? _$$w2.approveRequests.bind(_$$w2) : _$$w2.denyRequests.bind(_$$w2);
    let l = e9.find(e => e.id === t);
    r({
      plan_id: Q,
      plan_type: X,
      included_request_ids: [t],
      selection_method: a,
      entry_point: n,
      is_proration_billing_enabled: _,
      is_seat_increase_authorized: i || Z4(l ? [l] : [], seatAvailability)
    }).then(t => {
      if (t.status !== 200) {
        dispatchGenericError();
        return;
      }
      if (t.data.meta.failed_attempts > 0) {
        dispatchProcessingError({
          multiple: !1
        });
        return;
      }
      s({
        approve: e,
        numRequests: 1,
        asyncUpdate: !1
      });
    }).catch(() => {
      dispatchGenericError();
    }).$$finally(() => {
      F(e => {
        let a = new Set(e);
        a.$$delete(t);
        return a;
      });
      E(!1);
      K(e => e + 1);
    });
  };
  let th = ({
    approve: e,
    selectedRequestIds: t,
    approveAll: a,
    entryPoint: n = N
  }) => {
    E(a ? 'approving_all' : e ? 'approving' : 'declining');
    a && e5 && p(VisualBellActions.enqueue({
      message: getI18nString('admin_dashboard.requests.selected_count_approving', {
        numSelected: e5
      }),
      type: tl,
      timeoutOverride: 1 / 0,
      icon: VisualBellIcon.SPINNER,
      preventDismissal: !0,
      role: 'status'
    }));
    let s = a || f;
    let i = e && x9(s, t, et);
    let r = new Set(t);
    let l = {
      plan_id: Q,
      plan_type: X,
      entry_point: n,
      async_processing: i,
      is_proration_billing_enabled: _,
      is_seat_increase_authorized: !!a || void 0
    };
    let o = s ? {
      ...l,
      subtractive: !0,
      excluded_request_ids: a ? [] : e9.map(e => e.id).filter(e => !r.has(e)),
      filter_params: a ? er : ei,
      timestamp: (V ?? new Date()).toISOString(),
      selection_method: a ? Xv.APPROVE_ALL : Xv.BULK_SELECT
    } : {
      ...l,
      included_request_ids: t,
      selection_method: Xv.BULK_SELECT,
      filter_params: er
    };
    let d = (t, a, n) => {
      if (t !== 200) {
        dispatchGenericError();
        return;
      }
      if (a > 0) {
        dispatchProcessingError({
          multiple: !0
        });
        return;
      }
      dispatchSuccess({
        approve: e,
        numRequests: n,
        asyncUpdate: i
      });
    };
    let c = () => {
      E(!1);
      s && Y(e => e + 1);
      f && j(!1);
    };
    e ? _$$w2.approveRequests.bind(_$$w2)(o).then(e => {
      if (d(e.status, e.data.meta.failed_attempts, e.data.meta.successful_attempts), i) {
        let t = e.data.meta.processed_request_ids;
        $(e => new Set([...e, ...new Set(t)]));
      }
      K(e => e + 1);
    }).catch(() => {
      dispatchGenericError();
    }).$$finally(() => {
      a && p(VisualBellActions.dequeue({
        matchType: tl
      }));
      c();
    }) : _$$w2.denyRequests.bind(_$$w2)(o).then(e => {
      d(e.status, e.data.meta.failed_attempts, e.data.meta.successful_attempts);
    }).catch(() => {
      dispatchGenericError();
    }).$$finally(() => {
      c();
    });
  };
  let tx = (e, t) => {
    U.has(t) || (e.stopPropagation(), tp({
      approve: !0,
      selectedRequestIds: [t],
      shouldProcessAsSingleRequest: !0
    }));
  };
  let tb = (e, t) => {
    e.stopPropagation();
    setHighlightedItemId(t);
  };
  let tv = () => {
    X === ps.TEAM || t ? td(p, X === ps.TEAM ? _$$O.TEAM : _$$O.ORG, e.key.parentId ?? '') : tc(p);
  };
  let tf = eC ? eC?.length > 0 : e9.length > 0;
  let tj = !!eR && eR !== Sm.DISABLED;
  let ty = et && !t;
  let tw = getRumLoggingConfig();
  return jsx(fu, {
    name: _$$e2.SEAT_REQUESTS_MINI_VIEW,
    children: jsxs(_$$B2, {
      onShouldFetchNextPage: () => {
        eN && !eI && eT && ed?.data?.adminDashboardRequests?.loadNext(25);
      },
      paddingBottom: 8,
      children: [jsxs('div', {
        className: _$$s.flex.flexColumn.$,
        children: [jsxs('div', {
          className: _$$s.flex.flexColumn.p16.bb1.bSolid.colorBorder.rowGap16.$,
          children: [jsxs('div', {
            className: _$$s.flex.itemsCenter.justifyBetween.minH24.$,
            children: [jsx('div', {
              className: _$$s.fontMedium.font13.colorText.$,
              children: jsx(eo, {
                label: Z.length > 0 ? renderI18nText('admin_dashboard.managed_org_requests.title') : renderI18nText('admin_dashboard.requests.seat_title'),
                count: jsx(_$$E, {
                  isOrgAdmin: !!t,
                  managedRequests: !0,
                  planId: Q,
                  planType: X,
                  processedRequestIds: B,
                  refreshNonce: H,
                  refreshTabCountNonce: J,
                  selectedRequestView: V7.ALL_MANAGED_REQUESTS,
                  showAllOrgRequests: eA ?? !1,
                  showBillingGroupAdminRequests: eO,
                  viewableBillingGroupIds: t ? [null, ...en] : en
                })
              })
            }), tf && jsxs('div', {
              className: _$$s.flex.gap8.$,
              children: [jsx(t_, {
                plan: e,
                hasBillingGroups: Z.length > 0,
                numOfBillingGroupsManaged: ea.length,
                isOrgAdmin: t
              }), e9.length > 0 && jsx($z, {
                variant: 'primary',
                onClick: () => {
                  if (e4 === null || e5 === null) return;
                  let t = y ? lQ : () => tp({
                    approve: !0,
                    approveAll: !0,
                    selectedRequestIds: []
                  });
                  if (e5 === e4 && e5 < 1) {
                    t();
                    return;
                  }
                  p(showModalHandler({
                    type: _$$W,
                    data: {
                      plan: e,
                      numRequestsToApprove: e5,
                      filteredRowCount: e4,
                      isELA: eQ,
                      onConfirm: t,
                      entryPoint: N
                    }
                  }));
                },
                htmlAttributes: {
                  'data-testid': 'approve-all-button'
                },
                trackingProperties: {
                  trackingDescriptor: _$$c.APPROVE_ALL
                },
                trackingOptions: tw,
                disabled: !!y,
                children: jsx(Zu, {
                  text: getI18nString('admin_dashboard.requests.approve_all'),
                  showSpinner: y === 'approving_all'
                })
              })]
            })]
          }), tj && e9.length > 0 && jsx(tm, {
            isOnlyBillingGroupAdmin: ty,
            configuredUpgradeRequestSetting: eR
          }), (() => {
            let t = {
              [ProductAccessTypeEnum.COLLABORATOR]: e.upgradeApprovalSettingsCollaborator,
              [ProductAccessTypeEnum.DEVELOPER]: e.upgradeApprovalSettingsDeveloper,
              [ProductAccessTypeEnum.EXPERT]: e.upgradeApprovalSettingsExpert,
              [ProductAccessTypeEnum.CONTENT]: e.upgradeApprovalSettingsContent
            };
            let a = e => {
              switch (t[e]) {
                case 'instant_approval':
                  return e9.filter(t => t.billableProductKey === e).length > 0;
                case 'instant_approval_if_available_seats':
                case 'manual_approval':
                  return !1;
                default:
                  throw new Error('Not a valid approval setting');
              }
            };
            return N_.reduce((e, t) => e || a(t), !1);
          })() && jsx('div', {
            children: jsx(_$$_2, {
              dataTestId: 'approval-settings-banner',
              color: _$$S.PLAIN,
              padding: 8,
              text: et ? getI18nString('admin_dashboard.mini_view.approval_settings_banner.message_org') : getI18nString('admin_dashboard.mini_view.approval_settings_banner.message_team')
            })
          })]
        }), jsx('div', {
          className: 'seat_requests_table_mini_view--requestContainer---8XA1',
          children: e2 ? jsx('div', {
            className: 'seat_requests_table_mini_view--loadingView--FAKIu',
            children: jsx(kt, {
              className: _$$s.selfCenter.$
            })
          }) : jsx(Fragment, {
            children: e9.length === 0 ? jsxs('div', {
              className: 'seat_requests_table_mini_view--emptyView--hliFK',
              children: [jsx('div', {
                className: _$$s.fontMedium.$,
                children: tj ? renderI18nText('admin_dashboard.requests.no_requests_for_you_right_now') : renderI18nText('admin_dashboard.requests.no_requests_to_approve')
              }), jsx('div', {
                style: sx.add({
                  maxWidth: '64%'
                }).$,
                children: tj ? eR === Sm.ALL_USERS ? getI18nString('admin_dashboard.requests.empty_state.curf_all_users') : eR === Sm.MEMBERS ? ty ? getI18nString('admin_dashboard.requests.empty_state.curf_members.billing_group_admin') : getI18nString('admin_dashboard.requests.empty_state.curf_members.admin') : void 0 : eA && Z.length > 0 && eC && eC?.length > 0 ? eS.data.org && eS.data.org.name ? renderI18nText('admin_dashboard.requests.your_org_name_has_seat_request_that_need_review', {
                  orgName: eS.data.org.name,
                  numOrgRequests: eC?.length,
                  reviewRequestLink: jsx(CY, {
                    trusted: !0,
                    onClick: tv,
                    children: renderI18nText('admin_dashboard.requests.review_requests')
                  })
                }) : renderI18nText('admin_dashboard.requests.your_organization_has_seat_request_that_need_review', {
                  numOrgRequests: eC?.length,
                  reviewRequestLink: jsx(CY, {
                    trusted: !0,
                    onClick: tv,
                    children: renderI18nText('admin_dashboard.requests.review_requests')
                  })
                }) : renderI18nText('admin_dashboard.requests.when_a_seat_request_needs_to_be_reviewed')
              })]
            }) : e9.map((t, a) => jsx(tr, {
              plan: e,
              tabIndex: a,
              selected: highlightedItem === t,
              request: t,
              onApproveClick: e => tx(e, t.id),
              onGetDetailsClick: e => tb(e, t.id),
              isELA: eQ,
              isProrationBillingEnabled: _
            }, t.id))
          })
        })]
      }), requestFlyout]
    })
  });
}
function tm({
  configuredUpgradeRequestSetting: e,
  isOnlyBillingGroupAdmin: t
}) {
  let a;
  a = t ? e === Sm.ALL_USERS ? getI18nString('admin_dashboard.mini_view.configured_upgrade_request_banner.billing_group_admin.all_users') : getI18nString('admin_dashboard.mini_view.configured_upgrade_request_banner.billing_group_admin.members') : e === Sm.ALL_USERS ? getI18nString('admin_dashboard.mini_view.configured_upgrade_request_banner.admin.all_users_setting') : getI18nString('admin_dashboard.mini_view.configured_upgrade_request_banner.admin.members_only_setting');
  return jsx(fu, {
    name: _$$e2.CURF_PENDING_REQUESTS_BANNER,
    children: jsx('div', {
      children: jsx(_$$_2, {
        dataTestId: 'curf-pending-requests-banner',
        color: _$$S.PLAIN,
        padding: 8,
        text: a
      })
    })
  });
}
function tp() {
  return jsx('div', {
    className: _$$s.flex.alignCenter.justifyCenter.p24.$,
    children: jsx(_$$k, {})
  });
}
export function $$tg0({
  isOrgAdmin: e,
  teamBilling: t
}) {
  let a = useDispatch();
  let l = getRumLoggingConfig();
  let d = useRef(null);
  let [A, O] = useState(0);
  let L = !!desktopAPIInstance || ce();
  wY(d, () => {
    O(d.current?.clientWidth ?? 0);
  });
  let D = _$$d({
    reportErrorsToTeam: _$$e.SCALE
  });
  let M = _$$R();
  let P = useTeamPlanFeatures();
  let F = P.status === 'loading';
  let q = P.data;
  let $ = useSubscription(UserFlagByName, {
    name: 'seen_connected_project_in_admin_dashboard_banner'
  });
  let B = useMemo(() => $.status !== 'loaded' || !!$.data?.currentUser?.userFlagByName, [$]);
  let G = t?.summary.annual_subscription;
  let z = useMemo(() => {
    if (q?.key?.type !== FOrganizationLevelType.TEAM || !G) return null;
    let e = _$$l({
      teamBillingSummary: t.summary,
      currentDate: M,
      hasOpenInvoice: !1
    });
    return e && 'perform' in e ? () => {
      e.perform({
        dispatch: a
      });
    } : null;
  }, [q?.key?.type, G, t?.summary, M, a]);
  if (q === null) return jsx(Fragment, {});
  let V = !B && getFeatureFlags().fc_initial_onboarding_enabled;
  return jsx(Suspense, {
    fallback: jsx(tp, {}),
    children: jsx(fu, {
      name: _$$e2.BILLING_REMODEL_ADMIN_DASHBOARD,
      trackingOptions: l,
      children: jsx('div', {
        children: jsxs('div', {
          style: sx.mxAuto.add({
            minWidth: '476px',
            maxWidth: '1536px'
          }).px32.pb32.$$if(!L, sx.pt32).$,
          children: [jsx(U, {
            plan: q,
            isLoading: F
          }), V && jsxs(Fragment, {
            children: [jsx('div', {
              className: _$$s.mb16.$
            }), jsx(_$$k3, {
              openConnectedProjects: () => {
                q?.key.type === FOrganizationLevelType.TEAM ? a(sf({
                  view: 'teamAdminConsole',
                  teamId: q?.key.parentId ?? '',
                  teamAdminConsoleViewTab: DashboardSections.CONTENT,
                  teamAdminConsoleViewSecondaryTab: MemberSections.CONNECTED_PROJECTS
                })) : a(sf({
                  view: 'orgAdminSettings',
                  orgAdminSettingsViewTab: J7.CONTENT,
                  orgAdminSettingsViewSecondaryTab: SN.CONNECTED_PROJECTS
                }));
              }
            })]
          }), jsxs('div', {
            style: sx.mt24.grid.gap24.add({
              gridTemplateColumns: 'repeat(12, 1fr)'
            }).$,
            ref: d,
            children: [jsx('div', {
              className: c()(_$$s.gridColumnStart1.gridColumnEnd13.$, 'admin_dashboard--hideWhenEmpty--EyO2D'),
              children: jsx(ee, {
                isOrgAdmin: !!e,
                plan: q
              })
            }), jsx(R, {
              gridColumnStart: 1,
              gridColumnEnd: !1 === e || A < 956 ? 13 : 9,
              isLoading: F,
              children: jsx(tu, {
                plan: q,
                isOrgAdmin: e
              })
            }), !1 !== e && jsx(R, {
              gridColumnStart: A < 956 ? 1 : 9,
              gridColumnEnd: 13,
              isLoading: F,
              children: jsx(eu, {
                planParentId: q.key.parentId ?? '',
                planType: q.key.type,
                isELA: D,
                onAddSeats: z,
                onManage: () => {
                  q.key.type === FOrganizationLevelType.TEAM ? (q.key.parentId && a(m$({
                    teamId: q.key.parentId
                  })), a(sf({
                    view: 'teamAdminConsole',
                    teamId: q.key.parentId ?? '',
                    teamAdminConsoleViewTab: DashboardSections.MEMBERS
                  }))) : a(sf({
                    view: 'orgAdminSettings',
                    orgAdminSettingsViewTab: J7.MEMBERS
                  }));
                }
              })
            })]
          })]
        })
      })
    })
  });
}
export const i = $$tg0;