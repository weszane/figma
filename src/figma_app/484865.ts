import { reportError } from "../905/11";
import { searchAPIHandler } from "../905/144933";
import { ServiceCategories } from "../905/165054";
import { getPlanFeaturesTeamAtomFamily } from "../905/276025";
import { mapPlatformToFramework } from "../905/359509";
import { trackToolCallDuration } from "../905/372596";
import { debugState } from "../905/407919";
import { subscribeAndAwaitData } from "../905/553831";
import { waitForAtomStore } from "../905/618914";
import { processOutputSections } from "../905/963262";
import { atomStoreManager } from "../figma_app/27355";
import { FileCanAccessFullCodeConnect, PreloadCodeConnectLk } from "../figma_app/43951";
import { collectInstanceKeys, findBestMatchingVariant, getBackingNodeInfo, selectCodeConnectDoc } from "../figma_app/97042";
import { trackDefinedFileEvent } from "../figma_app/314264";
import { mockCodeConnect, mockCodebaseSuggestions, codeConnectToolsEnabledAtom, isCodebaseSuggestionsEnabled } from "../figma_app/342355";
import { generateInstanceCode } from "../figma_app/451396";
import { selectOpenFileKey, selectOpenFileLibraryKey, useCurrentFileKey } from "../figma_app/516028";
import { setupResourceAtomHandler } from "../figma_app/566371";
import { normalizeCodegenLanguage } from "../figma_app/655139";
import { GET_CODE_CONNECT_MAP } from "../figma_app/728005";
import { collectInstanceAndSymbolNodes } from "../figma_app/821179";
import type { SceneGraph } from "./175377";
// Origin: /Users/allen/sigma-main/src/figma_app/484865.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified loops, added comments, improved readability, and ensured type safety.

// Assumed dependencies: All imported modules exist and provide the expected APIs/types.


interface INode {
  guid: string;
  // Add other properties as needed
  [key: string]: any;
}
interface InstanceKey {
  // Structure inferred from usage
  [key: string]: any;
}
interface BackingNodeInfo {
  backingNodeId: string;
  backingLibraryKey: string;
  backingComponentKey?: string;
  backingStateGroupKey?: string;
}
interface NodeBatchItem {
  nodeToFetch: INode;
  backingNodeId: string;
  backingComponentKey?: string;
  backingStateGroupKey?: string;
  instanceList: InstanceKey[];
}
interface CodeConnectContent {
  componentName: string;
  source: string;
  snippet: string | null;
  snippetImports: any;
  version: string;
  label: string;
}
interface CodeConnectMappingResult {
  fileKey: string;
  openLibraryKey: string;
  nodesByLibraryKey: Map<string, NodeBatchItem[]>;
  sceneGraph: SceneGraph;
}
interface CodeConnectBulkSuggestion {
  assets: Array<{
    key: string;
    type: string;
    library_key: string;
  }>;
  planParentType: string;
  planParentId: string;
  numResultsPerAsset: number;
}
interface CodeSuggestionResult {
  name: string;
  src_path?: string;
}
interface CodeConnectDoc {
  figmadoc: string;
  label?: string;
  type?: string;
  component?: string;
  source?: string;
  templateData?: {
    imports?: any[];
  };
  template?: any;
}
interface InstanceFigmadocs {
  [key: string]: any;
}
interface OParams {
  batch: NodeBatchItem[];
  result: any;
  libraryKey: string;
  fileKey: string;
  openLibraryKey: string;
  sceneGraph: SceneGraph;
  label: string;
  nodeIdToCodeConnectContent: Record<string, CodeConnectContent>;
  nodeIdToErrors: Record<string, string>;
}

// Helper to collect mapping of nodes by library key
function prepareNodesByLibraryKey(nodesByLibraryKey: Map<string, NodeBatchItem[]>, nodes: INode[], sceneGraph: SceneGraph, fileKey: string, openLibraryKey: string, nodeIdToErrors: Record<string, string>) {
  for (const node of nodes) {
    try {
      const backingInfo: BackingNodeInfo = getBackingNodeInfo(node.guid, sceneGraph, openLibraryKey);
      const instanceList: InstanceKey[] = collectInstanceKeys(node.guid, sceneGraph, fileKey, false, openLibraryKey);
      if (!backingInfo.backingLibraryKey || !backingInfo.backingNodeId) continue;
      const batchItem: NodeBatchItem = {
        nodeToFetch: node,
        backingNodeId: backingInfo.backingNodeId,
        backingComponentKey: backingInfo.backingComponentKey,
        backingStateGroupKey: backingInfo.backingStateGroupKey,
        instanceList
      };
      if (!nodesByLibraryKey.has(backingInfo.backingLibraryKey)) {
        nodesByLibraryKey.set(backingInfo.backingLibraryKey, []);
      }
      nodesByLibraryKey.get(backingInfo.backingLibraryKey)!.push(batchItem);
    } catch (err) {
      console.error(`Error while preparing Code Connect mapping for node ${node.guid}:`, err instanceof Error ? err.message : String(err));
      nodeIdToErrors[node.guid] = `${err instanceof Error ? err.message : String(err)}`;
    }
  }
}

