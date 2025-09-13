import { jsxs, jsx } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { WX } from "../figma_app/515363";
import { Q } from "../1250/227834";
import { b as _$$b, bL } from "../figma_app/860955";
import { f as _$$f } from "../figma_app/859253";
import { forwardRef } from "react";
import { ButtonPrimitive } from "../905/632989";
import { e as _$$e } from "../905/149844";
import { k } from "../905/888808";
import { xk } from "@stylexjs/stylex";
import { getI18nString } from "../905/303541";
import { n as _$$n } from "../0c62c2fd/596856";
import { k as _$$k } from "../0c62c2fd/421640";
let f = forwardRef(function (e, t) {
  let r = e["aria-expanded"];
  return jsxs(ButtonPrimitive, {
    ref: t,
    ...xk(g.button, r && "false" !== r && g.buttonActive),
    ...e,
    children: [jsx(_$$e, {
      "aria-hidden": !0
    }), jsxs("div", {
      className: "x78zum5 x1v2ro7d x6s0dn4",
      children: [getI18nString("file_browser.tool_bar.create"), jsx(k, {
        "aria-hidden": !0
      })]
    })]
  });
});
let g = {
  button: {
    display: "x78zum5",
    gap: "x167g77z",
    rowGap: null,
    columnGap: null,
    paddingTop: "x1iorvi4",
    paddingBottom: "xjkvuk6",
    paddingLeft: "x163pfp",
    paddingRight: "xmzs88n",
    paddingInlineStart: null,
    paddingInlineEnd: null,
    alignItems: "x6s0dn4",
    borderRadius: "x19y5rnk",
    borderStartStartRadius: null,
    borderStartEndRadius: null,
    borderEndStartRadius: null,
    borderEndEndRadius: null,
    borderTopLeftRadius: null,
    borderTopRightRadius: null,
    borderBottomLeftRadius: null,
    borderBottomRightRadius: null,
    color: "x1tk3asg",
    "--color-icon": "xwa2v1s",
    backgroundColor: "xu5wzci x3sfz7g xazsp2l x1roy7tt x14nhee1",
    boxShadow: "xb67q6v xn3n4wp x1swp962",
    overflow: "xb3r6kr",
    overflowX: null,
    overflowY: null,
    minWidth: "x1pshirs",
    $$css: !0
  },
  buttonActive: {
    backgroundColor: "xs07v55",
    boxShadow: "xb67q6v",
    $$css: !0
  }
};
function x({
  menuItems: e,
  trackingProperties: t,
  disabled: r,
  dataOnboardingKey: s
}) {
  let {
    getTriggerProps,
    manager
  } = _$$b();
  _$$n(manager);
  return jsxs(bL, {
    manager,
    children: [jsx(f, {
      ...getTriggerProps(),
      disabled: r,
      "data-onboarding-key": s
    }), jsx(_$$f, {
      menuItems: e,
      trackingProperties: t
    })]
  });
}
export function $$v0(e) {
  let t = _$$k();
  WX({
    markName: "FileCreateEntrypoint",
    isLoaded: !0
  });
  return jsx(x, {
    ...e,
    disabled: t
  });
}
export function $$y1({
  newFileFrom: e,
  forceOpenNewTab: t,
  dataOnboardingKey: r
}) {
  let i = useSelector(e => e.user?.drafts_folder_id);
  let o = Q({
    newFileFrom: e,
    forceOpenNewTab: t,
    folderId: i,
    contextClicked: "recents_file_creation_thumbnails_created"
  });
  return jsx($$v0, {
    menuItems: o,
    dataOnboardingKey: r
  });
}
export const a = $$v0;
export const R = $$y1;