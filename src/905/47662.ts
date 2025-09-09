import {
  createDeferredPromise,
  ExponentialBackoff,
  throwAsyncIf,
  throwIf,
} from '../905/419236'
import {
  ComputationError,
  ConnectionModes,
  WebSocketCloseCodes,
} from '../905/957591'

/**
 * Configuration for exponential backoff.
 */
const DEFAULT_BACKOFF_CONFIG = {
  backoffInitialMs: 250,
  backoffMaxMs: 600_000,
  backoffMultiplier: 2,
}

/**
 * Observer interface for connection events.
 */
export interface ConnectionObserver {
  onConnectionOpen: () => void
  onConnectionClose: (event: CloseEvent) => void
  handleMessage: (message: any) => void
}

/**
 * Connection state type.
 */
export type ConnectionState
  = | { type: 'disconnected' }
    | { type: 'connecting' }
    | {
      type: 'connected'
      authenticated?: boolean
      count?: number
      podName?: string
      containerName?: string
      serverVersion?: string
    }
    | { type: 'error', errorType: string }

/**
 * ClientConnection manages a websocket connection with backoff, authentication, and observers.
 */
export class ClientConnection {
  uriParams: any
  wsImpl: any
  authArgs: any
  emitter: any
  clientOptions: any
  visibilityObserver: any
  clearStickySession: any
  uri: string
  ws: any = null
  state: ConnectionState = { type: 'disconnected' }
  backoff: ExponentialBackoff
  onCloseResolve: ((value?: any) => void) | null = null
  reconnectTimeout: any = null
  pingInterval: any = null
  preventReconnectForDebugging = false
  preventAutoReconnectOnNextClose = false
  connectionCount = 0
  observers: Set<ConnectionObserver> = new Set()
  currentConnAttemptCount = 0
  _lastAckTime: Date = new Date(0)

  /**
   * Constructs a ClientConnection.
   */
  constructor(
    uriParams: any,
    wsImpl: any,
    authArgs: any,
    emitter: any,
    clientOptions: any = {},
    visibilityObserver?: any,
    clearStickySession?: any,
  ) {
    this.uriParams = uriParams
    this.wsImpl = wsImpl
    this.authArgs = authArgs
    this.emitter = emitter
    this.clientOptions = clientOptions
    this.visibilityObserver = visibilityObserver
    this.clearStickySession = clearStickySession
    this.uri = this.constructUri()
    if (this.visibilityObserver) {
      this.visibilityObserver.addChangeHandler(this.visibilityChange)
    }
    const backoffConfig = clientOptions.backoffConfig ?? DEFAULT_BACKOFF_CONFIG
    this.backoff = new ExponentialBackoff(backoffConfig)
    this.registerPingInterval()
  }

  /**
   * Cleans up connection and observers.
   * (cleanup)
   */
  cleanup(): void {
    if (this.visibilityObserver) {
      this.visibilityObserver.removeChangeHandler(this.visibilityChange)
    }
    this.closeWithoutReconnecting(WebSocketCloseCodes.CLIENT_GOING_AWAY, 'client_cleanup')
    this.clearPingInterval()
  }

  /**
   * Constructs the websocket URI.
   * (constructUri)
   */
  constructUri(): string {
    if (this.uriParams.url[this.uriParams.url.length - 1] === '/') {
      this.uriParams.url = this.uriParams.url.slice(0, -1)
    }
    let apiPath = '/api/livegraph'
    if (this.uriParams.useNext)
      apiPath = '/api/livegraph-next'
    if (
      this.uriParams.url.includes('localhost')
      || this.uriParams.url.includes('127.0.0.1')
    ) {
      apiPath = ''
    }
    const params = new URLSearchParams(this.uriParams.pageLoadToken)
    params.append('userId', this.uriParams.userId || '')
    params.append('anonUserId', this.uriParams.anonUserId || '')
    params.append('clientType', this.uriParams.clientType)
    params.append('commitHash', this.uriParams.commitHash)
    params.append('preload', JSON.stringify(this.uriParams.preloadedViews))
    Object.entries(this.uriParams.extras).forEach(([key, value]) => {
      params.append(key, value as string)
    })
    return `${this.uriParams.url}${apiPath}?${params.toString()}`
  }

  /**
   * Registers ping interval for connection keepalive.
   * (registerPingInterval)
   */
  registerPingInterval(): void {
    if (!this.pingInterval) {
      this.pingInterval = setInterval(() => {
        if (this.isConnected() && !this.visibilityObserver?.isHidden()) {
          this.send({ messageType: 'ping' })
        }
      }, this.getIntervalWithJitter())
    }
  }

  /**
   * Clears ping interval.
   * (clearPingInterval)
   */
  clearPingInterval(): void {
    if (this.pingInterval) {
      clearInterval(this.pingInterval)
      this.pingInterval = null
    }
  }

  /**
   * Adds an observer for connection events.
   * (addObserver)
   */
  addObserver(observer: ConnectionObserver): void {
    this.observers.add(observer)
  }

  /**
   * Removes an observer.
   * (removeObserver)
   */
  removeObserver(observer: ConnectionObserver): void {
    this.observers.delete(observer)
  }

