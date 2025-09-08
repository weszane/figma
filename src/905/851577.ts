import { useRef, useContext, useCallback } from "react";
import { useStore, useDispatch } from "../vendor/514228";
import { h as _$$h } from "../905/207101";
import { BrowserInfo } from "../figma_app/778880";
import { BV, Pt } from "../figma_app/806412";
import { Point } from "../905/736624";
import { jD } from "../905/765855";
import { O1, KD } from "../figma_app/317394";
import { fullscreenValue } from "../figma_app/455680";
import { wr } from "../figma_app/741237";
import { $$, Z0 } from "../figma_app/62612";
import { L as _$$L } from "../figma_app/608876";
import { T } from "../905/645480";
import { M, Y } from "../figma_app/822893";
import { Nq, zR } from "../figma_app/817077";
import { useSyncedRef } from "../905/633914";
import { nS } from "../figma_app/274383";
export function $$b0(e, t) {
  let i = useStore();
  let b = useDispatch();
  let v = new Image();
  let I = useRef(!1);
  let E = useRef(void 0);
  let x = useRef([]);
  let [S, w, C] = useSyncedRef(null);
  let {
    state,
    dispatch
  } = useContext(nS);
  _$$h(() => {
    t.preloadThumbnail && (v.src = t.getDragPreviewSrc());
  });
  let R = _$$L({
    onDelayedDragSuccess: i => {
      document.addEventListener("pointermove", O, {
        passive: !1
      });
      E.current = new Point(i.clientX, i.clientY);
      v.src = t.getDragPreviewSrc();
      t.onPointerDownCallback?.();
      let n = i.currentTarget;
      n || console.error("Expected dragTarget to be non-null, but it's null. If this is an interaction test, you may need to add a currentTarget argument to the args in t.do()");
      let r = n.getBoundingClientRect();
      let a = new Point(i.clientX, i.clientY);
      C(t => ({
        ...t,
        draggingResource: e.resource,
        isDraggingOverCanvas: !1
      }));
      v.onload = () => {
        let i = v.naturalWidth / 2;
        let n = v.naturalHeight / 2;
        let {
          dragOffset,
          pointerPercentageOffset,
          draggingThumbSize
        } = T(t.dragPreviewPointerPosition, new Point(i, n), a, r);
        C(t => t ? {
          ...t,
          dragOffset,
          grabbedPointerPercentageOffset: pointerPercentageOffset,
          draggingThumbSize,
          draggingThumbMaxDimensions: e.draggingThumbMaxDimensions
        } : t);
      };
    },
    onDelayedDragCancelled: () => {
      I.current = !1;
    }
  });
  let N = useRef(!1);
  let P = BV(Pt("insertableResource", t.recordingKey || ""), "pointerdown", e => {
    2 === e.button || e.ctrlKey || (e.stopPropagation(), BrowserInfo.isMeetDevice && dispatch({
      type: "start click"
    }), x.current = M(), document.addEventListener("pointerup", D), N.current = !0, BrowserInfo.isMeetDevice && document.addEventListener("touchend", D), I.current = !0, R(e));
  });
  let O = useCallback(BV(Pt("insertableResource", t.recordingKey || ""), "pointermove", t => {
    let n = i.getState().mirror.sceneGraphSelection;
    let r = S.current;
    if (!r) return;
    t.preventDefault();
    let a = new Point(t.clientX, t.clientY);
    let s = Y(a, x.current);
    let o = r.draggingResource;
    let c = {
      dragPosition: a,
      isDraggingOverCanvas: s
    };
    I.current && r.dragPosition && E.current && E.current.distanceTo(a) > Nq && (n && o && (wr(), fullscreenValue.commit(), b(jD())), e.onDragStart?.(), I.current = !1);
    C(e => ({
      ...e,
      ...c
    }));
  }, {
    recordMetadata: e => {
      let t = fullscreenValue.getViewportInfo();
      let i = new Point(t.x, t.y);
      let n = new Point(e.clientX, e.clientY).subtract(i);
      let r = $$(t, n);
      return {
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        canvasPosition: r
      };
    },
    playbackMetadata: e => {
      let t = fullscreenValue.getViewportInfo();
      let i = new Point(t.x, t.y);
      let n = Z0(t, e.canvasPosition);
      let r = Point.add(n, i);
      return {
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        clientX: r.x,
        clientY: r.y
      };
    }
  }), [i, S, C, e.onDragStart, e.isDraggingDisabled]);
  let D = useCallback(BV(Pt("insertableResource", t.recordingKey || ""), "pointerup", i => {
    let n = S.current;
    let r = e.recomputeCancelRectsOnPointerUp && n?.dragPosition ? Y(n?.dragPosition, M()) : n?.isDraggingOverCanvas;
    let a = n?.dragPosition;
    let o = E.current && a && E.current.distanceTo(a) > Nq;
    if (!e.isDraggingDisabled && r && o || I.current && e.clickToInsert_DEPRECATED) {
      BrowserInfo.isMeetDevice && dispatch({
        type: "end insert"
      });
      let r = zR(I.current ? void 0 : n?.dragPosition);
      t.insertAction({
        e: i,
        dropPosition: r,
        pointerPercentageOffset: n?.grabbedPointerPercentageOffset,
        isClick: I.current
      }).then(() => e.afterSuccessfulInsert?.(i));
    } else t.onPointerUpWithoutInsert?.();
    t.onPointerUpCallback?.();
    C(null);
    N.current = !1;
    BrowserInfo.isMeetDevice && document.removeEventListener("touchend", D);
    document.removeEventListener("pointerup", D);
    document.removeEventListener("pointermove", O);
  }, {
    recordMetadata: e => {
      let t = fullscreenValue.getViewportInfo();
      let i = new Point(t.x, t.y);
      let n = new Point(e.clientX, e.clientY).subtract(i);
      let r = $$(t, n);
      return {
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        canvasPosition: r
      };
    },
    playbackMetadata: e => {
      let t = fullscreenValue.getViewportInfo();
      let i = new Point(t.x, t.y);
      let n = Z0(t, e.canvasPosition);
      let r = Point.add(n, i);
      return {
        shiftKey: e.shiftKey,
        metaKey: e.metaKey,
        clientX: r.x,
        clientY: r.y
      };
    }
  }), [S, e, t, C, O]);
  let L = useCallback(() => !!N.current && (C(null), t.onPointerUpCallback?.(), !0), [t, C]);
  O1(L, KD.OVERLAY);
  return {
    onInsertableResourcePointerDown: P,
    dragState: I.current ? null : w
  };
}
export const t = $$b0;