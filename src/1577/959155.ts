import { useSelector } from "react-redux";
import { V0 } from "../figma_app/858344";
let o = 443 == require.j ? ["orgAdminSettings", "billingGroupDashboard", "orgDomainManagement", "orgIdpManagement", "abandonedDraftFiles", "teamAdminConsole", "seatRequests", "licenseGroup"] : null;
export function $$r0() {
  let e = useSelector(e => e.selectedView);
  return !!o.some(t => t === e.view) || "workspace" === e.view && e.subView === V0.ADMIN;
}
export const n = $$r0;
