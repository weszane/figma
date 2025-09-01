/**
 * Plugin Communication and Messaging Module
 * 
 * This module handles plugin-to-UI communication, message passing, iframe management,
 * and worker thread operations extracted from the main plugin file.
 * 
 * Key responsibilities:
 * - Plugin message passing and communication protocols
 * - Iframe creation and management for plugin UI
 * - PostMessage API handling and security validation
 * - Service worker registration and management
 * - Worker thread spawning and communication
 * - Network fetch operations through iframe proxies
 * - Plugin permission and origin validation
 * - Cross-frame messaging and event handling
 */

/**
 * Message Types and Interfaces
 */
export interface PluginMessage {
  type: string
  payload?: any
  pluginId?: string | string[]
  id?: string
}

export interface UIMessage {
  pluginMessage: any
  pluginId?: string | string[]
  origin?: string
}

export interface IframeMessage {
  data: any
  origin: string
  source?: Window
}

export interface WorkerMessage {
  type: string
  id?: string
  data?: any
  error?: any
}

export interface FetchRequest {
  url: string
  method?: string
  headers?: Record<string, string>
  body?: any
}

export interface FetchResponse {
  _blob?: Blob
  headersObject: Record<string, string>
  ok: boolean
  redirected: boolean
  status: number
  statusText: string
  type: string
  url: string
}

/**
 * Plugin Message Handler
 * Original: message handling logic from 472793.ts
 */
export class PluginMessageHandler {
  private eventHandlers: Map<string, Array<(...args: any[]) => void>> = new Map()
  private onMessageCallback?: (...args: any[]) => void
  private pluginID?: string
  private vm: any

  constructor(pluginID?: string, vm?: any) {
    this.pluginID = pluginID
    this.vm = vm
  }

  /**
   * Handle iframe message events
   * Original: iframeMessageHandler from 472793.ts
   */
  handleIframeMessage(event: MessageEvent): void {
    if (event.data === 'IN') {
      // Trigger plugins-run-last action
      this.triggerPluginAction('plugins-run-last', { source: 'keyboard' })
      return
    }

    if (!(event.data instanceof Object)) {
      console.warn('Message from UI to plugin ignored because it\'s not an object. The message must be an object with a "pluginMessage" property containing the actual message.')
      return
    }

    // Handle getPluginId requests
    if ('getPluginId' in event.data) {
      const origin = event.origin !== 'null' ? event.origin : '*'
      this.postMessageToIframe({
        pluginId: this.pluginID
      }, {
        origin,
        skipQueue: true
      })
      return
    }

    // Validate plugin ID
    const messageOrigin = `${event.origin}`
    if (!this.validatePluginMessage(event.data, messageOrigin)) {
      return
    }

    // Handle plugin messages
    if ('pluginMessage' in event.data) {
      this.processPluginMessage(event.data, messageOrigin)
    }

    // Handle plugin drop events
    if ('pluginDrop' in event.data) {
      this.processPluginDrop(event.data)
    }
  }

  /**
   * Validate plugin message
   * Original: plugin ID validation logic from 472793.ts
   */
  private validatePluginMessage(data: any, origin: string): boolean {
    // Handle origin normalization
    let normalizedOrigin = origin
    if (/^https?:\/\/%7b[a-f0-9.-]+%7d$/.test(normalizedOrigin)) {
      normalizedOrigin = 'null'
    }

    if (data.pluginId !== '*' && ('pluginId' in data || origin !== 'null')) {
      if (this.pluginID && (
        data.pluginId === this.pluginID || 
        (Array.isArray(data.pluginId) && data.pluginId.includes(this.pluginID))
      )) {
        return true
      } else if ('pluginId' in data) {
        console.warn('Provided pluginId does not match id of currently running plugin')
        return false
      } else {
        console.warn('Message from UI to plugin ignored due to missing pluginId in message. Please specify the pluginId that you wish to deliver the message to when using postMessage. You can also use \'*\' if it is safe to deliver the message to any plugin.\\n\\nExample: `parent.postMessage({pluginMessage: /*your message*/, pluginId: /*your plugin id*/}, \'*\')`.')
        return false
      }
    }

    return true
  }