// Main function to collect mapping info for code connect
function collectCodeConnectMapping(node: INode, storeContext: any, nodeIdToErrors: Record<string, string>, filterGuids: Set<string> = new Set()): CodeConnectMappingResult {
  const fileKey = selectOpenFileKey(storeContext);
  const sceneGraph = storeContext.mirror.sceneGraph;
  const openLibraryKey = selectOpenFileLibraryKey(storeContext);
  if (!node) throw new Error("No node provided");
  if (!sceneGraph) throw new Error("No sceneGraph provided");
  if (!fileKey) throw new Error("No fileKey provided");
  if (!openLibraryKey) throw new Error("No openLibraryKey provided");
  const nodes = collectInstanceAndSymbolNodes(node, [], filterGuids);
  const nodesByLibraryKey = new Map<string, NodeBatchItem[]>();
  prepareNodesByLibraryKey(nodesByLibraryKey, nodes, sceneGraph, fileKey, openLibraryKey, nodeIdToErrors);
  return {
    fileKey,
    openLibraryKey,
    nodesByLibraryKey,
    sceneGraph
  };
}

// Refactored async function for main code connect mapping logic
export async function getCodeConnectMapping(toolName: string, context: any): Promise<[[Record<string, any>, Record<string, any>], [Record<string, any>, Record<string, any>]]> {
  if (!(context === GET_CODE_CONNECT_MAP || atomStoreManager.get(codeConnectToolsEnabledAtom))) {
    return [[{}, {}], [{}, {}]];
  }
  try {
    const startTime = performance.now();
    const [nodeIdToCodeConnectContent, nodeIdToErrors] = await fetchCodeConnectMapping(toolName);
    trackToolCallDuration("code_connect_mapping", performance.now() - startTime, context);
    if (isCodebaseSuggestionsEnabled()) {
      const guids = new Set(nodeIdToCodeConnectContent?.[0] ? Object.keys(nodeIdToCodeConnectContent[0]) : []);
      const [suggestions, suggestionErrors] = await fetchCodebaseSuggestions(toolName, guids);
      return [[nodeIdToCodeConnectContent, nodeIdToErrors], [suggestions, suggestionErrors]];
    }
    return [[nodeIdToCodeConnectContent, nodeIdToErrors], [{}, {}]];
  } catch (err) {
    reportError(ServiceCategories.DEVELOPER_TOOLS, err, {
      extra: {
        toolName
      }
    });
    return [[{}, {}], [{}, {}]];
  }
}

// Fetches code connect mapping for nodes
async function fetchCodeConnectMapping(toolName: INode): Promise<[Record<string, any>, Record<string, any>]> {
  const cached = atomStoreManager.get(mockCodeConnect);
  if (cached) return [cached, {}];
  const nodeIdToCodeConnectContent: Record<string, any> = {};
  const nodeIdToErrors: Record<string, string> = {};
  const state = debugState.getState();
  const devHandoffCodeLanguage = state.mirror.appModel.devHandoffCodeLanguage;
  const normalizedLanguage = normalizeCodegenLanguage(devHandoffCodeLanguage);
  const frameworkLabel = mapPlatformToFramework(normalizedLanguage.id);
  const {
    fileKey,
    nodesByLibraryKey,
    openLibraryKey,
    sceneGraph
  } = collectCodeConnectMapping(toolName, state, nodeIdToErrors);
  for (const [libraryKey, batchItems] of nodesByLibraryKey) {
    for (let i = 0; i < batchItems.length; i += 20) {
      const batch = batchItems.slice(i, i + 20);
      try {
        const preloadResult = await subscribeAndAwaitData(PreloadCodeConnectLk, {
          nodes: Array.from(new Set(batch.map(item => `${libraryKey},${item.backingNodeId}`).concat(batch.map(item => item.instanceList).flat()))),
          openFileKey: fileKey
        });
        await processCodeConnectBatch({
          batch,
          result: preloadResult,
          libraryKey,
          fileKey,
          openLibraryKey,
          sceneGraph,
          label: frameworkLabel,
          nodeIdToCodeConnectContent,
          nodeIdToErrors
        });
      } catch (err) {
        for (const item of batch) {
          console.error(`Error while fetching batch for node ${item.nodeToFetch.guid}:`, err instanceof Error ? err.message : String(err));
          nodeIdToErrors[item.nodeToFetch.guid] = `${err instanceof Error ? err.message : String(err)}`;
        }
      }
    }
  }
  return [nodeIdToCodeConnectContent, nodeIdToErrors];
}

