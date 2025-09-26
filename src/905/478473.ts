import classNames from 'classnames'
import { useDispatch } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { KindEnum } from '../905/129884'
import { showModalHandler } from '../905/156213'
import { getI18nString, renderI18nText } from '../905/303541'
import { ExtensionRequestModal } from '../905/404161'
import { bv, pF, sw, tW, Vj, xo } from '../905/427932'
import { Button } from '../905/599896'
import { SvgComponent } from '../905/714743'
import { TextWithTruncation } from '../905/984674'
import { A as _$$A2 } from '../5724/191519'
import { A as _$$A } from '../6828/718668'
import { cssBuilderInstance } from '../cssbuilder/589278'
import { a as _$$a } from '../figma_app/453187'
import { getCurrentVersion } from '../figma_app/471982'
import { isExtensionRequestAllowed } from '../figma_app/684168'

interface DisabledTextProps {
  tooltipText: string
}

/**
 * Component for displaying disabled text with tooltip
 * Original name: $$v0
 */
export function DisabledText({
  tooltipText,
}: DisabledTextProps) {
  return jsxs('div', {
    'className': pF,
    'data-tooltip': tooltipText,
    'data-tooltip-type': KindEnum.TEXT,
    'data-testid': 'disabled-text',
    'children': [jsx('div', {
      className: Vj,
      children: getI18nString('community.try.unavailable'),
    }), jsx(SvgComponent, {
      svg: _$$A2,
      svgClassName: xo,
    })],
  })
}

interface WorkspaceStatusIndicatorProps {
  workspace: any
  isWidget: boolean
  hasPendingRequest: boolean
  extension: any
}

/**
 * Component for rendering workspace status indicator based on various conditions
 * Original name: I
 */
function WorkspaceStatusIndicator({
  workspace,
  isWidget,
  hasPendingRequest,
  extension,
}: WorkspaceStatusIndicatorProps) {
  if (workspace.isFigJamDisabled) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('community.try.figjam_disabled_by_your_org', {
        orgName: workspace.workspaceName,
      }),
    })
  }

  if (workspace.isSlidesDisabled) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('community.try.slides_disabled_by_admins'),
    })
  }

  if (workspace.isSitesDisabled) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('community.try.sites_disabled_by_admins'),
    })
  }

  if (workspace.isCooperDisabled) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('community.try.buzz_disabled_by_admins'),
    })
  }

  if (workspace.isFigmakeDisabled) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('community.try.figmake_disabled_by_admins'),
    })
  }

  if (workspace.isDsePresetsDisabled) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('community.try.presets_disabled_by_admins'),
    })
  }

  if (workspace.isDisabledDueToECC) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('community.try.externally_restricted'),
    })
  }

  if (workspace.isPlanLocked) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('plan_picker.locked_plan_tooltip'),
    })
  }

  if (!workspace.draftFolderId) {
    return jsx(DisabledText, {
      tooltipText: getI18nString('plan_picker.limited_access_tooltip'),
    })
  }

  if (workspace.publicPluginsOrWidgetDisabled) {
    if (hasPendingRequest) {
      return jsx('div', {
        className: cssBuilderInstance.mlAuto.$,
        children: jsx(TextWithTruncation, {
          fontSize: 11,
          color: 'secondary',
          children: renderI18nText('community.try.pick_workspace.approval_pending'),
        }),
      })
    }

    if (!isExtensionRequestAllowed({
      workspace,
      hasPendingRequest,
      extension,
    })) {
      const tooltipText = (function ({
        workspace,
        isWidget,
        extension,
      }: WorkspaceStatusIndicatorProps) {
        return extension?.roles.org
          ? isWidget
            ? getI18nString('community.try.org_private_widget_request_disabled')
            : getI18nString('community.try.org_private_plugin_request_disabled')
          : isWidget
            ? getI18nString('community.try.widget_requests_disabled_by_your_org', {
              orgName: workspace.workspaceName,
            })
            : getI18nString('community.try.plugin_requests_disabled_by_your_org', {
              orgName: workspace.workspaceName,
            })
      })({
        workspace,
        isWidget,
        extension,
      })

      return jsx('div', {
        className: cssBuilderInstance.mlAuto.$,
        children: jsx(Button, {
          'disabled': true,
          'data-tooltip': tooltipText,
          'data-tooltip-type': KindEnum.TEXT,
          'children': renderI18nText('community.try.pick_workspace.request_approval'),
        }),
      })
    }

    return jsx('div', {
      className: cssBuilderInstance.mlAuto.$,
      children: jsx(Button, {
        children: renderI18nText('community.try.pick_workspace.request_approval'),
      }),
    })
  }

  return jsx(SvgComponent, {
    className: cssBuilderInstance.pl16.pr16.mlAuto.colorIcon.$,
    svg: _$$A,
    dataTestId: 'chevron-right',
  })
}

interface WorkspaceRowProps {
  onClick: (workspace: any) => void
  workspace: any
  disabled: boolean
  rowIcon: any
  Avatar: any
}

/**
 * Component for rendering a workspace row in a list
 * Original name: E
 */
function WorkspaceRow({
  onClick,
  workspace,
  disabled,
  rowIcon,
  Avatar,
}: WorkspaceRowProps) {
  return jsxs('button', {
    className: tW,
    onClick: (event) => {
      event.stopPropagation()
      onClick(workspace)
    },
    disabled,
    children: [jsx('div', {
      className: classNames({
        [cssBuilderInstance.ml8.mr8.$]: true,
        [cssBuilderInstance.opacity0_5.$]: disabled,
      }),
      children: jsx(Avatar, {
        name: workspace.workspaceName,
        userId: workspace.userId,
        orgId: workspace.orgId,
      }),
    }), jsxs('div', {
      className: cssBuilderInstance.flex.flexColumn.itemsStart.mr8.$,
      children: [jsx('div', {
        className: bv,
        children: jsx(TextWithTruncation, {
          fontSize: 13,
          color: 'default',
          children: workspace.workspaceName,
        }),
      }), workspace.user
        ? jsx(TextWithTruncation, {
          fontSize: 11,
          color: 'secondary',
          children: workspace.user.email,
        })
        : null],
    }), rowIcon],
  })
}

