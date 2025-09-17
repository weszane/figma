import { createActionCreator } from '../905/73481'

// Browser actions
export const setBrowserTileSortView = createActionCreator('BROWSER_SET_TILE_SORT_VIEW')
export const setBrowserViewBarModeOptions = createActionCreator('BROWSER_SET_VIEW_BAR_VIEW_MODE_OPTIONS')
export const setBrowserViewBarSortOptions = createActionCreator('BROWSER_SET_VIEW_BAR_SORT_OPTIONS')
export const setFileBrowserLoading = createActionCreator('FILE_BROWSER_SET_LOADING')

// Folder actions
export const beginCreateNewFolder = createActionCreator('BEGIN_CREATE_NEW_FOLDER')
export const stopCreateNewFolder = createActionCreator('STOP_CREATE_NEW_FOLDER')

// Navigation actions
export const showMobileNav = createActionCreator('SHOW_MOBILE_NAV')
export const hideMobileNav = createActionCreator('HIDE_MOBILE_NAV')

// Search and tracking actions
export const searchResultClicked = createActionCreator('SEARCH_RESULT_CLICKED')
export const trackSidebarClick = createActionCreator('TRACK_SIDEBAR_CLICK')

// Delete actions
export const setDeletedFiles = createActionCreator('SET_DELETED_FILES')
export const setDeletedRepos = createActionCreator('SET_DELETED_REPOS')

// Exports with meaningful names mapped to internal constants
export const DE = setFileBrowserLoading
export const HZ = searchResultClicked
export const JF = setBrowserTileSortView
export const Oe = trackSidebarClick
export const PY = showMobileNav
export const ZR = setBrowserViewBarSortOptions
export const _I = hideMobileNav
export const bx = stopCreateNewFolder
export const pB = setDeletedFiles
export const pg = setDeletedRepos
export const sf = beginCreateNewFolder
export const uV = setBrowserViewBarModeOptions
