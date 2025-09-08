import { useEffect } from "react";
import { throwTypeError } from "../figma_app/465776";
import { MenuType } from "../figma_app/763686";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, atomStoreManager, useAtomWithSubscription, useAtomValueAndSetter } from "../figma_app/27355";
import { analyticsEventManager } from "../905/449184";
import { rJ, I, ZM, rT, KV, zZ, L2 } from "../figma_app/542202";
import { eA } from "../905/695660";
import { C } from "../905/887158";
import { td } from "../figma_app/827216";
import { h as _$$h } from "../905/207101";
import { ZC } from "../figma_app/39751";
import { Wh } from "../figma_app/615482";
import { aW } from "../figma_app/965653";
import { b as _$$b } from "../905/919117";
import { NM } from "../figma_app/99772";
import { ac } from "../figma_app/210234";
import { QU } from "../figma_app/257614";
let $$T14 = Wh(() => atom(void 0));
let $$I21 = Wh(() => atom(null));
export function $$S8({
  impressionId: e,
  source: t,
  hasSearchTerm: r = !1
}) {
  let n = Q(t);
  let {
    impressionId,
    source,
    hasSearchTerm
  } = atomStoreManager.get(_$$b);
  (impressionId !== e || source !== n || hasSearchTerm !== r) && (atomStoreManager.set(_$$b, {
    impressionId: e,
    source: n,
    hasSearchTerm: r
  }), analyticsEventManager.trackDefinedMetric("suggested_actions.entry_point_impressions", {
    impressionId: e,
    source: n,
    hasSearchTerm: r
  }));
}
function v() {
  return atomStoreManager.get(NM) ?? void 0;
}
export function $$A23(e, t) {
  let r = ZC(e);
  let i = useAtomWithSubscription($$T14);
  let [{
    impressionId: a
  }, s] = useAtomValueAndSetter(_$$b);
  useEffect(() => {
    e && !r && (analyticsEventManager.trackDefinedMetric("suggested_actions.opened", {
      sessionId: i,
      impressionId: a ?? "",
      source: Q(t)
    }), s({
      impressionId: null,
      source: null
    }));
  }, [a, r, i, s, e, t]);
}
export function $$x19(e) {
  let t = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.closed", {
    sessionId: t,
    source: e
  });
}
export function $$N9(e) {
  let t = useAtomWithSubscription($$T14);
  _$$h(() => {
    analyticsEventManager.trackDefinedMetric("suggested_actions.library_selector.opened", {
      sessionId: t,
      isUpdateView: e
    });
  });
}
export function $$C13(e, t, r) {
  let n = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.library_selector.completed", {
    sessionId: n,
    isUpdateView: e,
    numLibrariesShown: t,
    numLibrariesSelected: r
  });
}
export function $$w18() {
  let e = useAtomWithSubscription($$T14);
  _$$h(() => {
    analyticsEventManager.trackDefinedMetric("suggested_actions.suggestions_modal.opened", {
      sessionId: e
    });
  });
}
export function $$O11(e, t) {
  let r = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.too_many_layers_selected_error", {
    sessionId: r,
    numLayersSelected: e,
    maxLayersAllowed: t
  });
}
export function $$R6() {
  let e = atomStoreManager.get($$T14);
  let t = atomStoreManager.get(rJ) ?? -1;
  analyticsEventManager.trackDefinedMetric("suggested_actions.initial_dependencies_loaded", {
    sessionId: e,
    libraryAssetsLoadedTimeMs: t
  });
}
export function $$L34(e) {
  let t = atomStoreManager.get($$T14);
  let r = atomStoreManager.get(I);
  analyticsEventManager.trackDefinedMetric("suggested_actions.violation_detection.started", {
    sessionId: t,
    numNodes: e,
    requestMode: r
  });
}
export function $$P10(e) {
  let t = atomStoreManager.get($$T14);
  let r = atomStoreManager.get(I);
  let n = atomStoreManager.get(ZM) ?? -1;
  let i = -1 === n ? -1 : n / e.length;
  let a = atomStoreManager.get(rT) ?? void 0;
  let s = atomStoreManager.get(KV) ?? void 0;
  let c = atomStoreManager.get(zZ) ?? void 0;
  let u = new Map();
  for (let t of e) {
    let {
      ruleId
    } = t;
    let r = u.get(ruleId) ?? 0;
    u.set(ruleId, r + 1);
  }
  analyticsEventManager.trackDefinedMetric("suggested_actions.violation_detection.completed", {
    sessionId: t,
    requestMode: r,
    numViolations: e.length,
    numViolationsPerRule: JSON.stringify(Object.fromEntries(u)),
    totalViolationDetectionTimeMs: n,
    totalViolationDetectionTimePerNodeMs: i,
    perRuleDetectionTimeMs: JSON.stringify(a),
    perRuleAndNodeDetectionTimeMs: JSON.stringify(s),
    p95PerRuleDetectionTimeMs: JSON.stringify(c)
  });
}
export function $$D33() {
  let e = atomStoreManager.get($$T14);
  let t = atomStoreManager.get(I);
  analyticsEventManager.trackDefinedMetric("suggested_actions.visual_grouping.started", {
    sessionId: e,
    requestMode: t
  });
}
export function $$k29(e) {
  let t = 0;
  let r = 0;
  let n = [];
  e.groupIdToGroup.forEach((e, i) => {
    "ANCESTRY" === e.type ? r++ : "SIMILARITY" === e.type && t++;
    n.push(e.violatingNodeIdToRootNodeId.size);
  });
  let i = e.groupIdToGroup.size;
  let a = e.violatingNodeIdToGroupIdSet.size;
  let s = atomStoreManager.get(L2);
  let c = s.find(e => e.status === td.GROUPING_PENDING)?.duration ?? -1;
  let u = atomStoreManager.get($$T14);
  let _ = atomStoreManager.get(I);
  analyticsEventManager.trackDefinedMetric("suggested_actions.visual_grouping.completed", {
    sessionId: u,
    requestMode: _,
    numGroups: i,
    numViolatingNodes: a,
    numSimilarityGroups: t,
    numAncestryGroups: r,
    numViolationsPerGroup: JSON.stringify(n),
    visualGroupingTimeMs: c,
    visualGroupingTimePerNode: -1 === c ? -1 : c / a
  });
}
export function $$M15(e) {
  let t = atomStoreManager.get($$T14);
  let r = atomStoreManager.get(I);
  analyticsEventManager.trackDefinedMetric("suggested_actions.initial_detection_and_grouping_completed", {
    sessionId: t,
    requestMode: r,
    detectionAndGroupingTimeMs: e
  });
}
export function $$F2(e, t, r, n) {
  let i = v();
  let a = atomStoreManager.get($$T14);
  let s = ee(n);
  analyticsEventManager.trackDefinedMetric("suggested_actions.apply_suggestions.success", {
    sessionId: a,
    numViolationsFixed: e,
    numRowsFixed: t,
    numSuggestionsSkipped: r,
    ruleForLogging: s,
    selectedGroupId: i
  });
}
export function $$j30(e, t) {
  let r = v();
  let n = atomStoreManager.get($$T14);
  let i = ee(t);
  analyticsEventManager.trackDefinedMetric("suggested_actions.apply_suggestions_row.success", {
    sessionId: n,
    numViolationsFixed: e,
    ruleForLogging: i,
    selectedGroupId: r
  });
}
export function $$U20() {
  let e = v();
  let t = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.apply_suggestions.error", {
    sessionId: t,
    selectedGroupId: e
  });
}
export function $$B17(e) {
  let t = v();
  let r = atomStoreManager.get($$T14);
  let n = ee(e);
  analyticsEventManager.trackDefinedMetric("suggested_actions.apply_suggestions_row.error", {
    sessionId: r,
    selectedGroupId: t,
    ruleForLogging: n
  });
}
export function $$G25(e, t, r, n) {
  let i = v();
  let a = atomStoreManager.get($$T14);
  let s = ee(n);
  analyticsEventManager.trackDefinedMetric("suggested_actions.ignore_suggestions.success", {
    sessionId: a,
    numIgnoredRows: e,
    numViolationsIgnored: t,
    numSuggestionsSkipped: r,
    ruleForLogging: s,
    selectedGroupId: i
  });
}
export function $$V3() {
  let e = v();
  let t = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.ignore_suggestions.error", {
    sessionId: t,
    selectedGroupId: e
  });
}
export function $$H22(e, t) {
  let r = v();
  let n = atomStoreManager.get($$T14);
  let i = ee(t);
  analyticsEventManager.trackDefinedMetric("suggested_actions.ignore_suggestion_row", {
    sessionId: n,
    numViolationsIgnored: e,
    ruleForLogging: i,
    selectedGroupId: r
  });
}
export function $$z27() {
  let e = v();
  let t = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.refresh_linter", {
    sessionId: t,
    selectedGroupId: e
  });
}
export function $$W5(e, t) {
  return setTimeout(() => function (e, t) {
    let r = e.rootNodeIdToViolatingNodeIdSet.size;
    let n = Object.entries(atomStoreManager.get(QU).suggestionBlocks).sort(([e], [t]) => e.localeCompare(t));
    let i = 0;
    let a = 0;
    let d = new Map();
    for (let [e, t] of n) {
      if (!t) continue;
      let r = Object.keys(t).length;
      for (let [, n] of (i += r, d.set(e, r), Object.entries(t))) {
        let e = n[0]?.detectionContext;
        e && "assetType" in e && "COMPONENT" === e.assetType && a++;
      }
    }
    let u = 0;
    let p = getSingletonSceneGraph();
    let _ = ac(e);
    let h = p.get(_ ?? null);
    h && eA(h, () => {
      u++;
    });
    let m = atomStoreManager.get($$T14);
    analyticsEventManager.trackDefinedMetric("NEXT" === t ? "suggested_actions.next_group_selected" : "suggested_actions.group_selected", {
      sessionId: m,
      selectedGroupId: e.id,
      groupSize: r,
      numLayersInRootNode: u,
      totalRows: i,
      detectionOnlyRows: a,
      blocks: JSON.stringify(Array.from(d.keys())),
      blockIdToNumRowsMap: JSON.stringify(Object.fromEntries(d))
    });
  }(e, t), 0);
}
export function $$K7(e, t, r) {
  let n = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.group_suggestions_loaded", {
    sessionId: n,
    selectedGroupId: e,
    numSuggestions: t,
    loadingTimeMs: r
  });
}
export function $$Y35(e, t) {
  let r = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.group_suggestions_completed", {
    sessionId: r,
    selectedGroupId: e,
    timeToCompleteMs: t
  });
}
export function $$$1(e) {
  let t = atomStoreManager.get($$T14);
  analyticsEventManager.trackDefinedMetric("suggested_actions.completed", {
    sessionId: t,
    timeToCompleteMs: e
  });
}
export function $$X24(e, t, r, n, i) {
  let a = atomStoreManager.get($$T14);
  let s = v();
  let d = ee(i);
  analyticsEventManager.trackDefinedMetric("suggested_actions.variable_rule.suggestions_generated", {
    sessionId: a,
    suggestionId: e,
    selectedGroupId: s,
    queryId: t,
    variableKeys: JSON.stringify(r),
    suggestionSource: n,
    ruleForLogging: d
  });
}
export function $$q4({
  suggestionId: e,
  variableKey: t,
  subscriptionStatus: r,
  variableSetId: n,
  ruleId: i
}) {
  let a = atomStoreManager.get($$T14);
  let s = v();
  let d = ee(i);
  analyticsEventManager.trackDefinedMetric("suggested_actions.variable_rule.inserted", {
    suggestionId: e,
    sessionId: a,
    selectedGroupId: s,
    subscriptionStatus: r,
    variableKey: t,
    variableSetId: n,
    ruleForLogging: d
  });
}
export function $$J32(e, t, r) {
  let n = atomStoreManager.get($$T14);
  let i = v();
  let a = ee(r);
  analyticsEventManager.trackDefinedMetric("suggested_actions.style_rule.suggestions_generated", {
    sessionId: n,
    suggestionId: e,
    selectedGroupId: i,
    styleKeys: JSON.stringify(t),
    ruleForLogging: a
  });
}
export function $$Z16(e, t, r) {
  let n = atomStoreManager.get($$T14);
  let i = v();
  let a = ee(r);
  analyticsEventManager.trackDefinedMetric("suggested_actions.style_rule.inserted", {
    suggestionId: e,
    sessionId: n,
    selectedGroupId: i,
    styleKey: t,
    ruleForLogging: a
  });
}
function Q(e) {
  if (null === e) return "UNKNOWN_SOURCE";
  switch (e) {
    case MenuType.ACTIONS_MENU:
      return "ACTIONS_MENU";
    case MenuType.RFD_INITIAL_NUDGE:
      return "RFD_INITIAL_NUDGE";
    case MenuType.RFD_STATUS_MENU:
      return "RFD_STATUS_MENU";
    case MenuType.SHARE_MODAL:
      return "SHARE_MODAL";
    case MenuType.COPY_SELECTION_TOAST:
      return "COPY_SELECTION_TOAST";
    default:
      throwTypeError(e);
  }
}
function ee(e) {
  return e ? [C.REQUIRE_TOP_RIGHT_CORNER_RADIUS_VARIABLES, C.REQUIRE_TOP_LEFT_CORNER_RADIUS_VARIABLES, C.REQUIRE_BOTTOM_RIGHT_CORNER_RADIUS_VARIABLES, C.REQUIRE_BOTTOM_LEFT_CORNER_RADIUS_VARIABLES].includes(e) ? "REQUIRE_CORNER_RADIUS_VARIABLES" : [C.REQUIRE_TOP_PADDING_VARIABLES, C.REQUIRE_BOTTOM_PADDING_VARIABLES, C.REQUIRE_LEFT_PADDING_VARIABLES, C.REQUIRE_RIGHT_PADDING_VARIABLES].includes(e) ? "REQUIRE_PADDING_VARIABLES" : e : void 0;
}
export function $$et26({
  numViolationsFixed: e,
  numRowsFixed: t,
  numBlocksFixed: r
}) {
  analyticsEventManager.trackDefinedMetric("suggested_actions.apply_group_suggestions.success", {
    sessionId: atomStoreManager.get($$T14),
    numViolationsFixed: e,
    numRowsFixed: t,
    numBlocksFixed: r,
    selectedGroupId: v()
  });
}
export function $$er12() {
  analyticsEventManager.trackDefinedMetric("suggested_actions.apply_group_suggestions.error", {
    sessionId: atomStoreManager.get($$T14),
    selectedGroupId: v()
  });
}
export function $$en31() {
  analyticsEventManager.trackDefinedMetric("suggested_actions.apply_group_suggestions.block_error", {
    sessionId: atomStoreManager.get($$T14),
    selectedGroupId: v()
  });
}
export function $$ei0({
  blockId: e,
  searchQuery: t,
  hasOptionSelected: r,
  numSuggestionsShown: n
}) {
  let i = atomStoreManager.get($$T14);
  i && ("" === t ? analyticsEventManager.trackDefinedMetric("suggested_actions.flyout.opened", {
    sessionId: i,
    type: e,
    hasOptionSelected: r,
    numSuggestionsShown: n
  }) : analyticsEventManager.trackDefinedMetric("suggested_actions.flyout.searched", {
    sessionId: i,
    type: e,
    searchTermLength: t.length,
    numSearchResultsShown: n
  }));
}
export function $$ea28() {
  let e = atomStoreManager.get(aW);
  let t = atomStoreManager.get($$I21) ?? {
    selectedNewOption: !1,
    hadSearchTerm: !1
  };
  let r = atomStoreManager.get($$T14);
  r && e && (analyticsEventManager.trackDefinedMetric("suggested_actions.flyout.closed", {
    sessionId: r,
    selectedNewOption: t.selectedNewOption,
    hadSearchTerm: t.hadSearchTerm
  }), atomStoreManager.set($$I21, null));
}
export const A5 = $$ei0;
export const A9 = $$$1;
export const DC = $$F2;
export const Gj = $$V3;
export const Hf = $$q4;
export const JT = $$W5;
export const LU = $$R6;
export const OW = $$K7;
export const OX = $$S8;
export const PV = $$N9;
export const QH = $$P10;
export const Rg = $$O11;
export const Rz = $$er12;
export const U_ = $$C13;
export const Vg = $$T14;
export const Vs = $$M15;
export const W9 = $$Z16;
export const Yu = $$B17;
export const ZE = $$w18;
export const Zz = $$x19;
export const av = $$U20;
export const dd = $$I21;
export const dg = $$H22;
export const fx = $$A23;
export const gU = $$X24;
export const h5 = $$G25;
export const i7 = $$et26;
export const il = $$z27;
export const jD = $$ea28;
export const jf = $$k29;
export const lX = $$j30;
export const m7 = $$en31;
export const ne = $$J32;
export const pc = $$D33;
export const qc = $$L34;
export const sc = $$Y35;