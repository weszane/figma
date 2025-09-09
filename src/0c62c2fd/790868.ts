import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fullscreen, DataLoadStatus } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { useAtomValueAndSetter, Xr } from "../figma_app/27355";
import { am } from "../figma_app/901889";
import { YQ } from "../905/502364";
import { Yh } from "../figma_app/888478";
import { J } from "../905/445197";
import { dh, rE, zO, CQ, $P } from "../figma_app/186343";
import { Fy } from "../figma_app/623300";
import { q5 } from "../figma_app/516028";
import { W, d as _$$d } from "../figma_app/833988";
import { l7, oZ } from "../figma_app/932601";
export function $$h0(e) {
  let t = dh();
  let [r, h] = useAtomValueAndSetter(l7);
  let [x, b] = useAtomValueAndSetter(oZ);
  let v = q5();
  let y = useDispatch();
  let w = rE();
  let j = useSelector(e => e.versionHistory);
  let T = am();
  let E = W();
  let I = Xr(Yh);
  let N = useCallback(e => {
    h(e);
    Fullscreen.triggerActionInUserEditScope("track-page-rename", {
      args: {
        nodeId: e
      }
    });
  }, [h]);
  let C = useCallback(() => h(null), [h]);
  let S = useCallback(async () => {
    if (!r) return;
    let a = getSingletonSceneGraph().get(r);
    let s = a?.name;
    let o = x || "";
    let l = await zO({
      openFile: v,
      pageNode: a,
      pageName: o
    });
    if (CQ({
      openFile: v,
      pageId: r,
      newName: o,
      oldName: s,
      trackRenamePage: () => T("page_commit_rename", {
        nodeId: t,
        isDivider: l
      }, {
        forwardToDatadog: !0
      })
    }), l && t === r) {
      let r = e.findIndex(e => e.nodeId === t);
      let a = r + 1;
      let s = e[a];
      for (; s && s.isDivider;) {
        a += 1;
        s = e[a];
      }
      if (s) J(() => $P(s.nodeId, t, j, y, Fy(e, s.nodeId) === DataLoadStatus.LOADED, T)); else {
        let a = r - 1;
        let s = e[a];
        for (; s && s.isDivider;) {
          a -= 1;
          s = e[a];
        }
        s ? J(() => $P(s.nodeId, t, j, y, Fy(e, s.nodeId) === DataLoadStatus.LOADED, T)) : w(null);
      }
    }
    h(e => e === r ? null : e);
    E({
      newTitle: o,
      nodeType: "PAGE"
    });
    s !== o && _$$d(o).length > 0 && (I(r), YQ({
      id: "page_name_changed_with_rfd_indicator",
      properties: {
        pageId: r
      }
    }));
  }, [e, w, r, h, x, v, t, j, T, y, E, I]);
  return {
    renamingPageId: r,
    startRenaming: N,
    cancelRenaming: C,
    commitRenaming: S,
    pendingPageName: x,
    setPendingPageName: b
  };
}
export const c = $$h0;
