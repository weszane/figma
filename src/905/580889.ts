import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { trackEventAnalytics } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { PerfTimer } from "../905/609396";
import { fi } from "../figma_app/913823";
import { selectCurrentFile } from "../figma_app/516028";
import { createTrackedAtom } from "../figma_app/615482";
import { VP } from "../905/18797";
let m = "performance.ds_eco.instance_swap_picker_loading";
let h = new PerfTimer(m, {});
let g = createTrackedAtom(!1);
export function $$f0(e) {
  let t = selectCurrentFile();
  let i = useSelector(e => e.loadingState);
  let [l, u] = useAtomValueAndSetter(g);
  let f = e || VP(i, fi);
  _$$h(() => {
    if (!l) {
      h.start();
      return () => {
        h.stop();
        u(!0);
      };
    }
  });
  useEffect(() => {
    if (!f && !l) {
      u(!0);
      let e = h.stop();
      trackEventAnalytics(m, {
        elapsedMs: e,
        fileKey: t?.key,
        teamId: t?.teamId,
        orgId: t?.parentOrgId,
        dse_instance_swap_perf: !0
      }, {
        forwardToDatadog: !0
      });
    }
  }, [f, l, t, u]);
}
export const x = $$f0;