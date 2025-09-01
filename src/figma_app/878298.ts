// /Users/allen/sigma-main/src/figma_app/878298.ts

import type { Fn } from '../../types/global'
import { Component, PureComponent, useCallback, useLayoutEffect, useMemo } from 'react'
import { decodeBase64, encodeBase64 } from '../905/561685'
import { getFeatureFlags } from '../905/601108'
import { ensureArray } from '../figma_app/656233'
import { deregisterAllHandlers, isDisabled, registerWithRecordingKey, setupPlaybackHandler, SKIP_RECORDING } from '../figma_app/757801'
import { isDebugMode, isInteractionPathCheck } from '../figma_app/897289'

/**
 * Set to track interaction paths during recording.
 * Original: d
 */
const interactionPaths = new Set()



/**
 * Default event object with no-op methods.
 * Original: x
 */
const DEFAULT_EVENT = {
  preventDefault() {},
  stopPropagation() {},
}


/**
 * Adds an interaction path if interaction path check is enabled.
 * Original: $$c30
 * @param path - The path to add.
 */
export function addInteractionPath(path: any) {
  if (isInteractionPathCheck()) {
    interactionPaths.add(path)
  }
}
/**
 * Default target object with no-op methods.
 * Original: w
 */
const DEFAULT_TARGET = {
  value: '',
  focus() {},
  blur() {},
  setPointerCapture() {},
  releasePointerCapture() {},
}
/**
 * Removes an interaction path if interaction path check is enabled.
 * Original: $$u22
 * @param path - The path to remove.
 */
export function removeInteractionPath(path: any) {
  if (isInteractionPathCheck()) {
    interactionPaths.delete(path)
  }
}

/**
 * Checks if recording is enabled based on debug mode, interaction path check, or feature flags.
 * Original: $$p4
 * @returns True if recording is enabled.
 */
export function isRecordingEnabled(): boolean {
  return !!isDebugMode || isInteractionPathCheck() || (getFeatureFlags() && getFeatureFlags().interaction_recorder)
}

/**
 * Registers with recording key if recording is enabled.
 * Original: $$_21
 * @param key - The recording key or object.
 */
export function registerRecording(key: any) {
  if (isRecordingEnabled()) {
    registerWithRecordingKey(key)
  }
}

/**
 * Deregisters all handlers if recording is enabled.
 * Original: $$h19
 * @param key - The recording key or object.
 */
export function deregisterRecording(key: any) {
  if (isRecordingEnabled()) {
    deregisterAllHandlers(key)
  }
}

/**
 * Creates a callback with a recording key.
 * Original: $$m13
 * @param key - The recording key or object.
 * @returns A callback function.
 */
export function createRecordingCallback(key: any) {
  const recordingKey = typeof key === 'string' ? key : key?.recordingKey
  const memoizedKey = useMemo(() => ({ recordingKey }), [recordingKey])
  return useCallback((...args: any[]) => generateRecordingKey(memoizedKey, ...args), [memoizedKey])
}

/**
 * Generates a recording key from the provided key and arguments.
 * Original: $$g8
 * @param key - The base key or object.
 * @param args - Additional arguments.
 * @returns The generated recording key.
 */
export function generateRecordingKey(key: any, ...args: any[]): string | typeof SKIP_RECORDING {
  const baseKey = typeof key === 'string' ? key : key?.recordingKey
  if (baseKey === SKIP_RECORDING || args.includes(SKIP_RECORDING)) {
    return SKIP_RECORDING
  }
  return baseKey ? `${baseKey}.${args.join('.')}` : baseKey
}

/**
 * PureComponent that handles recording lifecycle.
 * Original: $$f23
 */
export class RecordingPureComponent extends PureComponent<{ recordingKey: any }> {
  /**
   * Returns the recording key.
   */
  recordingKey() {
    return this.props.recordingKey
  }

  componentDidMount() {
    registerRecording(this)
  }

  componentDidUpdate(_prevProps: any, _prevState: any) {
    registerRecording(this)
  }

  componentWillUnmount() {
    deregisterRecording(this)
  }
}

/**
 * Component that handles recording lifecycle.
 * Original: $$E27
 */
export class RecordingComponent extends Component<{ recordingKey: any }> {
  /**
   * Returns the recording key.
   */
  recordingKey() {
    return this.props.recordingKey
  }

  componentDidMount() {
    registerRecording(this)
  }

  componentDidUpdate(_prevProps: any, _prevState: any, _snapshot?: any) {
    registerRecording(this)
  }

  componentWillUnmount() {
    deregisterRecording(this)
  }
}

