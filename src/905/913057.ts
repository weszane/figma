import { getUserEmail } from '../905/331019'
import { trackEventAnalytics } from '../905/449184'
import { p as _$$p } from '../905/762622'
import { createMentionLibrary } from '../905/772425'
import { contactsAPIService } from '../figma_app/477548'

// Original class name: o
/**
 * Represents a contacts library for the share modal, handling listing and searching of users and user groups.
 */
class ShareModalContactsLibrary {
  private api: {
    list: (params: any) => Promise<any>
    search: (params: any) => Promise<any>
  }

  private planId: any
  private userLimit: number
  private userGroupLimit: number
  constructor(planId: any, userLimit?: number, userGroupLimit?: number, api = {
    list: contactsAPIService.getShareModalContactsWithUserGroups,
    search: contactsAPIService.searchShareModalContactsWithUserGroups,
  }) {
    this.api = api
    this.planId = planId
    this.userLimit = userLimit ?? 5
    this.userGroupLimit = userGroupLimit ?? 3
  }

  /**
   * Lists users and user groups for the share modal.
   */
  async list(): Promise<{
    users: any[]
    userGroups: any[]
  }> {
    try {
      const {
        data: {
          meta,
        },
      } = await this.api.list({
        planId: this.planId,
        userLimit: this.userLimit,
        userGroupLimit: this.userGroupLimit,
      })
      return {
        users: meta.users,
        userGroups: meta.user_groups,
      }
    }
    catch (error) {
      console.error('An error occurred while trying to fetch contacts for share modal.', error)
      return {
        users: [],
        userGroups: [],
      }
    }
  }

  /**
   * Searches for users and user groups in the share modal.
   */
  async search(query: string): Promise<{
    users: any[]
    userGroups: any[]
  }> {
    try {
      const {
        data: {
          meta,
        },
      } = await this.api.search({
        query,
        planId: this.planId,
        userLimit: this.userLimit,
        userGroupLimit: this.userGroupLimit,
      })
      return {
        users: meta.users,
        userGroups: meta.user_groups,
      }
    }
    catch (error) {
      console.error('An error occurred while searching for contacts in share modal.', error)
      return {
        users: [],
        userGroups: [],
      }
    }
  }
}

// Original function name: u
/**
 * Creates a map of user statuses based on existing and pending invitations.
 */
function createUserStatusMap(usersById: Record<string, any>, team: any, pendingInvites: any[]): Record<string, string> {
  const idToEmail: Record<string, string> = {}
  for (const key in usersById) {
    idToEmail[usersById[key].id] = key
  }
  const statusMap: Record<string, string> = {}
  statusMap[team.id] = 'confirmed'
  for (const invite of pendingInvites) {
    const identifier = invite.user.id ?? invite.user.email
    if (identifier) {
      statusMap[identifier] = invite.pending ? 'pending' : 'confirmed'
    }
  }
  return statusMap
}

// Original function name: $$p2
/**
 * Returns a set of invited users based on team and pending invites.
 */
export function getInvitedUsersSet(usersById: Record<string, any>, team: any, pendingInvites: any[]): Set<string> {
  const idToEmail: Record<string, string> = {}
  for (const key in usersById) {
    idToEmail[usersById[key].id] = key
  }
  const invitedUsers = new Set<string>()
  invitedUsers.add(team.email)
  for (const invite of pendingInvites) {
    const identifier = invite.user.email ?? (invite.user.id && idToEmail[invite.user.id])
    if (identifier) {
      invitedUsers.add(identifier)
    }
  }
  return invitedUsers
}

// Original function name: $$m0
/**
 * Searches for contacts in the library and marks existing or pending roles.
 */
export async function searchLibraryContacts(input: any, usersById: Record<string, any>, team: any, pendingInvites: any[], currentOrgId: any, teamId: any, fileKey: any, analytics: any, maxResults?: number): Promise<any[]> {
  const library = createMentionLibrary({
    currentOrgId,
    teamId,
    users: [],
    fileKey,
    maxResultsCount: 10,
    isShareModal: true,
  })
  const results = await library.library.search(input.inputValue)
  if (!results) {
    trackEventAnalytics('contacts_search.invite_search_error', {
      invite_level: analytics.inviteLevel,
      source: analytics.source,
      input_value_is_empty: !input.inputValue,
      autocomplete_error: input.errorMessage,
    })
    return []
  }
  const statusMap = createUserStatusMap(usersById, team, pendingInvites)
  const processedResults = results.map((contact: any) => {
    const identifier = contact.id in statusMap ? contact.id : contact.email
    if (identifier in statusMap) {
      if (statusMap[identifier] === 'pending') {
        contact.pendingRole = true
      }
      else {
        contact.existingRole = true
      }
      contact.disabled = true
    }
    return contact
  })
  return maxResults ? processedResults.slice(0, maxResults) : processedResults
}

// Original function name: $$h1
/**
 * Searches for contacts in the share modal and marks existing or pending roles.
 */
export async function searchShareModalContacts(input: any, usersById: Record<string, any>, team: any, pendingInvites: any[], planRecordId: any, analytics: any, userLimit?: number, userGroupLimit?: number): Promise<any[]> {
  const contactsLibrary = new ShareModalContactsLibrary(planRecordId, userLimit, userGroupLimit)
  const results = await contactsLibrary.search(input.inputValue)
  if (!results) {
    trackEventAnalytics('contacts_search.invite_search_error', {
      invite_level: analytics.inviteLevel,
      source: analytics.source,
      input_value_is_empty: !input.inputValue,
      autocomplete_error: input.errorMessage,
    })
    return []
  }
  const userGroups = results.userGroups?.map((group: any) => ({
    ...group,
    type: _$$p,
  })) ?? []
  let users = results.users?.map((user: any) => user) ?? []
  const statusMap = createUserStatusMap(usersById, team, pendingInvites)
  users = users.map((user: any) => {
    const identifier = user.id in statusMap ? user.id : user.email
    if (identifier in statusMap) {
      if (statusMap[identifier] === 'pending') {
        user.pendingRole = true
      }
      else {
        user.existingRole = true
      }
      user.disabled = true
    }
    return user
  })
  users = userLimit ? users.slice(0, userLimit) : users
  const limitedUserGroups = userGroupLimit ? userGroups.slice(0, userGroupLimit) : userGroups
  return [...limitedUserGroups, ...users]
}

// Original function name: $$g4
/**
 * Retrieves library contacts with ranking.
 */
export async function getLibraryContacts(currentOrgId: any, teamId: any): Promise<any[]> {
  const library = createMentionLibrary({
    currentOrgId,
    teamId,
    users: [],
    maxResultsCount: 10,
    isShareModal: true,
  })
  const results = await library.library.search('')
  return results
    ? results.map((contact: any, index: number) => ({
        ...contact,
        rank: index + 1,
      }))
    : []
}

// Original function name: $$f3
/**
 * Extracts user email from a record.
 */
export function getUserEmailFromRecord(record: any, usersById: Record<string, any>, team: any): string | undefined {
  return record.user?.email ?? (record.user_id ? getUserEmail(record.user_id, usersById, team) : undefined)
}

// Refactored export names
export const Wj = searchLibraryContacts
export const _N = searchShareModalContacts
export const bp = getInvitedUsersSet
export const Zm = getUserEmailFromRecord
export const hp = getLibraryContacts