  /**
   * Debug utilities for manual disconnect/reconnect/ping.
   * (debug)
   */
  get debug() {
    return {
      disconnect: () => {
        this.preventReconnectForDebugging = true
        if (this.ws) {
          this.ws.close(WebSocketCloseCodes.MANUAL_CLOSE, 'for-testing')
        }
      },
      reconnect: () => {
        this.preventReconnectForDebugging = false
        this.connect()
      },
      sendPingNow: () => {
        this.sendPingNow()
      },
    }
  }

  /**
   * Connects to the websocket server.
   * (connect)
   */
  async connect(): Promise<any> {
    const [promise, resolve] = createDeferredPromise()
    let opened = false
    const isReconnect = this.connectionCount > 0
    const isHidden = this.visibilityObserver?.isHidden() && isReconnect
    if (
      this.preventReconnectForDebugging
      || isHidden
      || this.state.type === 'connected'
      || this.state.type === 'connecting'
    ) {
      return 'skipped'
    }
    this.clearReconnect()
    this.currentConnAttemptCount++
    const navEntries = performance.getEntriesByType('navigation')
    const isReload = navEntries.length > 0 && navEntries[0]?.type === 'reload'
    const unstickOnRefresh = !!this.clientOptions.livegraphUnstickOnRefresh
    if (isReload && !isReconnect) {
      this.emitter.emit({ type: 'HARD_REFRESH' })
      if (unstickOnRefresh)
        this.clearStickySession?.()
    }
    const splayConfig = this.clientOptions.splayDesktopBellConnConfig
    if (splayConfig) {
      const now = new Date()
      if (
        splayConfig.timesUtc.some((t: string) => {
          const [h, m, s] = t.split(':').map(Number)
          const target = new Date(now)
          target.setUTCHours(h ?? 0, m, s)
          return Math.abs(now.getTime() - target.getTime()) / 1000 < splayConfig.rangeSec
        })
      ) {
        const delayMs = Math.random() * splayConfig.durationSec * 1000
        let timeout: any = null
        await new Promise((res) => {
          timeout = setTimeout(res, delayMs)
        })
        if (timeout)
          clearTimeout(timeout)
      }
    }
    const urlObj = new URL(this.uri)
    urlObj.searchParams.append(
      'connectionType',
      isReconnect ? ConnectionModes.Reconnect : ConnectionModes.Initial,
    )
    urlObj.searchParams.append('reconnect', `${this.backoff.attemptsSoFar()}`)
    if (isReconnect)
      urlObj.searchParams.delete('preload')
    this.ws = this.wsImpl(urlObj.toString())
    this.setConnectionState({ type: 'connecting' })
    const wsRef = this.ws

    this.ws.onopen = (_event: Event) => {
      const currentWs = this.ws
      throwAsyncIf(wsRef === currentWs, 'Current websocket is different from newly-opened websocket')
      throwIf(this.ws !== null, 'websocket should be non-null')
      if (this.ws?.readyState !== this.ws?.OPEN)
        return
      this.setConnectionState({
        type: 'connected',
        authenticated: false,
        count: this.backoff.attemptsSoFar(),
      })
      resolve('success')
      opened = true
      this.connectionCount += 1
      const tags: any = {
        clientType: this.uriParams.clientType,
        commitHash: this.uriParams.commitHash,
      }
      if (this.uriParams.extras.clientUrl)
        tags.clientUrl = this.uriParams.extras.clientUrl
      const authMsg = {
        messageType: 'auth',
        clientType: this.uriParams.clientType,
        args: this.authArgs,
        tags,
      }
      this.emitter.emit({ type: 'REQUEST_MESSAGE', message: authMsg })
      this.ws.send(JSON.stringify(authMsg))
      this.observers.forEach(observer => observer.onConnectionOpen())
    }

    this.ws.onclose = (event: CloseEvent) => {
      this.setConnectionState({ type: 'disconnected' })
      this.emitter.emit({
        type: 'CONNECTION_CLOSED',
        url: this.uri,
        closeEvent: event,
      })
      if (
        [WebSocketCloseCodes.SERVER_SESSION_LIMIT_REACHED, WebSocketCloseCodes.AUTH_FAIL].includes(
          event.code,
        )
      ) {
        this.clearStickySession?.()
      }
      if (!opened)
        resolve('failure')
      if (this.onCloseResolve)
        this.onCloseResolve()
      if (this.preventAutoReconnectOnNextClose) {
        this.preventAutoReconnectOnNextClose = false
        return
      }
      if (!this.reconnectTimeout) {
        this.reconnectTimeout = setTimeout(() => {
          this.reconnectTimeout = null
          this.connect()
        }, this.backoff.nextBackoffMs())
      }
      this.observers.forEach(observer => observer.onConnectionClose(event))
    }

    this.ws.onerror = (event: Event) => {
      this.emitter.emit({ type: 'ERROR', error: event })
    }

    this.ws.onmessage = ({ data }: MessageEvent) => {
      const msg = JSON.parse(data)
      if (msg) {
        this.emitter.emit({ type: 'RESPONSE_MESSAGE', message: msg })
        switch (msg.messageType) {
          case 'authSuccess':
            this.setConnectionState({
              type: 'connected',
              authenticated: true,
              count: this.currentConnAttemptCount,
              podName: msg.podName,
              containerName: msg.containerName,
              serverVersion: msg.serverVersion,
            })
            this.backoff.reset()
            this.currentConnAttemptCount = 0
            break
          case 'authFail':
            this.emitter.emit({ type: 'ERROR', error: new ComputationError() })
            this.setConnectionState({ type: 'error', errorType: 'authFail' })
            this.closeWithoutReconnecting(WebSocketCloseCodes.AUTH_FAIL, 'client_auth_fail')
            break
          case 'ack':
            this._lastAckTime = new Date()
            break
          case 'requestError':
            this.setConnectionState({ type: 'error', errorType: 'requestError' })
            this.ws?.close(WebSocketCloseCodes.CLIENT_ERROR, 'request_error')
            break
          case 'serverError':
            this.setConnectionState({ type: 'error', errorType: 'serverError' })
            this.ws?.close(WebSocketCloseCodes.SERVER_ERROR, 'server_error')
            break
        }
        this.observers.forEach(observer => observer.handleMessage(msg))
      }
    }

    return promise
  }

