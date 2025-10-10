import { flatMap, noop, orderBy, partition } from 'lodash-es'
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { jsx, jsxs } from "react/jsx-runtime"
import { tF, ue } from "../905/61300"
import { ModalSupportsBackground, registerModal } from "../905/102752"
import { hideModal, showModalHandler } from "../905/156213"
import { LoadingRenderer } from "../905/211326"
import { getViewName, isBranchView } from "../905/218608"
import { Label } from "../905/270045"
import { maybeCreateSavepoint } from "../905/294113"
import { commitMerge, handleBranchModalExit } from "../905/300250"
import { VisualBellActions } from "../905/302958"
import { getI18nString, renderI18nText } from "../905/303541"
import { RadioInputOption, RadioInputRoot } from "../905/308099"
import { waitForJoinStatus } from "../905/346794"
import { createOptimistThunk } from "../905/350402"
import { selectUser } from "../905/372672"
import { analyticsEventManager, trackEventAnalytics } from "../905/449184"
import { ConfirmationModal } from "../905/519092"
import { BranchType, SourceDirection } from "../905/535806"
import { subscribeAndAwaitData } from "../905/553831"
import { FlashActions } from "../905/573154"
import { VisualBellIcon } from "../905/576487"
import { n6, zZ } from "../905/585030"
import { currentSelectionAtom } from "../905/617744"
import { TrackingKeyEnum } from "../905/696396"
import { G as _$$G } from "../905/702115"
import { $l } from "../905/721248"
import { getResourceDataOrFallback } from "../905/723791"
import { ss } from "../905/746499"
import { handlePluginError } from "../905/753206"
import { handleModalError } from "../905/760074"
import { getSelectedFile } from "../905/766303"
import { useSingleEffect } from "../905/791079"
import { findMatchingValue } from "../905/807535"
import { selectViewAction } from "../905/929976"
import { HiddenLegend } from "../905/932270"
import { DiffManager } from "../905/985490"
import { useAtomValueAndSetter } from "../figma_app/27355"
import { FileCanEdit, FileVersions } from "../figma_app/43951"
import { FEditorType } from "../figma_app/53721"
import { filePutAction } from "../figma_app/78808"
import { jP, ur, YL } from "../figma_app/221114"
import { useSubscription } from "../figma_app/288654"
import { fullscreenValue } from "../figma_app/455680"
import { jS } from "../figma_app/557024"
import { GitReferenceType, SchemaJoinStatus, ViewType } from "../figma_app/763686"
import { fileApiHandler } from "../figma_app/787550"
import { ConfirmationModal2, ModalContainer } from "../figma_app/918700"

// Refactored from minified code in /Users/allen/sigma-main/src/905/292918.ts
// Changes: Renamed variables for clarity (e.g., single-letter vars to descriptive names), added TypeScript interfaces and types for type safety, simplified complex logic (e.g., destructuring and conditional rendering), added comments explaining key logic and potential issues, followed camelCase/PascalCase conventions, ensured DRY principles. Identified potential bug: 'A' and 'f' were undefined in original code; assumed 'A' is 'diffInfo' and 'f' is '_diffInfo' based on context. Added error handling comments where applicable.

// Assumed dependencies: lodash-es functions like partition and flatMap are used but not imported; added in refactoring for clarity.
// Types inferred from usage and imported enums.

interface BranchForceMergeModalProps {
  branchKey: string
  sourceKey: string
  direction: SourceDirection
}

interface IncrementalUpdateModalProps {
  sourceKey: string
  currentFileKey: string
  onCheckpointSelected: (checkpointKey: string | 'latest') => void
}

interface FetchSourceFileInfoParams {
  branchFileKey: string
}

export interface ShowBranchMergeModalParams {
  branchKey: string
  sourceKey: string
  direction: string
  force?: boolean
  backFileKey?: string
  sourceCheckpointKey?: string
  unreadCommentCount?: number
  readOnly?: boolean
  toCheckpointKey?: string
  fromCheckpointKey?: string
  mergeOnFileOpen?: boolean
  checkpointDiffURL?: string
}

interface HandleBranchMergeParams {
  branchKey: string
  sourceKey: string
  direction: SourceDirection
  force?: boolean
  sourceCheckpointKey?: string
  unreadCommentCount?: number
}

interface InitiateBranchMergeParams {
  direction: SourceDirection
  trackingContextName: string
  force?: boolean
  sourceCheckpointKey?: string
  unreadCommentCount?: number
}

