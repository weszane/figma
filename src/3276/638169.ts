import { jsx } from "react/jsx-runtime";
import { createPortal } from "../vendor/944059";
import i from "classnames";
import { hasLocalFileId } from "../figma_app/155287";
import { W } from "../3276/776313";
import { fe, Yg } from "../figma_app/357202";
var s = i;
export function $$c0(e) {
  if (!e.dragState?.dragPosition || !e.dragState?.dragOffset) return null;
  let t = e.dragState.dragPosition.subtract(e.dragState.dragOffset);
  let n = hasLocalFileId(e.dragState.draggingResource) ? W : e.dragState.draggingResource.redirect_icon_url;
  return createPortal(jsx("img", {
    src: n,
    alt: e.dragState.draggingResource.name,
    className: s()(fe, {
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
export const z = $$c0;