import { createNoOpValidator, defaultValidator } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.FeedCommentAttachmentSchemaValidator = createNoOpValidator();
  }
  post(e, t, i, n, r, a) {
    return this.FeedCommentAttachmentSchemaValidator.validate(async ({
      xr: s
    }) => await s.post("/api/feed_comment_attachment", {
      media_type: e,
      image_sha1: t,
      thumbnail_sha1: i,
      uploaded_at: n,
      metadata: r,
      locality: a
    }));
  }
  delete(e) {
    return defaultValidator.validate(async ({
      xr: t
    }) => await t.del(`/api/feed_comment_attachment/${e}`));
  }
  put(e, t) {
    return defaultValidator.validate(async ({
      xr: i
    }) => await i.put(`/api/feed_comment_attachment/${e}`, {
      alt_text: t
    }));
  }
}();
export const J = $$r0;