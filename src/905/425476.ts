import { az } from "../905/449184";
let r = ["heartbeat"];
export function $$a0() {
  let e = new Set();
  return t => {
    if (r.includes(t)) {
      if (e.has(t)) return;
      e.add(t);
    }
    az.trackDefinedMetric("sites.preview_message_timeout", {
      messageName: t
    });
  };
}
export const D = $$a0;