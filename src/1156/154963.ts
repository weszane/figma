import { jsxs, jsx } from "react/jsx-runtime";
import { e as _$$e } from "../905/693478";
import { g } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { Xr } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { ry } from "../figma_app/408883";
import { E } from "../figma_app/924252";
import { OU } from "../1156/721826";
import { mC } from "../figma_app/325537";
import { t as _$$t2 } from "../1156/670515";
let h = {
  emptyStateContainer: {
    ...g.textBodyLarge,
    width: "x1h93xvk",
    display: "x78zum5",
    flexDirection: "xdt5ytf",
    alignItems: "x6s0dn4",
    gap: "x1v2ro7d",
    rowGap: null,
    columnGap: null,
    textAlign: "x2b8uid",
    padding: "x1rmx8ao",
    paddingInline: null,
    paddingStart: null,
    paddingLeft: null,
    paddingEnd: null,
    paddingRight: null,
    paddingBlock: null,
    paddingTop: null,
    paddingBottom: null,
    $$css: !0
  }
};
let $$g0 = () => [{
  key: E.SIGNUP_FLOW,
  title: getI18nString("living_designs.suggestions.signup_flow.title"),
  prompt: getI18nString("living_designs.suggestions.signup_flow.prompt")
}, {
  key: E.DASHBOARD,
  title: getI18nString("living_designs.suggestions.dashboard.title"),
  prompt: getI18nString("living_designs.suggestions.dashboard.prompt")
}, {
  key: E.GRADIENT_GALLERY,
  title: getI18nString("living_designs.suggestions.gradient_gallery.title"),
  prompt: getI18nString("living_designs.suggestions.gradient_gallery.prompt")
}];
export function $$p1({
  nodeGuid: e
}) {
  let t = ry();
  let n = Xr(mC(e));
  let s = e => {
    n(e);
  };
  return jsxs("div", {
    ...Ay.props(h.emptyStateContainer),
    children: [jsx("div", {
      className: "x16rqkct x1v8gsql xe8ttls",
      "aria-hidden": !0,
      children: jsx(_$$e, {})
    }), jsx("h2", {
      children: getI18nString("living_designs.chat.empty_state.from_scratch")
    }), jsx("div", {
      className: "xh8yej3 x78zum5 x1q0g3np x1a02dak x167g77z xl56j7k",
      "data-onboarding-key": OU,
      children: $$g0().map((e, n) => jsx(_$$t2, {
        label: e.title,
        onClick: () => s(e.prompt),
        disabled: t
      }, n))
    })]
  });
}
export const Z = $$g0;
export const d = $$p1;