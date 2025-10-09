import { produce } from 'immer';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CodegenPlatform } from '../905/201014';
import { D as _$$D } from '../905/273829';
import { getUserId } from '../905/372672';
import { getCodegenLanguagePreference } from '../905/515076';
import { getFeatureFlags } from '../905/601108';
import { sendWithRetry } from '../905/910117';
import { postUserFlag } from '../905/985254';
import { useAtomValueAndSetter, useAtomWithSubscription } from '../figma_app/27355';
import { PluginPreferencesView } from '../figma_app/43951';
import { isNotNullish } from '../figma_app/95419';
import { useUpdateCodeExtensionPreferences } from '../figma_app/120227';
import { FOverrideType, FPluginType, FPublicationStatusType, FUnitType } from '../figma_app/191312';
import { x as _$$x } from '../figma_app/256637';
import { useSubscription } from '../figma_app/288654';
import { isDevModeWithCodegen } from '../figma_app/300692';
import { getMappedPluginId } from '../figma_app/455620';
import { getParentOrgIdIfOrgLevel, useCurrentPublicPlan } from '../figma_app/465071';
import { throwTypeError } from '../figma_app/465776';
import { useCanAccessFullDevMode } from '../figma_app/473493';
import { useCurrentFileKey } from '../figma_app/516028';
import { updateDevHandoffCodeLanguage } from '../figma_app/741237';
import { MeasurementUnit } from '../figma_app/763686';
import { usePluginManifestById, createPluginManifestData, usePluginManifestsByIds, useCanRunExtension } from '../figma_app/844435';
import { trackFileEventWithStore, trackOrgEventWithStore } from '../figma_app/901889';
import { DEV_HAND } from '../figma_app/910914';
import { isDevHandoffEditorType } from '../figma_app/976749';

/**
 * Default codegen settings (L)
 */
const DEFAULT_CODEGEN_SETTINGS = {
  language: {
    type: 'first-party',
    id: 'WEB'
  },
  preferences: {
    customSettings: null,
    unit: FUnitType.PIXEL,
    scaleFactor: null
  },
  behavior: FOverrideType.INHERIT
};

/**
 * PluginPreferences class (P)
 * Handles plugin pinning, codegen settings, and serialization.
 */
class PluginPreferences {
  workingPreferences: any;
  parentPreferences: any;
  parentEnabledPreferences: any;
  constructor(workingPreferences, parentPreferences, parentEnabledPreferences) {
    this.workingPreferences = workingPreferences;
    this.parentPreferences = parentPreferences;
    this.parentEnabledPreferences = parentEnabledPreferences;
    if (!parentPreferences || !parentEnabledPreferences) return;
    const {
      codegenEnabled,
      pinnedPluginsEnabled
    } = {
      ...parentEnabledPreferences
    };
    let parentPrefsCopy = {
      ...parentPreferences
    };
    if (!codegenEnabled) parentPrefsCopy.codegenSettings = null;
    if (!pinnedPluginsEnabled && getFeatureFlags().dev_mode_org_pinned_plugins_ent) {
      parentPrefsCopy.pins = [];
      parentPrefsCopy.removedInheritedPins = [];
    }
    this.parentPreferences = parentPrefsCopy;
  }

  /**
   * Returns org pins not present in user pins.
   */
  orgPinsNotInUserPins(): any[] {
    const orgPins = this.parentPreferences?.pins ?? [];
    return orgPins.filter(orgPin => !this.workingPreferences.pins.find(userPin => userPin.pluginId === orgPin.pluginId));
  }

  /**
   * Returns all pinned plugin IDs, filtering out removed inherited pins.
   */
  get pinnedPluginIDs(): string[] {
    const allPins = [...this.workingPreferences.pins, ...this.orgPinsNotInUserPins()];
    const removedSet = new Set(this.workingPreferences.removedInheritedPins);
    return allPins.filter(pin => !removedSet.has(pin.pluginId) && (!pin.inherited || isPluginPinned(this.parentPreferences, pin.pluginId))).map(pin => pin.pluginId);
  }

  /**
   * Returns effective codegen settings.
   */
  get codegenSettings() {
    if (this.parentPreferences && this.workingPreferences.codegenSettings?.behavior !== FOverrideType.OVERRIDE) {
      return this.parentPreferences?.codegenSettings ?? null;
    }
    return this.workingPreferences.codegenSettings;
  }

