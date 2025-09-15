import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo, useState, useCallback, createElement, Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Yy } from "../figma_app/59509";
import { Q as _$$Q } from "../905/363675";
import { $ as _$$$ } from "../905/692618";
import { jH } from "../figma_app/342207";
import { Ay } from "@stylexjs/stylex";
import { isDevEnvironment } from "../figma_app/169182";
import { Q as _$$Q2 } from "../469e6e40/825225";
import { s as _$$s } from "../cssbuilder/589278";
import { C as _$$C, e as _$$e } from "../469e6e40/517544";
import { isNullish } from "../figma_app/95419";
import { ScreenReaderOnly } from "../905/172252";
import { t as _$$t } from "../905/150656";
import b from "../vendor/116389";
import { Badge, BadgeSize, BadgeColor } from "../figma_app/919079";
import { $z, rb, e6 } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { B as _$$B } from "../905/261906";
import { RR } from "../figma_app/307841";
import { tI } from "../figma_app/599327";
import { P8, a8, vt } from "../figma_app/297957";
import { c as _$$c } from "../905/370443";
import { TrackingProvider, withTrackedClick } from "../figma_app/831799";
import { N_ } from "../905/332483";
import { AG } from "../figma_app/217457";
import { FOrganizationLevelType, FBillingPeriodType, FTeamStatusType, FPlanNameType } from "../figma_app/191312";
import { useCurrentPrivilegedPlan, useTeamPlanFeatures } from "../figma_app/465071";
import { e0 as _$$e2 } from "../905/696396";
import { getFeatureFlags } from "../905/601108";
import { _ as _$$_, Y as _$$Y } from "../469e6e40/781142";
import { showModalHandler } from "../905/156213";
import { Z4, tB, qH, W8, fA, _k, zz, fx, gl, iv, RK } from "../figma_app/934005";
import { Xf } from "../figma_app/153916";
import { CurrencyFormatter } from "../figma_app/514043";
import { filterNotNullish } from "../figma_app/656233";
import { pW } from "../905/160095";
import { V as _$$V } from "../905/223767";
import { k as _$$k2 } from "../figma_app/618031";
import { m as _$$m } from "../469e6e40/61410";
import { UpsellModalType } from "../905/165519";
import { setupToggleButton } from "../905/167712";
import { O as _$$O } from "../905/487602";
import { e as _$$e3 } from "../905/149844";
import { m as _$$m2 } from "../905/270214";
import { g as _$$g } from "../905/687265";
import { E as _$$E2 } from "../905/53857";
import { _ as _$$_2 } from "../7021/243271";
import { A as _$$A } from "../905/920142";
import { Pd, yn } from "../figma_app/84966";
import { e5 as _$$e4, x$, Hx, iy, Bf, GK, Dc, TV } from "../469e6e40/616503";
import { a } from "../905/964520";
import { U as _$$U } from "../905/275247";
import { S as _$$S } from "../905/794163";
import { s as _$$s2 } from "../9314/287043";
import { S as _$$S2 } from "../905/962956";
import { Button } from "../905/521428";
import { R as _$$R } from "../7021/67076";
import { Z as _$$Z } from "../469e6e40/658906";
import { v as _$$v } from "../4452/513456";
import { w as _$$w } from "../c5e2cae0/59973";
import { a as _$$a } from "../905/948337";
import { b as _$$b2 } from "../905/946806";
import eH from "../vendor/781591";
import { RG } from "../figma_app/684446";
import { returnSecond } from "../figma_app/465776";
import { sf } from "../905/929976";
import { DashboardSection } from "../figma_app/650409";
import { ColumnName } from "../figma_app/967319";
import { H as _$$H } from "../469e6e40/325100";
import { A as _$$A2 } from "../469e6e40/916829";
var v = b;
let L = "seat_counts--totalBadge--tVRtq";
function D() {
  let e = useCurrentPrivilegedPlan("useTrackingProperties").unwrapOr(null);
  return useMemo(() => ({
    orgId: e?.key?.type === FOrganizationLevelType.ORG ? e.key.parentId : void 0,
    teamId: e?.key?.type === FOrganizationLevelType.TEAM ? e.key.parentId : void 0
  }), [e?.key]);
}
function M(e) {
  return jsx($z, {
    onClick: e.onClick,
    variant: e.variant ?? "secondary",
    trackingProperties: {
      ...e.trackingProperties,
      trackingDescriptor: _$$c.MANAGE_SEATS
    },
    children: getI18nString("admin_settings.seat_counts.manage_button_label")
  });
}
function P(e) {
  return jsx($z, {
    onClick: e.onClick,
    variant: "secondary",
    trackingProperties: {
      ...e.trackingProperties,
      trackingDescriptor: _$$c.ADD_SEATS
    },
    children: getI18nString("admin_settings.seat_counts.add_seats_label")
  });
}
function U(e) {
  return jsx("section", {
    className: _$$s.wFull.flex.flexColumn.colorBg.colorText.colorBorder.b1.bSolid.radiusLarge.$,
    children: e.children
  });
}
function F(e) {
  return jsxs("div", {
    className: _$$s.flex.justifyBetween.itemsBaseline.gap16.p16.bb1.colorBorder.bSolid.$,
    "data-testid": "seat-counts-header",
    children: [e.children, jsx("div", {
      className: "x78zum5 x1nfngrj x6s0dn4 x1a02dak x13a6bvl",
      children: e.actions
    })]
  });
}
function q(e) {
  return jsx("ul", {
    className: _$$s.flex.flexColumn.py8.textBodyLarge.$,
    children: N_.sort(AG).map(t => {
      if (isNullish(e.seatCountsData[t])) return null;
      let {
        total,
        available
      } = e.seatCountsData[t];
      let i = tI(t);
      return jsxs("li", {
        className: "seat_counts--seatType--FRALA",
        "data-testid": `seat-counts-${t}`,
        children: [jsxs("div", {
          className: _$$s.noWrap.overflowHidden.ellipsis.flex.itemsCenter.gap8.$,
          children: [jsx("div", {
            "aria-hidden": !0,
            children: jsx(_$$B, {
              type: t,
              size: "24"
            })
          }), i]
        }), jsxs("div", {
          className: _$$s.flex.itemsCenter.noWrap.gap8.$,
          children: [!e.isELA && available > 0 && jsx(Badge, {
            size: BadgeSize.LARGE,
            color: BadgeColor.BRAND,
            subtle: !0,
            text: getI18nString("admin_settings.seat_counts.available_seats", {
              quantity: available.toLocaleString()
            })
          }), jsx(Badge, {
            size: BadgeSize.LARGE,
            color: BadgeColor.DEFAULT,
            subtle: !0,
            text: e.isELA ? (total - available).toLocaleString() : total.toLocaleString(),
            className: L
          })]
        })]
      }, t);
    })
  });
}
function $(e) {
  let t = D();
  let a = useMemo(() => N_.reduce((t, a) => t + (e.seatCountsData?.[a]?.total ?? 0), 0), [e.seatCountsData]);
  let i = useMemo(() => N_.reduce((t, a) => t + (e.seatCountsData?.[a]?.available ?? 0), 0), [e.seatCountsData]);
  let r = e.isELA ? (a - i).toLocaleString() : a.toLocaleString();
  return jsxs(U, {
    children: [jsx(F, {
      actions: [jsx(M, {
        onClick: e.onManageClick,
        trackingProperties: t
      }, "manage")],
      children: jsxs("h2", {
        className: _$$s.textBodyLargeStrong.flex.itemsCenter.gap6.overflowHidden.$,
        children: [jsxs("span", {
          style: {
            display: "contents"
          },
          "aria-hidden": !0,
          children: [jsx("span", {
            className: "xt0psk2 xb3r6kr xlyipyv xuxw1ft",
            children: getI18nString("admin_settings.seat_counts.total_paid_seats")
          }), jsx(Badge, {
            size: BadgeSize.LARGE,
            color: BadgeColor.DEFAULT,
            dataTestId: "total-paid-seats",
            subtle: !0,
            text: r,
            className: L
          })]
        }), jsx(ScreenReaderOnly, {
          as: "span",
          children: getI18nString("admin_settings.seat_counts.total_paid_seats_sr_only", {
            quantity: r
          })
        })]
      })
    }), jsx(q, {
      seatCountsData: e.seatCountsData,
      isELA: e.isELA
    })]
  });
}
let B = {
  [FBillingPeriodType.YEAR]: _$$e2.ANNUAL_SEATS_TAB,
  [FBillingPeriodType.MONTH]: _$$e2.MONTHLY_SEATS_TAB
};
function G(e) {
  let t = e.adjustAnnualSeatsAction;
  let a = [FBillingPeriodType.YEAR, FBillingPeriodType.MONTH];
  let [r, l] = useState(a[0]);
  let o = D();
  let d = P8();
  let c = useDispatch();
  let [_, u, m] = _$$t.useManagedTabs(useMemo(() => ({
    [FBillingPeriodType.YEAR]: !0,
    [FBillingPeriodType.MONTH]: !0
  }), []), r, useCallback(e => {
    l(e);
  }, []));
  let p = useMemo(() => e.seatCountsDataByBillingInterval[r], [e.seatCountsDataByBillingInterval, r]);
  let g = useMemo(() => t && "perform" in t && d() ? jsx(P, {
    onClick: () => {
      t.perform({
        dispatch: c
      });
    },
    trackingProperties: {
      ...o,
      adjustAnnualSeatsActionId: t.id
    }
  }, "add-seats") : null, [o, t, c, d]);
  return jsxs(U, {
    children: [jsx(F, {
      actions: v()([g, jsx(M, {
        onClick: e.onManageClick,
        trackingProperties: o,
        variant: g ? "primary" : "secondary"
      }, "manage")]),
      children: jsx(_$$t.TabStrip, {
        manager: m,
        children: a.map(e => createElement(_$$t.Tab, {
          ..._[e],
          key: e
        }, getI18nString(`admin_settings.billing.seat_counts.by_billing_interval.${e}`)))
      })
    }), a.map(t => createElement(_$$t.TabPanel, {
      ...u[t],
      key: t
    }, jsx(TrackingProvider, {
      name: B[t],
      properties: o,
      children: jsx(q, {
        seatCountsData: p,
        isELA: e.isELA
      })
    })))]
  });
}
function z(e) {
  return RR() ? "billing_interval" === e.seatCountsWithSplit.split ? jsx(G, {
    seatCountsDataByBillingInterval: e.seatCountsWithSplit.data,
    isELA: e.isELA,
    onManageClick: e.onManageClick,
    adjustAnnualSeatsAction: e.adjustAnnualSeatsAction
  }) : jsx($, {
    seatCountsData: e.seatCountsWithSplit.data,
    isELA: e.isELA,
    onManageClick: e.onManageClick
  }) : null;
}
function X() {
  let e = function () {
    let e = a8();
    let t = useTeamPlanFeatures().unwrapOr(null);
    let a = t?.key?.type === FOrganizationLevelType.ORG;
    let n = Xf(t?.key.parentId, a);
    let s = useSelector(e => e.teamBilling);
    if (a && n.data) return {
      amount: n.data.account_credit,
      currency: n.data.currency
    };
    let r = t?.planSubscription?.status === FTeamStatusType.SUSPENDED || t?.planSubscription?.status === FTeamStatusType.SUSPENDED_MONTHLY_SUB_EDITOR_COUNT_EXCEEDED;
    let l = t?.tier === FPlanNameType.PRO;
    return e() && l && !r && s.summary.account_credit ? {
      amount: s.summary.account_credit,
      currency: s.summary.currency
    } : null;
  }();
  if (!e || e.amount <= 0) return null;
  let t = new CurrencyFormatter(e.currency);
  return jsx(Yy, {
    variant: "brand",
    "data-testid": "account-credit-banner",
    children: jsx(_$$Q, {
      title: getI18nString("org_admin_settings.billing_banner_figjam.you_have_a_credit_amount", {
        accountCredit: t.formatMoney(e.amount, {
          showCents: !0
        })
      }),
      children: null
    })
  });
}
let ed = {
  heading: {
    color: "x1akne3o",
    ..._$$g.textBodyMedium,
    $$css: !0
  },
  content: {
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    width: "xh8yej3",
    textAlign: "xdpxx8g",
    paddingTop: "x1vi7shn",
    gap: "x1i71x30",
    rowGap: null,
    columnGap: null,
    color: "x1n0bwc9",
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
let ec = {
  heading: {
    ..._$$g.textHeadingSmall,
    $$css: !0
  }
};
function e_(e) {
  let [t, a] = useState(!1);
  return jsxs("div", {
    className: "x78zum5 xdt5ytf x1qughib x6s0dn4 xkh2ocl xh8yej3 x1vamu9a x1w4f5ud xso031l x1q0q8m5 xertd99 x10zg81t x1t1lzn6 xup0pd7",
    children: [jsxs("div", {
      className: "x78zum5 x1qughib x6s0dn4 xkh2ocl",
      children: [jsx("span", {
        ...Ay.props(ed.heading),
        children: e.heading
      }), jsx(setupToggleButton, {
        checked: t,
        onIcon: jsx(_$$O, {}),
        offIcon: jsx(_$$e3, {}),
        "aria-label": "Toggle expanded",
        onChange: () => {
          a(!t);
        }
      })]
    }), t && jsx("div", {
      ...Ay.props(ed.content),
      children: e.content
    })]
  });
}
function eu(e) {
  return jsxs("section", {
    className: "x78zum5 xdt5ytf x1mxnbhz x1bamp8i x16v0e3u x1akne3o xh8yej3 xb3r6kr xg7h5cd",
    children: [jsxs("div", {
      className: "x78zum5 x1qughib x1excjyp xi4r6k5",
      children: [jsxs("div", {
        className: "x78zum5 x6s0dn4 x1nfngrj",
        children: [jsx("div", {
          className: "x78zum5 xvy4d1p xxk0z11 xfawy5m xl56j7k x6s0dn4 x1xwekrv x1xsi6zv",
          children: jsx(_$$m2, {
            "aria-hidden": !0
          })
        }), jsx("h2", {
          ...Ay.props(ec.heading),
          children: e.heading
        })]
      }), e.headerRight && jsx("div", {
        className: "x78zum5 x1nfngrj x6s0dn4 x13a6bvl",
        children: e.headerRight
      })]
    }), jsx("ul", {
      className: "x78zum5 xdt5ytf xi4r6k5",
      children: e.lines.map((e, t) => createElement(e_, {
        ...e,
        key: `info-card-line-${t}`
      }))
    })]
  });
}
function em(e) {
  let t = useDispatch();
  let {
    isAnnualProPlan,
    adjustAnnualSeatsAction,
    isELA
  } = e;
  let o = useTeamPlanFeatures().unwrapOr(null);
  let d = _$$k2();
  let c = o?.tier;
  let _ = useMemo(() => {
    switch (c) {
      case FPlanNameType.PRO:
        return getI18nString("admin_settings.plan_information_widget_card.heading.pro");
      case FPlanNameType.ORG:
        return getI18nString("admin_settings.plan_information_widget_card.heading.org");
      case FPlanNameType.ENTERPRISE:
        return getI18nString("admin_settings.plan_information_widget_card.heading.enterprise");
      default:
        return null;
    }
  }, [c]);
  let u = useMemo(() => c === FPlanNameType.PRO ? jsx($z, {
    variant: "secondary",
    onClick: () => {
      t(showModalHandler({
        type: _$$V,
        data: {
          teamId: o?.id ?? "",
          upsellSource: UpsellModalType.BILLING_FAQ_WIDGET,
          openCheckoutInNewTab: !0
        }
      }));
    },
    trackingProperties: {
      trackingDescriptor: _$$c.VIEW_PLANS
    },
    children: getI18nString("admin_settings.plan_information_widget_card.cta.view_plans")
  }) : jsx(pW, {
    variant: "secondary",
    newTab: !0,
    href: "https://help.figma.com/hc/articles/360040328273",
    trackingProperties: {
      trackingDescriptor: _$$c.LEARN_MORE
    },
    children: getI18nString("admin_settings.plan_information_widget_card.cta.learn_more")
  }), [t, c, o?.id]);
  let m = useMemo(() => {
    let e = getI18nString("admin_settings.plan_information_widget_card.seat_terms.heading");
    let s = jsx(rb, {
      onClick: () => {
        adjustAnnualSeatsAction?.id !== _$$m.TRIAL_READ_ONLY && adjustAnnualSeatsAction?.perform({
          dispatch: t
        });
      },
      trackingProperties: {
        trackingDescriptor: _$$c.CONVERT_MONTHLY_TO_ANNUAL
      },
      children: getI18nString("admin_settings.plan_information_widget_card.seat_terms.adding_seats_to_annual_plan_link")
    });
    switch (c) {
      case FPlanNameType.PRO:
        if (isAnnualProPlan) return {
          heading: e,
          content: jsxs("span", {
            children: [renderI18nText("admin_settings.plan_information_widget_card.seat_terms.annual_content_line_1"), jsx("br", {}), jsx("br", {}), renderI18nText("admin_settings.plan_information_widget_card.seat_terms.annual_content_line_2", {
              adding_seats_to_annual_plan_link: s
            })]
          })
        };
        return {
          heading: e,
          content: d ? getI18nString("admin_settings.plan_information_widget_card.seat_terms.monthly_content") : getI18nString("admin_settings.plan_information_widget_card.seat_terms.monthly_content_legacy")
        };
      case FPlanNameType.ORG:
      case FPlanNameType.ENTERPRISE:
        if (isELA) return {
          heading: e,
          content: getI18nString("admin_settings.plan_information_widget_card.seat_terms.ela_content_line")
        };
        return {
          heading: e,
          content: d ? getI18nString("admin_settings.plan_information_widget_card.seat_terms.org_content_line") : getI18nString("admin_settings.plan_information_widget_card.seat_terms.org_content_line_legacy")
        };
      default:
        return null;
    }
  }, [c, isAnnualProPlan, adjustAnnualSeatsAction, t, d, isELA]);
  let p = useMemo(() => {
    let e = getI18nString("admin_settings.plan_information_widget_card.available_seats.heading");
    switch (c) {
      case FPlanNameType.PRO:
        if (isAnnualProPlan) return {
          heading: e,
          content: getI18nString("admin_settings.plan_information_widget_card.available_seats.content_annual")
        };
        return {
          heading: e,
          content: getI18nString("admin_settings.plan_information_widget_card.available_seats.content_monthly")
        };
      case FPlanNameType.ORG:
      case FPlanNameType.ENTERPRISE:
        return {
          heading: e,
          content: getI18nString("admin_settings.plan_information_widget_card.available_seats.content_org")
        };
      default:
        return null;
    }
  }, [c, isAnnualProPlan]);
  return o && o.id && _ && c && c !== FPlanNameType.STARTER && c !== FPlanNameType.STUDENT ? jsx(eu, {
    heading: _,
    headerRight: u,
    lines: filterNotNullish([m, p])
  }) : null;
}
let ef = {
  headerRightP: {
    ..._$$g.textBodyMedium,
    color: "x1n0bwc9",
    textAlign: "x1hr2gdg",
    $$css: !0
  },
  heading: {
    ..._$$g.textHeadingSmall,
    $$css: !0
  },
  subheading: {
    ..._$$g.textHeadingMedium,
    $$css: !0
  },
  lineText: {
    ..._$$g.textBodyMedium,
    $$css: !0
  }
};
function ej(e) {
  return "string" == typeof e.children ? jsx("p", {
    ...Ay.props(ef.headerRightP),
    children: e.children
  }) : e.children ? jsx("div", {
    className: "x78zum5 x1nfngrj x13a6bvl",
    children: e.children
  }) : null;
}
function ey(e) {
  return jsxs("li", {
    className: "x1n2onr6 x1ja2u2z x78zum5 x6s0dn4 x1qughib xtvby7n x1nnhrsq x1nfngrj xfbgxd4 x164aei2 xmkjyiy xuhu7p5",
    children: [jsxs("div", {
      className: "x78zum5 x6s0dn4 x1nfngrj",
      children: [jsx("div", {
        className: "x78zum5 x1sjmt1f x19y5rnk",
        "aria-hidden": !0,
        children: e.icon
      }), jsx("div", {
        ...Ay.props(ef.lineText),
        children: e.text
      })]
    }), jsxs("div", {
      className: "x78zum5 x6s0dn4 x1nfngrj",
      children: [e.badge, e.clickable && jsx(e6, {
        className: "x1s928wv x1j6awrg xarstr8",
        onClick: e.clickable.onClick,
        trackingProperties: {
          trackingDescriptor: e.clickable.ctaTrackingDescriptor
        },
        "aria-label": e.clickable.ariaLabel,
        children: jsx(a, {
          "aria-hidden": !0
        })
      })]
    })]
  });
}
function ew(e) {
  return jsxs("section", {
    className: "x78zum5 xdt5ytf x1mxnbhz x1bamp8i x16v0e3u x1akne3o xh8yej3",
    children: [jsxs("div", {
      className: "x78zum5 x1qughib x1i71x30 xi4r6k5 x1n5zjp5",
      children: [jsxs("div", {
        className: "x78zum5 xdt5ytf x1enigpx",
        children: [jsx("h2", {
          ...Ay.props(ef.heading),
          children: e.heading
        }), jsx("p", {
          ...Ay.props(ef.subheading),
          children: e.subheading
        })]
      }), jsx(ej, {
        children: e.headerRight
      })]
    }), jsx("ul", {
      className: "x78zum5 xdt5ytf x1uil0o3 x1nfngrj",
      children: e.lines.map(e => createElement(ey, {
        ...e,
        key: e.id
      }))
    })]
  });
}
function ek(e) {
  let t = _$$k2();
  let a = Pd(t);
  let i = useCallback((t, a) => e.planType === FOrganizationLevelType.TEAM ? getI18nString("admin_settings.plan_subscription_card.amount_due_with_date", {
    amount: a,
    dueAt: Z4(t)
  }) : getI18nString("admin_settings.plan_subscription_card.amount_issued_with_date", {
    amount: a,
    issuedAt: tB(t)
  }), [e.planType]);
  let r = useMemo(() => !!e.upcomingAnnualInvoice && yn(tB(e.upcomingAnnualInvoice)), [e.upcomingAnnualInvoice]);
  let l = useMemo(() => e.upcomingAnnualInvoice?.org_invoice_details?.billing_period_is_stub || e.upcomingAnnualInvoice?.org_invoice_details?.multiyear_contract_id || e.latestAnnualInvoice?.org_invoice_details?.billing_period_is_stub || e.latestAnnualInvoice?.org_invoice_details?.multiyear_contract_id ? getI18nString("admin_settings.plan_subscription_card.plan_subscription") : getI18nString("admin_settings.plan_subscription_card.annual_subscription"), [e.latestAnnualInvoice?.org_invoice_details?.billing_period_is_stub, e.latestAnnualInvoice?.org_invoice_details?.multiyear_contract_id, e.upcomingAnnualInvoice?.org_invoice_details?.billing_period_is_stub, e.upcomingAnnualInvoice?.org_invoice_details?.multiyear_contract_id]);
  let o = useMemo(() => {
    if (!e.latestAnnualInvoice || e.planStarting) return null;
    let t = new CurrencyFormatter(e.latestAnnualInvoice.currency).formatMoney(e.latestAnnualInvoice.total, {
      showCents: !0,
      currencySign: "accounting"
    });
    if (e.latestAnnualInvoice.state === qH.PAID) {
      let a = W8(e.latestAnnualInvoice);
      return a ? getI18nString("admin_settings.plan_subscription_card.amount_paid_with_date", {
        amount: t,
        paidAt: a
      }) : getI18nString("admin_settings.plan_subscription_card.amount_paid", {
        amount: t
      });
    }
    return getI18nString("admin_settings.plan_subscription_card.amount_due_with_date", {
      amount: t,
      dueAt: Z4(e.latestAnnualInvoice)
    });
  }, [e.latestAnnualInvoice, e.planStarting]);
  let d = useMemo(() => {
    if (e.upcomingAnnualInvoice) {
      let t = tB(e.upcomingAnnualInvoice);
      let a = new CurrencyFormatter(e.upcomingAnnualInvoice.currency).formatMoney(e.upcomingAnnualInvoice.subtotal, {
        showCents: !0,
        currencySign: "accounting"
      });
      if (e.planStarting) return i(e.upcomingAnnualInvoice, a);
      if (r) return e.upcomingRenewalWillPause ? getI18nString("admin_settings.plan_subscription_card.upcoming_renewal_will_pause", {
        pauseAt: t
      }) : getI18nString("admin_settings.plan_subscription_card.amount_renewing_with_date", {
        amount: a,
        renewalAt: t
      });
      if (e.shouldAutoRenew) return getI18nString("admin_settings.plan_subscription_card.next_renewal_date", {
        renewalAt: t
      });
    }
    return e.willCancelAt ? getI18nString("admin_settings.plan_subscription_card.ending_date", {
      endingAt: e.willCancelAt
    }) : e.latestAnnualInvoice ? e.shouldAutoRenew ? getI18nString("admin_settings.plan_subscription_card.next_renewal_date", {
      renewalAt: _$$A(e.latestAnnualInvoice.period_ends_at).toDate()
    }) : getI18nString("admin_settings.plan_subscription_card.date_range", {
      startsAt: _$$A(e.latestAnnualInvoice.period_starts_at).toDate(),
      endsAt: _$$A(e.latestAnnualInvoice.period_ends_at).toDate()
    }) : getI18nString("admin_settings.plan_subscription_card.no_invoices");
  }, [e.upcomingAnnualInvoice, e.willCancelAt, e.latestAnnualInvoice, e.planStarting, e.upcomingRenewalWillPause, e.shouldAutoRenew, r, i]);
  let c = useMemo(() => {
    if (e.upcomingAnnualInvoice) {
      if (e.planStarting) return getI18nString("admin_settings.plan_subscription_card.starting_date", {
        startingAt: tB(e.upcomingAnnualInvoice)
      });
      if (e.planType === FOrganizationLevelType.ORG && e.upcomingAnnualInvoice.billing_mechanics === fA.LEGACY) {
        let t = e.previewInvoice;
        let a = e.upcomingAnnualInvoice.id;
        return jsx($z, {
          variant: "primary",
          onClick: () => {
            t(a);
          },
          trackingProperties: {
            trackingDescriptor: _$$c.PREVIEW_RENEWAL
          },
          children: getI18nString("admin_settings.plan_subscription_card.preview")
        });
      }
      if (r) return e.upcomingRenewalWillPause && t ? jsx(pW, {
        variant: "primary",
        href: "https://help.figma.com/hc/requests/new?ticket_form_id=9707134248215",
        trackingProperties: {
          trackingDescriptor: _$$c.CONTACT_SUPPORT
        },
        trusted: !0,
        newTab: !0,
        children: getI18nString("admin_settings.plan_subscription_card.contact_support")
      }) : e.adjustRenewalSeats && !e.renewalConfirmed ? jsx($z, {
        variant: "primary",
        onClick: e.adjustRenewalSeats,
        trackingProperties: {
          trackingDescriptor: _$$c.REVIEW_RENEWAL
        },
        "data-testid": "plan-subscription-review-renewal",
        children: getI18nString("admin_settings.plan_subscription_card.review")
      }) : null;
    }
    return o;
  }, [e.upcomingAnnualInvoice, e.planStarting, e.planType, e.previewInvoice, e.upcomingRenewalWillPause, e.adjustRenewalSeats, e.renewalConfirmed, o, r, t]);
  let _ = useMemo(() => {
    let s = "seats";
    let i = jsx(_$$_2, {});
    let l = e.annualSeats?.assigned ?? 0;
    let o = e.annualSeats?.available ?? 0;
    let d = e.annualSeats?.total ?? 0;
    let c = e.manageAnnualSeats && {
      onClick: e.manageAnnualSeats,
      ctaTrackingDescriptor: _$$c.ANNUAL_SEATS,
      ariaLabel: getI18nString("admin_settings.plan_subscription_card.annual_seats_aria_label")
    };
    if (e.planStarting && e.upcomingAnnualInvoice) return {
      id: s,
      icon: i,
      text: getI18nString("admin_settings.plan_subscription_card.x_annual_seats", {
        quantity: _$$e4(e.upcomingAnnualInvoice)
      })
    };
    if (r && e.upcomingAnnualInvoice) return {
      id: s,
      icon: i,
      text: getI18nString("admin_settings.plan_subscription_card.x_renewing_annual_seats", {
        quantity: _$$e4(e.upcomingAnnualInvoice)
      })
    };
    if (!t && e.planType === FOrganizationLevelType.TEAM) {
      let t = a ?? 0;
      return {
        id: s,
        icon: i,
        text: e.upcomingAnnualInvoice ? getI18nString("admin_settings.plan_subscription_card.x_renewing_annual_seats", {
          quantity: t
        }) : getI18nString("admin_settings.plan_subscription_card.x_annual_seats", {
          quantity: t
        })
      };
    }
    return e.isELA ? {
      id: s,
      icon: i,
      text: getI18nString("admin_settings.plan_subscription_card.x_annual_seats", {
        quantity: l
      }),
      clickable: c
    } : {
      id: s,
      icon: i,
      text: getI18nString("admin_settings.plan_subscription_card.x_annual_seats", {
        quantity: d
      }),
      badge: o > 0 ? jsx(_$$E2, {
        variant: "brandOutline",
        children: getI18nString("admin_settings.plan_subscription_card.x_available", {
          quantity: o
        })
      }) : null,
      clickable: c
    };
  }, [a, e.annualSeats?.assigned, e.annualSeats?.available, e.annualSeats?.total, e.isELA, e.manageAnnualSeats, e.planStarting, e.planType, e.upcomingAnnualInvoice, t, r]);
  let u = useMemo(() => [_], [_]);
  return jsx(ew, {
    heading: l,
    subheading: d,
    headerRight: c,
    lines: u
  });
}
function eI(e) {
  let t = _$$k2();
  let a = useMemo(() => e.planType === FOrganizationLevelType.TEAM ? getI18nString("admin_settings.upcoming_invoice_card.heading.next_monthly_invoice") : getI18nString("admin_settings.upcoming_invoice_card.heading.next_quarterly_invoice"), [e.planType]);
  let i = useMemo(() => new CurrencyFormatter(e.upcomingInvoice?.currency || e.planCurrency || _$$S2.USD), [e.upcomingInvoice, e.planCurrency]);
  let r = i.formatMoney(e.upcomingInvoice?.total || 0, {
    showCents: !0,
    currencySign: "accounting"
  });
  let l = useMemo(() => e.upcomingInvoice ? e.planType === FOrganizationLevelType.TEAM ? getI18nString("admin_settings.upcoming_invoice_card.amount_due_with_date", {
    amount: r,
    dueAt: Z4(e.upcomingInvoice)
  }) : getI18nString("admin_settings.upcoming_invoice_card.subheading.will_be_issued", {
    issuedAt: tB(e.upcomingInvoice)
  }) : r, [e.planType, e.upcomingInvoice, r]);
  let o = e.previewInvoice;
  let d = useMemo(() => {
    if (!e.upcomingInvoice) return jsx($z, {
      variant: "secondary",
      onClick: e.viewAllInvoices,
      trackingProperties: {
        trackingDescriptor: _$$c.VIEW_ALL
      },
      children: getI18nString("admin_settings.upcoming_invoice_card.view_all_button_label")
    });
    {
      let t = e.upcomingInvoice.id;
      return jsx($z, {
        variant: "secondary",
        onClick: () => {
          o(t);
        },
        trackingProperties: {
          trackingDescriptor: _$$c.VIEW_INVOICE
        },
        children: getI18nString("admin_settings.upcoming_invoice_card.preview_button_label")
      });
    }
  }, [o, e.viewAllInvoices, e.upcomingInvoice]);
  let c = useMemo(() => {
    let a = {
      id: "no-new-seats",
      icon: jsx(_$$U, {}),
      text: getI18nString("admin_settings.upcoming_invoice_card.line_no_new_charges")
    };
    if (!e.upcomingInvoice) return [a];
    let s = _$$e4(e.upcomingInvoice);
    let r = x$(e.upcomingInvoice);
    let l = Hx(e.upcomingInvoice);
    let o = iy(e.upcomingInvoice);
    let d = Bf(e.upcomingInvoice);
    let c = t && 0 !== s && e.manageMonthlySeats && e.planType === FOrganizationLevelType.TEAM && {
      onClick: e.manageMonthlySeats,
      ctaTrackingDescriptor: _$$c.MONTHLY_SEATS,
      ariaLabel: getI18nString("admin_settings.upcoming_invoice_card.manage_monthly_seats_aria_label")
    };
    let _ = e.planType === FOrganizationLevelType.TEAM ? {
      id: "monthly_seats",
      icon: jsx(_$$U, {}),
      text: getI18nString("admin_settings.upcoming_invoice_card.line_monthly_seats", {
        quantity: s,
        amount: i.formatMoney(r, {
          showCents: !0,
          currencySign: "accounting"
        })
      }),
      clickable: c
    } : null;
    let u = 0 !== l && e.planType === FOrganizationLevelType.TEAM ? {
      id: "seat_adjustments",
      icon: jsx(_$$S, {}),
      text: getI18nString("admin_settings.upcoming_invoice_card.line_one_time_charges", {
        amount: i.formatMoney(l, {
          showCents: !0,
          currencySign: "accounting"
        })
      })
    } : null;
    let m = 0 !== o && e.planType === FOrganizationLevelType.ORG ? {
      id: "org_adjustments",
      icon: jsx(_$$S, {}),
      text: getI18nString("admin_settings.upcoming_invoice_card.line_charges", {
        amount: i.formatMoney(o, {
          showCents: !0,
          currencySign: "accounting"
        })
      })
    } : null;
    let p = 0 !== d && e.planType === FOrganizationLevelType.ORG ? {
      id: "org_credits",
      icon: jsx(_$$s2, {}),
      text: getI18nString("admin_settings.upcoming_invoice_card.line_credits", {
        amount: i.formatMoney(d, {
          showCents: !0,
          currencySign: "accounting"
        })
      })
    } : null;
    let g = filterNotNullish([_, u, m, p]);
    return 0 === g.length ? [a] : g;
  }, [e.upcomingInvoice, i, e.planType, e.manageMonthlySeats, t]);
  return jsx(ew, {
    heading: a,
    subheading: l,
    headerRight: d,
    lines: c
  });
}
function eD() {
  return {
    key: "no_new_charges",
    icon: jsx(_$$U, {}),
    copy: getI18nString("plan_invoices.cost_breakdown.no_new_charges")
  };
}
function eM(e) {
  return {
    key: "issued_at",
    icon: jsx(_$$v, {}),
    copy: getI18nString("plan_invoices.invoice_date_with_value", {
      date: tB(e)
    })
  };
}
let eP = {
  title: {
    ..._$$g.textBodyLargeStrong,
    color: "x1akne3o",
    display: "xt0psk2",
    $$css: !0
  },
  lineCopy: {
    ..._$$g.textBodyLarge,
    color: "x1akne3o",
    marginTop: "xsj8jdm",
    $$css: !0
  }
};
function eU(e) {
  return jsxs("section", {
    className: "x78zum5 xdt5ytf xh8yej3 x1qjc9v5 x1yjdb4r x1bamp8i x1mxnbhz",
    children: [jsxs("div", {
      className: "x78zum5 x1qughib x6s0dn4 x1i71x30 xi4r6k5 x1n5zjp5",
      children: [jsxs("div", {
        className: "xxymvpz",
        "data-testid": "invoice-preview-title",
        children: [jsx("h2", {
          ...Ay.props(eP.title),
          children: e.title
        }), e.badge && jsxs("span", {
          className: "xuxw1ft xnfn54o",
          children: ["\xa0", e.badge]
        })]
      }), e.button]
    }), jsx("div", {
      className: "x78zum5 xdt5ytf x1nn34kk",
      children: e.lines.map(({
        key: e,
        icon: t,
        copy: a
      }) => createElement("div", {
        className: "x78zum5 x1uil0o3 x1nfngrj",
        key: e,
        "data-testid": `invoice-preview-line-${e}`
      }, jsx("span", {
        className: "xnei2rj xjwf9q1",
        "aria-hidden": !0,
        children: t
      }), jsx("span", {
        ...Ay.props(eP.lineCopy),
        children: a
      })))
    })]
  });
}
function eF(e) {
  return jsx(Button, {
    onClick: () => {
      e.viewAllInvoices();
    },
    variant: "secondary",
    children: getI18nString("plan_invoices.view_all")
  });
}
function eq(e) {
  return jsx($z, {
    onClick: () => {
      e.viewInvoice(e.invoice.id);
    },
    variant: "secondary",
    trackingProperties: {
      trackingDescriptor: _$$c.VIEW_INVOICE
    },
    children: getI18nString("plan_invoices.view_button_label")
  });
}
function e$(e) {
  let t = _$$R();
  let a = useMemo(() => e.invoice.is_empty ? [eM(e.invoice), eD()] : _k(e.invoice) ? v()([eM(e.invoice), function (e) {
    let t = new CurrencyFormatter(e.currency);
    return {
      key: "charges",
      icon: jsx(_$$S, {}),
      copy: getI18nString("plan_invoices.invoice_preview.charges_amount", {
        amount: t.formatMoney(iy(e), {
          showCents: !0,
          currencySign: "accounting"
        })
      })
    };
  }(e.invoice), function (e) {
    let t = new CurrencyFormatter(e.currency);
    let a = Bf(e);
    return 0 !== a && {
      key: "credits",
      icon: jsx(_$$s2, {}),
      copy: getI18nString("plan_invoices.invoice_preview.credits_amount", {
        amount: t.formatMoney(a, {
          showCents: !0,
          currencySign: "accounting"
        })
      })
    };
  }(e.invoice)]) : v()([eM(e.invoice), function (e) {
    let t = new CurrencyFormatter(e.currency);
    let a = Hx(e);
    let s = GK(e);
    return (0 !== a || 0 !== s) && {
      key: "seat_adjustments",
      icon: jsx(_$$S, {}),
      copy: getI18nString("plan_invoices.invoice_preview.seat_adjustments_amount", {
        amount: t.formatMoney(a, {
          showCents: !0,
          currencySign: "accounting"
        })
      })
    };
  }(e.invoice), function (e) {
    let t = new CurrencyFormatter(e.currency);
    let a = e.plan_parent_type === FOrganizationLevelType.TEAM && e.billing_interval === FBillingPeriodType.MONTH;
    let s = t.formatMoney(x$(e), {
      showCents: !0,
      currencySign: "accounting"
    });
    return {
      key: "seats",
      icon: jsx(_$$w, {}),
      copy: a ? getI18nString("plan_invoices.invoice_preview.renewing_monthly_seats_amount", {
        amount: s
      }) : getI18nString("plan_invoices.invoice_preview.renewing_seats_amount", {
        amount: s
      })
    };
  }(e.invoice)]), [e.invoice]);
  return jsx(eU, {
    title: zz(e.invoice),
    badge: jsx(_$$Z, {
      invoice: e.invoice,
      currentDate: t
    }),
    button: jsx(eq, {
      invoice: e.invoice,
      viewInvoice: e.viewInvoice
    }),
    lines: a
  });
}
function eB(e) {
  return e.invoice && e.invoice.state === qH.PENDING ? jsx(e$, {
    invoice: e.invoice,
    viewInvoice: e.viewInvoice
  }) : jsx(eU, {
    title: getI18nString("plan_invoices.invoice_preview.empty_heading"),
    button: jsx(eF, {
      viewAllInvoices: e.viewAllInvoices
    }),
    lines: [{
      key: "no_upcoming_invoices",
      icon: jsx(_$$v, {}),
      copy: getI18nString("plan_invoices.invoice_preview.no_upcoming_invoices")
    }, eD()]
  });
}
let eG = withTrackedClick(_$$$);
function ez(e) {
  let {
    onReactivateClick
  } = e;
  let a = useTeamPlanFeatures().unwrapOr(null);
  let i = getFeatureFlags().scheduled_cancellation_enabled;
  let o = useCallback(() => {
    onReactivateClick();
  }, [onReactivateClick]);
  return jsxs(Yy, {
    variant: i ? "warn" : "danger",
    "data-testid": "plan-canceled-banner",
    children: [jsx(_$$Q, {
      title: i ? getI18nString("plan_invoices.plan_canceled.title_v2", {
        planName: a?.name ?? "",
        expiresAt: e.expiresAt
      }) : getI18nString("plan_invoices.plan_canceled.title"),
      children: i ? null : getI18nString("plan_invoices.plan_canceled.subtitle", {
        expiresAt: e.expiresAt
      })
    }), jsx(eG, {
      onClick: o,
      trackingProperties: {
        trackingDescriptor: i ? _$$c.REACTIVATE_PLAN : _$$c.REACTIVATE_YOUR_PROFESSIONAL_PLAN,
        orgId: a?.type === FOrganizationLevelType.ORG ? a.key.parentId : void 0,
        teamId: a?.type === FOrganizationLevelType.TEAM ? a.key.parentId : void 0
      },
      children: i ? getI18nString("plan_invoices.reactivate_button_label_v2") : getI18nString("plan_invoices.reactivate_button_label")
    })]
  });
}
var eY = eH;
var e2 = (e => (e.TRUE_UP_REVIEW_BILLING_GROUPS = "true_up_review_billing_groups", e.TRUE_UP_REVIEW = "true_up_review", e.MANAGE_SEATS = "manage_seats", e))(e2 || {});
function e4(e) {
  return e.trueUpState === fx.LOCKED ? jsx(_$$U, {}) : e.trueUpState === fx.REVIEW ? jsx(_$$a, {}) : jsx(_$$b2, {});
}
function e5(e) {
  let t = useMemo(() => gl(e.invoices, {
    allowLegacyOrgAnnual: !0
  }), [e.invoices]);
  let a = t ? Dc(t) : null;
  return t && a ? jsx(e3, {
    ...eY()(e, "invoices"),
    invoice: t,
    trueUpState: a
  }) : null;
}
function e3(e) {
  var t;
  let a = _$$R();
  let d = RG();
  let c = function (e) {
    let t = useDispatch();
    let a = RG();
    return useMemo(() => e.trueUpState === fx.LOCKED ? [] : e.trueUpState === fx.REVIEW && TV(e.invoice, !!e.orgHasAutomaticUpcomingInvoice) ? a ? [{
      key: "true_up_review_billing_groups",
      renderContent: () => jsx(_$$$, {
        onClick: () => {
          t(showModalHandler({
            type: _$$A2,
            data: {
              orgId: e.planId,
              invoice: e.invoice
            }
          }));
        },
        children: getI18nString("org_admin_details.billing_banner.details.upcoming_invoice.button.billing_groups")
      })
    }] : [{
      key: "manage_seats",
      renderContent: () => jsx(_$$$, {
        onClick: () => {
          t(sf({
            view: "orgAdminSettings",
            orgAdminSettingsViewTab: DashboardSection.MEMBERS,
            orgAdminMembersTabSort: {
              columnName: ColumnName.BILLABLE_PRODUCT_SEAT,
              isReversed: !1
            }
          }));
        },
        children: getI18nString("org_admin_details.billing_banner.details.upcoming_invoice.button.manage_seats")
      })
    }, {
      key: "true_up_review",
      renderContent: () => jsx(_$$$, {
        onClick: () => {
          t(showModalHandler({
            type: _$$H,
            data: {
              orgId: e.planId,
              invoice: e.invoice
            }
          }));
        },
        children: getI18nString("org_admin_details.billing_banner.details.upcoming_invoice.button.review_and_finalize_invoice")
      })
    }] : [], [e.invoice, e.orgHasAutomaticUpcomingInvoice, e.planId, e.trueUpState, t, a]);
  }({
    planId: e.planId,
    trueUpState: e.trueUpState,
    invoice: e.invoice,
    orgHasAutomaticUpcomingInvoice: e.orgHasAutomaticUpcomingInvoice
  });
  let _ = (t = {
    trueUpState: e.trueUpState,
    orgHasAutomaticUpcomingInvoice: e.orgHasAutomaticUpcomingInvoice,
    isLicenseGroupsActive: d,
    invoice: e.invoice
  }).trueUpState === fx.REVIEW && TV(t.invoice, !!t.orgHasAutomaticUpcomingInvoice) ? t.isLicenseGroupsActive ? getI18nString("org_admin_details.billing_banner.upcoming_invoice.subtitle.true_up.billing_groups.seat_rename") : getI18nString("plan_invoices.review_invoice.subtitle") : null;
  let u = function (e) {
    let t = _k(e.invoice);
    let a = tB(e.invoice);
    if (e.trueUpState === fx.LOCKED) return getI18nString("plan_invoices.locked_invoice.title", {
      date: a
    });
    if (e.trueUpState !== fx.REVIEW) return returnSecond(e.trueUpState, "");
    {
      let n = !!e.orgHasAutomaticUpcomingInvoice;
      let s = TV(e.invoice, n);
      return t || n ? s ? t ? getI18nString("plan_invoices.review_invoice.title_trueup", {
        date: a
      }) : getI18nString("plan_invoices.review_invoice.title_renewal", {
        date: a
      }) : t ? getI18nString("plan_invoices.review_invoice.title_trueup_non_actionable", {
        date: a
      }) : getI18nString("plan_invoices.review_invoice.title_renewal_non_actionable", {
        date: a
      }) : getI18nString("plan_invoices.review_invoice.title_renewal_non_automatic", {
        date: a
      });
    }
  }({
    trueUpState: e.trueUpState,
    invoice: e.invoice,
    orgHasAutomaticUpcomingInvoice: e.orgHasAutomaticUpcomingInvoice,
    currentDate: a
  });
  let m = e.trueUpState === fx.LOCKED ? "success" : "warn";
  let p = "warn" === m ? {
    variant: m
  } : {
    variant: m,
    icon: jsx(e4, {
      trueUpState: e.trueUpState
    })
  };
  return jsxs(Yy, {
    ...p,
    children: [jsx(_$$Q, {
      "data-testid": "billing-banner-header",
      title: u,
      children: _
    }), c.map(({
      key: e,
      renderContent: t
    }) => jsx(Fragment, {
      children: t()
    }, e))]
  });
}
export function $$e80(e) {
  let t = vt();
  let a = useCallback(() => getFeatureFlags().admin_ai_addon, []);
  let d = useDispatch();
  let c = useMemo(() => gl(e.invoices, {
    allowLegacyOrgAnnual: !t(),
    allowProratedOrgAnnual: !t()
  }), [t, e.invoices]);
  let g = useMemo(() => iv(e.invoices), [e.invoices]);
  let h = useMemo(() => RK(e.invoices), [e.invoices]);
  let x = a() && isDevEnvironment();
  useEffect(() => {
    x && _$$C();
  }, [x]);
  return jsx(_$$Q2, {
    minContentWidth: 896,
    maxContentWidth: 1600,
    children: jsxs("div", {
      className: _$$s.flex.flexColumn.itemsStretch.gap24.$,
      "data-testid": "billing-overview-content",
      children: [x && jsxs(Yy, {
        children: [jsx(_$$Q, {
          title: "Development placeholder",
          children: "Development placeholder"
        }), jsx(_$$$, {
          onClick: () => {
            d(showModalHandler({
              type: _$$e()
            }));
          },
          children: "Add AI credits"
        })]
      }), e.contractStartBanner, jsx(_$$_, {
        entryPoint: _$$Y.BILLING
      }), e.planCanceledProps && jsx(ez, {
        ...e.planCanceledProps
      }), jsx(X, {}), jsx(e5, {
        planId: e.planId,
        invoices: e.invoices,
        orgHasAutomaticUpcomingInvoice: e.orgHasAutomaticUpcomingInvoice
      }), t() ? jsxs("div", {
        className: "xrvj5dj xdrqwvw x1excjyp xpezlj7",
        children: [jsxs("div", {
          className: "x78zum5 xdt5ytf x1excjyp",
          children: [e.showPlanSubscriptionCard && jsx(ek, {
            adjustRenewalSeats: e.adjustRenewalSeats,
            annualSeats: e.annualSeats,
            isELA: e.isELA,
            latestAnnualInvoice: g,
            manageAnnualSeats: e.manageAnnualSeats,
            planStarting: e.planStarting,
            planType: e.planType,
            previewInvoice: e.viewInvoice,
            renewalConfirmed: e.renewalConfirmed,
            shouldAutoRenew: e.shouldAutoRenew,
            upcomingAnnualInvoice: h,
            upcomingRenewalWillPause: e.upcomingRenewalWillPause,
            willCancelAt: e.planCanceledProps?.expiresAt ?? null
          }), jsx(eI, {
            planType: e.planType,
            upcomingInvoice: c,
            willCancelAt: e?.planCanceledProps?.expiresAt ?? null,
            previewInvoice: e.viewInvoice,
            viewAllInvoices: e.viewAllInvoices,
            planCurrency: e.planCurrency || null,
            manageMonthlySeats: e.manageMonthlySeats
          })]
        }), jsx(em, {
          isELA: e.isELA,
          adjustAnnualSeatsAction: e.adjustAnnualSeatsAction,
          isAnnualProPlan: e.isAnnualProPlan
        })]
      }) : jsxs("div", {
        className: _$$s.flex.flexWrap.gap24.$,
        children: [jsx("div", {
          className: "billing_overview_content--seatCountsContainer--WMEhZ",
          children: jsx(z, {
            seatCountsWithSplit: e.seatCountsWithSplit,
            isELA: e.isELA,
            onManageClick: e.manageSeatCounts,
            adjustAnnualSeatsAction: e.adjustAnnualSeatsAction
          })
        }), jsx("div", {
          className: "billing_overview_content--invoicePreviewContainer--qzEH1",
          children: jsx(eB, {
            invoice: c,
            viewAllInvoices: e.viewAllInvoices,
            viewInvoice: e.viewInvoice
          })
        })]
      })]
    })
  });
}
jH.spacer4;
export const i = $$e80;