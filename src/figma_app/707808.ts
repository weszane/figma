import { UpgradeSteps } from '../figma_app/831101'

/**
 * Enum for share actions.
 * Original: $$i0
 */
export enum ShareAction {
  INVITE = 0,
  PUBLISH_COMMUNITY = 1,
  PUBLISH_TEMPLATE = 2,
  COLLABORATORS = 3,
  EMBED_CODE = 4,
  SHARE_SETTINGS = 5,
  FOLDER_MEMBERS = 6,
  SHARE_GOOGLE_DEVICE_DISCLAIMER = 7,
  SHARE_TO_GOOGLE_CLASSROOM = 8,
  CONNECTED_PROJECT_USERS = 9,
  UPDATE_SEAT = 10,
}

/**
 * Enum for app views.
 * Original: $$a13
 */
export enum AppView {
  FILE = 'file',
  FULLSCREEN_PREVIEW = 'fullscreen_preview',
  SETTINGS = 'settings',
}

/**
 * Enum for sidebar sections.
 * Original: $$s10
 */
export enum SidebarSection {
  ACCOUNT = 'account',
  PLUGINS = 'plugins',
  COMMUNITY = 'community',
  NOTIFICATIONS = 'notifications',
}

/**
 * Checks if the view is 'search'.
 * Original: $$o18
 * @param e - Object with view property
 */
export const isSearchView = (e: { view: string }): boolean => e.view === 'search'

/**
 * Mapping for universal publishing and account settings.
 * Original: $$l19
 */
export const viewMappings = {
  UNIVERSAL_PUBLISHING: 'publish',
  ACCOUNT_SETTINGS: 'settings',
}

/**
 * Enum for user profile tabs.
 * Original: $$d14
 */
export enum UserProfileTab {
  RESOURCES = 'resources',
  FOLLOWERS = 'followers',
  FOLLOWING = 'following',
  METRICS = 'metrics',
  SAVES = 'saves',
}

/**
 * Enum for preview modes.
 * Original: $$c2
 */
export enum PreviewMode {
  DEFAULT = 0,
  FULLSCREEN = 'fullscreen',
  FULLSCREEN_WITH_COMMENTS = 'fullscreen_comments',
}

/**
 * Enum for onboarding steps.
 * Original: $$u8
 */
export enum OnboardingStep {
  ONBOARDING = 'onboarding',
}

/**
 * Checks if the view is 'org'.
 * Original: $$p9
 * @param e - Object with view property
 */
export const isOrgView = (e: { view: string }): boolean => e.view === 'org'

/**
 * Enum for entity types.
 * Original: $$_1
 */
export enum EntityType {
  PROJECT = 0,
  TEAM = 1,
  WORKSPACE = 2,
  LICENSE_GROUP = 3,
}

/**
 * Enum for upgrade actions.
 * Original: $$h5
 */
export enum UpgradeAction {
  UPGRADE_EXISTING_TEAM = 'upgrade_existing_team',
  CREATE_AND_UPGRADE = 'create_and_upgrade',
  CREATE = 'create',
}

/**
 * Enum for team types.
 * Original: $$m6
 */
export enum TeamType {
  UNDETERMINED = 0,
  STARTER = 1,
  TEAM = 2,
  ORG = 3,
}

/**
 * Checks if the action is 'create' or 'create_and_upgrade'.
 * Original: $$g16
 * @param e - Action string
 */
export function isCreateOrUpgrade(e: string): boolean {
  return e === UpgradeAction.CREATE || e === UpgradeAction.CREATE_AND_UPGRADE
}

/**
 * Checks if the action is 'upgrade_existing_team'.
 * Original: $$f17
 * @param e - Action string
 */
export function isUpgradeExistingTeam(e: string): boolean {
  return e === UpgradeAction.UPGRADE_EXISTING_TEAM
}

/**
 * Determines if upgrade step matches creation or plan comparison.
 * Original: $$E11
 * @param action - Action string
 * @param step - UpgradeSteps enum value
 */
export function isCreateOrPlanComparison(action: string, step: string): boolean {
  return (action === UpgradeAction.CREATE
    && (step === UpgradeSteps.CREATE_TEAM
      || step === UpgradeSteps.ADD_COLLABORATORS))
    || step === UpgradeSteps.PLAN_COMPARISON
}

/**
 * List of all views.
 * Original: $$y15
 */
export const allViews = [
  'deletedFiles',
  'trashedFolders',
  'teamCreation',
  'folder',
  'addCollaborators',
  'team',
  'teamUpgrade',
  'orgAdminSettings',
  'licenseGroup',
  'workspace',
  'billingGroupDashboard',
  'search',
  'user',
  'promoReview',
  'eduReview',
  'teamFeed',
  'resourceUnavailable',
  'feed',
  'teamAdminConsole',
  'recentsAndSharing',
  'draftsToMove',
  'allProjects',
  'limitedTeamSharedProjects',
  'orgDomainManagement',
  'orgIdpManagement',
  'abandonedDraftFiles',
  'litmus',
  'componentBrowserLibrary',
  'seatRequests',
  'resourceHub',
]

/**
 * List of team views.
 * Original: $$b3
 */
export const teamViews = [
  'recentsAndSharing',
  'folder',
  'allProjects',
  'limitedTeamSharedProjects',
  'team',
]

/**
 * List of draft views.
 * Original: $$T7
 */
export const draftViews = ['recentsAndSharing', 'draftsToMove']

/**
 * Checks if the view is included in allViews.
 * Original: $$I4
 * @param e - Object with view property
 */
export function isIncludedView(e: { view: string }): boolean {
  return allViews.includes(e.view)
}

/**
 * Enum for selector types.
 * Original: $$S12
 */
export enum SelectorType {
  NONE = 'none',
  REPO_SELECTOR = 'repo-selector',
  DIRECTORY_SELECTOR = 'directory-selector',
}

// Refactored exports to match new names
export const A5 = ShareAction
export const Ft = EntityType
export const G4 = PreviewMode
export const Gn = teamViews
export const QB = isIncludedView
export const SC = UpgradeAction
export const Sc = TeamType
export const T8 = draftViews
export const U6 = OnboardingStep
export const bN = isOrgView
export const bb = SidebarSection
export const ck = isCreateOrPlanComparison
export const e6 = SelectorType
export const f0 = AppView
export const g3 = UserProfileTab
export const gu = allViews
export const h5 = isCreateOrUpgrade
export const jX = isUpgradeExistingTeam
export const kV = isSearchView
export const ou = viewMappings
