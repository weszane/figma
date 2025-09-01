import { zIx } from "../figma_app/763686";
import { XHR } from "../905/910117";
export let $$a0 = new class {
  getStatusType(e) {
    switch (e) {
      case zIx.BUILD:
        return "build";
      case zIx.COMPLETED:
        return "completed";
      default:
        return "none";
    }
  }
  recordStatusChange(e) {
    XHR.post(`/api/files/${e.fileKey}/node_status`, {
      node_id: e.nodeId,
      node_name: e.nodeName,
      node_type: e.nodeType,
      node_status_type: this.getStatusType(e.status),
      page_name: e.pageName,
      node_prev_status_type: this.getStatusType(e.prevStatus),
      node_status_description: e.description,
      node_preview_background: e.previewBackground,
      prev_activity_id: e.prevActivityId
    });
  }
}();
export const f = $$a0;