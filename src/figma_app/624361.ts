import { read } from 'ktx-parse';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { trackEventAnalytics } from '../905/449184';
import { c as _$$c } from '../905/499575';
import { getFeatureFlags } from '../905/601108';
import { logError, logInfo, logWarning } from '../905/714362';
import { createDeferredPromise } from '../905/874553';
import { sendWithRetry, XHRError } from '../905/910117';
import { debounce } from '../905/915765';
import { buildStaticUrl } from '../figma_app/169182';
import { imageProcessor, MAX_CANVAS_SIZE } from '../figma_app/291892';
import { fullscreenValue } from '../figma_app/455680';
import { sendImagePasteError } from '../figma_app/553184';
import { documentStateTsApi, ImageCppBindings, ImageExportType, UploadStatus } from '../figma_app/763686';

// KTX texture header constant (original: E)
const KTX_HEADER = new Uint8Array([171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10]).toString();

/**
 * Downloads images in batch from S3 URLs
 * @param imageHashes - Array of SHA1 hashes for images to download (original: e)
 * @param fileInfo - File information containing fileKey or hubFileId (original: t)
 * @param maxSize - Maximum size for image downloads (original: r)
 * @param needsCompressedTextures - Whether compressed textures are needed (original: n)
 * @returns Promise with S3 URLs for images and compressed textures
 * Original function name: batchDownloadImages
 */
export async function batchDownloadImages(imageHashes, fileInfo, maxSize, needsCompressedTextures) {
  const endpoint = fileInfo.type === 'figFile' ? `/file/${fileInfo.fileKey}/image/batch` : `/community/file/${fileInfo.hubFileId}/image/batch`;
  try {
    const response = await sendWithRetry.post(endpoint, {
      sha1s: imageHashes,
      max_size: maxSize,
      needs_compressed_textures: needsCompressedTextures
    }, {
      retryCount: 1 / 0
    });
    if (response.status !== 200 || response.data.error) throw new Error('api error while resolving images');
    return {
      s3_urls: response.data.meta.s3_urls,
      compressed_texture_s3_urls: response.data.meta.compressed_texture_s3_urls
    };
  } catch (error) {
    console.warn(`Couldn't download image(s) with hashes ${imageHashes}`);
    return error;
  }
}

/**
 * Error thrown when an image is missing from storage
 * Original class name: T
 */
class ImageMissingError extends Error {
  constructor(message = 'IMAGE_MISSING') {
    super(message);
    Object.setPrototypeOf(this, ImageMissingError.prototype);
  }
}

/**
 * Error thrown when a file key is missing
 * Original class name: I
 */
class FileKeyMissingError extends Error {
  constructor(message = 'FILE_KEY_MISSING') {
    super(message);
    Object.setPrototypeOf(this, FileKeyMissingError.prototype);
  }
}

/**
 * Error thrown when an image URL has expired
 * Original class name: S
 */
class ImageExpiredError extends Error {
  constructor(message = 'IMAGE_EXPIRED') {
    super(message);
    Object.setPrototypeOf(this, ImageExpiredError.prototype);
  }
}

/**
 * Enum representing different states of image processing
 * Original enum name: v
 */
enum ImageState {
  AWAITING_SINATRA_LOOKUP = 0,
  LOOKUP = 1,
  AWAITING_COMPRESSED_TEXTURE_AVAILABILITY_LOOKUP = 2,
  LOOKING_UPCOMPRESSED_TEXTURE_AVAILABILITY = 3,
  UPLOADING = 4,
  READY = 5,
  MISSING = 6,
  FAILED = 7,
  PRESENT = 8,
}

/**
 * Represents an image with download and processing capabilities
 * Original class name: A
 */
class ImageDownloadItem {
  static MAX_PRIORITY = Number.MAX_SAFE_INTEGER;
  hash: string;
  private _priority: number;
  compressedTextureS3Path: string | null = null;
  shouldDownloadCompressedTexture: boolean | null = null;
  retries: number = 0;
  state: ImageState = ImageState.AWAITING_SINATRA_LOOKUP;
  s3Path?: string;
  retryTime?: number;
  private _downloadPromise: Promise<Uint8Array<any>> | null = null;
  private _imageIsReady: () => void = () => { };
  private _readyPromise: Promise<void>;
  constructor(hash: string, priority: number) {
    this.hash = hash;
    this._priority = priority;
    this._readyPromise = new Promise(resolve => {
      this._imageIsReady = resolve;
    });
  }
  set priority(newPriority: number) {
    if (this._priority !== ImageDownloadItem.MAX_PRIORITY) {
      this._priority = newPriority;
    }
  }
  get priority(): number {
    return this._priority;
  }
  imageIsReady(): void {
    this._imageIsReady();
  }
  readyPromise(): Promise<void> {
    return this._readyPromise;
  }
  isExpired(): boolean {
    if (!this.s3Path) return false;
    let expiresParam: string | null = null;
    try {
      expiresParam = new URL(this.s3Path).searchParams.get('Expires');
      if (!expiresParam) return false;
      const expiresTime = parseInt(expiresParam, 10);
      return expiresTime < Date.now() / 1000;
    } catch {
      return false;
    }
  }
  downloadFromS3(): Promise<Uint8Array<any>> {
    // Early validation with guard clauses
    if (!this.shouldDownloadCompressedTexture && this.s3Path == null) {
      throw new Error('Called downloadFromS3 without s3Path');
    }
    if (this.shouldDownloadCompressedTexture && this.compressedTextureS3Path == null) {
      throw new Error('Called downloadFromS3 without compressedTextureS3Path when downloading compressed texture');
    }
    const url = this.shouldDownloadCompressedTexture ? this.compressedTextureS3Path : this.s3Path;
    return sendWithRetry.crossOriginGetAny(url, null, {
      responseType: 'arraybuffer'
    }).then(response => response.data).catch(error => {
      if (this.isExpired()) {
        throw new ImageExpiredError();
      }
      if (error.status !== 0 && error.status < 500) {
        const errorMessage = this.s3Path?.includes('resize') ? 'Can\'t load image! Make sure Pixie service is running locally' : 'Image is missing from S3!';
        logError('image', errorMessage, {
          hash: this.hash,
          status: error.status
        });
        reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error('Image missing from S3'));
      }
      throw error;
    });
  }
  download(_maxSize?: number) {
    if (!this._downloadPromise) {
      const downloadPromise = this.downloadFromS3();
      downloadPromise.finally(() => {
        this._downloadPromise = null;
      }).catch(() => { });
      this._downloadPromise = downloadPromise;
    }
    return this._downloadPromise;
  }
}

/**
 * Priority queue for managing image downloads
 * Original class name: x
 */
