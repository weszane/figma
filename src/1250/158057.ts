import { useState } from "react";
import { getFeatureFlags } from "../905/601108";
import { buildUploadUrl } from "../figma_app/169182";
import { getI18nString } from "../905/303541";
var $$s0 = (e => (e.NPM = "npm", e.SNIPPET = "snippet", e.BOOKMARKLET = "bookmarklet", e))($$s0 || {});
var $$l1 = (e => (e.CENTERED = "centered", e.RIGHT_ALIGNED = "rightAligned", e))($$l1 || {});
let d = {
  installMethod: "snippet",
  thumbnailUrls: {
    dark: buildUploadUrl("c47c0c6427db0d61706853c8594ff403c0030f4c"),
    light: buildUploadUrl("c47c0c6427db0d61706853c8594ff403c0030f4c")
  },
  thumbnailAlignment: "centered",
  renderTitle: () => getI18nString("dev_handoff.codebase_suggestions.snippet"),
  renderDescription: () => getI18nString("dev_handoff.codebase_suggestions.add_a_script_tag_to_your_application_to_automatically_collect_components")
};
let c = {
  installMethod: "npm",
  thumbnailUrls: {
    dark: buildUploadUrl("3cac39c8b1168bc9061165d5604e55ee317119f0"),
    light: buildUploadUrl("3cac39c8b1168bc9061165d5604e55ee317119f0")
  },
  thumbnailAlignment: "centered",
  renderTitle: () => getI18nString("dev_handoff.codebase_suggestions.npm"),
  renderDescription: () => getI18nString("dev_handoff.codebase_suggestions.install_an_npm_package_that_scans_your_local_dev_environment")
};
let _ = {
  installMethod: "bookmarklet",
  thumbnailUrls: {
    dark: buildUploadUrl("9cd48a1a4058b455566d18691ef648e7875d0cbb"),
    light: buildUploadUrl("9cd48a1a4058b455566d18691ef648e7875d0cbb")
  },
  thumbnailAlignment: "rightAligned",
  renderTitle: () => getI18nString("dev_handoff.codebase_suggestions.bookmarklet"),
  renderDescription: () => getI18nString("dev_handoff.codebase_suggestions.add_a_bookmarklet_to_your_browser_bar_to_collect_components")
};
export function $$u2(e = !1) {
  let t = function () {
    let e = [];
    getFeatureFlags().dt_ccv2_setup_snippet && e.push(d);
    getFeatureFlags().dt_ccv2_setup_npm && e.push(c);
    getFeatureFlags().dt_ccv2_setup_bookmarklet && e.push(_);
    return e;
  }();
  let n = e ? t[0]?.installMethod ?? null : null;
  let [i, o] = useState(n);
  let s = t.find(e => e.installMethod === i);
  return {
    setInstallMethod: o,
    availableInstallMethods: t,
    installMethod: s ?? null
  };
}
export const Tr = $$s0;
export const Y7 = $$l1;
export const gK = $$u2;