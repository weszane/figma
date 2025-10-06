// import { Fn } from '../../types/global'
import { logError } from '../905/714362'
import { generateUUIDv4 } from '../905/871474'

/**
 * Utility to post messages to the parent window.
 * @param message - The message object to send.
 * (original: o)
 */
function postToParent(message: any): void {
  window.parent.postMessage(message, '*')
}

/**
 * Notifies that Figma is ready.
 * (original: $$l22)
 */
export function figmaReady(): void {
  postToParent({ type: 'FIGMA_READY' })
}

/**
 * Sends CSS properties.
 * @param cssProperties - The CSS properties to send.
 * (original: $$d3)
 */
export function sendCssProperties(cssProperties: any): void {
  postToParent({
    type: 'CSS_PROPERTIES',
    data: { cssProperties },
  })
}

/**
 * Sends HTML skeleton.
 * @param htmlSkeleton - The HTML skeleton to send.
 * (original: $$c11)
 */
export function sendHtmlSkeleton(htmlSkeleton: any): void {
  postToParent({
    type: 'HTML_SKELETON',
    data: { htmlSkeleton },
  })
}

/**
 * Sends text data.
 * @param text - The text to send.
 * (original: $$u17)
 */
export function sendText(text: string): void {
  postToParent({
    type: 'TEXT',
    data: { text },
  })
}

/**
 * Sends layers data.
 * @param rootNodeId - The root node ID.
 * @param layers - The layers data.
 * (original: $$p2)
 */
export function sendLayers(rootNodeId: string, layers: any): void {
  postToParent({
    type: 'LAYERS',
    data: { rootNodeId, layers },
  })
}

/**
 * Sends asset data.
 * @param asset - The asset to send.
 * (original: $$_18)
 */
export function sendAsset(asset: any): void {
  postToParent({
    type: 'ASSET',
    data: { asset },
  })
}

/**
 * Notifies that a related link was created.
 * @param link - The link data.
 * (original: $$h9)
 */
export function relatedLinkCreated(link: any): void {
  postToParent({
    type: 'RELATED_LINK_CREATED',
    data: { link },
  })
}

/**
 * Notifies that a related link was removed.
 * @param link - The link data.
 * (original: $$m1)
 */
export function relatedLinkRemoved(link: any): void {
  postToParent({
    type: 'RELATED_LINK_REMOVED',
    data: { link },
  })
}

/**
 * Sends selected layer GUID.
 * @param guid - The GUID of the selected layer.
 * (original: $$g15)
 */
export function selectedLayerGuid(guid: string): void {
  postToParent({
    type: 'SELECTED_LAYER_GUID',
    data: { guid },
  })
}

/**
 * Sends selected page GUID.
 * @param guid - The GUID of the selected page.
 * (original: $$f21)
 */
export function selectedPageGuid(guid: string): void {
  postToParent({
    type: 'SELECTED_PAGE_GUID',
    data: { guid },
  })
}

/**
 * Configures autocomplete providers.
 * @param providers - The autocomplete providers.
 * (original: $$E12)
 */
export function configureAutocomplete(providers: any): void {
  postToParent({
    type: 'CONFIGURE_AUTOCOMPLETE',
    data: { providers },
  })
}

/**
 * Sends generated code sections.
 * @param sections - The code sections.
 * (original: $$y13)
 */
export function sendGeneratedCode(sections: any): void {
  postToParent({
    type: 'GENERATED_CODE',
    data: { sections },
  })
}

/**
 * Opens a related link.
 * @param href - The link URL.
 * (original: $$b16)
 */
export function openRelatedLink(href: string): void {
  postToParent({
    type: 'OPEN_RELATED_LINK',
    data: { href },
  })
}

/**
 * Requests to create a file link.
 * (original: $$T19)
 */
export function createFileLink(): void {
  postToParent({ type: 'CREATE_FILE_LINK' })
}

/**
 * Opens a URL in the browser.
 * @param href - The URL to open.
 * (original: $$I8)
 */
export function openInBrowser(href: string): void {
  postToParent({
    type: 'OPEN_IN_BROWSER',
    data: { href },
  })
}

/**
 * Sends file name.
 * @param name - The file name.
 * (original: $$S4)
 */
export function sendFileName(name: string): void {
  postToParent({
    type: 'FILE_NAME',
    data: { name },
  })
}

/**
 * Opens autocomplete line settings.
 * (original: $$v5)
 */