class ImageDownloadQueue {
  private queue: ImageDownloadItem[] = [];
  private byHash = new Map<string, ImageDownloadItem>();
  private needsSort = false;
  get length(): number {
    return this.queue.length;
  }
  ensureSorted(): void {
    if (this.needsSort) {
      this.queue.sort((a, b) => b.priority - a.priority);
      this.needsSort = false;
    }
  }
  numEligible(minPriority: number): number {
    this.ensureSorted();
    const index = this.queue.findIndex(item => item.priority < minPriority);
    return index < 0 ? this.queue.length : index;
  }
  push(...items: ImageDownloadItem[]): void {
    this.queue.push(...items);
    for (const item of items) {
      this.byHash.set(item.hash, item);
    }
    this.needsSort = true;
  }
  updatePriority(hash: string, priority: number): boolean {
    const item = this.byHash.get(hash);
    if (item != null) {
      item.priority = priority;
      this.needsSort = true;
      return true;
    }
    return false;
  }
  pop(minPriority: number): {
    found: true;
    image: ImageDownloadItem;
  } | {
    found: false;
    retryDelay: number;
  } | null {
    this.ensureSorted();
    if (this.queue.length === 0 || this.queue[0].priority < minPriority) return null;
    const currentTime = Date.now();
    let minRetryTime = Infinity;
    for (let i = 0; i < this.queue.length; i++) {
      const retryTime = this.queue[i].retryTime;
      if (retryTime == null || currentTime >= retryTime) {
        const [item] = this.queue.splice(i, 1);
        this.byHash.delete(item.hash);
        return {
          found: true,
          image: item
        };
      }
      minRetryTime = retryTime < minRetryTime ? retryTime : minRetryTime;
    }
    return {
      found: false,
      retryDelay: minRetryTime - currentTime
    };
  }
  find(hash: string): ImageDownloadItem | null {
    return this.byHash.get(hash) ?? null;
  }
  erase(hash: string): void {
    const item = this.byHash.get(hash);
    if (item) {
      this.byHash.delete(hash);
      const index = this.queue.findIndex(queueItem => queueItem === item);
      if (index >= 0) {
        this.queue.splice(index, 1);
      }
    }
  }
  debugString(): string {
    return this.queue.map(item => `${item.hash}(${item.priority})`).join(',');
  }
}

/**
 * Gets the open file promise
 * Original function name: N
 */
function getOpenFilePromise() {
  return fullscreenValue.openFilePromise();
}

/**
 * Error thrown during compressed texture lookup operations
 * Original class name: C
 */
class CompressedTextureLookupError extends Error {
  lookupImages: string[];
  constructor(message: string, lookupImages: string[]) {
    super(message);
    this.lookupImages = lookupImages;
  }
}

/**
 * Main class for managing image downloads, uploads, and processing
 * Original class name: w
 */
class ImageManager {
  static _shouldUseCompressedTextures = false;
  pendingPasteRequests: Record<string, Promise<void>> = {};
  pendingImagesToRecord: Record<string, string[]> = {};
  pendingRecordImagesTasks: Record<string, {
    promise: Promise<void>;
    resolve: () => void;
    reject: (reason?: any) => void;
  }> = {};
  pendingImagesToRecordByLibraryKey: Record<string, string[]> = {};
  pendingRecordImagesTasksByLibraryKey: Record<string, {
    promise: Promise<void>;
    resolve: () => void;
    reject: (reason?: any) => void;
  }> = {};
  imagesNeedingDirectUpload = new Set<string>();
  imageTimingLog = new Map<string, any>();
  readonly MAX_REQUESTS = 3;
  readonly SINATRA_BATCH_SIZE = 100;
  readonly LOGGING_RATE = 0.1;
  verbose: boolean;
  incomingImages = new Map<string, ImageDownloadItem>();
  pendingLookupCallback: number | null = null;
  downloadQueue = new ImageDownloadQueue();
  minPriority = 0;
  downloadsPaused = false;
  allImages = new Map<string, ImageDownloadItem>();
  pendingDecodes = new Set<string>();
  pendingDownloads = new Set<string>();
  cancelDownloads = new Set<string>();
  alreadyDownloaded = new Set<string>();
  pendingUploads = new Set<string>();
  uploadedImagesNeedingUrl = new Set<string>();
  pendingImagesCallback: ((count: number) => void) | null = null;
  imageQueueEmpty: any = null;
  incomingImagesLookedUp: any = null;
  allImagesUploaded: any = null;
  progressCallbacks: ((count: number) => void)[] = [];
  imageMaxSize: number | undefined = undefined;
  compressedTextureLookupQueue: string[] = [];
  compressedTextureRetryCount = new Map<string, number>();
  constructor() {
    this.verbose = getFeatureFlags().image_verbose;
  }

