/**
 * Loads the video.js library asynchronously.
 * @returns An object containing the videoJs module.
 * @originalName $$n0
 */
export async function loadVideoJs() {
  return {
    videoJs: await import('video.js').then(module => module.default || module),
  }
}

/**
 * Custom error class for video player errors.
 * @originalName $$r1
 */
export class VideoPlayerError extends Error {}

/**
 * Loads a video source into the player and handles metadata/error events.
 * @param src - The video source URL.
 * @param isHls - Whether the source is HLS (true) or MP4 (false).
 * @param player - The video.js player instance.
 * @returns Promise that resolves when metadata is loaded or rejects on error.
 * @originalName $$a2
 */
export function loadVideoSource(
  src: string | undefined,
  isHls: boolean,
  player: any,
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!src) {
      reject(new VideoPlayerError('Missing video src'))
      return
    }
    if (!player) {
      reject(new VideoPlayerError('Invalid video player'))
      return
    }
    player.one('loadedmetadata', resolve)
    player.one('error', () => {
      const err = player.error()
      reject(
        new VideoPlayerError(
          err ? `(${err.code}) ${err.message}` : undefined,
        ),
      )
    })
    player.src({
      type: isHls ? 'application/x-mpegURL' : 'video/mp4',
      src,
    })
  })
}

// Refactored exports for clarity and traceability
export const Fe = loadVideoJs // $$n0
export const aB = VideoPlayerError // $$r1
export const uz = loadVideoSource // $$a2
