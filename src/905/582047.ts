import { jsx, jsxs } from "react/jsx-runtime"
import { ModalCloseButton } from "../905/17223"
import { registerModal } from "../905/102752"
import { popModalStack } from "../905/156213"
import { renderI18nText } from "../905/303541"
import { UpgradeAction } from "../905/370443"
import { customHistory } from "../905/612521"
import { mapFileToProductType } from "../figma_app/314264"
import { STANDARD_LIMIT } from "../figma_app/345997"
import { startProUpgradeFlowThunk } from "../figma_app/482142"
import { ButtonBasePrimaryTracked, ButtonWhiteTracked, linkWithTracking } from "../figma_app/637027"
import { TrackingProvider } from "../figma_app/831799"
import { desktopAPIInstance } from "../figma_app/876459"
import { ModalContainer } from "../figma_app/918700"

let _ = "file_limit_paywall_modal--textSection--eQg2n"
export let FileLimitPaywallModal = registerModal((e) => {
  let t = () => {
    e.dispatch(popModalStack())
  }
  return jsx(TrackingProvider, {
    name: "FileLimitPaywallModal",
    properties: {
      teamId: e.teamId,
      productType: mapFileToProductType({
        editorType: e.editorType,
      }),
      action: e.action,
    },
    children: jsxs(ModalContainer, {
      size: 360,
      className: "file_limit_paywall_modal--paywallModal--tFr8-",
      children: [jsx(ModalCloseButton, {
        className: "file_limit_paywall_modal--closeButton--IyrJA",
        ...e,
      }), jsxs("div", {
        children: [jsx("div", {
          className: "file_limit_paywall_modal--paywallHeader--fxawC",
          children: jsx("span", {
            children: e.editorType === "whiteboard"
              ? renderI18nText("payments.file_limit_paywall_header_figjam", {
                  teamName: e.teamName,
                  maxFreeFiles: STANDARD_LIMIT,
                })
              : renderI18nText("payments.file_limit_paywall_header_figma", {
                  teamName: e.teamName,
                  maxFreeFiles: STANDARD_LIMIT,
                }),
          }),
        }), jsx("div", {
          className: _,
          children: jsx("span", {
            children: e.editorType === "whiteboard"
              ? renderI18nText("payments.file_limit_paywall_text_figjam", {
                  maxFreeFiles: STANDARD_LIMIT,
                })
              : renderI18nText("payments.file_limit_paywall_text_figma", {
                  maxFreeFiles: STANDARD_LIMIT,
                }),
          }),
        }), jsx("div", {
          className: _,
          children: jsx("span", {
            children: renderI18nText("payments.file_limit_paywall_cta", {
              createThisFile: jsx(linkWithTracking, {
                target: "_blank",
                onClick: () => {
                  e.createInDrafts()
                  t()
                },
                trusted: !0,
                children: renderI18nText("payments.file_limit_paywall_cta_create_this_file"),
              }),
              checkOutPaidPlans: jsx(linkWithTracking, {
                target: "_blank",
                onClick: () => {
                  t()
                  let i = `/pricing${e.editorType === "whiteboard" ? "/#figjam" : ""}`
                  customHistory.redirect(i, "_blank")
                },
                trusted: !0,
                children: renderI18nText("payments.file_limit_paywall_cta_check_out_paid_plans"),
              }),
            }),
          }),
        }), jsxs("div", {
          className: "file_limit_paywall_modal--buttonRow--Y8n-M",
          children: [jsx(ButtonWhiteTracked, {
            onClick: t,
            trackingProperties: {
              trackingDescriptor: UpgradeAction.CANCEL,
            },
            children: renderI18nText("payments.file_limit_cancel"),
          }), jsx(ButtonBasePrimaryTracked, {
            className: "file_limit_paywall_modal--upgradeButton--GJckO",
            onClick: () => {
              t()
              e.dispatch(startProUpgradeFlowThunk({
                teamId: e.teamId,
                openInNewTab: !desktopAPIInstance,
                selectedView: {
                  view: "team",
                  teamId: e.teamId,
                },
              }))
            },
            trackingProperties: {
              trackingDescriptor: UpgradeAction.UPGRADE,
            },
            children: renderI18nText("payments.file_limit_upgrade"),
          })],
        })],
      })],
    }),
  })
}, "FileLimitPaywallModal")
export const Y = FileLimitPaywallModal
