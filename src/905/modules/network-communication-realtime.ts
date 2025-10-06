/**
 * Network and Real-Time Communication Systems Module
 * 
 * This module consolidates and enhances all network communication, real-time data streaming,
 * and advanced HTTP operations extracted from the main plugin file and existing modules.
 * 
 * Key responsibilities:
 * - Advanced HTTP client operations with retry logic and caching
 * - WebSocket management for real-time bidirectional communication
 * - Event streaming and server-sent events (SSE) handling
 * - Push notification subscription and delivery management
 * - Broadcast channel communication for multi-tab synchronization
 * - Network status monitoring and offline/online state management
 * - Request batching, throttling, and optimization strategies
 * - Real-time subscription management for live data updates
 * - Communication preference management and user settings
 * - Network security and domain validation for safe communication
 */

/**
 * Network Communication Interfaces and Types
 */
export interface NetworkRequest {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS'
  headers?: Record<string, string>
  body?: any
  timeout?: number
  retries?: number
  cache?: boolean
  signal?: AbortSignal
}

export interface NetworkResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: Record<string, string>
  ok: boolean
  redirected: boolean
  type: 'basic' | 'cors' | 'error' | 'opaque' | 'opaqueredirect'
  url: string
  cached?: boolean
  timestamp: number
}

export interface WebSocketConfig {
  url: string
  protocols?: string | string[]
  reconnect?: boolean
  maxReconnectAttempts?: number
  reconnectInterval?: number
  heartbeatInterval?: number
  messageQueue?: boolean
  compression?: boolean
}

export interface WebSocketMessage {
  type: string
  id?: string
  data?: any
  timestamp: number
  origin?: string
}

export interface EventStreamConfig {
  url: string
  withCredentials?: boolean
  reconnect?: boolean
  maxReconnectAttempts?: number
  retryDelay?: number
  headers?: Record<string, string>
}

export interface EventStreamMessage {
  id?: string
  event?: string
  data: string
  lastEventId?: string
  retry?: number
  timestamp: number
}

export interface PushNotificationConfig {
  vapidKey: string
  serviceWorkerUrl?: string
  scope?: string
  subscriptionOptions?: PushSubscriptionOptions
}

export interface BroadcastConfig {
  channelName: string
  origin?: string
  allowCrossOrigin?: boolean
}

export interface NetworkMetrics {
  requestCount: number
  responseTime: number
  errorRate: number
  cacheHitRate: number
  bytesTransferred: number
  connectionStatus: 'online' | 'offline' | 'slow'
  lastUpdated: number
}

export interface CommunicationPreference {
  channelType: string
  policyType: string
  policySetting: string
  enabled: boolean
  priority: number
}

/**
 * Advanced HTTP Client Manager
 * Enhanced version consolidating HTTPClientManager from api-integration-services.ts
 */
export class AdvancedHTTPClientManager {
  baseURL: string
  defaultHeaders: Record<string, string>
  requestCache: Map<string, { response: NetworkResponse; expires: number }>
  requestQueue: Map<string, Promise<NetworkResponse>>
  rateLimiter: Map<string, { count: number; resetTime: number }>
  networkMetrics: NetworkMetrics
  interceptors: {
    request: Array<(request: NetworkRequest) => NetworkRequest | Promise<NetworkRequest>>
    response: Array<(response: NetworkResponse) => NetworkResponse | Promise<NetworkResponse>>
  }

