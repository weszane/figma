import { useEffect, useMemo, useState, useCallback } from "react";
import { useDispatch, useSelector } from "../vendor/514228";
import { isNotNullish } from "../figma_app/95419";
import { useAtomValueAndSetter, useAtomWithSubscription } from "../figma_app/27355";
import { U, iT } from "../figma_app/901889";
import { x as _$$x } from "../figma_app/256637";
import { Rs } from "../figma_app/288654";
import { XHR } from "../905/910117";
import { D as _$$D } from "../905/273829";
import { _I } from "../figma_app/473493";
import { xb } from "../figma_app/910914";
import { $n } from "../905/515076";
import { Bs } from "../figma_app/120227";
import { b as _$$b } from "../905/985254";
import { m0 } from "../figma_app/976749";
import { YN, mf, uf, _P } from "../figma_app/844435";
import { qZ } from "../905/201014";
import { bw } from "../figma_app/741237";
import { tS } from "../figma_app/516028";
import { TA } from "../905/372672";
import { FUnitType, FOverrideType, FPluginType, FPublicationStatusType } from "../figma_app/191312";
import { JuA } from "../figma_app/43951";
import { X$, H3 } from "../figma_app/465071";
import { pk } from "../figma_app/300692";
import { Y3 } from "../figma_app/455620";
import { throwTypeError } from "../figma_app/465776";
import { tKW } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { Ay as _$$Ay } from "../vendor/159563";
let L = {
  language: {
    type: "first-party",
    id: "WEB"
  },
  preferences: {
    customSettings: null,
    unit: FUnitType.PIXEL,
    scaleFactor: null
  },
  behavior: FOverrideType.INHERIT
};
class P {
  constructor(e, t, r) {
    this.workingPreferences = e;
    this.parentPreferences = t;
    this.parentEnabledPreferences = r;
    if (!t || !r) return;
    let {
      codegenEnabled,
      pinnedPluginsEnabled
    } = {
      ...r
    };
    let a = {
      ...t
    };
    codegenEnabled || (a.codegenSettings = null);
    !pinnedPluginsEnabled && getFeatureFlags().dev_mode_org_pinned_plugins_ent && (a.pins = [], a.removedInheritedPins = []);
    this.parentPreferences = a;
  }
  orgPinsNotInUserPins() {
    let e = [];
    for (let t of this.parentPreferences?.pins ?? []) this.workingPreferences.pins.find(e => e.pluginId === t.pluginId) || e.push(t);
    return e;
  }
  get pinnedPluginIDs() {
    let e = [...this.workingPreferences.pins, ...this.orgPinsNotInUserPins()];
    let t = new Set(this.workingPreferences.removedInheritedPins);
    return e.filter(e => !t.has(e.pluginId) && (!e.inherited || D(this.parentPreferences, e.pluginId))).map(e => e.pluginId);
  }
  get codegenSettings() {
    return this.parentPreferences && this.workingPreferences.codegenSettings?.behavior !== FOverrideType.OVERRIDE ? this.parentPreferences?.codegenSettings ?? null : this.workingPreferences.codegenSettings;
  }
  update(e) {
    return new P(_$$Ay(this.workingPreferences, e), this.parentPreferences, this.parentEnabledPreferences);
  }
  pinPlugin(e) {
    var t;
    t = this.workingPreferences;
    let r = t?.pins.findIndex(t => t.pluginId === e && t.inherited);
    return null != r && -1 !== r ? this.update(t => {
      t.pins[r].inherited = !1;
      t.removedInheritedPins = t.removedInheritedPins.filter(t => t !== e);
    }) : D(this.workingPreferences, e) ? this : this.update(t => {
      t.pins.push({
        pluginId: e,
        inherited: !1
      });
      t.removedInheritedPins = t.removedInheritedPins.filter(t => t !== e);
    });
  }
  unpinPlugin(e) {
    return this.update(t => {
      t.pins = t.pins.filter(t => t.pluginId !== e);
      D(this.parentPreferences, e) && t.removedInheritedPins.push(e);
    });
  }
  movePin(e, t) {
    return "after" === t.type && e === t.id || "begin" === t.type && this.pinnedPluginIDs[0] === e ? this : this.update(r => {
      let n = D(this.workingPreferences, e);
      let i = D(this.parentPreferences, e);
      let a = !!(!n && i);
      switch (r.pins = r.pins.filter(t => t.pluginId !== e), t.type) {
        case "begin":
          r.pins.unshift({
            pluginId: e,
            inherited: a
          });
          break;
        case "after":
          {
            let n = r.pins.findIndex(e => e.pluginId === t.id);
            if (-1 !== n) r.pins.splice(n + 1, 0, {
              pluginId: e,
              inherited: a
            });else {
              let n = this.orgPinsNotInUserPins();
              let i = n.findIndex(e => e.pluginId === t.id);
              if (-1 === i) throw Error("Invalid pin to move after");
              r.pins.push(...n.slice(0, i + 1).map(e => ({
                ...e,
                inherited: !0
              })), {
                pluginId: e,
                inherited: a
              });
            }
          }
      }
    });
  }
  get localCodegenSettings() {
    if (!this.codegenSettings) return null;
    let e = this.codegenSettings?.language;
    let t = this.lgLanguageToLocalLanguage(e);
    if (!t) return null;
    let r = this.codegenSettings.preferences;
    let n = this.lgUnitToLocalUnit(r.unit);
    return {
      language: t,
      preferences: {
        scaleFactor: r.scaleFactor ?? void 0,
        customSettings: r.customSettings ?? void 0,
        unit: n
      },
      behavior: this.codegenSettings.behavior
    };
  }
  setCodegenSettingLanguage(e) {
    return this.update(t => {
      let r = this.localLanguageTypeToLgLanguageType(e.type);
      if (!r) throw Error("Invalid language type");
      let n = {
        ...e,
        type: r,
        pluginLanguage: e.pluginLanguage ?? null
      };
      t.codegenSettings = {
        language: n,
        preferences: this.codegenSettings?.preferences || L.preferences,
        behavior: this.codegenSettings?.behavior || L.behavior
      };
    });
  }
  setCodegenSettingUnit(e) {
    return this.update(t => {
      if (!this.codegenSettings) return;
      let r = this.localUnitToLgUnit(e);
      if (!r) throw Error("Invalid unit");
      let n = this.codegenSettings.preferences ? {
        ...this.codegenSettings.preferences,
        unit: r
      } : {
        scaleFactor: null,
        unit: r,
        customSettings: null
      };
      t.codegenSettings = {
        language: this.codegenSettings.language,
        preferences: n,
        behavior: this.codegenSettings.behavior
      };
    });
  }
  setCodegenSettingCustomSettings(e, t) {
    return this.update(r => {
      if (!this.codegenSettings) return;
      let n = this.localLanguageTypeToLgLanguageType(e.type);
      if (!n) throw Error("Invalid language type");
      let i = {
        ...e,
        type: n,
        pluginLanguage: e.pluginLanguage ?? null
      };
      let a = {
        scaleFactor: this.codegenSettings.preferences?.scaleFactor ?? null,
        unit: this.codegenSettings.preferences?.unit ?? null,
        customSettings: {
          ...this.codegenSettings.preferences?.customSettings,
          ...t.customSettings
        }
      };
      r.codegenSettings = {
        language: i,
        preferences: a,
        behavior: this.codegenSettings.behavior
      };
    });
  }
  setCodegenSetting(e) {
    return this.update(t => {
      if (!e) {
        t.codegenSettings = null;
        return;
      }
      let {
        behavior,
        language,
        preferences
      } = e;
      let a = this.localLanguageTypeToLgLanguageType(language.type);
      if (!a) throw Error("Invalid language type");
      let s = {
        ...language,
        type: a,
        pluginLanguage: language.pluginLanguage ?? null
      };
      let o = {
        unit: this.localUnitToLgUnit(preferences.unit),
        customSettings: preferences.customSettings ?? null,
        scaleFactor: preferences.scaleFactor ?? null
      };
      t.codegenSettings = {
        behavior,
        language: s,
        preferences: o
      };
    });
  }
  localUnitToLgUnit(e) {
    switch (e) {
      case tKW.PIXEL:
        return FUnitType.PIXEL;
      case tKW.SCALED:
        return FUnitType.SCALED;
      default:
        return null;
    }
  }
  lgUnitToLocalUnit(e) {
    switch (e) {
      case FUnitType.PIXEL:
        return tKW.PIXEL;
      case FUnitType.SCALED:
        return tKW.SCALED;
      default:
        return;
    }
  }
  localLanguageTypeToLgLanguageType(e) {
    switch (e) {
      case "first-party":
        return FPluginType.FIRST_PARTY;
      case "published-plugin":
        return FPluginType.PUBLISHED_PLUGIN;
      default:
        return null;
    }
  }
  lgLanguageToLocalLanguage(e) {
    let t;
    switch (e.type) {
      case FPluginType.FIRST_PARTY:
        t = {
          id: e.id,
          type: e.type,
          pluginLanguage: e.pluginLanguage ?? void 0
        };
        break;
      case FPluginType.PUBLISHED_PLUGIN:
        if (!e.pluginLanguage) return null;
        t = {
          id: e.id,
          type: e.type,
          pluginLanguage: e.pluginLanguage
        };
        break;
      default:
        throwTypeError(e.type);
    }
    return t;
  }
  serialize() {
    return {
      pins: this.workingPreferences.pins.map(e => ({
        pluginId: e.pluginId,
        inherited: e.inherited
      })),
      removedInheritedPins: Array.from(new Set(this.workingPreferences.removedInheritedPins)),
      codegenSettings: this.workingPreferences.codegenSettings
    };
  }
}
function D(e, t) {
  return e?.pins.some(e => e.pluginId === t);
}
let k = {
  pins: [],
  removedInheritedPins: [],
  codegenSettings: null
};
let M = {
  ...k,
  codegenSettings: {
    language: {
      id: qZ.CSS,
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
export function $$F0() {
  let {
    loaded,
    preferences
  } = function () {
    let e = TA();
    let {
      loaded: _loaded,
      preferences: _preferences
    } = V(Rs(JuA, {
      targetOrgId: null,
      targetUserId: e
    }));
    return {
      loaded: _loaded,
      preferences: _preferences
    };
  }();
  let {
    loaded: _loaded2,
    preferences: _preferences2,
    codegenEnabled,
    pinnedPluginsEnabled
  } = G();
  let u = useDispatch();
  let h = U();
  let m = m0();
  let y = _I();
  let b = m && !y;
  useEffect(() => {
    preferences && N(null);
  }, [preferences]);
  let T = useMemo(() => new P(preferences ?? k, _preferences2 ?? null, {
    codegenEnabled,
    pinnedPluginsEnabled
  }), [preferences, _preferences2, codegenEnabled, pinnedPluginsEnabled]);
  let [x, N] = useState(null);
  let C = useMemo(() => {
    let e = new Map();
    for (let r of [...(preferences?.pins ?? []), ...(_preferences2?.pins ?? [])]) r.plugin && e.set(r.pluginId, r.plugin);
    return e;
  }, [_preferences2?.pins, preferences?.pins]);
  let w = useMemo(() => x?.pinnedPluginIDs ?? T.pinnedPluginIDs, [T, x]);
  let O = X$("usePluginPreferences").unwrapOr(null);
  let R = H3(O) ?? null;
  let L = TA();
  let D = YN();
  let M = useMemo(() => w.map(e => {
    let t = C.get(e);
    if (!t || !t.publishingStatus || t.publishingStatus !== FPublicationStatusType.APPROVED_PUBLIC && t.publishingStatus !== FPublicationStatusType.ORG_PRIVATE) return null;
    let r = mf(t, R, L, null);
    return r && (b || D(r)) ? r : null;
  }).filter(isNotNullish), [w, C, R, L, b, D]);
  let F = e => {
    N(e);
    B(e.serialize()).catch(() => {
      N(null);
    });
  };
  return {
    pinnedPlugins: M,
    unpinPlugin(e) {
      F(T.unpinPlugin(e));
      h("Dev Handoff Unpin Plugin", {
        pluginID: e
      });
    },
    pinPlugin(e) {
      u(_$$b({
        [xb]: !0
      }));
      F(T.pinPlugin(e));
      h("Dev Handoff Pin Plugin", {
        pluginID: e
      });
    },
    movePin(e, t) {
      F(T.movePin(e, t));
      h("Dev Handoff Moved Plugin", {
        pluginID: e
      });
    },
    localCodegenSettings: T.localCodegenSettings,
    setCodegenSettings(e) {
      F(T.setCodegenSetting(e));
    },
    setCodegenSettingsLanguage(e) {
      F(T.setCodegenSettingLanguage(e));
    },
    setCodegenSettingsUnit(e) {
      F(T.setCodegenSettingUnit(e));
    },
    setCodegenSettingsCustomSettings(e, t) {
      F(T.setCodegenSettingCustomSettings(e, t));
    },
    loaded: loaded && _loaded2
  };
}
export function $$j1() {
  let {
    loaded,
    preferences
  } = G();
  let [r, i] = useState(!1);
  let [a, l] = useState(new P({
    ...M,
    codegenSettings: null
  }, null, null));
  let d = iT();
  let [c, p] = useAtomValueAndSetter(_$$D);
  let _ = useCallback(e => {
    l(e);
    p(e.localCodegenSettings?.language ?? null);
  }, [p]);
  useEffect(() => {
    loaded && (null != preferences && _(new P({
      ...preferences,
      codegenSettings: preferences.codegenSettings ?? M.codegenSettings
    }, null, null)), i(!0));
  }, [preferences, loaded, p, _]);
  let h = useMemo(() => a?.pinnedPluginIDs ?? [], [a]);
  return {
    pinnedPlugins: uf(h, {
      enabled: !0
    }),
    unpinPlugin(e) {
      _(a.unpinPlugin(e));
      d("Dev Handoff Org Unpin Plugin", {
        pluginID: e
      });
    },
    pinPlugin(e) {
      _(a.pinPlugin(e));
      d("Dev Handoff Org Pin Plugin", {
        pluginID: e
      });
    },
    movePin(e, t) {
      _(a.movePin(e, t));
      d("Dev Handoff Org Move Plugin", {
        pluginID: e
      });
    },
    localCodegenSettings: a.localCodegenSettings,
    setCodegenSettings(e) {
      _(a.setCodegenSetting(e));
      d("Dev Handoff Org Set codegenSettings", {
        codeLanguage: e?.language.id
      });
    },
    setCodegenSettingsLanguage(e) {
      _(a.setCodegenSettingLanguage(e));
      d("Dev Handoff Org Set codegenSettingsLanguage", {
        codeLanguage: e.id
      });
    },
    setCodegenSettingsUnit(e) {
      _(a.setCodegenSettingUnit(e));
      d("Dev Handoff Org Set codegenSettings Unit in preferences", {
        unit: e
      });
    },
    setCodegenSettingsCustomSettings(e, t) {
      _(a.setCodegenSettingCustomSettings(e, t));
    },
    serialize: () => a.serialize(),
    updatePrefs(e) {
      l(new P({
        pins: e.map(e => ({
          pluginId: e.plugin_id,
          inherited: !1
        })),
        removedInheritedPins: [],
        codegenSettings: a.codegenSettings
      }, null, null));
    },
    loaded: r
  };
}
export function $$U2() {
  let e;
  let [t, r] = useState(!1);
  let {
    localCodegenSettings,
    loaded
  } = $$F0();
  let {
    loaded: _loaded3,
    plugin
  } = function () {
    let e = tS();
    let t = useAtomWithSubscription(_$$x);
    let r = useSelector(e => e.figFileDuplicatedFromHubFile);
    let a = useMemo(() => {
      if (!e) return null;
      let t = r[e];
      return t && t.hubFileId ? Y3(t.hubFileId) : null;
    }, [r, e]);
    let o = !!a;
    let d = _P(a ?? "", o);
    return t ? a && o ? d : {
      loaded: !0,
      plugin: null
    } : {
      loaded: !1,
      plugin: null
    };
  }();
  let u = Bs();
  let p = localCodegenSettings?.language;
  let _ = p?.type === "published-plugin" && loaded;
  let g = _P(p?.id ?? "", _);
  if (!t) {
    if (_loaded3 && plugin) {
      if (!pk(plugin) || !(e = $n(plugin))) return;
    } else if (_ && g.loaded && localCodegenSettings) {
      if (p?.type === "published-plugin" && !g.plugin || g.plugin && !pk(g.plugin)) return;
      e = p;
    } else localCodegenSettings?.language.type === "first-party" && (e = p);
    e && (!plugin && localCodegenSettings && u(e, g.plugin ?? null, localCodegenSettings.preferences), bw(e), r(!0));
  }
}
async function B(e) {
  await XHR.post("/api/plugin_preferences/user", {
    preferences: e
  });
}
function G() {
  let e = X$("useLGOrgPluginPreferences").unwrapOr(null);
  let t = H3(e) ?? null;
  return V(Rs(JuA, {
    targetOrgId: t,
    targetUserId: null
  }));
}
function V(e) {
  if ("loaded" !== e.status) return {
    loaded: !1,
    preferences: null,
    codegenEnabled: !1,
    pinnedPluginsEnabled: !1
  };
  let t = e.data.pluginPreferences;
  let {
    codegenEnabled,
    pinnedPluginsEnabled
  } = t || {};
  return {
    loaded: !0,
    preferences: t?.preferences,
    codegenEnabled: codegenEnabled ?? !1,
    pinnedPluginsEnabled: pinnedPluginsEnabled ?? !1
  };
}
export const VR = $$F0;
export const IE = $$j1;
export const iA = $$U2;