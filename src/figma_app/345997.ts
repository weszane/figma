import { compact } from 'lodash-es';
import { reportError } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { resolveMessage } from '../905/231762';
import { getI18nStringAlias } from '../905/303541';
import { s as _$$s } from '../905/573154';
import { getFeatureFlags } from '../905/601108';
import { A } from '../905/920142';
import { cn, SH } from '../figma_app/141320';
import { FFileType, FPaymentHealthStatusType, FPlanLimitationType, FPlanRestrictionType } from '../figma_app/191312';
import { nD } from '../figma_app/416935';
import { Gi, jd, VA } from '../figma_app/528509';
import { canEditTeam } from '../figma_app/642025';
import { ZG } from '../figma_app/736948';
import { BillingCycle, SubscriptionType } from '../figma_app/831101';

/**
 * URL for Figma pricing page
 */
const PRICING_URL: string = 'https://www.figma.com/pricing/#cid-20p4Q0lWSOxIWj30zTY6P2';

/**
 * Constants for plan limits and configuration
 */
const SECONDARY_LIMIT: number = 2;
const PRIMARY_LIMIT: number = 1;

/**
 * Maximum page limits by file type for free tier
 */
const FILE_TYPE_PAGE_LIMITS: Record<FFileType, number> = {
  [FFileType.DESIGN]: 3,
  [FFileType.WHITEBOARD]: 1,
  [FFileType.SLIDES]: 3,
  [FFileType.SITES]: 3,
  [FFileType.COOPER]: 3,
  [FFileType.FIGMAKE]: 3
};
const STANDARD_LIMIT: number = 3;
const ZERO_VALUE: number = 0;
const DEFAULT_ZERO: number = 0;
const MAX_USERS: number = 5;

/**
 * Checks if a date is in the future
 * @param date The date to check
 * @returns True if the date is in the future
 */
function N(date: Date): boolean {
  return date > new Date();
}
export interface Team {
  restrictions_list: any;
  org_id?: string;
  grace_period_end?: string;
  subscription?: FPaymentHealthStatusType;
  student_team?: boolean;
  id: string;
  team_id?: string;
  sharing_audience_control?: string;
  is_invite_only?: boolean;
  is_view_only?: boolean;
}
interface TeamState {
  subscription?: FPaymentHealthStatusType;
  studentTeamAt?: boolean;
  gracePeriodEnd?: Date;
  eduGracePeriod?: {
    isValid: boolean;
  };
  restrictionsList?: FPlanLimitationType[];
}

/**
 * Checks if a team is in grace period
 * @param team The team to check
 * @returns True if the team is in grace period
 */
export function isTeamInGracePeriod(team: Team): boolean {
  const gracePeriodDate = team && !team.org_id && team.grace_period_end && A.utc(team.grace_period_end);
  return !!gracePeriodDate && gracePeriodDate.valueOf() > Date.now();
}

/**
 * Checks if a team's grace period is ending soon
 * @param team The team to check
 * @param daysThreshold Number of days to consider as "soon" (default: 14)
 * @returns True if the team's grace period is ending within the threshold
 */
export function isGracePeriodEndingSoon(team: Team, daysThreshold: number = 14): boolean {
  return !!(team && isTeamInGracePeriod(team)) && A.utc(team.grace_period_end).valueOf() - Date.now() < 864e5 * daysThreshold;
}

/**
 * Checks if a team has a valid subscription
 * @param team The team to check
 * @returns True if the team has a valid subscription
 */
export function hasValidSubscription(team: Team): boolean {
  return !!team && team.subscription != null && team.subscription !== FPaymentHealthStatusType.INCOMPLETE;
}

/**
 * Alias for hasValidSubscription
 * @param team The team to check
 * @returns True if the team has a valid subscription
 */
export function isTeamSubscribed(team: Team): boolean {
  return hasValidSubscription(team);
}

