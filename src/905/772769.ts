import { xf } from "../figma_app/416935";
import { gU } from "../figma_app/930338";
import { A } from "../905/17894";
import { wC } from "../905/448440";
import { Yp } from "../figma_app/740025";
let $$l1 = 100;
let $$d2 = {
  displayName: "SupportContactField",
  fetchInitialValue: ({
    existingResourceContent: e,
    priceField: t,
    valueRequired: i
  }) => t.currentValue === A ? A : e && (e.support_contact ?? void 0) || (i ? t.deps.user.email : void 0),
  validate: ({
    priceField: e,
    valueRequired: t
  }, i) => {
    let a = Yp(i || null);
    if ($$c0(t, e) && 0 === a.length) return [{
      key: "SUPPORT_CONTACT_MISSING",
      data: {}
    }];
    let s = [];
    a.length > $$l1 && s.push({
      key: "SUPPORT_CONTACT_TOO_LONG",
      data: {
        sanitizedSupportContact: a,
        maxLength: $$l1
      }
    });
    !(a.length > 0) || xf(a) || gU(a) || s.push({
      key: "INVALID_SUPPORT_CONTACT",
      data: {
        sanitizedSupportContact: a
      }
    });
    return s;
  },
  canSet: () => !0
};
export function $$c0(e = !1, t) {
  return e || wC(t);
}
export const Bs = $$c0;
export const Tm = $$l1;
export const aS = $$d2;