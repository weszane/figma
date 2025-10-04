import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { permissionScopeHandler, zk } from '../905/189185'
import { maybeCreateSavepoint } from '../905/294113'
import { getI18nString } from '../905/303541'
import { devModeActivityRecorder } from '../905/365408'
import { debugState } from '../905/407919'
import { nodeStatusTracker } from '../905/436809'
import { handleAtomEvent } from '../905/502364'
import { subscribeMultipleAndAwaitAll } from '../905/553831'
import { n as _$$n } from '../905/917104'
import { postUserFlag } from '../905/985254'
import { atomStoreManager } from '../figma_app/27355'
import { DevModeActivity } from '../figma_app/43951'
import { isNotNullish } from '../figma_app/95419'
import { dispatchShowVisualBell } from '../figma_app/172303'
import { FEventType } from '../figma_app/191312'
import { trackFileEvent } from '../figma_app/314264'
import { getBackgroundColorWithOverride } from '../figma_app/379850'
import { fullscreenValue } from '../figma_app/455680'
import { canAccessFullDevMode } from '../figma_app/473493'
import { isDevModeFocusViewCopyActive } from '../figma_app/544649'
import { d as _$$d, cR, hv, pc } from '../figma_app/715641'
import { BuildStatus, HandoffBindingsCpp, Multiplayer, SessionOrigin } from '../figma_app/763686'
import { zi } from '../figma_app/867292'
import { d1, hj } from '../figma_app/888478'

interface TrackEditStatusParams {
  status: string
  prevStatus: string
  source: string
  numNodesUpdated: number
  nodeId: string
  nodeType: string
  isReadOnly: boolean
  description: string
  isEdited: boolean
}

/**
 * Tracks dev handoff edit status events
 * (Original function: w)
 */
function trackDevHandoffEditStatus({
  status,
  prevStatus,
  source,
  numNodesUpdated,
  nodeId,
  nodeType,
  isReadOnly,
  description,
  isEdited,
}: TrackEditStatusParams): void {
  const state = debugState.getState()
  trackFileEvent('dev_handoff_edit_status', state.openFile?.key, state, {
    status,
    prevStatus,
    source,
    numNodesUpdated,
    nodeId,
    nodeType,
    isViewOnly: isReadOnly,
    hasDescription: description !== '',
    description,
    isEdited,
  }, {
    forwardToDatadog: true,
  })
}

interface RecordStatusChangeActivityParams {
  nodes: Array<{
    id: string
    name: string
    type: string
    pageName: string
    prevStatus: BuildStatus
    previewBackground: string
    isUpdated: boolean
  }>
  status: BuildStatus
  statusString: string
  source: string
  description: string | undefined
}

/**
 * Records status change activity for dev mode
 * (Original function: O)
 */
async function recordStatusChangeActivity({
  nodes,
  status,
  statusString,
  source,
  description,
}: RecordStatusChangeActivityParams): Promise<void> {
  let versionId: string | undefined
  const dispatch = debugState.dispatch
  const state = debugState.getState()
  const fileKey = state.openFile?.key || ''
  const descriptionValue = description ?? undefined
  const startTime = performance.now()

  if (atomStoreManager.set(pc, true), status === BuildStatus.BUILD || status === BuildStatus.COMPLETED) {
    try {
      const savepoint = await maybeCreateSavepoint(fileKey, zi(status) ?? undefined, descriptionValue, dispatch, true)
      versionId = savepoint?.id
      if (fileKey && !versionId) {
        reportError(ServiceCategories.DEVELOPER_TOOLS, new Error('[Dev mode activity] createSavepoint returned no id'))
      }
    }
    catch (error) {
      reportError(ServiceCategories.DEVELOPER_TOOLS, new Error(`[Dev mode activity] Error creating version on status change: ${error.stack}`))
    }
  }

  let isActivitySaved = false
  permissionScopeHandler(zk.SYSTEM, 'store-status-activity', async () => {
    try {
      await devModeActivityRecorder.recordStatusChange({
        fileKey,
        nodes,
        status,
        description: descriptionValue,
        versionId,
      })
      isActivitySaved = true
    }
    catch (error) {
      reportError(ServiceCategories.DEVELOPER_TOOLS, new Error(`[Dev mode activity] Error creating activity: ${error.stack}`))
    }
    finally {
      const elapsedMs = performance.now() - startTime
      trackFileEvent('dev_handoff_status_activity', fileKey, state, {
        elapsedMs,
        status: statusString,
        source,
        savedVersion: !!versionId,
        savedActivity: isActivitySaved,
        nodeIds: nodes.map(node => node.id),
      }, {
        forwardToDatadog: true,
      })
      atomStoreManager.set(pc, false)
    }
  })
}

/**
 * Maps BuildStatus to string representation
 * (Original function: R)
 */