/**
 * Checks if a team has access to paid features
 * @param team The team to check
 * @returns True if the team has access to paid features
 */
export function hasTeamPaidAccess(team: Team): boolean {
  return !!team && (hasValidSubscription(team) || team.student_team || !!team.grace_period_end && N(new Date(team.grace_period_end)));
}

/**
 * Checks if a team state has access to paid features
 * @param teamState The team state to check
 * @returns True if the team state has access to paid features
 */
export function hasTeamStatePaidAccess(teamState: TeamState): boolean {
  if (!teamState) return false;
  const {
    subscription,
    studentTeamAt,
    gracePeriodEnd
  } = teamState;
  return !!subscription && subscription !== FPaymentHealthStatusType.INCOMPLETE || !!studentTeamAt || gracePeriodEnd && N(gracePeriodEnd);
}
interface FileContext {
  editorType?: FFileType;
  team?: TeamState;
  teamId?: string;
  parentOrgId?: string;
  project?: any;
}

/**
 * Gets the maximum number of pages allowed for a file context
 * @param fileContext The file context to check
 * @returns The maximum number of pages allowed, or Infinity if unlimited
 */
export function getMaxPagesAllowed(fileContext: FileContext): number {
  const fileType = fileContext.editorType;
  const isTeamUnpaid = !!fileContext.team && !hasTeamStatePaidAccess(fileContext.team);
  const isPersonalFile = !fileContext.teamId && !fileContext.parentOrgId;
  const isProjectInDraftState = jd(fileContext.project);
  const defaultLimit = FILE_TYPE_PAGE_LIMITS[fileType ?? FFileType.DESIGN];
  if (fileType === FFileType.WHITEBOARD) {
    return isTeamUnpaid || isPersonalFile ? defaultLimit : Infinity;
  } else {
    return isTeamUnpaid && !isProjectInDraftState ? defaultLimit : Infinity;
  }
}

/**
 * Checks if a file has page limitations
 * @param fileContext The file context to check
 * @returns True if the file has page limitations
 */
export function hasPageLimitations(fileContext: FileContext): boolean {
  return getMaxPagesAllowed(fileContext) < Infinity;
}
interface OpenFileContext {
  openFile: FileContext;
  pageCount: number;
}

/**
 * Checks if a file has reached its page limit
 * @param context The open file context
 * @returns True if the file has reached its page limit
 */
export function hasReachedPageLimit({
  openFile,
  pageCount
}: OpenFileContext): boolean {
  return pageCount >= getMaxPagesAllowed(openFile);
}
export interface UserState {
  teams: Record<string, Team>;
  user: any;
  userEduGracePeriods: any;
  folders: Record<string, any>;
}

/**
 * Gets all teams that the user can edit and are either student teams or don't have paid access
 * @param userState The user state
 * @returns Array of teams
 */
export function getEditableTeamsWithoutPaidAccess(userState: UserState): Team[] {
  return Object.values(userState.teams).filter(team => canEditTeam(team.id, userState) && (!hasTeamPaidAccess(team) || team.student_team));
}

/**
 * Gets all teams that the user can edit and don't have paid access
 * @param userState The user state
 * @returns Array of teams
 */
export function getEditableUnpaidTeams(userState: UserState): Team[] {
  return Object.values(userState.teams).filter(team => canEditTeam(team.id, userState) && !hasTeamPaidAccess(team));
}

/**
 * Checks if a folder or team has access restrictions
 * @param folderId The folder ID
 * @param teamId The team ID
 * @param userState The user state
 * @param ignoreTeamLock Whether to ignore team lock status
 * @returns True if the folder or team has access restrictions
 */
export function hasFolderOrTeamRestrictions(folderId: string, teamId: string, userState: UserState, ignoreTeamLock: boolean): boolean {
  if (teamId && !ignoreTeamLock && isTeamLocked(teamId, userState)) return true;
  const folder = folderId && userState.folders[folderId];
  return !!folder && hasFolderRestrictions(folder, userState, ignoreTeamLock);
}

