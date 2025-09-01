import { Z } from "../905/616700";
import { E3, eU } from "../figma_app/27355";
import { A } from "../905/920142";
let s = [{
  minVersion: "124.7.0",
  date: "2025-05-21"
}, {
  minVersion: "125.1.0",
  date: "2025-08-13"
}, {
  minVersion: "125.2.0",
  date: "2025-08-28"
}, {
  minVersion: "125.3.0",
  date: "2025-09-20"
}, {
  minVersion: "125.4.0",
  date: "2025-10-22"
}, {
  minVersion: "125.5.0",
  date: "2025-11-06"
}, {
  minVersion: "125.6.0",
  date: "2026-01-01"
}, {
  minVersion: "125.7.0",
  date: "2026-01-24"
}];
export var $$o0 = (e => (e.SUPPORTED = "SUPPORTED", e.DEPRECATED = "DEPRECATED", e.DISABLED = "DISABLED", e))($$o0 || {});
export function $$l2(e, t = A(), r = s) {
  if (window.__figmaContent) return {
    status: "DISABLED"
  };
  if (null == e) return {
    status: "SUPPORTED"
  };
  if (!window.trustedTypes) return {
    status: "DISABLED"
  };
  if (1 !== Z(e, "10.100.0") && 1 === Z(e, "10.101.0")) return {
    status: "SUPPORTED"
  };
  for (let {
    minVersion,
    date
  } of r) {
    if (1 !== Z(e, minVersion)) continue;
    let r = A(date);
    if (r.isBefore(t)) return {
      status: "DISABLED"
    };
    if (r.subtract(2, "month").isBefore(t)) return {
      status: "DEPRECATED",
      date: r
    };
  }
  return {
    status: "SUPPORTED"
  };
}
let d = E3("last_dismissed_desktop_deprecation_banner", "", {
  subscribeToChanges: !0
});
let $$c1 = eU(e => {
  let t = e(d);
  if (t) {
    let e = A(t);
    let r = A().subtract(1, "week");
    if (e.isAfter(r)) return !0;
  }
  return !1;
}, (e, t, r) => {
  t(d, r ? A().toISOString() : "");
});
export const JN = $$o0;
export const Pi = $$c1;
export const x5 = $$l2;