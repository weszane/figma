import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { debugState } from '../905/407919'
import { GesturePhaseEnum } from '../figma_app/1722'
import { fullscreenValue } from '../figma_app/455680'
import { getFigmaMobile } from '../figma_app/546509'
import { isFullscreenPreventEventCapture } from '../figma_app/753501'
import { DesignGraphElements, Fullscreen } from '../figma_app/763686'

export const SUPPORTED_DRAWING_TOOLS = [
  DesignGraphElements.VECTOR_PENCIL,
  DesignGraphElements.HIGHLIGHTER,
  DesignGraphElements.WASHI_TAPE,
  DesignGraphElements.ERASER,
  DesignGraphElements.LASSO,
]

const TOOL_ACTION_MAP = new Map<DesignGraphElements, string>([
  [DesignGraphElements.VECTOR_PENCIL, 'set-tool-pencil'],
  [DesignGraphElements.HIGHLIGHTER, 'set-tool-highlighter'],
  [DesignGraphElements.WASHI_TAPE, 'set-tool-washi-tape'],
])

interface PencilSample {
  x: number
  y: number
  modifierKeys?: number
}

/**
 * Hook for handling mobile gesture interactions with drawing tools
 * Manages pencil samples, gesture phases, and tool switching
 */
export function useMobileGestures() {
  const figmaMobileInstance = getFigmaMobile()
  const figmaMobileInstance2 = getFigmaMobile() // Second instance for specific functionality
  const figmaMobileInstance3 = getFigmaMobile() // Third instance for pinch gestures
  const currentTool = useSelector((state: any) => state.mirror.appModel.currentTool)

  // Setup gesture allowance functions
  useEffect(() => {
    if (figmaMobileInstance?.shouldAllowNativeGestures && figmaMobileInstance2) {
      figmaMobileInstance2._allow_native_gestures_on_points = (points: { x: number, y: number }[]) =>
        points.every(point => !isFullscreenPreventEventCapture(document.elementFromPoint(point.x, point.y) as any))

      figmaMobileInstance2._allow_web_gestures = (enabled: boolean) => {
        if (fullscreenValue.allowWebGestures) {
          fullscreenValue.allowWebGestures(enabled ? 1 : 0)
        }
      }
    }
  }, [figmaMobileInstance, figmaMobileInstance2])

  // Setup auto-draw toggle function
  useEffect(() => {
    if (figmaMobileInstance2) {
      figmaMobileInstance2._toggle_auto_draw_with_pencil = (enabled: boolean) => {
        figmaMobileInstance2._auto_draw_with_pencil = enabled
      }
    }
  }, [figmaMobileInstance2])

  const lastValidToolRef = useRef<DesignGraphElements>(DesignGraphElements.VECTOR_PENCIL)

  // Track last valid tool when auto-draw is enabled
  useEffect(() => {
    if (figmaMobileInstance2?._auto_draw_with_pencil && currentTool && TOOL_ACTION_MAP.get(currentTool)) {
      lastValidToolRef.current = currentTool
    }
  }, [currentTool, figmaMobileInstance2])

  const isReadOnly = useSelector((state: any) => state.mirror?.appModel.isReadOnly)

  // Handle pencil sample collection and processing
  useEffect(() => {
    if (figmaMobileInstance?.suppliesPencilSamples && figmaMobileInstance2) {
      let shouldProcessSamples = false

      const sendPencilSample = (phase: GesturePhaseEnum, sample: PencilSample) => {
        fullscreenValue.takePencilSample?.(phase, sample.x, sample.y, sample.modifierKeys ?? 0)
      }

      figmaMobileInstance2._take_pencil_samples = (phase: GesturePhaseEnum, samples: PencilSample[]) => {
        if (!fullscreenValue.takePencilSample || samples.length === 0) {
          return
        }

        switch (phase) {
          case GesturePhaseEnum.BEGAN:
            handleGestureBegan(samples, sendPencilSample, shouldProcessSamples, figmaMobileInstance2, isReadOnly, lastValidToolRef)
            break

          case GesturePhaseEnum.MOVED:
            if (shouldProcessSamples) {
              sendPencilSample(GesturePhaseEnum.MOVED, samples[0])
              for (let i = 1; i < samples.length; i++) {
                sendPencilSample(GesturePhaseEnum.MOVED_COALESCED, samples[i])
              }
            }
            break

          case GesturePhaseEnum.ENDED:
            if (shouldProcessSamples) {
              const lastIndex = samples.length - 1
              for (let i = 0; i < lastIndex; i++) {
                sendPencilSample(GesturePhaseEnum.MOVED_COALESCED, samples[i])
              }
              sendPencilSample(GesturePhaseEnum.ENDED, samples[lastIndex])
            }
            shouldProcessSamples = false
            break

          case GesturePhaseEnum.CANCELLED:
            if (shouldProcessSamples) {
              const lastIndex = samples.length - 1
              for (let i = 0; i < lastIndex; i++) {
                sendPencilSample(GesturePhaseEnum.MOVED_COALESCED, samples[i])
              }
              sendPencilSample(GesturePhaseEnum.CANCELLED, samples[lastIndex])
            }
            shouldProcessSamples = false
            break
        }
      }
    }
  }, [isReadOnly, figmaMobileInstance, figmaMobileInstance2])

  // Handle pinch gesture processing
  useEffect(() => {
    if (figmaMobileInstance3) {
      figmaMobileInstance3._take_indirect_pinch_gesture = (
        scale: number,
        velocity: number,
        point: { x: number, y: number },
        rotation: number,
      ) => {
        if (fullscreenValue.takeIndirectPinchGesture
          && !isFullscreenPreventEventCapture(document.elementFromPoint(point.x, point.y) as any)) {
          fullscreenValue.takeIndirectPinchGesture(scale, velocity, point.x, point.y, rotation)
        }
      }
    }
  }, [figmaMobileInstance3])

  return null
}

