import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { Button } from "../905/521428";
import { k } from "../905/443820";
import { S } from "../5132/724052";
import { textDisplayConfig } from "../905/687265";
import { Ay } from "@stylexjs/stylex";
import { SvgComponent } from "../905/714743";
import { G } from "../905/750789";
import { getI18nString } from "../905/303541";
import { H8 } from "../905/590952";
import { mS, RK } from "../figma_app/791586";
import { n1 } from "../figma_app/325912";
import { A } from "../b2835def/114344";
export function $$p5({
  inactive: e,
  variant: t = "connected_project"
}) {
  return jsx("div", {
    ...(e ? {
      className: "x78zum5 xl56j7k x6s0dn4 x1sxf85j xkawg4k"
    } : {
      className: "x78zum5 xl56j7k x6s0dn4 x1sxf85j xgcem94"
    }),
    style: "existing_project" === t ? {
      width: "32px",
      height: "32px"
    } : {
      width: "40px",
      height: "40px",
      border: "1px solid var(--color-border)"
    },
    children: jsx(SvgComponent, {
      svg: A,
      useOriginalSrcFills_DEPRECATED: !0,
      svgWidth: "16px",
      svgHeight: "16px",
      style: {
        filter: e ? "grayscale(100%)" : void 0
      }
    })
  });
}
export function $$f7() {
  let {
    organization
  } = mS();
  return jsx("div", {
    className: "x1tamke2 xh8yej3 x9f619",
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib x6s0dn4 xh8yej3",
      children: [jsxs("div", {
        className: "x78zum5 xdt5ytf x1nhvcw1 xdpxx8g",
        children: [organization && jsx(G, {
          ...Ay.props(E.orgName),
          text: organization?.name
        }), jsx("p", {
          ...Ay.props(E.textBodyMediumSecondary),
          children: getI18nString("figmake.settings.project.org_info.title")
        })]
      }), organization && jsx($$j2, {
        url: n1(organization.id),
        linkText: getI18nString("figmake.settings.project.org_info.link")
      })]
    })
  });
}
export function $$y0({
  children: e
}) {
  return jsxs(Fragment, {
    children: [jsxs("div", {
      className: "x78zum5 xdt5ytf x1qughib x1cy8zhl x1tny46i x1kgkb76 x1y8v6su x1tamke2 xh8yej3 x9f619",
      children: [jsx("p", {
        ...Ay.props(E.textBodyLargeStrong),
        children: getI18nString("figmake.settings.project.header.title")
      }), jsx("p", {
        ...Ay.props(E.textBodyMediumSecondary),
        children: getI18nString("figmake.settings.project.header.subtitle")
      })]
    }), e]
  });
}
export function $$_6({
  badge: e,
  actions: t,
  inactive: n,
  header: i,
  orgAlt: s
}) {
  return jsx("div", {
    className: "x1tamke2",
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x1qughib x6s0dn4 xh8yej3",
      children: [jsxs("div", {
        className: "x78zum5 x1q0g3np x1nhvcw1 x6s0dn4 x1v2ro7d",
        children: [jsx($$p5, {
          inactive: n
        }), jsxs("div", {
          className: "x78zum5 xdt5ytf x1nhvcw1 x1cy8zhl",
          children: [jsxs("div", {
            className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
            children: [jsx(G, {
              ...Ay.props(E.textBodyLargeStrong),
              text: i
            }), e]
          }), s || jsx(b, {})]
        })]
      }), jsx("div", {
        className: "x78zum5 x1q0g3np x6s0dn4 x167g77z",
        children: t
      })]
    })
  });
}
function b() {
  let {
    organization
  } = mS();
  return jsx(G, {
    ...Ay.props(E.orgText),
    text: organization ? organization.name : getI18nString("figmake.settings.project.org_info.title")
  });
}
export function $$j2({
  url: e,
  linkText: t
}) {
  return jsxs("a", {
    className: "x78zum5 x1q0g3np x1qughib x6s0dn4 x1wt4b31 xebhuq6",
    target: "_blank",
    href: e,
    children: [jsx(S, {}), jsx("p", {
      ...Ay.props(E.textBodyMedium),
      children: t
    })]
  });
}
export function $$v3({
  variant: e,
  children: t
}) {
  return jsx(Button, {
    variant: e,
    disabled: !0,
    children: jsxs("div", {
      className: "x78zum5 x1q0g3np x6s0dn4",
      children: [jsx(k, {}), jsx("p", {
        ...Ay.props(E.textBodyMedium),
        children: t
      })]
    })
  });
}
export function $$k4({
  size: e
}) {
  let t = RK();
  return t ? jsx(H8, {
    user: t,
    size: e
  }) : null;
}
export function $$C1() {
  return jsx("div", {
    className: "xv42yna xh8yej3"
  });
}
let E = {
  orgName: {
    ...textDisplayConfig.textBodyLargeStrong,
    maxWidth: "x256u9z",
    whiteSpace: "xuxw1ft",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    $$css: !0
  },
  textBodyLargeStrong: {
    ...textDisplayConfig.textBodyLargeStrong,
    $$css: !0
  },
  textBodyMediumSecondary: {
    ...textDisplayConfig.textBodyMedium,
    color: "x1n0bwc9",
    $$css: !0
  },
  textBodyMedium: {
    ...textDisplayConfig.textBodyMedium,
    $$css: !0
  },
  orgText: {
    ...textDisplayConfig.textBodyMedium,
    color: "x1n0bwc9",
    maxWidth: "x256u9z",
    whiteSpace: "xuxw1ft",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    textOverflow: "xlyipyv",
    $$css: !0
  }
};
export const Gt = $$y0;
export const cG = $$C1;
export const jc = $$j2;
export const lV = $$v3;
export const ls = $$k4;
export const mj = $$p5;
export const p1 = $$_6;
export const p_ = $$f7;