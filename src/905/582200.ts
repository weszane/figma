import { jsx } from "react/jsx-runtime";
import { F } from "../905/680873";
import { o3, nt } from "../905/226610";
import { U2, MF, ET, fK, R8 } from "../905/939257";
import { f as _$$f } from "../905/896141";
import { C } from "../905/213457";
export function $$d0({
  name: e,
  trackingEnabled: t,
  trackImpressions: i = !0,
  alsoTrack: d,
  children: c
}) {
  let u = F(d);
  let p = U2({
    name: e,
    trackingEnabled: t,
    alsoTrackRef: u
  });
  let {
    trackablePath,
    error
  } = p;
  let g = MF(() => ET(trackablePath));
  fK(trackablePath, g, i);
  let f = o3(nt.trackableDebug);
  let _ = MF(() => R8({
    componentName: "Trackable",
    name: e,
    error,
    alsoTrackedProperties: g()
  }));
  c = C({
    children: c,
    isDebugMode: f,
    name: e,
    color: error ? "red" : "green",
    depth: trackablePath.length,
    getTooltipText: _
  });
  return jsx(_$$f.Provider, {
    value: p,
    children: c
  });
}
export const k = $$d0;