import { createActionCreator } from '../905/73481'
import { mergePublishedPluginThunk } from '../905/172918'
import { resolveMessage } from '../905/231762'
import { addTemplateToRecentsThunk, addTemplateToRecentsWithUserId, setRecentTemplates } from '../905/321397'
import { createOptimistThunk } from '../905/350402'
import { pluginAddFirstRanAtAction } from '../905/542113'
import { logger } from '../905/651849'
import { FaceToolType, FetchStatus } from '../905/862883'
import { XHR } from '../905/910117'
import { HubTypeEnum, isWidget } from '../figma_app/45218'
import { enrichPluginWithPublishers, getRecentItems } from '../figma_app/190980'
import { getPluginVersion, resolveFrameworkType } from '../figma_app/300692'
import { isValidWidgetType } from '../figma_app/364284'
import { getHubTypeString } from '../figma_app/740025'

/**
 * Recent Whiteboard Tools Actions and Thunks
 */
export const setRecentWhiteboardToolsAction = createActionCreator('SET_RECENT_WHITEBOARD_TOOLS')
export const syncRecentWhiteboardToolsThunk = createOptimistThunk((api, payload) => {
  // syncRecentWhiteboardToolsThunk (original: $$E25)
  const recentWhiteboardTools = getRecentItems(payload.storeInRecentsKey, FaceToolType.WHITEBOARD_TOOL)
  api.dispatch(setRecentWhiteboardToolsAction({
    storeInRecentsKey: payload.storeInRecentsKey,
    recentWhiteboardTools,
  }))
})

export const addWhiteboardToolToRecentsAction = createActionCreator('ADD_WHITEBOARD_TOOL_TO_RECENTS')

/**
 * Recent Face Stamps Actions and Thunks
 */
export const setRecentFaceStampsAction = createActionCreator('SET_RECENT_FACE_STAMPS')
export const syncRecentFaceStampsThunk = createOptimistThunk((api, payload) => {
  // syncRecentFaceStampsThunk (original: $$T18)
  const recentFaceStamps = getRecentItems(payload.storeInRecentsKey, FaceToolType.FACE_STAMP)
  api.dispatch(setRecentFaceStampsAction({
    storeInRecentsKey: payload.storeInRecentsKey,
    recentFaceStamps,
  }))
})

export const addFaceStampToRecentsAction = createActionCreator('ADD_FACE_STAMP_TO_RECENTS')

/**
 * Recent Plugins Actions and Thunks
 */
export const syncRecentPluginsAction = createActionCreator('SYNC_RECENT_PLUGINS')
export const syncRecentPluginsThunk = createOptimistThunk((api, payload) => {
  // syncRecentPluginsThunk (original: $$v1)
  const recentResources = getRecentItems(payload.storeInRecentsKey, HubTypeEnum.PLUGIN)
  api.dispatch(setRecentPluginsAction({
    storeInRecentsKey: payload.storeInRecentsKey,
    recentResources,
  }))
  const resourceIds = recentResources.map(item => item.id)
  api.dispatch(syncFetchedVersionsThunk({
    resourceType: HubTypeEnum.PLUGIN,
    resourceIds,
  }))
  api.dispatch(syncRecentPluginsAction(payload))
})

export const setRecentPluginsAction = createActionCreator('SET_RECENT_PLUGINS')

/**
 * Recent Widgets Actions and Thunks
 */
export const syncRecentWidgetsAction = createActionCreator('SYNC_RECENT_WIDGETS')
export const syncRecentWidgetsThunk = createOptimistThunk((api, payload) => {
  // syncRecentWidgetsThunk (original: $$x12)
  const recentResources = getRecentItems(payload.storeInRecentsKey, HubTypeEnum.WIDGET)
  api.dispatch(setRecentWidgetsAction({
    storeInRecentsKey: payload.storeInRecentsKey,
    recentResources,
  }))
  const resourceIds = recentResources.map(item => item.id)
  api.dispatch(syncFetchedVersionsThunk({
    resourceType: HubTypeEnum.WIDGET,
    resourceIds,
  }))
  api.dispatch(syncRecentWidgetsAction(payload))
})

export const setRecentWidgetsAction = createActionCreator('SET_RECENT_WIDGETS')

/**
 * Recent Templates Actions and Thunks
 */
export const setRecentTemplatesAction = setRecentTemplates
export const addTemplateToRecentsWithUserIdThunk = addTemplateToRecentsWithUserId
export const addTemplateToRecentsThunkAction = addTemplateToRecentsThunk

