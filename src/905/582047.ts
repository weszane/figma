import { jsx, jsxs } from "react/jsx-runtime";
import { desktopAPIInstance } from "../figma_app/876459";
import { customHistory } from "../905/612521";
import { s_ } from "../905/17223";
import { Us, M7, vd } from "../figma_app/637027";
import { renderI18nText } from "../905/303541";
import { popModalStack } from "../905/156213";
import { WX } from "../figma_app/482142";
import { c as _$$c } from "../905/370443";
import { fu } from "../figma_app/831799";
import { pi } from "../figma_app/314264";
import { WW } from "../figma_app/345997";
import { registerModal } from "../905/102752";
import { d_ } from "../figma_app/918700";
let _ = "file_limit_paywall_modal--textSection--eQg2n";
let $$A0 = registerModal(function (e) {
  let t = () => {
    e.dispatch(popModalStack());
  };
  return jsx(fu, {
    name: "FileLimitPaywallModal",
    properties: {
      teamId: e.teamId,
      productType: pi({
        editorType: e.editorType
      }),
      action: e.action
    },
    children: jsxs(d_, {
      size: 360,
      className: "file_limit_paywall_modal--paywallModal--tFr8-",
      children: [jsx(s_, {
        className: "file_limit_paywall_modal--closeButton--IyrJA",
        ...e
      }), jsxs("div", {
        children: [jsx("div", {
          className: "file_limit_paywall_modal--paywallHeader--fxawC",
          children: jsx("span", {
            children: "whiteboard" === e.editorType ? renderI18nText("payments.file_limit_paywall_header_figjam", {
              teamName: e.teamName,
              maxFreeFiles: WW
            }) : renderI18nText("payments.file_limit_paywall_header_figma", {
              teamName: e.teamName,
              maxFreeFiles: WW
            })
          })
        }), jsx("div", {
          className: _,
          children: jsx("span", {
            children: "whiteboard" === e.editorType ? renderI18nText("payments.file_limit_paywall_text_figjam", {
              maxFreeFiles: WW
            }) : renderI18nText("payments.file_limit_paywall_text_figma", {
              maxFreeFiles: WW
            })
          })
        }), jsx("div", {
          className: _,
          children: jsx("span", {
            children: renderI18nText("payments.file_limit_paywall_cta", {
              createThisFile: jsx(Us, {
                target: "_blank",
                onClick: () => {
                  e.createInDrafts();
                  t();
                },
                trusted: !0,
                children: renderI18nText("payments.file_limit_paywall_cta_create_this_file")
              }),
              checkOutPaidPlans: jsx(Us, {
                target: "_blank",
                onClick: () => {
                  t();
                  let i = `/pricing${"whiteboard" === e.editorType ? "/#figjam" : ""}`;
                  customHistory.redirect(i, "_blank");
                },
                trusted: !0,
                children: renderI18nText("payments.file_limit_paywall_cta_check_out_paid_plans")
              })
            })
          })
        }), jsxs("div", {
          className: "file_limit_paywall_modal--buttonRow--Y8n-M",
          children: [jsx(M7, {
            onClick: t,
            trackingProperties: {
              trackingDescriptor: _$$c.CANCEL
            },
            children: renderI18nText("payments.file_limit_cancel")
          }), jsx(vd, {
            className: "file_limit_paywall_modal--upgradeButton--GJckO",
            onClick: () => {
              t();
              e.dispatch(WX({
                teamId: e.teamId,
                openInNewTab: !desktopAPIInstance,
                selectedView: {
                  view: "team",
                  teamId: e.teamId
                }
              }));
            },
            trackingProperties: {
              trackingDescriptor: _$$c.UPGRADE
            },
            children: renderI18nText("payments.file_limit_upgrade")
          })]
        })]
      })]
    })
  });
}, "FileLimitPaywallModal");
export const Y = $$A0;