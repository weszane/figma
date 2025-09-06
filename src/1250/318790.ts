import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "../vendor/514228";
import { languageCodes } from "../905/816253";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getInitialOptions, buildUploadUrl } from "../figma_app/169182";
import { I7 } from "../figma_app/594947";
import { oW } from "../905/675859";
import { B1, Vb, EK, Kz } from "../9864/183809";
import { renderI18nText, getI18nString } from "../905/303541";
import { to } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { c as _$$c } from "../905/370443";
import { DP } from "../905/640017";
import { e as _$$e } from "../905/621515";
import { mp } from "../figma_app/579169";
import { r1 } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { _l } from "../figma_app/995208";
import { kA, IO } from "../905/962318";
import { gik } from "../figma_app/6204";
if (443 == require.j) {}
var k = (e => (e.BRAZILIAN = "brazilian", e.NON_BRAZILIAN = "non_brazilian", e))(k || {});
let E = 443 == require.j ? 864e5 : null;
let C = () => Date.now() - E;
let I = e => {
  let t = getInitialOptions()?.iso_code;
  let n = getInitialOptions()?.user_data?.signup_locale;
  let a = null != e && e.getTime() < C();
  let r = [...B1, ...Vb];
  let i = [...EK, ...Kz];
  let o = "pt-br" === n || t && i.includes(t) || navigator.languages.some(e => r.includes(e));
  if (a && o) return t && EK.includes(t) || navigator.languages.some(e => B1.includes(e)) ? "brazilian" : "non_brazilian";
};
function $$A(e) {
  let t = useDispatch();
  let n = DP();
  let r = e.isBrazilianVariant ? renderI18nText("pt_br_announcement.description") : renderI18nText("pt_br_announcement.non_brazilian.description");
  return jsx(_l, {
    isShowing: e.isShowing,
    trackingContextName: "pt_br_launch_announcement",
    onClose: e.onClose,
    title: renderI18nText("pt_br_announcement.title"),
    description: r,
    primaryCta: {
      label: renderI18nText("pt_br_announcement.cta_button"),
      type: "button",
      onClick: () => {
        t(to({
          type: kA,
          data: {
            source: IO.ANNOUNCEMENT_MODAL
          }
        }));
      },
      ctaTrackingDescriptor: _$$c.UPDATE_LANGUAGE_SETTINGS
    },
    media: jsx(oW, {
      width: 332,
      height: 404,
      src: buildUploadUrl("dark" === n ? "1f8cff5121905a8bd088cf9dc7759e22322a90ef" : "e9552341c3ffb2f3090e2cd95e29faaddf7b8397"),
      alt: getI18nString("pt_br_launch_announcement.image_alt_text")
    })
  });
}
let S = r1("has_tried_pt_br");
export function $$N0() {
  let e = useDispatch();
  let t = useAtomWithSubscription(S);
  let n = useAtomWithSubscription(mp);
  let _ = "loaded" === t.status && "loaded" === n.status;
  let {
    getConfig
  } = I7("exp_i18n_pt_br_new_users");
  let {
    getConfig: _getConfig
  } = I7("exp_i18n_pt_br_existing_users");
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: gik,
    priority: N.SECONDARY_MODAL,
    experiment: {
      check: () => {
        if (getFeatureFlags().i18n_pt_br) return !0;
        let e = getConfig().get("announcement_banner_enabled", !1);
        let t = _getConfig().get("announcement_banner_enabled", !1);
        return e || t;
      },
      predicate: e => e,
      postCheck: () => !0
    }
  }, [n, t]);
  if (useEffect(() => {
    getInitialOptions().user_data?.locale === languageCodes.PT_BR && "loaded" === t.status && !1 === t.data && e(_$$b({
      has_tried_pt_br: !0
    }));
  }, [e, t]), useEffect(() => {
    _ && getInitialOptions().user_data?.locale !== languageCodes.PT_BR && I(n.data) && show();
  }, [e, show, _, t, n]), !_) return null;
  let y = I(n.data);
  return void 0 === y ? null : jsx($$A, {
    isShowing,
    onClose: complete,
    isBrazilianVariant: "brazilian" === y
  });
}
export const A = $$N0;