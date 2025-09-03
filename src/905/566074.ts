import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { PW } from "../figma_app/633080";
export function $$s1(e) {
  if ($$o0(e)) return !0;
  switch (e) {
    case PW.MODULE:
      return !!getFeatureFlags().dse_module_publish;
    case PW.RESPONSIVE_SET:
    case PW.COMPONENT:
    case PW.STATE_GROUP:
    case PW.STYLE:
    case PW.VARIABLE:
    case PW.VARIABLE_SET:
    case PW.VARIABLE_OVERRIDE:
      return !0;
    case PW.CONSTRAINED_TEMPLATE:
      return !!getFeatureFlags().cooper;
    case PW.MANAGED_STRING:
      return !!getFeatureFlags().cheddar;
    case PW.CODE_COMPONENT:
    case PW.CODE_LIBRARY:
    case PW.CODE_FILE:
      return !!getFeatureFlags().sts_code;
    default:
      throwTypeError(e, "Unhandled asset type");
  }
}
export function $$o0(e) {
  switch (e) {
    case PW.RESPONSIVE_SET:
      return !!getFeatureFlags().ds_pubplat_sts;
    case PW.MODULE:
      return !!getFeatureFlags().dse_module_publish;
    case PW.COMPONENT:
    case PW.STATE_GROUP:
    case PW.STYLE:
    case PW.VARIABLE:
    case PW.VARIABLE_SET:
      return !0;
    case PW.VARIABLE_OVERRIDE:
      return !1;
    case PW.CONSTRAINED_TEMPLATE:
      return !!getFeatureFlags().cooper;
    case PW.CODE_LIBRARY:
    case PW.CODE_FILE:
      return !1;
    case PW.CODE_COMPONENT:
      return !!(getFeatureFlags().sts_code && getFeatureFlags().ds_pubplat_sts_code);
    case PW.MANAGED_STRING:
      return !1;
    default:
      throwTypeError(e, "Unhandled asset type");
  }
}
export const O = $$o0;
export const e = $$s1;