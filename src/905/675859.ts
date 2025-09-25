import { E_TIMEOUT, Mutex, withTimeout } from 'async-mutex'
import { useState } from 'react'
import { jsx } from 'react/jsx-runtime'
import { wafManager } from '../905/394005'
import { trackEventAnalytics } from '../905/449184'

/**
 * Generates a unique key for image elements.
 * @returns {string} Unique key string.
 * @originalName m
 */
function generateImageKey(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`
}

/**
 * Tracks analytics events for WAF image handler.
 * @param params Event tracking parameters.
 * @originalName c
 */
function trackWAFImageEvent(params: {
  event: string
  reason: string
  lockAcquired?: boolean
  additionalTrackingProperties?: Record<string, any>
}): void {
  const eventProps = {
    waf_img_event: params.event,
    reason: params.reason,
    lockAcquired: undefined,
    ...params.additionalTrackingProperties,
  }
  if (params.lockAcquired !== undefined) {
    eventProps.lockAcquired = params.lockAcquired
  }
  trackEventAnalytics('HTML img Tag WAF Handler', eventProps, {
    forwardToDatadog: true,
    batchRequest: true,
  })
}

/**
 * Attempts to acquire a lock and handle image loading with WAF validation.
 * @param params Parameters for image error handling.
 * @returns {Promise<boolean>} Success status.
 * @originalName u
 */
async function handleImageErrorWithLock(params: {
  currentTarget: HTMLImageElement
  setKey: (key: string) => void
  additionalTrackingProperties?: Record<string, any>
}): Promise<boolean> {
  let release: (() => void) | null = null
  try {
    release = await imageMutex.acquire()
  }
  catch (err) {
    if (err === E_TIMEOUT) {
      trackWAFImageEvent({
        event: 'img_waf_handler_lock_error',
        reason: 'timeout',
        additionalTrackingProperties: params.additionalTrackingProperties,
      })
    }
    else {
      trackWAFImageEvent({
        event: 'img_waf_handler_lock_error',
        reason: 'other_error',
        additionalTrackingProperties: params.additionalTrackingProperties,
      })
    }
  }
  const lockAcquired = release !== null
  try {
    return await loadImageWithWAF({
      currentTarget: params.currentTarget,
      setKey: params.setKey,
      lockAcquired,
      additionalTrackingProperties: params.additionalTrackingProperties,
    })
  }
  finally {
    if (release)
      release()
  }
}

/**
 * Loads image and handles WAF validation if required.
 * @param params Parameters for image loading.
 * @returns {Promise<boolean>} Success status.
 * @originalName p
 */
async function loadImageWithWAF(params: {
  currentTarget: HTMLImageElement
  setKey: (key: string) => void
  lockAcquired: boolean
  additionalTrackingProperties?: Record<string, any>
}): Promise<boolean> {
  let response: Response | undefined
  try {
    response = await fetch(params.currentTarget.currentSrc || params.currentTarget.src)
  }
  catch {
    trackWAFImageEvent({
      event: 'img_waf_handler_load_error',
      reason: 'error_or_rejected_promise',
      lockAcquired: params.lockAcquired,
      additionalTrackingProperties: params.additionalTrackingProperties,
    })
    return false
  }
  if (response && response.status === 200) {
    params.setKey(generateImageKey())
    trackWAFImageEvent({
      event: 'img_waf_handler_load_success',
      reason: '200_status',
      lockAcquired: params.lockAcquired,
      additionalTrackingProperties: params.additionalTrackingProperties,
    })
    return true
  }
  if (!response || response.status !== 202) {
    trackWAFImageEvent({
      event: 'img_waf_handler_load_error',
      reason: 'non_202_status',
      lockAcquired: params.lockAcquired,
      additionalTrackingProperties: params.additionalTrackingProperties,
    })
    return false
  }
  try {
    await wafManager.waitForWAFValidation('challenge')
  }
  catch {
    trackWAFImageEvent({
      event: 'img_waf_handler_load_error',
      reason: 'error_handling_waf_validation',
      lockAcquired: params.lockAcquired,
      additionalTrackingProperties: params.additionalTrackingProperties,
    })
    return false
  }
  params.setKey(generateImageKey())
  trackWAFImageEvent({
    event: 'img_waf_handler_load_success',
    reason: 'waf_challenge_solved',
    lockAcquired: params.lockAcquired,
    additionalTrackingProperties: params.additionalTrackingProperties,
  })
  return true
}

const imageMutex = withTimeout(new Mutex(), 5000)

/**
 * WAF-protected image component.
 * @param props Component props.
 * @returns {JSX.Element}
 * @originalName $$d0
 */
export function WAFImage({
  alt,
  onError,
  additionalTrackingProperties = {},
  imageRef,
  ...imgProps
}: {
  alt: string
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
  additionalTrackingProperties?: Record<string, any>
  imageRef?: React.Ref<HTMLImageElement>
  [key: string]: any
}) {
  const [shouldRetry, setShouldRetry] = useState(true)
  const [imgKey, setImgKey] = useState(generateImageKey())
  const [retryCount, setRetryCount] = useState(0)

  return jsx('img', {
    'data-test-key': imgKey,
    alt,
    'ref': imageRef,
    ...imgProps,
    'onError': async (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      if (shouldRetry) {
        setRetryCount(retryCount + 1)
        const success = await handleImageErrorWithLock({
          currentTarget: e.target as HTMLImageElement,
          setKey: setImgKey,
          additionalTrackingProperties,
        })
        if (retryCount >= 3 || !success) {
          onError?.(e)
          setShouldRetry(false)
        }
      }
    },
  }, imgKey)
}

// Export with refactored name
export const oW = WAFImage
