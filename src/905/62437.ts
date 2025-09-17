import type { JSX } from 'react'
import type { Dispatch } from 'redux'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment, jsx, jsxs } from 'react/jsx-runtime'
import { consumptionPaywallUtils } from '../905/224'
import { ModalRootComponent } from '../905/38914'
import { canCreateTeamFile } from '../905/87821'
import { registerModal } from '../905/102752'
import { hideModal, showModalHandler } from '../905/156213'
import { UpsellModalType } from '../905/165519'
import { isBranchView } from '../905/218608'
import { handleCopyViewUrl } from '../905/262176'
import { getI18nString, renderI18nText } from '../905/303541'
import { useModalManager } from '../905/437088'
import { trackEventAnalytics } from '../905/449184'
import { formatI18nMessage } from '../905/482208'
import { Button } from '../905/521428'
import { FlashActions } from '../905/573154'
import { getFeatureFlags } from '../905/601108'
import { PageFolderFile } from '../905/652992'
import { getResourceDataOrFallback } from '../905/723791'
import { ConsumptionPaywallModalPlansPricing } from '../905/739964'
import { restoreFiles } from '../905/760074'
import { isFullscreenDevHandoffView } from '../905/782918'
import { fileUpdateSavepointAction } from '../905/852057'
import { FEditorType } from '../figma_app/53721'
import { duplicateFileOptimistic, fileRestoreAction, restoreFileVersionOptimistic } from '../figma_app/78808'
import { selectPermissionsState } from '../figma_app/212807'
import { DialogActionStrip, DialogBody, DialogContents, DialogFooter, DialogHeader, DialogTitle } from '../figma_app/272243'
import { getSelectedView } from '../figma_app/386952'
import { SavepointModalContainer } from '../figma_app/504415'
import { selectCurrentFile } from '../figma_app/516028'
import { hasCmsCollection } from '../figma_app/618433'
import { fileActionEnum } from '../figma_app/630077'
import { MenuItemComp } from '../figma_app/860955'

/**
 * UndoMergeModal - Modal for undoing a branch merge.
 * Original: $$D
 */
function UndoMergeModal(props) {
  const dispatch = useDispatch<Dispatch<any>>()
  const modalManager = useModalManager(props)
  const [isLoading, setIsLoading] = useState(false)
  const currentFile = selectCurrentFile()
  const canEdit = currentFile?.canEdit
  const { version } = props

  // Early return if feature flag is not enabled
  if (!getFeatureFlags().branching_undo_merge) {
    return jsx(Fragment, {})
  }

  /**
   * Handles the undo merge action.
   */
  const handleUndoMerge = async () => {
    if (isLoading)
      return
    if (!currentFile || !canEdit || version.view !== 'branch_child_merge') {
      dispatch(FlashActions.error('Unable to undo merge'))
      return
    }
    const fileKey = currentFile.key
    const branchFileKey = version.branch_file_key
    if (!branchFileKey) {
      dispatch(FlashActions.error('Could not find branch key'))
      return
    }
    setIsLoading(true)
    const result = await restoreFiles([branchFileKey])
    if (result.status === 'error') {
      dispatch(FlashActions.error(result.message))
      setIsLoading(false)
      return
    }
    dispatch(restoreFileVersionOptimistic({
      fileKey,
      version,
    }))
    trackEventAnalytics('Undo Merge', {
      fileKey,
      versionId: version.id,
      savedAt: version.touched_at,
    })
  }

  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 'sm',
    children: jsxs(DialogContents, {
      children: [
        jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: renderI18nText('collaboration.branching.undo_merge_title'),
          }),
        }),
        jsx(DialogBody, {
          children: renderI18nText('collaboration.branching.undo_merge_description'),
        }),
        jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [
              jsx(Button, {
                variant: 'secondary',
                onClick: () => dispatch(hideModal()),
                children: renderI18nText('collaboration.branching.undo_merge_cancel'),
              }),
              jsx(Button, {
                variant: 'primary',
                onClick: handleUndoMerge,
                disabled: isLoading,
                children: renderI18nText('collaboration.branching.undo_merge_confirm'),
              }),
            ],
          }),
        }),
      ],
    }),
  })
}
UndoMergeModal.displayName = 'UndoMergeModal'

/**
 * ConfirmRestoreModal - Modal to confirm restoring a version when CMS data won't roll back.
 * Original: F
 */
const ConfirmRestoreModal = registerModal((props) => {
  const modalManager = useModalManager(props)
  const { onClose, onConfirm } = props
  return jsx(ModalRootComponent, {
    manager: modalManager,
    width: 'md',
    children: jsxs(DialogContents, {
      children: [
        jsx(DialogHeader, {
          children: jsx(DialogTitle, {
            children: getI18nString('cms_file_operations.cms_data_wont_roll_back'),
          }),
        }),
        jsx(DialogBody, {
          children: jsx('p', {
            children: getI18nString('cms_file_operations.when_you_roll_back_to'),
          }),
        }),
        jsx(DialogFooter, {
          children: jsxs(DialogActionStrip, {
            children: [
              jsx(Button, {
                onClick: onClose,
                variant: 'secondary',
                children: getI18nString('cms_file_operations.cancel'),
              }),
              jsx(Button, {
                onClick: onConfirm,
                variant: 'primary',
                children: getI18nString('cms_file_operations.continue_anyway'),
              }),
            ],
          }),
        }),
      ],
    }),
  })
}, 'ConfirmRestoreModal')

/**
 * useSavepointMenuItems - Returns menu items for savepoint actions.
 * Original: $$B0
 * @param versionId - The ID of the version to operate on.
 */
