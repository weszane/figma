import { useEffect } from "react"
import { useStore } from "react-redux"
import { createActionAndReducerWrapper } from "../905/270322"
import { getFeatureFlags } from "../905/601108"
import { microtaskThrottle } from "../905/915765"
import { subscribeObservable } from "../figma_app/84367"
import { updateLocalLibraryItems } from "../figma_app/646357"
import { AppStateTsApi, SchemaJoinStatus, UserActionState } from "../figma_app/763686"
import { fetchAndUpdateStateGroupsThunk } from "../figma_app/933328"
// Origin: /Users/allen/sigma-main/src/figma_app/958735.ts
// Refactored: Renamed variables, added TypeScript types, simplified logic, added comments, improved readability and type safety.

// Assumed dependencies:
// - createActionAndReducerWrapper returns { action: ActionCreator, reducer: Reducer }
// - AppStateTsApi.libraryAssets() returns an object with observables
// - subscribeObservable subscribes to observable changes
// - microtaskThrottle wraps a function for throttled execution


// Type for observable subscription
interface Observable<T> {
  getCopy: () => T
  // Other observable methods...
}

// Type for subscription cleanup function
type Unsubscribe = () => void

// Type for H function input
interface ObservableActionPair<T = any> {
  observable: Observable<T>
  action: (payload: T) => any
}

