import { jsx, jsxs } from "react/jsx-runtime";
import { useId, useEffect } from "react";
import { d4, wA } from "../vendor/514228";
import { wv, hE, g8, ZP, Q$, MJ, q7, b as _$$b, bL, mc } from "../figma_app/860955";
import { q7 as _$$q } from "../905/465888";
import { h as _$$h } from "../905/270045";
import { l as _$$l } from "../905/479687";
import { generateRecordingKey } from "../figma_app/878298";
import { e as _$$e } from "../905/713353";
import { t as _$$t } from "../905/303541";
import { E as _$$E } from "../905/984674";
import { AC, Pt as _$$Pt, v4 } from "../figma_app/655139";
import { gB } from "../905/294543";
import { Z } from "../905/820720";
import { aq } from "../figma_app/399472";
import { sZ } from "../905/845253";
import { ow } from "../figma_app/155287";
import { d as _$$d } from "../905/480825";
import { _d, mL, ZU, aC } from "../905/79137";
export function $$I1({
  codeLanguage: e,
  onChange: t,
  shouldHideLanguagesWithNoAltUnitSupport: r,
  onlyShowFirstPartyLanguages: n,
  showAddInsteadOfBrowse: i,
  addCodegenPluginCallback: s,
  currentSavedCodeLanguage: o,
  skipBrowsePlugins: l
}) {
  let d = AC(e);
  let c = _$$Pt(d);
  let u = sZ();
  let p = d4(e => e.whitelistedPlugins);
  let _ = ow(d, p, u) ? e : {
    type: "first-party",
    id: "WEB"
  };
  let m = Z({
    codeLanguage: _,
    onChange: t,
    shouldHideLanguagesWithNoAltUnitSupport: r,
    onlyShowFirstPartyLanguages: n,
    formatter: c,
    showAddInsteadOfBrowse: i,
    addCodegenPluginCallback: s,
    currentSavedCodeLanguage: o,
    skipBrowsePlugins: l
  });
  return {
    codeLanguage: _,
    onCodeLanguageChange: t,
    codeLanguageOptions: m,
    activeCodegenPlugin: d,
    formatter: c
  };
}
export function $$S0({
  onlyShowFirstPartyLanguages: e,
  shouldHideLanguagesWithNoAltUnitSupport: t,
  dropdownId: r,
  disabled: i
}) {
  let a = $$I1({
    onlyShowFirstPartyLanguages: e,
    codeLanguage: v4(),
    onChange: gB(),
    shouldHideLanguagesWithNoAltUnitSupport: t
  });
  return jsx($$v3, {
    dropdownId: r,
    disabled: i,
    codeLanguageApi: a
  });
}
export function $$v3({
  dropdownId: e,
  disabled: t,
  codeLanguageApi: r
}) {
  let {
    codeLanguage,
    activeCodegenPlugin,
    formatter,
    codeLanguageOptions
  } = r;
  let l = activeCodegenPlugin && "first-party" !== codeLanguage.type ? jsx(_$$d, {
    plugin: activeCodegenPlugin
  }) : null;
  return jsx($$x2, {
    dropdownId: e,
    disabled: t,
    value: codeLanguage,
    formatter,
    items: codeLanguageOptions,
    icon: l,
    activatePathOnMount: "local-plugin" !== codeLanguage.type ? [formatter.format(codeLanguage)] : codeLanguageOptions[0] ? [codeLanguageOptions[0].displayText] : void 0
  });
}
let A = (e, t, r) => e.separator ? jsx(wv, {}, `${t}_separator`) : e.header ? jsx(hE, {
  children: e.displayText
}) : e.children ? jsxs(g8, {
  children: [jsxs(ZP, {
    hasChecked: e.isChildChecked || e.isChecked || !1,
    recordingKey: generateRecordingKey(r, e?.recordingKey ?? ""),
    children: [e.icon && jsx(Q$, {
      children: e.icon
    }), jsx("div", {
      className: _d,
      children: jsx(_$$E, {
        children: e.displayText
      })
    })]
  }), jsx(MJ, {
    children: e.children.map(e => A(e, `${t}-${e.name}`, r))
  })]
}, t) : void 0 === e.isChecked ? jsxs(q7, {
  onClick: e.callback,
  recordingKey: generateRecordingKey(r, e?.recordingKey ?? ""),
  children: [e.icon && jsx(Q$, {
    children: e.icon
  }), jsx("div", {
    className: _d,
    children: jsx(_$$E, {
      children: e.displayText
    })
  })]
}, t) : jsx(_$$q, {
  "aria-checked": e.isChecked,
  className: mL,
  onClick: e.callback,
  recordingKey: generateRecordingKey(r, e?.recordingKey ?? ""),
  children: jsxs("span", {
    className: ZU,
    children: [jsx(_$$l, {
      className: aC,
      "aria-hidden": !0
    }), e.icon && jsx(Q$, {
      children: e.icon
    }), jsx("div", {
      className: _d,
      children: jsx(_$$E, {
        children: e.displayText
      })
    })]
  })
}, t);
export function $$x2({
  dropdownId: e,
  items: t,
  icon: r,
  activatePathOnMount: o,
  disabled: d,
  value: c,
  formatter: _
}) {
  let {
    manager,
    getTriggerProps
  } = _$$b();
  let g = useId();
  let E = wA();
  useEffect(() => E(aq()), [E]);
  let y = _?.format(c) ?? o?.[0];
  let b = y ? _$$t("dev_handoff.code.language_named", {
    codeLanguage: y
  }) : _$$t("dev_handoff.code.language");
  return jsxs(bL, {
    manager,
    children: [jsx(_$$h, {
      htmlFor: e,
      children: b
    }), jsx(_$$e, {
      lead: r,
      htmlAttributes: {
        "data-testid": "code_language_dropdown"
      },
      ...getTriggerProps({
        id: g
      }),
      recordingKey: "preferencesDropdownButton",
      disabled: d,
      "aria-label": b,
      children: y ?? _$$t("dev_handoff.code.language")
    }), jsx(mc, {
      children: t.map(e => A(e, e.name, "preferencesDropdown"))
    })]
  });
}
export function $$N4({
  dropdownId: e,
  items: t,
  activatePathOnMount: r,
  value: o,
  formatter: d,
  disabled: c
}) {
  let {
    manager,
    getTriggerProps
  } = _$$b();
  let m = useId();
  let g = wA();
  useEffect(() => g(aq()), [g]);
  let E = d?.format(o) ?? r?.[0];
  let y = E ? _$$t("dev_handoff.code.settings.language_dropdown_with_unit", {
    unit: E
  }) : _$$t("dev_handoff.code.options");
  return jsxs(bL, {
    manager,
    children: [jsx(_$$h, {
      htmlFor: e,
      children: y
    }), jsx(_$$e, {
      ...getTriggerProps({
        id: m
      }),
      "aria-label": y,
      recordingKey: "preferencesDropdownButton",
      htmlAttributes: {
        "data-testid": "code_language_dropdown"
      },
      disabled: c,
      children: E ?? _$$t("dev_handoff.code.options")
    }), jsx(mc, {
      children: t.map(e => A(e, e.name, "preferencesDropdown"))
    })]
  });
}
export const NH = $$S0;
export const V0 = $$I1;
export const _y = $$x2;
export const ls = $$v3;
export const vV = $$N4;