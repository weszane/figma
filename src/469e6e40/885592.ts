import { Ay, xk } from '@stylexjs/stylex';
import { createElement, forwardRef, memo, useCallback, useMemo, useRef } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { m as _$$m2 } from '../469e6e40/61410';
import { H as _$$H } from '../469e6e40/325100';
import { Bf, Dc, e5, Hx, iy, o0, rK, x$ } from '../469e6e40/616503';
import { A as _$$A3 } from '../469e6e40/634763';
import { V as _$$V, Z as _$$Z } from '../469e6e40/658906';
import { A as _$$A2 } from '../469e6e40/916829';
import { KindEnum } from '../905/129884';
import { showModalHandler } from '../905/156213';
import { o as _$$o, Ph, pW } from '../905/160095';
import { ScreenReaderOnly } from '../905/172252';
import { h as _$$h } from '../905/207101';
import { getI18nString, renderI18nText } from '../905/303541';
import { BannerMessage } from '../905/363675';
import { c as _$$c } from '../905/370443';
import { b as _$$b2 } from '../905/484176';
import { DashboardSections } from '../905/548208';
import { getFeatureFlags } from '../905/601108';
import { A3, Hj } from '../905/682977';
import { g as _$$g } from '../905/687265';
import { A as _$$A } from '../905/920142';
import { selectViewAction } from '../905/929976';
import { sx } from '../905/941192';
import { a as _$$a } from '../905/964520';
import { I as _$$I } from '../4452/82228';
import { b as _$$b } from '../4452/320061';
import { v as _$$v2 } from '../4452/513456';
import { B as _$$B } from '../4452/541264';
import { v as _$$v } from '../4452/562448';
import { m as _$$m } from '../4452/688074';
import { s as _$$s } from '../cssbuilder/589278';
import { BannerInsetModal, BannerInset } from '../figma_app/59509';
import { isNotNullish } from '../figma_app/95419';
import { FBillingPeriodType, FOrganizationLevelType } from '../figma_app/191312';
import { AG } from '../figma_app/217457';
import { P8, vt } from '../figma_app/297957';
import { Tj } from '../figma_app/342207';
import { useTeamPlanFeatures } from '../figma_app/465071';
import { CurrencyFormatter } from '../figma_app/514043';
import { R as _$$R } from '../figma_app/522082';
import { tI } from '../figma_app/599327';
import { e6, lR } from '../figma_app/617427';
import { k as _$$k2 } from '../figma_app/618031';
import { DashboardSection } from '../figma_app/650409';
import { RG } from '../figma_app/684446';
import { BillingCycle } from '../figma_app/831101';
import { _8, $b, _k, fA, fx, gL, gl, Jv, ly, nm, qH, TQ, Z4, z7, zz } from '../figma_app/934005';
import { DefaultFilters } from '../figma_app/967319';
import * as N from '../vendor/116389';
import { useStore, useDispatch } from 'react-redux';
import * as T from '../vendor/923386';
let I = N;
let A = T;
let q = {
  totalLine: {
    display: 'x78zum5',
    justifyContent: 'x1qughib',
    gap: 'x1i71x30',
    rowGap: null,
    columnGap: null,
    $$css: !0
  },
  totalLineDefault: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  },
  totalLineFinal: {
    ..._$$g.textBodyMediumStrong,
    color: 'x1akne3o',
    $$css: !0
  },
  genericBreakdownHeading: {
    ..._$$g.textBodyLarge,
    color: 'x1akne3o',
    $$css: !0
  },
  genericBreakdownSubheading: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function $(e, t) {
  return e.filter(isNotNullish).filter(e => t?.dontFilterKeys?.has(e.bpKey) || e.quantity > 0 || e.amount > 0);
}
function B(e) {
  let t = A()(e.lines, e => e.quantity);
  let a = jsx('div', {
    ...xk(q.genericBreakdownHeading),
    'data-testid': e.testIdPrefix && `${e.testIdPrefix}-heading`,
    'children': e.getHeading(t)
  });
  let s = e.subheading && jsx('span', {
    ...xk(q.genericBreakdownSubheading),
    'data-testid': e.testIdPrefix && `${e.testIdPrefix}-subheading`,
    'children': e.subheading
  });
  let i = e => jsx('div', {
    className: _$$s.flex.flexColumn.gap16.$,
    children: e
  });
  if (e.lines.length === 0) return i(a);
  let r = new CurrencyFormatter(e.currency);
  return i(jsxs(Fragment, {
    children: [jsxs('div', {
      className: 'x78zum5 xdt5ytf xg2d0mh',
      children: [a, s]
    }), jsx('ul', {
      style: {
        display: 'contents'
      },
      children: [...e.lines].sort((e, t) => AG(e.bpKey, t.bpKey)).map(t => {
        let a = r.formatMoney(t.amount, {
          showCents: !0,
          currencySign: 'accounting'
        });
        return jsxs('li', {
          'data-testid': e.testIdPrefix && `${e.testIdPrefix}-line-${t.bpKey}`,
          'className': _$$s.flex.justifyBetween.textBodyMedium.colorTextSecondary.gap16.itemsCenter.$,
          'children': [jsx('span', {
            children: getI18nString('plan_invoices.seat_type_count', {
              quantity: t.quantity,
              seatType: tI(t.bpKey)
            })
          }), jsx('span', {
            className: _$$s.flex.$,
            children: a
          })]
        }, t.bpKey);
      })
    })]
  }));
}
var G = (e => (e.SEATS = 'seats', e.SEAT_ADJUSTMENTS = 'seat-adjustments', e.SEAT_CHARGES = 'seat-charges', e.SEAT_CREDITS = 'seat-credits', e))(G || {});
function z(e) {
  let t = new CurrencyFormatter(e.invoice.currency);
  let a = _k(e.invoice);
  let i = useMemo(() => ({
    startDate: _$$A(a ? e.invoice.issued_at : e.invoice.period_starts_at).toDate(),
    endDate: _$$A(e.invoice.period_ends_at).toDate()
  }), [e.invoice, a]);
  let r = useCallback(() => _8(e.invoice) ? {
    heading: getI18nString('plan_invoices.cost_breakdown.renewing_monthly_seats_heading'),
    subheading: null
  } : e.invoice.plan_parent_type === FOrganizationLevelType.TEAM && e.invoice.billing_interval === BillingCycle.MONTH && e.invoice.subtype === ly.SUBSCRIPTION_RENEWED && _$$A(e.invoice.issued_at).isAfter(_$$A.utc('2018-05-01')) ? {
    heading: getI18nString('plan_invoices.cost_breakdown.renewing_monthly_seats_heading'),
    subheading: e.invoice.state === qH.PENDING ? getI18nString('plan_invoices.cost_breakdown.renewing_monthly_seats_subheading.pending', i) : getI18nString('plan_invoices.cost_breakdown.renewing_monthly_seats_subheading', i)
  } : e.invoice.plan_parent_type === FOrganizationLevelType.TEAM && e.invoice.billing_interval === BillingCycle.MONTH ? {
    heading: getI18nString('plan_invoices.cost_breakdown.monthly_seats_heading'),
    subheading: getI18nString('plan_invoices.cost_breakdown.monthly_seats_subheading', i)
  } : e.invoice.plan_parent_type === FOrganizationLevelType.TEAM && e.invoice.billing_interval === BillingCycle.YEAR ? {
    heading: getI18nString('plan_invoices.cost_breakdown.annual_seats_heading'),
    subheading: getI18nString('plan_invoices.cost_breakdown.annual_seats_subheading', i)
  } : {
    heading: getI18nString('plan_invoices.cost_breakdown.seats_heading'),
    subheading: getI18nString('plan_invoices.cost_breakdown.seats_subheading', i)
  }, [e.invoice, i]);
  let l = useMemo(() => {
    let t = rK(e.invoice).sort(AG);
    let s = new Set(o0(e.invoice));
    if (a) {
      let a;
      let r;
      e.invoice.billing_mechanics === fA.PRORATED ? (a = getI18nString('plan_invoices.cost_breakdown.seat_charges_subheading.prorated', {
        endDate: i.endDate
      }), r = getI18nString('plan_invoices.cost_breakdown.seat_credits_subheading', {
        endDate: i.endDate
      })) : (e.invoice.billing_mechanics, a = getI18nString('plan_invoices.cost_breakdown.seat_charges_subheading.legacy', i), r = null);
      let l = $(t.map(t => {
        let a = e.invoice.seats_breakdown[t];
        return a ? {
          bpKey: t,
          quantity: a.charges_quantity,
          amount: a.charges_amount
        } : null;
      }), {
        dontFilterKeys: s
      });
      let o = $(t.map(t => {
        let a = e.invoice.seats_breakdown[t];
        return a ? {
          bpKey: t,
          quantity: a.credits_quantity,
          amount: a.credits_amount
        } : null;
      }));
      return I()([{
        key: 'seat-charges',
        content: jsx(B, {
          getHeading: () => getI18nString('plan_invoices.cost_breakdown.seat_charges_heading'),
          subheading: a,
          currency: e.invoice.currency,
          lines: l,
          testIdPrefix: 'invoice-seat-charges'
        })
      }, o.length > 0 && {
        key: 'seat-credits',
        content: jsx(B, {
          getHeading: () => getI18nString('plan_invoices.cost_breakdown.seat_credits_heading'),
          subheading: r,
          currency: e.invoice.currency,
          lines: o,
          testIdPrefix: 'invoice-seat-credits'
        })
      }]);
    }
    let {
      heading,
      subheading
    } = r();
    let d = $(t.map(t => {
      let a = e.invoice.seats_breakdown[t];
      return a ? {
        bpKey: t,
        quantity: a.seats_quantity,
        amount: a.seats_amount
      } : null;
    }), {
      dontFilterKeys: s
    });
    let c = {
      key: 'seats',
      content: jsx(B, {
        getHeading: () => heading,
        subheading,
        currency: e.invoice.currency,
        lines: d,
        testIdPrefix: 'invoice-seats'
      })
    };
    let _ = $(t.map(t => {
      let a = e.invoice.seats_breakdown[t];
      return a ? {
        bpKey: t,
        quantity: a.adjustments_quantity,
        amount: a.adjustments_amount
      } : null;
    }));
    let m = _.length > 0 && {
      key: 'seat-adjustments',
      content: jsx(B, {
        getHeading: () => getFeatureFlags().billing_page_updates_jul_2025_content_updates ? getI18nString('plan_invoices.cost_breakdown.new_seat_costs_heading_new') : getI18nString('plan_invoices.cost_breakdown.new_seat_costs_heading'),
        subheading: e.invoice.billing_mechanics === fA.PRORATED && e.invoice.plan_parent_type === FOrganizationLevelType.TEAM ? renderI18nText('plan_invoices.cost_breakdown.new_seat_costs_learn_more_subheading', {
          learnMore: jsx(_$$o, {
            className: 'x1quhyk7 x1ypdohk xuxw1ft x5hs570',
            href: 'https://help.figma.com/hc/articles/360041061034',
            trusted: !0,
            newTab: !0,
            trackingProperties: {
              trackingDescriptor: _$$c.LEARN_MORE
            },
            children: getI18nString('general.learn_more')
          })
        }) : getI18nString('plan_invoices.cost_breakdown.new_seat_costs_subheading'),
        currency: e.invoice.currency,
        lines: _,
        testIdPrefix: 'invoice-seat-adjustments'
      })
    };
    return I()([m, c]);
  }, [a, i, e.invoice, r]);
  let d = !e.invoice.invalid_amounts_or_quantities;
  let _ = x$(e.invoice);
  let m = d && l.length > 1;
  let p = useMemo(() => {
    let t = {
      'seats': () => ({
        label: r().heading,
        value: _
      }),
      'seat-adjustments': () => ({
        label: getI18nString('plan_invoices.cost_breakdown.new_seat_costs_heading'),
        value: Hx(e.invoice)
      }),
      'seat-charges': () => ({
        label: getI18nString('plan_invoices.cost_breakdown.seat_charges_heading'),
        value: iy(e.invoice)
      }),
      'seat-credits': () => ({
        label: getI18nString('plan_invoices.cost_breakdown.seat_credits_heading'),
        value: Bf(e.invoice)
      })
    };
    let a = () => ({
      key: 'taxes',
      label: getI18nString('plan_invoices.taxes_label'),
      value: e.invoice.total_tax_amount
    });
    let n = () => ({
      key: 'projected-subtotal',
      label: Dc(e.invoice) === fx.LOCKED ? getI18nString('plan_invoices.locked_subtotal') : getI18nString('plan_invoices.projected_total'),
      value: e.invoice.subtotal
    });
    let s = () => ({
      key: 'total',
      label: getI18nString('plan_invoices.total_label'),
      value: e.invoice.total
    });
    if (!d) return e.invoice.state === qH.PENDING ? [n()] : [s()];
    if (m) {
      let i = l.map(({
        key: e
      }) => ({
        ...t[e](),
        key: e
      }));
      return e.invoice.state === qH.PENDING ? [...i, n()] : [...i, a(), s()];
    }
    return e.invoice.state === qH.PENDING ? [n()] : [{
      key: 'subtotal',
      label: getI18nString('plan_invoices.subtotal_label'),
      value: e.invoice.subtotal
    }, a(), s()];
  }, [l, m, e.invoice, r, d, _]);
  return jsx('div', {
    'className': _$$s.flex.flexColumn.p24.$,
    'data-testid': 'invoice-flyout-breakdown',
    'children': jsxs('div', {
      className: _$$s.flex.flexColumn.gap24.$,
      children: [d && jsxs(Fragment, {
        children: [l.map(({
          key: e,
          content: t
        }) => jsx(_$$Fragment, {
          children: t
        }, e)), jsx('div', {
          className: _$$s.wFull.h0.bb1.colorBorder.bSolid.$
        })]
      }), jsx('ul', {
        className: _$$s.flex.flexColumn.gap16.$,
        children: p.map(({
          key: e,
          label: a,
          value: i
        }, r) => createElement('li', {
          ...xk(q.totalLine, r === p.length - 1 ? q.totalLineFinal : q.totalLineDefault),
          'key': e,
          'data-testid': `invoice-sum-${e}`
        }, jsx('div', {
          children: a
        }), jsx('div', {
          children: t.formatMoney(i, {
            showCents: !0,
            currencySign: 'accounting'
          })
        })))
      }), jsx('div', {
        className: _$$s.wFull.h0.bb1.colorBorder.bSolid.$
      })]
    })
  });
}
let V = {
  label: {
    ..._$$g.textBodyMedium,
    color: 'x1n0bwc9',
    $$css: !0
  },
  value: {
    ..._$$g.textBodyMedium,
    color: 'x1akne3o',
    $$css: !0
  }
};
function W(e) {
  let t = useMemo(() => {
    let t = e.invoice.state !== qH.PENDING;
    return I()([{
      key: 'due-date',
      label: getI18nString('plan_invoices.due_date_column_label'),
      value: nm(e.invoice)
    }, {
      key: 'status',
      label: getI18nString('plan_invoices.status_column_label'),
      value: _$$V(e.invoice, e.currentDate)?.children
    }, t && {
      key: 'invoice-number',
      label: getI18nString('plan_invoices.invoice_number_label'),
      value: e.invoice.hosted_invoice_url ? jsx(Ph, {
        href: e.invoice.hosted_invoice_url,
        trusted: !0,
        newTab: !0,
        children: $b(e.invoice)
      }) : $b(e.invoice)
    }, t && {
      key: 'payment-method',
      label: getI18nString('plan_invoices.payment_method_label'),
      value: gL(e.invoice) || jsxs(Fragment, {
        children: [jsx(ScreenReaderOnly, {
          children: getI18nString('plan_invoices.empty_aria_label')
        }), jsx('span', {
          'aria-hidden': !0,
          'children': getI18nString('plan_invoices.empty_details')
        })]
      })
    }]);
  }, [e.invoice, e.currentDate]);
  return jsx('ul', {
    'className': 'xrvj5dj x1p9eum2 x1dipnxa x1i71x30 x1n5zjp5',
    'data-testid': 'invoice-flyout-details',
    'children': t.map(({
      key: e,
      label: t,
      value: a
    }) => jsxs('li', {
      className: _$$s.flex.flexColumn.$,
      children: [jsx('span', {
        ...xk(V.label),
        children: t
      }), jsx('span', {
        ...xk(V.value),
        children: a
      })]
    }, e))
  });
}
function er(e) {
  let t = jsx(e6, {
    className: 'xt0psk2 xjbqb8w x1quhyk7 x1ypdohk x5hs570 xy9f4xx',
    onClick: e.onDiscountClick,
    trackingProperties: {
      trackingDescriptor: _$$c.CONVERT_MONTHLY_TO_ANNUAL,
      adjustAnnualSeatsActionId: e.adjustAnnualSeatsActionId
    },
    children: getI18nString('plan_invoices.monthly_to_annual_cta.discount')
  });
  return jsx(BannerInsetModal, {
    'variant': 'brand',
    'data-testid': 'invoice-flyout-footer-banner',
    'children': jsx(BannerMessage, {
      children: e.renderMessage(t)
    })
  });
}
function el(e) {
  let t = useDispatch();
  let a = _$$k2();
  let r = useTeamPlanFeatures().unwrapOr(null);
  let l = r?.key?.type;
  let o = r?.key?.parentId;
  let d = RG();
  let c = e.invoice.state === qH.PENDING;
  let m = Dc(e.invoice);
  let p = [{
    key: 'download-pdf',
    content: !c && e.invoice.invoice_pdf_url && jsx(pW, {
      href: e.invoice.invoice_pdf_url,
      size: 'lg',
      width: 'fill',
      variant: 'secondary',
      trusted: !0,
      newTab: !0,
      trackingProperties: {
        trackingDescriptor: _$$c.DOWNLOAD_PDF
      },
      children: jsxs('span', {
        className: 'x3nfvp2 x6s0dn4 x1n2onr6 xnajj62 x1l3h6vc',
        children: [jsx('div', {
          className: 'x10l6tqk xu96u03 x5i6ehr',
          children: jsx(_$$b2, {})
        }), getI18nString('plan_invoices.cta_download_pdf')]
      })
    })
  }, {
    key: 'team-manage-seats',
    content: c && o && l === FOrganizationLevelType.TEAM && a && jsx(lR, {
      variant: 'secondary',
      onClick: () => {
        t(selectViewAction({
          view: 'teamAdminConsole',
          teamId: o,
          teamAdminConsoleViewTab: DashboardSections.MEMBERS
        }));
      },
      trackingProperties: {
        trackingDescriptor: _$$c.MANAGE_SEATS
      },
      children: getI18nString('plan_invoices.manage_seats')
    })
  }, {
    key: 'org-view-new-seat-charges',
    content: c && o && l === FOrganizationLevelType.ORG && a && jsx(lR, {
      variant: 'secondary',
      onClick: () => {
        t(selectViewAction({
          view: 'orgAdminSettings',
          orgAdminSettingsViewTab: DashboardSection.MEMBERS,
          orgAdminMembersTabFilters: {
            ...DefaultFilters,
            newEditorFilter: !0
          }
        }));
      },
      trackingProperties: {
        trackingDescriptor: _$$c.VIEW_NEW_SEATS
      },
      children: getI18nString('plan_invoices.view_new_seat_charges_updated')
    })
  }, {
    key: 'org-true-up-review',
    content: c && o && l === FOrganizationLevelType.ORG && !a && m === fx.REVIEW && jsx(lR, {
      variant: 'secondary',
      onClick: () => {
        d ? t(showModalHandler({
          type: _$$A2,
          data: {
            orgId: o,
            invoice: e.invoice
          }
        })) : t(showModalHandler({
          type: _$$H,
          data: {
            orgId: o,
            invoice: e.invoice
          }
        }));
      },
      trackingProperties: {
        trackingDescriptor: _$$c.REVIEW_AND_FINALIZE_INVOICE
      },
      children: getI18nString('org_admin_details.billing_banner.details.upcoming_invoice.button.review_and_finalize_invoice')
    })
  }].filter(({
    content: e
  }) => e);
  let g = function (e) {
    let t = useDispatch();
    let a = e.adjustAnnualSeatsAction;
    let s = P8();
    let r = e.invoice.billing_interval === FBillingPeriodType.MONTH && e5(e.invoice) > 0;
    if (!a || e.invoice.state !== qH.PENDING || !r || !s()) return null;
    switch (a.id) {
      case _$$m2.ADD_ANNUAL_PLAN:
        return jsx(er, {
          onDiscountClick: () => {
            a.perform({
              dispatch: t
            });
          },
          adjustAnnualSeatsActionId: a.id,
          renderMessage: e => renderI18nText('plan_invoices.monthly_to_annual_cta.upgrade', {
            discount: e
          })
        });
      case _$$m2.ADJUST_COTERM_SEATS:
      case _$$m2.ADJUST_RENEWAL_SEATS:
        return jsx(er, {
          onDiscountClick: () => {
            a.perform({
              dispatch: t
            });
          },
          adjustAnnualSeatsActionId: a.id,
          renderMessage: e => renderI18nText('plan_invoices.monthly_to_annual_cta.convert', {
            discount: e
          })
        });
      default:
        a.id;
        return null;
    }
  }({
    invoice: e.invoice,
    adjustAnnualSeatsAction: e.adjustAnnualSeatsAction ?? null
  });
  return p.length !== 0 || g ? jsxs('div', {
    'className': 'x78zum5 xdt5ytf x1nfngrj x161etai',
    'data-testid': 'invoice-flyout-footer',
    'children': [g, jsx('div', {
      className: 'x78zum5 xdt5ytf x1nfngrj x2b8uid x87ps6o xexx8yu',
      children: p.map(({
        key: e,
        content: t
      }) => createElement('div', {
        className: 'x1mapp4v x1iyjqo2',
        key: e
      }, t))
    })]
  }) : null;
}
let ed = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M17.5 20a.5.5 0 0 0 .5-.5V10h-4.5A1.5 1.5 0 0 1 12 8.5V4H6.5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5zM13 4.414 17.586 9H13.5a.5.5 0 0 1-.5-.5zM17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3h6.086a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19.5a1.5 1.5 0 0 1-1.5 1.5M12 10a.5.5 0 0 1 .5.5v.756q.4.053.733.206.512.233.806.642.294.406.306.933h-.952a.93.93 0 0 0-.422-.703 1.4 1.4 0 0 0-.471-.202V14.2l.053.013q.312.077.642.208.33.132.61.345.283.215.454.53.176.318.176.758 0 .556-.288.988-.284.43-.827.68-.36.166-.82.222v.556a.5.5 0 0 1-1 0v-.56a2.8 2.8 0 0 1-.76-.201 1.96 1.96 0 0 1-.84-.662 1.9 1.9 0 0 1-.336-1.023h.991q.03.355.23.592.204.233.521.348.095.032.194.056v-2.198l-.056-.015q-.787-.215-1.247-.63-.457-.415-.457-1.1 0-.565.307-.987.306-.422.83-.655.291-.131.623-.19V10.5a.5.5 0 0 1 .5-.5m-.659 2.21q.076-.034.159-.058v1.769a2 2 0 0 1-.376-.184 1 1 0 0 1-.29-.284.73.73 0 0 1-.11-.403q0-.277.16-.495.163-.22.457-.345m1.159 4.843v-1.922q.186.06.347.13.28.123.444.308.165.185.166.476 0 .32-.189.559a1.25 1.25 0 0 1-.517.37 2 2 0 0 1-.251.08',
      clipRule: 'evenodd'
    })
  });
});
let e_ = memo(e => {
  return jsx('svg', {
    width: '24',
    height: '24',
    fill: 'none',
    viewBox: '0 0 24 24',
    ...e,
    children: jsx('path', {
      fill: 'var(--color-icon)',
      fillRule: 'evenodd',
      d: 'M8 3.5a.5.5 0 0 1 1 0V4h6v-.5a.5.5 0 0 1 1 0V4h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2zM15 5v.5a.5.5 0 0 0 1 0V5h2a1 1 0 0 1 1 1v2H5V6a1 1 0 0 1 1-1h2v.5a.5.5 0 0 0 1 0V5zM5 9v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9z',
      clipRule: 'evenodd'
    })
  });
});
let em = {
  wrapper: {
    display: 'x78zum5',
    alignItems: 'x6s0dn4',
    justifyContent: 'xl56j7k',
    $$css: !0
  },
  icon24: {
    minWidth: 'x1vi9356',
    maxWidth: 'x1lozlaq',
    minHeight: 'x1rqwxy8',
    maxHeight: 'x7p7d3',
    $$css: !0
  },
  icon48: {
    borderRadius: 'x16rqkct',
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    backgroundColor: 'x176lpz5',
    minWidth: 'x1k8l6nd',
    maxWidth: 'x1sguafd',
    minHeight: 'xe8gcm',
    maxHeight: 'x67pkc5',
    $$css: !0
  },
  bgSuccess: {
    backgroundColor: 'xpf8o86',
    $$css: !0
  }
};
let ep = {
  invoice: {
    24: _$$A3,
    48: ed
  },
  calendar: {
    24: _$$v2,
    48: e_
  }
};
function eg(e) {
  let t = ep[e.invoice.billing_interval === FBillingPeriodType.YEAR && [ly.SUBSCRIPTION_CREATED, ly.SUBSCRIPTION_RENEWED].includes(e.invoice.subtype) ? 'calendar' : 'invoice'][e.size];
  let a = e.size === 48 && e.invoice.state === qH.PAID ? 'success' : 'default';
  return jsx('div', {
    ...Ay.props(em.wrapper, em[`icon${e.size}`], a === 'success' && em.bgSuccess),
    'aria-hidden': !0,
    'children': jsx(t, {
      ...(a === 'success' ? {
        style: {
          '--color-icon': Tj.iconSuccess
        }
      } : void 0)
    })
  });
}
let eb = {
  label: {
    ..._$$g.textHeadingMedium,
    $$css: !0
  },
  dateRange: {
    ..._$$g.textBodyLarge,
    color: 'x1n0bwc9',
    $$css: !0
  }
};
function ev(e) {
  let t = e.invoice.state === qH.OPEN;
  return jsxs('div', {
    'className': 'x78zum5 xdt5ytf x1n5zjp5',
    'data-testid': 'invoice-flyout-header',
    'children': [jsxs('div', {
      className: 'x78zum5 x6s0dn4 x1i71x30 x1dipnxa',
      children: [jsx(eg, {
        invoice: e.invoice,
        size: 48
      }), jsxs('div', {
        className: 'x78zum5 xdt5ytf',
        children: [jsxs('div', {
          className: 'xxymvpz',
          children: [jsx('span', {
            ...Ay.props(eb.label),
            'aria-hidden': !0,
            'children': zz(e.invoice)
          }), jsxs('span', {
            className: 'xuxw1ft xnfn54o',
            children: ['\xA0', jsx(_$$Z, {
              invoice: e.invoice,
              currentDate: e.currentDate
            })]
          })]
        }), jsx('div', {
          ...Ay.props(eb.dateRange),
          children: getI18nString('plan_invoices.invoice_date_with_value', {
            date: _$$A(e.invoice.issued_at).toDate()
          })
        })]
      })]
    }), t && jsx(ef, {
      ...e
    })]
  });
}
function ef(e) {
  let t = Jv(e.invoice, e.currentDate);
  let a = _$$R() ? {
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': getI18nString('billing.open_invoice_reminder.button_tooltip'),
    'data-tooltip-show-immediately': !0
  } : void 0;
  return jsx('div', {
    className: 'x1np1o9n',
    children: jsxs(BannerInset, {
      variant: t ? 'danger' : 'brand',
      children: [jsx(BannerMessage, {
        title: t ? getI18nString('plan_invoices.invoice_flyout.overdue_invoice_notice') : getI18nString('plan_invoices.invoice_flyout.open_invoice_notice'),
        children: null
      }), e.invoice.hosted_invoice_url && jsx(pW, {
        htmlAttributes: a,
        variant: 'secondary',
        newTab: !0,
        href: e.invoice.hosted_invoice_url,
        children: getI18nString('plan_invoices.pay_invoice')
      })]
    })
  });
}
let ej = {
  Root: forwardRef((e, t) => jsx(_$$I, {
    open: e.open,
    trackingName: e.trackingName,
    trackingProperties: e.trackingProperties,
    children: jsx(_$$m.Root, {
      ref: t,
      open: e.open,
      onClose: e.onClose,
      children: e.children
    })
  })),
  Contents(e) {
    return jsxs(_$$m.Contents, {
      'data-testid': `invoice-flyout-${e.invoice.id}`,
      'children': [jsx(_$$m.HiddenTitle, {
        children: zz(e.invoice)
      }), jsx(ev, {
        ...e
      }), jsxs(_$$m.Body, {
        children: [jsx(W, {
          ...e
        }), jsx(z, {
          ...e
        }), jsx(el, {
          ...e
        })]
      })]
    });
  }
};
function ey() {
  return jsx('span', {
    style: sx.add({
      paddingLeft: '6px'
    }).$,
    children: getI18nString('plan_invoices.description_column_label')
  });
}
let ew = [{
  id: 'due-date',
  renderHeader: () => getI18nString('plan_invoices.due_date_column_label'),
  renderCell: ({
    dueDate: e
  }) => jsx('span', {
    className: _$$s.colorText.$,
    children: e
  }),
  className: () => 'plan_invoices_table--dateColumn--BKGII plan_invoices_table--_column--1Fkpv'
}, {
  id: 'description',
  renderHeader: () => jsx(ey, {}),
  renderCell: ({
    invoice: e,
    description: t
  }) => jsxs('span', {
    className: _$$s.inlineFlex.itemsCenter.gap2.colorText.$,
    children: [jsx(eg, {
      invoice: e,
      size: 24
    }), t]
  }),
  className: () => 'plan_invoices_table--descriptionColumn--rBf4W plan_invoices_table--_column--1Fkpv'
}, {
  id: 'status',
  renderHeader: () => getI18nString('plan_invoices.status_column_label'),
  renderCell: ({
    invoice: e,
    currentDate: t
  }) => jsx('div', {
    className: _$$s.flex.$,
    children: jsx(_$$Z, {
      invoice: e,
      currentDate: t
    })
  }),
  className: () => 'plan_invoices_table--statusColumn--ikvEE plan_invoices_table--_column--1Fkpv'
}, {
  id: 'invoice-total',
  renderHeader: () => getI18nString('plan_invoices.invoice_total_column_label'),
  renderCell: ({
    invoice: e,
    localizeCurrency: t
  }) => jsx('span', {
    className: _$$s.colorText.$,
    children: e.state === qH.PENDING ? jsxs(Fragment, {
      children: [jsx('span', {
        'aria-hidden': !0,
        'children': '\u2013'
      }), jsx(ScreenReaderOnly, {
        children: getI18nString('plan_invoices.empty_aria_label')
      })]
    }) : t.formatMoney(e.total, {
      showCents: !0
    })
  }),
  className: () => 'plan_invoices_table--invoiceTotalColumn--ODLzg plan_invoices_table--_column--1Fkpv plan_invoices_table--_rightAligned--gTNcC'
}, {
  id: 'view-invoice',
  renderHeader: () => jsx(ScreenReaderOnly, {
    children: getI18nString('plan_invoices.view_invoice_column_aria_label')
  }),
  renderCell: ({
    invoice: e,
    setHighlightedInvoiceId: t,
    rowAriaLabel: a
  }) => jsx(e6, {
    'className': 'x78zum5 xl56j7k x6s0dn4 x1td3qas x1s928wv x1j6awrg xarstr8',
    'onClick': () => t(e.id),
    'aria-label': a,
    'children': jsx(_$$a, {})
  }),
  className: () => 'plan_invoices_table--viewInvoiceColumn--WCyoF plan_invoices_table--_column--1Fkpv plan_invoices_table--_rightAligned--gTNcC'
}];
function ek() {
  return ew.map(e => ({
    ...e,
    className: e.className()
  }));
}
function eE(e) {
  return jsx(Hj, {
    className: 'x1n2onr6 xu15cu9 x9f619 xfbgxd4 xmkjyiy xuhu7p5 x1tv5ljm',
    leftPadding: !0,
    header: e.header,
    useAdminTableStyles: !0,
    highlighted: e.highlighted,
    overrideTabIndex: null,
    children: e.children
  });
}
function eC(e) {
  return jsx('div', {
    role: 'rowgroup',
    className: _$$s.sticky.top0.zIndex1.$,
    children: jsxs('div', {
      className: _$$s.flex.flexColumn.colorBg.$,
      children: [e.stickyContent && jsxs(Fragment, {
        children: [e.stickyContent, jsx('div', {
          className: _$$s.wFull.h0.bb1.bSolid.colorBorder.$
        })]
      }), jsx(eE, {
        header: !0,
        children: ek().map(({
          id: e,
          className: t,
          renderHeader: a
        }) => jsx(A3, {
          className: t,
          children: jsx('span', {
            className: _$$s.colorText.$,
            children: a()
          })
        }, e))
      })]
    })
  });
}
function eS(e) {
  return e.invoices.length === 0 ? jsx('div', {
    className: _$$s.mt36.mxAuto.alignCenter.$,
    children: getI18nString('plan_invoices.no_invoices_to_show')
  }) : jsx('div', {
    role: 'rowgroup',
    children: e.invoices.map(t => {
      let a = new CurrencyFormatter(t.currency);
      let s = nm(t);
      let i = zz(t);
      let r = getI18nString('plan_invoices.row_aria_label', {
        dueDate: s,
        description: i
      });
      return jsx(eE, {
        'highlighted': t.id === e.highlightedInvoiceId,
        'aria-label': r,
        'children': ek().map(({
          id: l,
          className: o,
          renderCell: d
        }) => jsx('div', {
          role: 'cell',
          className: o,
          children: d({
            invoice: t,
            localizeCurrency: a,
            currentDate: e.currentDate,
            setHighlightedInvoiceId: e.setHighlightedInvoiceId,
            dueDate: s,
            description: i,
            rowAriaLabel: r
          })
        }, l))
      }, t.id);
    })
  });
}
let eN = 'InvoiceFlyout';
export function $$eI0(e) {
  let t = vt();
  let a = _$$B();
  let r = useRef(null);
  let l = useRef(null);
  let o = useStore();
  let c = useDispatch();
  let _ = useMemo(() => function (e, t) {
    let a = gl(e, {
      allowLegacyOrgAnnual: !0,
      allowProratedOrgAnnual: t?.allowUpcomingProratedOrgAnnual
    });
    return TQ(e).filter(e => {
      if (e.state === qH.PENDING) {
        let t = a && e.id === a.id;
        let n = e.plan_parent_type === FOrganizationLevelType.TEAM && e.billing_interval === FBillingPeriodType.MONTH;
        let s = e.plan_parent_type === FOrganizationLevelType.ORG && e.billing_interval === FBillingPeriodType.YEAR;
        let i = s && _k(e);
        let r = s && e.billing_mechanics === fA.LEGACY && z7(e);
        return t || n || i || r;
      }
      return !0;
    }).sort((e, t) => Z4(t).getTime() - Z4(e).getTime());
  }(e.invoices, {
    allowUpcomingProratedOrgAnnual: !t()
  }), [e.invoices, t]);
  let {
    highlightedItem,
    setHighlightedItemId,
    clearHighlightedItemId
  } = _$$v(useCallback(e => _.find(t => t.id === e), [_]), {
    interactionConfig: [{
      ref: a,
      shouldClearHighlight: !0
    }, {
      ref: r,
      shouldClearHighlight: !1
    }, {
      ref: l,
      shouldClearHighlight: !1
    }],
    onHighlight: () => {
      r.current?.focus();
    },
    onClear: _$$b(eN)
  });
  _$$h(() => {
    let e = o.getState().selectedView;
    (e.view === 'orgAdminSettings' || e.view === 'teamAdminConsole') && e.initialHighlightedInvoiceId && (setHighlightedItemId(e.initialHighlightedInvoiceId), c(selectViewAction({
      ...e,
      initialHighlightedInvoiceId: null
    })));
  });
  return jsxs(Fragment, {
    children: [jsxs('div', {
      'role': 'table',
      'ref': l,
      'aria-label': getI18nString('plan_invoices.table_label'),
      'children': [jsx(eC, {
        stickyContent: e.stickyContent
      }), jsx(eS, {
        invoices: _,
        highlightedInvoiceId: highlightedItem?.id ?? null,
        setHighlightedInvoiceId: setHighlightedItemId,
        currentDate: e.currentDate
      })]
    }), jsx(ej.Root, {
      ref: r,
      open: !!highlightedItem,
      onClose: clearHighlightedItemId,
      trackingName: eN,
      trackingProperties: {
        invoiceId: highlightedItem?.id
      },
      children: highlightedItem && jsx(ej.Contents, {
        invoice: highlightedItem,
        currentDate: e.currentDate,
        adjustAnnualSeatsAction: e.adjustAnnualSeatsAction
      })
    })]
  });
}
export const S = $$eI0;