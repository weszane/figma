import { NUh } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { x1 } from "../905/714362";
import { vn } from "../3973/348894";
export function $$o0(e, t) {
  !getFeatureFlags().numeric_id_sentry_monitoring || !e || !window.scheduler || getFeatureFlags().numeric_id_sentry_sample && Math.random() > .05 || scheduler.postTask(() => {
    let i = vn(t.pathname);
    let r = `${t.verb} ${i}`;
    let o = [];
    JSON.parse(JSON.stringify(e), (e, t) => (("id" === e || e.endsWith("_id") || e.endsWith("_id_or_key")) && "number" == typeof t ? o.push([e, t]) : "_ids" === e.slice(-4) && Array.isArray(t) && t.some(e => "number" == typeof e) && o.push([e, t]), t));
    o.length && x1("alertOnNumericIds", "numeric ids found in payload", {
      context: r,
      obj: e,
      foundPairs: o
    }, {
      logToConsole: NUh.ALWAYS,
      reportAsSentryError: !0
    });
  }, {
    priority: "background"
  });
}
export const h = $$o0;