import { colorToHex } from '../905/436288';
import { recommendVariablesService } from '../905/442915';
import { getRecentTimeDifferences } from '../905/456837';
import { MissingRuleType } from '../905/528903';
import { atomStoreManager } from '../figma_app/27355';
import { cQ } from '../figma_app/225126';
import { resolvedTypeToString } from '../figma_app/394327';
import { cortexAPI } from '../figma_app/432652';
import { openFileKeyAtom } from '../figma_app/516028';
import { LinterCppBindings, VariableResolvedDataType } from '../figma_app/763686';
import { Ay as _$$Ay } from '../figma_app/948389';
import { serializeJSX } from '../figma_app/964367';

// Original function: $$g0
// Refactored to recommendColorVariables for clarity
export async function recommendColorVariables(node: any,
// TODO: Add proper type for node
candidates: any[],
// TODO: Add proper type for candidates
currentValue: any,
// TODO: Add proper type for current value
queryId: string, sessionId: string, subscribedLibraryKeys: any[],
// TODO: Add proper type
selectionContext // TODO: Add proper type
: any): Promise<any[]> {
  if (candidates.length === 0) {
    return [];
  }
  const variableConsumptionForDocument = LinterCppBindings?.getVariableConsumptionForDocument() ?? new Map();
  const variableConsumptionForHighestNodeContainer = LinterCppBindings?.getVariableConsumptionForHighestNodeContainer(node.guid) ?? new Map();
  const requestPayload = {
    entry_point: 'linter',
    open_file_key: atomStoreManager.get(openFileKeyAtom) ?? '',
    query_id: queryId,
    session_id: sessionId,
    candidates: candidates.map(candidate => ({
      name: candidate.variable.name,
      key_and_version: candidate.variableId,
      variable_id: candidate.variableId,
      variable_set_id: candidate.variableSetId,
      variable_resolved_data_type: 'color' as const,
      value: {
        color_value: candidate.resolvedValue.value
      },
      usage_type: candidate.variable.isLocal ? 'LOCAL' : 'LIBRARY',
      variable_num_usages_in_file: variableConsumptionForDocument.get(candidate.variableId) ?? 0,
      variable_num_usages_in_containing_subtree: variableConsumptionForHighestNodeContainer.get(candidate.variableId) ?? 0,
      elapsed_seconds_since_last_insertions: getRecentTimeDifferences(candidate.variableId)
    })),
    current_value: {
      color_value: currentValue
    },
    subscribed_library_keys: subscribedLibraryKeys,
    current_value_data_type: 'color' as const,
    used_product_components_on_page: [],
    selection_context: cQ(node, selectionContext, variableConsumptionForDocument, variableConsumptionForHighestNodeContainer)
  };
  try {
    const response = await recommendVariablesService.recommendVariables(requestPayload);
    return response.data.meta.reranked_candidates.slice(0, 5);
  } catch {
    console.error('Error fetching reranked candidate list');
    return [];
  }
}

// Original function: $$f1
// Refactored to fixColorVariable for clarity
export async function fixColorVariable(node: any,
// TODO: Add proper type for node
candidates: any[],
// TODO: Add proper type for candidates
prop // TODO: Refine type if needed
: 'FILL' | 'stroke'): Promise<string> {
  if (candidates.length === 1) {
    return candidates[0]?.variable.name ?? '';
  }
  const serializedJSX = await serializeJSX(node, {
    includeIDs: true,
    filterFunction: (element: any) => element.visible,
    onlyIncludeTopPaint: true
  });
  const context = {
    variables: candidates.map(({
      variable,
      resolvedValue
    }) => {
      const colorValue = resolvedValue.value;
      return {
        name: variable.name,
        type: resolvedTypeToString(VariableResolvedDataType.COLOR),
        value: colorToHex(colorValue, colorValue.a)
      };
    }),
    prop: prop === 'FILL' ? 'fill' : 'stroke'
  };
  const options = {
    ..._$$Ay()
  };
  const fixResponse = await cortexAPI.shared.getViolationFix({
    targetNodeGuid: node.guid,
    inputJsx: serializedJSX.jsxStr,
    ruleType: MissingRuleType.MISSING_COLOR_TOKEN,
    context
  }, options);
  if (!fixResponse.propertyUpdates) {
    throw new Error('Missing property updates for color variable fix');
  }
  if (fixResponse.propertyUpdates.length > 1) {
    throw new Error('Received too many property updates for color variable fix');
  }
  if (fixResponse.propertyUpdates[0]?.id !== node.guid) {
    throw new Error('AI hallucinated incorrect fix');
  }
  const newValue = fixResponse.propertyUpdates[0]?.newValue;
  if (!newValue) {
    throw new Error('Missing variable value in color variable fix');
  }
  return newValue;
}

// Refactored exports to match new function names
export const i = recommendColorVariables;
export const l = fixColorVariable;