import { Component } from 'react'
import { jsx } from 'react/jsx-runtime'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { extractThemeColors, generateFigmaStyleTag } from '../905/216429'
import { VisualBellActions } from '../905/302958'
import { trackEventAnalytics } from '../905/449184'
import { applyContentSecurityPolicy } from '../905/544659'
import { PluginInstanceManager } from '../905/696438'
import { isVsCodeEnvironment } from '../905/858738'
import { INTERNAL_RERUN_PLUGIN_IDENTIFIER, PARENT_WINDOW_REFERENCE, PLUGIN_RETRY_DELAY_MS, PLUGIN_TIMEOUT_MS } from '../905/968269'
import { buildStaticUrl } from '../figma_app/169182'
import { fullscreenValue } from '../figma_app/455680'
import { BrowserInfo } from '../figma_app/778880'
import { desktopAPIInstance } from '../figma_app/876459'
import { isInteractionPathCheck } from '../figma_app/897289'

const isDesktopEnvironment = !!desktopAPIInstance || isVsCodeEnvironment()
const iframeKeydownHandlerScript = `
  document.close();
  
  document.addEventListener('keydown', (event) => {
    const isMac = ${BrowserInfo.mac};
    const isDesktopEnv = ${JSON.stringify(isDesktopEnvironment)};
    
    // Handle plugin re-run shortcut: Alt + P (Mac: Cmd + Alt + P, Windows: Ctrl + Alt + P)
    if (event.keyCode === 80 /* P */ && !event.shiftKey && event.altKey && 
        ((isMac && !event.ctrlKey && event.metaKey) || (!isMac && event.ctrlKey && !event.metaKey))) {
      window.parent.postMessage('${INTERNAL_RERUN_PLUGIN_IDENTIFIER}', '*');
      event.stopPropagation();
      event.stopImmediatePropagation();
      return;
    }
    
    // Handle Select All, Undo, Redo, Cut, Copy, Paste in desktop environments
    if (isDesktopEnv) {
      const ctrlDown = isMac ? event.metaKey : event.ctrlKey;
      
      if (ctrlDown) {
        switch (event.keyCode) {
          case 65: // A - Select All
            document.execCommand('selectAll');
            break;
          case 90: // Z - Undo/Redo
            if (event.shiftKey) {
              document.execCommand('redo');
            } else {
              document.execCommand('undo');
            }
            break;
        }
        
        // Handle cut/copy/paste only in VS Code environment
        const isVsCodeEnv = ${JSON.stringify(isVsCodeEnvironment())};
        if (isVsCodeEnv) {
          switch (event.key.toLowerCase()) {
            case 'x':
              document.execCommand('cut');
              break;
            case 'c':
              document.execCommand('copy');
              break;
            case 'v':
              document.execCommand('paste');
              break;
          }
        }
      }
    }
  }, true);

  /**
   * Render CSS variables as a string
   * @param {Record<string, string>} vars - CSS variables object
   * @returns {string} Formatted CSS variables string
   */
  function renderCssVariables(vars) {
    return Object.entries(vars)
      .map(([key, value]) => \`\${key}: \${value}\`)
      .join('; ') + ';';
  }

  /**
   * Handle theme updates from parent window
   */
  window.addEventListener('message', function(event) {
    // Validate message source and structure
    if (event.source !== ${PARENT_WINDOW_REFERENCE} || 
        !event.data || 
        typeof event.data !== 'object' || 
        !('figmaMessage' in event.data)) {
      return;
    }
    
    event.stopImmediatePropagation();
    const figmaMessage = event.data.figmaMessage;

    // Process theme updates
    if (figmaMessage.type === 'THEME') {
      const figmaStyle = document.getElementById('figma-style');
      if (figmaStyle) {
        figmaStyle.textContent = ':root { ' + renderCssVariables(figmaMessage.payload.variables) + ' }';
      }

      // Remove existing figma theme classes
      const classesToRemove = Array.from(document.documentElement.classList)
        .filter(className => className.startsWith('figma-'));
      
      classesToRemove.forEach(className => {
        document.documentElement.classList.remove(className);
      });

      // Apply new theme class if provided
      if (figmaMessage.payload.name && figmaMessage.payload.name !== 'legacy') {
        document.documentElement.classList.add('figma-' + figmaMessage.payload.name);
      }
    }
  }, true);
`

