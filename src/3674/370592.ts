import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useId, useMemo, useRef } from "react";
import { useDispatch } from "react-redux";
import { E } from "../905/53857";
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
let k = "code_settings_panel--codeSettingRow--81hbo";
let A = "code_settings_panel--codeSettingLabel--OV3RZ";
let I = "code_settings_panel--codeSettingValueWrapper--UMoQH";
export function $$E0({
  onlyShowFirstPartyLanguages: e,
  disabled: t
}) {
  useApplyCodeExtensionPreferences();
  let n = isCodegenSupportedForLanguage();
  let i = selectIsCopyExportAllowed();
  return jsx(VZ, {
    title: getI18nString("dev_handoff.code.settings"),
    recordingKey: "codeSettings",
    collapsiblePanelKey: "code_settings",
    additionalHeaders: i ? jsx(_$$u, {}) : void 0,
    collapsedHeaders: i ? jsx(C, {}) : void 0,
    children: jsx("div", {
      className: "code_settings_panel--codeSettingsPanel--LR2Tt",
      children: i ? jsxs(Fragment, {
        children: [jsx(T, {
          onlyShowFirstPartyLanguages: e,
          disabled: t
        }), n && jsx(S, {
          disabled: t
        }), !t && jsx(R, {
          recordingKey: "codeSettings.pluginSettings"
        })]
      }) : jsx("div", {
        className: k,
        children: renderI18nText("fullscreen.properties_panel.this_file_s_editor_has_disabled_exporting_copying_and_sharing.seat_rename")
      })
    })
  });
}
function C() {
  let e = getEffectiveCodegenLanguage();
  let t = getDevModePluginFromLanguage(e);
  let n = getDevModePluginManifest().format(e);
  return "first-party" === e.type ? jsx(E, {
    variant: "inactiveOutline",
    children: n
  }) : t ? jsx(_$$c, {
    plugin: t
  }) : null;
}
function T({
  onlyShowFirstPartyLanguages: e,
  disabled: t
}) {
  return jsxs("div", {
    className: k,
    children: [jsx("div", {
      className: A,
      children: renderI18nText("dev_handoff.code.settings.language")
    }), jsx("div", {
      className: I,
      children: jsx(NH, {
        dropdownId: "DEV_HANDOFF_NO_SELECTION_CODE_LANGUAGE_DROPDOWN",
        onlyShowFirstPartyLanguages: e,
        disabled: t
      })
    })]
  });
}
function S({
  disabled: e
}) {
  let t = getEffectiveCodegenLanguage();
  let n = useUpdateCodeExtensionPreferences();
  let o = getSelectedCodegenLanguage();
  let l = getMeasurementUnit();
  let r = useCallback(e => n(t, o, {
    unit: e
  }), [t, n, o]);
  let d = useId();
  return jsxs("div", {
    className: k,
    children: [jsx(Label, {
      className: A,
      htmlFor: d,
      children: renderI18nText("dev_handoff.alternative_units.dimension_unit")
    }), jsx($$P2, {
      currentUnit: l,
      onChangeUnit: r,
      disabled: e,
      dropdownId: d
    })]
  });
}
export function $$P2({
  currentUnit: e,
  onChangeUnit: t,
  disabled: n,
  dropdownId: o
}) {
  let l = getLanguageUnitLabel();
  let s = useMemo(() => new $$L3(l), [l]);
  let d = s.format(e);
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
        id: o
      }),
      "aria-label": getI18nString("dev_handoff.alternative_units.dimension_unit_named", {
        unit: d
      }),
      htmlAttributes: {
        "data-tooltip-type": KindEnum.TEXT,
        "data-tooltip": getI18nString("dev_handoff.alternative_units.dimension_unit"),
        "data-testid": "dimension_unit"
      },
      disabled: n,
      children: d
    }), jsx(MenuContainerComp, {
      children: CODEGEN_MEASUREMENT_UNITS.map(n => jsx(MenuItemComp, {
        onClick: () => t(n),
        "aria-checked": n === e,
        children: s.format(n)
      }, n))
    })]
  });
}
export class $$L3 {
  constructor(e) {
    this.scaledUnitName = e;
  }
  format(e) {
    return e === MeasurementUnit.PIXEL ? getI18nString("dev_handoff.alternative_units.pixel_unit") : this.scaledUnitName;
  }
}
function R(e) {
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
    className: k,
    children: [jsx("div", {
      className: A,
      children: e.displayText
    }), jsx($$O1, {
      item: e,
      recordingKey: t
    })]
  });
}
export function $$O1({
  item: e,
  recordingKey: t
}) {
  let {
    showing,
    data,
    toggle
  } = useDropdown("CODEGEN_PLUGIN_SETTINGS_DROPDOWN");
  let r = useDispatch<AppDispatch>();
  let d = useRef(null);
  let u = e.name === data?.name && showing;
  let p = e.children?.find(e => e.isChecked)?.displayText ?? "";
  let h = useHandleMouseEvent(generateRecordingKey(t, "select"), "click", () => toggle({
    data: {
      name: e.name ?? ""
    }
  }));
  return jsxs("div", {
    children: [jsx("div", {
      ref: d,
      className: I,
      children: jsx(uQ, {
        formatter: {
          format: e => e
        },
        property: p,
        onClick: h
      })
    }), u && d.current && jsx(_$$j, {
      activatePathOnMount: p ? [p] : void 0,
      alwaysShowCheckMarkOffset: !0,
      dispatch: r,
      items: e.children ?? [],
      lean: "right",
      leanPadding: 8,
      onSelectItem: e => {
        e.callback?.("", null, r);
      },
      parentRect: d.current.getBoundingClientRect(),
      recordingKey: generateRecordingKey(t, "dropdown"),
      showPoint: !1
    })]
  });
}
export const $b = $$E0;
export const jp = $$O1;
export const gn = $$P2;
export const Be = $$L3;