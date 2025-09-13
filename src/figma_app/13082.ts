import { jsx } from "react/jsx-runtime";
import { useState } from "react";
import { a as _$$a } from "../905/29104";
import { BaseLinkComponent } from "../figma_app/637027";
import { s as _$$s } from "../cssbuilder/589278";
import { renderI18nText, getI18nString } from "../905/303541";
import { KindEnum } from "../905/129884";
import { JT, pY, rr, zw, LC, gj, Xy, KL, TJ, GI, IA, iP, d7, UW } from "../figma_app/632248";
import { E } from "../905/719609";
export function $$p1({
  variant: e,
  helpUrlVariant: t
}) {
  let [r, p] = useState(!1);
  let _ = _$$a() ? renderI18nText("qa.ai_beta") : getI18nString("qa.ai");
  return jsx(BaseLinkComponent, {
    className: _$$s.hAuto.flexShrink0.$,
    "data-tooltip": getI18nString("qa.learn_more"),
    "data-tooltip-show-above": !0,
    "data-tooltip-type": KindEnum.TEXT,
    href: function (e) {
      switch (e) {
        case JT.TRANSLATE_TEXT:
        case JT.REWRITE_TEXT:
        case JT.SHORTEN_TEXT:
          return pY;
        case JT.SLIDES_REWRITE_TEXT:
          return rr;
        case JT.FIRST_DRAFT:
        case JT.FIRST_DRAFT_MAKE_CHANGES:
        case JT.FIRST_DRAFT_MAKE_KIT:
        case JT.FIRST_DRAFT_MAKE_KIT_DEBUG:
        case JT.FIRST_DRAFT_COMPONENTIZE:
        case JT.FIRST_DRAFT_SUGGEST_PROPS:
        case JT.FIRST_DRAFT_LINTING:
        case JT.FIRST_DRAFT_DEBUG:
        case JT.FIRST_DRAFT_FINE_TUNE:
          return zw;
        case JT.IMAGE_FILL:
        case JT.GENERATE_IMAGE:
        case JT.EDIT_IMAGE:
        case JT.MAKE_VIDEO:
        case JT.REMOVE_BACKGROUND:
        case JT.UPSCALE_IMAGE:
          return LC;
        case JT.AUTO_RENAME_LAYERS:
          return gj;
        case JT.MAGIC_LINK:
          return Xy;
        case JT.CONTENT_FILL:
          return KL;
        case JT.BOARD_TO_DECK:
          return TJ;
        case JT.SLIDES_GENERATE_SPEAKER_NOTES:
          return GI;
        case JT.FIND_INSPIRATION:
        case JT.TEXT_SEARCH:
          return IA;
        case JT.SUGGEST_TEXT:
          return iP;
        case JT.IMAGE_TO_DESIGN:
        case JT.IMAGE_TO_DESIGN_ORACLE:
        case JT.MAKE_EDITS:
        case JT.MAKE_EDITS_DEBUG:
        case JT.MAKE_EDITS_DEBUG_REVIEW:
        case JT.ASSISTANT_CHAT:
        case JT.CODE_CHAT:
        case JT.FIGMAKE:
        case JT.LIVING_DESIGNS:
        case JT.PUBLISH_LIBRARY_FOR_AI:
        case JT.SLIDES_GENERATE_OUTLINE:
        case JT.SLIDES_OUTLINE_TO_DECK:
        case JT.REPLACE_SLIDE_CONTENT:
        case "default":
          return d7;
        case JT.WHITEBOARD_GENERATE_CONTENT:
        case JT.SUMMARIZE_STICKIES:
        case JT.SORT_STICKIES_BY_TOPIC:
        case JT.SORT_STICKIES_BY_COLOR:
        case JT.SORT_STICKIES_BY_AUTHOR:
        case JT.SORT_STICKIES_BY_STAMP_COUNT:
        case JT.SORT_STICKIES_BY_STAMP_TYPE:
        case JT.MIND_MAP_GENERATE_IDEAS:
        case JT.CREATE_IDEAS:
        case JT.CANVAS_GENERATE_IMAGE:
        case JT.MERMAID_TO_DIAGRAM:
          return UW;
      }
    }(t),
    onBlur: () => {
      p(!1);
    },
    onClick: e => e.stopPropagation(),
    onFocus: () => {
      p(!0);
    },
    target: "_blank",
    trusted: !0,
    children: jsx(E, {
      variant: e,
      focused: r,
      children: _
    })
  });
}
export function $$_0(e) {
  if (!e.action) return "default";
  let t = e.action;
  return Object.values(JT).includes(t) ? t : "default";
}
export const O = $$_0;
export const y = $$p1;