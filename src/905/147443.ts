import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { postUserFlag } from "../905/985254";
import { selectUserFlag } from "../905/940356";
import { ul } from "../905/114390";
export function $$c0() {
  let e = useSelector(e => e.tooltip?.target);
  let t = selectExperimentConfigHook("exp_help_on_hover");
  let i = !!getFeatureFlags().exp_help_on_hover_ff;
  let c = selectUserFlag("in_help_on_hover_exp_treatment");
  let u = selectUserFlag("disabled_help_on_hover_ui_hints");
  let p = useDispatch<AppDispatch>();
  return useCallback(() => {
    let n = i && ul(e) && !u && !0 === t.getConfig().getValue("in_treatment");
    n && !c && p(postUserFlag({
      in_help_on_hover_exp_treatment: !0
    }));
    return n;
  }, [p, i, t, u, c, e]);
}
export const z = $$c0;
