import { v } from "../905/883621";
import { getInitialOptions } from "../figma_app/169182";
import { kF } from "../905/11";
export function $$s0(e) {
  window.self.origin === window.parent.origin && window.parent.postMessage(e, window.self.origin);
}
export function $$o1() {
  getInitialOptions().integration_host && window.self !== window.top && (v({
    integration_host: getInitialOptions().integration_host,
    integration_context: getInitialOptions().integration_context ?? null
  }), kF("integration_host", getInitialOptions().integration_host), $$s0({
    action: "ready"
  }));
}
export const m = $$s0;
export const z = $$o1;