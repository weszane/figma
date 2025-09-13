import { useMemo, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { MeasurementUnit } from "../figma_app/763686";
import s from "../vendor/3757";
import { debugState } from "../905/407919";
import { trackFileEventWithStore } from "../figma_app/901889";
import { getI18nString } from "../905/303541";
import { v4, AC, QN } from "../figma_app/655139";
import { FIGMA_PROPERTIES, WEB, ANDROID, ANDROID_XML, IOS as _$$p, IOS_UIKIT } from "../905/359509";
import { updateCodeExtensionPreferences, isCodegenSupported, getPluginUniqueId, filterCodegenPreferences, applyCodeExtensionPreferences } from "../905/515076";
import { S0 } from "../figma_app/844435";
import { d1 } from "../figma_app/603466";
import { isActionSchema, isSelectSchema } from "../figma_app/155287";
import { findCodegenLanguage } from "../905/661977";
import { ip, kn, Uh } from "../905/762943";
var o = s;
export function $$y13(e) {
  let t = v4().id;
  let r = useSelector(e => e.mirror.appModel.devHandoffPreferences);
  let a = e ?? t;
  return useMemo(() => r.codeExtensionPreferences?.[a] ?? {}, [r, a]);
}
export function $$b15() {
  let e = debugState.getState()?.mirror?.appModel;
  let t = e?.devHandoffCodeLanguage?.id ?? "";
  return e?.devHandoffPreferences?.codeExtensionPreferences?.[t] ?? {};
}
export function $$T2() {
  let e = useSelector(e => e.mirror.appModel.devHandoffPreferences);
  let t = trackFileEventWithStore();
  return useCallback((r, n, i) => {
    let {
      customSettings,
      ...s
    } = i;
    o()(s) || (void 0 !== s.unit && (s.unit = ip(r, n, s.unit)), t("Dev Mode Preference Changed", {
      languageType: r.type,
      languageId: r.id,
      ...s
    }));
    updateCodeExtensionPreferences(e, r, i);
  }, [e, t]);
}
export function $$I7(e) {
  let t = v4();
  let r = e ?? t;
  let n = $$y13(r.id)?.unit ?? MeasurementUnit.PIXEL;
  return "first-party" === r.type && r.id === FIGMA_PROPERTIES ? MeasurementUnit.PIXEL : n;
}
export function $$S12(e) {
  let t = v4();
  let r = e ?? t;
  let {
    unit = MeasurementUnit.PIXEL,
    scaleFactor = 1
  } = $$y13(r.id);
  return "first-party" === r.type && r.id === FIGMA_PROPERTIES ? 1 : unit === MeasurementUnit.SCALED ? scaleFactor : 1;
}
let v = ({
  preferences: e,
  options: t = {}
}) => e.customSettings?.onlyText === "true" && !t?.isTextProperty;
function A(e, t, r = e => e, n) {
  let i = v4();
  let a = e ?? i;
  let s = $$S12(a);
  let o = $$y13(a.id);
  return 1 === s || 0 === s || v({
    preferences: o,
    options: n
  }) ? t.map(e => void 0 === e ? void 0 : r(e)) : t.map(e => void 0 === e ? void 0 : r(e / s));
}
export function $$x6(e, t, r = e => e, n) {
  return A(e, [t], r, n)[0];
}
export function $$N0(e, t) {
  let r = v4();
  let i = e ?? r;
  let a = $$S12(i);
  let s = $$y13(i.id);
  return useCallback(e => 1 === a || 0 === a || void 0 === e || v({
    preferences: s,
    options: t
  }) ? void 0 === e ? void 0 : e : e * a, [t, s, a]);
}
export function $$C4(e, t, r, n) {
  let i = v4();
  let a = e ?? i;
  let s = A(a, t, r, n);
  let o = $$M14(a, n);
  return v({
    preferences: $$y13(a.id),
    options: n
  }) ? s.map(e => `${e}${kn.pixel}`) : s.map(e => `${e}${o}`);
}
export function $$w16(e, t, r, n) {
  let i = $$C4(e, [t], r, n);
  if (void 0 !== t) return i[0];
}
export function $$O10(e) {
  let {
    id,
    type
  } = e;
  return S0(id, {
    searchLocalPlugins: "local-plugin" === type,
    searchPublishedPlugins: "published-plugin" === type
  });
}
export function $$R3(e) {
  let t = v4();
  let r = $$O10(e ?? t);
  return isCodegenSupported(e ?? t, r);
}
export function $$L1(e, t) {
  let r = $$O10(e);
  return Uh(e, r, t);
}
export function $$P11(e) {
  switch (e) {
    case WEB:
      return getI18nString("dev_handoff.alternative_units.rem_unit");
    case ANDROID:
    case ANDROID_XML:
      return getI18nString("dev_handoff.alternative_units.dp_unit");
    case _$$p:
    case IOS_UIKIT:
      return getI18nString("dev_handoff.alternative_units.pt_unit");
    default:
      return getI18nString("dev_handoff.alternative_units.rem_unit");
  }
}
export function $$D18(e) {
  let t = v4();
  return $$k17(e ?? t);
}
export function $$k17(e) {
  let t = $$L1(e);
  return "first-party" === e.type ? $$P11(e.id) : t;
}
export function $$M14(e, t) {
  let r = v4();
  let n = e ?? r;
  let i = $$I7(n);
  let s = $$L1(n, t);
  return i === MeasurementUnit.PIXEL ? kn.pixel : s;
}
export function $$F8({
  localCodeLanguage: e,
  includeActions: t = !0,
  includeSelectSettings: r = !0
} = {}) {
  let i = v4();
  let a = e ?? i;
  let s = AC(a);
  let o = $$y13(a.id);
  let l = $$T2();
  return useMemo(() => $$j5({
    includeActions: t,
    includeSelectSettings: r,
    codeLanguage: a,
    plugin: s,
    codeExtensionPreferences: o,
    onChangePreferences: l
  }), [t, r, a, s, o, l]);
}
export function $$j5({
  includeActions: e = !1,
  includeSelectSettings: t = !0,
  codeLanguage: r,
  plugin: n,
  codeExtensionPreferences: i,
  onChangePreferences: a
}) {
  let s = [];
  if (!n || "first-party" === r.type || getPluginUniqueId(n) !== r.id) return s;
  for (let o of filterCodegenPreferences(n, findCodegenLanguage(n, r.pluginLanguage))) {
    e && isActionSchema(o) && s.push({
      name: o.propertyName,
      displayText: o?.label || o.propertyName,
      callback: () => d1.codegenPreferencesChange({
        propertyName: o.propertyName
      }),
      recordingKey: o.propertyName
    });
    t && isSelectSchema(o) && s.push({
      name: o.propertyName,
      recordingKey: o.propertyName,
      displayText: o?.label ?? o.propertyName,
      children: o.options.map((e, t) => ({
        name: e.value,
        displayText: e.label,
        isChecked: i?.customSettings?.[o.propertyName] ? i?.customSettings?.[o.propertyName] === e.value : 0 === t,
        callback: () => a(r, n, {
          customSettings: {
            ...i?.customSettings,
            [o.propertyName]: e.value
          }
        }),
        recordingKey: e.value
      }))
    });
  }
  return s;
}
export function $$U9() {
  let e = v4();
  let t = QN();
  useEffect(() => {
    if (!t) return;
    let r = e.pluginLanguage;
    r && applyCodeExtensionPreferences(t, findCodegenLanguage(t, r));
  }, [e, t]);
}
export const $Q = $$N0;
export const $s = $$L1;
export const Bs = $$T2;
export const Em = $$R3;
export const Fm = $$C4;
export const Ke = $$j5;
export const QO = $$x6;
export const RH = $$I7;
export const SF = $$F8;
export const YE = $$U9;
export const aq = $$O10;
export const b1 = $$P11;
export const fb = $$S12;
export const gc = $$y13;
export const ie = $$M14;
export const lX = $$b15;
export const qM = $$w16;
export const wA = $$k17;
export const wQ = $$D18;