  /**
   * Returns a new PluginPreferences instance with updated workingPreferences.
   */
  update(updater: any) {
    return new PluginPreferences(produce(this.workingPreferences, updater), this.parentPreferences, this.parentEnabledPreferences);
  }

  /**
   * Pins a plugin by ID.
   */
  pinPlugin(pluginId: string) {
    const working = this.workingPreferences;
    const idx = working?.pins.findIndex(pin => pin.pluginId === pluginId && pin.inherited);
    if (idx != null && idx !== -1) {
      return this.update(draft => {
        draft.pins[idx].inherited = false;
        draft.removedInheritedPins = draft.removedInheritedPins.filter(id => id !== pluginId);
      });
    }
    if (isPluginPinned(this.workingPreferences, pluginId)) return this;
    return this.update(draft => {
      draft.pins.push({
        pluginId,
        inherited: false
      });
      draft.removedInheritedPins = draft.removedInheritedPins.filter(id => id !== pluginId);
    });
  }

  /**
   * Unpins a plugin by ID.
   */
  unpinPlugin(pluginId: string) {
    return this.update(draft => {
      draft.pins = draft.pins.filter(pin => pin.pluginId !== pluginId);
      if (isPluginPinned(this.parentPreferences, pluginId)) {
        draft.removedInheritedPins.push(pluginId);
      }
    });
  }

  /**
   * Moves a pin to a new position.
   */
  movePin(pluginId: string, position: {
    type: string;
    id: string;
  }) {
    const {
      type,
      id
    } = position;
    if (type === 'after' && pluginId === id || type === 'begin' && this.pinnedPluginIDs[0] === pluginId) {
      return this;
    }
    return this.update(draft => {
      const inUserPins = isPluginPinned(this.workingPreferences, pluginId);
      const inOrgPins = isPluginPinned(this.parentPreferences, pluginId);
      const inherited = !inUserPins && inOrgPins;
      draft.pins = draft.pins.filter(pin => pin.pluginId !== pluginId);
      switch (type) {
        case 'begin':
          draft.pins.unshift({
            pluginId,
            inherited
          });
          break;
        case 'after':
          {
            const idx = draft.pins.findIndex(pin => pin.pluginId === id);
            if (idx !== -1) {
              draft.pins.splice(idx + 1, 0, {
                pluginId,
                inherited
              });
            } else {
              const orgPins = this.orgPinsNotInUserPins();
              const orgIdx = orgPins.findIndex(pin => pin.pluginId === id);
              if (orgIdx === -1) throw new Error('Invalid pin to move after');
              draft.pins.push(...orgPins.slice(0, orgIdx + 1).map(pin => ({
                ...pin,
                inherited: true
              })), {
                pluginId,
                inherited
              });
            }
            break;
          }
      }
    });
  }

  /**
   * Returns local codegen settings.
   */
  get localCodegenSettings() {
    if (!this.codegenSettings) return null;
    const lang = this.codegenSettings?.language;
    const localLang = this.lgLanguageToLocalLanguage(lang);
    if (!localLang) return null;
    const prefs = this.codegenSettings.preferences;
    const localUnit = this.lgUnitToLocalUnit(prefs.unit);
    return {
      language: localLang,
      preferences: {
        scaleFactor: prefs.scaleFactor ?? undefined,
        customSettings: prefs.customSettings ?? undefined,
        unit: localUnit
      },
      behavior: this.codegenSettings.behavior
    };
  }

  /**
   * Sets codegen language.
   */
  setCodegenSettingLanguage(language: any) {
    return this.update(draft => {
      const lgType = this.localLanguageTypeToLgLanguageType(language.type);
      if (!lgType) throw new Error('Invalid language type');
      const langObj = {
        ...language,
        type: lgType,
        pluginLanguage: language.pluginLanguage ?? null
      };
      draft.codegenSettings = {
        language: langObj,
        preferences: this.codegenSettings?.preferences || DEFAULT_CODEGEN_SETTINGS.preferences,
        behavior: this.codegenSettings?.behavior || DEFAULT_CODEGEN_SETTINGS.behavior
      };
    });
  }