interface SimpleWorkspaceRowProps {
  workspace: any
  onClick: (workspace: any) => void
  Avatar: any
}

/**
 * Component for rendering a simple workspace row with chevron icon
 * Original name: x
 */
function SimpleWorkspaceRow({
  workspace,
  onClick,
  Avatar,
}: SimpleWorkspaceRowProps) {
  return jsx(WorkspaceRow, {
    workspace,
    disabled: false,
    onClick,
    rowIcon: jsx(SvgComponent, {
      className: cssBuilderInstance.pl16.pr16.mlAuto.colorIcon.$,
      svg: _$$A,
      dataTestId: 'chevron-right',
    }),
    Avatar,
  })
}

interface SelectableWorkspaceRowProps {
  workspace: any
  Avatar: any
  isWidget: boolean
  extension: any
  rowIcon?: any
  disabled?: boolean
  onClick: (workspace: any, context?: string) => void
}

/**
 * Component for rendering a selectable workspace row with status indicators
 * Original name: $$S1
 */
export function SelectableWorkspaceRow({
  workspace,
  Avatar,
  isWidget,
  extension,
  rowIcon,
  disabled,
  onClick,
}: SelectableWorkspaceRowProps) {
  const dispatch = useDispatch<AppDispatch>()
  const hasPendingRequest = _$$a(workspace.orgId, extension?.id)

  const handleRequestApproval = (selectedWorkspace: any) => {
    if (!extension)
      return

    const currentVersion = getCurrentVersion(extension)
    const modalData = {
      extension: {
        pluginId: currentVersion.plugin_id,
        iconUrl: currentVersion.redirect_icon_url,
        name: currentVersion.name,
      },
      isWidget: !!isWidget,
      orgId: selectedWorkspace.orgId ?? '',
      workspaceDetails: undefined,
      openedFrom: 'community',
      fullscreenEditorType: null,
    }

    dispatch(showModalHandler({
      type: ExtensionRequestModal,
      data: modalData,
    }))
  }

  const isRequestAllowed = isExtensionRequestAllowed({
    workspace,
    hasPendingRequest,
    extension,
  })

  const isDisabled = disabled !== undefined
    ? disabled
    : workspace.isFigJamDisabled
    || workspace.isDisabledDueToECC
    || (workspace.publicPluginsOrWidgetDisabled && !isRequestAllowed)
    || workspace.isDsePresetsDisabled
    || workspace.isSlidesDisabled
    || workspace.isSitesDisabled
    || workspace.isCooperDisabled
    || workspace.isFigmakeDisabled
    || !workspace.draftFolderId
    || workspace.isPlanLocked

  return jsx(WorkspaceRow, {
    workspace,
    disabled: !!isDisabled,
    onClick(workspace) {
      return isRequestAllowed ? handleRequestApproval(workspace) : onClick(workspace, 'plan_picker')
    },
    rowIcon: rowIcon !== undefined
      ? rowIcon
      : jsx(WorkspaceStatusIndicator, {
        workspace,
        isWidget: !!isWidget,
        hasPendingRequest,
        extension,
      }),
    Avatar,
  })
}

interface WorkspaceListProps {
  workspaces: any[]
  extension: any
  isWidget: boolean
  Avatar: any
  onClick: (workspace: any) => void
  mode?: 'manage_allowlist' | 'pick_workspace'
}

/**
 * Component for rendering a list of workspaces
 * Original name: $$w2
 */
export function WorkspaceList({
  workspaces,
  extension,
  isWidget,
  Avatar,
  onClick,
  mode = 'pick_workspace',
}: WorkspaceListProps) {
  return jsxs(Fragment, {
    children: [jsx('div', {
      className: cssBuilderInstance.alignCenter.$,
      children: mode === 'manage_allowlist'
        ? jsx(TextWithTruncation, {
          fontWeight: 'medium',
          fontSize: 20,
          color: 'default',
          children: renderI18nText('community.allowlist.choose_an_organization'),
        })
        : jsx(TextWithTruncation, {
          fontWeight: 'medium',
          fontSize: 20,
          color: 'default',
          children: renderI18nText('community.using.pick_workspace.title'),
        }),
    }), jsx('div', {
      className: cssBuilderInstance.alignCenter.pt6.$,
      children: mode === 'manage_allowlist'
        ? jsx(TextWithTruncation, {
          fontSize: 13,
          color: 'default',
          children: renderI18nText('community.allowlist.select_the_organization_you_would_like'),
        })
        : jsx(TextWithTruncation, {
          fontSize: 13,
          color: 'default',
          children: renderI18nText('community.try.pick_workspace.subtitle'),
        }),
    }), jsx('div', {
      className: sw,
      children: workspaces.map(workspace => mode === 'manage_allowlist'
        ? jsx(SimpleWorkspaceRow, {
          workspace,
          onClick,
          Avatar,
        }, workspace.orgId ?? workspace.teamId ?? '')
        : jsx(SelectableWorkspaceRow, {
          workspace,
          onClick,
          extension,
          isWidget,
          Avatar,
        }, workspace.orgId ?? workspace.teamId ?? '')),
    })],
  })
}

// Export aliases for backward compatibility
export const Ct = DisabledText
export const MA = SelectableWorkspaceRow
export const oT = WorkspaceList