interface OpenSourceFileParams {
  trackingContextName: string
}

interface ShowBranchesModalParams {
  trackingContextName: string
}

// Original: let Y = { ... }
const branchTypeLabels: Record<BranchType, () => JSX.Element> = {
  [BranchType.MAIN]: () => renderI18nText('collaboration.branching_force.merge_from_source_merge_conflict_radio_option_main'),
  [BranchType.BRANCH]: () => renderI18nText('collaboration.branching_force.merge_from_source_merge_conflict_radio_option_branch'),
}

// Original: function q(e) { ... }
function renderConflictChoiceLabel(props: { value: BranchType }): JSX.Element {
  return renderI18nText('collaboration.branching_force.merge_from_source_merge_conflict_radio_label', {
    option: jsx('span', {
      className: 'branch_force_merge_modal--conflictChoiceBold---XcmF',
      children: branchTypeLabels[props.value](),
    }),
  })
}

// Original: let $ = registerModal((e) => { ... }, "BranchForceMergeModal", ModalSupportsBackground.YES)
export const BranchForceMergeModal = registerModal((props: BranchForceMergeModalProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const [selectedBranchType, setSelectedBranchType] = useState<BranchType>(BranchType.MAIN)
  const [currentSelection, setCurrentSelection] = useAtomValueAndSetter(currentSelectionAtom)
  const direction = currentSelection ?? props.direction
  useSingleEffect(() => {
    setCurrentSelection(props.direction)
    return () => setCurrentSelection(null)
  })
  const fileVersion = useSelector((state: any) => state.fileVersion) // Assumed state type; refine if possible
  const currentUserOrgId = useSelector((state: any) => state.currentUserOrgId)
  const user = selectUser()
  const branchModalTrackingId = useContext(ss)
  const { diffInfo, error } = zZ(GitReferenceType.BRANCH, props.branchKey, props.sourceKey, props.direction, fileVersion, currentUserOrgId, null, true)
  const { diffInfo: sourceDiffInfo, error: sourceError } = zZ(GitReferenceType.SOURCE, props.branchKey, props.sourceKey, props.direction, fileVersion, currentUserOrgId, null, false)
  const [isCalculatingConflicts, setIsCalculatingConflicts] = useState<boolean>(false)
  const [conflicts, setConflicts] = useState<any>(null) // Type conflicts if possible; assumed from DiffManager
  useEffect(() => {
    const hasStyleKeys = !!(sourceDiffInfo.styleKeyToLibraryKey != null && diffInfo.styleKeyToLibraryKey != null)
    if (!isCalculatingConflicts && hasStyleKeys && conflicts == null) {
      const sourceKey = props.sourceKey
      const branchKey = props.branchKey
      setIsCalculatingConflicts(true)
      try {
        const calculatedConflicts = DiffManager.getConflicts({
          branchKey,
          sourceKey,
          branchModalTrackingId,
        })
        setConflicts(calculatedConflicts)
        setIsCalculatingConflicts(false)
      }
      catch (error) {
        handleModalError(error)
        dispatch(VisualBellActions.enqueue({
          message: 'An error occurred while calculating conflicts',
          error: true,
        }))
      }
    }
  }, [sourceDiffInfo.styleKeyToLibraryKey, diffInfo.styleKeyToLibraryKey, conflicts, isCalculatingConflicts, dispatch, props.branchKey, props.sourceKey, branchModalTrackingId, props.direction])
  const combinedError = error ?? sourceError
  // Assumed: 'A' was diffInfo, 'f' was sourceDiffInfo
  const { checkpointDiff, displayGroups } = diffInfo
  const { checkpointDiff: sourceCheckpointDiff, displayGroups: sourceDisplayGroups } = sourceDiffInfo
  const handleClose = () => {
    dispatch(handleBranchModalExit({
      hideModal: true,
      mergeParams: {
        branchKey: props.branchKey,
        sourceKey: props.sourceKey,
        direction,
        branchModalTrackingId,
      },
      userInitiated: true,
      reason: 'force_merge_modal_closed',
    }))
  }
  if (combinedError) {
    handleModalError(combinedError)
    console.error(combinedError)
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('collaboration.branching.error_generic'),
      error: true,
    }))
    dispatch(handleBranchModalExit({
      hideModal: true,
      mergeParams: {
        branchKey: props.branchKey,
        sourceKey: props.sourceKey,
        direction,
        branchModalTrackingId,
      },
      userInitiated: false,
      reason: 'useDiffs_failed_with_error',
      error: combinedError.message,
    }))
  }
  const relevantDisplayGroups = direction === SourceDirection.TO_SOURCE ? sourceDisplayGroups : displayGroups
  if (relevantDisplayGroups === null || conflicts === null) {
    return jsx(ModalContainer, {
      onHide: handleClose,
      children: jsx('div', {
        className: 'branch_force_merge_modal--loadingContainer--vo03-',
        children: jsx(_$$G, {
          hasLoadedDiffs: relevantDisplayGroups !== null,
          hasLoadedConflictDetection: conflicts !== null,
        }),
      }),
    })
  }
  if (direction === SourceDirection.TO_SOURCE) {
    const isMergeRequired = conflicts.isMergeRequired ?? false
    return jsxs(ConfirmationModal2, {
      confirmationTitle: renderI18nText('collaboration.branching_force.merge_to_source_title'),
      destructive: true,
      confirmText: renderI18nText('collaboration.branching_force.merge_to_source_confirm'),
      onConfirm: () => {
        if (sourceCheckpointDiff) {
          dispatch(commitMerge({
            mergeParams: {
              branchKey: props.branchKey,
              sourceKey: props.sourceKey,
              direction,
              branchModalTrackingId,
            },
            checkpointDiff: sourceCheckpointDiff,
            pendingMessage: getI18nString('collaboration.branching.merge_pending'),
            successMessage: getI18nString('collaboration.branching.merge_success'),
            user,
          }))
        }
      },
      onCancel: handleClose,
      onHide: handleClose,
      disableConfirm: isMergeRequired,
      children: [
        renderI18nText('collaboration.branching_force.merge_to_source_description'),
        isMergeRequired && jsx('div', {
          className: 'branch_force_merge_modal--blockedMergeText--PYABM',
          children: renderI18nText('collaboration.branching_force.merge_to_source_blocked_description'),
        }),
      ],
    })
  }
  if (direction === SourceDirection.FROM_SOURCE) {
    return jsxs(ConfirmationModal2, {
      confirmationTitle: renderI18nText('collaboration.branching_force.merge_from_source_title'),
      destructive: true,
      confirmText: renderI18nText('collaboration.branching_force.merge_from_source_confirm'),
      onConfirm: () => {
        if (conflicts === null || !checkpointDiff)
          return
        const conflictGroups = conflicts.conflictGroups
        const resolutionMap = conflictGroups.reduce((acc: Record<string, BranchType>, group) => ({
          ...acc,
          [group.id]: selectedBranchType,
        }), {}) ?? null
        // Simplified: Using lodash partition and flatMap for clarity
        const [branchPicks, mainPicks] = partition(conflictGroups, group => resolutionMap[group.id] === BranchType.BRANCH)
        const branchChunks = flatMap(branchPicks, group => ue(group, BranchType.BRANCH))
        const mainChunks = flatMap(mainPicks, group => ue(group, BranchType.MAIN))
        const nonConflictingGroups = tF(sourceDiffInfo.displayGroups || [], conflictGroups, conflicts.identicalChunkGUIDs)
        n6(mainChunks, branchChunks, conflicts.nonConflictingSourceChunkGUIDs, conflicts.nonConflictingBranchChunkGUIDs, conflicts.identicalChunkGUIDs)
        dispatch(commitMerge({
          mergeParams: {
            branchKey: props.branchKey,
            sourceKey: props.sourceKey,
            direction,
          },
          checkpointDiff,
          pendingMessage: getI18nString('collaboration.branching.update_pending'),
          successMessage: getI18nString('collaboration.branching.update_success'),
          conflictResolutionDetails: {
            mainPickGroups: mainPicks.length,
            branchPickGroups: branchPicks.length,
            nonConflictingGroups: nonConflictingGroups.length,
          },
          user,
          branchModalTrackingId,
        }))
      },
      onCancel: handleClose,
      onHide: handleClose,
      children: [
        jsx('div', {
          className: 'branch_force_merge_modal--conflictChoiceRadioGroupHeader--Zhm5w',
          children: renderI18nText('collaboration.branching_force.merge_from_source_description'),
        }),
        jsxs(RadioInputRoot, {
          value: selectedBranchType,
          onChange: value => setSelectedBranchType(findMatchingValue(BranchType, value) ?? BranchType.MAIN),
          legend: jsx(HiddenLegend, {
            children: jsx('span', {
              className: 'branch_force_merge_modal--conflictChoiceRadioLegend--onrEN',
              children: renderI18nText('collaboration.branching_force.merge_from_source_merge_conflict_label'),
            }),
          }),
          children: [
            jsx(RadioInputOption, {
              value: BranchType.MAIN,
              label: jsx(Label, {
                children: jsx(renderConflictChoiceLabel, {
                  value: BranchType.MAIN,
                }),
              }),
            }),
            jsx(RadioInputOption, {
              value: BranchType.BRANCH,
              label: jsx(Label, {
                children: jsx(renderConflictChoiceLabel, {
                  value: BranchType.BRANCH,
                }),
              }),
            }),
          ],
        }),
      ],
    })
  }
  return null
}, 'BranchForceMergeModal', ModalSupportsBackground.YES)

