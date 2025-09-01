import { ServiceCategories as _$$e } from "../905/165054";
import { getInitialOptions } from "../figma_app/169182";
import { $D } from "../905/11";
import { O } from "../905/833838";
let o = ["recentsAndSharing", "draftsToMove", "communityHub", "search", "user"];
export function $$l0(e) {
  try {
    if (e.openFile) return e.openFile.teamId || "";
    if ("teamId" in e.selectedView) return e.selectedView.teamId || "";
    if ("abandonedDraftFiles" === e.selectedView.view && e.selectedView.adminPlanType === O.TEAM || "seatRequests" === e.selectedView.view && e.selectedView.adminPlanType === O.TEAM) return e.selectedView.planId;
    if ("folder" === e.selectedView.view) {
      let t = e.selectedView.folderId;
      if (!e.folders[t]) return getInitialOptions().page_load_team_id || "";
      return e.folders[t]?.team_id || "";
    }
    if ((o.includes(e.selectedView.view) || "deletedFiles" === e.selectedView.view || "limitedTeamSharedProjects" === e.selectedView.view || "trashedFolders" === e.selectedView.view || "desktopNewTab" === e.selectedView.view || "resourceHub" === e.selectedView.view) && !e.currentUserOrgId) return e.currentTeamId || "";
  } catch (e) {
    $D(_$$e.GROWTH_PLATFORM, Error(`Error getting team ID from Redux state: ${e.message}`));
  }
  return "";
}
export const Z = $$l0;