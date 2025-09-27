import { trackEventAnalytics } from '../905/449184'
import { FUserRoleType } from '../figma_app/191312'
import { generateSessionId } from '../figma_app/925970'

// Original: var s = (e => (e.org_member = 'org_member', e.org_guest = 'org_guest', e.team_user = 'team_user', e.personal_user = 'personal_user', e))(s || {})
enum UserRoleType {
  org_member = 'org_member',
  org_guest = 'org_guest',
  team_user = 'team_user',
  personal_user = 'personal_user',
}

/**
 * Original: export function $$o3(e, t, i)
 * Finds the email of a user by ID, checking provided user data or a usersByEmail map.
 * @param userId - The ID of the user.
 * @param usersByEmail - Optional map of users by email.
 * @param user - Optional user object with id and email.
 * @returns The email if found, otherwise undefined.
 */
export function getUserEmail(userId: string, usersByEmail?: Record<string, { id: string }>, user?: { id: string; email: string }): string | undefined {
  if (user && userId === user.id) {
    return user.email;
  }
  if (usersByEmail) {
    const email = Object.keys(usersByEmail).find(email => userId === usersByEmail[email].id);
    if (email) {
      return email;
    }
  }
}

/**
 * Original: export function $$l2(e, t, i)
 * Checks if a user is a guest in a specific organization or team.
 * @param orgId - The organization ID.
 * @param user - The user object with id.
 * @param orgPermissions - Map of organization permissions.
 * @returns True if the user is a guest, false otherwise.
 */
export function isGuestUser(orgId: string | undefined, user: { id: string } | undefined, orgPermissions: Record<string, Record<string, { permission: FUserRoleType }>>): boolean {
  if (orgId && user) {
    const orgPerms = orgPermissions[orgId];
    const userPerm = orgPerms && orgPerms[user.id];
    return userPerm && userPerm.permission === FUserRoleType.GUEST;
  }
  return false;
}

/**
 * Original: export function $$d4(e, t, i)
 * Determines the user type based on organization and team membership.
 * @param isOrgMember - Whether the user is an org member.
 * @param isTeamUser - Whether the user is a team user.
 * @param isOrgGuest - Whether the user is an org guest.
 * @returns The user role type.
 */
export function getUserType(isOrgMember: boolean, isTeamUser: boolean, isOrgGuest: boolean): UserRoleType {
  return isOrgMember ? (isOrgGuest ? UserRoleType.org_guest : UserRoleType.org_member) : (isTeamUser ? UserRoleType.team_user : UserRoleType.personal_user);
}

// Original: let $$c0 = 'comments'
export const ENTRYPOINT_COMMENTS = 'comments';

// Original: let $$u1 = 'share_modal'
export const ENTRYPOINT_SHARE_MODAL = 'share_modal';

/**
 * Original: export class $$p5
 * Tracks analytics for contacts sessions, including queries and results.
 */
export class ContactsAnalyticsTracker {
  entrypoint: string;
  openFileKey: string;
  state: {
    sessionId: string | null;
    queryCount: number;
    resultsCount: number;
  };
  userContext: string;
  currentOrgId: string | undefined;
  openFileTeamId: string | undefined;
  prevQuery: string | undefined;

  constructor(entrypoint: string, openFileKey: string, userContext: string, currentOrgId?: string, openFileTeamId?: string) {
    this.entrypoint = entrypoint;
    this.openFileKey = openFileKey;
    this.state = {
      sessionId: null,
      queryCount: 0,
      resultsCount: 0,
    };
    this.userContext = userContext;
    this.currentOrgId = currentOrgId;
    this.openFileTeamId = openFileTeamId;
  }

  resetState(): void {
    this.state = {
      sessionId: null,
      queryCount: 0,
      resultsCount: 0,
    };
    this.prevQuery = undefined;
  }

  startSession(): void {
    this.state = {
      sessionId: generateSessionId(),
      queryCount: 0,
      resultsCount: 0,
    };
    trackEventAnalytics('contacts_session_start', {
      session_id: this.state.sessionId,
      entrypoint: this.entrypoint,
      user_context: this.userContext,
      file_key: this.openFileKey,
      org_id: this.currentOrgId,
      team_id: this.openFileTeamId,
    });
  }

  trackQueryResult(query: string, numResults: number): void {
    if (this.state.sessionId === null) {
      this.startSession();
    }
    if (this.prevQuery !== query) {
      this.state.queryCount += 1;
      this.state.resultsCount += numResults;
      trackEventAnalytics('contacts_query_result', {
        session_id: this.state.sessionId,
        entrypoint: this.entrypoint,
        query,
        characters_entered: query.length,
        num_results: numResults,
        user_context: this.userContext,
        file_key: this.openFileKey,
        org_id: this.currentOrgId,
        team_id: this.openFileTeamId,
      });
      this.prevQuery = query;
    }
  }

  trackResultClicked(query: string, position: number, numResults: number, isInvite?: boolean): void {
    trackEventAnalytics('contacts_result_clicked', {
      session_id: this.state.sessionId,
      entrypoint: this.entrypoint,
      query,
      characters_entered: query.length,
      position: position + 1,
      num_results: numResults,
      user_context: this.userContext,
      file_key: this.openFileKey,
      org_id: this.currentOrgId,
      team_id: this.openFileTeamId,
      isInvite: !!isInvite,
    });
    this.endSession('result_selected', true);
  }

  endSession(exitpoint: string, resultSelected?: boolean): void {
    if (this.state.sessionId !== null) {
      trackEventAnalytics('contacts_session_end', {
        session_id: this.state.sessionId,
        num_queries_to_backend: this.state.queryCount,
        total_contacts_suggested: this.state.resultsCount,
        entrypoint: this.entrypoint,
        exitpoint,
        result_selected: resultSelected ?? false,
        user_context: this.userContext,
        file_key: this.openFileKey,
        org_id: this.currentOrgId,
        team_id: this.openFileTeamId,
      });
      this.resetState();
    }
  }
}

// Original exports: export const I2 = $$c0, etc.
// Refactored exports with meaningful names
export const T2 = ENTRYPOINT_COMMENTS;
export const TD = ENTRYPOINT_SHARE_MODAL;
export const Ty = isGuestUser;
export const o7 = getUserEmail;
export const pP = getUserType;
export const yO = ContactsAnalyticsTracker;
