import { createActionCreator } from "../905/73481"
import { mergePublishedPluginThunk } from "../905/172918"
import { createOptimistThunk } from "../905/350402"
import { processHubFilesThunk } from "../905/359847"
import { communityShelfService } from "../905/665703"
import { setupLoadingStateHandler } from "../905/696711"
import { logError } from "../905/714362"
import { ResourceTypeNoComment2 } from "../figma_app/45218"
import { getResourceTypeV2 } from "../figma_app/740025"

// Refactored to improve readability, added types, simplified logic, and ensured type safety
// Original code names preserved in comments

// Action creator for setting shelves by shelf type
export const setShelvesForShelfTypeAction = createActionCreator("COMMUNITY_SET_SHELVES_FOR_SHELF_TYPE")

// Thunk for fetching shelves by shelf type with optional limit
export const fetchShelvesForShelfTypeThunk = createOptimistThunk(
  async (storeContext, { shelfType, limit }, { loadingKey }) => {
    const requestParams = {
      shelfType,
      limitShelfContent: limit,
    }

    try {
      const responsePromise = communityShelfService.getCommunityShelves(requestParams)
      setupLoadingStateHandler(responsePromise, storeContext, loadingKey)

      const response = await responsePromise
      const shelves = response.data.meta

      // Process each shelf's content
      shelves.forEach((shelf) => {
        processShelfContent(storeContext.dispatch, shelf.shelf_content)
      })

      storeContext.dispatch(setShelvesForShelfTypeAction({
        shelfType,
        shelves,
      }))
    }
    catch (error) {
      logError("collections", "error fetching collections", {
        ...requestParams,
        error: error.toString(),
      })
    }
  },
  ({ shelfType, limit }) => `COMMUNITY_FETCH_SHELVES_FOR_SHELF_TYPE_${shelfType}_${limit}`,
)

// Thunk for fetching shelves by shelf type and filter label
export const fetchShelvesForShelfTypeAndFilterLabelThunk = createOptimistThunk(
  async (storeContext, { shelfType, filterLabel, limit }, { loadingKey }) => {
    const requestParams = {
      shelfType,
      filterLabel,
      limitShelfContent: limit,
    }

    const responsePromise = communityShelfService.getCommunityShelves(requestParams)
    setupLoadingStateHandler(responsePromise, storeContext, loadingKey)

    const response = await responsePromise
    const shelves = response.data.meta

    // Process each shelf's content
    shelves.forEach((shelf) => {
      processShelfContent(storeContext.dispatch, shelf.shelf_content)
    })

    storeContext.dispatch(setShelvesForShelfTypeAction({
      shelfType,
      shelves,
    }))
  },
  ({ shelfType, filterLabel, limit }) =>
    `COMMUNITY_FETCH_SHELVES_FOR_SHELF_TYPE_AND_FILTER_LABEL_${shelfType}_${filterLabel}_${limit}`,
)

// Process shelf content by resource type
function processShelfContent(dispatch: Fn, shelfContent: any[]) {
  const hubFiles: any[] = []
  const plugins: any[] = []
  const widgets: any[] = []

  shelfContent.forEach((item) => {
    const resourceType = getResourceTypeV2(item)

    switch (resourceType) {
      case ResourceTypeNoComment2.HUB_FILE:
        hubFiles.push(item)
        break
      case ResourceTypeNoComment2.PLUGIN:
        plugins.push(item)
        break
      case ResourceTypeNoComment2.WIDGET:
        widgets.push(item)
        break
    }
  })

  dispatch(processHubFilesThunk({
    hubFiles,
    src: "fetchShelvesForShelfType",
  }))

  dispatch(mergePublishedPluginThunk({
    publishedPlugins: [...plugins, ...widgets],
    src: "fetchShelvesForShelfType",
  }))
}

// Export with original names
export const Dw = fetchShelvesForShelfTypeAndFilterLabelThunk // Original: $$h0
export const sz = fetchShelvesForShelfTypeThunk // Original: $$_1
export const wJ = setShelvesForShelfTypeAction // Original: $$p2
