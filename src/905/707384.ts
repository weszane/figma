import { debugState } from '../905/407919'
import { trackEventAnalytics } from '../905/449184'
import { sendMetric } from '../905/485103'

/**
 * Indicates if OOM metric reporting is enabled.
 * @original s
 */
let isOOMReportingEnabled = true

/**
 * Maps a memory size in bytes to a human-readable bin.
 * @param bytes - Memory size in bytes.
 * @returns Memory bin label.
 * @original o
 */
function getMemoryBin(bytes: number): string {
  if (bytes < 0x8000000)
    return '0mb-to-128mb'
  if (bytes < 0x10000000)
    return '128mb-to-256mb'
  if (bytes < 0x20000000)
    return '256mb-to-512mb'
  if (bytes < 0x40000000)
    return '512mb-to-1gb'
  if (bytes < 0x80000000)
    return '1gb-to-2gb'
  if (bytes < 0x100000000)
    return '2gb-to-4gb'
  return '>4gb'
}

/**
 * OOM event data structure.
 */
export interface OOMEventData {
  totalMemoryInBytes: number
  failedSize: number
  lastAction?: string
  [key: string]: any
}

/**
 * Handles Out Of Memory (OOM) error reporting and analytics.
 * @param eventData - OOM event data.
 * @param forwardToDatadog - Whether to forward metrics to Datadog.
 * @param productType - Product type identifier.
 * @original $$l0
 */
export function handleOOMError(
  eventData: OOMEventData,
  forwardToDatadog: boolean,
  productType: string,
): void {
  if (!isOOMReportingEnabled)
    return
  isOOMReportingEnabled = false

  const memoryBin = getMemoryBin(eventData.totalMemoryInBytes)
  if (forwardToDatadog) {
    sendMetric('oom_error', {
      memory: memoryBin,
      productType,
    })
  }

  const failedSizeBin = getMemoryBin(eventData.failedSize)
  trackEventAnalytics(
    'Out Of Memory',
    {
      ...eventData,
      memoryUsageBin: memoryBin,
      failedSizeBin,
      productType,
    },
    { forwardToDatadog },
  )

  if (eventData.lastAction === 'enter-branching-mode') {
    const state = debugState.getState()
    trackEventAnalytics(
      'Branching out of memory',
      {
        ...eventData,
        memoryUsageBin: memoryBin,
        failedSizeBin,
        branchingSceneState: state.mirror?.appModel?.branchingSceneState,
        lastBranchingStagingAction: state.mirror?.appModel?.lastBranchingStagingAction,
        productType,
      },
      { forwardToDatadog },
    )
  }
}

/** Exported alias for handleOOMError (original: x) */
export const x = handleOOMError
