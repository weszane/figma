import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
var $$i1 = (e => (e.VIEW_OR_PENDING = "view_or_pending", e.VIEW_PROTOTYPE_OR_PENDING = "view_prototype_or_pending", e))($$i1 || {});
export let $$a0 = new class {
  constructor() {
    this.ContactsSchemaValidator = createNoOpValidator();
    this.AtMentionsSchemaValidator = createNoOpValidator();
    this.searchAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.AtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/at_mentions", APIParameterUtils.toAPIParameters(e))));
    this.getAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.AtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/at_mentions", APIParameterUtils.toAPIParameters(e))));
    this.ShareModalSchemaValidator = createNoOpValidator();
    this.searchShareModalContacts = e => this.ShareModalSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share", APIParameterUtils.toAPIParameters(e)));
    this.getShareModalContacts = e => this.ShareModalSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share", APIParameterUtils.toAPIParameters(e)));
    this.ShareModalContactsWithUserGroupsSchemaValidator = createNoOpValidator();
    this.searchShareModalContactsWithUserGroups = e => this.ShareModalContactsWithUserGroupsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share/v2", APIParameterUtils.toAPIParameters({
      ...e,
      plan_id: e.planRecordId
    })));
    this.getShareModalContactsWithUserGroups = e => this.ShareModalContactsWithUserGroupsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/share/v2", APIParameterUtils.toAPIParameters({
      ...e,
      plan_id: e.planRecordId
    })));
    this.FeedAtMentionsSchemaValidator = createNoOpValidator();
    this.getFeedAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedAtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_at_mentions", APIParameterUtils.toAPIParameters(e))));
    this.searchFeedAtMentions = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedAtMentionsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_at_mentions", APIParameterUtils.toAPIParameters(e))));
    this.FaceStampsMentionSchemaValidator = createNoOpValidator();
    this.searchFaceStamps = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FaceStampsMentionSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/face_stamps", APIParameterUtils.toAPIParameters(e))));
    this.getRecentFaceStamps = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FaceStampsMentionSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/face_stamps", APIParameterUtils.toAPIParameters(e))));
    this.FeedPostCreatorsSchemaValidator = createNoOpValidator();
    this.getFeedPostCreators = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedPostCreatorsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_post_creators", APIParameterUtils.toAPIParameters(e))));
    this.searchFeedPostCreators = e => (e.includeHiResAvatars || delete e.includeHiResAvatars, this.FeedPostCreatorsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/contacts/feed_post_creators", APIParameterUtils.toAPIParameters(e))));
  }
  getContacts(e) {
    return this.ContactsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get("/api/contacts", APIParameterUtils.toAPIParameters(e)));
  }
}();
export const U = $$a0;
export const m = $$i1;