  /**
   * Sets codegen unit.
   */
  setCodegenSettingUnit(unit: any) {
    return this.update(draft => {
      if (!this.codegenSettings) return;
      const lgUnit = this.localUnitToLgUnit(unit);
      if (!lgUnit) throw new Error('Invalid unit');
      const prefs = this.codegenSettings.preferences ? {
        ...this.codegenSettings.preferences,
        unit: lgUnit
      } : {
        scaleFactor: null,
        unit: lgUnit,
        customSettings: null
      };
      draft.codegenSettings = {
        language: this.codegenSettings.language,
        preferences: prefs,
        behavior: this.codegenSettings.behavior
      };
    });
  }

  /**
   * Sets custom codegen settings.
   */
  setCodegenSettingCustomSettings(language: any, custom: any) {
    return this.update(draft => {
      if (!this.codegenSettings) return;
      const lgType = this.localLanguageTypeToLgLanguageType(language.type);
      if (!lgType) throw new Error('Invalid language type');
      const langObj = {
        ...language,
        type: lgType,
        pluginLanguage: language.pluginLanguage ?? null
      };
      const prefs = {
        scaleFactor: this.codegenSettings.preferences?.scaleFactor ?? null,
        unit: this.codegenSettings.preferences?.unit ?? null,
        customSettings: {
          ...this.codegenSettings.preferences?.customSettings,
          ...custom.customSettings
        }
      };
      draft.codegenSettings = {
        language: langObj,
        preferences: prefs,
        behavior: this.codegenSettings.behavior
      };
    });
  }

  /**
   * Sets full codegen settings.
   */
  setCodegenSetting(settings: any) {
    return this.update(draft => {
      if (!settings) {
        draft.codegenSettings = null;
        return;
      }
      const {
        behavior,
        language,
        preferences
      } = settings;
      const lgType = this.localLanguageTypeToLgLanguageType(language.type);
      if (!lgType) throw new Error('Invalid language type');
      const langObj = {
        ...language,
        type: lgType,
        pluginLanguage: language.pluginLanguage ?? null
      };
      const prefs = {
        unit: this.localUnitToLgUnit(preferences.unit),
        customSettings: preferences.customSettings ?? null,
        scaleFactor: preferences.scaleFactor ?? null
      };
      draft.codegenSettings = {
        behavior,
        language: langObj,
        preferences: prefs
      };
    });
  }

  /**
   * Converts local unit to LG unit.
   */
  localUnitToLgUnit(unit: any) {
    switch (unit) {
      case MeasurementUnit.PIXEL:
        return FUnitType.PIXEL;
      case MeasurementUnit.SCALED:
        return FUnitType.SCALED;
      default:
        return null;
    }
  }

  /**
   * Converts LG unit to local unit.
   */
  lgUnitToLocalUnit(unit: any) {
    switch (unit) {
      case FUnitType.PIXEL:
        return MeasurementUnit.PIXEL;
      case FUnitType.SCALED:
        return MeasurementUnit.SCALED;
      default:
        return undefined;
    }
  }

  /**
   * Converts local language type to LG language type.
   */
  localLanguageTypeToLgLanguageType(type: string) {
    switch (type) {
      case 'first-party':
        return FPluginType.FIRST_PARTY;
      case 'published-plugin':
        return FPluginType.PUBLISHED_PLUGIN;
      default:
        return null;
    }
  }

  /**
   * Converts LG language to local language.
   */
  lgLanguageToLocalLanguage(language: any) {
    switch (language.type) {
      case FPluginType.FIRST_PARTY:
        return {
          id: language.id,
          type: language.type,
          pluginLanguage: language.pluginLanguage ?? undefined
        };
      case FPluginType.PUBLISHED_PLUGIN:
        if (!language.pluginLanguage) return null;
        return {
          id: language.id,
          type: language.type,
          pluginLanguage: language.pluginLanguage
        };
      default:
        throwTypeError(language.type);
    }
  }

  /**
   * Serializes preferences for API.
   */
  serialize() {
    return {
      pins: this.workingPreferences.pins.map(pin => ({
        pluginId: pin.pluginId,
        inherited: pin.inherited
      })),
      removedInheritedPins: Array.from(new Set(this.workingPreferences.removedInheritedPins)),
      codegenSettings: this.workingPreferences.codegenSettings
    };
  }
}

/**
 * Checks if a plugin is pinned in preferences (D)
 */
