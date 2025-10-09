import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deepEqual } from "../905/382883";
import { noop } from 'lodash-es';
import { useLatestRef } from "../figma_app/922077";
import { activateCommentThread, setNewAnchorPosition, activateNewComment, deactivateActiveComment, setNewCommentMessage } from "../figma_app/770088";
import { I_ } from "../905/234821";
import { fullscreenValue } from "../figma_app/455680";
import { useNavigateToViewport } from "../905/104740";
import { applyOffsetToViewport, viewportToScreen } from "../figma_app/62612";
import { NEW_COMMENT_ID } from "../905/380385";
import { CommentPinElement } from "../905/512783";
import { aggregateUserComments } from "../figma_app/70421";
import { s as _$$s } from "../905/518538";
import { h4, sc } from "../figma_app/546509";
export function $$E1(e, t, r, a, o) {
  let h = h4();
  let m = useDispatch<AppDispatch>();
  let E = I_();
  let y = _$$s();
  let b = useNavigateToViewport();
  useEffect(() => {
    h && (h._select_comment = e => {
      let n = t.find(t => t.id === e);
      n && m(activateCommentThread({
        receiptsAPI: E.commentReceipts,
        thread: n,
        viewport: r,
        skipDeactivatingExistingActiveComment: !0,
        config: y,
        navigate: b
      }));
    });
  }, [h, m, t, E, r, y, b]);
  useEffect(() => {
    h && (h._add_draft_comment = e => {
      let t = applyOffsetToViewport(r.getViewportInfo(), e);
      m(setNewAnchorPosition({
        anchorPosition: t
      }));
      m(activateNewComment());
    });
  }, [h, m, r]);
  useEffect(() => {
    h && (h._deselect_comment = e => {
      m(deactivateActiveComment());
    }, h._remove_draft_comment = () => {
      e === NEW_COMMENT_ID && m(deactivateActiveComment());
    });
  }, [h, e, m]);
  useEffect(() => {
    h && (h._submit_comment_draft = e => {
      m(setNewCommentMessage({
        messageMeta: e
      }));
      o();
    });
  }, [h, e, m, o]);
  useEffect(() => {
    h && a && (h._set_comments_visibility = e => {
      fullscreenValue.triggerAction("toggle-show-comments", {
        source: "mobile_app"
      });
    });
  }, [h, a]);
  useEffect(() => {
    h && (h._pan_canvas = e => {
      let t = r.getViewportInfo();
      r.navigateTo({
        x: t.offsetX + e.x / t.zoomScale,
        y: t.offsetY + e.y / t.zoomScale
      }, t.zoomScale);
    });
  }, [h, r]);
  useEffect(() => {
    h && !h._recenter_comment && (h._recenter_comment = noop);
    h && !h._recenter_draft_comment && (h._recenter_draft_comment = noop);
  }, [h]);
}
export function $$y0(e, t, r, s, l) {
  let d = sc();
  useEffect(() => {
    d?.updateCommentVisibility && !s && d.updateCommentVisibility(null !== l);
  }, [d, s, l]);
  let c = useSelector(e => e.comments.newComment);
  let u = useMemo(() => {
    if (e === NEW_COMMENT_ID) {
      if (!c.anchorPosition) return null;
      {
        let e = viewportToScreen(r.getViewportInfo(), c.anchorPosition);
        return {
          x: e.x,
          y: e.y,
          width: 36.8,
          height: 36.8
        };
      }
    }
    let n = t.find(t => t.id === e);
    if (!n || !n.canvasPosition) return null;
    let i = viewportToScreen(r.getViewportInfo(), n.canvasPosition);
    let a = aggregateUserComments(n.comments).length;
    let s = CommentPinElement.getPinSize(a);
    return {
      x: i.x,
      y: i.y,
      width: 1.15 * s.width,
      height: 1.15 * s.height
    };
  }, [e, c, t, r]);
  let g = useLatestRef(e);
  let E = useLatestRef(u);
  useEffect(() => {
    e && u && e === g && E && !deepEqual(u, E) && (e === NEW_COMMENT_ID ? d?.updateDraftCommentPinPosition?.(u) : d?.updateCommentPinPosition?.(e, u));
  }, [d, e, u, E, g]);
}
export const $P = $$y0;
export const d0 = $$E1;
