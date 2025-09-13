import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { deepEqual } from "../905/382883";
import { N } from "../905/438674";
import { formatList } from "../figma_app/930338";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { sx } from "../905/941192";
import { tI } from "../figma_app/599327";
import { hideModal } from "../905/156213";
import { Z } from "../469e6e40/184197";
import { TrackingProvider } from "../figma_app/831799";
import { AG } from "../figma_app/217457";
import { _k, tB } from "../figma_app/934005";
import { o0 } from "../469e6e40/616503";
import { MX, cI } from "../figma_app/684446";
import { vr } from "../figma_app/514043";
import { xS } from "../figma_app/193867";
import { UserGroupRole, GroupType } from "../905/441038";
import { registerModal } from "../905/102752";
import { l as _$$l } from "../figma_app/121794";
function k(e) {
  let t = useDispatch();
  let a = e.licenseGroupsEnabled && e.groupsToReview.length > 0;
  return jsx(TrackingProvider, {
    name: "Freeze Invoice Modal",
    properties: {
      numReviewsIncomplete: e.groupsToReview.length,
      orgId: e.orgId
    },
    children: jsx(_$$l, {
      dispatch: t,
      checkboxText: getI18nString("members_table.true_up.freeze_invoice_checkbox_text"),
      buttonText: getI18nString("members_table.true_up.freeze_invoice_button_text"),
      onConfirm: () => {
        t(Z({
          licenseQuantities: e.addedQuantities,
          planInvoiceId: e.planInvoiceId
        }));
        t(hideModal());
      },
      title: getI18nString("members_table.true_up.freeze_invoice_checkbox_title"),
      disableClickOutsideToHide: !0,
      children: jsxs("div", {
        className: _$$s.lh16.font11.$,
        children: [a && jsxs(Fragment, {
          children: [jsx("p", {
            className: _$$s.mb8.$,
            children: renderI18nText("members_table.true_up.freeze_invoice_billing_group_info")
          }), jsx("div", {
            className: _$$s.maxH300.overflowAuto.$,
            children: jsx("ul", {
              className: _$$s.ml16.mb8.$,
              children: e.groupsToReview.map(t => {
                let a = e.licenseGroupUrls?.[t.id];
                return jsxs("li", {
                  style: sx.add({
                    listStyleType: "disc"
                  }).$,
                  children: [a ? jsx(N, {
                    href: a,
                    newTab: !0,
                    trusted: !0,
                    children: t.name
                  }) : t.name, " ", !t.is_orphaned && e.showAdminEmails && jsx("span", {
                    className: _$$s.colorTextSecondary.$,
                    children: "(" + formatList(t.admin_users_metadata.map(e => e.email || "")) + ")"
                  })]
                }, t.id);
              })
            })
          })]
        }), jsx("p", {
          className: _$$s.mb8.mt8.$,
          "data-testid": "freeze-invoice-copy",
          children: e.copy
        }), jsx("div", {
          className: _$$s.fontSemiBold.$,
          "data-testid": "freeze-invoice-details",
          children: e.details
        })]
      })
    })
  });
}
export let $$E0 = registerModal(function (e) {
  let t = MX();
  let a = o0(e.invoice);
  let r = _k(e.invoice);
  let l = new vr(e.invoice.currency);
  let u = tB(e.invoice);
  let m = t.filter(e => !cI(e, u));
  let p = useSelector(e => {
    let t = {};
    m.forEach(({
      id: a
    }) => {
      t[a] = xS(e, {
        view: "licenseGroup",
        subView: UserGroupRole.ADMIN,
        selectedTab: GroupType.MEMBERS,
        licenseGroupId: a
      });
    });
    return t;
  }, deepEqual);
  let y = a.dict(t => e.invoice.seats_breakdown[t]?.net_quantity ?? 0);
  return jsx(k, {
    orgId: e.orgId,
    groupsToReview: m,
    addedQuantities: y,
    copy: getI18nString("org_admin_settings.billing.freeze_invoice_modal.copy", {
      date: u,
      amount: l.formatMoney(e.invoice.subtotal, {
        showCents: !1
      })
    }),
    planInvoiceId: e.invoice.id,
    details: jsxs(Fragment, {
      children: [jsx("p", {
        className: _$$s.mt16.mb8.$,
        children: r ? getI18nString("org_admin_settings.billing.freeze_invoice_modal.details_heading.true_up") : getI18nString("org_admin_settings.billing.freeze_invoice_modal.details_heading.annual")
      }), jsx("ul", {
        className: _$$s.ml16.$,
        children: a.sort(AG).map(e => {
          let t = tI(e);
          let a = y[e] ?? 0;
          return jsx("li", {
            style: sx.add({
              listStyleType: "disc"
            }).$,
            children: r ? getI18nString("plan_invoices.new_seats_quantity", {
              quantity: a,
              seatType: t
            }) : getI18nString("plan_invoices.seats_quantity", {
              quantity: a,
              seatType: t
            })
          }, e);
        })
      })]
    }),
    licenseGroupUrls: p,
    licenseGroupsEnabled: !0
  });
}, "FREEZE_INVOICE_CONFIRM_MODAL_V2");
export const A = $$E0;