function isPluginPinned(preferences: any, pluginId: string): boolean {
  return preferences?.pins.some(pin => pin.pluginId === pluginId);
}

/**
 * Default preferences (k)
 */
const DEFAULT_PREFERENCES = {
  pins: [],
  removedInheritedPins: [],
  codegenSettings: null
};

/**
 * Default preferences with codegen settings (M)
 */
const DEFAULT_PREFERENCES_WITH_CODEGEN = {
  ...DEFAULT_PREFERENCES,
  codegenSettings: {
    language: {
      id: CodegenPlatform.CSS,
      type: FPluginType.FIRST_PARTY,
      pluginLanguage: null
    },
    preferences: {
      customSettings: null,
      unit: FUnitType.PIXEL,
      scaleFactor: null
    },
    behavior: FOverrideType.INHERIT
  }
};

/**
 * useUserPluginPreferences hook ($$F0)
 * Handles user plugin preferences and codegen settings.
 */
export function setupUserPluginPreferences() {
  const {
    loaded,
    preferences
  } = (() => {
    const userId = getUserId();
    const {
      loaded: loadedStatus,
      preferences: userPrefs
    } = getSubscriptionStatus(useSubscription(PluginPreferencesView, {
      targetOrgId: null,
      targetUserId: userId
    }));
    return {
      loaded: loadedStatus,
      preferences: userPrefs
    };
  })();
  const {
    loaded: orgLoaded,
    preferences: orgPreferences,
    codegenEnabled,
    pinnedPluginsEnabled
  } = getOrgPreferences();
  const dispatch = useDispatch<AppDispatch>();
  const trackFileEvent = trackFileEventWithStore();
  const isEditorType = isDevHandoffEditorType();
  const canAccessFullDevMode = useCanAccessFullDevMode();
  const isLimitedDevMode = isEditorType && !canAccessFullDevMode;
  const [state, setState] = useState(null);
  useEffect(() => {
    preferences && setState(null);
  }, [preferences]);
  const pluginPrefs = useMemo(() => new PluginPreferences(preferences ?? DEFAULT_PREFERENCES, orgPreferences ?? null, {
    codegenEnabled,
    pinnedPluginsEnabled
  }), [preferences, orgPreferences, codegenEnabled, pinnedPluginsEnabled]);
  const pluginMap = useMemo(() => {
    const map = new Map();
    for (const pin of [...(preferences?.pins ?? []), ...(orgPreferences?.pins ?? [])]) {
      if (pin.plugin) map.set(pin.pluginId, pin.plugin);
    }
    return map;
  }, [orgPreferences?.pins, preferences?.pins]);
  const pinnedPluginIDs = useMemo(() => state?.pinnedPluginIDs ?? pluginPrefs.pinnedPluginIDs, [pluginPrefs, state]);
  const publicPlan = useCurrentPublicPlan('usePluginPreferences').unwrapOr(null);
  const parentOrgId = getParentOrgIdIfOrgLevel(publicPlan) ?? null;
  const userId = getUserId();
  const isPluginAllowed = useCanRunExtension();
  const pinnedPlugins = useMemo(() => pinnedPluginIDs.map(id => {
    const plugin = pluginMap.get(id);
    if (!plugin || !plugin.publishingStatus || plugin.publishingStatus !== FPublicationStatusType.APPROVED_PUBLIC && plugin.publishingStatus !== FPublicationStatusType.ORG_PRIVATE) {
      return null;
    }
    const pluginObj = createPluginManifestData(plugin, parentOrgId, userId, null);
    return pluginObj && (isLimitedDevMode || isPluginAllowed(pluginObj)) ? pluginObj : null;
  }).filter(isNotNullish), [pinnedPluginIDs, pluginMap, parentOrgId, userId, isLimitedDevMode, isPluginAllowed]);
  const updatePreferences = (prefs: PluginPreferences) => {
    setState(prefs);
    saveUserPreferences(prefs.serialize()).catch(() => setState(null));
  };
  return {
    pinnedPlugins,
    unpinPlugin(pluginId: string) {
      updatePreferences(pluginPrefs.unpinPlugin(pluginId));
      trackFileEvent('Dev Handoff Unpin Plugin', {
        pluginID: pluginId
      });
    },
    pinPlugin(pluginId: string) {
      dispatch(postUserFlag({
        [DEV_HAND]: true
      }));
      updatePreferences(pluginPrefs.pinPlugin(pluginId));
      trackFileEvent('Dev Handoff Pin Plugin', {
        pluginID: pluginId
      });
    },
    movePin(pluginId: string, position: any) {
      updatePreferences(pluginPrefs.movePin(pluginId, position));
      trackFileEvent('Dev Handoff Moved Plugin', {
        pluginID: pluginId
      });
    },
    localCodegenSettings: pluginPrefs.localCodegenSettings,
    setCodegenSettings(settings: any) {
      updatePreferences(pluginPrefs.setCodegenSetting(settings));
    },
    setCodegenSettingsLanguage(language: any) {
      updatePreferences(pluginPrefs.setCodegenSettingLanguage(language));
    },
    setCodegenSettingsUnit(unit: any) {
      updatePreferences(pluginPrefs.setCodegenSettingUnit(unit));
    },
    setCodegenSettingsCustomSettings(language: any, custom: any) {
      updatePreferences(pluginPrefs.setCodegenSettingCustomSettings(language, custom));
    },
    loaded: loaded && orgLoaded
  };
}