function mapBuildStatusToString(status: BuildStatus): string {
  switch (status) {
    case BuildStatus.BUILD:
      return 'ready_for_dev'
    case BuildStatus.COMPLETED:
      return 'completed'
    default:
      return 'none'
  }
}

interface NodeActivityLookupParams {
  id: string
  isUpdated: boolean
}

/**
 * Looks up previous activity IDs for nodes
 * (Original function: $$L)
 */
async function lookupNodeActivityIds(
  nodes: NodeActivityLookupParams[],
  fileKey: string,
): Promise<Record<string, string>> {
  const activityRequests = nodes
    .map(({ id, isUpdated }) => isUpdated ? { fileKey, nodeId: id } : null)
    .filter(isNotNullish)

  if (activityRequests.length === 0) {
    return {}
  }

  const results = await subscribeMultipleAndAwaitAll(DevModeActivity, activityRequests)
  const activityMap: Record<string, string> = {}

  results.forEach(({ result }, index) => {
    if (result.data?.file.status === 'loaded') {
      const activities = result.data.file.data?.devModeActivity
        .filter(activity => activity.activityType === FEventType.STATUS_CHANGE)
        .sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime()) || []

      const request = activityRequests[index]
      const latestActivity = activities[0]

      if (request && latestActivity) {
        activityMap[request.nodeId] = latestActivity.id
      }
    }
  })

  return activityMap
}

export interface SetNodeStatusParams {
  nodeIds: string[]
  status: BuildStatus
  description?: string
  sourceForLogging: string
  editScopeType: any
}

/**
 * Sets node status and handles related activities
 * (Original function: $$P0)
 */
