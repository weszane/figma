import { z } from "../905/239603";
import { createNoOpValidator } from "../figma_app/181241";
let s = z.record(z.string(), z.string());
let a = new class {
  constructor() {
    this.CreateCodeSnapshotValidator = createNoOpValidator();
    this.GetCodeSnapshotValidator = createNoOpValidator();
  }
  createCodeSnapshot(e) {
    return this.CreateCodeSnapshotValidator.validate(async ({
      xr: t
    }) => (s.parse(e.codeFiles), await t.post(`/api/rev/${e.fileKey}/code_snapshot`, {
      code_files: e.codeFiles
    })));
  }
  getCodeSnapshot(e) {
    return this.GetCodeSnapshotValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/rev/${e.fileKey}/code_snapshot/${e.codeSnapshotKey}`));
  }
}();
export async function $$l0({
  fileKey: e,
  codeFiles: t
}) {
  let {
    code_snapshot_key,
    file_version_id
  } = (await a.createCodeSnapshot({
    fileKey: e,
    codeFiles: t
  })).data.meta;
  return {
    codeSnapshotKey: code_snapshot_key,
    fileVersionId: file_version_id
  };
}
export async function $$o1({
  fileKey: e,
  codeSnapshotKey: t
}) {
  return (await a.getCodeSnapshot({
    fileKey: e,
    codeSnapshotKey: t
  })).data.meta.code_files;
}
export const O = $$l0;
export const l = $$o1;