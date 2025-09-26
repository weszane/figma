import { useDispatch } from 'react-redux'
import { jsx, jsxs } from 'react/jsx-runtime'
import { KindEnum } from '../905/129884'
import { getI18nString } from '../905/303541'
import { FolderViewType } from '../905/316062'
import { In } from '../905/672640'
import { rm } from '../905/989969'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { SX } from '../figma_app/199513'

interface TeamInfo {
  id: string
  name: string
  org_id: string
  subscription: any
  restrictions_list: any[]
  grace_period_end: string | null
  student_team: boolean
  canEdit: boolean
}

interface FileMoveButtonProps {
  team?: {
    id: string
    name: string
    orgId: string
    subscription: any
    restrictionsList: any[]
    gracePeriodEnd?: Date
    studentTeamAt?: Date
    canEdit: boolean
  }
  setSelectedFolder: (folder: any) => void
}

/**
 * FileMoveButton - Button component for creating new projects in file move modal
 * Original name: $$p0
 */
export function FileMoveButton(props: FileMoveButtonProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>()
  const { setSelectedFolder } = props
  const hasEditPermission = props.team?.canEdit

  const handleCreateNewProject = (): void => {
    if (!props.team)
      return

    const teamInfo: TeamInfo = {
      id: props.team.id,
      name: props.team.name,
      org_id: props.team.orgId,
      subscription: props.team.subscription,
      restrictions_list: props.team.restrictionsList,
      grace_period_end: props.team.gracePeriodEnd ? props.team.gracePeriodEnd.toString() : null,
      student_team: !!props.team.studentTeamAt,
      canEdit: !!hasEditPermission,
    }

    dispatch(SX({
      where: FolderViewType.FileMoveModalV2,
      team: teamInfo,
      onFolderCreated: setSelectedFolder,
    }))
  }

  return jsxs('button', {
    'className': rm,
    'disabled': !hasEditPermission,
    'data-tooltip-type': KindEnum.TEXT,
    'data-tooltip': hasEditPermission
      ? undefined
      : getI18nString('file_browser.file_move.you_dont_have_edit_access_to_this_team'),
    'data-tooltip-show-above': true,
    'data-tooltip-timeout-delay': 100,
    'data-tooltip-max-width': 250,
    'onClick': handleCreateNewProject,
    'children': [
      jsx('div', {
        className: cssBuilderInstance.p4.mr4.$,
        children: jsx(In, {
          icon: 'plus-32',
          fill: hasEditPermission ? 'default' : 'disabled',
        }),
      }),
      getI18nString('file_browser.file_move.new_project'),
    ],
  })
}

export const S = FileMoveButton