export function openAutocompleteLineSettings(): void {
  postToParent({ type: 'OPEN_AUTOCOMPLETE_LINE_SETTINGS' })
}

/**
 * Opens autocomplete block settings.
 * (original: $$A14)
 */
export function openAutocompleteBlockSettings(): void {
  postToParent({ type: 'OPEN_AUTOCOMPLETE_BLOCK_SETTINGS' })
}

/**
 * Sends thumbnail data.
 * @param nodeId - The node ID.
 * @param thumbnailDataUri - The thumbnail data URI.
 * @param thumbnailSize - The size of the thumbnail.
 * (original: $$x6)
 */
export function sendThumbnail(nodeId: string, thumbnailDataUri: string, thumbnailSize: number): void {
  postToParent({
    type: 'THUMBNAIL',
    data: { nodeId, thumbnailDataUri, thumbnailSize },
  })
}

/**
 * Notifies that the page is loaded.
 * (original: $$N20)
 */
export function pageLoaded(): void {
  postToParent({ type: 'PAGE_LOADED' })
}

/**
 * Notifies idle logout.
 * (original: $$C0)
 */
export function idleLogout(): void {
  postToParent({ type: 'IDLE_LOGOUT' })
}

/**
 * Sends mapping suggestion.
 * @param suggestion - The mapping suggestion object.
 * (original: $$w7)
 */
export function sendMappingSuggestion(suggestion: { requestId: string, mappings?: any, error?: any }): void {
  postToParent({
    type: 'MAPPING_SUGGESTION',
    data: {
      requestId: suggestion.requestId,
      mappings: suggestion.mappings || null,
      error: suggestion.error || null,
    },
  })
}

// Message manager for requests with responses (original: $$O23)
class MessageWithResponseManager {
  pendingMessagesById: Record<string, any> = {}

  /**
   * Sends a message and returns a promise for the response.
   * @param message - The message object.
   */
  sendMessage(message: any): Promise<any> {
    const requestId = generateUUIDv4()
    const msgWithId = { ...message, requestId }
    return new Promise((resolve, reject) => {
      this.pendingMessagesById[requestId] = { ...msgWithId, resolve, reject }
      postToParent(msgWithId)
    })
  }

  /**
   * Resolves a message response.
   * @param response - The response object.
   */
  resolveMessage(response: any): void {
    const pending = this.pendingMessagesById[response.requestId]
    if (!pending) {
      logError('MessageWithResponseManager.resolveMessage', 'No pending message found', {
        response,
        pendingMessagesById: this.pendingMessagesById,
      }, { reportAsSentryError: true })
      return
    }
    if (response.response) {
      pending.resolve(response.response)
      delete this.pendingMessagesById[response.requestId]
    }
  }
}
export const messageWithResponseManager = new MessageWithResponseManager()

// Message manager for callbacks (original: $$R24)
export class MessageWithCallbackManager {
  callbacksById: Record<string, Fn> = {}

  /**
   * Registers a callback and returns a function to cancel it.
   * @param message - The message object.
   * @param callback - The callback function.
   */
  registerCallback(message: any, callback: Fn): () => Promise<void> {
    const callbackId = generateUUIDv4()
    this.callbacksById[callbackId] = callback
    postToParent({ ...message, callbackId })
    return () => this.cancelCallback(callbackId)
  }

  /**
   * Resolves a callback message.
   * @param response - The response object.
   */
  resolveMessage(response: any): void {
    const cb = this.callbacksById[response.callbackId]
    if (!cb) {
      logError('MessageWithCallbackManager.resolveMessage', 'No callback found', {
        response,
        callbacksById: this.callbacksById,
      }, { reportAsSentryError: true })
      return
    }
    cb(response.callbackData)
  }

  /**
   * Cancels a registered callback.
   * @param callbackId - The callback ID.
   */
  async cancelCallback(callbackId: string): Promise<void> {
    await messageWithResponseManager.sendMessage({
      type: 'CANCEL_CALLBACK',
      request: { callbackId },
    })
    delete this.callbacksById[callbackId]
  }
}
export const messageWithCallbackManager = new MessageWithCallbackManager()

/**
 * Extension-related message utilities.
 * (original: $$i10)
 */
