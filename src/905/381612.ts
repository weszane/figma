import { partition } from "lodash-es"
import { createOptimistThunk } from "../905/350402"
import { localStorageRef } from "../905/657224"
import { recentCustomTemplatePutAll } from "../905/775228"
import { FaceToolType, FDocumentType, ITemplateType } from "../905/862883"
import { HubTypeEnum } from "../figma_app/45218"
import { getHubFileVersionsThunk } from "../figma_app/49598"
import { addFaceStampToRecentsAction, addFetchedPluginVersionAction, addFetchedWidgetVersionAction, addPluginToRecentsAction, addTemplateToRecentsWithUserIdThunk, addWhiteboardToolToRecentsAction, addWidgetsToRecentsAction, removeRecentlyUsedPluginAction, removeRecentlyUsedWidgetAction, setRecentFaceStampsAction, setRecentPluginsAction, setRecentTemplatesAction, setRecentWhiteboardToolsAction, setRecentWidgetsAction, syncRecentPluginsAction, syncRecentWidgetsAction } from "../figma_app/147952"
import { getRecentItems, getRecentKey, RECENT_FACE_STAMPS_FIGJAM, RECENT_WHITEBOARD_TOOLS_FIGJAM } from "../figma_app/190980"
import { getCurrentPluginVersionId } from "../figma_app/300692"
import { templateService } from "../figma_app/446378"
import { throwTypeError } from "../figma_app/465776"
import { cacheWidgetVersionsThunk, fetchCanvasWidgetVersions } from "../figma_app/559491"
import { NO_TEAM } from "../figma_app/633080"
import { getAssetKeyVersion } from "../figma_app/646357"
import { loadingStatePutLoading, loadingStatePutSuccess } from "../figma_app/714946"
import { ADD_ASSET_TO_RECENTS } from "../figma_app/933328"
import { combineReducers } from "../vendor/156872"

let x = "recent-library-items-design"
let S = "recent-library-items"
let w = "recent-library-items-slides"
let C = "recent-library-items-cooper"
// Renamed variables, added types, simplified logic, improved readability
// Origin: T and k thunks for fetching templates and widgets metadata

interface TemplateFetchParams {
  key: string
  orgId?: string
  teamId?: string
}

interface WidgetFetchParams {
  key: string
}

interface WidgetVersionMap {
  [widgetId: string]: string[]
}

const fetchTemplatesMetadata = createOptimistThunk(
  async (
    thunkApi,
    params: TemplateFetchParams,
    { loadingKey }: { loadingKey: string },
  ) => {
    const state = thunkApi.getState()
    const { orgId, teamId } = params

    // Early return if no org or team ID
    if (!orgId && !teamId) {
      return
    }

    // Get recent templates and separate by type
    const recentTemplates = state.recentlyUsed.templates[params.key] || []
    const communityTemplates = recentTemplates.filter(
      template => template.type === ITemplateType.CommunityResource,
    )
    const teamTemplates = recentTemplates.filter(
      template => template.type === ITemplateType.TeamTemplate,
    )

    // Find missing community templates (not in hubFiles)
    const missingCommunityTemplateIds = new Set<string>()
    for (const template of communityTemplates) {
      if (!state.hubFiles[template.id]) {
        missingCommunityTemplateIds.add(template.id)
      }
    }

    // Early return if nothing to fetch
    if (missingCommunityTemplateIds.size === 0 && teamTemplates.length === 0) {
      return
    }

    // Dispatch loading state
    thunkApi.dispatch(
      loadingStatePutLoading({
        key: loadingKey,
      }),
    )

    // Fetch missing community templates
    const failedCommunityTemplateIds: string[] = []
    const communityTemplatePromises = Array.from(
      missingCommunityTemplateIds,
    ).map(async (templateId) => {
      try {
        await thunkApi.dispatch(
          getHubFileVersionsThunk({
            hubFileId: templateId,
          }),
        )
      }
      catch (error) {
        failedCommunityTemplateIds.push(templateId)
      }
    })

    // Flag for tracking team template fetch errors
    let hasTeamTemplateError = false
    const missingTeamTemplateKeys = new Set<string>()

    // Fetch team templates if any exist
    if (teamTemplates.length > 0) {
      const teamTemplateRequest = {
        fileKeys: teamTemplates.map(t => t.key).join(","),
        ...(orgId
          ? { orgId }
          : teamId
            ? { teamId }
            : {}),
      }

      try {
        const response = await templateService.getRecents(teamTemplateRequest)
        const fetchedTemplates = response?.data.meta.templates || []

        // Check for missing team templates
        if (fetchedTemplates.length < teamTemplates.length) {
          for (const template of teamTemplates) {
            const found = fetchedTemplates.some(
              t => t.file_key === template.key,
            )
            if (!found) {
              missingTeamTemplateKeys.add(template.key)
            }
          }
        }

        // Update store with fetched templates
        thunkApi.dispatch(recentCustomTemplatePutAll(fetchedTemplates))
      }
      catch (error) {
        hasTeamTemplateError = true
        console.error("Error fetching recent custom templates", error)
      }
    }

    // Wait for all community template requests to complete
    await Promise.all(communityTemplatePromises)

    // Update recent templates if there were failures
    const hasErrors = hasTeamTemplateError || missingTeamTemplateKeys.size > 0
    if (failedCommunityTemplateIds.length > 0 || hasErrors) {
      const failedCommunitySet = new Set(failedCommunityTemplateIds)

      const validTemplates = recentTemplates.filter((template) => {
        if (template.type === ITemplateType.TeamTemplate) {
          return !hasTeamTemplateError && !missingTeamTemplateKeys.has(template.key)
        }
        else {
          return !failedCommunitySet.has(template.id)
        }
      })

      thunkApi.dispatch(
        setRecentTemplatesAction({
          storeInRecentsKey: params.key,
          recentTemplates: validTemplates,
        }),
      )
    }

    // Dispatch success state
    thunkApi.dispatch(
      loadingStatePutSuccess({
        key: loadingKey,
      }),
    )
  },
)

