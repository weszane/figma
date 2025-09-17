/**
 * Enum for embed parameter keys.
 * Original variable: $$n2
 */
export enum EmbedParamKey {
  URL = 'url',
  HTML = 'html',
}

/**
 * Enum for embed options.
 * Original variable: $$r0
 */
export enum EmbedOption {
  SHOW_UI = 'controls',
  AUTOPLAY = 'autoplay',
  ALLOW_FULLSCREEN = 'allowfullscreen',
  MAPS_LOCATION = 'q',
  MAPS_ZOOM_LEVEL = 'z',
  ALLOW_COOKIES = 'allowcookies',
}

/**
 * Enum for embed providers.
 * Original variable: $$a1
 */
export enum EmbedProvider {
  YOUTUBE = 'youtube',
  GOOGLE_MAPS = 'google_maps',
  TYPEFORM = 'typeform',
  LOTTIEFILES = 'lottiefiles',
  GOOGLE_FORMS = 'google_forms',
  VIMEO = 'vimeo',
}

// Refactored exports to match original names
export const Of = EmbedOption
export const ol = EmbedProvider
export const w2 = EmbedParamKey
