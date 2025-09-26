import { reportError, setTagGlobal } from '../905/11';
import { ServiceCategories } from '../905/165054';
import { Tj } from '../905/266529';
import { debugState } from '../905/407919';
import { getOpenFileKey, handleSelectedView } from '../905/622391';
import { atomStoreManager } from '../figma_app/27355';
import { runModeAtom, d4, pluginIdAtom, pluginTriggeredFromAtom } from '../figma_app/474636';
import { desktopAPIInstance } from '../figma_app/876459';
import { isInteractionPathCheck } from '../figma_app/897289';
/**
 * Plugin State Manager
 * Handles global plugin state, run IDs, widget, and plugin API resets.
 */
export interface PluginState {
  currentPluginRunID: string | null;
  stats: any;
  currentWidget?: any;
  setMediaEnabled: boolean;
  allowedPluginOrigin?: any;
  resetGlobalPluginAPI: ((params?: {
    userID: string;
    openFileKey: string;
  }) => void) | null;
}

// Internal plugin state
export let pluginState: PluginState = {
  currentPluginRunID: null,
  stats: null,
  currentWidget: undefined,
  setMediaEnabled: false,
  allowedPluginOrigin: undefined,
  resetGlobalPluginAPI: null
};

/**
 * Tracks the currently active plugin close function and its type.
 */
interface PluginCloseState {
  type: 'global' | 'plugin';
  closePluginFunc: (params?: any) => Promise<void> | void;
}
let pluginCloseState: PluginCloseState | null = null;

/**
 * Returns the current plugin run ID.
 * (Original: $$g5)
 */
export const getCurrentPluginRunID = (): string | null => pluginState.currentPluginRunID;

/**
 * Returns the current GR atom value.
 * (Original: $$f6)
 */
export const getCurrentGRAtom = (): any => atomStoreManager.get(pluginIdAtom);

/**
 * Sets the plugin data and updates global tag.
 * (Original: $$_8)
 */
export function setPluginData(data: any): void {
  setTagGlobal('pluginId', data?.plugin_id);
  atomStoreManager.set(pluginIdAtom, data);
}

/**
 * Sets the plugin trigger source and updates global tag.
 * (Original: $$A11)
 */
export function setPluginTriggeredFrom(source: any): void {
  setTagGlobal('pluginTriggeredFrom', source);
  atomStoreManager.set(pluginTriggeredFromAtom, source ?? null);
}

/**
 * Sets the $f atom value.
 * (Original: $$y0)
 */
export function setFAtom(value: any): void {
  atomStoreManager.set(runModeAtom, value);
}

/**
 * Generates a random string.
 * (Original: $$b9)
 */
export const generateRandomID = (): string => Math.random().toString(36).slice(2);

/**
 * Reports an error for plugin extensibility issues.
 * (Original: v)
 */
function reportPluginError(error: Error): void {
  isInteractionPathCheck();
  reportError(ServiceCategories.EXTENSIBILITY, error);
}

/**
 * Sets the global plugin close function.
 * (Original: $$I3)
 */
export function setGlobalPluginCloseFunc(closeFunc: (params?: any) => Promise<void> | void): void {
  if (pluginCloseState) {
    reportPluginError(new Error(`Did not close the previous plugin: type=${pluginCloseState.type}`));
  }
  pluginCloseState = {
    type: 'global',
    closePluginFunc: closeFunc
  };
}

/**
 * Sets the plugin close function, handling previous plugin close.
 * (Original: $$E1)
 */
export function setPluginCloseFunc(closeFunc: ((params?: any) => Promise<void> | void) | null, options?: {
  ignorePreviousCloseFunc?: (params?: any) => Promise<void> | void;
}): void {
  if (pluginCloseState?.type === 'plugin' && options?.ignorePreviousCloseFunc !== pluginCloseState.closePluginFunc) {
    reportPluginError(new Error(`Did not close the previous plugin: type=${pluginCloseState.type}`));
  }
  if (pluginCloseState?.type === 'global') {
    reportPluginError(new Error(`Did not close the previous plugin: type=${pluginCloseState.type}`));
  }
  pluginCloseState = closeFunc ? {
    type: 'plugin',
    closePluginFunc: closeFunc
  } : null;
}

/**
 * Sets the resetGlobalPluginAPI function.
 * (Original: $$x13)
 */
export function setResetGlobalPluginAPI(resetFunc: ((params?: {
  userID: string;
  openFileKey: string;
}) => void) | null): void {
  pluginState.resetGlobalPluginAPI = resetFunc;
}

/**
 * Returns true if the current plugin close state is global.
 * (Original: $$S4)
 */
export const isGlobalPluginActive = (): boolean => pluginCloseState?.type === 'global';

/**
 * Closes the current plugin, calling its close function.
 * (Original: $$w2)
 */
export async function closeCurrentPlugin(params?: any): Promise<void> {
  if (pluginCloseState) {
    const {
      closePluginFunc,
      type
    } = pluginCloseState;
    pluginCloseState = null;
    if (type === 'global') {
      await closePluginFunc();
    } else {
      await closePluginFunc(params);
    }
  }
}

/**
 * Atom reset handler for plugin errors.
 * (Original: $$C12)
 */
export async function handlePluginError(error?: any) {
  await closeCurrentPlugin(error ? {
    message: `${error}`,
    isError: true
  } : {});
  resetPluginState();
}

/**
 * Resets plugin state and cleans up global/plugin data.
 * (Original: $$T10)
 */
export function resetPluginState(): void {
  Tj(undefined);
  pluginState.currentWidget = undefined;
  setPluginData(null);
  setPluginTriggeredFrom(null);
  setFAtom(null);
  pluginState.currentPluginRunID = null;
  pluginState.stats = null;
  atomStoreManager.set(d4, null);
  atomStoreManager.set(pluginIdAtom, null);
  if (desktopAPIInstance && pluginState.setMediaEnabled) {
    pluginState.setMediaEnabled = false;
  }
  if (desktopAPIInstance && pluginState.allowedPluginOrigin) {
    desktopAPIInstance.removeAllowedPluginOrigin(pluginState.allowedPluginOrigin);
    pluginState.allowedPluginOrigin = undefined;
  }
  if (debugState) {
    const selectedView = handleSelectedView();
    const openFileKey = getOpenFileKey();
    if (selectedView && openFileKey) {
      pluginState.resetGlobalPluginAPI?.({
        userID: selectedView,
        openFileKey
      });
    }
  }
}

// Exported aliases for backward compatibility
export const Kd = setFAtom;
export const Mt = setPluginCloseFunc;
export const XF = closeCurrentPlugin;
export const XY = setGlobalPluginCloseFunc;
export const et = isGlobalPluginActive;
export const fD = getCurrentPluginRunID;
export const hw = getCurrentGRAtom;
export const iu = pluginState;
export const lM = setPluginData;
export const mv = generateRandomID;
export const nT = resetPluginState;
export const qR = setPluginTriggeredFrom;
export const wY = handlePluginError;
export const yp = setResetGlobalPluginAPI;