const fetchWidgetsMetadata = createOptimistThunk(
  async (
    thunkApi,
    params: WidgetFetchParams,
    { loadingKey }: { loadingKey: string },
  ) => {
    const state = thunkApi.getState()

    // Build map of widget IDs to missing versions
    const widgetVersionsToFetch: WidgetVersionMap = {}

    const recentWidgets = state.recentlyUsed.widgets[params.key] || []
    for (const widget of recentWidgets) {
      const currentVersionId = getCurrentPluginVersionId(
        state.publishedCanvasWidgetVersions,
        widget.id,
      )

      const hasCurrentVersion
        = currentVersionId
        && state.publishedCanvasWidgetVersions[widget.id]?.[currentVersionId]

      // If widget doesn't have current version and has a version specified, add to fetch list
      if (!hasCurrentVersion && widget.version) {
        if (!widgetVersionsToFetch[widget.id]) {
          widgetVersionsToFetch[widget.id] = []
        }
        widgetVersionsToFetch[widget.id].push(widget.version)
      }
    }

    // Dispatch loading state
    thunkApi.dispatch(
      loadingStatePutLoading({
        key: loadingKey,
      }),
    )

    // Early return if nothing to fetch
    if (Object.keys(widgetVersionsToFetch).length === 0) {
      thunkApi.dispatch(
        loadingStatePutSuccess({
          key: loadingKey,
        }),
      )
      return
    }

    // Fetch missing widget versions
    await fetchCanvasWidgetVersions(
      widgetVersionsToFetch,
      state.currentUserOrgId,
    )

    thunkApi.dispatch(
      cacheWidgetVersionsThunk({
        widgetIDToVersions: widgetVersionsToFetch,
      }),
    )

    thunkApi.dispatch(
      loadingStatePutSuccess({
        key: loadingKey,
      }),
    )
  },
)

// Initialize recent items from localStorage
let designLibraryItems: any[] = []
let figjamLibraryItems: any[] = []
let slidesLibraryItems: any[] = []
let cooperLibraryItems: any[] = []

if (localStorageRef) {
  try {
    const storedDesign = localStorageRef.getItem(x)
    const storedFigjam = localStorageRef.getItem(S)
    const storedSlides = localStorageRef.getItem(w)
    const storedCooper = localStorageRef.getItem(C)

    designLibraryItems = (storedDesign && JSON.parse(storedDesign)) || []
    figjamLibraryItems = (storedFigjam && JSON.parse(storedFigjam)) || []
    slidesLibraryItems = (storedSlides && JSON.parse(storedSlides)) || []
    cooperLibraryItems = (storedCooper && JSON.parse(storedCooper)) || []

    // Filter out items without library_key
    designLibraryItems = filterByLibraryKey(designLibraryItems)
    figjamLibraryItems = filterByLibraryKey(figjamLibraryItems)
    slidesLibraryItems = filterByLibraryKey(slidesLibraryItems)
    cooperLibraryItems = filterByLibraryKey(cooperLibraryItems)
  }
  catch (error) {
    // Silently handle parse errors
  }
}

