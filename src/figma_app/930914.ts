import { useCallback, useMemo, useRef } from 'react';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { selectWithShallowEqual } from '../905/103090';
import { KindEnum } from '../905/129884';
import { showModalHandler } from '../905/156213';
import { getI18nString } from '../905/303541';
import { sD, Xn } from '../905/429125';
import { V } from '../905/735518';
import { n as _$$n } from '../905/841238';
import { Um } from '../905/848862';
import { showDropdownThunk } from '../905/929976';
import { calculatePickerPositionLeft } from '../905/959568';
import { getSlotPropTypes, DisplayMode, trackComponentPropsModalOpen, DROPDOWN_HEIGHT, getComponentPropDisplayName } from '../figma_app/164212';
import { On, p1 } from '../figma_app/323320';
import { SlotSymbolType } from '../figma_app/338442';
import { selectContainingStateOrSymbolId, selectAreAllSymbolsOrInstances, createIsInstanceSublayerSelector } from '../figma_app/505098';
import { YW } from '../figma_app/778125';
import { generateRecordingKey } from '../figma_app/878298';
import { useDispatch } from 'react-redux';
let I = e => e.stopPropagation();
export function $$S1(e, t) {
  let r = useMemo(On, []);
  let n = useMemo(createIsInstanceSublayerSelector, []);
  let {
    containingProductComponent,
    defReferencedBySelection,
    nodesHaveInstanceSublayer,
    selectionHasProductComponent
  } = selectWithShallowEqual(i => {
    let a = selectContainingStateOrSymbolId(i);
    let s = a ? i.mirror.sceneGraph.get(a) : null;
    let o = n(i, t);
    return {
      containingProductComponent: s,
      defReferencedBySelection: r(i, e),
      nodesHaveInstanceSublayer: o,
      selectionHasProductComponent: selectAreAllSymbolsOrInstances(i)
    };
  });
  return !useMemo(() => !!containingProductComponent?.guid && !nodesHaveInstanceSublayer && (!selectionHasProductComponent || e !== SlotSymbolType.VISIBLE), [containingProductComponent, nodesHaveInstanceSublayer, selectionHasProductComponent, e]) || !!defReferencedBySelection;
}
export function $$v3(e, t, r, n) {
  let s = useDispatch();
  let o = useMemo(() => getSlotPropTypes(e).defaultType, [e]);
  let d = useMemo(p1, []);
  let {
    containingProductComponent,
    hasExistingDefs
  } = selectWithShallowEqual(t => {
    let r = selectContainingStateOrSymbolId(t);
    return {
      containingProductComponent: r ? t.mirror.sceneGraph.get(r) : null,
      hasExistingDefs: !!d(t, r, e).length
    };
  });
  return useCallback(() => {
    if (t?.current) {
      if (hasExistingDefs && !n) {
        s(showDropdownThunk({
          type: sD.concat('-', e),
          data: {
            nodeField: e,
            targetRect: t.current.getBoundingClientRect()
          }
        }));
      } else {
        trackComponentPropsModalOpen(containingProductComponent, !0, o, DisplayMode.ICON);
        let n = t.current;
        let i = n ? calculatePickerPositionLeft(n, DROPDOWN_HEIGHT) : {};
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
    let n = selectContainingStateOrSymbolId(r);
    return {
      hasExistingDefs: !!t(r, n, e).length
    };
  });
  let n = useMemo(() => getSlotPropTypes(e).defaultType, [e]);
  return hasExistingDefs ? getI18nString('design_systems.component_properties.apply_component_property', {
    propType: getComponentPropDisplayName(n).toLocaleLowerCase()
  }) : getI18nString('design_systems.component_properties.create_component_property_of_type', {
    propType: getComponentPropDisplayName(n).toLocaleLowerCase()
  });
}
export function $$x0(e) {
  let t = selectWithShallowEqual(e => e.modalShown);
  let r = useMemo(() => getSlotPropTypes(e).defaultType, [e]);
  let n = sD.concat('-', e);
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
    children: [jsx('div', {
      ref: a,
      children: jsx(YW, {
        'recordingKey': generateRecordingKey('applyPropRefButton', e),
        'selected': l,
        'data-tooltip-type': KindEnum.TEXT,
        'data-tooltip': u,
        'onMouseDown': I,
        'onClick': c,
        'children': jsx(V, {})
      })
    }), jsx(Xn, {
      source: DisplayMode.ICON,
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