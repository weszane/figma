import { useState, useRef, useCallback, useEffect } from "react";
import r from "../vendor/128080";
import { trackEventAnalytics } from "../905/449184";
import { globalPerfTimer } from "../905/542194";
import { sendBatchedHistograms, sendMetric, sendHistogram } from "../905/485103";
var a = r;
let d = {
  PENDING_COMMENT: "comments.web.pending_comment",
  PENDING_FROM_LG_COMMENT: "comments.web.pending_from_lg_comment",
  PENDING_COMMENT_SLOW: "comments.web.pending_comment.slow"
};
export function $$c0(e) {
  let [t, i] = useState(new Set());
  let [r, c] = useState(new Set());
  let u = useRef(new Map());
  let p = useRef(new Map());
  let m = useRef(new Map());
  let h = useCallback(() => {
    sendBatchedHistograms(Array.from(u.current).map(([e, t]) => {
      let i = performance.now() - t.startTime;
      return {
        metric: d.PENDING_COMMENT,
        value: i / 1e3,
        tags: {
          pending_comment_aborted: "true",
          backgrounded: t.backgrounded ? "true" : "false"
        }
      };
    }));
  }, []);
  let g = useCallback(() => {
    u.current && u.current.forEach(e => {
      e.backgrounded = !0;
    });
  }, []);
  useEffect(() => {
    for (let t of e) if (!t.isPendingFromSinatra && t.uuid) {
      let e = `comment_creation_${t.uuid}`;
      let i = globalPerfTimer.get(e);
      if (i && i.isRunning && !i.isUnreliable) {
        let t = globalPerfTimer.tryStop(e);
        t && trackEventAnalytics("comment_creation", {
          elapsedMs: t
        }, {
          forwardToDatadog: !0
        });
      }
    }
  }, [e]);
  useEffect(() => {
    let t = new Set(e.filter(e => e.isPendingFromSinatra).map(e => e.id));
    let n = new Set(e.filter(e => e.uuid && e.isPendingFromLg).map(e => e.uuid));
    t.forEach(e => {
      if (u.current.has(e)) return;
      u.current.set(e, {
        startTime: performance.now(),
        backgrounded: !1
      });
      let t = setTimeout(() => {
        sendMetric(d.PENDING_COMMENT_SLOW, {});
      }, 3e4);
      m.current.set(e, t);
    });
    n.forEach(e => {
      p.current.has(e) || p.current.set(e, {
        startTime: performance.now(),
        backgrounded: !1
      });
    });
    i(e => a()(t, e) ? e : t);
    c(e => a()(n, e) ? e : n);
  }, [e]);
  useEffect(() => {
    u.current.forEach((e, i) => {
      if (!t.has(i)) {
        let t = performance.now() - e.startTime;
        sendHistogram(d.PENDING_COMMENT, t / 1e3, {
          backgrounded: e.backgrounded
        });
        u.current.$$delete(i);
        m.current.has(i) && (clearTimeout(m.current.get(i)), m.current.$$delete(i));
      }
    });
  }, [t]);
  useEffect(() => {
    p.current.forEach((e, t) => {
      if (!r.has(t)) {
        let i = performance.now() - e.startTime;
        sendHistogram(d.PENDING_FROM_LG_COMMENT, i / 1e3, {
          backgrounded: e.backgrounded
        });
        p.current.$$delete(t);
      }
    });
  }, [r]);
  useEffect(() => (window.addEventListener("beforeunload", h), () => window.removeEventListener("beforeunload", h)), [h]);
  useEffect(() => {
    let e = () => {
      "hidden" === document.visibilityState && g();
    };
    window.addEventListener("visibilitychange", e);
    return () => window.removeEventListener("visibilitychange", e);
  }, [g]);
}
export const E = $$c0;