/**
 * useOrgPluginPreferences hook ($$j1)
 * Handles org plugin preferences and codegen settings.
 */
export function setupOrgPluginPreferences() {
  const {
    loaded,
    preferences
  } = getOrgPreferences();
  const [isLoaded, setLoaded] = useState(false);
  const [pluginPrefs, setPluginPrefs] = useState(new PluginPreferences({
    ...DEFAULT_PREFERENCES_WITH_CODEGEN,
    codegenSettings: null
  }, null, null));
  const trackOrgEvent = trackOrgEventWithStore();
  const [, setAtomValue] = useAtomValueAndSetter(_$$D);
  const updatePrefs = useCallback((prefs: PluginPreferences) => {
    setPluginPrefs(prefs);
    setAtomValue(prefs.localCodegenSettings?.language ?? null);
  }, [setAtomValue]);
  useEffect(() => {
    if (loaded && preferences != null) {
      updatePrefs(new PluginPreferences({
        ...preferences,
        codegenSettings: preferences.codegenSettings ?? DEFAULT_PREFERENCES_WITH_CODEGEN.codegenSettings
      }, null, null));
      setLoaded(true);
    }
  }, [preferences, loaded, setAtomValue, updatePrefs]);
  const pinnedPluginIDs = useMemo(() => pluginPrefs?.pinnedPluginIDs ?? [], [pluginPrefs]);
  return {
    pinnedPlugins: usePluginManifestsByIds(pinnedPluginIDs, {
      enabled: true
    }),
    unpinPlugin(pluginId: string) {
      updatePrefs(pluginPrefs.unpinPlugin(pluginId));
      trackOrgEvent('Dev Handoff Org Unpin Plugin', {
        pluginID: pluginId
      });
    },
    pinPlugin(pluginId: string) {
      updatePrefs(pluginPrefs.pinPlugin(pluginId));
      trackOrgEvent('Dev Handoff Org Pin Plugin', {
        pluginID: pluginId
      });
    },
    movePin(pluginId: string, position: any) {
      updatePrefs(pluginPrefs.movePin(pluginId, position));
      trackOrgEvent('Dev Handoff Org Move Plugin', {
        pluginID: pluginId
      });
    },
    localCodegenSettings: pluginPrefs.localCodegenSettings,
    setCodegenSettings(settings: any) {
      updatePrefs(pluginPrefs.setCodegenSetting(settings));
      trackOrgEvent('Dev Handoff Org Set codegenSettings', {
        codeLanguage: settings?.language.id
      });
    },
    setCodegenSettingsLanguage(language: any) {
      updatePrefs(pluginPrefs.setCodegenSettingLanguage(language));
      trackOrgEvent('Dev Handoff Org Set codegenSettingsLanguage', {
        codeLanguage: language.id
      });
    },
    setCodegenSettingsUnit(unit: any) {
      updatePrefs(pluginPrefs.setCodegenSettingUnit(unit));
      trackOrgEvent('Dev Handoff Org Set codegenSettings Unit in preferences', {
        unit
      });
    },
    setCodegenSettingsCustomSettings(language: any, custom: any) {
      updatePrefs(pluginPrefs.setCodegenSettingCustomSettings(language, custom));
    },
    serialize: () => pluginPrefs.serialize(),
    updatePrefsFromList(list: any[]) {
      setPluginPrefs(new PluginPreferences({
        pins: list.map(item => ({
          pluginId: item.plugin_id,
          inherited: false
        })),
        removedInheritedPins: [],
        codegenSettings: pluginPrefs.codegenSettings
      }, null, null));
    },
    loaded: isLoaded
  };
}

