import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useStore, useSelector } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { useModalManager } from "../905/437088";
import { $n } from "../905/521428";
import { bL } from "../905/38914";
import { vo, Y9, hE, nB, wi } from "../figma_app/272243";
import { getResourceDataOrFallback } from "../905/663269";
import { xf } from "../figma_app/416935";
import { isGovCluster } from "../figma_app/169182";
import { useSubscription } from "../figma_app/288654";
import { XHR } from "../905/910117";
import { ks } from "../figma_app/637027";
import { _ as _$$_, S as _$$S } from "../figma_app/490799";
import { qc } from "../figma_app/858013";
import { B as _$$B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { popModalStack } from "../905/156213";
import { fu } from "../figma_app/831799";
import { xr, _J } from "../figma_app/314264";
import { N as _$$N } from "../905/98916";
import { TeamHasPublishedSite } from "../figma_app/43951";
import { mg, nX } from "../figma_app/336853";
import { HE, Cl, Eq } from "../figma_app/598018";
import { Eh } from "../figma_app/617654";
import { $ as _$$$ } from "../905/834575";
import { registerModal } from "../905/102752";
import { isFigmakeSitesEnabled } from "../figma_app/552876";
import { isSitesFeatureEnabled } from "../905/561485";
import { C2, Cr, p_, Aw, cx, Xu, QL, T as _$$T, Pv, Gu, Kk, Qu, iU } from "../905/566000";
import { A as _$$A } from "../6828/7452";
let n;
var $$j1 = (e => (e.ORG_TEAM_SETTINGS = "org_team_settings", e.PRO_TEAM_SETTINGS = "pro_team_settings", e.ORG_ADMIN_TEAMS_TABLE = "org_admin_teams_table", e.PROJECT_SETTINGS = "project_settings", e.RESOURCE_DISCONNECT_SUCCESS_MODAL = "resource_disconnect_success_modal", e.CONNECTED_PROJECT_ADMIN_UI_FLYOUT = "connected_project_admin_ui_flyout", e))($$j1 || {});
export function $$U2(e) {
  switch (e) {
    case "org_team_settings":
    case "pro_team_settings":
    case "org_admin_teams_table":
      return !1;
    case "project_settings":
    case "resource_disconnect_success_modal":
    case "connected_project_admin_ui_flyout":
      return !0;
    default:
      throwTypeError(e);
  }
}
function B(e) {
  var t;
  let r;
  let n = useDispatch();
  let o = useStore();
  let P = useSelector(e => e.currentUserOrgId);
  let j = useSelector(e => P && e.orgById[P]);
  let B = j && j.shared_container_setting?.external_collaboration_controls;
  let [G, V] = useState(1);
  let [H, z] = useState("");
  let [W, K] = useState("");
  let [Y, $] = useState("");
  let [X, q] = useState();
  let [J, Z] = useState(null);
  let [Q, ee] = useState(null);
  let [et, er] = useState(null);
  let [en, ei] = useState();
  let [ea, es] = useState(!1);
  let [eo, el] = useState(!1);
  let ed = useModalManager(e);
  let ec = useSubscription(TeamHasPublishedSite, {
    teamId: e.teamId
  });
  let eu = _$$N(e.folderId ?? "");
  (t = r || (r = {})).URL_FORMAT = "url_format";
  t.SAME_ORG = "same_org";
  t.EMAIL_FORMAT = "email_format";
  t.EMAIL_MATCH = "email_match";
  t.TRANSFER_ALREADY_INITIATED = "transfer_already_initiated";
  t.NETWORK_OR_OTHER_ERROR = "network_or_other_error";
  t.SAME_TEAM = "same_team";
  t.NON_ORG_DEST_TEAM = "non_org_dest_team";
  t.VIEW_OR_INVITE_ONLY_FOLDER = "view_or_invite_only_folder";
  let ep = $$U2(e.entryPoint);
  let e_ = ep ? "project" : "team";
  if (ep && !e.folderId) throw Error("transferring project, but the project was not present");
  let eh = e.teamId;
  let em = e.folderId;
  let eg = e => jsx("a", {
    className: C2,
    href: "https://help.figma.com/hc/articles/10250387712407",
    target: "_blank",
    children: e || renderI18nText("asset_transfers.request_modal.learn_more")
  });
  let ef = e.shouldTransferCopy ? renderI18nText("asset_transfers.request_modal.you_can_transfer_a_copy_of_this_project_and_its_content_to_another_plan") : renderI18nText("asset_transfers.request_modal.you_can_transfer_this_project_and_its_content_to_another_team");
  let eE = renderI18nText("asset_transfers.request_modal.only_those_on_the_receiving_team_will_have_access", {
    learnMore: eg()
  });
  let ey = ep ? e.shouldTransferCopy ? renderI18nText("asset_transfers.request_modal.you_ll_need_the_email_address_of_a_contact_person_on_that_team_as_well_as_a_link_to_the_team", {
    learnMore: eg()
  }) : renderI18nText("asset_transfers.request_modal.you_ll_need_the_email_address_of_a_contact_person_on_that_other_team", {
    strongPlan: jsx("span", {
      className: Cr,
      children: isGovCluster() ? renderI18nText("asset_transfers.request_modal.figma_gov") : renderI18nText("asset_transfers.request_modal.pro_enterprise_or_organization_plan")
    }),
    learnMore: eg()
  }) : renderI18nText("asset_transfers.request_modal.you_ll_need_the_email_address_of_a_contact_person", {
    strongPlan: jsx("span", {
      className: Cr,
      children: renderI18nText("asset_transfers.request_modal.enterprise_or_organization_plan")
    }),
    learnMore: eg()
  });
  let eb = ep ? renderI18nText("asset_transfers.destination_type.team") : renderI18nText("asset_transfers.destination_type.organization");
  let eT = () => {
    n(popModalStack());
  };
  useEffect(() => {
    en && (em ? xr("Project transfer error", em, eh, o.getState(), {
      error: en
    }) : _J("Team transfer error", eh, o.getState(), {
      error: en
    }));
  }, [en, eh, o, em]);
  let eI = () => {
    if (ei(null), 1 === G) {
      V(2);
      return;
    }
    if (H && !xf(H)) {
      ei("email_format");
      return;
    }
    2 === G && es(!0);
    let t = {
      transfer_type: e_,
      folder_id: em,
      team_id: eh,
      destination_user_email: H,
      destination_team_id: Q,
      destination_org_id: X,
      message: "" === W ? null : W,
      is_transfer_copy: !!e.shouldTransferCopy
    };
    XHR.post("/api/asset_transfer/create_request", t).then(() => {
      e.onRequestClose && e.onRequestClose();
      eT();
      n(VisualBellActions.enqueue({
        message: "Transfer request sent"
      }));
    }, e => {
      "Destination user not found" === e.message || "Destination user is not part of the provided destination org" === e.message || "Destination user is not part of the provided destination team" === e.message ? (ei("email_match"), es(!1)) : "This team already has a transfer initiated" === e.message ? (ei("transfer_already_initiated"), eT(), n(VisualBellActions.enqueue({
        message: "A team transfer was already initiated for this team.",
        error: !0
      })), es(!1)) : "This project already has a transfer initiated" === e.message ? (ei("transfer_already_initiated"), eT(), n(VisualBellActions.enqueue({
        message: "A project transfer was already initiated for this team.",
        error: !0
      }))) : "Folder is invite-only" === e.message || "Folder is view-only" === e.message ? (ei("view_or_invite_only_folder"), eT(), n(VisualBellActions.enqueue({
        message: "Projects that are view-only or invite-only can't be transferred.",
        error: !0
      }))) : (ei("network_or_other_error"), eT(), n(VisualBellActions.enqueue({
        message: e.message || "Something went wrong - check your connection and try again",
        error: !0
      })), es(!1));
    });
  };
  let eS = () => {
    switch (en) {
      case "url_format":
        return renderI18nText("asset_transfers.request_modal.errors.this_link_isn_t_valid");
      case "same_org":
        return ep ? renderI18nText("asset_transfers.request_modal.errors.you_don_t_need_a_transfer_to_move_projects_within_your_own_organization") : renderI18nText("asset_transfers.request_modal.errors.you_don_t_need_a_transfer_to_move_teams_within_your_own_organization");
      case "email_format":
        return renderI18nText("asset_transfers.request_modal.errors.please_use_a_valid_email_format");
      case "email_match":
        return renderI18nText("asset_transfers.request_modal.errors.this_email_isn_t_associated_with_the_destination_linked_above", {
          destinationType: eb
        });
      case "same_team":
        return renderI18nText("asset_transfers.request_modal.errors.you_don_t_need_a_transfer_to_move_projects_within_your_own_team");
      case "non_org_dest_team":
        return renderI18nText("asset_transfers.request_modal.errors.this_links_to_a_team_that_isn't_able_to_receive_transfers");
    }
  };
  let ev = ea ? jsx($n, {
    disabled: !0,
    children: jsx(qc, {})
  }) : e.shouldTransferCopy ? jsx($n, {
    disabled: 2 === G && (!(Y && H) || !eo) || ea,
    onClick: eI,
    children: 1 === G ? renderI18nText("asset_transfers.request_modal.next") : renderI18nText("asset_transfers.request_modal.send")
  }) : jsx($n, {
    disabled: 2 === G && (!(Y && H) || !eo) || ea,
    onClick: eI,
    children: 1 === G ? renderI18nText("asset_transfers.request_modal.next") : renderI18nText("asset_transfers.request_modal.request_transfer")
  });
  let eA = e.shouldTransferCopy ? renderI18nText("asset_transfers.request_modal.transfer_a_copy") : renderI18nText("asset_transfers.request_modal.start_this_transfer");
  return jsx(fu, {
    name: ep ? "Project Transfer Request Modal" : "Team Transfer Request Modal",
    properties: {
      folderId: ep ? em : "",
      teamId: eh,
      entryPoint: e.entryPoint
    },
    children: jsx(bL, {
      manager: ed,
      width: "lg",
      children: jsxs(vo, {
        children: [jsx(Y9, {
          children: jsx(hE, {
            children: eA
          })
        }), jsxs(nB, {
          children: [(() => {
            if (ep && "loading" === eu.status || !ep && "loading" === ec.status) return null;
            let t = e.shouldTransferCopy ? "" : ep ? getI18nString("asset_transfers.request_modal.once_a_transfer_is_accepted_by_an_external_team_it_can_t_be_undone") : getI18nString("asset_transfers.request_modal.once_a_transfer_is_accepted_by_an_external_organization_it_can_t_be_undone");
            if (isSitesFeatureEnabled() || isFigmakeSitesEnabled()) {
              if (ep) {
                let e = getResourceDataOrFallback(eu.data)?.publishedSiteCount;
                e && e > 0 && (t += getI18nString("asset_transfers.request_modal.sites_unpublished_on_project_transfer"));
              } else getResourceDataOrFallback(ec.data?.team)?.hasPublishedSite && (t += getI18nString("asset_transfers.request_modal.sites_unpublished_on_team_transfer"));
            }
            return "" === t ? null : jsx(_$$_, {
              dataTestId: "asset-transfer-warning-banner",
              color: _$$S.ERROR,
              text: jsx("div", {
                children: t
              })
            });
          })(), 1 === G ? jsxs("div", {
            className: _$$s.flex.flexColumn.$,
            children: [jsx("p", {
              className: _$$s.pt16.$,
              children: ep ? ef : renderI18nText("asset_transfers.request_modal.you_can_transfer_this_team_and_its_content_to_another_organization")
            }), jsx("p", {
              className: _$$s.pt16.fontSemiBold.$,
              children: renderI18nText("asset_transfers.request_modal.next_steps")
            }), jsxs("ul", {
              className: p_,
              children: [jsx("li", {
                className: Aw,
                children: ey
              }), !e.shouldTransferCopy && jsx("li", {
                className: Aw,
                children: ep ? renderI18nText("asset_transfers.request_modal.ask_them_for_a_link_to_their_team", {
                  learnMore: eg()
                }) : renderI18nText("asset_transfers.request_modal.ask_your_contact_person_for_a_link_to_their_figma_organization_so_the_team_transfers_to_the_right_place", {
                  learnMore: eg()
                })
              }), e.shouldTransferCopy && jsx("li", {
                className: Aw,
                children: renderI18nText("asset_transfers.request_modal.when_you_send_your_request_the_contact_person_and_their_admins_will_be_notified")
              }), e.shouldTransferCopy && jsx("li", {
                className: Aw,
                children: renderI18nText("asset_transfers.request_modal.once_an_admin_accepts_a_copy_of_the_project_will_be_transferred")
              }), B ? jsx("li", {
                className: Aw,
                children: ep ? e.shouldTransferCopy ? eE : renderI18nText("asset_transfers.request_modal.once_an_admin_accepts_the_project_will_be_transferred") : renderI18nText("asset_transfers.request_modal.once_an_admin_accepts_the_team_will_be_transferred")
              }) : jsx("li", {
                className: Aw,
                children: ep ? e.shouldTransferCopy ? eE : renderI18nText("asset_transfers.request_modal.once_an_admin_accepts_the_project_will_be_transferred_some_of_your_team_may_still_have_access_to_the_project", {
                  learnMore: eg()
                }) : renderI18nText("asset_transfers.request_modal.once_an_admin_accepts_the_team_will_be_transferred_some_of_your_members_may_still_have_access_to_the_team", {
                  learnMore: eg()
                })
              }), B && jsx("li", {
                className: Aw,
                children: ep ? renderI18nText("asset_transfers.request_modal.ask_the_other_organization_to_invite_back_members_due_to_external_collaboration_controls_for_project_v2") : renderI18nText("asset_transfers.request_modal.ask_the_other_organization_to_invite_back_members_due_to_external_collaboration_controls_for_team")
              })]
            })]
          }) : jsxs("div", {
            children: [jsxs("div", {
              className: cx,
              children: [jsx("p", {
                className: _$$s.pt16.fontSemiBold.$,
                children: renderI18nText("asset_transfers.request_modal.add_a_link")
              }), jsx("p", {
                className: _$$s.pt12.$,
                children: renderI18nText("asset_transfers.request_modal.add_link_here_description", {
                  destinationType: eb,
                  learnMore: eg(renderI18nText("asset_transfers.request_modal.learn_how_to_find_the_link"))
                })
              }), jsx(ks, {
                onChange: e => $(e.currentTarget.value),
                onBlur: e => {
                  q(null);
                  Z(null);
                  ee(null);
                  el(!1);
                  ei(null);
                  let t = HE(Y);
                  let r = Cl(Y);
                  let n = mg(Y);
                  if (ep && !r && !t || !n && !ep) {
                    ei("url_format");
                    return;
                  }
                  if (n && nX(Y) === P) {
                    ei("same_org");
                    return;
                  }
                  if (ep ? t && n || r : n) {
                    let e = nX(Y);
                    if (e && Eh.getOrgName({
                      orgId: e
                    }).then(({
                      data: t
                    }) => {
                      ("url_format" === en || "same_org" === en) && ei(null);
                      q(e);
                      e === P || ep || (Z(t.meta), el(!0));
                    }), ep) {
                      let e = Eq(Y);
                      _$$$.getTeamName({
                        teamId: e
                      }).then(({
                        data: t
                      }) => {
                        ("url_format" === en || "non_org_dest_team" === en) && ei(null);
                        ee(e);
                        e !== eh && (er(t.meta), el(!0));
                      });
                    }
                  }
                },
                className: "url_format" === en || "same_org" === en || "same_team" === en || "non_org_dest_team" === en ? Xu : QL,
                value: Y,
                placeholder: getI18nString("asset_transfers.request_modal.web_link")
              }), ("url_format" === en || "same_org" === en || "same_team" === en || "non_org_dest_team" === en) && jsx("span", {
                className: _$$T,
                children: eS()
              }), eo && jsx("div", {
                className: Pv,
                children: jsxs("div", {
                  className: Gu,
                  children: [jsx(_$$B, {
                    className: Kk,
                    svg: _$$A
                  }), jsx("div", {
                    className: Qu,
                    children: ep ? "" === et ? renderI18nText("asset_transfers.request_modal.team_verified") : renderI18nText("asset_transfers.request_modal.data_meta_verified", {
                      assetName: et
                    }) : renderI18nText("asset_transfers.request_modal.data_meta_verified", {
                      assetName: J
                    })
                  })]
                })
              })]
            }), jsx("span", {
              className: _$$s.pt8.$,
              style: {
                fontWeight: 600
              },
              children: renderI18nText("asset_transfers.request_modal.who_to_notify")
            }), jsx(ks, {
              onChange: e => z(e.currentTarget.value),
              className: "email_format" === en || "email_match" === en ? Xu : QL,
              value: H,
              placeholder: getI18nString("asset_transfers.request_modal.email_address")
            }), ("email_format" === en || "email_match" === en) && jsxs("span", {
              className: _$$s.colorTextDanger.$,
              children: [" ", eS(), " "]
            }), jsx(ks, {
              onChange: e => K(e.currentTarget.value),
              className: iU,
              value: W,
              type: "textarea",
              placeholder: getI18nString("asset_transfers.request_modal.add_a_message_if_you_d_like")
            })]
          })]
        }), jsx(wi, {
          children: jsxs("div", {
            className: _$$s.flex.justifyBetween.itemsCenter.wFull.pl2.$,
            children: [jsxs("span", {
              children: [renderI18nText("asset_transfers.request_modal.step_1_of_2", {
                stepNumber: G
              }), " "]
            }), jsxs("div", {
              className: _$$s.flex.gap8.itemsCenter.$,
              children: [jsx($n, {
                variant: "secondary",
                onClick: 1 === G ? eT : () => {
                  V(1);
                },
                children: 1 === G ? renderI18nText("asset_transfers.request_modal.cancel") : renderI18nText("asset_transfers.request_modal.back")
              }), ev]
            })]
          })
        })]
      })
    })
  });
}
export function $$G0() {
  return n ??= registerModal(B, "AssetTransferRequestModal");
}
export const Lg = $$G0;
export const Lq = $$j1;
export const lM = $$U2;