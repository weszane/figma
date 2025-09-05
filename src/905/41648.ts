import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { $n } from "../905/521428";
import { qc } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { tx, t as _$$t } from "../905/303541";
import { F } from "../905/302958";
import { Ce, to, Lo } from "../905/156213";
import { fu } from "../figma_app/831799";
import { XHR } from "../905/910117";
import { Ju } from "../905/102752";
import { Lg, Lq } from "../figma_app/392626";
let _ = new class {
  disconnect(e) {
    return XHR.put(`/api/resource_connection/${e}/disconnect`);
  }
}();
let b = Ju(function (e) {
  let t = () => {
    r(Ce());
  };
  let i = hS({
    ...e,
    onClose: t
  });
  let r = useDispatch();
  return jsx(fu, {
    name: "Project Disconnect Modal",
    properties: {
      resourceConnectionId: e.resourceConnectionId
    },
    children: jsx(bL, {
      manager: i,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: tx("resource_connection.disconnect_success_modal.project_disconnected")
          })
        }), jsxs(nB, {
          scrolling: "none",
          children: [jsx("div", {
            className: _$$s.pt8.$,
            children: tx("resource_connection.disconnect_success_modal.you_deactivated_the_connected_project", {
              connectedPlanName: e.connectedPlanName,
              projectName: e.projectName,
              shareACopyLink: jsx($n, {
                variant: "link",
                onClick: () => {
                  t();
                  r(to({
                    type: Lg(),
                    data: {
                      folderId: e.projectId,
                      teamId: e.projectTeamId,
                      entryPoint: Lq.RESOURCE_DISCONNECT_SUCCESS_MODAL,
                      shouldTransferCopy: !0
                    }
                  }));
                },
                children: tx("resource_connection.disconnect_success_modal.share_a_copy")
              })
            })
          }), jsx("div", {
            className: _$$s.pt8.pb16.$,
            children: tx("resource_connection.disconnect_success_modal.you_now_have_space_to_create_a_new_connected_project")
          })]
        })]
      })
    })
  });
}, "ResourceDisconnectSuccessModal");
let $$v0 = Ju(function (e) {
  let t = useDispatch();
  let i = hS(e);
  let [f, A] = useState(!1);
  let y = () => {
    t(Ce());
  };
  return jsx(fu, {
    name: "Project Disconnect Modal",
    properties: {
      resourceConnectionId: e.resourceConnectionId
    },
    children: jsx(bL, {
      manager: i,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: tx("resource_connection.disconnect_modal.disconnect_project_name")
          })
        }), jsxs(nB, {
          scrolling: "none",
          children: [jsx("div", {
            className: _$$s.pt8.$,
            children: tx("resource_connection.disconnect_modal.all_connecting_plan_members_will_lose_access", {
              connectingPlanName: jsx("span", {
                className: _$$s.fontSemiBold.$,
                children: e.connectedPlan.name
              }),
              projectName: jsx("span", {
                className: _$$s.fontSemiBold.$,
                children: e.projectName
              })
            })
          }), jsx("div", {
            className: _$$s.pt8.$,
            children: e.isHostPlanAdmin ? tx("resource_connection.disconnect_modal.we_recommend_you_share_a_copy", {
              learnMore: jsx("a", {
                href: "https://help.figma.com/hc/articles/10250387712407-Transfer-a-project-or-team-to-a-different-account#h_01J5BDVCA0YGB4N1KMS59QJQ93",
                target: "_blank",
                children: tx("resource_connection.request_modal.learn_more")
              })
            }) : tx("resource_connection.we_recommend_asking_for_a_copy", {
              hostPlanName: e.hostPlan.name
            })
          })]
        }), jsx(wi, {
          children: jsxs(jk, {
            children: [jsx($n, {
              variant: "secondary",
              onClick: () => {
                t(Lo());
              },
              children: tx("resource_connection.request_modal.cancel")
            }), f ? jsx($n, {
              disabled: !0,
              children: jsx(qc, {})
            }) : jsx($n, {
              variant: "destructiveSecondary",
              onClick: () => {
                A(!0);
                _.disconnect(e.resourceConnectionId).then(() => {
                  A(!1);
                  y();
                  e.isHostPlanAdmin ? t(to({
                    type: b,
                    data: {
                      resourceConnectionId: e.resourceConnectionId,
                      projectName: e.projectName,
                      projectId: e.projectId,
                      projectTeamId: e.projectTeamId,
                      connectedPlanName: e.connectedPlan.name
                    }
                  })) : t(F.enqueue({
                    message: _$$t("resource_connection.visual_bell.project_successfully_disconnected", {
                      projectName: e.projectName
                    })
                  }));
                }).catch(e => {
                  A(!1);
                  console.error("Error disconnecting project", e);
                  t(F.enqueue({
                    message: _$$t("resource_connection.visual_bell.generic_error"),
                    error: !0
                  }));
                });
              },
              children: tx("resource_connection.manage_modal.deactivate")
            })]
          })
        })]
      })
    })
  });
}, "ResourceDisconnectModal");
export const K = $$v0;