import { isEqual } from 'lodash-es'
import { reportError } from '../905/11'
import { ServiceCategories } from '../905/165054'
import { UNASSIGNED } from '../905/247093'
import { getI18nString } from '../905/303541'
import { FRequestsStr } from '../905/384551'
import { GroupType, UserGroupRole } from '../905/441038'
import { BillingSections, DashboardSections, MemberSections, NavigationRoutes } from '../905/548208'
import { isAppShellEnabled } from '../905/561581'
import { mL, UC } from '../905/563637'
import { getFeatureFlags } from '../905/601108'
import { customHistory } from '../905/612521'
import { parseQuery, parseQuerySimple, serializeQuery } from '../905/634134'
import { findMatchingValue } from '../905/807535'
import { getGroupOrDefault } from '../905/817247'
import { OrganizationType } from '../905/833838'
import { getOrgOrTeamPath } from '../905/890459'
import { InterProfileType } from '../905/895626'
import { parseSortConfig, sortConfigToQuery } from '../905/902560'
import { SpaceAccessType } from '../figma_app/162807'
import { getAllowedDashboardSection, originTab } from '../figma_app/173467'
import { FProductAccessType } from '../figma_app/191312'
import { kA, wA } from '../figma_app/336853'
import { hasTeamPaidAccess } from '../figma_app/345997'
import { adminPermissionConfig, setupShadowRead } from '../figma_app/391338'
import { debug, throwTypeError } from '../figma_app/465776'
import { ViewTypeEnum } from '../figma_app/471068'
import { getSidebarPath } from '../figma_app/528509'
import { setupFiltersFromQuery, setupGroupsFromFilters } from '../figma_app/585126'
import { canAdminTeam, getPermissionsStateMemoized } from '../figma_app/642025'
import { BillingSectionEnum, DashboardSection, FigResourceType, MemberView, WorkspaceTab } from '../figma_app/650409'
import { EntityType, isCreateOrPlanComparison, isUpgradeExistingTeam, SidebarSection, TeamType, UpgradeAction } from '../figma_app/707808'
import { UpgradeSteps } from '../figma_app/831101'
import { DUserRole, sectionKeys, SectionType, TeamGroupTypes, TGroupType } from '../figma_app/858344'
import { encodeUri } from '../figma_app/930338'
import { getCurrentUserOrgUser } from '../figma_app/951233'
import { ColumnName, DefaultFilters, DefaultSortConfig } from '../figma_app/967319'

/**
 * Checks if the selected view is missing resources for org/team admin.
 * Original: isSelectedViewMissingOrgAdminResources
 * @param params - Object containing isAdminOrg, permissions, teams, and view.
 * @returns True if missing resources, false otherwise.
 */
export function isSelectedViewMissingOrgAdminResources({
  isAdminOrg,
  permissions,
  teams,
  view,
}: {
  isAdminOrg: boolean
  permissions: any
  teams: Record<string, any>
  view: any
}): boolean {
  if (view.adminPlanType !== OrganizationType.ORG) {
    return !(view.planId in teams)
  }
  const hasBigma = wA(permissions)
  const currentUserOrgUser = getCurrentUserOrgUser(permissions)
  return !hasBigma || !currentUserOrgUser || !isAdminOrg
}

/**
 * Checks if the selected view is missing resources for org admin settings.
 * Original: isSelectedViewMissingOrgAdminSettingsResources
 * @param params - Object containing isAdminOrg, permissions, and view.
 * @returns True if missing resources, false otherwise.
 */
export function isSelectedViewMissingOrgAdminSettingsResources({
  isAdminOrg,
  permissions,
  view,
}: {
  isAdminOrg: boolean
  permissions: any
  view: any
}): boolean {
  const hasBigma = wA(permissions)
  const currentUserOrgUser = getCurrentUserOrgUser(permissions)
  return (
    !hasBigma
    || !currentUserOrgUser
    || !hasBigma.bigma_enabled
    || (view.subView === UserGroupRole.ADMIN && !isAdminOrg && !currentUserOrgUser.license_admin)
  )
}

/**
 * Checks if the selected org admin settings view is missing resources.
 * Original: isSelectedOrgAdminSettingsMissingResources
 * @param params - Object containing isAdminOrg, permissions, orgAdminSettingsViewTab, orgAdminSettingsViewSecondaryTab.
 * @returns True if missing resources, false otherwise.
 */
export function isSelectedOrgAdminSettingsMissingResources({
  isAdminOrg,
  permissions,
  orgAdminSettingsViewTab,
  orgAdminSettingsViewSecondaryTab,
}: {
  isAdminOrg: boolean
  permissions: any
  orgAdminSettingsViewTab: DashboardSection
  orgAdminSettingsViewSecondaryTab:  BillingSectionEnum | MemberView | WorkspaceTab | FigResourceType | undefined
}): boolean {
  const hasBigma = wA(permissions)
  const currentUserOrgUser = getCurrentUserOrgUser(permissions)
  const hasOrg = permissions.currentUserOrgId && kA(permissions.orgById[permissions.currentUserOrgId])
  const hasAdmin
    = isAdminOrg
      || currentUserOrgUser?.license_admin
      || currentUserOrgUser?.workspace_users?.some((u: any) => u.permission === 'admin')
  const isWorkspaceTab
    = orgAdminSettingsViewTab !== DashboardSection.WORKSPACES
      && orgAdminSettingsViewSecondaryTab !== WorkspaceTab.WORKSPACES
  const validWorkspace
    = !permissions.currentUserOrgId || hasOrg
  if (
    !(hasBigma && currentUserOrgUser && (isWorkspaceTab || validWorkspace) && hasAdmin)
    || (orgAdminSettingsViewTab === DashboardSection.BILLING
      && orgAdminSettingsViewSecondaryTab === BillingSectionEnum.BILLING_GROUPS
      && !hasOrg)
  ) {
    return true
  }
  return false
}

/**
 * Checks if the selected team admin console view is missing resources.
 * Original: isSelectedTeamAdminConsoleMissingResources
 * @param params - Object containing isAdminTeam, teamAdminConsoleViewTab, teamId, teams.
 * @returns True if missing resources, false otherwise.
 */