// Refactored action/reducer wrappers for various sync actions
export const {
  action: syncPublishableSymbolsAction,
  reducer: syncPublishableSymbolsReducer,
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_SYMBOLS", [])

export const {
  action: syncPublishableStateGroupsAction,
  reducer: syncPublishableStateGroupsReducer,
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_STATE_GROUPS", [])

export const {
  action: syncPublishableStylesAction,
  reducer: syncPublishableStylesReducer,
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_STYLES", [])

export const {
  action: syncPublishableModulesAction,
  reducer: syncPublishableModulesReducer,
} = createActionAndReducerWrapper("SYNC_PUBLISHABLE_MODULES", [])

export const {
  action: syncSubscribedSymbolsAction,
  reducer: syncSubscribedSymbolsReducer,
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_SYMBOLS", [])

export const {
  action: syncSubscribedSymbolsOnCurrentPageAction,
  reducer: syncSubscribedSymbolsOnCurrentPageReducer,
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_SYMBOLS_ON_CURRENT_PAGE", [])

export const {
  action: syncSubscribedStateGroupsAction,
  reducer: syncSubscribedStateGroupsReducer,
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_STATE_GROUPS", [])

export const {
  action: syncSubscribedStateGroupsOnCurrentPageAction,
  reducer: syncSubscribedStateGroupsOnCurrentPageReducer,
} = createActionAndReducerWrapper("SYNC_SUBSCRIBED_STATE_GROUPS_ON_CURRENT_PAGE", [])

export const {
  action: syncDirectlySubscribedStylesAction,
  reducer: syncDirectlySubscribedStylesReducer,
} = createActionAndReducerWrapper("SYNC_DIRECTLY_SUBSCRIBED_STYLES", [])

export const {
  action: syncDirectlySubscribedStylesOnCurrentPageAction,
  reducer: syncDirectlySubscribedStylesOnCurrentPageReducer,
} = createActionAndReducerWrapper("SYNC_DIRECTLY_SUBSCRIBED_STYLES_ON_CURRENT_PAGE", [])

export const {
  action: syncIndirectlySubscribedStylesAction,
  reducer: syncIndirectlySubscribedStylesReducer,
} = createActionAndReducerWrapper("SYNC_INDIRECTLY_SUBSCRIBED_STYLES", [])

export const {
  action: syncLocalSymbolsWithUsagesAction,
  reducer: syncLocalSymbolsWithUsagesReducer,
} = createActionAndReducerWrapper("SYNC_LOCAL_SYMBOLS_THAT_HAVE_USAGES", [])

export const {
  action: syncLocalSymbolsWithUsagesOnCurrentPageAction,
  reducer: syncLocalSymbolsWithUsagesOnCurrentPageReducer,
} = createActionAndReducerWrapper("SYNC_LOCAL_SYMBOLS_THAT_HAVE_USAGES_ON_CURRENT_PAGE", [])

export const {
  action: syncLocalStylesWithUsagesAction,
  reducer: syncLocalStylesWithUsagesReducer,
} = createActionAndReducerWrapper("SYNC_LOCAL_STYLES_THAT_HAVE_USAGES", [])

export const {
  action: syncLocalStylesWithUsagesOnCurrentPageAction,
  reducer: syncLocalStylesWithUsagesOnCurrentPageReducer,
} = createActionAndReducerWrapper("SYNC_LOCAL_STYLES_THAT_HAVE_USAGES_ON_CURRENT_PAGE", [])

/**
 * Main hook to synchronize publishable and subscribed assets with the Redux store.
 * Handles throttling, pausing during user actions, and observable subscriptions.
 */
export function syncLibraryAssets() {
  const featureFlags = getFeatureFlags()
  const isModulePublishEnabled = featureFlags.dse_module_publish
  const store = useStore()

  // Effect: Sync publishable assets and handle throttling/pause logic
  useEffect(() => {
    // State for throttling and pausing updates
    let syncState: "normal" | "paused" | "enqueued" = "normal"

    // Throttled update function for local library items
    const throttledUpdate = microtaskThrottle(() => updateLocalLibraryItems(store))

    // Subscribe to store changes to pause/enqueue updates during certain user actions
    const unsubscribeStore = store.subscribe(() => {
      const { activeUserAction, multiplayerSessionState } = store.getState().mirror.appModel

      // Determine if updates should be paused based on user action or multiplayer state
      const shouldPause = (
        activeUserAction === UserActionState.DRAGGING
        || activeUserAction === UserActionState.RESIZING
        || activeUserAction === UserActionState.ROTATING
        || multiplayerSessionState === SchemaJoinStatus.DETACHED
      )

      if (syncState === "normal" && shouldPause) {
        syncState = "paused"
      }
      else if (syncState === "paused" && !shouldPause) {
        syncState = "normal"
      }
      else if (syncState === "enqueued" && !shouldPause) {
        throttledUpdate()
        syncState = "normal"
      }
      else if (syncState === "normal" && !shouldPause) {
        // No state change needed
      }
      else if (syncState === "paused" && shouldPause) {
        // Remain paused
      }
    })

    // Get observables for publishable assets
    const {
      publishableSymbols,
      publishableStateGroups,
      publishableStyles,
      publishableModules,
    } = AppStateTsApi.libraryAssets()

    // Build observable/action pairs for subscription
    const observableActionPairs: ObservableActionPair[] = [
      { observable: publishableSymbols, action: syncPublishableSymbolsAction },
      { observable: publishableStateGroups, action: syncPublishableStateGroupsAction },
      { observable: publishableStyles, action: syncPublishableStylesAction },
      ...(isModulePublishEnabled
        ? [{ observable: publishableModules, action: syncPublishableModulesAction }]
        : []),
    ]

    // Subscribe to observables and trigger throttled update on change
    const unsubscribeObservables = subscribeToObservables(store, observableActionPairs, () => {
      if (syncState === "normal") {
        throttledUpdate()
      }
      else {
        syncState = "enqueued"
      }
    })

    // Cleanup subscriptions and throttled function on unmount
    return () => {
      unsubscribeObservables()
      unsubscribeStore()
      throttledUpdate.cancel()
    }
  }, [store, isModulePublishEnabled])

  // Effect: Sync subscribed symbols and state groups
  useEffect(() => {
    const { subscribedSymbols, subscribedStateGroups } = AppStateTsApi.libraryAssets()

    const observableActionPairs: ObservableActionPair[] = [
      { observable: subscribedSymbols, action: syncSubscribedSymbolsAction },
      { observable: subscribedStateGroups, action: syncSubscribedStateGroupsAction },
    ]

    // On change, dispatch fetchAndUpdateStateGroupsThunk
    return subscribeToObservables(store, observableActionPairs, () => {
      store.dispatch(fetchAndUpdateStateGroupsThunk())
    })
  }, [store])

  // Effect: Sync local symbols/styles with usages and subscribed styles
  useEffect(() => {
    const {
      localSymbolsThatHaveUsages,
      directlySubscribedStyles,
      indirectlySubscribedStyles,
      localStylesThatHaveUsages,
    } = AppStateTsApi.libraryAssets()

    const observableActionPairs: ObservableActionPair[] = [
      { observable: directlySubscribedStyles, action: syncDirectlySubscribedStylesAction },
      { observable: indirectlySubscribedStyles, action: syncIndirectlySubscribedStylesAction },
      { observable: localSymbolsThatHaveUsages, action: syncLocalSymbolsWithUsagesAction },
      { observable: localStylesThatHaveUsages, action: syncLocalStylesWithUsagesAction },
    ]

    return subscribeToObservables(store, observableActionPairs)
  }, [store])

  // Effect: Sync assets on current page
  useEffect(() => {
    const {
      subscribedSymbolsOnCurrentPage,
      subscribedStateGroupsOnCurrentPage,
      directlySubscribedStylesOnCurrentPage,
      localSymbolsThatHaveUsagesOnCurrentPage,
      localStylesThatHaveUsagesOnCurrentPage,
    } = AppStateTsApi.libraryAssets()

    const observableActionPairs: ObservableActionPair[] = [
      { observable: subscribedSymbolsOnCurrentPage, action: syncSubscribedSymbolsOnCurrentPageAction },
      { observable: subscribedStateGroupsOnCurrentPage, action: syncSubscribedStateGroupsOnCurrentPageAction },
      { observable: directlySubscribedStylesOnCurrentPage, action: syncDirectlySubscribedStylesOnCurrentPageAction },
      { observable: localSymbolsThatHaveUsagesOnCurrentPage, action: syncLocalSymbolsWithUsagesOnCurrentPageAction },
      { observable: localStylesThatHaveUsagesOnCurrentPage, action: syncLocalStylesWithUsagesOnCurrentPageAction },
    ]

    return subscribeToObservables(store, observableActionPairs)
  }, [store])
}

/**
 * Subscribes to a list of observables, dispatches actions on change, and calls an optional callback.
 * Returns a cleanup function to unsubscribe all.
 * @param store Redux store
 * @param pairs List of observable/action pairs
 * @param onChange Optional callback after dispatch
 */
function subscribeToObservables(
  store: any,
  pairs: ObservableActionPair[],
  onChange?: () => void,
): Unsubscribe {
  const unsubscribers: Unsubscribe[] = []

  for (const { observable, action } of pairs) {
    // Initial dispatch
    store.dispatch(action(observable.getCopy()))
    if (onChange)
      onChange()

    // Subscribe to observable changes
    const unsubscribe = subscribeObservable(observable, {
      onChangeDeferred: () => {
        store.dispatch(action(observable.getCopy()))
        if (onChange)
          onChange()
      },
    })
    unsubscribers.push(unsubscribe)
  }

  // Cleanup function to unsubscribe all
  return () => {
    for (const unsubscribe of unsubscribers) {
      unsubscribe()
    }
  }
}

// Export original reducer names, mapped to refactored reducer variables
export const $K = syncPublishableSymbolsReducer
export const F0 = syncSubscribedSymbolsOnCurrentPageReducer
export const Fx = syncPublishableModulesReducer
export const GN = syncLocalSymbolsWithUsagesReducer
export const QI = syncSubscribedStateGroupsReducer
export const Qu = syncLocalStylesWithUsagesOnCurrentPageReducer
export const RG = syncLocalSymbolsWithUsagesOnCurrentPageReducer
export const Te = syncPublishableStateGroupsReducer
export const ax = syncPublishableStylesReducer
export const cQ = syncDirectlySubscribedStylesOnCurrentPageReducer
export const ck = syncIndirectlySubscribedStylesReducer
export const co = syncLibraryAssets
export const db = syncLocalStylesWithUsagesReducer
export const hu = syncSubscribedStateGroupsOnCurrentPageReducer
export const lR = syncDirectlySubscribedStylesReducer
export const uN = syncSubscribedSymbolsReducer
