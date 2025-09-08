import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import i from "classnames";
import { Rs } from "../figma_app/288654";
import { x$, cn } from "../figma_app/141320";
import { Us, vd } from "../figma_app/637027";
import { B } from "../905/714743";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { Dw } from "../figma_app/976345";
import { hideModal } from "../905/156213";
import { WX } from "../figma_app/482142";
import { fu } from "../figma_app/831799";
import { _6 } from "../figma_app/386952";
import { iZ } from "../905/372672";
import { f as _$$f } from "../905/940356";
import { FStudentTeamStatusType } from "../figma_app/191312";
import { UpR, FA_ } from "../figma_app/43951";
import { registerModal } from "../905/102752";
import { OJ } from "../905/519092";
import { A as _$$A } from "../svg/619883";
var o = i;
export let $$k0 = registerModal(function (e) {
  let t = iZ();
  let n = useDispatch();
  let i = _6();
  let w = Rs(UpR, {});
  let k = Rs(FA_, {
    teamId: e.teamId || ""
  }, {
    enabled: !!e.teamId
  });
  let E = !!_$$f("edu_hide_verification");
  if ("loaded" !== w.status || "loaded" !== k.status || !t) return null;
  let C = x$(w.data.currentUser?.eduPeriodEnd, cn(t));
  if (C === 1 / 0 || !k.data.team) return null;
  let I = k.data.team.isOwner;
  let A = C > 0 ? function (e) {
    if (e.studentTeamState !== FStudentTeamStatusType.STUDENT_TEAM_CURRENT) return null;
    let t = null;
    e.isOwner ? t = renderI18nText("edu.offboarding_modal.the_team_you_own_will_become_view_only_for_all_members_once_your_plan_expires", {
      teamName: jsx("strong", {
        children: e.name
      })
    }) : e.canEdit && (t = renderI18nText("edu.offboarding_modal.you_ll_lose_edit_access_to_team_once_your_plan_expires", {
      teamName: jsx("strong", {
        children: e.name
      })
    }));
    return t;
  }(k.data.team) : function (e) {
    if (e.studentTeamState !== FStudentTeamStatusType.STUDENT_TEAM_EXPIRED) return null;
    let t = null;
    e.isOwner ? t = renderI18nText("edu.offboarding_modal.the_team_you_own_is_now_view_only_for_all_members", {
      teamName: jsx("strong", {
        children: e.name
      })
    }) : e.canView && (t = renderI18nText("edu.offboarding_modal.you_can_no_longer_edit_team", {
      teamName: jsx("strong", {
        children: e.name
      })
    }));
    return t;
  }(k.data.team);
  if (null === A) return null;
  let S = () => {
    n(hideModal());
  };
  let N = () => {
    S();
    n(Dw({}));
  };
  return jsx(fu, {
    name: "Edu Offboarding Modal",
    children: jsxs(OJ, {
      title: getI18nString("edu.offboarding_modal.your_education_status"),
      maxWidth: 381,
      onClose: S,
      children: [jsxs("div", {
        className: o()(_$$s.flex.itemsCenter.p8.$, _$$s.$$if(C > 0, _$$s.colorBgWarningTertiary, _$$s.colorBgDangerTertiary).$),
        children: [jsx(B, {
          className: _$$s.p8.colorIcon.$,
          svg: _$$A
        }), jsx("p", {
          children: jsx("strong", {
            children: C > 0 ? renderI18nText("edu.offboarding_modal.your_education_plan_expires_in_days", {
              daysLeft: C
            }) : renderI18nText("edu.offboarding_modal.your_education_plan_has_expired")
          })
        })]
      }), jsxs("div", {
        className: _$$s.px16.pt8.pb12.$,
        children: [jsx("p", {
          children: A
        }), jsxs("div", {
          className: _$$s.pt16.flex.$,
          children: [jsx("div", {
            className: _$$s.w4.h4.colorBgDisabled.mt6.mr8.flexShrink0.$
          }), jsxs("p", {
            children: [jsx("strong", {
              children: renderI18nText("edu.offboarding_modal.if_you_graduated")
            }), I ? renderI18nText("edu.offboarding_modal.continue_below_to_upgrade_your_team_s_to_the_professional_plan_or", {
              createProTeamLink: jsx(Us, {
                onClick: N,
                trusted: !0,
                children: renderI18nText("edu.offboarding_modal.create_a_new_professional_team")
              })
            }) : renderI18nText("edu.offboarding_modal.create_a_new_professional_team_and_start_fresh")]
          })]
        }), !E && jsxs("div", {
          className: _$$s.pt16.flex.$,
          children: [jsx("div", {
            className: _$$s.w4.h4.colorBgDisabled.mt6.mr8.flexShrink0.$
          }), jsxs("p", {
            children: [jsx("strong", {
              children: renderI18nText("edu.offboarding_modal.if_you_re_still_in_education")
            }), renderI18nText("edu.offboarding_modal.verify_your_status_to_keep_collaborating_with_your_teams", {
              verifyStatusLink: jsx(Us, {
                href: "/education/apply",
                target: "_blank",
                trusted: !0,
                children: renderI18nText("edu.offboarding_modal.verify_your_status")
              })
            })]
          })]
        }), jsxs("div", {
          className: _$$s.pt16.flex.$,
          children: [jsx("div", {
            className: _$$s.w4.h4.colorBgDisabled.mt6.mr8.flexShrink0.$
          }), jsxs("p", {
            children: [jsx("strong", {
              children: renderI18nText("edu.offboarding_modal.to_save_your_work")
            }), I ? renderI18nText("edu.offboarding_modal.duplicate_or_move_files_to_your_drafts_to_save_them_for_later_and_consider_transferring_ownership_of_your_team_s", {
              transferringOwnershipLink: jsx(Us, {
                href: "https://help.figma.com/hc/articles/360038512093",
                target: "_blank",
                trusted: !0,
                children: renderI18nText("edu.offboarding_modal.transferring_ownership")
              })
            }) : renderI18nText("edu.offboarding_modal.duplicate_or_move_files_to_your_drafts_to_save_them_for_later")]
          })]
        }), jsx("div", {
          className: _$$s.flex.flexColumn.itemsEnd.pt32.$,
          children: I ? jsx(vd, {
            onClick: () => {
              S();
              n(WX({
                teamId: e.teamId || null,
                selectedView: i
              }));
            },
            children: renderI18nText("edu.offboarding_modal.upgrade_to_professional")
          }) : jsx(vd, {
            onClick: N,
            children: renderI18nText("edu.offboarding_modal.create_a_new_professional_team_cta")
          })
        })]
      })]
    })
  });
}, "EDU_OFFBOARDING_MODAL");
export const ZL = $$k0;