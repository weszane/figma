import type { PrimitiveAtom } from "jotai"
import { getFeatureFlags } from "../905/601108"
import { atom, atomStoreManager, createLocalStorageAtom, setupAtomWithMount } from "../figma_app/27355"
import { desktopAPIInstance } from "../figma_app/876459"

// Feature flag atoms for MCP (Multi-Client Platform) development mode settings
export const codeConnectToolsEnabledAtom = createLocalStorageAtom("dev-mode-mcp-get-code-connect-tools-enabled", true, {
  subscribeToChanges: true,
})

export const codebaseSuggestionsEnabledAtom = createLocalStorageAtom("dev-mode-mcp-codebase-suggestions-enabled", false, {
  subscribeToChanges: true,
})

// Check if codebase suggestions are enabled based on atom value and feature flag
export function isCodebaseSuggestionsEnabled(): boolean {
  return atomStoreManager.get(codebaseSuggestionsEnabledAtom) && getFeatureFlags().dt_my_cool_plugin_codebase_suggestions
}

export const codeOptionsAtom = createLocalStorageAtom("dev-mode-mcp-get-code-options", "design_to_react", {
  subscribeToChanges: true,
})

export const imageOptionsAtom = createLocalStorageAtom(
  "dev-mode-mcp-image-options",
  desktopAPIInstance?.hasFeature("addMcpImageSupport") ? "local" : "placeholder-svg",
  {
    subscribeToChanges: true,
  },
)

// Setup atom with mount for image options that sends MCP update when changed
export const imageOptionsWithMount = setupAtomWithMount(imageOptionsAtom, ({
  onSet: setter,
}) => {
  setter(() => {
    desktopAPIInstance?.sendMCPUpdate("tool_list", {})
  })
})

export const denyOverwritingFilesAtom = createLocalStorageAtom("dev-mode-mcp-deny-overwriting-files", true, {
  subscribeToChanges: true,
})

export const mockDirForImageWritesAtom = createLocalStorageAtom("dev-mode-mcp-mock-dir-for-image-writes-to-disk", undefined, {
  subscribeToChanges: true,
})

export const useTailwindAtom = createLocalStorageAtom("dev-mode-mcp-use-tailwind", true, {
  subscribeToChanges: true,
})

/**
 * Get MCP settings for internal use
 * @returns Object containing all MCP configuration settings
 */
export function getMcpSettings() {
  return {
    codeConnectToolsEnabled: atomStoreManager.get(codeConnectToolsEnabledAtom),
    codebaseSuggestionsEnabled: isCodebaseSuggestionsEnabled(),
    codeOption: atomStoreManager.get(codeOptionsAtom),
    markupImageOptions: atomStoreManager.get(imageOptionsWithMount),
    useTailwind: atomStoreManager.get(useTailwindAtom),
    denyOverwritingFiles: atomStoreManager.get(denyOverwritingFilesAtom),
  }
}

/**
 * Get MCP settings for external use (with safer defaults)
 * @returns Object containing all MCP configuration settings with nullish coalescing
 */
export function getMcpSettingsExternal() {
  return {
    codeConnectToolsEnabled: atomStoreManager.get(codeConnectToolsEnabledAtom),
    codebaseSuggestionsEnabled: isCodebaseSuggestionsEnabled() ?? false,
    codeOption: atomStoreManager.get(codeOptionsAtom),
    markupImageOption: atomStoreManager.get(imageOptionsWithMount),
    useTailwind: atomStoreManager.get(useTailwindAtom),
    denyOverwritingFiles: atomStoreManager.get(denyOverwritingFilesAtom),
  }
}

// Additional atoms for application state
export const mockCodeConnect = atom(null) as PrimitiveAtom<any>
export const mockCodebaseSuggestions = atom(null)as PrimitiveAtom<any>

// Exported atom constants for external usage
export const DR = mockCodebaseSuggestions
export const Kx = codeOptionsAtom
export const Lw = isCodebaseSuggestionsEnabled
export const Nt = getMcpSettings
export const Pq = denyOverwritingFilesAtom
export const SV = codebaseSuggestionsEnabledAtom
export const f = mockDirForImageWritesAtom
export const iy = getMcpSettingsExternal
export const lk = useTailwindAtom
export const pe = imageOptionsWithMount
export const rx = mockCodeConnect
export const tz = codeConnectToolsEnabledAtom
