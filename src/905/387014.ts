import { CodeLibraryIdHandler, CanvasNodeIdHandler } from "../figma_app/243058";
import { PrimaryWorkflowEnum } from "../905/497152";
import { AssetParams, getLocalAsset, getSubscribedAsset } from "../905/808701";

/**
 * Represents the fields required for code file identification.
 */
export interface CodeFileFields {
  belongsToCodeLibraryId: string;
  canvasNodeId?: string;
}

/**
 * Represents the asset object with code file fields.
 */
export interface AssetWithCodeFileFields {
  codeFileFields?: CodeFileFields;
  [key: string]: any;
}

/**
 * Extracts and parses code file identifiers from the asset.
 * @param asset - The asset object containing codeFileFields.
 * @returns An object with parsed identifiers or null if invalid.
 * (original function: l)
 */
function parseCodeFileIdentifiers(asset: AssetWithCodeFileFields): {
  belongsToCodeLibraryId: ReturnType<typeof CodeLibraryIdHandler.fromString>;
  canvasNodeId: ReturnType<typeof CanvasNodeIdHandler.fromString> | null;
} | null {
  if (!asset.codeFileFields) return null;
  const { belongsToCodeLibraryId, canvasNodeId } = asset.codeFileFields;
  const codeLibraryId = CodeLibraryIdHandler.fromString(belongsToCodeLibraryId);
  const nodeId = canvasNodeId ? CanvasNodeIdHandler.fromString(canvasNodeId) : null;
  return codeLibraryId
    ? { belongsToCodeLibraryId: codeLibraryId, canvasNodeId: nodeId }
    : null;
}

/**
 * Retrieves a local code file asset and merges parsed identifiers.
 * @param asset - The asset object.
 * @returns The merged asset or null if not found/invalid.
 * (original function: $$s1)
 */
export function getLocalCodeFileAsset(asset: AssetParams): AssetWithCodeFileFields | null {
  const localAsset = getLocalAsset(PrimaryWorkflowEnum.CODE_FILE, asset);
  if (!localAsset) return null;
  const identifiers = parseCodeFileIdentifiers(asset);
  return identifiers ? { ...localAsset, ...identifiers } : null;
}

/**
 * Retrieves a subscribed code file asset and merges parsed identifiers.
 * @param asset - The asset object.
 * @returns The merged asset or null if not found/invalid.
 * (original function: $$o0)
 */
export function getSubscribedCodeFileAsset(asset: AssetParams): AssetWithCodeFileFields | null {
  const subscribedAsset = getSubscribedAsset(PrimaryWorkflowEnum.CODE_FILE, asset);
  if (!subscribedAsset) return null;
  const identifiers = parseCodeFileIdentifiers(asset);
  return identifiers ? { ...subscribedAsset, ...identifiers } : null;
}

// Export aliases for backward compatibility (original: d, y)
export const $$o0 = getSubscribedCodeFileAsset;
export const $$s1 = getLocalCodeFileAsset;
