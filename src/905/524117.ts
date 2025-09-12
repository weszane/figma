import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { createPortal } from "react-dom";
import s from "classnames";
import { Point } from "../905/736624";
import { lg } from "../figma_app/976749";
import { fullscreenValue } from "../figma_app/455680";
import { M5 } from "../figma_app/817077";
import { dx } from "../figma_app/646357";
import { hasAssetId, PrimaryWorkflowEnum } from "../figma_app/633080";
import { M } from "../905/771870";
import { cx } from "../figma_app/76115";
import { au, bO, Hx, Wy, Pl, ce } from "../figma_app/357202";
var o = s;
export function $$_0(e) {
  let t = "whiteboard" === lg();
  let i = e.dragState;
  let s = cx(i?.draggingResource);
  let p = i ? function (e, t, i) {
    let n = e.draggingResource;
    let {
      zoomScale
    } = fullscreenValue.getViewportInfo();
    if (t && "min_node_width" in n) return new Point(n.min_node_width, n.min_node_height).scale(zoomScale);
    if (t && "width" in n) return new Point(n.width, n.height).scale(zoomScale);
    if (!(i && b(n))) return e.draggingThumbSize;
    {
      let [t, i] = y(n);
      if (!e.isDraggingOverCanvas || !e.draggingThumbSize || !t || !i) return e.draggingThumbSize;
      let a = Number((e.draggingThumbSize.x / e.draggingThumbSize.y).toFixed(2));
      let s = Number((t / i).toFixed(2));
      let o = t;
      let d = i;
      a !== s && t && i && (a > s ? o = i * a : d = t / a);
      return new Point(o, d).scale(zoomScale);
    }
  }(i, t, s) : void 0;
  let m = useMemo(() => i?.draggingResource && b(i.draggingResource) ? y(i.draggingResource) : void 0, [i?.draggingResource]);
  let _ = M5(i, s, m);
  let A = e.overrideDragPreviewSize ?? _ ?? p;
  if (!i?.dragPosition || !i?.grabbedPointerPercentageOffset || !A) return null;
  let v = e.thumbnailOverrideSrc ? jsx("img", {
    src: e.thumbnailOverrideSrc,
    alt: ""
  }) : jsx(M, {
    item: i.draggingResource,
    shouldGenerateLocalThumbnail: !1,
    draggable: !1
  });
  if (e.isList && !i.isDraggingOverCanvas) return createPortal(jsxs("div", {
    className: au,
    style: {
      left: i.dragPosition.x,
      top: i.dragPosition.y,
      transform: "translate(-50%, -50%)",
      zIndex: e.zIndexOverride,
      opacity: e.opacityOverride ? e.opacityOverride : 1
    },
    children: [v, jsx("div", {
      className: bO,
      children: i.draggingResource.name
    })]
  }), document.getElementById("fullscreen-root"));
  let I = i.dragPosition;
  let E = s ? void 0 : e.isList ? new Point(100, 100) : i.draggingThumbMaxDimensions;
  I = e.isList ? s ? I.subtract(new Point(A.x / 2, A.y / 2)) : I.subtract(new Point(Math.min((E?.x || 1 / 0) / 2, (i.draggingThumbSize?.x ?? 1 / 0) / 2), Math.min((E?.y || 1 / 0) / 2, (i.draggingThumbSize?.y ?? 1 / 0) / 2))) : I.subtract(new Point(i.grabbedPointerPercentageOffset.x * A.x, i.grabbedPointerPercentageOffset.y * A.y));
  return createPortal(jsx("div", {
    className: o()(s ? Hx : Wy, {
      [Pl]: e.isList,
      [ce]: i.isDraggingOverCanvas
    }),
    style: {
      left: I.x,
      top: I.y,
      width: A.x,
      height: A.y,
      maxWidth: !t && E ? E.x : void 0,
      maxHeight: !t && E ? E.y : void 0,
      zIndex: e.zIndexOverride,
      opacity: e.opacityOverride ? e.opacityOverride : 1
    },
    children: v
  }), document.getElementById("fullscreen-root"));
}
let A = e => !!e.isLocal;
let y = e => hasAssetId(e) ? [e.mainThumbnailInfo.width, e.mainThumbnailInfo.height] : e.type === PrimaryWorkflowEnum.MODULE ? [e.width, e.height] : A(e) ? [e.width, e.height] : [e.min_node_width, e.min_node_height];
function b(e) {
  return dx(e) || hasAssetId(e) && "SUBSCRIBED" !== e.subscriptionStatus;
}
export const q = $$_0;
