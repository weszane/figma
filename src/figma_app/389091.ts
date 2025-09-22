import type { Meta, MusicMusic, SongData } from '../../types/app'
import { createActionCreator } from '../905/73481'
import { deferCallback } from '../905/80656'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { logger } from '../905/651849'
import { setEditorDocumentTitle } from '../905/697795'
import { getRepoById } from '../905/760074'
import { getSelectedFile } from '../905/766303'
import { SelectedViewPathManager } from '../905/870666'
import { debounce } from '../905/915765'
import { songAPIHandler } from '../905/949295'
import { mapFileTypeToEditorType } from '../figma_app/53721'
import { getTimeRemaining, padTime, shouldShowTimerOnLeft } from '../figma_app/152368'
import { getInitialOptions } from '../figma_app/169182'
import { clearMediaSession, fetchActiveSong, hasMediaSessionMetadata, removePlayActionHandler, setupMediaSession } from '../figma_app/198387'
import { trackFileEvent } from '../figma_app/314264'
import { PluginCallbacks } from '../figma_app/603466'
import { Multiplayer } from '../figma_app/763686'
import { trackChangesVolume, trackTogglesMute } from '../figma_app/818609'






// Helper to get multiplayer user count (S)
const getMultiplayerUserCount = (state: AppState): number => state.multiplayer.allUsers.length

/**
 * Updates the editor document title based on song and timer state.
 * (Original: $$v43)
 */
export function updateEditorDocumentTitle(
  editorFile: any,
  repo: any,
  musicStartTimeMs?: number,
): void {
  if (!editorFile)
    return
  const selectedViewName = new SelectedViewPathManager().selectedViewNameHelper(editorFile, repo)
  let timePrefix = ''
  if (musicStartTimeMs !== undefined) {
    const time = Math.max(0, musicStartTimeMs)
    const seconds = time % 60
    const minutes = padTime((time - seconds) / 60)
    timePrefix = `${minutes}:${padTime(seconds)} – `
  }
  setEditorDocumentTitle(selectedViewName, mapFileTypeToEditorType(editorFile.editor_type), timePrefix)
}

/**
 * Returns the last received song timestamp, adjusted for pause state.
 * (Original: $$A15)
 */
export function getLastReceivedSongTimestamp(music: MusicMusic | undefined): number {
  if (!music)
    return 0
  return music.isPaused
    ? music.lastReceivedSongTimestampMs
    : music.lastReceivedSongTimestampMs + (performance.now() - (music as any).timeOrigin)
}

export const ACTIVE_SONG_NOT_FOUND = 'active-song-not-found'

/**
 * Fetches the active song and handles not found case.
 * (Original: N)
 */
export async function fetchAndHandleActiveSong(songID: string, dispatchContext: any): Promise<string> {
  let currentSongID = songID
  await fetchActiveSong({
    songID,
    onSuccess: () => {},
    onNotFound: () => {
      dispatchContext.dispatch(resetSelectedSongAndMusicStartTime({
        selectedSongID: '',
        musicStartTimeMs: 0,
      }))
      currentSongID = ''
      dispatchContext.dispatch(fetchActiveSongsThunk())
      dispatchContext.dispatch(VisualBellActions.enqueue({
        message: getI18nString('whiteboard.timer.song_not_available_error'),
        error: true,
        type: ACTIVE_SONG_NOT_FOUND,
      }))
    },
  })
  return currentSongID
}

// Action creators and thunks (renamed for clarity)
export const setSelectedSongIdMusic = createActionCreator('SET_SELECTED_SONG_ID_MUSIC')

export const updateMusicSongIdThunk = createOptimistThunk((dispatchContext, payload) => {
  const { music } = dispatchContext.getState().music
  const shouldTransmit = !payload.dontTransmitWhenPaused
  if (music && !music.isStopped && (!music.isPaused || shouldTransmit)) {
    const activeSong = dispatchContext.getState().music.activeSongs.find(song => song.song_id === payload.selectedSongID)
    dispatchContext.dispatch(sendMusicEventThunk({
      eventName: 'update-music-song-id',
      isPaused: !music || music.isPaused,
      selectedSongID: payload.selectedSongID,
      lastReceivedSongTimestampMs: activeSong?.start_at_ms || 0,
      isStopped: !music || music.isStopped,
    }))
  }
  dispatchContext.dispatch(setSelectedSongIdMusic(payload))
})

