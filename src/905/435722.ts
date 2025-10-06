/**
 * VideoManager handles creation, deletion, and manipulation of video elements.
 */
export interface VideoMap {
  [id: number]: HTMLVideoElement;
}

/**
 * VideoManager class manages video elements and provides utility methods.
 */
export class ThumbnailGenerator {
  videos: VideoMap;
  nextVideoID: number;

  constructor() {
    this.videos = {};
    this.nextVideoID = 0;
  }

  /**
   * Creates a new video element and returns its unique ID.
   * @returns {number} Video ID
   */
  createVideo(): number {
    const id = this.nextVideoID++;
    const video = document.createElement("video");
    video.preload = "auto";
    this.videos[id] = video;
    return id;
  }

  /**
   * Deletes a video element by its ID.
   * @param {number} id - Video ID
   */
  deleteVideo(id: number): void {
    const video = this.videos[id];
    if (video) {
      video.remove();
      URL.revokeObjectURL(video.src);
      delete this.videos[id];
    }
  }

  /**
   * Gets the width of the video element.
   * @param {number} id - Video ID
   * @returns {number} Video width
   */
  getWidth(id: number): number {
    return this.videos[id]?.videoWidth ?? 0;
  }

  /**
   * Gets the height of the video element.
   * @param {number} id - Video ID
   * @returns {number} Video height
   */
  getHeight(id: number): number {
    return this.videos[id]?.videoHeight ?? 0;
  }

  /**
   * Generates a cover image (as Uint8Array) from the video element.
   * @param {number} id - Video ID
   * @returns {Uint8Array} Cover image data
   */
  getCoverImage(id: number): Uint8Array {
    const video = this.videos[id];
    if (!video) return new Uint8Array();

    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) return new Uint8Array();

    const canvas = ctx.canvas;
    canvas.width = this.getWidth(id);
    canvas.height = this.getHeight(id);

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return new Uint8Array(ctx.getImageData(0, 0, canvas.width, canvas.height).data.buffer);
  }

  /**
   * Loads video data into the video element and resolves when loaded.
   * @param {ArrayBuffer | ArrayBufferView} data - Video data
   * @param {number} id - Video ID
   * @param {string} [mimeType] - Optional MIME type
   * @returns {Promise<number>} Resolves with video height or rejects with error message
   */
  loadVideo(
    data: Uint8Array<ArrayBuffer>,
    id: number,
    mimeType?: string
  ): Promise<number> {
    return new Promise((resolve, reject) => {
      const video = this.videos[id];
      if (!video) {
        reject("Video element not found");
        return;
      }
      const blob = mimeType ? new Blob([data], { type: mimeType }) : new Blob([data]);

      const listeners: Record<string, EventListener> = {
        error: (e: Event) => {
          reject((e as ErrorEvent).message);
          cleanup();
        },
        loadeddata: () => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              if (video.videoWidth === 0 || video.videoHeight === 0) {
                reject("Video load failed during thumbnail generation: video has no dimensions");
              } else {
                resolve(video.videoHeight);
              }
              cleanup();
            });
          });
        }
      };
      function cleanup() {
        Object.entries(listeners).forEach(([event, handler]) => {
          video.removeEventListener(event, handler as EventListener);
        });
      };
      Object.entries(listeners).forEach(([event, handler]) => {
        video.addEventListener(event, handler);
      });
      video.src = URL.createObjectURL(blob);
      video.currentTime = 0;
      video.load();
      setTimeout(() => {
        reject("Video load timeout during thumbnail generation");
        cleanup();
      }, 10000);
    });
  }
}

// Exported instance for compatibility with original $$n0
export const thumbnailGenerator = new ThumbnailGenerator(); // $$n0

// Exported alias for compatibility with original 't'
export const t = thumbnailGenerator;
