import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { languageCodes } from "../905/816253";
import { Link } from "../905/438674";
import { getFeatureFlags } from "../905/601108";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getInitialOptions, buildUploadUrl } from "../figma_app/169182";
import { selectExperimentConfigHook } from "../figma_app/594947";
import { WAFImage } from "../905/675859";
import { rX, vz, Q5, sJ } from "../9864/183809";
import { renderI18nText, getI18nString } from "../905/303541";
import { showModalHandler } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { UpgradeAction } from "../905/370443";
import { getVisibleTheme } from "../905/640017";
import { useOverlay } from "../905/621515";
import { mp } from "../figma_app/579169";
import { userFlagExistsAtomFamily } from "../figma_app/545877";
import { ModalPriority } from "../figma_app/268271";
import { zo } from "../1250/615231";
import { _l } from "../figma_app/995208";
import { kA, IO } from "../905/962318";
import { EsEsLaunchAnnouncementModal } from "../figma_app/6204";
if (443 == require.j) {}
if (443 == require.j) {}
var C = (e => (e.SPAIN = "spain", e.NON_SPAIN = "non_spain", e))(C || {});
let I = 443 == require.j ? 864e5 : null;
let $$A = () => Date.now() - I;
let S = e => {
  let t = getInitialOptions()?.iso_code;
  let n = getInitialOptions()?.user_data?.signup_locale;
  if (!(null != e && e.getTime() < $$A())) return !1;
  if ("es-es" === n) return !0;
  let a = zo();
  return "latam" !== a && ("spain" === a || !(t && rX.includes(t)) && !!(t && vz.includes(t)));
};
let N = e => {
  let t = getInitialOptions()?.iso_code;
  let n = getInitialOptions()?.user_data?.signup_locale;
  let a = null != e && e.getTime() < $$A();
  let r = "es-es" === n || "ES" === t || navigator.languages.some(e => Q5.includes(e));
  let i = "es-la" === n || t && rX.includes(t) || navigator.languages.some(e => sJ.includes(e));
  return a && r ? "spain" : a && i ? "non_spain" : void 0;
};
function O(e) {
  let t = useDispatch<AppDispatch>();
  let n = getVisibleTheme();
  let r = e.isSpainVariant ? renderI18nText("es_es_announcement.spain.description") : renderI18nText("es_es_announcement.nonspain.description");
  return jsx(_l, {
    isShowing: e.isShowing,
    trackingContextName: "es_es_launch_announcement_spain",
    onClose: e.onClose,
    title: renderI18nText("es_es_announcement.title"),
    description: jsxs(Fragment, {
      children: [r, jsx("br", {}), jsx(Link, {
        href: "https://www.figma.com/figma-ahora-en-espanol/",
        trusted: !0,
        newTab: !0,
        children: renderI18nText("es_es_launch_announcement.learn_more")
      })]
    }),
    primaryCta: {
      label: renderI18nText("es_es_announcement.cta_button"),
      type: "button",
      onClick: () => {
        t(showModalHandler({
          type: kA,
          data: {
            source: IO.ANNOUNCEMENT_MODAL
          }
        }));
      },
      ctaTrackingDescriptor: UpgradeAction.UPDATE_LANGUAGE_SETTINGS
    },
    media: jsx(WAFImage, {
      width: 332,
      height: 404,
      src: buildUploadUrl("dark" === n ? "d5144836652ddb3ef93938b550364428430fbdf2" : "2c6b6c235309104ec7fe7c99d6d85cc3c8a91e8e"),
      alt: getI18nString("es_es_launch_announcement.image_alt_text")
    })
  });
}
let R = userFlagExistsAtomFamily("has_tried_es_es");
export function $$M0() {
  let e = useDispatch<AppDispatch>();
  let t = useAtomWithSubscription(R);
  let n = useAtomWithSubscription(mp);
  let s = "loaded" === n.status;
  let {
    getConfig
  } = selectExperimentConfigHook("exp_i18n_es_es_new_users");
  let {
    getConfig: _getConfig
  } = selectExperimentConfigHook("exp_i18n_es_es_existing_users");
  let {
    show,
    isShowing,
    complete
  } = useOverlay({
    overlay: EsEsLaunchAnnouncementModal,
    priority: ModalPriority.SECONDARY_MODAL,
    experiment: {
      check: () => {
        if (getFeatureFlags().i18n_es_es) return !0;
        let e = getConfig().get("announcement_banner_enabled", !1);
        let t = _getConfig().get("announcement_banner_enabled", !1);
        return e || t;
      },
      predicate: e => e,
      postCheck: (e, t) => !t
    }
  }, [n, t]);
  if (useEffect(() => {
    getInitialOptions().user_data?.locale === languageCodes.ES_ES && "loaded" === t.status && !1 === t.data && e(postUserFlag({
      has_tried_es_es: !0
    }));
  }, [e, t]), useEffect(() => {
    if (!s) return;
    let e = !1;
    e = getFeatureFlags().i18n_es_la_announcement_modal ? S(n.data) : !!N(n.data);
    getInitialOptions().user_data?.locale !== languageCodes.ES_ES && e && show();
  }, [e, show, s, n]), !s) return null;
  let b = N(n.data);
  if (getFeatureFlags().i18n_es_la_announcement_modal) {
    if (!S(n.data)) return null;
  } else if (void 0 === b) return null;
  return jsx(O, {
    isShowing,
    onClose: complete,
    isSpainVariant: !!getFeatureFlags().i18n_es_la || "spain" === b
  });
}
export const A = $$M0;