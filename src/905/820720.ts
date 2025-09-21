import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { IAssertResource } from "../figma_app/763686";
import { atomStoreManager } from "../figma_app/27355";
import l from "../vendor/128080";
import { cssBuilderInstance } from "../cssbuilder/589278";
import { getI18nString } from "../905/303541";
import { n as _$$n } from "../905/477505";
import { defaultViewAtom, isModalOpenAtom } from "../figma_app/69680";
import { SupportedPlatforms, WEB, IOS as _$$p, IOS_UIKIT, ANDROID, ANDROID_XML } from "../905/359509";
import { findUnitSchema, getCodegenLanguagePreference } from "../905/515076";
import { getLocalPlugins, getAllPluginVersions, usePluginManifestById } from "../figma_app/844435";
import { setSelectedDevModePropertiesPanelTab } from "../figma_app/741237";
import { useCurrentUserOrg } from "../905/845253";
import { isDevModeWithCodegen } from "../figma_app/300692";
import { hasLocalFileId, isPluginAllowListed } from "../figma_app/155287";
import { getCodegenLanguages } from "../905/661977";
import { d as _$$d } from "../905/480825";
var d = l;
function E(e, t, i, r = {}) {
  let a = [];
  e.forEach(e => {
    if (!isDevModeWithCodegen(e)) return;
    let s = getCodegenLanguages(e).filter(t => !r.shouldHideLanguagesWithNoAltUnitSupport || !!findUnitSchema(e, t));
    if (0 === s.length) return;
    let o = hasLocalFileId(e) ? void 0 : jsx("div", {
      className: cssBuilderInstance.mr4.$,
      children: jsx(_$$d, {
        plugin: e
      })
    });
    if (1 === s.length) {
      let n = getCodegenLanguagePreference(e, s[0]);
      a.push({
        name: e.name,
        displayText: e.name,
        icon: o,
        isChecked: d()(n, t),
        callback: () => i(n)
      });
    } else {
      let n = s.map(n => {
        let r = getCodegenLanguagePreference(e, n);
        return {
          name: n.label,
          displayText: n.label,
          isChecked: d()(r, t),
          callback: () => i(r)
        };
      });
      a.push({
        name: e.name,
        displayText: e.name,
        icon: o,
        isChecked: !!n.some(e => e.isChecked),
        children: n
      });
    }
  });
  return a;
}
export function $$x0({
  codeLanguage: e,
  onChange: t,
  shouldHideLanguagesWithNoAltUnitSupport: i,
  onlyShowFirstPartyLanguages: n,
  formatter: l,
  showAddInsteadOfBrowse: d,
  addCodegenPluginCallback: c,
  currentSavedCodeLanguage: g,
  skipBrowsePlugins: v = !1
}) {
  let I = getLocalPlugins();
  let x = getAllPluginVersions();
  let {
    codegenPlugins
  } = _$$n();
  let w = usePluginManifestById(g?.id || "", !!g);
  let C = useSelector(e => e.whitelistedPlugins);
  let T = useCurrentUserOrg() || null;
  return useMemo(() => {
    let r = Object.values(I).filter(isDevModeWithCodegen);
    let a = Object.values(x);
    T && T.plugins_whitelist_enforced && (a = a.filter(e => isPluginAllowListed(e, C, T)));
    codegenPlugins.forEach(e => {
      let t = e.current_plugin_version_id ? e.versions[e.current_plugin_version_id] : void 0;
      t && !x[t.plugin_id] && isPluginAllowListed(t, C, T) && a.push(t);
    });
    Object.keys(x).find(e => e === g?.id) || Object.values(codegenPlugins).find(e => e.id === g?.id) || !w.plugin || a.push(w.plugin);
    let p = E(a, e, t, {
      shouldHideLanguagesWithNoAltUnitSupport: i
    });
    let f = E(r, e, t, {
      shouldHideLanguagesWithNoAltUnitSupport: i
    });
    let A = i => ({
      name: i.id,
      displayText: l.format(i),
      isChecked: i.id === e.id,
      callback: () => t(i)
    });
    let k = [A(SupportedPlatforms[WEB]), {
      name: getI18nString("dev_handoff.code.lang_ios"),
      displayText: getI18nString("dev_handoff.code.lang_ios"),
      isChildChecked: e.id === _$$p || e.id === IOS_UIKIT,
      children: [A(SupportedPlatforms[_$$p]), A(SupportedPlatforms[IOS_UIKIT])]
    }, {
      name: getI18nString("dev_handoff.code.lang_android"),
      displayText: getI18nString("dev_handoff.code.lang_android"),
      isChildChecked: e.id === ANDROID || e.id === ANDROID_XML,
      children: [A(SupportedPlatforms[ANDROID]), A(SupportedPlatforms[ANDROID_XML])]
    }];
    if (n) return k;
    let R = k.length > 0 ? {
      displayText: getI18nString("dev_handoff.language_dropdown.first_party_header"),
      header: !0
    } : void 0;
    let N = p.length > 0;
    let P = N ? {
      displayText: getI18nString("dev_handoff.language_dropdown.third_party_header"),
      header: !0
    } : void 0;
    let O = [...(R ? [R] : []), ...k, ...(N ? [{
      separator: !0,
      displayText: ""
    }, ...(P ? [P] : []), ...p] : [])];
    !v && (d || O.push({
      name: getI18nString("dev_handoff.code_language.browse"),
      displayText: getI18nString("dev_handoff.code_language.browse"),
      callback: () => {
        setSelectedDevModePropertiesPanelTab(IAssertResource.PLUGIN);
        atomStoreManager.set(defaultViewAtom, "recents_and_saved");
        atomStoreManager.set(isModalOpenAtom, !0);
      }
    }), d && O.push({
      name: getI18nString("dev_handoff.code_language.add"),
      displayText: getI18nString("dev_handoff.code_language.add"),
      callback: () => c?.()
    }));
    f.length > 0 && O.push({
      separator: !0,
      displayText: ""
    }, {
      name: getI18nString("dev_handoff.code_language.development"),
      displayText: getI18nString("dev_handoff.code_language.development"),
      isChecked: !!f.some(e => e.isChecked),
      children: f
    });
    return O;
  }, [T, C, I, x, codegenPlugins, g, w, e, t, i, n, d, l, c, v]);
}
export const Z = $$x0;