// Original: let el = registerModal((...) => { ... }, "IncrementalUpdateModal", ModalSupportsBackground.YES)
export const IncrementalUpdateModal = registerModal((props: IncrementalUpdateModalProps) => {
  const dispatch = useDispatch<AppDispatch>()
  const fileVersionsSubscription = useSubscription(FileVersions, {
    fileKey: props.sourceKey,
  })
  const [sourceCheckpointCreatedAt, setSourceCheckpointCreatedAt] = useState<Date | undefined>(undefined)
  useEffect(() => {
    fileApiHandler.getSourceCheckpointCreatedAt({
      currentFileKey: props.currentFileKey,
    }).then(({ data }) => {
      setSourceCheckpointCreatedAt(new Date(data.created_at))
    }).catch(() => {
      dispatch(FlashActions.error('Unable to load file versions'))
    })
  }, [props.currentFileKey, setSourceCheckpointCreatedAt, dispatch])
  const [selectedVersion, setSelectedVersion] = useState<any>(null) // Type version if possible
  const isLoading = fileVersionsSubscription.status === 'loading' || sourceCheckpointCreatedAt === undefined
  let fileVersions: any[] = []
  if (fileVersionsSubscription.status === 'loaded') {
    const { file } = fileVersionsSubscription.data
    if (file) {
      fileVersions = getResourceDataOrFallback(file.recentFileVersions) || []
    }
  }
  const filteredVersions = fileVersions.filter(version => !(isLoading || !version.checkpoint?.createdAt || new Date(version.checkpoint.createdAt) <= sourceCheckpointCreatedAt!))
  const sortedVersions = orderBy(filteredVersions, ['updatedAt'], ['desc'])
  const versionItems = sortedVersions.map((version, index) => {
    const isLast = index === sortedVersions.length - 1
    const viewName = getViewName(version.view)
    const itemData = {
      user: version.user,
      label: version.label || undefined,
      view: viewName,
    }
    const displayText = ur(itemData)
    return jsx(jP, {
      dispatch: noop,
      displayText: jsx(YL, {
        item: itemData,
      }),
      editorType: null,
      first: false,
      isActive: selectedVersion === version,
      isAllowedToChangeVersion: () => true,
      isBranchingVersion: isBranchView(itemData),
      isLinked: false,
      label: version.label || undefined,
      last: isLast,
      onSelect: () => setSelectedVersion(version),
      showAutosaves: true,
      text: displayText,
      time: version.updatedAt,
      user: version.user?.name || undefined,
      userUrl: version.label && version.user?.imgUrl || null,
      versionId: version.id,
      view: viewName,
    }, version.id)
  })
  const latestVersionItem = jsx(jP, {
    dispatch: noop,
    displayText: renderI18nText('collaboration.feedback.incremental_update_modal.latest_version'),
    editorType: null,
    first: true,
    isActive: selectedVersion === 'latest',
    isAllowedToChangeVersion: () => true,
    isLinked: true,
    label: 'Latest version',
    last: false,
    onSelect: () => setSelectedVersion('latest'),
    text: 'Latest version',
    userUrl: null,
    versionId: 'current_version',
    view: 'file_default',
  })
  return jsx(ConfirmationModal, {
    title: getI18nString('collaboration.feedback.incremental_update_modal.title'),
    maxWidth: 528,
    minWidth: 528,
    fixedCenter: true,
    onClose: () => {
      dispatch(hideModal())
    },
    onConfirm: () => {
      if (selectedVersion === null)
        return
      const checkpointKey = selectedVersion === 'latest' ? 'latest' : selectedVersion.checkpoint?.key
      if (checkpointKey) {
        props.onCheckpointSelected(checkpointKey)
      }
    },
    focus: true,
    disabled: selectedVersion === null,
    confirmText: getI18nString('collaboration.feedback.incremental_update_modal.confirm'),
    children: jsx(LoadingRenderer, {
      isLoading,
      children: () => jsxs('ol', {
        className: 'incremental_update_modal--container--EpZfV',
        children: [latestVersionItem, ...versionItems],
      }),
    }),
  })
}, 'IncrementalUpdateModal', ModalSupportsBackground.YES)