/**
 * Generate Inter font face definitions
 * @returns {string} HTML style tag with font face definitions
 */
function generateInterFontFaces(): string {
  // Font weight to font name mappings
  const fontWeightToNormalFontName = new Map<number, string>([[100, 'Inter-Thin-BETA'], [200, 'Inter-ExtraLight-BETA'], [300, 'Inter-Light-BETA'], [400, 'Inter-Regular'], [500, 'Inter-Medium'], [600, 'Inter-SemiBold'], [700, 'Inter-Bold'], [800, 'Inter-ExtraBold'], [900, 'Inter-Black']])
  const fontWeightToItalicFontName = new Map<number, string>([[100, 'Inter-ThinItalic-BETA'], [200, 'Inter-ExtraLightItalic-BETA'], [300, 'Inter-LightItalic-BETA'], [400, 'Inter-Italic'], [500, 'Inter-MediumItalic'], [600, 'Inter-SemiBoldItalic'], [700, 'Inter-BoldItalic'], [800, 'Inter-ExtraBoldItalic'], [900, 'Inter-BlackItalic']])
  const fontVersion = '3.10a'
  const fontFaceDefinitions: string[] = []

  // Generate font face definitions for each weight
  for (const [fontWeight, normalFontName] of fontWeightToNormalFontName.entries()) {
    const italicFontName = fontWeightToItalicFontName.get(fontWeight)

    // Normal font face
    const normalFontFace = `@font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: ${fontWeight};
      font-display: swap;
      src: url('${buildStaticUrl(`webfont/1/${normalFontName}.woff2?v=${fontVersion}`)}') format('woff2'),
           url('${buildStaticUrl(`webfont/1/${normalFontName}.woff?v=${fontVersion}`)}') format('woff');
    }`

    // Italic font face
    const italicFontFace = `@font-face {
      font-family: 'Inter';
      font-style: italic;
      font-weight: ${fontWeight};
      font-display: swap;
      src: url('${buildStaticUrl(`webfont/1/${italicFontName}.woff2?v=${fontVersion}`)}') format('woff2'),
           url('${buildStaticUrl(`webfont/1/${italicFontName}.woff?v=${fontVersion}`)}') format('woff');
    }`
    fontFaceDefinitions.push(normalFontFace)
    fontFaceDefinitions.push(italicFontFace)
  }
  return `<style>${fontFaceDefinitions.join('\n')}</style>`
}
interface IframeOptions {
  includeThemeColors?: boolean
  allowedDomains?: string[]
  pluginId?: string
  isLocal?: boolean
  name?: string
  isWidget?: boolean
  cameraAccess?: boolean
  microphoneAccess?: boolean
  displayCaptureAccess?: boolean
  clipboardWriteAccess?: boolean
}
interface MessageData {
  data: any
  origin: string
}
interface ThemePayload {
  name: string | null
  variables: Record<string, string>
}

/**
 * Manages the creation and communication of nested iframes for plugin isolation
 * (Original class name: I)
 */