export const resetLocalMusicThunk = createOptimistThunk((dispatchContext) => {
  dispatchContext.dispatch(resetLocalMusic())
  clearMediaSession()
  removePlayActionHandler()
})

export const resetLocalMusic = createActionCreator('RESET_LOCAL_MUSIC')

export const setMusicStateThunk = createOptimistThunk<AppState>((dispatchContext, payload) => {
  dispatchContext.dispatch(setMusicState(payload))
  if (payload.isPaused || payload.isStopped || !payload.selectedSongID) {
    if ((payload.isPaused || payload.isStopped) && hasMediaSessionMetadata()) {
      clearMediaSession()
    }
  }
  else {
    const activeSong = findActiveSong(payload.selectedSongID, dispatchContext.getState().music.activeSongs)
    setupMediaSession(activeSong, () => {
      dispatchContext.dispatch(stopMusicThunk())
    })
  }
})

export const setMusicState = createActionCreator('SET_MUSIC_STATE')
export const resumeMusic = createActionCreator('RESUME_MUSIC')

export const resumeMusicThunk = createOptimistThunk(async (dispatchContext, musicState) => {
  const lastTimestamp = getLastReceivedSongTimestamp(musicState)
  let selectedSongID = dispatchContext.getState().music.music?.selectedSongID
  if (selectedSongID) {
    selectedSongID = await fetchAndHandleActiveSong(selectedSongID, dispatchContext)
  }
  dispatchContext.dispatch(sendMusicEventThunk({
    eventName: 'resume-music',
    isPaused: false,
    selectedSongID: selectedSongID || '',
    lastReceivedSongTimestampMs: lastTimestamp,
    isStopped: false,
  }))
  dispatchContext.dispatch(resumeMusic(musicState))
})

export const pauseMusicThunk = createOptimistThunk((dispatchContext, musicState) => {
  const lastTimestamp = getLastReceivedSongTimestamp(musicState)
  const selectedSongID = dispatchContext.getState().music.music?.selectedSongID
  dispatchContext.dispatch(sendMusicEventThunk({
    eventName: 'pause-music',
    isPaused: true,
    selectedSongID: selectedSongID || '',
    lastReceivedSongTimestampMs: lastTimestamp,
    isStopped: false,
  }))
})

export const stopMusicThunk = createOptimistThunk((dispatchContext) => {
  const selectedSongID = dispatchContext.getState().music.music?.selectedSongID
  dispatchContext.dispatch(sendMusicEventThunk({
    eventName: 'stop-music',
    isPaused: true,
    selectedSongID: selectedSongID || '',
    lastReceivedSongTimestampMs: 0,
    isStopped: true,
  }))
})

export const startMusic = createActionCreator('START_MUSIC')

export const startMusicThunk = createOptimistThunk(async (dispatchContext, { musicStartTimeMs = 0 }) => {
  const { music } = dispatchContext.getState().music
  let selectedSongID = music?.selectedSongID || ''
  if (selectedSongID) {
    selectedSongID = await fetchAndHandleActiveSong(selectedSongID, dispatchContext)
  }
  dispatchContext.dispatch(sendMusicEventThunk({
    eventName: 'start-music',
    isPaused: false,
    selectedSongID,
    lastReceivedSongTimestampMs: musicStartTimeMs,
    isStopped: false,
  }))
  dispatchContext.dispatch(startMusic({ musicStartTimeMs }))
})

function findActiveSong(songID: string, activeSongs: Meta[]) {
  return activeSongs.find(song => song.song_id === songID)
}

export const sendMusicMessage = createActionCreator('SEND_MUSIC_MESSAGE')

export const sendMusicEventThunk = createOptimistThunk((dispatchContext, payload) => {
  const musicState = dispatchContext.getState().music
  Multiplayer?.sendMusic(
    payload.isPaused,
    (musicState?.music?.musicMessageID || 0) + 1,
    payload.selectedSongID || '',
    payload.lastReceivedSongTimestampMs || 0,
    payload.isStopped,
  )
  dispatchContext.dispatch(sendMusicMessage(payload))
})

