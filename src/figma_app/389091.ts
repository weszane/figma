import { createActionCreator } from '../905/73481'
import { D } from '../905/80656'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { logger } from '../905/651849'
import { hL } from '../905/697795'
import { getRepoById } from '../905/760074'
import { getSelectedFile } from '../905/766303'
import { SelectedViewPathManager } from '../905/870666'
import { debounce } from '../905/915765'
import { N as _$$N } from '../905/949295'
import { mapFileTypeToEditorType } from '../figma_app/53721'
import { getTimeRemaining, padTime, shouldShowTimerOnLeft } from '../figma_app/152368'
import { getInitialOptions } from '../figma_app/169182'
import { $_, _s, c4, I8, om } from '../figma_app/198387'
import { trackFileEvent } from '../figma_app/314264'
import { d1 as _$$d } from '../figma_app/603466'
import { Multiplayer } from '../figma_app/763686'
import { qV as _$$qV, ym } from '../figma_app/818609'

function S(e) {
  return e.multiplayer.allUsers.length
}
export function $$v43(e, t, r) {
  let n
  if (!e)
    return
  let i = new SelectedViewPathManager().selectedViewNameHelper(e, t)
  let a = r
    ? (n = (function (e) {
        let t = Math.max(0, e)
        let r = t % 60
        let n = padTime((t - r) / 60)
        return `${n}:${padTime(r)}`
      }(r)), `${n} \u2013 `)
    : ''
  hL(i, mapFileTypeToEditorType(e.editor_type), a)
}
export function $$A15(e) {
  return e ? e.isPaused ? e.lastReceivedSongTimestampMs : e.lastReceivedSongTimestampMs + (performance.now() - e.timeOrigin) : 0
}
export let $$x33 = 'active-song-not-found'
async function N(e, t) {
  let r = e
  await _s({
    songID: e,
    onSuccess: () => {},
    onNotFound: () => {
      t.dispatch($$ee7({
        selectedSongID: '',
        musicStartTimeMs: 0,
      }))
      r = ''
      t.dispatch($$er42())
      t.dispatch(VisualBellActions.enqueue({
        message: getI18nString('whiteboard.timer.song_not_available_error'),
        error: !0,
        type: $$x33,
      }))
    },
  })
  return r
}
let $$C39 = createActionCreator('SET_SELECTED_SONG_ID_MUSIC')
let $$w3 = createOptimistThunk((e, t) => {
  let {
    music,
  } = e.getState().music
  let n = !t.dontTransmitWhenPaused
  if (music && !music.isStopped && (!music.isPaused || n)) {
    let n = e.getState().music.activeSongs.find(e => e.song_id === t.selectedSongID)
    e.dispatch(G({
      eventName: 'update-music-song-id',
      isPaused: !music || music.isPaused,
      selectedSongID: t.selectedSongID,
      lastReceivedSongTimestampMs: n?.start_at_ms || 0,
      isStopped: !music || music.isStopped,
    }))
  }
  e.dispatch($$C39(t))
})
let $$O25 = createOptimistThunk((e) => {
  e.dispatch($$R20())
  I8()
  om()
})
let $$R20 = createActionCreator('RESET_LOCAL_MUSIC')
let $$$$L11 = createOptimistThunk((e, t) => {
  if (e.dispatch($$P4(t)), t.isPaused || t.isStopped || !t.selectedSongID) {
    (t.isPaused || t.isStopped) && c4() && I8()
  }
  else {
    let r = U(t.selectedSongID, e.getState().music.activeSongs)
    $_(r, () => {
      e.dispatch($$M26())
    })
  }
})
let $$P4 = createActionCreator('SET_MUSIC_STATE')
let $$D6 = createActionCreator('RESUME_MUSIC')
createOptimistThunk(async (e, t) => {
  let r = $$A15(t)
  let n = e.getState()
  let i = n.music.music?.selectedSongID
  i && (i = await N(i, e))
  e.dispatch(G({
    eventName: 'resume-music',
    isPaused: !1,
    selectedSongID: i || '',
    lastReceivedSongTimestampMs: r,
    isStopped: !1,
  }))
  e.dispatch($$D6(t))
})
let $$k23 = createOptimistThunk((e, t) => {
  let r = $$A15(t)
  let n = e.getState()
  let i = n.music.music?.selectedSongID
  e.dispatch(G({
    eventName: 'pause-music',
    isPaused: !0,
    selectedSongID: i || '',
    lastReceivedSongTimestampMs: r,
    isStopped: !1,
  }))
})
let $$M26 = createOptimistThunk((e) => {
  let t = e.getState()
  let r = t.music.music?.selectedSongID
  e.dispatch(G({
    eventName: 'stop-music',
    isPaused: !0,
    selectedSongID: r || '',
    lastReceivedSongTimestampMs: 0,
    isStopped: !0,
  }))
})
let $$F28 = createActionCreator('START_MUSIC')
let $$j35 = createOptimistThunk(async (e, {
  musicStartTimeMs: t = 0,
}) => {
  let {
    music,
  } = e.getState().music
  let n = ''
  music && (n = music.selectedSongID)
  n && (n = await N(n, e))
  e.dispatch(G({
    eventName: 'start-music',
    isPaused: !1,
    selectedSongID: n,
    lastReceivedSongTimestampMs: t,
    isStopped: !1,
  }))
  e.dispatch($$F28({
    musicStartTimeMs: t,
  }))
})
let U = (e, t) => t.find(t => t.song_id === e)
let $$B17 = createActionCreator('SEND_MUSIC_MESSAGE')
let G = createOptimistThunk((e, t) => {
  let r = e.getState().music
  Multiplayer?.sendMusic(t.isPaused, (r?.music?.musicMessageID || 0) + 1, t.selectedSongID || '', t.lastReceivedSongTimestampMs || 0, t.isStopped)
  e.dispatch($$B17(t))
})
createOptimistThunk((e, t) => {
  t.state === 'open' && D(() => {
    e.getState().music?.modalState === 'open' && e.dispatch($$V12({
      state: 'closed',
      userInitiated: !1,
    }))
  })
  e.dispatch($$V12(t))
})
let $$V12 = createActionCreator('SET_MUSIC_MODAL')
let $$H40 = createActionCreator('RESET_LOCAL_TIMER')
let $$z1 = createActionCreator('SET_MUSIC_STANDALONE_VOLUME')
let $$W41 = createOptimistThunk((e, t) => {
  Z(e.getState(), t)
  e.dispatch($$z1(t))
})
let $$K29 = createActionCreator('SET_MUSIC_IS_MUTED')
let $$Y44 = createOptimistThunk((e, {
  isMuted: t,
  userInitiated: r,
}) => {
  r && ym(e.getState(), t)
  e.dispatch($$K29({
    isMuted: t,
    userInitiated: r,
  }))
})
let $$$31 = createActionCreator('SET_TIMER_AND_MUSIC_ARE_MUTED')
createOptimistThunk((e, {
  isMuted: t,
  userInitiated: r,
}) => {
  r && ym(e.getState(), t)
  e.dispatch($$$31({
    isMuted: t,
    userInitiated: r,
  }))
})
let $$X45 = createActionCreator('SET_STANDALONE_MUSIC_PLAYER')
let $$q0 = createActionCreator('SET_MAIN_MUSIC_PLAYER')
let $$J9 = createActionCreator('SET_MUSIC_VOLUME')
createOptimistThunk((e, t) => {
  Z(e.getState(), t)
  e.dispatch($$J9(t))
})
let Z = debounce((e, t) => _$$qV(e, t), 1e3, !1)
let $$Q2 = createActionCreator('SET_SELECTED_SONG_ID')
let $$ee7 = createOptimistThunk((e, t) => {
  let {
    time,
  } = e.getState().timer
  if (time && time.totalTimeMs > 0) {
    let n = getTimeRemaining(time)
    e.dispatch(eu({
      eventName: 'update-timer-song-id',
      totalTimeMs: time.totalTimeMs,
      timeRemainingMs: n,
      isPaused: time.isPaused,
      songID: t.selectedSongID,
      lastReceivedSongTimestampMs: t.musicStartTimeMs,
    }))
    _$$d.timerChange('timerupdatesongid')
  }
  e.dispatch($$Q2(t))
})
let $$et16 = createActionCreator('GET_ACTIVE_SONGS_SUCCESS')
let $$er42 = createOptimistThunk(async (e) => {
  try {
    let t = await _$$N.getSongs()
    if (!t || t.status !== 200 || !t.data || !t.data.meta) {
      logger.warn('Failed to fetch active songs')
      return new Error('Api error while fetching active songs')
    }
    e.dispatch($$et16(t.data.meta))
  }
  catch (e) {
    logger.warn('Failed to fetch active songs')
    return e
  }
})
let $$en8 = createActionCreator('SET_SHOWING_FILE_FOOTER')
let $$ei37 = createActionCreator('SET_SELECTED_TYPED_PROP_DEF_ID')
let $$ea30 = createActionCreator('SET_START_CHIME_PLAYED')
let $$es32 = createActionCreator('SET_TIMER_NOTIFICATION')
let $$eo13 = createActionCreator('SET_TIMER_AUDIO_ENABLED')
let $$el10 = createActionCreator('SET_TIMER_MODAL')
let $$ed34 = createOptimistThunk((e, t) => {
  if (t.state === 'open' && shouldShowTimerOnLeft() && D(() => {
    let t = shouldShowTimerOnLeft()
    e.getState().timer?.modalState === 'open' && t && e.dispatch($$ed34({
      state: 'closed',
      userInitiated: !1,
    }))
  }), t.userInitiated) {
    let r = e.getState()
    let n = r.timer.time?.timeRemainingMs > 0
    trackFileEvent(`timer-modal-${t.state}`, r.openFile?.key, r, {
      'multiplayer-users': S(r),
      'timer-active': n,
      'source': t.source,
    })
  }
  e.dispatch($$el10(t))
})
let $$ec27 = createActionCreator('SEND_TIMER')
let eu = createOptimistThunk((e, t) => {
  let r = e.getState()
  let n = r.timer
  let a = n.setBy
  if (t.eventName === 'start-timer') {
    let e = r.multiplayer.allUsers.find(e => e.sessionID === r.multiplayer.sessionID)
    a = e ? e.name : getInitialOptions().user_data?.handle || 'anonymous user'
  }
  if (Multiplayer?.sendTimer(t.totalTimeMs || 0, t.timeRemainingMs || 0, !!t.isPaused, (n?.time?.timerID || 0) + 1, a, t.songID || '', t.lastReceivedSongTimestampMs || 0), t.eventName) {
    let e = {
      'multiplayer-users': S(r),
    }
    if (t.eventName === 'adjust-timer') {
      let n = Math.round((t.totalTimeMs - r.timer.time.totalTimeMs) / 1e3)
      e['time-added-s'] = n
    }
    else {
      t.eventName === 'start-timer' && (e['duration-s'] = Math.round(t.totalTimeMs / 1e3))
    }
    trackFileEvent(t.eventName, r.openFile?.key, r, e, {
      forwardToDatadog: !0,
    })
  }
  e.dispatch($$ec27(t))
})
let $$ep24 = createActionCreator('SET_TIMER')
let $$e_36 = createOptimistThunk((e, t) => {
  if (t.totalTimeMs === 0) {
    let t = e.getState()
    let r = getSelectedFile(t)
    if (r) {
      let e = getRepoById(r, t.repos)
      $$v43(r, e)
    }
  }
  e.dispatch($$ep24(t))
})
let $$eh22 = createActionCreator('START_TIMER')
let $$em14 = createOptimistThunk(async (e, {
  totalTimeMs: t,
  musicStartTimeMs: r = 0,
}) => {
  let n = e.getState().timer.selectedSongID
  n && (n = await N(n, e))
  e.dispatch(eu({
    eventName: 'start-timer',
    totalTimeMs: t,
    timeRemainingMs: t,
    isPaused: !1,
    songID: n,
    lastReceivedSongTimestampMs: r,
  }))
  _$$d.timerChange('timerstart')
  e.dispatch($$eh22({
    totalTimeMs: t,
    musicStartTimeMs: r,
  }))
})
let $$eg18 = createOptimistThunk((e, t) => {
  let r = e.getState().timer.selectedSongID
  e.dispatch(eu({
    eventName: 'adjust-timer',
    totalTimeMs: t.timer.totalTimeMs + t.deltaMs,
    timeRemainingMs: getTimeRemaining(t.timer) + t.deltaMs,
    isPaused: t.timer.isPaused,
    songID: r,
    lastReceivedSongTimestampMs: t.timer.lastReceivedSongTimestampMs,
  }))
  _$$d.timerChange('timeradjust')
})
let $$ef21 = createOptimistThunk((e, t) => {
  let r = getTimeRemaining(t)
  let n = $$A15(t)
  let i = e.getState().timer.selectedSongID
  let a = (function (e) {
    return e ? e.totalTimeMs : 0
  }(t))
  e.dispatch(eu({
    eventName: 'pause-timer',
    totalTimeMs: a,
    timeRemainingMs: r,
    isPaused: !0,
    songID: i,
    lastReceivedSongTimestampMs: n,
  }))
  _$$d.timerChange('timerpause')
})
let $$eE19 = createOptimistThunk((e) => {
  let t = e.getState().timer.selectedSongID
  e.dispatch(eu({
    eventName: 'stop-timer',
    totalTimeMs: 0,
    timeRemainingMs: 0,
    isPaused: !0,
    songID: t,
    lastReceivedSongTimestampMs: 0,
  }))
  _$$d.timerChange('timerstop')
})
let $$ey5 = createActionCreator('RESUME_TIMER')
let $$eb38 = createOptimistThunk(async (e, t) => {
  let r = e.getState().timer.selectedSongID
  r && (r = await N(r, e))
  e.dispatch(eu({
    eventName: 'resume-timer',
    totalTimeMs: t.totalTimeMs,
    timeRemainingMs: t.timeRemainingMs,
    isPaused: !1,
    songID: r,
    lastReceivedSongTimestampMs: t.lastReceivedSongTimestampMs,
  }))
  _$$d.timerChange('timerresume')
  e.dispatch($$ey5(t))
})
export const A3 = $$q0
export const CE = $$z1
export const Cs = $$Q2
export const Dx = $$w3
export const HS = $$P4
export const I4 = $$ey5
export const Ir = $$D6
export const L = $$ee7
export const N9 = $$en8
export const NL = $$J9
export const OC = $$el10
export const OJ = $$$$L11
export const Ox = $$V12
export const Pg = $$eo13
export const Qv = $$em14
export const UQ = $$A15
export const UX = $$et16
export const V9 = $$B17
export const VV = $$eg18
export const Vk = $$eE19
export const WA = $$R20
export const _1 = $$ef21
export const bA = $$eh22
export const c$ = $$k23
export const e9 = $$ep24
export const g6 = $$O25
export const g_ = $$M26
export const h8 = $$ec27
export const he = $$F28
export const iy = $$K29
export const k1 = $$ea30
export const ks = $$$31
export const lV = $$es32
export const lm = $$x33
export const lu = $$ed34
export const mF = $$j35
export const mI = $$e_36
export const n0 = $$ei37
export const ne = $$eb38
export const oI = $$C39
export const ot = $$H40
export const pX = $$W41
export const qV = $$er42
export const rF = $$v43
export const tk = $$Y44
export const wk = $$X45
