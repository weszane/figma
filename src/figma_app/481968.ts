import { useRef, useMemo, useState, useCallback } from "react";
import { StickyClusteringCppBindings, Fullscreen } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomWithSubscription } from "../figma_app/27355";
import { trackFileEventWithUser } from "../figma_app/901889";
import { PerfTimer } from "../905/609396";
import { useSprigWithSampling } from "../905/99656";
import { getTrackingSessionId } from "../905/471229";
import { getI18nString } from "../905/303541";
import { cortexAPI } from "../figma_app/432652";
import { _s } from "../figma_app/33126";
import { J as _$$J } from "../905/915227";
import { userIdAtom } from "../figma_app/864723";
import { useNavigateToViewport } from "../905/104740";
import { renameNode } from "../figma_app/741237";
import { computeFullscreenViewportForNode } from "../figma_app/62612";
import { openFileTeamIdAtom, openFileKeyAtom } from "../figma_app/516028";
import { l0 } from "../figma_app/610446";
import { um, E$, ez } from "../figma_app/835718";
import { ClusterEventType } from "../figma_app/864246";
let A = e => ({
  ...e,
  width: e.w,
  height: e.h
});
export function $$x1() {
  let e = useRef(getI18nString("whiteboard.ai_cluster.loading_section_base"));
  let t = useMemo(() => getSingletonSceneGraph(), []);
  let {
    Sprig
  } = useSprigWithSampling();
  let [x, N] = useState(!1);
  let C = trackFileEventWithUser();
  let w = useRef();
  let O = useNavigateToViewport("figjam_summary_navigate");
  let R = um();
  let L = useAtomWithSubscription(_s);
  let P = useAtomWithSubscription(openFileTeamIdAtom);
  let D = useAtomWithSubscription(userIdAtom);
  let k = useAtomWithSubscription(openFileKeyAtom);
  let M = useAtomWithSubscription(_$$J);
  let F = {
    orgId: L,
    teamId: P || null,
    fileKey: k,
    userId: D || null,
    trackingSessionId: getTrackingSessionId(),
    fileSeq: M?.toString() || null
  };
  let j = useCallback(e => {
    let r = t.get(e);
    r?.isAlive && permissionScopeHandler.system("remove-cluster-placeholder", () => StickyClusteringCppBindings?.removePlaceholder(e));
    w.current && (clearInterval(w.current), w.current = void 0);
  }, [w, t]);
  return {
    clusterCanvasSelection: () => {
      if (!Fullscreen) return;
      let n = new PerfTimer(ClusterEventType.TIME_TAKEN_TO_COMPLETE, {});
      n.start();
      N(e => !e);
      let s = Fullscreen.getSelectionBounds();
      let {
        v,
        data,
        characterCount
      } = v.zi(t);
      let u = e.current + ".";
      let p = permissionScopeHandler.system("create-cluster-placeholder", () => {
        if (!StickyClusteringCppBindings) return;
        let e = StickyClusteringCppBindings.createPlaceholder(s);
        renameNode(e, u);
        return e;
      });
      p && (O(computeFullscreenViewportForNode({
        nodeId: p,
        alwaysPan: !1
      })), w.current = setInterval(() => {
        u.length === e.current.length + 3 ? u = e.current + "." : u += ".";
        permissionScopeHandler.system("update-cluster-placeholder-text", () => renameNode(p, u));
      }, 1e3), cortexAPI.figjam.cluster({
        v,
        data,
        tokenCount: characterCount / 4
      }, F).then(e => {
        let o = t.get(p);
        let d = o?.containingCanvas;
        if (!o?.isAlive || !d) return;
        let u = o?.absoluteRenderBounds;
        let _ = u ? A(u) : s;
        j(p);
        let [h, m] = permissionScopeHandler.user("create-and-place-clusters", () => StickyClusteringCppBindings ? StickyClusteringCppBindings.createAndPlaceClusters(e.clusters, _, d, !1) : [void 0, void 0]);
        Sprig("track", l0);
        N(!1);
        let g = n.stop();
        g && C(ClusterEventType.TIME_TAKEN_TO_COMPLETE, {
          elapsed_ms: g
        }, {
          forwardToDatadog: !0
        });
        C("ai_sticky_clusters_created", {
          request_id: e.requestUuid,
          nodes_clustered: data.map(e => e.id.split("|")).flat(),
          num_characters_input: characterCount,
          success: !0,
          output_section_node_ids: m,
          output_sticky_node_ids: h,
          failure_reason: ""
        });
      }).catch(e => {
        j(p);
        let t = E$(e, ez.CLUSTER);
        C("ai_sticky_clusters_created", {
          nodes_clustered: data.map(e => e.id.split("|")).flat(),
          num_characters_input: characterCount,
          success: !1,
          failure_reason: t.message
        });
        R(t.message, ez.CLUSTER);
      }));
    },
    requestIsPending: x
  };
}
export function $$N0(e, t = !1) {
  let r = useMemo(() => getSingletonSceneGraph(), []);
  let [o, l] = useState(!1);
  let d = useRef();
  let c = useNavigateToViewport("figjam_local_cluster_navigate");
  let u = useCallback(e => {
    let t = r.get(e);
    t?.isAlive && permissionScopeHandler.system("remove-cluster-placeholder", () => StickyClusteringCppBindings?.removePlaceholder(e));
    d.current && (clearInterval(d.current), d.current = void 0);
  }, [d, r]);
  return {
    cluster: () => {
      if (!Fullscreen) return;
      l(e => !e);
      let n = Fullscreen.getSelectionBounds();
      let s = e();
      let o = permissionScopeHandler.system("create-cluster-placeholder", () => {
        if (StickyClusteringCppBindings) return StickyClusteringCppBindings.createPlaceholder(n);
      });
      if (!o) return;
      c(computeFullscreenViewportForNode({
        nodeId: o,
        alwaysPan: !1
      }));
      let d = r.get(o);
      let p = d?.containingCanvas;
      if (!d?.isAlive || !p) return;
      let _ = d?.absoluteRenderBounds;
      let h = _ ? A(_) : n;
      u(o);
      permissionScopeHandler.system("create-and-place-clusters", () => StickyClusteringCppBindings?.createAndPlaceClusters(s, h, p, t));
      l(!1);
    },
    requestIsPending: o
  };
}
export const J = $$N0;
export const f = $$x1;