export const setMusicModal = createActionCreator('SET_MUSIC_MODAL')

export const setMusicModalThunk = createOptimistThunk((dispatchContext, payload) => {
  if (payload.state === 'open') {
    deferCallback(() => {
      if (dispatchContext.getState().music?.modalState === 'open') {
        dispatchContext.dispatch(setMusicModal({ state: 'closed', userInitiated: false }))
      }
    })
  }
  dispatchContext.dispatch(setMusicModal(payload))
})

export const resetLocalTimer = createActionCreator('RESET_LOCAL_TIMER')
export const setMusicStandaloneVolume = createActionCreator('SET_MUSIC_STANDALONE_VOLUME')

export const setMusicStandaloneVolumeThunk = createOptimistThunk((dispatchContext, payload) => {
  debounceTrackVolume(dispatchContext.getState(), payload)
  dispatchContext.dispatch(setMusicStandaloneVolume(payload))
})

export const setMusicIsMuted = createActionCreator('SET_MUSIC_IS_MUTED')

export const setMusicIsMutedThunk = createOptimistThunk((dispatchContext, { isMuted, userInitiated }) => {
  if (userInitiated)
    trackTogglesMute(dispatchContext.getState(), isMuted)
  dispatchContext.dispatch(setMusicIsMuted({ isMuted, userInitiated }))
})

export const setTimerAndMusicAreMuted = createActionCreator('SET_TIMER_AND_MUSIC_ARE_MUTED')

export const setTimerAndMusicAreMutedThunk = createOptimistThunk((dispatchContext, { isMuted, userInitiated }) => {
  if (userInitiated)
    trackTogglesMute(dispatchContext.getState(), isMuted)
  dispatchContext.dispatch(setTimerAndMusicAreMuted({ isMuted, userInitiated }))
})

export const setStandaloneMusicPlayer = createActionCreator('SET_STANDALONE_MUSIC_PLAYER')
export const setMainMusicPlayer = createActionCreator('SET_MAIN_MUSIC_PLAYER')
export const setMusicVolume = createActionCreator('SET_MUSIC_VOLUME')

export const setMusicVolumeThunk = createOptimistThunk((dispatchContext, payload) => {
  debounceTrackVolume(dispatchContext.getState(), payload)
  dispatchContext.dispatch(setMusicVolume(payload))
})

const debounceTrackVolume = debounce((state, payload) => trackChangesVolume(state, payload), 1000, false)

export const setSelectedSongId = createActionCreator('SET_SELECTED_SONG_ID')

export const resetSelectedSongAndMusicStartTime = createOptimistThunk((dispatchContext, payload) => {
  const { time } = dispatchContext.getState().timer
  if (time && time.totalTimeMs > 0) {
    const timeRemaining = getTimeRemaining(time)
    dispatchContext.dispatch(sendTimerEventThunk({
      eventName: 'update-timer-song-id',
      totalTimeMs: time.totalTimeMs,
      timeRemainingMs: timeRemaining,
      isPaused: time.isPaused,
      songID: payload.selectedSongID,
      lastReceivedSongTimestampMs: payload.musicStartTimeMs,
    }))
    PluginCallbacks.timerChange('timerupdatesongid')
  }
  dispatchContext.dispatch(setSelectedSongId(payload))
})

export const getActiveSongsSuccess = createActionCreator('GET_ACTIVE_SONGS_SUCCESS')

export const fetchActiveSongsThunk = createOptimistThunk(async (dispatchContext) => {
  try {
    const response = await songAPIHandler.getSongs<SongData>()
    if (!response || response.status !== 200 || !response.data || !response.data.meta) {
      logger.warn('Failed to fetch active songs')
      return new Error('Api error while fetching active songs')
    }
    dispatchContext.dispatch(getActiveSongsSuccess(response.data.meta))
  }
  catch (error) {
    logger.warn('Failed to fetch active songs')
    return error
  }
})

export const setShowingFileFooter = createActionCreator('SET_SHOWING_FILE_FOOTER')
export const setSelectedTypedPropDefId = createActionCreator('SET_SELECTED_TYPED_PROP_DEF_ID')
export const setStartChimePlayed = createActionCreator('SET_START_CHIME_PLAYED')
export const setTimerNotification = createActionCreator('SET_TIMER_NOTIFICATION')
export const setTimerAudioEnabled = createActionCreator('SET_TIMER_AUDIO_ENABLED')
export const setTimerModal = createActionCreator('SET_TIMER_MODAL')

