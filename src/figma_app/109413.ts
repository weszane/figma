import { ol, Of, w2 } from "../905/165465";
let $$i1 = [/^(https?:\/\/(www\.)?youtube\.com\/.*)/, /^(https?:\/\/(www\.)?youtu\.be\/.*)/, /^(https?:\/\/(www\.)?youtube-nocookie\.com\/.*)/];
let $$a0 = {
  configType: ol.YOUTUBE,
  urlPatterns: $$i1,
  specialParameters: [{
    parameterType: "boolean",
    parameterName: Of.SHOW_UI,
    location: "queryParam",
    defaultValue: !0
  }, {
    parameterType: "boolean",
    parameterName: Of.AUTOPLAY,
    location: "queryParam",
    defaultValue: !1
  }, {
    parameterType: "boolean",
    parameterName: Of.ALLOW_FULLSCREEN,
    location: "widgetProperty",
    defaultValue: !1,
    htmlWidgetDerivedProperty: "htmlWidgetGenericEmbedAllowFullscreen"
  }, {
    parameterType: "boolean",
    parameterName: Of.ALLOW_COOKIES,
    location: "sourceURL",
    defaultValue: !1
  }],
  allowedEmbedTypes: [w2.URL]
};
let $$s2 = {
  configType: ol.YOUTUBE,
  urlPatterns: $$i1,
  specialParameters: [{
    parameterType: "boolean",
    parameterName: Of.SHOW_UI,
    location: "queryParam",
    defaultValue: !0
  }, {
    parameterType: "boolean",
    parameterName: Of.AUTOPLAY,
    location: "queryParam",
    defaultValue: !1
  }, {
    parameterType: "boolean",
    parameterName: Of.ALLOW_FULLSCREEN,
    location: "htmlAttribute",
    defaultValue: !1
  }],
  allowedEmbedTypes: [w2.HTML]
};
export const ON = $$a0;
export const SW = $$i1;
export const om = $$s2;