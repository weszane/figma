import { rw } from "../905/54367";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { K } from "../905/443068";
import { f } from "../905/54715";
import { H } from "../905/222445";
import { J } from "../905/125993";
import { getI18nString } from "../905/303541";
import { _I, PY } from "../905/34809";
import { Ib } from "../905/129884";
export function $$p0(e) {
  let t = useDispatch();
  let i = useSelector(({
    mobileNavShown: e
  }) => e);
  let p = e.tabs && e.tabs.length || 0;
  let m = (() => {
    for (let t of e.tabs || []) {
      let e = t.props;
      if (e.tab === e.selectedTab && !e.hideInMobileNav) return t;
    }
    return null;
  })();
  let h = m ? m.props.tab : null;
  let g = e.hideToolBarOnMobile ? "mobile_tool_bar--mobileActionsContainerWithoutBoxShadow--WN3Se mobile_tool_bar--mobileActionsContainer--zWdp5" : "mobile_tool_bar--mobileActionsContainer--zWdp5";
  return jsx(Fragment, {
    children: jsxs("div", {
      className: g,
      children: [jsxs("div", {
        className: "mobile_tool_bar--toolBarMobileLeftSide--nGw8A",
        children: [jsx(K, {
          onClick: () => {
            i ? t(_I()) : t(PY());
          },
          "aria-label": i ? getI18nString("mobile_tool_bar.hide_navigation") : getI18nString("mobile_tool_bar.show_navigation"),
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": i ? getI18nString("mobile_tool_bar.hide_navigation") : getI18nString("mobile_tool_bar.show_navigation")
          },
          children: i ? jsx(f, {}) : jsx(H, {})
        }), p > 0 && !e.hideToolBarOnMobile && jsx("div", {
          className: "mobile_tool_bar--toolBarTabTitle---Vjm9 ellipsis--ellipsis--Tjyfa",
          children: m
        })]
      }), e.center && jsx("div", {
        className: "mobile_tool_bar--toolBarMobileCenter--Qws-L",
        children: e.center
      }), p > 1 && !e.hideToolBarOnMobile && jsxs("div", {
        className: "mobile_tool_bar--toolBarRightSideMobile--uQfL9",
        children: [jsx(K, {
          onClick: e => e.preventDefault(),
          "aria-label": getI18nString("mobile_tool_bar.more_options"),
          htmlAttributes: {
            "data-tooltip-type": Ib.TEXT,
            "data-tooltip": getI18nString("mobile_tool_bar.more_options")
          },
          children: jsx(J, {})
        }), jsx("select", {
          onChange: t => {
            let i = t.target.value;
            for (let t of e.tabs || []) {
              let e = t.props;
              if (e.tab === i) {
                e.onClick && e.onClick(i);
                return;
              }
            }
          },
          value: h,
          className: "mobile_tool_bar--toolBarSelector--1hcBy",
          children: (e.tabs || []).map(e => {
            let t = e.props;
            return t.hideInMobileNav ? null : jsx("option", {
              value: t.tab,
              children: t.mobileNavTabTitle
            }, t.tab);
          })
        })]
      })]
    })
  });
}
rw();
export const i = $$p0;
