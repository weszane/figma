import { XHR } from "../905/910117";
import { t as _$$t } from "../905/303541";
export function $$a0(e, t, i, a, s) {
  return e && t ? function(e, t, i) {
    let r = null !== window.location.hostname.match(/admin\./) ? "/api/admin/tax/validate_vat" : "/api/tax/validate_vat";
    return XHR.post(r, {
      vat_gst_id: e,
      country_code: t,
      region: i
    });
  }(e, t, s).then(e => e.data.meta.valid ? (i(), !0) : (a(_$$t(e.data.i18n.id)), !1)).catch(e => (a(e.data && e.data.message || _$$t("tax.vat.vat_gst_validation_failed")), !1)) : (i(), Promise.resolve(!0));
}
export const V = $$a0; 
