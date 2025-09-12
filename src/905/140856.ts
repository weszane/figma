import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import { createPortal } from "react-dom";
import s from "classnames";
import { Point } from "../905/736624";
import { s as _$$s } from "../cssbuilder/589278";
import { fullscreenValue } from "../figma_app/455680";
import { M5 } from "../figma_app/817077";
import { Fullscreen } from "../figma_app/763686";
import { t as _$$t } from "../905/851577";
import { N } from "../905/645480";
import { cq } from "../905/794154";
import { j } from "../905/645912";
import { V } from "../905/279663";
import { ik, oK } from "../figma_app/357202";
var o = s;
export let $$y0 = forwardRef(({
  fragment: e,
  entryPoint: t,
  fragmentPosition: i,
  onDragStart: a,
  disabled: s = !1
}, o) => {
  let {
    onInsertableResourcePointerDown,
    dragState
  } = function ({
    fragment: e,
    draggingThumbMaxDimensions: t,
    onDragStart: i,
    analyticsProps: n
  }) {
    let r = j(n.entryPoint);
    let {
      close
    } = cq();
    let s = async t => {
      let {
        dropPosition,
        pointerPercentageOffset
      } = t;
      await r({
        fragment: e,
        dropPosition,
        percentageOffset: pointerPercentageOffset || new Point(),
        insertAsChildOfCanvas: !1,
        analyticsProps: n
      });
      close();
    };
    return _$$t({
      resource: e,
      clickToInsert_DEPRECATED: !1,
      draggingThumbMaxDimensions: t,
      onDragStart: i
    }, {
      insertAction: s,
      dragPreviewPointerPosition: N.RELATIVE,
      getDragPreviewSrc: () => e.thumbnail_url,
      onPointerDownCallback: () => {
        Fullscreen.setShowCanvasDragAndDropOutlines(!0);
      },
      onPointerUpCallback: () => {
        Fullscreen.setShowCanvasDragAndDropOutlines(!1);
      }
    });
  }({
    fragment: e,
    draggingThumbMaxDimensions: void 0,
    onDragStart: a,
    analyticsProps: {
      entryPoint: t,
      fragmentPosition: i
    }
  });
  let {
    zoomScale
  } = fullscreenValue.getViewportInfo();
  let v = useMemo(() => dragState?.isDraggingOverCanvas ? new Point(dragState.draggingResource.width, dragState.draggingResource.height).scale(zoomScale) : dragState?.draggingThumbSize, [dragState?.draggingResource.height, dragState?.draggingResource.width, dragState?.draggingThumbSize, dragState?.isDraggingOverCanvas, zoomScale]);
  let I = M5(dragState, !0, [dragState?.draggingResource.width, dragState?.draggingResource.height]);
  let E = jsx(V.Image, {
    src: e.thumbnail_url,
    alt: "A fragment"
  });
  return jsxs(Fragment, {
    children: [jsx(V.Container, {
      ref: o,
      padding: 16,
      onPointerDown: s ? void 0 : onInsertableResourcePointerDown,
      children: E
    }), jsx(b, {
      dragState,
      dragPreviewSize: I ?? v,
      children: E
    })]
  });
});
function b({
  dragState: e,
  children: t,
  dragPreviewSize: i
}) {
  if (!e?.dragPosition || !e?.grabbedPointerPercentageOffset || !i) return null;
  let r = e.dragPosition.subtract(new Point(e.grabbedPointerPercentageOffset.x * i.x, e.grabbedPointerPercentageOffset.y * i.y));
  return createPortal(jsx("div", {
    className: o()(_$$s.flex.$, ik, {
      [oK]: e.isDraggingOverCanvas
    }),
    style: {
      left: r.x,
      top: r.y,
      width: `${i.x}px`,
      height: `${i.y}px`,
      maxWidth: `${e.draggingThumbMaxDimensions?.x}px`,
      maxHeight: `${e.draggingThumbMaxDimensions?.y}px`
    },
    children: t
  }), document.getElementById("fullscreen-root"));
}
export const a = $$y0;
