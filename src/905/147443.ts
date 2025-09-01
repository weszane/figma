import { useCallback } from "react";
import { d4, wA } from "../vendor/514228";
import { getFeatureFlags } from "../905/601108";
import { I7 } from "../figma_app/594947";
import { b } from "../905/985254";
import { f } from "../905/940356";
import { ul } from "../905/114390";
export function $$c0() {
  let e = d4(e => e.tooltip?.target);
  let t = I7("exp_help_on_hover");
  let i = !!getFeatureFlags().exp_help_on_hover_ff;
  let c = f("in_help_on_hover_exp_treatment");
  let u = f("disabled_help_on_hover_ui_hints");
  let p = wA();
  return useCallback(() => {
    let n = i && ul(e) && !u && !0 === t.getConfig().getValue("in_treatment");
    n && !c && p(b({
      in_help_on_hover_exp_treatment: !0
    }));
    return n;
  }, [p, i, t, u, c, e]);
}
export const z = $$c0;