  /**
   * Flushes pending record images with debouncing
   * Original: flushPendingRecordImages debounced function
   */
  flushPendingRecordImages = debounce(async (isPlayground = false) => {
    const pendingByFileKey = this.pendingImagesToRecord;
    const tasksByFileKey = this.pendingRecordImagesTasks;
    const pendingByLibraryKey = this.pendingImagesToRecordByLibraryKey;
    const tasksByLibraryKey = this.pendingRecordImagesTasksByLibraryKey;
    const fileKeys = Object.keys(pendingByFileKey);
    const libraryKeys = Object.keys(pendingByLibraryKey);
    type ProcessItem = {
      fileKey: string;
      type: 'fileKey';
    } | {
      libraryKey: string;
      type: 'libraryKey';
    };
    const itemsToProcess: ProcessItem[] = [...fileKeys.map(key => ({
      fileKey: key,
      type: 'fileKey' as const
    })), ...libraryKeys.map(key => ({
      libraryKey: key,
      type: 'libraryKey' as const
    }))];
    this.pendingImagesToRecord = {};
    this.pendingRecordImagesTasks = {};
    this.pendingImagesToRecordByLibraryKey = {};
    this.pendingRecordImagesTasksByLibraryKey = {};
    const editingFileKey = await this.getEditingFileKey();
    itemsToProcess.forEach(async item => {
      if (item.type === 'fileKey' && editingFileKey === item.fileKey) {
        tasksByFileKey[item.fileKey].resolve();
        return;
      }
      if (item.type === 'fileKey' && !item.fileKey) {
        tasksByFileKey[item.fileKey].reject('Invalid originFileKey');
        return;
      }
      let backoff = 1;
      const imageHashes = item.type === 'fileKey' ? pendingByFileKey[item.fileKey] : pendingByLibraryKey[item.libraryKey];
      for (; ;) {
        try {
          const response = await sendWithRetry.put(`/api/files/${editingFileKey}`, {
            image_sha1s: [...new Set(imageHashes)],
            image_origin_file_key: item.type === 'fileKey' ? item.fileKey : undefined,
            image_origin_library_key: item.type === 'libraryKey' ? item.libraryKey : undefined,
            is_playground: isPlayground
          });
          const {
            success,
            failed
          } = ImageManager.parseFileUpdateResponseForImages(imageHashes, response);
          ImageCppBindings.imagePermissionsCopied(success);
          for (const hash of failed) {
            this.markImageMissing(hash);
          }
          if (failed.length > 0) {
            trackEventAnalytics('image_permission_copy_failed', {
              shas: failed.join(',')
            });
          }
          for (const hash of imageHashes) {
            delete this.pendingPasteRequests[hash];
          }
          if (item.type === 'fileKey') {
            tasksByFileKey[item.fileKey].resolve();
          } else {
            tasksByLibraryKey[item.libraryKey].resolve();
          }
          return;
        } catch (error: any) {
          if (error.status >= 400 && error.status < 500) {
            sendImagePasteError();
            trackEventAnalytics('image_permission_copy_failed', {
              shas: imageHashes.join(',')
            });
            for (const hash of imageHashes) {
              this.markImageMissing(hash);
              delete this.pendingPasteRequests[hash];
            }
            const task = item.type === 'fileKey' ? tasksByFileKey[item.fileKey] : tasksByLibraryKey[item.libraryKey];
            task.reject(`4xx error when pasting images ${error}`);
            return;
          }
        }
        const delay = 1000 * backoff * Math.random();
        await new Promise(resolve => setTimeout(resolve, delay));
        backoff = Math.min(2 * backoff, 64);
      }
    });
  }, 100);
  static shouldUseCompressedTextures(): boolean {
    return ImageManager._shouldUseCompressedTextures;
  }
  getEditingFileKey() {
    return fullscreenValue.openFileKeyPromise();
  }
  getOrCreateImageLogData(hash: string) {
    let logData = this.imageTimingLog.get(hash);
    if (!logData) {
      logData = {};
      this.imageTimingLog.set(hash, logData);
    }
    return logData;
  }
  static parseFileUpdateResponseForImages(imageHashes: string[], response: any) {
    try {
      if (response?.data?.meta?.missing_shas) {
        const missingShas = new Set(response.data.meta.missing_shas);
        return {
          success: imageHashes.filter(hash => !missingShas.has(hash)),
          failed: Array.from(missingShas)
        };
      }
    } catch { }
    return {
      success: imageHashes,
      failed: []
    };
  }
  recordImagesFromLibraryKey(libraryKey: string, imageHashes: string[], isPlayground = false): Promise<void> {
    if (imageHashes.length === 0) return Promise.resolve();
    if (!libraryKey) return Promise.reject(new Error('No originLibraryKey specified'));
    this.pendingImagesToRecordByLibraryKey[libraryKey] ??= [];
    this.pendingImagesToRecordByLibraryKey[libraryKey].push(...imageHashes);
    if (!this.pendingRecordImagesTasksByLibraryKey[libraryKey]) {
      let resolve: () => void;
      let reject: (reason?: any) => void;
      const promise = new Promise<void>((res, rej) => {
        resolve = res;
        reject = rej;
      });
      this.pendingRecordImagesTasksByLibraryKey[libraryKey] = {
        promise,
        resolve: resolve!,
        reject: reject!
      };
    }
    for (const hash of imageHashes) this.pendingPasteRequests[hash] = this.pendingRecordImagesTasksByLibraryKey[libraryKey].promise;
    const resultPromise = this.pendingRecordImagesTasksByLibraryKey[libraryKey].promise;
    this.flushPendingRecordImages(isPlayground);
    return resultPromise;
  }

