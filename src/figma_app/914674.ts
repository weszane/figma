import { useCallback, useEffect } from "react";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { PerfTimer } from "../905/609396";
import { zq, We } from "../figma_app/782261";
import { selectCurrentFile } from "../figma_app/516028";
import { createTrackedAtom } from "../figma_app/615482";
import { D } from "../905/367723";
let $$u2 = "performance.ds_eco.asset_panel_loading";
let $$p3 = new PerfTimer($$u2, {});
let _ = createTrackedAtom(!1);
let $$h0 = createTrackedAtom(!1);
export function $$m4() {
  let [e, t] = useAtomValueAndSetter(_);
  return useCallback(() => {
    e || (t(!0), $$p3.start());
  }, [e, t]);
}
let g = (e, t) => {
  let r = selectCurrentFile();
  let s = D();
  let [d, _] = useAtomValueAndSetter($$h0);
  useEffect(() => {
    if (!s && !d && t) {
      _(!0);
      let t = $$p3.stop();
      t && trackEventAnalytics($$u2, {
        elapsedMs: t,
        fileKey: r?.key,
        teamId: r?.teamId,
        orgId: r?.parentOrgId,
        isUi3RedesignedAssetPanel: !1,
        numLibraries: e.allElementsTree.allElements.length,
        numComponents: f(e.allElementsTree.allElements),
        numComponentsShown: e.elementsInView.filter(e => e.type === zq.TILE).length,
        numSectionsShown: e.elementsInView.filter(e => e.type === zq.ROW).length
      }, {
        forwardToDatadog: !0
      });
    }
  }, [e.isDirty, e.elementsInView, e.allElementsTree, s, d, r, _, t]);
};
let f = e => {
  let t = 0;
  e.forEach(e => {
    e.type === zq.TILE ? t += 1 : e.type === zq.ROW && We(e) && (t += f(e.children));
  });
  return t;
};
export function $$E1({
  elementsCache: e,
  hasRenderedItems: t
}) {
  g(e, t);
  return null;
}
export const GT = $$h0;
export const KO = $$E1;
export const YS = $$u2;
export const _o = $$p3;
export const lV = $$m4;