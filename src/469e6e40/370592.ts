import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useId, useMemo, useRef } from "react";
import { wA } from "../vendor/514228";
import { E as _$$E } from "../905/53857";
import { J } from "../905/270045";
import { b as _$$b, bL, mc, q7 } from "../figma_app/860955";
import { tKW } from "../figma_app/763686";
import { Pt, rf } from "../figma_app/806412";
import { e as _$$e } from "../905/713353";
import { t as _$$t, tx } from "../905/303541";
import { v4, AC, P0, QN } from "../figma_app/655139";
import { c as _$$c } from "../469e6e40/927162";
import { NH } from "../figma_app/755395";
import { zq } from "../905/515076";
import { YE, Em, Bs, RH, wQ, SF } from "../figma_app/120227";
import { BK } from "../905/848862";
import { AF } from "../figma_app/212807";
import { Ib } from "../905/129884";
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
  YE();
  let a = Em();
  let s = AF();
  return jsx(VZ, {
    title: _$$t("dev_handoff.code.settings"),
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
        children: tx("fullscreen.properties_panel.this_file_s_editor_has_disabled_exporting_copying_and_sharing.seat_rename")
      })
    })
  });
}
function I() {
  let e = v4();
  let t = AC(e);
  let a = P0().format(e);
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
      children: tx("dev_handoff.code.settings.language")
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
  let t = v4();
  let a = Bs();
  let i = QN();
  let r = RH();
  let o = useCallback(e => a(t, i, {
    unit: e
  }), [t, a, i]);
  let d = useId();
  return jsxs("div", {
    className: E,
    children: [jsx(J, {
      className: C,
      htmlFor: d,
      children: tx("dev_handoff.alternative_units.dimension_unit")
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
  let r = wQ();
  let l = useMemo(() => new $$O3(r), [r]);
  let d = l.format(e);
  let {
    manager,
    getTriggerProps
  } = _$$b({
    initialPosition: "bottom"
  });
  return jsxs(bL, {
    manager,
    children: [jsx(_$$e, {
      ...getTriggerProps({
        id: i
      }),
      "aria-label": _$$t("dev_handoff.alternative_units.dimension_unit_named", {
        unit: d
      }),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("dev_handoff.alternative_units.dimension_unit"),
        "data-testid": "dimension_unit"
      },
      disabled: a,
      children: d
    }), jsx(mc, {
      children: zq.map(a => jsx(q7, {
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
    return e === tKW.PIXEL ? _$$t("dev_handoff.alternative_units.pixel_unit") : this.scaledUnitName;
  }
}
function L(e) {
  let t = SF({
    includeActions: !1
  });
  return 0 === t.length ? null : jsx(Fragment, {
    children: t.map(t => jsx(D, {
      item: t,
      recordingKey: Pt(e, `${t.name}`)
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
  } = BK("CODEGEN_PLUGIN_SETTINGS_DROPDOWN");
  let o = wA();
  let d = useRef(null);
  let _ = e.name === data?.name && showing;
  let u = e.children?.find(e => e.isChecked)?.displayText ?? "";
  let m = rf(Pt(t, "select"), "click", () => toggle({
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
      recordingKey: Pt(t, "dropdown"),
      showPoint: !1
    })]
  });
}
export const $b = $$N0;
export const jp = $$M1;
export const gn = $$R2;
export const Be = $$O3;