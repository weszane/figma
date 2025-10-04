import { sendWithRetry } from "../905/910117"
import { BuildStatus } from "../figma_app/763686"

export class NodeStatusTracker {
  /**
   * Get the status type string from BuildStatus enum
   * @param status - The build status enum value
   * @returns The corresponding status type string
   */
  getStatusType(status: BuildStatus): string {
    switch (status) {
      case BuildStatus.BUILD:
        return "build"
      case BuildStatus.COMPLETED:
        return "completed"
      default:
        return "none"
    }
  }

  /**
   * Record status change by sending data to the API
   * @param params - The parameters containing status change information
   */
  recordStatusChange(params: {
    fileKey: string
    nodeId: string
    nodeName: string
    nodeType: string
    status: BuildStatus
    pageName: string
    prevStatus: BuildStatus
    description: string
    previewBackground: string
    prevActivityId: string
  }): void {
    sendWithRetry.post(`/api/files/${params.fileKey}/node_status`, {
      node_id: params.nodeId,
      node_name: params.nodeName,
      node_type: params.nodeType,
      node_status_type: this.getStatusType(params.status),
      page_name: params.pageName,
      node_prev_status_type: this.getStatusType(params.prevStatus),
      node_status_description: params.description,
      node_preview_background: params.previewBackground,
      prev_activity_id: params.prevActivityId,
    })
  }
}

export const nodeStatusTracker = new NodeStatusTracker()
export const f = nodeStatusTracker
