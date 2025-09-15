import { RouteState, captureRouteEvent, withCommunityRoute } from "../figma_app/321395";
let i = class extends RouteState {};
captureRouteEvent(i);
i.displayName = "HomeRoute";
i.path = "/community";
export let $$n0 = withCommunityRoute(i);
export const _ = $$n0;