import { throwTypeError } from "../figma_app/465776";
import { getFeatureFlags } from "../905/601108";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
export function $$s1(e) {
  if ($$o0(e)) return !0;
  switch (e) {
    case PrimaryWorkflowEnum.MODULE:
      return !!getFeatureFlags().dse_module_publish;
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.STYLE:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
    case PrimaryWorkflowEnum.VARIABLE_OVERRIDE:
      return !0;
    case PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE:
      return !!getFeatureFlags().cooper;
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return !!getFeatureFlags().cheddar;
    case PrimaryWorkflowEnum.CODE_COMPONENT:
    case PrimaryWorkflowEnum.CODE_LIBRARY:
    case PrimaryWorkflowEnum.CODE_FILE:
      return !!getFeatureFlags().sts_code;
    default:
      throwTypeError(e, "Unhandled asset type");
  }
}
export function $$o0(e) {
  switch (e) {
    case PrimaryWorkflowEnum.RESPONSIVE_SET:
      return !!getFeatureFlags().ds_pubplat_sts;
    case PrimaryWorkflowEnum.MODULE:
      return !!getFeatureFlags().dse_module_publish;
    case PrimaryWorkflowEnum.COMPONENT:
    case PrimaryWorkflowEnum.STATE_GROUP:
    case PrimaryWorkflowEnum.STYLE:
    case PrimaryWorkflowEnum.VARIABLE:
    case PrimaryWorkflowEnum.VARIABLE_SET:
      return !0;
    case PrimaryWorkflowEnum.VARIABLE_OVERRIDE:
      return !1;
    case PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE:
      return !!getFeatureFlags().cooper;
    case PrimaryWorkflowEnum.CODE_LIBRARY:
    case PrimaryWorkflowEnum.CODE_FILE:
      return !1;
    case PrimaryWorkflowEnum.CODE_COMPONENT:
      return !!(getFeatureFlags().sts_code && getFeatureFlags().ds_pubplat_sts_code);
    case PrimaryWorkflowEnum.MANAGED_STRING:
      return !1;
    default:
      throwTypeError(e, "Unhandled asset type");
  }
}
export const O = $$o0;
export const e = $$s1;
