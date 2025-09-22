import { trackFileEvent } from '../figma_app/314264'

/**
 * Enum for music event types.
 * (original: i)
 */
enum MusicEventType {
  OpensMusicDropdown = 'opens_music_dropdown',
  TogglesMute = 'toggles_mute',
  ChangesSong = 'changes_song',
  ChangesVolume = 'changes_volume',
  RemovesSong = 'removes_song',
  PlaysSong = 'plays_song',
  StopsSong = 'stops_song',
}

/**
 * Tracks a music-related file event.
 * @param eventType - Type of music event.
 * @param fileContext - File context object.
 * @param eventData - Additional event data.
 * @param options - Optional tracking options.
 * (original: a)
 */
function trackMusicEvent(eventType: MusicEventType, fileContext: any, eventData: Record<string, any> = {}, options?: Record<string, any>) {
  trackFileEvent(
    eventType,
    fileContext.openFile?.key,
    fileContext,
    {
      ...eventData,
      multiplayer_count: fileContext.multiplayer.allUsers.length,
    },
    options,
  )
}

/**
 * Tracks opening the music dropdown.
 * (original: $$s1)
 */
export function trackOpensMusicDropdown(fileContext: any) {
  return trackMusicEvent(MusicEventType.OpensMusicDropdown, fileContext)
}

/**
 * Tracks changing the song.
 * (original: $$o4)
 */
export function trackChangesSong(fileContext: any, songId: string, isPlaying: boolean) {
  return trackMusicEvent(MusicEventType.ChangesSong, fileContext, {
    song_id: songId,
    isPlaying,
  })
}

/**
 * Tracks removing a song.
 * (original: $$l0)
 */
export function trackRemovesSong(fileContext: any, songId: string) {
  return trackMusicEvent(MusicEventType.RemovesSong, fileContext, {
    song_id: songId,
  })
}

/**
 * Tracks toggling mute.
 * (original: $$d6)
 */
export function trackTogglesMute(fileContext: any, isMuted: boolean) {
  return trackMusicEvent(MusicEventType.TogglesMute, fileContext, {
    isMuted,
  })
}

/**
 * Tracks changing the volume.
 * (original: $$c3)
 */
export function trackChangesVolume(fileContext: any, volume: number) {
  return trackMusicEvent(MusicEventType.ChangesVolume, fileContext, {
    volume,
  })
}

/**
 * Tracks playing a song.
 * (original: $$u5)
 */
export function trackPlaysSong(fileContext: any, songId: string) {
  return trackMusicEvent(
    MusicEventType.PlaysSong,
    fileContext,
    { song_id: songId },
    { forwardToDatadog: true },
  )
}

/**
 * Tracks stopping a song.
 * (original: $$p2)
 */
export function trackStopsSong(fileContext: any, songId: string) {
  return trackMusicEvent(MusicEventType.StopsSong, fileContext, {
    song_id: songId,
  })
}

// Refactored exports to match new function names
export const $B = trackRemovesSong
export const eT = trackOpensMusicDropdown
export const fx = trackStopsSong
export const qV = trackChangesVolume
export const tU = trackChangesSong
export const xf = trackPlaysSong
export const ym = trackTogglesMute
