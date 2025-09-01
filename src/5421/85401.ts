import { isNullish, isNotNullish } from "../figma_app/95419";
import { glU } from "../figma_app/763686";
import { sH } from "../905/871411";
import { cn } from "../figma_app/85384";
var $$o0;
function s(e) {
  return e ? e.filter(e => "NONE" !== e.connectionType && "URL" !== e.connectionType && !("INTERNAL_NODE" === e.connectionType && "NAVIGATE" === e.navigationType) && !cn(e) && !e.linkParam) : [];
}
export function $$d3(e) {
  let t = $$o0.getClickInteraction(e.prototypeInteractions);
  if (!t) return;
  let n = s(t.actions);
  if (0 === n.length) e.prototypeInteractions = $$u5(e.prototypeInteractions);else {
    t.actions = n;
    let o = $$u5(e.prototypeInteractions);
    e.prototypeInteractions = o.concat(t);
  }
}
export function $$c6(e, t) {
  let n;
  if (!$$p1(e)) return;
  let l = $$o0.getClickInteraction(e.prototypeInteractions);
  let d = $$o0.getMatchingAction(l);
  let c = d?.openUrlInNewTab;
  if (t?.connectionType === "URL" && d?.connectionType === "URL" && isNullish(t.openUrlInNewTab) && isNotNullish(c) && (t.openUrlInNewTab = c), l) {
    let e = s(l.actions);
    l.actions = e.concat(t ? [t] : []);
    n = l;
  } else n = function ({
    id: e,
    action: t
  }) {
    let n = e ?? null;
    if (!e) {
      let e = glU.generateUniqueID();
      if (!e) throw Error("Failed to generate a unique id");
      n = sH(e);
    }
    if (!n) throw Error("No interaction ID");
    return {
      id: n,
      event: {
        interactionType: "ON_CLICK"
      },
      stateManagementVersion: 1,
      actions: [t]
    };
  }({
    action: t
  });
  let h = $$u5(e.prototypeInteractions);
  e.prototypeInteractions = h.concat(n);
}
export function $$p1(e) {
  return !!(e && !(e.isResponsiveSet || e.isBreakpointFrame || e.isStateGroup || e.isSection || e.isHTMLWidget));
}
export function $$u5(e) {
  return e.filter(e => e.event?.interactionType !== "ON_CLICK");
}
export function $$h4(e) {
  return e.filter(e => !e.actions?.find(e => "NONE" === e.connectionType));
}
(e => {
  e.getClickInteraction = function (e) {
    return e.find(e => e.event?.interactionType === "ON_CLICK") ?? null;
  };
  e.getMatchingAction = function (e) {
    return e?.actions?.find(e => "URL" === e.connectionType || "NAVIGATE" === e.navigationType || cn(e)) ?? null;
  };
})($$o0 || ($$o0 = {}));
export let $$m2 = "sites-link-panel";
export const Nw = $$o0;
export const RZ = $$p1;
export const Tl = $$m2;
export const Ve = $$d3;
export const eF = $$h4;
export const l4 = $$u5;
export const qe = $$c6;