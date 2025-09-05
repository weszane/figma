import { useEffect, useCallback } from "react";
import { eU, fp, Xr, md } from "../figma_app/27355";
import { N } from "../905/972754";
import { ku, Os, qA, fn } from "../figma_app/255679";
import { useDispatch, useSelector } from "../vendor/514228";
import { l as _$$l } from "../905/716947";
import { ZC } from "../figma_app/39751";
import { uo, yH } from "../905/879323";
import { n1 } from "../figma_app/657017";
import { SS, Qp } from "../figma_app/349248";
import { Yu, PW } from "../figma_app/633080";
import { qq } from "../905/72677";
let g = eU(e => {
  let t = e(qq);
  return ku(Os, [...t].sort().map(e => ({
    hubFileId: e
  })), e);
});
export function $$f0() {
  let [e, t] = fp(qA);
  let i = Xr(fn);
  !function () {
    let e = useDispatch();
    let {
      components,
      stateGroups
    } = useSelector(e => e.library.publishedByLibraryKey);
    let a = md(g);
    let s = ZC(a);
    let h = n1();
    useEffect(() => {
      if (h && s !== a && a.data) for (let n of a.data) {
        if ("loaded" !== n.result.status) continue;
        let r = n.result.data.file;
        if (!r) continue;
        let a = r.hubFileId;
        let s = _$$l(r.libraryKey);
        let o = components?.[Yu]?.[s];
        let d = stateGroups?.[Yu]?.[s];
        let u = r.stateGroups.map(e => SS(e, {
          type: "hubFile",
          file: {
            id: r.hubFileId,
            libraryKey: r.libraryKey
          }
        }));
        let h = r.components.map(e => Qp(e, {
          type: "hubFile",
          file: {
            id: r.hubFileId,
            libraryKey: r.libraryKey
          }
        }));
        let g = h.map(e => e.component_key);
        let f = u.map(e => e.key);
        let _ = o ? Object.values(o).filter(e => !g.includes(e.component_key)) : [];
        let A = d ? Object.values(d).filter(e => !f.includes(e.key)) : [];
        e(uo({
          items: u,
          type: PW.STATE_GROUP
        }));
        e(uo({
          items: h,
          type: PW.COMPONENT
        }));
        e(yH({
          nodeIds: _.map(e => e.node_id),
          file: {
            key: a,
            library_key: s
          },
          type: PW.COMPONENT
        }));
        e(yH({
          nodeIds: A.map(e => e.node_id),
          file: {
            key: a,
            library_key: s
          },
          type: PW.STATE_GROUP
        }));
      }
    }, [e, s, a, components, stateGroups, h]);
  }();
  return useCallback(({
    updateSource: n
  }) => {
    i(e);
    t({
      updateSource: n,
      value: N()
    });
  }, [t, i, e]);
}
export const R = $$f0;