  /**
   * Clears any scheduled reconnect.
   * (clearReconnect)
   */
  clearReconnect(): void {
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout)
      this.reconnectTimeout = null
    }
  }

  /**
   * Handles visibility change events.
   * (visibilityChange)
   */
  visibilityChange = (): void => {
    if (this.visibilityObserver?.isHidden()) {
      this.clearPingInterval()
    }
    else {
      this.sendPingNow()
      this.registerPingInterval()
      this.connect()
    }
  }

  /**
   * Closes connection without reconnecting.
   * (closeWithoutReconnecting)
   */
  async closeWithoutReconnecting(code?: number, reason?: string): Promise<void> {
    const [promise, resolve] = createDeferredPromise()
    this.onCloseResolve = resolve
    this.clearReconnect()
    this.preventAutoReconnectOnNextClose = true
    if (this.ws !== null && this.ws?.readyState !== this.ws?.CLOSED) {
      this.ws.close(code, reason)
      await promise
    }
  }

  /**
   * Reconnects to the server.
   * (reconnect)
   */
  async reconnect(): Promise<any> {
    this.preventAutoReconnectOnNextClose = false
    return this.connect()
  }

  /**
   * Returns interval with jitter for ping.
   * (getIntervalWithJitter)
   */
  getIntervalWithJitter(): number {
    return 30_000 + (Math.random() - 0.5) * 5_000
  }

  /**
   * Checks if connection is established.
   * (isConnected)
   */
  isConnected(): boolean {
    return this.state.type === 'connected' && !!this.ws && this.ws?.readyState === this.ws?.OPEN
  }

  /**
   * Checks if connection is authenticated.
   * (isAuthenticated)
   */
  isAuthenticated(): boolean {
    return this.isConnected() && !!(this.state as any).authenticated
  }

  /**
   * Checks if this is the initial connection.
   * (isInitial)
   */
  isInitial(): boolean {
    return this.connectionCount === 1
  }

  /**
   * Returns connection count.
   * (getConnectionCount)
   */
  getConnectionCount(): number {
    return this.connectionCount
  }

  /**
   * Sends a message over the websocket.
   * (send)
   */
  send(message: any): void {
    if (this.isConnected()) {
      this.emitter.emit({ type: 'REQUEST_MESSAGE', message })
      this.ws.send(JSON.stringify(message))
    }
    else {
      throwAsyncIf(
        false,
        `ClientConnection.send called with message type ${message.messageType} while in disconnected state`,
      )
    }
  }

  /**
   * Sends a ping message immediately.
   * (sendPingNow)
   */
  sendPingNow(): void {
    if (this.isConnected() && !this.visibilityObserver?.isHidden()) {
      this.send({ messageType: 'ping' })
    }
  }

  /**
   * Returns last ack time.
   * (getLastAckTime)
   */
  getLastAckTime(): Date {
    return this._lastAckTime
  }

  /**
   * Sets connection state and emits event.
   * (setConnectionState)
   */
  setConnectionState(state: ConnectionState): void {
    this.state = state
    this.emitter.emit({
      type: 'CONNECTION_STATE',
      state,
      url: this.uri,
    })
  }

  /**
   * Returns current connection state.
   * (getState)
   */
  getState(): ConnectionState {
    return this.state
  }

  /**
   * Checks if reconnect is scheduled.
   * (isReconnectScheduled)
   */
  isReconnectScheduled(): boolean {
    return this.state.type === 'disconnected' && this.reconnectTimeout !== null
  }

  /**
   * Returns backoff instance.
   * (getBackoff)
   */
  getBackoff(): ExponentialBackoff {
    return this.backoff
  }

  /**
   * Returns websocket URL.
   * (getWsUrl)
   */
  getWsUrl(): URL | null {
    return this.ws ? new URL(this.ws.url) : null
  }
}

// Export with refactored name
export const A = ClientConnection