export const setTimerModalThunk = createOptimistThunk((dispatchContext, payload) => {
  payload.state === 'open'
  && shouldShowTimerOnLeft()
  && deferCallback(() => {
    const showOnLeft = shouldShowTimerOnLeft()
    if (dispatchContext.getState().timer?.modalState === 'open' && showOnLeft) {
      dispatchContext.dispatch(setTimerModalThunk({ state: 'closed', userInitiated: false }))
    }
  })

  if (payload.userInitiated) {
    const state = dispatchContext.getState()
    const timerActive = state.timer.time?.timeRemainingMs > 0
    trackFileEvent(`timer-modal-${payload.state}`, state.openFile?.key, state, {
      'multiplayer-users': getMultiplayerUserCount(state),
      'timer-active': timerActive,
      'source': payload.source,
    })
  }

  dispatchContext.dispatch(setTimerModal(payload))
})

export const sendTimer = createActionCreator('SEND_TIMER')

export const sendTimerEventThunk = createOptimistThunk((dispatchContext, payload) => {
  const state = dispatchContext.getState()
  const timerState = state.timer
  let setBy = timerState.setBy
  if (payload.eventName === 'start-timer') {
    const user = state.multiplayer.allUsers.find(u => u.sessionID === state.multiplayer.sessionID)
    setBy = user ? user.name : getInitialOptions().user_data?.handle || 'anonymous user'
  }
  Multiplayer?.sendTimer(
    payload.totalTimeMs || 0,
    payload.timeRemainingMs || 0,
    !!payload.isPaused,
    (timerState?.time?.timerID || 0) + 1,
    setBy,
    payload.songID || '',
    payload.lastReceivedSongTimestampMs || 0,
  )
  if (payload.eventName) {
    const eventData: Record<string, any> = {
      'multiplayer-users': getMultiplayerUserCount(state),
    }
    if (payload.eventName === 'adjust-timer') {
      eventData['time-added-s'] = Math.round((payload.totalTimeMs - state.timer.time.totalTimeMs) / 1000)
    }
    else if (payload.eventName === 'start-timer') {
      eventData['duration-s'] = Math.round(payload.totalTimeMs / 1000)
    }
    trackFileEvent(payload.eventName, state.openFile?.key, state, eventData, {
      forwardToDatadog: true,
    })
  }
  dispatchContext.dispatch(sendTimer(payload))
})

export const setTimer = createActionCreator('SET_TIMER')

export const setTimerThunk = createOptimistThunk((dispatchContext, payload) => {
  if (payload.totalTimeMs === 0) {
    const state = dispatchContext.getState()
    const selectedFile = getSelectedFile(state)
    if (selectedFile) {
      const repo = getRepoById(selectedFile, state.repos)
      updateEditorDocumentTitle(selectedFile, repo)
    }
  }
  dispatchContext.dispatch(setTimer(payload))
})

export const startTimer = createActionCreator('START_TIMER')

export const startTimerThunk = createOptimistThunk(async (dispatchContext, { totalTimeMs, musicStartTimeMs = 0 }) => {
  let selectedSongID = dispatchContext.getState().timer.selectedSongID
  if (selectedSongID) {
    selectedSongID = await fetchAndHandleActiveSong(selectedSongID, dispatchContext)
  }
  dispatchContext.dispatch(sendTimerEventThunk({
    eventName: 'start-timer',
    totalTimeMs,
    timeRemainingMs: totalTimeMs,
    isPaused: false,
    songID: selectedSongID,
    lastReceivedSongTimestampMs: musicStartTimeMs,
  }))
  PluginCallbacks.timerChange('timerstart')
  dispatchContext.dispatch(startTimer({ totalTimeMs, musicStartTimeMs }))
})

export const adjustTimerThunk = createOptimistThunk((dispatchContext, payload) => {
  const selectedSongID = dispatchContext.getState().timer.selectedSongID
  dispatchContext.dispatch(sendTimerEventThunk({
    eventName: 'adjust-timer',
    totalTimeMs: payload.timer.totalTimeMs + payload.deltaMs,
    timeRemainingMs: getTimeRemaining(payload.timer) + payload.deltaMs,
    isPaused: payload.timer.isPaused,
    songID: selectedSongID,
    lastReceivedSongTimestampMs: payload.timer.lastReceivedSongTimestampMs,
  }))
  PluginCallbacks.timerChange('timeradjust')
})

