import { useRef, useCallback, useEffect } from "react";
import { useAtomWithSubscription } from "../figma_app/27355";
import { useMemoShallow } from "../905/19536";
import { az } from "../905/502364";
import { R } from "../905/994802";
export function $$l0(e, t, i) {
  let l = useAtomWithSubscription(az);
  let d = useMemoShallow(() => "string" == typeof t ? [t] : t, [t]);
  let c = useRef(i);
  c.current = i;
  let u = useCallback(t => {
    let i = "properties" in t ? t.properties : void 0;
    R({
      type: "triggered",
      name: "event_forwarded",
      properties: {
        overlayId: e,
        eventId: t.id,
        eventProperties: i
      }
    }, "debug");
    c.current(t);
  }, [e]);
  useEffect(() => {
    for (let t of d) {
      R({
        type: "triggered",
        name: "event_listener_registered",
        properties: {
          overlayId: e,
          eventId: t
        }
      }, "trace");
      l.addEventListener(t, u);
    }
    return () => {
      for (let t of d) {
        R({
          type: "triggered",
          name: "event_listener_deregistered",
          properties: {
            overlayId: e,
            eventId: t
          }
        }, "trace");
        l.removeEventListener(t, u);
      }
    };
  }, [e, d, l, u]);
}
export const E = $$l0;