export function isSelectedTeamAdminConsoleMissingResources({
  isAdminTeam,
  teamAdminConsoleViewTab,
  teamId,
  teams,
}: {
  isAdminTeam: boolean
  teamAdminConsoleViewTab: DashboardSections
  teamId: string
  teams: Record<string, any>
}): boolean {
  return (
    (teamAdminConsoleViewTab === DashboardSections.BILLING
      || teamAdminConsoleViewTab === DashboardSections.DASHBOARD)
    && (!isAdminTeam || !teams[teamId] || teams[teamId].student_team || !hasTeamPaidAccess(teams[teamId]))
  )
}

/**
 * View configuration object.
 * Original: viewConfig
 */
export const viewConfig = {
  feed: {
    slug: 'feed',
    i18nName: () => getI18nString('view_selectors.file_browser.feed'),
    hasMissingResource: () => false,
  },
  resourceUnavailable: {
    slug: 'resourceUnavailable',
    i18nName: () => getI18nString('view_selectors.file_browser.resource_unavailable'),
    hasMissingResource: () => false,
    isNonUrlAddressable: true,
  },
  deletedFiles: {
    slug: 'trashed',
    i18nName: () => getI18nString('view_selectors.file_browser.trash'),
    hasMissingResource: () => false,
  },
  trashedFolders: {
    slug: 'trashed-projects',
    i18nName: () => getI18nString('view_selectors.file_browser.trash'),
    hasMissingResource: () => false,
  },
  teamCreation: {
    slug: 'create-team',
    i18nName: () => getI18nString('view_selectors.file_browser.create_new_team'),
    hasMissingResource: () => false,
    skipBrowserHistory: () => true,
  },
  folder: {
    slug: 'project',
    hasMissingResource: () => false,
  },
  team: {
    slug: 'team',
    hasMissingResource: (state: any, view: any) => {
      const { teamId } = view
      const missing
        = view.teamViewTab === NavigationRoutes.BILLING
          && (!canAdminTeam(teamId, state) || !state.teams[teamId] || !state.teams[teamId].pro_team)
      return setupShadowRead({
        label: adminPermissionConfig.fileBrowserConfig.teamHasMissingResource,
        oldValue: missing,
        newValue: false,
        maxReports: 5,
      })
    },
    missingResourceType: EntityType.TEAM,
    areDifferent: (a: any, b: any) => a.teamId !== b.teamId,
  },
  allProjects: {
    slug: 'all-projects',
    hasMissingResource: (state: any, _view: any) => !(state.currentTeamId && state.teams[state.currentTeamId]),
    missingResourceType: EntityType.TEAM,
  },
  limitedTeamSharedProjects: {
    slug: 'shared-projects',
    i18nName: () => getI18nString('sidebar.all_shared_projects'),
    hasMissingResource: () => false,
  },
  teamAdminConsole: {
    slug: 'team-admin-console',
    hasMissingResource: () => false,
    areDifferent: (a: any, b: any) =>
      a.teamId !== b.teamId
      || a.teamAdminConsoleViewTab !== b.teamAdminConsoleViewTab
      || a.teamAdminConsoleViewSecondaryTab !== b.teamAdminConsoleViewSecondaryTab,
  },
  addCollaborators: {
    slug: 'add-collaborators',
    i18nName: () => getI18nString('view_selectors.file_browser.add_collaborators'),
    hasMissingResource: () => false,
  },
  teamUpgrade: {
    slug: 'upgrade-team',
    hasMissingResource: (state: any, view: any) =>
      !getFeatureFlags().redirect_starter_team_loophole
      && view.teamId === null
      && isUpgradeExistingTeam(view.teamFlowType)
      || (!!view.teamId && !(view.teamId in state.teams)),
    missingResourceType: EntityType.TEAM,
    areDifferent: (a: any, b: any) => a.teamId !== b.teamId || a.paymentStep !== b.paymentStep,
    skipBrowserHistory: (view: any) => view.paymentStep === UpgradeSteps.CONFIRM_PAY,
  },
  promoReview: {
    slug: 'promo-review',
    hasMissingResource: (state: any, view: any) => !(view.teamId in state.teams),
    missingResourceType: EntityType.TEAM,
    areDifferent: (a: any, b: any) => a.teamId !== b.teamId,
    skipBrowserHistory: () => true,
  },
  eduReview: {
    slug: 'edu-review',
    hasMissingResource: (state: any, view: any) => !(view.teamId in state.teams),
    missingResourceType: EntityType.TEAM,
    areDifferent: (a: any, b: any) => a.teamId !== b.teamId,
    skipBrowserHistory: () => true,
  },
  teamFeed: {
    slug: 'feed-posts',
    i18nName: () => getI18nString('view_selectors.file_browser.feed'),
    hasMissingResource: () => false,
    areDifferent: (a: any, b: any) => a.postUuid !== b.postUuid,
  },
  litmus: {
    slug: 'litmus',
    hasMissingResource: () => false,
  },
  componentBrowserLibrary: {
    slug: 'library',
    hasMissingResource: () => false,
  },
  seatRequests: {
    slug: 'seat-requests',
    i18nName: () => getI18nString('admin_dashboard.requests.seat_title'),
    hasMissingResource: () => false,
  },
  workspace: {
    slug: 'workspace',
    missingResourceType: EntityType.WORKSPACE,
    hasMissingResource: (state: any, view: any) => {
      const permissions = getPermissionsStateMemoized(state)
      const hasBigma = wA(permissions)
      const currentUserOrgUser = getCurrentUserOrgUser(permissions)
      if (!hasBigma || !currentUserOrgUser || !hasBigma.bigma_enabled)
        return true
      switch (view.subView) {
        case DUserRole.DIRECTORY:
        case DUserRole.ADMIN:
        default:
          return false
      }
    },
    areDifferent: (a: any, b: any) =>
      a.subView !== b.subView
      || a.workspaceId !== b.workspaceId
      || a.selectedTab !== b.selectedTab,
  },
  licenseGroup: {
    slug: 'billing-group',
    hasMissingResource: () => false,
    areDifferent: (a: any, b: any) =>
      a.subView !== b.subView
      || a.licenseGroupId !== b.licenseGroupId
      || a.selectedTab !== b.selectedTab,
  },
  billingGroupDashboard: {
    slug: 'billing-group-dashboard',
    hasMissingResource: (state: any, _view: any) => {
      const permissions = getPermissionsStateMemoized(state)
      const hasBigma = wA(permissions)
      const currentUserOrgUser = getCurrentUserOrgUser(permissions)
      return !hasBigma || !currentUserOrgUser || !hasBigma.bigma_enabled
    },
    areDifferent: (a: any, b: any) => a !== b,
  },
  orgDomainManagement: {
    slug: 'domains',
    i18nName: () => getI18nString('view_selectors.file_browser.org_domain_management'),
    hasMissingResource: () => false,
  },
  orgIdpManagement: {
    slug: 'idps',
    i18nName: () => getI18nString('view_selectors.file_browser.org_idp_management'),
    hasMissingResource: () => false,
  },
  abandonedDraftFiles: {
    slug: 'abandoned_draft_files',
    i18nName: () => getI18nString('org_admin_tab.abandoned_drafts'),
    hasMissingResource: () => false,
  },
  orgAdminSettings: {
    slug: 'admin',
    i18nName: () => getI18nString('view_selectors.file_browser.org_admin'),
    hasMissingResource: () => false,
    areDifferent: (a: any, b: any) =>
      a.orgAdminSettingsViewTab !== b.orgAdminSettingsViewTab
      || a.orgAdminSettingsViewSecondaryTab !== b.orgAdminSettingsViewSecondaryTab
      || !isEqual(a.orgAdminMembersTabFilters, b.orgAdminMembersTabFilters)
      || !isEqual(a.orgAdminMembersTabSort, b.orgAdminMembersTabSort),
  },
  search: {
    slug: 'search',
    hasMissingResource: () => false,
    areDifferent: (a: any, b: any) => a.entryPoint !== b.entryPoint,
    stripFuidParam: (view: any) => view.entryPoint === 'community',
  },
  user: {
    slug: 'user',
    i18nName: () => getI18nString('view_selectors.file_browser.user'),
    hasMissingResource: () => false,
    areDifferent: (a: any, b: any) => a.userViewTab !== b.userViewTab || a.userId !== b.userId,
  },
  recentsAndSharing: {
    slug: 'recents-and-sharing',
    i18nName: () => getI18nString('view_selectors.file_browser.recents_and_sharing'),
    hasMissingResource: () => false,
  },
  draftsToMove: {
    slug: 'drafts-to-move',
    i18nName: () => getI18nString('view_selectors.file_browser.drafts_to_move'),
    hasMissingResource: () => false,
  },
  resourceHub: {
    slug: 'resources',
    i18nName: () => getI18nString('view_selectors.file_browser.templates_and_tools'),
    hasMissingResource: () => false,
  },
}

