import { useState, useCallback, useLayoutEffect, useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { lQ } from "../905/934246";
import { tKW } from "../figma_app/763686";
import { sx } from "../905/449184";
import { t as _$$t } from "../905/303541";
import { v4, AC, Pt } from "../figma_app/655139";
import { S8, uz } from "../905/359509";
import { ZA, zq } from "../905/515076";
import { $h, OQ } from "../905/191741";
import { Z } from "../905/820720";
import { aq, wA } from "../figma_app/120227";
export function $$g0() {
  let [e] = $h();
  let [t, i] = useState(e);
  let g = v4();
  let [f, _] = useState({
    ...g
  });
  let A = aq(f);
  let y = ZA(f, A);
  let b = useCallback(e => {
    i(e);
    sx("dev_mode.compare_changes.change_inspection_mode", {
      mode: e
    });
  }, []);
  useLayoutEffect(() => {
    "first-party" !== f.type && (_(S8[uz]), "properties" !== t && i("properties"));
  }, [f, t]);
  let v = useSelector(e => e.mirror.appModel.devHandoffPreferences);
  let [I, E] = useState({
    ...v
  });
  let x = wA(f);
  let S = useMemo(() => I.codeExtensionPreferences?.[f.id] ?? {}, [I, f]);
  let w = useMemo(() => {
    let e = [];
    if (!y) return e;
    let t = S?.unit || tKW.PIXEL;
    e.push({
      displayText: _$$t("dev_handoff.alternative_units.dimension_unit"),
      header: !0
    }, ...zq.map(e => {
      let i = e === tKW.PIXEL ? _$$t("dev_handoff.alternative_units.pixel_unit") : x;
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
        recordingKey: e === tKW.PIXEL ? "pixel" : "scaled"
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
    onCodeLanguageChange: lQ
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