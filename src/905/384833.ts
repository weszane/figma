import { jsx, jsxs } from "react/jsx-runtime";
import { Suspense, useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lQ } from "../905/934246";
import { isNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { useModalManager } from "../905/437088";
import { ModalRootComponent, ModalFormContents } from "../905/38914";
import { DialogBody, DialogHiddenTitle, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { ButtonPrimitive } from "../905/632989";
import m from "classnames";
import g from "lodash-es/mapValues";
import _ from "../vendor/781591";
import y from "../vendor/523035";
import { trackEventAnalytics } from "../905/449184";
import { a as _$$a } from "../905/361543";
import { C as _$$C } from "../905/641057";
import { r as _$$r } from "../905/786998";
import { ErrorBoundaryCrash, errorBoundaryFallbackTypes } from "../905/751457";
import { linkWithTracking } from "../figma_app/637027";
import { z as _$$z } from "../905/284530";
import { b as _$$b } from "../figma_app/246400";
import { s as _$$s } from "../cssbuilder/589278";
import { $z } from "../figma_app/617427";
import { getI18nString, renderI18nText } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { styleBuilderInstance } from "../905/941192";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { AutoLayout } from "../905/470281";
import { Pf } from "../905/590952";
import { TextWithTruncation } from "../905/984674";
import { T as _$$T } from "../905/292816";
import { zz } from "../figma_app/80683";
import { selectViewAction } from "../905/929976";
import { UpgradeAction } from "../905/370443";
import { TrackingProvider } from "../figma_app/831799";
import { Y$ } from "../905/84777";
import { YL, Zz } from "../figma_app/84966";
import { ViewAccessTypeEnum } from "../905/513035";
import { collaboratorSet } from "../905/332483";
import { compareProductAccessTypes } from "../figma_app/217457";
import { jL } from "../figma_app/658324";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useSuspendCurrentPrivilegedPlan } from "../figma_app/465071";
import { DashboardSection } from "../figma_app/650409";
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
  return jsx(ErrorBoundaryCrash, {
    boundaryKey: "OrgRenewalModal",
    fallback: errorBoundaryFallbackTypes.DEFAULT_FULL_PAGE,
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
  let t = useModalManager(e);
  let i = useSuspendCurrentPrivilegedPlan({
    reportErrorsToTeam: _$$e.SCALE
  });
  let p = i.key.parentId;
  let m = zz(p, FOrganizationLevelType.ORG);
  let h = A()(m, ViewAccessTypeEnum.VIEW);
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
  let V = useMemo(() => collaboratorSet.dict(e => (g[e] ?? 0) + (y[e] || 0)), [g, y]);
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
        n(VisualBellActions.enqueue({
          type: "update-org-renewal-counts",
          icon: VisualBellIcon.CHECK_WITH_CIRCLE,
          message: getI18nString("billing_modals.renewal.seats_at_renewal_confirmed"),
          onDismiss: lQ
        }));
        t();
      }).catch(e => {
        n(VisualBellActions.enqueue({
          type: "update-org-renewal-counts",
          message: resolveMessage(e, getI18nString("general.an_error_occurred")),
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
      errorMessage: getI18nString("billing_modals.org_renewal.price_error")
    }];
    let a = collaboratorSet.dict(e => isNullish(prices[e]) ? void 0 : (t[e] || 0) * prices[e].amount);
    return collaboratorSet.toArray().some(e => isNullish(a[e])) ? [null, {
      errorMessage: getI18nString("billing_modals.org_renewal.price_error")
    }] : [{
      id: "projectedCost",
      name: jsx(TextWithTruncation, {
        color: "secondary",
        children: getI18nString("billing_modals.org_renewal.table.header.projected_cost")
      }),
      textAlign: "right",
      gridColumnWidth: "92px",
      cellComponent: e => jsx(TextWithTruncation, {
        color: "secondary",
        truncate: !0,
        children: localizeCurrency.formatMoney(a[e] || 0, {
          showCents: !1
        })
      }),
      getAggregate: () => jsx(TextWithTruncation, {
        truncate: !0,
        children: localizeCurrency.formatMoney(b()(Object.values(a)), {
          showCents: !1
        })
      })
    }, {}];
  }(i.key, V);
  let en = getI18nString("billing_modals.renewal.header", {
    date: e.renewalDate,
    planName: i.name
  });
  useEffect(() => {
    ei && trackEventAnalytics("seat_purchasing.non_blocking_fetch_error", {
      price_fetch_error: !0,
      view: "org_renewal_modal"
    }, {
      forwardToDatadog: !0
    });
  }, [ei]);
  return jsx(TrackingProvider, {
    name: "Org Renewal Modal",
    properties: {
      orgId: p
    },
    children: jsx(ModalRootComponent, {
      manager: t,
      width: 600,
      children: jsxs(ModalFormContents, {
        onSubmit: () => {
          O(!0);
          Q(y);
        },
        children: [jsxs(DialogBody, {
          padding: {
            top: 40,
            left: 24,
            right: 24,
            bottom: 24
          },
          children: [jsxs(AutoLayout, {
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
            }), jsx(DialogHiddenTitle, {
              children: en
            }), jsx("div", {
              className: _$$s.textHeadingMedium.$,
              children: en
            }), jsx("div", {
              className: _$$s.textBodyMedium.colorTextSecondary.$,
              children: getI18nString("billing_modals.org_renewal.description")
            })]
          }), jsx(_$$C, {
            styling: {
              minColumnWidth: 48,
              columnGaps: ["default", 40]
            },
            items: collaboratorSet.toArray().sort(compareProductAccessTypes),
            columns: [{
              id: "billableProductKey",
              name: jsx(TextWithTruncation, {
                color: "secondary",
                truncate: !0,
                children: getI18nString("billing_modals.renewal.table.header.seat_type")
              }),
              textAlign: "left",
              gridColumnWidth: "auto",
              cellComponent: e => jsx(_$$T, {
                contractPriceType: Y$.AT_NEXT_RENEWAL,
                planKey: i.key,
                seatType: e
              }),
              getAggregate: () => getI18nString("billing_modals.org_renewal.table.total_seats")
            }, {
              id: "assigned",
              name: jsx(_$$b, {
                text: jsx("span", {
                  className: _$$s.textBodyMedium.colorTextSecondary.$,
                  children: getI18nString("billing_modals.org_renewal.table.header.assigned")
                }),
                popoverText: getI18nString("billing_modals.renewal.table.tooltip.assigned", {
                  renewalDate: e.renewalDate
                })
              }),
              textAlign: "right",
              cellComponent: e => jsx(TextWithTruncation, {
                color: "secondary",
                truncate: !0,
                children: g[e]
              })
            }, {
              id: "unassigned",
              name: jsx(_$$b, {
                text: jsx("span", {
                  className: _$$s.textBodyMedium.colorTextSecondary.$,
                  children: getI18nString("billing_modals.org_renewal.table.header.unassigned")
                }),
                popoverText: renderI18nText("billing_modals.renewal.table.tooltip.unassigned", {
                  learnMoreLink: jsx(linkWithTracking, {
                    trusted: !0,
                    target: "_blank",
                    href: "https://help.figma.com/hc/articles/360040328293",
                    children: renderI18nText("general.learn_more")
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
              name: jsx(TextWithTruncation, {
                color: "secondary",
                children: getI18nString("billing_modals.org_renewal.table.header.total")
              }),
              gridColumnWidth: "48px",
              textAlign: "right",
              cellComponent: e => jsx(TextWithTruncation, {
                color: "secondary",
                truncate: !0,
                children: V[e]
              }),
              getAggregate: () => jsx(TextWithTruncation, {
                truncate: !0,
                children: b()(Object.values(V))
              })
            }, ...(et ? [et] : [])]
          }), jsx(es, {
            renewalDate: e.renewalDate,
            onClose: e.onClose
          }), ei && jsx("div", {
            className: _$$s.pt16.$,
            children: jsx(TextWithTruncation, {
              color: "danger",
              children: ei
            })
          })]
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx($z, {
              variant: "secondary",
              onClick: e.onClose,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.CANCEL
              },
              children: getI18nString("general.cancel")
            }), jsx($z, {
              type: "submit",
              disabled: C,
              trackingProperties: {
                trackingDescriptor: UpgradeAction.CONFIRM_RENEWAL
              },
              children: getI18nString("billing_modals.renewal.cta.confirm_seat_renewal")
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
    children: renderI18nText("billing_modals.org_renewal.disclaimer_banner.these_numbers_may_change", {
      date: e.renewalDate,
      manageAssignedSeatsLink: jsx(ButtonPrimitive, {
        className: h()(h7, _$$s.inline.$),
        style: styleBuilderInstance.add({
          backgroundColor: "unset"
        }).$,
        onClick: function () {
          ("orgAdminSettings" !== i.view || i.orgAdminSettingsViewTab !== DashboardSection.MEMBERS) && t(selectViewAction({
            view: "orgAdminSettings",
            orgAdminSettingsViewTab: DashboardSection.MEMBERS
          }));
          e.onClose();
        },
        children: getI18nString("billing_modals.org_renewal.disclaimer_banner.manage_assigned_seats")
      })
    })
  });
}
export const Y = $$er0;