/** List of view keys. Original: viewKeys */
export const viewKeys = Object.keys(viewConfig)
/** List of view slugs. Original: viewSlugs */
export const viewSlugs = Object.values(viewConfig).map(e => e.slug)

/**
 * Checks if a string is a valid numeric ID.
 * Original: $
 * @param id - The string to check.
 * @returns True if valid numeric ID, false otherwise.
 */
export const isValidId = (id: string): boolean => !!id && /^\d+$/.test(id)

/**
 * Reports an error for invalid resource IDs.
 * Original: reportInvalidResourceId
 * @param params - Object containing resourceType, matchingViewName, and extra info.
 */
export function reportInvalidResourceId({
  resourceType,
  matchingViewName,
  extra,
}: {
  resourceType: string
  matchingViewName: string
  extra?: Record<string, any>
}) {
  reportError(
    ServiceCategories.WAYFINDING,
    new Error(`Invalid ${resourceType} ID while parsing selected view ${matchingViewName} from path`),
    {
      extra: {
        matchingViewName,
        ...extra,
      },
    },
  )
}
/**
 * Utility class for view path and resource management.
 * Original: $$q1
 */
export class ViewPathManager {
  /**
   * Maps a path to a selected view object.
   * Original: pathToSelectedView
   */
  pathToSelectedView(state: any, parts: string[], query: string, extra?: any): any {
    // Handle user plugins view
    if (parts[1] === 'my_plugins' && state.user) {
      return {
        view: 'user',
        userId: state.user.id,
        userViewTab: InterProfileType.PLUGINS,
      }
    }
    // Only handle 'files' route
    if (parts[1] !== 'files') return null

    // Drafts folder
    if (parts[2] === 'drafts') {
      return {
        view: 'folder',
        folderId: state.user?.drafts_folder_id,
      }
    }
    // Recent files
    if (parts[2] === 'recent') {
      return { view: 'recentsAndSharing' }
    }

    // Find matching view key
    const viewKey = viewKeys.find(k => viewConfig[k].slug === parts[2])
    if (!viewKey) return null

    switch (viewKey) {
      case 'folder': {
        const folderId = parts[3]
        if (!isValidId(folderId)) {
          reportInvalidResourceId({
            resourceType: 'folder',
            matchingViewName: viewKey,
            extra: { folderId },
          })
          return null
        }
        if (!folderId) {
          return {
            view: 'resourceUnavailable',
            resourceType: EntityType.PROJECT,
          }
        }
        let shouldShowRenameModal = false
        if (query && parseQuery(query).renameProject != null) {
          shouldShowRenameModal = parseQuery(query).renameProject === 'true'
        }
        return {
          view: viewKey,
          folderId,
          shouldShowRenameModal,
        }
      }
      case 'allProjects':
      case 'team': {
        let showResourceConnectionInviteModal
        let isProUpgrade
        let assetTransferRequestId
        let upgradeModalType
        let teamViewTab = NavigationRoutes.HOME
        let teamId: string | undefined = state.currentTeamId ? state.currentTeamId : parts[3]
        if (parts.length === 4) {
          const tab = findMatchingValue(NavigationRoutes, parts[parts.length - 1])
          if (tab && tab !== NavigationRoutes.PROFILE) teamViewTab = tab
        }
        if (parts.length === 5 || parts.length === 6) {
          if (parts[5] === 'restore') return null
          const tab = findMatchingValue(NavigationRoutes, parts[parts.length - 1])
          if (tab && tab !== NavigationRoutes.PROFILE) teamViewTab = tab
        }
        if (!isValidId(teamId)) {
          if (teamId !== undefined) {
            reportInvalidResourceId({
              resourceType: 'team',
              matchingViewName: viewKey,
              extra: {
                teamId,
                '!!state.currentTeamId': !!state.currentTeamId,
                '!!state.currentUserOrgId': !!state.currentUserOrgId,
                'parts.length': parts.length,
              },
            })
          }
          return null
        }
        const teamObj = teamId && state.teams[teamId]
        if (teamObj && query) {
          const upgradeType = new URLSearchParams(query).get('upgrade_type')
          if (upgradeType) upgradeModalType = findMatchingValue(FProductAccessType, upgradeType)
        }
        if (query && parseQuerySimple(query).rciid != null) {
          showResourceConnectionInviteModal = parseQuerySimple(query).rciid
        }
        if (teamObj && query && parseQuery(query).proUpgrade != null) {
          isProUpgrade = parseQuery(query).proUpgrade === 'true'
        }
        if (query && parseQuery(query).assetTransferRequest != null) {
          assetTransferRequestId = parseQuery(query).assetTransferRequest
        }
        return {
          view: 'team',
          teamId,
          teamViewTab,
          upgradeModalType,
          isProUpgrade,
          assetTransferRequestId,
          showResourceConnectionInviteModal,
        }
      }
      case 'teamAdminConsole': {
        let showResourceConnectionInviteModal
        if (!state.currentTeamId) return null
        let teamAdminConsoleViewTab: DashboardSections | null = null
        let teamAdminConsoleViewSecondaryTab: BillingSections | MemberSections | null = null
        if (parts.length >= 4) {
          const tab = findMatchingValue(DashboardSections, parts[3])
          if (tab) {
            teamAdminConsoleViewTab = tab
            if (tab && parts.length >= 5) {
              const secondary = parts[4]
              switch (tab) {
                case DashboardSections.CONTENT:
                  teamAdminConsoleViewSecondaryTab = findMatchingValue(MemberSections, secondary)
                  break
                case DashboardSections.BILLING:
                  teamAdminConsoleViewSecondaryTab = findMatchingValue(BillingSections, secondary)
                  break
              }
            }
          }
        }
        if (!isValidId(state.currentTeamId)) {
          reportInvalidResourceId({
            resourceType: 'team',
            matchingViewName: viewKey,
            extra: { currentTeamId: state.currentTeamId },
          })
          return null
        }
        const isProTeam = !!state.teams[state.currentTeamId]?.pro_team
        if (!teamAdminConsoleViewTab) {
          teamAdminConsoleViewTab = isProTeam ? DashboardSections.DASHBOARD : DashboardSections.MEMBERS
        }
        let dashDeepLinkEntryPoint = ''
        if (isProTeam && query && parseQuery(query).dashEntryPoint) {
          teamAdminConsoleViewTab = DashboardSections.DASHBOARD
          dashDeepLinkEntryPoint = parseQuery(query).dashEntryPoint
        }
        if (
          teamAdminConsoleViewTab === DashboardSections.CONTENT &&
          teamAdminConsoleViewSecondaryTab === MemberSections.CONNECTED_PROJECTS &&
          query &&
          parseQuerySimple(query).rciid != null
        ) {
          showResourceConnectionInviteModal = parseQuerySimple(query).rciid
        }
        return {
          view: viewKey,
          teamId: state.currentTeamId,
          teamAdminConsoleViewTab,
          teamAdminConsoleViewSecondaryTab,
          isProTeam,
          dashDeepLinkEntryPoint,
          showResourceConnectionInviteModal,
        }
      }
      case 'limitedTeamSharedProjects': {
        let teamId
        if (getFeatureFlags().limited_plan_spaces && state.currentTeamId) {
          teamId = state.currentTeamId
        }
        if (!teamId) return null
        return { view: 'limitedTeamSharedProjects' }
      }
      case 'addCollaborators':
        return {
          view: viewKey,
          teamId: parts[3],
        }
      case 'teamUpgrade': {
        const params = new URLSearchParams(query)
        const loopholeEnabled =
          !!getFeatureFlags().redirect_starter_team_loophole &&
          !getFeatureFlags().close_starter_team_loophole_v2
        const teamFlowType = Object.values(UpgradeAction).includes(parts[4] as UpgradeAction)
          ? parts[4]
          : UpgradeAction.UPGRADE_EXISTING_TEAM
        if (loopholeEnabled && teamFlowType !== UpgradeAction.UPGRADE_EXISTING_TEAM) {
          reportError(ServiceCategories.MONETIZATION_UPGRADES, new Error('Invalid team flow type while parsing selected view from path'), {
            extra: { matchingViewName: viewKey, parts },
          })
          return { view: 'teamCreation', fromNewTab: true }
        }
        const paymentStep = Object.values(UpgradeSteps).includes(parts[4])
          ? parts[4]
          : UpgradeSteps.CHOOSE_PLAN
        const step = parts[5] || paymentStep
        const planType =
          params.get('planType')
            ? parseInt(params.get('planType'))
            : teamFlowType === UpgradeAction.UPGRADE_EXISTING_TEAM
              ? TeamType.TEAM
              : undefined
        const planTypeFinal = isCreateOrPlanComparison(teamFlowType, step) ? undefined : planType
        let teamId = parts[3]
        if (teamId === 'n') {
          teamId = null
          if (loopholeEnabled) {
            reportError(ServiceCategories.MONETIZATION_UPGRADES, new Error('Null team ID while parsing selected view from path'), {
              extra: { matchingViewName: viewKey, parts },
            })
            return { view: 'teamCreation', fromNewTab: true }
          }
        } else if (!isValidId(teamId)) {
          reportInvalidResourceId({
            resourceType: 'team',
            matchingViewName: viewKey,
            extra: { teamId },
          })
          return null
        }
        return {
          view: viewKey,
          teamFlowType,
          teamId,
          paymentStep: step,
          ...(params.get('entryPoint') ? { entryPoint: parseInt(params.get('entryPoint')) } : {}),
          ...(params.get('billingPeriod') ? { billingPeriod: parseInt(params.get('billingPeriod')) } : {}),
          ...(params.get('onCompleteRedirectFileKey')
            ? {
                searchParams: {
                  onCompleteRedirectFileKey: params.get('onCompleteRedirectFileKey'),
                  onCompleteRedirectNodeId: params.get('onCompleteRedirectNodeId'),
                },
              }
            : {}),
          ...(planTypeFinal ? { planType: planTypeFinal } : {}),
        }
      }
      case 'promoReview': {
        const teamId = parts[3]
        if (!isValidId(teamId)) {
          reportInvalidResourceId({
            resourceType: 'team',
            matchingViewName: viewKey,
            extra: { teamId },
          })
          return null
        }
        return {
          view: viewKey,
          teamId,
          teamName: parts[4],
        }
      }
      case 'eduReview': {
        const teamId = parts[3]
        if (!isValidId(teamId)) {
          reportInvalidResourceId({
            resourceType: 'team',
            matchingViewName: viewKey,
            extra: { teamId },
          })
          return null
        }
        return {
          view: viewKey,
          teamId,
        }
      }
      case 'licenseGroup': {
        let orgAdminMembersTabSort
        const selectedTab = getGroupOrDefault(parts[5])
        const sortConfig = parseSortConfig(query)
        if (selectedTab === GroupType.MEMBERS) {
          orgAdminMembersTabSort = sortConfig ?? DefaultSortConfig
        }
        const originTabValue:any = new URLSearchParams(customHistory.location.search).get(originTab)
        const orgAdminOriginTab = originTabValue ? getAllowedDashboardSection(originTabValue) : undefined
        const licenseGroupId = parts[3]
        if (!isValidId(licenseGroupId)) {
          reportInvalidResourceId({
            resourceType: 'license group',
            matchingViewName: viewKey,
            extra: { licenseGroupId },
          })
          return null
        }
        return {
          view: viewKey,
          subView: UserGroupRole.ADMIN,
          licenseGroupId,
          selectedTab,
          orgAdminMembersTabSort,
          orgAdminOriginTab,
        }
      }
      case 'billingGroupDashboard':
        return {
          view: viewKey,
          selectedTab: findMatchingValue(FRequestsStr, parts[3] ?? '') ?? FRequestsStr.REQUESTS,
        }
      case 'seatRequests':
        if (state.currentUserOrgId === null) {
          return {
            view: viewKey,
            adminPlanType: OrganizationType.TEAM,
            planId: state.currentTeamId ?? '',
          }
        }
        return {
          view: viewKey,
          adminPlanType: OrganizationType.ORG,
          planId: state.currentUserOrgId,
        }
      case 'workspace': {
        const workspaceId = parts[3]
        const subView = findMatchingValue(DUserRole, parts[4]) || DUserRole.DIRECTORY
        if (subView === DUserRole.ADMIN) {
          const selectedTab = findMatchingValue(SectionType, parts[5]) || sectionKeys[0]
          const sortConfig = parseSortConfig(query)
          let orgAdminMembersTabSort
          if (selectedTab === SectionType.MEMBERS) {
            orgAdminMembersTabSort = sortConfig ?? DefaultSortConfig
          }
          if (!isValidId(workspaceId)) {
            reportInvalidResourceId({
              resourceType: 'workspace',
              matchingViewName: viewKey,
              extra: { workspaceId },
            })
            return null
          }
          return {
            view: viewKey,
            subView: DUserRole.ADMIN,
            workspaceId,
            selectedTab,
            orgAdminMembersTabSort,
          }
        } else {
          let id = workspaceId
          if (workspaceId === UNASSIGNED) {
            id = null
          } else if (!isValidId(workspaceId)) {
            reportInvalidResourceId({
              resourceType: 'workspace',
              matchingViewName: viewKey,
              extra: { workspaceId },
            })
            return null
          }
          return {
            view: viewKey,
            subView: DUserRole.DIRECTORY,
            workspaceId: id,
            selectedTab: findMatchingValue(TGroupType, parts[5]) || TeamGroupTypes[0],
          }
        }
      }
      case 'orgAdminSettings': {
        let orgAdminSettingsViewTab
        let orgAdminSettingsViewSecondaryTab
        if (parts.length >= 4) {
          orgAdminSettingsViewTab = findMatchingValue(DashboardSection, parts[3])
          if (orgAdminSettingsViewTab && parts.length >= 5) {
            const secondary = parts[4]
            switch (orgAdminSettingsViewTab) {
              case DashboardSection.RESOURCES:
                orgAdminSettingsViewSecondaryTab = findMatchingValue(FigResourceType, secondary)
                break
              case DashboardSection.CONTENT:
                orgAdminSettingsViewSecondaryTab = findMatchingValue(WorkspaceTab, secondary)
                break
              case DashboardSection.BILLING:
                orgAdminSettingsViewSecondaryTab = findMatchingValue(BillingSectionEnum, secondary ?? '')
                break
              case DashboardSection.MEMBERS:
                orgAdminSettingsViewSecondaryTab = findMatchingValue(MemberView, secondary ?? '')
            }
          }
        }
        if (orgAdminSettingsViewTab === DashboardSection.WORKSPACES) {
          orgAdminSettingsViewTab = DashboardSection.CONTENT
          orgAdminSettingsViewSecondaryTab = WorkspaceTab.WORKSPACES
        } else if (orgAdminSettingsViewTab === DashboardSection.TEAMS) {
          orgAdminSettingsViewTab = DashboardSection.CONTENT
          orgAdminSettingsViewSecondaryTab = WorkspaceTab.TEAMS
        }
        const result: any = {
          view: 'orgAdminSettings',
          orgAdminSettingsViewTab: orgAdminSettingsViewTab ?? DashboardSection.DASHBOARD,
          orgAdminSettingsViewSecondaryTab,
          orgAdminMembersTabFilters: DefaultFilters,
          orgAdminMembersTabSort: DefaultSortConfig,
        }
        if (
          orgAdminSettingsViewTab === DashboardSection.DASHBOARD &&
          query &&
          parseQuery(query).dashEntryPoint != null
        ) {
          result.dashDeepLinkEntryPoint = parseQuery(query).dashEntryPoint
        }
        const filters = setupFiltersFromQuery(query, state.licenseGroups)
        if (orgAdminSettingsViewTab === DashboardSection.MEMBERS && filters) {
          result.orgAdminMembersTabFilters = filters
        }
        const sortConfig = parseSortConfig(query)
        if (
          orgAdminSettingsViewTab === DashboardSection.MEMBERS &&
          query &&
          parseQuery(query).initialSort === 'date-upgraded'
        ) {
          result.orgAdminMembersTabSort = {
            columnName: ColumnName.DESIGN_ROLE,
            isReversed: true,
          }
        } else if (orgAdminSettingsViewTab === DashboardSection.MEMBERS && sortConfig) {
          result.orgAdminMembersTabSort = sortConfig
        }
        if (
          orgAdminSettingsViewTab === DashboardSection.MEMBERS &&
          query &&
          parseQuery(query).orgJoinRequest != null
        ) {
          result.membersTabOrgJoinRequest = parseQuery(query).orgJoinRequest
        }
        if (query && parseQuery(query).assetTransferRequest != null) {
          result.teamsTabAssetTransferRequest = parseQuery(query).assetTransferRequest
        }
        if (
          orgAdminSettingsViewTab === DashboardSection.RESOURCES &&
          query &&
          (orgAdminSettingsViewSecondaryTab === FigResourceType.APPROVED_PLUGINS ||
            orgAdminSettingsViewSecondaryTab === FigResourceType.APPROVED_WIDGETS)
        ) {
          result.selectedExtensionId = parseQuery(query).eid
        }
        if (
          orgAdminSettingsViewTab === DashboardSection.CONTENT &&
          orgAdminSettingsViewSecondaryTab === WorkspaceTab.CONNECTED_PROJECTS &&
          query &&
          parseQuerySimple(query).rciid != null
        ) {
          result.showResourceConnectionInviteModal = parseQuerySimple(query).rciid
        }
        return result
      }
      case 'search':
        return {
          view: 'search',
          entryPoint: 'url:internal',
          previousView: { view: 'recentsAndSharing' },
        }
      case 'user': {
        if (parts.length < 4 || !state.user) return null
        const userId = parts[3]
        let userViewTab = InterProfileType.INTERNAL_PROFILE
        if (parts[parts.length - 1] === 'settings' && userId === state.user.id) {
          const accountModalTab = query && parseQuery(query).tab
          const accountModalTabSection = extra ? extra.slice(1) : undefined
          return {
            view: 'recentsAndSharing',
            accountModalTab: accountModalTab || SidebarSection.ACCOUNT,
            accountModalTabSection,
          }
        }
        if (parts[parts.length - 1] === 'plugins') {
          return {
            view: 'recentsAndSharing',
            accountModalTab: SidebarSection.PLUGINS,
          }
        }
        if (parts[parts.length - 1] === 'email_unsubscribe' && userId === state.user.id) {
          const emailPolicy = query && parseQuery(query).policy
          if (emailPolicy) {
            return {
              view: 'recentsAndSharing',
              emailPolicyToUnsubscribeFrom: emailPolicy,
            }
          }
          return {
            view: 'recentsAndSharing',
            accountModalTab: SidebarSection.NOTIFICATIONS,
          }
        }
        if (getFeatureFlags().xr_debounce_threshold && parts[parts.length - 1] === 'posts') {
          userViewTab = InterProfileType.INTERNAL_PROFILE_POSTS
        }
        return {
          view: 'user',
          userId,
          userViewTab,
        }
      }
      case 'feed': {
        if (query) {
          const parsed = parseQuery(query)
          if (parsed.quickReplyFileKey && parsed.quickReplyThreadId) {
            return {
              view: 'feed',
              quickReplyInfo: {
                fileKey: parsed.quickReplyFileKey,
                threadId: parsed.quickReplyThreadId,
              },
            }
          }
        }
        return { view: 'feed' }
      }
      case 'teamFeed': {
        if (state.currentUserOrgId === null || !getFeatureFlags().xr_debounce_threshold) return null
        const params = new URLSearchParams(customHistory.location.search)
        return {
          view: 'teamFeed',
          postUuid: parts[3],
          creatorId: params.get('creator_id') ?? undefined,
        }
      }
      case 'recentsAndSharing': {
        let tab
        if (parts.length >= 4) {
          tab = findMatchingValue(ViewTypeEnum, parts[parts.length - 1])
        }
        if (!tab) {
          return { view: 'recentsAndSharing' }
        }
        return {
          view: 'recentsAndSharing',
          tab,
        }
      }
      case 'teamCreation':
        return { view: viewKey, fromNewTab: true }
      case 'abandonedDraftFiles':
        if (state.currentUserOrgId === null) {
          return {
            view: viewKey,
            abandonedDraftFolderId: parts[parts.length - 1],
            adminPlanType: OrganizationType.TEAM,
            planId: state.currentTeamId ?? '',
          }
        }
        return {
          view: viewKey,
          abandonedDraftFolderId: parts[parts.length - 1],
          adminPlanType: OrganizationType.ORG,
          planId: state.currentUserOrgId,
        }
      case 'componentBrowserLibrary': {
        if (!getFeatureFlags().dt_component_browser_file_browser) return null
        const libraryKey = parts[3]
        if (!libraryKey) return null
        return {
          view: 'componentBrowserLibrary',
          libraryKey,
          componentKey: parts[5],
        }
      }
      case 'litmus':
        return null
      case 'resourceHub':
        if (!getFeatureFlags().cmty_resource_hub) return null
        return { view: 'resourceHub' }
      default:
        return { view: viewKey }
    }
  }

