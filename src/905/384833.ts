import { jsx, jsxs } from "react/jsx-runtime";
import { Suspense, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { lQ } from "../905/934246";
import { isNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { hS } from "../905/437088";
import { bL, Rq } from "../905/38914";
import { nB, r1, wi, jk } from "../figma_app/272243";
import { E as _$$E } from "../905/632989";
import m from "classnames";
import g from "lodash-es/mapValues";
import _ from "../vendor/781591";
import y from "../vendor/523035";
import { sx } from "../905/449184";
import { a as _$$a } from "../905/361543";
import { C as _$$C } from "../905/641057";
import { r as _$$r } from "../905/786998";
import { tH, H4 } from "../905/751457";
import { Us } from "../figma_app/637027";
import { z as _$$z } from "../905/284530";
import { b as _$$b } from "../figma_app/246400";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { t as _$$t, tx } from "../905/303541";
import { J as _$$J } from "../905/231762";
import { sx as _$$sx } from "../905/941192";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { Y as _$$Y } from "../905/830372";
import { Pf } from "../905/590952";
import { E as _$$E2 } from "../905/984674";
import { T as _$$T } from "../905/292816";
import { zz } from "../figma_app/80683";
import { sf } from "../905/929976";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { Y$ } from "../905/84777";
import { YL, Zz } from "../figma_app/84966";
import { Gu } from "../905/513035";
import { N_ } from "../905/332483";
import { AG } from "../figma_app/217457";
import { jL } from "../figma_app/658324";
import { FOrganizationLevelType } from "../figma_app/191312";
import { XP } from "../figma_app/465071";
import { J7 } from "../figma_app/650409";
import { Eh } from "../figma_app/617654";
import { Ro } from "../figma_app/805373";
import { N as _$$N } from "../905/809096";
import { h7 } from "../905/172516";
import { A as _$$A } from "../5724/663128";
var h = m;
var f = g;
var A = _;
var b = y;
export function $$er0(e) {
  return jsx(tH, {
    boundaryKey: "OrgRenewalModal",
    fallback: H4.DEFAULT_FULL_PAGE,
    hasCustomWASMBuild: !1,
    team: _$$e.BILLING_EXPERIENCE,
    children: jsx(Suspense, {
      fallback: jsx(_$$N, {
        hiddenTitle: "Org Renewal Modal",
        estimatedWidth: 600,
        estimatedHeight: 563
      }),
      children: jsx(ea, {
        ...e
      })
    })
  });
}
function ea(e) {
  let t = hS(e);
  let i = XP({
    reportErrorsToTeam: _$$e.SCALE
  });
  let p = i.key.parentId;
  let m = zz(p, FOrganizationLevelType.ORG);
  let h = A()(m, Gu.VIEW);
  let g = f()(h, e => e?.assigned ?? 0);
  let _ = f()(h, e => e?.available ?? 0);
  let [y, S] = function (e, t, i) {
    let n = YL({
      parentId: e,
      type: FOrganizationLevelType.ORG
    }, t);
    let r = n?.surplus;
    return _$$a(r ?? i, {
      resetOnInitialStateChange: !!r
    });
  }(p, e.renewalDate, _);
  let [C, O] = useState(!1);
  let V = useMemo(() => N_.dict(e => (g[e] ?? 0) + (y[e] || 0)), [g, y]);
  let Q = function (e, t, i) {
    let n = useDispatch();
    return r => {
      Eh.updateOrgRenewalCounts({
        orgId: e,
        unassignedSeatCounts: r
      }).then(async () => {
        await jL({
          planType: FOrganizationLevelType.ORG,
          planId: e
        });
        n(_$$F.enqueue({
          type: "update-org-renewal-counts",
          icon: zX.CHECK_WITH_CIRCLE,
          message: _$$t("billing_modals.renewal.seats_at_renewal_confirmed"),
          onDismiss: lQ
        }));
        t();
      }).catch(e => {
        n(_$$F.enqueue({
          type: "update-org-renewal-counts",
          message: _$$J(e, _$$t("general.an_error_occurred")),
          error: !0
        }));
        i();
      });
    };
  }(p, () => {
    O(!1);
    e.onClose();
  }, () => {
    O(!1);
  });
  let [et, {
    errorMessage: ei
  }] = function (e, t) {
    let {
      prices,
      localizeCurrency
    } = Zz(e);
    if (!prices || !localizeCurrency) return [null, {
      errorMessage: _$$t("billing_modals.org_renewal.price_error")
    }];
    let a = N_.dict(e => isNullish(prices[e]) ? void 0 : (t[e] || 0) * prices[e].amount);
    return N_.toArray().some(e => isNullish(a[e])) ? [null, {
      errorMessage: _$$t("billing_modals.org_renewal.price_error")
    }] : [{
      id: "projectedCost",
      name: jsx(_$$E2, {
        color: "secondary",
        children: _$$t("billing_modals.org_renewal.table.header.projected_cost")
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
        children: localizeCurrency.formatMoney(b()(Object.values(a)), {
          showCents: !1
        })
      })
    }, {}];
  }(i.key, V);
  let en = _$$t("billing_modals.renewal.header", {
    date: e.renewalDate,
    planName: i.name
  });
  useEffect(() => {
    ei && sx("seat_purchasing.non_blocking_fetch_error", {
      price_fetch_error: !0,
      view: "org_renewal_modal"
    }, {
      forwardToDatadog: !0
    });
  }, [ei]);
  return jsx(fu, {
    name: "Org Renewal Modal",
    properties: {
      orgId: p
    },
    children: jsx(bL, {
      manager: t,
      width: 600,
      children: jsxs(Rq, {
        onSubmit: () => {
          O(!0);
          Q(y);
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
            dataTestId: "org-renewal-modal-header",
            children: [jsx("div", {
              className: _$$s.mb8.$,
              children: jsx(Ro, {
                size: Pf.XLARGE,
                entity: {
                  name: i.name,
                  imgUrl: i.imgUrl
                }
              })
            }), jsx(r1, {
              children: en
            }), jsx("div", {
              className: _$$s.textHeadingMedium.$,
              children: en
            }), jsx("div", {
              className: _$$s.textBodyMedium.colorTextSecondary.$,
              children: _$$t("billing_modals.org_renewal.description")
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
                children: _$$t("billing_modals.renewal.table.header.seat_type")
              }),
              textAlign: "left",
              gridColumnWidth: "auto",
              cellComponent: e => jsx(_$$T, {
                contractPriceType: Y$.AT_NEXT_RENEWAL,
                planKey: i.key,
                seatType: e
              }),
              getAggregate: () => _$$t("billing_modals.org_renewal.table.total_seats")
            }, {
              id: "assigned",
              name: jsx(_$$b, {
                text: jsx("span", {
                  className: _$$s.textBodyMedium.colorTextSecondary.$,
                  children: _$$t("billing_modals.org_renewal.table.header.assigned")
                }),
                popoverText: _$$t("billing_modals.renewal.table.tooltip.assigned", {
                  renewalDate: e.renewalDate
                })
              }),
              textAlign: "right",
              cellComponent: e => jsx(_$$E2, {
                color: "secondary",
                truncate: !0,
                children: g[e]
              })
            }, {
              id: "unassigned",
              name: jsx(_$$b, {
                text: jsx("span", {
                  className: _$$s.textBodyMedium.colorTextSecondary.$,
                  children: _$$t("billing_modals.org_renewal.table.header.unassigned")
                }),
                popoverText: tx("billing_modals.renewal.table.tooltip.unassigned", {
                  learnMoreLink: jsx(Us, {
                    trusted: !0,
                    target: "_blank",
                    href: "https://help.figma.com/hc/articles/360040328293",
                    children: tx("general.learn_more")
                  })
                })
              }),
              textAlign: "center",
              cellComponent: e => jsx("div", {
                className: _$$s.mxAuto.$,
                children: jsx(_$$r, {
                  value: y[e] || 0,
                  onChange: S(e)
                })
              })
            }, {
              id: "total",
              name: jsx(_$$E2, {
                color: "secondary",
                children: _$$t("billing_modals.org_renewal.table.header.total")
              }),
              gridColumnWidth: "48px",
              textAlign: "right",
              cellComponent: e => jsx(_$$E2, {
                color: "secondary",
                truncate: !0,
                children: V[e]
              }),
              getAggregate: () => jsx(_$$E2, {
                truncate: !0,
                children: b()(Object.values(V))
              })
            }, ...(et ? [et] : [])]
          }), jsx(es, {
            renewalDate: e.renewalDate,
            onClose: e.onClose
          }), ei && jsx("div", {
            className: _$$s.pt16.$,
            children: jsx(_$$E2, {
              color: "danger",
              children: ei
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
              children: _$$t("general.cancel")
            }), jsx($z, {
              type: "submit",
              disabled: C,
              trackingProperties: {
                trackingDescriptor: _$$c.CONFIRM_RENEWAL
              },
              children: _$$t("billing_modals.renewal.cta.confirm_seat_renewal")
            })]
          })
        })]
      })
    })
  });
}
function es(e) {
  let t = useDispatch();
  let i = useSelector(e => e.selectedView);
  return jsx(_$$z, {
    variant: "brand",
    orientation: "vertical",
    iconSrc: _$$A,
    children: tx("billing_modals.org_renewal.disclaimer_banner.these_numbers_may_change", {
      date: e.renewalDate,
      manageAssignedSeatsLink: jsx(_$$E, {
        className: h()(h7, _$$s.inline.$),
        style: _$$sx.add({
          backgroundColor: "unset"
        }).$,
        onClick: function () {
          ("orgAdminSettings" !== i.view || i.orgAdminSettingsViewTab !== J7.MEMBERS) && t(sf({
            view: "orgAdminSettings",
            orgAdminSettingsViewTab: J7.MEMBERS
          }));
          e.onClose();
        },
        children: _$$t("billing_modals.org_renewal.disclaimer_banner.manage_assigned_seats")
      })
    })
  });
}
export const Y = $$er0;