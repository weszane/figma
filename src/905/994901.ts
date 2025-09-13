import { permissionScopeHandler } from '../905/189185'
import { VisualBellActions } from '../905/302958'
import { getI18nString } from '../905/303541'
import { createOptimistThunk } from '../905/350402'
import { getFeatureFlags } from '../905/601108'
import { K } from '../905/694400'
import { linkMetadataHandlerInstance } from '../905/695476'
import { getSelectedFile } from '../905/766303'
import { trackFileEvent } from '../figma_app/314264'
import { LinkMetadataEvent, parseDomain } from '../figma_app/671547'
import { Fullscreen } from '../figma_app/763686'

/**
 * Represents the result of a link preview or embed operation.
 */
export type LinkPreviewResult
  = | {
    status: 'success'
    nodeID: string
    type: 'preview' | 'embed'
  }
  | {
    status: 'error'
    error: string
  }

/**
 * Handles the finalization of a link preview or embed in the canvas.
 * @param text - The text to process.
 * @param url - The URL to process.
 * @param isTextIframe - Whether the text is an iframe.
 * @param entrypoint - The entrypoint for tracking.
 * @param state - The current application state.
 * @returns The result of the operation.
 * @see $$h1
 */
export async function finalizeLinkPreviewHandler(
  text: string,
  url: string,
  isTextIframe: boolean,
  entrypoint: string,
  state: any,
): Promise<LinkPreviewResult> {
  let metadata: any
  let loadingEmbedNodeId: string | undefined

  /**
   * Handles errors during link preview finalization.
   * @param errorMessage - The error message.
   * @param nodeId - The node ID (optional).
   * @returns The error result.
   * @see g
   */
  function handleFinalizeLinkPreviewFailure(errorMessage: string, nodeId?: string): LinkPreviewResult {
    return permissionScopeHandler.system('finalize-link-preview-failure', () => {
      if (!isTextIframe && nodeId) {
        return {
          status: 'success',
          nodeID: Fullscreen.finalizeLinkPreview(nodeId, { url }),
          type: 'preview',
        }
      }
      else {
        if (nodeId)
          Fullscreen.removeLoadingEmbed(nodeId)
        console.error(errorMessage)
        return {
          status: 'error',
          error: errorMessage,
        }
      }
    })
  }

  if (!navigator.onLine) {
    return handleFinalizeLinkPreviewFailure('Could not paste an embed because the browser was offline')
  }

  const fileKey = getSelectedFile(state)?.key ?? ''
  const domain = parseDomain(url)

  try {
    loadingEmbedNodeId = Fullscreen.insertLoadingEmbedInCanvas(encodeURIComponent(url), encodeURIComponent(text))
    trackFileEvent(LinkMetadataEvent.ATTEMPT, fileKey, state, {
      entrypoint,
      domain,
      userId: state.user?.id,
    })

    const featureFlags = getFeatureFlags()
    const metadataResponse = await linkMetadataHandlerInstance.getLinkMetadata({
      text: isTextIframe ? text : url,
      useEmbedsAllowList: (featureFlags.figjam_embeds_allowlist || false).toString(),
      useLinkPreviewsV2: (featureFlags.link_previews_v2 || false).toString(),
    })
    metadata = metadataResponse.data.meta
  }
  catch {
    return handleFinalizeLinkPreviewFailure('Failed to get metadata for the provided text', loadingEmbedNodeId)
  }

  if (!metadata) {
    return handleFinalizeLinkPreviewFailure('Failed to get metadata for the provided text', loadingEmbedNodeId)
  }

  return permissionScopeHandler.system('finalize-link-preview', () => {
    // Preload images if available
    if (metadata.thumbnailImage && metadata.thumbnailImageHash) {
      K(metadata.thumbnailImageHash, new Uint8Array(metadata.thumbnailImage.data))
    }
    if (metadata.favicon && metadata.faviconImageHash) {
      K(metadata.faviconImageHash, new Uint8Array(metadata.favicon.data))
    }

    trackFileEvent(LinkMetadataEvent.SUCCESS, fileKey, state, {
      entrypoint,
      domain,
      linkRenderType: metadata.type,
      userId: state.user?.id,
    })

    if (metadata.type === 'preview') {
      return {
        status: 'success',
        nodeID: Fullscreen.finalizeLinkPreview(loadingEmbedNodeId!, {
          url: metadata.url,
          title: metadata.title,
          description: metadata.description,
          thumbnailImageHash: metadata.thumbnailImageHash ?? undefined,
          thumbnailImageWidth: metadata.thumbnailImageWidth,
          thumbnailImageHeight: metadata.thumbnailImageHeight,
          faviconImageHash: metadata.faviconImageHash ?? undefined,
          provider: metadata.provider,
        }),
        type: 'preview',
      }
    }
    else if (metadata.type === 'embed') {
      return {
        status: 'success',
        nodeID: Fullscreen.finalizeEmbed(loadingEmbedNodeId!, {
          url: metadata.url,
          srcUrl: metadata.srcUrl,
          originalText: metadata.originalText,
          embedType: metadata.embedType,
          title: metadata.title,
          description: metadata.description,
          thumbnailImageHash: metadata.thumbnailImageHash ?? undefined,
          faviconImageHash: metadata.faviconImageHash ?? undefined,
          provider: metadata.provider,
          width: metadata.width,
          height: metadata.height,
          embedVersionId: getFeatureFlags().figjam_embeds_v1 ? metadata.embedVersionId : 'v0',
        }),
        type: 'embed',
      }
    }
    // Fallback error
    return handleFinalizeLinkPreviewFailure('Failed to get metadata for the provided text', loadingEmbedNodeId)
  })
}

/**
 * Optimist thunk for handling paste embed actions.
 * @see $$g0
 */
export const pasteEmbedThunk = createOptimistThunk(async (action, {
  clipboardText,
  url,
  isTextIframe,
  entrypoint,
}) => {
  const state = action.getState()
  const result = await finalizeLinkPreviewHandler(clipboardText, url, isTextIframe, entrypoint, state)

  if (result.status === 'error') {
    Fullscreen.tryPastingTextFromClipboardAsTextNode(clipboardText)
    const fileKey = getSelectedFile(state)?.key ?? ''
    trackFileEvent(LinkMetadataEvent.ERROR, fileKey, state, {
      entrypoint,
      domain: parseDomain(clipboardText),
      userId: state.user?.id,
    })
    action.dispatch(VisualBellActions.enqueue({
      type: 'embed_failed',
      message: getI18nString('whiteboard.embed_actions.embed_failed'),
      timeoutOverride: 5000,
      error: true,
    }))
  }
})

// Exported names refactored for clarity and traceability
export const M = pasteEmbedThunk // Original: $$g0
export const y = finalizeLinkPreviewHandler // Original: $$h1