/**
 * Checks if a folder has access restrictions
 * @param folder The folder
 * @param userState The user state
 * @param ignoreTeamLock Whether to ignore team lock status
 * @returns True if the folder has access restrictions
 */
export function hasFolderRestrictions(folder: any, userState: UserState, ignoreTeamLock?: boolean): boolean {
  const team = folder.team_id ? userState.teams[folder.team_id] : null;
  const user = userState.user;
  const eduGracePeriods = userState.userEduGracePeriods;
  return (!!folder.team_id || folder.sharing_audience_control !== 'org_edit') && !!(!folder.team_id && !Gi(folder) || folder.team_id && (!ignoreTeamLock && isTeamLockedInternal(team, user, eduGracePeriods) || !hasTeamPaidAccess(team) && (folder.is_invite_only || folder.is_view_only)));
}
interface ProjectState {
  teamId?: string;
  inviteOnlyAt?: boolean;
  viewOnlyAt?: boolean;
}

/**
 * Checks if a project has access restrictions
 * @param project The project state
 * @param teamState The team state
 * @param user The user
 * @returns True if the project has access restrictions
 */
export function hasProjectRestrictions(project: ProjectState, teamState: TeamState, user: any): boolean {
  // Project is not in a team or organization
  const isPersonalProject = !(project.teamId || VA(project));

  // Project is in a team with restrictions
  const hasTeamRestrictions = !!project.teamId && (
  // Team is locked
  !!(teamState && user && (teamState.studentTeamAt ? !(cn(user) || teamState.eduGracePeriod?.isValid) : teamState.restrictionsList?.includes(FPlanLimitationType.LOCKED))) ||
  // Project has invite/view only restrictions and team doesn't have paid access
  (project.inviteOnlyAt || project.viewOnlyAt) && !hasTeamStatePaidAccess(teamState));
  return isPersonalProject || hasTeamRestrictions;
}

/**
 * Checks if a team is locked
 * @param teamId The team ID
 * @param userState The user state
 * @returns True if the team is locked
 */
export function isTeamLocked(teamId: string, userState: UserState): boolean {
  return isTeamLockedInternal(userState.teams[teamId], userState.user, userState.userEduGracePeriods);
}

/**
 * Internal helper to check if a team is locked
 * @param team The team
 * @param user The user
 * @param eduGracePeriods The education grace periods
 * @returns True if the team is locked
 */
function isTeamLockedInternal(team: Team, user: any, eduGracePeriods: any): boolean {
  return !!team && !!user && (team.student_team ? !(cn(user) || SH(eduGracePeriods, team.id).isInValidGracePeriod) : team.restrictions_list?.includes(FPlanLimitationType.LOCKED));
}

/**
 * Checks if the user has any locked teams they can edit
 * @param userState The user state
 * @returns True if the user has any locked teams they can edit
 */
export function hasEditableLockedTeams(userState: UserState): boolean {
  return Object.values(userState.teams).some(team => isTeamLocked(team.id, userState) && canEditTeam(team.id, userState));
}
interface OrgState {
  orgById: Record<string, {
    standing: any;
  }>;
}

/**
 * Checks if an organization is delinquent
 * @param orgId The organization ID
 * @param orgState The organization state
 * @returns True if the organization is delinquent
 */
export function isOrgDelinquent(orgId: string, orgState: OrgState): boolean {
  const org = orgState.orgById[orgId];
  return org && org.standing === ZG.DELINQUENT;
}

/**
 * Checks if an organization is suspended or deactivated
 * @param orgId The organization ID
 * @param orgState The organization state
 * @returns True if the organization is suspended or deactivated
 */
export function isOrgSuspendedOrDeactivated(orgId: string, orgState: OrgState): boolean {
  const org = orgState.orgById[orgId];
  const suspendedStates = compact([ZG.SUSPENDED, getFeatureFlags().scheduled_cancellation_enabled && ZG.DEACTIVATED]);
  return org && suspendedStates.includes(org.standing);
}