// Original: let $$ed0 = createOptimistThunk(async (e, t) => { ... })
export const fetchSourceFileInfoThunk = createOptimistThunk(async (thunkAPI, params: FetchSourceFileInfoParams) => {
  try {
    const response = await fileApiHandler.getSourceFileUpdatedInfo({
      branchFileKey: params.branchFileKey,
    })
    thunkAPI.dispatch(filePutAction({
      file: response.data.meta.source,
    }))
  }
  catch {
    console.error('Error fetching source file')
  }
})

// Original: let $$ec5 = createOptimistThunk(async (e, t) => { ... })
export const showBranchMergeModalThunk = createOptimistThunk(async (thunkAPI, params: ShowBranchMergeModalParams) => {
  if (thunkAPI.getState().mirror.appModel.topLevelMode !== ViewType.BRANCHING) {
    if (params.force) {
      fullscreenValue.triggerAction('enter-branching-mode')
      fullscreenValue.triggerAction('show-design-panel')
      await waitForJoinStatus(SchemaJoinStatus.JOINED)
      thunkAPI.dispatch(showModalHandler({
        type: BranchForceMergeModal,
        data: {
          branchKey: params.branchKey,
          sourceKey: params.sourceKey,
          direction: params.direction,
          backFileKey: params.backFileKey,
        },
      }))
      return
    }
    thunkAPI.dispatch(showModalHandler({
      type: $l, // Assumed external modal
      data: {
        branchKey: params.branchKey,
        sourceKey: params.sourceKey,
        direction: params.direction,
        backFileKey: params.backFileKey,
        sourceCheckpointKey: params.sourceCheckpointKey,
        unreadCommentCount: params.unreadCommentCount,
        readOnly: params.readOnly,
      },
    }))
  }
})

