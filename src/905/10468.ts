import { jsxs, jsx } from "react/jsx-runtime";
import { ButtonPrimitive } from "../905/632989";
import { N } from "../905/438674";
import { xk } from "@stylexjs/stylex";
import { AUTH_SET_ORIGIN, changeAuthFormState } from "../905/194276";
import { AuthFlowStep } from "../905/862321";
import { SvgComponent } from "../905/714743";
import { renderI18nText } from "../905/303541";
import { H8, Pf } from "../905/590952";
import { A } from "../6828/865061";
let m = {
  wrapper: {
    width: "x168biu4",
    fontFamily: "x122x9cr",
    $$css: !0
  },
  hintsWrapper: {
    minWidth: "x18ip3f8",
    padding: "x1xq1gxn",
    maxWidth: "x1j9u4d2",
    fontFamily: "x122x9cr",
    $$css: !0
  },
  header: {
    fontSize: "xwsyq91",
    lineHeight: "xcgk4ki",
    width: "xi55695",
    margin: "x1tppyt",
    fontWeight: "xk50ysn",
    textAlign: "x2b8uid",
    color: "x1akne3o",
    overflow: "xb3r6kr",
    textOverflow: "xlyipyv",
    paddingBottom: "xwxc41k",
    borderBottom: "x1n5zjp5",
    $$css: !0
  },
  hintsHeader: {
    margin: "x1lsv3so",
    $$css: !0
  }
};
function h({
  user: e,
  ...t
}) {
  return jsxs(ButtonPrimitive, {
    "aria-label": e.name,
    className: "x78zum5 x6s0dn4 x1peatla x1kogg8i x1i0f7ym xt0e3qv xh8yej3 xv2f06h x1ptam9a",
    onClick: () => t.onUserSelect(e.id),
    children: [jsx(H8, {
      user: e,
      size: Pf.LARGE
    }), jsxs("div", {
      className: "xdt5ytf xnm25rq xdpxx8g",
      children: [jsx("div", {
        className: "x16q51m2 xb3r6kr xlyipyv xuxw1ft x4z9k3i x1o2sk6j xk50ysn",
        children: e.name
      }), jsx("div", {
        className: "x16q51m2 xb3r6kr xlyipyv xuxw1ft x1j6dyjg x1d3mw78 x1n0bwc9",
        children: e.email
      })]
    }), jsxs("div", {
      className: "x1iyjqo2 x13a6bvl x78zum5",
      children: [t.hints && t.hints[e.id] && jsx("div", {
        className: "x16q51m2 xb3r6kr xlyipyv xfifm61 x1n0bwc9 x1tudf5h x8x9d4c xeaf4i8 x13faqbe",
        children: t.hints[e.id]
      }), jsx(SvgComponent, {
        svg: A,
        className: "xxepmn2 x1akne3o x1ja3g5x"
      })]
    })]
  });
}
export function $$g0(e) {
  let t = e.hints && Object.keys(e.hints).length > 0;
  return jsxs("div", {
    ...xk(t ? m.hintsWrapper : m.wrapper),
    children: [jsx("div", {
      ...xk(m.header, t && m.hintsHeader),
      children: e.header
    }), jsx("div", {
      className: "x1xk1jr8 x1xmf6yo",
      children: e.users.map(t => jsx(h, {
        onUserSelect: e.onUserSelect,
        hints: e.hints,
        user: t
      }, t.id))
    }), jsx("div", {
      className: "x1dz1jew x1j5rzib x1h4j7j7 xdyg6lv x2b8uid x4z9k3i x1n0bwc9 x1o2sk6j",
      children: e.footer ? e.footer : renderI18nText("auth.add-another-account-with-link", {
        addAnotherLink: jsx("span", {
          className: "x1quhyk7 x1ypdohk",
          children: jsx(N, {
            href: "#",
            onClick: () => {
              if (e.trackOnChangeAccount && e.trackOnChangeAccount(), e.onChangeAccount) {
                e.onChangeAccount();
                return;
              }
              e.authOrigin && e.dispatch(AUTH_SET_ORIGIN({
                authOrigin: e.authOrigin
              }));
              e.dispatch(changeAuthFormState({
                formState: AuthFlowStep.SIGN_IN
              }));
            },
            htmlAttributes: {
              "data-testid": "add-account-button"
            },
            children: renderI18nText("auth.add-another-no-punctuation")
          })
        })
      })
    })]
  });
}
export const a = $$g0;