// Fetches codebase suggestions for nodes
async function fetchCodebaseSuggestions(toolName: string, guids: Set<string>): Promise<[Record<string, any>, Record<string, any>]> {
  const cached = atomStoreManager.get(mockCodebaseSuggestions);
  if (cached) return [cached, {}];
  const suggestions: Record<string, any> = {};
  const suggestionErrors: Record<string, string> = {};
  const state = debugState.getState();
  const planFeatures = await waitForAtomStore(getPlanFeaturesTeamAtomFamily(true));
  const {
    nodesByLibraryKey
  } = collectCodeConnectMapping(toolName, state, suggestionErrors, guids);

  // Map of asset key to asset info
  const assetMap = new Map<string, {
    type: string;
    libraryKey: string;
    nodes: INode[];
  }>();
  for (const [libraryKey, batchItems] of nodesByLibraryKey.entries()) {
    for (const item of batchItems) {
      let assetInfo: {
        type: string;
        key: string;
      } | null = null;
      if (item.backingStateGroupKey) {
        assetInfo = {
          type: "state_group",
          key: item.backingStateGroupKey
        };
      } else if (item.backingComponentKey) {
        assetInfo = {
          type: "component",
          key: item.backingComponentKey
        };
      }
      if (assetInfo) {
        if (!assetMap.has(assetInfo.key)) {
          assetMap.set(assetInfo.key, {
            type: assetInfo.type,
            libraryKey,
            nodes: []
          });
        }
        assetMap.get(assetInfo.key)!.nodes.push(item.nodeToFetch);
      }
    }
  }
  const assetEntries = Array.from(assetMap.entries());
  for (let i = 0; i < assetEntries.length; i += 20) {
    const batch = assetEntries.slice(i, i + 20);
    if (batch.length === 0) continue;
    const bulkSuggestion: CodeConnectBulkSuggestion = {
      assets: batch.map(([key, {
        type,
        libraryKey
      }]) => ({
        key,
        type,
        library_key: libraryKey
      })),
      planParentType: planFeatures.key.type,
      planParentId: planFeatures.key.parentId ?? "",
      numResultsPerAsset: 3
    };
    try {
      const apiResult = await searchAPIHandler.getCodeSuggestionsBulk(bulkSuggestion);
      Object.entries(apiResult.data.meta.results ?? {}).forEach(([key, results]) => {
        const asset = assetMap.get(key);
        if (!asset) return;
        const mappedResults = (results as CodeSuggestionResult[]).map(result => ({
          componentName: result.name,
          source: result.src_path ?? ""
        }));
        asset.nodes.forEach(node => {
          suggestions[node.guid] = mappedResults;
        });
      });
    } catch (err) {
      console.error(`Error while fetching codebase suggestions for node ${toolName}:`, err instanceof Error ? err.message : String(err));
      suggestionErrors[toolName] = `${err instanceof Error ? err.message : String(err)}`;
    }
  }
  return [suggestions, suggestionErrors];
}

// Checks if the current file can access full Code Connect
export function canAccessFullCodeConnect(): boolean {
  const fileKey = useCurrentFileKey();
  const [resource] = setupResourceAtomHandler(FileCanAccessFullCodeConnect({
    key: fileKey ?? ""
  }));
  return resource.status === "loaded" && resource.data.file.status === "loaded" && resource.data.file.data?.hasPermission === true;
}

// Checks if a specific file key can access full Code Connect
export async function canAccessFullCodeConnectByKey(fileKey: string): Promise<boolean> {
  const resource = await subscribeAndAwaitData(FileCanAccessFullCodeConnect, {
    key: fileKey
  });
  return resource.file.status === "loaded" && resource.file.data?.hasPermission === true;
}

