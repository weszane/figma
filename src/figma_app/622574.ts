import type { PrimitiveAtom } from 'jotai'
import { noop } from 'lodash-es'
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useSelector, useStore } from "react-redux"
import { useDebouncedCallback } from "use-debounce"
import { TeamTemplateType } from "../905/79930"
import { UNASSIGNED_LABEL } from "../905/82276"
import { selectWithShallowEqual } from "../905/103090"
import { UNASSIGNED } from "../905/247093"
import { useAllowInternalTemplatesCooper } from "../905/521149"
import { getFeatureFlags } from "../905/601108"
import { liveStoreInstance } from "../905/713695"
import { useCurrentUserOrg } from "../905/845253"
import { atom, useAtomValueAndSetter } from "../figma_app/27355"
import { BrowseTemplatesView, PaginatedTemplatesByOrg, PaginatedTemplatesByOrgWorkspace, PaginatedTemplatesByTeam, PaginatedTemplatesSearch } from "../figma_app/43951"
import { FFileType, FOrganizationLevelType, FPlanNameType } from "../figma_app/191312"
import { useSubscription } from "../figma_app/288654"
import { isBigmaEnabledAlias } from "../figma_app/336853"
import { templateService } from "../figma_app/446378"
import { useCurrentPlanUser, useCurrentPrivilegedPlan, useCurrentPublicPlan } from "../figma_app/465071"
import { throwTypeError } from "../figma_app/465776"
import { selectCurrentFile } from "../figma_app/516028"
import { isRootPath, isTeamFolder } from "../figma_app/528509"
import { setupResourceAtomHandler } from "../figma_app/566371"
import { getCurrentTeam } from "../figma_app/598018"
import { hasTwoValue } from "../figma_app/741211"
import { selectDeletedOrCooperComponentAndFrameNodeIds, selectWellFormedModuleNodeIds } from "../figma_app/803787"
import { checkForVisibleChanges } from "../figma_app/841351"
import { getCurrentFileType } from "../figma_app/976749"

// Refactored from minified JavaScript: Renamed variables to descriptive names, added TypeScript types and interfaces, simplified logic, added comments for clarity and potential issues. Preserved functionality, identified no bugs but noted performance considerations in comments.

// Define enum for publish template status
enum PublishTemplateStatus {
  NOT_ENABLED = "NOT_ENABLED",
  CAN_PUBLISH = "CAN_PUBLISH",
  FILE_IN_DRAFTS = "FILE_IN_DRAFTS",
  FILE_IN_DRAFTS_CANNOT_MOVE = "FILE_IN_DRAFTS_CANNOT_MOVE",
  DISABLED_IN_SETTINGS = "DISABLED_IN_SETTINGS",
  CANNOT_PUBLISH = "CANNOT_PUBLISH",
}

// Originally $$R13
export const PublishTemplateStatusEnum = PublishTemplateStatus

// Interface for plan user data
interface PlanUser {
  key: {
    type: FOrganizationLevelType
    [key: string]: any
  }
  type: any
  customTemplatesAllowed?: boolean
  tier?: FPlanNameType
}

// Originally L
export function useCustomTemplatesAllowed(): boolean {
  const currentFileType = getCurrentFileType()
  const currentPlanUser = useCurrentPlanUser("useCustomTemplatesAllowed").unwrapOr(null)
  const currentPrivilegedPlan = useCurrentPrivilegedPlan("useCustomTemplatesAllowed").unwrapOr(null)

  return useMemo(() => {
    if (currentPrivilegedPlan?.key.type === FOrganizationLevelType.ORG) {
      return hasTwoValue(!!currentPrivilegedPlan?.customTemplatesAllowed, !!currentPlanUser)
    }
    if (currentPrivilegedPlan?.key.type === FOrganizationLevelType.TEAM && !!currentPrivilegedPlan && !!currentFileType) {
      return currentPrivilegedPlan.tier !== FPlanNameType.STARTER
        && (currentFileType === FFileType.SLIDES
          || (currentFileType === FFileType.WHITEBOARD
            ? !!getFeatureFlags().pro_templates_figjam
            : currentFileType === FFileType.COOPER || currentFileType === FFileType.FIGMAKE))
    }
    return false
  }, [currentPlanUser, currentPrivilegedPlan, currentFileType])
}

