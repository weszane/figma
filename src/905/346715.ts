import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useCallback, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { debounce } from "../905/915765";
import { useModalManager } from "../905/437088";
import { ModalRootComponent } from "../905/38914";
import { vo, Y9, hE, nB, wi, jk } from "../figma_app/272243";
import { Button } from "../905/521428";
import { K } from "../905/443068";
import { C as _$$C } from "../905/520159";
import { xf } from "../figma_app/416935";
import { isGovCluster, includesGovDomain, buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { BigTextInputForwardRef } from "../figma_app/637027";
import { LoadingOverlay } from "../figma_app/858013";
import { SvgComponent } from "../905/714743";
import { s as _$$s2 } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { hideModal, showModalHandler, popModalStack } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { FOrganizationLevelType, FResourceCategoryType } from "../figma_app/191312";
import { mg, nX } from "../figma_app/336853";
import { Cl, Eq } from "../figma_app/598018";
import { Eh } from "../figma_app/617654";
import { c as _$$c } from "../905/32166";
import { $ as _$$$ } from "../905/834575";
import { registerModal } from "../905/102752";
import { CE, XK, C2, Xu, QL, T as _$$T, Pv, Gu, Kk, Qu, Cr, iU, g2 } from "../figma_app/397283";
import { A as _$$A } from "../6828/7452";
var $$D1 = (e => (e.PROJECT_SETTINGS = "project_settings", e.CONNECTED_PROJECT_ADMIN_UI = "connected_project_admin_ui", e.CONNECTED_PROJECT_ORG_PAGE = "connected_project_org_page", e.PROJECT_SETTINGS_ONBOARDING_CTA = "project_settings_onboarding_cta", e))($$D1 || {});
var L = (e => (e.URL_FORMAT = "url_format", e.URL_SAME_PLAN = "url_same_plan", e.EMAIL_FORMAT = "email_format", e.EMAIL_USER_NOT_FOUND = "email_user_not_found", e.EMAIL_NOT_MATCH_PLAN = "email_not_match_plan", e.EMAIL_SAME_DOMAIN = "email_same_domain", e.EMAIL_USER_ALREADY_EXISTS = "email_user_already_exists", e.NON_GOV_URL = "non_gov_url", e))(L || {});
let $$F0 = registerModal(function (e) {
  let t;
  let i = useDispatch();
  let u = () => {
    i(hideModal());
  };
  let p = useModalManager({
    ...e,
    onClose: u
  });
  let N = e.folder.plan;
  let D = N.key.parentId;
  let [L, F] = useState(1);
  let [j, U] = useState("");
  let [B, V] = useState("");
  let [G, z] = useState("");
  let [H, W] = useState(null);
  let [K, Y] = useState(null);
  let [q, $] = useState(null);
  let [Z, X] = useState();
  let [Q, J] = useState();
  let [ee, et] = useState(!1);
  let [ei, en] = useState(!1);
  let er = e => {
    switch (e) {
      case "url_format":
        return renderI18nText("resource_connection.request_modal.errors.this_link_isn_t_valid");
      case "url_same_plan":
        return renderI18nText("resource_connection.request_modal.errors.you_don_t_need_to_connect_with_your_own_plan", {
          connectedPlanType: q
        });
      case "email_format":
        return renderI18nText("resource_connection.request_modal.errors.please_use_a_valid_email_format");
      case "email_not_match_plan":
        return renderI18nText("resource_connection.request_modal.errors.this_email_isn_t_associated_with_the_plan_linked_above", {
          connectedPlanType: q
        });
      case "email_user_not_found":
        return renderI18nText("resource_connection.request_modal.errors.user_not_found");
      case "non_gov_url":
        return renderI18nText("resource_connection.request_modal.errors.non_gov_url");
    }
  };
  let ea = useCallback(e => {
    J(null);
    U(e);
  }, [J, U]);
  let es = useMemo(() => debounce(ea, 300), [ea]);
  let eo = useMemo(() => debounce(z, 300), [z]);
  let el = useCallback(() => {
    if ("" === G) {
      X(null);
      return;
    }
    W(null);
    Y(null);
    $(null);
    en(!1);
    let t = Cl(G);
    let i = mg(G);
    if (!(i || t)) {
      X("url_format");
      return;
    }
    if (isGovCluster() && !includesGovDomain(G)) {
      X("non_gov_url");
      return;
    }
    let n = null;
    if (i) {
      if ($(FOrganizationLevelType.ORG), (n = nX(G) || null) === D) {
        X("url_same_plan");
        return;
      }
      Eh.getOrgName({
        orgId: n
      }).then(({
        data: e
      }) => {
        Z && X(null);
        W(n);
        Y(e.meta);
        en(!0);
      });
    } else if (t) {
      if ($(FOrganizationLevelType.TEAM), (n = Eq(G) || null) === e.folder.teamId) {
        X("url_same_plan");
        return;
      }
      _$$$.getTeamName({
        teamId: n
      }).then(({
        data: e
      }) => {
        Z && X(null);
        W(n);
        Y(e.meta);
        en(!0);
      });
    }
  }, [G, Z, D, e.folder.teamId]);
  useEffect(() => {
    if ("" === j) {
      J(null);
      return;
    }
    if (!xf(j)) {
      J("email_format");
      return;
    }
  }, [j, Q, J]);
  useEffect(() => {
    el();
  }, [G, el]);
  return jsx(TrackingProvider, {
    name: "Project Connection Request Modal",
    properties: {
      folderId: e.folder.id,
      entryPoint: e.entryPoint
    },
    children: jsx(ModalRootComponent, {
      manager: p,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: 1 === L ? renderI18nText("resource_connection.request_modal.which_team_do_you_want_to_connect_to") : renderI18nText("resource_connection.request_modal.whos_your_contact_on_that_team")
          })
        }), jsx(nB, {
          padding: 0,
          children: jsx("div", {
            className: _$$s2.pb12.$,
            children: 1 === L ? jsxs(Fragment, {
              children: [jsx(oW, {
                className: CE,
                src: buildUploadUrl("679f86548ac7c464e28b281f1090fa6f744cf61b"),
                alt: "Connected projects logo"
              }), jsxs("div", {
                className: _$$s2.p16.$,
                children: [jsx("p", {
                  className: XK,
                  children: renderI18nText("resource_connection.request_modal.get_their_figma_link", {
                    FigmaLinkHC: (t = renderI18nText("resource_connection.request_modal.figma_link_hc"), jsx("a", {
                      className: C2,
                      href: "https://help.figma.com/hc/articles/30124855491863-Guide-to-connected-projects#h_01JMJDKJFD68CH88F663KG08AJ",
                      target: "_blank",
                      children: t || renderI18nText("resource_connection.request_modal.learn_more")
                    }))
                  })
                }), jsx(BigTextInputForwardRef, {
                  autoFocus: !0,
                  onChange: e => eo(e.currentTarget.value),
                  className: Z ? Xu : QL,
                  value: G,
                  placeholder: getI18nString("resource_connection.request_modal.add_the_figma_team_link")
                }), Z && jsx("span", {
                  className: _$$T,
                  children: er(Z)
                }), ei && jsx("div", {
                  className: Pv,
                  children: jsxs("div", {
                    className: Gu,
                    children: [jsx(SvgComponent, {
                      className: Kk,
                      svg: _$$A
                    }), jsx("div", {
                      className: Qu,
                      children: "" === K ? renderI18nText("resource_connection.request_modal.generic_plan_link_verified") : renderI18nText("resource_connection.request_modal.plan_link_verified", {
                        planName: K
                      })
                    })]
                  })
                }), jsx("div", {
                  className: _$$s2.pt16.$,
                  children: renderI18nText("resource_connection.request_modal.or", {
                    askThemToCreateOneButton: jsx("button", {
                      className: C2,
                      onClick: () => {
                        i(showModalHandler({
                          type: M,
                          data: {
                            projectPlan: N
                          }
                        }));
                      },
                      children: renderI18nText("resource_connection.request_modal.connect_with_someone_without_a_figma_account")
                    })
                  })
                })]
              })]
            }) : jsxs("div", {
              className: _$$s2.p16.$,
              children: [jsx("p", {
                className: XK,
                children: renderI18nText("resource_connection.request_modal.your_contact_will_be_added_to_the_connected_project", {
                  hostPlanName: jsx("span", {
                    className: Cr,
                    children: N.name
                  })
                })
              }), jsx(BigTextInputForwardRef, {
                autoFocus: !0,
                onChange: e => es(e.currentTarget.value),
                className: Q ? Xu : QL,
                value: j,
                placeholder: getI18nString("resource_connection.request_modal.add_your_contact_email")
              }), Q && jsxs("span", {
                className: _$$s2.colorTextDanger.$,
                children: [" ", er(Q), " "]
              }), jsx(BigTextInputForwardRef, {
                onChange: e => V(e.currentTarget.value),
                className: iU,
                value: B,
                type: "textarea",
                placeholder: getI18nString("resource_connection.request_modal.add_a_message")
              })]
            })
          })
        }), jsx(wi, {
          children: jsxs("div", {
            className: _$$s2.flex.justifyBetween.itemsCenter.wFull.pl2.$,
            children: [jsxs("span", {
              children: [renderI18nText("resource_connection.request_modal.step_1_of_2", {
                stepNumber: L
              }), " "]
            }), jsxs("div", {
              className: _$$s2.flex.gap8.itemsCenter.$,
              children: [jsx(Button, {
                variant: "secondary",
                onClick: 1 === L ? u : () => {
                  F(1);
                },
                children: 1 === L ? renderI18nText("resource_connection.request_modal.cancel") : renderI18nText("resource_connection.request_modal.back")
              }), ee ? jsx(Button, {
                disabled: !0,
                children: jsx(LoadingOverlay, {})
              }) : jsx(Button, {
                disabled: !!ee || (1 === L ? !(q && G) || !ei : 2 === L && (!(q && G && j) || !ei)),
                onClick: () => {
                  if (X(null), J(null), 1 === L) {
                    F(2);
                    return;
                  }
                  if (2 === L && et(!0), !(q && H && D)) return;
                  let t = {
                    host_plan_type: N.key.type,
                    host_plan_id: D,
                    resource_type: FResourceCategoryType.FOLDER,
                    resource_id_or_key: e.folder.id,
                    connecting_plan_type: q,
                    connecting_plan_id: H,
                    connecting_invitee_email: j,
                    message: "" === B ? null : B
                  };
                  _$$c.createResourceConnectionInvite(t).then(() => {
                    et(!1);
                    u();
                    i(VisualBellActions.enqueue({
                      message: getI18nString("resource_connection.visual_bell.we_ve_sent_a_notification_to_plan_name", {
                        connectedPlanName: K || ""
                      })
                    }));
                    i(_$$b({
                      initiated_first_resource_connection: !0
                    }));
                  }).catch(e => {
                    "Connecting invitee not found" === e.message ? (J("email_user_not_found"), et(!1)) : "Connecting invitee is not part of the connecting plan" === e.message ? (J("email_not_match_plan"), et(!1)) : "A pending invite already exists for this resource" === e.message ? (u(), i(VisualBellActions.enqueue({
                      message: getI18nString("resource_connection.visual_bell.pending_connection_request_exists"),
                      error: !0
                    })), et(!1)) : "A connection already exists for this resource" === e.message ? (u(), i(VisualBellActions.enqueue({
                      message: getI18nString("resource_connection.visual_bell.connection_already_exists"),
                      error: !0
                    }))) : "Host plan has reached active connection and outgoing invite limit" === e.message ? (u(), i(VisualBellActions.enqueue({
                      message: N.key.type === FOrganizationLevelType.ORG ? getI18nString("resource_connection.visual_bell.org_at_limit") : getI18nString("resource_connection.visual_bell.team_at_limit"),
                      error: !0
                    }))) : "Connecting plan owner's email domain cannot match host plan email domain" === e.message ? (u(), i(VisualBellActions.enqueue({
                      message: N.key.type === FOrganizationLevelType.ORG ? getI18nString("resource_connection.visual_bell.same_team_owner_domain_host_org_error") : getI18nString("resource_connection.visual_bell.same_team_owner_domain_host_team_error"),
                      error: !0
                    }))) : "Cannot initiate connection when org does not allow external guests to join organization" === e.message ? (u(), i(VisualBellActions.enqueue({
                      message: getI18nString("resource_connection.visual_bell.org_does_not_allow_external_guests_to_join_organization"),
                      error: !0
                    }))) : (u(), i(VisualBellActions.enqueue({
                      message: getI18nString("resource_connection.visual_bell.generic_error"),
                      error: !0
                    })), et(!1));
                  });
                },
                children: 1 === L ? renderI18nText("resource_connection.request_modal.next") : renderI18nText("resource_connection.request_modal.send")
              })]
            })]
          })
        })]
      })
    })
  });
}, "ResourceConnectRequestModal");
let M = registerModal(function (e) {
  let t = useDispatch();
  let i = () => {
    t(hideModal());
  };
  let h = useModalManager({
    ...e,
    onClose: i
  });
  let [g, _] = useState("");
  let [A, E] = useState();
  let x = useCallback(e => {
    E(null);
    _(e);
  }, [E, _]);
  let w = useMemo(() => debounce(x, 300), [x]);
  useEffect(() => {
    if ("" === g) {
      E(null);
      return;
    }
    if (!xf(g)) {
      E("email_format");
      return;
    }
  }, [g, A]);
  return jsx(ModalRootComponent, {
    manager: h,
    width: "lg",
    children: jsxs(vo, {
      children: [jsx(Y9, {
        children: jsx(hE, {
          children: jsxs("div", {
            className: g2,
            children: [jsx(K, {
              onClick: () => {
                t(popModalStack());
              },
              "aria-label": getI18nString("resource_connection.aria_label.button"),
              children: jsx(_$$C, {})
            }), renderI18nText("resource_connection.create_new_team_modal.who_would_you_like_to_collaborate_with")]
          })
        })
      }), jsxs(nB, {
        children: [jsx("p", {
          className: _$$s2.py8.$,
          children: renderI18nText("resource_connection.create_new_team_modal.we_will_email_them_with_a_link_to_set_up_a_figma_team")
        }), jsxs("div", {
          className: _$$s2.pb12.$,
          children: [jsx(BigTextInputForwardRef, {
            value: g,
            onChange: e => w(e.target.value),
            className: A ? Xu : QL,
            maxLength: 255,
            placeholder: getI18nString("resource_connection.create_new_team_modal.add_your_contacts_email")
          }), A && jsxs("span", {
            className: _$$s2.colorTextDanger.$,
            children: [" ", (t => {
              switch (t) {
                case "email_format":
                  return renderI18nText("resource_connection.request_modal.errors.please_use_a_valid_email_format");
                case "email_user_already_exists":
                  return renderI18nText("resource_connection.visual_bell.user_already_exists_contact_them_to_get_team_link");
                case "email_same_domain":
                  if (e.projectPlan.key.type === FOrganizationLevelType.ORG) return renderI18nText("resource_connection.visual_bell.same_team_owner_domain_host_org_error");
                  return renderI18nText("resource_connection.visual_bell.same_team_owner_domain_host_team_error");
              }
            })(A), " "]
          })]
        })]
      }), jsx(wi, {
        children: jsxs(jk, {
          children: [jsx(Button, {
            variant: "secondary",
            onClick: i,
            children: renderI18nText("resource_connection.request_modal.cancel")
          }), jsx(Button, {
            variant: "primary",
            disabled: "" === g || !!A,
            onClick: () => {
              e.projectPlan.key.parentId && _$$c.sendCreateTeamEmail({
                host_plan_type: e.projectPlan.key.type,
                host_plan_id: e.projectPlan.key.parentId,
                invitee_email: g
              }).then(() => {
                t(hideModal());
                t(VisualBellActions.enqueue({
                  message: getI18nString("resource_connection.visual_bell.instructions_sent")
                }));
              }).catch(e => {
                "User already exists" === e.message ? E("email_user_already_exists") : "Invitee email domain cannot match host plan email domain" === e.message ? E("email_same_domain") : t(VisualBellActions.enqueue({
                  message: getI18nString("resource_connection.visual_bell.generic_error"),
                  error: !0
                }));
              });
            },
            children: renderI18nText("resource_connection.request_modal.send")
          })]
        })
      })]
    })
  });
}, "InviteToCreateATeamModal");
export const C = $$F0;
export const wR = $$D1;