import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { PureComponent } from "react";
import { wA } from "../vendor/514228";
import { eD } from "../figma_app/876459";
import { Jn } from "../905/17223";
import { tM, rb, Us, vd } from "../figma_app/637027";
import { t as _$$t, tx } from "../905/303541";
import { sf } from "../905/929976";
import { Ce, Lo } from "../905/156213";
import { WX } from "../figma_app/482142";
import { c as _$$c } from "../905/370443";
import { T8, fu } from "../figma_app/831799";
import { F } from "../905/224";
import { Ht, WW, Wf } from "../figma_app/345997";
import { Bi } from "../905/652992";
import { Iv } from "../905/548208";
import { pE, ZN } from "../figma_app/630077";
import { qK, Ju } from "../905/102752";
import { d_ } from "../figma_app/918700";
import { bP } from "../905/739964";
import { v0, pL } from "../figma_app/639088";
let x = "upsell_modals--contactAdmins--Jb-3g";
let $$S0 = "UPSELL_ADD_EDITOR_MODAL";
let $$w1 = "UPSELL_INVITE_ONLY_MODAL";
let $$C2 = "UPSELL_VIEW_ONLY_MODAL";
function T(e) {
  let t = wA();
  let i = e.modalShown.data.team;
  let r = () => {
    t(Ce());
  };
  let s = () => {
    t(Lo());
  };
  let o = !i.subscription;
  let h = i.canEdit;
  let g = i.canAdmin;
  let f = o ? _$$t("payments_modal.upgrade_to_professional") : _$$t("payments_modal.update_your_payment");
  return jsxs(d_, {
    size: "small",
    children: [jsx("div", {
      className: "upsell_modals--title---QZg6 modal--title--sEkWg",
      children: f
    }), e.message, o && jsxs("div", {
      children: [jsx("br", {}), jsx("a", {
        className: "upsell_modals--link--H0izK blue_link--blueLink--9rlnd",
        href: "/pricing",
        target: "_blank",
        rel: "noopener",
        children: tx("payments_modal.learn_more_about_team_plans")
      }), !h && jsx("div", {
        className: x,
        children: tx("payments_modal.contact_an_admin_of_team_name_to_upgrade", {
          teamName: jsx("span", {
            className: "upsell_modals--team_name--q8B5-",
            children: i.name
          })
        })
      }), jsxs("div", {
        className: v0,
        children: [jsx(tM, {
          onClick: s,
          trackingProperties: {
            teamId: i.id,
            trackingDescriptor: _$$c.CANCEL
          },
          children: tx("payments_modal.cancel")
        }), h && jsx(rb, {
          className: pL,
          onClick: () => {
            r();
            t(WX({
              teamId: i.id,
              selectedView: e.selectedView
            }));
          },
          trackingProperties: {
            teamId: i.id,
            trackingDescriptor: _$$c.UPGRADE
          },
          children: tx("payments_modal.upgrade")
        })]
      })]
    }), !o && jsxs("div", {
      children: [!g && jsx("div", {
        className: x,
        children: tx("payments_modal.contact_an_admin_to_update_your_payment_source")
      }), jsxs("div", {
        className: v0,
        children: [jsx(tM, {
          onClick: s,
          trackingProperties: {
            teamId: i.id,
            trackingDescriptor: _$$c.CANCEL
          },
          children: tx("payments_modal.cancel")
        }), g && jsx(rb, {
          className: pL,
          onClick: () => {
            r();
            e.dispatch(sf({
              view: "teamAdminConsole",
              teamId: i.id,
              teamAdminConsoleViewTab: Iv.SETTINGS
            }));
          },
          trackingProperties: {
            teamId: i.id
          },
          children: tx("payments_modal.update_payment")
        })]
      })]
    })]
  });
}
qK($$S0, e => jsx(R, {
  ...e
}));
qK($$w1, e => {
  let {
    team,
    editorType,
    upsellSource
  } = e.modalShown.data;
  return jsx(bP, {
    team,
    resource: Bi.INVITE_ONLY_PROJECT,
    action: pE.INVITE_ONLY_PROJECT,
    currentPlan: F.Plan.STARTER,
    upsellPlan: F.Plan.PRO,
    editorType,
    upsellSource
  });
});
qK($$C2, e => {
  let {
    team,
    editorType,
    upsellSource
  } = e.modalShown.data;
  return jsx(bP, {
    team,
    resource: Bi.VIEW_ONLY_PROJECT,
    action: pE.VIEW_ONLY_PROJECT,
    currentPlan: F.Plan.STARTER,
    upsellPlan: F.Plan.PRO,
    editorType,
    upsellSource
  });
});
let k = class e extends PureComponent {
  render() {
    let t;
    let {
      team
    } = this.props.modalShown.data;
    let r = team?.name;
    t = team && team.subscription ? jsx("div", {
      children: tx("payments_modal.team_name_is_currently_locked_please_update_your_payment_source_to_unlock_team_name_and_modify_team_members", {
        teamName: r
      })
    }) : jsxs("div", {
      children: [tx("payments_modal.you_ve_reached_your_plan_s_m_a_x_f_r_e_e_editors_editor_limit_user_text_you_ve_invited_will_be_granted_view_access_but_they_won_t_be_able_to_edit.seat_rename", {
        userText: r,
        maxFreeEditors: Ht
      }), jsx("br", {}), jsx("br", {}), tx("payments_modal.you_may_give_them_edit_access_later_if_you_upgrade_to_the_professional_plan_or_downgrade_other_editors_on_your_team_to_viewers.seat_rename")]
    });
    return T8(jsx(T, {
      message: t,
      ...this.props
    }), e.displayName, {
      teamId: team.id
    });
  }
};
k.displayName = "AddEditorUpsellModal";
let R = k;
Ju(function (e) {
  let t;
  let i;
  let r = wA();
  let c = () => {
    r(Lo());
  };
  let g = e.team;
  g.subscription ? (t = tx("payments_modal.your_team_is_locked"), i = tx("payments_modal.your_professional_team_plan_is_no_longer_active_please", {
    teamName: g.name
  })) : (t = tx("payments_modal.upgrade_to_verb_resource_name", {
    verb: (() => {
      switch (e.action) {
        case ZN.MOVE_FILES:
        case ZN.MOVE_FOLDER:
          return _$$t("payments_modal.move");
        case ZN.DUPLICATE_FILES:
          return _$$t("payments_modal.duplicate");
        case ZN.RESTORE_FILES:
          return _$$t("payments_modal.restore");
        case ZN.IMPORT_FILES:
          return _$$t("payments_modal.import");
        default:
          return _$$t("payments_modal.add");
      }
    })(),
    resourceName: e.action === ZN.MOVE_FOLDER ? _$$t("payments_modal.this_project") : e.action === ZN.IMPORT_FILES ? _$$t("payments_modal.more_files") : e.numFiles && e.numFiles > 1 ? _$$t("payments_modal.these_files") : _$$t("payments_modal.this_file")
  }), i = tx("payments_modal.on_the_starter_plan_your_team_is_limited", {
    maxFreeFiles: WW,
    maxFreeFolders: Wf
  }));
  return jsx(fu, {
    name: "SimpleFileLimitUpsellModal",
    properties: {
      teamId: g.id,
      action: e.action
    },
    children: jsxs(d_, {
      title: t,
      titleClassName: "upsell_modals--titleSmall--L92xE modal--title--sEkWg",
      size: 360,
      popStack: !0,
      disableClickOutsideToHide: !0,
      className: "upsell_modals--modalSmall--V-tca",
      children: [jsx(Jn, {
        className: "upsell_modals--closeButton--tyiun close_button--modalUpperRightCorner--eKAQg",
        onClick: c
      }), jsxs("span", {
        children: [i, jsx("br", {})]
      }), !g.subscription && jsxs(Fragment, {
        children: [jsx("br", {}), jsx("span", {
          children: tx("payments_modal.if_you_d_like_you_can_upgrade_your_plan_now_or_learn_more_about_our_paid_plans", {
            learnMoreAboutOurPaidPlans: jsx(Us, {
              target: "_blank",
              href: "/pricing",
              trusted: !0,
              children: tx("payments_modal.learn_more_about_our_paid_plans")
            })
          })
        })]
      }), jsxs("div", {
        className: v0,
        children: [jsx(tM, {
          onClick: c,
          trackingProperties: {
            trackingDescriptor: _$$c.CANCEL
          },
          children: tx("payments_modal.cancel")
        }), jsx(vd, {
          className: pL,
          onClick: () => {
            c();
            r(WX({
              teamId: e.team.id,
              openInNewTab: !eD,
              selectedView: {
                view: "team",
                teamId: e.team.id
              }
            }));
          },
          trackingProperties: {
            teamId: g.id,
            trackingDescriptor: _$$c.UPGRADE
          },
          children: tx("payments_modal.upgrade")
        })]
      })]
    })
  });
}, "SimpleFileLimitUpsellModal");
export const oE = $$S0;
export const Dp = $$w1;
export const Ni = $$C2;