// Refactored Sprig SDK integration with improved readability, type safety, and modularity
// Renamed variables, added types, simplified logic, and improved error handling

import { getAnonymousId, trackEventAnalytics } from "../905/449184"
import { logger } from "../905/651849"
import { normalizeUrl } from "../3973/348894"
import { getInitialOptions } from "../figma_app/169182"
import { SdkMessageType } from "../figma_app/714966"
import { secondaryModalZ } from "../figma_app/786175"

// Type definitions for better type safety
interface User {
  id?: string
  created_at?: string
  [key: string]: any
}

interface UserAnalyticsData {
  signup_date?: string
  email_type?: string
  land_product?: string
  generation?: string
  paid_status?: string
  education_user?: boolean
  design_max_paid_role?: string
  job_title?: string
  num_edit_days_30_day?: number
  num_edit_days_60_day?: number
  num_edit_days_90_day?: number
  num_edits_30_day?: number
  num_edits_60_day?: number
  num_edits_90_day?: number
  num_files_created?: number
  work_location_no_answer?: boolean
  is_company?: boolean
  is_agency?: boolean
  is_freelancer?: boolean
  is_school?: boolean
  how_plan_use_figma_no_answer?: boolean
  is_work?: boolean
  is_using_it_for_school?: boolean
  is_personal_project?: boolean
  is_learning_design?: boolean
  is_other?: boolean
  is_org_size_no_answer?: boolean
  is_org_size_just_me?: boolean
  is_org_size_2_to_100?: boolean
  is_org_size_101_to_500?: boolean
  is_org_size_501_to_5000?: boolean
  is_org_size_over_5000?: boolean
  num_admin_pro_teams?: number
  pro_team_at_least_one_billing_cycle?: boolean
  pro_admin_notification_email_enabled?: boolean
  num_admin_orgs?: number
  org_admin_notification_email_enabled?: boolean
  is_design_power_user?: boolean
  max_plan_tier?: string
  max_plan_tier_seat_type?: string
  user_age_bucket_name?: string
  [key: string]: any
}

interface MessageContent {
  surveyId?: string
  timeToReadinessInMs?: number
  [key: string]: any
}

interface SdkMessage {
  type: SdkMessageType
  content: MessageContent
}

interface IframeDimensions {
  height?: number
  width?: number
}

interface ScreenArea {
  rect: DOMRect
  direction: "up" | "left"
}

interface Rect {
  x: number
  y: number
  width: number
  height: number
}

// Default implementation placeholder
export let defaultSdkImplementation = {
  sendMessage() { },
  listenForMatchingMessage: (type: SdkMessageType) => Promise.resolve({
    type,
    content: {},
  }),
  setCallbacks() { },
  tearDown() { },
}

/**
 * Parses a date string with optional regex validation
 * @param dateString - The date string to parse
 * @param validator - Optional regex to validate the date format
 * @returns Parsed timestamp or NaN
 */
function parseDateString(dateString: string, validator?: RegExp): number {
  if (typeof dateString === "string" && (!validator || validator.test(dateString))) {
    return Date.parse(dateString)
  }
  return NaN
}

