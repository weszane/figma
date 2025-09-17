import { EmbedParamKey, EmbedProvider } from '../905/165465'
import { googleMapsEmbedConfig } from '../905/194327'
import { EmbedProviderType } from '../905/450589'
import { YOUTUBE_URL_PATTERNS } from '../figma_app/109413'
import { buildUploadUrl } from '../figma_app/169182'
import { DV } from '../figma_app/703447'
import { extractIFrameSrc } from '../figma_app/916560'

/**
 * Renders an icon inside a colored frame.
 * Original function name: r
 * @param params - Parameters for rendering the frame and icon.
 * @param params.figma - Figma widget context.
 * @param params.iconSvgSrc - SVG source string for the icon.
 * @param params.backgroundColor - Background color for the frame.
 * @returns Figma widget node.
 */
export function renderEmbedIconFrame({
  figma,
  iconSvgSrc,
  backgroundColor = '#EBEBFF',
}: {
  figma: any
  iconSvgSrc: string
  backgroundColor?: string
}) {
  const { widget } = figma
  const { SVG, Frame } = widget
  const nodeId = widget.useWidgetNodeId()
  const node = figma.getNodeById(nodeId)
  const width = node?.width
  const height = node?.height
  const svgIcon = widget.h(SVG, {
    src: iconSvgSrc,
    x: { type: 'center', offset: 0 },
    y: { type: 'center', offset: 0 },
  })
  return widget.h(
    Frame,
    {
      width: 'fill-parent',
      height: 'fill-parent',
      fill: {
        type: 'solid',
        color: backgroundColor,
      },
    },
    width > 171 && height > 171 && svgIcon,
  )
}

/**
 * Google Forms embed config.
 * Original variable name: o
 */
export const googleFormsEmbedConfig = {
  configType: EmbedProvider.GOOGLE_FORMS,
  urlPatterns: [
    /^(?:https?:)?\/\/(www\.)?docs\.google\.com\/forms\/.*/,
    /^(?:https?:)?\/\/forms\.gle\/.*/,
  ],
  allowedEmbedTypes: [EmbedParamKey.URL],
  specialParameters: [],
}

/**
 * LottieFiles embed config.
 * Original variable name: c
 */
export const lottieFilesEmbedConfig = {
  configType: EmbedProvider.LOTTIEFILES,
  urlPatterns: [DV],
  allowedEmbedTypes: [EmbedParamKey.URL],
  specialParameters: [],
}

/**
 * Typeform embed config.
 * Original variable name: $$u
 */
export const typeformEmbedConfig = {
  configType: EmbedProvider.TYPEFORM,
  urlPatterns: [
    /^(?:https?:)?\/\/(www\.)?typeform\.com\/.*/,
    /^(?:https?:)?\/\/form\.typeform\.com\/.*/,
  ],
  allowedEmbedTypes: [EmbedParamKey.URL],
  specialParameters: [],
}

/**
 * Vimeo embed config.
 * Original variable name: p
 */