  /**
   * Determines if a history change is required between two views.
   * Original: requireHistoryChange
   */
  requireHistoryChange(current: any, next: any): boolean {
    const currentKey = viewKeys.find(k => k === current.view)
    const nextKey = viewKeys.find(k => k === next.view)
    if (!currentKey && !nextKey) return false
    const skipHistory = currentKey && viewConfig[currentKey].skipBrowserHistory
    if (skipHistory && skipHistory(current)) return false
    if (currentKey !== nextKey) return true
    if (currentKey && currentKey === nextKey) {
      const areDifferent = viewConfig[currentKey].areDifferent
      return !!areDifferent && areDifferent(current, next)
    }
    debug(false, 'view selector code which should be unreachable was reached')
    return false
  }

  /**
   * Converts a selected view object to a path string.
   * Original: selectedViewToPath
   */
  selectedViewToPath(view: any, state: any): string | null {
    const viewKey = viewKeys.find(k => k === view.view)
    if (!viewKey) return null
    const config = viewConfig[viewKey]
    if (config.isNonUrlAddressable) return null
    let queryParams: Record<string, any> = {}
    let slug = config.slug
    if (view.view === 'folder' && state.user?.drafts_folder_id === view.folderId) {
      slug = 'drafts'
    }
    let orgOrTeamPath = getOrgOrTeamPath(state)
    let path = `/files${orgOrTeamPath}/${slug}`
    switch (view.view) {
      case 'folder':
        if (slug === 'drafts') break
        path += `/${view.folderId}`
        const folderName = this.selectedViewName(view, state)
        if (folderName) path += `/${encodeUri(folderName)}`
        break
      case 'team':
        const teamName = this.selectedViewName(view, state) || 'Team'
        if (state.currentTeamId) {
          path = `/files${orgOrTeamPath}/all-projects`
        } else {
          path += `/${view.teamId}/${encodeUri(teamName)}`
          if (view.teamViewTab) path += `/${view.teamViewTab}`
        }
        break
      case 'allProjects':
        if (view.isProUpgrade) {
          queryParams = { ...queryParams, proUpgrade: view.isProUpgrade }
        }
        break
      case 'componentBrowserLibrary':
        if (!getFeatureFlags().dt_component_browser) break
        path += `/${view.libraryKey}`
        path += view.componentKey ? `/component/${view.componentKey}/Component` : '/Library'
        break
      case 'teamAdminConsole':
        if (view.teamAdminConsoleViewTab) path += `/${view.teamAdminConsoleViewTab}`
        if (view.teamAdminConsoleViewSecondaryTab) path += `/${view.teamAdminConsoleViewSecondaryTab}`
        this.appendQueryParams(queryParams, [mL, UC])
        break
      case 'addCollaborators':
      case 'eduReview':
        path += `/${view.teamId}`
        break
      case 'teamUpgrade':
        path += view.teamId === null ? '/n' : `/${view.teamId}`
        if (view.teamFlowType) path += `/${view.teamFlowType}`
        if (view.paymentStep) path += `/${view.paymentStep}`
        const urlParams = new URLSearchParams(customHistory.location.search)
        queryParams = {
          ...queryParams,
          ...(urlParams.get('onCompleteRedirectFileKey')
            ? { onCompleteRedirectFileKey: urlParams.get('onCompleteRedirectFileKey') }
            : {}),
          ...(urlParams.get('onCompleteRedirectNodeId')
            ? { onCompleteRedirectNodeId: urlParams.get('onCompleteRedirectNodeId') }
            : {}),
          ...view.searchParams,
        }
        if (view.billingPeriod) queryParams.billingPeriod = view.billingPeriod
        if (view.entryPoint) queryParams.entryPoint = view.entryPoint
        const planType = view.planType || TeamType.UNDETERMINED
        if (planType) queryParams.planType = planType
        break
      case 'promoReview':
        path += `/${view.teamId}/${view.teamName}`
        break
      case 'abandonedDraftFiles':
        path += `/${view.abandonedDraftFolderId}`
        break
      case 'orgAdminSettings':
        if (view.orgAdminSettingsViewTab) {
          path += `/${view.orgAdminSettingsViewTab}`
          if (view.orgAdminSettingsViewTab === 'members') {
            if (view.orgAdminMembersTabFilters) {
              queryParams = {
                ...queryParams,
                ...setupGroupsFromFilters(view.orgAdminMembersTabFilters, state.licenseGroups),
              }
            }
            if (view.orgAdminMembersTabSort) {
              queryParams = {
                ...queryParams,
                ...sortConfigToQuery(view.orgAdminMembersTabSort),
              }
            }
          }
          if (view.orgAdminSettingsViewSecondaryTab) {
            path += `/${view.orgAdminSettingsViewSecondaryTab}`
          }
          this.appendQueryParams(queryParams, [mL, UC])
        }
        break
      case 'licenseGroup':
        path += `/${view.licenseGroupId}/${view.subView}/${view.selectedTab}`
        if (view.selectedTab === GroupType.MEMBERS && view.orgAdminMembersTabSort) {
          queryParams = {
            ...queryParams,
            ...sortConfigToQuery(view.orgAdminMembersTabSort),
          }
        }
        if (view.orgAdminOriginTab) {
          queryParams[originTab] = view.orgAdminOriginTab
        }
        break
      case 'billingGroupDashboard':
        if (view.selectedTab === FRequestsStr.ALL_REQUESTS) {
          path += `/${view.selectedTab}`
        }
        break
      case 'workspace':
        switch (view.subView) {
          case DUserRole.ADMIN:
            path += `/${view.workspaceId}/${view.subView}/${view.selectedTab}`
            if (view.selectedTab === SectionType.MEMBERS && view.orgAdminMembersTabSort) {
              queryParams = {
                ...queryParams,
                ...sortConfigToQuery(view.orgAdminMembersTabSort),
              }
            }
            break
          case DUserRole.DIRECTORY:
            path += `/${view.workspaceId ?? UNASSIGNED}/${view.subView}/${view.selectedTab}`
            break
        }
        break
      case 'search': {
        const searchParams = state.search.parameters
        queryParams = {
          model_type: searchParams.searchModelType,
          ...(searchParams.query && { q: searchParams.query }),
          ...(searchParams.fileTypeFilter && { file_type: searchParams.fileTypeFilter }),
        }
        switch (searchParams.searchScope) {
          case SpaceAccessType.ORG:
          case SpaceAccessType.ORG_GUEST:
          case SpaceAccessType.PERSONAL:
            break
          case SpaceAccessType.COMMUNITY:
            path = '/community/search'
            break
          default:
            throwTypeError(searchParams.searchScope)
        }
        break
      }
      case 'user': {
        const userName = this.selectedViewName(view, state)
        const userNamePath = userName ? `/${encodeUri(userName)}` : ''
        if (view.userViewTab === InterProfileType.INTERNAL_PROFILE) {
          path += `/${view.userId}${userNamePath}`
        } else if (view.userViewTab === InterProfileType.INTERNAL_PROFILE_POSTS) {
          path += `/${view.userId}/posts`
        } else if (view.userViewTab === InterProfileType.PLUGINS) {
          path += `/${view.userId}/plugins`
        }
        break
      }
      case 'teamFeed':
        if (view.postUuid) path += `/${view.postUuid}`
        if (view.creatorId) queryParams.creator_id = view.creatorId
        break
      case 'recentsAndSharing':
        if (view.tab) path += `/${view.tab}`
        break
      case 'resourceHub':
        path = customHistory.location.pathname
        new URLSearchParams(customHistory.location.search).forEach((val, key) => {
          if (key !== 'fuid') queryParams[key] = val
        })
        break
      case 'litmus':
        if (view.subView === 'feed') path += `/${view.projectId}`
        break
    }
    const shouldIncludeFuid = !config.stripFuidParam || !config.stripFuidParam(view)
    if (state.user && shouldIncludeFuid) queryParams.fuid = state.user.id
    if (isAppShellEnabled()) queryParams._app_shell = '1'
    return Object.keys(queryParams).length !== 0 ? `${path}?${serializeQuery(queryParams)}` : path
  }

