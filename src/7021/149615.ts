import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createElement, useMemo, useState } from "react";
import { useDispatch } from "../vendor/514228";
import { isNullish } from "../figma_app/95419";
import { hS } from "../905/437088";
import { r as _$$r } from "../905/571838";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { sx } from "../905/941192";
import { bL } from "../905/38914";
import { Wk } from "../figma_app/272243";
import { C as _$$C } from "../905/520159";
import { a as _$$a } from "../905/964520";
import { A as _$$A } from "../905/251970";
import x from "classnames";
import { e6, $z } from "../figma_app/617427";
import { j as _$$j } from "../905/261906";
import { Ce } from "../905/156213";
import { fu } from "../figma_app/831799";
import { ud } from "../905/513035";
import { Hl, YT } from "../figma_app/217457";
import { a as _$$a2 } from "../905/584964";
import { vr } from "../figma_app/514043";
import { e0 } from "../905/696396";
import { Us } from "../figma_app/637027";
var b = x;
function v({
  children: e,
  currentStep: t,
  totalSteps: a,
  onNext: i,
  onBack: n,
  onSubmit: o,
  onCancel: r,
  manager: l,
  customFooter: x,
  width: v = 800,
  height: w = 570,
  useBillingRemodelEduStyling: y = !1,
  hideClose: T = !1
}) {
  return jsx(bL, {
    manager: l,
    width: v,
    children: jsx(Wk, {
      className: b()("stepped_modal--animatedModalFadeIn--HPT3R", {
        "stepped_modal--borderRadius--rmCvw": y
      }),
      children: jsxs("div", {
        className: _$$s.flex.flexGrow1.wFull.flexColumn.$,
        children: [!T && jsx("div", {
          className: _$$s.absolute.$,
          style: sx.add({
            top: "8px",
            right: "8px"
          }).$,
          children: jsx(e6, {
            htmlAttributes: {
              "data-testid": "close-modal-button"
            },
            onClick: r,
            className: "stepped_modal--closeButton--oBcLE",
            children: jsx(_$$A, {})
          })
        }), jsx("div", {
          className: _$$s.overflowAuto.flexGrow1.bb1.bSolid.colorBorder.$,
          children: jsx("div", {
            style: sx.add({
              height: `min(${w}px, calc(80vh - 80px))`,
              minHeight: `min(${w}px, calc(80vh - 80px))`,
              gridTemplateColumns: "285px 2fr"
            }).$,
            className: _$$s.grid.$,
            children: e
          })
        }), x || jsx("div", {
          className: _$$s.px16.flex.flexColumn.borderBox.justifyEnd.itemsCenter.gap8.itemSelfStretch.py16.wFull.$,
          children: jsxs("div", {
            className: _$$s.wFull.$,
            style: sx.add({
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center"
            }).$,
            children: [jsx("div", {
              className: _$$s.flex.$,
              children: t > 1 && jsx($z, {
                iconPrefix: jsx(_$$C, {}),
                variant: "ghost",
                onClick: n,
                children: renderI18nText("seat_billing_terms.modal.back")
              })
            }), jsx("div", {
              className: _$$s.flex.gap8.$,
              children: Array.from({
                length: a
              }, (e, a) => jsx("div", {
                className: _$$s.w8.h8.bRadiusFull.b1.$,
                style: sx.add({
                  backgroundColor: "var(--color-bg)"
                }).$$if(t === a + 1, {
                  backgroundColor: "var(--color-bg-inverse)",
                  borderColor: "var(--color-bg-inverse)",
                  borderWidth: "1.17px"
                }).$
              }, `modal-progress-${a + 1}`))
            }), jsx("div", {
              className: _$$s.flex.gap8.justifyEnd.$,
              children: t === a ? jsxs(Fragment, {
                children: [jsx($z, {
                  variant: "secondary",
                  onClick: r,
                  children: renderI18nText("seat_billing_terms.modal.not_now")
                }), jsx($z, {
                  variant: "primary",
                  onClick: o,
                  children: renderI18nText("seat_billing_terms.modal.accept")
                })]
              }) : jsx($z, {
                variant: "ghost",
                onClick: i,
                children: jsxs("div", {
                  className: _$$s.flex.itemsCenter.gap4.$,
                  children: [jsx("span", {
                    className: _$$s.colorText.alignCenter.textBodyMedium.$,
                    children: renderI18nText("seat_billing_terms.modal.next")
                  }), jsx(_$$a, {})]
                })
              })
            })]
          })
        })]
      })
    })
  });
}
function O(e) {
  return jsx("div", {
    className: _$$s.flex.justifyEnd.itemsStart.gap4.$,
    children: e.licenseTypes.map(t => createElement("div", {
      className: "x78zum5 xl56j7k x6s0dn4 xjwf9q1",
      key: t,
      role: "img",
      "data-testid": `icon-${t}`
    }, jsx(_$$j, {
      type: t,
      size: e.size
    })))
  });
}
let E = jsx(Us, {
  href: "https://figma.com/ssa",
  target: "_blank",
  trusted: !0,
  "data-testid": "seat-billing-terms-ssa-link",
  children: renderI18nText("seat_billing_terms.modal.tos.ssa_link_text")
});
let A = jsx(Us, {
  href: "https://help.figma.com/hc/articles/27468498501527-Updates-to-Figma-s-billing-and-pricing-prod-link",
  target: "_blank",
  trusted: !0,
  "data-testid": "seat-billing-terms-updated-seats-link",
  children: renderI18nText("seat_billing_terms.modal.tos.faq_link")
});
let I = jsx(Us, {
  href: "https://help.figma.com/hc/requests/new?ticket_form_id=360001731233",
  target: "_blank",
  trusted: !0,
  "data-testid": "seat-billing-terms-support-link",
  children: renderI18nText("seat_billing_terms.modal.tos.support_link_text")
});
function P({
  leftChildren: e,
  rightChildren: t
}) {
  return jsxs(Fragment, {
    children: [jsx("div", {
      style: sx.add({
        padding: "40px"
      }).$,
      className: _$$s.flex.flexColumn.itemsStart.gap16.flex1.br1.bSolid.colorBorder.colorBgPressed.$,
      children: e
    }), jsx("div", {
      className: _$$s.flex.flexColumn.flex1.itemSelfStretch.$,
      style: sx.add({
        padding: "40px"
      }).$,
      children: t
    })]
  });
}
function D() {
  return jsx("hr", {
    style: sx.add({
      gridColumn: "1 / -1",
      strokeWidth: "1px",
      stroke: "var(--color-border)"
    }).$,
    className: _$$s.m0.$
  });
}
function M({
  oldSeatType: e,
  newSeatType: t,
  prices: a,
  testId: n,
  billableProductKey: r,
  licenseTypes: l,
  iconSize: u,
  showDivider: m = !0
}) {
  let _ = useMemo(() => _$$a2(l), [l]);
  let p = a[r];
  if (isNullish(p)) return jsx(Fragment, {});
  let h = new vr(p.currency).formatMoney(p.amount);
  let g = r === ud.EXPERT ? getI18nString("seat_billing_terms.modal.seat_features.list.full", {
    productList: _
  }) : getI18nString("seat_billing_terms.modal.seat_features.list", {
    productList: _
  });
  return jsxs(Fragment, {
    children: [jsx("div", {
      className: _$$s.textBodyLarge.colorTextSecondary.$,
      children: e
    }), jsx("div", {
      className: _$$s.colorText.textBodyLarge.$,
      children: "\u2192"
    }), jsxs("div", {
      className: _$$s.flex.flexColumn.$,
      "data-testid": n,
      children: [jsxs("div", {
        className: _$$s.flex.justifyBetween.$,
        children: [jsx("div", {
          className: _$$s.textBodyLargeStrong.$,
          children: t
        }), jsx(O, {
          licenseTypes: l,
          size: u
        })]
      }), jsx("div", {
        className: _$$s.colorText.textBodyLarge.$,
        children: renderI18nText("seat_billing_terms.modal.price_per_month", {
          price: h
        })
      }), jsx("div", {
        className: _$$s.textBodyLarge.colorText.$,
        children: g
      })]
    }), m && jsx(D, {})]
  });
}
export function $$B0({
  orgId: e,
  organizationName: t,
  renewalDate: a,
  isEnterprise: o,
  prices: m,
  open: _,
  ...p
}) {
  let h = useDispatch();
  let [g, x] = useState(1);
  let b = Hl({
    visibility: YT.SEAT_DESCRIPTION
  });
  let f = () => {
    p.onClose();
    h(Ce());
  };
  let w = hS({
    open: _,
    onClose: f,
    preventUserClose: !0
  });
  let S = o ? getI18nString("seat_billing_terms.modal.plan_types.ent") : getI18nString("seat_billing_terms.modal.plan_types.org");
  let k = useMemo(() => [{
    bpKey: ud.EXPERT,
    oldSeatType: getI18nString("seat_billing_terms.modal.old_seat.design"),
    newSeatType: getI18nString("seat_billing_terms.modal.new_seat.full")
  }, {
    bpKey: ud.DEVELOPER,
    oldSeatType: getI18nString("seat_billing_terms.modal.old_seat.dev_mode"),
    newSeatType: getI18nString("seat_billing_terms.modal.new_seat.dev")
  }, {
    bpKey: ud.COLLABORATOR,
    oldSeatType: getI18nString("seat_billing_terms.modal.old_seat.figjam"),
    newSeatType: getI18nString("seat_billing_terms.modal.new_seat.collab")
  }].map(e => ({
    ...e,
    licenseTypes: b(e.bpKey)
  })), [b]);
  let q = useMemo(() => k.some(({
    licenseTypes: e
  }) => e.length > 4) ? "16" : "24", [k]);
  return a ? jsx(fu, {
    name: e0.SEAT_BILLING_TERMS_MODAL,
    properties: {
      orgId: e
    },
    children: jsx(v, {
      currentStep: g,
      totalSteps: 2,
      onNext: () => x(2),
      onBack: () => x(1),
      onSubmit: () => {
        p.onAccept();
        h(Ce());
      },
      onCancel: f,
      manager: w,
      hideClose: !0,
      children: 1 === g ? jsx(P, {
        leftChildren: jsxs(Fragment, {
          children: [jsx("div", {
            style: sx.add({
              width: "221px"
            }).$,
            className: _$$s.textHeadingLarge.colorText.$,
            children: renderI18nText("seat_billing_terms.modal.please_review")
          }), jsx("div", {
            className: _$$s.textBodyLargeStrong.colorText.$,
            children: renderI18nText("seat_billing_terms.modal.evolving_terms")
          }), jsx("span", {
            className: _$$s.textBodyLarge.itemSelfStretch.$,
            children: renderI18nText("seat_billing_terms.modal.confirm_terms")
          }), jsx("span", {
            className: _$$s.textBodyLarge.itemSelfStretch.$,
            children: renderI18nText("seat_billing_terms.modal.learn_more_about", {
              updatedSeatsLink: A
            })
          })]
        }),
        rightChildren: jsx("div", {
          className: _$$s.justifyCenter.itemsCenter.gap32.$,
          children: jsxs("div", {
            className: _$$s.flex.flexColumn.itemsStart.gap16.itemSelfStretch.$,
            children: [jsxs("div", {
              className: _$$s.flex.flexRow.colorText.textBodyMediumStrong.gap4.$,
              children: [jsx("div", {
                children: jsx(_$$r, {})
              }), jsx("div", {
                children: renderI18nText("seat_billing_terms.modal.renewal_price_update", {
                  organizationName: t,
                  renewalDate: a.toDate(),
                  planTier: S
                })
              })]
            }), jsx("div", {
              className: _$$s.grid.p24.b1.bSolid.colorBorder.$,
              style: sx.add({
                gridTemplateColumns: "auto auto 1fr",
                gridTemplateRows: "auto auto auto auto auto",
                gridColumnGap: "16px",
                gridRowGap: "24px"
              }).$,
              children: k.map(({
                bpKey: e,
                oldSeatType: t,
                newSeatType: a,
                licenseTypes: i
              }, n) => jsx(M, {
                oldSeatType: t,
                newSeatType: a,
                prices: m,
                billableProductKey: e,
                licenseTypes: i,
                iconSize: q,
                showDivider: n !== k.length - 1,
                testId: `${e}-section`
              }, e))
            })]
          })
        })
      }) : jsx(P, {
        leftChildren: jsxs(Fragment, {
          children: [jsx("div", {
            className: _$$s.textHeadingLarge.colorText.$,
            children: renderI18nText("seat_billing_terms.modal.finish_and_agree")
          }), jsx("div", {
            className: _$$s.textBodyLarge.itemSelfStretch.textBodyLarge.$,
            children: renderI18nText("seat_billing_terms.modal.agreement_terms", {
              softwareAgreementLink: E
            })
          })]
        }),
        rightChildren: jsxs("div", {
          className: _$$s.flex.flexColumn.gap12.overflowAuto.textBodyMedium.$,
          children: [jsxs("div", {
            children: [jsx("div", {
              className: _$$s.colorTextSecondary.textBodyMediumStrong.mb2.$,
              children: renderI18nText("seat_billing_terms.modal.tos.subscription.header")
            }), jsx("div", {
              className: _$$s.colorText.$,
              children: renderI18nText("seat_billing_terms.modal.tos.subscription.terms", {
                planTier: S,
                renewalDate: a.toDate(),
                softwareAgreementLink: E
              })
            })]
          }), jsx("div", {
            className: _$$s.colorText.$,
            children: renderI18nText("seat_billing_terms.modal.tos.subscription.pricing", {
              organizationName: t
            })
          }), jsxs("div", {
            children: [jsx("div", {
              className: _$$s.colorTextSecondary.textBodyMediumStrong.mb2.$,
              children: renderI18nText("seat_billing_terms.modal.tos.additional_seats.header")
            }), jsx("div", {
              className: _$$s.colorText.$,
              children: renderI18nText("seat_billing_terms.modal.tos.additional_seats.terms")
            })]
          }), jsxs("div", {
            children: [jsx("div", {
              className: _$$s.colorTextSecondary.textBodyMediumStrong.mb2.$,
              children: renderI18nText("seat_billing_terms.modal.tos.invoices.header")
            }), jsx("div", {
              className: _$$s.colorText.$,
              children: renderI18nText("seat_billing_terms.modal.tos.invoices.terms")
            })]
          }), jsx("div", {
            className: _$$s.colorText.$,
            children: renderI18nText("seat_billing_terms.modal.tos.learn_more", {
              updatedSeatsLink: A,
              supportLink: I
            })
          })]
        })
      })
    })
  }) : null;
}
export const SeatBillingTermsModal = $$B0;