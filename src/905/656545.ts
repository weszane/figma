import { showModalHandler } from '../905/156213';
import { AppleEulaConfigs, showEulaModal, isGoogleFontSource } from '../905/291654';
import { createOptimistThunk } from '../905/350402';
import { getResourceDataOrFallback } from '../905/419236';
import { analyticsEventManager } from '../905/449184';
import { getFeatureFlags } from '../905/601108';
import { PerfTimer } from '../905/609396';
import { asyncExecutorSubscription } from '../905/888985';
import { increment } from '../905/972754';
import { fetchDynamicConfig } from '../3973/389215';
import { atomStoreManager } from '../figma_app/27355';
import { LibraryPresetSubscriptionsV2 } from '../figma_app/43951';
import { teamLibraryCache } from '../figma_app/80990';
import { getProviderConfigType } from '../figma_app/155411';
import { FAuthProviderType } from '../figma_app/191312';
import { RegisteredAppleEulaModal } from '../figma_app/856733';

// Original: $$b1 - Enum-like object for plugin actions
export enum PluginAction {
  PLUGIN_INSERT_COMPONENT = 'PLUGIN_INSERT_COMPONENT',
  PLUGIN_INSERT_STATE_GROUP = 'PLUGIN_INSERT_STATE_GROUP',
  PLUGIN_INSERT_STYLE = 'PLUGIN_INSERT_STYLE',
  LIBRARY_SWAP = 'LIBRARY_SWAP',
  LOAD_COMPONENT = 'LOAD_COMPONENT',
  SWAP_TO_COMPONENT = 'SWAP_TO_COMPONENT',
  INSERT_SHARED_COMPONENT = 'INSERT_SHARED_COMPONENT',
  INSERT_SHARED_STATE_GROUP = 'INSERT_SHARED_STATE_GROUP',
  LOAD_STYLE = 'LOAD_STYLE',
  LOAD_VARIABLE = 'LOAD_VARIABLE',
  LOAD_VARIABLE_SET = 'LOAD_VARIABLE_SET',
}

// Original: $$v2 - Thunk for asset insertion
/**
 * Creates an optimistic thunk for handling asset insertion.
 * @param dispatch - Redux dispatch function.
 * @param assetLibraryKey - Key for the asset library.
 * @param onInsertAsset - Callback for inserting the asset.
 * @param source - Source of the action.
 * @returns A thunk function.
 */
export const setupPlaybackHandler = createOptimistThunk(async (dispatch: any, {
  assetLibraryKey,
  onInsertAsset,
  source
}: {
  assetLibraryKey: string;
  onInsertAsset: () => Promise<void>;
  source: string;
}) => {
  const state = dispatch.getState();
  if (await checkEulaAndFonts(dispatch, assetLibraryKey, source, state.userFlags, state.fonts)) {
    await onInsertAsset();
  }
});

// Original: $$I0 - Function for loading canvas with EULA check
/**
 * Loads canvas data after checking EULA and fonts.
 * @param dispatch - Redux dispatch function.
 * @param canvasId - ID of the canvas.
 * @param libraryKey - Key for the library.
 * @param userFlags - User flags object.
 * @param fonts - Fonts object.
 * @param source - Source of the action.
 * @returns Canvas data or throws error.
 */
export async function loadCanvasWithEulaCheck(dispatch: any, canvasId: any, libraryKey: string, userFlags: any, fonts: any, source: string): Promise<any> {
  if (await checkEulaAndFonts(dispatch, libraryKey, source, userFlags, fonts)) {
    return teamLibraryCache.getCanvas(canvasId);
  }
  throw new Error('Apple EULA not accepted');
}

// Original: E - Checks if library is Apple-based
/**
 * Checks if the library is associated with Apple provider.
 * @param libraryKey - Key for the library.
 * @returns True if Apple-based, false otherwise.
 */
async function isAppleLibrary(libraryKey: string): Promise<boolean> {
  const query = LibraryPresetSubscriptionsV2.Query({
    group: getProviderConfigType()
  });
  const result = (await asyncExecutorSubscription(query, (resolve, reject) => {
    const atom = atomStoreManager.get<{
      status: string;
    }>(query);
    if (atom.status === 'loaded') {
      resolve(atom);
    } else if (atom.status === 'errors') {
      reject('Error loading presetLibraryAtom');
    }
  })) as {
    data: {
      libraryPresetSubscriptionsV2: any[];
    };
  };
  const subscription = result?.data?.libraryPresetSubscriptionsV2?.find((sub: any) => getResourceDataOrFallback(sub.libraryKey) === libraryKey);
  return subscription?.partner_type === FAuthProviderType.APPLE;
}

