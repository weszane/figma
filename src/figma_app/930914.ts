import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useMemo, useCallback, useRef } from "react";
import { useDispatch } from "../vendor/514228";
import { V } from "../905/735518";
import { RR } from "../figma_app/338442";
import { selectWithShallowEqual } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { getI18nString } from "../905/303541";
import { j7 } from "../905/929976";
import { showModalHandler } from "../905/156213";
import { Um } from "../905/848862";
import { Ib } from "../905/129884";
import { cn } from "../905/959568";
import { YW } from "../figma_app/778125";
import { sD, Xn } from "../905/429125";
import { eM, Pp, Fv, wh, xb } from "../figma_app/164212";
import { n as _$$n } from "../905/841238";
import { Ms, Lg, Ln } from "../figma_app/505098";
import { On, p1 } from "../figma_app/323320";
let I = e => e.stopPropagation();
export function $$S1(e, t) {
  let r = useMemo(On, []);
  let n = useMemo(Ms, []);
  let {
    containingProductComponent,
    defReferencedBySelection,
    nodesHaveInstanceSublayer,
    selectionHasProductComponent
  } = selectWithShallowEqual(i => {
    let a = Lg(i);
    let s = a ? i.mirror.sceneGraph.get(a) : null;
    let o = n(i, t);
    return {
      containingProductComponent: s,
      defReferencedBySelection: r(i, e),
      nodesHaveInstanceSublayer: o,
      selectionHasProductComponent: Ln(i)
    };
  });
  return !useMemo(() => !!containingProductComponent?.guid && !nodesHaveInstanceSublayer && (!selectionHasProductComponent || e !== RR.VISIBLE), [containingProductComponent, nodesHaveInstanceSublayer, selectionHasProductComponent, e]) || !!defReferencedBySelection;
}
export function $$v3(e, t, r, n) {
  let s = useDispatch();
  let o = useMemo(() => eM(e).defaultType, [e]);
  let d = useMemo(p1, []);
  let {
    containingProductComponent,
    hasExistingDefs
  } = selectWithShallowEqual(t => {
    let r = Lg(t);
    return {
      containingProductComponent: r ? t.mirror.sceneGraph.get(r) : null,
      hasExistingDefs: !!d(t, r, e).length
    };
  });
  return useCallback(() => {
    if (t?.current) {
      if (hasExistingDefs && !n) s(j7({
        type: sD.concat("-", e),
        data: {
          nodeField: e,
          targetRect: t.current.getBoundingClientRect()
        }
      }));else {
        Pp(containingProductComponent, !0, o, Fv.ICON);
        let n = t.current;
        let i = n ? cn(n, wh) : {};
        s(showModalHandler({
          type: _$$n,
          data: {
            prePopulatedDefaultValue: r,
            propType: o,
            refField: e,
            initialX: i?.x ?? 0,
            initialY: i?.y ?? 0
          }
        }));
      }
    }
  }, [t, hasExistingDefs, n, s, e, containingProductComponent, o, r]);
}
export function $$A2(e) {
  let t = useMemo(p1, []);
  let {
    hasExistingDefs
  } = selectWithShallowEqual(r => {
    let n = Lg(r);
    return {
      hasExistingDefs: !!t(r, n, e).length
    };
  });
  let n = useMemo(() => eM(e).defaultType, [e]);
  return hasExistingDefs ? getI18nString("design_systems.component_properties.apply_component_property", {
    propType: xb(n).toLocaleLowerCase()
  }) : getI18nString("design_systems.component_properties.create_component_property_of_type", {
    propType: xb(n).toLocaleLowerCase()
  });
}
export function $$x0(e) {
  let t = selectWithShallowEqual(e => e.modalShown);
  let r = useMemo(() => eM(e).defaultType, [e]);
  let n = sD.concat("-", e);
  let a = Um();
  let s = !!a && a.type === n && a.data.nodeField === e;
  let o = !!t && t.type === _$$n.type && t.data?.propType === r;
  return s || o;
}
export function $$N4({
  nodeField: e,
  defaultValue: t,
  guids: r
}) {
  let a = useRef(null);
  let o = $$S1(e, r);
  let l = $$x0(e);
  let c = $$v3(e, a, t);
  let u = $$A2(e);
  return o ? null : jsxs(Fragment, {
    children: [jsx("div", {
      ref: a,
      children: jsx(YW, {
        recordingKey: Pt("applyPropRefButton", e),
        selected: l,
        "data-tooltip-type": Ib.TEXT,
        "data-tooltip": u,
        onMouseDown: I,
        onClick: c,
        children: jsx(V, {})
      })
    }), jsx(Xn, {
      source: Fv.ICON,
      nodeField: e,
      newPropDefaultValue: t
    })]
  });
}
export const MB = $$x0;
export const Yc = $$S1;
export const m = $$A2;
export const oX = $$v3;
export const yQ = $$N4;