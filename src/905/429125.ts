import { jsxs, jsx } from "react/jsx-runtime";
import { useMemo, useCallback } from "react";
import { useDispatch } from "../vendor/514228";
import { J0O, glU } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { getFeatureFlags } from "../905/601108";
import { R as _$$R } from "../905/103090";
import { Pt } from "../figma_app/806412";
import { wv } from "../figma_app/236327";
import { t as _$$t } from "../905/303541";
import { to } from "../905/156213";
import { Um } from "../905/848862";
import { a1 } from "../figma_app/23780";
import { Cf } from "../905/504727";
import { Pp, eM, wh, xb } from "../figma_app/164212";
import { n as _$$n } from "../905/841238";
import { Lg } from "../figma_app/505098";
import { p1, On } from "../figma_app/323320";
export let $$v1 = "APPLY_COMPONENT_PROP_DROPDOWN";
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
  } = _$$R(e => {
    let i = Lg(e);
    return {
      containingProductComponent: i ? e.mirror.sceneGraph.get(i) : null,
      containingComponentDefs: I(e, i, t).filter(t => {
        switch (t.type) {
          case J0O.NUMBER:
            return getFeatureFlags().ds_variable_props_number_def;
          case J0O.SLOT:
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
  let k = Um();
  let R = $$v1.concat("-", t);
  let N = k && k.type === R && k.data.nodeField === t;
  let P = k?.data?.targetRect;
  let O = useCallback(() => {
    Pp(containingProductComponent, !0, eM(t).defaultType, e);
    T(to({
      type: _$$n,
      data: {
        prePopulatedDefaultValue: o,
        propType: eM(t).defaultType,
        refField: t,
        initialX: (P?.left ?? wh) - wh,
        initialY: P?.top ?? 0
      }
    }));
  }, [containingProductComponent, t, e, T, o, P?.left, P?.top]);
  let D = useMemo(() => {
    let e = eM(t).defaultType;
    return _$$t("design_systems.component_properties.no_available_properties", {
      propType: xb(e).toLocaleLowerCase()
    });
  }, [t]);
  return N ? jsxs(Cf, {
    targetRect: P,
    maxWidth: 220,
    lean: "right",
    arrowOffsetFromRectLeft: i,
    leanPadding: 6,
    propagateCloseClick: !0,
    children: [containingComponentDefs.map(e => {
      let i = !!defReferencedBySelection && defReferencedBySelection.explicitDefID === e.explicitDefID;
      return jsx(x, {
        action: "apply-prop",
        nodeField: t,
        defID: e.explicitDefID,
        name: e.name,
        isApplied: i,
        hideCheck: !defReferencedBySelection,
        recordingKey: Pt("applyProp", e.name)
      }, `apply-prop-${e.explicitDefID}`);
    }), !containingComponentDefs.length && getFeatureFlags().dse_slots && jsx(a1, {
      text: D,
      inPanel: !0,
      isEnabled: !1,
      hideCheck: !0,
      isChecked: !1
    }), (!!containingComponentDefs.length || getFeatureFlags().dse_slots) && jsx(wv, {}), jsx(x, {
      action: "create-prop",
      nodeField: t,
      onCreate: O,
      isApplied: !1,
      hideCheck: !defReferencedBySelection,
      recordingKey: "openCreatePropModal"
    }, "create-prop")]
  }) : null;
}
let E = (e, t) => t || ("create-prop" === e ? _$$t("design_systems.component_properties.create_property_menu_option") : "");
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
    "create-prop" === e ? l && l() : l7.user("add-prop-ref", () => glU?.addComponentPropRef(t, a));
  }, [e, a, t, l]);
  return jsx(a1, {
    text: E(e, i),
    inPanel: !0,
    isEnabled: !0,
    hideCheck: u,
    isChecked: d,
    onClick: m,
    recordingKey: Pt(p, t, "propDropdown")
  }, e);
}
export const Xn = $$I0;
export const sD = $$v1;