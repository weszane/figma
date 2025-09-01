import { V } from "../vendor/359881";
export function $$s1() {
  let e = h();
  if (e) return {
    getCapabilities() {
      var r;
      return JSON.parse(e.getCapabilities?.call(e) || "[]");
    },
    getPrivacyLevel() {
      var r;
      return e.getPrivacyLevel?.call(e);
    },
    getAllowedWebViewHosts: () => JSON.parse(e.getAllowedWebViewHosts()),
    send(r, n, i) {
      let s = i ? {
        id: i
      } : void 0;
      e.send(JSON.stringify({
        eventType: r,
        event: n,
        view: s
      }));
    }
  };
}
export function $$o0(e) {
  let r = $$s1();
  return !!r && r.getCapabilities().includes(e);
}
export function $$a2(e) {
  var r;
  void 0 === e && (e = V().location?.hostname);
  let n = $$s1();
  return !!n && n.getAllowedWebViewHosts().some(r => e === r || e.endsWith(`.${r}`));
}
function h() {
  return V().DatadogEventBridge;
}
export const Ww = $$o0;
export const Y9 = $$s1;
export const d0 = $$a2;