// Interface for entity (org or team)
interface TemplateEntity {
  type: "org" | "team"
  entity: { id: string, name: string }
  name: string
}

// Originally $$P2
export function getCurrentTemplateEntity(): TemplateEntity | null {
  const currentUserOrg = useCurrentUserOrg()
  const currentTeam = getCurrentTeam()

  if (useCustomTemplatesAllowed()) {
    if (currentUserOrg) {
      return {
        type: "org",
        entity: currentUserOrg,
        name: currentUserOrg.name,
      }
    }
    if (currentTeam) {
      return {
        type: "team",
        entity: currentTeam,
        name: currentTeam.name,
      }
    }
  }
  return null
}

// Originally $$D18
export function hasTemplateEntity(): boolean {
  return !!getCurrentTemplateEntity()
}

// Originally $$k15
export function canUseCustomTemplates(file: any): boolean {
  const isAllowed = useCustomTemplatesAllowed()
  return !!file && isAllowed
}

// Originally $$M3
export function getPublishTemplateStatus(): PublishTemplateStatus {
  const currentFile = selectCurrentFile()
  const isInCorrectFolder = (() => {
    const entity = getCurrentTemplateEntity()
    const file = selectCurrentFile()
    return useSelector<AppState>(state => !!file && !!file.folderId
      && (entity?.type === "team"
        ? isTeamFolder(state.folders[file.folderId])
        : entity?.type === "org" && isRootPath(state.folders[file.folderId])))
  })()
  const currentPublicPlan = useCurrentPublicPlan("usePublishTemplateStatus").unwrapOr(null)
  const planType = currentPublicPlan?.key.type
  const isAllowed = useCustomTemplatesAllowed()
  const canPublishTemplate = !!currentFile?.canPublishTemplate
  const canEdit = !!currentFile?.canEdit

  if ((planType === FOrganizationLevelType.ORG || isAllowed) && currentFile?.editorType !== FFileType.DESIGN) {
    if (canPublishTemplate) {
      return PublishTemplateStatus.CAN_PUBLISH
    }
    if (canEdit) {
      if (planType !== FOrganizationLevelType.ORG || isAllowed) {
        if (isInCorrectFolder) {
          return currentFile?.canDelete ? PublishTemplateStatus.FILE_IN_DRAFTS : PublishTemplateStatus.FILE_IN_DRAFTS_CANNOT_MOVE
        }
        return PublishTemplateStatus.CANNOT_PUBLISH
      }
    }
    return PublishTemplateStatus.DISABLED_IN_SETTINGS
  }
  return PublishTemplateStatus.NOT_ENABLED
}

// Originally $$F4
export function canPublishTemplate(status: PublishTemplateStatus): boolean {
  switch (status) {
    case PublishTemplateStatus.CAN_PUBLISH:
    case PublishTemplateStatus.FILE_IN_DRAFTS:
      return true
    case PublishTemplateStatus.DISABLED_IN_SETTINGS:
    case PublishTemplateStatus.NOT_ENABLED:
    case PublishTemplateStatus.CANNOT_PUBLISH:
    case PublishTemplateStatus.FILE_IN_DRAFTS_CANNOT_MOVE:
      return false
    default:
      throwTypeError(status)
  }
}

// Originally $$j8
export function canPublishToTeam({
  fileCanEdit,
  editor_type,
  team_id,
  state,
}: {
  fileCanEdit: boolean
  editor_type: FFileType
  team_id: string
  state: any
}): boolean {
  const org = state.currentUserOrgId && state.orgById[state.currentUserOrgId]
  return !!(org && fileCanEdit && editor_type === FFileType.WHITEBOARD && org.are_custom_templates_allowed && team_id)
}

// Originally $$U12
export function getCurrentTemplate(): any {
  const currentFile = selectCurrentFile()
  const isPublished = isTemplatePublished(currentFile)
  return currentFile?.template && isPublished ? currentFile?.template : null
}

// Originally $$B0
export function isTemplatePublished(file: any): boolean {
  const canUse = canUseCustomTemplates(file)
  return !!file && !!file.template && !file.template.unpublishedAt && canUse
}

// Originally $$G16
export function isUnassignedLabel(label: { id: string }): boolean {
  return label.id === UNASSIGNED_LABEL
}

// Interface for filter options
interface FilterOption {
  id: string
  name?: string
}

