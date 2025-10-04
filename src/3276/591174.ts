import { jsx } from "react/jsx-runtime";
import { createPortal } from "react-dom";
import i from "classnames";
import { fG } from "../figma_app/973927";
import { convertToRgba } from "../905/862913";
import { FK } from "../figma_app/961422";
import { Ho } from "../figma_app/878651";
import { y3, Yg } from "../figma_app/357202";
var s = i;
export function $$u0(e) {
  let t = fG();
  if (!e.dragState?.dragPosition || !e.dragState?.dragOffset) return null;
  let n = e.dragState.draggingResource;
  let i = e.dragState.dragPosition.subtract(e.dragState.dragOffset);
  let {
    imageUrl,
    name,
    thumbnailIsSet,
    hubFileId,
    clientMeta,
    isWhiteboard,
    resizedThumbnailUrls
  } = t(n);
  return createPortal(jsx("div", {
    className: s()(y3, {
      [Yg]: e.dragState.isDraggingOverCanvas
    }),
    style: {
      left: i.x,
      top: i.y,
      width: e.dragState.draggingThumbSize?.x,
      height: e.dragState.draggingThumbSize?.y
    },
    children: jsx(FK, {
      removeBorder: !0,
      children: jsx(Ho, {
        backgroundColor: convertToRgba(clientMeta),
        image: imageUrl,
        isSet: thumbnailIsSet,
        isWhiteboard,
        hubFileId,
        alt: name,
        resizedThumbnailUrls
      })
    })
  }), document.getElementById("fullscreen-root"));
}
export const S = $$u0;