const initialLibraryItems = {
  [FDocumentType.Design]: designLibraryItems,
  [FDocumentType.FigJam]: figjamLibraryItems,
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: slidesLibraryItems,
  [FDocumentType.Cooper]: cooperLibraryItems,
}

const initialWidgets = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: getRecentItems(FDocumentType.FigJam, HubTypeEnum.WIDGET),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: [],
  fetchedResources: {},
}

const initialPlugins = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: getRecentItems(FDocumentType.FigJam, HubTypeEnum.PLUGIN),
  [FDocumentType.Handoff]: getRecentItems(FDocumentType.Handoff, HubTypeEnum.PLUGIN),
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: [],
  fetchedResources: {},
}

const initialTemplates = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: getRecentItems(FDocumentType.FigJam, HubTypeEnum.HUB_FILE),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: getRecentItems(FDocumentType.Slides, HubTypeEnum.HUB_FILE),
  [FDocumentType.Cooper]: [],
}

const initialFaceStamps = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: getRecentItems(FDocumentType.FigJam, FaceToolType.FACE_STAMP),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: [],
}

const initialWhiteboardTools = {
  [FDocumentType.Design]: [],
  [FDocumentType.FigJam]: getRecentItems(FDocumentType.FigJam, FaceToolType.WHITEBOARD_TOOL),
  [FDocumentType.Handoff]: [],
  [FDocumentType.Slides]: [],
  [FDocumentType.Cooper]: [],
}

/**
 * Filter array to only include items with library_key
 */
function filterByLibraryKey(items: any[]): any[] {
  return items.filter(item => !!item.library_key)
}

/**
 * Update recent items with new resource
 */
function updateRecentItems(params: {
  currentUserId?: string
  resourceId: string
  currentVersionId?: string
  editorKey: FDocumentType
  resourceKey: HubTypeEnum
}): any[] {
  const { currentUserId, resourceId, currentVersionId, editorKey, resourceKey } = params

  const [existingItem, otherItems] = partition(
    getRecentItems(editorKey, resourceKey),
    item =>
      item.type === ITemplateType.CommunityResource && item.id === resourceId,
  )[0]

  const updatedItems = [
    {
      id: resourceId,
      version: currentVersionId,
      run_by_user_ids: uniq()([
        ...(existingItem?.run_by_user_ids || []),
        ...(currentUserId ? [currentUserId] : []),
      ]),
      last_added_at_by_user_id: {
        ...(existingItem?.last_added_at_by_user_id || {}),
        ...(currentUserId
          ? {
            [currentUserId]: Date.now(),
          }
          : {}),
      },
      type: ITemplateType.CommunityResource,
    },
    ...otherItems,
  ].slice(0, resourceKey === HubTypeEnum.PLUGIN ? 21 : 12)

  const storageKey = getRecentKey(editorKey, resourceKey)
  if (storageKey) {
    localStorageRef?.setItem(storageKey, JSON.stringify(updatedItems))
  }

  return updatedItems
}

/**
 * Remove resource from recent items
 */
function removeRecentItem(
  editorKey: FDocumentType,
  resourceKey: HubTypeEnum,
  resourceId?: string,
): any[] {
  let recentItems = getRecentItems(editorKey, resourceKey)

  if (!resourceId) {
    return recentItems
  }

  recentItems = recentItems.filter(item => item.id !== resourceId)

  const storageKey = getRecentKey(editorKey, resourceKey)
  if (storageKey) {
    localStorageRef?.setItem(storageKey, JSON.stringify(recentItems))
  }

  return recentItems
}

export const recentItemsThunks = {
  fetchWidgetsMetadata,
  fetchTemplatesMetadata,
}

