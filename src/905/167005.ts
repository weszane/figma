import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import { $M } from "../figma_app/930338";
import { Wi } from "../figma_app/162641";
import { x } from "../905/211326";
import { renderI18nText } from "../905/303541";
import { V } from "../905/697254";
import { zi, iL } from "../905/824449";
import { B } from "../905/714743";
import { U } from "../905/604606";
function m({
  type: e
}) {
  let t = U(e);
  return jsx(B, {
    svg: t
  });
}
let h = "overview_stats_view--sectionHeader--0xDdk library_section_header--sectionHeader--U79xZ";
let g = "overview_stats_view--stat--XjnZv text--fontPos14--OL9Hp text--_fontBase--QdLsd";
export function $$f0({
  isLoading: e,
  stats: t
}) {
  return jsx("div", {
    className: "overview_stats_view--overviewStats--vEzXs",
    children: t.map(t => {
      let i = t.type === V.DESCRIPTION_AND_IMAGE ? "Description" : t.header;
      return jsx(Fragment, {
        children: t.type === V.DESCRIPTION_AND_IMAGE ? jsx(x, {
          isLoading: e,
          className: g,
          children: () => jsx(_, {
            stat: t
          })
        }) : jsx(A, {
          stat: t,
          isLoading: e
        })
      }, i);
    })
  });
}
function _({
  stat: e
}) {
  return jsxs("div", {
    className: "overview_stats_view--componentDescriptionAndImage--ijsqj",
    "data-testid": "overview-stats-description-and-image",
    children: ["variable" === e.imageData.type ? jsx("div", {
      className: "overview_stats_view--variableIcon--jbynq overview_stats_view--_baseImage--klmBx",
      children: jsx(m, {
        type: e.imageData.variableType
      })
    }) : "style" === e.imageData.type ? jsx("div", {
      className: "overview_stats_view--styleIcon--3vy99 overview_stats_view--_baseImage--klmBx",
      children: jsx(zi, {
        dsStyle: e.imageData.style,
        disableOutline: !0,
        size: iL.Large_DSA
      })
    }) : jsx("img", {
      src: e.imageData.url,
      className: "overview_stats_view--componentImage---YJZq overview_stats_view--_baseImage--klmBx",
      alt: ""
    }), null != e.description && jsxs("div", {
      children: [jsx("div", {
        className: h,
        children: renderI18nText("design_systems.libraries_modal.description")
      }), jsx("div", {
        className: "overview_stats_view--componentDescription--lR6ir text--fontPos14--OL9Hp text--_fontBase--QdLsd",
        children: e.description
      })]
    })]
  });
}
function A({
  stat: e,
  isLoading: t = !1
}) {
  return e.word ? jsxs("div", {
    "data-testid": "overview-stats-count",
    children: [jsx("div", {
      className: h,
      children: e.header
    }), t ? jsx(Wi, {
      className: "overview_stats_view--statLoading--3DxiI"
    }) : jsx("div", {
      className: g,
      children: null == e.count ? "" : `${$M(e.count)} ${e.word}`
    })]
  }) : null;
}
export const c = $$f0;