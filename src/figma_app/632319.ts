import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { analyticsEventManager } from '../905/449184'
import { GameControllerListener } from '../905/550169'
import { setupPlaybackHandler } from '../905/686312'
import { logDebug, logError, logInfo, logWarning } from '../905/714362'
import { safeModeInstance } from '../figma_app/582563'
import { FrozenConfigManager } from '../figma_app/594947'
import { loadScript } from '../figma_app/623293'
import { getWasmModule } from '../figma_app/762706'
import { loadTimeTrackerInstance } from '../figma_app/781115'
import { isInteractionPathCheck } from '../figma_app/897289'
/**
 * Tracks socket connection and disconnection events.
 * Original class name: d
 */
class SocketConnectionTracker {
  private _timeOfLastDisconnectMs: number | null = null
  private _timeOfLastConnectionMs: number | null = null
  private _timeOfFirstConnectionMs: number | null = null
  private _definedConnectionAttemptEventName: string
  private _definedDisconnectEventName: string

  constructor(connectionAttemptEventName: string, disconnectEventName: string) {
    this._definedConnectionAttemptEventName = connectionAttemptEventName
    this._definedDisconnectEventName = disconnectEventName
  }

  /**
   * Handles socket disconnect event.
   * @param windowIsActive - Whether the window is active.
   */
  handleSocketDisconnect(windowIsActive: boolean) {
    if (this._timeOfLastConnectionMs == null)
      return
    this._timeOfLastDisconnectMs = this.nowMs()
    const connectionDurationSeconds
      = (this._timeOfLastDisconnectMs - this._timeOfLastConnectionMs) / 1e3
    const sessionLengthSeconds = this.nowMs() / 1e3
    analyticsEventManager.trackDefinedEvent(this._definedDisconnectEventName, {
      connectionDurationSeconds,
      windowIsActive,
      sessionLengthSeconds,
    })
  }

  /**
   * Handles socket connection attempt event.
   * @param success - Whether the connection was successful.
   * @param numberOfConnectionAttempts - Number of attempts.
   * @param firstTimeConnecting - Is this the first connection.
   * @param windowIsActive - Whether the window is active.
   */
  handleSocketConnectionAttempt(
    success: boolean,
    numberOfConnectionAttempts: number,
    firstTimeConnecting: boolean,
    windowIsActive: boolean,
  ) {
    if (!success && numberOfConnectionAttempts < 3)
      return
    const lastDisconnectMs = this._timeOfLastDisconnectMs
    const timeSinceDisconnectSeconds
      = lastDisconnectMs != null ? (this.nowMs() - lastDisconnectMs) / 1e3 : 0
    if (success) {
      this._timeOfLastConnectionMs = this.nowMs()
      if (this._timeOfFirstConnectionMs == null) {
        this._timeOfFirstConnectionMs = this._timeOfLastConnectionMs
      }
    }
    const sessionLengthSeconds = this.nowMs() / 1e3
    analyticsEventManager.trackDefinedEvent(this._definedConnectionAttemptEventName, {
      success,
      timeSinceDisconnectSeconds,
      numberOfConnectionAttempts,
      firstTimeConnecting,
      windowIsActive,
      sessionLengthSeconds,
    })
  }

  /**
   * Returns the current time in milliseconds.
   */
  nowMs(): number {
    return Math.round(performance.now())
  }
}

let viewerInstance: any = null
let viewerOptionsCache: any = null

/**
 * Returns the current viewer instance.
 * Original function name: $$f0
 */
export function getViewerInstance() {
  return viewerInstance
}

/**
 * Handles WebGL context and resource management.
 * Original class name: E
 */
class EmscriptenGLHandler {
  /**
   * Binds context for playback.
   */
  bindContext(e: any, t: any) {
    setupPlaybackHandler(e, t, getWasmModule().WebGLEmscriptenObj)
  }

  /**
   * Gets a new program ID.
   */
  getNewProgramId() {
    const glObj = getWasmModule().WebGLEmscriptenObj
    return glObj.getNewId(glObj.programs)
  }

  /**
   * Gets a framebuffer by ID.
   */
  getFramebuffer(id: number) {
    return getWasmModule().WebGLEmscriptenObj.framebuffers[id]
  }

  /**
   * Gets a renderbuffer by ID.
   */
  getRenderbuffer(id: number) {
    return getWasmModule().WebGLEmscriptenObj.renderbuffers[id]
  }

  /**
   * Gets a texture by ID.
   */
  getTexture(id: number) {
    return getWasmModule().WebGLEmscriptenObj.textures[id]
  }
}

/**
 * Handles dynamic config and experiment management.
 * Original class name: y
 */
class StatsigViewerWebConfig {
  static SourceLoggingString = 'viewer'

  getDynamicConfigBoolean(t: string, r: any, n: any) {
    return FrozenConfigManager.getDynamicConfigBoolean(
      t,
      r,
      n,
      StatsigViewerWebConfig.SourceLoggingString,
    )
  }

  getDynamicConfigNumber(t: string, r: any, n: any) {
    return FrozenConfigManager.getDynamicConfigNumber(
      t,
      r,
      n,
      StatsigViewerWebConfig.SourceLoggingString,
    )
  }

