import { jsx } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import a from "classnames";
import { WAFImage } from "../905/675859";
import { AE } from "../9410/36414";
import { Az, Yg, _D } from "../figma_app/357202";
var s = a;
export function $$c0(e) {
  if (!e.dragState?.dragPosition || !e.dragState?.dragOffset) return null;
  let t = e.dragState.dragPosition.subtract(e.dragState.dragOffset);
  let i = AE(e.dragState.draggingResource);
  return createPortal(void 0 !== e.icon ? jsx("div", {
    className: s()(Az, {
      [Yg]: e.dragState.isDraggingOverCanvas
    }),
    style: {
      left: t.x,
      top: t.y,
      width: e.dragState.draggingThumbSize?.x,
      height: e.dragState.draggingThumbSize?.y
    },
    children: e.icon
  }) : jsx(WAFImage, {
    src: i,
    alt: "",
    className: s()(_D, {
      [Yg]: e.dragState.isDraggingOverCanvas
    }),
    style: {
      left: t.x,
      top: t.y,
      width: e.dragState.draggingThumbSize?.x,
      height: e.dragState.draggingThumbSize?.y
    },
    draggable: !1
  }), document.getElementById("fullscreen-root"));
}
export const M = $$c0;