  /**
   * Process plugin message
   * Original: pluginMessage handling from 472793.ts
   */
  private processPluginMessage(data: UIMessage, origin: string): void {
    const messageHandlers = this.eventHandlers.get('message')
    
    if ((!messageHandlers || !messageHandlers.length) && !this.onMessageCallback) {
      console.warn('Message from UI to plugin dropped due to no message handler installed')
      return
    }

    if (this.vm) {
      const wrappedMessage = this.vm.deepWrap(data.pluginMessage)
      const wrappedOrigin = this.vm.deepWrap({ origin })
      const args = [wrappedMessage, wrappedOrigin]

      this.fireEventSync('message', args)
      
      if (this.onMessageCallback) {
        this.vm.callFunction(this.onMessageCallback, this.vm.undefined, ...args)
      }
    }
  }

  /**
   * Process plugin drop events
   * Original: pluginDrop handling from 472793.ts
   */
  private processPluginDrop(data: any): void {
    // Validate drop data structure
    const dropData = data.pluginDrop
    
    if (!dropData.items && !dropData.files) {
      console.warn('Invalid drop data: must have items or files')
      return
    }

    if ('files' in dropData && dropData.files.some((file: any) => !(file instanceof File))) {
      console.warn('Invalid file objects in drop data')
      return
    }

    // Process drop event
    this.fireEventSync('drop', [this.vm?.deepWrap(dropData)])
  }

  /**
   * Fire synchronous event
   * Original: fireEventSync pattern
   */
  private fireEventSync(eventType: string, args: any[]): void {
    const handlers = this.eventHandlers.get(eventType)
    if (handlers) {
      handlers.forEach(handler => {
        try {
          handler(...args)
        } catch (error) {
          console.error(`Error in ${eventType} event handler:`, error)
        }
      })
    }
  }

  /**
   * Register event handler
   */
  addEventListener(eventType: string, handler: (...args: any[]) => void): void {
    if (!this.eventHandlers.has(eventType)) {
      this.eventHandlers.set(eventType, [])
    }
    this.eventHandlers.get(eventType)!.push(handler)
  }

  /**
   * Remove event handler
   */
  removeEventListener(eventType: string, handler: (...args: any[]) => void): void {
    const handlers = this.eventHandlers.get(eventType)
    if (handlers) {
      const index = handlers.indexOf(handler)
      if (index > -1) {
        handlers.splice(index, 1)
      }
    }
  }

  /**
   * Set message callback
   */
  setOnMessageCallback(callback: (...args: any[]) => void): void {
    this.onMessageCallback = callback
  }

  // Stub methods that would be implemented with actual dependencies
  private triggerPluginAction(action: string, data: any): void {
    // Would integrate with plugin action system
    console.warn('Plugin action triggered:', action, data)
  }

  private postMessageToIframe(message: any, options: any): void {
    // Would integrate with iframe messaging system
    console.warn('Post message to iframe:', message, options)
  }
}

/**
 * Iframe Manager
 * Original: iframe creation and management from 911344.ts, 197553.ts
 */
export class IframeManager {
  private outerIframeElement?: HTMLIFrameElement
  private innerIframeElement?: HTMLIFrameElement
  private networkIframeElement?: HTMLIFrameElement
  private toplevelWindowMessageChannel?: MessageChannel
  private messageEventListener?: (event: MessageEvent) => void
  private loaded: Promise<void>
  private pluginId?: string

  constructor(outerIframe?: HTMLIFrameElement, pluginId?: string) {
    this.outerIframeElement = outerIframe
    this.pluginId = pluginId
    this.loaded = Promise.resolve()
  }