  /**
   * Records images for a given file key, handling permission copying and debounced flush.
   * Original function name: recordImages
   * @param fileKey - The origin file key
   * @param imageHashes - Array of image SHA1 hashes
   * @returns Promise<void> that resolves when images are recorded
   */
  recordImages(fileKey: string, imageHashes: string[]): Promise<void> {
    if (imageHashes.length === 0) {
      return Promise.resolve();
    }
    if (!fileKey) {
      return Promise.reject(new Error('No originFileKey specified'));
    }

    // Initialize pending images array for the fileKey if not present
    this.pendingImagesToRecord[fileKey] ??= [];
    this.pendingImagesToRecord[fileKey].push(...imageHashes);

    // Create a deferred promise for this fileKey if not present
    if (!this.pendingRecordImagesTasks[fileKey]) {
      let resolve: () => void;
      let reject: (reason?: any) => void;
      const promise = new Promise<void>((res, rej) => {
        resolve = res;
        reject = rej;
      });
      this.pendingRecordImagesTasks[fileKey] = {
        promise,
        resolve: resolve!,
        reject: reject!
      };
    }

    // Associate each image hash with the pending promise
    for (const hash of imageHashes) {
      this.pendingPasteRequests[hash] = this.pendingRecordImagesTasks[fileKey].promise;
    }

    // Trigger debounced flush
    this.flushPendingRecordImages();
    return this.pendingRecordImagesTasks[fileKey].promise;
  }
  async resolveImageUrls(t) {
    let r = await getOpenFilePromise();
    let n = await batchDownloadImages(t, r, this.imageMaxSize, ImageManager.shouldUseCompressedTextures());
    let i = t.filter(e => !(e in n.s3_urls));
    if (i.length > 0) {
      let t = await fullscreenValue.sourceFileKeyPromise();
      if (t) {
        let r = await batchDownloadImages(i, {
          type: 'figFile',
          fileKey: t
        }, void 0, ImageManager.shouldUseCompressedTextures());
        return {
          s3_urls: {
            ...n.s3_urls,
            ...r.s3_urls
          },
          compressed_texture_s3_urls: {
            ...n.compressed_texture_s3_urls,
            ...r.compressed_texture_s3_urls
          }
        };
      }
    }
    return {
      s3_urls: n.s3_urls,
      compressed_texture_s3_urls: n.compressed_texture_s3_urls
    };
  }
  queueImageForLookup(e) {
    let t = e.hash;
    this.verbose && logInfo('image', 'incoming', {
      hash: t
    });
    e.state = 0;
    this.incomingImages.set(t, e);
    this.pendingLookupCallback == null && (this.pendingLookupCallback = setTimeout(() => {
      this.pendingLookupCallback = null;
      this.lookupImages().catch(e => reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, e));
    }, 0));
  }
  setExternalSource(e, t) {
    let r = new ImageDownloadItem(e, ImageDownloadItem.MAX_PRIORITY);
    r.s3Path = t;
    this.allImages.set(e, r);
    this.downloadQueue.push(r);
    this.imagesNeedingDirectUpload.add(e);
    this.maybeDownloadMoreImages();
  }

  /**
   * Triggers a batch lookup for compressed texture availability.
   * Original function name: triggerCompressedTextureAvailabilityLookup
   * @param hash - The image hash to check
   * @param fileKey - The file key for the lookup
   */
  triggerCompressedTextureAvailabilityLookup(hash: string, fileKey: string): void {
    const imageItem = this.allImages.get(hash);
    if (!imageItem || imageItem.state !== ImageState.AWAITING_COMPRESSED_TEXTURE_AVAILABILITY_LOOKUP) {
      return;
    }
    const batchHashes = this.compressedTextureLookupQueue.splice(0, this.SINATRA_BATCH_SIZE);
    if (batchHashes.length === 0) {
      return;
    }
    batchHashes.forEach(h => this.markImageLookingUpCompressedTextureAvailability(h));
    sendWithRetry.post(`/file/${fileKey}/compressed_texture_available/batch`, {
      sha1s: batchHashes
    }).then(response => {
      if (!response) return;
      const results = response.data.meta.results;
      Object.keys(results).forEach(hashKey => {
        this.resolveCompressedTextureAvailabilityLookup(hashKey, fileKey, results[hashKey]);
      });
    }).catch(error => {
      const lookupError = new CompressedTextureLookupError(error.message, batchHashes);
      for (const failedHash of lookupError.lookupImages) {
        this.resolveCompressedTextureAvailabilityLookup(failedHash, fileKey, null);
      }
    });
  }
  resolveCompressedTextureAvailabilityLookup(e, t, r) {
    let n = this.allImages.get(e);
    let i = this.compressedTextureRetryCount.get(e) || 0;
    if (r === 'generating' && i < 20) {
      let r = 500 * (1 << Math.min(i, 4));
      this.compressedTextureLookupQueue.push(e);
      this.markImageNeedsCompressedTextureAvailabilityLookup(e);
      this.compressedTextureRetryCount.set(e, i + 1);
      setTimeout(() => this.enqueueImageToCheckCompressedTextureAvailability(e, t), r);
    } else {
      this.markImagePresent(e);
      this.downloadQueue.push(n);
      let t = this.getOrCreateImageLogData(e);
      t.compressedTextureRetryCount = i;
      t.compressedTextureResult = r;
      switch (r) {
        case 'generated':
          n.shouldDownloadCompressedTexture = !0;
          break;
        case 'failed':
        case null:
        case 'generating':
          this.compressedTextureRetryCount.delete(e);
          n.shouldDownloadCompressedTexture = !1;
      }
      this.maybeDownloadMoreImages();
    }
  }
  enqueueImageToCheckCompressedTextureAvailability(e, t) {
    setTimeout(() => {
      this.triggerCompressedTextureAvailabilityLookup(e, t);
    }, 0);
  }
  setImageDownloadPriority(e, t) {
    let r = this.getOrCreateImageLogData(e);
    r.downloadPriority = t;
    r.downloadPriorityTimestamp = performance.now();
    if (!e) {
      logWarning('setImageDownloadPriority', 'invalid hash');
      return;
    }
    let n = this.allImages.get(e);
    if (n == null) {
      n = new ImageDownloadItem(e, t);
      this.allImages.set(e, n);
      this.queueImageForLookup(n);
      return;
    }
    n.state === 4 && logError('image', 'Got download request for currently uploading image', {
      hash: e
    }, {
      reportAsSentryError: !0
    });
    n.priority = t;
    this.downloadQueue.updatePriority(e, t) && this.maybeDownloadMoreImages();
  }
  setMinimumImagePriority(e) {
    this.minPriority = e;
    this.maybeDownloadMoreImages();
  }
  pauseImageDownloads() {
    this.downloadsPaused = !0;
  }
  resumeImageDownloads() {
    this.downloadsPaused = !1;
    this.maybeDownloadMoreImages();
  }

  /**
   * Attempts to download more images if possible, respecting max requests and paused state.
   * Original function name: maybeDownloadMoreImages
   */
  maybeDownloadMoreImages(): void {
    // Download images while under MAX_REQUESTS, queue not empty, and not paused
    while (this.pendingDownloads.size < this.MAX_REQUESTS && this.downloadQueue.length > 0 && !this.downloadsPaused) {
      const queueResult = this.downloadQueue.pop(this.minPriority);
      if (!queueResult) break;
      if (queueResult.found === false) {
        const {
          retryDelay
        } = queueResult;
        if (!Number.isFinite(retryDelay) || retryDelay <= 0) {
          reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error('Logic error in download queue, cannot compute next retry'));
        } else {
          setTimeout(() => this.maybeDownloadMoreImages(), retryDelay);
        }
        break;
      }
      const imageItem = (queueResult as {
        found: true;
        image: ImageDownloadItem;
      }).image;
      const logData = this.getOrCreateImageLogData(imageItem.hash);
      if (imageItem.hash) {
        if (this.verbose) {
          logInfo('image', 'download start', {
            hash: imageItem.hash,
            ok: !this.pendingDownloads.has(imageItem.hash)
          });
        }
        logData.downloadStartedTimestamp = performance.now();
        this.pendingDownloads.add(imageItem.hash);
      }
      imageItem.download(this.imageMaxSize).then(data => {
        // If download was cancelled, exit early
        if (this.cancelDownloads.delete(imageItem.hash)) return;
        if (this.verbose) {
          logInfo('image', 'download done', {
            hash: imageItem.hash,
            ok: !this.alreadyDownloaded.has(imageItem.hash)
          });
          this.getOrCreateImageLogData(imageItem.hash).downloadFinishedTimestamp = performance.now();
        }
        this.alreadyDownloaded.add(imageItem.hash);
        let textureMeta: {
          width: number;
          height: number;
        } | null = null;
        if (this.imagesNeedingDirectUpload.has(imageItem.hash)) {
          ImageCppBindings.imageDownloadedForPaste(imageItem.hash, data);
          this.imagesNeedingDirectUpload.delete(imageItem.hash);
        } else {
          let imageData = data;
          if (ImageManager.shouldUseCompressedTextures() && data.slice(0, 12).toString() === KTX_HEADER) {
            const ktx = read(data);
            textureMeta = {
              width: ktx.pixelWidth,
              height: ktx.pixelHeight
            };
            ImageCppBindings.setCompressedTextureMetadata(imageItem.hash, textureMeta);
            imageData = ktx.levels[0].levelData;
            this.clearImageDecodePending(imageItem.hash, true);
          }
          ImageCppBindings.imageDownloaded(imageItem.hash, imageData);
        }
        if (!textureMeta && !this.pendingDecodes.has(imageItem.hash)) {
          logWarning('ImageManager', 'missing pending decode after download', {
            hash: imageItem.hash
          });
          reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error('missing pending decode after image marked as downloaded'));
          imageItem.imageIsReady();
        }
      }).catch(error => {
        // Remove from pending decodes if present
        if (this.pendingDecodes.delete(imageItem.hash)) {
          this.maybeResolveImageQueueEmptyAndPendingImages();
        }
        // If download was cancelled, exit early
        if (this.cancelDownloads.delete(imageItem.hash)) return;
        if (error instanceof ImageMissingError) {
          this.markImageMissing(imageItem.hash);
        } else if (error instanceof FileKeyMissingError) {
          reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, error);
          this.markImageFailed(imageItem.hash);
        } else if (error instanceof ImageExpiredError) {
          this.queueImageForLookup(imageItem);
        } else {
          if (error instanceof XHRError && error.status === 403) {
            this.markImageFailed(imageItem.hash);
            return;
          }
          // Exponential backoff for retry
          let retryMs = 5000 * (1 << Math.min(imageItem.retries, 4));
          retryMs += retryMs * Math.random();
          imageItem.retries += 1;
          if (error.status === 429 || error.status === 503) {
            retryMs *= 4;
          }
          imageItem.retryTime = Date.now() + retryMs;
          this.downloadQueue.push(imageItem);
        }

        // Update log data with error info
        const logData = this.getOrCreateImageLogData(imageItem.hash);
        const imageRef = this.allImages.get(imageItem.hash);
        if (imageRef) {
          logData.decodedImageState = imageRef.state;
        }
        logData.errorOccurredTimestamp = performance.now();
      }).finally(() => {
        this.pendingDownloads.delete(imageItem.hash);
        this.maybeDownloadMoreImages();
      });
    }

    // Notify pending images callback and check for queue empty
    this.pendingImagesCallback?.(this.pendingImages);
    this.maybeResolveImageQueueEmptyAndPendingImages();
  }
  forceDownloadImage(e) {
    this.setImageDownloadPriority(e, ImageDownloadItem.MAX_PRIORITY);
  }
  setImageDecodePending(e) {
    this.verbose && logInfo('image', 'decode start', {
      hash: e,
      ok: !this.pendingDecodes.has(e)
    });
    this.getOrCreateImageLogData(e).downloadFinishedTimestamp = performance.now();
    this.pendingDecodes.add(e);
  }
  getSignedUrls(e) {
    let t = new Map();
    for (let r of e) {
      let e = this.allImages.get(r);
      e && e.s3Path && t.set(r, e.s3Path);
    }
    return t;
  }
  clearImageDecodePending(e, t) {
    this.verbose && logInfo('image', 'decode done', {
      hash: e,
      ok: this.pendingDecodes.has(e)
    });
    let r = this.getOrCreateImageLogData(e);
    r.decodeFinishedTimestamp = performance.now();
    this.pendingDecodes.delete(e) && this.maybeResolveImageQueueEmptyAndPendingImages();
    if (t) {
      this.markImageReady(e);
      r.decodedImageState = 5;
    } else {
      this.markImageFailed(e);
      r.decodedImageState = 7;
    }
    getFeatureFlags().image_log_timing && Math.random() < this.LOGGING_RATE && trackEventAnalytics('image_log_timing', {
      hash: e,
      ...r
    });
  }
  markImagePresent(e) {
    let t = this.allImages.get(e);
    if (t) {
      t.state = 8;
      ImageCppBindings.imageIsPresent(e);
    }
  }
  markImageMissing(e) {
    let t = this.allImages.get(e);
    if (t) {
      t.state = 6;
      ImageCppBindings.imageIsMissing(e);
      t.imageIsReady();
    }
  }
  markImageFailed(e) {
    let t = this.allImages.get(e);
    if (t) {
      t.state = 7;
      t.imageIsReady();
    }
  }
  markImageReady(e) {
    let t = this.allImages.get(e);
    if (t) {
      t.state = 5;
      t.imageIsReady();
    }
  }
  markImageNeedsCompressedTextureAvailabilityLookup(e) {
    let t = this.allImages.get(e);
    if (t) {
      t.state = 2;
      this.lookupCompressedTextureAvailabilities(e);
    }
  }
  markImageLookingUpCompressedTextureAvailability(e) {
    let t = this.allImages.get(e);
    t && (t.state = 3);
  }

  /**
   * Looks up incoming images, resolves their URLs, and updates their state.
   * Original function name: lookupImages
   */
  async lookupImages(): Promise<void> {
    // Collect images in AWAITING_SINATRA_LOOKUP state
    const lookupItems: ImageDownloadItem[] = [];
    for (const image of this.incomingImages.values()) {
      if (image.state === ImageState.AWAITING_SINATRA_LOOKUP) {
        lookupItems.push(image);
        image.state = ImageState.LOOKUP;
        this.verbose && logInfo('image', 'lookup', {
          hash: image.hash
        });
      }
    }
    try {
      // Process images in batches
      while (lookupItems.length > 0) {
        const batch = lookupItems.splice(0, this.SINATRA_BATCH_SIZE);

        // Await any pending paste requests for each image
        for (const image of batch) {
          const pastePromise = this.pendingPasteRequests[image.hash];
          if (pastePromise) {
            try {
              await pastePromise;
            } catch {
              logError('lookupImages', 'pastePromise failed', {
                hash: image.hash
              });
            }
          }
        }

        // Resolve S3 URLs for the batch
        const resolvedUrls = await this.resolveImageUrls(batch.map(img => img.hash));
        for (const image of batch) {
          const s3Url = resolvedUrls.s3_urls[image.hash];
          const compressedTextureUrl = ImageManager.shouldUseCompressedTextures() ? resolvedUrls.compressed_texture_s3_urls[image.hash] : null;
          if (s3Url) {
            image.s3Path = s3Url;
            if (compressedTextureUrl) {
              image.compressedTextureS3Path = compressedTextureUrl;
              this.compressedTextureLookupQueue.push(image.hash);
              this.markImageNeedsCompressedTextureAvailabilityLookup(image.hash);
              this.lookupCompressedTextureAvailabilities(image.hash);
            } else {
              this.markImagePresent(image.hash);
              this.downloadQueue.push(image);
            }
            this.verbose && logInfo('image', 'enqueued-batch', {
              hash: image.hash
            });
          } else {
            this.markImageMissing(image.hash);
            this.verbose && logInfo('image', 'missing', {
              hash: image.hash
            });
          }
          this.incomingImages.delete(image.hash);
        }
      }
    } finally {
      // Clean up any remaining images
      for (const image of lookupItems) {
        if (this.incomingImages.delete(image.hash)) {
          logWarning('image', 'incoming fallback delete', {
            hash: image.hash
          });
        }
      }
      if (this.incomingImagesLookedUp != null) {
        this.incomingImagesLookedUp.resolve();
      }
    }

    // Trigger downloads if not using compressed textures
    if (!ImageManager.shouldUseCompressedTextures()) {
      this.maybeDownloadMoreImages();
    }
  }
  lookupCompressedTextureAvailabilities(e) {
    getOpenFilePromise().then(t => {
      t.type === 'figFile' && this.enqueueImageToCheckCompressedTextureAvailability(e, t.fileKey);
    });
  }
  forgetImage(e) {
    if (this.imagesNeedingDirectUpload.has(e)) return;
    this.verbose && logInfo('image', 'forget', {
      hash: e
    });
    this.incomingImages.delete(e);
    this.downloadQueue.erase(e);
    this.pendingDownloads.has(e) && this.cancelDownloads.add(e);
    this.alreadyDownloaded.delete(e);
    this.pendingDecodes.delete(e);
    this.imageTimingLog.delete(e);
    this.maybeResolveImageQueueEmptyAndPendingImages();
    this.maybeResolveImagesLookedUp();
    let t = this.allImages.get(e);
    if (t) {
      this.allImages.delete(e);
      t.state !== 5 && ImageCppBindings.imageForgotten(e);
    }
  }
  getNumEligibleForDownload() {
    return this.downloadQueue.numEligible(this.minPriority);
  }

  /**
   * Returns the total number of pending images (incoming, eligible for download, downloading, decoding).
   * Original getter name: pendingImages
   */
  get pendingImages(): number {
    const eligible = this.getNumEligibleForDownload();
    this.verbose && logInfo('image', 'pendingImages', {
      incoming: this.incomingImages.size,
      eligible,
      downloads: this.pendingDownloads.size,
      decode: this.pendingDecodes.size
    });
    return this.incomingImages.size + eligible + this.pendingDownloads.size + this.pendingDecodes.size;
  }

  /**
   * Sets a callback to be invoked when the number of pending images changes.
   * Original function name: setPendingImagesCallback
   * @param callback - Function to call with the pending image count
   */
  setPendingImagesCallback(callback: (count: number) => void): void {
    this.pendingImagesCallback = callback;
  }

  /**
   * Returns a promise that resolves when the image queue is empty.
   * Original function name: imageQueueEmptyPromise
   */
  imageQueueEmptyPromise(): Promise<void> {
    if (!this.imageQueueEmpty) {
      const start = performance.now();
      this.imageQueueEmpty = createDeferredPromise();
      this.verbose && logInfo('image', 'queue empty defer installed', {
        start
      });
      this.imageQueueEmpty.promise.finally(() => {
        this.imageQueueEmpty = null;
        const elapsed = performance.now() - start;
        if (this.verbose) {
          logInfo('image', 'queue empty defer cleared', {
            start,
            elapsed
          });
        } else if (elapsed > 1e4) {
          logWarning('image', 'queue empty finished after a long time', {
            start,
            elapsed
          });
        }
      });
      this.emptyQueueCheck(this.imageQueueEmpty, start, 3e4);
    }
    const promise = this.imageQueueEmpty.promise;
    this.maybeResolveImageQueueEmptyAndPendingImages();
    return promise;
  }

  /**
   * Returns a promise that resolves when all incoming images have been looked up.
   * Original function name: imageLookupPromise
   */
  imageLookupPromise(): Promise<void> {
    if (!this.incomingImagesLookedUp) {
      this.incomingImagesLookedUp = createDeferredPromise();
      this.incomingImagesLookedUp.promise.finally(() => {
        this.incomingImagesLookedUp = null;
      });
    }
    const promise = this.incomingImagesLookedUp.promise;
    this.maybeResolveImagesLookedUp();
    return promise;
  }

  /**
   * Checks if the image queue is empty after a delay, logging warnings if it takes too long.
   * Original function name: emptyQueueCheck
   * @param deferred - Deferred promise for queue empty
   * @param startTime - Start time of the check
   * @param delayMs - Delay in milliseconds before next check
   */
  emptyQueueCheck(deferred: any, startTime: number, delayMs: number): void {
    setTimeout(() => {
      if (deferred === this.imageQueueEmpty) {
        const elapsedSec = Math.round(0.001 * (performance.now() - startTime));
        logWarning('image', 'queue empty is taking a long time', {
          elapsedSec,
          pending: this.pendingImages,
          downloads: this.pendingDownloads.size,
          decodes: this.pendingDecodes.size
        });
        this.verbose && logInfo('image', 'slow', {
          downloads: this.pendingDownloads,
          decodes: this.pendingDecodes
        });
        const nextDelay = Math.min(2 * delayMs, 9e5);
        this.emptyQueueCheck(deferred, startTime, nextDelay);
      }
    }, delayMs);
  }

  /**
   * Resolves the image queue empty promise and pending images callback if all images are processed.
   * Original function name: maybeResolveImageQueueEmptyAndPendingImages
   */
  maybeResolveImageQueueEmptyAndPendingImages(): void {
    const pending = this.pendingImages;
    for (const callback of this.progressCallbacks) callback(pending);
    if (this.imageQueueEmpty && pending === 0) {
      if (this.verbose) {
        logInfo('image', 'resolve queue empty!');
      }
      this.imageQueueEmpty.resolve();
      this.progressCallbacks = [];
    }
    this.maybeResolveImagesLookedUp();
  }

  /**
   * Resolves the incoming images looked up promise if there are no incoming images.
   * Original function name: maybeResolveImagesLookedUp
   */
  maybeResolveImagesLookedUp(): void {
    if (this.incomingImages.size === 0) {
      this.incomingImagesLookedUp?.resolve();
    }
  }

  /**
   * Finds unresolved images under specified guids.
   * Original function name: unresolvedImagesUnder
   * @param guids - Array of node guids
   * @param exportType - Type of image export
   * @param activeDocument - Optional active document reference
   * @returns Array of unresolved ImageDownloadItem
   */
  unresolvedImagesUnder(guids: string[], exportType: ImageExportType, activeDocument?: any): ImageDownloadItem[] {
    const doc = activeDocument ?? documentStateTsApi?.getMutableActiveDocument();
    if (!doc) return [];
    const hashes = ImageCppBindings?.findImagesUnder(doc, guids, exportType);
    return hashes ? hashes.map(hash => this.allImages.get(hash)).filter(item => item !== undefined && item.state !== ImageState.READY && item.state !== ImageState.UPLOADING) : [];
  }

  /**
   * Loads all images under specified guids, setting priority.
   * Original function name: loadAllImagesUnder
   */
  loadAllImagesUnder(guids: string[], exportType: ImageExportType, reason: string, progressCallback: ((remaining: number, total: number) => void) | null = null, activeDocument?: any): Promise<{
    totalImages: number;
  }> {
    return this.loadAllImages(guids, exportType, reason, progressCallback, true, activeDocument);
  }

  /**
   * Waits for all images under specified guids to be loaded, without setting priority.
   * Original function name: waitForImagesUnder
   */
  waitForImagesUnder(guids: string[], exportType: ImageExportType, reason: string, progressCallback: ((remaining: number, total: number) => void) | null = null, activeDocument?: any): Promise<{
    totalImages: number;
  }> {
    return this.loadAllImages(guids, exportType, reason, progressCallback, false, activeDocument);
  }

  /**
   * Checks if an image is pending decode.
   * Original function name: imageIsPendingDecode
   * @param hash - Image hash
   * @returns True if image is pending decode
   */
  imageIsPendingDecode(hash: string): boolean {
    return this.pendingDecodes.has(hash);
  }

  /**
   * Loads all images under specified guids, optionally setting priority and tracking progress.
   * Original function name: loadAllImages
   * @param guids - Array of node guids to load images under
   * @param exportType - Type of image export (e.g., NON_ANIMATED_ONLY)
   * @param reason - Reason for loading images (for logging)
   * @param progressCallback - Optional callback for progress updates
   * @param setPriority - If true, set image download priority to MAX_PRIORITY
   * @param activeDocument - Optional active document reference
   * @returns Promise resolving with totalImages loaded
   */
  async loadAllImages(guids: string[], exportType: ImageExportType, reason: string, progressCallback: ((remaining: number, total: number) => void) | null = null, setPriority: boolean = false, activeDocument?: any): Promise<{
    totalImages: number;
  }> {
    const startTime = performance.now();
    this.verbose && logInfo('image', 'loadAllImagesUnder', {
      reason,
      guids,
      start: startTime
    });

    // Warn if loading all images for the full document (original: loadAllImagesUnder)
    if (guids.includes('0:0') && reason !== 'playground.initialLoad') {
      logError('image', 'loadAllImagesUnder called with full document', {
        reason
      });
    }

    // Find unresolved images under the given guids
    const unresolvedImages = this.unresolvedImagesUnder(guids, exportType, activeDocument);
    const totalImages = unresolvedImages.length;

    // If no images to load, resolve immediately
    if (totalImages === 0) {
      return {
        totalImages
      };
    }

    // Track remaining images and invoke progress callback if provided
    let remainingImages = totalImages;
    progressCallback?.(remainingImages, totalImages);

    // Helper to handle image ready promise resolution
    const imageReadyPromises = unresolvedImages.map(imageItem => {
      if (setPriority) {
        this.setImageDownloadPriority(imageItem.hash, ImageDownloadItem.MAX_PRIORITY);
      }
      return imageItem.readyPromise().finally(() => {
        remainingImages--;
        progressCallback?.(remainingImages, totalImages);
      });
    });

    // Wait for all images to be ready
    await Promise.all(imageReadyPromises);
    return {
      totalImages
    };
  }
  async loadImageByHash(e) {
    this.verbose && logInfo('image', 'loadImageByHash', {
      hash: e
    });
    let t = this.allImages.get(e);
    if (t) {
      switch (t.state) {
        case 4:
        case 5:
        case 6:
        case 7:
          return;
      }
    }
    this.setImageDownloadPriority(e, ImageDownloadItem.MAX_PRIORITY);
    await this.imageQueueEmptyPromise();
  }
  setImageMaxSize(e) {
    this.imageMaxSize = e;
  }
  setShouldUseCompressedTextures(t) {
    ImageManager._shouldUseCompressedTextures = t;
  }
  markImageUploading(e) {
    this.pendingUploads.add(e);
  }
  markImageUploaded(e) {
    this.pendingUploads.has(e) || logWarning('image', 'markImageUploaded called for unknown image', {
      imageHash: e
    });
    this.pendingUploads.delete(e);
    this.uploadedImagesNeedingUrl.add(e);
    this.maybeResolveImagesUploaded();
  }

  /**
   * Starts uploading an image to the server.
   * Original function name: startUploadingImage
   * @param fileKey - The file key associated with the image
   * @param imageData - The image data to upload
   * @param contentType - The MIME type of the image
   * @param hash - The SHA1 hash of the image
   */
  startUploadingImage(fileKey: string, imageData: any, contentType: string, hash: string): void {
    // Early exit if already uploading this image
    if (this.pendingUploads.has(hash)) return;
    this.pendingUploads.add(hash);

    // Create and register the image download item
    const imageItem = new ImageDownloadItem(hash, 0);
    imageItem.state = ImageState.UPLOADING;
    this.allImages.set(hash, imageItem);
    const uploadUrl = `/api/upnode/image?purpose=canvas&sha1=${hash}&fileKey=${fileKey}`;
    let retryCount = 0;
    sendWithRetry.post(uploadUrl, imageData, {
      retryCount: Infinity,
      headers: {
        ...sendWithRetry.defaults.headers,
        'Content-Type': contentType
      },
      rawBody: true,
      uploadEvents: {
        loadstart: () => {
          imageItem.retries = retryCount;
          retryCount += 1;
        }
      }
    }).then(response => {
      if (response.status !== 200) {
        logError('image', 'unexpected status code from image upload', {
          hash,
          status: response.status
        }, {
          reportAsSentryError: true
        });
        return;
      }
      logInfo('image', 'uploaded new image', {
        hash
      });
      this.pendingUploads.delete(hash);
      ImageCppBindings.imageUploadFinished(hash, UploadStatus.SUCCESS);
      imageItem.state = ImageState.READY;
      this.uploadedImagesNeedingUrl.add(hash);
      this.maybeResolveImagesUploaded();
    }, error => {
      let uploadStatus: UploadStatus;
      if (error.status === 415) {
        logError('image', 'image upload failed, removing invalid image', {
          hash
        });
        uploadStatus = UploadStatus.UNSUPPORTED_MEDIA;
      } else {
        uploadStatus = UploadStatus.OTHER_FAILURE;
      }
      this.pendingUploads.delete(hash);
      ImageCppBindings.imageUploadFinished(hash, uploadStatus);
      this.maybeResolveImagesUploaded();
    });
  }
  pendingUploadStats() {
    let e = new Set();
    for (let t of this.pendingUploads) {
      let r = this.allImages.get(t);
      r && r.retries > 0 && e.add(t);
    }
    return [this.pendingUploads, e];
  }
  async maybeResolveImagesUploaded() {
    if (this.pendingUploads.size === 0) {
      let e = Array.from(this.uploadedImagesNeedingUrl);
      this.uploadedImagesNeedingUrl.clear();
      for (let t = 0; t < e.length; t += this.SINATRA_BATCH_SIZE) {
        let r = e.slice(t, t + this.SINATRA_BATCH_SIZE);
        let n = await this.resolveImageUrls(r);
        for (let e of r) {
          let t = n.s3_urls[e];
          if (t) {
            let r = this.allImages.get(e);
            if (r) {
              r.s3Path = t;
            } else {
              let r = new ImageDownloadItem(e, 0);
              r.s3Path = t;
              r.state = 5;
              this.allImages.set(e, r);
            }
          }
        }
      }
      this.allImagesUploaded?.resolve();
    }
  }
  imageUploadPromise() {
    if (!this.allImagesUploaded) {
      this.allImagesUploaded = createDeferredPromise();
      this.allImagesUploaded.promise.finally(() => {
        this.allImagesUploaded = null;
      });
    }
    let e = this.allImagesUploaded.promise;
    this.maybeResolveImagesUploaded();
    return e;
  }
  logDebugInfo(e) {
    for (let t of e) {
      let e = this.allImages.get(t);
      let r = new Set();
      for (let e of Object.values(this.pendingImagesToRecord)) {
        for (let t of e) r.add(t);
      }
      logInfo('ImageManager', 'Blocking image info', {
        hash: t,
        state: e ? e.state : 'NO IMAGE',
        inIncoming: t in this.incomingImages,
        inQueue: this.downloadQueue.find(t) != null,
        inPending: t in this.pendingDownloads,
        inFinished: t in this.alreadyDownloaded,
        inPendingRecord: t in r
      });
    }
    let [t, r] = this.pendingUploadStats();
    let n = Array.from(this.incomingImages.values()).map(e => e.hash).join(',');
    let i = Array.from(this.pendingDownloads).join(',');
    let a = Array.from(this.alreadyDownloaded).join(',');
    let s = this.downloadQueue.debugString();
    let o = Array.from(t).join(',');
    let l = Array.from(r).join(',');
    logInfo('ImageManager', 'ImageManager debug info', {
      incomingImages: n,
      downloadQueue: s,
      pendingDownloads: i,
      alreadyDownloaded: a,
      pendingUploads: o,
      uploadBackoffs: l,
      pendingImagesToRecord: this.pendingImagesToRecord
    });
  }
  getDebugState() {
    let e = ImageCppBindings.getImageResourceDebugInfo();
    let t = new Map();
    e.forEach(e => {
      t.set(e.hash, {
        ...e,
        tsState: this.allImages.get(e.hash)?.state
      });
    });
    this.allImages.forEach((e, r) => {
      t.has(r) || t.set(r, {
        hash: r,
        tsState: e.state
      });
    });
    return t;
  }
  static includeOutsideContents(e) {
    return e.some(e => !1 === e.contentsOnly);
  }
}
ImageManager._shouldUseCompressedTextures = !1;

