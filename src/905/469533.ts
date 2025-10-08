import { createActionCreator } from "../905/73481";
import { DARK_THEME_MEDIA_QUERY, DEBUG_THEME_PREFERENCE_KEY, getMPVisibleTheme, GLOBAL_DEBUG_ENHANCED_CONTRAST_PREFERENCE } from "../905/187165";
import { toggleEnhancedContrast } from "../905/266289";
import { ON_THEME_UPDATE_IPC_KEY, ON_ENHANCED_CONTRAST_UPDATE_IPC_KEY } from "../905/345933";
import { createOptimistThunk } from "../905/350402";
import { trackEventAnalytics } from "../905/449184";
import { localStorageRef } from "../905/657224";
import { IpcStorageHandler } from "../905/724705";
import { fullscreenValue } from "../figma_app/455680";
import { Fullscreen } from "../figma_app/763686";
import { desktopAPIInstance } from "../figma_app/876459";
// Origin: /Users/allen/github/fig/src/905/469533.ts
// Refactored: Renamed variables, added types/interfaces, simplified logic, added comments, improved readability and type safety.

// Assumed dependencies (from imports):
// - createActionCreator, createOptimistThunk, trackEventAnalytics, localStorageRef, IpcStorageHandler, fullscreenValue, Fullscreen, desktopAPIInstance
// - DARK_THEME_MEDIA_QUERY, DEBUG_THEME_PREFERENCE_KEY, getMPVisibleTheme, GLOBAL_DEBUG_ENHANCED_CONTRAST_PREFERENCE, toggleEnhancedContrast, D6, Nx

// --- Type Definitions ---

export type ThemePreference = "light" | "dark" | "system";
export type ViewType = "fullscreen" | string;
export interface ThemeState {
  themePreference: ThemePreference;
  visibleTheme: "light" | "dark";
  enhancedContrast: boolean;
}
export interface SelectedViewState {
  view: ViewType;
}
export interface RootState {
  theme: ThemeState;
  selectedView: SelectedViewState;
}
export interface ThemePreferencePayload {
  theme: ThemePreference;
  userInitiated?: boolean;
}
export interface EnhancedContrastPayload {
  enhancedContrast: boolean;
  userInitiated?: boolean;
}

// --- Internal State for Media Query Listener ---
let darkThemeListener: ((theme: "light" | "dark") => void) | null = null;

/**
 * Handles theme changes based on system preference.
 * Adds or removes a media query listener for system theme changes.
 */
function handleSystemThemeChange(themePreference: ThemePreference, onThemeChange: (theme: "light" | "dark") => void): void {
  const isSystem = themePreference === "system";
  if (isSystem && !darkThemeListener) {
    // Listen for system theme changes
    darkThemeListener = () => {
      const theme = DARK_THEME_MEDIA_QUERY.matches ? "dark" : "light";
      onThemeChange(theme);
    };
    DARK_THEME_MEDIA_QUERY.addListener(darkThemeListener);
  } else if (!isSystem && darkThemeListener) {
    // Remove listener if not system
    DARK_THEME_MEDIA_QUERY.removeListener(darkThemeListener);
    darkThemeListener = null;
  }
}

// --- Action Creators ---
export const updateThemePreferenceFromIpc = createActionCreator("THEME_UPDATE_THEME_PREFERENCE_FROM_IPC");
export const setUserThemePreference = createActionCreator("THEME_SET_USER_THEME_PREFERENCE");
export const setUserThemeDirectly = createActionCreator("THEME_SET_USER_THEME_DIRECTLY");
export const updateEnhancedContrastFromIpc = createActionCreator("THEME_UPDATE_ENHANCED_CONTRAST_PREFERENCE_FROM_IPC");
export const setEnhancedContrast = createActionCreator("THEME_SET_ENHANCED_CONTRAST");

// --- Thunks ---

/**
 * Updates theme preference from IPC.
 */
export const updateThemePreferenceFromIpcThunk = createOptimistThunk(({
  dispatch,
  getState
}, payload: ThemePreferencePayload) => {
  const {
    selectedView
  } = getState() as RootState;
  handleSystemThemeChange(payload.theme, theme => dispatch(setThemeDirectlyThunk({
    theme
  })));
  if (selectedView.view === "fullscreen") {
    setFullscreenTheme(payload.theme);
  }
  dispatch(updateThemePreferenceFromIpc(payload));
});

/**
 * Sets user theme preference.
 */