export const vimeoEmbedConfig = {
  configType: EmbedProvider.VIMEO,
  urlPatterns: [/^(?:https?:)?\/\/(www\.)?vimeo\.com\/.*$/],
  allowedEmbedTypes: [EmbedParamKey.URL],
  specialParameters: [],
}
let h = `
<svg width="74" height="105" viewBox="0 0 74 105" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.5635 26.25L62.5137 28.9704L74.001 26.25L48.5635 0L45.0543 12.4449L48.5635 26.25Z" fill="#56368A"/>
<path d="M48.5625 26.25V0H6.93749C3.10453 0 0 3.20369 0 7.15909V97.8408C0 101.796 3.10453 105 6.93749 105H67.0624C70.8954 105 73.9999 101.796 73.9999 97.8408V26.25H48.5625Z" fill="#7248B9"/>
<path d="M19.6562 75.767C17.7426 75.767 16.1875 74.1622 16.1875 72.1875C16.1875 70.2127 17.7426 68.6079 19.6562 68.6079C21.5698 68.6079 23.125 70.2127 23.125 72.1875C23.125 74.1622 21.5698 75.767 19.6562 75.767ZM19.6562 61.4488C17.7426 61.4488 16.1875 59.844 16.1875 57.8693C16.1875 55.8946 17.7426 54.2897 19.6562 54.2897C21.5698 54.2897 23.125 55.8946 23.125 57.8693C23.125 59.844 21.5698 61.4488 19.6562 61.4488ZM19.6562 47.1307C17.7426 47.1307 16.1875 45.5258 16.1875 43.5511C16.1875 41.5764 17.7426 39.9716 19.6562 39.9716C21.5698 39.9716 23.125 41.5764 23.125 43.5511C23.125 45.5258 21.5698 47.1307 19.6562 47.1307ZM57.8125 75.1704H28.9062V69.2045H57.8125V75.1704ZM57.8125 60.8522H28.9062V54.8863H57.8125V60.8522ZM57.8125 46.5341H28.9062V40.5682H57.8125V46.5341Z" fill="white"/>
</svg>

`
let f = `
<svg width="91" height="129" viewBox="0 0 91 129" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_437_36922)">
<path d="M59.3517 2.14512C55.0137 0.780045 50.2813 0 45.4503 0C31.5489 0 19.0277 6.24036 10.6475 16.0884L32.1404 33.932L59.3517 2.14512Z" fill="#1A73E8"/>
<path d="M10.6479 16.0884C4.04225 23.8888 0 34.0294 0 44.9501C0 53.433 1.67606 60.2584 4.53521 66.4013L32.1408 33.9319L10.6479 16.0884Z" fill="#EA4335"/>
<path d="M45.5491 27.789C55.2111 27.789 62.9998 35.492 62.9998 45.0475C62.9998 49.2403 61.4223 53.1405 58.8589 56.1632C58.8589 56.1632 72.5632 39.9772 85.9716 24.2788C80.4505 13.7482 70.8871 5.75273 59.3519 2.14502L32.1406 33.9319C35.3941 30.2267 40.1265 27.789 45.5491 27.789Z" fill="#4285F4"/>
<path d="M45.5492 62.2085C35.8873 62.2085 28.0985 54.5056 28.0985 44.95C28.0985 40.7573 29.5774 36.8571 32.1408 33.9319L4.53516 66.4013C9.26755 76.7369 17.1549 85.1224 25.2394 95.5555L58.8591 56.0657C55.6056 59.8684 50.8732 62.2085 45.5492 62.2085Z" fill="#FBBC04"/>
<path d="M58.2674 106.476C73.4505 82.9772 91.0984 72.3491 91.0984 45.0475C91.0984 37.5396 89.2252 30.5192 85.9717 24.2788L25.2393 95.5555C27.8026 98.8706 30.4646 102.673 33.028 106.574C42.2956 120.712 39.7322 129.097 45.6477 129.097C51.5632 129.097 48.9998 120.614 58.2674 106.476Z" fill="#34A853"/>
</g>
<defs>
<clipPath id="clip0_437_36922">
<rect width="91" height="129" fill="white"/>
</clipPath>
</defs>
</svg>

`
let _ = `
<svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M84.7512 0.818359H29.2487C13.5471 0.818359 0.818359 13.547 0.818359 29.2486V84.7512C0.818359 100.453 13.5471 113.181 29.2487 113.181H84.7512C100.453 113.181 113.182 100.453 113.182 84.7512V29.2486C113.182 13.547 100.453 0.818359 84.7512 0.818359Z" fill="#00DDB3"/>
<path d="M86.2165 25.9854C66.8747 25.9854 59.7074 39.7954 53.9441 50.8898L50.1793 57.9877C44.0765 69.7532 39.5171 76.9051 27.767 76.9051C27.0375 76.9051 26.3151 77.0488 25.6411 77.328C24.9672 77.6071 24.3548 78.0163 23.8389 78.5321C23.3232 79.0479 22.9138 79.6603 22.6345 80.3343C22.3555 81.0082 22.2119 81.7306 22.2119 82.4601C22.214 83.9326 22.7999 85.3444 23.8412 86.3856C24.8825 87.427 26.2943 88.0129 27.767 88.0149C47.1165 88.0149 54.2837 74.2049 60.047 63.1104L63.8043 56.0126C69.9147 44.247 74.4741 37.0951 86.2165 37.0951C86.9467 37.0961 87.6698 36.9531 88.3447 36.6745C89.0194 36.3958 89.6328 35.9868 90.1495 35.4708C90.6661 34.9549 91.0761 34.3422 91.3557 33.6678C91.6354 32.9933 91.7792 32.2704 91.7792 31.5402C91.7771 30.0662 91.1901 28.6534 90.1473 27.6118C89.1043 26.5703 87.6906 25.9854 86.2165 25.9854Z" fill="white"/>
</svg>

`
let A = `
<svg width="116" height="76" viewBox="0 0 116 76" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.3753 0H62.0229C37.4152 0 35.5223 10.6002 35.5223 24.797V51.203C35.5223 65.9676 37.4152 76 62.1175 76H89.3753C113.983 76 115.876 65.3997 115.876 51.2976V24.797C115.876 10.6002 113.983 0 89.3753 0ZM0.125 19.0237C0.125 6.53051 5.04654 0 13.3753 0C21.7041 0 26.6256 6.53051 26.6256 19.0237V56.9763C26.6256 69.4695 21.7041 76 13.3753 76C5.04654 76 0.125 69.4695 0.125 56.9763V19.0237Z" fill="#1A1A19"/>
</svg>
`
let y = `<svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M81.6 0H14.4C6.4471 0 0 6.4471 0 14.4V81.6C0 89.5529 6.4471 96 14.4 96H81.6C89.5529 96 96 89.5529 96 81.6V14.4C96 6.4471 89.5529 0 81.6 0Z" fill="#17D5FF"/>
<path d="M75.1642 38.1025C72.1577 54.1574 54.9095 67.8557 49.6876 70.9488C44.6239 74.042 39.8767 69.6232 38.1361 66.53C36.2372 62.7004 30.3823 42.374 28.7999 40.6064C27.3758 38.8389 22.6285 42.374 22.6285 42.374L20.5714 39.5754C20.5714 39.5754 29.9076 29.1176 37.0284 27.9392C44.4657 26.4663 44.4657 38.6916 46.3646 45.3198C48.1052 51.948 49.2129 55.6303 50.637 55.6303C52.2194 55.6303 55.226 52.0953 58.3908 46.3509C61.7138 40.901 58.2326 35.8931 51.903 39.4281C54.593 25.4353 78.1708 22.0475 75.1642 38.1025Z" fill="white"/>
</svg>
`
function b(e) {
  let t = new URL(e).searchParams.get('v')
  try {
    if (!t) {
      let t = e.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/)?([^&?]+)/)
      let i = t?.[1] || null
      if (i)
        return i
    }
    return t
  }
  catch {
    return null
  }
}
let v = () => `<svg width="164" height="115" viewBox="0 0 164 115" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M159.865 17.8494C157.984 10.8199 152.459 5.29569 145.429 3.41397C132.701 1.02193e-06 81.6393 0 81.6393 0C81.6393 0 30.5779 1.02193e-06 17.8494 3.41397C10.8199 5.29569 5.29569 10.8199 3.41397 17.8494C1.02193e-06 30.5779 0 57.1504 0 57.1504C0 57.1504 1.02193e-06 83.723 3.41397 96.4516C5.29569 103.481 10.8199 109.005 17.8494 110.887C30.5779 114.301 81.6393 114.301 81.6393 114.301C81.6393 114.301 132.701 114.301 145.429 110.887C152.459 109.005 157.984 103.481 159.865 96.4516C163.279 83.723 163.279 57.1504 163.279 57.1504C163.279 57.1504 163.265 30.5779 159.865 17.8494Z" fill="#FF0000"/>
  <path d="M65.296 81.6416L107.715 57.1527L65.296 32.6633V81.6416Z" fill="#FFFFFF"/>
  </svg>
  `
