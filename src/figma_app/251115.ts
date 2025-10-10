import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { checkEligibilityStatus } from '../905/509613';
import { getFeatureFlags } from '../905/601108';
import { useCurrentUserOrg } from '../905/845253';
import { ResourceStatus } from '../905/957591';
import { atom, atomStoreManager, useAtomValueAndSetter, useAtomWithSubscription, useSetAtom } from '../figma_app/27355';
import { FileCanUseFigmaAi, FileCanUseFigmaAiIgnoreAiToggle, FileCanUseFigmakeAi } from '../figma_app/43951';
import { FEditorType } from '../figma_app/53721';
import { getInitialOptions } from '../figma_app/169182';
import { FFileType } from '../figma_app/191312';
import { useSubscription } from '../figma_app/288654';
import { getOrgLlamaConfig, isLlamaEnabledForOrg } from '../figma_app/459490';
import { isInteractionOrEvalMode } from '../figma_app/897289';
import { editorTypeAtom, getCurrentFileType } from '../figma_app/976749';
// Atom for tracking if the file can use Jubilee AI
export const canUseJubileeAtom = atom(getInitialOptions().editing_file?.can_use_jubilee ?? false);

// Atom for tracking if the file can use Figmake AI
export const canUseFigmakeAiAtom = atom(true);

/**
 * Sets up permission handling for Jubilee AI based on various conditions.
 * @param fileKey - The key of the file to check permissions for.
 * @param orgId - The organization ID.
 */
export function setupJubileePermission(fileKey: string, orgId?: string) {
  let shouldUseLlama = false;
  if (!isInteractionOrEvalMode() && !getInitialOptions().e2e_traffic && orgId && getOrgLlamaConfig(orgId) === 'enabled_for_gated_users' && getFeatureFlags().ai_user_use_llama) {
    shouldUseLlama = true;
  }
  const subscription = useSubscription(shouldUseLlama ? FileCanUseFigmaAiIgnoreAiToggle : FileCanUseFigmaAi, {
    key: fileKey
  }, {
    enabled: !!fileKey
  });
  const [, setCanUseJubilee] = useAtomValueAndSetter(canUseJubileeAtom);
  useEffect(() => {
    if (subscription.status === 'loaded') {
      const file = subscription.data.file;
      if (file.status === ResourceStatus.Loaded && file.data) {
        setCanUseJubilee(file.data.hasPermission);
      }
    }
  }, [setCanUseJubilee, subscription.data?.file, subscription.status]);
}

/**
 * Gets the current value of the canUseJubileeAtom.
 * @returns The atom value.
 */
export const getCanUseJubilee = () => atomStoreManager.get(canUseJubileeAtom);

/**
 * Checks if Jubilee permission is available for design files.
 * @returns True if permission is granted, false otherwise.
 */
export const hasJubileePermissionForDesign = () => !!((getCurrentFileType() !== FFileType.WHITEBOARD || getFeatureFlags().figjam_quick_actions_v2) && checkEligibilityStatus('useHasPermission')) && getCanUseJubilee();

/**
 * Checks if Jubilee permission is available for whiteboard files.
 * @returns True if permission is granted, false otherwise.
 */
export const hasJubileePermissionForWhiteboard = () => !!((atomStoreManager.get(editorTypeAtom) !== FEditorType.Whiteboard || getFeatureFlags().figjam_quick_actions_v2) && checkEligibilityStatus('getHasPermission')) && getCanUseJubilee();

/**
 * Sets up permission handling for Figmake AI.
 * @param options - Options object containing editorType and key.
 */
export function setupFigmakePermission(options?: {
  editorType?: FFileType;
  key?: string;
}) {
  const isFigmake = options?.editorType === FFileType.FIGMAKE;
  const fileKey = options?.key ?? '';
  const setCanUseFigmake = useSetAtom(canUseFigmakeAiAtom);
  const org = useCurrentUserOrg();
  const subscription = useSubscription(isLlamaEnabledForOrg(org) ? FileCanUseFigmaAiIgnoreAiToggle : FileCanUseFigmakeAi, {
    key: fileKey
  }, {
    enabled: !!fileKey && isFigmake
  });
  useEffect(() => {
    if (subscription.status !== 'loaded') return;
    const {
      file
    } = subscription.data;
    if (file.status === ResourceStatus.Loaded && file.data) {
      setCanUseFigmake(file.data.hasPermission);
    }
  }, [setCanUseFigmake, subscription.data, subscription.status]);
}

/**
 * Gets the combined permission status for AI features based on file type.
 * @returns True if permission is granted for the current file type, false otherwise.
 */
export function getCombinedAiPermission() {
  const canUseJubilee = useAtomWithSubscription(canUseJubileeAtom);
  const canUseFigmake = useAtomWithSubscription(canUseFigmakeAiAtom);
  const fileType = getCurrentFileType();
  if (fileType === FFileType.DESIGN || fileType === FFileType.SITES) {
    return !!checkEligibilityStatus('useHasCodeChatPermission') && canUseJubilee;
  }
  if (fileType === FFileType.FIGMAKE) {
    return canUseFigmake;
  }
  return false;
}

/**
 * Alias for hasJubileePermissionForDesign.
 * @returns True if permission is granted, false otherwise.
 */
export function getJubileePermissionForDesign() {
  return hasJubileePermissionForDesign();
}

// Exported aliases with refactored names
export const GM = getJubileePermissionForDesign;
export const G_ = setupJubileePermission;
export const PE = hasJubileePermissionForDesign;
export const Si = setupFigmakePermission;
export const W7 = hasJubileePermissionForWhiteboard;
export const uQ = getCombinedAiPermission;