import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useId, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { E as _$$E } from "../905/53857";
import { Label } from "../905/270045";
import { setupMenu, MenuRootComp, MenuContainerComp, MenuItemComp } from "../figma_app/860955";
import { MeasurementUnit } from "../figma_app/763686";
import { generateRecordingKey, useHandleMouseEvent } from "../figma_app/878298";
import { e as _$$e } from "../905/713353";
import { getI18nString, renderI18nText } from "../905/303541";
import { getEffectiveCodegenLanguage, getDevModePluginFromLanguage, getDevModePluginManifest, getSelectedCodegenLanguage } from "../figma_app/655139";
import { c as _$$c } from "../469e6e40/927162";
import { NH } from "../figma_app/755395";
import { CODEGEN_MEASUREMENT_UNITS } from "../905/515076";
import { useApplyCodeExtensionPreferences, isCodegenSupportedForLanguage, useUpdateCodeExtensionPreferences, getMeasurementUnit, getLanguageUnitLabel, useCodegenPreferencesSettings } from "../figma_app/120227";
import { useDropdown } from "../905/848862";
import { selectIsCopyExportAllowed } from "../figma_app/212807";
import { KindEnum } from "../905/129884";
import { u as _$$u } from "../figma_app/152461";
import { j as _$$j } from "../905/834956";
import { VZ } from "../figma_app/727192";
import { uQ } from "../905/794875";
let E = "code_settings_panel--codeSettingRow--81hbo";
let C = "code_settings_panel--codeSettingLabel--OV3RZ";
let S = "code_settings_panel--codeSettingValueWrapper--UMoQH";
export function $$N0({
  onlyShowFirstPartyLanguages: e,
  disabled: t
}) {
  useApplyCodeExtensionPreferences();
  let a = isCodegenSupportedForLanguage();
  let s = selectIsCopyExportAllowed();
  return jsx(VZ, {
    title: getI18nString("dev_handoff.code.settings"),
    recordingKey: "codeSettings",
    collapsiblePanelKey: "code_settings",
    additionalHeaders: s ? jsx(_$$u, {}) : void 0,
    collapsedHeaders: s ? jsx(I, {}) : void 0,
    children: jsx("div", {
      className: "code_settings_panel--codeSettingsPanel--LR2Tt",
      children: s ? jsxs(Fragment, {
        children: [jsx(T, {
          onlyShowFirstPartyLanguages: e,
          disabled: t
        }), a && jsx(A, {
          disabled: t
        }), !t && jsx(L, {
          recordingKey: "codeSettings.pluginSettings"
        })]
      }) : jsx("div", {
        className: E,
        children: renderI18nText("fullscreen.properties_panel.this_file_s_editor_has_disabled_exporting_copying_and_sharing.seat_rename")
      })
    })
  });
}
function I() {
  let e = getEffectiveCodegenLanguage();
  let t = getDevModePluginFromLanguage(e);
  let a = getDevModePluginManifest().format(e);
  return "first-party" === e.type ? jsx(_$$E, {
    variant: "inactiveOutline",
    children: a
  }) : t ? jsx(_$$c, {
    plugin: t
  }) : null;
}
function T({
  onlyShowFirstPartyLanguages: e,
  disabled: t
}) {
  return jsxs("div", {
    className: E,
    children: [jsx("div", {
      className: C,
      children: renderI18nText("dev_handoff.code.settings.language")
    }), jsx("div", {
      className: S,
      children: jsx(NH, {
        dropdownId: "DEV_HANDOFF_NO_SELECTION_CODE_LANGUAGE_DROPDOWN",
        onlyShowFirstPartyLanguages: e,
        disabled: t
      })
    })]
  });
}
function A({
  disabled: e
}) {
  let t = getEffectiveCodegenLanguage();
  let a = useUpdateCodeExtensionPreferences();
  let i = getSelectedCodegenLanguage();
  let r = getMeasurementUnit();
  let o = useCallback(e => a(t, i, {
    unit: e
  }), [t, a, i]);
  let d = useId();
  return jsxs("div", {
    className: E,
    children: [jsx(Label, {
      className: C,
      htmlFor: d,
      children: renderI18nText("dev_handoff.alternative_units.dimension_unit")
    }), jsx($$R2, {
      currentUnit: r,
      onChangeUnit: o,
      disabled: e,
      dropdownId: d
    })]
  });
}
export function $$R2({
  currentUnit: e,
  onChangeUnit: t,
  disabled: a,
  dropdownId: i
}) {
  let r = getLanguageUnitLabel();
  let l = useMemo(() => new $$O3(r), [r]);
  let d = l.format(e);
  let {
    manager,
    getTriggerProps
  } = setupMenu({
    initialPosition: "bottom"
  });
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(_$$e, {
      ...getTriggerProps({
        id: i
      }),
      "aria-label": getI18nString("dev_handoff.alternative_units.dimension_unit_named", {
        unit: d
      }),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("dev_handoff.alternative_units.dimension_unit"),
        "data-testid": "dimension_unit"
      },
      disabled: a,
      children: d
    }), jsx(MenuContainerComp, {
      children: CODEGEN_MEASUREMENT_UNITS.map(a => jsx(MenuItemComp, {
        onClick: () => t(a),
        "aria-checked": a === e,
        children: l.format(a)
      }, a))
    })]
  });
}
export class $$O3 {
  constructor(e) {
    this.scaledUnitName = e;
  }
  format(e) {
    return e === MeasurementUnit.PIXEL ? getI18nString("dev_handoff.alternative_units.pixel_unit") : this.scaledUnitName;
  }
}
function L(e) {
  let t = useCodegenPreferencesSettings({
    includeActions: !1
  });
  return 0 === t.length ? null : jsx(Fragment, {
    children: t.map(t => jsx(D, {
      item: t,
      recordingKey: generateRecordingKey(e, `${t.name}`)
    }, t.name))
  });
}
function D({
  item: e,
  recordingKey: t
}) {
  return jsxs("div", {
    className: E,
    children: [jsx("div", {
      className: C,
      children: e.displayText
    }), jsx($$M1, {
      item: e,
      recordingKey: t
    })]
  });
}
export function $$M1({
  item: e,
  recordingKey: t
}) {
  let {
    showing,
    data,
    toggle
  } = useDropdown("CODEGEN_PLUGIN_SETTINGS_DROPDOWN");
  let o = useDispatch<AppDispatch>();
  let d = useRef(null);
  let _ = e.name === data?.name && showing;
  let u = e.children?.find(e => e.isChecked)?.displayText ?? "";
  let m = useHandleMouseEvent(generateRecordingKey(t, "select"), "click", () => toggle({
    data: {
      name: e.name ?? ""
    }
  }));
  return jsxs("div", {
    children: [jsx("div", {
      ref: d,
      className: S,
      children: jsx(uQ, {
        formatter: {
          format: e => e
        },
        property: u,
        onClick: m
      })
    }), _ && d.current && jsx(_$$j, {
      activatePathOnMount: u ? [u] : void 0,
      alwaysShowCheckMarkOffset: !0,
      dispatch: o,
      items: e.children ?? [],
      lean: "right",
      leanPadding: 8,
      onSelectItem: e => {
        e.callback?.("", null, o);
      },
      parentRect: d.current.getBoundingClientRect(),
      recordingKey: generateRecordingKey(t, "dropdown"),
      showPoint: !1
    })]
  });
}
export const $b = $$N0;
export const jp = $$M1;
export const gn = $$R2;
export const Be = $$O3;