// User attribute mapping with proper typing
const userAttributeGetters = {
  created_at: ({ user }: { user?: User }) => {
    const parsedDate = parseDateString(user?.created_at || "")
    return Number.isNaN(parsedDate) ? user?.created_at : parsedDate
  },
  signup_date: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => {
    const parsedDate = parseDateString(userAnalyticsData?.signup_date || "", /^\d{4}-\d{2}-\d{2}$/)
    return Number.isNaN(parsedDate) ? userAnalyticsData?.signup_date : parsedDate
  },
  email_type: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.email_type,
  land_product: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.land_product,
  generation: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.generation,
  paid_status: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.paid_status,
  education_user: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.education_user,
  design_max_paid_role: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.design_max_paid_role,
  job_title: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.job_title,
  num_edit_days_30_day: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_edit_days_30_day,
  num_edit_days_60_day: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_edit_days_60_day,
  num_edit_days_90_day: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_edit_days_90_day,
  num_edits_30_day: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_edits_30_day,
  num_edits_60_day: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_edits_60_day,
  num_edits_90_day: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_edits_90_day,
  num_files_created: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_files_created,
  work_location: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => {
    if (userAnalyticsData?.work_location_no_answer)
      return "no_answer"
    if (userAnalyticsData?.is_company)
      return "company"
    if (userAnalyticsData?.is_agency)
      return "agency"
    if (userAnalyticsData?.is_freelancer)
      return "freelancer"
    if (userAnalyticsData?.is_school)
      return "school"
    return undefined
  },
  how_do_you_plan_to_use_figma: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => {
    if (userAnalyticsData?.how_plan_use_figma_no_answer)
      return "no_answer"
    if (userAnalyticsData?.is_work)
      return "work"
    if (userAnalyticsData?.is_using_it_for_school)
      return "school"
    if (userAnalyticsData?.is_personal_project)
      return "personal_project"
    if (userAnalyticsData?.is_learning_design)
      return "learning_design"
    if (userAnalyticsData?.is_other)
      return "other"
    return undefined
  },
  org_size: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => {
    if (userAnalyticsData?.is_org_size_no_answer)
      return "no_answer"
    if (userAnalyticsData?.is_org_size_just_me)
      return "just_me"
    if (userAnalyticsData?.is_org_size_2_to_100)
      return "2_to_100"
    if (userAnalyticsData?.is_org_size_101_to_500)
      return "101_to_500"
    if (userAnalyticsData?.is_org_size_501_to_5000)
      return "501_to_5000"
    if (userAnalyticsData?.is_org_size_over_5000)
      return "over_5000"
    return undefined
  },
  num_admin_pro_teams: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_admin_pro_teams,
  pro_team_at_least_one_billing_cycle: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.pro_team_at_least_one_billing_cycle,
  pro_admin_notification_email_enabled: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.pro_admin_notification_email_enabled,
  num_admin_orgs: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.num_admin_orgs,
  org_admin_notification_email_enabled: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.org_admin_notification_email_enabled,
  is_design_power_user: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.is_design_power_user,
  max_plan_tier: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.max_plan_tier,
  max_plan_tier_seat_type: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.max_plan_tier_seat_type,
  user_age_bucket_name: ({ userAnalyticsData }: { userAnalyticsData?: UserAnalyticsData }) => userAnalyticsData?.user_age_bucket_name,
}

export class SprigSDKManager {
  // Static properties with proper typing
  static iframeUrl: string | undefined = getInitialOptions().sprig_iframe_url
  static iframe: HTMLIFrameElement | null | undefined
  static isSDKReady: boolean = false
  static messageQueue: any[] = []
  static instanceCount: number = 0
  static incomingRequestsForPermissionToShowSurvey: SdkMessage[] = []
  static onAttemptToShowSurveyCallbacks: Array<() => boolean | Promise<boolean>> = []
  static onSurveyCloseCallbacks: Array<() => void> = []
  static windowWidth: number = window.innerWidth
  static windowHeight: number = window.innerHeight
  static screenAreasToAvoid: ScreenArea[] = []
  static isProcessingRequestsForPermissionToShowSurvey: boolean = false
  static tearDownIframeCallback: (() => void) | undefined
  static pageUrl: string = ""

  /**
   * Sends a message to the sandbox iframe
   * @param message - The message to send
   */
  static sendMessage(message: any): void {
    if (!this.iframe?.contentWindow || !this.iframeUrl) {
      logger.warn("[Sprigma] Skipping sending because sandbox iframe is not ready:", message)
      return
    }

    if (!this.isSDKReady) {
      logger.debug("[Sprigma] Sprig SDK is not yet ready, sending message to queue")
      this.messageQueue.push(message)
      logger.debug("[Sprigma] Currently queued messages:", [...this.messageQueue])
      return
    }

    logger.debug(`[Sprigma] Sending message to sandbox at ${this.iframeUrl}:`, message)
    this.iframe.contentWindow.postMessage(message, this.iframeUrl)
  }