/**
 * Handle the beginning of a gesture - determines if processing should continue
 * and handles auto-draw tool switching logic
 */
function handleGestureBegan(
  samples: PencilSample[],
  sendPencilSample: (phase: GesturePhaseEnum, sample: PencilSample) => void,
  shouldProcessSamples: boolean,
  figmaMobileInstance: any,
  isReadOnly: boolean,
  lastValidToolRef: React.RefObject<DesignGraphElements>,
) {
  const firstSample = samples[0]
  shouldProcessSamples = !isFullscreenPreventEventCapture(document.elementFromPoint(firstSample.x, firstSample.y) as any as HTMLElement)

  const currentState = debugState.getState()
  let currentTool = currentState.mirror.appModel.currentTool

  // Handle auto-draw tool switching
  if (figmaMobileInstance._auto_draw_with_pencil) {
    const isCurrentToolSupported = SUPPORTED_DRAWING_TOOLS.includes(currentTool)
    const { multiplayerEmoji } = currentState
    const isUserReacting = multiplayerEmoji.type === 'REACTING_OR_CHATTING' && !!multiplayerEmoji.imageUrl
    const isMultiselectTool = currentTool === DesignGraphElements.MULTISELECT
    const lastValidToolAction = TOOL_ACTION_MAP.get(lastValidToolRef.current)

    // Switch to appropriate drawing tool if conditions are met
    if (lastValidToolAction
      && !isCurrentToolSupported
      && !isUserReacting
      && shouldProcessSamples
      && !isMultiselectTool
      && !isReadOnly) {
      Fullscreen?.triggerActionInUserEditScope(lastValidToolAction, {
        source: 'figma_mobile',
      })
      currentTool = DesignGraphElements.VECTOR_PENCIL
    }
  }

  // Check if we should process samples for the current tool
  if (shouldProcessSamples) {
    shouldProcessSamples = SUPPORTED_DRAWING_TOOLS.includes(currentTool)
  }

  // Send initial sample and coalesced samples if processing
  if (shouldProcessSamples) {
    sendPencilSample(GesturePhaseEnum.BEGAN, firstSample)
    for (let i = 1; i < samples.length; i++) {
      sendPencilSample(GesturePhaseEnum.MOVED_COALESCED, samples[i])
    }
  }
}

export const H = SUPPORTED_DRAWING_TOOLS
export const K = useMobileGestures
