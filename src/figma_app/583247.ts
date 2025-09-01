import { uN } from "../figma_app/338442";
import { J0O, uXg } from "../figma_app/763686";
import { Mz } from "../vendor/925040";
import { P8 } from "../905/270781";
import { t as _$$t } from "../905/303541";
import { gl } from "../905/216495";
import { g } from "../905/578436";
import { dK, Sh } from "../figma_app/889655";
import { Yi, aO, f3 } from "../figma_app/164212";
import { s as _$$s } from "../figma_app/335489";
import { uL, NE, xJ } from "../figma_app/264776";
import { C1, nM, tK, d as _$$d } from "../figma_app/505098";
export function $$m0() {
  return P8([uL, C1, dK, (e, t) => t], (e, t, r, n) => {
    if (!t || 0 === n.length) return [];
    let a = Yi(n, r) ?? nM(r, n);
    if (!a || n.includes(a)) return [];
    let s = t[a]?.stateGroupVariantProps;
    if (!s) return [];
    let d = _$$s(t, n, s.propertySortOrder);
    return (s.propertySortOrder || []).map(e => {
      let t = !function (e) {
        if (2 === e.length) {
          let t = e.map(e => e.toLowerCase());
          for (let e of NE) {
            let r = t.indexOf(e[0]);
            let n = t.indexOf(e[1]);
            if (-1 !== r && -1 !== n) return !0;
          }
        }
        return !1;
      }(s.propertyValues[e]) ? J0O.VARIANT : J0O.BOOL;
      let r = d[e] || xJ;
      return gl(r) ? {
        name: e,
        value: _$$t("inspect_panel.property.mixed"),
        type: t
      } : {
        name: e,
        value: r,
        type: t
      };
    });
  });
}
let $$g3 = () => P8([C1, tK(), _$$d()], (e, t, r) => {
  if (!e) return [];
  let n = r ?? t;
  return n ? $$y1(n, e) : [];
});
let $$f4 = (() => {
  let e = $$g3();
  return t => e(t, Sh(t));
})();
let $$E2 = Mz([$$f4], e => {
  let t = e.map(e => e.name);
  let r = _$$t("design_systems.component_properties.variant_property_default_name");
  return g(r, t);
});
export function $$y1(e, t) {
  let r = t[e]?.stateGroupVariantProps;
  if (!r) return [];
  let a = aO(e, t);
  let s = f3(e, t);
  return r.propertySortOrder.map(e => {
    let t = s === uXg.CONFLICTING_NAMES_WITH_VARIANT_ERROR && a.some(t => t.name === e);
    let o = r.propertyValues[e];
    return {
      name: e,
      values: o,
      type: J0O.VARIANT,
      kind: uN.VARIANT,
      error: t ? uXg.CONFLICTING_NAMES_WITH_VARIANT_ERROR : uXg.NONE,
      uguid: r.propertyUguids[e]
    };
  });
}
export const Cu = $$m0;
export const Jm = $$y1;
export const YH = $$E2;
export const vf = $$g3;
export const x1 = $$f4;