  /**
   * Updates the current page URL being tracked
   * @param url - The new URL
   */
  static updatePageUrl(url: string): void {
    if (url !== this.pageUrl) {
      logger.debug(`[Sprigma] Setting 'pageUrl' to ${url}`)
      this.pageUrl = url
      this.sendMessage({
        type: SdkMessageType.Call,
        content: {
          args: ["trackPageView", url],
        },
      })
    }
  }

  /**
   * Sets user data for tracking
   * @param user - User object
   * @param userAnalyticsData - Additional analytics data
   */
  static setUserData(user: User | undefined, userAnalyticsData: UserAnalyticsData | undefined): void {
    const userId = user?.id
    if (!userId)
      return

    logger.debug(`[Sprigma] Setting user ID to ${userId}`)
    this.sendMessage({
      type: SdkMessageType.Call,
      content: {
        args: ["setUserId", userId],
      },
    })

    // Map user attributes using the getters
    const attributes: Record<string, any> = {}
    for (const [key, getter] of Object.entries(userAttributeGetters)) {
      const value = getter({ user, userAnalyticsData })
      if (value !== undefined) {
        attributes[key] = value
      }
    }

    if (Object.keys(attributes).length > 0) {
      logger.debug("[Sprigma] Syncing the following attributes to Sprig:", Object.keys(attributes))
      this.sendMessage({
        type: SdkMessageType.Call,
        content: {
          args: ["setAttributes", attributes],
        },
      })
    }
  }

  /**
   * Processes all queued messages
   */
  static processQueuedMessages(): void {
    if (this.messageQueue.length > 0) {
      logger.debug("[Sprigma] Processing queued messages:", [...this.messageQueue])
      let message
      // eslint-disable-next-line no-cond-assign
      while (message = this.messageQueue.shift()) {
        this.sendMessage(message)
      }
    }
  }

  /**
   * Listens for a specific message type from the sandbox
   * @param type - The message type to listen for
   * @param filter - Optional filter function
   * @param timeoutMs - Optional timeout in milliseconds
   * @returns Promise resolving to the matching message
   */
  static listenForMatchingMessage(
    type: SdkMessageType,
    filter?: (message: SdkMessage) => boolean,
    timeoutMs?: number,
  ): Promise<SdkMessage> {
    return new Promise((resolve, reject) => {
      let timeoutId: number | undefined

      if (timeoutMs !== undefined) {
        timeoutId = window.setTimeout(() => {
          window.removeEventListener("message", handleMessage)
          reject(new Error("Timed out waiting for matching message"))
        }, timeoutMs)
      }

      const handleMessage = (event: MessageEvent) => {
        if (event.data?.type !== type)
          return

        const message: SdkMessage = event.data

        if (event.origin !== this.iframeUrl) {
          logger.warn(`[Sprigma] Ignoring message from unexpected origin ${event.origin}`)
          return
        }

        if (!filter || filter(message)) {
          logger.debug(`[Sprigma] Received matching message from sandbox at ${event.origin}:`, message)
          window.removeEventListener("message", handleMessage)
          if (timeoutId)
            clearTimeout(timeoutId)
          resolve(message)
        }
      }

      window.addEventListener("message", handleMessage)
    })
  }

  /**
   * Handles window resize events
   */
  static onWindowResize(): void {
    logger.debug(`[Sprigma] Sending window dimensions to sandbox: height=${window.innerHeight} width=${window.innerWidth}`)
    this.sendMessage({
      type: SdkMessageType.Call,
      content: {
        args: ["setWindowDimensions", window.innerWidth, window.innerHeight],
      },
    })

    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    this.updateScreenAreasToAvoid()
  }

  /**
   * Sets iframe dimensions
   * @param dimensions - The new dimensions
   */
  static setIframeDimensions(dimensions: IframeDimensions): void {
    if (this.iframe) {
      const { height, width } = dimensions
      logger.debug(`[Sprigma] Updating sandbox iframe dimensions: height=${height ?? "unchanged"} width=${width ?? "unchanged"}`)

      if (height !== undefined) {
        this.iframe.height = height.toString()
      }

      if (width !== undefined) {
        this.iframe.width = width.toString()
      }

      this.updateScreenAreasToAvoid()
    }
  }

