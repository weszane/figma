import type { ThumbnailGenerator } from '../435722'
import { Et } from '../125019'
import { thumbnailGenerator } from '../435722'
import { NfO } from '../../figma_app/763686'
/**
 * VideoStore - Manages private video cache, thumbnail generation, and SHA1-based video management.
 * Handles video bytes loading, thumbnail extraction, and resource cleanup.
 */
export class VideoStore {
  private thumbnailGenerator: ThumbnailGenerator
  private hashToPrivateVideo: Map<string, {
    sha1: string
  }>

  private hashToCoverImageHash: Map<string, string>
  private hashToCoverThumbnailImageHash: Map<string, string>

  constructor() {
    this.thumbnailGenerator = thumbnailGenerator
    this.hashToPrivateVideo = new Map()
    this.hashToCoverImageHash = new Map()
    this.hashToCoverThumbnailImageHash = new Map()
  }

  /**
   * Asynchronously creates a video from bytes, validates, generates thumbnail, and stores hashes.
   * @param videoBytes - The video data as an ArrayBuffer or TypedArray.
   * @returns Promise resolving to the private video object.
   */
  async createVideoAsync(videoBytes: ArrayBuffer | Uint8Array): Promise<{
    sha1: string
  }> {
    const uint8Array = new Uint8Array(videoBytes)
    NfO.isVideoValid(uint8Array)
    const hash = Et(uint8Array)
    const videoObj = this.thumbnailGenerator.createVideo()
    try {
      await this.thumbnailGenerator.loadVideo(uint8Array, videoObj)
      const {
        coverHash,
        coverThumbnailHash,
      } = NfO.uploadVideo(uint8Array, videoObj)
      this.hashToCoverImageHash.set(hash, coverHash)
      this.hashToCoverThumbnailImageHash.set(hash, coverThumbnailHash)
      return this.getOrCreatePrivateVideo(hash)
    }
    catch {
      throw new Error('Unable to generate a thumbnail for video')
    }
  }

  /**
   * Retrieves or creates a private video entry by SHA1 hash.
   * @param hash - The SHA1 hash of the video.
   * @returns The private video object.
   */
  getOrCreatePrivateVideo(hash: string): {
    sha1: string
  } {
    let video = this.hashToPrivateVideo.get(hash)
    if (!video) {
      video = {
        sha1: hash,
      }
      this.hashToPrivateVideo.set(hash, video)
    }
    return video
  }

  /**
   * Gets the cover image hash for a video.
   * @param hash - The SHA1 hash of the video.
   * @returns The cover image hash string, or empty string if not found.
   */
  getThumbnailImageForVideo(hash: string): string {
    return this.hashToCoverImageHash.get(hash) || ''
  }

  /**
   * Retrieves a private video by hash or throws if not found.
   * @param hash - The SHA1 hash of the video.
   * @returns The private video object.
   * @throws Error if the video does not exist.
   */
  getPrivateVideoOrThrow(hash: string): {
    sha1: string
  } {
    const video = this.hashToPrivateVideo.get(hash)
    if (!video) {
      throw new Error('SHA1 hash does not correspond to an existing video')
    }
    return video
  }

  /**
   * Cleans up all video resources and resets internal maps.
   */
  tearDown(): void {
    this.hashToPrivateVideo = new Map()
    this.hashToCoverImageHash = new Map()
    this.hashToCoverThumbnailImageHash = new Map()
  }
}
