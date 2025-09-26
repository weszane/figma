import { useRef, useContext } from "react";
import { logger } from "../905/651849";
import { Xx } from "../figma_app/243213";
import { useSingleEffect } from "../905/791079";
import { trackEventAnalytics } from "../905/449184";
import { wu, xd } from "../905/729783";
import { InteractivityContext } from "../905/896141";
export function $$c4(e) {
  return useRef(e).current;
}
export function $$u5(e) {
  let t = useContext(InteractivityContext);
  let i = t.error ? t.error : t.trackablePath[t.trackablePath.length - 1] ? t.interactable ? "<Interactable /> cannot be nested inside another <Interactable />" : void 0 : "<Interactable /> must be nested inside a <Trackable />";
  useSingleEffect(() => {
    i && !t.error && logger.error(i);
  });
  return $$c4({
    ...t,
    interactable: e,
    error: i
  });
}
export function $$p1({
  componentName: e,
  name: t,
  alsoTrackedProperties: i,
  error: n
}) {
  let r = [];
  if (r.push(`<${e} />`), r.push(""), r.push(`name: ${t}`), n && (r.push(""), r.push(`Error: ${n}`), r.push("")), Object.entries(i).length > 0) for (let [e, t] of (r.push(""), r.push("alsoTracked:"), Object.entries(i))) r.push(`- ${e}: ${t}`);
  return r.join("\n");
}
export function $$m6(e) {
  let t = useContext(InteractivityContext);
  let i = t.error ? t.error : t.interactable ? "<Trackable /> cannot be nested inside an <Interactable />" : void 0;
  useSingleEffect(() => {
    i && !t.error && logger.error(i);
  });
  return $$c4({
    trackablePath: [...t.trackablePath, e],
    interactable: void 0,
    error: i
  });
}
export function $$h0(e, t) {
  let i = {};
  for (let t of e) {
    let e = t.alsoTrackRef?.current;
    e && (i = {
      ...i,
      ...e()
    });
  }
  if (t) {
    let e = t.alsoTrackRef?.current;
    e && (i = {
      ...i,
      ...e()
    });
  }
  return i;
}
export function $$g3(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let i = e[t];
    if (void 0 !== i.trackingEnabled) return i.trackingEnabled;
  }
  return !0;
}
export function $$f7(e, t, i) {
  useSingleEffect(() => {
    $$g3(e) && i && function (e, t) {
      let i = {
        ...e,
        ...t
      };
      wu.trigger(xd, i);
      trackEventAnalytics(xd, i);
    }({
      trackablePath: e.map(e => e.name)
    }, t());
  });
}
export function $$_2(e) {
  return {
    interactableTagName: e instanceof Element ? e.tagName : "EVENT_TARGET",
    interactableRole: e instanceof HTMLElement && e.getAttribute("role") || "",
    interactableIsFocusable: e instanceof HTMLElement && Xx(e)
  };
}
export const ET = $$h0;
export const R8 = $$p1;
export const Pu = $$_2;
export const VC = $$g3;
export const MF = $$c4;
export const ps = $$u5;
export const U2 = $$m6;
export const fK = $$f7;