  getDynamicConfigString(t: string, r: any, n: any) {
    return FrozenConfigManager.getDynamicConfigString(
      t,
      r,
      n,
      StatsigViewerWebConfig.SourceLoggingString,
    )
  }

  getExperimentBoolean(t: string, r: any, n: any) {
    return FrozenConfigManager.getExperimentBoolean(
      t,
      r,
      n,
      StatsigViewerWebConfig.SourceLoggingString,
    )
  }

  getExperimentNumber(t: string, r: any, n: any) {
    return FrozenConfigManager.getExperimentNumber(
      t,
      r,
      n,
      StatsigViewerWebConfig.SourceLoggingString,
    )
  }

  getExperimentString(t: string, r: any, n: any) {
    return FrozenConfigManager.getExperimentString(
      t,
      r,
      n,
      StatsigViewerWebConfig.SourceLoggingString,
    )
  }

  clearFeatureGatesForTesting() {
    FrozenConfigManager.clear()
  }

  updateFeatureGateForTesting(e: string, t: any) {
    FrozenConfigManager.updateFeatureGateForTesting(e, t)
  }

  getFeatureGate(e: string) {
    return FrozenConfigManager.getFeatureGateFromInitialOptions(e)
  }

  setInRenderServerForViewerTests() {
    FrozenConfigManager.setInRenderServerForViewerTests()
  }

  updateExperimentForTesting(e: string, t: any, r: any) {
    FrozenConfigManager.updateExperimentForTesting(e, t, r)
  }

  clearExperimentsForTesting() {
    FrozenConfigManager.clear()
  }
}

/**
 * Loads the viewer script if not already loaded.
 * Original function name: b
 */
async function ensureViewerScriptLoaded() {
  if (!Fig.createViewer) {
    // eslint-disable-next-line no-useless-catch
    try {
      const scriptUrl = Fig.tsViewerScriptURL
      await loadScript(scriptUrl)
    }
    catch (err) {
      throw err
    }
  }
}

/**
 * Returns prototype app bindings for test.
 * Original function name: $$T2
 */
export async function getPrototypeAppBindingsForTest() {
  await ensureViewerScriptLoaded()
  return Fig.getPrototypeAppBindingsForTest()
}

/**
 * React hook to create and manage the viewer instance.
 * Original function name: $$I3
 */
export function useViewer(
  viewerMode: any,
  containerElement: HTMLElement,
  extraOptions: any,
  forceReload: boolean,
) {
  const [instance, setInstance] = useState<any>(null)
  const optionsRef = useRef<any>({
    viewerMode,
    containerElement,
    loadTimeTracker: loadTimeTrackerInstance,
    statsigViewerWebConfig: new StatsigViewerWebConfig(),
    socketConnectionTracker: new SocketConnectionTracker(
      'prototype.multiplayer_socket_connection_attempt',
      'prototype.multiplayer_socket_disconnect',
    ),
    safeModeOptions: safeModeInstance,
    emscriptenGL: new EmscriptenGLHandler(),
    logError: (
      level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR',
      ...args: any[]
    ) => {
      switch (level) {
        case 'DEBUG':
          logDebug(...args)
          break
        case 'INFO':
          logInfo(...args)
          break
        case 'WARN':
          logWarning(...args)
          break
        case 'ERROR':
          logError(...args)
          break
      }
    },
    ...extraOptions,
  })

  useEffect(() => {
    const opts = optionsRef.current;
    (async function () {
      const { containerElement } = optionsRef.current
      if (viewerInstance && !forceReload) {
        if (
          JSON.stringify({ ...opts, containerElement: null })
          !== JSON.stringify(viewerOptionsCache)
          && !isInteractionPathCheck()
        ) {
          console.warn(
            'useViewer called with different options than the first call!',
          )
        }
        if (containerElement) {
          viewerInstance.setNewContainerElement(containerElement)
        }
      }
      else {
        viewerOptionsCache = { ...opts, containerElement: null }
        await ensureViewerScriptLoaded()
        viewerInstance = await Fig.createViewer(opts)
      }
      setInstance(viewerInstance)
    })()
  }, [forceReload])

  useEffect(() => {
    if (instance && containerElement) {
      instance.setNewContainerElement(containerElement)
    }
  }, [instance, containerElement])

  const rect = containerElement?.getBoundingClientRect()

  useLayoutEffect(() => {
    instance?.forceFrame()
  }, [instance, rect?.x, rect?.y, rect?.height, rect?.width])

  return instance
}

/**
 * React hook to bind/unbind event listeners.
 * Original function name: $$S4
 */
export function useEventListener(
  emitter: { on: any, off: any } | null,
  event: string,
  handler: any,
) {
  useEffect(() => {
    emitter?.on(event, handler)
    return () => {
      emitter?.off(event, handler)
    }
  }, [emitter, event, handler])
}

/**
 * Checks if event data type matches.
 * Original function name: $$v1
 */
export function isEventType(
  event: { data?: { type?: string } },
  type: string,
): boolean {
  return event.data?.type === type
}

// Export refactored names for imports
export const hk = getViewerInstance
export const CZ = isEventType
export const pp = getPrototypeAppBindingsForTest
export const ur = useViewer
export const O5 = useEventListener
