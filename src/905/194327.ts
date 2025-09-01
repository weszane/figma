import { ol, Of, w2 } from "../905/165465";
export let $$r0 = {
  configType: ol.GOOGLE_MAPS,
  urlPatterns: [/^(?:https?:)?\/\/(www\.)?google\.com\/maps\/.*/, /^(?:https?:)?\/\/maps\.google\.com\/.*/, /^(?:https?:)?\/\/maps\.goo\.gl\/.*/],
  specialParameters: [{
    parameterType: "string",
    parameterName: Of.MAPS_LOCATION,
    location: "queryParam",
    defaultValue: ""
  }, {
    parameterType: "number",
    parameterName: Of.MAPS_ZOOM_LEVEL,
    location: "queryParam",
    defaultValue: 10,
    min: 1,
    max: 20
  }],
  allowedEmbedTypes: [w2.URL]
};
export const m = $$r0;