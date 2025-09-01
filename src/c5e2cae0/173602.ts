import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import r from "classnames";
import { CY, $$ } from "../figma_app/637027";
import { kt } from "../figma_app/858013";
import { B } from "../905/714743";
import { tx, dS } from "../905/303541";
import { vr } from "../figma_app/514043";
import { jg, M7, Et, cc, O2, W as _$$W, Jo, Qv, aK, N5, I1, iv, Ed, nm, Xq } from "../c5e2cae0/763339";
import { A } from "../5724/933949";
var i = r;
if (443 == require.j) {}
function u(e) {
  return jsx("div", {
    style: {
      height: e.height || 12
    }
  });
}
export function $$p0() {
  return jsx("span", {
    children: tx("org_self_serve.review_step.i_agree_to_msa_and_renewal_links", {
      msaLink: jsx(CY, {
        href: "/ssa",
        target: "_blank",
        trusted: !0,
        children: tx("org_self_serve.review_step.software_services_agreement")
      }),
      renewalLink: jsx(CY, {
        href: dS("/renewal-and-cancellation"),
        target: "_blank",
        trusted: !0,
        children: tx("org_self_serve.review_step.renewal_and_cancellation_terms")
      })
    })
  });
}
export function $$h1(e) {
  let t = new vr(e.currency);
  return jsx("div", {
    className: jg,
    children: jsxs("div", {
      className: i()(M7, Et),
      children: [jsxs("div", {
        className: cc,
        children: [jsx(B, {
          svg: A,
          className: O2,
          useOriginalSrcFills_DEPRECATED: !0,
          autosize: !0,
          width: "32px",
          height: "32px"
        }), jsx("div", {
          className: _$$W,
          children: tx("org_self_serve.confirmation_step.you_re_all_set")
        })]
      }), jsxs("div", {
        className: Jo,
        children: [jsx("div", {
          className: Qv,
          children: tx("org_self_serve.confirmation_step.order_confirmation_message")
        }), jsx(u, {
          height: 24
        }), jsx("div", {
          className: aK
        }), jsx(u, {
          height: 24
        }), jsxs("div", {
          className: N5,
          children: [jsxs("div", {
            className: I1,
            children: [tx("org_self_serve.confirmation_step.total_amount_to_be_charged_to_card_ending_in_last4", {
              last4: e.orgPayment.last4
            }), jsx("span", {
              className: iv,
              children: t.formatMoney(e.totalCents, {
                showCents: !1
              })
            })]
          }), jsx(u, {
            height: 24
          }), jsx("div", {
            className: aK
          }), jsx(u, {
            height: 32
          }), jsxs("div", {
            className: Ed,
            children: [!e.orgMigrated && jsxs(Fragment, {
              children: [jsx(kt, {}), jsx("div", {
                className: nm,
                children: tx("org_self_serve.confirmation_step.we_re_setting_up_your_organization")
              })]
            }), jsx($$, {
              disabled: !e.orgMigrated,
              className: Xq,
              onClick: e.onFileBrowserClick,
              dataTestId: "go-to-file-browser-button",
              children: tx("org_self_serve.confirmation_step.go_to_the_file_browser")
            })]
          })]
        })]
      })]
    })
  });
}
export const W = $$p0;
export const _ = $$h1;