  /**
   * Sets screen areas to avoid when positioning the iframe
   * @param areas - Array of screen areas to avoid
   */
  static setScreenAreasToAvoid(areas: ScreenArea[]): void {
    this.screenAreasToAvoid = areas
    if (this.iframe) {
      this.updateScreenAreasToAvoid()
    }
  }

  /**
   * Updates iframe position to avoid specified screen areas
   */
  static updateScreenAreasToAvoid(): void {
    if (!this.iframe)
      return

    const iframeWidth = parseInt(this.iframe.width, 10)
    const iframeHeight = parseInt(this.iframe.height, 10)

    if (this.screenAreasToAvoid.length === 0 || iframeWidth === 0 || iframeHeight === 0) {
      this.setDefaultIframePosition()
      return
    }

    let iframeRect: Rect = {
      x: this.windowWidth - iframeWidth,
      y: this.windowHeight - iframeHeight,
      width: iframeWidth,
      height: iframeHeight,
    }

    let verticalOffset = 0
    let horizontalOffset = 0
    let collisionDetected: boolean

    do {
      collisionDetected = false
      for (const area of this.screenAreasToAvoid) {
        const { rect, direction } = area
        const intersection = this.getIntersection(iframeRect, rect)

        if (intersection) {
          collisionDetected = true
          if (direction === "up") {
            verticalOffset += intersection.height
            iframeRect.y -= intersection.height
          }
          else if (direction === "left") {
            horizontalOffset += intersection.width
            iframeRect.x -= intersection.width
          }
        }
      }
    } while (collisionDetected)

    if (!this.isWithinWindowBounds(iframeRect)) {
      this.setDefaultIframePosition()
      return
    }

    const style = this.iframe.style
    style.bottom = `${verticalOffset}px`
    style.right = `${horizontalOffset}px`
  }

  /**
   * Sets the default iframe position
   */
  static setDefaultIframePosition(): void {
    if (!this.iframe)
      return

    const style = this.iframe.style
    style.bottom = "0"
    style.right = "0"
  }

  /**
   * Checks if a rectangle is within window bounds
   * @param rect - Rectangle to check
   * @returns True if within bounds
   */
  static isWithinWindowBounds(rect: Rect): boolean {
    return (
      rect.x >= 0
      && rect.y >= 0
      && rect.x + rect.width <= this.windowWidth
      && rect.y + rect.height <= this.windowHeight
    )
  }

  /**
   * Gets the intersection of two rectangles
   * @param rect1 - First rectangle
   * @param rect2 - Second rectangle
   * @returns Intersection rectangle or undefined if no intersection
   */
  static getIntersection(rect1: Rect, rect2: Rect): Rect | undefined {
    const x = Math.max(rect1.x, rect2.x)
    const y = Math.max(rect1.y, rect2.y)
    const right = Math.min(rect1.x + rect1.width, rect2.x + rect2.width)
    const bottom = Math.min(rect1.y + rect1.height, rect2.y + rect2.height)
    const width = right - x
    const height = bottom - y

    return width <= 0 || height <= 0 ? undefined : { x, y, width, height }
  }

  /**
   * Processes incoming requests for permission to show surveys
   */
  static async processIncomingRequestsForPermissionToShowSurvey(): Promise<void> {
    if (this.isProcessingRequestsForPermissionToShowSurvey) {
      return
    }

    this.isProcessingRequestsForPermissionToShowSurvey = true

    while (this.incomingRequestsForPermissionToShowSurvey.length > 0) {
      const request = this.incomingRequestsForPermissionToShowSurvey.shift()
      if (!request)
        continue

      const surveyId = request.content.surveyId
      logger.debug(`[Sprigma] Requesting permission to show survey ${surveyId}, handlers =`, this.onAttemptToShowSurveyCallbacks)

      try {
        const results = await Promise.all(this.onAttemptToShowSurveyCallbacks.map(callback => callback()))
        const canShow = results.every(result => result)

        this.sendMessage({
          type: SdkMessageType.GetPermissionToShowSurvey,
          content: {
            surveyId,
            canShow,
          },
        })
      }
      catch (error) {
        logger.error(`[Sprigma] Failed to get permission to show survey ${surveyId}, reason =`, error)
        this.sendMessage({
          type: SdkMessageType.GetPermissionToShowSurvey,
          content: {
            surveyId,
            canShow: false,
          },
        })
      }
    }

    this.isProcessingRequestsForPermissionToShowSurvey = false
  }