export const setUserThemePreferenceThunk = createOptimistThunk(({
  dispatch,
  getState
}, payload: ThemePreferencePayload) => {
  const {
    theme: themeState
  } = getState() as RootState;
  if (payload.theme !== themeState.themePreference) {
    const {
      selectedView
    } = getState() as RootState;
    handleSystemThemeChange(payload.theme, theme => dispatch(setThemeDirectlyThunk({
      theme: getMPVisibleTheme(theme)
    })));
    if (payload.userInitiated) {
      trackEventAnalytics("theme_preference_updated", {
        from: themeState.themePreference,
        theme: payload.theme
      });
    }
    localStorageRef.setItem(DEBUG_THEME_PREFERENCE_KEY, payload.theme || "");
    new IpcStorageHandler().sendToOtherTabs(ON_THEME_UPDATE_IPC_KEY, payload.theme);
    desktopAPIInstance?.setThemePreference(payload.theme);
    if (selectedView.view === "fullscreen" && fullscreenValue.isReady()) {
      Fullscreen.setEditorTheme(getMPVisibleTheme(payload.theme) || "");
    }
  }
  dispatch(setUserThemePreference(payload));
});

/**
 * Updates visible theme based on current preference.
 */
export const updateVisibleThemeThunk = createOptimistThunk(({
  dispatch,
  getState
}) => {
  const {
    theme
  } = getState() as RootState;
  handleSystemThemeChange(theme.themePreference, themeValue => dispatch(setThemeDirectlyThunk({
    theme: getMPVisibleTheme(themeValue)
  })));
});

/**
 * Sets theme directly (used internally).
 */
export const setThemeDirectlyThunk = createOptimistThunk(({
  dispatch,
  getState
}, payload: {
  theme: "light" | "dark";
}) => {
  const {
    theme,
    selectedView
  } = getState() as RootState;
  if (theme.visibleTheme !== payload.theme && selectedView.view === "fullscreen") {
    setFullscreenTheme(payload.theme);
  }
  dispatch(setUserThemeDirectly(payload));
});

/**
 * Sets the editor theme in fullscreen mode.
 * Handles async readiness of fullscreenValue.
 */
export function setFullscreenTheme(theme: ThemePreference | "light" | "dark"): void {
  if (fullscreenValue.isReady()) {
    Fullscreen.setEditorTheme(getMPVisibleTheme(theme) || "");
  } else {
    // Potential performance issue: setTimeout used for delayed theme setting
    fullscreenValue.onReady().then(() => {
      setTimeout(() => {
        Fullscreen.setEditorTheme(getMPVisibleTheme(theme) || "");
      }, 1000);
    });
  }
}

/**
 * Updates enhanced contrast preference from IPC.
 */
export const updateEnhancedContrastFromIpcThunk = createOptimistThunk(({
  dispatch
}, payload: EnhancedContrastPayload) => {
  toggleEnhancedContrast(payload.enhancedContrast);
  dispatch(updateEnhancedContrastFromIpc(payload));
});

/**
 * Sets enhanced contrast preference.
 */
export const setEnhancedContrastThunk = createOptimistThunk(({
  dispatch,
  getState
}, payload: EnhancedContrastPayload) => {
  const {
    theme: themeState
  } = getState() as RootState;
  if (payload.enhancedContrast !== themeState.enhancedContrast) {
    if (payload.userInitiated) {
      trackEventAnalytics("enhanced_contrast_preference_updated", {
        from: themeState.enhancedContrast,
        enhancedContrast: payload.enhancedContrast
      });
    }
    toggleEnhancedContrast(payload.enhancedContrast);
    localStorageRef.setItem(GLOBAL_DEBUG_ENHANCED_CONTRAST_PREFERENCE, payload.enhancedContrast ? "true" : "false");
    new IpcStorageHandler().sendToOtherTabs(ON_ENHANCED_CONTRAST_UPDATE_IPC_KEY, payload.enhancedContrast);
    desktopAPIInstance?.setEnhancedContrast(payload.enhancedContrast);
  }
  dispatch(setEnhancedContrast(payload));
});

// --- Exports ---

export const FY = updateEnhancedContrastFromIpcThunk;
export const Kb = setEnhancedContrast;
export const Qh = setUserThemePreferenceThunk;
export const Xc = updateVisibleThemeThunk;
export const fK = setEnhancedContrastThunk;
export const id = updateThemePreferenceFromIpcThunk;
export const lk = updateThemePreferenceFromIpc;
export const nq = setUserThemePreference;
export const wG = setUserThemeDirectly;