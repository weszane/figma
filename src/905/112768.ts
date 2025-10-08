import { useCallback, useMemo } from "react"
import { jsx, jsxs } from "react/jsx-runtime"
import { AlreadyMaxUpscaledError, getImageProcessingStatus, ImageModificationError, ImageTooLargeError, ImageTooSmallError, MeterExceededError } from "../905/23253"
import { AIActionIterationResult } from "../905/278499"
import { getI18nString, renderI18nText } from "../905/303541"
import { F } from "../905/382217"
import { $ } from "../905/411599"
import { J } from "../905/494216"
import { r6, sj } from "../905/507950"
import { getFeatureFlags } from "../905/601108"
import { X } from "../905/647103"
import { E as _$$E, f as _$$f } from "../905/690713"
import { A as _$$A } from "../905/721854"
import { useNavigationStack } from "../905/794154"
import { is, Oq } from "../905/904596"
import { ErrorType } from "../905/969273"
import { JT, LC } from "../figma_app/632248"
import { useSceneGraphSelection } from "../figma_app/722362"
import { Fullscreen, ImageToolsBindings, SceneGraphHelpers } from "../figma_app/763686"
import { Ag, qy, RL } from "../figma_app/862289"
import { sZ } from "../figma_app/948389"
// Original code from $$x1, $$S0, $$w, C, T, k
// Refactored to group related image AI action components and helpers.
// Split large k function into smaller, focused units with early returns.
// Converted to named arrow functions for readability.
// Added TS documentation and comments tracing back to originals.

/**
 * Component for the remove background action.
 * @param source - The source image.
 * @returns JSX element for the action.
 */
export function RemoveBackgroundAction({
  source,
}: {
  source: any
}) {
  return jsx(ImageActionComponent, {
    action: JT.REMOVE_BACKGROUND,
    actionCallback: J,
    actionIcon: jsx($, {}),
    actionLabel: getI18nString("fullscreen_actions.remove_background"),
    getErrorViewCustomMessage: getRemoveBackgroundErrorMessage,
    source,
    runningText: getI18nString("image_ai.background_remove.processing"),
  })
}

/**
 * Component for the upscale image action.
 * @param source - The source image.
 * @returns JSX element for the action.
 */
export function UpscaleImageAction({
  source,
}: {
  source: any
}) {
  return jsx(ImageActionComponent, {
    action: JT.UPSCALE_IMAGE,
    actionCallback: r6,
    actionIcon: jsx(X, {}),
    actionLabel: getI18nString("fullscreen.properties_panel.ai_image_tools.upscale_image"),
    getErrorViewButtons: getUpscaleErrorButtons,
    getErrorViewCustomMessage: getUpscaleErrorMessage,
    runningText: getI18nString("image_ai.upscale_image.processing"),
    source,
  })
}

/**
 * Helper to get custom error message for remove background (original $$w).
 * @param error - The error object.
 * @returns Custom message string or undefined.
 */
function getRemoveBackgroundErrorMessage(error: any): string | undefined {
  if (getFeatureFlags().aip_batch_image_modify && (error instanceof ImageModificationError || sZ(error) === ErrorType.GENERIC)) {
    return getI18nString("image_ai.background_remove.failed")
  }
}

/**
 * Helper to get custom error message for upscale (original C).
 * @param error - The error object.
 * @returns Custom message string or undefined.
 */
function getUpscaleErrorMessage(error: any): string | undefined {
  if (error instanceof ImageTooLargeError) {
    return getI18nString("image_ai.upscale_image.image_too_large_error")
  }
  if (error instanceof ImageTooSmallError) {
    return getI18nString("image_ai.upscale_image.image_too_small_error")
  }
  if (error instanceof AlreadyMaxUpscaledError) {
    return getI18nString("image_ai.upscale_image.image_already_max_upscaled_error")
  }
  if (error instanceof ImageModificationError || sZ(error) === ErrorType.GENERIC) {
    return getFeatureFlags().aip_batch_image_modify
      ? getI18nString("image_ai.upscale_image.failed")
      : getI18nString("image_ai.upscale_image.image_error")
  }
}

/**
 * Helper to get error buttons for upscale (original T).
 * @param error - The error object.
 * @param source - The source image.
 * @returns Array of buttons or undefined.
 */
function getUpscaleErrorButtons(error: any, source: any): any[] | undefined {
  if (error instanceof AlreadyMaxUpscaledError) {
    return [{
      type: _$$f.BOOST_ANYWAY,
      callback: () => {
        const targets = ImageToolsBindings?.getNodeImagePairsForEdit() ?? []
        Ag(JT.UPSCALE_IMAGE, sj, { source, targets }, { isBatch: targets.length > 1 })
      },
    }]
  }
}

