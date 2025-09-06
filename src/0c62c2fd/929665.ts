import { jsx, jsxs } from "react/jsx-runtime";
import { useDispatch } from "../vendor/514228";
import i from "classnames";
import { Jn } from "../905/17223";
import { tM, vd } from "../figma_app/637027";
import { getI18nString, renderI18nText } from "../905/303541";
import { h } from "../905/142086";
import { Lo } from "../905/156213";
import { b } from "../905/985254";
import { fu } from "../figma_app/831799";
import { d_ } from "../figma_app/918700";
import { wN, KP, v0, hF, pL } from "../905/289198";
import { J_, BQ } from "../905/871493";
var n = i;
export function $$h0(e) {
  let t = useDispatch();
  let r = () => {
    t(b({
      dismissed_move_draft_to_project_interstitial_modal: !0
    }));
    t(Lo());
  };
  return jsx(fu, {
    name: "MoveDraftToProjectInterstitialModal",
    children: jsxs(d_, {
      title: getI18nString("file_browser.draft_to_project.title.plan_spaces"),
      titleClassName: wN,
      className: KP,
      size: 320,
      popStack: !0,
      disableClickOutsideToHide: !0,
      children: [jsx(Jn, {
        className: n()(J_, BQ),
        onClick: r
      }), jsxs("span", {
        children: [renderI18nText("file_browser.draft_to_project.body.plan_spaces"), jsx("br", {})]
      }), jsxs("div", {
        className: n()(v0, hF),
        children: [jsx("a", {
          target: "_blank",
          href: "https://help.figma.com/hc/articles/13838684089751-Starter-plan-permissions#drafts",
          children: jsx(tM, {
            children: renderI18nText("general.learn_more")
          })
        }), jsx(vd, {
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