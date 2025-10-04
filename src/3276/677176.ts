import { useCallback, useContext, useMemo } from "react";
import { useDispatch } from "react-redux";
import { clampPointToBounds } from "../figma_app/819288";
import { Point } from "../905/736624";
import { WN } from "../figma_app/638601";
import { hY, bB, UU } from "../figma_app/770088";
import { I_ } from "../905/234821";
import { isUserNotLoggedInAndEditorSupported } from "../figma_app/564183";
import { rN } from "../figma_app/12220";
import { MP } from "../figma_app/936061";
import { Z } from "../905/104740";
import { viewportToScreen, applyOffsetToViewport } from "../figma_app/62612";
import { selectCurrentFile } from "../figma_app/516028";
import { getUserId } from "../905/372672";
import { viewportNavigatorContext } from "../figma_app/298911";
import { isCommentStateModeratable } from "../905/380385";
import { s as _$$s } from "../905/518538";
import { fG, pC, gu } from "../905/301347";
import { CommentPinElement } from "../905/512783";
import { aggregateUserComments } from "../figma_app/70421";
export function $$w2(e) {
  let t = getUserId();
  let n = selectCurrentFile()?.canEdit;
  return useCallback(o => !!(!0 !== e && isCommentStateModeratable(o.sidebarItemType)) && (!!n || o.comments[0].user_id === t), [e, t, n]);
}
function j(e, t) {
  let n = useContext(viewportNavigatorContext);
  return useCallback(o => {
    let a = e(o.id);
    if (!a || !a.canvasPosition) return;
    let i = n.getViewportInfo();
    let r = viewportToScreen(i, a.canvasPosition);
    let l = Point.subtract(r, o.offset);
    t(applyOffsetToViewport(i, l), a, i);
  }, [e, t, n]);
}
function k() {
  let e = useContext(viewportNavigatorContext);
  return useCallback(t => {
    e.setHovering(t);
  }, [e]);
}
export function $$P0(e, t, n, s, m, u) {
  let f = useContext(viewportNavigatorContext);
  let _ = useDispatch();
  let v = f.getCommentDestinationForCanvasPosition;
  let w = fG();
  let P = k();
  let T = j(e, P);
  let M = j(e, useCallback((e, n) => {
    if (n.comments[0]?.client_meta?.selection_box_anchor) {
      let o = w(e, v(e, t)?.nodeId);
      if (o) {
        let e = clampPointToBounds(n.comments[0].client_meta.selection_box_anchor, o);
        if (e.x !== n.comments[0].client_meta.selection_box_anchor.x || e.y !== n.comments[0].client_meta.selection_box_anchor.y) {
          let t = {
            ...n.comments[0].client_meta
          };
          t.selection_box_anchor = e;
          _(hY({
            thread: n,
            clientMeta: t
          }));
        }
      }
    }
    P(e);
  }, [t, w, v, _, P]));
  let E = j(e, I(t, n));
  let N = function (e, t, n) {
    let i = useDispatch();
    let s = useContext(viewportNavigatorContext);
    let m = I_();
    let u = _$$s();
    let f = Z("comments_navigate");
    let _ = isUserNotLoggedInAndEditorSupported();
    let v = WN();
    return useCallback(o => {
      if (_) {
        v("COMMENT_PIN_CLICK");
        return;
      }
      let a = e(o);
      if (a) {
        if (t) {
          if (!a.isPendingFromSinatra && a.canvasPosition) {
            let e = viewportToScreen(s.getViewportInfo(), a.canvasPosition);
            let n = aggregateUserComments(a.comments).length;
            let o = CommentPinElement.getPinSize(n);
            t(a.id, {
              x: e.x,
              y: e.y,
              width: 1.15 * o.width,
              height: 1.15 * o.height
            });
          }
        } else i(bB({
          receiptsAPI: m.commentReceipts,
          viewport: s,
          thread: a,
          skipDeactivatingExistingActiveComment: n,
          config: u,
          navigate: f
        }));
      }
    }, [m, i, e, s, t, n, u, f, _, v]);
  }(e, m, u);
  return useMemo(() => ({
    onDragEnd: E,
    onPinClicked: N,
    onDragUpdate: M,
    onDragStart: T
  }), [T, E, N, M]);
}
function I(e, t) {
  let n = useContext(viewportNavigatorContext);
  let r = useDispatch();
  let d = n.getCommentDestinationForCanvasPosition;
  let c = fG();
  let u = pC();
  let p = gu();
  let f = n.getValidCommentsRect;
  let _ = k();
  return useCallback((n, o, a) => {
    let g;
    let v = viewportToScreen(a, n);
    if (!rN(v, f())) return;
    if (u(n)) {
      r(UU());
      p();
      _(null);
      return;
    }
    let x = d(n, e, !1);
    let b = {
      x: n.x,
      y: n.y,
      node_id: x?.nodeId,
      node_offset: x?.nodeOffset,
      viewport: a,
      page_id: e,
      in_frame: x?.inFrame,
      selection_box_anchor: o.comments[0].client_meta?.selection_box_anchor,
      stable_path: x?.stablePath
    };
    if (o.comments[0].client_meta?.selection_box_anchor) {
      if (o.comments[0].client_meta.in_frame) {
        let e = o.comments[0].client_meta;
        let t = o.comments[0].client_meta.selection_box_anchor;
        let a = Point.subtract(t, e);
        let i = o.canvasPosition;
        if (x?.inFrame) {
          let e = Point.subtract(i, n);
          g = Point.add(Point.add(n, a), e);
        } else g = Point.add(a, i);
      } else g = o.comments[0].client_meta?.selection_box_anchor;
      let e = c(n, x?.nodeId);
      e && (g = clampPointToBounds(g, e));
    }
    b.selection_box_anchor = g;
    t({
      thread: o,
      clientMeta: b
    });
    _(null);
  }, [e, t, r, d, c, u, p, f, _]);
}
export function $$T1(e, t, n) {
  let a = I(t, n);
  let i = useContext(viewportNavigatorContext);
  let r = MP();
  return useCallback(t => {
    if (r) return !1;
    let n = e();
    if (!n?.isSinglePin) return !1;
    let o = n.cluster.threads[0];
    return !!o && (a(Point.add(n, t), o, i.getViewportInfo()), !0);
  }, [r, e, a, i]);
}
export const BK = $$P0;
export const vB = $$T1;
export const x5 = $$w2;