/**
 * Handles error display through toast notifications
 * @param error The error object
 * @param dispatch The dispatch function for the toast action
 */
export function handleErrorWithToast(error: any, dispatch: (arg: any) => void): void {
  if (error.data && error.data.message) {
    const errorMessage = resolveMessage(error);
    errorMessage && dispatch(_$$s.error(errorMessage));
  } else {
    const errorMessage = resolveMessage(error, getI18nStringAlias('error.unknown_contact_support'));
    dispatch(_$$s.error(errorMessage));
  }
}

/**
 * Gets a future date if it's after the reference date, otherwise returns null
 * @param date The date to check
 * @param referenceDate The reference date (default: current date)
 * @returns The date if it's in the future, otherwise null
 */
export function getFutureDateOrNull(date: Date, referenceDate: Date = new Date()): Date | null {
  const momentDate = A(date);
  return momentDate.isAfter(referenceDate, 'second') ? momentDate.toDate() : null;
}

/**
 * Gets the annual value for a subscription type
 * @param subscriptionType The subscription type
 * @param value The value to return for annual subscriptions
 * @returns The value if the subscription is annual, otherwise 0
 */
export function getAnnualValue(subscriptionType: SubscriptionType, value: number): number {
  return subscriptionType === SubscriptionType.MONTHLY ? 0 : value;
}

/**
 * Gets the monthly value for a subscription type
 * @param subscriptionType The subscription type
 * @param value The value to return for monthly subscriptions
 * @returns The value if the subscription is monthly, otherwise 0
 */
export function getMonthlyValue(subscriptionType: SubscriptionType, value: number): number {
  return subscriptionType === SubscriptionType.MONTHLY ? value : 0;
}

/**
 * Converts a subscription type to a billing cycle
 * @param subscriptionType The subscription type
 * @returns The corresponding billing cycle, or null if invalid
 */
export function getBillingCycleFromSubscriptionType(subscriptionType: SubscriptionType): BillingCycle | null {
  switch (subscriptionType) {
    case SubscriptionType.MONTHLY:
      return BillingCycle.MONTH;
    case SubscriptionType.ANNUAL:
      return BillingCycle.YEAR;
    default:
      reportError(ServiceCategories.MONETIZATION_UPGRADES, new Error(`Attempted to get BillingInterval from invalid BillingPeriod: ${subscriptionType}`));
      return null;
  }
}

/**
 * Converts a billing cycle to a subscription type
 * @param billingCycle The billing cycle
 * @returns The corresponding subscription type, or null if invalid
 */
export function getSubscriptionTypeFromBillingCycle(billingCycle: BillingCycle): SubscriptionType | null {
  switch (billingCycle) {
    case BillingCycle.MONTH:
      return SubscriptionType.MONTHLY;
    case BillingCycle.YEAR:
      return SubscriptionType.ANNUAL;
    default:
      reportError(ServiceCategories.MONETIZATION_UPGRADES, new Error(`Attempted to get BillingPeriod from invalid BillingInterval: ${billingCycle}`));
      return null;
  }
}
interface UserPlanStatus {
  id: string;
  email: string;
  design_paid_status: FPlanRestrictionType;
  whiteboard_paid_status: FPlanRestrictionType;
}
interface PlanChanges {
  downgrade: Record<string, string[]>;
  upgrade: Record<string, string[]>;
}

/**
 * Counts the number of users with paid access for a specific product
 * @param users Array of user plan statuses
 * @param planChanges Plan changes (upgrades and downgrades)
 * @param productType The product type ('whiteboard' or 'design')
 * @returns The number of users with paid access
 */