/**
 * Fetched Version Actions
 */
export const addFetchedPluginVersionAction = createActionCreator('ADD_FETCHED_PLUGIN_VERSION')
export const addFetchedWidgetVersionAction = createActionCreator('ADD_FETCHED_WIDGET_VERSION')

/**
 * Sync Fetched Versions Thunk
 */
export const syncFetchedVersionsThunk = createOptimistThunk((api, payload) => {
  // syncFetchedVersionsThunk (original: $$D9)
  fetchAndSyncVersions(api, payload)
})

/**
 * Add Plugin/Widget to Recents Actions and Thunks
 */
export const addPluginToRecentsAction = createActionCreator('ADD_PLUGIN_TO_RECENTS')
export const addPluginToRecentsThunk = createOptimistThunk((api, payload) => {
  // addPluginToRecentsThunk (original: $$M17)
  api.dispatch(syncFetchedVersionsThunk({
    resourceType: HubTypeEnum.PLUGIN,
    resourceIds: [payload.id],
  }))
  if (!payload.skipPluginRun) {
    handlePluginRun(
      payload.id,
      payload.currentUserId,
      api.getState().currentUserOrgId,
      api.getState().publishedPlugins[payload.id],
      api.getState().recentlyUsed.plugins[payload.storeInRecentsKey],
      !!payload.isDevelopment,
      api.dispatch,
    )
  }
  api.dispatch(addPluginToRecentsAction(payload))
})

export const addWidgetsToRecentsAction = createActionCreator('ADD_WIDGETS_TO_RECENTS')
export const addWidgetToRecentsThunk = createOptimistThunk((api, payload) => {
  // addWidgetToRecentsThunk (original: $$j7)
  api.dispatch(syncFetchedVersionsThunk({
    resourceType: HubTypeEnum.WIDGET,
    resourceIds: [payload.id],
  }))
  if (!payload.skipPluginRun) {
    handlePluginRun(
      payload.id,
      payload.currentUserId,
      api.getState().currentUserOrgId,
      api.getState().publishedWidgets[payload.id],
      api.getState().recentlyUsed.widgets[payload.storeInRecentsKey],
      !!payload.isDevelopment,
      api.dispatch,
    )
  }
  api.dispatch(addWidgetsToRecentsAction(payload))
})

/**
 * Remove Recently Used Actions
 */
export const removeRecentlyUsedPluginAction = createActionCreator('REMOVE_RECENTLY_USED_PLUGIN')
export const removeRecentlyUsedWidgetAction = createActionCreator('REMOVE_RECENTLY_USED_WIDGET')

/**
 * Handles plugin run logic for first run tracking.
 * @param id Plugin/widget id
 * @param userId Current user id
 * @param orgId Current user org id
 * @param publishedResource Published plugin/widget
 * @param recentResources Recently used resources
 * @param isDevelopment Is development mode
 * @param dispatch Redux dispatch
 */
function handlePluginRun(
  id: string,
  userId: string,
  orgId: string,
  publishedResource: any,
  recentResources: any[],
  isDevelopment: boolean,
  dispatch: Fn,
) {
  // handlePluginRun (original: G)
  if (publishedResource?.current_user_has_run || !userId || isValidWidgetType(id) || isDevelopment)
    return
  const resource = recentResources.find(item => item.id === id)
  if (resource?.run_by_user_ids?.includes(userId))
    return
  XHR.post(`/api/plugin_runs/${id}`, { org_id: orgId })
    .then(({ data }) => {
      dispatch(pluginAddFirstRanAtAction({
        resourceId: id,
        userFirstRanAt: data.meta.created_at,
      }))
    })
    .catch((err) => {
      logger.error(resolveMessage(err))
    })
}

/**
 * Dispatches add to recents for all editor types of a plugin/widget.
 * @param resource Plugin/widget resource
 * @param userId Current user id
 */
export function addResourceToRecentsByEditorType(resource: any, userId: string) {
  return (dispatch: Fn) => {
  // addResourceToRecentsByEditorType (original: $$V16)
    const versionInfo = getPluginVersion(resource)
    const editorTypes = (versionInfo.manifest?.editorType ?? []).map(resolveFrameworkType)
    const addToRecentsThunk = isWidget(resource) ? addWidgetToRecentsThunk : addPluginToRecentsThunk
    editorTypes.forEach((editorType) => {
      dispatch(addToRecentsThunk({
        storeInRecentsKey: editorType,
        id: resource.id,
        version: versionInfo.id,
        currentUserId: userId,
      }))
    })
  }
}

