import { $D } from '../11'
import { J as _$$J2 } from '../95677'
import { Et } from '../125019'
import { ServiceCategories as _$$e } from '../165054'
import { fB } from '../515659'
import { decodeBase64 } from '../561685'
import { Jr } from '../../figma_app/624361'
import { NFK, NfO } from '../../figma_app/763686'

/**
 * Image Store Class - manages private image cache with hash-based storage and retrieval
 * Handles image bytes loading, animated image info, and SHA1-based image management
 */
export class ImageStore {
  hashToPrivateImage: Map<any, any>

  constructor() {
    this.hashToPrivateImage = new Map()
  }

  /**
   * Clean up image store resources
   */
  tearDown = () => {
    this.hashToPrivateImage = new Map()
  }

  /**
   * Get internal bytes for an image synchronously
   */
  internalBytesForImage(hash) {
    return this.getPrivateImageOrThrow(hash).bytes
  }

  /**
   * Get image bytes asynchronously, loading if necessary
   */
  async bytesFromImage(hash) {
    const privateImage = this.getPrivateImageOrThrow(hash)
    if (privateImage.bytes == null) {
      try {
        privateImage.bytes = NfO.getImageBytes(hash)
      }
      catch {
        await Jr().loadImageByHash(hash)
        privateImage.bytes = NfO.getImageBytes(hash)
      }
    }
    return new Uint8Array(privateImage.bytes)
  }

  /**
   * Get private image or throw error if not found
   */
  getPrivateImageOrThrow(hash) {
    const privateImage = this.hashToPrivateImage.get(hash)
    if (privateImage === undefined) {
      throw new Error('SHA1 hash does not correspond to an existing image')
    }
    return privateImage
  }

  /**
   * Get or create a private image entry
   */
  getOrCreatePrivateImage(hash, animatedInfo) {
    let privateImage = this.hashToPrivateImage.get(hash)
    if (privateImage === undefined) {
      privateImage = {
        sha1: hash,
        animated: animatedInfo,
        bytes: null,
        coverBytes: null,
        getBytesAsync: () => this.bytesFromImage(hash),
      }
    }
    this.hashToPrivateImage.set(hash, privateImage)
    return privateImage
  }

  /**
   * Get image from SHA1 hash
   */
  getImageFromSHA1(hash) {
    const existingImage = this.hashToPrivateImage.get(hash)
    if (existingImage !== undefined) {
      return existingImage
    }
    const animatedInfo = NfO.getAnimatedImageInfo(hash)
    return animatedInfo.status === NFK.UNLOADED ? null : this.getOrCreatePrivateImage(hash, animatedInfo)
  }

  /**
   * Create image from bytes and handle animated image processing
   */
  createImage(imageBytes) {
    const uint8Array = new Uint8Array(imageBytes)
    NfO.isImageValid(uint8Array)
    const hash = Et(uint8Array)
    const privateImage = this.getOrCreatePrivateImage(hash, {
      status: NFK.UNLOADED,
      coverFrameHash: '',
    })
    privateImage.bytes = uint8Array

    // Handle animated images (GIF processing)
    if (fB(uint8Array)) {
      const coverBytes = this.extractAnimatedImageCover(uint8Array)
      if (coverBytes != null) {
        privateImage.coverBytes = coverBytes
        privateImage.animated.status = NFK.ANIMATED
        privateImage.animated.coverFrameHash = Et(coverBytes)
      }
      else {
        $D(_$$e.EXTENSIBILITY, new Error('Got unparseable animated gif'))
      }
    }
    return privateImage
  }

  /**
   * Extract cover frame from animated image
   */
  extractAnimatedImageCover(imageBytes) {
    const animatedImage = _$$J2(imageBytes)
    if (!animatedImage) {
      return null
    }
    const canvas = document.createElement('canvas')
    canvas.width = animatedImage.width
    canvas.height = animatedImage.height
    const context = canvas.getContext('2d')
    if (!context) {
      return null
    }
    const imageData = new ImageData(animatedImage.width, animatedImage.height)
    animatedImage.blitFrame(0, imageData, context)
    const dataUrl = canvas.toDataURL()
    const [header, base64Data] = dataUrl.split(',')
    if (header === 'data:image/png;base64') {
      return decodeBase64(base64Data)
    }
    return null
  }
}
