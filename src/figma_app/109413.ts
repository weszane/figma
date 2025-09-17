import { EmbedOption, EmbedParamKey, EmbedProvider } from '../905/165465'
/**
 * Regular expressions for matching YouTube URLs.
 * (original: $$i1)
 */
export const YOUTUBE_URL_PATTERNS: RegExp[] = [
  /^(https?:\/\/(www\.)?youtube\.com\/.*)/,
  /^(https?:\/\/(www\.)?youtu\.be\/.*)/,
  /^(https?:\/\/(www\.)?youtube-nocookie\.com\/.*)/,
]

/**
 * Embed configuration for YouTube URLs with URL embed type.
 * (original: $$a0)
 */
export const YOUTUBE_EMBED_CONFIG_URL = {
  configType: EmbedProvider.YOUTUBE,
  urlPatterns: YOUTUBE_URL_PATTERNS,
  specialParameters: [
    {
      parameterType: 'boolean',
      parameterName: EmbedOption.SHOW_UI,
      location: 'queryParam',
      defaultValue: true,
    },
    {
      parameterType: 'boolean',
      parameterName: EmbedOption.AUTOPLAY,
      location: 'queryParam',
      defaultValue: false,
    },
    {
      parameterType: 'boolean',
      parameterName: EmbedOption.ALLOW_FULLSCREEN,
      location: 'widgetProperty',
      defaultValue: false,
      htmlWidgetDerivedProperty: 'htmlWidgetGenericEmbedAllowFullscreen',
    },
    {
      parameterType: 'boolean',
      parameterName: EmbedOption.ALLOW_COOKIES,
      location: 'sourceURL',
      defaultValue: false,
    },
  ],
  allowedEmbedTypes: [EmbedParamKey.URL],
}

/**
 * Embed configuration for YouTube URLs with HTML embed type.
 * (original: $$s2)
 */
export const YOUTUBE_EMBED_CONFIG_HTML = {
  configType: EmbedProvider.YOUTUBE,
  urlPatterns: YOUTUBE_URL_PATTERNS,
  specialParameters: [
    {
      parameterType: 'boolean',
      parameterName: EmbedOption.SHOW_UI,
      location: 'queryParam',
      defaultValue: true,
    },
    {
      parameterType: 'boolean',
      parameterName: EmbedOption.AUTOPLAY,
      location: 'queryParam',
      defaultValue: false,
    },
    {
      parameterType: 'boolean',
      parameterName: EmbedOption.ALLOW_FULLSCREEN,
      location: 'htmlAttribute',
      defaultValue: false,
    },
  ],
  allowedEmbedTypes: [EmbedParamKey.HTML],
}
export const ON = YOUTUBE_EMBED_CONFIG_URL
export const SW = YOUTUBE_URL_PATTERNS
export const om = YOUTUBE_EMBED_CONFIG_HTML