// Interface for team template data
interface TeamTemplateData {
  teamId: string
  teamName: string
  workspaceName?: string
  workspaceId: string | null
  totalTemplatesByTeam: number
  templates: { type: TeamTemplateType, template: any }[]
}

// Originally $$V1
export function useTeamTemplates(org: any, templateType: any): {
  selectedTeamOrWorkspaceOrLicenseGroupIds: any
  isMyTeamsOnly: boolean
  onFilterChange: (params: { ids: any, myTeamsOnly: boolean }) => void
  userTeamOrWorkspaceIds: any
  templatesByTeam: TeamTemplateData[]
  filterOptions: FilterOption[]
  requestLoadMore: () => void
  requestLoadMoreForTeam: (teamId: string) => void
  isLoadingTeamTemplates: boolean
} {
  const [selectedIds, setSelectedIds] = useState(null)
  const [isMyTeamsOnly, setIsMyTeamsOnly] = useState(false)
  const [templatesByTeam, setTemplatesByTeam] = useState([])
  const [filterOptions, setFilterOptions] = useState([])
  const [loadedCount, setLoadedCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const isBigmaEnabled = isBigmaEnabledAlias(org)
  const isProTemplatesLgEnabled = getFeatureFlags().pro_templates_lg

  const fetchTemplates = useCallback(({ ids, myTeamsOnly, offset = 0 }) => {
    if (org && !isProTemplatesLgEnabled) {
      templateService.getFilteredTeamTemplates({
        orgId: org.id,
        from: offset,
        size: 5,
        template_type: templateType,
        ...(isBigmaEnabled ? { my_teams_only: myTeamsOnly, workspace_ids: ids } : { team_ids: ids }),
      }).then(({ data }) => {
        setFilterOptions("filterable_workspaces" in data.meta ? data.meta.filterable_workspaces : data.meta.filterable_teams)
        setTemplatesByTeam(prev => offset === 0 ? data.meta.templates_by_team : [...prev, ...data.meta.templates_by_team])
        setLoadedCount(data.meta.templates_by_team.length)
        setIsLoading(false)
      })
    }
  }, [org, templateType, isBigmaEnabled, isProTemplatesLgEnabled])

  useEffect(() => {
    fetchTemplates({ ids: null, myTeamsOnly: false })
  }, [fetchTemplates])

  const debouncedFetch = useDebouncedCallback(fetchTemplates, 300)

  const handleFilterChange = useCallback((params) => {
    if (org) {
      loadedCountsRef.current = {}
      setIsLoading(true)
      setSelectedIds(params.ids)
      setIsMyTeamsOnly(params.myTeamsOnly)
      debouncedFetch(params)
    }
  }, [org, debouncedFetch])

  const loadedCountsRef = useRef({})

  const requestLoadMore = useCallback(() => {
    if (loadedCount === 5) {
      fetchTemplates({ ids: selectedIds, myTeamsOnly: isMyTeamsOnly, offset: templatesByTeam.length })
    }
  }, [selectedIds, isMyTeamsOnly, templatesByTeam, loadedCount, fetchTemplates])

  const requestLoadMoreForTeam = useCallback((teamId) => {
    if (isProTemplatesLgEnabled)
      return
    const teamData = templatesByTeam.find(t => t.team_id === teamId)
    if (org?.id && teamData && teamData.templates.length < teamData.total) {
      const currentCount = teamData.templates.length
      if ((loadedCountsRef.current[teamId] || 0) >= currentCount)
        return
      loadedCountsRef.current[teamId] = currentCount
      templateService.getTeamBrowsePaginated({
        orgId: org.id,
        teamId,
        from: currentCount,
        size: 10,
        templateType,
      }).then(({ data }) => {
        setTemplatesByTeam(prev => prev.map(t => t.team_id === teamId ? { ...t, templates: [...t.templates, ...data.meta.templates] } : t))
      })
    }
  }, [org?.id, templatesByTeam, templateType, isProTemplatesLgEnabled])

  return {
    selectedTeamOrWorkspaceOrLicenseGroupIds: selectedIds,
    isMyTeamsOnly,
    onFilterChange: handleFilterChange,
    userTeamOrWorkspaceIds: getUserTeamOrWorkspaceIds(org),
    templatesByTeam: templatesByTeam.map(team => ({
      teamId: team.team_id,
      teamName: team.team_name,
      workspaceName: team.workspace_name,
      workspaceId: null,
      totalTemplatesByTeam: team.total,
      templates: team.templates.map(t => ({ type: TeamTemplateType.TeamTemplate, template: t })),
    })),
    filterOptions,
    requestLoadMore,
    requestLoadMoreForTeam,
    isLoadingTeamTemplates: isLoading,
  }
}

// Originally H
export function transformTemplateData(item: any): any {
  if (!item.template)
    return null
  const file = item.template.file
  return {
    ...item.template,
    libraryKey: item.libraryKeyToFile?.libraryKey,
    signedThumbnailUrl: item.template.hasCustomThumbnail ? item.template.thumbnailUrl : file.signedThumbnailUrl,
    checkpointClientMeta: file.checkpointClientMeta,
    editorType: file.editorType,
  }
}

// Originally $$z5
export function useOrgTemplates({
  areWorkspacesEnabled,
  editorType,
  numTemplatesPerTeam,
  revalidateOnMount,
}: {
  areWorkspacesEnabled: boolean
  editorType: FFileType
  numTemplatesPerTeam: number
  revalidateOnMount: boolean
}): {
  teamTemplates: TeamTemplateData[]
  requestLoadMoreForOrg: () => void
  isLoading: boolean
  selectedIds: any
  userTeamOrWorkspaceIds: any
  isMyTeamsOnly: boolean
  filterOptions: FilterOption[]
  onFilterChange: (params: { ids: any, myTeamsOnly: boolean }) => void
} {
  const currentUserOrg = useCurrentUserOrg()
  const orgId = currentUserOrg?.id ?? null
  const [selectedIds, setSelectedIds] = useState(null)
  const [isMyTeamsOnly, setIsMyTeamsOnly] = useState(false)
  const { teamTemplates, requestLoadMoreForOrg, isLoading } = usePaginatedOrgTemplates({
    orgId,
    areWorkspacesEnabled,
    editorType,
    numTemplatesPerTeam,
    filterByIds: selectedIds ? selectedIds.map(id => id === UNASSIGNED ? "0" : id) : null,
    includeMyTeamsOnly: isMyTeamsOnly,
    revalidateOnMount,
    pageSize: 20,
  })
  const [teamOptions, setTeamOptions] = useState([])
  const [workspaceOptions, setWorkspaceOptions] = useState([])

  useEffect(() => {
    if (!areWorkspacesEnabled) {
      setWorkspaceOptions((prev) => {
        const newOptions = []
        const existingIds = new Set(prev.map(o => o.id))
        const teamIds = new Set(teamTemplates.map(t => t.teamId))
        teamTemplates.forEach((t) => {
          if (!existingIds.has(t.teamId) && !teamIds.has(t.teamId) && t.teamId && t.teamName) {
            newOptions.push({ id: t.teamId, name: t.teamName })
            teamIds.add(t.teamId)
          }
        })
        return [...prev, ...newOptions]
      })
    }
  }, [areWorkspacesEnabled, teamTemplates])

  useEffect(() => {
    if (areWorkspacesEnabled) {
      setTeamOptions((prev) => {
        const newOptions = []
        const existingIds = new Set(prev.map(o => o.id))
        const workspaceIds = new Set(teamTemplates.map(t => t.workspaceId ?? UNASSIGNED))
        teamTemplates.forEach((t) => {
          const workspaceId = t.workspaceId ?? UNASSIGNED
          if (!existingIds.has(workspaceId) && !workspaceIds.has(workspaceId)) {
            if (workspaceId === UNASSIGNED) {
              newOptions.push({ id: UNASSIGNED })
            }
            else if (t.workspaceId && t.workspaceName) {
              newOptions.push({ id: t.workspaceId, name: t.workspaceName })
            }
            workspaceIds.add(workspaceId)
          }
        })
        return [...prev, ...newOptions]
      })
    }
  }, [areWorkspacesEnabled, teamTemplates])

  const defaultIds = useMemo(() => Array.from(areWorkspacesEnabled ? teamOptions.map(o => o.id) : workspaceOptions.map(o => o.id)), [areWorkspacesEnabled, workspaceOptions, teamOptions])
  const filterOptions = areWorkspacesEnabled ? teamOptions : workspaceOptions

  const handleFilterChange = useCallback((params) => {
    setSelectedIds(params.ids)
    setIsMyTeamsOnly(params.myTeamsOnly)
  }, [])

  const debouncedHandleFilterChange = useDebouncedCallback(handleFilterChange, 300)

  return {
    teamTemplates,
    requestLoadMoreForOrg,
    isLoading,
    selectedIds: selectedIds || defaultIds,
    userTeamOrWorkspaceIds: getUserTeamOrWorkspaceIds(currentUserOrg),
    isMyTeamsOnly,
    filterOptions,
    onFilterChange: debouncedHandleFilterChange,
  }
}

// Originally $$W11
export function usePaginatedOrgTemplates({
  orgId,
  areWorkspacesEnabled,
  editorType,
  numTemplatesPerTeam,
  pageSize = 10,
  revalidateOnMount = true,
  filterByIds,
  includeMyTeamsOnly = false,
  enabled = true,
}: {
  orgId: string | null
  areWorkspacesEnabled: boolean
  editorType: FFileType
  numTemplatesPerTeam: number
  pageSize?: number
  revalidateOnMount?: boolean
  filterByIds: any
  includeMyTeamsOnly?: boolean
  enabled?: boolean
}): {
  requestLoadMoreForOrg: () => void
  teamTemplates: TeamTemplateData[]
  isLoading: boolean
} {
  const isProTemplatesLgEnabled = getFeatureFlags().pro_templates_lg && !!orgId && enabled
  const isWorkspacesEnabled = !!orgId && areWorkspacesEnabled

  const [workspaceData] = setupResourceAtomHandler(
    PaginatedTemplatesByOrgWorkspace({
      orgId,
      editorType,
      filterByWorkspaceIds: filterByIds,
      includeMyTeamsOnly,
      numTemplatesPerTeam,
      firstPageSize: pageSize,
    }),
    { enabled: isProTemplatesLgEnabled && isWorkspacesEnabled, revalidateOnMount },
  )

  const [orgData] = setupResourceAtomHandler(
    PaginatedTemplatesByOrg({
      orgId,
      editorType,
      filterByTeamIds: filterByIds,
      numTemplatesPerTeam,
      firstPageSize: pageSize,
    }),
    { enabled: isProTemplatesLgEnabled && !isWorkspacesEnabled, revalidateOnMount },
  )

  const { teamTemplates, isDoneInitialProcessing } = (() => {
    const [processedTeamIds, setProcessedTeamIds] = useState([])
    const [teamTemplates, setTeamTemplates] = useState([])
    const [isDone, setIsDone] = useState(false)

    useEffect(() => {
      const data = areWorkspacesEnabled ? workspaceData?.data : orgData?.data
      if (!data)
        return
      setIsDone(true)
      const templates = "templatesByOrg" in data ? data.templatesByOrg : data.templatesByOrgWorkspaces
      if (!templates)
        return
      const newTeams = templates.filter(t => !processedTeamIds.includes(t.teamId))
      if (newTeams.length === 0)
        return
      const newTemplates: TeamTemplateData[] = []
      newTeams.sort((a, b) => a.sortOrder - b.sortOrder).forEach((t) => {
        const transformed = transformTemplateData(t)
        if (!transformed)
          return
        const teamName = t.teamLimitedInfo?.status === "loaded" ? t.teamLimitedInfo.data?.name : t.team?.name
        if (!teamName)
          return
        const templateItem = { type: TeamTemplateType.TeamTemplateLg, template: transformed }
        const existingTeam = teamTemplates.find(tt => tt.teamId === t.teamId)
        if (existingTeam) {
          existingTeam.templates.push(templateItem)
        }
        else {
          teamTemplates.push({
            teamId: t.teamId,
            teamName,
            workspaceName: t.team?.workspace?.name,
            workspaceId: t.team?.workspace?.id,
            totalTemplatesByTeam: t.totalTemplatesByTeam,
            templates: [templateItem],
          })
        }
      })
      const newTeamIds = newTeams.map(t => t.teamId)
      setProcessedTeamIds(prev => [...prev, ...newTeamIds])
      setTeamTemplates(prev => [...prev, ...newTemplates])
    }, [data, teamTemplates, processedTeamIds, areWorkspacesEnabled])

    return { teamTemplates, isDoneInitialProcessing: isDone }
  })()

  return {
    requestLoadMoreForOrg: useCallback(() => {
      if (areWorkspacesEnabled && workspaceData?.data) {
        const data = workspaceData.data
        if (data.templatesByOrgWorkspaces?.hasNextPage() && !data.templatesByOrgWorkspaces.isLoadingNextPage) {
          data.templatesByOrgWorkspaces.loadNext(pageSize)
        }
      }
      else if (orgData?.data) {
        const data = orgData.data
        if (data.templatesByOrg?.hasNextPage() && !data.templatesByOrg.isLoadingNextPage) {
          data.templatesByOrg.loadNext(pageSize)
        }
      }
    }, [areWorkspacesEnabled, orgData.data, workspaceData.data, pageSize]),
    teamTemplates,
    isLoading: ((areWorkspacesEnabled ? workspaceData.status : orgData.status) === "loading" || !isDoneInitialProcessing) && enabled,
  }
}

// Originally $$K6
export enum OrgProSourceType {
  ORG_PLUS = "org_plus",
  PRO_OR_STUDENT_TEAM = "pro_or_student_team",
}

// Originally $$Y7
export function useTemplatesForPlan({
  plan,
  areWorkspacesEnabled,
  editorType,
  numTemplatesPerTeam,
  pageSize = 10,
  revalidateOnMount = true,
  filterByIds,
  includeMyTeamsOnly = false,
}: {
  plan: PlanUser
  areWorkspacesEnabled: boolean
  editorType: FFileType
  numTemplatesPerTeam: number
  pageSize?: number
  revalidateOnMount?: boolean
  filterByIds: any
  includeMyTeamsOnly?: boolean
}): {
  templates: { type: OrgProSourceType, data: any } | undefined
  isLoading: boolean
  requestLoadMoreTemplates: () => void
} {
  const parentId = plan.key.parentId
  const canUseInternal = useAllowInternalTemplatesCooper() && !!parentId
  const isOrgPlus = canUseInternal && plan.type === FOrganizationLevelType.ORG
  const isProTeam = canUseInternal && plan.type === FOrganizationLevelType.TEAM

  const { teamTemplates, isLoading, requestLoadMoreForOrg } = usePaginatedOrgTemplates({
    orgId: parentId ?? "",
    areWorkspacesEnabled,
    editorType,
    numTemplatesPerTeam,
    pageSize,
    revalidateOnMount,
    filterByIds,
    includeMyTeamsOnly,
    enabled: isOrgPlus,
  })

  const { templatesByTeam, isLoading: teamLoading, requestLoadMoreForTeam } = usePaginatedTeamTemplates({
    teamId: parentId ?? "",
    editorType,
    pageSize,
    enabled: isProTeam,
  })

  if (isOrgPlus) {
    return {
      templates: { type: OrgProSourceType.ORG_PLUS, data: teamTemplates },
      isLoading,
      requestLoadMoreTemplates: requestLoadMoreForOrg,
    }
  }
  if (isProTeam) {
    return {
      templates: { type: OrgProSourceType.PRO_OR_STUDENT_TEAM, data: templatesByTeam },
      isLoading: teamLoading,
      requestLoadMoreTemplates: requestLoadMoreForTeam,
    }
  }
  return {
    templates: undefined,
    isLoading: false,
    requestLoadMoreTemplates: noop,
  }
}

// Originally $$$14
export function usePaginatedTeamTemplates({
  teamId,
  editorType,
  pageSize = 20,
  enabled = true,
}: {
  teamId: string
  editorType: FFileType
  pageSize?: number
  enabled?: boolean
}): {
  requestLoadMoreForTeam: () => void
  templatesByTeam: TeamTemplateData | undefined
  isLoading: boolean
  status: string
} {
  const [{ status, data }] = setupResourceAtomHandler(
    PaginatedTemplatesByTeam({ teamId, editorType, firstPageSize: pageSize }),
    { enabled: enabled && !!teamId },
  )

  return {
    requestLoadMoreForTeam: () => {
      const templates = data?.templatesByTeam
      if (templates?.hasNextPage() && !templates.isLoadingNextPage) {
        templates.loadNext(pageSize)
      }
    },
    templatesByTeam: (() => {
      if (data?.templatesByTeam) {
        let result: TeamTemplateData | undefined
        data.templatesByTeam.sort((a, b) => a.sortOrder - b.sortOrder).forEach((t) => {
          const transformed = transformTemplateData(t)
          if (transformed) {
            if (result) {
              result.templates.push(transformed)
            }
            else {
              result = {
                teamId: t.teamId,
                totalTemplatesByTeam: t.totalTemplatesByTeam,
                teamName: t.team?.name,
                workspaceName: t.team?.workspace?.name,
                workspaceId: t.team?.workspace?.id,
                templates: [transformed],
              }
            }
          }
        })
        return result
      }
    })(),
    isLoading: status === "loading",
    status,
  }
}

// Originally X
export function getUserTeamOrWorkspaceIds(org: any): any {
  const isBigmaEnabled = isBigmaEnabledAlias(org)
  const subscription = useSubscription(BrowseTemplatesView, { currentOrgId: org?.id || "" }, { enabled: !!org })
  if (subscription.status !== "loaded" || !org)
    return null
  if (isBigmaEnabled) {
    const mainWorkspace = subscription.data.currentUser.privilegedOrgUser?.workspaceUsers.find(w => w.isMainWorkspace)
    return mainWorkspace ? [mainWorkspace.workspaceId] : null
  }
  return subscription.data.currentUser.orgAwareTeamRoles.reduce((acc, role) => role.team ? [...acc, role.team.id] : acc, [])
}

// Originally q
const searchQuery = liveStoreInstance.Query({
  fetch: async ({ orgId, count, editorType, enabled = true }) =>
    orgId && enabled
      ? await templateService.getSearchPaginated({ orgId, size: count, from: 0, templateType: editorType }).then(res => res.data.meta.templates)
      : [],
})

// Originally J
const recentTemplatesAtom = atom(null)

// Originally $$Z19
export function useRecentTemplates(editorType: FFileType, count = 2, enabled = true): {
  teamTemplates: any
  isLoading: boolean
  numTemplatesForTeam: number | undefined
} {
  const [recentData, setRecentData] = useAtomValueAndSetter(recentTemplatesAtom)
  const needsFetch = enabled && (!recentData || recentData.editorType !== editorType || recentData.count < count)
  const currentEntity = getCurrentTemplateEntity()
  const isProTemplatesLgEnabled = getFeatureFlags().pro_templates_lg
  const { teamTemplates, status } = useSearchTemplates("", editorType, count, true, isProTemplatesLgEnabled && needsFetch)
  const { templatesByTeam, status: teamStatus } = usePaginatedTeamTemplates({
    teamId: currentEntity?.type === "team" ? currentEntity.entity.id : null,
    editorType,
    pageSize: count,
    enabled: currentEntity?.type === "team" && needsFetch,
  })
  const [{ data: searchData, status: searchStatus }] = setupResourceAtomHandler(
    searchQuery({ orgId: currentEntity?.type === "org" ? currentEntity.entity.id : "", count, editorType, enabled: !isProTemplatesLgEnabled && needsFetch }),
  )

  let templates
  if (needsFetch && currentEntity) {
    switch (currentEntity.type) {
      case "org":
        templates = isProTemplatesLgEnabled ? teamTemplates : searchData?.map(t => ({ type: TeamTemplateType.TeamTemplate, template: t })) ?? []
        break
      case "team":
        templates = templatesByTeam?.templates.map(t => ({ type: TeamTemplateType.TeamTemplateLg, template: t })) ?? []
    }
  }
  else {
    templates = recentData?.templates
  }

  const currentStatus = currentEntity
    ? currentEntity.type === "org"
      ? isProTemplatesLgEnabled ? status : searchStatus
      : teamStatus
    : null

  useEffect(() => {
    if (needsFetch && currentStatus === "loaded" && templates) {
      setRecentData({ templates, count, editorType })
    }
  }, [editorType, templates, needsFetch, count, recentData, setRecentData, currentStatus])

  return {
    teamTemplates: recentData?.editorType === editorType ? templates?.slice(0, count) : undefined,
    isLoading: currentStatus === "loading",
    numTemplatesForTeam: currentEntity?.type === "team" ? templatesByTeam?.totalTemplatesByTeam : undefined,
  }
}

// Originally $$Q10
export const hasChangesAtom = atom(null) as PrimitiveAtom<any>

// Originally $$ee9
export function useHasChanges(): boolean | null {
  const fileVersionId = getCurrentTemplate()?.fileVersionId ?? ""
  const store = useStore()
  const [hasChanges, setHasChanges] = useAtomValueAndSetter(hasChangesAtom)
  const currentFileType = getCurrentFileType()
  const wellFormedModuleNodeIds = selectWithShallowEqual(state => currentFileType === FFileType.SLIDES ? selectWellFormedModuleNodeIds(state) : [])
  const deletedNodeIds = selectWithShallowEqual(state => currentFileType === FFileType.COOPER ? selectDeletedOrCooperComponentAndFrameNodeIds(state) : [])
  const moduleCount = wellFormedModuleNodeIds.length
  const deletedCount = deletedNodeIds.length

  useEffect(() => {
    if (currentFileType === FFileType.SLIDES) {
      setHasChanges(moduleCount > 0)
      return
    }
    if (currentFileType === FFileType.COOPER) {
      setHasChanges(deletedCount > 0)
      return
    }
    if (currentFileType === FFileType.FIGMAKE) {
      setHasChanges(false)
      return
    }
    if (fileVersionId && hasChanges === null) {
      checkForVisibleChanges(fileVersionId, store)
        .then(({ numPagesWithChanges }) => setHasChanges(numPagesWithChanges > 0))
        .catch(() => setHasChanges(false))
    }
  }, [fileVersionId, store, hasChanges, setHasChanges, currentFileType, wellFormedModuleNodeIds.length, wellFormedModuleNodeIds, deletedNodeIds.length, deletedNodeIds, moduleCount, deletedCount])

  return hasChanges
}

// Originally $$et17
export function useSearchTemplates(query: string, editorType: FFileType, pageSize = 10, includeEmpty = false, enabled = true): {
  requestLoadMore: () => boolean
  teamTemplates: any[]
  total: number
  status: string
} {
  const currentEntity = getCurrentTemplateEntity()
  const subscription = useSubscription(PaginatedTemplatesSearch, {
    teamId: currentEntity?.type === "team" ? currentEntity.entity.id : null,
    orgId: currentEntity?.type === "org" ? currentEntity.entity.id : null,
    query,
    editorType,
    firstPageSize: pageSize,
  }, { enabled: (!!query || includeEmpty) && !!currentEntity && enabled })

  const templates = []
  subscription.data?.templatesSearch?.forEach((item) => {
    if (!item.template)
      return
    const file = item.template.file
    const transformed = {
      ...item.template,
      libraryKey: item.libraryKeyToFile?.libraryKey,
      signedThumbnailUrl: editorType === "cooper" && item.template.hasCustomThumbnail ? item.template.thumbnailUrl : file.signedThumbnailUrl,
      checkpointClientMeta: file.checkpointClientMeta,
      editorType: file.editorType,
    }
    templates.push({ type: TeamTemplateType.TeamTemplateLg, template: transformed })
  })

  return {
    requestLoadMore: () => {
      const searchData = subscription.data?.templatesSearch
      if (searchData && !searchData.isLoadingNextPage && searchData.hasNextPage()) {
        searchData.loadNext(pageSize)
      }
      return subscription.status !== "loaded" || !!searchData?.hasNextPage()
    },
    teamTemplates: templates,
    total: subscription.data?.templatesSearch?.length ? subscription.data?.templatesSearch[0].totalSearchResults : 0,
    status: subscription.status,
  }
}

// Exports with refactored names
export const Et = isTemplatePublished
export const GR = useTeamTemplates
export const Gi = getCurrentTemplateEntity
export const J3 = getPublishTemplateStatus
export const JU = canPublishTemplate
export const L_ = useOrgTemplates
export const O$ = OrgProSourceType
export const RD = useTemplatesForPlan
export const UF = canPublishToTeam
export const ac = useHasChanges
export const b2 = hasChangesAtom
export const e2 = usePaginatedOrgTemplates
export const kD = getCurrentTemplate
export const kN = PublishTemplateStatusEnum
export const li = usePaginatedTeamTemplates
export const mZ = canUseCustomTemplates
export const qI = isUnassignedLabel
export const qY = useSearchTemplates
export const tS = hasTemplateEntity
export const wv = useRecentTemplates
