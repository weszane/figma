import { registerModal } from "../905/102752";
import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { hideModal, popModalStack } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { c as _$$c } from "../905/32166";
export let $$g0 = registerModal(function (e) {
  let t = useDispatch<AppDispatch>();
  let i = useModalManager(e);
  let g = () => {
    t(hideModal());
  };
  return jsx(TrackingProvider, {
    name: "Project Connection Revoke Modal",
    properties: {
      inviteId: e.resourceConnectionInvite.id
    },
    children: jsx(ModalRootComponent, {
      manager: i,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("resource_connection.revoke_modal.revoke_connection_invite")
          })
        }), jsx(DialogBody, {
          scrolling: "none",
          children: jsx("div", {
            children: renderI18nText("resource_connection.revoke_modal.this_will_end_the_connection_request", {
              connectingPlanName: jsx("span", {
                className: cssBuilderInstance.fontSemiBold.$,
                children: e.resourceConnectionInvite.connectingPlan.name
              }),
              projectName: jsx("span", {
                className: cssBuilderInstance.fontSemiBold.$,
                children: e.resourceConnectionInvite.projectName
              })
            })
          })
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(Button, {
              variant: "secondary",
              onClick: () => {
                t(popModalStack());
              },
              children: renderI18nText("resource_connection.request_modal.cancel")
            }), jsx(Button, {
              variant: "destructive",
              onClick: () => {
                _$$c.revokeResourceConnectionInvite(e.resourceConnectionInvite.id).then(() => {
                  g();
                  t(VisualBellActions.enqueue({
                    message: getI18nString("resource_connection.visual_bell.connection_request_revoked")
                  }));
                }).catch(e => {
                  g();
                  t(VisualBellActions.enqueue({
                    message: getI18nString("resource_connection.visual_bell.generic_error"),
                    error: !0
                  }));
                });
              },
              children: renderI18nText("resource_connection.revoke_modal.revoke")
            })]
          })
        })]
      })
    })
  });
}, "ResourceConnectRevokeModal");
export const h = $$g0;
