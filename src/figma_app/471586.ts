import { jsxs, jsx } from "react/jsx-runtime";
import { useAtomWithSubscription } from "../figma_app/27355";
import { Ay } from "../905/612521";
import { h as _$$h } from "../905/207101";
import { renderI18nText } from "../905/303541";
import { E } from "../905/984674";
import { c as _$$c } from "../905/370443";
import { e as _$$e } from "../905/621515";
import { r1 } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { rq } from "../905/425180";
import { R } from "../905/11928";
import { F_ } from "../905/858282";
import { OKV } from "../figma_app/6204";
let f = r1("seen_dtm_deprecation_file_overlay");
let $$E1 = "dtm_deprecation_file_overlay_key";
export function $$y0(e) {
  let t = useAtomWithSubscription(f);
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: OKV,
    priority: N.DEFAULT_MODAL
  }, [t]);
  _$$h(() => {
    show({
      canShow: e => !e
    });
  });
  let b = {
    label: renderI18nText("file_browser.drafts_to_move.viewbar_learn_more_link"),
    type: "link",
    href: "https://help.figma.com/hc/articles/18409526530967",
    ctaTrackingDescriptor: _$$c.LEARN_MORE
  };
  let T = e.isOwner ? {
    label: renderI18nText("file_browser.drafts_to_move.move_files"),
    type: "button",
    onClick: () => {
      complete();
      Ay.redirect("/files/drafts-to-move");
    },
    ctaTrackingDescriptor: _$$c.DONE
  } : b;
  let I = jsxs("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    },
    children: [jsx("div", {
      children: renderI18nText("file_browser.drafts_to_move.which_is_going_away_august_21", {
        boldedText: jsx(E, {
          fontWeight: "semi-bold",
          children: renderI18nText("file_browser.drafts_to_move.this_file_is_in_a_section_called_drafts_to_move")
        })
      })
    }), jsx("div", {
      children: renderI18nText("file_browser.drafts_to_move.moving_files_will_change_collab_permissions")
    })]
  });
  let S = e.isOwner ? I : renderI18nText("file_browser.drafts_to_move.this_move_might_change_your_file_permissions");
  let v = e.isOwner ? renderI18nText("file_browser.drafts_to_move.remember_to_move_this_file") : renderI18nText("file_browser.drafts_to_move.drafts_to_move_files_are_relocating_soon");
  return jsx(rq, {
    arrowPosition: F_.LEFT_TITLE,
    description: jsx("p", {
      children: S
    }),
    emphasized: !0,
    isShowing,
    onClose: complete,
    primaryCta: T,
    secondaryCta: e.isOwner ? b : void 0,
    targetKey: $$E1,
    title: v,
    trackingContextName: "Dtm Deprecation File Overlay",
    width: 350,
    zIndex: R.MODAL
  });
}
export const O = $$y0;
export const l = $$E1;