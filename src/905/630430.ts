import { useState, useCallback, useLayoutEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { noop } from 'lodash-es';
import { MeasurementUnit } from "../figma_app/763686";
import { trackEventAnalytics } from "../905/449184";
import { getI18nString } from "../905/303541";
import { v4, AC, Pt } from "../figma_app/655139";
import { SupportedPlatforms, WEB } from "../905/359509";
import { isCodegenSupported, CODEGEN_MEASUREMENT_UNITS } from "../905/515076";
import { $h, OQ } from "../905/191741";
import { Z } from "../905/820720";
import { getPluginInfo, getUnitLabelForLanguage } from "../figma_app/120227";
export function $$g0() {
  let [e] = $h();
  let [t, i] = useState(e);
  let g = v4();
  let [f, _] = useState({
    ...g
  });
  let A = getPluginInfo(f);
  let y = isCodegenSupported(f, A);
  let b = useCallback(e => {
    i(e);
    trackEventAnalytics("dev_mode.compare_changes.change_inspection_mode", {
      mode: e
    });
  }, []);
  useLayoutEffect(() => {
    "first-party" !== f.type && (_(SupportedPlatforms[WEB]), "properties" !== t && i("properties"));
  }, [f, t]);
  let v = useSelector(e => e.mirror.appModel.devHandoffPreferences);
  let [I, E] = useState({
    ...v
  });
  let x = getUnitLabelForLanguage(f);
  let S = useMemo(() => I.codeExtensionPreferences?.[f.id] ?? {}, [I, f]);
  let w = useMemo(() => {
    let e = [];
    if (!y) return e;
    let t = S?.unit || MeasurementUnit.PIXEL;
    e.push({
      displayText: getI18nString("dev_handoff.alternative_units.dimension_unit"),
      header: !0
    }, ...CODEGEN_MEASUREMENT_UNITS.map(e => {
      let i = e === MeasurementUnit.PIXEL ? getI18nString("dev_handoff.alternative_units.pixel_unit") : x;
      return {
        name: e.toString(),
        displayText: i,
        isChecked: t === e,
        callback: () => {
          E({
            ...I,
            codeExtensionPreferences: {
              ...I.codeExtensionPreferences,
              [f.id]: {
                ...(I.codeExtensionPreferences?.[f.id] || {}),
                unit: e
              }
            }
          });
        },
        recordingKey: e === MeasurementUnit.PIXEL ? "pixel" : "scaled"
      };
    }));
    return e;
  }, [y, I, S, x, f]);
  let C = AC(f);
  let T = Pt(C);
  let k = Z({
    codeLanguage: f,
    onChange: _,
    shouldHideLanguagesWithNoAltUnitSupport: !1,
    onlyShowFirstPartyLanguages: !0,
    formatter: T
  });
  let R = {
    codeLanguage: f,
    codeLanguageOptions: k,
    activeCodegenPlugin: C,
    formatter: T,
    onCodeLanguageChange: noop
  };
  let N = OQ;
  return {
    inspectionMode: N.find(e => e === t) || N[0],
    setInspectionMode: b,
    supportsAlternativeUnits: y,
    preferenceOptions: w,
    preferences: S,
    codeLanguageApi: R,
    inspectionModes: N,
    skipHeadersInNewInspectPanelExperience: !0
  };
}
export const G = $$g0;