  // Instance properties
  private onAttemptToShowSurvey: (() => boolean | Promise<boolean>) | undefined
  private onSurveyClose: (() => void) | undefined

  constructor() {
    // Initialize iframe if not already done
    if (SprigSDKManager.iframe === undefined) {
      this.initializeIframe().catch((error) => {
        logger.error("[Sprigma] Failed to initialize iframe:", error)
      })
    }
    else {
      logger.debug("[Sprigma] Sandbox iframe has already been initialized")
    }

    SprigSDKManager.instanceCount++
  }

  /**
   * Initializes the sandbox iframe
   */
  private async initializeIframe(): Promise<void> {
    // Handle SetContainerDimensions messages
    const handleSetContainerDimensions = async () => {
      const message = await this.listenForMatchingMessage(SdkMessageType.SetContainerDimensions)
      if (SprigSDKManager.instanceCount !== 0 && message) {
        SprigSDKManager.setIframeDimensions(message.content as any)
        handleSetContainerDimensions()
      }
    }

    // Handle Error messages
    const handleError = async () => {
      const message = await this.listenForMatchingMessage(SdkMessageType.Error)
      if (SprigSDKManager.instanceCount !== 0 && message) {
        trackEventAnalytics("sprig_sandbox_error", message.content)
        handleError()
      }
    }

    // Handle GetPermissionToShowSurvey messages
    const handleGetPermissionToShowSurvey = async () => {
      const message = await this.listenForMatchingMessage(SdkMessageType.GetPermissionToShowSurvey)

      if (SprigSDKManager.instanceCount === 0) {
        SprigSDKManager.incomingRequestsForPermissionToShowSurvey = []
        return
      }

      if (message) {
        SprigSDKManager.incomingRequestsForPermissionToShowSurvey.push(message)
        SprigSDKManager.processIncomingRequestsForPermissionToShowSurvey()
      }

      handleGetPermissionToShowSurvey()
    }

    // Handle SurveyClosed messages
    const handleSurveyClosed = async () => {
      const message = await this.listenForMatchingMessage(SdkMessageType.SurveyClosed)
      if (SprigSDKManager.instanceCount !== 0 && message) {
        SprigSDKManager.onSurveyCloseCallbacks.forEach(callback => callback())
        handleSurveyClosed()
      }
    }

    // Main initialization logic
    if (!SprigSDKManager.iframeUrl) {
      logger.warn("[Sprigma] Skipping loading Sprig SDK because `sprig_iframe_url` is not set")
      SprigSDKManager.iframe = null
      return
    }

    const iframe = document.createElement("iframe")
    iframe.src = SprigSDKManager.iframeUrl
    iframe.ariaHidden = "true"
    iframe.tabIndex = -1
    iframe.height = "0"
    iframe.width = "0"
    iframe.style.position = "fixed"
    iframe.style.bottom = "0"
    iframe.style.right = "0"
    iframe.style.zIndex = secondaryModalZ.toString()
    iframe.style.colorScheme = "normal"
    iframe.style.transition = "right 0.3s, bottom 0.3s"

    document.body.appendChild(iframe)
    SprigSDKManager.iframe = iframe

    logger.debug("[Sprigma] Sandbox iframe injected into DOM")

    const urlUpdateInterval = setInterval(() => {
      SprigSDKManager.updatePageUrl(normalizeUrl(location.href))
    }, 100)

    SprigSDKManager.tearDownIframeCallback = () => {
      logger.debug("[Sprigma] Sandbox iframe is tearing down as there are no users left")
      window.removeEventListener("resize", SprigSDKManager.onWindowResize)
      SprigSDKManager.isSDKReady = false
      clearInterval(urlUpdateInterval)
      SprigSDKManager.iframe = undefined
      document.body.removeChild(iframe)
    }

    let sdkReadyMessage: SdkMessage | undefined
    try {
      sdkReadyMessage = await this.listenForMatchingMessage(
        SdkMessageType.SDKReady,
        undefined,
        10000,
      )
    }
    catch  {
      trackEventAnalytics("sprig_sdk_loading_timeout", {
        threshold: 10000,
      })
    }

    if (!sdkReadyMessage || SprigSDKManager.instanceCount === 0) {
      return
    }

    SprigSDKManager.isSDKReady = true
    trackEventAnalytics("sprig_sdk_ready", {
      time_to_readiness: sdkReadyMessage.content.timeToReadinessInMs,
    })

    logger.info("[Sprigma] Sprig SDK is ready")

    const anonymousId = getAnonymousId()
    if (anonymousId) {
      logger.debug(`[Sprigma] Setting anonymous ID to ${anonymousId}`)
      this.sendMessage({
        type: SdkMessageType.Call,
        content: {
          args: ["setPartnerAnonymousId", anonymousId],
        },
      })
    }

    SprigSDKManager.setUserData(
      getInitialOptions().user_data,
      getInitialOptions().user_analytics_data,
    )

    SprigSDKManager.onWindowResize()
    window.addEventListener("resize", SprigSDKManager.onWindowResize)

    // Start message handlers
    handleSetContainerDimensions()
    handleError()
    handleGetPermissionToShowSurvey()
    handleSurveyClosed()

    SprigSDKManager.processQueuedMessages()
  }

