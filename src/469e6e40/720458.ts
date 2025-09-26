import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ButtonBasePrimaryTracked, ButtonSecondaryTracked } from "../figma_app/637027";
import { z as _$$z, Z } from "../905/306088";
import { LoadingOverlay } from "../figma_app/858013";
import { SvgComponent } from "../905/714743";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { renderI18nText } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { R as _$$R } from "../905/304671";
import { popModalStack } from "../905/156213";
import { TrackingProvider } from "../figma_app/831799";
import { FPlanFeatureType } from "../figma_app/191312";
import { S as _$$S } from "../4452/747039";
import { HeaderModal } from "../905/519092";
import { A as _$$A } from "../svg/619883";
let v = "handle_asset_transfer_request_modal--bodyAlreadyComplete--7hIMm";
let f = "handle_asset_transfer_request_modal--list--DiKuV";
let j = "handle_asset_transfer_request_modal--listItem---bYtY";
let y = "handle_asset_transfer_request_modal--bold--Cfp9z";
let w = "handle_asset_transfer_request_modal--learnMore--7TgXM modal--blueLink--9GcJu blue_link--blueLink--9rlnd";
let k = "handle_asset_transfer_request_modal--radioOption--i6qdN";
let E = "handle_asset_transfer_request_modal--radioText--WU7za";
let C = "handle_asset_transfer_request_modal--radioSubtitle--aF3ij";
var N = (e => (e.REMOVE_COLLABORATORS = "remove_collaborators", e.KEEP_COLLABORATORS = "keep_collaborators", e))(N || {});
export function $$I0(e) {
  let t = useDispatch();
  let a = useSelector(e => e.currentUserOrgId);
  let N = useSelector(e => a && e.orgById[a]);
  let I = N && N.bigma_enabled;
  let [T, A] = useState();
  let [R, O] = useState(!1);
  let [L, D] = useState(!1);
  let [M, P] = useState(1);
  let [U, F] = useState("keep_collaborators");
  let q = T?.transfer_type === "project" && !T?.is_transfer_copy;
  useEffect(() => {
    D(!0);
    _$$S.getAssetTransfer({
      selectedAssetTransferRequest: e.selectedAssetTransferRequest
    }).then(({
      data: e
    }) => {
      D(!1);
      A(e.meta);
    }, e => {
      D(!1);
      A(void 0);
    });
  }, [e.selectedAssetTransferRequest, t]);
  let $ = () => jsx("a", {
    className: w,
    href: "https://help.figma.com/hc/articles/10250387712407",
    target: "_blank",
    children: renderI18nText("asset_transfers.request_modal.learn_more")
  });
  let B = () => {
    if (T) return "project" === T.transfer_type ? renderI18nText(T.is_transfer_copy ? "asset_transfers.handle_request_modal.an_admin_from_org_name_wants_to_transfer_the_copy_project_to_the_team" : "asset_transfers.handle_request_modal.an_admin_from_org_name_wants_to_transfer_the_project_to_the_team", {
      orgName: jsx("span", {
        className: y,
        children: T.source_org_name
      }),
      projectName: jsx("span", {
        className: y,
        children: T.source_folder_name
      }),
      teamName: jsx("span", {
        className: y,
        children: T.destination_team_name
      }),
      learnMore: $()
    }) : renderI18nText("asset_transfers.handle_request_modal.an_admin_from_org_name_wants_to_transfer_the_team_name_to_your_organization", {
      orgName: jsx("span", {
        className: y,
        children: T.source_org_name
      }),
      teamName: jsxs("span", {
        className: y,
        children: [T.source_team_name, " "]
      }),
      learnMore: $()
    });
  };
  let G = () => {
    if (T) return "project" === T.transfer_type ? renderI18nText(T.is_transfer_copy ? "asset_transfers.handle_request_modal.a_source_user_email_wants_to_transfer_the_copy_project_name_to_the_team_name_team" : "asset_transfers.handle_request_modal.a_source_user_email_wants_to_transfer_the_project_name_to_the_team_name_team", {
      sourceUserName: jsx("span", {
        className: y,
        children: T.source_user_name
      }),
      sourceUserEmail: jsx("span", {
        className: y,
        children: T.source_user_email
      }),
      projectName: jsx("span", {
        className: y,
        children: T.source_folder_name
      }),
      teamName: jsx("span", {
        className: y,
        children: T.destination_team_name
      }),
      learnMore: $()
    }) : renderI18nText("asset_transfers.handle_request_modal.a_source_user_email_wants_to_transfer_the_team_name_to_your_organization", {
      sourceUserName: jsx("span", {
        className: y,
        children: T.source_user_name
      }),
      sourceUserEmail: jsx("span", {
        className: y,
        children: T.source_user_email
      }),
      teamName: jsxs("span", {
        className: y,
        children: [T.source_team_name, " "]
      }),
      learnMore: $()
    });
  };
  let z = () => {
    if (T) return jsx("p", {
      className: cssBuilderInstance.pt24.$,
      children: T.source_org_name ? B() : G()
    });
  };
  let V = _$$R();
  let W = () => {
    if (N && T) {
      let e = I && N.invite_whitelist_guest_invite_setting && T.has_guest_candidates;
      let t = I && N.invite_whitelist_member_allowlist_enabled;
      let a = N.design_default_paid_status === FPlanFeatureType.RESTRICTED;
      let s = N.whiteboard_default_paid_status === FPlanFeatureType.RESTRICTED;
      let i = !V && s && a;
      let r = "project" === T.transfer_type;
      let l = T.is_transfer_copy;
      if (!l && (e || t || i)) return jsxs("div", {
        children: [jsx("p", {
          className: cssBuilderInstance.pt16.$,
          children: jsx("span", {
            className: y,
            children: r ? renderI18nText("asset_transfers.handle_request_modal.about_this_project") : renderI18nText("asset_transfers.handle_request_modal.about_this_team")
          })
        }), jsxs("ul", {
          className: f,
          children: [e && !l && jsx("li", {
            className: j,
            children: r ? renderI18nText("asset_transfers.handle_request_modal.this_project_has_guest_accounts_if_you_want_them_to_transfer_over_temporarily_change_your_admin_setting_to_allow_guests_before_accepting_learn_more", {
              learnMore: $()
            }) : renderI18nText("asset_transfers.handle_request_modal.this_team_has_guest_accounts_if_you_want_them_to_transfer_over_temporarily_change_your_admin_setting_to_allow_guests_before_accepting_learn_more", {
              learnMore: $()
            })
          }), i && !l && jsx("li", {
            className: j,
            children: r ? renderI18nText("asset_transfers.handle_request_modal.based_on_your_settings_everyone_transferring_over_with_this_project_will_have_role_text_roles_in_figma_design_and_fig_jam_once_they_join_your_organization.seat_rename", {
              roleText: jsx("span", {
                className: y,
                children: renderI18nText("asset_transfers.handle_request_modal.viewer_restricted")
              })
            }) : renderI18nText("asset_transfers.handle_request_modal.based_on_your_settings_everyone_transferring_over_with_this_team_will_have_role_text_roles_in_figma_design_and_fig_jam_once_they_join_your_organization.seat_rename", {
              roleText: jsx("span", {
                className: y,
                children: renderI18nText("asset_transfers.handle_request_modal.viewer_restricted")
              })
            })
          }), t && !l && jsx("li", {
            className: j,
            children: renderI18nText("asset_transfers.handle_request_modal.people_who_aren_t_currently_on_your_organization_s_member_allowlist_won_t_transfer_over_you_ll_need_to_manually_add_them_to_your_organization_or_supportlink_for_help", {
              supportLink: jsx("a", {
                className: w,
                href: "https://help.figma.com/hc/requests/new",
                target: "_blank",
                children: renderI18nText("asset_transfers.handle_request_modal.contact_figma_support")
              })
            })
          })]
        })]
      });
    }
  };
  let H = () => {
    t(popModalStack());
  };
  let Y = R ? jsx(ButtonBasePrimaryTracked, {
    disabled: !0,
    children: jsx(LoadingOverlay, {})
  }) : jsxs(Fragment, {
    children: [jsx(ButtonSecondaryTracked, {
      onClick: 1 !== M && q ? () => {
        P(1);
      } : H,
      children: 1 !== M && q ? renderI18nText("asset_transfers.request_modal.back") : renderI18nText("asset_transfers.request_modal.cancel")
    }), jsx(ButtonBasePrimaryTracked, {
      onClick: 1 === M && q ? () => P(2) : () => {
        O(!0);
        _$$S.approveAssetTransferRequest({
          id: e.selectedAssetTransferRequest,
          removeCollaborators: q && "remove_collaborators" === U
        }).then(() => {
          O(!1);
          H();
          t(VisualBellActions.enqueue({
            message: "Transfer initialized. This should only take a few minutes to complete."
          }));
        }, e => {
          O(!1);
          H();
          t(VisualBellActions.enqueue({
            message: "Something went wrong - check your connection and try again",
            error: !0
          }));
        });
      },
      children: 1 === M && q ? renderI18nText("asset_transfers.request_modal.next") : renderI18nText("asset_transfers.handle_request_modal.accept_transfer")
    })]
  });
  let J = () => q ? renderI18nText("asset_transfers.handle_request_modal.the_project_will_transfer_along_with_only_its_current_files") : renderI18nText("asset_transfers.handle_request_modal.the_project_will_transfer_along_with_its_current_files_and_members_which_may_add_more_editors_to_your_billing_plan_manage_these_roles_in_the_members_tab_in_admin_settings.seat_rename", {
    members: jsx("span", {
      className: y,
      children: renderI18nText("asset_transfers.handle_request_modal.members")
    }),
    adminSettings: jsx("span", {
      className: y,
      children: renderI18nText("asset_transfers.handle_request_modal.admin_settings")
    })
  });
  let K = T?.transfer_type === "project" && T?.is_transfer_copy ? renderI18nText("asset_transfers.handle_request_modal.accept_this_transfer") : renderI18nText("asset_transfers.handle_request_modal.manage_this_transfer");
  return jsx(TrackingProvider, {
    name: T?.transfer_type === "project" ? "Handle Project Transfer Request Modal" : "Handle Team Transfer Request Modal",
    properties: {
      assetTransferRequestId: e.selectedAssetTransferRequest,
      isTransferCopy: T?.is_transfer_copy
    },
    children: jsx(HeaderModal, {
      title: K,
      onClose: H,
      minWidth: 380,
      maxWidth: 380,
      children: L ? jsx("div", {
        className: "handle_asset_transfer_request_modal--loadingContainer--7cpm-",
        children: jsx(LoadingOverlay, {})
      }) : T ? "pending" === T.status ? jsxs(Fragment, {
        children: [!T?.is_transfer_copy && 1 === M && jsx("div", {
          className: "handle_asset_transfer_request_modal--warningBanner--wMFwV",
          children: jsxs("div", {
            className: "handle_asset_transfer_request_modal--bannerLeft--36YoS",
            children: [jsx(SvgComponent, {
              className: "handle_asset_transfer_request_modal--icon--THX6F",
              svg: _$$A
            }), jsx("div", {
              className: "handle_asset_transfer_request_modal--bannerLeftDetails--53MdK",
              children: renderI18nText("asset_transfers.handle_request_modal.once_you_accept_a_transfer_it_can_t_be_undone")
            })]
          })
        }), jsxs("div", {
          className: "handle_asset_transfer_request_modal--contentContainer--m2Xdf",
          children: [1 === M ? (() => {
            let e = T?.transfer_type === "team" && !T?.source_org_name;
            return jsxs("div", {
              children: [T && z(), jsx("p", {
                className: cssBuilderInstance.pt16.$,
                children: jsx("span", {
                  className: y,
                  children: renderI18nText("asset_transfers.handle_request_modal.if_you_accept")
                })
              }), jsxs("ul", {
                className: f,
                children: [jsx("li", {
                  className: j,
                  children: T?.transfer_type === "project" ? renderI18nText("asset_transfers.handle_request_modal.you_ll_see_this_project_in_your_team_and_you_can_edit_its_settings_description_and_more_at_any_time") : renderI18nText("asset_transfers.handle_request_modal.you_ll_see_this_team_when_you_re_in_figma_and_you_can_edit_its_settings_description_and_more_at_any_time")
                }), jsx("li", {
                  className: j,
                  children: T?.transfer_type === "project" ? T.is_transfer_copy ? renderI18nText("asset_transfers.handle_request_modal.the_project_will_copy_with_its_current_files", {
                    sourcePlan: T.source_org_name ?? T.source_team_name
                  }) : J() : renderI18nText("asset_transfers.handle_request_modal.the_team_will_transfer_along_with_its_current_projects_files_and_members")
                }), jsx("li", {
                  className: j,
                  children: T?.transfer_type === "project" ? renderI18nText("asset_transfers.handle_request_modal.libraries_shared_fonts_and_other_resources_that_this_project_used_to_be_connected_to_may_be_unavailable_after_this_transfer_learn_more", {
                    learnMore: $()
                  }) : renderI18nText("asset_transfers.handle_request_modal.libraries_shared_fonts_and_other_resources_that_this_team_used_to_be_connected_to_may_be_unavailable_after_this_transfer_learn_more", {
                    learnMore: $()
                  })
                }), e ? jsx("li", {
                  className: j,
                  children: renderI18nText("asset_transfers.handle_request_modal.seats_within_this_team_will_transfer_to_your_org")
                }) : null, e ? jsx("li", {
                  className: j,
                  children: renderI18nText("asset_transfers.handle_request_modal.youll_receive_credit_for_the_remaining_time")
                }) : null]
              }), W()]
            });
          })() : jsx(Fragment, {
            children: jsxs(_$$z, {
              value: U,
              onChange: e => {
                F(e);
              },
              className: "handle_asset_transfer_request_modal--radioGroup--rIenE",
              dataTestId: "permissions-level-radio-group",
              children: [jsx(Z, {
                value: "keep_collaborators",
                className: k,
                children: jsx("p", {
                  className: E,
                  children: renderI18nText("asset_transfers.handle_request_modal.keep_all_existing_collaborators")
                })
              }, "remove-collaborators"), jsx("p", {
                className: C,
                children: renderI18nText("asset_transfers.handle_request_modal.no_collaborators_will_lose_access")
              }), jsx(Z, {
                value: "remove_collaborators",
                className: k,
                children: jsx("p", {
                  className: E,
                  children: renderI18nText("asset_transfers.handle_request_modal.remove_collaborators")
                })
              }, "remove-collaborators"), jsx("p", {
                className: C,
                children: renderI18nText("asset_transfers.handle_request_modal.you_ll_become_the_owner_of_the_project_and_its_files")
              })]
            })
          }), jsx("div", {
            className: "handle_asset_transfer_request_modal--buttonBox---Uu3X",
            children: Y
          })]
        })]
      }) : jsx("div", {
        className: v,
        children: T && T.handled_by_name && T.handled_by_email ? renderI18nText("asset_transfers.handle_request_modal.it_looks_like_approver_name_approver_email_has_already_accepted_this_transfer", {
          approverName: jsx("span", {
            className: y,
            children: T.handled_by_name
          }),
          approverEmail: jsx("span", {
            className: y,
            children: T.handled_by_email
          })
        }) : T?.transfer_type === "project" ? renderI18nText("asset_transfers.handle_request_modal.it_looks_like_this_project_has_already_been_transferred_to_your_team") : renderI18nText("asset_transfers.handle_request_modal.it_looks_like_this_team_has_already_been_transferred_to_your_organization")
      }) : jsx("div", {
        className: v,
        children: renderI18nText("asset_transfers.handle_request_modal.the_transfer_request_you_received_has_been_cancelled_by_the_team_or_organization_that_sent_it")
      })
    })
  });
}
export const HandleAssetTransferRequestModal = $$I0;