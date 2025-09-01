import { vh, td } from "../figma_app/181241";
var $$i1 = (e => (e.VIEW_OR_PENDING = "view_or_pending", e.VIEW_PROTOTYPE_OR_PENDING = "view_prototype_or_pending", e))($$i1 || {});
export let $$a0 = new class {
  constructor() {
    this.ContactsSchemaValidator = vh();
    this.AtMentionsSchemaValidator = vh();
    this.searchAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.AtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/at_mentions", td.toAPIParameters(e))));
    this.getAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.AtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/at_mentions", td.toAPIParameters(e))));
    this.ShareModalSchemaValidator = vh();
    this.searchShareModalContacts = e => this.ShareModalSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share", td.toAPIParameters(e)));
    this.getShareModalContacts = e => this.ShareModalSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share", td.toAPIParameters(e)));
    this.ShareModalContactsWithUserGroupsSchemaValidator = vh();
    this.searchShareModalContactsWithUserGroups = e => this.ShareModalContactsWithUserGroupsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share/v2", td.toAPIParameters({
      ...e,
      plan_id: e.planRecordId
    })));
    this.getShareModalContactsWithUserGroups = e => this.ShareModalContactsWithUserGroupsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share/v2", td.toAPIParameters({
      ...e,
      plan_id: e.planRecordId
    })));
    this.FeedAtMentionsSchemaValidator = vh();
    this.getFeedAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedAtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_at_mentions", td.toAPIParameters(e))));
    this.searchFeedAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedAtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_at_mentions", td.toAPIParameters(e))));
    this.FaceStampsMentionSchemaValidator = vh();
    this.searchFaceStamps = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FaceStampsMentionSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/face_stamps", td.toAPIParameters(e))));
    this.getRecentFaceStamps = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FaceStampsMentionSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/face_stamps", td.toAPIParameters(e))));
    this.FeedPostCreatorsSchemaValidator = vh();
    this.getFeedPostCreators = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedPostCreatorsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_post_creators", td.toAPIParameters(e))));
    this.searchFeedPostCreators = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedPostCreatorsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_post_creators", td.toAPIParameters(e))));
  }
  getContacts(e) {
    return this.ContactsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/contacts", td.toAPIParameters(e)));
  }
}();
export const U = $$a0;
export const m = $$i1;