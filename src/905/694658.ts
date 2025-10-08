import { Mutex } from "async-mutex"
import { useRef } from "react"
import { jsx } from "react/jsx-runtime"
import { z } from "zod"
import { reportError } from "../905/11"
import { ServiceCategories } from "../905/165054"
import { trackEventAnalytics } from "../905/449184"
import { useSingleEffect } from "../905/791079"
import { getInitialOptions, isDevEnvironment } from "../figma_app/169182"
import { APIParameterUtils, createMetaValidator } from "../figma_app/181241"
import { getI18nState } from "../figma_app/363242"
import { getFalseValue } from "../figma_app/897289"

interface ArkoseUserProperties {
  arkose_on_for_user: boolean
  arkose_required_for_user: boolean
}

interface ArkoseEventProperties {
  action: string
  resultFromAPI?: boolean
  requiredFromAPI?: boolean
}

interface ArkoseErrorProperties {
  action: string
  authParam?: string
  error: string
  status?: number
}

interface ArkoseAnalyticsProperties {
  event: string
  prevFormState?: any
  getArkoseTokenAction?: string
  error?: string
  reachability?: Record<string, boolean>
  isArkoseOnAPICheckError?: ArkoseErrorProperties
  arkoseIsOnForUserProperties?: ArkoseEventProperties
}

// Arkose API response validator
const arkoseUserPropertiesSchema = z.object({
  arkose_on_for_user: z.boolean(),
  arkose_required_for_user: z.boolean(),
})

class ArkoseValidator {
  public ArkoseIsOnValidator: any

  constructor() {
    this.ArkoseIsOnValidator = createMetaValidator(
      "ArkoseIsOnValidator",
      arkoseUserPropertiesSchema,
      "xrv_api_arkose_is_on",
      true,
    )
  }

  public isArkoseOn = (params: any) => {
    const { captcha_action, ...rest } = params
    const normalizedParams = {
      ...rest,
      captcha_action: String(captcha_action),
    }

    return this.ArkoseIsOnValidator.validate(async ({ xr }: { xr: any }) =>
      await xr.post(
        "/api/arkose/on_for_user",
        APIParameterUtils.toAPIParameters(normalizedParams),
        { retryCount: 10 },
      ),
    )
  }
}

const arkoseValidator = new ArkoseValidator()

// Arkose event enums
enum ArkoseFrameEvent {
  FRAME_MOUNTED = "frame-mounted",
  JS_LOADED = "js-loaded",
  CHALLENGE_LOADED = "loaded",
  CHALLENGE_SUPPRESSED = "suppressed",
  CHALLENGE_SHOWN = "challenged",
  IFRAMESIZE = "iframesize",
  COMPLETED = "completed",
  ERRORED = "errored",
  LOAD_TIMED_OUT = "timed-out",
  ARKOSE_IS_OFF_FOR_USER = "arkose-is-off-for-user",
}

enum ArkoseErrorEvent {
  FRAME_FAILED_TO_LOAD_IN_TIME = "frame failed to load in time",
  GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FRAME_NOT_MOUNTED = "getArkoseToken failed because Arkose frame was never mounted",
  GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FAILED = "getArkoseToken failed because Arkose failed",
  GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_IS_OFF_FOR_USER = "getArkoseToken failed because Arkose is off for user",
  MISSING_ARKOSE_TOKEN_WHEN_GETTING_ARKOSE_TOKEN = "getArkoseToken missing token despite frame being ready",
  GETTING_ARKOSE_TOKEN_SUCCEEDED = "success",
}

enum ArkoseInternalEvent {
  ERROR_HANDLING_MESSAGE = "error handling message",
}

enum ArkoseNetworkEvent {
  REACHABILITY = "reachability",
}

enum ArkoseAPIEvent {
  IS_ARKOSE_ON_API_CALL_FAILED = "Is Arkose On API call failed",
  IS_ARKOSE_ON = "Is Arkose On",
}

const ALL_ARKOSE_EVENTS = {
  ...ArkoseFrameEvent,
  ...ArkoseErrorEvent,
  ...ArkoseInternalEvent,
  ...ArkoseNetworkEvent,
  ...ArkoseAPIEvent,
}

