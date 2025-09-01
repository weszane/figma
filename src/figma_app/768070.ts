import { Ay } from "../905/612521";
import { parseQuery } from "../905/634134";
let a = new URL(window.location.href);
let s = (a.searchParams.get("mode") || "interaction").toLowerCase().split(",");
s.find(e => e.includes("interaction"));
let o = !!s.find(e => e.includes("perf-bench") || "perf" === e);
let l = !!s.find(e => e.includes("perf-regression") || "perf" === e);
a.hostname;
(function () {
  let e = a.searchParams.get("playback");
  switch (e) {
    case null:
      return;
    case "sync":
    case "async":
    case "realtime":
      return;
    default:
      throw Error(`Unknown playback mode ${e}. Options are "sync", "async", and "realtime".`);
  }
})();
let d = parseQuery(window.location.search);
let $$c0 = d["additional-ffs"] || null;
d.playwright;
d.only;
d.skip;
d.testGroupFilter;
d.onlyPrintSpecs;
d.onlyPrintGroups;
d.secondary;
d.popout;
parseInt(d.repeat ?? "1");
d.logFigmentRequests;
export let $$u1 = "1" === d.rolloutFlags;
d.stopOnSpecFailure;
d.reportV2;
d.updateScreenshots;
d.bisectDecisions;
d.asan;
let p = parseQuery(Ay.location.hash);
let _ = d.initialOptions || p.initialOptions;
_ && JSON.parse(decodeURIComponent(_));
(() => {
  let e = d["additional-ffs"];
  if (!e) return;
  let t = {};
  e.split(",").forEach(e => {
    if (!e) return;
    let [r, n] = e.split("=");
    t[r] = !n || n.startsWith("t");
  });
})();
(o || l) && d.noShowPerfReport;
(d.test_categories || "").split(",").filter(e => e.length > 0);
export const Ns = $$c0;
export const zn = $$u1;