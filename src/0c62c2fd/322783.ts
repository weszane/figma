import { jsx, jsxs } from "react/jsx-runtime";
import { EJ } from "../figma_app/930338";
import { t, tx } from "../905/303541";
import { fu } from "../figma_app/831799";
import { Dd } from "../905/519092";
export function $$l0(e) {
  let {
    team,
    editors
  } = e;
  let {
    id
  } = t;
  let d = editors.length;
  let c = editors.filter(e => e.id).map(e => e.id).join();
  let u = t("team_view.downgrade_editor_modal.downgrade_user_team_permissions", {
    username: EJ(e.editors[0].name || e.editors[0].email, 20)
  });
  let m = t("team_view.downgrade_editor_modal.downgrade_multiple_users_team_permissions", {
    numSelectedUsers: d
  });
  return jsx(fu, {
    name: "Team Admin Downgrade Editors Modal",
    properties: {
      editorCount: d,
      editorIds: c,
      teamId: id
    },
    children: jsx(Dd, {
      title: d > 1 ? m : u,
      confirmText: t("team_view.downgrade_editor_modal.downgrade"),
      onConfirm: e.onConfirm,
      children: jsxs("p", {
        children: [d > 1 && t("team_view.downgrade_editor_modal.are_you_sure_you_want_to_downgrade", {
          numSelectedUsers: d
        }), tx("team_view.downgrade_editor_modal.downgrading_their_team_permission_will_change_all_permissions_to_can_view")]
      })
    })
  });
}
export const ConfirmDowngradeEditorsModal = $$l0;