enum ArkoseChallengeEvent {
  CHALLENGE_JS_LOADED = "challenge-js-loaded",
  CHALLENGE_LOADED = "challenge-loaded",
  CHALLENGE_SUPPRESSED = "challenge-suppressed",
  CHALLENGE_SHOWN = "challenge-shown",
  CHALLENGE_IFRAMESIZE = "challenge-iframesize",
  CHALLENGE_COMPLETE = "challenge-complete",
  CHALLENGE_ERROR = "challenge-error",
}

const CHALLENGE_EVENT_MAPPING: Record<string, string> = {
  "challenge-js-loaded": "js-loaded",
  "challenge-loaded": "loaded",
  "challenge-suppressed": "suppressed",
  "challenge-shown": "challenged",
  "challenge-iframesize": "iframesize",
  "challenge-complete": "completed",
  "challenge-error": "errored",
}

// Arkose state check functions
const isWindowUndefined = () => typeof window === "undefined" || window.arkose === undefined
const isFrameMounted = () => window.arkose === ArkoseFrameEvent.FRAME_MOUNTED
const isArkoseOffForUser = () => window.arkose === ArkoseFrameEvent.ARKOSE_IS_OFF_FOR_USER
const hasChallengeFailed = () => window.arkose === ArkoseFrameEvent.ERRORED
const hasLoadTimedOut = () => window.arkose === ArkoseFrameEvent.LOAD_TIMED_OUT
const isChallengeCompleted = () => window.arkose === ArkoseFrameEvent.COMPLETED

const isChallengeFailed = () => hasChallengeFailed() || hasLoadTimedOut()
const isArkoseReady = () => !isWindowUndefined() && !isFrameMounted() && !isChallengeFailed()

// Utility functions
const mutex = new Mutex()
const getTimeoutDuration = (isRequired: boolean) => isRequired ? 86400000 : 10000
const getCurrentTimestamp = () => new Date().getTime()
const shouldTrackAnalytics = () => !getFalseValue()

// Analytics tracking function
function trackArkoseEvent(properties: ArkoseAnalyticsProperties) {
  if (properties.event === "iframesize") {
    return
  }

  let eventString = properties.event.toString()

  if ((properties.event === ALL_ARKOSE_EVENTS.ERRORED
    || properties.event === ALL_ARKOSE_EVENTS.ERROR_HANDLING_MESSAGE)
  && properties.error) {
    eventString = `${properties.event}: ${properties.error}`
  }

  const analyticsData: Record<string, any> = {
    arkose_event: eventString,
  }

  if (window.mountTime !== undefined) {
    analyticsData.elapsed_time_since_mount_in_ms = getCurrentTimestamp() - window.mountTime
  }

  if (properties.prevFormState) {
    analyticsData.prev_form_state = properties.prevFormState.toString()
  }

  if (properties.getArkoseTokenAction) {
    analyticsData.get_arkose_token_action = String(properties.getArkoseTokenAction)
  }

  if (properties.isArkoseOnAPICheckError) {
    const errorProps = properties.isArkoseOnAPICheckError
    analyticsData.is_arkose_on_api_check_action = String(errorProps.action)
    analyticsData.is_arkose_on_api_check_auth_param = errorProps.authParam
    analyticsData.is_arkose_on_api_check_error = errorProps.error
    analyticsData.is_arkose_on_api_check_error_status = errorProps.status
  }

  if (properties.arkoseIsOnForUserProperties) {
    const userProps = properties.arkoseIsOnForUserProperties
    analyticsData.arkose_is_on_for_user_action = String(userProps.action)
    analyticsData.arkose_is_on_for_user_result_from_api = userProps.resultFromAPI
    analyticsData.arkose_is_required_from_api = userProps.requiredFromAPI
  }

  if (properties.event === ALL_ARKOSE_EVENTS.REACHABILITY && properties.reachability) {
    analyticsData.reachability = Object.entries(properties.reachability)
      .map(([key, value]) => `${key}|${value}`)
      .join(",")
  }

  if (shouldTrackAnalytics()) {
    trackEventAnalytics("Arkose", analyticsData, {
      forwardToDatadog: true,
      batchRequest: false,
    })
  }
}

