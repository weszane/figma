import { jsx, jsxs } from "react/jsx-runtime";
import { memo, useMemo, useEffect } from "react";
import { useSelector } from "../vendor/514228";
import { tS } from "../figma_app/516028";
import { qr } from "../figma_app/637336";
import { W5, Eo } from "../figma_app/120294";
import { Em } from "../figma_app/318520";
export let $$c0 = memo(function ({
  sessionId: e
}) {
  let t = tS();
  return useSelector(e => t && !!e.voice.activeCall[t]) ? jsx(u, {
    sessionId: e
  }) : null;
});
function u({
  sessionId: e
}) {
  let t = tS();
  let {
    userIdsInCall
  } = W5(t);
  let {
    voiceUsersInMultiplayer
  } = Eo(userIdsInCall, t);
  let o = useMemo(() => voiceUsersInMultiplayer.find(t => t.sessionID === e), [voiceUsersInMultiplayer, e]);
  return o && t ? jsx(p, {
    color: o.color,
    userId: o.userID
  }) : null;
}
let p = memo(function ({
  userId: e,
  color: t
}) {
  let i = qr();
  return i ? jsx(g, {
    userId: e,
    color: t,
    voiceCall: i
  }) : null;
});
let m = {};
let h = {};
let g = memo(function ({
  userId: e,
  voiceCall: t,
  color: i
}) {
  useEffect(() => {
    let {
      unsubscribe
    } = Em(e, t, t => {
      if (m[e]) {
        h[e].style.visibility = t?.isMuted ? "hidden" : "visible";
        let i = .9 * Math.pow(t?.volumeLevel || 0, 1 / 3) + .1;
        m[e].style.transform = `scale(${i})`;
      }
    });
    return () => {
      delete m[e];
      unsubscribe();
    };
  }, [e, t]);
  return jsxs("div", {
    children: [jsx("div", {
      ref: t => m[e] = t,
      className: "voice_cursor_pulse--backgroundPulse--M8T9x",
      style: {
        backgroundColor: i
      }
    }), jsx("div", {
      ref: t => h[e] = t,
      className: "voice_cursor_pulse--pulse--Z6cD5",
      style: {
        boxShadow: `0 0 0 1px ${i}`
      }
    })]
  });
});
export const o = $$c0;