/**
 * useCodegenLanguageSync hook ($$U2)
 * Syncs codegen language preferences for published plugins.
 */
export function setupCodegenLanguageSync() {
  let selectedLanguage;
  const [synced, setSynced] = useState(false);
  const {
    localCodegenSettings,
    loaded
  } = setupUserPluginPreferences();
  const {
    loaded: pluginLoaded,
    plugin
  } = (() => {
    const fileKey = useCurrentFileKey();
    const atom = useAtomWithSubscription(_$$x);
    const duplicatedFiles = useSelector<ObjectOf>(state => state.figFileDuplicatedFromHubFile);
    const mappedPluginId = useMemo(() => {
      if (!fileKey) return null;
      const duplicated = duplicatedFiles[fileKey];
      return duplicated && duplicated.hubFileId ? getMappedPluginId(duplicated.hubFileId) : null;
    }, [duplicatedFiles, fileKey]);
    const isMapped = !!mappedPluginId;
    const pluginObj = usePluginManifestById(mappedPluginId ?? '', isMapped);
    return atom ? mappedPluginId && isMapped ? pluginObj : {
      loaded: true,
      plugin: null
    } : {
      loaded: false,
      plugin: null
    };
  })();
  const updatePreferences = useUpdateCodeExtensionPreferences();
  const language = localCodegenSettings?.language;
  const isPublishedPlugin = language?.type === 'published-plugin' && loaded;
  const pluginObj = usePluginManifestById(language?.id ?? '', isPublishedPlugin);
  if (!synced) {
    if (pluginLoaded && plugin) {
      selectedLanguage = getCodegenLanguagePreference(plugin);
      if (!isDevModeWithCodegen(plugin) || !selectedLanguage) return;
    } else if (isPublishedPlugin && pluginObj.loaded && localCodegenSettings) {
      if (language?.type === 'published-plugin' && !pluginObj.plugin) {
        return;
      }
      if (pluginObj.plugin && !isDevModeWithCodegen(pluginObj.plugin)) return;
      selectedLanguage = language;
    } else {
      if (localCodegenSettings?.language.type === 'first-party') selectedLanguage = language;
    }
    if (selectedLanguage && !plugin && localCodegenSettings) {
      updatePreferences(selectedLanguage, pluginObj.plugin ?? null, localCodegenSettings.preferences);
      updateDevHandoffCodeLanguage(selectedLanguage);
      setSynced(true);
    }
  }
}

/**
 * Saves user preferences to API (B)
 */
async function saveUserPreferences(preferences: any) {
  await sendWithRetry.post('/api/plugin_preferences/user', {
    preferences
  });
}

/**
 * Gets org plugin preferences (G)
 */
function getOrgPreferences() {
  const orgPlan = useCurrentPublicPlan('useLGOrgPluginPreferences').unwrapOr(null);
  const orgId = getParentOrgIdIfOrgLevel(orgPlan) ?? null;
  return getSubscriptionStatus(useSubscription(PluginPreferencesView, {
    targetOrgId: orgId,
    targetUserId: null
  }));
}

/**
 * Gets subscription status (V)
 */
function getSubscriptionStatus(subscription: any) {
  if (subscription.status !== 'loaded') {
    return {
      loaded: false,
      preferences: null,
      codegenEnabled: false,
      pinnedPluginsEnabled: false
    };
  }
  const pluginPrefs = subscription.data.pluginPreferences;
  const {
    codegenEnabled,
    pinnedPluginsEnabled
  } = pluginPrefs || {};
  return {
    loaded: true,
    preferences: pluginPrefs?.preferences,
    codegenEnabled: codegenEnabled ?? false,
    pinnedPluginsEnabled: pinnedPluginsEnabled ?? false
  };
}

// Export refactored names for imports
export const VR = setupUserPluginPreferences;
export const IE = setupOrgPluginPreferences;
export const iA = setupCodegenLanguageSync;
