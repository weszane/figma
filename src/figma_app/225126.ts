import { createContext } from "react";
import { VariableResolvedDataType, LinterCppBindings } from "../figma_app/763686";
import { convertStringToKiwi } from "../905/537777";
import { getFeatureFlags } from "../905/601108";
import { calculateColorDifference } from "../figma_app/191804";
import { fetchDynamicConfig } from "../figma_app/594947";
import { RI } from "../905/711212";
import { n as _$$n } from "../905/347702";
import { y as _$$y } from "../905/456837";
import { Cg, wp, dg, qg, A7 } from "../905/491994";
import { Z } from "../905/442873";
let m = 1 / 0;
let $$g7 = createContext({});
let f = new Set(["FRAME", "TEXT", "VECTOR", "INSTANCE", "SYMBOL"]);
function E() {
  return new Promise(e => setTimeout(e, 0));
}
export function $$y8(e) {
  let t = e.value?.alias;
  return t ? t.guid ? "LOCAL" : t.assetRef?.key : void 0;
}
export function $$b2(e) {
  return e.currentColor ? {
    color_value: e.currentColor
  } : void 0 !== e.currentFloat ? {
    number_value: e.currentFloat
  } : {};
}
export function $$T4(e) {
  switch (e) {
    case VariableResolvedDataType.COLOR:
      return "color";
    case VariableResolvedDataType.FLOAT:
      return "float";
    default:
      return;
  }
}
export function $$I3(e) {
  switch (e) {
    case VariableResolvedDataType.COLOR:
      return "COLOR";
    case VariableResolvedDataType.FLOAT:
      return "FLOAT";
    default:
      return;
  }
}
export function $$S9(e) {
  let t = e[0];
  return t ? "STACK_SPACING" === t ? "STACK_SPACING" : "STACK_PADDING_LEFT" === t || "STACK_PADDING_TOP" === t || "STACK_PADDING_RIGHT" === t || "STACK_PADDING_BOTTOM" === t ? "STACK_PADDING" : "CORNER_RADIUS" === t || "RECTANGLE_TOP_LEFT_CORNER_RADIUS" === t || "RECTANGLE_TOP_RIGHT_CORNER_RADIUS" === t || "RECTANGLE_BOTTOM_LEFT_CORNER_RADIUS" === t || "RECTANGLE_BOTTOM_RIGHT_CORNER_RADIUS" === t ? "CORNER_RADIUS" : "FONT_SIZE" === t || "LINE_HEIGHT" === t || "LETTER_SPACING" === t ? t : "UNKNOWN" : "UNKNOWN";
}
let $$v6 = _$$n((e, t, r, n) => {
  let i = Array.from(r.values()).reduce((e, t) => e + t, 0);
  let s = Array.from(n.values()).reduce((e, t) => e + t, 0);
  return {
    is_top_level_node: e.isTopLevelFrame(),
    num_descendant_nodes: e.getVisibleDescendantIds().length,
    is_component: e.isComponentish,
    depth_from_top_level_frame: e.depthFromTopLevelFrame,
    edit_info_valid: !!e.editInfo,
    layer_name: e.name,
    property: t,
    node_type: function (e) {
      return e.isIconLike ? "ICON-LIKE" : f.has(e.type) ? e.type : "OTHER";
    }(e),
    selected_components: function (e) {
      let t = e.mainComponent?.componentKey?.toString();
      if (!t) return [];
      let r = "component";
      let n = e.mainComponent ? e.mainComponent.containingStateGroupId : null;
      return n ? [{
        type: r,
        key: t,
        state_group_id: n,
        name: e.name
      }] : [{
        type: r,
        key: t,
        name: e.name
      }];
    }(e),
    file_total_variable_usages: i,
    containing_subtree_total_variable_usages: s
  };
});
let $$A0 = _$$n(async (e, t) => {
  let r = performance.now();
  let n = new Map();
  let a = new Map();
  getFeatureFlags().aip_flower_garden_shadow_reranker && e && (t.suggestionType !== VariableResolvedDataType.FLOAT || getFeatureFlags().aip_flower_garden_shadow_number_reranker) && (n = LinterCppBindings?.getVariableConsumptionForDocument() ?? new Map(), getFeatureFlags().aip_flower_garden_subtree_variable_count_feat && (await E(), a = LinterCppBindings?.getVariableConsumptionForHighestNodeContainer(e) ?? new Map(), await E()));
  return {
    data: {
      variableConsumptionInDocument: n,
      variableConsumptionInSubtree: a
    },
    timing: performance.now() - r
  };
});
let $$x1 = _$$n(async (e, t, r, n, a, c, u, g, f) => {
  let y = performance.now();
  let b = {
    data: [],
    timing: 0
  };
  if (!getFeatureFlags().aip_flower_garden_shadow_reranker || u === VariableResolvedDataType.FLOAT && !getFeatureFlags().aip_flower_garden_shadow_number_reranker) return b;
  let I = $$T4(u);
  if (!I) return b;
  let S = r ?? {};
  let v = new Map();
  t.forEach(e => {
    e.node_id && v.set(e.node_id, e);
  });
  let A = new Map();
  for (let [e, t] of f) A.set(e, new Set(t));
  let x = await fetchDynamicConfig(Cg);
  let N = x.get(wp, dg);
  let C = x.get(qg, A7);
  let w = [];
  let O = [];
  for (let t = 0; t < e.length; t++) {
    t > 0 && t % C == 0 && (await E());
    let r = e[t];
    if (!r || r?.resolvedType !== u) continue;
    let o = v.get(r.variableSetId);
    if (!o) continue;
    let d = convertStringToKiwi(o.node_id);
    if (!d) continue;
    let _ = function (e) {
      if (e && "MIXED" !== e) {
        if (e.resolvedType === VariableResolvedDataType.COLOR) return {
          color_value: e.value
        };
        if (e.resolvedType === VariableResolvedDataType.FLOAT) return {
          number_value: e.value
        };
      }
    }("LIBRARY" === o.subscriptionStatus ? Z({
      variable: r,
      variableCollectionKey: o.key,
      variableCollectionCheckpointId: o.checkpoint_id,
      collectionId: d,
      modeContext: S
    }) : c[r.node_id]);
    if (!_) continue;
    let f = {
      name: r.name,
      variable_id: r.node_id,
      variable_set_id: r.variableSetId,
      variable_resolved_data_type: I,
      usage_type: r.subscriptionStatus,
      value: _,
      variable_num_usages_in_file: n?.get(r.node_id) ?? 0,
      variable_num_usages_in_containing_subtree: a?.get(r.node_id) ?? 0,
      elapsed_seconds_since_last_insertions: _$$y(r.node_id)
    };
    let y = !1;
    if ("LIBRARY" === o.subscriptionStatus) {
      let e = o.library_key.toString();
      y = A.get(e)?.has(r.node_id) ?? !1;
    }
    if (y) w.push(f);else {
      let e = function (e, t) {
        return e.color_value && t.color_value ? calculateColorDifference(e.color_value, t.color_value) : e.number_value && t.number_value ? Math.abs(e.number_value - t.number_value) : m;
      }(_, g);
      O.push({
        candidate: f,
        distance: e
      });
    }
  }
  O.length > N && O.sort((e, t) => e.distance - t.distance);
  return {
    data: [...w, ...O.slice(0, N).map(e => e.candidate)],
    timing: performance.now() - y
  };
});
let $$N5 = _$$n(e => setTimeout(() => {
  e.filter(e => "LIBRARY" === e.subscriptionStatus).forEach(e => {
    RI(e);
  });
}, 500));
export const JC = $$A0;
export const Mv = $$x1;
export const O0 = $$b2;
export const UN = $$I3;
export const _e = $$T4;
export const _t = $$N5;
export const cQ = $$v6;
export const d2 = $$g7;
export const hW = $$y8;
export const ns = $$S9;