import { PluginInstanceManager } from '../905/696438'
import { PluginIframeMode } from '../905/968269'

let a = `
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
/**
 * FetchPlugin - A plugin class for handling fetch requests through iframes
 * Original class name: e
 */
export class FetchPlugin {
  pluginID: string
  nextMessageID: number
  outerIframe: any
  messageCallbacks: Record<number, (data: any) => void>
  innerIframe: any
  allowedDomains: string[]
  isLocal: boolean

  // Static property to store inner iframes by plugin ID
  static innerIframes: Record<string, any> = {}

  constructor(pluginID: string, options: { allowedDomains: string[], isLocal: boolean }) {
    this.pluginID = pluginID
    this.nextMessageID = 0
    this.outerIframe = null
    this.messageCallbacks = {}
    this.innerIframe = null
    this.allowedDomains = options.allowedDomains
    this.isLocal = options.isLocal

    // Bind message handler
    this.handleMessages = this.handleMessages.bind(this)

    // Initialize outer iframe
    this.outerIframe = PluginInstanceManager.getInstance(PluginIframeMode.FETCH)
  }

  /**
   * Handle incoming messages from the iframe
   * Original method name: handleMessages
   * @param event - The message event
   */
  handleMessages(event: MessageEvent): void {
    const data = event.data
    if (data.id in this.messageCallbacks) {
      this.messageCallbacks[data.id](data)
      delete this.messageCallbacks[data.id]
    }
  }

  /**
   * Create an inner iframe for the plugin
   * Original method name: createInnerIframe
   */
  createInnerIframe(): void {
    const iframeConfig = {
      name: `${this.pluginID} fetch`,
      isWidget: false,
      cameraAccess: false,
      microphoneAccess: false,
      displayCaptureAccess: false,
      clipboardWriteAccess: false,
      allowedDomains: this.allowedDomains,
      isLocal: this.isLocal,
      pluginId: this.pluginID,
    }

    const iframe = this.outerIframe.createInnerIframe(a, this.handleMessages, iframeConfig)
    this.innerIframe = FetchPlugin.innerIframes[this.pluginID] = iframe
  }

  /**
   * Get or create an inner iframe for the plugin
   * Original method name: getOrCreateInnerIframe
   */
  getOrCreateInnerIframe(): void {
    if (!this.innerIframe) {
      if (this.pluginID in FetchPlugin.innerIframes) {
        this.innerIframe = FetchPlugin.innerIframes[this.pluginID]
      }
      else {
        this.createInnerIframe()
      }
    }
  }

  /**
   * Post a message to the iframe and wait for a response
   * Original method name: postMessageAndWait
   * @param message - The message to send
   * @returns A promise that resolves with the response data
   */
  postMessageAndWait(message: any): Promise<any> {
    this.getOrCreateInnerIframe()

    return new Promise((resolve, reject) => {
      message.id = this.nextMessageID++

      this.messageCallbacks[message.id] = (response: any) => {
        if (response.data) {
          resolve(response.data)
        }
        else if (response.error) {
          reject(response.error)
        }
      }

      this.innerIframe?.postMessage(message, {
        origin: '*',
      })
    })
  }

  /**
   * Perform a fetch request through the iframe
   * Original method name: fetch
   * @param request - The fetch request options
   * @returns A promise that resolves with the fetch response
   */
  public async fetch(request: RequestInit & { url: string }): Promise<any> {
    return this.postMessageAndWait({
      data: request,
    })
  }

  /**
   * Destroy the iframe and clean up resources
   * Original method name: destroyIframe
   */
  public destroyIframe(): void {
    delete FetchPlugin.innerIframes[this.pluginID]

    if (this.innerIframe) {
      this.innerIframe.destroy()
      this.innerIframe = null
    }

    this.outerIframe = null
  }
}

export const $$o0 = FetchPlugin
export const V = FetchPlugin
