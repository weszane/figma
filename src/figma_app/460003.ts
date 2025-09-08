import { getComponentInfoById } from "../figma_app/664063";
import { z_ } from "../figma_app/338442";
import { permissionScopeHandler } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { trackEventAnalytics } from "../905/449184";
import { oy } from "../figma_app/964367";
export function $$d2(e, t) {
  let r = [];
  e?.parsedDefs?.forEach(e => {
    if (!t || t.includes(e.def.type)) switch (e.def.type) {
      case "VARIANT":
        r.push({
          propName: e.rawProp,
          propType: e.def.type,
          propMetadata: e.def.variantOptions
        });
        break;
      case "TEXT":
        r.push({
          propName: e.rawProp,
          propType: e.def.type
        });
    }
  });
  return r;
}
export async function $$c3(e, t) {
  return (await oy(e, {
    strict: !1,
    ignoreFetchingComponentData: !0,
    ...t
  })).jsxStr;
}
export function $$u0(e, t, r, l) {
  let d = r.get(e);
  if (d) {
    permissionScopeHandler.user("auto-suggest-component-prop-assignment", () => {
      try {
        d.setProperties(t.componentProps);
      } catch (e) {
        console.error("Error applying auto-suggested values to component instance node", e);
      }
    });
    let e = getComponentInfoById(l, {
      enableTsArrays: !1
    });
    let r = {};
    e?.parsedDefs.forEach(e => {
      r[e.rawProp] = e.def.type;
    });
    let c = 0;
    let u = 0;
    Object.keys(t.componentProps).forEach(e => {
      switch (r[e]) {
        case "TEXT":
          c++;
          break;
        case "VARIANT":
          u++;
      }
    });
    trackEventAnalytics("autosuggest_props_applied", {
      componentKey: e?.key,
      numTextProps: c,
      numVariantProps: u,
      method: getFeatureFlags().anticipation_props_fs ? z_.FS : z_.GPT
    });
  }
}
export function $$p1(e, t) {
  let r = e.filter(e => {
    let r = t.get(e);
    return r?.isInstance;
  });
  return 1 === r.length ? r[0] : "";
}
export const Dm = $$u0;
export const Vg = $$p1;
export const ag = $$d2;
export const fn = $$c3;
