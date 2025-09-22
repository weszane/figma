import { songAPIHandler } from '../905/949295'

/**
 * Checks if the time difference from the given timestamp exceeds 5 seconds and count is at least 2.
 * @param lastTimestamp - The previous timestamp in ms.
 * @param count - The count to compare.
 * @returns True if conditions are met, false otherwise.
 * (Original: $$i7)
 */
export function isStale(lastTimestamp: number, count: number): boolean {
  const elapsed = Date.now() - lastTimestamp
  return count >= 2 && elapsed >= 5000
}

/**
 * Compares two arrays of songs by their song_id.
 * @param arr1 - First array of songs.
 * @param arr2 - Second array of songs.
 * @returns True if arrays are equal by song_id, false otherwise.
 * (Original: $$a4)
 */
export function areSongArraysEqual(
  arr1: Array<{ song_id: string }>,
  arr2: Array<{ song_id: string }>,
): boolean {
  if (arr1.length !== arr2.length)
    return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i].song_id !== arr2[i].song_id)
      return false
  }
  return true
}

/**
 * Checks if both songs are falsy or have the same song_id.
 * @param songA - First song object.
 * @param songB - Second song object.
 * @returns True if both are falsy or have the same song_id.
 * (Original: $$s6)
 */
export function isSameSong(songA?: { song_id?: string }, songB?: { song_id?: string }): boolean {
  return (!songA && !songB) || songA?.song_id === songB?.song_id
}

/**
 * Randomizes the start time of each song from its cuesheet tracks.
 * @param songs - Array of song objects with cuesheet.
 * @returns Array of songs with randomized start_at_ms.
 * (Original: $$o2)
 */
export function randomizeSongStartTimes(
  songs: Array<{
    cuesheet: { tracks: Array<{ start_time: number }> }
    start_at_ms?: number
  }>,
): typeof songs {
  return songs.map((song) => {
    const idx = Math.floor(Math.random() * song.cuesheet.tracks.length)
    song.start_at_ms = song.cuesheet.tracks[idx].start_time
    return song
  })
}

/**
 * Fetches active song by ID and calls appropriate callbacks.
 * @param params - Object containing songID, onSuccess, and onNotFound callbacks.
 * (Original: $$l3)
 */
export async function fetchActiveSong({
  songID,
  onSuccess,
  onNotFound,
}: {
  songID: string
  onSuccess: () => void
  onNotFound: () => void
}): Promise<unknown> {
  try {
    await songAPIHandler.getActive({ songID })
    onSuccess()
  }
  catch (err: any) {
    if (err.status === 404) {
      onNotFound()
      return
    }
    console.warn(`Failed to fetch active song with id ${songID}: ${err}`)
    onNotFound()
    return err
  }
}

// Media session actions
const mediaSessionActions = [
  'play',
  'pause',
  'previoustrack',
  'nexttrack',
  'seekbackward',
  'seekforward',
  'seekto',
  'stop',
] as MediaSessionAction[]

/**
 * Checks if mediaSession API is available and has metadata.
 * @returns True if available, false otherwise.
 * (Original: $$c5)
 */
export function hasMediaSessionMetadata(): boolean {
  return 'mediaSession' in navigator && !!navigator.mediaSession.metadata
}

/**
 * Sets up media session metadata and action handlers.
 * @param song - Song object with title and album_art.
 * @param onStop - Optional callback for stop action.
 * (Original: $$u0)
 */
export function setupMediaSession(
  song?: { title?: string, album_art?: string },
  onStop?: () => void,
): void {
  if (!song)
    return
  const { title, album_art } = song
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = new window.MediaMetadata({
      title,
      artist: 'FigJam Music',
      artwork: [{ src: album_art || '' }],
    })
    for (const action of mediaSessionActions) {
      try {
        navigator.mediaSession.setActionHandler(action, () => {})
      }
      catch {
        console.warn(
          `Attempting to stub out all action handlers for media session, but the media session action '${action}' is not supported`,
        )
      }
    }
    if (onStop) {
      navigator.mediaSession.setActionHandler('stop', onStop)
    }
  }
}

/**
 * Clears media session metadata and action handlers.
 * (Original: $$p1)
 */
export function clearMediaSession(): void {
  if ('mediaSession' in navigator) {
    navigator.mediaSession.metadata = null
    for (const action of mediaSessionActions) {
      try {
        navigator.mediaSession.setActionHandler(action, null)
      }
      catch {
        console.warn(
          `Attempting to null all custom action handlers for media session, but the media session action '${action}' is not supported`,
        )
      }
    }
    navigator.mediaSession.setActionHandler('play', () => {})
  }
}

/**
 * Removes play action handler from media session.
 * (Original: $$_8)
 */
export function removePlayActionHandler(): void {
  navigator.mediaSession.setActionHandler('play', null)
}

// Exported names refactored for clarity
export const $_ = setupMediaSession
export const I8 = clearMediaSession
export const P0 = randomizeSongStartTimes
export const _s = fetchActiveSong
export const b2 = areSongArraysEqual
export const c4 = hasMediaSessionMetadata
export const eB = isSameSong
export const nz = isStale
export const om = removePlayActionHandler
