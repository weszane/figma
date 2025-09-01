import { jsx, jsxs } from "react/jsx-runtime";
import { M7 } from "../figma_app/637027";
import { tx } from "../905/303541";
export let $$s1 = "seen_synchronous_collaboration_onboarding";
function o(e) {
  let t = tx("collaboration.spotlight.2_0.nudge_spotlight.description", {
    spotlightMeButtonText: jsx("b", {
      className: "multiplayer_onboarding--boldText--c42DO",
      children: tx("collaboration.spotlight.tooltip.spotlight_me")
    })
  });
  return jsxs("div", {
    className: "multiplayer_onboarding--contentNudge--KflAC",
    children: [jsx("p", {
      children: t
    }), jsx("div", {
      className: "multiplayer_onboarding--footerContainerNudge--nBkOA",
      children: jsx(M7, {
        className: "multiplayer_onboarding--footerButtonNudge--4CJm-",
        onClick: e.dismissModal,
        children: tx("collaboration.spotlight.nudge_spotlight.got_it")
      })
    })]
  });
}
export function $$l0({
  dismissModal: e
}) {
  return jsx(o, {
    dismissModal: e
  });
}
export const _ = $$l0;
export const e = $$s1;