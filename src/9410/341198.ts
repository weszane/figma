import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useRef, useCallback } from "react";
import { E } from "../905/632989";
import { B } from "../905/714743";
import { getI18nString } from "../905/303541";
import { useCurrentFileKey } from "../figma_app/516028";
import { jN } from "../905/612685";
import { Qn } from "../figma_app/415217";
import { useSelector } from "react-redux";
import { O } from "../905/501876";
import { L } from "../1250/681431";
import { o as _$$o } from "../9410/925362";
import { Ib } from "../905/129884";
import { v as _$$v } from "../0c62c2fd/181448";
import { A } from "../svg/391812";
import { A as _$$A } from "../2854/769773";
import { A as _$$A2 } from "../5724/322086";
let _ = "vscode_extension_page_picker--pagePickerButtonContent--JXaX-";
function b() {
  return jsx("div", {
    className: "vscode_extension_page_picker--floatingContainer--HgY6-",
    children: jsx(_$$o, {})
  });
}
function C({
  additionalPages: e,
  onClickAdditionalPage: t,
  selectedAdditionalPageId: i,
  isOnReadyForDevPage: a
}) {
  let [l, d] = useState(!1);
  let c = useRef(null);
  let m = useSelector(e => e.mirror.appModel.pagesList);
  let C = useSelector(e => e.mirror.appModel.currentPage);
  let v = m.find(e => e.nodeId === C);
  return (L(c, () => {
    l && d(!1);
  }), m) ? jsxs("div", {
    className: "vscode_extension_page_picker--pagePicker--AFcyx",
    ref: c,
    children: [jsxs("button", {
      className: "vscode_extension_page_picker--pagePickerButton--xunuS",
      onClick: () => d(!l),
      "data-tooltip": getI18nString("dev_handoff.pages_list"),
      "data-tooltip-type": Ib.TEXT,
      children: [a ? jsxs(Fragment, {
        children: [jsx(O, {
          className: "vscode_extension_page_picker--readyIcon--MjlB1"
        }), jsx("span", {
          className: _,
          children: getI18nString("dev_handoff.workflows.overview.title")
        })]
      }) : jsxs(Fragment, {
        children: [jsx(_$$v, {
          pageGuid: C,
          margin: "marginRight",
          fallback: jsx(B, {
            svg: A,
            className: "vscode_extension_page_picker--pagePickerIcon--miPBV"
          })
        }), jsx("span", {
          className: _,
          children: v?.name || ""
        })]
      }), jsx(B, {
        svg: _$$A,
        className: "vscode_extension_page_picker--pagePickerButtonChevron--MpjMi"
      })]
    }), l && jsx(b, {})]
  }) : null;
}
export function $$E0({
  children: e,
  isOnReadyForDevPage: t
}) {
  let i = useCurrentFileKey();
  let u = useCallback(() => {
    let e = jN({
      file: {
        key: i
      },
      isDevHandoff: !0
    });
    Qn(e);
  }, [i]);
  return jsxs("div", {
    className: "vscode_extension_header--vscodeExtensionHeader--1-R98",
    children: [jsx(C, {
      isOnReadyForDevPage: t
    }), jsxs("div", {
      className: "vscode_extension_header--children--sHtI3",
      children: [jsx(E, {
        onClick: u,
        "aria-label": getI18nString("dev_handoff.overview_mode.open_in_figma"),
        className: "vscode_extension_header--focusVisible--NjfH0",
        children: jsxs("div", {
          className: "vscode_extension_header--openFigmaText--e2tMf",
          children: [getI18nString("dev_handoff.overview_mode.open_in_figma"), jsx(B, {
            svg: _$$A2,
            className: "vscode_extension_header--openFigmaSVG--02Jd3"
          })]
        })
      }), e]
    })]
  });
}
export const f = $$E0;