// Processes a batch of nodes for Code Connect mapping
async function processCodeConnectBatch(params: OParams): Promise<void> {
  const {
    batch,
    result,
    libraryKey,
    fileKey,
    openLibraryKey,
    sceneGraph,
    label,
    nodeIdToCodeConnectContent,
    nodeIdToErrors
  } = params;
  if (!result.file?.preload_code_connect_lk) {
    console.error(`No preload_code_connect_lk data found for library key: ${libraryKey}`);
    return;
  }
  for (const item of batch) {
    try {
      const preloadData = result.file.preload_code_connect_lk;
      if (!preloadData || !preloadData.docsById) continue;
      const docRaw = preloadData.docsById?.[`key-${libraryKey},${item.backingNodeId}`];
      if (!docRaw) continue;
      const docParsed: CodeConnectDoc = JSON.parse(docRaw);
      const version = getDocVersion(docParsed, label);
      const selectedDoc = selectCodeConnectDoc(docParsed, label);

      // Collect instance figmadocs
      const instanceFigmadocs: InstanceFigmadocs = {};
      const instanceList = item.instanceList;
      try {
        for (const instanceKey of instanceList) {
          const instanceDocRaw = preloadData.docsById?.[`key-${instanceKey}`];
          if (!instanceDocRaw) continue;
          const instanceDoc = selectCodeConnectDoc(JSON.parse(instanceDocRaw), label);
          if (instanceDoc) {
            instanceFigmadocs[`key-${instanceKey}`] = JSON.parse(instanceDoc.figmadoc);
          }
        }
      } catch (err) {
        console.error("Error processing instance Code Connect:", err);
        reportError(ServiceCategories.DEVELOPER_TOOLS, err, {
          extra: {
            instances: instanceList,
            codeConnectDocRaw: docRaw
          }
        });
      }

      // Parse figmadoc and find best matching variant
      let figmadocArray: any[] = [];
      try {
        figmadocArray = JSON.parse(selectedDoc.figmadoc);
      } catch (err) {
        console.error("Error parsing Code Connect:", err);
        reportError(ServiceCategories.DEVELOPER_TOOLS, err, {
          extra: {
            figmadoc: selectedDoc.figmadoc
          }
        });
        continue;
      }
      const bestVariant = Array.isArray(figmadocArray) ? findBestMatchingVariant(figmadocArray, item.nodeToFetch) : null;
      if (!bestVariant) continue;

      // Track missing data event if needed
      if (!bestVariant.source && !bestVariant.templateData?.imports?.length) {
        trackDefinedFileEvent("mcp.get_code_connect_mapping.missing_data", fileKey, debugState.getState(), {
          componentName: bestVariant.component || "",
          source: bestVariant.source || ""
        });
      }
      nodeIdToCodeConnectContent[item.nodeToFetch.guid] = {
        componentName: bestVariant.component,
        source: bestVariant.source,
        snippet: await generateCodeSnippet({
          node: item.nodeToFetch,
          fileKey,
          openLibraryKey,
          sceneGraph,
          figmadocResult: bestVariant,
          instanceFigmadocs: instanceFigmadocs || {}
        }),
        snippetImports: bestVariant.templateData?.imports,
        version,
        label: bestVariant.label
      };
    } catch (err) {
      console.error(`Error while processing Code Connect mapping for node ${item.nodeToFetch.guid}:`, err instanceof Error ? err.message : String(err));
      nodeIdToErrors[item.nodeToFetch.guid] = `${err instanceof Error ? err.message : String(err)}`;
    }
  }
}

// Helper to get doc version from figmadoc
function getDocVersion(doc: CodeConnectDoc, label: string): string {
  let version = "unknown";
  if (Array.isArray(doc) && label) {
    const found = (doc as any[]).find(d => d.label === label);
    version = found?.type || version;
  }
  return version;
}

// Generates code snippet for a node
async function generateCodeSnippet(params: {
  node: INode;
  fileKey: string;
  openLibraryKey: string;
  sceneGraph: SceneGraph;
  figmadocResult: any;
  instanceFigmadocs: InstanceFigmadocs;
}): Promise<string | null> {
  const {
    node,
    fileKey,
    openLibraryKey,
    sceneGraph,
    figmadocResult,
    instanceFigmadocs
  } = params;
  const result = await generateInstanceCode({
    node,
    instanceFigmadocs,
    scene: sceneGraph,
    template: figmadocResult.template,
    openLibraryKey,
    fileKey
  });
  return result && result.result === "SUCCESS" ? processOutputSections({
    output: result,
    sceneGraph,
    includeInstancePills: false,
    unrenderableInstanceMessage: "{/* Code Connect Logic Instance */}"
  }).code : null;
}

// Export statements with original names mapped to refactored functions
export const Fc = canAccessFullCodeConnect;
export const Kk = canAccessFullCodeConnectByKey;
export const nP = getCodeConnectMapping;
