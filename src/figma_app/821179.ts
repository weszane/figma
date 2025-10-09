import { useCallback } from "react"
import { mapPlatformToFramework } from "../905/359509"
import { debugState } from "../905/407919"
import { subscribeAndAwaitData } from "../905/553831"
import { useLocalStorageSync } from "../905/657224"
import { processOutputSections } from "../905/963262"
import { useAtomWithSubscription } from "../figma_app/27355"
import { CodeConnectForNodeLk, FileCanAccessFullCodeConnect } from "../figma_app/43951"
import { collectInstanceKeys, getBackingNodeInfo, parseCodeConnectForDisplay } from "../figma_app/97042"
import { traverseChildren } from "../figma_app/387100"
import { generateInstanceCode } from "../figma_app/451396"
import { openFileLibraryKeyAtom } from "../figma_app/516028"
import { setupResourceAtomHandler } from "../figma_app/566371"
import { isValidLibraryKey } from "../figma_app/630951"
import { getEffectiveCodegenLanguage } from "../figma_app/655139"
import { useSceneGraphSelector } from "../figma_app/722362"
// Origin: $$y1 and $$b0 from figma_app/821179.ts
// Changes: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments, improved readability, noted assumed dependencies.

// Assumed external dependencies (from imports):
// - traverseChildren, debugState, useSceneGraphSelector, useAtomWithSubscription, openFileLibraryKeyAtom, getEffectiveCodegenLanguage, mapPlatformToFramework, useLocalStorageSync, setupResourceAtomHandler, FileCanAccessFullCodeConnect, getBackingNodeInfo, collectInstanceKeys, subscribeAndAwaitData, CodeConnectForNodeLk, isValidLibraryKey, parseCodeConnectForDisplay, generateInstanceCode, processOutputSections

// Type definitions inferred from usage
interface SceneNode {
  guid: string
  type: string
  [key: string]: any
}

interface CodeConnectImport {
  // Structure of an import, inferred from usage
  // Add properties as needed
  [key: string]: any
}

interface CodeConnectForNodeResult {
  imports: CodeConnectImport[]
  codeConnectForNodes: Map<string, any>
}

interface CodeConnectDisplay {
  doc: {
    templateData?: {
      imports?: CodeConnectImport[]
    }
    template?: any
  }
  instanceFigmadocs: any
  // ...other properties
}

interface InstanceCodeResult {
  result: string
  // ...other properties
}

interface ProcessedOutputSections {
  // Structure returned by processOutputSections
  [key: string]: any
  imports?: CodeConnectImport[]
}

/**
 * Recursively collects all INSTANCE and SYMBOL nodes from the scene graph.
 * @param rootNode The root node to start traversal.
 * @param collectedNodes Array to collect matching nodes.
 * @param visitedGuids Set to track visited node GUIDs (prevents duplicates).
 * @returns The array of collected nodes.
 */
export function collectInstanceAndSymbolNodes(
  rootNode: SceneNode,
  collectedNodes: SceneNode[],
  visitedGuids: Set<string> = new Set(),
): SceneNode[] {
  traverseChildren(rootNode, (node: SceneNode) => {
    // Only collect INSTANCE or SYMBOL nodes that haven't been visited
    if (!visitedGuids.has(node.guid) && (node.type === "INSTANCE" || node.type === "SYMBOL")) {
      collectedNodes.push(node)
    }
  })
  return collectedNodes
}

/**
 * Hook to gather Code Connect data for all instances in the current scene.
 * Returns a callback that, given a root node, collects imports and code connect data for each instance.
 */
export function useCodeConnectForInstances(): (rootNode: SceneNode) => Promise<CodeConnectForNodeResult> {
  const debug = debugState.getState()
  const currentFileKey = debug.selectedView.view === "fullscreen" ? debug.selectedView.fileKey : null
  const sceneGraph = useSceneGraphSelector()
  const openLibraryKey = useAtomWithSubscription(openFileLibraryKeyAtom)
  const codegenLanguage = getEffectiveCodegenLanguage()
  const framework = mapPlatformToFramework(codegenLanguage.id)
  const [selectedLanguageLabel] = useLocalStorageSync("code-connect-selected-language-storage-key", framework)
  const [filePermission] = setupResourceAtomHandler(
    FileCanAccessFullCodeConnect({ key: currentFileKey ?? "" }),
  )

  // Memoized callback for collecting code connect data
  return useCallback(
    async (rootNode: SceneNode): Promise<CodeConnectForNodeResult> => {
      // Early exit if required context is missing
      if (!rootNode || !openLibraryKey || !currentFileKey) {
        return {
          imports: [],
          codeConnectForNodes: new Map(),
        }
      }

      const allImports: CodeConnectImport[] = []
      const codeConnectForNodes = new Map<string, ProcessedOutputSections>()

      // Collect all INSTANCE nodes under the root
      const instanceNodes: SceneNode[] = []
      traverseChildren(rootNode, (node: SceneNode) => {
        if (node.type === "INSTANCE") {
          instanceNodes.push(node)
        }
      })

      for (const instanceNode of instanceNodes) {
        // Get backing node info and instance keys
        const { backingNodeId, backingLibraryKey } = getBackingNodeInfo(instanceNode.guid, sceneGraph, openLibraryKey)
        const instanceKeys = collectInstanceKeys(instanceNode.guid, sceneGraph, currentFileKey, false, openLibraryKey)

        // Skip if backing info is missing
        if (!backingLibraryKey || !backingNodeId)
          continue

        // Fetch code connect data for this instance
        const codeConnectData = await subscribeAndAwaitData(CodeConnectForNodeLk, {
          libraryKey: backingLibraryKey,
          nodeId: backingNodeId,
          instances: instanceKeys,
          openFileKey: currentFileKey,
          isCommunityLibrary: isValidLibraryKey(backingLibraryKey),
        })

        // Only proceed if file status is loaded
        if (codeConnectData.file.status !== "loaded")
          continue

        const codeConnectForNode = codeConnectData.file.data?.code_connect_for_node_lk
        if (!codeConnectForNode)
          continue

        // Parse code connect display info
        const displayInfo: CodeConnectDisplay = parseCodeConnectForDisplay({
          node: instanceNode,
          codeConnect: codeConnectForNode,
          label: selectedLanguageLabel,
          filePermissionData: filePermission.data,
        })

        // Collect imports from template data
        const imports = displayInfo.doc.templateData?.imports ?? []
        allImports.push(...imports)

        // Generate code for the instance using the template
        const template = displayInfo.doc.template
        if (!template)
          continue

        const instanceCode: InstanceCodeResult = await generateInstanceCode({
          node: instanceNode,
          instanceFigmadocs: displayInfo.instanceFigmadocs,
          scene: sceneGraph,
          template,
          openLibraryKey,
          fileKey: currentFileKey,
        })

        // Only process successful code generation results
        if (instanceCode && instanceCode.result === "SUCCESS") {
          // Process output sections and attach imports
          const processedOutput: ProcessedOutputSections = {
            ...processOutputSections({
              output: instanceCode,
              sceneGraph,
              includeInstancePills: false,
              unrenderableInstanceMessage: "{/* Code Connect Logic Instance */}",
            }),
            imports: allImports ?? [],
          }
          codeConnectForNodes.set(instanceNode.guid, processedOutput)
        }
      }

      return {
        imports: allImports,
        codeConnectForNodes,
      }
    },
    [sceneGraph, openLibraryKey, currentFileKey, selectedLanguageLabel, filePermission],
  )
}

// Export statements preserving original names
export const B = useCodeConnectForInstances
export const r = collectInstanceAndSymbolNodes
