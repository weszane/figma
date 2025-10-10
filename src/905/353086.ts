import { jsxs, jsx } from "react/jsx-runtime";
import { ImageProviderType, ImageModelType, ImageSourceType } from "../905/585727";
import { SelectGroupLabel, SelectSeparator, SelectContainer, SelectOptionReset } from "../905/493196";
import { HiddenLabel } from "../905/270045";
import { getFeatureFlags } from "../905/601108";
import { isLlamaEnabledForOrg } from "../figma_app/459490";
import { getI18nString, renderI18nText } from "../905/303541";
import { useCurrentUserOrg } from "../905/845253";
import { JT } from "../figma_app/632248";
export function $$p0(e, t) {
  switch (e) {
    case JT.EDIT_IMAGE:
      return function (e) {
        let t = [];
        getFeatureFlags().aip_edit_image_model_picker && (isLlamaEnabledForOrg(e) || t.push({
          label: getI18nString("image_ai.model_type.gpt_image_1"),
          value: ImageProviderType.OPENAI_GPT_IMAGE_1
        }), t.push({
          label: getI18nString("image_ai.model_type.gemini_2_0_flash_preview_image_generation"),
          value: ImageProviderType.GOOGLE_GEMINI_2_0_FLASH_PREVIEW_IMAGE_GENERATION
        }));
        return t;
      }(t);
    case JT.GENERATE_IMAGE:
      return function (e) {
        let t = [];
        isLlamaEnabledForOrg(e) || t.push({
          label: getI18nString("image_ai.model_type.gpt_image_1"),
          value: ImageModelType.GPT_4O_IMAGE
        });
        t.push({
          label: getI18nString("image_ai.model_type.imagen_3"),
          value: ImageModelType.IMAGEN_3
        });
        t.push({
          label: getI18nString("image_ai.model_type.titan_v2"),
          value: ImageModelType.TITAN_V2
        });
        return t;
      }(t);
    case JT.IMAGE_FILL:
      return function (e) {
        let t = [];
        isLlamaEnabledForOrg(e) || t.push({
          label: getI18nString("image_ai.model_type.gpt_image_1"),
          value: ImageSourceType.GPT_4O_IMAGE
        });
        t.push({
          label: getI18nString("image_ai.model_type.imagen_3"),
          value: ImageSourceType.IMAGEN_3
        });
        t.push({
          label: getI18nString("image_ai.model_type.titan_v2"),
          value: ImageSourceType.TITAN_V2
        });
        t.push({
          label: getI18nString("image_ai.model_type.unsplash"),
          value: ImageSourceType.UNSPLASH
        });
        return t;
      }(t);
  }
}
export function $$m1({
  modelType: e,
  setModelType: t,
  action: i
}) {
  let r = $$p0(i, useCurrentUserOrg());
  if (!r[0]) return null;
  let o = e ?? r[0].value;
  return jsxs(SelectGroupLabel, {
    value: o,
    onChange: e => t(e),
    children: [jsx(SelectSeparator, {
      label: jsx(HiddenLabel, {
        children: renderI18nText("image_ai.model_type")
      })
    }), jsxs(SelectContainer, {
      children: [jsx("div", {
        className: "xclx6tv x17akokd x1qxcl5b x1betce5 xno9bf3 x7ey041 xa1e1dt",
        children: renderI18nText("image_ai.model_type")
      }), r.map(e => jsx(SelectOptionReset, {
        value: e.value,
        children: e.label
      }, e.value))]
    })]
  });
}
export const O = $$p0;
export const n = $$m1;