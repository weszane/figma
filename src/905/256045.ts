import type { JSX } from 'react'
import { H } from '../905/88863'
import { getI18nString } from '../905/303541'
import { debugState } from '../905/407919'
import { getFeatureFlags } from '../905/601108'
import { $9, _E, Ao, ci, dK, Ff, g$, H5, HG, ic, j3, jD, jU, k1, K4, k$, LI, RN, Rr, tW, vK, ZT } from '../905/676397'
import { L as _$$L } from '../905/694400'
import { getSelectedFile } from '../905/766303'
import { trackFileEvent } from '../figma_app/314264'
import { LinkMetadataEvent, LinkRenderType, parseDomain } from '../figma_app/671547'
import { De, Vm } from '../figma_app/728075'
import { Fullscreen } from '../figma_app/763686'
import { setupHyperlinkHandler } from '../figma_app/815170'

/**
 * Renders the default embed widget UI.
 * Original function name: $$g
 * @param {object} params - The parameters object.
 * @param {any} params.figma - The figma API object.
 * @returns {JSX.Element} The rendered embed widget.
 */
export function setupDefaultEmbedWidget({
  figma: figmaApi,
}: { figma: PluginAPI }): JSX.Element {
  const { widget } = figmaApi
  const { Frame, AutoLayout, SVG, Text } = t

  // Widget state hooks
  const widgetId = widget.useWidgetId()
  const [embedType] = widget.useSyncedState('embedType', 'standard')
  const [width] = widget.useSyncedState('width', LI)
  const [height] = widget.useSyncedState('height', ci)

  // Calculate scaled dimensions
  const scaledDimensions = (() => {
    if (width <= ic && height <= ZT) {
      return { width, height }
    }
    const scaleW = ic / width
    const scaleH = ZT / height
    return scaleW < scaleH
      ? { width: width * scaleW, height: height * scaleW }
      : { width: width * scaleH, height: height * scaleH }
  })()

  // Title and description
  const title = H(widget, 'title', { name: 'Inter Medium', size: 18, lineHeight: 22 }, scaledDimensions.width - 48, 2, false)
  const description = H(widget, 'description', { name: 'Inter', size: 13, lineHeight: 20 }, scaledDimensions.width - 48, 2, false)

  // URLs and provider
  const [url] = widget.useSyncedState('url', null)
  const decodedUrl = url != null ? decodeURIComponent(url) : null
  const [srcUrl] = widget.useSyncedState('srcUrl', null)
  const decodedSrcUrl = srcUrl != null ? decodeURIComponent(srcUrl) : null
  const host = decodedUrl ? new URL(decodedUrl).host : decodedSrcUrl ? new URL(decodedSrcUrl).host : 'Embed'
  const [provider] = widget.useSyncedState('provider', host)
  const decodedProvider = decodeURIComponent(provider)

  // Images
  const [thumbnailImageHash] = widget.useSyncedState('thumbnailImageHash', null)
  const [faviconImageHash] = widget.useSyncedState('faviconImageHash', null)
  const [resolvedThumbnailImageHash, setResolvedThumbnailImageHash] = widget.useSyncedState('resolvedThumbnailImageHash', null)
  const [resolvedFaviconImageHash, setResolvedFaviconImageHash] = widget.useSyncedState('resolvedFaviconImageHash', null)

  // Effects for resolving images
  widget.useEffect(() => {
    if (thumbnailImageHash && !resolvedThumbnailImageHash) {
      const imageData = _$$L(thumbnailImageHash)
      if (imageData)
        setResolvedThumbnailImageHash(figmaApi.createImage(imageData).hash)
    }
  })
  widget.useEffect(() => {
    if (faviconImageHash && !resolvedFaviconImageHash) {
      const imageData = _$$L(faviconImageHash)
      if (imageData)
        setResolvedFaviconImageHash(figmaApi.createImage(imageData).hash)
    }
  })
  widget.useEffect(() => {
    widget.waitForTask(new Promise<void>((resolve) => {
      if (getFeatureFlags().figjam_embed_auto_activate) {
        Fullscreen?.setActiveEmbed(widgetId)
      }
      resolve()
    }))
  })

  // Common text style
  const textStyle = {
    fontFamily: 'Inter',
    horizontalAlignText: 'left',
    verticalAlignText: 'bottom',
    fill: {
      type: 'solid',
      color: { r: 1, g: 1, b: 1, a: 0.8 },
      blendMode: 'normal',
    },
  }

  /**
   * Tracks file events for analytics.
   * Original function name: M
   * @param {LinkMetadataEvent} eventType
   */
  const trackEmbedFileEvent = (eventType: LinkMetadataEvent) => {
    const fileKey = getSelectedFile(debugState.getState())?.key ?? ''
    trackFileEvent(eventType, fileKey, debugState.getState(), {
      domain: decodedUrl != null ? parseDomain(decodedUrl) : decodedProvider,
      linkRenderType: LinkRenderType.EMBED,
      userId: debugState.getState().user?.id,
    })
  }

  // Provider icon rendering
  const renderProviderIcon = () => {
    if (embedType === 'figma') {
      if (decodedProvider === 'FigJam') {
        return widget.h(SVG, { name: 'favicon', width: 16, height: 16, src: H5 })
      }
      return widget.h(SVG, { name: 'favicon', width: 16, height: 16, src: jD })
    }
    if (resolvedFaviconImageHash) {
      return widget.h(Frame, {
        name: 'favicon',
        width: 16,
        height: 16,
        fill: { type: 'image', imageHash: resolvedFaviconImageHash, scaleMode: 'fill' },
        cornerRadius: 3,
      })
    }
    return widget.h(SVG, { src: HG, width: 16, height: 16 })
  }

  // Main render
  return widget.h(AutoLayout, {
    name: 'embed',
    direction: 'vertical',
    horizontalAlignItems: 'start',
    verticalAlignItems: 'center',
    width: 'hug-contents',
    height: 'hug-contents',
    padding: 8,
    fill: '#fff',
    cornerRadius: Ff,
    spacing: 4,
    effect: _E,
    stroke: {
      type: 'solid',
      color: { r: 0, g: 0, b: 0, a: 0.2 },
      blendMode: 'normal',
    },
  }, widget.h(AutoLayout, {
    name: 'header-container',
    direction: 'horizontal',
    horizontalAlignItems: 'start',
    verticalAlignItems: 'center',
    width: 'fill-parent',
    height: 'hug-contents',
    spacing: 'auto',
    padding: { left: 8, right: 0, bottom: 0, top: 0 },
  }, widget.h(AutoLayout, {
    name: 'provider-container',
    direction: 'horizontal',
    horizontalAlignItems: 'start',
    verticalAlignItems: 'center',
    spacing: 8,
  }, renderProviderIcon(), widget.h(Text, {
    ...textStyle,
    fontSize: 12,
    fontWeight: 500,
    fill: {
      type: 'solid',
      color: { r: 0, g: 0, b: 0, a: 0.8 },
      blendMode: 'normal',
    },
  }, decodedProvider), widget.h(AutoLayout, {
    name: 'tooltip-frame',
    width: 32,
    height: 32,
    horizontalAlignItems: 'center',
    verticalAlignItems: 'center',
  }, widget.h(SVG, {
    name: 'tooltip',
    width: 16,
    height: 16,
    src: tW,
  })))), widget.h(Frame, {
    name: 'thumbnail-container',
    width: Number(scaledDimensions.width),
    height: Number(scaledDimensions.height),
    fill: resolvedThumbnailImageHash
      ? { type: 'image', imageHash: resolvedThumbnailImageHash, scaleMode: 'fill' }
      : De,
    cornerRadius: K4,
  }, widget.h(AutoLayout, {
    name: 'text-container',
    direction: 'vertical',
    horizontalAlignItems: 'start',
    verticalAlignItems: 'end',
    width: Number(scaledDimensions.width),
    height: Number(scaledDimensions.height),
    fill: $9,
    padding: 16,
  }, title
  && widget.h(Text, {
    width: 'fill-parent',
    fontSize: 18,
    fontWeight: 500,
    letterSpacing: '-0.9%',
    lineHeight: 22,
    ...textStyle,
  }, title), description
  && widget.h(Text, {
    width: 'fill-parent',
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: '-0.25%',
    lineHeight: 20,
    ...textStyle,
  }, description), widget.h(AutoLayout, {
    name: 'button-container',
    horizontalAlignItems: 'center',
    verticalAlignItems: 'center',
    width: Number(scaledDimensions.width),
    height: Number(scaledDimensions.height),
  }, embedType === 'autoplayable_video' || embedType === 'autoplayable_audio'
    ? widget.h(SVG, {
        name: 'play-button',
        src: Rr,
        onClick: () => {
          trackEmbedFileEvent(LinkMetadataEvent.EMBED_CLICK)
          Fullscreen?.setActiveEmbed(widgetId)
        },
      })
    : widget.h(AutoLayout, {
        name: 'view-button',
        direction: 'horizontal',
        horizontalAlignItems: 'center',
        verticalAlignItems: 'center',
        width: 200,
        height: 38,
        cornerRadius: 6,
        fill: '#fff',
        onClick: () => {
          trackEmbedFileEvent(LinkMetadataEvent.EMBED_CLICK)
          Fullscreen?.setActiveEmbed(widgetId)
        },
      }, widget.h(Text, {
        fontSize: 14,
        fontWeight: 500,
        fontFamily: 'Inter',
        fill: '#000',
      }, getI18nString('whiteboard.embeds.view_button')))))))
}
/**
 * Embed widget property menu actions.
 * Original variable name: $$f0
 */
