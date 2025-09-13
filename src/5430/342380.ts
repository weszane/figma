import { useRef, useCallback, useMemo, useEffect } from "react";
import { debounce } from "../905/915765";
import { trackEventAnalytics } from "../905/449184";
import { o_, Qd, Vm } from "../figma_app/427318";
import { useTracking } from "../figma_app/831799";
import { e0 } from "../905/696396";
if (443 == require.j) {}
let c = e => {
  let t;
  t = o_(e) ? Qd(e) : Vm(e);
  return `${e.id}---${t}`;
};
let d = e => {
  let [t, r] = e.split("---");
  return {
    id: t,
    type: r
  };
};
var u = (e => (e.RESOURCE = "resource", e.TEMPLATE = "template", e.PLUGIN = "plugin", e))(u || {});
export function $$m1({
  debounceWaitInMs: e,
  extraProperties: t
} = {}) {
  return h({
    idType: "resource",
    debounceWaitInMs: e,
    extraProperties: t
  });
}
export function $$_2({
  debounceWaitInMs: e,
  extraProperties: t
} = {}) {
  return h({
    idType: "template",
    debounceWaitInMs: e,
    extraProperties: t
  });
}
export function $$p0({
  debounceWaitInMs: e,
  extraProperties: t
} = {}) {
  return h({
    idType: "plugin",
    debounceWaitInMs: e,
    extraProperties: t
  });
}
function h({
  debounceWaitInMs: e = 1e3,
  extraProperties: t = {},
  idType: r
}) {
  let {
    name = e0.COMMUNITY_HUB,
    properties
  } = useTracking();
  let m = useRef([]);
  let _ = useRef(new Set());
  let p = useCallback(e => {
    if (0 === m.current.length) return;
    let s = [];
    let i = [];
    m.current.forEach(e => {
      let {
        id,
        type
      } = d(e);
      s.push(id);
      i.push(type);
    });
    trackEventAnalytics("community_impressed_resources", {
      impressedItems: s.join(),
      impressedItemTypes: i.join(),
      idType: r,
      trackingContext: name,
      ...properties,
      ...t
    }, {
      sendAsBeacon: e
    });
    m.current = [];
  }, [t, r, name, properties]);
  let h = useMemo(() => debounce(p, e), [e, p]);
  useEffect(() => h.flush, [h]);
  useEffect(() => {
    let e = () => {
      "hidden" === document.visibilityState && p(!0);
    };
    document.addEventListener("visibilitychange", e);
    return () => {
      document.removeEventListener("visibilitychange", e);
    };
  }, [p]);
  return {
    trackResourceImpression: useCallback(e => {
      let t = c(e);
      _.current.has(t) || (_.current.add(t), m.current.push(t), h());
    }, [h]),
    flushAndResetResourceImpressions: useCallback(() => {
      h.flush();
      _.current.clear();
    }, [h])
  };
}
export const FD = $$p0;
export const GS = $$m1;
export const r4 = $$_2;