class PluginIframeManager {
  outerIframeElement: HTMLIFrameElement
  innerIframeElement: HTMLIFrameElement
  networkIframeElement: HTMLIFrameElement | null
  toplevelWindowMessageChannel: MessageChannel | null
  loaded: Promise<void>
  pluginId: string | null
  iframeMessageEventListener: (event: MessageEvent) => void
  setIframeStyle: (element: HTMLElement, includeThemeColors: boolean) => void
  constructor(outerIframe: HTMLIFrameElement, initialHtmlContent: string, messageHandler: (data: any) => void, options: IframeOptions) {
    this.outerIframeElement = outerIframe
    let resolveLoaded: () => void

    // Initialize styling function
    this.setIframeStyle = (element: HTMLElement, includeThemeColors: boolean): void => {
      element.style.display = 'block'
      element.style.margin = '0'
      element.style.border = 'none'
      element.style.padding = '0'
      element.style.width = '100%'
      element.style.height = '100%'
      if (!includeThemeColors) {
        element.style.backgroundColor = 'white'
      }
    }

    // Initialize message event listener
    this.iframeMessageEventListener = (event: MessageEvent): void => {
      if (!event.source || event.source !== this.innerIframeElement?.contentWindow) {
        return
      }
      const messageData: MessageData = {
        data: event.data,
        origin: event.origin,
      }
      this.toplevelWindowMessageChannel?.port1.postMessage(messageData)
    }
    const {
      includeThemeColors,
      allowedDomains,
    } = options

    // Create inner iframe
    this.innerIframeElement = document.createElement('iframe')
    this.loaded = new Promise((resolve) => {
      resolveLoaded = resolve
    })

    // Setup inner iframe onload handler
    this.innerIframeElement.onload = (): void => {
      if (!this.innerIframeElement) {
        return
      }
      const fontFacesHtml: string = generateInterFontFaces()
      this.innerIframeElement.contentWindow!.postMessage(fontFacesHtml + initialHtmlContent, '*')
      this.innerIframeElement.onload = (): void => {
        resolveLoaded()
      }
    }

    // Configure inner iframe properties
    this.innerIframeElement.name = 'Inner Plugin Iframe'
    this.innerIframeElement.id = 'plugin-iframe'
    const permissions: string = this.getPermissions(options)
    this.innerIframeElement.allow = permissions
    this.innerIframeElement.src = this.getLoaderShimSrc(!!includeThemeColors, options.isLocal)
    this.setIframeStyle(this.innerIframeElement, !!includeThemeColors)

    // Setup message channel
    this.toplevelWindowMessageChannel = new MessageChannel()
    this.toplevelWindowMessageChannel.port2.onmessage = (event: MessageEvent): void => {
      messageHandler(event.data)
    }

    // Add event listener to outer iframe
    outerIframe.contentWindow!.addEventListener('message', this.iframeMessageEventListener)

    // Create and configure network iframe
    this.networkIframeElement = document.createElement('iframe')
    this.networkIframeElement.name = 'Network Plugin Iframe'
    this.setIframeStyle(this.networkIframeElement, !!includeThemeColors)
    this.networkIframeElement.onload = (): void => {
      if (!this.networkIframeElement) {
        return
      }
      const body: HTMLElement = this.networkIframeElement.contentDocument!.body
      body.style.margin = '0'
      body.style.padding = '0'
      applyContentSecurityPolicy(this.networkIframeElement, allowedDomains)
      body.appendChild(this.innerIframeElement)
      this.networkIframeElement.contentWindow!.addEventListener('message', this.iframeMessageEventListener)
    }
    outerIframe.contentDocument!.body.appendChild(this.networkIframeElement)
    this.pluginId = options.pluginId || null
  }

  /**
   * Get iframe permissions based on plugin requirements
   * @param options - Plugin permission options
   * @returns Formatted permissions string
   */
  getPermissions(options: IframeOptions): string {
    const {
      name = '',
      isWidget = false,
      cameraAccess = false,
      microphoneAccess = false,
      displayCaptureAccess = false,
      clipboardWriteAccess = false,
    } = options

    // Request camera/microphone permissions if needed
    if (cameraAccess || microphoneAccess) {
      try {
        desktopAPIInstance?.requestCameraAndOrMicrophonePermissions({
          requester: isWidget ? `${name} widget` : `${name} plugin`,
          requestCamera: cameraAccess,
          requestMicrophone: microphoneAccess,
        })
      }
      catch (error) {
        if (desktopAPIInstance) {
          fullscreenValue.dispatch(VisualBellActions.enqueue({
            type: 'desktop-unsupported',
            error: true,
            message: 'Camera access is only available in the latest version of Figma Desktop',
          }))
        }
        return error as string
      }
    }

    // Build permissions string
    return [cameraAccess ? 'camera *' : 'camera \'none\'', microphoneAccess ? 'microphone *' : 'microphone \'none\'', displayCaptureAccess ? 'display-capture *' : 'display-capture \'none\'', clipboardWriteAccess ? 'clipboard-write *' : 'clipboard-write \'none\''].join('; ')
  }

