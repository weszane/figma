import { FIGMA_PROPERTIES } from '../905/359509';
import { debugState } from '../905/407919';
import { getCodegenLanguages, findCodegenLanguage } from '../905/661977';
import { hasLocalFileId, isSelectSchema, isUnitSchema } from '../figma_app/155287';
import { aB } from '../figma_app/741237';
import { MeasurementUnit } from '../figma_app/763686';
let $$d8 = [MeasurementUnit.PIXEL, MeasurementUnit.SCALED];
let c = [FIGMA_PROPERTIES];
export function $$u2(e) {
  return hasLocalFileId(e) ? `${e.localFileId}` : `${e.plugin_id}`;
}
export function $$p0(e, t) {
  let i = hasLocalFileId(e) ? 'local-plugin' : 'published-plugin';
  let n = $$u2(e);
  if (t) {
    return {
      type: i,
      id: n,
      pluginLanguage: t.value
    };
  }
  let a = debugState.getState().mirror.appModel.devHandoffCodeLanguage;
  let s = getCodegenLanguages(e).map(({
    value: e
  }) => e);
  return a.id === n && a.type !== 'first-party' && s.includes(a.pluginLanguage) ? a : {
    type: i,
    id: n,
    pluginLanguage: s[0] ?? ''
  };
}
export function $$m7(e, t) {
  return e ? (e.manifest?.codegenPreferences ?? []).filter(e => !t?.value || !('includedLanguages' in e) || e.includedLanguages?.includes(t.value)) : [];
}
export function $$h3(e, t) {
  return $$m7(e, t).find(isUnitSchema) ?? null;
}
export function $$g4(e, t) {
  if (!e) return !1;
  if (e.type === 'first-party') return !c.includes(e.id);
  if (!t) return !1;
  let i = findCodegenLanguage(t, e.pluginLanguage);
  return !!$$h3(t, i);
}
export function $$f1(e, t, i) {
  let n = {
    ...e,
    codeExtensionPreferences: {
      ...e.codeExtensionPreferences,
      [t.id]: {
        ...(e.codeExtensionPreferences?.[t.id] || {}),
        ...i
      }
    }
  };
  aB(n);
}
export function $$_6(e, t) {
  let i = $$u2(e);
  let a = debugState.getState().mirror.appModel.devHandoffPreferences.codeExtensionPreferences[i] ?? {};
  let s = {};
  let l = $$h3(e, t);
  let d = !1;
  let c = !1;
  'unit' in a && 'scaleFactor' in a || (s.unit = l?.default ? MeasurementUnit.SCALED : MeasurementUnit.PIXEL, s.scaleFactor = l?.defaultScaleFactor ? l.defaultScaleFactor : 1, d = !0, c = !0);
  t || l || a.unit !== MeasurementUnit.SCALED || (s.unit = MeasurementUnit.PIXEL, s.scaleFactor = 1, d = !0, c = !0);
  d || !t || a.unit !== MeasurementUnit.SCALED || l || (s.unit = l ? MeasurementUnit.SCALED : MeasurementUnit.PIXEL, d = !0);
  let p = !1;
  let g = $$m7(e, t).filter(isSelectSchema);
  let f = a.customSettings ?? {};
  let _ = {};
  for (let e of g) {
    let t = f[e.propertyName];
    if (t && e.options.some(e => e.value === t)) {
      _[e.propertyName] = t;
      continue;
    }
    _[e.propertyName] = e.options.find(e => e.isDefault)?.value ?? e.options[0].value;
    p = !0;
  }
  (p || Object.keys(f).length !== Object.keys(_).length) && (s.customSettings = _);
  let A = {
    ...a,
    ...s
  };
  return {
    shouldUpdateCustomSettings: !!s.customSettings,
    shouldUpdateScaleFactor: c,
    shouldUpdateAltUnit: d,
    preferences: {
      ...A,
      scaleFactor: A.unit === MeasurementUnit.PIXEL ? 1 : A.scaleFactor
    }
  };
}
export function $$A5(e, t) {
  let i = null;
  let {
    shouldUpdateCustomSettings,
    shouldUpdateAltUnit,
    shouldUpdateScaleFactor,
    preferences
  } = $$_6(e, null);
  t && ({
    shouldUpdateAltUnit: a,
    preferences: i
  } = $$_6(e, t), shouldUpdateAltUnit && (preferences.unit = i.unit));
  let l = {};
  shouldUpdateCustomSettings && (l.customSettings = preferences.customSettings);
  shouldUpdateScaleFactor && (l.scaleFactor = preferences.scaleFactor);
  shouldUpdateAltUnit && (l.unit = preferences.unit);
  Object.keys(l).length > 0 && $$f1(debugState.getState().mirror.appModel.devHandoffPreferences, $$p0(e), l);
  return i ?? preferences;
}
export const $n = $$p0;
export const D8 = $$f1;
export const GL = $$u2;
export const K6 = $$h3;
export const ZA = $$g4;
export const dW = $$A5;
export const n_ = $$_6;
export const zZ = $$m7;
export const zq = $$d8;