// Main Arkose component
export function ArkoseChallengeComponent(props: any) {
  let apiResult: ArkoseUserProperties | undefined
  let apiError: Error | undefined
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Handle messages from Arkose iframe
  const handleMessage = (event: MessageEvent) => {
    if (isChallengeFailed()) {
      return
    }

    const data = JSON.parse(event.data)
    if (!Object.values(ArkoseChallengeEvent).includes(data.eventId)) {
      return
    }

    const mappedEvent = CHALLENGE_EVENT_MAPPING[data.eventId]
    window.arkose = mappedEvent.toString()

    trackArkoseEvent({
      event: mappedEvent,
      prevFormState: props.prevFormState,
      error: data.payload.error?.error,
    })

    switch (data.eventId) {
      case ArkoseChallengeEvent.CHALLENGE_LOADED:
        props.onLoaded()
        break
      case ArkoseChallengeEvent.CHALLENGE_SHOWN:
        props.onChallenge()
        break
      case ArkoseChallengeEvent.CHALLENGE_IFRAMESIZE:
        const frameElement = document.getElementById("arkoseFrame") as HTMLIFrameElement
        if (frameElement) {
          frameElement.width = data.payload.frameWidth
          frameElement.height = data.payload.frameHeight
        }
        break
      case ArkoseChallengeEvent.CHALLENGE_COMPLETE:
        window.arkoseResult = data.payload.sessionToken
        props.onCompleted()
        break
      case ArkoseChallengeEvent.CHALLENGE_ERROR:
        window.arkoseResult = mappedEvent.toString()
        break
    }
  }

  // Handle messages with origin validation
  const handleValidatedMessage = (event: MessageEvent) => {
    if (event.origin === getInitialOptions().arkose_origin) {
      mutex.runExclusive(() => {
        handleMessage(event)
      }).catch((error) => {
        trackArkoseEvent({
          event: ALL_ARKOSE_EVENTS.ERROR_HANDLING_MESSAGE,
          prevFormState: props.prevFormState,
          error: error.message,
        })
      })
    }
  }

  // Check if Arkose is enabled for user
  const checkArkoseEnabled = async (action: string, onError: Fn) =>
    await mutex.runExclusive(async () => {
      if (apiError) {
        throw apiError
      }

      if (apiResult) {
        return apiResult
      }

      try {
        apiResult = await checkArkoseStatus(action, props.prevFormState, onError)
      }
      catch (error) {
        apiError = error as Error
        return error
      }

      trackArkoseEvent({
        event: ALL_ARKOSE_EVENTS.IS_ARKOSE_ON,
        arkoseIsOnForUserProperties: {
          action,
          resultFromAPI: apiResult.arkose_on_for_user,
          requiredFromAPI: apiResult.arkose_required_for_user,
        },
      })

      return apiResult
    })

  // Initialize Arkose on component mount
  useSingleEffect(() => {
    checkArkoseEnabled(props.arkoseAction, props.onFailed)
      .then((result) => {
        if (result && result.arkose_on_for_user) {
          checkReachability(props.prevFormState)
        }
      })
      .catch(() => { })
  })

  // Set up event listeners and frame loading
  useSingleEffect(() => {
    const cleanup = () => {
      window.removeEventListener("message", handleValidatedMessage)
    }

    checkArkoseEnabled(props.arkoseAction, props.onFailed)
      .then((result) => {
        if (result && result.arkose_on_for_user) {
          window.addEventListener("message", handleValidatedMessage)
          initializeArkoseFrame(props, timeoutRef, result.arkose_required_for_user)
        }
        else {
          window.arkose = ArkoseFrameEvent.ARKOSE_IS_OFF_FOR_USER
          props.onCompleted()
        }
      })
      .catch((error) => {
        cleanup()
        if (isDevEnvironment()) {
          throw error
        }
      })

    return cleanup
  })

  // Build iframe source URL
  const locale = getI18nState().getPrimaryLocale(false)
  const publicKey = getInitialOptions().arkose_challenge_public_key
  const frameUrl = `${getInitialOptions().arkose_frame_url}?publicKey=${publicKey}&locale=${locale}`

  return jsx("div", {
    className: "arkose--arkoseFrameContainer--HaPFq",
    children: jsx("iframe", {
      id: "arkoseFrame",
      height: 0,
      width: 0,
      src: frameUrl,
      title: "Arkose Frame",
      className: "arkose--arkoseFrame--ErXcx",
    }),
  })
}