  /**
   * Generate security policy violation logging script for development
   * @param isLocal - Whether running in local environment
   * @returns Script string or empty string
   */
  getSecurityPolicyViolationDevLogging(isLocal: boolean): string {
    if (!isLocal) {
      return ''
    }
    return `
      window.addEventListener('securitypolicyviolation', (event) => {
        try {
          const url = new URL(event.blockedURI);
          console.warn('Failed to load resource from', event.blockedURI, 'since it is not in the list of allowed domains. Please add', '"' + url.origin + '"', 'to the networkAccess > allowedDomains field in your manifest.json.');
        } catch {
          // This is to make sure we don't crash if the blockedURI is not a valid URL.
          // This should never happen since we're getting the url from the Web API, but better safe than sorry.
        }
      })`
  }

  /**
   * Generate loader shim source URL with embedded scripts
   * @param includeThemeColors - Whether to include theme colors
   * @param isLocal - Whether running in local environment
   * @returns Data URL for iframe source
   */
  getLoaderShimSrc(includeThemeColors: boolean, isLocal: boolean = false): string {
    let themeScript = ''
    if (includeThemeColors) {
      const theme = document.body.getAttribute('data-editor-theme') === 'whiteboard' ? 'light' : document.body.getAttribute('data-preferred-theme')
      if (theme && theme !== 'legacy') {
        themeScript = `
          window.addEventListener('load', (event) => {
            document.documentElement.classList.add('figma-${theme}');
          });
        `
      }
    }
    const htmlContent = `<script>
      onmessage = (event) => {
        if (event.source === ${PARENT_WINDOW_REFERENCE} && event.origin === "${window.location.origin}") {
          document.write("<script>" + ${JSON.stringify(iframeKeydownHandlerScript)} + ${JSON.stringify(themeScript)} + ${JSON.stringify(this.getSecurityPolicyViolationDevLogging(isLocal))} + "</" + "script>${generateFigmaStyleTag(includeThemeColors)}" + event.data);
        }
      }
    </script>`
    return `data:text/html;base64,${btoa(htmlContent)}`
  }

  /**
   * Handle theme updates by posting message to inner iframe
   */
  public async handleThemeUpdate(): Promise<void> {
    await this.loaded
    if (this.innerIframeElement?.contentWindow) {
      const themePayload: ThemePayload = {
        name: document.body.getAttribute('data-preferred-theme'),
        variables: extractThemeColors(true),
      }
      this.innerIframeElement.contentWindow.postMessage({
        figmaMessage: {
          type: 'THEME',
          payload: themePayload,
        },
      }, '*')
    }
    else {
      reportError(ServiceCategories.EXTENSIBILITY, new Error(`innerIframeElement.contentWindow is null for pluginId=${this.pluginId}`))
    }
  }

  /**
   * Clean up resources and event listeners
   */
  public destroy(): void {
    // Remove event listener from outer iframe
    this.outerIframeElement?.contentWindow?.removeEventListener('message', this.iframeMessageEventListener)

    // Close message channel ports
    if (this.toplevelWindowMessageChannel) {
      this.toplevelWindowMessageChannel.port2.onmessage = null
      this.toplevelWindowMessageChannel.port1.close()
      this.toplevelWindowMessageChannel.port2.close()
      this.toplevelWindowMessageChannel = null
    }

    // Remove iframes
    if (this.networkIframeElement) {
      this.outerIframeElement.contentDocument?.body.removeChild(this.networkIframeElement)
      this.networkIframeElement = null
      this.innerIframeElement = null as any
    }
    this.pluginId = null
  }

  /**
   * Post message to inner iframe
   * @param message - Message to send
   * @param options - Message options
   */
  public async postMessage(message: any, options: {
    skipQueue?: boolean
    origin: string
  }): Promise<void> {
    if (!options.skipQueue) {
      await this.loaded
    }
    if (this.innerIframeElement && this.innerIframeElement.contentWindow) {
      this.innerIframeElement.contentWindow.postMessage(message, options.origin)
    }
  }
}
interface PluginSandboxProps {
  iframeId: string
  fillParent?: boolean
  width?: number
  dragging?: boolean
}
interface PluginSandboxState {
  visible: boolean
  width: number
  height: number
  stopPointerEvents: boolean
}

/**
 * React component for managing plugin sandbox iframes
 * (Original class name: $$S0)
 */
