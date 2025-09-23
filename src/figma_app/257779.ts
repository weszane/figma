/**
 * Enum for search result types
 * Original name: $$n3
 */
export enum SearchResultType {
  FRAGMENTS = 0,
  RECENTS = 1,
}

/**
 * Maximum number of concurrent fragment loads
 * Original name: $$i7
 */
export const MAX_CONCURRENT_FRAGMENT_LOADS: number = 4

/**
 * Search configuration settings
 * Original name: $$a4
 */
export const SEARCH_CONFIG = {
  searchByNodeType: 'all',
  targetNodeConfig: {
    skipLowVolumeNodes: 3,
    numFragments: 15,
    rankingConfig: {
      count: 1,
      fragmentCount: 0,
      avgCountPerFragment: 0,
      avgScorePerFragment: 0,
      avgProximityScore: 0,
    },
    filteringConfig: {
      fragmentsBelowScore: 0.85,
      proximityScoreThreshold: 0,
    },
    minRequiredResults: 2,
  },
  topLevelNodeConfig: {
    skipLowVolumeNodes: 3,
    numFragments: 15,
    rankingConfig: {
      count: 1,
      fragmentCount: 0,
      avgCountPerFragment: 0,
      avgScorePerFragment: 0,
      avgProximityScore: 1,
    },
    filteringConfig: {
      fragmentsBelowScore: 0.85,
      proximityScoreThreshold: 0,
    },
    minRequiredResults: 1,
  },
  loggerConfig: {
    logFunnelEvents: true,
    logTimers: true,
    logDebugInfo: true,
  },
  numResults: 4,
  numConcurrentFragmentLoads: 3,
  dominantFrameConfig: {},
}

/**
 * Supported node types for search
 * Original name: $$s6
 */
export const SUPPORTED_NODE_TYPES: string[] = [
  'GROUP',
  'FRAME',
  'SECTION',
  'RECTANGLE',
  'ROUNDED_RECTANGLE',
]

/**
 * Event types for search tracking
 * Original name: $$o0
 */
export enum SearchEventType {
  START = 'start',
  SKIP_LOW_VOLUME_NODE = 'skip_low_volume_node',
  SKIP_NO_SUBSCRIBED_LIBRARIES = 'skip_no_subscribed_libraries',
  INITIATING_FRAGMENT_SEARCH = 'initiating_fragment_search',
  NO_RESULTS = 'no_results',
  RESULTS_SHOWN = 'results_shown',
  RESULT_INSERTED = 'result_inserted',
  RESULT_DISMISSED = 'result_dismissed',
  ABORTED = 'aborted',
  PANEL_OPENED = 'panel_opened',
  PANEL_CLOSED = 'panel_closed',
  STARTED_SEARCH = 'searched_asset',
}

/**
 * Result source types
 * Original name: $$l2
 */
export enum ResultSourceType {
  SOURCE_FRAGMENT = 'source_fragment',
  TL_NODE_RESULTS = 'tl_node_results',
  TARGET_NODE_RESULTS = 'target_node_results',
}

/**
 * Timer types for performance tracking
 * Original name: $$d1
 */
export enum TimerType {
  TOTAL = 'total',
  SEARCH_SUGGESTIONS_START = 'search_suggestions_start',
  FRAGMENT_SEARCH = 'fragment_search',
  EXTRACT_CONTEXT = 'extract_context',
  SUMMARIZE_CONTEXT = 'summarize_context',
  FILTERING_RANKING = 'filtering_ranking',
  ASSET_LOOKUP = 'asset_lookup',
}

/**
 * Context types for search
 * Original name: $$c8
 */
export enum ContextType {
  ASSET_PANEL = 'asset_panel',
  EVAL = 'eval',
  SHADOW_SUGGESTIONS = 'shadow_suggestions',
}

/**
 * Search context identifiers
 * Original name: $$u5
 */
export interface SearchContext {
  fileKey: string
  queryId: string
  selectionId: string
}

export const DEFAULT_SEARCH_CONTEXT: SearchContext = {
  fileKey: '',
  queryId: '',
  selectionId: '',
}

// Export aliases for backward compatibility
export const GG = SearchEventType
export const H2 = TimerType
export const MX = ResultSourceType
export const Ou = SearchResultType
export const PV = SEARCH_CONFIG
export const YQ = DEFAULT_SEARCH_CONTEXT
export const b4 = SUPPORTED_NODE_TYPES
export const lS = MAX_CONCURRENT_FRAGMENT_LOADS
export const qd = ContextType