  /**
   * Sends a message through the SDK manager
   * @param args - Message arguments
   */
  sendMessage(...args: any[]): void {
    this.sendMessage(...args)
  }

  /**
   * Listens for a matching message
   * @param args - Message listening arguments
   * @returns Promise resolving to the matching message
   */
  listenForMatchingMessage(...args: any[]): Promise<SdkMessage> {
    return this.listenForMatchingMessage(...args)
  }

  /**
   * Sets callbacks for survey events
   * @param callbacks - Callback configuration
   */
  setCallbacks(callbacks: {
    onAttemptToShowSurvey?: () => boolean | Promise<boolean>
    onSurveyClose?: () => void
  }): void {
    const { onAttemptToShowSurvey, onSurveyClose } = callbacks

    // Remove existing callbacks
    if (this.onAttemptToShowSurvey) {
      SprigSDKManager.onAttemptToShowSurveyCallbacks
        = SprigSDKManager.onAttemptToShowSurveyCallbacks.filter(cb => cb !== this.onAttemptToShowSurvey)
      this.onAttemptToShowSurvey = undefined
    }

    if (this.onSurveyClose) {
      SprigSDKManager.onSurveyCloseCallbacks
        = SprigSDKManager.onSurveyCloseCallbacks.filter(cb => cb !== this.onSurveyClose)
      this.onSurveyClose = undefined
    }

    // Add new callbacks
    if (onAttemptToShowSurvey) {
      this.onAttemptToShowSurvey = onAttemptToShowSurvey
      SprigSDKManager.onAttemptToShowSurveyCallbacks.push(onAttemptToShowSurvey)
    }

    if (onSurveyClose) {
      this.onSurveyClose = onSurveyClose
      SprigSDKManager.onSurveyCloseCallbacks.push(onSurveyClose)
    }
  }

  /**
   * Tears down the SDK instance
   */
  tearDown(): void {
    SprigSDKManager.instanceCount--

    this.setCallbacks({
      onAttemptToShowSurvey: undefined,
      onSurveyClose: undefined,
    })

    if (SprigSDKManager.instanceCount === 0 && SprigSDKManager.tearDownIframeCallback) {
      SprigSDKManager.tearDownIframeCallback()
      SprigSDKManager.tearDownIframeCallback = undefined
    }
  }
}

// Export with original names
export const An = defaultSdkImplementation
export const Ay = SprigSDKManager