// Original: x - Fetches dynamic config for Apple fonts
/**
 * Fetches dynamic configuration for Apple fonts.
 * @returns Configuration object.
 */
async function fetchAppleFontsConfig(): Promise<any> {
  return await fetchDynamicConfig('ui_kits_apple_fonts');
}

// Original: S - Gets required EULA fonts
/**
 * Gets the list of fonts requiring EULA acceptance.
 * @param isApple - Whether the library is Apple-based.
 * @param libraryKey - Key for the library.
 * @param userFlags - User flags object.
 * @param fonts - Fonts object.
 * @returns Array of font keys requiring EULA.
 */
async function getRequiredEulaFonts(isApple: boolean, libraryKey: string, userFlags: any, fonts: any): Promise<string[]> {
  if (!isApple || !getFeatureFlags().dse_sf_pro_font) {
    return [];
  }
  const config = await fetchAppleFontsConfig();
  const fontToLibraries = config.get('fontToLibraries', {});
  return Object.keys(fontToLibraries).filter(fontKey => {
    if (!(fontToLibraries[fontKey] || []).includes(libraryKey)) {
      return false;
    }
    const fontData = AppleEulaConfigs[fontKey];
    if (!fontData) {
      return false;
    }
    const accepted = !!userFlags[fontData.acceptedUserFlag];
    const declined = !!userFlags[fontData.declinedUserFlag];
    return fontData.fontFamilies.some((family: string) => isGoogleFontSource(family, fonts)) && !accepted && !declined;
  });
}

// Original: w - Main EULA and font check function
/**
 * Checks EULA acceptance and handles font EULAs.
 * @param dispatch - Redux dispatch function.
 * @param libraryKey - Key for the library.
 * @param source - Source of the action.
 * @param userFlags - User flags object.
 * @param fonts - Fonts object.
 * @returns True if all checks pass, false otherwise.
 */
async function checkEulaAndFonts(dispatch: any, libraryKey: string, source: string, userFlags: any, fonts: any): Promise<boolean> {
  const timer = new PerfTimer('APPLE_EULA_TIMER', {
    key: increment().toString()
  });
  timer.start();
  const isApple = await isAppleLibrary(libraryKey);
  const requiresMainEula = isApple && !userFlags.apple_eula_accepted;
  const requiredFonts = await getRequiredEulaFonts(isApple, libraryKey, userFlags, fonts);
  analyticsEventManager.trackDefinedEvent('preset_libraries.apple_eula_check_performed', {
    duration: timer.stop(),
    source
  });
  const totalEulas = (requiresMainEula ? 1 : 0) + requiredFonts.length;
  let eulaShown = 0;

  // Handle main EULA
  if (requiresMainEula) {
    const result = await showEulaModal(dispatch, {
      eulasToShow: totalEulas,
      eulaShown: ++eulaShown
    });
    if (!result.accepted) {
      return false;
    }
  }

  // Handle font EULAs
  for (const font of requiredFonts) {
    const result = await showEulaModal(dispatch, {
      eula: font,
      eulasToShow: totalEulas,
      eulaShown: ++eulaShown,
      trigger: 'ui_kit'
    });
    if (!result) {
      return false;
    }
  }
  return true;
}

// Helper for showing EULA modal
/**
 * Shows the EULA modal and returns the result.
 * @param dispatch - Redux dispatch function.
 * @param options - Options for the modal.
 * @returns Promise resolving to acceptance result.
 */
function showEulaModalHelper(dispatch: any, options: any): Promise<{
  accepted: boolean;
  type: string;
}> {
  return new Promise(resolve => {
    dispatch(showModalHandler({
      type: RegisteredAppleEulaModal,
      showModalsBeneath: true,
      data: {
        eulaShown: options.eulaShown,
        eulasToShow: options.eulasToShow,
        onAgree: () => resolve({
          accepted: true,
          type: 'component'
        }),
        onDecline: () => resolve({
          accepted: false,
          type: 'component'
        })
      }
    }));
  });
}

// Updated exports to match refactored names
export const e9 = loadCanvasWithEulaCheck;
export const jE = PluginAction;
export const vQ = setupPlaybackHandler;
