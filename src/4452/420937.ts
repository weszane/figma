import { registerModal } from "../905/102752";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Xf } from "../figma_app/153916";
import { $z } from "../figma_app/617427";
import { renderI18nText } from "../905/303541";
import { hideModal } from "../905/156213";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { OL } from "../figma_app/421473";
import { e0 } from "../905/696396";
export let $$h0 = registerModal(function (e) {
  let t;
  let a = hS(e);
  let h = useDispatch();
  let x = Xf(e.plan.key.parentId, e.plan.key.type !== OL.TEAM);
  let f = useSelector(e => e.teamBilling);
  let v = e.plan.key.type === OL.TEAM ? f.summary.currency : x.data?.currency;
  let b = () => h(hideModal());
  t = !v || e.isELA ? e.filteredRowCount !== e.numRequestsToApprove ? jsx("p", {
    children: renderI18nText(1 === e.numRequestsToApprove ? "admin_dashboard.seat_requests.approve_all_modal.body.filtered_requests.single" : "admin_dashboard.seat_requests.approve_all_modal.body.filtered_requests.multiple", {
      numFilteredRequests: e.numRequestsToApprove - e.filteredRowCount,
      numRequests: e.numRequestsToApprove
    })
  }) : jsx("p", {
    children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.body.no_cost", {
      numRequests: e.numRequestsToApprove
    })
  }) : jsxs(Fragment, {
    children: [e.filteredRowCount !== e.numRequestsToApprove && jsxs(Fragment, {
      children: [jsx("p", {
        children: renderI18nText(1 === e.numRequestsToApprove ? "admin_dashboard.seat_requests.approve_all_modal.body.filtered_requests.single" : "admin_dashboard.seat_requests.approve_all_modal.body.filtered_requests.multiple", {
          numFilteredRequests: e.numRequestsToApprove - e.filteredRowCount,
          numRequests: e.numRequestsToApprove
        })
      }), jsx("br", {})]
    }), jsx("p", {
      children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.body")
    })]
  });
  return jsx(bL, {
    manager: a,
    width: "lg",
    children: jsx(fu, {
      name: e0.APPROVE_ALL_CONFIRMATION_MODAL,
      properties: {
        planType: e.plan.key.type,
        planId: e.plan.key.parentId,
        entryPoint: e.entryPoint
      },
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.title")
          })
        }), jsx(nB, {
          children: t
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($z, {
              variant: "secondary",
              onClick: b,
              trackingProperties: {
                trackingDescriptor: _$$c.CANCEL
              },
              children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.cancel")
            }), jsx($z, {
              variant: "primary",
              onClick: () => {
                b();
                e.onConfirm();
              },
              trackingProperties: {
                trackingDescriptor: _$$c.APPROVE_ALL
              },
              children: renderI18nText("admin_dashboard.seat_requests.approve_all_modal.approve_number_of_requests", {
                numRequests: e.numRequestsToApprove
              })
            })]
          })
        })]
      })
    })
  });
}, "ApproveAllConfirmationModal");
export const W = $$h0;