/**
 * Processes an image and generates a thumbnail
 * Original function name: $$P2
 */
export async function processImageWithThumbnail(imageData: ArrayBuffer, mimeType: string, imageName?: string) {
  if (!ImageCppBindings.imageTypeDecodeSupported(mimeType)) throw new Error(`Image type ${mimeType} is not supported and cannot be decoded`);
  const uint8ImageData = new Uint8Array(imageData);
  const decoded = await imageProcessor.decodeAsync(uint8ImageData, mimeType, MAX_CANVAS_SIZE, MAX_CANVAS_SIZE, true);
  const fullResolutionHash = await crypto.subtle.digest('SHA-1', imageData);
  const fullResolution = {
    width: decoded.width,
    height: decoded.height,
    compressedData: imageData,
    hash: new Uint8Array(fullResolutionHash),
    bitmap: decoded.bitmap ? decoded.bitmap : undefined,
    mimeType,
    rgba: (decoded as any).rgba ? (decoded as any).rgba : new Uint8Array(),
    name: imageName
  };
  const thumbnailSize = imageProcessor.thumbnailSize(decoded.width, decoded.height);
  const thumbnail = await imageProcessor.generateThumbnail(fullResolution, thumbnailSize.w, thumbnailSize.h);
  const thumbnailHash = await crypto.subtle.digest('SHA-1', thumbnail.compressedData);
  return {
    fullResolution,
    thumbnail: {
      width: thumbnailSize.w,
      height: thumbnailSize.h,
      compressedData: thumbnail.compressedData,
      hash: new Uint8Array(thumbnailHash),
      bitmap: thumbnail.bitmap,
      mimeType,
      rgba: thumbnail.decompressedData,
      name: imageName
    }
  };
}

