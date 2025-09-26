import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useCallback, useEffect } from "react";
import { debounce } from "../905/915765";
import { IntersectionSentinel } from "../905/925868";
import { renderI18nText } from "../905/303541";
import { NJ } from "../figma_app/419216";
import { OverlayType } from "../figma_app/450829";
import { pO, Hj } from "../figma_app/336229";
let $$u6 = "community-tab";
let $$p1 = "community-comments-on-focus";
let $$_2 = "seen_community_comments_compose";
let $$h5 = "seen_community_monetization_metrics_tab_onboarding";
let $$m4 = "seen_community_creator_carousel_media_nux";
let $$g8 = "seen_community_nav_cooper_new_indicator";
let $$f3 = "seen_community_nav_sites_new_indicator";
let $$E0 = "seen_resource_hub_promotional_overlay";
let $$y9 = "seen_community_tab_onboarding_overlay";
let $$b7 = "dismissed_community_moved_to_resource_hub_banner";
function T({
  dismissModal: e
}) {
  let t = useRef(null);
  let r = useCallback(debounce(() => {
    t.current && (t.current.style.opacity = "0");
  }, 0, !0), [t]);
  let d = useCallback(debounce(() => {
    t.current && (t.current.style.opacity = "1");
  }, 450), [t]);
  useEffect(() => (window.addEventListener("scroll", r, !1), window.addEventListener("scroll", d, !1), () => {
    window.removeEventListener("scroll", r, !1);
    window.removeEventListener("scroll", d, !1);
  }), [r, d]);
  let u = useCallback(e => {
    let r = t.current;
    r && (e.isIntersecting ? r.style.visibility = "visible" : r.style.visibility = "hidden");
  }, [t]);
  return jsxs(NJ, {
    targetKey: "sort-state-dropdown",
    dismissModal: e,
    width: 301,
    display: "hidden",
    containerRef: t,
    className: pO,
    children: [jsx(IntersectionSentinel, {
      onIntersectionChange: u
    }), jsx("div", {
      className: Hj,
      children: renderI18nText("community.onboarding.see_more_of_what_you_love")
    }), renderI18nText("community.onboarding.whether_you_want_to_focus_on_creators_you_follow_discover_new_files_and_plugins_or_find_out_what_s_trending_you_can_customize_your_feed_here")]
  });
}
e => jsx(T, {
  ...e
});
OverlayType.SELF_CONTAINED;
export const J5 = $$E0;
export const LU = $$p1;
export const Pn = $$_2;
export const QK = $$f3;
export const Xt = $$m4;
export const e9 = $$h5;
export const vM = $$u6;
export const w3 = $$b7;
export const w4 = $$g8;
export const xH = $$y9;