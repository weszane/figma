import { jsx } from "react/jsx-runtime";
import { createPortal } from "../vendor/944059";
import i from "classnames";
import { ZQ } from "../figma_app/155287";
import { J } from "../469e6e40/985095";
import { Az, Yg } from "../figma_app/357202";
var r = i;
export function $$c0(e) {
  if (!e.dragState?.dragPosition || !e.dragState?.dragOffset) return null;
  let t = e.dragState.dragPosition.subtract(e.dragState.dragOffset);
  let a = ZQ(e.dragState.draggingResource) ? J : e.dragState.draggingResource.redirect_snapshot_url;
  return createPortal(jsx("img", {
    src: a ?? void 0,
    alt: e.dragState.draggingResource.name,
    className: r()(Az, {
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
export const E = $$c0;