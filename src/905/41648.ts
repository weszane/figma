import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody, DialogFooter, DialogActionStrip } from "../figma_app/272243";
import { Button } from "../905/521428";
import { LoadingOverlay } from "../figma_app/858013";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { hideModal, showModalHandler, popModalStack } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { sendWithRetry } from "../905/910117";
import { registerModal } from "../905/102752";
import { Lg, Lq } from "../figma_app/392626";
let _ = new class {
  disconnect(e) {
    return sendWithRetry.put(`/api/resource_connection/${e}/disconnect`);
  }
}();
let b = registerModal(function (e) {
  let t = () => {
    r(hideModal());
  };
  let i = useModalManager({
    ...e,
    onClose: t
  });
  let r = useDispatch<AppDispatch>();
  return jsx(TrackingProvider, {
    name: "Project Disconnect Modal",
    properties: {
      resourceConnectionId: e.resourceConnectionId
    },
    children: jsx(ModalRootComponent, {
      manager: i,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("resource_connection.disconnect_success_modal.project_disconnected")
          })
        }), jsxs(DialogBody, {
          scrolling: "none",
          children: [jsx("div", {
            className: cssBuilderInstance.pt8.$,
            children: renderI18nText("resource_connection.disconnect_success_modal.you_deactivated_the_connected_project", {
              connectedPlanName: e.connectedPlanName,
              projectName: e.projectName,
              shareACopyLink: jsx(Button, {
                variant: "link",
                onClick: () => {
                  t();
                  r(showModalHandler({
                    type: Lg(),
                    data: {
                      folderId: e.projectId,
                      teamId: e.projectTeamId,
                      entryPoint: Lq.RESOURCE_DISCONNECT_SUCCESS_MODAL,
                      shouldTransferCopy: !0
                    }
                  }));
                },
                children: renderI18nText("resource_connection.disconnect_success_modal.share_a_copy")
              })
            })
          }), jsx("div", {
            className: cssBuilderInstance.pt8.pb16.$,
            children: renderI18nText("resource_connection.disconnect_success_modal.you_now_have_space_to_create_a_new_connected_project")
          })]
        })]
      })
    })
  });
}, "ResourceDisconnectSuccessModal");
let $$v0 = registerModal(function (e) {
  let t = useDispatch<AppDispatch>();
  let i = useModalManager(e);
  let [f, A] = useState(!1);
  let y = () => {
    t(hideModal());
  };
  return jsx(TrackingProvider, {
    name: "Project Disconnect Modal",
    properties: {
      resourceConnectionId: e.resourceConnectionId
    },
    children: jsx(ModalRootComponent, {
      manager: i,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("resource_connection.disconnect_modal.disconnect_project_name")
          })
        }), jsxs(DialogBody, {
          scrolling: "none",
          children: [jsx("div", {
            className: cssBuilderInstance.pt8.$,
            children: renderI18nText("resource_connection.disconnect_modal.all_connecting_plan_members_will_lose_access", {
              connectingPlanName: jsx("span", {
                className: cssBuilderInstance.fontSemiBold.$,
                children: e.connectedPlan.name
              }),
              projectName: jsx("span", {
                className: cssBuilderInstance.fontSemiBold.$,
                children: e.projectName
              })
            })
          }), jsx("div", {
            className: cssBuilderInstance.pt8.$,
            children: e.isHostPlanAdmin ? renderI18nText("resource_connection.disconnect_modal.we_recommend_you_share_a_copy", {
              learnMore: jsx("a", {
                href: "https://help.figma.com/hc/articles/10250387712407-Transfer-a-project-or-team-to-a-different-account#h_01J5BDVCA0YGB4N1KMS59QJQ93",
                target: "_blank",
                children: renderI18nText("resource_connection.request_modal.learn_more")
              })
            }) : renderI18nText("resource_connection.we_recommend_asking_for_a_copy", {
              hostPlanName: e.hostPlan.name
            })
          })]
        }), jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [jsx(Button, {
              variant: "secondary",
              onClick: () => {
                t(popModalStack());
              },
              children: renderI18nText("resource_connection.request_modal.cancel")
            }), f ? jsx(Button, {
              disabled: !0,
              children: jsx(LoadingOverlay, {})
            }) : jsx(Button, {
              variant: "destructiveSecondary",
              onClick: () => {
                A(!0);
                _.disconnect(e.resourceConnectionId).then(() => {
                  A(!1);
                  y();
                  e.isHostPlanAdmin ? t(showModalHandler({
                    type: b,
                    data: {
                      resourceConnectionId: e.resourceConnectionId,
                      projectName: e.projectName,
                      projectId: e.projectId,
                      projectTeamId: e.projectTeamId,
                      connectedPlanName: e.connectedPlan.name
                    }
                  })) : t(VisualBellActions.enqueue({
                    message: getI18nString("resource_connection.visual_bell.project_successfully_disconnected", {
                      projectName: e.projectName
                    })
                  }));
                }).catch(e => {
                  A(!1);
                  console.error("Error disconnecting project", e);
                  t(VisualBellActions.enqueue({
                    message: getI18nString("resource_connection.visual_bell.generic_error"),
                    error: !0
                  }));
                });
              },
              children: renderI18nText("resource_connection.manage_modal.deactivate")
            })]
          })
        })]
      })
    })
  });
}, "ResourceDisconnectModal");
export const K = $$v0;