  constructor(baseURL: string = '', defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      ...defaultHeaders
    }
    this.requestCache = new Map()
    this.requestQueue = new Map()
    this.rateLimiter = new Map()
    this.networkMetrics = {
      requestCount: 0,
      responseTime: 0,
      errorRate: 0,
      cacheHitRate: 0,
      bytesTransferred: 0,
      connectionStatus: navigator.onLine ? 'online' : 'offline',
      lastUpdated: Date.now()
    }
    this.interceptors = { request: [], response: [] }
    this.setupNetworkMonitoring()
  }

  /**
   * Setup network status monitoring
   */
  setupNetworkMonitoring(): void {
    window.addEventListener('online', () => {
      this.networkMetrics.connectionStatus = 'online'
      this.networkMetrics.lastUpdated = Date.now()
    })

    window.addEventListener('offline', () => {
      this.networkMetrics.connectionStatus = 'offline'
      this.networkMetrics.lastUpdated = Date.now()
    })
  }

  /**
   * Add request interceptor
   */
  addRequestInterceptor(interceptor: (request: NetworkRequest) => NetworkRequest | Promise<NetworkRequest>): void {
    this.interceptors.request.push(interceptor)
  }

  /**
   * Add response interceptor
   */
  addResponseInterceptor(interceptor: (response: NetworkResponse) => NetworkResponse | Promise<NetworkResponse>): void {
    this.interceptors.response.push(interceptor)
  }

  /**
   * Enhanced HTTP request with caching, retries, and metrics
   */
  async request<T = any>(config: NetworkRequest): Promise<NetworkResponse<T>> {
    const startTime = Date.now()

    try {
      // Apply request interceptors
      let requestConfig = { ...config }
      for (const interceptor of this.interceptors.request) {
        requestConfig = await interceptor(requestConfig)
      }

      // Check cache for GET requests
      if (requestConfig.method === 'GET' || !requestConfig.method) {
        const cacheKey = this.generateCacheKey(requestConfig)
        const cached = this.getFromCache(cacheKey)
        if (cached) {
          this.updateMetrics(startTime, true)
          return cached
        }
      }

      // Check rate limiting
      this.checkRateLimit(requestConfig.url)

      // Check for duplicate requests
      const requestKey = this.generateRequestKey(requestConfig)
      if (this.requestQueue.has(requestKey)) {
        return await this.requestQueue.get(requestKey)!
      }

      // Create request promise
      const requestPromise = this.executeRequest<T>(requestConfig, startTime)
      this.requestQueue.set(requestKey, requestPromise)

      const response = await requestPromise
      this.requestQueue.delete(requestKey)

      return response
    } catch (error) {
      this.networkMetrics.errorRate++
      this.updateMetrics(startTime, false)
      throw error
    }
  }

  /**
   * Execute HTTP request with retries
   */
  async executeRequest<T>(config: NetworkRequest, startTime: number, attempt: number = 1): Promise<NetworkResponse<T>> {
    const url = config.url.startsWith('http') ? config.url : `${this.baseURL}${config.url}`
    const headers = { ...this.defaultHeaders, ...config.headers }

    const fetchConfig: RequestInit = {
      method: config.method || 'GET',
      headers,
      signal: config.signal
    }

    if (config.body && config.method !== 'GET' && config.method !== 'HEAD') {
      fetchConfig.body = typeof config.body === 'string' ? config.body : JSON.stringify(config.body)
    }

    try {
      const response = await fetch(url, fetchConfig)

      let data: T
      const contentType = response.headers.get('content-type')

      if (contentType?.includes('application/json')) {
        data = await response.json()
      } else if (contentType?.includes('text/')) {
        data = await response.text() as any
      } else {
        data = await response.blob() as any
      }

      const networkResponse: NetworkResponse<T> = {
        data,
        status: response.status,
        statusText: response.statusText,
        headers: this.parseHeaders(response.headers),
        ok: response.ok,
        redirected: response.redirected,
        type: response.type as any,
        url: response.url,
        timestamp: Date.now()
      }

      // Apply response interceptors
      let processedResponse = networkResponse
      for (const interceptor of this.interceptors.response) {
        processedResponse = await interceptor(processedResponse)
      }

      // Cache successful GET requests
      if (response.ok && (config.method === 'GET' || !config.method) && config.cache !== false) {
        this.addToCache(this.generateCacheKey(config), processedResponse)
      }

      this.updateMetrics(startTime, false)
      return processedResponse
    } catch (error) {
      // Retry logic
      if (config.retries && attempt < config.retries) {
        await this.delay(2 ** attempt * 1000) // Exponential backoff
        return this.executeRequest(config, startTime, attempt + 1)
      }
      throw error
    }
  }

  /**
   * GET request shorthand
   */
  async get<T = any>(url: string, config?: Partial<NetworkRequest>): Promise<NetworkResponse<T>> {
    return this.request<T>({ url, method: 'GET', ...config })
  }

  /**
   * POST request shorthand
   */
  async post<T = any>(url: string, body?: any, config?: Partial<NetworkRequest>): Promise<NetworkResponse<T>> {
    return this.request<T>({ url, method: 'POST', body, ...config })
  }

  /**
   * PUT request shorthand
   */
  async put<T = any>(url: string, body?: any, config?: Partial<NetworkRequest>): Promise<NetworkResponse<T>> {
    return this.request<T>({ url, method: 'PUT', body, ...config })
  }

  /**
   * DELETE request shorthand
   */
  async delete<T = any>(url: string, config?: Partial<NetworkRequest>): Promise<NetworkResponse<T>> {
    return this.request<T>({ url, method: 'DELETE', ...config })
  }

  /**
   * Cache management methods
   */
  generateCacheKey(config: NetworkRequest): string {
    return `${config.method || 'GET'}:${config.url}:${JSON.stringify(config.headers || {})}`
  }

  generateRequestKey(config: NetworkRequest): string {
    return `${config.method || 'GET'}:${config.url}:${JSON.stringify(config.body || {})}`
  }

  getFromCache(key: string): NetworkResponse | null {
    const cached = this.requestCache.get(key)
    if (cached && cached.expires > Date.now()) {
      return { ...cached.response, cached: true }
    }
    this.requestCache.delete(key)
    return null
  }

  addToCache(key: string, response: NetworkResponse, ttl: number = 300000): void { // 5 minutes default
    this.requestCache.set(key, {
      response: { ...response },
      expires: Date.now() + ttl
    })
  }

  checkRateLimit(url: string): void {
    const domain = new URL(url, this.baseURL).hostname
    const limit = this.rateLimiter.get(domain)

    if (limit) {
      if (Date.now() > limit.resetTime) {
        this.rateLimiter.set(domain, { count: 1, resetTime: Date.now() + 60000 })
      } else if (limit.count >= 100) { // 100 requests per minute default
        throw new Error(`Rate limit exceeded for ${domain}`)
      } else {
        limit.count++
      }
    } else {
      this.rateLimiter.set(domain, { count: 1, resetTime: Date.now() + 60000 })
    }
  }

  parseHeaders(headers: Headers): Record<string, string> {
    const result: Record<string, string> = {}
    headers.forEach((value, key) => {
      result[key] = value
    })
    return result
  }

  updateMetrics(startTime: number, fromCache: boolean): void {
    this.networkMetrics.requestCount++
    this.networkMetrics.responseTime = Date.now() - startTime
    if (fromCache) {
      this.networkMetrics.cacheHitRate++
    }
    this.networkMetrics.lastUpdated = Date.now()
  }

  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

  /**
   * Get network metrics
   */
  getMetrics(): NetworkMetrics {
    return { ...this.networkMetrics }
  }

  /**
   * Clear cache
   */
  clearCache(): void {
    this.requestCache.clear()
  }
}

