import { jsx } from "react/jsx-runtime";
import { FONT_INSTALLER_HELP_URL, ADD_FONT_HELP_URL } from "../905/946258";
import { getFeatureFlags } from "../905/601108";
import { generateRecordingKey } from "../figma_app/878298";
import { TrackedLink } from "../905/160095";
import { renderI18nText } from "../905/303541";
import { UpgradeAction } from "../905/370443";
import { Qr, Lz } from "../905/690539";
import { sK } from "../905/794875";
export function $$p1({
  hasCurrentOrg: e,
  showFontsUpsell: t,
  recordingKey: i
}) {
  let r = [Qr.ALL_FONTS, "divider", Qr.DOCUMENT_FONTS, ...(e || t ? [Qr.SHARED_FONTS] : []), "divider", Qr.POPULAR_FONTS, Qr.GOOGLE_FONTS, ...(getFeatureFlags().ce_tv_hide_summer_silo ? [] : [Qr.SUMMER_NEW]), Qr.VARIABLE_FONTS, "divider", Qr.USER_INSTALLED_FONTS];
  let o = [];
  r.forEach((e, t) => {
    let r = `font-set-option-${e}-${t}`;
    "divider" !== e ? o.push(jsx(Lz, {
      value: e,
      recordingKey: generateRecordingKey(i, e)
    }, r)) : o.length > 0 && o[o.length - 1].key && o.push(jsx(sK, {}, r));
  });
  return o;
}
export function $$m0() {
  return renderI18nText("fullscreen.font_settings.troubleshoot_agent_fonts.text", {
    link: jsx(TrackedLink, {
      href: FONT_INSTALLER_HELP_URL,
      newTab: !0,
      trusted: !1,
      trackingProperties: {
        trackingDescriptor: UpgradeAction.FIGMA_AGENT_TROUBLESHOOT_LEARN_MORE
      },
      children: renderI18nText("fullscreen.font_settings.troubleshoot_agent_fonts.link")
    })
  });
}
export function $$h2() {
  return renderI18nText("fullscreen.properties_panel.font_picker.install_agent.text", {
    link: jsx(TrackedLink, {
      href: ADD_FONT_HELP_URL,
      newTab: !0,
      trusted: !1,
      trackingProperties: {
        trackingDescriptor: UpgradeAction.FIGMA_AGENT_INSTALL_LEARN_MORE
      },
      children: renderI18nText("fullscreen.properties_panel.font_picker.install_agent.link")
    })
  });
}
export const K1 = $$m0;
export const Uh = $$p1;
export const YQ = $$h2;