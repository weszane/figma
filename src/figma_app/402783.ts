import { useState, useCallback } from "react";
import { glU, cfv } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { UN } from "../905/700578";
import { zl } from "../figma_app/27355";
import { sx } from "../905/449184";
import { am } from "../figma_app/901889";
import { jk } from "../905/609396";
import { useSprigWithSampling } from "../905/99656";
import { fF } from "../905/471229";
import { g as _$$g } from "../905/880308";
import { b as _$$b } from "../905/985254";
import { Ay, nU, c6 } from "../figma_app/432652";
import { _s } from "../figma_app/33126";
import { J } from "../905/915227";
import { kS } from "../figma_app/864723";
import { zp } from "../figma_app/847014";
import { Gw, WN } from "../figma_app/274571";
import { Z } from "../905/104740";
import { QZ } from "../figma_app/62612";
import { As, ze } from "../figma_app/516028";
import { D } from "../905/347702";
import { AM } from "../figma_app/610446";
import { tE, ez, xQ, E$, um } from "../figma_app/835718";
import { mr, sh } from "../figma_app/864246";
import { b7 } from "../figma_app/101849";
class w {
  static generateLocalRequestId() {
    return _$$g();
  }
}
let O = D((e, t, r) => {
  let n = l7.user("insert-ai-summary-node", () => glU.insertAISummaryInCanvas(t, r));
  let s = e.get(n);
  s && (l7.user("set-ai-summary-timestamp", () => {
    Gw(s, new Date());
  }), glU.triggerAction("commit", {}));
  return s;
});
async function R({
  v: e,
  canvasData: t,
  nodePosition: r,
  loadingNodeGuid: n,
  showErrorBell: s,
  trackSummaryRequested: d,
  trackSummaryCreated: c,
  scene: u,
  operationTimer: _,
  source: T
}) {
  let I;
  let v;
  let A = {
    orgId: zl.get(_s),
    teamId: zl.get(As) || null,
    fileKey: zl.get(ze) || null,
    userId: zl.get(kS) || null,
    fileSeq: zl.get(J)?.toString() || null,
    trackingSessionId: fF()
  };
  let C = e => {
    let t;
    "figjam_summarize_out_of_date" === e.type && (t = {
      type: tE.Reload
    });
    "content_length_limit_exceeded" === e.type && "DISCOVERY_NUDGE" === T && sx("ai_summarize_from_nudge_exceeded_token_length_limit", {}, {
      forwardToDatadog: !0
    });
    s(e.message, ez.SUMMARIZE, t);
    return Error(xQ[ez.SUMMARIZE] + e.message);
  };
  let R = t.map(e => e.id);
  let L = w.generateLocalRequestId();
  d(R, t, L);
  let P = null;
  let D = !1;
  try {
    I = (await Ay.figjam.streamSummarize({
      v: e,
      data: t
    }, A)).pipeThrough(nU());
  } catch (e) {
    C(E$(e, ez.SUMMARIZE));
    return;
  }
  let k = () => {
    if (!D) {
      let e = u.get(n);
      e && e.isAlive && l7.system("remove-ai-summary-loading-state", () => {
        glU.deleteNode(n);
        D = !0;
      });
    }
  };
  let M = () => {
    let e = O(u, r, n);
    e && setTimeout(() => {
      k();
    }, 200);
    return e;
  };
  let F = 0;
  try {
    for await (let e of new c6(I)) {
      v = e;
      let t = F % 5 == 0;
      P || (P = await M());
      t && l7.system("stream-ai-summary", () => {
        P && WN(P, v);
      });
      F++;
    }
  } catch (e) {
    C(E$(e, ez.SUMMARIZE));
    return;
  }
  if (l7.system("stream-ai-summary", () => {
    v && P && WN(P, v);
  }), v) {
    let e = _.stop();
    e && sx(mr.TIME_TAKEN_TO_COMPLETE, {
      elapsed_ms: e
    }, {
      forwardToDatadog: !0
    });
    P && (_$$b({
      [zp]: !0
    }), c(P.guid, v, L));
  }
  v && P && glU.triggerAction("commit", {});
}
export function $$L0(e, t = !0, r) {
  let [o] = useState(UN());
  let [l, p] = useState(!1);
  let _ = Z("figjam_summary_navigate");
  let h = um();
  let {
    Sprig
  } = useSprigWithSampling();
  let g = function () {
    let e = am();
    return useCallback((t, r, n) => {
      let i = sh(r);
      e(mr.REQUEST, {
        local_summary_id: n,
        num_characters_input: i,
        nodes_summarized: t
      });
    }, [e]);
  }();
  let f = function () {
    let e = am();
    return useCallback((t, r, n) => {
      let i = {
        local_summary_id: n,
        summary_node_id: t,
        num_characters_output: r.map(e => "content" in e ? e.content.length : 0).reduce((e, t) => e + t, 0),
        num_themes_output: r.filter(e => "h2" === e.type).length,
        num_supporting_points_output: r.filter(e => "li" === e.type).length
      };
      e(mr.CREATE, i);
    }, [e]);
  }();
  return {
    summarizeCanvasSelection: async () => {
      let n = new jk(mr.TIME_TAKEN_TO_COMPLETE, {});
      n.start();
      let {
        v,
        data
      } = b7(UN());
      let u = l7.user("insert-ai-summary-loading-node", () => glU.insertLoadingSummaryInCanvas(e === cfv.BELOW, t));
      let E = o.get(u);
      if (!E) return;
      l7.user("insert-ai-summary-loading-node", () => {
        E.setWidgetSyncedState("syncedState:loading", "true");
      });
      _(QZ({
        nodeId: u,
        alwaysPan: !1
      }));
      let y = {
        x: E.absoluteBoundingBox.x,
        y: E.absoluteBoundingBox.y
      };
      if (data) {
        p(!0);
        try {
          await R({
            v,
            canvasData: data,
            nodePosition: y,
            loadingNodeGuid: u,
            showErrorBell: h,
            trackSummaryRequested: g,
            trackSummaryCreated: f,
            scene: o,
            operationTimer: n,
            source: r
          });
        } catch (e) {
          o.get(u) && glU.deleteNode(u);
        } finally {
          Sprig("track", AM);
          p(!1);
        }
      }
    },
    requestIsPending: l
  };
}
export const ss = $$L0;