/**
 * WebSocket Manager for Real-Time Communication
 */
export class WebSocketManager {
  socket: WebSocket | null = null
  config: WebSocketConfig
  reconnectAttempts: number = 0
  messageQueue: WebSocketMessage[] = []
  eventListeners: Map<string, Set<(message: WebSocketMessage) => void>> = new Map()
  heartbeatInterval: number | null = null
  connectionState: 'connecting' | 'connected' | 'disconnected' | 'error' = 'disconnected'

  constructor(config: WebSocketConfig) {
    this.config = {
      reconnect: true,
      maxReconnectAttempts: 5,
      reconnectInterval: 5000,
      heartbeatInterval: 30000,
      messageQueue: true,
      compression: false,
      ...config
    }
  }

  /**
   * Connect to WebSocket server
   */
  async connect(): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        this.connectionState = 'connecting'
        this.socket = new WebSocket(this.config.url, this.config.protocols)

        this.socket.onopen = () => {
          this.connectionState = 'connected'
          this.reconnectAttempts = 0
          this.startHeartbeat()
          this.processMessageQueue()
          resolve()
        }

        this.socket.onmessage = (event) => {
          this.handleMessage(event)
        }

        this.socket.onclose = (event) => {
          this.connectionState = 'disconnected'
          this.stopHeartbeat()
          this.handleDisconnection(event)
        }

