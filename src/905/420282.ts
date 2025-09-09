import { jsx, jsxs } from "react/jsx-runtime";
import { Suspense, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { isNotNullish, isNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { nB, r1, wi, jk } from "../figma_app/272243";
import { N as _$$N } from "../905/438674";
import { E as _$$E } from "../905/632989";
import m from "classnames";
import g from "../vendor/523035";
import { trackEventAnalytics } from "../905/449184";
import { a as _$$a } from "../905/361543";
import { C as _$$C } from "../905/641057";
import { r as _$$r } from "../905/786998";
import { tH, H4 } from "../905/751457";
import { z as _$$z } from "../905/284530";
import { b as _$$b } from "../figma_app/246400";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx as _$$sx } from "../905/941192";
import { Y as _$$Y } from "../905/830372";
import { Pf } from "../905/590952";
import { In } from "../905/672640";
import { E as _$$E2 } from "../905/984674";
import { T as _$$T } from "../905/292816";
import { k as _$$k } from "../figma_app/618031";
import { sf } from "../905/929976";
import { H3 } from "../figma_app/920435";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { Y$ } from "../905/84777";
import { YL, Zz, $$in } from "../figma_app/84966";
import { ProductAccessTypeEnum } from "../905/513035";
import { N_ } from "../905/332483";
import { AG } from "../figma_app/217457";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useSuspendCurrentPrivilegedPlan } from "../figma_app/465071";
import { DashboardSections } from "../905/548208";
import { Ib } from "../905/129884";
import { Ro } from "../figma_app/805373";
import { N as _$$N2 } from "../905/809096";
import { g as _$$g } from "../905/119656";
import { h7 } from "../905/172516";
import { A as _$$A } from "../5724/663128";
var h = m;
var f = g;
export function $$Q0(e) {
  let t = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: _$$e.SCALE
  }).key.parentId;
  return jsx(tH, {
    boundaryKey: "TeamRenewalModal",
    fallback: H4.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: !1,
    team: _$$e.BILLING_EXPERIENCE,
    children: jsx(fu, {
      name: "Team Renewal Modal",
      properties: {
        teamId: t
      },
      children: jsx(Suspense, {
        fallback: jsx(_$$N2, {
          hiddenTitle: "Team Renewal Modal",
          estimatedWidth: 600,
          estimatedHeight: 563
        }),
        children: jsx(J, {
          ...e
        })
      })
    })
  });
}
function J(e) {
  let t = useDispatch();
  let i = hS(e);
  let p = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: _$$e.SCALE
  });
  let m = _$$k();
  let h = useSelector(e => e.teamBilling);
  let g = p.key.parentId;
  let v = _$$g(h.summary.total_upgraded_user_counts, {
    throwOnError: !0
  });
  let I = YL({
    parentId: g,
    type: FOrganizationLevelType.TEAM
  }, e.renewalDate);
  let C = I?.total;
  let [D, M] = function (e, t, i) {
    let n = useSelector(e => e.teamBilling);
    let r = _$$g(n.summary.annual_seats, {
      throwOnError: !1
    });
    !i && isNotNullish(r[ProductAccessTypeEnum.COLLABORATOR]) && isNotNullish(t[ProductAccessTypeEnum.COLLABORATOR]) && r[ProductAccessTypeEnum.COLLABORATOR] > t[ProductAccessTypeEnum.COLLABORATOR] && (r[ProductAccessTypeEnum.COLLABORATOR] = t[ProductAccessTypeEnum.COLLABORATOR]);
    return _$$a(e ?? r);
  }(C, v, m);
  let [W, q] = useState(!1);
  let [Z, {
    errorMessage: X
  }] = function (e, t) {
    let {
      prices,
      localizeCurrency
    } = Zz(e);
    if (!prices || !localizeCurrency) return [null, {
      errorMessage: getI18nString("billing_modals.org_renewal.price_error")
    }];
    let a = N_.dict(e => isNullish(prices[e]) ? void 0 : (t[e] || 0) * prices[e].amount);
    return N_.toArray().some(e => isNullish(a[e])) ? [null, {
      errorMessage: getI18nString("billing_modals.org_renewal.price_error")
    }] : [{
      id: "projectedCost",
      name: jsx(_$$E2, {
        color: "secondary",
        children: getI18nString("billing_modals.team_renewal.table.header.renewal_cost")
      }),
      textAlign: "right",
      gridColumnWidth: "92px",
      cellComponent: e => jsx(_$$E2, {
        color: "secondary",
        truncate: !0,
        children: localizeCurrency.formatMoney(a[e] || 0, {
          showCents: !1
        })
      }),
      getAggregate: () => jsx(_$$E2, {
        truncate: !0,
        children: localizeCurrency.formatMoney(f()(Object.values(a)), {
          showCents: !1
        })
      })
    }, {}];
  }(p.key, D);
  useEffect(() => {
    X && trackEventAnalytics("seat_purchasing.non_blocking_fetch_error", {
      price_fetch_error: !0,
      view: "team_renewal_modal"
    }, {
      forwardToDatadog: !0
    });
  }, [X]);
  let Q = getI18nString("billing_modals.renewal.header", {
    date: e.renewalDate,
    planName: p.name
  });
  let J = f()(Object.values(D));
  let et = () => {
    q(!1);
    e.onClose();
  };
  let ei = () => {
    q(!1);
  };
  return jsx(bL, {
    manager: i,
    width: 600,
    children: jsxs(Rq, {
      onSubmit: () => {
        q(!0);
        H3({
          teamId: g,
          dispatch: t,
          annualSeatCounts: D,
          onSuccess: et,
          onFailure: ei
        });
      },
      children: [jsxs(nB, {
        padding: {
          top: 40,
          left: 24,
          right: 24,
          bottom: 24
        },
        children: [jsxs(_$$Y, {
          direction: "vertical",
          spacing: 8,
          padding: {
            bottom: 6
          },
          dataTestId: "team-renewal-modal-header",
          children: [jsx("div", {
            className: _$$s.mb8.$,
            children: jsx(Ro, {
              size: Pf.XLARGE,
              entity: {
                name: p.name,
                imgUrl: p.imgUrl
              }
            })
          }), jsx(r1, {
            children: Q
          }), jsx("div", {
            className: _$$s.textHeadingMedium.$,
            children: Q
          }), jsx("div", {
            className: _$$s.textBodyMedium.colorTextSecondary.$,
            children: renderI18nText("billing_modals.team_renewal.description", {
              monthlySeats: jsx(_$$N, {
                href: "https://help.figma.com/hc/articles/360041061034-Manage-billing-on-the-Professional-plan",
                trusted: !0,
                newTab: !0,
                children: renderI18nText("billing_modals.team_renewal.description.monthly_seats")
              })
            })
          })]
        }), jsx(_$$C, {
          styling: {
            minColumnWidth: 48,
            columnGaps: ["default", 40]
          },
          items: N_.toArray().sort(AG),
          columns: [{
            id: "billableProductKey",
            name: jsx(_$$E2, {
              color: "secondary",
              truncate: !0,
              children: getI18nString("billing_modals.renewal.table.header.seat_type")
            }),
            textAlign: "left",
            gridColumnWidth: "auto",
            cellComponent: e => jsx(_$$T, {
              contractPriceType: Y$.AT_NEXT_RENEWAL,
              planKey: p.key,
              seatType: e,
              showMonthlyAnnualPriceComparison: !0
            }),
            getAggregate: () => getI18nString("billing_modals.team_renewal.table.total_renewed_seats")
          }, {
            id: "monthly",
            name: jsx("span", {
              className: _$$s.textBodyMedium.colorTextSecondary.$,
              children: getI18nString("billing_modals.team_renewal.table.header.monthly")
            }),
            textAlign: "right",
            cellComponent: e => jsx(_$$E2, {
              color: "secondary",
              truncate: !0,
              children: Math.max(0, (v[e] || 0) - (D[e] || 0))
            })
          }, {
            id: "annual",
            name: jsx(_$$b, {
              text: jsx("span", {
                className: _$$s.textBodyMedium.colorTextSecondary.$,
                children: getI18nString("billing_modals.team_renewal.table.header.annual")
              }),
              popoverText: getI18nString("billing_modals.renewal.table.tooltip.annual_seats", {
                renewalDate: e.renewalDate
              })
            }),
            textAlign: "center",
            cellComponent: e => jsxs("div", {
              className: _$$s.flex.flexRow.gap4.$,
              children: [e === ProductAccessTypeEnum.COLLABORATOR && !m && !C && jsxs("div", {
                "data-tooltip-type": Ib.TEXT,
                "data-tooltip": getI18nString("billing_modals.team_renewal.table.collab_tooltip"),
                "data-tooltip-timeout-delay": 500,
                "data-testid": "collab_annual_seat_tooltip",
                children: [jsx(In, {
                  icon: "info-32",
                  fill: "secondary"
                }), " "]
              }), jsx("div", {
                className: _$$s.mlAuto.$,
                children: jsx(_$$r, {
                  value: D[e] || 0,
                  onChange: M(e),
                  maxCount: $$in
                })
              })]
            }),
            getAggregate: () => jsx(_$$E2, {
              truncate: !0,
              children: J
            })
          }, ...(Z ? [Z] : [])]
        }), jsx(ee, {
          teamId: g,
          onClose: e.onClose,
          noAnnualSeat: 0 === J
        }), X && jsx("div", {
          className: _$$s.pt16.$,
          children: jsx(_$$E2, {
            color: "danger",
            children: X
          })
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx($z, {
            variant: "secondary",
            onClick: e.onClose,
            trackingProperties: {
              trackingDescriptor: _$$c.CANCEL
            },
            children: getI18nString("general.cancel")
          }), jsx($z, {
            type: "submit",
            disabled: W,
            trackingProperties: {
              trackingDescriptor: _$$c.CONFIRM_RENEWAL
            },
            children: J > 0 ? renderI18nText("billing_modals.renewal.cta.confirm_seat_renewal") : renderI18nText("billing_modals.renewal.cta.confirm_no_seat_renewal")
          })]
        })
      })]
    })
  });
}
function ee(e) {
  let t = useDispatch();
  let i = useSelector(e => e.selectedView);
  return jsx(_$$z, {
    variant: e.noAnnualSeat ? "warning" : "brand",
    orientation: "vertical",
    iconSrc: _$$A,
    dataTestId: "team-renewal-disclaimer",
    children: renderI18nText(e.noAnnualSeat ? "billing_modals.team_renewal.disclaimer_banner.no_seat" : "billing_modals.team_renewal.disclaimer_banner", {
      peoplePageLink: jsx(_$$E, {
        className: h()(h7, _$$s.inline.$),
        style: _$$sx.add({
          backgroundColor: "unset"
        }).$,
        onClick: function () {
          ("teamAdminConsole" !== i.view || i.teamAdminConsoleViewTab !== DashboardSections.MEMBERS) && t(sf({
            view: "teamAdminConsole",
            teamAdminConsoleViewTab: DashboardSections.MEMBERS,
            teamId: e.teamId
          }));
          e.onClose();
        },
        children: renderI18nText("billing_modals.team_renewal.disclaimer_banner.people_page")
      })
    })
  });
}
export const T = $$Q0;