function I({
  figma: e,
}) {
  let {
    SVG,
  } = t
  return e.widget.h(SVG, {
    src: v(),
    width: 100,
    height: 70,
  })
}
function E({
  figma: e,
}) {
  let {
    widget,
  } = e
  let {
    AutoLayout,
  } = t
  let n = widget.useWidgetNodeId()
  let r = e.getNodeById(n)
  let a = r?.width
  let s = r?.height
  return e.widget.h(AutoLayout, {
    width: 'fill-parent',
    height: 'fill-parent',
    direction: 'vertical',
    horizontalAlignItems: 'center',
    verticalAlignItems: 'center',
    fill: {
      type: 'solid',
      color: '#FFE2E0',
    },
  }, a > 171 && s > 171 && I({
    figma: e,
  }))
}
function x({
  figma: e,
  videoId: t,
}) {
  let {
    widget,
  } = e
  let {
    AutoLayout,
  } = i
  let r = widget.useWidgetNodeId()
  let a = e.getNodeById(r)
  let s = a?.width
  let o = a?.height
  return e.widget.h(AutoLayout, {
    width: 'fill-parent',
    height: 'fill-parent',
    direction: 'vertical',
    horizontalAlignItems: 'center',
    verticalAlignItems: 'center',
    fill: {
      type: 'image',
      src: `https://i.ytimg.com/vi/${t}/maxresdefault.jpg`,
      scaleMode: 'fill',
    },
  }, s > 171 && o > 171 && I({
    figma: e,
  }))
}
let S = `
<svg xmlns="http://www.w3.org/2000/svg" width="113" height="113" viewBox="0 0 113 113" fill="none">
  <path d="M27.3829 40.0265C40.3952 27.6571 60.8521 27.6572 73.8644 40.0265L74.4884 40.634L74.7013 40.8586C76.829 43.2139 76.7581 46.8495 74.4884 49.1193C72.2184 51.3891 68.5819 51.4604 66.2267 49.3322L66.003 49.1193L65.6007 48.7277C57.2151 40.7567 44.0322 40.7566 35.6466 48.7277L35.2442 49.1193L21.3692 62.9943C12.8757 71.4881 12.8757 85.2594 21.3692 93.7531C29.863 102.247 43.6342 102.247 52.128 93.7531C54.4711 91.41 58.2702 91.4101 60.6134 93.7531C62.9565 96.0962 62.9565 99.8953 60.6134 102.238C47.4333 115.418 26.0639 115.418 12.8839 102.238C-0.295963 89.0584 -0.295899 67.689 12.8839 54.509L26.7589 40.634L27.3829 40.0265ZM54.5089 12.8849C67.6889 -0.295068 89.0583 -0.294888 102.238 12.8849C115.418 26.065 115.418 47.4343 102.238 60.6144L88.3634 74.4894C75.1833 87.6691 53.8148 87.6692 40.6349 74.4894C38.2918 72.1463 38.2919 68.3472 40.6349 66.0041C42.9779 63.6613 46.7762 63.6613 49.1192 66.0041C57.6129 74.4977 71.3842 74.4975 79.878 66.0041L93.753 52.1291C102.247 43.6353 102.247 29.8641 93.753 21.3703C85.2592 12.8768 71.4879 12.8766 62.9942 21.3703C60.6511 23.7132 56.852 23.7134 54.5089 21.3703C52.1661 19.0272 52.1661 15.228 54.5089 12.8849Z" fill="#4D49FC"/>
</svg>
`
/**
 * Renders the embed widget based on the provider type.
 * Original function name: $$w0
 * @param params - Parameters for rendering the widget.
 * @param params.figma - Figma widget context.
 * @returns Figma widget node.
 */
