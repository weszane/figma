import { memo, useEffect, useMemo } from "react"
import { useSelector } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { Eo, W5 } from "../figma_app/120294"
import { Em } from "../figma_app/318520"
import { useCurrentFileKey } from "../figma_app/516028"
import { qr } from "../figma_app/637336"

export let $$c0 = memo(({
  sessionId: e,
}) => {
  let t = useCurrentFileKey()
  return useSelector(e => t && !!e.voice.activeCall[t])
    ? jsx(u, {
        sessionId: e,
      })
    : null
})
function u({
  sessionId: e,
}) {
  let t = useCurrentFileKey()
  let {
    userIdsInCall,
  } = W5(t)
  let {
    voiceUsersInMultiplayer,
  } = Eo(userIdsInCall, t)
  let o = useMemo(() => voiceUsersInMultiplayer.find(t => t.sessionID === e), [voiceUsersInMultiplayer, e])
  return o && t
    ? jsx(p, {
        color: o.color,
        userId: o.userID,
      })
    : null
}
let p = memo(({
  userId: e,
  color: t,
}) => {
  let i = qr()
  return i
    ? jsx(g, {
        userId: e,
        color: t,
        voiceCall: i,
      })
    : null
})
let m = {}
let h = {}
let g = memo(({
  userId: e,
  voiceCall: t,
  color: i,
}) => {
  useEffect(() => {
    let {
      unsubscribe,
    } = Em(e, t, (t) => {
      if (m[e]) {
        h[e].style.visibility = t?.isMuted ? "hidden" : "visible"
        let i = 0.9 * (t?.volumeLevel || 0) ** (1 / 3) + 0.1
        m[e].style.transform = `scale(${i})`
      }
    })
    return () => {
      delete m[e]
      unsubscribe()
    }
  }, [e, t])
  return jsxs("div", {
    children: [jsx("div", {
      ref: t => m[e] = t,
      className: "voice_cursor_pulse--backgroundPulse--M8T9x",
      style: {
        backgroundColor: i,
      },
    }), jsx("div", {
      ref: t => h[e] = t,
      className: "voice_cursor_pulse--pulse--Z6cD5",
      style: {
        boxShadow: `0 0 0 1px ${i}`,
      },
    })],
  })
})
export const o = $$c0