        this.socket.onerror = (error) => {
          const wasConnecting = this.connectionState === 'connecting'
          this.connectionState = 'error'
          this.emit('error', { type: 'error', data: error, timestamp: Date.now() })
          if (wasConnecting) {
            reject(error)
          }
        }
      } catch (error) {
        this.connectionState = 'error'
        reject(error)
      }
    })
  }

  /**
   * Send message through WebSocket
   */
  send(message: Omit<WebSocketMessage, 'timestamp'>): void {
    const messageWithTimestamp: WebSocketMessage = {
      ...message,
      timestamp: Date.now()
    }

    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(messageWithTimestamp))
    } else if (this.config.messageQueue) {
      this.messageQueue.push(messageWithTimestamp)
    } else {
      throw new Error('WebSocket is not connected and message queuing is disabled')
    }
  }

  /**
   * Subscribe to message types
   */
  on(eventType: string, callback: (message: WebSocketMessage) => void): void {
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, new Set())
    }
    this.eventListeners.get(eventType)!.add(callback)
  }

  /**
   * Unsubscribe from message types
   */
  off(eventType: string, callback?: (message: WebSocketMessage) => void): void {
    if (callback) {
      this.eventListeners.get(eventType)?.delete(callback)
    } else {
      this.eventListeners.delete(eventType)
    }
  }

  /**
   * Emit message to listeners
   */
  emit(eventType: string, message: WebSocketMessage): void {
    this.eventListeners.get(eventType)?.forEach(callback => {
      try {
        callback(message)
      } catch (error) {
        console.error('Error in WebSocket message callback:', error)
      }
    })
  }

  /**
   * Handle incoming messages
   */
  handleMessage(event: MessageEvent): void {
    try {
      const message: WebSocketMessage = JSON.parse(event.data)
      this.emit(message.type, message)
      this.emit('*', message) // Wildcard listener
    } catch (error) {
      console.error('Error parsing WebSocket message:', error)
    }
  }

  /**
   * Handle disconnection with reconnection logic
   */
  handleDisconnection(event: CloseEvent): void {
    this.emit('disconnect', { type: 'disconnect', data: event, timestamp: Date.now() })

    if (this.config.reconnect && this.reconnectAttempts < this.config.maxReconnectAttempts!) {
      this.reconnectAttempts++
      setTimeout(() => {
        this.connect().catch(error => {
          console.error('WebSocket reconnection failed:', error)
        })
      }, this.config.reconnectInterval! * this.reconnectAttempts)
    }
  }

  /**
   * Start heartbeat to keep connection alive
   */
  startHeartbeat(): void {
    if (this.config.heartbeatInterval) {
      this.heartbeatInterval = window.setInterval(() => {
        this.send({ type: 'ping' })
      }, this.config.heartbeatInterval)
    }
  }

  /**
   * Stop heartbeat
   */
  stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval)
      this.heartbeatInterval = null
    }
  }

  /**
   * Process queued messages
   */
  processMessageQueue(): void {
    while (this.messageQueue.length > 0) {
      const message = this.messageQueue.shift()!
      this.socket?.send(JSON.stringify(message))
    }
  }

  /**
   * Close WebSocket connection
   */
  close(): void {
    this.config.reconnect = false
    this.stopHeartbeat()
    this.socket?.close()
    this.connectionState = 'disconnected'
  }

  /**
   * Get connection state
   */
  getState(): string {
    return this.connectionState
  }
}

/**
 * Event Stream Manager for Server-Sent Events
 */
export class EventStreamManager {
  eventSource: EventSource | null = null
  config: EventStreamConfig
  reconnectAttempts: number = 0
  eventListeners: Map<string, Set<(message: EventStreamMessage) => void>> = new Map()

  constructor(config: EventStreamConfig) {
    this.config = {
      reconnect: true,
      maxReconnectAttempts: 5,
      retryDelay: 3000,
      withCredentials: false,
      ...config
    }
  }

