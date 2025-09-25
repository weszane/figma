import { jsx, jsxs } from "react/jsx-runtime";
import { useId, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MenuSeparator, MenuTitleComp, MenuSubMenu, MenuSubTrigger, MenuItemLead, MenuSubContainerComp, MenuItemComp, setupMenu, MenuRootComp, MenuContainerComp } from "../figma_app/860955";
import { MenuItemPrimitive } from "../905/465888";
import { HiddenLabel } from "../905/270045";
import { l as _$$l } from "../905/479687";
import { generateRecordingKey } from "../figma_app/878298";
import { e as _$$e } from "../905/713353";
import { getI18nString } from "../905/303541";
import { TextWithTruncation } from "../905/984674";
import { AC, Pt as _$$Pt, v4 } from "../figma_app/655139";
import { gB } from "../905/294543";
import { Z } from "../905/820720";
import { aq } from "../figma_app/399472";
import { useCurrentUserOrg } from "../905/845253";
import { isPluginAllowListed } from "../figma_app/155287";
import { PluginIconDisplay } from "../905/480825";
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
  let u = useCurrentUserOrg();
  let p = useSelector(e => e.whitelistedPlugins);
  let _ = isPluginAllowListed(d, p, u) ? e : {
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
  let l = activeCodegenPlugin && "first-party" !== codeLanguage.type ? jsx(PluginIconDisplay, {
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
let A = (e, t, r) => e.separator ? jsx(MenuSeparator, {}, `${t}_separator`) : e.header ? jsx(MenuTitleComp, {
  children: e.displayText
}) : e.children ? jsxs(MenuSubMenu, {
  children: [jsxs(MenuSubTrigger, {
    hasChecked: e.isChildChecked || e.isChecked || !1,
    recordingKey: generateRecordingKey(r, e?.recordingKey ?? ""),
    children: [e.icon && jsx(MenuItemLead, {
      children: e.icon
    }), jsx("div", {
      className: _d,
      children: jsx(TextWithTruncation, {
        children: e.displayText
      })
    })]
  }), jsx(MenuSubContainerComp, {
    children: e.children.map(e => A(e, `${t}-${e.name}`, r))
  })]
}, t) : void 0 === e.isChecked ? jsxs(MenuItemComp, {
  onClick: e.callback,
  recordingKey: generateRecordingKey(r, e?.recordingKey ?? ""),
  children: [e.icon && jsx(MenuItemLead, {
    children: e.icon
  }), jsx("div", {
    className: _d,
    children: jsx(TextWithTruncation, {
      children: e.displayText
    })
  })]
}, t) : jsx(MenuItemPrimitive, {
  "aria-checked": e.isChecked,
  className: mL,
  onClick: e.callback,
  recordingKey: generateRecordingKey(r, e?.recordingKey ?? ""),
  children: jsxs("span", {
    className: ZU,
    children: [jsx(_$$l, {
      className: aC,
      "aria-hidden": !0
    }), e.icon && jsx(MenuItemLead, {
      children: e.icon
    }), jsx("div", {
      className: _d,
      children: jsx(TextWithTruncation, {
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
  } = setupMenu();
  let g = useId();
  let E = useDispatch();
  useEffect(() => E(aq()), [E]);
  let y = _?.format(c) ?? o?.[0];
  let b = y ? getI18nString("dev_handoff.code.language_named", {
    codeLanguage: y
  }) : getI18nString("dev_handoff.code.language");
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(HiddenLabel, {
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
      children: y ?? getI18nString("dev_handoff.code.language")
    }), jsx(MenuContainerComp, {
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
  } = setupMenu();
  let m = useId();
  let g = useDispatch();
  useEffect(() => g(aq()), [g]);
  let E = d?.format(o) ?? r?.[0];
  let y = E ? getI18nString("dev_handoff.code.settings.language_dropdown_with_unit", {
    unit: E
  }) : getI18nString("dev_handoff.code.options");
  return jsxs(MenuRootComp, {
    manager,
    children: [jsx(HiddenLabel, {
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
      children: E ?? getI18nString("dev_handoff.code.options")
    }), jsx(MenuContainerComp, {
      children: t.map(e => A(e, e.name, "preferencesDropdown"))
    })]
  });
}
export const NH = $$S0;
export const V0 = $$I1;
export const _y = $$x2;
export const ls = $$v3;
export const vV = $$N4;