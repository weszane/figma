/* eslint-disable no-console */
import { addBreadcrumb } from '@sentry/browser'
import { atom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { noop } from 'lodash-es'
import { useSelector } from 'react-redux'
import { selectWithShallowEqual } from '../905/103090'
import { createReduxSubscriptionAtomWithState } from '../905/270322'
import { teamsAtom } from '../905/338617'
import { selectCurrentUser } from '../905/372672'
import { trackEventAnalytics } from '../905/449184'
import { subscribeAndAwaitData } from '../905/553831'
import { getFeatureFlags } from '../905/601108'
import { setupFileObject } from '../905/628874'
import { createFileLibraryKeys } from '../905/651613'
import { resourceUtils } from '../905/989992'
import { FileCanTestPlanRecordPermission, FilePermissionsLgShadowView, OpenEditorFileData } from '../figma_app/43951'
import { useSubscription, useSuspendableSubscription } from '../figma_app/288654'
import { handleResourceAtomMetrics, setupResourceAtomHandler } from '../figma_app/566371'
import { usePreviousValue } from '../figma_app/922077'
import { useAtomWithSubscription } from './27355'
/**
 * Retrieves the file object for the currently selected fullscreen view.
 * @param store - Redux store object.
 * @returns The file object or null.
 * (Original: $$S2)
 */
export async function getFullscreenViewFile(store) {
  const selectedView = store.getState().selectedView
  const fileKey = selectedView.view === 'fullscreen' && selectedView.fileKey
  if (fileKey) {
    const { file } = await subscribeAndAwaitData(OpenEditorFileData, { fileKey })
    return file || null
  }
  return null
}

/**
 * Hook to get the file object for the currently selected fullscreen view.
 * (Original: $$v6)
 */
export function useFullscreenViewFile() {
  const fileKey = useSelector<any>(state => state.selectedView?.view === 'fullscreen' ? state.selectedView.fileKey : undefined);

  // Subscribe to shadow view permissions if feature flag enabled
  (() => {
    const enabled = getFeatureFlags().iam_pv2_lg_pol_smoke && !!fileKey
    useSubscription(FilePermissionsLgShadowView, { fileKey, linkAccessOverrideKey: null }, { enabled })
  })();

  // Subscribe to test plan record permission if feature flag enabled
  (() => {
    const enabled = getFeatureFlags().pv2_plan_record_dummy_policy && !!fileKey
    useSubscription(FileCanTestPlanRecordPermission, { key: fileKey }, { enabled })
  })()

  const subscription = useSubscription(OpenEditorFileData, { fileKey: fileKey || '' }, { enabled: !!fileKey })
  return resourceUtils.useTransform(subscription, ({ file }) => file)
}

/**
 * Selector for openFile from Redux state.
 * (Original: $$A16)
 */
export function selectOpenFile(state) {
  return state.openFile
}

/** Atom for openFile subscription (Original: $$x20) */
export const openFileAtom = createReduxSubscriptionAtomWithState(selectOpenFile)

/**
 * Atom to get the team object for the open file.
 * (Original: $$N3)
 */
export const openFileTeamAtom = atom((get) => {
  const openFile = get(openFileAtom)
  const teams = get(teamsAtom)
  return openFile?.teamId ? teams[openFile.teamId] ?? null : null
})

/** Atom to select teamId from openFile (Original: $$C0) */
export const openFileTeamIdAtom = selectAtom(openFileAtom, openFile => openFile?.teamId ?? undefined)

/**
 * Selector for openFile key from Redux state.
 * (Original: $$w15)
 */
export function selectOpenFileKey(state) {
  return state.openFile?.key || null
}

/** Atom for openFile key subscription (Original: $$O21) */
export const openFileKeyAtom = createReduxSubscriptionAtomWithState(selectOpenFileKey)

/**
 * Selector for libraryKey from openFile.
 * (Original: $$R7)
 */
export function selectOpenFileLibraryKey(state) {
  const openFile = selectOpenFile(state)
  return openFile ? openFile.libraryKey : null
}

/** Atom for openFile libraryKey subscription (Original: $$L10) */
export const openFileLibraryKeyAtom = createReduxSubscriptionAtomWithState(selectOpenFileLibraryKey)

/** Hook to get openFile libraryKey (Original: $$P9) */
export const useOpenFileLibraryKey = () => useAtomWithSubscription(openFileLibraryKeyAtom)


/** Exported selector for current file (Original: $$j14) */
export const selectCurrentFile = getFeatureFlags().preload_open_editor_file_data ? useCurrentFile : useOpenFile

/**
 * Hook to get editorType from current file.
 * (Original: $$U8)
 */
export function useEditorType() {
  const file = selectCurrentFile()
  return file?.editorType
}

/** Hook to get current file key (Original: $$B17) */
export const useCurrentFileKey = () => selectCurrentFile()?.key || null


/**
 * Hook to create file library keys from openFile key and libraryKey.
 * (Original: $$D4)
 */
export function useFileLibraryKeys() {
  const fileKey = useCurrentFileKey()
  const libraryKey = useOpenFileLibraryKey()
  return createFileLibraryKeys(fileKey, libraryKey)
}

/**
 * Selector for file object by openFile key.
 * (Original: $$k19)
 */
export function selectOpenFileObject(state) {
  const key = state.openFile?.key
  return key && state.fileByKey[key] || null
}

/** Hook to get openFile from Redux (Original: M) */
function useOpenFile() {
  return useSelector(selectOpenFile)
}

/**
 * Hook to get the file object depending on selected view.
 * (Original: $$F13)
 */
export function useCurrentFile() {
  const isPrototypeView = useSelector<any>(state => state.selectedView?.view === 'prototype')
  const fullscreenFile = (() => {
    const fileKey = useSelector<any>(state => state.selectedView?.view === 'fullscreen' ? state.selectedView.fileKey : null)
    const subscription = useSuspendableSubscription(OpenEditorFileData(fileKey ? { fileKey } : null))
    return resourceUtils.useTransform(subscription, ({ file }) => file)
  })()
  const openFile = useOpenFile()
  return isPrototypeView ? openFile : fullscreenFile.data ?? null
}


/**
 * Hook to get sourceFileKey or key from current file.
 * (Original: $$G18)
 */
export function useSourceFileKey() {
  const file = selectCurrentFile()
  return (file?.sourceFileKey ?? file?.key) || null
}

/**
 * Hook to check if current user is creator of current file.
 * (Original: $$V5)
 */
export function useIsCurrentUserCreator() {
  const file = selectCurrentFile()
  const user = selectCurrentUser()
  return file?.creatorId === user?.id
}

/**
 * Hook to get openFile and fileByKey, then transform with useSinatraType.
 * (Original: $$H1)
 */
export function useOpenFileObjectWithSinatraType(options) {
  return transformOpenFileObject(selectWithShallowEqual(state => ({
    openFile: state.openFile,
    fileByKey: state.fileByKey,
  })), options)
}

/**
 * Transform openFile object depending on useSinatraType.
 * (Original: $$z11)
 */
export function transformOpenFileObject(state, options) {
  const fileObj = selectOpenFileObject(state)
  return options?.useSinatraType ? fileObj : fileObj ? setupFileObject(fileObj) : null
}

/**
 * Metrics handler for suspense resolution.
 * (Original: W)
 */
function handleSuspenseResolved(suspenseDuration) {
  console.log('_useRequireOpenFileOrSuspend resolved')
  addBreadcrumb({
    category: 'suspense',
    message: '_useRequireOpenFileOrSuspend resolved successfully',
  })
  trackEventAnalytics('open_file_lg_suspended', { suspenseDuration })
}

/**
 * Metrics handler for suspense about to suspend.
 * (Original: K)
 */
function handleSuspenseWillSuspend() {
  console.log('_useRequireOpenFileOrSuspend is about to suspend')
  addBreadcrumb({
    category: 'suspense',
    message: '_useRequireOpenFileOrSuspend is about to suspend',
  })
}

/**
 * Hook to require open file or suspend, with metrics.
 * (Original: $$Y12)
 */
export const useRequireOpenFileOrSuspend = getFeatureFlags().preload_open_editor_file_data
  ? function (fileKey) {
    const prevFileKey = usePreviousValue(fileKey ?? null)
    const [resourceAtom] = setupResourceAtomHandler(OpenEditorFileData({ fileKey }), { enabled: !!fileKey })
    const metrics = handleResourceAtomMetrics(
      resourceAtom,
      fileKey && prevFileKey === null ? 'passthrough' : 'suspend',
      {
        willSuspend: handleSuspenseWillSuspend,
        onResolveForMetrics: handleSuspenseResolved,
        metricKey: 'openFile',
      },
    )
    if (metrics.status === 'errors')
      throw metrics.errors[0]
    return metrics.status === 'disabled' || metrics.status === 'loading' ? null : metrics.data.file
  }
  : noop

// Exported variables with refactored names
export const As = openFileTeamIdAtom
export const Cq = useOpenFileObjectWithSinatraType
export const Dz = getFullscreenViewFile
export const Hu = openFileTeamAtom
export const K5 = useFileLibraryKeys
export const Kf = useIsCurrentUserCreator
export const MY = useFullscreenViewFile
export const XJ = selectOpenFileLibraryKey
export const XO = useEditorType
export const _G = useOpenFileLibraryKey
export const _S = openFileLibraryKeyAtom
export const bv = transformOpenFileObject
export const eq = useRequireOpenFileOrSuspend
export const l3 = useCurrentFile
export const q5 = selectCurrentFile
export const sS = selectOpenFileKey
export const tB = selectOpenFile
export const tS = useCurrentFileKey
export const uL = useSourceFileKey
export const vu = selectOpenFileObject
export const yV = openFileAtom
export const ze = openFileKeyAtom
