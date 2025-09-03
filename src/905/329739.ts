import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { JI, Ho } from "../905/416496";
export function $$s1(e) {
  return "PNG" === e.imageType ? {
    imageType: e.imageType,
    contentsOnly: e.contentsOnly ?? !0,
    useAbsoluteBounds: e.useAbsoluteBounds ?? !1,
    useBicubicSampler: e.useBicubicSampler ?? (!!getFeatureFlags().bicubic_image_sampler && !getFeatureFlags().swap_image_sampling_default_export_setting),
    suffix: e.suffix || "",
    constraint: e.constraint || {
      type: "CONTENT_SCALE",
      value: 1
    },
    colorProfile: e.colorProfile ?? "DOCUMENT"
  } : "JPEG" === e.imageType || "PDF" === e.imageType ? {
    imageType: e.imageType,
    contentsOnly: e.contentsOnly ?? !0,
    useAbsoluteBounds: e.useAbsoluteBounds ?? !1,
    useBicubicSampler: e.useBicubicSampler ?? (!!getFeatureFlags().bicubic_image_sampler && !getFeatureFlags().swap_image_sampling_default_export_setting),
    suffix: e.suffix || "",
    constraint: e.constraint || {
      type: "CONTENT_SCALE",
      value: 1
    },
    colorProfile: e.colorProfile ?? "DOCUMENT",
    quality: e.quality ?? ("PDF" === e.imageType ? JI : Ho)
  } : "SVG" === e.imageType ? {
    imageType: e.imageType,
    contentsOnly: e.contentsOnly ?? !0,
    useAbsoluteBounds: e.useAbsoluteBounds ?? !1,
    useBicubicSampler: e.useBicubicSampler ?? (!!getFeatureFlags().bicubic_image_sampler && !!getFeatureFlags().swap_image_sampling_default_export_setting),
    suffix: e.suffix || "",
    constraint: e.constraint || {
      type: "CONTENT_SCALE",
      value: 1
    },
    svgOutlineText: e.svgOutlineText ?? !0,
    svgIDMode: e.svgIDMode || "IF_NEEDED",
    svgForceStrokeMasks: e.svgForceStrokeMasks ?? !0,
    colorProfile: e.colorProfile ?? "DOCUMENT"
  } : void throwTypeError(e.imageType);
}
export function $$o0(e) {
  return "JPEG" === e.imageType || "PNG" == e.imageType;
}
export const O = $$o0;
export const m = $$s1;