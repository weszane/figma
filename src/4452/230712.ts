import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useDispatch } from "../vendor/514228";
import { hS } from "../905/437088";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB } from "../figma_app/272243";
import { $n } from "../905/521428";
import { B } from "../905/950875";
import { buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { qc } from "../figma_app/858013";
import { s as _$$s } from "../cssbuilder/589278";
import { getI18nString, renderI18nText } from "../905/303541";
import { F } from "../905/302958";
import { b as _$$b, A as _$$A } from "../905/723768";
import { hideModal } from "../905/156213";
import { fu } from "../figma_app/831799";
import { N as _$$N } from "../figma_app/55043";
import { FOrganizationLevelType } from "../figma_app/191312";
import { S2 } from "../figma_app/465071";
import { Ib } from "../905/129884";
import { c as _$$c } from "../905/32166";
import { registerModal } from "../905/102752";
import { fF, yF, Kg, F5, QU, j1, xQ } from "../figma_app/397283";
export let $$A0 = registerModal(function (e) {
  let t = useDispatch();
  let a = () => {
    t(hideModal());
  };
  let S = S2().unwrapOr(null);
  let A = hS({
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
      t(F.enqueue({
        message: getI18nString("resource_connection.visual_bell.connection_request_approved")
      }));
    }).catch(e => {
      N(!1);
      a();
      "Connecting plan has reached active connection and outgoing invite limit" === e.message ? t(F.enqueue({
        message: S?.key.type === FOrganizationLevelType.TEAM ? getI18nString("resource_connection.visual_bell.org_at_limit") : getI18nString("resource_connection.visual_bell.team_at_limit"),
        error: !0
      })) : "Connecting plan cannot have external collaboration controls enabled" === e.message ? t(F.enqueue({
        message: getI18nString("resource_connection.visual_bell.org_must_disable_ecc"),
        error: !0
      })) : "Host settings" === e.message ? t(F.enqueue({
        message: getI18nString("resource_connection.visual_bell.host_settings", {
          hostPlanName: R.name
        }),
        error: !0
      })) : t(F.enqueue({
        message: getI18nString("resource_connection.visual_bell.generic_error"),
        error: !0
      }));
    });
  }, e.resourceConnectionInvite.id);
  return S ? jsx(fu, {
    name: "Project Connection Confirm Modal",
    properties: {
      folderId: e.resourceConnectionInvite.resourceId
    },
    children: jsx(bL, {
      manager: A,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: renderI18nText("resource_connection.confirm_modal.connect_with_host_plan", {
              hostPlanName: R.name
            })
          })
        }), jsxs(nB, {
          padding: 0,
          children: [jsx(oW, {
            src: buildUploadUrl("79f17ef7df0c5ed50af97e6c5e98651536c94352"),
            alt: "Connected projects logo",
            className: _$$s.maxWFull.$
          }), jsxs("div", {
            className: _$$s.flex.flexColumn.pl16.pr16.pt16.pb0.maxWFull.$,
            children: [jsx("p", {
              className: _$$s.$,
              children: renderI18nText("resource_connection.confirm_modal.in_a_connected_project_anyone_you_invite_can_edit", {
                connectingPlanName: jsx("span", {
                  className: _$$s.fontSemiBold.$,
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
                      "data-tooltip-type": Ib.TEXT,
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
              className: _$$s.mr8.$,
              children: jsx($n, {
                variant: "link",
                onClick: e => e.stopPropagation(),
                children: renderI18nText("resource_connection.request_modal.learn_more")
              })
            }), jsxs("div", {
              className: _$$s.flex.gap8.itemsCenter.$,
              children: [jsx($n, {
                variant: "secondary",
                onClick: () => {
                  _$$c.denyResourceConnectionInvite(e.resourceConnectionInvite.id).then(() => {
                    N(!1);
                    a();
                    t(F.enqueue({
                      message: getI18nString("resource_connection.visual_bell.connection_request_denied")
                    }));
                  }).catch(e => {
                    N(!1);
                    console.error("Error denying resource connection invite", e);
                    t(F.enqueue({
                      message: getI18nString("resource_connection.visual_bell.generic_error"),
                      error: !0
                    }));
                  });
                },
                children: renderI18nText("resource_connection.confirm_modal.decline")
              }), w ? jsx($n, {
                disabled: !0,
                children: jsx(qc, {})
              }) : jsx($n, {
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