export class PluginSandbox extends Component<PluginSandboxProps, PluginSandboxState> {
  outerIframeElement: HTMLIFrameElement | null = null
  outerIframeLoaded: boolean = false
  instanceLoadingResolve!: () => void
  instanceLoadingReject!: (reason?: any) => void
  setOuterIframeRef: (element: HTMLIFrameElement | null) => void
  constructor(props: PluginSandboxProps) {
    super(props)
    this.state = {
      visible: false,
      width: PLUGIN_TIMEOUT_MS,
      height: PLUGIN_RETRY_DELAY_MS,
      stopPointerEvents: false,
    }
    this.setOuterIframeRef = (element: HTMLIFrameElement | null): void => {
      if (element) {
        this.outerIframeElement = element
        this.outerIframeElement.onload = (): void => {
          let isLoaded = false
          try {
            isLoaded = !!this.outerIframeElement!.contentWindow?.__FIGMA_PLUGIN_SANDBOX_PAGE_LOADED
          }
          catch (error) {
            trackEventAnalytics('Plugin Iframe Property Read Error', {
              src: this.outerIframeElement!.src,
              errorMessage: (error as Error).toString(),
            })
          }
          if (isLoaded) {
            this.instanceLoadingResolve()
          }
          else if (!isInteractionPathCheck()) {
            this.instanceLoadingReject(new Error('Error loading Figma plugin iframe sandbox. Try refreshing the page.'))
          }
          this.outerIframeLoaded = true
        }
      }
    }
  }

  componentDidMount(): void {
    const {
      iframeId,
    } = this.props

    // Register instance
    PluginInstanceManager.instance[iframeId] = this
    const loadingEntry = PluginInstanceManager.instanceLoading[iframeId]
    if (loadingEntry) {
      this.instanceLoadingResolve = loadingEntry.resolve
      this.instanceLoadingReject = loadingEntry.reject
    }
    else {
      const promise = new Promise<void>((resolve, reject) => {
        this.instanceLoadingResolve = resolve
        this.instanceLoadingReject = reject
      })
      PluginInstanceManager.instanceLoading[iframeId] = {
        resolve: this.instanceLoadingResolve,
        reject: this.instanceLoadingReject,
        promise,
      }
    }
  }

  componentWillUnmount(): void {
    const {
      iframeId,
    } = this.props
    delete PluginInstanceManager.instance[iframeId]
    delete PluginInstanceManager.instanceLoading[iframeId]
  }

  /**
   * Update component state
   * @param newState - Partial state to update
   */
  public updateState(newState: PluginSandboxState): void {
    this.setState(newState)
  }

  /**
   * Create inner iframe for plugin content
   * @param initialHtmlContent - Initial HTML content
   * @param messageHandler - Message handler function
   * @param options - Iframe options
   * @returns PluginIframeManager instance
   */
  public createInnerIframe(initialHtmlContent: string, messageHandler: (data: any) => void, options: IframeOptions): PluginIframeManager {
    if (!this.outerIframeLoaded) {
      throw new Error('The Figma plugin sandbox shim iframe is not loaded, so we cannot create an iframe for the plugin UI.')
    }
    return new PluginIframeManager(this.outerIframeElement!, initialHtmlContent, messageHandler, options)
  }

  /**
   * Remove all child elements from outer iframe
   */
  public removeAllChildren(): void {
    const body = this.outerIframeElement?.contentDocument?.body
    while (body?.firstChild) {
      body.removeChild(body.firstChild)
    }
  }

  render() {
    return jsx('iframe', {
      id: this.props.iframeId,
      name: 'Shim Plugin Iframe',
      title: 'Shim Plugin Iframe',
      ref: this.setOuterIframeRef,
      style: {
        width: this.props.fillParent ? '100%' : this.props.width ?? this.state.width,
        height: this.props.fillParent ? '100%' : this.state.height,
        display: this.state.visible ? 'block' : 'none',
        pointerEvents: this.props.dragging || this.state.stopPointerEvents ? 'none' : 'auto',
        colorScheme: 'initial',
      },
      allow: '',
      src: '/plugin-sandbox',
    })
  }
}

// Export with original name for backward compatibility
export const j = PluginSandbox