// Network reachability check
function checkReachability(formState: any) {
  const publicKey = getInitialOptions().arkose_challenge_public_key
  const urls = [
    "https://www.arkoselabs.com",
    "https://status.arkoselabs.com",
    "https://status.arkoselabs.com/api/v2/status.json",
    `https://figma-api.arkoselabs.com/v2/${publicKey}/api.js`,
    getInitialOptions().arkose_frame_url,
    "https://verify.figma.com/arkose_frame.html",
  ]

  Promise.allSettled(urls.map(url => checkUrlReachability(url)))
    .then((results) => {
      const reachability: Record<string, boolean> = {}
      results.forEach((result, index) => {
        reachability[urls[index]] = result.status === "fulfilled"
      })

      trackArkoseEvent({
        event: ALL_ARKOSE_EVENTS.REACHABILITY,
        prevFormState: formState,
        reachability,
      })
    })
}

// Check if a URL is reachable
async function checkUrlReachability(url: string): Promise<void> {
  try {
    await fetch(url, {
      method: "HEAD",
      mode: "no-cors",
    })
    return Promise.resolve()
  }
  catch {
    return Promise.reject()
  }
}

// Initialize Arkose frame with timeout handling
function initializeArkoseFrame(props: any, timeoutRef: React.RefObject<NodeJS.Timeout>, isRequired: boolean) {
  Object.defineProperty(window, "mountTime", {
    value: getCurrentTimestamp(),
    configurable: true,
    enumerable: true,
  })

  Promise.race([
    new Promise((resolve, reject) => {
      timeoutRef.current = setTimeout(() => {
        mutex.runExclusive(() => {
          if (isArkoseReady()) {
            resolve(window.arkose)
          }
          else {
            delete window.arkose
            window.arkose = ArkoseFrameEvent.LOAD_TIMED_OUT
            trackArkoseEvent({
              event: ArkoseErrorEvent.FRAME_FAILED_TO_LOAD_IN_TIME,
              prevFormState: props.prevFormState,
            })
            reject(new Error("Arkose script failed to load."))
          }
        }).then(null)
      }, getTimeoutDuration(isRequired))
    }),
    new Promise((resolve, reject) => {
      Object.defineProperty(window, "arkose", {
        get: () => ArkoseFrameEvent.FRAME_MOUNTED,
        set: (value) => {
          mutex.runExclusive(() => {
            delete window.arkose
            window.arkose = value
            isChallengeFailed()
              ? reject(new Error("Arkose script failed to load."))
              : resolve(value)
          }).then(null)
        },
        configurable: true,
        enumerable: true,
      })
    }),
  ]).then(null, () => {
    window.arkoseResult = window.arkose
    props.onCompleted()
  }).finally(() => {
    clearArkoseTimeout(timeoutRef)
  })
}

// Clear Arkose timeout
function clearArkoseTimeout(timeoutRef: React.RefObject<NodeJS.Timeout>) {
  if (timeoutRef.current !== null) {
    clearTimeout(timeoutRef.current)
    timeoutRef.current = null
  }
}

