import { useRef, useEffect } from "react";
import { useStore } from "react-redux";
import { SceneGraphHelpers, ViewType } from "../figma_app/763686";
import { Ql } from "../figma_app/387100";
import { selectWithShallowEqual } from "../905/103090";
import { useCanAccessFullDevMode } from "../figma_app/473493";
import { hA } from "../figma_app/88239";
import { trackFileEvent } from "../figma_app/314264";
import { $A } from "../905/782918";
import { selectCurrentFile } from "../figma_app/516028";
let _ = null;
export function $$h1(e) {
  let t = selectCurrentFile();
  let {
    isTeamFile,
    topLevelMode,
    sceneGraph,
    selectedPageId,
    selectedNodeId,
    numberOfNodesSelected,
    topLevelNodeId,
    topLevelNodeType,
    urlNodeId,
    fileKey
  } = selectWithShallowEqual(e => {
    let r = Object.keys(e.mirror.sceneGraphSelection);
    let n = $A(e.selectedView) ? Ql(e.mirror.sceneGraph, r?.[0] ?? "") : null;
    return {
      isTeamFile: !!t?.teamId,
      topLevelMode: e.mirror.appModel.topLevelMode,
      sceneGraph: e.mirror.sceneGraph,
      selectedPageId: e.mirror.appModel.currentPage,
      selectedNodeId: r[r.length - 1],
      numberOfNodesSelected: r.length,
      urlNodeId: "fullscreen" === e.selectedView.view && e.selectedView.nodeId || void 0,
      fileKey: t?.key,
      topLevelNodeId: n?.guid,
      topLevelNodeType: n?.type
    };
  });
  let S = useCanAccessFullDevMode();
  let v = !!hA();
  let A = useStore();
  let x = useRef("");
  let N = useRef(0);
  let C = useRef(!0);
  useEffect(() => {
    if (topLevelMode === e.topLevelMode && (isTeamFile || !e.teamFilesOnly) && N.current < 300) {
      if (C.current) {
        C.current = !1;
        _ = null;
        return;
      }
      if (C.current = !1, !selectedNodeId) return;
      let t = sceneGraph.get(selectedNodeId);
      if (!t) {
        _ = null;
        return;
      }
      let r = t.guid;
      if (r === x.current) {
        _ = null;
        return;
      }
      let {
        componentKey = null
      } = t.symbolId ? sceneGraph.get(t.symbolId) ?? {} : {};
      x.current = r;
      N.current = N.current + 1;
      let i = SceneGraphHelpers?.getOverridePathForNode(r);
      let s = function (e) {
        for (let t = 0; t < 22; t++) {
          let r = e.parentNode;
          if (!r) return t;
          e = r;
        }
        return 22;
      }(t) - 2;
      let o = _ ?? "canvas";
      _ = null;
      let l = topLevelMode === ViewType.DEV_HANDOFF ? S : null;
      let d = {
        nodeId: r,
        nodeType: t.type,
        pageId: selectedPageId,
        topLevelNodeId,
        topLevelNodeType,
        sectionStatus: t.hasReadyStatus ? "ready_for_dev" : null,
        overridePath: i,
        nestingLevel: s,
        numberOfNodesSelected,
        source: o,
        hasSeatForDevMode: l,
        isDevModeFocusView: v,
        componentKey
      };
      trackFileEvent(e.eventName, fileKey, A.getState(), d);
    }
  }, [topLevelMode, urlNodeId, isTeamFile, sceneGraph, selectedPageId, selectedNodeId, numberOfNodesSelected, e.topLevelMode, e.eventName, e.teamFilesOnly, fileKey, A, topLevelNodeId, topLevelNodeType, S, v]);
}
export function $$m0(e) {
  _ = e;
}
export const S = $$m0;
export const z = $$h1;