/**
 * Hook to create a recording key object with lifecycle management.
 * Original: $$y14
 * @param key - The recording key.
 * @returns The recording key object.
 */
export function useRecordingKey(key: any) {
  const memoizedKey = useMemo(() => ({ recordingKey: () => key }), [key])
  useLayoutEffect(() => {
    registerRecording(memoizedKey)
    return () => deregisterRecording(memoizedKey)
  }, [memoizedKey])
  return memoizedKey
}

/**
 * Constant for skipping recording.
 * Original: $$b11
 */
const SKIP_RECORDING_CONSTANT = SKIP_RECORDING

/**
 * Set of properties to exclude from recording.
 * Original: T
 */
const EXCLUDED_PROPERTIES = new Set(['nativeEvent', 'target', 'currentTarget'])

/**
 * Handles general events with recording and playback.
 * Original: $$I17
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The wrapped handler.
 */
export function handleEvent(recorder: any, eventType: string, handler: Fn) {
  if (!isRecordingEnabled() || recorder.recordingKey() === SKIP_RECORDING_CONSTANT) {
    return handler
  }
  const recordedData = [{}]
  return setupPlaybackHandler(recorder, eventType, (event: any) => {
    if (!isDisabled()) {
      return handler(event)
    }
    const processedEvents: ProxyConstructor[] = []
    ensureArray(event).forEach((e: any, index: number) => {
      if (e && typeof e === 'object' && !Array.isArray(e)) {
        processedEvents[index] = new Proxy(e, {
          get(target: any, prop: string) {
            const value = target[prop]
            const record = recordedData[index]
            if (record === undefined) {
              recordedData[index] = {}
            }
            if ((prop === 'currentTarget' || prop === 'target') && value instanceof Element) {
              const testId = value.getAttribute('data-testid')
              if (testId) {
                record[prop] = testId
              }
            }
            if (!Reflect.has(DEFAULT_EVENT, prop) && !EXCLUDED_PROPERTIES.has(prop) && value !== false) {
              record[prop] = value
            }
            return value
          },
        })
      }
      else {
        recordedData[index] = e
        processedEvents[index] = e
      }
    })
    return handler(Array.isArray(event) ? processedEvents : processedEvents[0])
  }, {
    record() {
      const data = recordedData
      recordedData.length = 0
      recordedData.push({})
      return data.length !== 1 || Array.isArray(data[0]) ? data : data[0]
    },
    playback(data: any) {
      if (!data)
        return data
      const processEvent = (e: any) => {
        if (e && typeof e === 'object' && !Array.isArray(e)) {
          const processed = {
            ...DEFAULT_EVENT,
            target: DEFAULT_TARGET,
            currentTarget: DEFAULT_TARGET,
            ...e,
          }
          if (typeof e.currentTarget === 'string') {
            processed.currentTarget = findElementByTestId(e.currentTarget)
          }
          if (typeof e.target === 'string') {
            processed.target = findElementByTestId(e.target)
          }
          return processed
        }
        return e
      }
      return typeof data === 'object' ? (Array.isArray(data) ? data.map(processEvent) : processEvent(data)) : data
    },
  })
}

/**
 * Sets up playback handler conditionally.
 * Original: $$S16
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The handler or wrapped handler.
 */
export function setupPlayback(recorder: any, eventType: string, handler: Fn, options: any = {}) {
  return isRecordingEnabled() && recorder.recordingKey() !== SKIP_RECORDING_CONSTANT
    ? setupPlaybackHandler(recorder, eventType, handler, options)
    : handler
}

/**
 * Hook for setupPlayback with memoization.
 * Original: $$v25
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The memoized handler.
 */
export function useSetupPlayback(key: any, eventType: string, handler: Fn, options: any) {
  const recorder = useRecordingKey(key)
  return useMemo(() => setupPlayback(recorder, eventType, handler, options), [recorder, eventType, handler, options])
}

/**
 * Extracts modifier keys from an event.
 * Original: A
 * @param event - The event object.
 * @returns Object with modifier keys.
 */
function extractModifierKeys(event: any) {
  const modifiers: any = {}
  if (event.altKey)
    modifiers.altKey = true
  if (event.shiftKey)
    modifiers.shiftKey = true
  if (event.metaKey)
    modifiers.metaKey = true
  if (event.ctrlKey)
    modifiers.ctrlKey = true
  return modifiers
}

/**
 * Normalizes modifier keys to booleans.
 * Original: N
 * @param event - The event object.
 * @returns Object with normalized modifier keys.
 */
