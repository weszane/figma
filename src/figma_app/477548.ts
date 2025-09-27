import { APIParameterUtils, createNoOpValidator } from '../figma_app/181241'

// Original: $$i1
enum ContactViewMode {
  VIEW_OR_PENDING = 'view_or_pending',
  VIEW_PROTOTYPE_OR_PENDING = 'view_prototype_or_pending',
}

// Original: $$a0
/**
 * Class for handling contacts-related API operations.
 */
class ContactsAPI {
  ContactsSchemaValidator = createNoOpValidator()
  AtMentionsSchemaValidator = createNoOpValidator()
  ShareModalSchemaValidator = createNoOpValidator()
  ShareModalContactsWithUserGroupsSchemaValidator = createNoOpValidator()
  FeedAtMentionsSchemaValidator = createNoOpValidator()
  FaceStampsMentionSchemaValidator = createNoOpValidator()
  FeedPostCreatorsSchemaValidator = createNoOpValidator()

  constructor() {

  }

  /**
   * Searches for at mentions.
   * Original: searchAtMentions
   */
  searchAtMentions = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.AtMentionsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/at_mentions', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Gets at mentions.
   * Original: getAtMentions
   */
  getAtMentions = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.AtMentionsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/at_mentions', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Searches for share modal contacts.
   * Original: searchShareModalContacts
   */
  searchShareModalContacts = (params: any) =>
    this.ShareModalSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/share', APIParameterUtils.toAPIParameters(params)),
    )

  /**
   * Gets share modal contacts.
   * Original: getShareModalContacts
   */
  getShareModalContacts = (params: any) =>
    this.ShareModalSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/share', APIParameterUtils.toAPIParameters(params)),
    )

  /**
   * Searches for share modal contacts with user groups.
   * Original: searchShareModalContactsWithUserGroups
   */
  searchShareModalContactsWithUserGroups = (params: any) =>
    this.ShareModalContactsWithUserGroupsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/share/v2', APIParameterUtils.toAPIParameters({
        ...params,
        plan_id: params.planRecordId,
      })),
    )

  /**
   * Gets share modal contacts with user groups.
   * Original: getShareModalContactsWithUserGroups
   */
  getShareModalContactsWithUserGroups = (params: any) =>
    this.ShareModalContactsWithUserGroupsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/share/v2', APIParameterUtils.toAPIParameters({
        ...params,
        plan_id: params.planRecordId,
      })),
    )

  /**
   * Gets feed at mentions.
   * Original: getFeedAtMentions
   */
  getFeedAtMentions = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.FeedAtMentionsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/feed_at_mentions', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Searches for feed at mentions.
   * Original: searchFeedAtMentions
   */
  searchFeedAtMentions = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.FeedAtMentionsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/feed_at_mentions', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Searches for face stamps.
   * Original: searchFaceStamps
   */
  searchFaceStamps = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.FaceStampsMentionSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/face_stamps', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Gets recent face stamps.
   * Original: getRecentFaceStamps
   */
  getRecentFaceStamps = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.FaceStampsMentionSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/face_stamps', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Gets feed post creators.
   * Original: getFeedPostCreators
   */
  getFeedPostCreators = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.FeedPostCreatorsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/feed_post_creators', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Searches for feed post creators.
   * Original: searchFeedPostCreators
   */
  searchFeedPostCreators = (params: any) => {
    if (!params.includeHiResAvatars) {
      delete params.includeHiResAvatars
    }
    return this.FeedPostCreatorsSchemaValidator.validate(({ xr: t }: any) =>
      t.get('/api/contacts/feed_post_creators', APIParameterUtils.toAPIParameters(params)),
    )
  }

  /**
   * Gets contacts.
   * Original: getContacts
   */
  getContacts = (params: any) =>
    this.ContactsSchemaValidator.validate(async ({ xr: t }: any) =>
      await t.get('/api/contacts', APIParameterUtils.toAPIParameters(params)),
    )
}

export const contactsAPIService = new ContactsAPI()
// Original: U = $$a0
export const U = contactsAPIService
// Original: m = $$i1
export const m = ContactViewMode
