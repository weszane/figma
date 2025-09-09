import { ComponentPropType } from "../figma_app/763686";
import { Mz } from "../vendor/925040";
import { P8 } from "../905/270781";
import { sortWithCollator } from "../figma_app/930338";
import { getI18nString } from "../905/303541";
import { MIXED_MARKER, isValidValue } from "../905/216495";
import { g as _$$g } from "../905/578436";
import { Sh, dK, AF } from "../figma_app/889655";
import { eM, xP, k4, Yi, xb, ZH, wd } from "../figma_app/164212";
import { xJ } from "../figma_app/264776";
import { C1, Lg, tK, d as _$$d, VC, tc, X9, Yw } from "../figma_app/505098";
let h = P8([C1, (e, t) => t], (e, t) => e && t && e[t]?.defs || {});
export function $$m3() {
  return P8([h], e => Object.values(e).sort((e, t) => e.sortPosition < t.sortPosition ? -1 : 1));
}
let g = P8([C1, Lg], (e, t) => e && t ? e[t]?.defs ?? {} : {});
let f = P8([g], e => Object.values(e).sort((e, t) => e.sortPosition < t.sortPosition ? -1 : 1).map(e => e.name));
let E = () => P8([C1, tK(), _$$d()], (e, t, r) => {
  let n = r ?? t;
  return e && n ? Object.values(e[n]?.defs || {}).sort((e, t) => e.sortPosition < t.sortPosition ? -1 : 1) : [];
});
let $$y5 = (() => {
  let e = E();
  return t => e(t, Sh(t));
})();
export function $$b7() {
  return P8([h, (e, t, r) => r], (e, t) => {
    let r = eM(t).types;
    let n = Object.values(e).filter(({
      type: e
    }) => r.includes(e));
    sortWithCollator(n, e => e.name.toLocaleLowerCase());
    return n;
  });
}
Mz([C1, Sh, (e, t) => t], (e, t, r) => {});
let $$T6 = () => Mz([C1, VC(), tc(), X9(), (e, t, r) => t, (e, t, r) => r], (e, t, r, n, i, a) => {
  if (!e) return null;
  if (t) {
    let r = xP(t => {
      let r = e[t]?.refs?.[a];
      if (r?.isLinked) return r.explicitDefID;
    }, i);
    if (r) return e[t]?.defs?.[r] || null;
  }
  let s = I(e, i, a);
  return s && r ? e[r]?.defs?.[s] || null : s && n && e[n]?.defs?.[s] || null;
});
let I = (e, t, r) => {
  let n = [];
  for (let r of t) {
    let t = e[r]?.correspondingSymbolSublayer;
    if (!t) return null;
    n.push(t);
  }
  return xP(t => {
    let n = e[t]?.refs?.[r];
    if (n?.isLinked) return n.explicitDefID;
  }, n);
};
export function $$S2() {
  let e = $$T6();
  return (t, r) => e(t, Sh(t), r);
}
let $$v4 = () => Mz([C1, (e, t, r) => t, (e, t, r) => r], (e, t, r) => {
  if (!e) return !1;
  let n = [];
  for (let r of t) {
    n.push(r);
    let t = e[r]?.correspondingSymbolSublayer;
    t && n.push(t);
  }
  return n.some(t => !!e[t]?.refs?.[r]?.explicitDefID);
});
let A = () => P8([C1, dK, (e, t) => t], (e, t, r) => {
  if (!e || 0 === r.length) return {};
  let n = k4(r, t);
  let i = Yi(r, t) ?? n;
  if (!i) return {};
  let a = Object.keys(e[i]?.defs ?? {});
  if (0 === a.length) return {};
  let s = {};
  for (let n of a) {
    let i = null;
    for (let a of r) {
      let r = t.get(a);
      if (r?.type !== "INSTANCE") continue;
      let s = e[r.guid]?.assignments;
      if (!s) continue;
      let o = s[n];
      if (null != o) {
        if (o.isMixed) {
          i = {
            isMixed: !0
          };
          break;
        }
        if (null === i) i = {
          isMixed: !1,
          value: o.value
        };else if (i.value !== o.value) {
          i = {
            isMixed: !0
          };
          break;
        }
      }
    }
    i && (s[n] = i);
  }
  return s;
});
let $$x8 = Mz([(e, t) => t, (e, t, r) => r, f, AF], (e, t, r, i) => {
  if (e === ComponentPropType.BOOL && t) {
    let e = i?.name ? getI18nString("design_systems.component_properties.boolean_property_default_name", {
      selectedNodeName: i.name
    }) : getI18nString("design_systems.component_properties.boolean_property_default_name_fallback", {
      numSelected: i ? 1 : 2
    });
    return _$$g(e, r);
  }
  if (e === ComponentPropType.NUMBER && t) {
    let e = getI18nString("design_systems.component_properties.number_property_default_name");
    return _$$g(e, r);
  }
  if (e === ComponentPropType.SLOT) {
    let e = getI18nString("design_systems.component_properties.slot_property_default_name");
    return _$$g(e, r);
  }
  {
    let t = e === ComponentPropType.INSTANCE_SWAP ? getI18nString("design_systems.component_properties.instance_swap_property_default_name") : xb(e);
    return _$$g(t, r);
  }
});
export function $$N1() {
  return P8([dK, E(), A(), C1, (e, t) => t], (e, t, r, i, a) => {
    if (!i) return [];
    let s = ZH(a, i);
    return t.filter(e => !s.has(e.explicitDefID)).map(t => {
      let i = t.defaultValue;
      if (null != r[t.explicitDefID]) {
        let e = r[t.explicitDefID];
        i = e ? e.isMixed ? MIXED_MARKER : e.value : xJ;
      }
      if (t.type === ComponentPropType.INSTANCE_SWAP && i !== xJ && i !== MIXED_MARKER) {
        let t = wd([i], e);
        i = t && isValidValue(t) ? t.name : xJ;
      }
      return {
        name: t.name,
        value: i,
        type: t.type
      };
    });
  });
}
export let $$C0 = () => Mz([C1, Yw, dK, (e, t) => t], (e, t, r, n) => {
  let i = {};
  if (!e || !t) return i;
  for (let a of n) for (let n in t[a]) {
    let s = e[n]?.backingSymbol;
    if (!s) continue;
    let o = r.get(s)?.containingStateGroupId || s;
    for (let e in i[o] || (i[o] = {}), t[a][n]) i[o][e] ? i[o][e].instanceGUIDs.push(n) : i[o][e] = {
      name: t[a][n][e],
      instanceGUIDs: [n]
    };
  }
  return i;
});
export const $H = $$C0;
export const Ee = $$N1;
export const On = $$S2;
export const Pe = $$m3;
export const Tn = $$v4;
export const W0 = $$y5;
export const en = $$T6;
export const p1 = $$b7;
export const vS = $$x8;