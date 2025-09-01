import { jsx, jsxs } from "react/jsx-runtime";
import { buildUploadUrl } from "../figma_app/169182";
import { s as _$$s } from "../cssbuilder/589278";
import { t } from "../905/303541";
import { ic } from "../figma_app/688398";
import { _Q, Xe } from "../figma_app/224338";
export function $$d0({
  height: e
}) {
  let t = _Q();
  let i = Xe();
  let r = ic(t || i || "");
  return jsx("div", {
    className: "present_large_slide_icon--presentLargeSlideIcon--5KkyN",
    style: {
      backgroundImage: `url('${r}')`,
      backgroundSize: "cover",
      height: e ?? 76
    }
  });
}
export function $$c1() {
  return jsxs("div", {
    className: "present_large_slide_icon--presentWithNotesLargeSlideIcon--5qjsR",
    children: [jsx($$d0, {
      height: 70
    }), jsx("div", {
      className: "present_large_slide_icon--speakerNotesIcon--N7ajq",
      children: jsxs("div", {
        className: _$$s.relative.$,
        children: [jsx("img", {
          width: 108,
          height: 64,
          alt: t("fullscreen_actions.present-slides-flyout-icon-alt"),
          src: buildUploadUrl("7b1950606ade560b05bdfdb1b2a98337cf993a3a")
        }), jsx("div", {
          className: "present_large_slide_icon--speakerNotesSlidePreviewIcon--HQQBs",
          children: jsx($$d0, {
            height: 34
          })
        })]
      })
    })]
  });
}
export const V = $$d0;
export const y = $$c1;