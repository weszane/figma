import { MissingRuleType } from "../905/528903";
import { LinterCppBindings, VariableResolvedDataType } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import { colorToHex } from "../905/436288";
import { oy } from "../figma_app/964367";
import { cortexAPI } from "../figma_app/432652";
import { Ay as _$$Ay } from "../figma_app/948389";
import { openFileKeyAtom } from "../figma_app/516028";
import { D } from "../905/442915";
import { y } from "../905/456837";
import { Hr } from "../figma_app/394327";
import { cQ } from "../figma_app/225126";
export async function $$g0(e, t, i, n, s, o, l) {
  if (0 === t.length) return [];
  let d = LinterCppBindings?.getVariableConsumptionForDocument() ?? new Map();
  let m = LinterCppBindings?.getVariableConsumptionForHighestNodeContainer(e.guid) ?? new Map();
  let g = {
    entry_point: "linter",
    open_file_key: atomStoreManager.get(openFileKeyAtom) ?? "",
    query_id: n,
    session_id: s,
    candidates: t.map(e => ({
      name: e.variable.name,
      key_and_version: e.variableId,
      variable_id: e.variableId,
      variable_set_id: e.variableSetId,
      variable_resolved_data_type: "color",
      value: {
        color_value: e.resolvedValue.value
      },
      usage_type: e.variable.isLocal ? "LOCAL" : "LIBRARY",
      variable_num_usages_in_file: d.get(e.variableId) ?? 0,
      variable_num_usages_in_containing_subtree: m.get(e.variableId) ?? 0,
      elapsed_seconds_since_last_insertions: y(e.variableId)
    })),
    current_value: {
      color_value: i
    },
    subscribed_library_keys: o,
    current_value_data_type: "color",
    used_product_components_on_page: [],
    selection_context: cQ(e, l, d, m)
  };
  try {
    return (await D.recommendVariables(g)).data.meta.reranked_candidates.slice(0, 5);
  } catch {
    console.error("Error fetching reranked candidate list");
    return [];
  }
}
export async function $$f1(e, t, i) {
  if (1 === t.length) return t[0]?.variable.name ?? "";
  let a = await oy(e, {
    includeIDs: !0,
    filterFunction: e => e.visible,
    onlyIncludeTopPaint: !0
  });
  let c = {
    variables: t.map(({
      variable: e,
      resolvedValue: t
    }) => {
      let i = t.value;
      return {
        name: e.name,
        type: Hr(VariableResolvedDataType.COLOR),
        value: colorToHex(i, i.a)
      };
    }),
    prop: "FILL" === i ? "fill" : "stroke"
  };
  let u = {
    ..._$$Ay()
  };
  let p = await cortexAPI.shared.getViolationFix({
    targetNodeGuid: e.guid,
    inputJsx: a.jsxStr,
    ruleType: MissingRuleType.MISSING_COLOR_TOKEN,
    context: c
  }, u);
  if (!p.propertyUpdates) throw Error("Missing property updates for color variable fix");
  if (p.propertyUpdates.length > 1) throw Error("Received too property updates for color variable fix");
  if (p.propertyUpdates[0]?.id !== e.guid) throw Error("AI hallucinated incorrect fix");
  let h = p.propertyUpdates[0]?.newValue;
  if (!h) throw Error("Missing variable value in color variable fix");
  return h;
}
export const i = $$g0;
export const l = $$f1;