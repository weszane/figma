import { jsx, jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { useDispatch } from "../vendor/514228";
import { lQ } from "../905/934246";
import { t as _$$t } from "../905/150656";
import { bL, RT } from "../905/867927";
import { q } from "../905/932270";
import { useAtomWithSubscription } from "../figma_app/27355";
import { getI18nString, renderI18nText } from "../905/303541";
import { _I } from "../figma_app/473493";
import { _y, vV } from "../figma_app/755395";
import { a9 } from "../905/191741";
import { Em, ie } from "../figma_app/120227";
import { v as _$$v } from "../905/50227";
import { yt } from "../figma_app/451499";
import { z4 } from "../905/37051";
import { Um } from "../905/848862";
import { AF } from "../figma_app/212807";
import { d as _$$d } from "../905/480825";
import { VZ } from "../figma_app/727192";
import { c$, l6 } from "../905/794875";
import { Q } from "../905/217916";
import { NR, VM, d2, rb } from "../905/132015";
export function $$x1(e) {
  let t = Q();
  return jsx($$N0, {
    dropdownPrefix: e.dropdownPrefix,
    inspectionModeLayout: e.inspectionModeLayout,
    preferencesApi: t
  });
}
export function $$N0({
  dropdownPrefix: e,
  inspectionModeLayout: t = "drop-down",
  preferencesApi: r,
  hidePreferencesForList: o
}) {
  let l = useDispatch();
  let d = _I();
  let {
    inspectionMode,
    setInspectionMode,
    inspectionModes
  } = r;
  let g = Um();
  let f = useMemo(() => inspectionModes.map(e => jsx(c$, {
    value: e,
    recordingKey: e
  }, e)), [inspectionModes]);
  let b = z4.getIsExtension();
  let T = inspectionModes.map(e => ({
    key: e,
    label: a9.format(e)
  }));
  return jsx(VZ, {
    hideHeader: !0,
    noPadding: !0,
    noBorder: !0,
    recordingKey: "preferences",
    children: jsxs("div", {
      className: NR,
      children: [!b && ("drop-down" === t ? jsx(l6, {
        ariaLabel: getI18nString("dev_handoff.inspection_mode.select"),
        className: VM,
        dispatch: l,
        dropdownShown: g,
        dropdownWidth: "120px",
        formatter: a9,
        id: `${e}_dev_handoff_inspection_mode`,
        onChange: setInspectionMode,
        onShowDropdownOverride: d ? void 0 : lQ,
        property: inspectionMode,
        recordingKey: "dev_handoff_inspection_mode",
        children: f
      }) : "tabs" === t ? jsx(L, {
        onTabClick: setInspectionMode,
        selectedTabKey: inspectionMode,
        tabs: T
      }) : jsx(P, {
        onChange: setInspectionMode,
        inspectionMode,
        inspectionModes: T
      })), jsx("div", {
        className: d2,
        children: r.codeLanguageApi && jsx(C, {
          dropdownPrefix: e,
          preferencesApi: {
            ...r,
            codeLanguageApi: r.codeLanguageApi
          },
          hidePreferencesForList: o
        })
      })]
    })
  });
}
function C({
  dropdownPrefix: e,
  preferencesApi: t,
  hidePreferencesForList: r
}) {
  let i = AF();
  let a = z4.getIsExtension();
  let {
    preferenceOptions,
    inspectionMode,
    codeLanguageApi,
    skipHeadersInNewInspectPanelExperience
  } = t;
  return preferenceOptions && codeLanguageApi && i ? a || "properties" !== inspectionMode ? jsx(w, {
    preferenceOptions,
    codeLanguageApi,
    dropdownPrefix: e,
    skipPreferencesHeaders: skipHeadersInNewInspectPanelExperience
  }) : r ? null : jsx(R, {
    preferenceOptions,
    codeLanguageApi,
    dropdownPrefix: e
  }) : null;
}
function w({
  preferenceOptions: e,
  codeLanguageApi: t,
  dropdownPrefix: r,
  skipPreferencesHeaders: a
}) {
  let s = r ? `${r}_DEV_HANDOFF_LANGUAGE_DROPDOWN` : "DEV_HANDOFF_LANGUAGE_DROPDOWN";
  let {
    activeCodegenPlugin,
    codeLanguage,
    codeLanguageOptions,
    formatter
  } = t;
  let p = activeCodegenPlugin && "first-party" !== codeLanguage.type ? jsx(_$$d, {
    plugin: activeCodegenPlugin
  }) : null;
  let h = formatter.format(codeLanguage);
  let m = "local-plugin" !== codeLanguage.type ? [h] : [codeLanguageOptions[0].displayText];
  let g = useMemo(() => {
    let t = a ? void 0 : {
      displayText: getI18nString("dev_handoff.language_dropdown.preferences_header", {
        languageOrPlugin: h
      }),
      header: !0
    };
    return [...codeLanguageOptions, {
      separator: !0,
      displayText: ""
    }, ...(t ? [t] : []), ...e];
  }, [codeLanguageOptions, e, h, a]);
  return jsx(_y, {
    dropdownId: s,
    items: g,
    formatter,
    value: codeLanguage,
    icon: p,
    activatePathOnMount: m
  });
}
let O = new yt();
function R({
  preferenceOptions: e,
  codeLanguageApi: t,
  dropdownPrefix: r
}) {
  let i = r ? `${r}_PREFERENCES_DROPDOWN` : "DEV_HANDOFF_PREFERENCES_DROPDOWN";
  let {
    codeLanguage
  } = t;
  let s = Em();
  let o = ie();
  let l = useAtomWithSubscription(_$$v);
  if ("first-party" !== codeLanguage.type) return null;
  let d = l ? getI18nString("dev_handoff.variables.panel_display_code_syntax") : getI18nString("dev_handoff.variables.panel_display_figma_name");
  return jsx(vV, {
    dropdownId: i,
    items: e,
    formatter: O,
    value: o,
    activatePathOnMount: [s ? o : d]
  });
}
function L({
  tabs: e,
  onTabClick: t,
  selectedTabKey: r
}) {
  let i = e.reduce((e, t) => (e[t.key] = !0, e), {});
  let [a,, s] = _$$t.useManagedTabs(i, r, t, {
    recordingKey: "devHandoffPanelTabs"
  });
  return jsx("div", {
    className: rb,
    children: jsx(_$$t.TabStrip, {
      manager: s,
      children: e.map(e => jsx(_$$t.Tab, {
        ...a[e.key],
        children: e.label
      }, e.key))
    })
  });
}
function P({
  inspectionModes: e,
  inspectionMode: t,
  onChange: r
}) {
  return jsx("div", {
    className: rb,
    children: jsx(bL, {
      value: t,
      onChange: r,
      legend: jsx(q, {
        children: renderI18nText("dev_handoff.layer_properties_view")
      }),
      children: e.map(({
        key: e,
        label: t
      }) => jsx(RT, {
        label: t,
        value: e
      }, e))
    })
  });
}
export const n2 = $$N0;
export const pm = $$x1;