export const extensionMessages = {
  sendGenerateFigmadocMessage(userCode: string) {
    return messageWithResponseManager.sendMessage({
      type: 'GENERATE_FIGMADOC',
      request: { userCode },
    })
  },
  sendGetLocalFileExtensionManifest(id: string) {
    return messageWithResponseManager.sendMessage({
      type: 'GET_LOCAL_FILE_EXTENSION_MANIFEST',
      request: { id },
    })
  },
  sendCreateMultipleNewLocalFileExtensions(options: any, depth: number) {
    return messageWithResponseManager.sendMessage({
      type: 'CREATE_MULTIPLE_NEW_LOCAL_FILE_EXTENSIONS',
      request: { options, depth },
    })
  },
  sendGetLocalFileExtensionSourceMessage(id: string) {
    return messageWithResponseManager.sendMessage({
      type: 'GET_LOCAL_FILE_EXTENSION_SOURCE',
      request: { id },
    })
  },
  sendUpdateCachedContainsWidget(request: any) {
    return messageWithResponseManager.sendMessage({
      type: 'UPDATE_CACHED_CONTAINS_WIDGET',
      request,
    })
  },
  sendGetLocalManifestFileExtensionIdsToCachedMetadataMap() {
    return messageWithResponseManager.sendMessage({
      type: 'GET_LOCAL_MANIFEST_FILE_EXTENSION_IDS_TO_CACHED_METADATA_MAP',
      request: undefined,
    })
  },
  sendRegisterManifestChangeObserverMessage(callback: Fn) {
    return messageWithCallbackManager.registerCallback({
      type: 'REGISTER_MANIFEST_CHANGE_OBSERVER',
    }, callback)
  },
  sendRegisterCodeChangeObserverMessage(callback: Fn) {
    return messageWithCallbackManager.registerCallback({
      type: 'REGISTER_CODE_CHANGE_OBSERVER',
    }, callback)
  },
  sendRegisterUIChangeObserverMessage(callback: Fn) {
    return messageWithCallbackManager.registerCallback({
      type: 'REGISTER_UI_CHANGE_OBSERVER',
    }, callback)
  },
  sendOpenExtensionDirectoryMessage(id: string) {
    return postToParent({
      type: 'OPEN_EXTENSION_DIRECTORY',
      data: { id },
    })
  },
  sendOpenExtensionManifestMessage(id: string) {
    return postToParent({
      type: 'OPEN_EXTENSION_MANIFEST',
      data: { id },
    })
  },
  sendRemoveFileExtensionMessage(id: string) {
    return messageWithResponseManager.sendMessage({
      type: 'REMOVE_LOCAL_FILE_EXTENSION',
      request: { id },
    })
  },
  sendGetLocalManifestFileExtensionIdsToCachedContainsWidgetMapMessage() {
    return messageWithResponseManager.sendMessage({
      type: 'GET_LOCAL_MANIFEST_FILE_EXTENSION_IDS_TO_CACHED_CONTAINS_WIDGET_MAP',
      request: undefined,
    })
  },
  sendToggleDevToolsMessage() {
    return postToParent({ type: 'TOGGLE_DEV_TOOLS' })
  },
  sendGetAllLocalFileExtensionIdsMessage() {
    return messageWithResponseManager.sendMessage({
      type: 'GET_ALL_LOCAL_FILE_EXTENSION_IDS',
      request: undefined,
    })
  },
  sendWriteNewExtensionDirectoryToDiskMessage(request: any) {
    return messageWithResponseManager.sendMessage({
      type: 'WRITE_NEW_EXTENSION_DIRECTORY_TO_DISK',
      request,
    })
  },
}

// Exported names mapped to refactored implementations
export const $g = idleLogout
export const Au = relatedLinkRemoved
export const BG = sendLayers
export const Bt = sendCssProperties
export const GD = sendFileName
export const KQ = openAutocompleteLineSettings
export const LF = sendThumbnail
export const N$ = sendMappingSuggestion
export const Qn = openInBrowser
export const _L = relatedLinkCreated
export const bf = extensionMessages
export const fL = sendHtmlSkeleton
export const hQ = configureAutocomplete
export const le = sendGeneratedCode
export const lk = openAutocompleteBlockSettings
export const mX = selectedLayerGuid
export const mz = openRelatedLink
export const oF = sendText
export const pY = sendAsset
export const qE = createFileLink
export const rx = pageLoaded
export const sZ = selectedPageGuid
export const u_ = figmaReady
export const wS = messageWithResponseManager
export const w_ = messageWithCallbackManager