export function countUsersWithPaidAccess(users: UserPlanStatus[], planChanges: PlanChanges, productType: string): number {
  const statusField = productType === 'whiteboard' ? 'whiteboard_paid_status' : 'design_paid_status';
  return users.filter(user =>
  // Exclude internal emails
  !nD(user.email) && (
  // User has full access and is not being downgraded
  user[statusField] === FPlanRestrictionType.FULL && !planChanges.downgrade[productType].includes(user.id) ||
  // User is being upgraded
  planChanges.upgrade[productType].includes(user.id))).length;
}
interface UserInfo {
  id: string;
  email: string;
  handle: string;
  img_url: string;
}

/**
 * Builds a list of user records with their plan statuses
 * @param userRecords Record of user data
 * @param currentUser The current user info
 * @returns Array of user records with plan statuses
 */
export function buildUserRecordsWithPlanStatus(userRecords: Record<string, any> | null, currentUser: UserInfo | null): any[] {
  let currentUserIncluded = false;

  // Process existing user records
  let userList = userRecords !== null ? Object.values(userRecords).reduce((accumulator: any[], record: any) => {
    if (!record.user) return accumulator;
    const userRecord = {
      id: record.user.id,
      design_paid_status: record.design_paid_status,
      whiteboard_paid_status: record.whiteboard_paid_status,
      email: record.user.email || '',
      handle: record.user.handle || '',
      img_url: record.user.img_url || ''
    };

    // Put current user at the beginning of the list
    if (record.user?.id === currentUser?.id) {
      currentUserIncluded = true;
      accumulator.unshift(userRecord);
    } else {
      accumulator.push(userRecord);
    }
    return accumulator;
  }, []) : [];

  // Add current user if not already included
  if (!currentUserIncluded && currentUser) {
    userList.unshift({
      id: currentUser.id,
      design_paid_status: FPlanRestrictionType.STARTER,
      whiteboard_paid_status: FPlanRestrictionType.STARTER,
      email: currentUser.email,
      handle: currentUser.handle,
      img_url: currentUser.img_url
    });
  }
  return userList;
}

/**
 * Calculates the positive difference between two numbers
 * @param value1 The first value
 * @param value2 The second value
 * @returns The positive difference (max - min)
 */
export function calculatePositiveDifference(value1: number, value2: number): number {
  return Math.max(value1, value2) - value2;
}

// Export aliases for backward compatibility
export const BR = buildUserRecordsWithPlanStatus;
export const Ht = SECONDARY_LIMIT;
export const J9 = hasReachedPageLimit;
export const JV = getSubscriptionTypeFromBillingCycle;
export const KI = hasPageLimitations;
export const Kg = getEditableUnpaidTeams;
export const Ky = countUsersWithPaidAccess;
export const LF = FILE_TYPE_PAGE_LIMITS;
export const Lj = getMaxPagesAllowed;
export const O1 = calculatePositiveDifference;
export const PS = getEditableTeamsWithoutPaidAccess;
export const PX = DEFAULT_ZERO;
export const Rq = getMonthlyValue;
export const Rx = hasEditableLockedTeams;
export const S$ = hasProjectRestrictions;
export const UE = handleErrorWithToast;
export const WQ = isTeamInGracePeriod;
export const WW = STANDARD_LIMIT;
export const Wf = PRIMARY_LIMIT;
export const XX = hasTeamStatePaidAccess;
export const ZZ = hasFolderRestrictions;
export const _b = isGracePeriodEndingSoon;
export const a5 = isTeamSubscribed;
export const cW = MAX_USERS;
export const dN = isOrgSuspendedOrDeactivated;
export const f4 = hasFolderOrTeamRestrictions;
export const fD = getAnnualValue;
export const h = ZERO_VALUE;
export const mt = getFutureDateOrNull;
export const n0 = hasValidSubscription;
export const ne = getBillingCycleFromSubscriptionType;
export const oc = isTeamLocked;
export const w5 = hasTeamPaidAccess;
export const wn = isOrgDelinquent;
export const zZ = PRICING_URL;
