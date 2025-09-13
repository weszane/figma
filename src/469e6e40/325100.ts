import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { H as _$$H } from "../905/507464";
import { j as _$$j } from "../905/206476";
import { P } from "../905/697522";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { AutoLayout } from "../905/470281";
import { V } from "../905/355181";
import { S as _$$S } from "../905/339549";
import { TextWithTruncation } from "../905/984674";
import { tI } from "../figma_app/599327";
import { BC } from "../figma_app/149367";
import { hideModalHandler } from "../905/156213";
import { Z } from "../469e6e40/184197";
import { fu } from "../figma_app/831799";
import { Oq } from "../905/332483";
import { AG, Gj } from "../figma_app/217457";
import { _k } from "../figma_app/934005";
import { o0 } from "../469e6e40/616503";
import { FProductAccessType } from "../figma_app/191312";
import { vr } from "../figma_app/514043";
import { registerModal } from "../905/102752";
import { OJ } from "../905/519092";
function N(e) {
  let t = useDispatch();
  let [a, r] = useState(!1);
  let l = () => {
    t(hideModalHandler());
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
      children: [jsxs(AutoLayout, {
        direction: "vertical",
        horizontalAlignItems: "stretch",
        children: [e.invoiceDetails, jsx(AutoLayout, {
          padding: {
            bottom: I
          },
          children: jsx(_$$S, {
            checked: a,
            label: getI18nString("org_admin_settings.billing.finalize_invoice_modal.checkbox"),
            onChange: () => r(!a)
          })
        })]
      }), jsxs(AutoLayout, {
        direction: "horizontal",
        horizontalAlignItems: "end",
        children: [jsx(V, {
          variant: "secondary",
          onClick: l,
          children: renderI18nText("org_admin_settings.billing.finalize_invoice_modal.button.cancel")
        }), jsx(V, {
          variant: "primary",
          disabled: !a,
          onClick: e.onConfirm,
          children: renderI18nText("org_admin_settings.billing.finalize_invoice_modal.button.finalize_invoice")
        })]
      })]
    })
  });
}
let I = 16;
function T({
  invoiceType: e
}) {
  return jsx(AutoLayout, {
    direction: "horizontal",
    padding: {
      bottom: I
    },
    children: jsxs(AutoLayout, {
      direction: "vertical",
      spacing: 0,
      children: [jsx(TextWithTruncation, {
        color: "default",
        fontWeight: "semi-bold",
        fontSize: 20,
        children: renderI18nText(`org_admin_settings.billing.finalize_invoice_modal.title.${e}`)
      }), jsx(TextWithTruncation, {
        color: "default",
        fontSize: 13,
        fontWeight: "regular",
        children: renderI18nText("org_admin_settings.billing.finalize_invoice_modal.subtitle")
      })]
    })
  });
}
export let $$A0 = registerModal(function (e) {
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
              children: _ ? getI18nString("plan_invoices.new_seats_quantity", {
                quantity: a,
                seatType: i
              }) : getI18nString("plan_invoices.seats_quantity", {
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
          children: getI18nString("org_admin_settings.billing.finalize_invoice_modal.invoice_subtotal")
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
      t(hideModalHandler());
    }
  });
}, "FINALIZE_INVOICE_CONFIRM_MODAL_V2");
export const H = $$A0;