  /**
   * Connect to event stream
   */
  connect(): void {
    try {
      this.eventSource = new EventSource(this.config.url, {
        withCredentials: this.config.withCredentials
      })

      this.eventSource.onopen = () => {
        this.reconnectAttempts = 0
        this.emit('open', { data: 'connected', timestamp: Date.now() })
      }

      this.eventSource.onmessage = (event) => {
        this.handleMessage(event)
      }

      this.eventSource.onerror = (error) => {
        this.handleError(error)
      }
    } catch (error) {
      console.error('Error connecting to event stream:', error)
    }
  }

  /**
   * Subscribe to event types
   */
  on(eventType: string, callback: (message: EventStreamMessage) => void): void {
    if (!this.eventListeners.has(eventType)) {
      this.eventListeners.set(eventType, new Set())
    }
    this.eventListeners.get(eventType)!.add(callback)

    // Subscribe to specific events on EventSource
    if (this.eventSource && eventType !== 'message' && eventType !== 'error' && eventType !== 'open') {
      this.eventSource.addEventListener(eventType, (event) => {
        this.handleCustomEvent(eventType, event)
      })
    }
  }

  /**
   * Unsubscribe from event types
   */
  off(eventType: string, callback?: (message: EventStreamMessage) => void): void {
    if (callback) {
      this.eventListeners.get(eventType)?.delete(callback)
    } else {
      this.eventListeners.delete(eventType)
    }
  }

  /**
   * Handle incoming messages
   */
  handleMessage(event: MessageEvent): void {
    const message: EventStreamMessage = {
      data: event.data,
      lastEventId: event.lastEventId,
      timestamp: Date.now()
    }
    this.emit('message', message)
  }

  /**
   * Handle custom events
   */
  handleCustomEvent(eventType: string, event: MessageEvent): void {
    const message: EventStreamMessage = {
      event: eventType,
      data: event.data,
      lastEventId: event.lastEventId,
      timestamp: Date.now()
    }
    this.emit(eventType, message)
  }

  /**
   * Handle errors with reconnection logic
   */
  handleError(_error: Event): void {
    this.emit('error', { data: 'error', timestamp: Date.now() })

    if (this.config.reconnect && this.reconnectAttempts < this.config.maxReconnectAttempts!) {
      this.reconnectAttempts++
      setTimeout(() => {
        this.close()
        this.connect()
      }, this.config.retryDelay! * this.reconnectAttempts)
    }
  }

  /**
   * Emit events to listeners
   */
  emit(eventType: string, message: EventStreamMessage): void {
    this.eventListeners.get(eventType)?.forEach(callback => {
      try {
        callback(message)
      } catch (error) {
        console.error('Error in EventStream callback:', error)
      }
    })
  }

  /**
   * Close event stream
   */
  close(): void {
    this.eventSource?.close()
    this.eventSource = null
  }
}

/**
 * Push Notification Manager
 */
export class PushNotificationManager {
  config: PushNotificationConfig
  serviceWorkerRegistration: ServiceWorkerRegistration | null = null
  subscription: PushSubscription | null = null

  constructor(config: PushNotificationConfig) {
    this.config = {
      serviceWorkerUrl: '/sw.js',
      scope: '/',
      ...config
    }
  }

  /**
   * Initialize push notifications
   */
  async initialize(): Promise<void> {
    if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
      throw new Error('Push messaging is not supported')
    }

    // Register service worker
    this.serviceWorkerRegistration = await navigator.serviceWorker.register(
      this.config.serviceWorkerUrl!,
      { scope: this.config.scope }
    )

