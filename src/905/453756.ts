import { selectCurrentUser } from "../905/372672"
import { getFeatureFlags } from "../905/601108"
import { isIntegrationContext } from "../figma_app/469876"
import { getIsAnyMobile } from "../figma_app/778880"

export function $$o0() {
  let e = selectCurrentUser()
  return isIntegrationContext() ? !!getFeatureFlags().figjam_ui3_toolbelt_fullscreen_integrations : getIsAnyMobile() ? !!getFeatureFlags().figjam_ui3_toolbelt_mobile_device : e ? !!getFeatureFlags().figjam_ui3_toolbelt_default : !!getFeatureFlags().figjam_ui3_toolbelt_logged_out
}
export const L = $$o0