export function useSavepointMenuItems(versionId: string) {
  const currentFile = selectCurrentFile()
  const canEdit = currentFile?.canEdit || false
  const version: any = useSelector<ObjectOf>(state => state.versionHistory.versions.find(v => v.id === versionId))
  const selectedView = getSelectedView()
  const dispatch = useDispatch<Dispatch<any>>()
  const hasCms = hasCmsCollection(currentFile?.key)
  const permissions = selectPermissionsState()

  return useMemo(() => {
    if (!version || !currentFile || selectedView.view !== 'fullscreen')
      return null

    const items: JSX.Element[] = []

    /**
     * Helper to create a menu item.
     */
    const createMenuItem = (
      key: string,
      onClick: () => void,
      disabled?: boolean,
    ) => {
      if (
        isFullscreenDevHandoffView(selectedView)
        && (key === 'savepoint-restore' || key === 'savepoint-clear')
      ) {
        return null
      }
      return jsx(MenuItemComp, {
        onClick,
        disabled,
        'data-test-id': `savepoint-menu-item-${key}`,
        'children': formatI18nMessage(key),
      }, key)
    }

    // Determine if duplication is disabled for the editor type
    const isDuplicationDisabled: boolean
      = (selectedView.editorType === FEditorType.Slides && getResourceDataOrFallback(currentFile.org?.isSlidesDisabled))
        || (selectedView.editorType === FEditorType.Whiteboard && !!currentFile.org?.figjamDisabledAt)
        || (selectedView.editorType === FEditorType.Sites && !!currentFile.org?.isSitesDisabled)
        || (selectedView.editorType === FEditorType.Cooper && !!currentFile.org?.isCooperDisabled)

    // Compare menu item
    const compareItem = createMenuItem('savepoint-compare', () => {
      dispatch(fileUpdateSavepointAction({
        fileKey: currentFile.key,
        savepointID: version.id,
        label: '',
        description: '',
      }))
    })

    // Label/Edit menu item
    const labelItem = createMenuItem(
      version.label ? 'savepoint-edit' : 'savepoint-label',
      () => {
        if (canEdit) {
          dispatch(showModalHandler({
            type: SavepointModalContainer,
            data: {
              description: version.description || '',
              label: version.label || '',
              savepointID: version.id,
            },
          }))
        }
      },
    )

    // Restore menu item
    const restoreItem = createMenuItem('savepoint-restore', () => {
      if (!canEdit)
        return
      const restore = () => {
        dispatch(fileRestoreAction({
          fileKey: currentFile.key,
          versionId: version.id,
        }))
        trackEventAnalytics('History Version Checkpoint Restored', {
          versionId: version.id,
          savedAt: version.touched_at,
        })
      }
      if (hasCms) {
        dispatch(showModalHandler({
          type: ConfirmRestoreModal,
          data: { onConfirm: restore },
        }))
      }
      else {
        restore()
      }
    })

    // Duplicate menu item
    const duplicateItem = createMenuItem('savepoint-duplicate', () => {
      const team = canCreateTeamFile(currentFile, currentFile.project, permissions)
      if (team) {
        dispatch(showModalHandler({
          type: ConsumptionPaywallModalPlansPricing,
          data: {
            team,
            resource: PageFolderFile.FILE,
            action: fileActionEnum.DUPLICATE_FILES,
            editorType: currentFile.editorType,
            currentPlan: consumptionPaywallUtils.Plan.STARTER,
            upsellPlan: consumptionPaywallUtils.Plan.PRO,
            upsellSource: UpsellModalType.CREATE_NEW_FILE,
          },
        }))
      }
      else {
        dispatch(duplicateFileOptimistic({
          file: currentFile,
          versionId: version.id,
        }))
        trackEventAnalytics('History Version Checkpoint Duplicated', {
          versionId: version.id,
          savedAt: version.touched_at,
        })
      }
    }, isDuplicationDisabled)

    // Clear menu item
    const clearItem = createMenuItem('savepoint-clear', () => {
      dispatch(fileUpdateSavepointAction({
        fileKey: currentFile.key,
        savepointID: version.id,
        label: '',
        description: '',
      }))
    }, !version.label || version.label.length === 0)

    // Link menu item
    const linkItem = createMenuItem('savepoint-link', () => {
      try {
        handleCopyViewUrl(dispatch, selectedView, version.id)
      }
      catch {
        dispatch(FlashActions.error('Failed to copy link'))
      }
    })

    // Undo merge menu item
    const undoMergeItem = createMenuItem('savepoint-undo-merge', () => {
      dispatch(showModalHandler({
        type: UndoMergeModalRegistered,
        data: { version },
      }))
    })

    // Branch view logic
    if (canEdit) {
      if (isBranchView(version)) {
        if (version.view === 'branch_child_merge') {
          items.push(labelItem, restoreItem, duplicateItem, linkItem)
          if (getFeatureFlags().branching_undo_merge) {
            items.push(undoMergeItem)
          }
        }
        else {
          items.push(restoreItem, duplicateItem, linkItem)
        }
      }
      else {
        items.push(labelItem, restoreItem, duplicateItem, clearItem, linkItem)
      }
    }
    else {
      items.push(duplicateItem, linkItem)
    }

    // Add compare item if version diffing is enabled and not whiteboard/dev handoff
    if (
      getFeatureFlags().version_diffing
      && selectedView.editorType !== FEditorType.Whiteboard
      && !isFullscreenDevHandoffView(selectedView)
    ) {
      items.push(compareItem)
    }

    return items
  }, [selectedView, version, canEdit, currentFile, hasCms, permissions, dispatch])
}

// Register UndoMergeModal
const UndoMergeModalRegistered = registerModal(UndoMergeModal, 'UndoMergeModal')

// Export refactored names for imports
export const D = useSavepointMenuItems
export const L = UndoMergeModalRegistered
export const F = ConfirmRestoreModal
