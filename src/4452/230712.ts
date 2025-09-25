import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { DialogContents, DialogHeader, DialogTitle, DialogBody } from "../figma_app/272243";
import { Button } from "../905/521428";
import { B } from "../905/950875";
import { buildUploadUrl } from "../figma_app/169182";
import { WAFImage } from "../905/675859";
import { LoadingOverlay } from "../figma_app/858013";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { b as _$$b, A as _$$A } from "../905/723768";
import { hideModal } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { N as _$$N } from "../figma_app/55043";
import { FOrganizationLevelType } from "../figma_app/191312";
import { useTeamPlanFeatures } from "../figma_app/465071";
import { KindEnum } from "../905/129884";
import { c as _$$c } from "../905/32166";
import { registerModal } from "../905/102752";
import { fF, yF, Kg, F5, QU, j1, xQ } from "../figma_app/397283";
export let $$A0 = registerModal(function (e) {
  let t = useDispatch();
  let a = () => {
    t(hideModal());
  };
  let S = useTeamPlanFeatures().unwrapOr(null);
  let A = useModalManager({
    ...e,
    onClose: a
  });
  let [w, N] = useState(!1);
  let R = e.resourceConnectionInvite.hostPlan;
  let C = e.resourceConnectionInvite.connectingPlan;
  let k = _$$N(S?.key, () => {
    _$$c.approveResourceConnectionInvite(e.resourceConnectionInvite.id).then(() => {
      N(!1);
      a();
      t(VisualBellActions.enqueue({
        message: getI18nString("resource_connection.visual_bell.connection_request_approved")
      }));
    }).catch(e => {
      N(!1);
      a();
      "Connecting plan has reached active connection and outgoing invite limit" === e.message ? t(VisualBellActions.enqueue({
        message: S?.key.type === FOrganizationLevelType.TEAM ? getI18nString("resource_connection.visual_bell.org_at_limit") : getI18nString("resource_connection.visual_bell.team_at_limit"),
        error: !0
      })) : "Connecting plan cannot have external collaboration controls enabled" === e.message ? t(VisualBellActions.enqueue({
        message: getI18nString("resource_connection.visual_bell.org_must_disable_ecc"),
        error: !0
      })) : "Host settings" === e.message ? t(VisualBellActions.enqueue({
        message: getI18nString("resource_connection.visual_bell.host_settings", {
          hostPlanName: R.name
        }),
        error: !0
      })) : t(VisualBellActions.enqueue({
        message: getI18nString("resource_connection.visual_bell.generic_error"),
        error: !0
      }));
    });
  }, e.resourceConnectionInvite.id);
  return S ? jsx(TrackingProvider, {
    name: "Project Connection Confirm Modal",
    properties: {
      folderId: e.resourceConnectionInvite.resourceId
    },
    children: jsx(ModalRootComponent, {
      manager: A,
      width: "lg",
      children: jsxs(DialogContents, {
        children: [jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText("resource_connection.confirm_modal.connect_with_host_plan", {
              hostPlanName: R.name
            })
          })
        }), jsxs(DialogBody, {
          padding: 0,
          children: [jsx(WAFImage, {
            src: buildUploadUrl("79f17ef7df0c5ed50af97e6c5e98651536c94352"),
            alt: "Connected projects logo",
            className: cssBuilderInstance.maxWFull.$
          }), jsxs("div", {
            className: cssBuilderInstance.flex.flexColumn.pl16.pr16.pt16.pb0.maxWFull.$,
            children: [jsx("p", {
              className: cssBuilderInstance.$,
              children: renderI18nText("resource_connection.confirm_modal.in_a_connected_project_anyone_you_invite_can_edit", {
                connectingPlanName: jsx("span", {
                  className: cssBuilderInstance.fontSemiBold.$,
                  children: C.name
                })
              })
            }), jsx("div", {
              className: fF,
              children: jsx("div", {
                className: yF
              })
            }), jsxs("div", {
              className: Kg,
              children: [jsxs("div", {
                className: F5,
                children: [jsx("p", {
                  className: QU,
                  children: getI18nString("resource_connection.project_name")
                }), jsx("p", {
                  children: e.resourceConnectionInvite.resourceName
                })]
              }), jsxs("div", {
                className: F5,
                children: [jsx("p", {
                  className: QU,
                  children: getI18nString("resource_connection.host")
                }), jsx("p", {
                  children: R.name
                })]
              }), jsxs("div", {
                className: F5,
                children: [jsx("p", {
                  className: QU,
                  children: getI18nString("resource_connection.invited_by")
                }), jsx("p", {
                  children: e.resourceConnectionInvite.hostInviter?.name
                })]
              }), jsxs("div", {
                className: F5,
                children: [jsxs("div", {
                  className: j1,
                  children: [jsx("p", {
                    className: QU,
                    children: getI18nString("resource_connection.available_projects")
                  }), jsx("div", {
                    ...(S?.tier ? {
                      "data-tooltip": getI18nString("resource_connection.available_projects_tooltip", {
                        connectedProjectLimit: _$$b[S.tier],
                        planType: _$$A(S.tier) ?? ""
                      }),
                      "data-tooltip-type": KindEnum.TEXT,
                      "data-tooltip-interactive": !0,
                      "data-tooltip-show-immediately": !0,
                      "data-tooltip-show-below": !0
                    } : {}),
                    children: jsx(B, {
                      style: {
                        "--color-icon": "var(--color-icon-secondary)"
                      }
                    })
                  })]
                }), jsx("p", {
                  children: S ? S?.unlimitedConnectionsEnabled || S?.testingOnlyUnlimitedConnectionsEnabled ? getI18nString("resource_connection.unlimited") : (_$$b[S.tier] - (S?.connectionCount ?? 0)).toString() : ""
                })]
              })]
            }), jsx("div", {
              className: fF,
              children: jsx("div", {
                className: yF
              })
            })]
          }), jsxs("div", {
            className: xQ,
            children: [jsx("a", {
              href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects",
              target: "_blank",
              className: cssBuilderInstance.mr8.$,
              children: jsx(Button, {
                variant: "link",
                onClick: e => e.stopPropagation(),
                children: renderI18nText("resource_connection.request_modal.learn_more")
              })
            }), jsxs("div", {
              className: cssBuilderInstance.flex.gap8.itemsCenter.$,
              children: [jsx(Button, {
                variant: "secondary",
                onClick: () => {
                  _$$c.denyResourceConnectionInvite(e.resourceConnectionInvite.id).then(() => {
                    N(!1);
                    a();
                    t(VisualBellActions.enqueue({
                      message: getI18nString("resource_connection.visual_bell.connection_request_denied")
                    }));
                  }).catch(e => {
                    N(!1);
                    console.error("Error denying resource connection invite", e);
                    t(VisualBellActions.enqueue({
                      message: getI18nString("resource_connection.visual_bell.generic_error"),
                      error: !0
                    }));
                  });
                },
                children: renderI18nText("resource_connection.confirm_modal.decline")
              }), w ? jsx(Button, {
                disabled: !0,
                children: jsx(LoadingOverlay, {})
              }) : jsx(Button, {
                onClick: k,
                children: renderI18nText("resource_connection.connect")
              })]
            })]
          })]
        })]
      })
    })
  }) : jsx(Fragment, {});
}, "ResourceConnectConfirmModal");
export const d = $$A0;