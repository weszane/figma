import { L } from "../905/270963";
export function $$r0(e) {
  if (!window.opener) {
    console.error("No parent window found! Did you open this window manually?");
    return;
  }
  L?.addAction("postMessageToPresenterView", {
    type: e.type
  });
  window.opener.postMessage(e, "*");
}
var a = (e => (e[e.LOADING = 1] = "LOADING", e[e.PRESENTER_VIEW_CAN_DRIVE = 2] = "PRESENTER_VIEW_CAN_DRIVE", e[e.POPOUT_VIEWER_CAN_DRIVE = 3] = "POPOUT_VIEWER_CAN_DRIVE", e[e.PRESENTER_VIEW_SPOTLIGHT = 4] = "PRESENTER_VIEW_SPOTLIGHT", e))(a || {});
export const oR = $$r0;