// Get Arkose token function
export async function getArkoseToken(action: string, formState: any) {
  let result: any

  await mutex.runExclusive(() => {
    if (isArkoseOffForUser()) {
      trackArkoseEvent({
        event: ArkoseErrorEvent.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_IS_OFF_FOR_USER,
        prevFormState: formState,
        getArkoseTokenAction: action,
      })
      result = Promise.reject(new Error("Can't get token because Arkose is off for the user"))
    }
    else if (isWindowUndefined()) {
      trackArkoseEvent({
        event: ArkoseErrorEvent.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FRAME_NOT_MOUNTED,
        prevFormState: formState,
        getArkoseTokenAction: action,
      })
      result = Promise.reject(new Error("Can't get token because Arkose frame was never mounted"))
    }
    else if (isChallengeFailed()) {
      trackArkoseEvent({
        event: ArkoseErrorEvent.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FAILED,
        prevFormState: formState,
        getArkoseTokenAction: action,
      })
      result = Promise.reject(new Error("Can't get token because Arkose challenge failed"))
    }
    else if (isChallengeCompleted()) {
      if (window.arkoseResult === undefined || window.arkoseResult === null) {
        trackArkoseEvent({
          event: ArkoseErrorEvent.MISSING_ARKOSE_TOKEN_WHEN_GETTING_ARKOSE_TOKEN,
          prevFormState: formState,
          getArkoseTokenAction: action,
        })
        result = Promise.reject(new Error("Arkose token missing despite challenge being completed!"))
      }
      else {
        trackArkoseEvent({
          event: ArkoseErrorEvent.GETTING_ARKOSE_TOKEN_SUCCEEDED,
          prevFormState: formState,
          getArkoseTokenAction: action,
        })
        result = Promise.resolve(window.arkoseResult)
      }
    }
    else {
      result = new Promise((resolve, reject) => {
        // eslint-disable-next-line accessor-pairs
        Object.defineProperty(window, "arkoseResult", {
          set: (token) => {
            mutex.runExclusive(() => {
              if (token != null) {
                if (isChallengeFailed()) {
                  trackArkoseEvent({
                    event: ArkoseErrorEvent.GETTING_ARKOSE_TOKEN_FAILED_BECAUSE_ARKOSE_FAILED,
                    prevFormState: formState,
                    getArkoseTokenAction: action,
                  })
                  reject(new Error("Can't get token because Arkose challenge failed"))
                }
                else {
                  delete window.arkoseResult
                  window.arkoseResult = token
                  trackArkoseEvent({
                    event: ArkoseErrorEvent.GETTING_ARKOSE_TOKEN_SUCCEEDED,
                    prevFormState: formState,
                    getArkoseTokenAction: action,
                  })
                  resolve(token)
                }
              }
            }).then(null)
          },
          configurable: true,
          enumerable: true,
        })
      })
    }
  })

  return result
}

// Set authentication parameters for Arkose
let authParams: { email: string } | { token: string, token_type: string } | undefined

export async function setArkoseAuthParams(params: any) {
  await mutex.runExclusive(() => {
    authParams = "email" in params
      ? { email: params.email }
      : { token: params.googleUserInfo.token, token_type: params.googleUserInfo.tokenType }
  })
}

// Check Arkose status via API
async function checkArkoseStatus(action: string, formState: any, onError: Fn): Promise<ArkoseUserProperties> {
  let error: Error | undefined
  let errorMessage: string | undefined

  if (authParams && Object.keys(authParams).length !== 0) {
    try {
      const response = await arkoseValidator.isArkoseOn({
        ...authParams,
        captcha_action: action,
      })
      return response.data.meta
    }
    catch (apiError: any) {
      error = apiError
      errorMessage = apiError.cause?.message || apiError.data?.message || apiError.message || "Arkose API call failed"

      trackArkoseEvent({
        event: ALL_ARKOSE_EVENTS.IS_ARKOSE_ON_API_CALL_FAILED,
        isArkoseOnAPICheckError: {
          action,
          authParam: "email" in authParams ? "email" : "google_token",
          error: errorMessage,
          status: apiError.status,
        },
      })
    }
  }
  else {
    errorMessage = `Arkose API param is not set or empty for '${formState}' form state.`
    error = new Error(errorMessage)

    trackArkoseEvent({
      event: ALL_ARKOSE_EVENTS.IS_ARKOSE_ON_API_CALL_FAILED,
      isArkoseOnAPICheckError: {
        action,
        error: errorMessage,
      },
    })
  }

  onError(error, errorMessage)
  reportError(ServiceCategories.PRODUCT_SECURITY, new Error(errorMessage!))
  return Promise.reject(error)
}

export const p8 = ArkoseChallengeComponent
export const Hc = getArkoseToken
export const sT = setArkoseAuthParams
