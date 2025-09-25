import { reportError } from '../905/11'
import { fullscreenPerfManager } from '../905/125218'
import { ServiceCategories } from '../905/165054'
import { debugState } from '../905/407919'
import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { II } from '../905/687477'
import { getSingletonSceneGraph, ReduxSceneGraph } from '../905/700578'
import { logInfo, logWarning } from '../905/714362'
import { trackFileEvent } from '../figma_app/314264'
import { FullscreenWebSocketTsApi, Multiplayer } from '../figma_app/763686'

// Refactored variables and functions for better readability and maintainability.
// Original variable names: h -> websocket, m -> connectAttemptId, g -> consecutiveFailureCount, I -> isBrokenForTesting
let websocket: WebSocket | null = null
let connectAttemptId = 0
let consecutiveFailureCount = 0
let isBrokenForTesting = false

/**
 * Handles the connection finished event.
 * Original function name: f
 */
function handleConnectFinished(): void {
  II()
  FullscreenWebSocketTsApi.connectFinished()
}

/**
 * Handles receiving a message from the WebSocket.
 * Original function name: y
 * @param data - The received data as Uint8Array
 */
function handleReceiveMessage(data: Uint8Array): void {
  II()
  FullscreenWebSocketTsApi.receive(data)
}

/**
 * Checks if two URLs are equivalent after removing 'recentReload' query param.
 * Original function name: b
 * @param url1 - First URL string
 * @param url2 - Second URL string
 * @returns True if URLs are equivalent
 */
function areUrlsEquivalent(url1: string, url2: string): boolean {
  const parsedUrl1 = new URL(url1)
  const parsedUrl2 = new URL(url2)
  parsedUrl1.searchParams.delete('recentReload')
  parsedUrl2.searchParams.delete('recentReload')
  return parsedUrl1.toString() === parsedUrl2.toString()
}

/**
 * Disconnects the WebSocket and cleans up.
 * Original function name: T
 * @param reason - Reason for disconnection
 */
function disconnectWebsocket(reason: string): void {
  if (websocket !== null) {
    websocket.onopen = null
    websocket.onmessage = null
    websocket.onclose = null
    websocket.onerror = null
    try {
      websocket.close()
    } catch (error) {
      // Ignore close errors
    }
    websocket = null
    II()
    FullscreenWebSocketTsApi.disconnect(reason)
  }
}

/**
 * Gets the buffered amount of the WebSocket.
 * Original export name: $$E1
 * @returns Buffered amount or 0 if no WebSocket
 */
export function getBufferedAmount(): number {
  return websocket?.bufferedAmount || 0
}

/**
 * Breaks the multiplayer WebSocket for testing purposes.
 * Original export name: $$S2
 */
export function breakMultiplayerWebsocketForTesting(): void {
  if (websocket) {
    isBrokenForTesting = true
    const url = websocket.url
    disconnectWebsocket('breakMultiplayerWebsocketForTesting')
    console.log(`breakMultiplayerWebsocketForTesting: disconnected from ${url}`)
  }
}

/**
 * Unbreaks the multiplayer WebSocket for testing purposes.
 * Original export name: $$v3
 * @param forceReconnect - Whether to force reconnect
 */
export function unbreakMultiplayerWebsocketForTesting(forceReconnect: boolean = false): void {
  if (!websocket) {
    isBrokenForTesting = false
    Multiplayer.reconnect(forceReconnect)
    console.log(`unbreakMultiplayerWebsocketForTesting: reconnected to ${websocket ? websocket.url : null}`)
  }
}

/**
 * WebSocket manager object with connect, disconnect, and send methods.
 * Original export name: $$A0
 */
