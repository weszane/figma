import { createActionCreator } from '../905/73481'

/**
 * Action creators for library and component management.
 * Original variable names are preserved in comments for traceability.
 */

/** @typedef {ReturnType<typeof createActionCreator>} ActionCreator */

// Refactored action creators with descriptive names
export const putMoveLibraryItemKeyMappings = createActionCreator('PUT_MOVE_LIBRARY_ITEM_KEY_MAPPINGS') // $$r16
export const setLibraryUpdatesBannerDismissed = createActionCreator('SET_LIBRARY_UPDATES_BANNER_DISMISSED') // $$a7
export const setLocalStyleSelection = createActionCreator('SET_LOCAL_STYLE_SELECTION') // $$s2
export const setIsRenamingSelectedStyle = createActionCreator('SET_IS_RENAMING_SELECTED_STYLE') // $$o14
export const componentReplaceOpenFilePublishedLivegraph = createActionCreator('COMPONENT_REPLACE_OPEN_FILE_PUBLISHED_LIVEGRAPH') // $$l1
export const replaceUsedLivegraphUnnaturalKeyToNaturalKey = createActionCreator('REPLACE_USED_LIVEGRAPH_UNNATURAL_KEY_TO_NATURAL_KEY') // $$d3
export const replaceUsedLivegraphDestinationAssetKeyToLegacySourceAsset = createActionCreator('REPLACE_USED_LIVEGRAPH_DESTINATION_ASSET_KEY_TO_LEGACY_SOURCE_ASSET') // $$c9
export const replaceUsedLivegraphSourceAssetKeyToFileName = createActionCreator('REPLACE_USED_LIVEGRAPH_SOURCE_ASSET_KEY_TO_FILE_NAME') // $$u11
export const replaceUsedLivegraphLocalNodeIdToDestinationFileName = createActionCreator('REPLACE_USED_LIVEGRAPH_LOCAL_NODE_ID_TO_DESTINATION_FILE_NAME') // $$p10
export const replaceUsedLivegraphLocalNodeIdToDestinationKey = createActionCreator('REPLACE_USED_LIVEGRAPH_LOCAL_NODE_ID_TO_DESTINATION_KEY') // $$m12
export const replaceUsedLivegraphSourceAssetKeyToDestinationKey = createActionCreator('REPLACE_USED_LIVEGRAPH_SOURCE_ASSET_KEY_TO_DESTINATION_KEY') // $$h8
export const replaceUsedLivegraphStyles = createActionCreator('REPLACE_USED_LIVEGRAPH_STYLES') // $$g21
export const componentReplaceLocal = createActionCreator('COMPONENT_REPLACE_LOCAL') // $$f6
export const componentClearLocal = createActionCreator('COMPONENT_CLEAR_LOCAL') // $$_4
export const setShouldSearchDefaultLibraries = createActionCreator('SET_SHOULD_SEARCH_DEFAULT_LIBRARIES') // $$A15
export const setAssetsSearchResults = createActionCreator('SET_ASSETS_SEARCH_RESULTS') // $$y13
export const setAssetsSearchNoResults = createActionCreator('SET_ASSETS_SEARCH_NO_RESULTS') // $$b24
export const setAssetsSearchOptions = createActionCreator('SET_ASSETS_SEARCH_OPTIONS') // $$v17
export const setAssetsSearchQuery = createActionCreator('SET_ASSETS_SEARCH_QUERY') // $$I19
export const defaultLibraryInitializeLibraryKeys = createActionCreator('DEFAULT_LIBRARY_INITIALIZE_LIBRARY_KEYS') // $$E20
export const defaultLibraryInitialize = createActionCreator('DEFAULT_LIBRARY_INITIALIZE') // $$x5
export const componentClearPublishedItems = createActionCreator('COMPONENT_CLEAR_PUBLISHED_ITEMS') // $$S18
export const componentDeleteForFile = createActionCreator('COMPONENT_DELETE_FOR_FILE') // $$w22
export const componentDelete = createActionCreator('COMPONENT_DELETE') // $$C25
export const componentBatchUpdate = createActionCreator('COMPONENT_BATCH_UPDATE') // $$T23
export const componentUpdate = createActionCreator('COMPONENT_UPDATE') // $$k0

// Unused action creators (not exported, but kept for reference)
// createActionCreator('COMPONENT_UPDATE_SYMBOLS')
// createActionCreator('COMPONENT_APPLY_STYLE')
// createActionCreator('COMPONENT_SET_PUBLISHED_LIBRARIES')

// Export aliases for backward compatibility (original exports)
export const $I = componentUpdate
export const B2 = componentReplaceOpenFilePublishedLivegraph
export const Bn = setLocalStyleSelection
export const Cp = replaceUsedLivegraphUnnaturalKeyToNaturalKey
export const HV = componentClearLocal
export const Ho = defaultLibraryInitialize
export const I0 = componentReplaceLocal
export const JV = setLibraryUpdatesBannerDismissed
export const KQ = replaceUsedLivegraphSourceAssetKeyToDestinationKey
export const Ty = replaceUsedLivegraphDestinationAssetKeyToLegacySourceAsset
export const U$ = replaceUsedLivegraphLocalNodeIdToDestinationFileName
export const UA = replaceUsedLivegraphSourceAssetKeyToFileName
export const WE = replaceUsedLivegraphLocalNodeIdToDestinationKey
export const Y1 = setAssetsSearchResults
export const ay = setIsRenamingSelectedStyle
export const cr = setShouldSearchDefaultLibraries
export const dC = putMoveLibraryItemKeyMappings
export const gP = setAssetsSearchOptions
export const iE = componentClearPublishedItems
export const ku = setAssetsSearchQuery
export const lx = defaultLibraryInitializeLibraryKeys
export const ow = replaceUsedLivegraphStyles
export const ru = componentDeleteForFile
export const uo = componentBatchUpdate
export const xI = setAssetsSearchNoResults
export const yH = componentDelete
