import { createOptimistAction } from "../905/350402";
import { COMMIT, REVERT } from "redux-optimist";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { sendWithRetry } from "../905/910117";
import { FlashActions } from "../905/573154";
let $$l1 = createOptimistAction("TEAM_ADMIN_DEMOTE_EDITOR_ROLES", (e, {
  editor: t
}, {
  optimistId: i
}) => {
  trackEventAnalytics("Team Editor Demoted", {
    teamId: t.team_id,
    editorId: t.id
  });
  sendWithRetry.post(`/api/teams/${t.team_id}/users/${t.id}/revoke_editor`).then(() => {
    e.dispatch({
      type: null,
      optimist: {
        type: COMMIT,
        id: i
      }
    });
  }).catch(() => {
    e.dispatch(FlashActions.error("An error occurred while downgrading this user's permissions."));
    e.dispatch({
      type: null,
      optimist: {
        type: REVERT,
        id: i
      }
    });
  });
});
let $$d0 = createActionCreator("TEAM_ADMIN_SET_MEMBER_EDU_GRACE_PERIOD");
export const P = $$d0;
export const z = $$l1;