export const websocketManager = {
  /**
   * Connects to the WebSocket.
   * @param url - The WebSocket URL
   */
  connect(url: string): void {
    if (isBrokenForTesting) return

    connectAttemptId++
    disconnectWebsocket('connect')

    const preconnectSock = mpGlobal.sock
    const preconnectPerfMetrics = mpGlobal.perfMetrics
    const preconnectMsgs = mpGlobal.msgs
    mpGlobal.sock = null
    mpGlobal.msgs = []
    mpGlobal.perfMetrics = []

    fullscreenPerfManager.setWsUrl(url)
    const debugStateSnapshot = debugState?.getState()

    if (preconnectSock && areUrlsEquivalent(preconnectSock.url, url) &&
        (preconnectSock.readyState === WebSocket.CONNECTING || preconnectSock.readyState === WebSocket.OPEN)) {
      // Reuse preconnect WebSocket
      websocket = preconnectSock
      consecutiveFailureCount = 0
      for (const { key, ts, nBytes } of preconnectPerfMetrics) {
        fullscreenPerfManager.logWsMsg(key, nBytes, ts)
      }
      handleConnectFinished()
      const totalMsgs = preconnectMsgs.length
      for (const [index, msg] of preconnectMsgs.entries()) {
        logInfo('multiplayer', 'Replaying websocket message', {
          i: index,
          total: totalMsgs,
          len: msg.byteLength,
        })
        handleReceiveMessage(msg)
        if (!websocket) return
      }
      if (websocket.readyState === WebSocket.CONNECTING) {
        websocket.onopen = () => {
          fullscreenPerfManager.logWsMsg('mp-ws-onopen')
        }
      }
    } else {
      // Handle preconnect mismatch or no preconnect
      if (preconnectSock) {
        if (!areUrlsEquivalent(preconnectSock.url, url)) {
          logWarning('multiplayer', 'Preconnect URL doesn\'t match URL', {
            preconnectUrl: preconnectSock.url,
            url,
          })
          if (getFeatureFlags().report_preconnect_mismatch) {
            reportError(ServiceCategories.SCENEGRAPH_AND_SYNC, new Error('Multiplayer preconnect URL mismatch'))
          }
        }
        if (preconnectSock.readyState !== WebSocket.CONNECTING && preconnectSock.readyState !== WebSocket.OPEN) {
          let readyStateStr: string | null = null
          if (preconnectSock.readyState === WebSocket.CLOSED) readyStateStr = 'closed'
          else if (preconnectSock.readyState === WebSocket.CLOSING) readyStateStr = 'closing'
          logWarning('multiplayer', 'readyState is bad, skipping preconnect optimization', {
            readyState: readyStateStr,
          })
        }
        trackEventAnalytics('preconnect_url_mismatch', {
          preconnectUrl: preconnectSock.url,
          url,
          readyState: preconnectSock.readyState,
        }, { forwardToDatadog: true })
        try {
          preconnectSock.close()
        } catch {
          // Ignore
        }
      }

      // Truncate URL if necessary
      let finalUrl = url
      const originalUrlLength = url.length
      if (consecutiveFailureCount >= 3 && originalUrlLength > 2000 && navigator.onLine) {
        const parsedUrl = new URL(url)
        parsedUrl.searchParams.delete('scenegraph-queries-initial-nodes')
        finalUrl = `${parsedUrl.toString()}&use-incremental-for-editors=0`
        const truncateData = {
          connectAttemptId,
          originalUrlLength,
          newUrlLength: finalUrl.length,
          forced: false,
          consecutiveInitFailureCount: consecutiveFailureCount,
          shortened_url: true,
        }
        trackFileEvent('multiplayer_connect_truncate_ws_url', debugStateSnapshot?.openFile?.key, debugStateSnapshot, truncateData)
        logInfo('multiplayer', 'Truncating websocket url to force full loading', truncateData)
      }

      // Create new WebSocket
      websocket = new WebSocket(finalUrl)
      websocket.binaryType = 'arraybuffer'
      websocket.onopen = () => {
        consecutiveFailureCount = 0
        handleConnectFinished()
        fullscreenPerfManager.logWsMsg('mp-ws-onopen')
        trackFileEvent('multiplayer_connect_ws_open', debugStateSnapshot?.openFile?.key, debugStateSnapshot, {
          connectAttemptId,
        })
        logInfo('multiplayer', 'Websocket opened')
      }
    }

    // Common event handlers
    websocket.onmessage = (event) => {
      const data = new Uint8Array(event.data)
      fullscreenPerfManager.logWsMsg('mp-ws-onmessage', data.length * data.BYTES_PER_ELEMENT)
      handleReceiveMessage(data)
    }
    websocket.onclose = () => {
      disconnectWebsocket('socket.onclose')
    }
    websocket.onerror = () => {
      if (navigator.onLine) consecutiveFailureCount++
      else consecutiveFailureCount = 0
      disconnectWebsocket('socket.onerror')
      trackFileEvent('multiplayer_connect_ws_error', debugStateSnapshot?.openFile?.key, debugStateSnapshot, {
        connectAttemptId,
        consecutiveInitFailureCount: consecutiveFailureCount,
        online: navigator.onLine,
      })
      logInfo('multiplayer', 'Websocket error', {
        online: navigator.onLine,
        consecutiveInitFailureCount: consecutiveFailureCount,
      })
    }

    // Track connect attempt
    trackFileEvent('multiplayer_connect_attempt_ws_start', debugStateSnapshot?.openFile?.key, debugStateSnapshot, {
      url,
      urlLength: url.length,
      connectAttemptId,
      isReconnect: !!ReduxSceneGraph && getSingletonSceneGraph().scene !== -1,
      isIncremental: Multiplayer?.isIncrementalSession(),
    })
  },

  /**
   * Disconnects the WebSocket.
   * @param reason - Reason for disconnection
   */
  disconnect: disconnectWebsocket,

  /**
   * Sends data via WebSocket.
   * @param data - Data to send
   */
  send(data: any): void {
    try {
      websocket?.send(data)
    } catch {
      // Ignore send errors
    }
  },
}

// Aliases for backward compatibility or external usage
// Original export names: Pp -> websocketManager, Yq -> getBufferedAmount, u1 -> breakMultiplayerWebsocketForTesting, zi -> unbreakMultiplayerWebsocketForTesting
export const Pp = websocketManager
export const Yq = getBufferedAmount
export const u1 = breakMultiplayerWebsocketForTesting
export const zi = unbreakMultiplayerWebsocketForTesting