export const pauseTimerThunk = createOptimistThunk((dispatchContext, timerState) => {
  const timeRemaining = getTimeRemaining(timerState)
  const lastTimestamp = getLastReceivedSongTimestamp(timerState)
  const selectedSongID = dispatchContext.getState().timer.selectedSongID
  const totalTimeMs = timerState ? timerState.totalTimeMs : 0
  dispatchContext.dispatch(sendTimerEventThunk({
    eventName: 'pause-timer',
    totalTimeMs,
    timeRemainingMs: timeRemaining,
    isPaused: true,
    songID: selectedSongID,
    lastReceivedSongTimestampMs: lastTimestamp,
  }))
  PluginCallbacks.timerChange('timerpause')
})

export const stopTimerThunk = createOptimistThunk((dispatchContext) => {
  const selectedSongID = dispatchContext.getState().timer.selectedSongID
  dispatchContext.dispatch(sendTimerEventThunk({
    eventName: 'stop-timer',
    totalTimeMs: 0,
    timeRemainingMs: 0,
    isPaused: true,
    songID: selectedSongID,
    lastReceivedSongTimestampMs: 0,
  }))
  PluginCallbacks.timerChange('timerstop')
})

export const resumeTimer = createActionCreator('RESUME_TIMER')

export const resumeTimerThunk = createOptimistThunk(async (dispatchContext, payload) => {
  let selectedSongID = dispatchContext.getState().timer.selectedSongID
  if (selectedSongID) {
    selectedSongID = await fetchAndHandleActiveSong(selectedSongID, dispatchContext)
  }
  dispatchContext.dispatch(sendTimerEventThunk({
    eventName: 'resume-timer',
    totalTimeMs: payload.totalTimeMs,
    timeRemainingMs: payload.timeRemainingMs,
    isPaused: false,
    songID: selectedSongID,
    lastReceivedSongTimestampMs: payload.lastReceivedSongTimestampMs,
  }))
  PluginCallbacks.timerChange('timerresume')
  dispatchContext.dispatch(resumeTimer(payload))
})

// Exported variables (renamed for clarity)
export const A3 = setMainMusicPlayer
export const CE = setMusicStandaloneVolume
export const Cs = setSelectedSongId
export const Dx = updateMusicSongIdThunk
export const HS = setMusicState
export const I4 = resumeTimer
export const Ir = resumeMusic
export const L = resetSelectedSongAndMusicStartTime
export const N9 = setShowingFileFooter
export const NL = setMusicVolume
export const OC = setTimerModal
export const OJ = setMusicStateThunk
export const Ox = setMusicModal
export const Pg = setTimerAudioEnabled
export const Qv = startTimerThunk
export const UQ = getLastReceivedSongTimestamp
export const UX = getActiveSongsSuccess
export const V9 = sendMusicMessage
export const VV = adjustTimerThunk
export const Vk = stopTimerThunk
export const WA = resetLocalMusic
export const _1 = pauseTimerThunk
export const bA = startTimer
export const c$ = pauseMusicThunk
export const e9 = setTimer
export const g6 = resetLocalMusicThunk
export const g_ = stopMusicThunk
export const h8 = sendTimer
export const he = startMusic
export const iy = setMusicIsMuted
export const k1 = setStartChimePlayed
export const ks = setTimerAndMusicAreMuted
export const lV = setTimerNotification
export const lm = ACTIVE_SONG_NOT_FOUND
export const lu = setTimerModalThunk
export const mF = startMusicThunk
export const mI = setTimerThunk
export const n0 = setSelectedTypedPropDefId
export const ne = resumeTimerThunk
export const oI = setSelectedSongIdMusic
export const ot = resetLocalTimer
export const pX = setMusicStandaloneVolumeThunk
export const qV = fetchActiveSongsThunk
export const rF = updateEditorDocumentTitle
export const tk = setMusicIsMutedThunk
export const wk = setStandaloneMusicPlayer
