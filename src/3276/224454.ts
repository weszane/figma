import { ex } from "../905/524523";
import { jsxs, jsx } from "react/jsx-runtime";
import { _ } from "../figma_app/496441";
import { s as _$$s } from "../cssbuilder/589278";
import { tx } from "../905/303541";
export let $$$$r0 = ex("share_button_disabled_personal_draft", function (e) {
  let {
    isCurrentUserFileOwner
  } = e;
  return isCurrentUserFileOwner ? jsxs("div", {
    className: _$$s.cursorDefault.colorTextTooltip.$,
    children: [jsx("span", {
      children: tx("fullscreen.toolbar.multiplayer.sharing_disabled_for_personal_drafts")
    }), jsx("div", {
      className: _$$s.bl1.hFull.inline.bSolid.colorBorderMenu.ml8.mr8.$
    }), jsx(_, {
      href: "/files/drafts-to-move",
      className: _$$s.cursorPointer.noUnderline.fontBold.colorTextTooltip.$,
      children: tx("fullscreen.toolbar.multiplayer.sharing_disabled_visit_drafts_to_move_link")
    })]
  }) : tx("fullscreen.toolbar.multiplayer.sharing_disabled_while_file_is_being_moved");
}, e => {
  let t = e.getAttribute("data-tooltip-is-current-user-file-owner");
  return {
    isCurrentUserFileOwner: !!t && JSON.parse(t),
    unconstrainWidth: !0
  };
});
export const r = $$$$r0;