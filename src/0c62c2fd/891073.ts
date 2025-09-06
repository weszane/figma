import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { F } from "../905/302958";
import { Lo } from "../905/156213";
import { fu } from "../figma_app/831799";
import { S } from "../4452/747039";
export function $$f0(e) {
  let {
    pending,
    canRevokeProjectTransfer,
    isTransferTeam = !1
  } = e;
  let g = useDispatch();
  let h = hS(e);
  let x = pending.id;
  let b = pending.source_user_email;
  let v = pending.destination_user_email;
  let y = pending.is_transfer_copy;
  let w = () => {
    S.deleteAssetTransferRequest({
      id: x
    }).then(() => {
      g(F.enqueue({
        message: getI18nString("revoke_transfer_modal.visual_bell.transfer_revoked")
      }));
    }, e => {
      g(F.enqueue({
        message: getI18nString("revoke_transfer_modal.visual_bell.something_went_wrong"),
        error: !0
      }));
    });
  };
  return jsx(fu, {
    name: "Asset Transfer Revoke Modal",
    properties: {
      pendingInviteId: x
    },
    children: jsx(bL, {
      manager: h,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: getI18nString("revoke_transfer_modal.header_title")
          })
        }), jsxs(nB, {
          scrolling: "none",
          children: [jsx("div", {
            className: _$$s.py8.$,
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
            className: _$$s.py8.$,
            children: renderI18nText("revoke_transfer_modal.function_explanation")
          })]
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: e.onClose,
              children: getI18nString("revoke_transfer_modal.go_back")
            }), jsx($n, {
              variant: "destructive",
              onClick: () => {
                w();
                g(Lo());
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