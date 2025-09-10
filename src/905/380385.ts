import { throwTypeError } from "../figma_app/465776";
import { z, Ip } from "../905/239603";
export let $$a7 = "at-mentions-typeahead";
var $$s3 = (e => (e.prevButton = "prevButton", e.nextButton = "nextButton", e.accessibilityCommentPin = "accessibilityCommentPin", e))($$s3 || {});
var $$o2 = (e => (e[e.BUSY = 0] = "BUSY", e[e.READY = 1] = "READY", e))($$o2 || {});
let $$l10 = "new-comment-id";
let $$d5 = 1;
export function $$c13(e) {
  switch (e) {
    case 1:
      return !0;
    case 2:
    case 0:
      return !1;
    default:
      throwTypeError(e);
  }
}
export function $$u6(e) {
  switch (e) {
    case 1:
    case 2:
      return !0;
    case 0:
      return !1;
    default:
      throwTypeError(e);
  }
}
export function $$p8(e) {
  switch (e) {
    case 1:
    case 2:
      return !0;
    case 0:
      return !1;
    default:
      throwTypeError(e);
  }
}
export function $$m9(e) {
  switch (e) {
    case 1:
      return !0;
    case 2:
    case 0:
      return !1;
    default:
      throwTypeError(e);
  }
}
export var $$h12 = (e => (e[e.FEED_POST = 0] = "FEED_POST", e[e.COMMENT_THREAD = 1] = "COMMENT_THREAD", e[e.LITMUS_COMMENT_THREAD = 2] = "LITMUS_COMMENT_THREAD", e))($$h12 || {});
export function $$g4(e) {
  if (e) return {
    added: Object.values(e.attachments).map(e => e.id),
    deleted: e.deleted
  };
}
export var $$f1 = (e => (e.$$new = "newCommentComposer", e.reply = "replyCommentComposer", e.edit = "editCommentComposer", e.feed = "FeedPostThreadCommentComposer", e.feedPopover = "FeedPostPopoverModalThreadCommentComposer", e.quickReply = "quickReplyCommentComposer", e))($$f1 || {});
export function $$_0(e) {
  switch (e) {
    case "newCommentComposer":
    case "replyCommentComposer":
    case "editCommentComposer":
    case "quickReplyCommentComposer":
      return !1;
    case "FeedPostThreadCommentComposer":
    case "FeedPostPopoverModalThreadCommentComposer":
      return !0;
    default:
      throwTypeError(e);
  }
}
export let $$A11 = z.object({
  id: z.string(),
  message: z.string(),
  created_at: z.string(),
  author: Ip.ignore(),
  client_meta: Ip.ignore().nullable(),
  resolved_at: z.string().nullable(),
  edited_at: z.string().nullable(),
  hidden_at: z.string().nullable()
});
export const BL = $$_0;
export const Dw = $$f1;
export const EB = $$o2;
export const Eq = $$s3;
export const Gq = $$g4;
export const IT = $$d5;
export const MV = $$u6;
export const Qd = $$a7;
export const Vk = $$p8;
export const b7 = $$m9;
export const hm = $$l10;
export const iG = $$A11;
export const kT = $$h12;
export const m = $$c13;
