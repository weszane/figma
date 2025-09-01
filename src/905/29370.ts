import { jsx } from "react/jsx-runtime";
import { Component } from "react";
import { tx, t as _$$t } from "../905/303541";
import { qK } from "../905/102752";
import { yX } from "../figma_app/918700";
import { Vq } from "../figma_app/639088";
export let $$d0 = "team-folder-move-confirm-modal";
qK($$d0, e => jsx(c, {
  ...e
}));
class c extends Component {
  render() {
    let e = this.props.modalShown;
    let t = e.data.folder;
    let i = this.props.teams[t.teamId];
    let r = e.data.destinationTeam;
    return jsx(yX, {
      content: tx("file_browser.team_folder_move.content", {
        folderName: jsx("span", {
          className: Vq,
          children: t.path
        }),
        destinationTeamName: jsx("span", {
          className: Vq,
          children: r.name
        }),
        currentTeamName: jsx("span", {
          className: Vq,
          children: i.name
        })
      }),
      confirmText: _$$t("file_browser.team_folder_move.confirm"),
      confirmationTitle: _$$t("file_browser.team_folder_move.confirmation_modal_title"),
      onConfirm: e.data.onConfirm,
      ...this.props
    });
  }
}
c.displayName = "TeamFolderMoveConfirmModal";
export const o = $$d0;