// Original: let $$eu2 = createOptimistThunk(async (e, t) => { ... })
export const handleBranchMergeThunk = createOptimistThunk(async (thunkAPI, params: HandleBranchMergeParams) => {
  const state = thunkAPI.getState()
  const { openFile } = state
  if (!openFile) {
    analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.branching.merge_modal_blocked', {
      reason: 'no open file',
    })
    return
  }
  const openFileMerge = state.openFileMerge
  if (openFileMerge != null) {
    thunkAPI.dispatch(VisualBellActions.enqueue({
      message: getI18nString('collaboration.branching.waiting_for_previous_merge'),
    }))
    analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.branching.merge_modal_blocked', {
      reason: 'file merge in progress',
      fileMergeId: openFileMerge.fileMergeId,
    })
    return
  }
  await handlePluginError()
  const [branchCanEdit, sourceCanEdit] = await Promise.all([
    subscribeAndAwaitData(FileCanEdit, { key: params.branchKey }),
    subscribeAndAwaitData(FileCanEdit, { key: params.sourceKey }),
  ])
  const savepointPromises: any[] = []
  if (branchCanEdit.file?.hasPermission) {
    const isCurrentFile = params.branchKey === openFile.key
    savepointPromises.push(maybeCreateSavepoint(params.branchKey, '', '', thunkAPI.dispatch, isCurrentFile))
  }
  if (sourceCanEdit.file?.hasPermission) {
    const isCurrentFile = params.sourceKey === openFile.key
    savepointPromises.push(maybeCreateSavepoint(params.sourceKey, '', '', thunkAPI.dispatch, isCurrentFile))
  }
  if (savepointPromises.length > 0) {
    thunkAPI.dispatch(VisualBellActions.enqueue({
      message: getI18nString('collaboration.branching.saving_file'),
      type: 'file-merge-save',
      icon: VisualBellIcon.SPINNER,
    }))
    try {
      await Promise.all(savepointPromises)
      thunkAPI.dispatch(VisualBellActions.dequeue({
        matchType: 'file-merge-save',
      }))
    }
    catch {
      thunkAPI.dispatch(VisualBellActions.dequeue({
        matchType: 'file-merge-save',
      }))
      thunkAPI.dispatch(VisualBellActions.enqueue({
        message: getI18nString('collaboration.branching.error_saving_file'),
        error: true,
      }))
      analyticsEventManager.trackDefinedEvent('scenegraph_and_sync.branching.merge_modal_blocked', {
        reason: 'error saving file',
      })
      return
    }
  }
  const mergeParams = {
    branchKey: params.branchKey,
    sourceKey: params.sourceKey,
    direction: params.direction,
    force: params.force,
    sourceCheckpointKey: params.sourceCheckpointKey,
    unreadCommentCount: params.unreadCommentCount,
    readOnly: state.mirror.appModel.isReadOnly,
  }
  thunkAPI.dispatch(showBranchMergeModalThunk(mergeParams))
})

