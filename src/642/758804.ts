import { useCallback, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { trackEventAnalytics } from "../905/449184";
import { zq, We } from "../figma_app/782261";
import { q5 } from "../figma_app/516028";
import { D2 } from "../905/18797";
import { yW } from "../figma_app/644808";
import { yD } from "../905/92359";
import { k } from "../905/540025";
export function $$p1({
  allElements: e
}) {
  m(useCallback(() => {
    let t = e.length;
    let s = 0;
    let r = 0;
    for (let t of e) if (!t.key.includes("localComponents")) {
      let e = function e(t) {
        if (t.type === zq.TILE) return 1;
        if (!We(t) || !t.isExpanded) return 0;
        {
          let s = 0;
          for (let r of t.children) s += e(r);
          return s;
        }
      }(t);
      s += e;
      r += Math.min(e, 20);
    }
    return {
      numLibraries: t,
      numComponents: s,
      numComponentsWithLimit: r
    };
  }, [e]));
}
export function $$h0(e) {
  m(useCallback(() => {
    let t = 0;
    let s = 0;
    let r = 0;
    let {
      allLibrariesUnsorted
    } = e;
    for (let [i, l] of allLibrariesUnsorted) if (l.type === yW.DESIGN) {
      if (e.localAssets.libraryKey === i) {
        l.numComponents >= 0 && (t += 1);
        continue;
      }
      t += 1;
      s += l.numComponents;
      r += Math.min(l.numComponents, 20);
    }
    return {
      numLibraries: t,
      numComponents: s,
      numComponentsWithLimit: r
    };
  }, [e]));
}
function m(e) {
  let t = useSelector(e => e.loadingState);
  let s = useSelector(e => e.fileVersion);
  let l = q5();
  let d = k();
  let p = l && null != s && yD(l.key) || null;
  let h = !(null != p && D2(t, p));
  useEffect(() => {
    h || function (e, t, s) {
      if (g) return;
      let {
        numLibraries,
        numComponents,
        numComponentsWithLimit
      } = e();
      trackEventAnalytics("Assets Panel Initial Load", {
        numLibraries,
        numComponents,
        numComponentsWithLimit,
        assetsPanelVersion: t,
        fileKey: s?.key,
        fileTeamId: s?.teamId ?? void 0,
        fileOrgId: s?.parentOrgId ?? void 0
      });
      g = !0;
    }(e, d, l);
  }, [e, h, l, d]);
}
let g = !1;
export const A = $$h0;
export const d = $$p1;