export enum embedWidgetMenuActions {

  OPEN = 'open',
  CONVERT_TO_TEXT = 'convert_to_text',

}

/**
 * Registers the main embed widget logic.
 * Original function name: $$_1
 * @param {object} params - The parameters object.
 * @param {any} params.figma - The figma API object.
 */
export function registerEmbedWidget({ figma }: { figma: PluginAPI }) {
  const { widget } = figma
  const { Frame, AutoLayout } = t

  function renderEmbedWidgetVersion(embedVersionId: string) {
    switch (embedVersionId) {
      case jU.EMBED_VERSION_ID_V0:
        return setupDefaultEmbedWidget({ figma })
      case jU.EMBED_VERSION_ID_V1:
        return renderEmbedWidgetV1({ figma })
      default:
        return setupDefaultEmbedWidget({ figma })
    }
  }

  function renderEmbedWidgetV1({ figma }: { figma: PluginAPI }) {
    const { widget: _widget } = figma
    const { Frame: _Frame, AutoLayout: _AutoLayout, SVG, Text } = t

    // Widget state hooks
    const widgetId = _widget.useWidgetId()
    const [embedType] = _widget.useSyncedState('embedType', 'standard')
    const [width] = _widget.useSyncedState('width', LI)
    const [height] = _widget.useSyncedState('height', ci)

    // Calculate scaled dimensions
    const scaled = (() => {
      if (width <= ic && height <= ZT) {
        return { width, height }
      }
      const scaleW = ic / width
      const scaleH = ZT / height
      return scaleW < scaleH
        ? { width: width * scaleW, height: height * scaleW }
        : { width: width * scaleH, height: height * scaleH }
    })()

    // Title and description
    const title = H(_widget, 'title', { name: 'Inter Medium', size: 16, lineHeight: 24 }, scaled.width - 96, 1, false)
    const description = H(_widget, 'description', { name: 'Inter', size: 13, lineHeight: 24 }, scaled.width - 96, 1, false)
    const hasTitle = !!title
    const hasDescription = !!description

    // URLs and provider
    const [url] = _widget.useSyncedState('url', null)
    const decodedUrl = url != null ? decodeURIComponent(url) : null
    const [srcUrl] = _widget.useSyncedState('srcUrl', null)
    const decodedSrcUrl = srcUrl != null ? decodeURIComponent(srcUrl) : null
    const host = decodedUrl ? new URL(decodedUrl).host : decodedSrcUrl ? new URL(decodedSrcUrl).host : 'Embed'
    const [provider] = _widget.useSyncedState('provider', host)
    const decodedProvider = decodeURIComponent(provider)

    // Images
    const [thumbnailImageHash] = _widget.useSyncedState('thumbnailImageHash', null)
    const [faviconImageHash] = _widget.useSyncedState('faviconImageHash', null)
    const [resolvedThumbnailImageHash, setResolvedThumbnailImageHash] = _widget.useSyncedState('resolvedThumbnailImageHash', null)
    const [resolvedFaviconImageHash, setResolvedFaviconImageHash] = _widget.useSyncedState('resolvedFaviconImageHash', null)

    // Source URL for fallback
    const srcUrlText = H(_widget, 'srcUrl', { name: 'Inter Medium', size: 16, lineHeight: 24 }, scaled.width - 96, 1, true, true)

    // Effects for resolving images
    _widget.useEffect(() => {
      if (thumbnailImageHash && !resolvedThumbnailImageHash) {
        const imageData = _$$L(thumbnailImageHash)
        if (imageData)
          setResolvedThumbnailImageHash(figma.createImage(imageData).hash)
      }
    })
    _widget.useEffect(() => {
      if (faviconImageHash && !resolvedFaviconImageHash) {
        const imageData = _$$L(faviconImageHash)
        if (imageData)
          setResolvedFaviconImageHash(figma.createImage(imageData).hash)
      }
    })
    _widget.useEffect(() => {
      _widget.waitForTask(new Promise<void>((resolve) => {
        if (getFeatureFlags().figjam_embed_auto_activate) {
          Fullscreen?.setActiveEmbed(widgetId)
        }
        resolve()
      }))
    })

    // Common text style
    const textStyle = {
      fontFamily: 'Inter',
      horizontalAlignText: 'left',
      verticalAlignText: 'bottom',
      fill: {
        type: 'solid',
        color: { r: 1, g: 1, b: 1, a: 0.8 },
        blendMode: 'normal',
      },
    }

    /**
     * Renders the text container for title/description.
     * Original function name: V
     */
    function renderTextContainer(...children: JSX.Element[]) {
      return figma.widget.h(_AutoLayout, {
        name: 'text-container',
        direction: 'vertical',
        horizontalAlignItems: 'start',
        verticalAlignItems: 'end',
        width: Number(scaled.width - 84),
      }, ...children)
    }

    /**
     * Renders the title text.
     * Original function name: G
     */
    function renderTitleText(text?: string) {
      if (!text)
        return null
      return figma.widget.h(Text, {
        width: 'fill-parent',
        fontSize: 16,
        fontWeight: 500,
        letterSpacing: '-0.9%',
        lineHeight: 24,
        ...textStyle,
        fill: {
          type: 'solid',
          color: { r: 0, g: 0, b: 0, a: 0.8 },
          blendMode: 'normal',
        },
      }, text)
    }

    /**
     * Tracks file events for analytics.
     * Original function name: z
     */
    function trackEmbedFileEvent(eventType: LinkMetadataEvent) {
      const fileKey = getSelectedFile(debugState.getState())?.key ?? ''
      trackFileEvent(eventType, fileKey, debugState.getState(), {
        domain: decodedUrl != null ? parseDomain(decodedUrl) : decodedProvider,
        linkRenderType: LinkRenderType.EMBED,
        userId: debugState.getState().user?.id,
      })
    }

    /**
     * Renders the provider icon.
     */
    function renderProviderIcon(embedType: string, provider: string, faviconHash: string | null) {
      if (embedType === 'figma') {
        switch (provider) {
          case 'FigJam':
            return figma.widget.h(SVG, { name: 'favicon', width: 16, height: 16, src: H5 })
          case 'Slides':
            return figma.widget.h(SVG, { name: 'favicon', width: 16, height: 16, src: dK })
          case 'Sites':
            return figma.widget.h(SVG, { name: 'favicon', width: 16, height: 16, src: j3 })
          case 'Buzz':
            return figma.widget.h(SVG, { name: 'favicon', width: 16, height: 16, src: k$ })
          default:
            return figma.widget.h(SVG, { name: 'favicon', width: 16, height: 16, src: jD })
        }
      }
      if (faviconHash) {
        return figma.widget.h(_Frame, {
          name: 'favicon',
          width: 16,
          height: 16,
          fill: { type: 'image', imageHash: faviconHash, scaleMode: 'fill' },
          cornerRadius: 3,
        })
      }
      return figma.widget.h(SVG, { src: HG, width: 16, height: 16 })
    }

    // Main render
    return figma.widget.h(_AutoLayout, {
      name: 'embed',
      direction: 'vertical',
      horizontalAlignItems: 'start',
      verticalAlignItems: 'center',
      width: 'hug-contents',
      height: 'hug-contents',
      padding: 8,
      fill: Vm,
      cornerRadius: Ff,
      spacing: 4,
      effect: _E,
      stroke: {
        type: 'solid',
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        blendMode: 'normal',
      },
    }, figma.widget.h(_Frame, {
      name: 'thumbnail-container',
      width: Number(scaled.width),
      height: Number(scaled.height),
      fill: resolvedThumbnailImageHash
        ? { type: 'image', imageHash: resolvedThumbnailImageHash, scaleMode: 'fill' }
        : De,
      cornerRadius: K4,
      stroke: {
        type: 'solid',
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        blendMode: 'normal',
        width: 1,
      },
    }, figma.widget.h(_AutoLayout, {
      name: 'thumbnail-overlay',
      direction: 'vertical',
      horizontalAlignItems: 'start',
      verticalAlignItems: 'end',
      width: Number(scaled.width),
      height: Number(scaled.height),
      fill: $9,
      padding: 16,
    }), figma.widget.h(_AutoLayout, {
      name: 'button-container',
      horizontalAlignItems: 'center',
      verticalAlignItems: 'center',
      width: Number(scaled.width),
      height: Number(scaled.height),
    }, embedType === 'autoplayable_video' || embedType === 'autoplayable_audio'
      ? figma.widget.h(SVG, {
          name: 'play-button',
          src: Rr,
          onClick: () => {
            trackEmbedFileEvent(LinkMetadataEvent.EMBED_CLICK)
            Fullscreen?.setActiveEmbed(widgetId)
          },
        })
      : figma.widget.h(_AutoLayout, {
          name: 'view-button',
          direction: 'horizontal',
          horizontalAlignItems: 'center',
          verticalAlignItems: 'center',
          width: 200,
          height: 38,
          cornerRadius: 6,
          fill: Vm,
          onClick: () => {
            const link = decodedUrl || decodedSrcUrl || null
            if (embedType === 'figma' && link) {
              debugState.dispatch(setupHyperlinkHandler({ rawInput: link }))
            }
            trackEmbedFileEvent(LinkMetadataEvent.EMBED_CLICK)
            Fullscreen?.setActiveEmbed(widgetId)
          },
        }, figma.widget.h(Text, {
          fontSize: 14,
          fontWeight: 500,
          fontFamily: 'Inter',
          fill: '#000',
        }, getI18nString('whiteboard.embeds.view_button'))))), figma.widget.h(_AutoLayout, {
      name: 'footer-container',
      direction: 'horizontal',
      horizontalAlignItems: 'start',
      verticalAlignItems: 'center',
      width: 'fill-parent',
      height: 105,
      spacing: 'auto',
      padding: { left: 8, right: 0, bottom: 0, top: 0 },
    }, figma.widget.h(_AutoLayout, {
      name: 'provider-container',
      direction: 'vertical',
      horizontalAlignItems: 'start',
      verticalAlignItems: 'center',
      spacing: 8,
      padding: { top: 8, left: 8, right: 8, bottom: 8 },
    }, (hasTitle || hasDescription)
      ? renderTextContainer(
          renderTitleText(title),
          description && figma.widget.h(Text, {
            width: 'fill-parent',
            fontSize: 13,
            fontWeight: 400,
            letterSpacing: '-0.25%',
            lineHeight: 24,
            ...textStyle,
            fill: {
              type: 'solid',
              color: { r: 0, g: 0, b: 0, a: 0.5 },
              blendMode: 'normal',
            },
          }, description),
        )
      : renderTextContainer(renderTitleText(srcUrlText)), figma.widget.h(_AutoLayout, {
      name: 'provider-container',
      direction: 'horizontal',
      horizontalAlignItems: 'start',
      verticalAlignItems: 'center',
      spacing: 8,
    }, renderProviderIcon(embedType, decodedProvider, resolvedFaviconImageHash), figma.widget.h(Text, {
      ...textStyle,
      fontSize: 13,
      fontWeight: 400,
      lineHeight: 13,
      fill: {
        type: 'solid',
        color: { r: 0, g: 0, b: 0, a: 0.5 },
        blendMode: 'normal',
      },
    }, decodedProvider)), figma.widget.h(_AutoLayout, {
      name: 'tooltip-frame',
      width: 50,
      height: 32,
      horizontalAlignItems: 'center',
      verticalAlignItems: 'center',
      padding: { right: 20 },
    }, figma.widget.h(SVG, {
      name: 'tooltip',
      width: 16,
      height: 16,
      src: tW,
    })))))
  }

  /**
   * Renders the loading state for the embed widget.
   * Original inline function for loading state.
   * @returns {JSX.Element}
   */
  function renderLoadingEmbedWidget(): JSX.Element {
    const widgetId = widget.useWidgetId()
    const [url] = widget.useSyncedState('url', null)
    const decodedUrl = url ? decodeURIComponent(url) : 'null'
    const [originalText] = widget.useSyncedState('originalText', null)
    const decodedOriginalText = originalText ? decodeURIComponent(originalText) : 'null'

    widget.usePropertyMenu([
      {
        itemType: 'action',
        propertyName: embedWidgetMenuActions.OPEN,
        tooltip: getI18nString('whiteboard.embeds.inline_menu.open_link'),
        icon: k1,
      },
      { itemType: 'separator' },
      {
        itemType: 'action',
        propertyName: embedWidgetMenuActions.CONVERT_TO_TEXT,
        tooltip: getI18nString('whiteboard.embeds.inline_menu.change_back_to_text'),
        icon: vK,
      },
    ], ({ propertyName }) => {
      switch (propertyName) {
        case embedWidgetMenuActions.OPEN:
          debugState.dispatch(setupHyperlinkHandler({ rawInput: decodedUrl }))
          break
        case embedWidgetMenuActions.CONVERT_TO_TEXT:
          Fullscreen?.replaceNodeWithText(widgetId, decodedOriginalText)
          break
        default:
          console.error('Unhandled property name for Embed widget: %s', propertyName)
      }
    })

    /**
     * Renders a loading text placeholder.
     * Original function name: m
     */
    function renderLoadingText(width: number) {
      return widget.h(Frame, {
        name: 'loading-text',
        width,
        height: 22,
        cornerRadius: 3,
        fill: { type: 'solid', color: De },
      })
    }

    return widget.h(AutoLayout, {
      name: 'loading-embed',
      direction: 'vertical',
      horizontalAlignItems: 'start',
      verticalAlignItems: 'center',
      width: g$,
      height: RN,
      fill: Vm,
      cornerRadius: Ff,
      effect: _E,
      stroke: {
        type: 'solid',
        color: { r: 0, g: 0, b: 0, a: 0.2 },
        blendMode: 'normal',
      },
    }, widget.h(Frame, {
      name: 'loading-thumbnail',
      width: g$,
      height: Ao,
      fill: De,
    }), widget.h(AutoLayout, {
      name: 'loading-text-container',
      direction: 'vertical',
      horizontalAlignItems: 'start',
      verticalAlignItems: 'center',
      width: g$,
      height: 'fill-parent',
      padding: 16,
      spacing: 8,
    }, renderLoadingText(166), renderLoadingText(256), renderLoadingText(208)))
  }

  // Register the widget main entry
  widget.register(() => {
    const [resolved] = widget.useSyncedState('resolved', false)
    const [embedVersionId] = widget.useSyncedState('embedVersionId', jU.EMBED_VERSION_ID_V0)
    return resolved
      ? renderEmbedWidgetVersion(embedVersionId)
      : renderLoadingEmbedWidget()
  })
}

export const w = embedWidgetMenuActions
export const g = registerEmbedWidget
