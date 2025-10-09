

import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { registerModal } from "../905/102752"
import { hideModal } from "../905/156213"
import { renderI18nText } from "../905/303541"
import { WorkspaceList } from "../905/478473"
import { e as _$$e } from "../905/579755"
import { SvgComponent } from "../905/714743"
import { A as _$$A } from "../6041/915738"
import { isWidget } from "../figma_app/45218"
import { A } from "../figma_app/122760"
import { genericSelectorExternalTeamsIcon, genericSelectorModalCancel, workspaceSelectorModal, workspaceSelectorModalInner } from "../figma_app/727769"

interface AvatarProps {
  name: string
  orgId?: string
  userId?: string
}

interface WorkspaceSelectorModalProps {
  payload: {
    onSelectWorkspace: (workspace: any) => void
  }
}

interface ModalPayload {
  extension?: any
  workspaces: any[]
  mode: string
}

/**
 * Avatar component that renders different icons based on the entity type
 * Original name: $$f0
 */
export function WorkspaceAvatar({ name, orgId, userId }: AvatarProps) {
  const orgById = useSelector((state: any) => state.orgById)
  const authedUsers = useSelector((state: any) => state.authedUsers)

  const normalizedName = name.toLowerCase()

  if (normalizedName === "external teams") {
    return jsx(SvgComponent, {
      className: genericSelectorExternalTeamsIcon,
      svg: _$$A,
    })
  }

  if (orgId) {
    return jsx(_$$e, {
      entity: orgById[orgId],
    })
  }

  return jsx(_$$e, {
    entity: authedUsers.byId[userId as string],
  })
}

/**
 * Modal component for selecting a workspace
 * Original name: WorkspaceSelectorModal
 */
export const WorkspaceSelectorModal = registerModal(({ payload }: WorkspaceSelectorModalProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleCloseModal = useCallback(() => {
    dispatch(hideModal())
  }, [dispatch])

  // Assuming the payload contains these properties based on usage
  const { extension, workspaces, mode } = payload as unknown as ModalPayload

  const isExtensionWidget = !!extension && isWidget(extension)

  return jsx(A, {
    className: workspaceSelectorModal,
    onCloseModal: handleCloseModal,
    children: jsxs("div", {
      className: workspaceSelectorModalInner,
      children: [
        jsx(WorkspaceList, {
          isWidget: isExtensionWidget,
          workspaces,
          onClick: (workspace: any) => {
            handleCloseModal()
            payload.onSelectWorkspace(workspace)
          },
          Avatar: WorkspaceAvatar,
          extension,
          mode,
        }),
        jsx("button", {
          className: genericSelectorModalCancel,
          onClick: handleCloseModal,
          children: renderI18nText("community.try.pick_workspace.cancel"),
        })
      ],
    }),
  })
}, "WorkspaceSelectorModal")

// Export aliases for backward compatibility
export const M = WorkspaceAvatar
export const _ = WorkspaceSelectorModal