function normalizeModifierKeys(event: any) {
  return {
    altKey: !!event.altKey,
    ctrlKey: !!event.ctrlKey,
    metaKey: !!event.metaKey,
    shiftKey: !!event.shiftKey,
  }
}

/**
 * Extracts test ID from current target.
 * Original: C
 * @param event - The event object.
 * @returns Object with currentTarget if test ID exists.
 */
function extractTestId(event: any) {
  const testId = event.currentTarget?.dataset?.testid
  return testId ? { currentTarget: testId } : {}
}

/**
 * Creates a proxy for current target during playback.
 * Original: O
 * @param event - The event object.
 * @returns Object with proxied currentTarget.
 */
function createCurrentTargetProxy(event: any) {
  if (event.currentTarget) {
    const element = findElementByTestId(event.currentTarget)
    if (!element) {
      throw new Error(`Expected to find element with data-testid="${event.currentTarget}" for currentTarget`)
    }
    return {
      currentTarget: new Proxy(element, {
        get(target: any, prop: string) {
          if (prop === 'setPointerCapture' || prop === 'releasePointerCapture') {
            return () => {}
          }
          const value = target[prop]
          return typeof value === 'function' ? value.bind(target) : value
        },
      }),
    }
  }
  return { currentTarget: DEFAULT_TARGET }
}

/**
 * Handles mouse events with recording and playback.
 * Original: $$R15
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The wrapped handler.
 */
export function handleMouseEvent(recorder: any, eventType: string, handler: Fn, options: any) {
  return setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      event = event || {}
      const record = {
        buttons: event.buttons,
        ...extractModifierKeys(event),
        ...(options?.recordMetadata ? options.recordMetadata(event) : {}),
        ...extractTestId(event),
      }
      if (options?.includeTarget) {
        record.target = { tagName: event.target.tagName }
      }
      return record
    },
    playback(record: any) {
      return {
        clientX: 0,
        clientY: 0,
        button: 0,
        buttons: record.buttons,
        target: options?.includeTarget ? record.target : DEFAULT_TARGET,
        ...normalizeModifierKeys(record),
        ...DEFAULT_EVENT,
        ...createCurrentTargetProxy(record),
        ...(options?.playbackMetadata ? options.playbackMetadata(record) : {}),
      }
    },
  })
}

/**
 * Hook for handleMouseEvent with memoization.
 * Original: $$L26
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The memoized handler.
 */
export function useHandleMouseEvent(key: any, eventType: string, handler: Fn, options: any) {
  const recorder = useRecordingKey(key)
  return useMemo(() => handleMouseEvent(recorder, eventType, handler, options), [recorder, eventType, handler, options])
}

/**
 * Handles drag events with file recording.
 * Original: $$P12
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The wrapped handler.
 */
export function handleDragEvent(recorder: any, eventType: string, handler: Fn) {
  return setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      const files = event.dataTransfer.files
      const dataTransfer: any = {}
      if (files) {
        const fileData: string[] = []
        for (const file of files) {
          const index = fileData.length
          fileData.push('(failed to read file)')
          readFileAsBase64(file).then((base64) => {
            let encoded = encodeBase64(base64)
            if (encoded.length > 1000) {
              console.warn('Recording of drop events is only supported for small files')
              encoded = '(file too large)'
            }
            fileData[index] = encoded
          })
        }
        dataTransfer.files = fileData
      }
      return {
        buttons: event.buttons,
        ...extractModifierKeys(event),
        dataTransfer,
      }
    },
    playback(record: any) {
      const dataTransfer: any = {}
      if (record.dataTransfer.files) {
        dataTransfer.files = record.dataTransfer.files.map((file: string) => new Blob([decodeBase64(file)]))
      }
      return {
        clientX: 0,
        clientY: 0,
        button: 0,
        buttons: record.buttons,
        ...normalizeModifierKeys(record),
        ...DEFAULT_EVENT,
        dataTransfer,
      }
    },
  })
}

/**
 * Reads a file as Uint8Array.
 * Original: inline function in $$P12
 * @param file - The file to read.
 * @returns Promise resolving to Uint8Array.
 */
function readFileAsBase64(file: File): Promise<Uint8Array> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(new Uint8Array(reader.result as ArrayBuffer))
    reader.onerror = reject
    reader.readAsArrayBuffer(file)
  })
}

/**
 * Handles wheel events.
 * Original: $$D6
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The wrapped handler.
 */
