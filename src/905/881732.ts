import { removeUUID } from "../905/958284";
import { FeedPostDetailZoomPanNudge } from "../figma_app/6204";
import { BaseRule } from "../905/92222";
let $$s0 = "FeedPostDetailsModal";
let $$o1 = new BaseRule("DenyInTeamFeed", "Don't show non team feed overlays when the viewing the team feed post details modal", (e, t) => e.uiState.modalShownType !== $$s0 || removeUUID(t.id) === FeedPostDetailZoomPanNudge.id);
export const E = $$s0;
export const h = $$o1;