import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { MeasurementUnit } from "../figma_app/763686";
import { useAtomValueAndSetter } from "../figma_app/27355";
import { getI18nString } from "../905/303541";
import { v4, AC, Pt } from "../figma_app/655139";
import { CODEGEN_MEASUREMENT_UNITS } from "../905/515076";
import { sQ } from "../905/191741";
import { j6 } from "../figma_app/243025";
import { SF, wQ, Em, gc, Bs } from "../figma_app/120227";
import { showModalHandler } from "../905/156213";
import { z4 } from "../905/37051";
import { Q } from "../figma_app/152461";
import { v as _$$v } from "../905/50227";
export function $$f0(e) {
  let t = SF();
  let r = sQ();
  let f = z4.getIsExtension();
  let E = function (e) {
    let t = v4();
    let r = e ?? t;
    let s = AC(r);
    let c = wQ(r);
    let h = Em(r);
    let m = gc(r.id);
    let g = Bs();
    let f = useDispatch();
    return useMemo(() => {
      let e = [];
      if (!h) return e;
      let t = m?.unit || MeasurementUnit.PIXEL;
      e.push(...CODEGEN_MEASUREMENT_UNITS.map(e => {
        let n = e === MeasurementUnit.PIXEL ? getI18nString("dev_handoff.alternative_units.pixel_unit") : c;
        return {
          name: e.toString(),
          displayText: n,
          isChecked: t === e,
          callback: () => g(r, s, {
            unit: e
          }),
          recordingKey: e === MeasurementUnit.PIXEL ? "pixel" : "scaled"
        };
      }), {
        displayText: getI18nString("dev_handoff.alternative_units.unit_settings_menu_option"),
        callback: () => f(showModalHandler({
          type: j6
        })),
        recordingKey: "setScaleFactor"
      });
      return e;
    }, [h, m?.unit, c, g, r, s, f]);
  }(e);
  let y = v4();
  let b = e ?? y;
  let {
    updateDefaultCodegenSettings,
    isSetToDefault
  } = Q();
  let [S, v] = useAtomValueAndSetter(_$$v);
  let A = AC(b);
  let x = Pt(A).format(b);
  return useMemo(() => {
    let e = [];
    E.length > 0 && (r || f || e.push({
      displayText: getI18nString("dev_handoff.language_dropdown.preferences_header_unit", {
        languageOrPlugin: x
      }),
      header: !0
    }), e.push(...E));
    t.length > 0 && e.length > 0 && e.push({
      displayText: "",
      separator: !0
    });
    e.push(...t);
    e.length > 0 && e.push({
      separator: !0,
      displayText: ""
    });
    r ? e.push({
      displayText: getI18nString("dev_handoff.code.settings.set_as_default"),
      callback: () => {
        updateDefaultCodegenSettings();
      },
      isChecked: isSetToDefault
    }) : b?.type === "first-party" && (e.push({
      displayText: getI18nString("dev_handoff.variables.panel_display"),
      header: !0
    }), e.push({
      displayText: getI18nString("dev_handoff.variables.panel_display_code_syntax"),
      isChecked: S,
      callback: () => {
        v(!0);
      }
    }), e.push({
      displayText: getI18nString("dev_handoff.variables.panel_display_figma_name"),
      isChecked: !S,
      callback: () => {
        v(!1);
      }
    }));
    return e;
  }, [t, isSetToDefault, E, updateDefaultCodegenSettings, r, S, v, b?.type, f, x]);
}
export const q = $$f0;