export function handleWheelEvent(recorder: any, eventType: string, handler: Fn, options: any) {
  return setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      event = event || {}
      return {
        buttons: event.buttons,
        ...extractModifierKeys(event),
        ...(options?.recordMetadata ? options.recordMetadata(event) : {}),
      }
    },
    playback(record: any) {
      return {
        deltaX: 0,
        deltaY: 0,
        deltaMode: WheelEvent.DOM_DELTA_PIXEL,
        clientX: 0,
        clientY: 0,
        button: 0,
        buttons: record.buttons,
        ...normalizeModifierKeys(record),
        ...DEFAULT_EVENT,
        ...(options?.playbackMetadata ? options.playbackMetadata(record) : {}),
      }
    },
  })
}

/**
 * Handles keyboard events.
 * Original: $$k3
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The wrapped handler.
 */
export function handleKeyboardEvent(recorder: any, eventType: string, handler: Fn, options: any) {
  return setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      return {
        key: event.key,
        keyCode: event.keyCode,
        which: event.keyCode,
        type: eventType,
        ...extractModifierKeys(event),
        ...(options?.recordMetadata ? options.recordMetadata(event) : {}),
        ...extractTestId(event),
      }
    },
    playback(record: any) {
      return {
        key: record.key,
        keyCode: record.keyCode,
        which: record.keyCode,
        type: eventType,
        ...normalizeModifierKeys(record),
        ...DEFAULT_EVENT,
        ...createCurrentTargetProxy(record),
        ...(options?.playbackMetadata ? options.playbackMetadata(record) : {}),
      }
    },
  })
}

/**
 * Hook for handleKeyboardEvent with memoization.
 * Original: $$M28
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The memoized handler.
 */
export function useHandleKeyboardEvent(key: any, eventType: string, handler: Fn, options: any) {
  const recorder = useRecordingKey(key)
  return useMemo(() => handleKeyboardEvent(recorder, eventType, handler, options), [recorder, eventType, handler, options])
}

/**
 * Handles input events.
 * Original: $$F10
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The wrapped handler.
 */
export function handleInputEvent(recorder: any, eventType: string, handler: Fn) {
  return setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      const innerEvent = event.event
      return {
        key: innerEvent.key,
        keyCode: innerEvent.keyCode,
        which: innerEvent.keyCode,
        type: eventType,
        ...extractModifierKeys(innerEvent),
      }
    },
    playback(record: any) {
      return {
        event: {
          key: record.key,
          keyCode: record.keyCode,
          ...normalizeModifierKeys(record),
          ...DEFAULT_EVENT,
        },
        accept: () => {},
      }
    },
  })
}

/**
 * Hook for handleInputEvent with memoization.
 * Original: $$j18
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The memoized handler.
 */
export function useHandleInputEvent(key: any, eventType: string, handler: Fn) {
  const recorder = useRecordingKey(key)
  return useMemo(() => handleInputEvent(recorder, eventType, handler), [recorder, eventType, handler])
}

/**
 * Handles change events for inputs.
 * Original: $$U9
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The wrapped handler.
 */
export function handleChangeEvent(recorder: any, eventType: string, handler: Fn) {
  return setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      if (event.currentTarget instanceof HTMLInputElement && event.currentTarget.type === 'checkbox') {
        return { checked: event.currentTarget.checked }
      }
      return { value: event.currentTarget.value }
    },
    playback(record: any) {
      const target = { value: record.value, checked: record.checked }
      return {
        target,
        currentTarget: target,
        ...DEFAULT_EVENT,
      }
    },
  })
}

/**
 * Hook for handleChangeEvent with memoization.
 * Original: $$B0
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The memoized handler.
 */
export function useHandleChangeEvent(key: any, eventType: string, handler: Fn) {
  const recorder = useRecordingKey(key)
  return useMemo(() => handleChangeEvent(recorder, eventType, handler), [recorder, eventType, handler])
}

/**
 * Handles generic value events.
 * Original: $$G29
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The wrapped handler.
 */
export function handleValueEvent(recorder: any, eventType: string, handler: Fn) {
  const recorderObj = useRecordingKey(recorder)
  return useMemo(() => setupPlayback(recorderObj, eventType, handler, {
    record(event: any) {
      return { value: event.value }
    },
    playback(record: any) {
      return record.value
    },
  }), [recorderObj, eventType, handler])
}

/**
 * Hook for handleValueEvent with memoization.
 * Original: $$G29 (wait, it's $$G29, but code has $$y14 inside, adjusted)
 * Wait, original $$G29 uses $$y14, so it's a hook.
 */
export function useHandleValueEvent(key: any, eventType: string, handler: Fn) {
  const recorder = useRecordingKey(key)
  return useMemo(() => setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      return { value: event.value }
    },
    playback(record: any) {
      return record.value
    },
  }), [recorder, eventType, handler])
}