/**
 * Main image action component (original k).
 * Handles different states: initial, running, done, error.
 * @param props - Component props.
 * @returns JSX element based on state.
 */
function ImageActionComponent({
  action,
  actionCallback,
  actionIcon,
  actionLabel,
  source,
  runningText,
  getErrorViewCustomMessage,
  getErrorViewButtons,
}: {
  action: any
  actionCallback: any
  actionIcon: any
  actionLabel: string
  source: any
  runningText: string
  getErrorViewCustomMessage?: (error: any) => string | undefined
  getErrorViewButtons?: (error: any, source: any) => any[] | undefined
}) {
  const selection = useSceneGraphSelection()
  const isBatch = useMemo(() => !!selection && (ImageToolsBindings?.getNodeImagePairsForEdit().length ?? 0) > 1, [selection])
  const { close } = useNavigationStack()
  const workflow = RL(action, actionCallback, { isBatch })
  const { state, aiTrackingContext } = workflow
  const processingStatus = getImageProcessingStatus(state)

  const getDisabledText = useCallback(() => {
    const imageCount = ImageToolsBindings?.getNodeImagePairsForEdit().length ?? 0
    if (getFeatureFlags().aip_batch_image_modify) {
      return imageCount > 25
        ? renderI18nText("image_ai.image_modification.max_images", { max: 25 })
        : renderI18nText("image_ai.image_modification.instruction")
    }
    return imageCount > 1
      ? renderI18nText("image_ai.background_remove.only_one_image")
      : renderI18nText("image_ai.background_remove.instruction")
  }, [])

  if (state === qy.INITIAL) {
    return jsx(_$$A, {
      action,
      actionIcon,
      actionLabel,
      onPerform: () => workflow.start({
        source,
        targets: ImageToolsBindings?.getNodeImagePairsForEdit() ?? [],
      }),
      aiTrackingContext,
      instructionAction: { type: "learn_more", url: LC },
      getCustomDisabledTextFromSelectedNodes: getDisabledText,
      children: renderI18nText("image_ai.image_modification.instruction"),
    })
  }

  if (state === qy.RUNNING) {
    return jsx(F, { aiTrackingContext, children: processingStatus || runningText })
  }

  if (state === qy.DONE) {
    const modifiedNodes = workflow.result?.modifiedNodes ?? []
    const errorNodes = modifiedNodes.filter(node => node.error)
    if (errorNodes.length > 0) {
      const firstError = errorNodes[0]?.error
      const allSameError = errorNodes.every(node => node.error?.message === firstError?.message)
      const error = firstError && allSameError ? firstError : new ImageModificationError("Mixed errors occurred", { reportToSentry: false })
      const customMessage = getErrorViewCustomMessage ? getErrorViewCustomMessage(error) : undefined
      const buttons = [{
        type: _$$f.SELECT,
        callback: () => SceneGraphHelpers?.replaceSelection(errorNodes.map(node => node.guid), true),
      }]
      return jsx(_$$E, {
        buttons,
        error,
        aiTrackingContext,
        customMessage: jsxs("div", {
          className: "x78zum5 x8439ig",
          children: [customMessage, jsx("span", {
            className: "x1n0bwc9 x1ys4hos",
            children: getI18nString("image_ai.image_modification.error_counter", {
              count: errorNodes.length,
              total: modifiedNodes.length,
            }),
          })],
        }),
      })
    }
    return jsx(Oq, {
      iterateOptions: [{
        type: is.UNDO,
        callback: () => {
          Fullscreen.triggerActionInUserEditScope("undo", {})
          close()
        },
      }],
      aiTrackingContext: { ...aiTrackingContext, iteration_view_type: AIActionIterationResult.DEFAULT_SUCCESS },
      targets: modifiedNodes.map(node => node.guid),
    })
  }

  if (state === qy.ERROR) {
    const { error } = workflow
    if (error instanceof MeterExceededError) {
      return jsx(_$$E, {
        error,
        aiTrackingContext,
        customMessage: jsx("div", {
          className: "x78zum5 x8439ig",
          children: getI18nString("image_ai.image_modification.would_exceed_meter_error", { remaining: error.remaining }),
        }),
      })
    }
    const customMessage = getErrorViewCustomMessage ? getErrorViewCustomMessage(error) : undefined
    const buttons = getErrorViewButtons ? getErrorViewButtons(error, source) : undefined
    return jsx(_$$E, { buttons, error, aiTrackingContext, customMessage })
  }

  return null
}

// Refactored exports to match new names
export const q = UpscaleImageAction
export const w = RemoveBackgroundAction
