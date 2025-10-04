import { H as _$$H } from '../905/88863';
import { getI18nString } from '../905/303541';
import { debugState } from '../905/407919';
import { l as _$$l } from '../905/448778';
import { getSelectedFile } from '../905/766303';
import { trackFileEvent } from '../figma_app/314264';
import { LinkMetadataEvent, LinkRenderType, parseDomain } from '../figma_app/671547';
import { gray400Color, whiteColor2 } from '../figma_app/728075';
import { Fullscreen } from '../figma_app/763686';
import { setupHyperlinkHandler } from '../figma_app/815170';
import { extractHostname } from '../figma_app/916560';
export function handlePreviewTracking(e, t) {
  let r = getSelectedFile(debugState.getState())?.key ?? '';
  trackFileEvent(e, r, debugState.getState(), {
    domain: t != null ? parseDomain(t) : '',
    linkRenderType: LinkRenderType.LINK_PREVIEW,
    userId: debugState.getState().user?.id
  });
}
export enum embedWidgetMenuActions {
  OPEN = 'open',
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
  CONVERT_TO_TEXT = 'convert_to_text',
}
let g = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 12H16V13H13V27H27V24H28V27V28H13H12V27V13V12ZM27.0001 13H26.9913L27.0001 13.0088V13ZM20.0001 13H26.2999L17.0251 22.2747L17.7323 22.9818L27.0001 13.714V20H28.0001V12.5V12H27.5001H20.0001V13Z" fill="white" fill-opacity="0.8"/>
</svg>
`;
let f = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7072 14L20.3536 16.6465L19.6465 17.3536L16.1465 13.8536L15.793 13.5L16.1465 13.1465L19.6465 9.64648L20.3536 10.3536L17.7072 13H21.5001C25.0762 13 28.0001 15.9239 28.0001 19.5C28.0001 21.3202 27.167 22.5686 26.3445 23.35C25.9353 23.7387 25.5272 24.0141 25.2208 24.1929C25.0671 24.2825 24.9377 24.3486 24.8448 24.393C24.7983 24.4153 24.7608 24.4322 24.7339 24.444C24.7204 24.4499 24.7095 24.4545 24.7014 24.4579L24.6914 24.462L24.688 24.4634L24.6868 24.4639L24.6862 24.4641C24.686 24.4642 24.6858 24.4643 24.5001 24C24.3144 23.5358 24.3142 23.5359 24.314 23.536L24.316 23.5351L24.3337 23.5275C24.3506 23.5201 24.3776 23.508 24.4131 23.491C24.4843 23.457 24.5893 23.4035 24.7169 23.3291C24.9729 23.1797 25.3148 22.9489 25.6557 22.625C26.3332 21.9814 27.0001 20.9799 27.0001 19.5C27.0001 16.4762 24.5239 14 21.5001 14H17.7072Z" fill="white" fill-opacity="0.8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 20H12V21H16.5V29H17.5V21H22V20H17.5H16.5Z" fill="white" fill-opacity="0.8"/>
</svg>
`;
let E = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#9747FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 29V22H27V29H13ZM12 11C12 10.4477 12.4477 10 13 10H27C27.5523 10 28 10.4477 28 11V29C28 29.5523 27.5523 30 27 30H13C12.4477 30 12 29.5523 12 29V11Z" fill="white"/>
</svg>
`;
let y = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 29V22H27V29H13ZM12 11C12 10.4477 12.4477 10 13 10H27C27.5523 10 28 10.4477 28 11V29C28 29.5523 27.5523 30 27 30H13C12.4477 30 12 29.5523 12 29V11Z" fill="white" fill-opacity="0.8"/>
</svg>
`;
let b = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" fill="#9747FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 16H31V24H17V16ZM8 16C8 15.4477 8.44772 15 9 15H31C31.5523 15 32 15.4477 32 16V24C32 24.5523 31.5523 25 31 25H9C8.44772 25 8 24.5523 8 24V16Z" fill="white"/>
</svg>
`;
let T = `
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 16H31V24H17V16ZM8 16C8 15.4477 8.44772 15 9 15H31C31.5523 15 32 15.4477 32 16V24C32 24.5523 31.5523 25 31 25H9C8.44772 25 8 24.5523 8 24V16Z" fill="white" fill-opacity="0.8"/>
</svg>
`;
let I = `
<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.52518 13.6568L8.17683 11.0052L8.88394 11.7123L6.23229 14.3639C4.96308 15.6331 2.9053 15.6331 1.63609 14.3639C0.366889 13.0947 0.366889 11.0369 1.63609 9.76772L4.28774 7.11607L4.99485 7.82317L2.3432 10.4748C1.46452 11.3535 1.46452 12.7781 2.3432 13.6568C3.22188 14.5355 4.6465 14.5355 5.52518 13.6568ZM11.7124 8.88383L11.0053 8.17673L13.6569 5.52508C14.5356 4.6464 14.5356 3.22177 13.6569 2.34309C12.7782 1.46441 11.3536 1.46442 10.4749 2.34309L7.82328 4.99475L7.11617 4.28764L9.76782 1.63599C11.037 0.366784 13.0948 0.366784 14.364 1.63599C15.6332 2.90519 15.6332 4.96298 14.364 6.23218L11.7124 8.88383ZM6.26175 10.5043L10.5044 6.26164L9.73836 5.49561L5.49572 9.73825L6.26175 10.5043Z" fill="black" fill-opacity="0.5"/>
</svg>
`;
function S(e, t) {
  let r = _$$l(t, e, 'thumbnailImageHash');
  let [n] = e.useSyncedState('thumbnailImageWidth', null);
  let [i] = e.useSyncedState('thumbnailImageHeight', null);
  return {
    thumbnailImageHash: r,
    thumbnailAspectRatio: n && i ? n / i : void 0
  };
}
function v(e, t) {
  let {
    thumbnailImageHash
  } = S(e, t);
  let [n] = e.useSyncedState('url', null);
  let i = n ? decodeURIComponent(n) : 'null';
  let [a] = e.useSyncedState('title', null);
  let [s] = e.useSyncedState('description', null);
  let [o] = e.useSyncedState('provider', '');
  let l = !!a;
  let d = !!thumbnailImageHash;
  let c = !!s;
  return {
    url: i,
    rawTitle: a,
    rawDescription: s,
    rawProvider: o,
    hasTitle: l,
    hasThumbnail: d,
    hasTitleOrDescription: l || c,
    hasUrlOnly: !(l || c || d),
    hasTitleXorDescription: l !== c,
    isTwitterLinkPreview: o === 'Twitter' || o === 'X (formerly Twitter)'
  };
}
/**
 * LinkPreviewWidget - Refactored from $$A1
 * Renders a link preview widget with property menu actions and layout variations.
 * @param {object} params - Widget parameters.
 * @param {object} params.figma - Figma widget API.
 * @returns {void}
 */
export function LinkPreviewWidget({
  figma
}: {
  figma: any;
}) {
  const {
    widget
  } = figma;
  // Extract widget components from getI18nString (original: getI18nString)
  const {
    Frame,
    AutoLayout,
    Text,
    SVG
  } = widget;
  widget.register(() => {
    const widgetId = widget.useWidgetId();

    // Extract link preview state (original: v)
    const {
      url,
      hasTitle,
      hasThumbnail,
      hasTitleXorDescription,
      hasUrlOnly,
      hasTitleOrDescription
    } = v(widget, figma);

    // Extract thumbnail state (original: S)
    const {
      thumbnailImageHash,
      thumbnailAspectRatio
    } = S(widget, figma);

    // Favicon hash (original: _$$l)
    const faviconImageHash = _$$l(figma, widget, 'faviconImageHash');

    // Horizontal text width calculation
    const horizontalTextWidth = 480 - (hasThumbnail ? 112 : 8) - 32 - 16;

    // Orientation state
    const [orientation, setOrientation] = widget.useSyncedState('orientation', hasUrlOnly ? 'horizontal' : 'vertical');

    // Title/description/font state builder
    /**
     * getTextStates - Builds text states for title, description, and provider.
     * @param {object} params
     */
    function getTextStates({
      figma,
      widget,
      titleFontSize,
      titleLineHeight,
      descriptionFontSizeWithTitle,
      descriptionFontSizeWithoutTitle,
      descriptionLineHeight,
      verticalTextWidth,
      horizontalTextWidth,
      faviconDimension,
      hasTitleXorDescription,
      orientation
    }: {
      figma: any;
      widget: any;
      titleFontSize: number;
      titleLineHeight: number;
      descriptionFontSizeWithTitle: number;
      descriptionFontSizeWithoutTitle: number;
      descriptionLineHeight: number;
      verticalTextWidth: number;
      horizontalTextWidth: number;
      faviconDimension: number;
      hasTitleXorDescription: boolean;
      orientation: string;
    }) {
      const {
        hasTitleOrDescription: hasTitleOrDesc,
        isTwitterLinkPreview
      } = v(widget, figma);

      // Title text
      const title = _$$H(widget, 'title', {
        name: 'Inter Medium',
        size: titleFontSize,
        lineHeight: titleLineHeight
      }, orientation === 'vertical' ? verticalTextWidth : horizontalTextWidth, (orientation === 'vertical' ? 2 : 1) + (hasTitleXorDescription ? 1 : 0) + (isTwitterLinkPreview ? 4 : 0), false);

      // Description text
      const description = _$$H(widget, 'description', {
        name: 'Inter',
        size: title ? descriptionFontSizeWithTitle : descriptionFontSizeWithoutTitle,
        lineHeight: descriptionLineHeight
      }, orientation === 'vertical' ? verticalTextWidth : horizontalTextWidth, (orientation === 'vertical' ? 2 : 1) + (hasTitleXorDescription ? 1 : 0), false);

      // Provider text
      const fullUrlProvider = _$$H(widget, 'url', {
        name: 'Inter',
        size: titleFontSize,
        lineHeight: titleLineHeight
      }, (orientation === 'vertical' ? verticalTextWidth : horizontalTextWidth) - (faviconDimension + 8), 1 + (hasTitleOrDesc ? 0 : 1), true);
      return {
        title,
        description,
        fullUrlProvider
      };
    }

    // Get text states
    const {
      title,
      description,
      fullUrlProvider
    } = getTextStates({
      figma,
      widget,
      titleFontSize: 16,
      titleLineHeight: 22,
      descriptionFontSizeWithTitle: 13,
      descriptionFontSizeWithoutTitle: 14,
      descriptionLineHeight: 20,
      verticalTextWidth: 240,
      horizontalTextWidth,
      hasTitleXorDescription,
      faviconDimension: 16,
      orientation
    });

    // Hostname or provider
    const displayProvider = hasTitleOrDescription ? extractHostname(url) : fullUrlProvider;

    // Open link handler
    function handleOpenLink() {
      handlePreviewTracking(LinkMetadataEvent.OPEN_PREVIEW, url);
      debugState.dispatch(setupHyperlinkHandler({
        rawInput: url
      }));
    }

    // Property menu setup
    widget.usePropertyMenu([{
      itemType: 'action',
      propertyName: 'open',
      tooltip: getI18nString('whiteboard.embeds.inline_menu.open_link'),
      icon: g
    }, {
      itemType: 'separator'
    }, {
      itemType: 'action',
      propertyName: 'vertical',
      tooltip: getI18nString('whiteboard.embeds.inline_menu.display_vertical'),
      icon: orientation === 'vertical' ? E : y
    }, {
      itemType: 'action',
      propertyName: 'horizontal',
      tooltip: getI18nString('whiteboard.embeds.inline_menu.display_horizontal'),
      icon: orientation === 'horizontal' ? b : T
    }, {
      itemType: 'separator'
    }, {
      itemType: 'action',
      propertyName: 'convert_to_text',
      tooltip: getI18nString('whiteboard.embeds.inline_menu.change_back_to_text'),
      icon: f
    }], ({
      propertyName
    }) => {
      switch (propertyName) {
        case 'open':
          handleOpenLink();
          break;
        case 'convert_to_text':
          handlePreviewTracking(LinkMetadataEvent.CONVERT_TO_TEXT, url);
          Fullscreen?.replaceNodeWithText(widgetId, url);
          break;
        case 'vertical':
          handlePreviewTracking(LinkMetadataEvent.SWITCH_ORIENTATION_VERTICAL, url);
          setOrientation('vertical');
          break;
        case 'horizontal':
          handlePreviewTracking(LinkMetadataEvent.SWITCH_ORIENTATION_HORIZONTAL, url);
          setOrientation('horizontal');
          break;
        default:
          console.error('Unhandled property name for LinkPreview widget: %s', propertyName);
      }
    });

    // Common text style
    const commonTextStyle = {
      fontFamily: 'Inter',
      horizontalAlignText: 'left',
      verticalAlignText: 'bottom',
      width: 'fill-parent',
      fill: {
        type: 'solid',
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 0.8
        },
        blendMode: 'normal'
      }
    };

    /**
     * Favicon renderer (original: z)
     */
    function renderFavicon(hash?: string) {
      const node = hash ? widget.h(Frame, {
        name: 'container-frame',
        width: 16,
        height: 16,
        fill: {
          type: 'image',
          imageHash: hash,
          scaleMode: 'fill'
        },
        cornerRadius: 3
      }) : widget.h(SVG, {
        src: I
      });
      return widget.h(AutoLayout, {
        direction: 'horizontal',
        horizontalAlignItems: 'start',
        verticalAlignItems: 'start',
        padding: {
          left: 0,
          right: 0,
          top: hasTitleOrDescription ? 0 : 3,
          bottom: 0
        }
      }, node);
    }

    /**
     * Thumbnail renderer (original: W)
     */
    function renderThumbnail(width: number, height: number, hash?: string) {
      return widget.h(Frame, {
        name: 'container-frame',
        width,
        height,
        fill: hash ? {
          type: 'image',
          imageHash: hash,
          scaleMode: 'fill'
        } : gray400Color,
        effect: [{
          type: 'inner-shadow',
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.1
          },
          offset: orientation === 'vertical' ? {
            x: 0,
            y: -1
          } : {
            x: -1,
            y: 0
          },
          blur: 0
        }],
        onClick: handleOpenLink
      });
    }

    /**
     * Title renderer (original: K)
     */
    function renderTitle(text?: string) {
      if (text) {
        return widget.h(Text, {
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 22,
          ...commonTextStyle
        }, text);
      }
      return null;
    }

    /**
     * Description renderer (original: Y)
     */
    function renderDescription(hasTitle: boolean, text?: string) {
      if (text) {
        return widget.h(Text, {
          fontSize: hasTitle ? 13 : 14,
          lineHeight: 20,
          fontWeight: 400,
          ...commonTextStyle,
          fill: {
            ...commonTextStyle.fill,
            color: {
              r: 0,
              g: 0,
              b: 0,
              a: hasTitle ? 0.5 : 0.8
            }
          }
        }, text);
      }
      return null;
    }

    /**
     * Provider renderer (original: $)
     */
    function renderProvider(hasTitleOrDescription: boolean, text: string) {
      return widget.h(Text, {
        fontSize: hasTitleOrDescription ? 13 : 16,
        lineHeight: hasTitleOrDescription ? 20 : 22,
        fontWeight: 400,
        textDecoration: 'underline',
        ...commonTextStyle,
        fill: {
          ...commonTextStyle.fill,
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.5
          }
        },
        onClick: handleOpenLink
      }, text);
    }

    // Layouts
    /**
     * Vertical layout renderer
     */
    function renderVerticalLayout(...children: any[]) {
      return widget.h(AutoLayout, {
        direction: 'vertical',
        horizontalAlignItems: 'start',
        verticalAlignItems: 'center',
        width: 'hug-contents',
        height: 'hug-contents',
        fill: whiteColor2,
        cornerRadius: 12,
        stroke: {
          type: 'solid',
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.2
          },
          blendMode: 'normal'
        },
        effect: [{
          type: 'drop-shadow',
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.1
          },
          offset: {
            x: 0,
            y: 2
          },
          blur: 6
        }]
      }, ...children);
    }

    /**
     * Horizontal layout renderer
     */
    function renderHorizontalLayout(hasThumbnail: boolean, ...children: any[]) {
      return widget.h(AutoLayout, {
        direction: 'horizontal',
        horizontalAlignItems: 'center',
        verticalAlignItems: 'start',
        width: 480,
        height: 'hug-contents',
        fill: whiteColor2,
        cornerRadius: 12,
        spacing: hasThumbnail ? 16 : 0,
        stroke: {
          type: 'solid',
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.2
          },
          blendMode: 'normal'
        },
        effect: [{
          type: 'drop-shadow',
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.1
          },
          offset: {
            x: 0,
            y: 2
          },
          blur: 6
        }, {
          type: 'drop-shadow',
          color: {
            r: 0,
            g: 0,
            b: 0,
            a: 0.08
          },
          offset: {
            x: 0,
            y: 0
          },
          blur: 2
        }]
      }, ...children);
    }

    // Compose children for layouts
    if (orientation === 'vertical') {
      return renderVerticalLayout(!hasThumbnail && widget.h(Frame, {
        width: 304,
        height: 0.01
      }), hasThumbnail && renderThumbnail(304, thumbnailAspectRatio ? Math.max(Math.min(304 / thumbnailAspectRatio, 608), 160) : 160, thumbnailImageHash), hasTitleOrDescription && widget.h(AutoLayout, {
        direction: 'vertical',
        horizontalAlignItems: 'start',
        verticalAlignItems: 'start',
        width: 'fill-parent',
        height: 'hug-contents',
        fill: whiteColor2,
        spacing: 4,
        padding: {
          left: 24,
          right: 24,
          bottom: 0,
          top: hasThumbnail ? 16 : 24
        }
      }, renderTitle(title), renderDescription(hasTitle, description)), widget.h(AutoLayout, {
        name: 'service-name-autolayout',
        direction: 'horizontal',
        verticalAlignItems: hasTitleOrDescription ? 'center' : 'start',
        horizontalAlignItems: 'start',
        width: 'fill-parent',
        spacing: 8,
        padding: hasTitleOrDescription ? {
          left: 24,
          right: 24,
          top: 8,
          bottom: 24
        } : 20
      }, renderFavicon(faviconImageHash), renderProvider(hasTitleOrDescription, displayProvider)));
    } else if (orientation === 'horizontal') {
      return renderHorizontalLayout(hasThumbnail, !hasThumbnail && widget.h(Frame, {
        width: 0.01,
        height: 0.01
      }), hasThumbnail && renderThumbnail(112, 112, thumbnailImageHash), widget.h(AutoLayout, {
        direction: 'vertical',
        horizontalAlignItems: 'center',
        verticalAlignItems: 'start',
        width: 'fill-parent',
        height: 'fill-parent',
        fill: whiteColor2,
        spacing: hasThumbnail ? 4 : 8,
        padding: hasThumbnail ? {
          left: 0,
          right: 0,
          bottom: 16,
          top: 16
        } : 20
      }, hasTitleOrDescription && widget.h(AutoLayout, {
        direction: 'vertical',
        horizontalAlignItems: 'start',
        verticalAlignItems: 'start',
        width: 'fill-parent',
        height: 'hug-contents',
        fill: whiteColor2,
        spacing: 4,
        padding: 0
      }, renderTitle(title), renderDescription(hasTitle, description)), widget.h(AutoLayout, {
        name: 'service-name-autolayout',
        direction: 'horizontal',
        verticalAlignItems: hasTitleOrDescription ? 'center' : 'start',
        horizontalAlignItems: 'center',
        width: 'fill-parent',
        spacing: 8
      }, renderFavicon(faviconImageHash), renderProvider(hasTitleOrDescription, displayProvider))));
    }
    return undefined;
  });
}
export const HP = embedWidgetMenuActions;
export const Nd = LinkPreviewWidget;
export const Rm = handlePreviewTracking;