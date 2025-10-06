import { SearchIndex } from 'emoji-mart'
import { WorkerFuseSearch } from '../905/81982'
import { searchAPIHandler } from '../905/144933'
import { contactsAPIService } from '../figma_app/477548'

// Original class 'o' - Refactored to AtMentionsLibrary
interface AtMentionsAPI {
  list: (params: any) => Promise<any>
  search: (params: any) => Promise<any>
}

class AtMentionsLibrary {
  api: AtMentionsAPI
  orgId: string
  teamId: string
  fileKey: string
  maxResultsCount: number
  includeHiResAvatars: boolean
  checkPermissions: boolean

  /**
   * Constructor for AtMentionsLibrary.
   * @param orgId - Organization ID.
   * @param teamId - Team ID.
   * @param fileKey - File key.
   * @param maxResultsCount - Maximum results count (default 5).
   * @param includeHiResAvatars - Whether to include high-res avatars.
   * @param checkPermissions - Whether to check permissions.
   * @param api - API service (default uses contactsAPIService).
   */
  constructor(
    orgId: string,
    teamId: string,
    fileKey: string,
    maxResultsCount: number = 5,
    includeHiResAvatars: boolean,
    checkPermissions: boolean,
    api: AtMentionsAPI = {
      list: contactsAPIService.getAtMentions,
      search: contactsAPIService.searchAtMentions,
    },
  ) {
    this.api = api
    this.orgId = orgId
    this.teamId = teamId
    this.fileKey = fileKey
    this.maxResultsCount = maxResultsCount
    this.includeHiResAvatars = includeHiResAvatars
    this.checkPermissions = checkPermissions
  }

  /**
   * Lists at-mentions.
   * @param inFigmaDesignEditor - Whether in Figma design editor.
   * @returns Array of mentions.
   */
  async list(inFigmaDesignEditor: boolean): Promise<any[]> {
    try {
      const response = await this.api.list({
        fileKey: this.fileKey,
        teamId: this.teamId,
        orgId: this.orgId,
        includeHiResAvatars: this.includeHiResAvatars,
        checkPermissions: this.checkPermissions,
        limit: this.maxResultsCount,
        inFigmaDesignEditor,
      })
      return response.data.meta
    }
    catch (error) {
      console.error('An error occurred while trying to fetch contacts.', error)
    }
    return []
  }

  /**
   * Searches at-mentions.
   * @param query - Search query.
   * @param inFigmaDesignEditor - Whether in Figma design editor.
   * @returns Array of mentions.
   */
  async search(query: string, inFigmaDesignEditor: boolean): Promise<any[]> {
    try {
      const response = await this.api.search({
        query,
        fileKey: this.fileKey,
        teamId: this.teamId,
        orgId: this.orgId,
        includeHiResAvatars: this.includeHiResAvatars,
        checkPermissions: this.checkPermissions,
        limit: this.maxResultsCount,
        inFigmaDesignEditor,
      })
      return response.data.meta
    }
    catch (error) {
      console.error('An error occurred while searching for contacts.', error)
    }
    return []
  }

  /**
   * Gets maximum results length.
   * @returns Maximum results count.
   */
  maxResultsLength(): number {
    return this.maxResultsCount
  }
}

// Original class 'l' - Refactored to ShareModalContactsLibrary
interface ShareModalAPI {
  list: (params: any) => Promise<any>
  search: (params: any) => Promise<any>
}

class ShareModalContactsLibrary {
  api: ShareModalAPI
  orgId: string
  teamId: string
  maxResultsCount: number

  /**
   * Constructor for ShareModalContactsLibrary.
   * @param orgId - Organization ID.
   * @param teamId - Team ID.
   * @param maxResultsCount - Maximum results count (default 5).
   * @param api - API service (default uses contactsAPIService).
   */
  constructor(
    orgId: string,
    teamId: string,
    maxResultsCount: number = 5,
    api: ShareModalAPI = {
      list: contactsAPIService.getShareModalContacts,
      search: contactsAPIService.searchShareModalContacts,
    },
  ) {
    this.api = api
    this.orgId = orgId
    this.teamId = teamId
    this.maxResultsCount = maxResultsCount
  }

