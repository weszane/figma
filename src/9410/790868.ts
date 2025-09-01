import { useCallback } from "react";
import { wA, d4 } from "../vendor/514228";
import { glU, xal } from "../figma_app/763686";
import { UN } from "../905/700578";
import { fp, Xr } from "../figma_app/27355";
import { am } from "../figma_app/901889";
import { YQ } from "../905/502364";
import { Yh } from "../figma_app/888478";
import { J } from "../905/445197";
import { dh, rE, zO, CQ, $P } from "../figma_app/186343";
import { Fy } from "../figma_app/623300";
import { q5 } from "../figma_app/516028";
import { W, d as _$$d } from "../figma_app/833988";
import { l7, oZ } from "../figma_app/932601";
export function $$_0(e) {
  let t = dh();
  let [i, _] = fp(l7);
  let [x, y] = fp(oZ);
  let b = q5();
  let C = wA();
  let v = rE();
  let E = d4(e => e.versionHistory);
  let T = am();
  let w = W();
  let S = Xr(Yh);
  let j = useCallback(e => {
    _(e);
    glU.triggerActionInUserEditScope("track-page-rename", {
      args: {
        nodeId: e
      }
    });
  }, [_]);
  let I = useCallback(() => _(null), [_]);
  let k = useCallback(async () => {
    if (!i) return;
    let r = UN().get(i);
    let n = r?.name;
    let o = x || "";
    let l = await zO({
      openFile: b,
      pageNode: r,
      pageName: o
    });
    if (CQ({
      openFile: b,
      pageId: i,
      newName: o,
      oldName: n,
      trackRenamePage: () => T("page_commit_rename", {
        nodeId: t,
        isDivider: l
      }, {
        forwardToDatadog: !0
      })
    }), l && t === i) {
      let i = e.findIndex(e => e.nodeId === t);
      let r = i + 1;
      let n = e[r];
      for (; n && n.isDivider;) {
        r += 1;
        n = e[r];
      }
      if (n) J(() => $P(n.nodeId, t, E, C, Fy(e, n.nodeId) === xal.LOADED, T));else {
        let r = i - 1;
        let n = e[r];
        for (; n && n.isDivider;) {
          r -= 1;
          n = e[r];
        }
        n ? J(() => $P(n.nodeId, t, E, C, Fy(e, n.nodeId) === xal.LOADED, T)) : v(null);
      }
    }
    _(e => e === i ? null : e);
    w({
      newTitle: o,
      nodeType: "PAGE"
    });
    n !== o && _$$d(o).length > 0 && (S(i), YQ({
      id: "page_name_changed_with_rfd_indicator",
      properties: {
        pageId: i
      }
    }));
  }, [e, v, i, _, x, b, t, E, T, C, w, S]);
  return {
    renamingPageId: i,
    startRenaming: j,
    cancelRenaming: I,
    commitRenaming: k,
    pendingPageName: x,
    setPendingPageName: y
  };
}
export const c = $$_0;