export function setupEmbedWidget({
  figma,
}: {
  figma: any
}) {
  const { widget } = figma
  const { useSyncedState } = widget

  /**
   * Renders the Mailchimp embed widget.
   * Original inline function in MAILCHIMP case.
   */
  function renderMailchimpWidget({ figma }: { figma: any }) {
    const { widget } = figma
    const { AutoLayout, useSyncedState } = widget
    const [inputPlaceholder] = useSyncedState('inputPlaceholder', null)
    const [submitButtonLabel] = useSyncedState('submitButtonLabel', null)

    /**
     * Renders the input placeholder.
     * Original inline function in Mailchimp case.
     */
    function renderInputPlaceholder(figma: any, placeholder: string | null) {
      const { widget } = figma
      const { AutoLayout, Text } = widget
      return widget.h(AutoLayout, {
        direction: 'horizontal',
        horizontalAlignItems: 'start',
        verticalAlignItems: 'center',
        width: 'fill-parent',
        height: 'hug-contents',
        fill: { r: 1, g: 1, b: 1, a: 1 },
        stroke: { r: 0.8, g: 0.8, b: 0.8, a: 1 },
        strokeWidth: 1,
        cornerRadius: 4,
        padding: { vertical: 8, horizontal: 12 },
      }, widget.h(Text, {
        fill: { r: 0.46, g: 0.46, b: 0.46, a: 1 },
        fontSize: 16,
        fontFamily: 'Inter',
        width: 'hug-contents',
      }, placeholder || ''))
    }

    /**
     * Renders the submit button.
     * Original inline function in Mailchimp case.
     */
    function renderSubmitButton(figma: any, label: string | null) {
      const { widget } = figma
      const { AutoLayout, Text } = widget
      return widget.h(AutoLayout, {
        direction: 'horizontal',
        horizontalAlignItems: 'start',
        verticalAlignItems: 'center',
        width: 'hug-contents',
        height: 'hug-contents',
        fill: { r: 0, g: 0, b: 0, a: 1 },
        cornerRadius: 4,
        padding: { vertical: 8, horizontal: 14 },
      }, widget.h(Text, {
        fill: { r: 1, g: 1, b: 1, a: 1 },
        fontSize: 16,
        fontFamily: 'Inter',
        width: 'hug-contents',
      }, label || 'Submit'))
    }

    return widget.h(AutoLayout, {
      direction: 'horizontal',
      width: 'fill-parent',
      height: 'hug-contents',
      spacing: 8,
      padding: { vertical: 4, horizontal: 4 },
    }, renderInputPlaceholder(figma, inputPlaceholder), renderSubmitButton(figma, submitButtonLabel))
  }

  /**
   * Renders the Google Map embed widget.
   * Original inline function in GOOGLE_MAP case.
   */
  function renderGoogleMapWidget({ figma }: { figma: any }) {
    const { widget } = figma
    const { AutoLayout } = widget
    return widget.h(AutoLayout, {
      width: 'fill-parent',
      height: 'fill-parent',
      direction: 'vertical',
      horizontalAlignItems: 'center',
      verticalAlignItems: 'center',
      fill: {
        type: 'image',
        src: buildUploadUrl('5732708498034ce891d9f33c7269ee8679bb3191'),
        scale: 'fill',
      },
    })
  }

  /**
   * Renders the YouTube embed widget.
   * Original inline function in YOUTUBE case.
   */
  function renderYouTubeWidget({ figma }: { figma: any }) {
    const { widget } = figma
    const { useSyncedState } = widget
    const [videoURL] = useSyncedState('videoURL', null)
    const videoId = videoURL ? b(videoURL) : null
    return videoURL && videoId
      ? x({ figma, videoId })
      : E({ figma })
  }

  /**
   * Renders the generic embed widget.
   * Original inline function in GENERIC case.
   */
  function renderGenericWidget({ figma }: { figma: any }) {
    const { widget } = figma
    const { useSyncedState } = widget
    const [embedCodeType] = useSyncedState('embedCodeType', 'url')
    const [embedURL] = useSyncedState('embedURL', '')
    const [embedIframeHtml] = useSyncedState('embedIframeHtml', '')
    const url = embedCodeType === 'url' ? embedURL : extractIFrameSrc(embedIframeHtml)

    if (YOUTUBE_URL_PATTERNS.some(pattern => pattern.test(url))) {
      // YouTube
      const [youtubeEmbedURL] = useSyncedState('embedURL', null)
      const videoId = youtubeEmbedURL ? b(youtubeEmbedURL) : null
      return youtubeEmbedURL && videoId && videoId.length !== 0
        ? x({ figma, videoId })
        : E({ figma })
    }
    if (googleMapsEmbedConfig.urlPatterns.some(pattern => pattern.test(url))) {
      // Google Maps
      return renderEmbedIconFrame({
        figma,
        iconSvgSrc: f,
        backgroundColor: '#E5F4FF',
      })
    }
    if (typeformEmbedConfig.urlPatterns.some(pattern => pattern.test(url))) {
      // Typeform
      return renderEmbedIconFrame({
        figma,
        iconSvgSrc: A,
        backgroundColor: '#F9F9F9',
      })
    }
    if (lottieFilesEmbedConfig.urlPatterns.some(pattern => pattern.test(url))) {
      // LottieFiles
      return renderEmbedIconFrame({
        figma,
        iconSvgSrc: _,
        backgroundColor: '#BEFFF3',
      })
    }
    if (googleFormsEmbedConfig.urlPatterns.some(pattern => pattern.test(url))) {
      // Google Forms
      return renderEmbedIconFrame({
        figma,
        iconSvgSrc: h,
        backgroundColor: '#E7E0FD',
      })
    }
    if (vimeoEmbedConfig.urlPatterns.some(pattern => pattern.test(url))) {
      // Vimeo
      return renderEmbedIconFrame({
        figma,
        iconSvgSrc: y,
        backgroundColor: '#EBFBFF',
      })
    }
    // Default generic
    return renderEmbedIconFrame({
      figma,
      iconSvgSrc: S,
      backgroundColor: '#EBEBFF',
    })
  }

  /**
   * Renders the default embed widget.
   * Original inline function in default case.
   */
  function renderDefaultWidget({ figma }: { figma: any }) {
    return renderEmbedIconFrame({
      figma,
      iconSvgSrc: C,
      backgroundColor: '#D9D9D9',
    })
  }

  widget.register(() => {
    const [widgetType] = useSyncedState('widgetType', null)
    switch (widgetType) {
      case EmbedProviderType.MAILCHIMP:
        return renderMailchimpWidget({ figma })
      case EmbedProviderType.GOOGLE_MAP:
        return renderGoogleMapWidget({ figma })
      case EmbedProviderType.YOUTUBE:
        return renderYouTubeWidget({ figma })
      case EmbedProviderType.GENERIC:
        return renderGenericWidget({ figma })
      default:
        return renderDefaultWidget({ figma })
    }
  })
}
export const YJ = setupEmbedWidget
let C = `<svg xmlns="http://www.w3.org/2000/svg" width="94" height="94" viewBox="0 0 94 94" fill="none">
  <rect x="2.5" y="2.5" width="89" height="89" rx="9.16667" stroke="#B3B3B3" stroke-width="5"/>
  <rect x="33" y="29" width="7" height="7" fill="#B3B3B3"/>
  <rect x="54" y="29" width="7" height="7" fill="#B3B3B3"/>
  <rect x="33" y="52" width="7" height="7" fill="#B3B3B3"/>
  <rect x="40" y="52" width="7" height="7" fill="#B3B3B3"/>
  <rect x="47" y="52" width="7" height="7" fill="#B3B3B3"/>
  <rect x="54" y="52" width="7" height="7" fill="#B3B3B3"/>
  <rect x="26" y="58" width="7" height="7" fill="#B3B3B3"/>
  <rect x="61" y="58" width="7" height="7" fill="#B3B3B3"/>
</svg>`
export const u = setupEmbedWidget
