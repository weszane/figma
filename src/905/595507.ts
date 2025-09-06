import { MM } from "../905/350402";
import { COMMIT, REVERT } from "redux-optimist";
import { NC } from "../905/17179";
import { trackEventAnalytics } from "../905/449184";
import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
let $$l1 = MM("TEAM_ADMIN_DEMOTE_EDITOR_ROLES", (e, {
  editor: t
}, {
  optimistId: i
}) => {
  trackEventAnalytics("Team Editor Demoted", {
    teamId: t.team_id,
    editorId: t.id
  });
  XHR.post(`/api/teams/${t.team_id}/users/${t.id}/revoke_editor`).then(() => {
    e.dispatch({
      type: null,
      optimist: {
        type: COMMIT,
        id: i
      }
    });
  }).catch(() => {
    e.dispatch(_$$s.error("An error occurred while downgrading this user's permissions."));
    e.dispatch({
      type: null,
      optimist: {
        type: REVERT,
        id: i
      }
    });
  });
});
let $$d0 = NC("TEAM_ADMIN_SET_MEMBER_EDU_GRACE_PERIOD");
export const P = $$d0;
export const z = $$l1;