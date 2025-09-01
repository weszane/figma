import { XHR } from "../905/910117";
export let $$s0 = new class {
  async pinFile({
    resourceType: e,
    resourceId: t,
    fileKey: r,
    description: s,
    shouldUpdatePermissions: i
  }) {
    await XHR.post(`/api/pinned_files/${e}/${t}`, {
      file_key: r,
      description: s,
      should_update_permissions: i
    });
  }
  async updatePin({
    pinnedFileId: e,
    description: t
  }) {
    await XHR.put(`/api/pinned_files/${e}`, {
      description: t
    });
  }
  async deletePin({
    pinnedFileId: e
  }) {
    await XHR.del(`/api/pinned_files/${e}`);
  }
}();
export const p = $$s0;