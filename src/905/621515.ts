import { useSetAtom } from "jotai"
import { zip } from "lodash-es"
import { useCallback, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { reportError } from "../905/11"
import { overlayIdsAtom, overlayStateAtom } from "../905/12032"
import { isAllowedToSeeNux } from "../905/14910"
import { useMemoShallow } from "../905/19536"
import { BaseRule } from "../905/92222"
import { e as _$$e } from "../905/107684"
import { setCuratorLoggingLevel } from "../905/121508"
import { LifecycleManager } from "../905/147383"
import { ServiceCategories } from "../905/165054"
import { NotificationCategory } from "../905/170564"
import { debugState } from "../905/407919"
import { trackEventAnalytics } from "../905/449184"
import { useEventForwarder } from "../905/453826"
import { handleAtomEvent } from "../905/502364"
import { checkLifecycleConditions, createLifecycleAtomFamily, getBlockMessage, incrementLifecycleCounter } from "../905/539601"
import { globalPerfTimer } from "../905/542194"
import { getFeatureFlags } from "../905/601108"
import { getQueryParam } from "../905/609392"
import { E1 } from "../905/696065"
import { useSingleEffect } from "../905/791079"
import { h as _$$h } from "../905/881732"
import { BlockReasonType, ChannelID, ExperienceManager, OverlayManager } from "../905/953718"
import { appendUUID, removeUUID } from "../905/958284"
import { resourceUtils } from "../905/989992"
import { logCuratorEvent } from "../905/994802"
import { atom, atomStoreManager, atomWithDefault, useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355"
import { getInitialOptions, getLaunchDarklyFlagsExport, isDevEnvironment } from "../figma_app/169182"
import { ModalPriority } from "../figma_app/268271"
import { modalTypeAtom, notificationTypeAtom, selectedViewAtom } from "../figma_app/386952"
import { isSyntheticTesterEmail } from "../figma_app/416935"
import { throwTypeError } from "../figma_app/465776"
import { userFlagAtomFamily } from "../figma_app/545877"
import { NT } from "../figma_app/579169"
import { PriorityContext } from "../figma_app/608914"
import { LimitDevModeUpsellFrequencyRule } from "../figma_app/621201"
import { CURATOR_GLOBAL_REQUEST_CLOSE } from "../figma_app/916469"

// Renamed variables, added types, simplified logic, and improved readability
// Origin: $$es0 function and related variables from curator overlay system

// Overlay manager atom
const overlayManagerAtom = atomWithDefault(() => new OverlayManager())

// Rule to prevent overlays from showing while a modal is displayed
const preventModalCollisionsRule = new BaseRule(
  "PreventModalCollisions",
  "A rule that prevents overlays from being shown while a modal is displayed",
  (context, overlay) => {
    if (!context.uiState.modalShownType) {
      return true
    }

    if (overlay.attributes.allowShowingIfModalPresent) {
      trackEventAnalytics("curator_collision", {
        blocked_overlay_id: removeUUID(overlay.id),
        blocking_modal_type: context.uiState.modalShownType,
        was_allowlisted: true,
      })
      return true
    }

    trackEventAnalytics("curator_collision", {
      blocked_overlay_id: removeUUID(overlay.id),
      blocking_modal_type: context.uiState.modalShownType,
    })
    return false
  },
)

// Rule to prevent overlays from showing while a notification is displayed
const preventNotificationCollisionsRule = new BaseRule(
  "PreventNotificationCollisions",
  "A rule that prevents overlays from being shown while a notification is displayed",
  (context, overlay) => {
    if (context.uiState.currentNotificationType === null) {
      return true
    }

    const notificationCategory = NotificationCategory[context.uiState.currentNotificationType]
    trackEventAnalytics("curator_collision", {
      blocked_overlay_id: removeUUID(overlay.id),
      blocking_notif_type: notificationCategory,
    })
    return false
  },
)

// Rule to deny overlays when request modal is open on team page
const denyForRequestModalRule = new BaseRule(
  "DenyForRequestModal",
  "Don't show any overlays on the team page if the request to upgrade pro modal is open",
  (context) => {
    return !(context.uiState.modalShownType === E1 && context.uiState.selectedView.view === "team")
  },
)

// Rule to deny overlays for synthetic test users
const denyForSyntheticTestUserRule = new BaseRule(
  "DenyForSyntheticTestUser",
  "Don't show to synthetic test users (in E2E tests)",
  (context) => {
    return !isSyntheticTesterEmail(context.userData?.email) || !!getQueryParam("allow_synthetic_tester_overlays")
  },
)

// Rule to deny overlays if NUX has not been shown
const denyIfNuxHasNotShownRule = new BaseRule(
  "DenyIfNuxHasNotShown",
  "Don't show any overlays if the user has not seen NUX",
  (context, overlay) => {
    const overlayId = removeUUID(overlay.id)
    const featureFlagEnabled = getFeatureFlags().curator_deny_if_nux_has_not_shown

    if (
      overlay.priority === ModalPriority.URGENT_ALERT
      || !featureFlagEnabled
      || !_$$e.some(id => context.allMountedOverlays.includes(id))
      || context.uiState.selectedView.view === "prototype"
    ) {
      return true
    }

    const userInfo = {
      emailValidatedAt: context.userData?.email_validated_at ? new Date(context.userData?.email_validated_at) : null,
      jobTitle: context.jobTitle,
    }

    return !(!_$$e.includes(overlayId) && !isAllowedToSeeNux(userInfo))
  },
)

// Rule to deny overlays in inline preview
const denyInInlinePreviewRule = new BaseRule(
  "DenyInInlinePreview",
  "Hide all overlays inside the inline preview",
  (context) => {
    return context.uiState.selectedView.view !== "prototype" || !context.uiState.selectedView.inlinePreview
  },
)

// Rule to deny overlays based on kill switch
const denyInKillSwitchRule = new BaseRule(
  "DenyInKillSwitch",
  "Don't show any overlays that belong to the LaunchDarkly flag when the kill switch is enabled",
  (context, overlay) => {
    const overlayId = removeUUID(overlay.id)
    const disallowedOverlays = getLaunchDarklyFlagsExport().curator_disallow_overlay_rule

    return !disallowedOverlays
      || !Array.isArray(disallowedOverlays)
      || !disallowedOverlays.includes(overlayId)
  },
)

// Atom to collect UI state and user data for overlay rules
const overlayRuleContextAtom = atom((get) => {
  const selectedView = get(selectedViewAtom)
  const modalType = get(modalTypeAtom)
  const notificationType = get(notificationTypeAtom)
  const jobTitleResource = get(NT)
  const overlayIds = get(overlayIdsAtom)
  const devModeUpsellFlag = get(userFlagAtomFamily("last_seen_dev_mode_upsell"))

  const jobTitle = typeof jobTitleResource === "string" || jobTitleResource === undefined
    ? jobTitleResource
    : jobTitleResource.status === "loaded"
      ? jobTitleResource.data
      : undefined

  return {
    uiState: {
      selectedView,
      modalShownType: modalType,
      currentNotificationType: notificationType,
    },
    userData: getInitialOptions().user_data,
    lastSeenDevModeUpsell: devModeUpsellFlag.data?.updatedAt,
    jobTitle: jobTitle || getInitialOptions().user_data?.profile?.job_title,
    allMountedOverlays: overlayIds.map(removeUUID),
  }
})

// Overlay channel implementation for experience manager
class OverlayChannel {
  id = ChannelID.Overlay
  currentExperience = undefined
  queuedExperiences: any[] = []

  constructor() {
    // Initialization done in field declarations
  }

  getContext() {
    return atomStoreManager.get(overlayRuleContextAtom)
  }

  getRules() {
    return [
      denyInKillSwitchRule,
      denyInInlinePreviewRule,
      _$$h,
      denyForSyntheticTestUserRule,
      denyForRequestModalRule,
      LimitDevModeUpsellFrequencyRule,
      denyIfNuxHasNotShownRule,
      preventModalCollisionsRule,
      preventNotificationCollisionsRule,
    ]
  }
}

// Experience manager atom for overlay channel
const experienceManagerAtom = atom(() => new ExperienceManager({
  [ChannelID.Overlay]: new OverlayChannel(),
}))

// Global Curator API
window.Curator = {
  enableTraceLogging: () => setCuratorLoggingLevel("trace"),
  enableDebugLogging: () => setCuratorLoggingLevel("debug"),
  disableLogging: () => setCuratorLoggingLevel("disabled"),

  getMountedOverlays() {
    return atomStoreManager.get(overlayIdsAtom)
  },

  sendEvent(event) {
    handleAtomEvent(event)
    return true
  },

  getExperienceSelectorChannels() {
    return atomStoreManager.get(experienceManagerAtom).getImmutableChannels()
  },

  getLoadingOverlays() {
    return atomStoreManager.get(overlayManagerAtom).getImmutableLoadingOverlays()
  },

  getOverlaysBlockedByDataDependencies() {
    return atomStoreManager.get(overlayManagerAtom).getImmutableQueuedOverlays()
  },

  resetUserFlags(flagNames) {
    const resetFlags = flagNames.reduce((acc, flagName) => ({
      ...acc,
      [flagName]: false,
    }), {})

    debugState.dispatch({
      type: "USER_FLAG_POST",
      payload: resetFlags,
    })
  },
}

// Regular expression to match UUID suffixes
const UUID_REGEX = /__[0-9A-Z\-]+$/i

// Enumeration for overlay completion reasons
enum OverlayCompletionReason {
  Deactivated = "deactivated",
  Unmounted = "unmounted",
  GlobalRequestClose = "global_request_close",
}

// Atom to track if overlay system has been initialized
const isOverlaySystemInitializedAtom = atom(false)

// Utility function to convert resource state to resource utils format
function convertResourceState(resource: any) {
  if (resource.state === "hasData") {
    return resourceUtils.loaded(resource.data)
  }
  else if (resource.state === "hasError") {
    return resourceUtils.error(resource.error)
  }
  return resourceUtils.loading()
}

// Utility function to check if resource is loading
function isResourceLoading(resource: any) {
  return resource.status === "loading"
}

// Constants for performance tracking
const CURATOR_PERFORMANCE_KEY = "curator_perf"
const DEPENDENCY_TIMEOUT_MESSAGE = "timed out"

// Main overlay hook function
export function useOverlay(
  { overlay, ...overlayProps }: { overlay: any, [key: string]: any },
  dependencies: any[] = [],
) {
  const overlayId = overlay.id
  const [uniqueOverlayId] = useState(() => appendUUID(overlayId))

  // Get overlay priority with context consideration
  const priority = useMemo(() => {
    const priorityContext = useContext(PriorityContext)
    const ref = useRef(false)

    if (!priorityContext) {
      return overlayProps.priority
    }

    const galleryPriority = priorityContext.priorityMap.get(overlayId)

    if (galleryPriority) {
      return getFeatureFlags().curator_file_browser_ordering ? galleryPriority : overlayProps.priority
    }

    if (!ref.current && getFeatureFlags().curator_file_browser_ordering) {
      reportError(ServiceCategories.GROWTH_PLATFORM, new Error("[Curator] Overlay not registered with gallery"), {
        tags: {
          overlayId,
          galleryName: priorityContext.name,
        },
      })
      ref.current = true
    }

    return getFeatureFlags().curator_file_browser_ordering ? 0 : overlayProps.priority
  }, [overlayId, overlayProps.priority])

  const setOverlayState = useSetAtom(overlayStateAtom)
  const overlayManager = useAtomWithSubscription(overlayManagerAtom)
  const experienceManager = useAtomWithSubscription(experienceManagerAtom)
  const setOverlayIds = useSetAtom(overlayIdsAtom)
  const lifecycleAtom = useAtomWithSubscription(createLifecycleAtomFamily(overlay.lifecycle))
  const lifecycleAtomRef = useRef(lifecycleAtom)
  lifecycleAtomRef.current = lifecycleAtom

  const [isInitialized, setIsInitialized] = useAtomValueAndSetter(isOverlaySystemInitializedAtom)
  const [isShowing, setIsShowing] = useState(false)
  const isShowingRef = useRef(isShowing)
  isShowingRef.current = isShowing

  const showStartTimeRef = useRef<number | undefined>(undefined)

  // Process overlay dependencies
  const dependencyResult = useMemo(() => {
    const allDependencies = useMemoShallow(() => [lifecycleAtom, ...dependencies], [lifecycleAtom, dependencies])

    // Dependency validation effect
    useEffect(() => {
      function mapResources(resources: any[]) {
        return resources.map(resource => "state" in resource ? convertResourceState(resource) : resource)
      }

      const handleError = useCallback((errorType: string, message: string) => {
        if (isDevEnvironment()) {
          console.error(message)
        }
        trackEventAnalytics("curator_dependency_error", {
          errorType,
          overlay: overlayId,
        }, {
          forwardToDatadog: true,
        })
      }, [overlayId])

      const hasErrorsRef = useRef(false)
      const becameUnloadedRef = useRef(false)
      const previousResourcesRef = useRef(mapResources(dependencies ?? []))

      if ((dependencies?.length ?? 0) === 0 && previousResourcesRef.current.length === 0) {
        return
      }

      const currentResources = mapResources(dependencies ?? [])

      if (currentResources.length !== previousResourcesRef.current.length) {
        if (!hasErrorsRef.current) {
          handleError("changed_dependency_count", `[Error] Number of dependencies changed between calls to useOverlay in overlay \`${overlayId}\`.`)
          hasErrorsRef.current = true
        }
        return
      }

      let becameUnloaded = becameUnloadedRef.current
      for (const [current, previous] of zip(currentResources, previousResourcesRef.current)) {
        becameUnloaded ||= current.status !== "loaded"
        if (current == null || previous == null
          || (becameUnloaded && previous.status === "loaded")) {
          break
        }
      }

      if (becameUnloaded && !becameUnloadedRef.current) {
        handleError("unloaded_dependencies", `[useOverlay] One or more dependency statuses became unloaded between updates in overlay '${overlayId}'.`)
        becameUnloadedRef.current = true
      }

      previousResourcesRef.current = currentResources
    }, [dependencies, overlayId])

    // Timeout handling
    const [hasTimedOut, setHasTimedOut] = useState(false)
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        if (resourceUtils.all(allDependencies).status === "loading") {
          setHasTimedOut(true)
          trackEventAnalytics("curator_dependencies_timed_out", {
            overlay: overlayId,
          }, {
            forwardToDatadog: true,
          })
        }
      }, 9000)

      return () => clearTimeout(timeoutId)
    }, [allDependencies, overlayId])

    return hasTimedOut
      ? resourceUtils.error([DEPENDENCY_TIMEOUT_MESSAGE])
      : resourceUtils.all(allDependencies.map(dep => "state" in dep ? convertResourceState(dep) : dep))
  }, [dependencies, lifecycleAtom, overlayId])

  const dependencyResultRef = useRef(dependencyResult)
  dependencyResultRef.current = dependencyResult

  const [experimentResult, setExperimentResult] = useState<any>(undefined)

  const { experiment } = overlayProps
  const experimentCheckRef = useRef(experiment?.check)
  experimentCheckRef.current = experiment?.check

  // Post-check functions for experiments and lifecycle
  const [postCheckFunctions] = useState(() => [
    () => {
      if (experiment == null)
        return

      const checkFunction = experimentCheckRef.current
      if (!checkFunction)
        return

      const result = checkFunction()
      setExperimentResult(result)

      const predicateValue = experiment.predicate(result)
      let postCheckValue = false

      if (dependencyResultRef.current.status === "loaded") {
        postCheckValue = experiment.postCheck(...getDependencyData(dependencyResultRef.current.data))
      }
      else if (dependencyResultRef.current.status === "loading") {
        reportError(ServiceCategories.GROWTH_PLATFORM, new Error("[Curator] Experiment postCheck unexpectedly did not have loaded data dependencies"), {
          tags: {
            overlayId,
            dependencyStatus: dependencyResultRef.current.status,
          },
        })
      }

      if (predicateValue && postCheckValue) {
        logCuratorEvent({
          type: "resumed",
          name: "experiment_check_passed",
          properties: {
            overlayId: uniqueOverlayId,
          },
        }, "debug")
        return
      }

      logCuratorEvent({
        type: "failed",
        name: "experiment_check_failed",
        properties: {
          overlayId: uniqueOverlayId,
          predicateValue,
          postCheckValue,
        },
      }, "debug")

      return {
        reasonType: BlockReasonType.ExperimentCheckFail,
      }
    },

    () => {
      if (overlay.lifecycle != null) {
        if (lifecycleAtomRef.current.status !== "loaded") {
          reportError(ServiceCategories.GROWTH_PLATFORM, new Error("[Curator] Lifecycle postCheck unexpectedly did not have loaded data dependencies"), {
            tags: {
              overlayId,
              dependencyStatus: dependencyResultRef.current.status,
            },
          })
          return
        }

        return checkLifecycleConditions({
          ...lifecycleAtomRef.current.data,
          lifecycleConfig: overlay.lifecycle,
        })
      }
    },
  ])

  // Performance tracking for dependencies
  const dependencyLoadTimeRef = useMemo(() => {
    const ref = useRef(0)
    const key = "curator_deps_loaded"

    useLayoutEffect(() => {
      globalPerfTimer.start(key, {
        key: uniqueOverlayId,
      })

      return () => {
        globalPerfTimer.delete(key, uniqueOverlayId)
      }
    }, [])

    useLayoutEffect(() => {
      if (dependencyResult.status === "loaded") {
        ref.current = globalPerfTimer.tryStop(key, uniqueOverlayId) ?? 0
      }
      else if (dependencyResult.status === "errors" || dependencyResult.status === "disabled") {
        globalPerfTimer.delete(key, uniqueOverlayId)
      }
    }, [dependencyResult.status, overlayId, uniqueOverlayId])

    return ref
  }, [overlayId, uniqueOverlayId, dependencyResult.status])

  const queueDurationRef = useRef(0)
  const dependencyUpdateCallbackRef = useRef<((result: any) => void) | undefined>(undefined)

  useEffect(() => {
    dependencyUpdateCallbackRef.current?.(dependencyResult)
  }, [dependencyResult])

  // Function to complete an overlay
  const completeOverlay = useCallback((reason: OverlayCompletionReason, requester?: string) => {
    if (isShowingRef.current) {
      if (showStartTimeRef.current) {
        const timeShownSeconds = (performance.now() - showStartTimeRef.current) / 1000
        const requesterValue = requester ?? null

        trackEventAnalytics("curator_content_hidden", {
          overlay_id: overlayId,
          timeShownSec: timeShownSeconds,
          completeReason: reason,
          completeRequester: requesterValue,
        }, {
          forwardToDatadog: true,
        })

        showStartTimeRef.current = undefined
      }

      setIsShowing(false)
      experienceManager.completeExperience(uniqueOverlayId)
      setOverlayState(null)
    }
  }, [overlayId, uniqueOverlayId, experienceManager, setOverlayState])

  // Handle global close events
  useEventForwarder(uniqueOverlayId, CURATOR_GLOBAL_REQUEST_CLOSE, ({
    properties: {
      requester,
    },
  }) => {
    completeOverlay(OverlayCompletionReason.GlobalRequestClose, requester)
  })

  // Cleanup effects
  useEffect(() => () => {
    if (isShowingRef.current) {
      completeOverlay(OverlayCompletionReason.Unmounted)
    }
    else {
      experienceManager.dequeueExperience(uniqueOverlayId)
    }
  }, [completeOverlay, experienceManager, uniqueOverlayId])

  useEffect(() => () => {
    overlayManager.removeOverlay(uniqueOverlayId)
  }, [overlayManager, uniqueOverlayId])

  // Initialization effect
  useSingleEffect(() => {
    if (!isInitialized) {
      setIsInitialized(true)
      LifecycleManager.removeStaleLocalStorageLifecycleNames()
    }

    logCuratorEvent({
      type: "triggered",
      name: "overlay_mounted",
      properties: {
        overlayId: uniqueOverlayId,
        priority,
      },
    }, "debug")

    setOverlayIds({
      type: "mount",
      uniqueOverlayId,
    })

    return () => {
      logCuratorEvent({
        type: "triggered",
        name: "overlay_unmounted",
        properties: {
          overlayId: uniqueOverlayId,
        },
      }, "debug")

      setOverlayIds({
        type: "unmount",
        uniqueOverlayId,
      })
    }
  })

  // Callback to queue an overlay experience
  const queueExperience = useCallback((options: any) => {
    const experienceConfig = {
      id: uniqueOverlayId,
      priority,
      channelID: ChannelID.Overlay,

      onShow: () => {
        setIsShowing(true)

        if (overlay.lifecycle) {
          incrementLifecycleCounter(overlay.lifecycle)
        }

        options?.onShow?.()

        trackEventAnalytics("curator_content_shown", {
          shown: overlayId,
          overlay_id: overlayId,
        }, {
          forwardToDatadog: true,
        })

        logCuratorEvent({
          type: "output",
          name: "overlay_showing",
          properties: {
            overlayId: uniqueOverlayId,
          },
        }, "debug")

        showStartTimeRef.current = performance.now()
        setOverlayState(overlayId)

        const totalShowTime = globalPerfTimer.tryStop(CURATOR_PERFORMANCE_KEY, uniqueOverlayId)
        if (totalShowTime) {
          trackEventAnalytics(CURATOR_PERFORMANCE_KEY, {
            totalShowMs: totalShowTime,
            dependenciesLoadingMs: dependencyLoadTimeRef.current,
            queuedMs: queueDurationRef.current,
            overlayId,
          }, {
            forwardToDatadog: true,
          })
          dependencyLoadTimeRef.current = 0
        }
      },

      onBlocked: (blockInfo: any) => {
        switch (blockInfo.reasonType) {
          case BlockReasonType.ExistingExperience:
          case BlockReasonType.HigherPriExperience: {
            const blockProperties = {
              overlayId: uniqueOverlayId,
              blockingOverlayId: blockInfo.blocker.id,
            }

            if (overlay.queueOnBlock) {
              logCuratorEvent({
                type: "paused",
                name: "paused_on_current_overlay",
                properties: blockProperties,
              }, "debug")
            }
            else {
              logCuratorEvent({
                type: "failed",
                name: "failed_on_current_overlay",
                properties: blockProperties,
              }, "debug")
            }

            const cleanBlockingId = blockInfo.blocker.id.replace(UUID_REGEX, "")
            options?.onBlocked?.(cleanBlockingId)

            trackEventAnalytics("curator_content_blocked", {
              blocked: overlayId,
              blocking: cleanBlockingId,
              overlay_id: overlayId,
              blocked_priority: priority,
              blocking_priority: blockInfo.blocker.priority,
              block_type: blockInfo.reasonType,
            }, {
              forwardToDatadog: true,
            })

            globalPerfTimer.delete(CURATOR_PERFORMANCE_KEY, uniqueOverlayId)
            break
          }

          case BlockReasonType.ExperimentCheckFail:
            break

          case BlockReasonType.RuleFail:
            logCuratorEvent({
              type: "failed",
              name: "rule_check_failed",
              properties: {
                overlayId: uniqueOverlayId,
                name: blockInfo.rule.name,
                description: blockInfo.rule.description,
              },
            }, "debug")
            break

          case BlockReasonType.LifecycleCheckFail:
            logCuratorEvent({
              type: "failed",
              name: "lifecycle_check_failed",
              properties: {
                overlayId: uniqueOverlayId,
                description: getBlockMessage(blockInfo.cause),
              },
            }, "debug")
            break

          default:
            throwTypeError(blockInfo)
        }
      },

      postChecks: postCheckFunctions,
      queueOnBlock: overlay.queueOnBlock ?? false,
      attributes: {
        allowShowingIfModalPresent: !!overlay.allowShowingIfModalPresent,
      },
    }

    experienceManager.queueExperience(experienceConfig)
  }, [
    overlay.queueOnBlock,
    overlay.allowShowingIfModalPresent,
    overlay.lifecycle,
    dependencyLoadTimeRef,
    experienceManager,
    priority,
    postCheckFunctions,
    overlayId,
    setOverlayState,
    uniqueOverlayId,
  ])

  // Callback to show an overlay
  const showOverlay = useCallback((showOptions?: any) => {
    if (isShowingRef.current)
      return

    globalPerfTimer.start(CURATOR_PERFORMANCE_KEY, {
      key: uniqueOverlayId,
    })

    logCuratorEvent({
      type: "triggered",
      name: "overlay_show_called",
      properties: {
        overlayId: uniqueOverlayId,
      },
    }, "debug")

    const overlayConfig = {
      id: uniqueOverlayId,
      priority,
      queryResult: dependencyResultRef.current,
    }

    function handleDependencyResult(result: any) {
      if (result.status === "errors") {
        overlayManager.removeOverlay(overlayConfig.id)
        showOptions?.onLoadFailed?.(result.errors)

        const hasTimeoutError = result.errors.includes(DEPENDENCY_TIMEOUT_MESSAGE)
        logCuratorEvent({
          type: "failed",
          name: "data_dependencies_load_error",
          properties: {
            overlayId: uniqueOverlayId,
            timedOut: hasTimeoutError,
            errors: result.errors,
          },
        }, "debug")

        globalPerfTimer.delete(CURATOR_PERFORMANCE_KEY, uniqueOverlayId)
        return
      }

      if (result.status === "disabled") {
        overlayManager.removeOverlay(overlayConfig.id)
        logCuratorEvent({
          type: "failed",
          name: "data_dependencies_disabled",
          properties: {
            overlayId: uniqueOverlayId,
          },
        }, "debug")

        globalPerfTimer.delete(CURATOR_PERFORMANCE_KEY, uniqueOverlayId)
        return
      }

      if (result.status === "loaded") {
        logCuratorEvent({
          type: "resumed",
          name: "data_dependencies_loaded",
          properties: {
            overlayId: uniqueOverlayId,
            dataDependencies: result.data,
          },
        }, "trace")

        if (showOptions?.canShow != null && !showOptions.canShow(...getDependencyData(result.data))) {
          overlayManager.removeOverlay(overlayConfig.id)
          logCuratorEvent({
            type: "failed",
            name: "can_show_failed",
            properties: {
              overlayId: uniqueOverlayId,
              dataDependencies: result.data,
            },
          }, "debug")

          globalPerfTimer.delete(CURATOR_PERFORMANCE_KEY, uniqueOverlayId)
          return
        }

        overlayManager.showOverlay(overlayConfig.id, (showResult: any) => {
          queueDurationRef.current = "didNotQueue" in showResult ? 0 : showResult.queueDuration
          queueExperience(showOptions)
        })
      }
    }

    overlayManager.updateOverlay(overlayConfig)

    if (!isResourceLoading(dependencyResultRef.current)) {
      handleDependencyResult(dependencyResultRef.current)
      return
    }

    logCuratorEvent({
      type: "paused",
      name: "data_dependencies_loading",
      properties: {
        overlayId: uniqueOverlayId,
      },
    }, "trace")

    dependencyUpdateCallbackRef.current = (result) => {
      overlayManager.updateOverlay({
        id: overlayConfig.id,
        priority,
        queryResult: result,
      })

      if (!isResourceLoading(result)) {
        handleDependencyResult(result)
        dependencyUpdateCallbackRef.current = undefined
      }
    }
  }, [uniqueOverlayId, priority, overlayManager, queueExperience])

  // Callback to deactivate an overlay
  const deactivateOverlay = useCallback(() => {
    completeOverlay(OverlayCompletionReason.Deactivated)
  }, [completeOverlay])

  return useMemo(() => ({
    show: showOverlay,
    complete: deactivateOverlay,
    isShowing,
    experimentResult,
    uniqueId: uniqueOverlayId,
  }), [showOverlay, deactivateOverlay, isShowing, experimentResult, uniqueOverlayId])
}

// Helper function to extract dependency data
function getDependencyData(dependencies: any[]) {
  const [, ...rest] = dependencies
  return rest
}

// Export with original name for compatibility
export const e = useOverlay
