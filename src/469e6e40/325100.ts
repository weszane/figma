import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import { H as _$$H } from "../905/507464";
import { j as _$$j } from "../905/206476";
import { P } from "../905/697522";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t, tx } from "../905/303541";
import { Y } from "../905/830372";
import { V } from "../905/355181";
import { S as _$$S } from "../905/339549";
import { E as _$$E } from "../905/984674";
import { tI } from "../figma_app/599327";
import { BC } from "../figma_app/149367";
import { AS } from "../905/156213";
import { Z } from "../469e6e40/184197";
import { fu } from "../figma_app/831799";
import { Oq } from "../905/332483";
import { AG, Gj } from "../figma_app/217457";
import { _k } from "../figma_app/934005";
import { o0 } from "../469e6e40/616503";
import { FProductAccessType } from "../figma_app/191312";
import { vr } from "../figma_app/514043";
import { Ju } from "../905/102752";
import { OJ } from "../905/519092";
function N(e) {
  let t = useDispatch();
  let [a, r] = useState(!1);
  let l = () => {
    t(AS());
  };
  return jsx(fu, {
    name: "Finalize Invoice Modal",
    properties: {
      orgId: e.orgId
    },
    children: jsxs(OJ, {
      title: jsx(T, {
        invoiceType: e.invoiceType
      }),
      innerContainerClassName: _$$s.p16.$,
      disableHeaderBottomBorder: !0,
      onClose: l,
      maxWidth: 380,
      children: [jsxs(Y, {
        direction: "vertical",
        horizontalAlignItems: "stretch",
        children: [e.invoiceDetails, jsx(Y, {
          padding: {
            bottom: I
          },
          children: jsx(_$$S, {
            checked: a,
            label: _$$t("org_admin_settings.billing.finalize_invoice_modal.checkbox"),
            onChange: () => r(!a)
          })
        })]
      }), jsxs(Y, {
        direction: "horizontal",
        horizontalAlignItems: "end",
        children: [jsx(V, {
          variant: "secondary",
          onClick: l,
          children: tx("org_admin_settings.billing.finalize_invoice_modal.button.cancel")
        }), jsx(V, {
          variant: "primary",
          disabled: !a,
          onClick: e.onConfirm,
          children: tx("org_admin_settings.billing.finalize_invoice_modal.button.finalize_invoice")
        })]
      })]
    })
  });
}
let I = 16;
function T({
  invoiceType: e
}) {
  return jsx(Y, {
    direction: "horizontal",
    padding: {
      bottom: I
    },
    children: jsxs(Y, {
      direction: "vertical",
      spacing: 0,
      children: [jsx(_$$E, {
        color: "default",
        fontWeight: "semi-bold",
        fontSize: 20,
        children: tx(`org_admin_settings.billing.finalize_invoice_modal.title.${e}`)
      }), jsx(_$$E, {
        color: "default",
        fontSize: 13,
        fontWeight: "regular",
        children: tx("org_admin_settings.billing.finalize_invoice_modal.subtitle")
      })]
    })
  });
}
export let $$A0 = Ju(function (e) {
  let t = useDispatch();
  let a = o0(e.invoice);
  let s = new vr(e.invoice.currency);
  let _ = _k(e.invoice);
  let u = a.dict(t => e.invoice.seats_breakdown[t]?.net_quantity ?? 0);
  return jsx(N, {
    orgId: e.orgId,
    invoiceType: _ ? "true_up" : "annual",
    invoiceDetails: jsxs("div", {
      className: _$$s.flex.flexColumn.p16.gap16.mx8.mb16.b1.colorBorder.bSolid.radiusMedium.$,
      children: [a.sort(AG).map(t => {
        let a = u[t] ?? 0;
        let i = tI(t);
        return jsxs("div", {
          className: _$$s.pb16.bb1.colorBorder.bSolid.flex.justifyBetween.gap16.$,
          "data-testid": `invoice-details-${t}`,
          children: [jsxs("div", {
            className: _$$s.flex.gap8.$,
            children: [jsx("span", {
              className: _$$s.inlineFlex.$,
              children: Oq.has(t) ? function (e) {
                switch (e) {
                  case FProductAccessType.DESIGN:
                    return jsx(_$$H, {});
                  case FProductAccessType.WHITEBOARD:
                    return jsx(_$$j, {});
                  case FProductAccessType.DEV_MODE:
                    return jsx(P, {});
                }
              }(Gj(t)) : jsx(BC, {
                type: t,
                size: "24"
              })
            }), jsx("span", {
              className: _$$s.selfCenter.$,
              children: _ ? _$$t("plan_invoices.new_seats_quantity", {
                quantity: a,
                seatType: i
              }) : _$$t("plan_invoices.seats_quantity", {
                quantity: a,
                seatType: i
              })
            })]
          }), jsx("div", {
            children: s.formatMoney(e.invoice.seats_breakdown[t]?.amount ?? 0, {
              showCents: !1
            })
          })]
        }, t);
      }), jsxs("div", {
        className: _$$s.textBodyMediumStrong.flex.justifyBetween.gap16.$,
        "data-testid": "invoice-details-total",
        children: [jsx("div", {
          children: _$$t("org_admin_settings.billing.finalize_invoice_modal.invoice_subtotal")
        }), jsx("div", {
          children: s.formatMoney(e.invoice.subtotal, {
            showCents: !1
          })
        })]
      })]
    }),
    onConfirm: () => {
      t(Z({
        licenseQuantities: u,
        planInvoiceId: e.invoice.id
      }));
      t(AS());
    }
  });
}, "FINALIZE_INVOICE_CONFIRM_MODAL_V2");
export const H = $$A0;