  /**
   * Lists share modal contacts.
   * @returns Array of contacts.
   */
  async list(): Promise<any[]> {
    try {
      const response = await this.api.list({
        teamId: this.teamId,
        orgId: this.orgId,
        limit: this.maxResultsCount,
      })
      return response.data.meta
    }
    catch (error) {
      console.error('An error occurred while trying to fetch contacts for share modal.', error)
    }
    return []
  }

  /**
   * Searches share modal contacts.
   * @param query - Search query.
   * @returns Array of contacts.
   */
  async search(query: string): Promise<any[]> {
    try {
      const response = await this.api.search({
        query,
        teamId: this.teamId,
        orgId: this.orgId,
        limit: this.maxResultsCount,
      })
      return response.data.meta
    }
    catch (error) {
      console.error('An error occurred while searching for contacts for share modal.', error)
    }
    return []
  }

  /**
   * Gets maximum results length.
   * @returns Maximum results count.
   */
  maxResultsLength(): number {
    return this.maxResultsCount
  }
}

// Original class '$$d1' - Refactored to CommunityMentionsLibrary
export class CommunityMentionsLibrary {
  /**
   * Lists community mentions (always returns empty array).
   * @returns Empty array.
   */
  async list(): Promise<any[]> {
    return await Promise.resolve([])
  }

  /**
   * Searches community mentions.
   * @param query - Search query.
   * @returns Array of mentions.
   */
  async search(query: string): Promise<any[]> {
    try {
      const response = await searchAPIHandler.getCommunityMentions({
        query,
      })
      return response.data.meta.results.map((result: any) => result.model)
    }
    catch {
      console.error('An error occurred while searching for mentions.')
    }
    return []
  }

  /**
   * Gets maximum results length.
   * @returns 10.
   */
  maxResultsLength(): number {
    return 10
  }
}

// Original class '$$c0' - Refactored to FeedAtMentionsLibrary
interface FeedAtMentionsAPI {
  list: (params: any) => Promise<any>
  search: (params: any) => Promise<any>
}

export class FeedAtMentionsLibrary {
  api: FeedAtMentionsAPI
  orgId: string
  feedPostPublicUuid: string

  /**
   * Constructor for FeedAtMentionsLibrary.
   * @param orgId - Organization ID.
   * @param feedPostPublicUuid - Feed post public UUID.
   * @param api - API service (default uses contactsAPIService).
   */
  constructor(
    orgId: string,
    feedPostPublicUuid: string,
    api: FeedAtMentionsAPI = {
      list: contactsAPIService.getFeedAtMentions,
      search: contactsAPIService.searchFeedAtMentions,
    },
  ) {
    this.api = api
    this.orgId = orgId
    this.feedPostPublicUuid = feedPostPublicUuid
  }

  /**
   * Lists feed at-mentions.
   * @returns Array of mentions.
   */
  async list(): Promise<any[]> {
    try {
      const response = await this.api.list({
        orgId: this.orgId,
        feedPostPublicUuid: this.feedPostPublicUuid,
      })
      return response.data.meta
    }
    catch (error) {
      console.error('An error occurred while trying to fetch contacts.', error)
    }
    return []
  }

  /**
   * Searches feed at-mentions.
   * @param query - Search query.
   * @returns Array of mentions.
   */
  async search(query: string): Promise<any[]> {
    try {
      const response = await this.api.search({
        query,
        orgId: this.orgId,
        feedPostPublicUuid: this.feedPostPublicUuid,
      })
      return response.data.meta
    }
    catch (error) {
      console.error('An error occurred while searching for contacts.', error)
    }
    return []
  }

  /**
   * Gets maximum results length.
   * @returns 5.
   */
  maxResultsLength(): number {
    return 5
  }
}