export async function setNodeStatus({
  nodeIds,
  status,
  description,
  sourceForLogging,
  editScopeType,
}: SetNodeStatusParams): Promise<void> {
  const state = debugState.getState()
  const sceneGraph = state.mirror.sceneGraph
  const fileKey = state.openFile?.key ?? ''
  const userId = state.user?.id ?? ''
  const isReadOnly = HandoffBindingsCpp.isReadOnly(SessionOrigin.NODE_STATUS)
  const statusString = mapBuildStatusToString(status)
  const dispatch = debugState.dispatch

  if (status === BuildStatus.BUILD) {
    dispatch(postUserFlag({
      has_marked_ready_for_dev: true,
    }))
    handleAtomEvent({
      id: 'marked_ready_for_dev',
      properties: {
        nodeIds,
      },
    })

    const focusedNodeId = atomStoreManager.get(hj)
    if (focusedNodeId && nodeIds.includes(focusedNodeId)) {
      const focusView = atomStoreManager.get(d1)
      focusView.fn?.()
    }
  }

  const hasBeenEditedMap = new Map<string, boolean>()
  const prevStatusStringMap = new Map<string, string>()
  const nodeDataList: Array<{
    id: string
    name: string
    type: string
    pageName: string
    prevStatus: BuildStatus
    previewBackground: string
    isUpdated: boolean
  }> = []

  for (const nodeId of nodeIds) {
    const node = sceneGraph.get(nodeId)
    if (node) {
      const nodeStatus = node.getStatusInfo().status
      hasBeenEditedMap.set(nodeId, node.hasBeenEditedSinceLastStatusChange)
      prevStatusStringMap.set(nodeId, mapBuildStatusToString(nodeStatus))

      const previewBackground = getBackgroundColorWithOverride(sceneGraph, nodeId, node.containingCanvas || '')
      const isUpdated = nodeStatus === BuildStatus.BUILD && status === BuildStatus.BUILD

      let pageName = ''
      if (node.containingCanvas) {
        const canvasNode = sceneGraph.get(node.containingCanvas)
        if (canvasNode) {
          pageName = canvasNode.name
        }
      }

      nodeDataList.push({
        id: nodeId,
        name: node.name,
        type: node.type,
        pageName,
        prevStatus: nodeStatus,
        previewBackground,
        isUpdated,
      })
    }
  }

  const isFocusViewCopyActive = isDevModeFocusViewCopyActive()

  if (isReadOnly || isFocusViewCopyActive) {
    const openFile = state.openFile
    const debugInfo = {
      status: statusString,
      canAccessDevModeRaw: openFile?.canAccessFullDevMode,
      canAccessDevModeEntryPoint: openFile?.canAccessDevModeEntryPoint,
      canAccessDevMode: canAccessFullDevMode(state),
      fileRepoId: openFile?.fileRepoId,
      userOrgId: state.user?.org_id,
      currentTeamId: state.currentTeamId,
      currentUserOrgId: state.currentUserOrgId,
      source: sourceForLogging,
      numNodes: nodeIds.length,
      editScopeType,
      userIdForMultiplayer: userId,
      linkAccess: openFile?.linkAccess,
      fileCanEdit: openFile?.canEdit,
      fileCanEditCanvas: openFile?.canEditCanvas,
      fileCanEditIgnoreEduGracePeriod: openFile?.canEditIgnoreEduGracePeriod,
      canManage: openFile?.canManage,
      canView: openFile?.canView,
      isTeamTemplate: openFile?.isTeamTemplate,
      isTryFile: openFile?.isTryFile,
      viewerExportRestricted: openFile?.viewerExportRestricted,
      fileHasPartialOrgUser: !!openFile?.currentPartialOrgUser,
      fileHasCurrentTeamUser: !!openFile?.currentTeamUser,
      hasEditRole: openFile?.hasEditRole?.data,
    }

    trackFileEvent('temp_debug_set_status_view_only', openFile?.key, state, debugInfo)

    let isMultiplayerSent = false
    setTimeout(() => {
      if (!isMultiplayerSent) {
        trackFileEvent('temp_debug_set_status_view_only_failed', openFile?.key, state, debugInfo)
      }
    }, 2000)

    Multiplayer.sendSetNodeStatus(nodeIds, status, description ?? '', userId)

    const [activityIds] = await Promise.all([lookupNodeActivityIds(nodeDataList, fileKey), _$$n()])
    isMultiplayerSent = true

    if (canAccessFullDevMode(state)) {
      for (const { id, name, type, pageName, prevStatus, previewBackground } of nodeDataList) {
        nodeStatusTracker.recordStatusChange({
          fileKey,
          nodeId: id,
          nodeName: name,
          nodeType: type,
          status,
          prevStatus,
          description: description || undefined,
          pageName,
          previewBackground,
          prevActivityId: activityIds[id] || null,
        })
      }
    }

    // Record status change activity
    await recordStatusChangeActivity({
      nodes: nodeDataList,
      status,
      statusString,
      source: sourceForLogging,
      description,
    })

    // Track edit status for each node
    for (const { id, type } of nodeDataList) {
      trackDevHandoffEditStatus({
        status: statusString,
        source: sourceForLogging,
        numNodesUpdated: nodeIds.length,
        nodeId: id,
        nodeType: type,
        isReadOnly,
        description: description ?? '',
        prevStatus: prevStatusStringMap.get(id) ?? statusString,
        isEdited: hasBeenEditedMap.get(id) ?? false,
      })
    }
  }
  else {
    if (!navigator.onLine) {
      dispatchShowVisualBell('offlineSettingNodeStatus', true, {
        message: getI18nString('dev_handoff.status.offline'),
      })
      return
    }

    permissionScopeHandler(editScopeType, 'set-nodes-status', () => {
      for (const { id } of nodeDataList) {
        const node = sceneGraph.get(id)
        if (node) {
          node.setStatus(status, userId, description ?? undefined)
        }
      }
      fullscreenValue.triggerAction('commit')
    })

    const activityIds = await lookupNodeActivityIds(nodeDataList, fileKey)

    for (const { id, name, type, pageName, prevStatus, previewBackground } of nodeDataList) {
      if (canAccessFullDevMode(state)) {
        nodeStatusTracker.recordStatusChange({
          fileKey,
          nodeId: id,
          nodeName: name,
          nodeType: type,
          status,
          prevStatus,
          description: description || undefined,
          pageName,
          previewBackground,
          prevActivityId: activityIds[id] || null,
        })
      }
    }

    // Record status change activity
    await recordStatusChangeActivity({
      nodes: nodeDataList,
      status,
      statusString,
      source: sourceForLogging,
      description,
    })

    // Track edit status for each node
    for (const { id, type } of nodeDataList) {
      trackDevHandoffEditStatus({
        status: statusString,
        source: sourceForLogging,
        numNodesUpdated: nodeIds.length,
        nodeId: id,
        nodeType: type,
        isReadOnly,
        description: description ?? '',
        prevStatus: prevStatusStringMap.get(id) ?? statusString,
        isEdited: hasBeenEditedMap.get(id) ?? false,
      })
    }
  }

  // Handle atom store state
  (function handleAtomStoreState(currentStatus: BuildStatus) {
    const isDevModeActive = atomStoreManager.get(_$$d)
    const isReadOnlyMode = atomStoreManager.get(cR)
    const hasData = atomStoreManager.get(hv)?.data
    if (currentStatus !== BuildStatus.BUILD || isDevModeActive || isReadOnlyMode || hasData) {
      return
    }
    atomStoreManager.set(_$$d, true)
  })(status)
}

export interface IsNodeUpdatedSinceActivityParams {
  lastUpdateUnixTimestamp: number
  createdAt: Date
}

/**
 * Checks if node was updated since activity was created
 * (Original function: $$D1)
 */
export function isNodeUpdatedSinceActivity({
  lastUpdateUnixTimestamp,
  createdAt,
}: IsNodeUpdatedSinceActivityParams): boolean {
  return new Date(1000 * lastUpdateUnixTimestamp) > createdAt
}

export const L = setNodeStatus
export const y = isNodeUpdatedSinceActivity
