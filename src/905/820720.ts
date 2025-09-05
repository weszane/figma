import { jsx } from "react/jsx-runtime";
import { useMemo } from "react";
import { useSelector } from "../vendor/514228";
import { _gJ } from "../figma_app/763686";
import { zl } from "../figma_app/27355";
import l from "../vendor/128080";
import { s as _$$s } from "../cssbuilder/589278";
import { t as _$$t } from "../905/303541";
import { n as _$$n } from "../905/477505";
import { HT, RB } from "../figma_app/69680";
import { S8, uz, p as _$$p, Ap, LK, NU } from "../905/359509";
import { K6, $n } from "../905/515076";
import { $1, j8, _P } from "../figma_app/844435";
import { ax } from "../figma_app/741237";
import { sZ } from "../905/845253";
import { pk } from "../figma_app/300692";
import { ZQ, ow } from "../figma_app/155287";
import { m as _$$m } from "../905/661977";
import { d as _$$d } from "../905/480825";
var d = l;
function E(e, t, i, r = {}) {
  let a = [];
  e.forEach(e => {
    if (!pk(e)) return;
    let s = _$$m(e).filter(t => !r.shouldHideLanguagesWithNoAltUnitSupport || !!K6(e, t));
    if (0 === s.length) return;
    let o = ZQ(e) ? void 0 : jsx("div", {
      className: _$$s.mr4.$,
      children: jsx(_$$d, {
        plugin: e
      })
    });
    if (1 === s.length) {
      let n = $n(e, s[0]);
      a.push({
        name: e.name,
        displayText: e.name,
        icon: o,
        isChecked: d()(n, t),
        callback: () => i(n)
      });
    } else {
      let n = s.map(n => {
        let r = $n(e, n);
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
  let I = $1();
  let x = j8();
  let {
    codegenPlugins
  } = _$$n();
  let w = _P(g?.id || "", !!g);
  let C = useSelector(e => e.whitelistedPlugins);
  let T = sZ() || null;
  return useMemo(() => {
    let r = Object.values(I).filter(pk);
    let a = Object.values(x);
    T && T.plugins_whitelist_enforced && (a = a.filter(e => ow(e, C, T)));
    codegenPlugins.forEach(e => {
      let t = e.current_plugin_version_id ? e.versions[e.current_plugin_version_id] : void 0;
      t && !x[t.plugin_id] && ow(t, C, T) && a.push(t);
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
    let k = [A(S8[uz]), {
      name: _$$t("dev_handoff.code.lang_ios"),
      displayText: _$$t("dev_handoff.code.lang_ios"),
      isChildChecked: e.id === _$$p || e.id === Ap,
      children: [A(S8[_$$p]), A(S8[Ap])]
    }, {
      name: _$$t("dev_handoff.code.lang_android"),
      displayText: _$$t("dev_handoff.code.lang_android"),
      isChildChecked: e.id === LK || e.id === NU,
      children: [A(S8[LK]), A(S8[NU])]
    }];
    if (n) return k;
    let R = k.length > 0 ? {
      displayText: _$$t("dev_handoff.language_dropdown.first_party_header"),
      header: !0
    } : void 0;
    let N = p.length > 0;
    let P = N ? {
      displayText: _$$t("dev_handoff.language_dropdown.third_party_header"),
      header: !0
    } : void 0;
    let O = [...(R ? [R] : []), ...k, ...(N ? [{
      separator: !0,
      displayText: ""
    }, ...(P ? [P] : []), ...p] : [])];
    !v && (d || O.push({
      name: _$$t("dev_handoff.code_language.browse"),
      displayText: _$$t("dev_handoff.code_language.browse"),
      callback: () => {
        ax(_gJ.PLUGIN);
        zl.set(HT, "recents_and_saved");
        zl.set(RB, !0);
      }
    }), d && O.push({
      name: _$$t("dev_handoff.code_language.add"),
      displayText: _$$t("dev_handoff.code_language.add"),
      callback: () => c?.()
    }));
    f.length > 0 && O.push({
      separator: !0,
      displayText: ""
    }, {
      name: _$$t("dev_handoff.code_language.development"),
      displayText: _$$t("dev_handoff.code_language.development"),
      isChecked: !!f.some(e => e.isChecked),
      children: f
    });
    return O;
  }, [T, C, I, x, codegenPlugins, g, w, e, t, i, n, d, l, c, v]);
}
export const Z = $$x0;