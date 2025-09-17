import { EmbedOption, EmbedParamKey, EmbedProvider } from '../905/165465'
/**
 * Google Maps embed configuration (original: $$r0)
 */
export const googleMapsEmbedConfig = {
  configType: EmbedProvider.GOOGLE_MAPS,
  urlPatterns: [
    /^(?:https?:)?\/\/(www\.)?google\.com\/maps\/.*/,
    /^(?:https?:)?\/\/maps\.google\.com\/.*/,
    /^(?:https?:)?\/\/maps\.goo\.gl\/.*/,
  ],
  specialParameters: [
    {
      parameterType: 'string',
      parameterName: EmbedOption.MAPS_LOCATION,
      location: 'queryParam',
      defaultValue: '',
    },
    {
      parameterType: 'number',
      parameterName: EmbedOption.MAPS_ZOOM_LEVEL,
      location: 'queryParam',
      defaultValue: 10,
      min: 1,
      max: 20,
    },
  ],
  allowedEmbedTypes: [EmbedParamKey.URL],
}

/**
 * Alias for googleMapsEmbedConfig (original: m)
 */
export const m = googleMapsEmbedConfig
