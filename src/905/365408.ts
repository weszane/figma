import { zIx } from "../figma_app/763686";
import { XHR } from "../905/910117";
import { FEventType, FBuildStatusType } from "../figma_app/191312";
export let $$s0 = new class {
  async recordStatusChange(e) {
    let t = new Date().toISOString();
    return await XHR.post(`/api/files/${e.fileKey}/dev_mode_activity`, {
      nodes: e.nodes,
      activity_data: {
        type: FEventType.STATUS_CHANGE,
        status: function (e) {
          switch (e) {
            case zIx.BUILD:
              return FBuildStatusType.BUILD;
            case zIx.NONE:
              return FBuildStatusType.NONE;
            case zIx.COMPLETED:
              return FBuildStatusType.COMPLETED;
          }
        }(e.status),
        description: e.description
      },
      version_id: e.versionId,
      timestamp: t
    });
  }
}();
export const e = $$s0;