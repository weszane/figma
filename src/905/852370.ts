import { useState, useCallback, useMemo, useRef, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStateTsApi } from "../figma_app/763686";
import { defaultSessionLocalIDString } from "../905/871411";
import { getSingletonSceneGraph } from "../905/700578";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { generateUUIDv4 } from "../905/871474";
import { WJ } from "../figma_app/379850";
import { hA } from "../figma_app/88239";
import { UU, At, _B as _$$_B } from "../figma_app/770088";
import { I_ } from "../905/234821";
import { U6 } from "../figma_app/591738";
import { JG } from "../figma_app/12220";
import { Z } from "../905/104740";
import { Z0 } from "../figma_app/62612";
import { eY } from "../figma_app/722362";
import { getObservableValue } from "../figma_app/84367";
import { hm } from "../905/380385";
import { XC } from "../905/512783";
import { c4 } from "../figma_app/70421";
import { s as _$$s } from "../905/518538";
import { hh } from "../figma_app/42945";
function w(e) {
  return !!e.commentPin;
}
let C = {
  value: () => {}
};
export function $$T2() {
  let [{
    value: e
  }, t] = useState(C);
  let [{
    value: i
  }, r] = useState(C);
  let [a, s] = useState(!1);
  let o = useCallback(e => {
    t(e ? {
      value: e
    } : C);
  }, [t]);
  let l = useCallback(e => {
    r(e ? {
      value: e
    } : C);
  }, [r]);
  return useMemo(() => ({
    onInsert: i,
    onClear: e,
    isEditorFocused: a,
    setIsEditorFocused: s,
    editorOnClear: o,
    editorOnInsert: l
  }), [e, i, a, s, o, l]);
}
export function $$k3(e, t, i) {
  return "loaded" !== e.status ? t : i ? i(e.data) : e.data;
}
export function $$R1(e, t, i, l, d) {
  let c = _$$s();
  let h = useDispatch();
  let g = eY();
  let f = getObservableValue(AppStateTsApi?.singleSlideView().focusedNodeId, null);
  let _ = f && f !== defaultSessionLocalIDString;
  let A = hA();
  let I = useMemo(() => {
    let t;
    switch (c.filterBy) {
      case "hidden_sections":
        t = e => e.filter(e => {
          if (e.id !== i && e.anchored && e.comments.length > 0 && e.comments[0].client_meta?.node_id) {
            let t = e.comments[0].client_meta.node_id;
            let i = g.get(t);
            return !i?.isUnderHiddenSection;
          }
          return !0;
        });
        break;
      case "deleted_anchors":
        t = e => e.filter(e => {
          if (e.anchored && e.comments.length > 0 && e.comments[0].client_meta?.node_id) {
            let t = e.comments[0].client_meta.node_id;
            return !!g.get(t);
          }
          return !0;
        });
        break;
      case "non_slide_anchors":
        t = e => e.filter(e => {
          if (e.anchored && e.comments.length > 0 && e.comments[0].client_meta?.node_id) {
            let t = e.comments[0].client_meta.node_id;
            let i = t ? getSingletonSceneGraph().get(t) : void 0;
            let n = i ? i.containingSlideId : defaultSessionLocalIDString;
            return _ ? n === f : n !== defaultSessionLocalIDString;
          }
          return !0;
        });
        break;
      case "non_dev_mode_focus":
        t = e => e.filter(e => {
          if (e.anchored && e.comments.length > 0 && e.comments[0].client_meta?.node_id) {
            let t = A ? getSingletonSceneGraph().get(A) : null;
            if (!t) return !0;
            let i = e.comments[0].client_meta.node_id;
            let n = i ? getSingletonSceneGraph().get(i) : null;
            return WJ(t, n);
          }
          return !0;
        });
    }
    return $$k3(e, [], t);
  }, [e, i, g, c.filterBy, f, _, A]);
  let E = useRef(I);
  E.current = I;
  useEffect(() => {
    l && !E.current.find(e => e.id === i) && i !== hm && h(UU());
  }, [h, i, l]);
  return useMemo(() => I.filter(e => !!e.canvasPosition && e.page === t && (!d || i === e.id) && !e.isCanvasMention), [I, t, i, d]);
}
export function $$N6(e, t) {
  let i = useMemo(() => e.filter(e => e.canvasPosition), [e]);
  let r = useMemo(() => {
    if (0 !== i.length) return i.reduce((e, t) => e.canvasPosition.y < t.canvasPosition.y ? e : t);
  }, [i]);
  return useMemo(() => r ? function (e, t, i) {
    let n = Z0(i, e).y;
    let r = e => Math.floor((Z0(i, e.canvasPosition).y - n) / 50);
    return t.sort((e, t) => {
      if (U6()) {
        if (w(e) && !w(t)) return -1;
        if (!w(e) && w(t)) return 1;
      }
      let i = r(e);
      let n = r(t);
      return i === n ? e.canvasPosition.x - t.canvasPosition.x : i - n;
    });
  }(r.canvasPosition, e, t) : e, [e, r, t]);
}
export function $$P5(e, t) {
  let i = useContext(hh);
  let a = useMemo(() => $$k3(i.threads, []), [i.threads]);
  let s = useSelector(e => e.comments.newComment);
  return useMemo(() => e === hm ? JG(e, s, t) : a.find(t => t.id === e) || null, [s, e, a, t]);
}
export function $$O4(e, t, i, a, s, o) {
  let [l, d] = useState(!1);
  useEffect(() => {
    e && d(e === i);
  }, [e, i]);
  let c = useDispatch();
  let u = I_();
  let p = _$$s();
  let g = Z("comments-navigate");
  useEffect(() => {
    if (t && !l) {
      let t = a.find(t => t.id === e);
      if (t) {
        if (o) {
          if (!t.isPendingFromSinatra && t.canvasPosition) {
            let e = Z0(s.getViewportInfo(), t.canvasPosition);
            let i = c4(t.comments).length;
            let n = XC.getPinSize(i);
            o(t.id, {
              x: e.x,
              y: e.y,
              width: 1.15 * n.width,
              height: 1.15 * n.height
            });
          }
        } else c(At({
          receiptsAPI: u.commentReceipts,
          thread: t,
          viewport: s,
          config: p,
          navigate: g
        }));
        d(!0);
      }
    }
  }, [t, u, s, c, e, a, l, o, p, g]);
  return l;
}
export function $$D0(e, t) {
  let i = useSelector(e => e.comments.newComment);
  let a = useDispatch();
  let s = I_().writeAPI;
  let o = _$$s();
  return useCallback(() => {
    if (!s) {
      console.error("Calling submitNewComment with no write API");
      return;
    }
    let n = generateUUIDv4();
    globalPerfTimer.start(`comment_creation_${n}`);
    trackEventAnalytics("New comment Creating UUID", {
      uuid: n
    });
    let r = i.anchorPosition;
    if (!r) return;
    let u = e.getCommentDestinationForCanvasPosition(r, t, !0);
    u && (trackEventAnalytics("New comment dispatching submission", {
      uuid: n
    }), a(_$$_B({
      destination: u,
      commentsWriteApi: s,
      commentsConfiguration: o,
      uuid: n
    })));
  }, [e, i, a, t, s, o]);
}
export const H6 = $$D0;
export const WM = $$R1;
export const _B = $$T2;
export const hC = $$k3;
export const nq = $$O4;
export const uB = $$P5;
export const zf = $$N6;