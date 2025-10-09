import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "react-redux";
import i from "classnames";
import { CloseButton } from "../905/17223";
import { ButtonSecondaryTracked, ButtonBasePrimaryTracked } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { h } from "../905/142086";
import { popModalStack } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { TrackingProvider } from "../figma_app/831799";
import { ModalContainer } from "../figma_app/918700";
import { wN, KP, v0, hF, pL } from "../905/289198";
import { J_, BQ } from "../905/871493";
var n = i;
export function $$h0(e) {
  let t = useDispatch<AppDispatch>();
  let r = () => {
    t(postUserFlag({
      dismissed_move_draft_to_project_interstitial_modal: !0
    }));
    t(popModalStack());
  };
  return jsx(TrackingProvider, {
    name: "MoveDraftToProjectInterstitialModal",
    children: jsxs(ModalContainer, {
      title: getI18nString("file_browser.draft_to_project.title.plan_spaces"),
      titleClassName: wN,
      className: KP,
      size: 320,
      popStack: !0,
      disableClickOutsideToHide: !0,
      children: [jsx(CloseButton, {
        className: n()(J_, BQ),
        onClick: r
      }), jsxs("span", {
        children: [renderI18nText("file_browser.draft_to_project.body.plan_spaces"), jsx("br", {})]
      }), jsxs("div", {
        className: n()(v0, hF),
        children: [jsx("a", {
          target: "_blank",
          href: "https://help.figma.com/hc/articles/13838684089751-Starter-plan-permissions#drafts",
          children: jsx(ButtonSecondaryTracked, {
            children: renderI18nText("general.learn_more")
          })
        }), jsx(ButtonBasePrimaryTracked, {
          className: pL,
          onClick: () => {
            r();
            h(e.file, e.repo, t, e.afterFileMove, e.bannerToDisplay);
          },
          children: renderI18nText("file_browser.draft_to_project.move")
        })]
      })]
    })
  });
}
export const MoveDraftToProjectInterstitialModal = $$h0;
