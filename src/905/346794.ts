import { awaitSync } from '../905/412815'
import {
  DetachError,
  DetachStatus,
  DiffImpl,
  Multiplayer,
  SchemaJoinStatus,
} from '../figma_app/763686'

/**
 * Tracks the current schema join status.
 * @original s
 */
let currentJoinStatus: SchemaJoinStatus | null = null

/**
 * Map of join status to array of resolver functions.
 * @original o
 */
let statusResolvers: Map<SchemaJoinStatus, Array<() => void>> = new Map()

/**
 * Updates the current join status and resolves any pending promises for the given status.
 * @param status - The new join status.
 * @param _unused - Unused parameter.
 * @original $$l3
 */
export function updateJoinStatus(status: SchemaJoinStatus, _unused?: any): void {
  if (status === currentJoinStatus)
    return
  const resolvers = statusResolvers.get(status)
  if (resolvers) {
    for (const resolve of resolvers) resolve()
    statusResolvers.delete(status)
  }
  currentJoinStatus = status
}

/**
 * Returns a promise that resolves when the given join status is reached.
 * @param status - The join status to wait for.
 * @original $$d8
 */
export function waitForJoinStatus(status: SchemaJoinStatus): Promise<void> {
  return status === currentJoinStatus
    ? Promise.resolve()
    : new Promise((resolve) => {
      const resolvers = statusResolvers.get(status)
      if (resolvers) {
        resolvers.push(resolve)
      }
      else {
        statusResolvers.set(status, [resolve])
      }
    })
}

/**
 * Checks if the current join status is JOINED.
 * @original $$c5
 */
export const isJoined = (): boolean => currentJoinStatus === SchemaJoinStatus.JOINED

/**
 * Detaches multiplayer and waits for the detached status if needed.
 * @original $$u2
 */
export async function detachMultiplayer(): Promise<void> {
  const status = Multiplayer.detach()
  switch (status) {
    case DetachStatus.SUCCESS:
      break
    case DetachStatus.TRIGGERED_DETACH:
      await waitForJoinStatus(SchemaJoinStatus.DETACHED)
      break
    default:
      throw new Error(`Failed to detach multiplayer: ${DetachStatus[status]}`)
  }
}

/**
 * Reattaches and syncs multiplayer, waiting for JOINED status.
 * @original $$p4
 */
export async function reattachAndSyncMultiplayer(): Promise<void> {
  const error = Multiplayer.reattachAndSync()
  if (error === DetachError.INTERNAL_ERROR)
    throw new Error(`Failed to reattach and sync multiplayer: ${DetachError[error]}`)
  await waitForJoinStatus(SchemaJoinStatus.JOINED)
  await awaitSync()
}

/**
 * Abandons changes and reattaches multiplayer, waiting for JOINED status.
 * @original $$m1
 */
export async function abandonAndReattachMultiplayer(): Promise<void> {
  const error = Multiplayer.abandonAndReattach()
  if (error === DetachError.INTERNAL_ERROR)
    throw new Error(`Failed to abandon changes and reattach multiplayer: ${DetachError[error]}`)
  await waitForJoinStatus(SchemaJoinStatus.JOINED)
}

/**
 * Enters preview detached state for diff, handling detach status.
 * @original $$h9
 */
export async function enterPreviewDetachedState(
  fileId: string,
  userId: string,
): Promise<void> {
  const status = DiffImpl.enterPreviewDetachedState(fileId, userId)
  switch (status) {
    case DetachStatus.SUCCESS:
      break
    case DetachStatus.TRIGGERED_DETACH:
      await waitForJoinStatus(SchemaJoinStatus.DETACHED)
      DiffImpl.enterPreviewDetachedState(fileId, userId)
      break
    default:
      throw new Error(`Failed to detach multiplayer: ${DetachStatus[status]}`)
  }
}

/**
 * Enters merge detached state for diff, handling detach status.
 * @original $$g7
 */
export async function enterMergeDetachedState(): Promise<void> {
  const status = DiffImpl.enterMergeDetachedState()
  switch (status) {
    case DetachStatus.SUCCESS:
      break
    case DetachStatus.TRIGGERED_DETACH:
      await waitForJoinStatus(SchemaJoinStatus.DETACHED)
      DiffImpl.enterMergeDetachedState()
      break
    default:
      throw new Error(`Failed to detach multiplayer: ${DetachStatus[status]}`)
  }
}

/**
 * Commits branching staged changes and waits for JOINED status.
 * @param params - Parameters for committing changes.
 * @original $$f6
 */
export async function commitBranchingStagedChanges(params: {
  fileMergeId: string
  userId: string
  allowEmptyMerge: boolean
}): Promise<void> {
  const error = DiffImpl.commitBranchingStagedChanges(
    params.fileMergeId,
    params.userId,
    params.allowEmptyMerge,
  )
  if (error === DetachError.INTERNAL_ERROR)
    throw new Error(`Failed to reattach and sync multiplayer: ${DetachError[error]}`)
  await waitForJoinStatus(SchemaJoinStatus.JOINED)
  await awaitSync()
}

/**
 * Abandons branching changes and waits for JOINED status.
 * @param allowEmpty - Whether to allow empty abandon.
 * @original $$_0
 */
export async function abandonBranchingChanges(allowEmpty: boolean = true): Promise<void> {
  const error = DiffImpl.abandonBranchingChanges(allowEmpty)
  if (error === DetachError.INTERNAL_ERROR)
    throw new Error(`Failed to abandon changes and reattach multiplayer: ${DetachError[error]}`)
  await waitForJoinStatus(SchemaJoinStatus.JOINED)
}

// Export aliases for refactored functions
export const De = abandonBranchingChanges
export const IZ = abandonAndReattachMultiplayer
export const K7 = detachMultiplayer
export const QI = updateJoinStatus
export const dh = reattachAndSyncMultiplayer
export const eN = isJoined
export const lt = commitBranchingStagedChanges
export const mN = enterMergeDetachedState
export const oJ = waitForJoinStatus
export const w = enterPreviewDetachedState