  /**
   * Create inner iframe
   * Original: createInnerIframe from 197553.ts
   */
  createInnerIframe(
    htmlContent: string,
    messageHandler: (event: MessageEvent) => void,
    options: {
      name: string
      isWidget: boolean
      cameraAccess: boolean
      microphoneAccess: boolean
      displayCaptureAccess: boolean
      clipboardWriteAccess: boolean
      allowedDomains: string[]
      isLocal: boolean
      pluginId: string
    }
  ): HTMLIFrameElement {
    const iframe = document.createElement('iframe')
    
    // Set iframe properties
    iframe.name = options.name
    iframe.id = 'plugin-iframe'
    
    // Set permissions
    iframe.allow = this.getPermissions(options)
    
    // Set content
    iframe.src = this.getLoaderShimSrc(htmlContent, options.isLocal)
    
    // Apply styling
    this.setIframeStyle(iframe, true)
    
    // Set up message handling
    this.setupMessageHandling(iframe, messageHandler)
    
    this.innerIframeElement = iframe
    return iframe
  }

  /**
   * Get iframe permissions string
   * Original: getPermissions from 911344.ts
   */
  private getPermissions(options: {
    cameraAccess: boolean
    microphoneAccess: boolean
    displayCaptureAccess: boolean
    clipboardWriteAccess: boolean
  }): string {
    const permissions: string[] = []
    
    if (options.cameraAccess) permissions.push('camera')
    if (options.microphoneAccess) permissions.push('microphone')
    if (options.displayCaptureAccess) permissions.push('display-capture')
    if (options.clipboardWriteAccess) permissions.push('clipboard-write')
    
    return permissions.join('; ')
  }

  /**
   * Generate loader shim source
   * Original: getLoaderShimSrc from 911344.ts
   */
  private getLoaderShimSrc(htmlContent: string, isLocal: boolean): string {
    const securityPolicy = this.getSecurityPolicyViolationDevLogging(isLocal)
    
    const shimScript = `
      onmessage = (event) => {
        if (event.source === parent && event.origin === "${window.location.origin}") {
          document.write("<script>" + ${JSON.stringify(securityPolicy)} + "</" + "script>" + event.data)
        }
      }
    `
    
    return `data:text/html;base64,${btoa(`<script>${shimScript}</script>`)}`
  }

  /**
   * Get security policy violation logging
   * Original: getSecurityPolicyViolationDevLogging from 911344.ts
   */
  private getSecurityPolicyViolationDevLogging(isLocal: boolean): string {
    if (!isLocal) return ''
    
    return `
      document.addEventListener('securitypolicyviolation', (event) => {
        console.warn('Security Policy Violation:', {
          violatedDirective: event.violatedDirective,
          blockedURI: event.blockedURI,
          originalPolicy: event.originalPolicy
        })
      })
    `
  }

  /**
   * Set iframe styling
   * Original: setIframeStyle from 911344.ts
   */
  private setIframeStyle(iframe: HTMLIFrameElement, includeThemeColors: boolean): void {
    iframe.style.display = 'block'
    iframe.style.margin = '0'
    iframe.style.border = 'none'
    iframe.style.padding = '0'
    iframe.style.width = '100%'
    iframe.style.height = '100%'
    
    if (!includeThemeColors) {
      iframe.style.backgroundColor = 'white'
    }
  }

  /**
   * Setup message handling
   * Original: message channel setup from 911344.ts
   */
  private setupMessageHandling(iframe: HTMLIFrameElement, messageHandler: (event: MessageEvent) => void): void {
    this.messageEventListener = (event: MessageEvent) => {
      if (!event.source || event.source !== iframe.contentWindow) return
      
      const wrappedEvent = {
        data: event.data,
        origin: event.origin
      }
      
      this.toplevelWindowMessageChannel?.port1.postMessage(wrappedEvent)
    }

    this.toplevelWindowMessageChannel = new MessageChannel()
    this.toplevelWindowMessageChannel.port2.onmessage = (event) => {
      messageHandler(event.data)
    }

    if (this.outerIframeElement?.contentWindow) {
      this.outerIframeElement.contentWindow.addEventListener('message', this.messageEventListener)
    }
  }