    // Wait for service worker to be ready
    await navigator.serviceWorker.ready
  }

  /**
   * Request permission for push notifications
   */
  async requestPermission(): Promise<NotificationPermission> {
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') {
      throw new Error('Push notification permission denied')
    }
    return permission
  }

  /**
   * Subscribe to push notifications
   */
  async subscribe(): Promise<PushSubscription> {
    if (!this.serviceWorkerRegistration) {
      throw new Error('Service worker not registered')
    }

    const applicationServerKey = this.urlB64ToUint8Array(this.config.vapidKey)

    this.subscription = await this.serviceWorkerRegistration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey,
      ...this.config.subscriptionOptions
    })

    return this.subscription
  }

  /**
   * Unsubscribe from push notifications
   */
  async unsubscribe(): Promise<boolean> {
    if (this.subscription) {
      const result = await this.subscription.unsubscribe()
      this.subscription = null
      return result
    }
    return false
  }

  /**
   * Get current subscription
   */
  async getSubscription(): Promise<PushSubscription | null> {
    if (!this.serviceWorkerRegistration) {
      return null
    }
    return await this.serviceWorkerRegistration.pushManager.getSubscription()
  }

  /**
   * Convert VAPID key to Uint8Array
   */
  urlB64ToUint8Array(base64String: string): Uint8Array {
    const padding = '='.repeat((4 - base64String.length % 4) % 4)
    const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }
}

/**
 * Broadcast Channel Manager for Multi-Tab Communication
 */
export class BroadcastChannelManager {
  channel: BroadcastChannel | null = null
  config: BroadcastConfig
  messageListeners: Set<(message: any) => void> = new Set()

  constructor(config: BroadcastConfig) {
    this.config = config
    this.initialize()
  }

  /**
   * Initialize broadcast channel
   */
  initialize(): void {
    if ('BroadcastChannel' in window) {
      this.channel = new BroadcastChannel(this.config.channelName)
      this.channel.onmessage = (event) => {
        this.handleMessage(event)
      }
    }
  }

  /**
   * Send message to all tabs
   */
  broadcast(message: any): void {
    if (this.channel) {
      this.channel.postMessage({
        ...message,
        timestamp: Date.now(),
        origin: this.config.origin || window.location.origin
      })
    }
  }

  /**
   * Subscribe to messages
   */
  onMessage(callback: (message: any) => void): void {
    this.messageListeners.add(callback)
  }

  /**
   * Unsubscribe from messages
   */
  offMessage(callback: (message: any) => void): void {
    this.messageListeners.delete(callback)
  }

  /**
   * Handle incoming messages
   */
  handleMessage(event: MessageEvent): void {
    if (!this.config.allowCrossOrigin && event.data.origin !== window.location.origin) {
      return
    }

    this.messageListeners.forEach(callback => {
      try {
        callback(event.data)
      } catch (error) {
        console.error('Error in BroadcastChannel callback:', error)
      }
    })
  }

  /**
   * Close broadcast channel
   */
  close(): void {
    this.channel?.close()
    this.channel = null
  }
}

/**
 * Communication Preference Manager
 * Enhanced version consolidating CommunicationPreferenceService from api-integration-services.ts
 */
export class CommunicationPreferenceManager {
  httpClient: AdvancedHTTPClientManager
  preferences: Map<string, CommunicationPreference> = new Map()
  subscribers: Set<(preferences: CommunicationPreference[]) => void> = new Set()

  constructor(httpClient?: AdvancedHTTPClientManager) {
    this.httpClient = httpClient || new AdvancedHTTPClientManager('/api')
    this.loadPreferences()
  }

  /**
   * Get user communication preference
   * Original: getUserCommunicationPreference(e)
   */
  async getUserCommunicationPreference(params: {
    channelType: string
    policyTypesCsv: string
  }): Promise<NetworkResponse<any>> {
    const response = await this.httpClient.get('/user_communication_preference', {
      headers: {
        'X-Channel-Type': params.channelType,
        'X-Policy-Types': params.policyTypesCsv
      }
    })

    if (response.ok) {
      this.updateLocalPreferences(response.data)
    }

    return response
  }

  /**
   * Update user communication preference
   * Original: updateUserCommunicationPreference(e)
   */
  async updateUserCommunicationPreference(data: {
    channelType: string
    policyType: string
    policySetting: string
  }): Promise<NetworkResponse<any>> {
    const response = await this.httpClient.put('/user_communication_preference/single_policy', {
      channel_type: data.channelType,
      policy_type: data.policyType,
      policy_setting: data.policySetting
    })

    if (response.ok) {
      this.updateLocalPreference(data.channelType, data.policyType, data.policySetting)
    }

    return response
  }

