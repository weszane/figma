import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { popModalStack } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { S } from "../4452/747039";
export function $$f0(e) {
  let {
    pending,
    canRevokeProjectTransfer,
    isTransferTeam = !1
  } = e;
  let g = useDispatch<AppDispatch>();
  let h = useModalManager(e);
  let x = pending.id;
  let b = pending.source_user_email;
  let v = pending.destination_user_email;
  let y = pending.is_transfer_copy;
  let w = () => {
    S.deleteAssetTransferRequest({
      id: x
    }).then(() => {
      g(VisualBellActions.enqueue({
        message: getI18nString("revoke_transfer_modal.visual_bell.transfer_revoked")
      }));
    }, e => {
      g(VisualBellActions.enqueue({
        message: getI18nString("revoke_transfer_modal.visual_bell.something_went_wrong"),
        error: !0
      }));
    });
  };
  return jsx(TrackingProvider, {
    name: "Asset Transfer Revoke Modal",
    properties: {
      pendingInviteId: x
    },
    children: jsx(ModalRootComponent, {
      manager: h,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString("revoke_transfer_modal.header_title")
          })
        }), jsxs(DialogBody, {
          scrolling: "none",
          children: [jsx("div", {
            className: cssBuilderInstance.py8.$,
            children: isTransferTeam ? renderI18nText("revoke_transfer_modal.transfer_details_team", {
              sourceUserEmail: b,
              destinationUserEmail: v
            }) : y ? renderI18nText("revoke_transfer_modal.transfer_copy_details", {
              sourceUserEmail: b,
              destinationUserEmail: v
            }) : renderI18nText("revoke_transfer_modal.transfer_details", {
              sourceUserEmail: b,
              destinationUserEmail: v
            })
          }), jsx("div", {
            className: cssBuilderInstance.py8.$,
            children: renderI18nText("revoke_transfer_modal.function_explanation")
          })]
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(Button, {
              variant: "secondary",
              onClick: e.onClose,
              children: getI18nString("revoke_transfer_modal.go_back")
            }), jsx(Button, {
              variant: "destructive",
              onClick: () => {
                w();
                g(popModalStack());
              },
              disabled: !canRevokeProjectTransfer,
              children: getI18nString("revoke_transfer_modal.revoke")
            })]
          })
        })]
      })
    })
  });
}
export const RevokeProjectTransferModal = $$f0;
