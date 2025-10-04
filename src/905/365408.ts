import { sendWithRetry } from "../905/910117"
import { FBuildStatusType, FEventType } from "../figma_app/191312"
import { BuildStatus } from "../figma_app/763686"

export class DevModeActivityRecorder {
  /**
   * Records a status change event for dev mode activity
   * @param event - The status change event data
   */
  async recordStatusChange(event: {
    fileKey: string
    nodes: any[]
    status: BuildStatus
    description: string
    versionId: string
  }): Promise<any> {
    const timestamp = new Date().toISOString()

    // Map BuildStatus to FBuildStatusType
    const mapBuildStatusToFigmaType = (status: BuildStatus): FBuildStatusType => {
      switch (status) {
        case BuildStatus.BUILD:
          return FBuildStatusType.BUILD
        case BuildStatus.NONE:
          return FBuildStatusType.NONE
        case BuildStatus.COMPLETED:
          return FBuildStatusType.COMPLETED
        default:
          throw new Error(`Unknown build status: ${status}`)
      }
    }

    return await sendWithRetry.post(`/api/files/${event.fileKey}/dev_mode_activity`, {
      nodes: event.nodes,
      activity_data: {
        type: FEventType.STATUS_CHANGE,
        status: mapBuildStatusToFigmaType(event.status),
        description: event.description,
      },
      version_id: event.versionId,
      timestamp,
    })
  }
}

// Export singleton instance for backward compatibility
export const devModeActivityRecorder = new DevModeActivityRecorder()
export const e = devModeActivityRecorder