  /**
   * Gets the display name for a selected view.
   * Original: selectedViewName
   */
  selectedViewName(view: any, state: any): string | null {
    const viewKey = viewKeys.find(k => k === view.view)
    if (!viewKey) return null
    switch (view.view) {
      case 'folder':
        if (getFeatureFlags().folder_page_fix_tab_titles && state.user?.drafts_folder_id === view.folderId) {
          return getI18nString('sidebar.drafts')
        }
        const folder = state.folders[view.folderId]
        if (!folder) return null
        return getSidebarPath(folder)
      case 'team':
        return state.teams[view.teamId]?.name ?? getI18nString('view_selectors.file_browser.team')
      case 'teamAdminConsole':
        const teamName = state.teams[view.teamId]?.name
        return (
          getI18nString('view_selectors.file_browser.team_admin_console_with_name', { adminTeamName: teamName }) ??
          getI18nString('view_selectors.file_browser.team_admin_console_generic')
        )
      case 'teamUpgrade':
        if (view.teamFlowType === UpgradeAction.CREATE_AND_UPGRADE || view.teamId === null) {
          return getI18nString('view_selectors.file_browser.create_new_team')
        }
        const upgradeTeamName = state.teams[view.teamId]?.name
        if (upgradeTeamName) {
          return getI18nString('view_selectors.file_browser.team_upgrade_with_name', { teamName: upgradeTeamName })
        }
        return getI18nString('view_selectors.file_browser.team_upgrade_generic')
      case 'search':
        const { query } = state.search.parameters
        return query
          ? getI18nString('view_selectors.file_browser.search_results_with_query', { query })
          : getI18nString('view_selectors.file_browser.search_results_generic')
      case 'user':
        const { orgUsersByOrgId, currentUserOrgId } = state
        const orgUsers = currentUserOrgId && orgUsersByOrgId[currentUserOrgId] || {}
        if (
          view.userViewTab === InterProfileType.INTERNAL_PROFILE ||
          view.userViewTab === InterProfileType.INTERNAL_PROFILE_POSTS
        ) {
          const user = orgUsers[view.userId]
          return user ? user.user.handle : ''
        }
        if (view.userViewTab === InterProfileType.PLUGINS) {
          return getI18nString('view_selectors.file_browser.plugins')
        }
        return 'User'
      case 'licenseGroup':
        return getI18nString('view_selectors.file_browser.billing_admin')
      case 'workspace':
        if (view.subView === DUserRole.ADMIN) {
          return getI18nString('view_selectors.file_browser.workspace_admin')
        }
        if (!view.workspaceId) {
          return getI18nString('view_selectors.file_browser.other_teams')
        }
        return getI18nString('view_selectors.file_browser.workspace')
      default:
        if (viewConfig[viewKey].i18nName) {
          return viewConfig[viewKey].i18nName()
        }
        return null
    }
  }

