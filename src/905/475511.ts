import { CodeLibraryIdHandler, CodeFileIdHandler } from "../figma_app/243058";
import { PrimaryWorkflowEnum } from "../905/497152";
import { getLocalAsset, getSubscribedAsset } from "../905/808701";

/**
 * Extracts code component fields and converts string IDs to handler objects.
 * @param asset - The asset object containing codeComponentFields.
 * @returns An object with processed code component fields or null if invalid.
 * (Original function name: l)
 */
function extractCodeComponentFields(asset: any): {
  belongsToCodeLibraryId: ReturnType<typeof CodeLibraryIdHandler.fromString>,
  exportedFromCodeFileId: ReturnType<typeof CodeFileIdHandler.fromString>,
  codeExportName: string,
  isCodeBehavior: boolean,
  codeBehaviorData: any
} | null {
  if (!asset.codeComponentFields) return null;

  const {
    belongsToCodeLibraryId,
    exportedFromCodeFileId,
    codeExportName,
    isCodeBehavior,
    codeBehaviorData
  } = asset.codeComponentFields;

  const libraryId = CodeLibraryIdHandler.fromString(belongsToCodeLibraryId);
  if (!libraryId) return null;

  const fileId = CodeFileIdHandler.fromString(exportedFromCodeFileId);
  if (!fileId) return null;

  return {
    belongsToCodeLibraryId: libraryId,
    exportedFromCodeFileId: fileId,
    codeExportName,
    isCodeBehavior,
    codeBehaviorData
  };
}

/**
 * Retrieves and merges local asset and code component fields.
 * @param asset - The asset identifier.
 * @returns Merged asset object or null if not found/invalid.
 * (Original function name: $$s1)
 */
export const getLocalCodeComponentAsset = (asset: any) => {
  const localAsset = getLocalAsset(PrimaryWorkflowEnum.CODE_COMPONENT, asset);
  if (!localAsset) return null;

  const fields = extractCodeComponentFields(asset);
  return fields ? { ...localAsset, ...fields } : null;
};

/**
 * Retrieves and merges subscribed asset and code component fields.
 * @param asset - The asset identifier.
 * @returns Merged asset object or null if not found/invalid.
 * (Original function name: $$o0)
 */
export const getSubscribedCodeComponentAsset = (asset: any) => {
  const subscribedAsset = getSubscribedAsset(PrimaryWorkflowEnum.CODE_COMPONENT, asset);
  if (!subscribedAsset) return null;

  const fields = extractCodeComponentFields(asset);
  return fields ? { ...subscribedAsset, ...fields } : null;
};

// Export aliases for backward compatibility (Original export names: I, r)
export const I = getSubscribedCodeComponentAsset;
export const r = getLocalCodeComponentAsset;
