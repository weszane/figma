import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { getSingletonSceneGraph } from "../905/700578";
import { atom, atomStoreManager } from "../figma_app/27355";
import { useStrictDeepEqualSceneValue } from "../figma_app/167249";
import { useSceneGraphSelectionKeys } from "../figma_app/311375";
import { codeOptionsAtom, getMcpSettingsExternal } from "../figma_app/342355";
import { getImageManager } from "../figma_app/624361";
import { generateNodeMarkup } from "../figma_app/728005";
import { desktopAPIInstance } from "../figma_app/876459";
import { generateCodeFromDesign } from "../figma_app/911720";
import { countChildNodes } from "../figma_app/935144";
// Origin: /Users/allen/sigma-main/src/figma_app/681951.ts
// Refactored: Renamed variables, added TypeScript types/interfaces, simplified logic, added comments for clarity and potential issues.

// Assumed dependencies:
// - atom, atomStoreManager, Xr: State management utilities (likely Jotai-like).
// - useSceneGraphSelectionKeys, useStrictDeepEqualSceneValue: Custom React hooks.
// - codeOptionsAtom, getMcpSettingsExternal: App settings/state.
// - getSingletonSceneGraph, getImageManager, generateNodeMarkup, desktopAPIInstance, t2, countChildNodes: App-specific utilities/services.

// Atom definitions for storing markup strings or null.
export const selectionMarkupAtom = atom<string | null>(null);
export const topLevelFrameMarkupAtom = atom<string | null>(null);
export const pageMarkupAtom = atom<string | null>(null);

// Interface for scene value containing top-level frame and page GUIDs.
interface SceneValue {
  tlfGuid: string | null;
  pageGuid: string | null;
}

// Helper function to update atom with markup based on node and code mode.
function updateMarkupAtom(nodeKey: string | null, setMarkup: (markup: string | null) => void, resourceUri: string) {
  const node = getSingletonSceneGraph().get(nodeKey ?? null);
  if (node) {
    // Check code mode: "xml" or other (e.g., "web")
    if (atomStoreManager.get(codeOptionsAtom) === "xml") {
      // Generate XML markup for the node
      const markup = generateNodeMarkup({
        node,
        includeComponents: true,
        codeConnectMapping: null,
        codebaseSuggestions: null,
        loadImageByHash: (hash: string) => getImageManager().loadImageByHash(hash),
        configSettings: getMcpSettingsExternal()
      }).content.map(item => item.text).join("\n\n");
      setMarkup(markup);
      desktopAPIInstance?.sendMCPUpdate("resource", {
        uri: resourceUri
      });
    } else {
      // Generate web markup for the node asynchronously
      const childCount = countChildNodes(node);
      generateCodeFromDesign(node, childCount, "web", () => Promise.resolve([{}, {}])).then(([result]) => {
        const markup = result.content.map((item: {
          text: string;
        }) => item.text).join("\n\n");
        setMarkup(markup);
        desktopAPIInstance?.sendMCPUpdate("resource", {
          uri: resourceUri
        });
      });
    }
  } else {
    // No node found, clear markup
    setMarkup(null);
    desktopAPIInstance?.sendMCPUpdate("resource", {
      uri: resourceUri
    });
  }
}

// Main React hook to synchronize markup atoms with current selection, top-level frame, and page.
// Note: This hook does not render anything, only manages side effects.
export function useSceneMarkupSync(): null {
  (function syncMarkup() {
    // Get current selection key (first selected node or null)
    const [selectedKey] = useSceneGraphSelectionKeys();
    const selectionKey = selectedKey ?? null;

    // Extract top-level frame and page GUIDs from scene value
    const {
      tlfGuid,
      pageGuid
    }: SceneValue = useStrictDeepEqualSceneValue((sceneGraph, key) => {
      if (key) {
        const node = sceneGraph.get(key);
        if (node) {
          return {
            tlfGuid: node.findContainingTopLevelFrameOrSelf(),
            pageGuid: node.containingCanvas ?? null
          };
        }
      }
      return {
        tlfGuid: null,
        pageGuid: null
      };
    }, selectionKey);

    // Get atom setters for markup
    const setSelectionMarkup = useSetAtom(selectionMarkupAtom);
    const setTopLevelFrameMarkup = useSetAtom(topLevelFrameMarkupAtom);
    const setPageMarkup = useSetAtom(pageMarkupAtom);

    // Update markup when selection changes
    useEffect(() => {
      updateMarkupAtom(selectionKey, setSelectionMarkup, "autocomplete://selection");
    }, [selectionKey, setSelectionMarkup]);

    // Update markup when top-level frame changes
    useEffect(() => {
      updateMarkupAtom(tlfGuid, setTopLevelFrameMarkup, "autocomplete://tlf");
    }, [tlfGuid, setTopLevelFrameMarkup]);

    // Update markup when page changes
    useEffect(() => {
      updateMarkupAtom(pageGuid, setPageMarkup, "autocomplete://page");
    }, [pageGuid, setPageMarkup]);
  })();
  return null;
}

// Export atoms with original names for compatibility.
export const Lv = topLevelFrameMarkupAtom;
export const jb = selectionMarkupAtom;
export const oG = pageMarkupAtom;
export const y6 = useSceneMarkupSync;