/**
 * Handles focus events.
 * Original: $$V7
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The wrapped handler.
 */
export function handleFocusEvent(recorder: any, eventType: string, handler: Fn) {
  return setupPlayback(recorder, eventType, handler, {
    record() {
      return {}
    },
    playback() {
      return { ...DEFAULT_EVENT }
    },
  })
}

/**
 * Hook for handleFocusEvent with memoization.
 * Original: $$H24
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The memoized handler.
 */
export function useHandleFocusEvent(key: any, eventType: string, handler: Fn) {
  const recorder = useRecordingKey(key)
  return useMemo(() => handleFocusEvent(recorder, eventType, handler), [recorder, eventType, handler])
}

/**
 * Handles generic events with empty record/playback.
 * Original: $$z5
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The wrapped handler.
 */
export function handleGenericEvent(recorder: any, eventType: string, handler: Fn) {
  return setupPlayback(recorder, eventType, handler, {
    record() {
      return {}
    },
    playback() {
      return {}
    },
  })
}

/**
 * Hook for handleGenericEvent with memoization.
 * Original: $$W20
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @returns The memoized handler.
 */
export function useHandleGenericEvent(key: any, eventType: string, handler: Fn) {
  const recorder = useRecordingKey(key)
  return useMemo(() => handleGenericEvent(recorder, eventType, handler), [recorder, eventType, handler])
}

/**
 * Handles pointer events.
 * Original: $$K1
 * @param recorder - The recorder object.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The wrapped handler.
 */
export function handlePointerEvent(recorder: any, eventType: string, handler: Fn, options: any) {
  return setupPlayback(recorder, eventType, handler, {
    record(event: any) {
      event = event || {}
      const record = {
        buttons: event.buttons,
        ...extractModifierKeys(event),
        ...(options?.recordMetadata ? options.recordMetadata(event) : {}),
        ...extractTestId(event),
      }
      if (options?.includeTarget) {
        record.target = { tagName: event.target.tagName }
      }
      return record
    },
    playback(record: any) {
      const target = options?.includeTarget ? { target: record.target } : {}
      return {
        clientX: 0,
        clientY: 0,
        button: 0,
        buttons: record.buttons,
        pointerId: 0,
        pointerType: 'mouse',
        ...normalizeModifierKeys(record),
        ...target,
        ...DEFAULT_EVENT,
        ...createCurrentTargetProxy(record),
        ...(options?.playbackMetadata ? options.playbackMetadata(record) : {}),
      }
    },
  })
}

/**
 * Hook for handlePointerEvent with memoization.
 * Original: $$Y2
 * @param key - The recording key.
 * @param eventType - The event type.
 * @param handler - The event handler.
 * @param options - Additional options.
 * @returns The memoized handler.
 */
export function useHandlePointerEvent(key: any, eventType: string, handler: Fn, options: any) {
  const recorder = useRecordingKey(key)
  return useMemo(() => handlePointerEvent(recorder, eventType, handler, options), [recorder, eventType, handler, options])
}

/**
 * Finds an element by data-testid.
 * Original: $
 * @param testId - The test ID.
 * @returns The element or null.
 */
function findElementByTestId(testId: string): Element | null {
  return document.querySelector(`[data-testid="${testId}"]`)
}

// Export aliases with meaningful names, updated to match refactored functions
export const AF = useHandleChangeEvent
export const Am = handlePointerEvent
export const BV = useHandlePointerEvent
export const C0 = handleKeyboardEvent
export const Fk = isRecordingEnabled
export const Ht = handleGenericEvent
export const M5 = handleWheelEvent
export const P_ = handleFocusEvent
export const Pt = generateRecordingKey
export const Z7 = handleChangeEvent
export const _3 = handleInputEvent
export const aH = SKIP_RECORDING_CONSTANT
export const aQ = handleDragEvent
export const c1 = createRecordingCallback
export const cC = useRecordingKey
export const cZ = handleMouseEvent
export const dp = setupPlayback
export const fA = handleEvent
export const fo = useHandleInputEvent
export const ht = deregisterRecording
export const iQ = useHandleGenericEvent
export const kz = registerRecording
export const nS = removeInteractionPath
export const o6 = RecordingPureComponent
export const of = useHandleFocusEvent
export const qP = useSetupPlayback
export const rf = useHandleMouseEvent
export const uA = RecordingComponent
export const v_ = useHandleKeyboardEvent
export const vc = useHandleValueEvent
export const y6 = addInteractionPath
