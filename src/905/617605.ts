import { Fullscreen, AppStateTsApi, SlideConstantsCppBindings } from "../figma_app/763686";
import { parsePxInt } from "../figma_app/783094";
import { FEditorType } from "../figma_app/53721";
import { CommentPinElement } from "../905/512783";
import { computeFullscreenViewportForNode, viewportToScreen } from "../figma_app/62612";
import { rY4, PXB } from "../figma_app/27776";
let d = parsePxInt(rY4) + parsePxInt(PXB);
export function $$c0(e, t, i, r, a) {
  return "fullscreen" === i.view && Fullscreen ? u(e, t, i, r, a) : Promise.resolve(p(e, t, i));
}
let u = (e, t, i, n, r) => {
  let a = e.page;
  let s = m(e);
  return s && a ? computeFullscreenViewportForNode({
    nodeId: a,
    nodeAbsoluteBounds: s,
    alwaysPan: !1,
    viewportRect: h(t, i, r),
    noPanViewportMultiplier: n ? 0 : .9,
    panJustEnoughViewportMultiplier: n ? 0 : 1.5
  }) : Promise.resolve(null);
};
let p = (e, t, i) => {
  if (!e.canvasPosition || "communityHub" !== i.view && "prototype" !== i.view) return null;
  let n = t.getViewportInfo();
  let r = viewportToScreen(n, e.canvasPosition);
  let a = e.comments[0].client_meta?.selection_box_anchor;
  let s = a ? viewportToScreen(n, a) : r;
  if (!((e, t) => {
    let i = n.width;
    let r = n.height;
    return e - 64 > 0 && e + 64 < i && t - 64 > 0 && t + 64 < r;
  })(Math.min(r.x, s.x), Math.min(r.y, s.y))) {
    let t = e.canvasPosition.x;
    let r = e.canvasPosition.y;
    let s = n.zoomScale;
    if (a) {
      t = (e.canvasPosition.x + a.x) / 2;
      r = (e.canvasPosition.y + a.y) / 2;
      let o = Math.abs(e.canvasPosition.x - a.x);
      let l = Math.abs(e.canvasPosition.y - a.y);
      let d = (n.width - 128) / o;
      let c = (n.height - 128) / l;
      "prototype" !== i.view && (s = Math.min(n.zoomScale, d, c));
    }
    return {
      centerX: t,
      centerY: r,
      scale: s
    };
  }
  return null;
};
let m = e => {
  let {
    canvasPosition,
    selectionAnchorCanvasPosition
  } = e;
  if (!canvasPosition) return null;
  let {
    width,
    height
  } = CommentPinElement.getPinSize(new Set(e.comments.map(e => e.user_id)).size);
  let a = {
    origin: {
      x: canvasPosition.x,
      y: canvasPosition.y - height
    },
    size: {
      x: width,
      y: height
    }
  };
  if (!selectionAnchorCanvasPosition) return a;
  {
    let e = Math.min(selectionAnchorCanvasPosition.x, a.origin.x);
    let t = Math.max(selectionAnchorCanvasPosition.x, a.origin.x + a.size.x);
    let n = Math.min(selectionAnchorCanvasPosition.y, a.origin.y);
    return {
      origin: {
        x: e,
        y: n
      },
      size: {
        x: t - e,
        y: Math.max(selectionAnchorCanvasPosition.y, a.origin.y + a.size.y) - n
      }
    };
  }
};
let h = (e, t, i) => {
  let r = e.getViewportInfo();
  let s = {
    origin: {
      x: 0,
      y: 0
    },
    size: {
      x: r.width,
      y: r.height
    }
  };
  if ("fullscreen" === t.view && t.editorType === FEditorType.Whiteboard && i && (s.size.x -= d), "fullscreen" === t.view && t.editorType === FEditorType.Slides && AppStateTsApi.singleSlideView().isFocusedNodeViewEnabled()) {
    let e = AppStateTsApi.editorPreferences().speakerNotesHeight.getCopy() + (SlideConstantsCppBindings?.dragHandleTotalHeight() ?? 0);
    s.size.y -= e;
  }
  let o = AppStateTsApi?.uiState().editorBannerHeight.getCopy() ?? 0;
  o && (s.origin.y += o, s.size.y -= o);
  return s;
};
export const E = $$c0;