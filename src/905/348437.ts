import { createNoOpValidator, defaultValidator } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.FileCommentAttachmentSchemaValidator = createNoOpValidator();
  }
  post(e, t, i, n, r, a) {
    return this.FileCommentAttachmentSchemaValidator.validate(async ({
      xr: s
    }) => await s.post(`/api/file/${e}/file_comment_attachments`, {
      media_type: t,
      image_sha1: i,
      thumbnail_sha1: n,
      uploaded_at: r,
      metadata: a
    }));
  }
  delete(e, t) {
    return defaultValidator.validate(async ({
      xr: i
    }) => await i.del(`/api/file/${e}/file_comment_attachments/${t}`));
  }
  put(e, t, i) {
    return defaultValidator.validate(({
      xr: n
    }) => n.put(`/api/file/${e}/file_comment_attachments/${t}`, {
      alt_text: i
    }));
  }
}();
export const l = $$r0;