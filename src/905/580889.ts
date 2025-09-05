import { useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { fp } from "../figma_app/27355";
import { sx } from "../905/449184";
import { h as _$$h } from "../905/207101";
import { jk } from "../905/609396";
import { fi } from "../figma_app/913823";
import { q5 } from "../figma_app/516028";
import { rt } from "../figma_app/615482";
import { VP } from "../905/18797";
let m = "performance.ds_eco.instance_swap_picker_loading";
let h = new jk(m, {});
let g = rt(!1);
export function $$f0(e) {
  let t = q5();
  let i = useSelector(e => e.loadingState);
  let [l, u] = fp(g);
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
      sx(m, {
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