  /**
   * Handle theme updates
   * Original: handleThemeUpdate from 911344.ts
   */
  async handleThemeUpdate(): Promise<void> {
    await this.loaded
    
    if (this.innerIframeElement?.contentWindow) {
      this.innerIframeElement.contentWindow.postMessage({
        figmaMessage: {
          type: 'THEME',
          payload: {
            name: document.body.getAttribute('data-preferred-theme'),
            variables: this.getThemeVariables()
          }
        }
      }, '*')
    }
  }

  /**
   * Post message to iframe
   * Original: postMessage from 911344.ts
   */
  async postMessage(message: any, options: { origin: string; skipQueue?: boolean }): Promise<void> {
    if (!options.skipQueue) {
      await this.loaded
    }
    
    if (this.innerIframeElement?.contentWindow) {
      this.innerIframeElement.contentWindow.postMessage(message, options.origin)
    }
  }

  /**
   * Destroy iframe and cleanup
   * Original: destroy from 911344.ts
   */
  destroy(): void {
    if (this.outerIframeElement?.contentWindow && this.messageEventListener) {
      this.outerIframeElement.contentWindow.removeEventListener('message', this.messageEventListener)
    }

    if (this.toplevelWindowMessageChannel) {
      this.toplevelWindowMessageChannel.port2.onmessage = null
      this.toplevelWindowMessageChannel.port1.close()
      this.toplevelWindowMessageChannel.port2.close()
      this.toplevelWindowMessageChannel = undefined
    }

    if (this.networkIframeElement && this.outerIframeElement?.contentDocument) {
      this.outerIframeElement.contentDocument.body.removeChild(this.networkIframeElement)
      this.networkIframeElement = undefined
    }

    this.innerIframeElement = undefined
    this.pluginId = undefined
  }

  // Private helper methods
  private getThemeVariables(): any {
    // Would return actual theme variables
    return {}
  }
}

/**
 * Service Worker Manager
 * Original: service worker management from 811033.ts
 */
export class ServiceWorkerManager {
  private messaging: any
  private vapidKey: string
  private onMessageUnsubscribe?: () => void

  constructor(messaging: any, vapidKey: string) {
    this.messaging = messaging
    this.vapidKey = vapidKey
  }

  /**
   * Register service worker
   * Original: registerServiceWorker from 811033.ts
   */
  async registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
    if (!navigator.serviceWorker) {
      console.warn('Service workers not supported')
      return null
    }

    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js')
      console.warn('Service worker registered successfully')
      return registration
    } catch (error) {
      console.error('Service worker registration failed:', error)
      return null
    }
  }

  /**
   * Get service worker registration
   * Original: getServiceWorkerRegistration from 811033.ts
   */
  async getServiceWorkerRegistration(): Promise<ServiceWorkerRegistration | null> {
    if (!navigator.serviceWorker) return null
    
    try {
      const registration = await navigator.serviceWorker.getRegistration()
      return registration || null
    } catch (error) {
      console.error('Failed to get service worker registration:', error)
      return null
    }
  }

  /**
   * Update service worker on permission change
   * Original: updateServiceWorkerOnPermissionChange from 811033.ts
   */
  async updateServiceWorkerOnPermissionChange(permission: PermissionStatus): Promise<boolean> {
    if (permission.state !== 'granted') {
      await this.unregisterServiceWorker()
      return true
    }

    const registration = await this.getServiceWorkerRegistration()
    if (registration) {
      this.sendFirebaseTokenToServer()
      return false
    } else {
      await this.registerServiceWorkerWhenPermissionGranted()
      return true
    }
  }

  /**
   * Unregister service worker
   * Original: unregisterServiceWorker from 811033.ts
   */
  async unregisterServiceWorker(): Promise<void> {
    const registration = await this.getServiceWorkerRegistration()
    if (registration) {
      await registration.unregister()
    }
  }

  /**
   * Register visibility change listener
   * Original: registerVisibilityChangeListener from 811033.ts
   */
  registerVisibilityChangeListener(): void {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        if (!this.onMessageUnsubscribe) {
          this.registerOnMessageListener()
        }
      } else {
        if (this.onMessageUnsubscribe) {
          this.onMessageUnsubscribe()
          this.onMessageUnsubscribe = undefined
        }
      }
    }, false)
  }

  /**
   * Register message listener
   * Original: registerOnMessageListener from 811033.ts
   */
  registerOnMessageListener(): void {
    // Would integrate with Firebase messaging
    console.warn('Message listener registered')
  }

  /**
   * Send Firebase token to server
   * Original: sendFirebaseTokenToServer from 811033.ts
   */
  private sendFirebaseTokenToServer(): void {
    // Would send token to server
    console.warn('Firebase token sent to server')
  }

  /**
   * Register service worker when permission granted
   * Original: registerServiceWorkerWhenPermissionGranted from 811033.ts
   */
  private async registerServiceWorkerWhenPermissionGranted(): Promise<void> {
    await this.registerServiceWorker()
    this.sendFirebaseTokenToServer()
  }
}

