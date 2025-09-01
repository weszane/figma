import { Ay } from "../905/612521";
import { l as _$$l } from "../1250/511088";
import { q5 } from "../figma_app/516028";
import { QV } from "../1250/958770";
export function $$s0() {
  let e = q5();
  return async function (t) {
    let [n, i] = e?.plan?.id?.split("::") ?? [];
    if (!n || !i) {
      console.error("Failed to read plan type or plan id", {
        planType: n,
        planId: i
      });
      return;
    }
    let s = await _$$l();
    let l = await QV.startGithubAppSetup({
      plan_type: n,
      plan_parent_id: i,
      request_context: "component_browser",
      request_context_id: Ay.location.pathname
    });
    if (200 === l.status) {
      let e = l.data.meta.exchange_token ? `?state=${l.data.meta.exchange_token}` : "";
      t?.();
      window.location.href = `${s.installation}${e}`;
    } else console.error("Failed to start github app setup", l);
  };
}
export const e = $$s0;