// Original 'u' - Refactored to UserSearchLibrary
const userSearchLibrary = new (class {
  searchLibrary: WorkerFuseSearch

  constructor(searchLibrary: WorkerFuseSearch) {
    this.searchLibrary = searchLibrary
  }

  /**
   * Sets the users data.
   * @param users - Array of users.
   */
  set(users: any[]): void {
    this.searchLibrary.set(users)
  }

  /**
   * Lists users sorted by handle.
   * @returns Sorted array of users.
   */
  list(): Promise<any[]> {
    return Promise.resolve(this.searchLibrary.list().sort((a, b) => (a.handle < b.handle ? -1 : 1)))
  }

  /**
   * Searches users.
   * @param query - Search query.
   * @returns Array of user items.
   */
  async search(query: string): Promise<any[]> {
    return (await this.searchLibrary.search(query)).map((result: any) => result.item)
  }

  /**
   * Gets maximum results length.
   * @returns 5.
   */
  maxResultsLength(): number {
    return 5
  }
})(new WorkerFuseSearch({
  keys: [
    { name: 'handle', weight: 0.9 },
    { name: 'email', weight: 0.1 },
  ],
  threshold: 0.2,
  tokenize: true,
  shouldSort: true,
}))

// Original function '$$p3' - Refactored to createMentionLibrary
interface CreateMentionLibraryParams {
  currentOrgId: string
  teamId: string
  users: any[]
  fileKey?: string
  maxResultsCount: number
  api?: AtMentionsAPI
  includeHiResAvatars?: boolean
  checkPermissions?: boolean
  isShareModal?: boolean
  feedPostUuid?: string
}

/**
 * Creates a mention library based on parameters.
 * @param params - Parameters for creating the library.
 * @returns Object with library.
 */
export function createMentionLibrary(params: CreateMentionLibraryParams): { library: any } {
  const {
    currentOrgId,
    teamId,
    users,
    fileKey,
    maxResultsCount,
    api,
    includeHiResAvatars = false,
    checkPermissions,
    isShareModal = false,
    feedPostUuid,
  } = params

  if (isShareModal) {
    return { library: new ShareModalContactsLibrary(currentOrgId, teamId, maxResultsCount) }
  }
  if (feedPostUuid && currentOrgId) {
    return { library: new FeedAtMentionsLibrary(currentOrgId, feedPostUuid) }
  }
  if (fileKey) {
    return { library: new AtMentionsLibrary(currentOrgId, teamId, fileKey, maxResultsCount, includeHiResAvatars, checkPermissions, api) }
  }
  if (users.length) {
    userSearchLibrary.set(users)
  }
  return { library: userSearchLibrary }
}

// Original function '$$m2' - Refactored to getMentionsResult
/**
 * Gets mentions result.
 * @param query - Search query.
 * @param libraryWrapper - Object with library.
 * @param inFigmaDesignEditor - Whether in Figma design editor.
 * @returns Mentions result or null.
 */
export async function getMentionsResult(query: string, libraryWrapper: { library: any }, inFigmaDesignEditor: boolean): Promise<any> {
  const mentions = query === ''
    ? (await libraryWrapper.library.list(inFigmaDesignEditor)).slice(0, libraryWrapper.library.maxResultsLength())
    : (await libraryWrapper.library.search(query, inFigmaDesignEditor)).slice(0, libraryWrapper.library.maxResultsLength())

  if (mentions.length) {
    return {
      type: 'mentions',
      mentions,
      index: 0,
      maxMentions: libraryWrapper.library.maxResultsLength(),
    }
  }
  return null
}

// Original 'h' and '$$g4' - Refactored to getEmojisResult
const underscoreRegex = /_/g

/**
 * Gets emojis result.
 * @param query - Search query.
 * @returns Emojis result or null.
 */
export function getEmojisResult(query: string): any {
  const transformedQuery = query.replace(underscoreRegex, '-')
  const emojis = SearchIndex.searchSynchronized(transformedQuery, { maxResults: 10 }) || []
  if (emojis.length) {
    return {
      type: 'emojis',
      emojis,
      index: 0,
      maxEmojis: 10,
      query,
    }
  }
  return null
}

// Refactored exports to match new names
export const M8 = FeedAtMentionsLibrary
export const MH = CommunityMentionsLibrary
export const fG = getMentionsResult
export const mp = createMentionLibrary
export const oQ = getEmojisResult
