import { useEffect, useRef } from "react";
import { useSelector } from "../vendor/514228";
import { NLJ, glU } from "../figma_app/763686";
import { debugState } from "../905/407919";
import { UE } from "../figma_app/753501";
import { Y5 } from "../figma_app/455680";
import { BI, m0, pI } from "../figma_app/546509";
import { xN } from "../figma_app/1722";
let $$u0 = [NLJ.VECTOR_PENCIL, NLJ.HIGHLIGHTER, NLJ.WASHI_TAPE, NLJ.ERASER, NLJ.LASSO];
let p = new Map([[NLJ.VECTOR_PENCIL, "set-tool-pencil"], [NLJ.HIGHLIGHTER, "set-tool-highlighter"], [NLJ.WASHI_TAPE, "set-tool-washi-tape"]]);
export function $$_1() {
  let e = BI();
  let t = m0();
  let r = pI();
  let _ = useSelector(e => e.mirror.appModel.currentTool);
  useEffect(() => {
    e?.shouldAllowNativeGestures && t && (t._allow_native_gestures_on_points = e => e.every(e => !UE(document.elementFromPoint(e.x, e.y))), t._allow_web_gestures = e => {
      Y5.allowWebGestures && Y5.allowWebGestures(e ? 1 : 0);
    });
  }, [e, t]);
  useEffect(() => {
    t && (t._toggle_auto_draw_with_pencil = e => {
      t._auto_draw_with_pencil = e;
    });
  }, [t]);
  let h = useRef(NLJ.VECTOR_PENCIL);
  useEffect(() => {
    t?._auto_draw_with_pencil && _ && p.get(_) && (h.current = _);
  }, [_, t]);
  let m = useSelector(e => e.mirror?.appModel.isReadOnly);
  useEffect(() => {
    if (e?.suppliesPencilSamples && t) {
      var r = !1;
      t._take_pencil_samples = (e, n) => {
        if (Y5.takePencilSample && n.length > 0) {
          let d = (e, t) => {
            Y5.takePencilSample?.(e, t.x, t.y, t.modifierKeys ?? 0);
          };
          switch (e) {
            case xN.BEGAN:
              let _ = debugState.getState().mirror.appModel.currentTool;
              let g = n[0];
              if (r = !UE(document.elementFromPoint(g.x, g.y)), t._auto_draw_with_pencil) {
                let e = $$u0.includes(_);
                let {
                  multiplayerEmoji
                } = debugState.getState();
                let n = "REACTING_OR_CHATTING" === multiplayerEmoji.type && !!multiplayerEmoji.imageUrl;
                let i = _ === NLJ.MULTISELECT;
                let o = p.get(h.current);
                !o || e || n || !r || i || m || (glU?.triggerActionInUserEditScope(o, {
                  source: "figma_mobile"
                }), _ = NLJ.VECTOR_PENCIL);
              }
              if (r && (r = $$u0.includes(_)), r) {
                d(xN.BEGAN, g);
                for (var i = 1; i < n.length; i++) d(xN.MOVED_COALESCED, n[i]);
              }
              break;
            case xN.MOVED:
              if (r) {
                d(xN.MOVED, n[0]);
                for (var i = 1; i < n.length; i++) d(xN.MOVED_COALESCED, n[i]);
              }
              break;
            case xN.ENDED:
              if (r) {
                let e = n.length - 1;
                for (var i = 0; i < e; i++) d(xN.MOVED_COALESCED, n[i]);
                d(xN.ENDED, n[e]);
              }
              r = !1;
              break;
            case xN.CANCELLED:
              if (r) {
                let e = n.length - 1;
                for (var i = 0; i < e; i++) d(xN.MOVED_COALESCED, n[i]);
                d(xN.CANCELLED, n[e]);
              }
              r = !1;
          }
        }
      };
    }
  }, [m, e, t]);
  useEffect(() => {
    r && (r._take_indirect_pinch_gesture = (e, t, r, n) => {
      Y5.takeIndirectPinchGesture && !UE(document.elementFromPoint(r.x, r.y)) && Y5.takeIndirectPinchGesture(e, t, r.x, r.y, n);
    });
  }, [r]);
  return null;
}
export const H = $$u0;
export const K = $$_1;