/**
 * Fetches and syncs plugin/widget versions.
 * @param api Redux thunk API
 * @param payload Resource type and ids
 * @returns Promise resolving to version map
 */
export function fetchAndSyncVersions(api: any, payload: { resourceType: HubTypeEnum, resourceIds: string[] }) {
  // fetchAndSyncVersions (original: $$H8)
  const versionMap: Record<string, any> = {}
  const dispatchVersion = ({
    id,
    version,
    status,
  }: { id: string, version?: any, status: FetchStatus }) => {
    const action = payload.resourceType === HubTypeEnum.PLUGIN
      ? addFetchedPluginVersionAction
      : addFetchedWidgetVersionAction
    if (version)
      versionMap[id] = version
    return api.dispatch(action({ id, version, status }))
  }

  const toFetch: string[] = []
  payload.resourceIds.forEach((id) => {
    const installedVersion = payload.resourceType === HubTypeEnum.PLUGIN
      ? api.getState().installedPluginVersions.plugins[id]
      : undefined
    if (installedVersion) {
      dispatchVersion({ id, version: installedVersion, status: FetchStatus.FETCHED })
      return
    }
    const fetchedResource = payload.resourceType === HubTypeEnum.PLUGIN
      ? api.getState().recentlyUsed.plugins.fetchedResources[id]
      : api.getState().recentlyUsed.widgets.fetchedResources[id]
    if (
      fetchedResource
      && fetchedResource.status !== FetchStatus.NOT_FETCHED
      && fetchedResource.status !== FetchStatus.FETCHING
      && (fetchedResource.status !== FetchStatus.FETCHED || fetchedResource.version)
    ) {
      if (fetchedResource.version)
        versionMap[id] = fetchedResource.version
    }
    else {
      toFetch.push(id)
    }
  })

  if (!toFetch.length) {
    return Promise.resolve(versionMap)
  }

  toFetch.forEach((id) => {
    dispatchVersion({ id, status: FetchStatus.FETCHING })
  })

  const requestPayload = {
    ids: toFetch,
    org_id: api.getState().currentUserOrgId,
    include_pending: true,
  }

  return XHR.post(`/api/${getHubTypeString(payload.resourceType)}/batch`, requestPayload)
    .then(({ data }) => {
      api.dispatch(mergePublishedPluginThunk({
        publishedPlugins: data.meta,
        src: 'fetchExtensionVersions',
        overrideInstallStatus: true,
      }))
      toFetch.forEach((id) => {
        let version
        const meta = data.meta.find((item: any) => item.id === id)
        if (meta)
          version = enrichPluginWithPublishers(meta)
        dispatchVersion({ id, version, status: FetchStatus.FETCHED })
      })
      return versionMap
    })
    .catch(() => {
      toFetch.forEach((id) => {
        dispatchVersion({ id, status: FetchStatus.NOT_FETCHED })
      })
      return {}
    })
}

// Exported variable names refactored to match new function/constant names
export const F9 = addFaceStampToRecentsAction
export const HQ = syncRecentPluginsThunk
export const Hx = addTemplateToRecentsThunkAction
export const KA = setRecentWhiteboardToolsAction
export const Kq = removeRecentlyUsedWidgetAction
export const Ks = setRecentPluginsAction
export const QN = addWidgetsToRecentsAction
export const RH = addWidgetToRecentsThunk
export const TN = fetchAndSyncVersions
export const Vg = syncFetchedVersionsThunk
export const Vu = setRecentWidgetsAction
export const WR = syncRecentPluginsAction
export const aF = syncRecentWidgetsThunk
export const ay = addWhiteboardToolToRecentsAction
export const cu = addFetchedPluginVersionAction
export const f0 = addFetchedWidgetVersionAction
export const fR = addResourceToRecentsByEditorType
export const gU = addPluginToRecentsThunk
export const gr = syncRecentFaceStampsThunk
export const jS = syncRecentWidgetsAction
export const jX = addPluginToRecentsAction
export const lD = removeRecentlyUsedPluginAction
export const nM = setRecentTemplatesAction
export const pj = addTemplateToRecentsWithUserIdThunk
export const v8 = setRecentFaceStampsAction
export const vZ = syncRecentWhiteboardToolsThunk