/**
 * Helper function for loading images and exporting
 * Original function name: D
 */
async function loadImagesAndExport(exportInfo: any, exportOptions: any) {
  const includeOutsideContents = !!ImageManager.includeOutsideContents(exportOptions);
  await getImageManager().loadAllImagesUnder([includeOutsideContents ? exportInfo.containingCanvas || '-1:-1' : exportInfo.guid], ImageExportType.NON_ANIMATED_ONLY, 'plugins.loadImagesAndExport', null, true);
}
_$$c(loadImagesAndExport);

// Singleton instance of the image service
// Original: $$R3
class ImageService {
  imageManager = new ImageManager();
  copyImagePermissions(fileKey: string, imageHashes: string[]) {
    return this.imageManager.recordImages(fileKey, imageHashes);
  }
  copyImagePermissionsFromLibraryKey(libraryKey: string, imageHashes: string[], isPlayground?: boolean) {
    return this.imageManager.recordImagesFromLibraryKey(libraryKey, imageHashes, isPlayground);
  }
  setImageDownloadPriority(hash: string, priority: number) {
    this.imageManager.setImageDownloadPriority(hash, priority);
  }
  forceDownloadImage(hash: string) {
    this.imageManager.forceDownloadImage(hash);
  }
  setMinimumImagePriority(priority: number) {
    this.imageManager.setMinimumImagePriority(priority);
  }
  forgetImage(hash: string) {
    this.imageManager.forgetImage(hash);
  }
  setImageDecodePending(hash: string) {
    this.imageManager.setImageDecodePending(hash);
  }
  clearImageDecodePending(hash: string, success: boolean) {
    this.imageManager.clearImageDecodePending(hash, success);
  }
  async downloadEmoji(url: string) {
    return (await sendWithRetry.crossOriginGetAny(url, null, {
      responseType: 'arraybuffer'
    })).data;
  }
  markImageUploading(hash: string) {
    this.imageManager.markImageUploading(hash);
  }
  markImageUploaded(hash: string) {
    this.imageManager.markImageUploaded(hash);
  }
  startUploadingImage(fileKey: string, imageData: any, contentType: string, hash: string) {
    this.imageManager.startUploadingImage(fileKey, imageData, contentType, hash);
  }
  pendingUploadStats() {
    return this.imageManager.pendingUploadStats();
  }
  logDebugInfo(hashes: string[]) {
    this.imageManager.logDebugInfo(hashes);
  }
  pauseImageDownloads() {
    this.imageManager.pauseImageDownloads();
  }
  resumeImageDownloads() {
    this.imageManager.resumeImageDownloads();
  }
  getSignedUrls(hashes: string[]) {
    return this.imageManager.getSignedUrls(hashes);
  }
  getImageHostDomain() {
    return window.location.hostname;
  }
  setExternalSource(hash: string, url: string) {
    this.imageManager.setExternalSource(hash, url);
  }
  staticAssetWithPath(path: string) {
    return buildStaticUrl(path);
  }
}
export const imageServiceInstance = new ImageService();
/**
 * Gets the image manager instance
 * Original function name: $$L0
 */
export function getImageManager() {
  return imageServiceInstance.imageManager;
}

// Export with new meaningful names
export const Jr = getImageManager; // Original: Jr = $$L0
export const Mj = batchDownloadImages; // Original: Mj = batchDownloadImages
export const UD = processImageWithThumbnail; // Original: UD = $$P2
export const j5 = imageServiceInstance; // Original: j5 = $$R3
export const xY = ImageManager; // Original: xY = $$O4
