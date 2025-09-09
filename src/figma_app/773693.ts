import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { Fullscreen, WhiteboardAiVisualCppBindings, MindmapCppBindings } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomWithSubscription } from "../figma_app/27355";
import { am } from "../figma_app/901889";
import { PerfTimer } from "../905/609396";
import { getTrackingSessionId } from "../905/471229";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { Ay } from "../figma_app/432652";
import { _s } from "../figma_app/33126";
import { J } from "../905/915227";
import { kS } from "../figma_app/864723";
import { openFileTeamIdAtom, openFileKeyAtom } from "../figma_app/516028";
import { um, E$, ez } from "../figma_app/835718";
import { ep, SU } from "../figma_app/101849";
let I = "ai_expand_mindmap";
var $$S = (e => (e.LOADING = "ai-expand-mindmap-loading", e.SUCCESS = "ai-expand-mindmap-success", e))($$S || {});
export function $$v0() {
  let e = useAtomWithSubscription(_s);
  let t = useAtomWithSubscription(openFileTeamIdAtom);
  let r = useAtomWithSubscription(openFileKeyAtom);
  let S = useAtomWithSubscription(kS);
  let v = useAtomWithSubscription(J);
  let A = um();
  let x = am();
  let N = useDispatch();
  let C = {
    orgId: e,
    teamId: t || null,
    fileKey: r,
    userId: S || null,
    trackingSessionId: getTrackingSessionId(),
    fileSeq: v?.toString() || null
  };
  let w = useCallback(() => N(VisualBellActions.enqueue({
    message: getI18nString("whiteboard.ai_expand_mindmap.generic_error")
  })), [N]);
  let O = e => {
    for (let t of e) permissionScopeHandler.user("expand-figjam-ai-mindmap", () => {
      Fullscreen?.deleteNode(t);
    });
  };
  let R = (e, t, r) => {
    let n = ep(getSingletonSceneGraph(), e);
    if (!n) {
      w();
      x(I, {
        success: !1,
        failure_reason: "Failed to get input data"
      });
      return;
    }
    N(VisualBellActions.dequeue({
      matchType: "ai-expand-mindmap-success"
    }));
    N(VisualBellActions.enqueue({
      message: getI18nString("whiteboard.ai_modal.streaming"),
      icon: VisualBellIcon.SPINNER,
      type: "ai-expand-mindmap-loading",
      timeoutOverride: 1 / 0
    }));
    Ay.figjam.updateVisual({
      inputData: n,
      updateType: {
        visualType: "mindmap",
        updateMode: "generate_ideas"
      }
    }, C).then(n => {
      r && O(r);
      let i = permissionScopeHandler.user("expand-figjam-ai-mindmap", () => WhiteboardAiVisualCppBindings?.expandWithFigjamAiMindmapNodes(n, e) ?? []);
      let o = t.stop();
      i.length ? (N(VisualBellActions.enqueue({
        message: getI18nString("whiteboard.ai_expand_mindmap.generation_success"),
        type: "ai-expand-mindmap-success",
        button: {
          text: getI18nString("whiteboard.ai_expand_mindmap.retry"),
          action: () => {
            let t = new PerfTimer(I, {});
            t.start();
            R(e, t, i);
            return !1;
          }
        }
      })), x(I, {
        request_id: n.requestId,
        success: !0,
        failure_reason: "",
        num_nodes_generated: i.length,
        elapsed_ms: o
      })) : (w(), x(I, {
        request_id: n.requestId,
        success: !1,
        failure_reason: "No nodes generated",
        elapsed_ms: o
      }));
    }).catch(e => {
      let r = t.stop();
      let n = E$(e, ez.GENERATE);
      A(n.message, ez.GENERATE);
      x(I, {
        success: !1,
        failure_reason: n.message,
        elapsed_ms: r
      });
    }).$$finally(() => {
      N(VisualBellActions.dequeue({
        matchType: "ai-expand-mindmap-loading"
      }));
    });
  };
  return {
    expandSelectedMindmapNode: () => {
      let e = new PerfTimer(I, {});
      e.start();
      let t = MindmapCppBindings?.getSingleSelectedDiagramNodeId() ?? "";
      let r = function (e, t) {
        let r = e.get(t);
        if (r) {
          if (SU(r)) return t;
          {
            if (!r.diagramParentId) return;
            let t = e.get(r.diagramParentId);
            return SU(t) ? r.diagramParentId : void 0;
          }
        }
      }(getSingletonSceneGraph(), t);
      if (!r) {
        w();
        x(I, {
          success: !1,
          failure_reason: "Failed to get selected node"
        });
        return;
      }
      R(r, e);
    }
  };
}
export const S = $$v0;