/**
 * Worker Thread Manager
 * Original: worker management from 242083.ts, 161470.ts, 177177.ts
 */
export class WorkerThreadManager {
  private worker?: Worker
  private messageHandlers: Map<string, (data: any) => void> = new Map()
  private workerState: 'uninitialized' | 'spawned' | 'initialized' | 'error' = 'uninitialized'

  /**
   * Spawn worker thread
   * Original: spawnWorker from 242083.ts
   */
  spawnWorker(workerURL: string): boolean {
    if (this.worker || this.workerState !== 'uninitialized') {
      console.warn('Attempting to spawn worker but it\'s already spawned')
      return false
    }

    try {
      this.worker = new Worker(workerURL)
      
      if (!this.worker) {
        console.error('Failed to spawn worker')
        this.processStateChange('error')
        return false
      }

      this.worker.addEventListener('error', this.onError.bind(this))
      this.worker.addEventListener('message', this.onMessage.bind(this))
      
      this.processStateChange('spawn')
      return true
    } catch (error) {
      console.error('Worker spawn error:', error)
      this.processStateChange('error')
      return false
    }
  }

  /**
   * Initialize worker
   * Original: worker initialization patterns
   */
  initializeWorker(config: any): void {
    if (!this.worker || this.workerState !== 'spawned') {
      console.warn('Trying to init worker that isn\'t spawned')
      return
    }

    this.postMessage({
      type: 'initialize',
      data: config
    })

    this.processStateChange('init')
  }

  /**
   * Post message to worker
   * Original: postMessage patterns from worker implementations
   */
  postMessage(message: WorkerMessage, transferable?: Transferable[]): void {
    if (!this.worker) {
      console.warn('No worker available for message')
      return
    }

    try {
      if (transferable) {
        this.worker.postMessage(message, transferable)
      } else {
        this.worker.postMessage(message)
      }
    } catch (error) {
      console.error('Worker postMessage failed:', error)
    }
  }

  /**
   * Handle worker messages
   * Original: onMessage from 242083.ts
   */
  private onMessage(event: MessageEvent): void {
    const { type, id } = event.data
    
    if (id) {
      this.processStateChange(id)
    }

    const handler = this.messageHandlers.get(type)
    if (handler) {
      handler(event.data)
    }
  }

  /**
   * Handle worker errors
   * Original: onError from 242083.ts
   */
  private onError(error: ErrorEvent): void {
    console.error('Worker error:', error)
    error.preventDefault()
    this.processStateChange('error')
  }

  /**
   * Process state machine events
   * Original: processStateMachineEvent from 242083.ts
   */
  private processStateChange(event: string): void {
    switch (event) {
      case 'spawn':
        this.workerState = 'spawned'
        break
      case 'init':
        this.workerState = 'initialized'
        break
      case 'error':
        this.workerState = 'error'
        break
    }
  }

  /**
   * Terminate worker
   * Original: terminate patterns from worker implementations
   */
  terminate(): void {
    if (this.worker) {
      this.worker.terminate()
      this.worker = undefined
      this.workerState = 'uninitialized'
    }
  }

