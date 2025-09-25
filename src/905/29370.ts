import { Component } from 'react'
import { jsx } from 'react/jsx-runtime'
import { registerLegacyModal } from '../905/102752'
import { getI18nString, renderI18nText } from '../905/303541'
import { Vq } from '../figma_app/639088'
import { ConfirmationModal2 } from '../figma_app/918700'

export let $$d0 = 'team-folder-move-confirm-modal'
registerLegacyModal($$d0, e => jsx(c, {
  ...e,
}))
class c extends Component {
  render() {
    let e = this.props.modalShown
    let t = e.data.folder
    let i = this.props.teams[t.teamId]
    let r = e.data.destinationTeam
    return jsx(ConfirmationModal2, {
      content: renderI18nText('file_browser.team_folder_move.content', {
        folderName: jsx('span', {
          className: Vq,
          children: t.path,
        }),
        destinationTeamName: jsx('span', {
          className: Vq,
          children: r.name,
        }),
        currentTeamName: jsx('span', {
          className: Vq,
          children: i.name,
        }),
      }),
      confirmText: getI18nString('file_browser.team_folder_move.confirm'),
      confirmationTitle: getI18nString('file_browser.team_folder_move.confirmation_modal_title'),
      onConfirm: e.data.onConfirm,
      ...this.props,
    })
  }
}
c.displayName = 'TeamFolderMoveConfirmModal'
export const o = $$d0
