import { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { jsx, jsxs } from 'react/jsx-runtime';
import { selectWithShallowEqual } from '../905/103090';
import { showModalHandler } from '../905/156213';
import { permissionScopeHandler } from '../905/189185';
import { getI18nString } from '../905/303541';
import { ConnectedPointingDropdown } from '../905/504727';
import { getFeatureFlags } from '../905/601108';
import { n as _$$n } from '../905/841238';
import { useDropdownState } from '../905/848862';
import { a1 } from '../figma_app/23780';
import { getSlotPropTypes, trackComponentPropsModalOpen, DROPDOWN_HEIGHT, getComponentPropDisplayName } from '../figma_app/164212';
import { wv } from '../figma_app/236327';
import { On, p1 } from '../figma_app/323320';
import { selectContainingStateOrSymbolId } from '../figma_app/505098';
import { ComponentPropType, Fullscreen } from '../figma_app/763686';
import { generateRecordingKey } from '../figma_app/878298';
export let $$v1 = 'APPLY_COMPONENT_PROP_DROPDOWN';
export function $$I0({
  source: e,
  nodeField: t,
  iconWidth: i,
  newPropDefaultValue: o
}) {
  let I = useMemo(p1, []);
  let E = useMemo(On, []);
  let {
    containingComponentDefs,
    defReferencedBySelection,
    containingProductComponent
  } = selectWithShallowEqual(e => {
    let i = selectContainingStateOrSymbolId(e);
    return {
      containingProductComponent: i ? e.mirror.sceneGraph.get(i) : null,
      containingComponentDefs: I(e, i, t).filter(t => {
        switch (t.type) {
          case ComponentPropType.NUMBER:
            return getFeatureFlags().ds_variable_props_number_def;
          case ComponentPropType.SLOT:
            if (!getFeatureFlags().dse_slots) return !1;
            return e.mirror.sceneGraph.getDirectlySelectedNodes().every(e => e.canReferenceExplicitSlotComponentPropertyDefinition(t.explicitDefID));
          default:
            return !0;
        }
      }),
      defReferencedBySelection: E(e, t)
    };
  });
  let T = useDispatch();
  let k = useDropdownState();
  let R = $$v1.concat('-', t);
  let N = k && k.type === R && k.data.nodeField === t;
  let P = k?.data?.targetRect;
  let O = useCallback(() => {
    trackComponentPropsModalOpen(containingProductComponent, !0, getSlotPropTypes(t).defaultType, e);
    T(showModalHandler({
      type: _$$n,
      data: {
        prePopulatedDefaultValue: o,
        propType: getSlotPropTypes(t).defaultType,
        refField: t,
        initialX: (P?.left ?? DROPDOWN_HEIGHT) - DROPDOWN_HEIGHT,
        initialY: P?.top ?? 0
      }
    }));
  }, [containingProductComponent, t, e, T, o, P?.left, P?.top]);
  let D = useMemo(() => {
    let e = getSlotPropTypes(t).defaultType;
    return getI18nString('design_systems.component_properties.no_available_properties', {
      propType: getComponentPropDisplayName(e).toLocaleLowerCase()
    });
  }, [t]);
  return N ? jsxs(ConnectedPointingDropdown, {
    targetRect: P,
    maxWidth: 220,
    lean: 'right',
    arrowOffsetFromRectLeft: i,
    leanPadding: 6,
    propagateCloseClick: !0,
    children: [containingComponentDefs.map(e => {
      let i = !!defReferencedBySelection && defReferencedBySelection.explicitDefID === e.explicitDefID;
      return jsx(x, {
        action: 'apply-prop',
        nodeField: t,
        defID: e.explicitDefID,
        name: e.name,
        isApplied: i,
        hideCheck: !defReferencedBySelection,
        recordingKey: generateRecordingKey('applyProp', e.name)
      }, `apply-prop-${e.explicitDefID}`);
    }), !containingComponentDefs.length && getFeatureFlags().dse_slots && jsx(a1, {
      text: D,
      inPanel: !0,
      isEnabled: !1,
      hideCheck: !0,
      isChecked: !1
    }), (!!containingComponentDefs.length || getFeatureFlags().dse_slots) && jsx(wv, {}), jsx(x, {
      action: 'create-prop',
      nodeField: t,
      onCreate: O,
      isApplied: !1,
      hideCheck: !defReferencedBySelection,
      recordingKey: 'openCreatePropModal'
    }, 'create-prop')]
  }) : null;
}
let E = (e, t) => t || (e === 'create-prop' ? getI18nString('design_systems.component_properties.create_property_menu_option') : '');
function x({
  action: e,
  nodeField: t,
  name: i,
  defID: a,
  onCreate: l,
  isApplied: d,
  hideCheck: u,
  ...p
}) {
  let m = useCallback(() => {
    e === 'create-prop' ? l && l() : permissionScopeHandler.user('add-prop-ref', () => Fullscreen?.addComponentPropRef(t, a));
  }, [e, a, t, l]);
  return jsx(a1, {
    text: E(e, i),
    inPanel: !0,
    isEnabled: !0,
    hideCheck: u,
    isChecked: d,
    onClick: m,
    recordingKey: generateRecordingKey(p, t, 'propDropdown')
  }, e);
}
export const Xn = $$I0;
export const sD = $$v1;