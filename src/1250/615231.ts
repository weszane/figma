import { jsx, Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { wA } from "../vendor/514228";
import { languageCodes } from "../905/816253";
import { getFeatureFlags } from "../905/601108";
import { md } from "../figma_app/27355";
import { getInitialOptions, buildUploadUrl } from "../figma_app/169182";
import { oW } from "../905/675859";
import { sJ, Q5, rX } from "../9864/183809";
import { tx, t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { c as _$$c } from "../905/370443";
import { DP } from "../905/640017";
import { e as _$$e } from "../905/621515";
import { mp } from "../figma_app/579169";
import { r1 } from "../figma_app/545877";
import { N as _$$N } from "../figma_app/268271";
import { _l } from "../figma_app/995208";
import { kA, IO } from "../905/962318";
import { FJT } from "../figma_app/6204";
if (443 == require.j) {}
let j = 443 == require.j ? 864e5 : null;
let k = () => Date.now() - j;
export function $$E1() {
  let e = new Set(sJ);
  let t = new Set(Q5);
  for (let n of navigator.languages) {
    if (e.has(n)) return "latam";
    if (t.has(n)) return "spain";
  }
}
var C = (e => (e.HAS_SEEN_ES_ES_ANNOUNCEMENT = "has_seen_es_es_announcement", e.HAS_NOT_SEEN_ES_ES_ANNOUNCEMENT = "has_not_seen_es_es_announcement", e))(C || {});
let I = (e, t, n) => {
  let a = getInitialOptions()?.iso_code;
  let r = getInitialOptions()?.user_data?.signup_locale;
  if (!(!t && null != e && e.getTime() < k())) return;
  if ("es-la" === r) return n ? "has_seen_es_es_announcement" : "has_not_seen_es_es_announcement";
  let i = $$E1();
  return "latam" === i ? n ? "has_seen_es_es_announcement" : "has_not_seen_es_es_announcement" : "spain" === i ? void 0 : a && rX.includes(a) ? n ? "has_seen_es_es_announcement" : "has_not_seen_es_es_announcement" : void 0;
};
function A(e) {
  let t = wA();
  let n = DP();
  let r = e.hasSeenEsEsModal ? tx("es_la_announcement.seen_es_es_description") : tx("es_la_announcement.not_seen_es_es_description");
  return jsx(_l, {
    isShowing: e.isShowing,
    trackingContextName: "es_la_launch_announcement",
    onClose: e.onClose,
    title: jsx(Fragment, {
      children: tx("es_la_announcement.title")
    }),
    description: r,
    primaryCta: {
      label: tx("es_la_announcement.cta_button"),
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
      src: buildUploadUrl("dark" === n ? "d0bae5ffbf320d1ec97034348702b49fd549969e" : "28a10c6e6bb3668d3cc281fda53dd7a6f7f27ad8"),
      alt: _$$t("es_la_launch_announcement.image_alt_text")
    })
  });
}
let S = r1("has_tried_es_la");
let N = r1("seen_es_es_launch_announcement");
export function $$O0() {
  let e = wA();
  let t = md(S);
  let n = md(N);
  let c = md(mp);
  let _ = "loaded" === t.status && "loaded" === c.status && "loaded" === n.status;
  let {
    show,
    isShowing,
    complete
  } = _$$e({
    overlay: FJT,
    priority: _$$N.SECONDARY_MODAL
  }, [c, t, n]);
  if (useEffect(() => {
    getInitialOptions().user_data?.locale === languageCodes.ES_LA && "loaded" === t.status && !1 === t.data && e(_$$b({
      has_tried_es_la: !0
    }));
  }, [e, t]), useEffect(() => {
    _ && getFeatureFlags().i18n_es_la_announcement_modal && getInitialOptions().user_data?.locale !== languageCodes.ES_LA && I(c.data, t.data, n.data) && show();
  }, [e, show, _, t, c, n]), !_ || !getFeatureFlags().i18n_es_la_announcement_modal) return null;
  let f = I(c.data, t.data, n.data);
  return void 0 === f ? null : jsx(A, {
    isShowing,
    onClose: complete,
    hasSeenEsEsModal: "has_seen_es_es_announcement" === f
  });
}
export const Ay = $$O0;
export const zo = $$E1;