import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useCallback, useId, useMemo, useRef } from "react";
import { useDispatch } from "../vendor/514228";
import { E } from "../905/53857";
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
let k = "code_settings_panel--codeSettingRow--81hbo";
let A = "code_settings_panel--codeSettingLabel--OV3RZ";
let I = "code_settings_panel--codeSettingValueWrapper--UMoQH";
export function $$E0({
  onlyShowFirstPartyLanguages: e,
  disabled: t
}) {
  YE();
  let n = Em();
  let i = AF();
  return jsx(VZ, {
    title: _$$t("dev_handoff.code.settings"),
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
        children: tx("fullscreen.properties_panel.this_file_s_editor_has_disabled_exporting_copying_and_sharing.seat_rename")
      })
    })
  });
}
function C() {
  let e = v4();
  let t = AC(e);
  let n = P0().format(e);
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
      children: tx("dev_handoff.code.settings.language")
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
  let t = v4();
  let n = Bs();
  let o = QN();
  let l = RH();
  let r = useCallback(e => n(t, o, {
    unit: e
  }), [t, n, o]);
  let d = useId();
  return jsxs("div", {
    className: k,
    children: [jsx(J, {
      className: A,
      htmlFor: d,
      children: tx("dev_handoff.alternative_units.dimension_unit")
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
  let l = wQ();
  let s = useMemo(() => new $$L3(l), [l]);
  let d = s.format(e);
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
        id: o
      }),
      "aria-label": _$$t("dev_handoff.alternative_units.dimension_unit_named", {
        unit: d
      }),
      htmlAttributes: {
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": _$$t("dev_handoff.alternative_units.dimension_unit"),
        "data-testid": "dimension_unit"
      },
      disabled: n,
      children: d
    }), jsx(mc, {
      children: zq.map(n => jsx(q7, {
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
    return e === tKW.PIXEL ? _$$t("dev_handoff.alternative_units.pixel_unit") : this.scaledUnitName;
  }
}
function R(e) {
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
  } = BK("CODEGEN_PLUGIN_SETTINGS_DROPDOWN");
  let r = useDispatch();
  let d = useRef(null);
  let u = e.name === data?.name && showing;
  let p = e.children?.find(e => e.isChecked)?.displayText ?? "";
  let h = rf(Pt(t, "select"), "click", () => toggle({
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
      recordingKey: Pt(t, "dropdown"),
      showPoint: !1
    })]
  });
}
export const $b = $$E0;
export const jp = $$O1;
export const gn = $$P2;
export const Be = $$L3;