  /**
   * Update user communication channel setting
   * Original: updateUserCommunicationChannelSetting(e)
   */
  async updateUserCommunicationChannelSetting(data: {
    channelType: string
    channelSetting: string
  }): Promise<NetworkResponse<any>> {
    const response = await this.httpClient.post('/user_communication_preference/channel_policy', {
      channel_type: data.channelType,
      channel_setting: data.channelSetting
    })

    if (response.ok) {
      this.updateChannelSetting(data.channelType, data.channelSetting)
    }

    return response
  }

  /**
   * Subscribe to preference changes
   */
  subscribe(callback: (preferences: CommunicationPreference[]) => void): void {
    this.subscribers.add(callback)
  }

  /**
   * Unsubscribe from preference changes
   */
  unsubscribe(callback: (preferences: CommunicationPreference[]) => void): void {
    this.subscribers.delete(callback)
  }

  /**
   * Get local preferences
   */
  getPreferences(): CommunicationPreference[] {
    return Array.from(this.preferences.values())
  }

  /**
   * Load preferences from storage
   */
  async loadPreferences(): Promise<void> {
    try {
      const stored = localStorage.getItem('communication_preferences')
      if (stored) {
        const preferences: CommunicationPreference[] = JSON.parse(stored)
        preferences.forEach(pref => {
          this.preferences.set(`${pref.channelType}:${pref.policyType}`, pref)
        })
      }
    } catch (error) {
      console.error('Error loading communication preferences:', error)
    }
  }

  /**
   * Save preferences to storage
   */
  savePreferences(): void {
    try {
      const preferences = Array.from(this.preferences.values())
      localStorage.setItem('communication_preferences', JSON.stringify(preferences))
      this.notifySubscribers(preferences)
    } catch (error) {
      console.error('Error saving communication preferences:', error)
    }
  }

  /**
   * Update local preferences from API response
   */
  updateLocalPreferences(data: any): void {
    // Transform API response to local preference format
    if (data && Array.isArray(data.preferences)) {
      data.preferences.forEach((pref: any) => {
        this.preferences.set(`${pref.channelType}:${pref.policyType}`, {
          channelType: pref.channelType,
          policyType: pref.policyType,
          policySetting: pref.policySetting,
          enabled: pref.enabled !== false,
          priority: pref.priority || 0
        })
      })
      this.savePreferences()
    }
  }

  /**
   * Update single preference
   */
  updateLocalPreference(channelType: string, policyType: string, policySetting: string): void {
    const key = `${channelType}:${policyType}`
    const existing = this.preferences.get(key)

    this.preferences.set(key, {
      channelType,
      policyType,
      policySetting,
      enabled: existing?.enabled !== false,
      priority: existing?.priority || 0
    })

    this.savePreferences()
  }

  /**
   * Update channel setting
   */
  updateChannelSetting(channelType: string, channelSetting: string): void {
    // Update all preferences for this channel type
    this.preferences.forEach((pref) => {
      if (pref.channelType === channelType) {
        pref.enabled = channelSetting === 'enabled'
      }
    })

    this.savePreferences()
  }

  /**
   * Notify subscribers of preference changes
   */
  notifySubscribers(preferences: CommunicationPreference[]): void {
    this.subscribers.forEach(callback => {
      try {
        callback(preferences)
      } catch (error) {
        console.error('Error in preference change callback:', error)
      }
    })
  }
}

/**
 * Network Status Monitor
 */
export class NetworkStatusMonitor {
  listeners: Set<(status: NetworkMetrics) => void> = new Set()
  metrics: NetworkMetrics
  monitoring: boolean = false

  constructor() {
    this.metrics = {
      requestCount: 0,
      responseTime: 0,
      errorRate: 0,
      cacheHitRate: 0,
      bytesTransferred: 0,
      connectionStatus: navigator.onLine ? 'online' : 'offline',
      lastUpdated: Date.now()
    }
  }

  /**
   * Start monitoring network status
   */
  startMonitoring(): void {
    if (this.monitoring) return

    this.monitoring = true

    // Monitor online/offline status
    window.addEventListener('online', this.handleOnline)
    window.addEventListener('offline', this.handleOffline)

    // Monitor connection quality
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      connection.addEventListener('change', this.handleConnectionChange)
    }