  /**
   * Register message handler
   */
  onMessageType(type: string, handler: (data: any) => void): void {
    this.messageHandlers.set(type, handler)
  }

  /**
   * Get worker state
   */
  getState(): string {
    return this.workerState
  }
}

/**
 * Network Fetch Manager
 * Original: network fetch through iframe from 197553.ts
 */
export class NetworkFetchManager {
  private pluginID: string
  private nextMessageID = 0
  private messageCallbacks: Record<string, (response: any) => void> = {}
  private iframeManager: IframeManager

  constructor(pluginID: string, iframeManager: IframeManager) {
    this.pluginID = pluginID
    this.iframeManager = iframeManager
  }

  /**
   * Fetch through iframe proxy
   * Original: fetch from 197553.ts
   */
  async fetch(request: FetchRequest): Promise<FetchResponse> {
    return this.postMessageAndWait({
      data: request
    })
  }

  /**
   * Post message and wait for response
   * Original: postMessageAndWait from 197553.ts
   */
  private postMessageAndWait(message: any): Promise<any> {
    return new Promise((resolve, reject) => {
      message.id = this.nextMessageID++
      
      this.messageCallbacks[message.id] = (response: any) => {
        if (response.data) {
          resolve(response.data)
        } else if (response.error) {
          reject(response.error)
        }
      }

      this.iframeManager.postMessage(message, { origin: '*' })
    })
  }

  /**
   * Handle message response
   */
  handleMessageResponse(response: any): void {
    if (response.id in this.messageCallbacks) {
      this.messageCallbacks[response.id](response)
      delete this.messageCallbacks[response.id]
    }
  }

  /**
   * Generate fetch iframe content
   * Original: iframe HTML from 197553.ts
   */
  static getFetchIframeContent(): string {
    return `
      <body>
      <script>
      onmessage = async function(msg) {
        const {id, data} = msg.data
        try {
          const request = new Request(data.url, {...data})
          const response = await fetch(request)
          const blob = await response.blob()
          const responseData = {
            _blob: blob,
            headersObject: Object.fromEntries(response.headers.entries()),
            ok: response.ok,
            redirected: response.redirected,
            status: response.status,
            statusText: response.statusText,
            type: response.type,
            url: response.url,
          }
          window.parent.postMessage({id, data: responseData}, '*')
        } catch(error) {
          window.parent.postMessage({id, error}, '*')
        }
      }
      </script>
      </body>
    `
  }
}

/**
 * Factory Functions
 */

/**
 * Create plugin message handler
 */
export function createPluginMessageHandler(pluginID?: string, vm?: any): PluginMessageHandler {
  return new PluginMessageHandler(pluginID, vm)
}

/**
 * Create iframe manager
 */
export function createIframeManager(outerIframe?: HTMLIFrameElement, pluginId?: string): IframeManager {
  return new IframeManager(outerIframe, pluginId)
}

/**
 * Create service worker manager
 */
export function createServiceWorkerManager(messaging: any, vapidKey: string): ServiceWorkerManager {
  return new ServiceWorkerManager(messaging, vapidKey)
}

/**
 * Create worker thread manager
 */
export function createWorkerThreadManager(): WorkerThreadManager {
  return new WorkerThreadManager()
}

/**
 * Create network fetch manager
 */
export function createNetworkFetchManager(pluginID: string, iframeManager: IframeManager): NetworkFetchManager {
  return new NetworkFetchManager(pluginID, iframeManager)
}

/**
 * Convenience Exports
 */
export {
  IframeManager as Iframe,
  PluginMessageHandler as MessageHandler,
  NetworkFetchManager as NetworkFetch,
  ServiceWorkerManager as ServiceWorker,
  WorkerThreadManager as WorkerThread
}

/**
 * Default Export - Comprehensive Plugin Communication System
 */
export default {
  PluginMessageHandler,
  IframeManager,
  ServiceWorkerManager,
  WorkerThreadManager,
  NetworkFetchManager,
  createPluginMessageHandler,
  createIframeManager,
  createServiceWorkerManager,
  createWorkerThreadManager,
  createNetworkFetchManager
}
