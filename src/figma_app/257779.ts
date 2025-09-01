export var $$n3 = (e => (e[e.FRAGMENTS = 0] = "FRAGMENTS", e[e.RECENTS = 1] = "RECENTS", e))($$n3 || {});
let $$i7 = 4;
let $$a4 = {
  searchByNodeType: "all",
  targetNodeConfig: {
    skipLowVolumeNodes: 3,
    numFragments: 15,
    rankingConfig: {
      count: 1,
      fragmentCount: 0,
      avgCountPerFragment: 0,
      avgScorePerFragment: 0,
      avgProximityScore: 0
    },
    filteringConfig: {
      fragmentsBelowScore: .85,
      proximityScoreThreshold: 0
    },
    minRequiredResults: 2
  },
  topLevelNodeConfig: {
    skipLowVolumeNodes: 3,
    numFragments: 15,
    rankingConfig: {
      count: 1,
      fragmentCount: 0,
      avgCountPerFragment: 0,
      avgScorePerFragment: 0,
      avgProximityScore: 1
    },
    filteringConfig: {
      fragmentsBelowScore: .85,
      proximityScoreThreshold: 0
    },
    minRequiredResults: 1
  },
  loggerConfig: {
    logFunnelEvents: !0,
    logTimers: !0,
    logDebugInfo: !0
  },
  numResults: 4,
  numConcurrentFragmentLoads: 3,
  dominantFrameConfig: {}
};
let $$s6 = ["GROUP", "FRAME", "SECTION", "RECTANGLE", "ROUNDED_RECTANGLE"];
var $$o0 = (e => (e.START = "start", e.SKIP_LOW_VOLUME_NODE = "skip_low_volume_node", e.SKIP_NO_SUBSCRIBED_LIBRARIES = "skip_no_subscribed_libraries", e.INITIATING_FRAGMENT_SEARCH = "initiating_fragment_search", e.NO_RESULTS = "no_results", e.RESULTS_SHOWN = "results_shown", e.RESULT_INSERTED = "result_inserted", e.RESULT_DISMISSED = "result_dismissed", e.ABORTED = "aborted", e.PANEL_OPENED = "panel_opened", e.PANEL_CLOSED = "panel_closed", e.STARTED_SEARCH = "searched_asset", e))($$o0 || {});
var $$l2 = (e => (e.SOURCE_FRAGMENT = "source_fragment", e.TL_NODE_RESULTS = "tl_node_results", e.TARGET_NODE_RESULTS = "target_node_results", e))($$l2 || {});
var $$d1 = (e => (e.TOTAL = "total", e.SEARCH_SUGGESTIONS_START = "search_suggestions_start", e.FRAGMENT_SEARCH = "fragment_search", e.EXTRACT_CONTEXT = "extract_context", e.SUMMARIZE_CONTEXT = "summarize_context", e.FILTERING_RANKING = "filtering_ranking", e.ASSET_LOOKUP = "asset_lookup", e))($$d1 || {});
var $$c8 = (e => (e.ASSET_PANEL = "asset_panel", e.EVAL = "eval", e.SHADOW_SUGGESTIONS = "shadow_suggestions", e))($$c8 || {});
export let $$u5 = {
  fileKey: "",
  queryId: "",
  selectionId: ""
};
export const GG = $$o0;
export const H2 = $$d1;
export const MX = $$l2;
export const Ou = $$n3;
export const PV = $$a4;
export const YQ = $$u5;
export const b4 = $$s6;
export const lS = $$i7;
export const qd = $$c8;