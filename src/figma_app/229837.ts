import { trackEventAnalytics } from '../905/449184'
import { getFeatureFlags } from '../905/601108'
import { allowedEntityTypes } from '../905/797765'
import { getInitialOptions } from '../figma_app/169182'
import { isInteractionPathCheck } from '../figma_app/897289'

// Original: $$_0
/**
 * Parses a realtime token string into its components.
 * @param token - The token string in format "channel:timestamp:generation:signature"
 * @returns An object with channel, timestamp, generation, and signature
 */
export function parseRealtimeToken(token: string) {
  const parts = token.split(':')
  return {
    channel: parts[0],
    timestamp: parseInt(parts[1]),
    generation: parseInt(parts[2]),
    signature: parts[3],
  }
}

// Original: $$m1
/**
 * Creates a realtime manager for handling WebSocket connections and subscriptions.
 * @returns An object with methods for managing realtime connections and v2 API
 */
export function createRealtimeManager() {
  // State variables with descriptive names
  let websocket: WebSocket | null = null
  let isConnected = false
  let pingInterval: NodeJS.Timeout | null = null
  let reconnectCallbacks: (() => void)[] = []
  let activeSubscriptions: Record<string, any> = {}
  let subscriptionIdCounter = -1

  // Additional state
  let onMessageCallback: ((data: any) => void) | null = null
  let onSubscribeCallback: ((channel: string) => void) | null = null
  let onUnsubscribeCallback: ((channel: string) => void) | null = null
  let isReconnecting = true
  let lastPongTime = Date.now()
  let reconnectAttempts = 0
  let reconnectTimeout: NodeJS.Timeout | null = null
  let isEnabled = true
  let disconnectTimeout: NodeJS.Timeout | null = null
  let visibilityChangeHandler: (() => void) | null = null
  let onlineHandler: (() => void) | null = null

  // Visibility change handler for background disconnect
  if (getFeatureFlags().realtime_disconnect_in_background) {
    visibilityChangeHandler = () => {
      if (document.visibilityState === 'hidden') {
        if (!disconnectTimeout) {
          disconnectTimeout = setTimeout(() => {
            disconnect()
            disconnectTimeout = null
          }, 120000) // 2 minutes
        }
      }
      else {
        if (disconnectTimeout) {
          clearTimeout(disconnectTimeout)
          disconnectTimeout = null
        }
        if (!websocket) {
          console.log('[Realtime] Attempting reconnect due to page visibility change.')
          attemptReconnect()
        }
      }
    }
    document.addEventListener('visibilitychange', visibilityChangeHandler)
  }

  /**
   * Disconnects the WebSocket and cleans up intervals.
   */
  function disconnect() {
    if (pingInterval) {
      clearInterval(pingInterval)
      pingInterval = null
    }
    if (websocket) {
      websocket.close()
      websocket = null
    }
    isReconnecting = true
  }

  /**
   * Attempts to reconnect to the WebSocket.
   */
  function attemptReconnect() {
    if (reconnectTimeout) {
      clearTimeout(reconnectTimeout)
      reconnectTimeout = null
    }
    if (onlineHandler) {
      window.removeEventListener('online', onlineHandler)
      onlineHandler = null
    }
    connect()
  }

  /**
   * Schedules a reconnect attempt with exponential backoff.
   */
  function scheduleReconnect() {
    disconnect()
    if (!isEnabled || reconnectTimeout)
      return
    const delay = 4 + (Math.min(128, 4 * 2 ** reconnectAttempts) - 4) * Math.random()
    console.log(`[Realtime] Disconnected. Will attempt reconnect in ${delay.toFixed(0)} seconds.`)
    reconnectTimeout = setTimeout(() => {
      console.log(`[Realtime] Attempting reconnect now after waiting ${delay.toFixed(0)} seconds.`)
      attemptReconnect()
    }, 1000 * delay)
    reconnectAttempts++
    onlineHandler = () => {
      console.log('[Realtime] Attempting reconnect due to connectivity change.')
      if (navigator.onLine) {
        attemptReconnect()
      }
    }
    window.addEventListener('online', onlineHandler)
  }

  /**
   * Sends a subscription token to the WebSocket.
   * @param token - The token object
   */
  function sendSubscriptionToken(token: any) {
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.send(`tok:${token.channel}:${token.timestamp}:${token.generation}:${token.signature}`)
    }
  }

  /**
   * Posts data to the user's personal channel.
   * @param data - The data to post
   */
  function postToMeChannel(data: any) {
    const userData = getInitialOptions().user_data
    if (!userData?.id) {
      console.warn('Can\'t post to me channel without user id available')
      trackEventAnalytics('Me Channel UserId Missing')
      return
    }
    const channel = `/me-${userData.id}`
    if (!(channel in activeSubscriptions)) {
      console.warn('We\'re not subscribed to the me channel')
      trackEventAnalytics('Me Channel Subscription Missing')
      if (userData?.realtime_token) {
        trackEventAnalytics('Me Channel Resubscribe')
        const token = parseRealtimeToken(userData.realtime_token)
        activeSubscriptions[channel] = token
        sendSubscriptionToken(token)
      }
      else {
        console.warn('We\'re unable to subscribe to the me channel; server will reject this message')
        trackEventAnalytics('Me Channel No Token')
        return
      }
    }
    if (!websocket || websocket.readyState !== WebSocket.OPEN) {
      if (!isInteractionPathCheck()) {
        console.warn('Sending to me without open websocket')
      }
      trackEventAnalytics('Me Channel Websocket Missing')
      return
    }
    const message = JSON.stringify([{ channel, data }])
    websocket.send(`pme:${message}`)
  }

  /**
   * Unsubscribes from a channel.
   * @param channel - The channel to unsubscribe from
   */
  function unsubscribeChannel(channel: string) {
    delete activeSubscriptions[channel]
    if (websocket && websocket.readyState === WebSocket.OPEN) {
      websocket.send(`uns:${channel}`)
    }
  }

  /**
   * Establishes the WebSocket connection.
   */
  function connect() {
    if (getFeatureFlags().realtime_disable_websocket_connection
      || (getFeatureFlags().realtime_disconnect_in_background && document.visibilityState === 'hidden' && isConnected)) {
      return
    }
    disconnect()
    let url = `${window.location.protocol === 'https:' ? 'wss' : 'ws'}://${window.location.host}/api/realtime_v2`
    const releaseTag = window.INITIAL_OPTIONS?.release_git_tag || ''
    const userId = window.INITIAL_OPTIONS?.user_data?.id || ''
    url += `?release_git_tag=${releaseTag}&user_id=${userId}`
    websocket = new WebSocket(url)

    websocket.onopen = () => {
      reconnectAttempts = 0
      console.log(`[Realtime] Connected to ${url}.`)
      if (pingInterval) {
        clearInterval(pingInterval)
      }
      pingInterval = setInterval(() => {
        websocket?.send('ping')
      }, 30000 + 5000 * Math.random() - 2500) // 30s ± 2.5s
      if (isConnected && Date.now() - lastPongTime > 60000) {
        reconnectCallbacks.forEach(callback => setTimeout(callback, 0))
      }
      isConnected = true
      for (const channel in activeSubscriptions) {
        sendSubscriptionToken(activeSubscriptions[channel])
      }
    }

    websocket.onmessage = (event) => {
      if (event.data === 'pong') {
        lastPongTime = Date.now()
        return
      }
      const prefix = event.data.substr(0, 4)
      if (prefix === 'tok:') {
        const token = parseRealtimeToken(event.data.substr(4))
        activeSubscriptions[token.channel] = token
        return
      }
      let message: any = {}
      if (prefix === 'ouc:') {
        const parts = event.data.substr(4).split(':')
        if (parts.length !== 3) {
          console.warn('Got ouc: command with wrong number of params')
        }
        for (let i = 0; i < parts.length; i++) {
          if (parts[i] === 'null')
            parts[i] = null
        }
        message = {
          type: 'verify_user_state',
          org_user_count: parts[0] ? parseInt(parts[0]) : null,
          org_user_updated: parts[1] ? new Date(parseInt(parts[1])).toISOString() : null,
          target_user_id: parts[2],
        }
      }
      else if (prefix === 'sub:' || prefix === 'uns:') {
        const parts = event.data.split(':')
        const status = parts[parts.length - 1]
        if (status === 'ok')
          return
        delete activeSubscriptions[parts[1]]
        if (status === 'expired') {
          if (!isReconnecting)
            return
          isReconnecting = false
          message = { type: 'token_expired' }
        }
        else {
          console.warn(event.data)
          return
        }
      }
      else {
        try {
          message = JSON.parse(event.data)
        }
        catch {
          console.warn(`Unexpected non-JSON realtime message: ${event.data}`)
          return
        }
        if (message.err != null) {
          console.warn('Encountered error message from realtime', message.err)
          scheduleReconnect()
        }
      }
      if (onMessageCallback) {
        onMessageCallback(message)
      }
    }

    websocket.onclose = () => {
      websocket = null
      if (pingInterval) {
        clearInterval(pingInterval)
        pingInterval = null
      }
      scheduleReconnect()
    }
  }

  // V2 API state
  const entityCallbacks: Record<string, Record<string, any>> = {}
  const persistentSubscriptions = new Set<string>()
  const subscriptionRefs = new Map<string, Set<string>>()

  /**
   * Gets the user's realtime token.
   * @returns The parsed token or null
   */
  function getUserToken() {
    const userData = getInitialOptions().user_data
    return userData?.realtime_token ? parseRealtimeToken(userData.realtime_token) : null
  }

  const defaultMethods = ['post', 'put', 'delete']

  /**
   * Normalizes subscription options.
   * @param options - Subscription options
   * @returns Normalized options
   */
  function normalizeSubscriptionOptions(options: any) {
    return typeof options === 'string'
      ? {
          type: options,
          token: getUserToken(),
          methods: defaultMethods,
        }
      : options
  }

  const manager = {
    connect,
    disconnect: () => {
      isEnabled = false
      disconnect()
      activeSubscriptions = {}
      if (visibilityChangeHandler) {
        document.removeEventListener('visibilitychange', visibilityChangeHandler)
      }
    },
    setCallback: (callback: (data: any) => void) => {
      onMessageCallback = (data) => {
        const method = data.method
        const entities = Object.keys(data).filter(key => allowedEntityTypes.has(key)).map(key => ({
          type: key,
          value: data[key],
        }))
        callback(data)
        entities.forEach((entity) => {
          const typeCallbacks = entityCallbacks[entity.type]
          if (typeCallbacks) {
            Object.values(typeCallbacks).filter(cb => cb.methods[method]).forEach((cb) => {
              cb.callback(entity.value, data.method)
            })
          }
        })
      }
    },
    setOnSubscribeCallback: (callback: (channel: string) => void) => {
      onSubscribeCallback = callback
    },
    setOnUnsubscribeCallback: (callback: (channel: string) => void) => {
      onUnsubscribeCallback = callback
    },
    subscribe: (token: any, persistent = true) => {
      const existing = activeSubscriptions[token.channel]
      activeSubscriptions[token.channel] = token
      if (!existing) {
        sendSubscriptionToken(token)
      }
      if (persistent) {
        persistentSubscriptions.add(token.channel)
      }
      if (onSubscribeCallback) {
        onSubscribeCallback(token.channel)
      }
    },
    unsubscribe: (channel: string, force = true) => {
      if (!force && persistentSubscriptions.has(channel))
        return
      if (force) {
        persistentSubscriptions.delete(channel)
      }
      const refs = subscriptionRefs.get(channel)
      if (!refs || refs.size === 0) {
        delete activeSubscriptions[channel]
        unsubscribeChannel(channel)
        if (onUnsubscribeCallback) {
          onUnsubscribeCallback(channel)
        }
      }
    },
    postToMeChannel,
  }

  const v2Api = {
    subscriptions: activeSubscriptions,
    subscribe(options: any, callback: (value: any, method: string) => void) {
      const normalized = normalizeSubscriptionOptions(options)
      const token = normalized.token || getUserToken()
      if (!token)
        return () => {}
      subscriptionIdCounter++
      const id = `${subscriptionIdCounter}:${performance.now()}`
      const typeCallbacks = entityCallbacks[normalized.type] || {}
      const methods = normalized.methods || defaultMethods
      const methodMap: Record<string, boolean> = {}
      methods.forEach(method => methodMap[method] = true)
      typeCallbacks[id] = { methods: methodMap, callback }
      entityCallbacks[normalized.type] = typeCallbacks
      const refs = subscriptionRefs.get(token.channel) || new Set()
      refs.add(id)
      subscriptionRefs.set(token.channel, refs)
      manager.subscribe(token, false)
      return () => {
        const { channel } = token
        const refs = subscriptionRefs.get(channel)
        if (refs) {
          refs.delete(id)
        }
        const typeCallbacks = entityCallbacks[normalized.type]
        if (typeCallbacks) {
          delete typeCallbacks[id]
          if (Object.keys(typeCallbacks).length === 0) {
            delete entityCallbacks[normalized.type]
          }
        }
        manager.unsubscribe(channel, false)
      }
    },
  }

  // Original reconnect logic
  const originalReconnect = () => {
    if (reconnectCallbacks.length > 0) {
      reconnectCallbacks.forEach((callback) => {
        setTimeout(() => {
          try {
            callback()
          }
          finally {
            // No-op
          }
        }, 60000 + 240000 * Math.random()) // 1-5 minutes
      })
    }
  }
  reconnectCallbacks.push(originalReconnect)

  return { ...manager, v2: v2Api }
}
export const EM = parseRealtimeToken
export const Xs = createRealtimeManager
