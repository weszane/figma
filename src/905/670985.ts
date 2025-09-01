import { F } from "../vendor/29523";
import { getFeatureFlags } from "../905/601108";
import { getInitialOptions } from "../figma_app/169182";
import { J6 } from "../905/602906";
import { $ } from "../905/361972";
let l = getInitialOptions().frontend_sentry_dsn && getFeatureFlags().frontend_sentry_wasm_integration;
export function $$d3() {
  let e = [];
  l && e.push(F());
  return e;
}
export function $$c1(e, t, i) {
  window.performance.mark && window.performance.measure && (window.performance.mark(`${e}.startSpan`, {
    startTime: i
  }), J6.startVital(e, {
    level: $.INFO,
    context: {
      team: t
    }
  }));
}
export function $$u0(e, t) {
  if (window.performance.mark && window.performance.measure) {
    window.performance.mark(`${e}.endSpan`, {
      startTime: t
    });
    try {
      window.performance.measure(e, `${e}.startSpan`, `${e}.endSpan`);
      window.performance.clearMarks(`${e}.startSpan`);
      window.performance.clearMarks(`${e}.endSpan`);
    } catch (e) {}
    J6.stopVital(e, {
      level: $.INFO
    });
  }
}
export function $$p4(e, t, i, n = !0) {
  n && $$c1(e, t);
  let r = window.performance.now();
  i();
  n && $$u0(e);
  return window.performance.now() - r;
}
export async function $$m2(e, t, i) {
  $$c1(e, t);
  let n = window.performance.now();
  let r = i();
  try {
    await r;
  } finally {
    $$u0(e);
  }
  return {
    result: r,
    duration: window.performance.now() - n
  };
}
export const Dz = $$u0;
export const Lk = $$c1;
export const ZO = $$m2;
export const kk = $$d3;
export const vo = $$p4;