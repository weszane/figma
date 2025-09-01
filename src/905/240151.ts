import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.MetaSchemaValidator = vh();
    this.GetTaskSchemaValidator = vh();
    this.AttachmentUploadUrlSchemaValidator = vh();
  }
  getMeta() {
    return this.MetaSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/bug_reports/meta", {}, {
      retryCount: 1
    }));
  }
  getGetTask(e) {
    return this.GetTaskSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/bug_reports/get_task", td.toAPIParameters(e)));
  }
  getAttachmentUploadUrl(e) {
    return this.AttachmentUploadUrlSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/bug_reports/attachment_upload_url", td.toAPIParameters(e)));
  }
}();
export const o = $$r0;