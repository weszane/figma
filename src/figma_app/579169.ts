import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { mapAndAggregateResources, transformAtom } from "../905/401885";
import { bW } from "../905/587414";
import { OrgPersonal } from "../905/696396";
import { normalizeJobRole } from "../3973/538504";
import { atom, createRemovableAtomFamily, selectAtom } from "../figma_app/27355";
import { currentUserOrgAtom, currentUserOrgIdAtom, currentUserOrgUsersAtom } from "../figma_app/33126";
import { EduOffboardingData, UserForRcs } from "../figma_app/43951";
import { hasTeamPaidAccess } from "../figma_app/345997";
import { isAllowedDomain, isFigmaEmail } from "../figma_app/416935";
// Refactored to improve readability, add type safety, and simplify logic
// - Renamed minified variables to descriptive names
// - Added TypeScript types and interfaces where possible
// - Simplified conditional logic and array operations
// - Added comments to clarify complex expressions

// Determine if the current user belongs to an organization or is personal
const userOrgTypeAtom = mapAndAggregateResources([UserForRcs.Query({}), currentUserOrgAtom], ([userResource, orgAtom]) => userResource.currentUser.id != null && orgAtom?.canRead ? OrgPersonal.ORG : OrgPersonal.PERSONAL);

// Get the creation date of the current user
const userCreatedAtAtom = transformAtom(UserForRcs.Query({}), resource => resource.currentUser.createdAt);

// Check if the user account is older than 2 weeks (1209600000 ms)
const isUserOlderThanTwoWeeksAtom = transformAtom(userCreatedAtAtom, createdAt => createdAt.getTime() <= Date.now() - 12096e5);

// Get the drafts folder ID for the current user's organization
const userDraftsFolderIdAtom = mapAndAggregateResources([currentUserOrgUsersAtom, UserForRcs.Query({})], ([orgUsers, userResource], getAtom) => {
  const orgId = getAtom(currentUserOrgIdAtom);
  if (!orgId) {
    return userResource.currentUser.draftsFolderId;
  }
  const orgUser = orgUsers?.find(user => user.orgId === orgId);
  return orgUser?.draftsFolderId || null;
});

// Check if user has a Figma or dev.figma email domain
transformAtom(UserForRcs.Query({}), resource => {
  const email = resource.currentUser.email;
  return isFigmaEmail(email) || !!email?.endsWith("@dev.figma.com");
});

// Check if the user's student status has been validated
const isStudentValidatedAtom = transformAtom(UserForRcs.Query({}), resource => resource.currentUser.studentValidatedAt != null);

// Get the education period end date
const eduPeriodEndAtom = transformAtom(EduOffboardingData.Query({}), data => data.currentUser.eduPeriodEnd);

// Get the current user's team roles
const userTeamRolesAtom = transformAtom(UserForRcs.Query({}), resource => resource.currentUser.teamRoles);

// Extract teams from user's team roles, filtering out null values
const userTeamsAtom = transformAtom(userTeamRolesAtom, roles => roles?.map(role => role.team).filter(team => team != null));

// Redux subscription atom for checking if user is free (non-paying)
const isFreeUserAtom = createReduxSubscriptionAtomWithState(state => state.isFreeUser);

// Determine if user has paid access to any team
const hasNoPaidTeamAccessAtom = mapAndAggregateResources([currentUserOrgUsersAtom, userTeamsAtom], ([orgUsers, teams]) => {
  const noOrgUsers = !orgUsers?.length || !(orgUsers.length > 0);
  const noPaidTeams = teams == null || !teams.some(team => team.canEdit && hasTeamPaidAccess({
    subscription: team.subscription,
    student_team: !!team.studentTeamAt,
    grace_period_end: team.gracePeriodEnd ? team.gracePeriodEnd.toISOString() : null
  } as any));
  return noOrgUsers && noPaidTeams;
});

// Reference to the no paid team access atom
const noPaidTeamAccessAtom = hasNoPaidTeamAccessAtom;

// Transform to get the actual value of isFreeUser from Redux state
const isFreeUserValueAtom = transformAtom(hasNoPaidTeamAccessAtom, (_, getAtom) => getAtom(isFreeUserAtom));

// Check if there are any organization users
const hasOrgUsersAtom = transformAtom(currentUserOrgUsersAtom, users => !!users?.length && users.length > 0);

// Check if user's email domain is allowed
const isAllowedDomainAtom = transformAtom(UserForRcs.Query({}), resource => {
  const email = resource.currentUser.email;
  return email != null ? isAllowedDomain(email) : undefined;
});

// Get the user's job title from their profile
const userJobTitleAtom = transformAtom(UserForRcs.Query({}), resource => resource.currentUser.profile?.jobTitle);

// Check if the normalized job role is not designer, other, or unknown
transformAtom(userJobTitleAtom, title => {
  const normalizedRole = normalizeJobRole(title);
  return normalizedRole !== "designer" && normalizedRole !== "other" && normalizedRole !== "unknown";
});

// Get the user's usage purpose from their profile
transformAtom(UserForRcs.Query({}), resource => resource.currentUser.profile?.usagePurpose);

// Redux subscription atom for authenticated profiles
const authedProfilesAtom = createReduxSubscriptionAtomWithState(state => state.authedProfilesById);

// Check if any authenticated profile has an org or team ID
atom(getAtom => Object.values(getAtom(authedProfilesAtom)).some(profile => !!profile.org_id || !!profile.team_id));

// Get the user's email
transformAtom(UserForRcs.Query({}), resource => resource.currentUser.email);

// Get when the user's email was validated
const userEmailValidatedAtAtom = transformAtom(UserForRcs.Query({}), resource => resource.currentUser.emailValidatedAt);

// Redux subscription atom for user analytics data
const userAnalyticsDataAtom = createReduxSubscriptionAtomWithState(state => state.userAnalyticsData);

// Create a removable atom family for accessing specific analytics data
const analyticsDataAtomFamily = createRemovableAtomFamily((key: string) => selectAtom(userAnalyticsDataAtom, (data: any) => {
  if (data == null) return;
  const value = data[key];
  return bW.includes(key) && value ? new Date(value) : value;
}));

// Check if user is restricted from an external organization
const isExternallyRestrictedAtom = mapAndAggregateResources([UserForRcs.Query({}), currentUserOrgAtom], ([resource, orgAtom]) => {
  const externalOrgId = resource.currentUser.externalRestrictedOrgId.status === "loaded" ? resource.currentUser.externalRestrictedOrgId.data : null;
  return !!(resource.currentUser && externalOrgId && orgAtom?.id !== externalOrgId);
});
export const Fy = isUserOlderThanTwoWeeksAtom;
export const Hh = userDraftsFolderIdAtom;
export const Lm = noPaidTeamAccessAtom;
export const M$ = hasOrgUsersAtom;
export const NT = userJobTitleAtom;
export const Ot = isExternallyRestrictedAtom;
export const Qm = eduPeriodEndAtom;
export const Vm = userTeamsAtom;
export const Z_ = userTeamRolesAtom;
export const d2 = userOrgTypeAtom;
export const g5 = userEmailValidatedAtAtom;
export const mp = userCreatedAtAtom;
export const nZ = isAllowedDomainAtom;
export const t = isFreeUserValueAtom;
export const tH = analyticsDataAtomFamily;
export const zN = isStudentValidatedAtom;