  /**
   * Checks if the selected view has missing resources.
   * Original: selectedViewHasMissingResources
   */
  selectedViewHasMissingResources(state: any, view: any): boolean {
    const viewKey = viewKeys.find(k => k === view.view)
    return !!viewKey && viewConfig[viewKey].hasMissingResource(state, view)
  }

  /**
   * Gets the missing resource type for a selected view.
   * Original: selectedViewMissingResourceType
   */
  selectedViewMissingResourceType(view: any): EntityType | undefined {
    const viewKey = viewKeys.find(k => k === view.view)
    if (viewKey) return viewConfig[viewKey].missingResourceType
  }

  /**
   * Appends query parameters from history to the given object.
   * Original: appendQueryParams
   */
  appendQueryParams(params: Record<string, any>, keys: string[]): void {
    const searchParams = new URLSearchParams(customHistory.location.search)
    keys.forEach(key => {
      if (searchParams.has(key)) {
        params[key] = searchParams.get(key)
      }
    })
  }
}

// Export refactored class and variables with new names
export const $$q1 = ViewPathManager
export const $N = isSelectedViewMissingOrgAdminSettingsResources
export const $T = ViewPathManager
export const g5 = viewKeys
export const gb = isSelectedTeamAdminConsoleMissingResources
export const nb = isSelectedOrgAdminSettingsMissingResources
export const nw = viewSlugs
export const pO = isSelectedViewMissingOrgAdminResources
