import { jsx } from "react/jsx-runtime";
import { FOrganizationLevelType } from "../figma_app/191312";
import { registerModal } from "../905/102752";
import { R9 } from "../905/855830";
export let $$o0 = "RequestProUpgradeModal";
registerModal(function (e) {
  return jsx(R9, {
    ...e,
    planType: FOrganizationLevelType.TEAM
  });
}, $$o0);
export const E1 = $$o0;