export const recentItemsReducer = combineReducers({
  libraryItems(state = initialLibraryItems, action: any) {
    if (ADD_ASSET_TO_RECENTS.matches(action)) {
      if (!action.payload.storeInRecentsKey)
        return state

      const assetInfo = getAssetKeyVersion(action.payload.item)
      if (!assetInfo.key)
        return state

      const { node_id, team_id } = action.payload.item
      const libraryKey = action.payload.item.library_key

      const [existingItem, otherItems] = partition(
        state[action.payload.storeInRecentsKey],
        item =>
          item.library_key === libraryKey && item.node_id === node_id,
      )[0]

      const updatedItems = [
        {
          ...assetInfo,
          team_id: team_id || NO_TEAM,
          library_key: action.payload.item.library_key,
          node_id,
          last_added_at_by_user_id: {
            ...(existingItem?.last_added_at_by_user_id || {}),
            ...(action.payload.userId
              ? {
                [action.payload.userId]: Date.now(),
              }
              : {}),
          },
        },
        ...otherItems,
      ].slice(0, 21)

      // Determine localStorage key based on document type
      let storageKey: string
      switch (action.payload.storeInRecentsKey) {
        case FDocumentType.Design:
          storageKey = x
          break
        case FDocumentType.Slides:
          storageKey = w
          break
        case FDocumentType.FigJam:
          storageKey = S
          break
        case FDocumentType.Cooper:
          storageKey = C
          break
        default:
          storageKey = S
      }

      localStorageRef?.setItem(storageKey, JSON.stringify(updatedItems))

      return {
        ...state,
        [action.payload.storeInRecentsKey]: updatedItems,
      }
    }
    return state
  },

  widgets(state = initialWidgets, action: any) {
    if (addWidgetsToRecentsAction.matches(action)) {
      const { storeInRecentsKey } = action.payload
      const resourceKey = HubTypeEnum.WIDGET

      if (!getRecentKey(storeInRecentsKey, resourceKey))
        return state

      const updatedItems = updateRecentItems({
        currentUserId: action.payload.currentUserId,
        resourceId: action.payload.id,
        currentVersionId: action.payload.version,
        editorKey: storeInRecentsKey,
        resourceKey,
      })

      return {
        ...state,
        [action.payload.storeInRecentsKey]: updatedItems,
      }
    }

    if (setRecentWidgetsAction.matches(action)) {
      return {
        ...state,
        [action.payload.storeInRecentsKey]: action.payload.recentResources,
      }
    }

    if (removeRecentlyUsedWidgetAction.matches(action)) {
      const { resourceId, storeInRecentsKey } = action.payload
      const updatedItems = removeRecentItem(
        storeInRecentsKey,
        HubTypeEnum.WIDGET,
        resourceId,
      )

      return {
        ...state,
        [storeInRecentsKey]: updatedItems,
      }
    }

    if (syncRecentWidgetsAction.matches(action)) {
      return {
        ...state,
        [action.payload.storeInRecentsKey]: getRecentItems(
          action.payload.storeInRecentsKey,
          HubTypeEnum.WIDGET,
        ),
      }
    }

    if (addFetchedWidgetVersionAction.matches(action)) {
      return {
        ...state,
        fetchedResources: {
          ...state.fetchedResources,
          [action.payload.id]: {
            version: action.payload.version,
            status: action.payload.status,
          },
        },
      }
    }

    return state
  },

  plugins(state = initialPlugins, action: any) {
    if (addPluginToRecentsAction.matches(action)) {
      const { storeInRecentsKey } = action.payload
      const resourceKey = HubTypeEnum.PLUGIN

      if (!getRecentKey(storeInRecentsKey, resourceKey))
        return state

      const updatedItems = updateRecentItems({
        currentUserId: action.payload.currentUserId,
        resourceId: action.payload.id,
        currentVersionId: action.payload.version || undefined,
        editorKey: storeInRecentsKey,
        resourceKey,
      })

      return {
        ...state,
        [action.payload.storeInRecentsKey]: updatedItems,
      }
    }

    if (setRecentPluginsAction.matches(action)) {
      return {
        ...state,
        [action.payload.storeInRecentsKey]: action.payload.recentResources,
      }
    }

    if (removeRecentlyUsedPluginAction.matches(action)) {
      const { resourceId, storeInRecentsKey } = action.payload
      const updatedItems = removeRecentItem(
        storeInRecentsKey,
        HubTypeEnum.PLUGIN,
        resourceId,
      )

      return {
        ...state,
        [storeInRecentsKey]: updatedItems,
      }
    }

    if (syncRecentPluginsAction.matches(action)) {
      if (action.payload.storeInRecentsKey === FDocumentType.Design) {
        return state
      }

      return {
        ...state,
        [action.payload.storeInRecentsKey]: getRecentItems(
          action.payload.storeInRecentsKey,
          HubTypeEnum.PLUGIN,
        ),
      }
    }

    if (addFetchedPluginVersionAction.matches(action)) {
      return {
        ...state,
        fetchedResources: {
          ...state.fetchedResources,
          [action.payload.id]: {
            version: action.payload.version,
            status: action.payload.status,
          },
        },
      }
    }

    return state
  },

  templates(state = initialTemplates, action: any) {
    if (addTemplateToRecentsWithUserIdThunk.matches(action)) {
      const { storeInRecentsKey } = action.payload
      const storageKey = getRecentKey(storeInRecentsKey, HubTypeEnum.HUB_FILE)

      if (!storageKey) {
        throw new Error(
          "Recently used templates currently only implemented for FigJam and Slides",
        )
      }

      const { payload } = action
      const { type, userId } = payload // Fixed reference to payload instead of uniq

      const [existingItem, otherItems] = partition(
        getRecentItems(storeInRecentsKey, HubTypeEnum.HUB_FILE),
        (item) => {
          switch (item.type) {
            case ITemplateType.CommunityResource:
              return (
                payload.type === ITemplateType.CommunityResource
                && item.id === payload.id
              )
            case ITemplateType.TeamTemplate:
              return (
                payload.type === ITemplateType.TeamTemplate
                && item.key === payload.file_key
              )
            default:
              throwTypeError(item.type)
          }
        },
      )[0]

      const updatedAtMap = {
        ...(existingItem?.last_added_at_by_user_id || {}),
        ...(userId
          ? {
            [userId]: Date.now(),
          }
          : {}),
      }

      let newItem: any
      switch (type) {
        case ITemplateType.CommunityResource:
          newItem = {
            id: payload.id,
            type: ITemplateType.CommunityResource,
            last_added_at_by_user_id: updatedAtMap,
          }
          break
        case ITemplateType.TeamTemplate:
          newItem = {
            key: payload.file_key,
            type: ITemplateType.TeamTemplate,
            last_added_at_by_user_id: updatedAtMap,
          }
          break
        default:
          throwTypeError(type)
      }

      const updatedItems = [newItem, ...otherItems].slice(0, 4)
      localStorageRef?.setItem(storageKey, JSON.stringify(updatedItems))

      return {
        ...state,
        [action.payload.storeInRecentsKey]: updatedItems,
      }
    }

    if (setRecentTemplatesAction.matches(action)) {
      return {
        ...state,
        [action.payload.storeInRecentsKey]: action.payload.recentTemplates,
      }
    }

    return state
  },

  faceStamps(state = initialFaceStamps, action: any) {
    if (addFaceStampToRecentsAction.matches(action)) {
      if (action.payload.storeInRecentsKey !== FDocumentType.FigJam) {
        throw new Error(
          "Recently used facestamps currently only implemented for Figjam.",
        )
      }

      const [existingItem, otherItems] = partition(
        state[action.payload.storeInRecentsKey],
        item => item.user.id === action.payload.item.user.id,
      )[0]

      const updatedItems = [
        {
          id: action.payload.item.user.id,
          type: ITemplateType.FaceStamp,
          user: action.payload.item.user,
          last_added_at_by_user_id: {
            ...(existingItem?.last_added_at_by_user_id || {}),
            ...(action.payload.currentUserId
              ? {
                [action.payload.currentUserId]: Date.now(),
              }
              : {}),
          },
        },
        ...otherItems,
      ].slice(0, 20)

      localStorageRef?.setItem(
        RECENT_FACE_STAMPS_FIGJAM,
        JSON.stringify(updatedItems),
      )

      return {
        ...state,
        [action.payload.storeInRecentsKey]: updatedItems,
      }
    }

    if (setRecentFaceStampsAction.matches(action)) {
      return {
        ...state,
        [action.payload.storeInRecentsKey]: action.payload.recentFaceStamps,
      }
    }

    return state
  },

  whiteboardTools(state = initialWhiteboardTools, action: any) {
    if (addWhiteboardToolToRecentsAction.matches(action)) {
      if (action.payload.storeInRecentsKey !== FDocumentType.FigJam) {
        throw new Error(
          "Recently used whiteboard tools currently only implemented for Figjam.",
        )
      }

      const [existingItem, otherItems] = partition(
        state[action.payload.storeInRecentsKey],
        item => item.id === action.payload.item.id,
      )[0]

      const updatedItems = [
        {
          id: action.payload.item.id,
          type: ITemplateType.WhiteboardTool,
          last_added_at_by_user_id: {
            ...(existingItem?.last_added_at_by_user_id || {}),
            ...(action.payload.currentUserId
              ? {
                [action.payload.currentUserId]: Date.now(),
              }
              : {}),
          },
        },
        ...otherItems,
      ]

      localStorageRef?.setItem(
        RECENT_WHITEBOARD_TOOLS_FIGJAM,
        JSON.stringify(updatedItems),
      )

      return {
        ...state,
        [action.payload.storeInRecentsKey]: updatedItems,
      }
    }

    if (setRecentWhiteboardToolsAction.matches(action)) {
      return {
        ...state,
        [action.payload.storeInRecentsKey]: action.payload.recentWhiteboardTools,
      }
    }

    return state
  },
})

export const Cs = recentItemsReducer
export const cd = recentItemsThunks