    // Periodic status update
    setInterval(() => {
      this.updateStatus()
    }, 30000) // Every 30 seconds
  }

  /**
   * Stop monitoring
   */
  stopMonitoring(): void {
    this.monitoring = false
    window.removeEventListener('online', this.handleOnline)
    window.removeEventListener('offline', this.handleOffline)

    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      connection.removeEventListener('change', this.handleConnectionChange)
    }
  }

  /**
   * Subscribe to status changes
   */
  subscribe(callback: (status: NetworkMetrics) => void): void {
    this.listeners.add(callback)
  }

  /**
   * Unsubscribe from status changes
   */
  unsubscribe(callback: (status: NetworkMetrics) => void): void {
    this.listeners.delete(callback)
  }

  /**
   * Get current status
   */
  getStatus(): NetworkMetrics {
    return { ...this.metrics }
  }

  /**
   * Handle online event
   */
  handleOnline = (): void => {
    this.metrics.connectionStatus = 'online'
    this.updateStatus()
  }

  /**
   * Handle offline event
   */
  handleOffline = (): void => {
    this.metrics.connectionStatus = 'offline'
    this.updateStatus()
  }

  /**
   * Handle connection change
   */
  handleConnectionChange = (): void => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection
      if (connection.downlink < 1) {
        this.metrics.connectionStatus = 'slow'
      } else {
        this.metrics.connectionStatus = 'online'
      }
    }
    this.updateStatus()
  }

  /**
   * Update status and notify listeners
   */
  updateStatus(): void {
    this.metrics.lastUpdated = Date.now()
    this.listeners.forEach(callback => {
      try {
        callback(this.metrics)
      } catch (error) {
        console.error('Error in network status callback:', error)
      }
    })
  }
}

/**
 * Factory Functions
 */

/**
 * Create advanced HTTP client manager
 */
export function createAdvancedHTTPClientManager(baseURL?: string, defaultHeaders?: Record<string, string>): AdvancedHTTPClientManager {
  return new AdvancedHTTPClientManager(baseURL, defaultHeaders)
}

/**
 * Create WebSocket manager
 */
export function createWebSocketManager(config: WebSocketConfig): WebSocketManager {
  return new WebSocketManager(config)
}

/**
 * Create event stream manager
 */
export function createEventStreamManager(config: EventStreamConfig): EventStreamManager {
  return new EventStreamManager(config)
}

/**
 * Create push notification manager
 */
export function createPushNotificationManager(config: PushNotificationConfig): PushNotificationManager {
  return new PushNotificationManager(config)
}

/**
 * Create broadcast channel manager
 */
export function createBroadcastChannelManager(config: BroadcastConfig): BroadcastChannelManager {
  return new BroadcastChannelManager(config)
}

/**
 * Create communication preference manager
 */
export function createCommunicationPreferenceManager(httpClient?: AdvancedHTTPClientManager): CommunicationPreferenceManager {
  return new CommunicationPreferenceManager(httpClient)
}

/**
 * Create network status monitor
 */
export function createNetworkStatusMonitor(): NetworkStatusMonitor {
  return new NetworkStatusMonitor()
}

/**
 * Convenience Exports (sorted alphabetically)
 */
export {
  BroadcastChannelManager as Broadcast,
  CommunicationPreferenceManager as CommPreference,
  EventStreamManager as EventStream,
  AdvancedHTTPClientManager as HTTPClient,
  NetworkStatusMonitor as NetworkStatus,
  PushNotificationManager as PushNotification,
  WebSocketManager as WebSocket
}

/**
 * Default Export - Comprehensive Network Communication System
 */
export default {
  AdvancedHTTPClientManager,
  WebSocketManager,
  EventStreamManager,
  PushNotificationManager,
  BroadcastChannelManager,
  CommunicationPreferenceManager,
  NetworkStatusMonitor,
  createAdvancedHTTPClientManager,
  createWebSocketManager,
  createEventStreamManager,
  createPushNotificationManager,
  createBroadcastChannelManager,
  createCommunicationPreferenceManager,
  createNetworkStatusMonitor
}
