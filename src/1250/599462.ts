import { jsx, Fragment } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import { h as _$$h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { NotModalType } from "../905/11928";
import { F_ } from "../905/858282";
import { ak5 } from "../figma_app/6204";
let g = userFlagExistsAtomFamily("seen_dtm_deprecation_post_migration_overlay");
export function $$f0(e) {
  let t = useAtomWithSubscription(g);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: ak5,
    priority: N.DEFAULT_MODAL
  }, [t]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  let h = jsx(Fragment, {});
  let b = jsx(Fragment, {});
  if ("plan_nav" === e.entryPoint) {
    let t = renderI18nText("file_browser.drafts_to_move.drafts_to_move_files_are_now_in_org_name", {
      orgName: e.planName || ""
    });
    let n = renderI18nText("file_browser.drafts_to_move.the_drafts_to_move_section_has_been_removed", {
      orgName: e.planName || ""
    });
    let a = renderI18nText("file_browser.drafts_to_move.any_files_from_that_page_are_now_in_a_new_free_starter_team");
    let r = renderI18nText("file_browser.drafts_to_move.you_can_now_find_them_in_drafts_within_team_name", {
      teamName: e.planName || ""
    });
    let i = renderI18nText("file_browser.drafts_to_move.drafts_to_move_files_have_relocated");
    let s = renderI18nText("file_browser.drafts_to_move.looking_for_your_drafts_to_move");
    h = e.isOrg ? t : e.starterTeamCreated ? i : s;
    b = e.isOrg ? n : e.starterTeamCreated ? a : r;
  } else {
    h = e.isOrg ? renderI18nText("file_browser.drafts_to_move.drafts_to_move_files_have_relocated") : renderI18nText("file_browser.drafts_to_move.looking_for_your_drafts_to_move");
    b = e.isOrg ? renderI18nText("file_browser.drafts_to_move.the_files_that_were_on_that_page_can_now_be_found_here") : renderI18nText("file_browser.drafts_to_move.you_can_now_find_them_in_drafts_within_team_name", {
      teamName: e.planName || ""
    });
  }
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: jsx("p", {
      children: b
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: {
      label: e.navigateToPlan ? renderI18nText("file_browser.drafts_to_move.show_me") : renderI18nText("file_browser.modal.got_it"),
      type: "button",
      onClick: () => {
        e.navigateToPlan && e.navigateToPlan();
        complete();
      },
      ctaTrackingDescriptor: UpgradeAction.DONE
    },
    secondaryCta: {
      label: renderI18nText("file_browser.drafts_to_move.viewbar_learn_more_link"),
      type: "link",
      href: "https://help.figma.com/hc/articles/18409526530967",
      ctaTrackingDescriptor: UpgradeAction.LEARN_MORE
    },
    targetKey: e.targetKey || "dtm_deprecation_post_migration_overlay_drafts_key",
    title: h,
    trackingContextName: "Dtm Deprecation Post Migration Overlay",
    width: 350,
    zIndex: NotModalType.MODAL
  });
}
export const a = $$f0;