// Original: let $$ep3 = createOptimistThunk((e, { ... }) => { ... })
export const initiateBranchMergeThunk = createOptimistThunk((thunkAPI, params: InitiateBranchMergeParams) => {
  const state = thunkAPI.getState()
  const selectedFile = getSelectedFile(state)
  if (selectedFile && selectedFile.source_file_key) {
    thunkAPI.dispatch(handleBranchMergeThunk({
      branchKey: selectedFile.key,
      sourceKey: selectedFile.source_file_key,
      direction: params.direction,
      force: params.force,
      sourceCheckpointKey: params.sourceCheckpointKey,
      unreadCommentCount: params.unreadCommentCount,
    }))
    if (params.direction === SourceDirection.FROM_SOURCE) {
      trackEventAnalytics('Branch Update From Main Clicked', {
        trackingContext: params.trackingContextName,
        fileKey: selectedFile.key,
        fileRepoId: selectedFile.file_repo_id,
        sourceCheckpointKey: params.sourceCheckpointKey,
      })
    }
  }
})

// Original: let $$em1 = createOptimistThunk((e) => { ... })
export const showIncrementalUpdateModalThunk = createOptimistThunk((thunkAPI) => {
  const { openFile } = thunkAPI.getState()
  if (openFile && openFile.sourceFileKey && openFile.sourceCheckpointId) {
    thunkAPI.dispatch(showModalHandler({
      type: IncrementalUpdateModal,
      data: {
        sourceKey: openFile.sourceFileKey,
        currentFileKey: openFile.key,
        onCheckpointSelected: (checkpointKey) => {
          thunkAPI.dispatch(initiateBranchMergeThunk({
            direction: SourceDirection.FROM_SOURCE,
            trackingContextName: TrackingKeyEnum.BRANCHING_UPDATE_FROM_VERSION_MODAL,
            sourceCheckpointKey: checkpointKey === 'latest' ? undefined : checkpointKey,
          }))
        },
      },
    }))
  }
})

// Original: let $$eh4 = createOptimistThunk((e, { ... }) => { ... })
export const openSourceFileThunk = createOptimistThunk((thunkAPI, params: OpenSourceFileParams) => {
  const openFile = thunkAPI.getState().openFile
  if (!openFile || !openFile.sourceFile)
    return
  const sourceFile = openFile.sourceFile
  thunkAPI.dispatch(selectViewAction({
    view: 'fullscreen',
    fileKey: sourceFile.key,
    editorType: FEditorType.Design,
  }))
  trackEventAnalytics('Open File Click', {
    trackingContext: params.trackingContextName,
    fileKey: sourceFile.key,
    fileRepoId: sourceFile.fileRepoId,
  })
})

// Original: let $$eg6 = createOptimistThunk((e, { ... }) => { ... })
export const showBranchesModalThunk = createOptimistThunk((thunkAPI, params: ShowBranchesModalParams) => {
  const state = thunkAPI.getState()
  const selectedFile = getSelectedFile(state)
  if (selectedFile) {
    thunkAPI.dispatch(showModalHandler({
      type: jS, // Assumed external modal
    }))
    trackEventAnalytics('View Branches Clicked', {
      trackingContext: params.trackingContextName,
      fileKey: selectedFile.key,
      fileRepoId: selectedFile.file_repo_id,
    })
  }
})

// Original exports
export const Z = fetchSourceFileInfoThunk
export const dZ = showIncrementalUpdateModalThunk
export const Cp = handleBranchMergeThunk
export const hx = initiateBranchMergeThunk
export const oz = openSourceFileThunk
export const kq = showBranchMergeModalThunk
export const o5 = showBranchesModalThunk
