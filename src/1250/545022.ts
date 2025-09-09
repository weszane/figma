import { jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { languageCodes } from "../905/816253";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getInitialOptions, buildUploadUrl } from "../figma_app/169182";
import { I7 } from "../figma_app/594947";
import { oW } from "../905/675859";
import { QS, Tq } from "../9864/183809";
import { renderI18nText, getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { c as _$$c } from "../905/370443";
import { DP } from "../905/640017";
import { e as _$$e } from "../905/621515";
import { mp } from "../figma_app/579169";
import { r1 } from "../figma_app/545877";
import { N } from "../figma_app/268271";
import { _l } from "../figma_app/995208";
import { kA, IO } from "../905/962318";
import { Tw6 } from "../figma_app/6204";
if (443 == require.j) { }
let k = 443 == require.j ? 864e5 : null;
let E = () => Date.now() - k;
let C = (e, t) => {
  let n = getInitialOptions()?.iso_code;
  let a = getInitialOptions()?.user_data?.signup_locale;
  let r = !t && null != e && e.getTime() < E();
  let i = "ko-kr" === a || n && QS.includes(n) || navigator.languages.some(e => Tq.includes(e));
  return r && i;
};
function I(e) {
  let t = useDispatch();
  let n = DP();
  return jsx(_l, {
    isShowing: e.isShowing,
    trackingContextName: "ko_kr_launch_announcement",
    onClose: e.onClose,
    title: renderI18nText("ko_kr_announcement.title"),
    description: renderI18nText("ko_kr_announcement.description"),
    primaryCta: {
      label: renderI18nText("ko_kr_announcement.cta_button"),
      type: "button",
      onClick: () => {
        t(showModalHandler({
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
      src: buildUploadUrl("dark" === n ? "18dcbb2ade042dcce59156457f26cf74bff4c14a" : "705f5bf3c6cdb84a903c3a2fcd7e70de3294fc96"),
      alt: getI18nString("ko_kr_launch_announcement.image_alt_text")
    })
  });
}
let $$A = r1("has_tried_ko_kr");
export function $$S0() {
  let e = useDispatch();
  let t = useAtomWithSubscription($$A);
  let n = useAtomWithSubscription(mp);
  let _ = "loaded" === t.status && "loaded" === n.status;
  let {
    getConfig
  } = I7("exp_i18n_ko_kr_new_users");
  let {
    getConfig: _getConfig
  } = I7("exp_i18n_ko_kr_existing_users");
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: Tw6,
    priority: N.SECONDARY_MODAL,
    experiment: {
      check: () => {
        if (getFeatureFlags().i18n_ko_kr) return !0;
        let e = getConfig().get("announcement_banner_enabled", !1);
        let t = _getConfig().get("announcement_banner_enabled", !1);
        return e || t;
      },
      predicate: e => e,
      postCheck: () => !0
    }
  }, [n, t]);
  return (useEffect(() => {
    getInitialOptions().user_data?.locale === languageCodes.KO_KR && "loaded" === t.status && !1 === t.data && e(_$$b({
      has_tried_ko_kr: !0
    }));
  }, [e, t]), useEffect(() => {
    _ && getInitialOptions().user_data?.locale !== languageCodes.KO_KR && C(n.data, t.data) && show();
  }, [e, show, _, t, n]), _) ? jsx(I, {
    isShowing,
    onClose: complete
  }) : null;
}
export const A = $$S0;
