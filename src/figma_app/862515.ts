import { l as _$$l } from "../905/716947";
import { getFeatureFlags } from "../905/601108";
import { buildUploadUrl } from "../figma_app/169182";
import { t } from "../905/303541";
import { yW } from "../figma_app/644808";
import { Yl } from "../figma_app/10098";
let d = [{
  name: "URL or HTML",
  type: "embed",
  initial_url: "",
  thumbnail_url: buildUploadUrl("50bbd90a0f648e142c7b43ad02a055b82c822754"),
  preview_url: buildUploadUrl("cb0d72db7dc60561469703a5c536714f0c435da4"),
  width: 600,
  height: 400,
  background_color: "--var(--color-background-secondary)",
  description: ["url", "html", "iframe", "embed"]
}, {
  name: "YouTube",
  type: "embed",
  initial_url: "https://www.youtube-nocookie.com/",
  thumbnail_url: buildUploadUrl("d57af0b27df23ba99b7f30f0003245cdd31db4a5"),
  preview_url: buildUploadUrl("18ee4292c3c2b58c0c1f2878a3b151c1dba39b98"),
  width: 600,
  height: 400,
  background_color: "--var(--color-background-secondary)",
  description: ["embed", "video"]
}, {
  name: "Google Maps",
  type: "embed",
  initial_url: "https://maps.google.com/?output=embed&q=San+Francisco+City+Hall",
  thumbnail_url: buildUploadUrl("a32eefa820b3b3bfa8d8963b955db10cf36e7c50"),
  preview_url: buildUploadUrl("574575e64fb6517dd8d4e44a65c333025c7ed9c5"),
  width: 600,
  height: 400,
  background_color: "--var(--color-background-secondary)",
  description: ["embed"]
}, {
  name: "Typeform",
  type: "embed",
  initial_url: "https://form.typeform.com/to/",
  thumbnail_url: buildUploadUrl("8fc29cb75e253768301658ba0fc8f07a679c395b"),
  preview_url: buildUploadUrl("96100601023fa7dde4f4b108c0274ea932a712b1"),
  width: 600,
  height: 400,
  background_color: "--var(--color-background-secondary)",
  description: ["embed", "form", "survey", "typeform"],
  feature_flag: "sites_generic_html_embeds"
}, {
  name: "LottieFiles",
  type: "embed",
  initial_url: "https://lottie.host/",
  thumbnail_url: buildUploadUrl("d63d72a276f6ad1cbc54aa31f69161f8958c84c1"),
  preview_url: buildUploadUrl("58e6a6fd3457a4c43d8fb5c99eda1131c34b0d90"),
  width: 600,
  height: 400,
  background_color: "--var(--color-background-secondary)",
  description: ["embed", "animation", "lottie"],
  feature_flag: "sites_generic_html_embeds"
}, {
  name: "Google Forms",
  type: "embed",
  initial_url: "https://docs.google.com/forms/",
  thumbnail_url: buildUploadUrl("47610ebfc5dd94a41c9397de4008853f96a9b4e6"),
  preview_url: buildUploadUrl("93bcecd942bdf83e81fb292099deb75d21f140fc"),
  width: 600,
  height: 400,
  background_color: "--var(--color-background-secondary)",
  description: ["embed", "form", "survey", "google", "forms"],
  feature_flag: "sites_generic_html_embeds"
}, {
  name: "Vimeo",
  type: "embed",
  initial_url: "https://vimeo.com/",
  thumbnail_url: buildUploadUrl("32b41f1ec874ee7b95901b7568a5de50c871a8bd"),
  preview_url: buildUploadUrl("6e0792c2b2783235c59d107ac118769fa2b6ac49"),
  width: 600,
  height: 400,
  background_color: "--var(--color-background-secondary)",
  description: ["embed", "vimeo", "video"],
  feature_flag: "sites_generic_html_embeds"
}];
export function $$c1() {
  return d.filter(e => !e.feature_flag || getFeatureFlags()[e.feature_flag]);
}
export function $$u0() {
  return $$c1().length > 0 ? {
    name: t("design_systems.assets_panel.site_embeds"),
    libraryKey: _$$l(Yl),
    thumbnailUrl: buildUploadUrl("b325c884bd37bf62ccd3776e84158fc1e3bc0def"),
    thumbnailShouldCover: !1,
    numResponsiveSets: 0,
    type: yW.SITE,
    libraryType: "team"
  } : null;
}
export const V = $$u0;
export const u = $$c1;