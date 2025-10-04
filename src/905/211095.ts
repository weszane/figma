import { useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { throwTypeError } from "../figma_app/465776";
import { ComponentPropType, Fullscreen, ComponentType, DesignSystemsTsApi } from "../figma_app/763686";
import { permissionScopeHandler } from "../905/189185";
import { useWindowDimensions } from "../905/745972";
import { selectWithShallowEqual } from "../905/103090";
import { Point } from "../905/736624";
import { hideInstanceSwapPicker } from "../905/8732";
import { hideModal } from "../905/156213";
import { fullscreenValue } from "../figma_app/455680";
import { renameNode } from "../figma_app/741237";
import { selectOpenFileKey } from "../figma_app/516028";
import { getAssetKeyForPublish } from "../figma_app/646357";
import { selectSingleSelectedNode } from "../figma_app/889655";
import { PrimaryWorkflowEnum } from "../figma_app/633080";
import { isComponentPropValueValid, DROPDOWN_HEIGHT, isValidNumberString, stringToFloat } from "../figma_app/164212";
import { vS } from "../figma_app/323320";
import { generateDefaultVariantPropertyName } from "../figma_app/583247";
import { ow, NA, OC } from "../figma_app/150804";
import { sanitizePropertyName, withDeferredVariantPropDefBackfill, formatPropertyValues, trackStateGroupAnalytics } from "../figma_app/264776";
export function $$x3({
  propType: e,
  refField: t
}) {
  return selectWithShallowEqual(i => ({
    allStates: ow(i),
    singleSelectedNode: selectSingleSelectedNode(i),
    stateGroup: NA(i),
    stateGroupPropertySortOrder: OC(i),
    dropdownShown: i.dropdownShown,
    openFileKey: selectOpenFileKey(i),
    defaultPropName: e === ComponentPropType.VARIANT ? generateDefaultVariantPropertyName(i) : vS(i, e, t),
    isInstanceSwapPickerShown: i.instanceSwapPickerShown.isShown
  }));
}
export function $$S2({
  propType: e,
  propName: t,
  defaultValue: i,
  varValue: r
}) {
  return useMemo(() => !t.length || !isComponentPropValueValid(e, i) && !r, [i, t.length, e, r]);
}
export function $$w1({
  type: e,
  pickerShown: t
}) {
  let {
    windowInnerHeight,
    windowInnerWidth
  } = useWindowDimensions();
  return useMemo(() => "create" === e ? new Point(windowInnerWidth / 2 - DROPDOWN_HEIGHT / 2, windowInnerHeight / 3) : new Point(t?.initialX, t?.initialY), [windowInnerHeight, windowInnerWidth, e, t]);
}
export function $$C0({
  propType: e,
  refField: t,
  preferredProductComponents: i
}) {
  let l = function () {
    let e = useDispatch();
    return useCallback(() => {
      e(hideModal());
      e(hideInstanceSwapPicker());
    }, [e]);
  }();
  let {
    allStates,
    stateGroup,
    stateGroupPropertySortOrder
  } = $$x3({
    refField: t,
    propType: e
  });
  let _ = useCallback((e, t) => {
    let i = stateGroupPropertySortOrder || [];
    "" !== (e = sanitizePropertyName(e)) && (permissionScopeHandler.user("add-variant-property", () => {
      Fullscreen && withDeferredVariantPropDefBackfill(() => allStates?.forEach(n => {
        let r = n.stateInfo.propertyValues;
        r && renameNode(n.symbol.node_id, formatPropertyValues({
          ...r,
          [e]: t
        }, [...i, e]));
      }), Fullscreen);
    }), trackStateGroupAnalytics("Adding Property to Variant Component", stateGroup?.nodeId), fullscreenValue.commit());
  }, [stateGroupPropertySortOrder, allStates, stateGroup]);
  return useCallback(({
    propName: n,
    defaultValue: r,
    varValue: d,
    description: c
  }) => {
    let u = i?.map(e => {
      switch (e.type) {
        case PrimaryWorkflowEnum.COMPONENT:
          return {
            type: ComponentType.COMPONENT,
            key: getAssetKeyForPublish(e)
          };
        case PrimaryWorkflowEnum.STATE_GROUP:
          return {
            type: ComponentType.STATE_GROUP,
            key: getAssetKeyForPublish(e)
          };
        default:
          return;
      }
    })?.filter(e => !!e?.key) ?? [];
    permissionScopeHandler.user("add-prop-def", () => {
      switch (e) {
        case ComponentPropType.BOOL:
          Fullscreen.addBoolComponentPropDef(n, r, t ?? "", d);
          break;
        case ComponentPropType.TEXT:
          Fullscreen.addTextComponentPropDef(n, r, t ?? "", d);
          break;
        case ComponentPropType.INSTANCE_SWAP:
          Fullscreen.addInstanceComponentPropDef(n, r, t ?? "", u);
          break;
        case ComponentPropType.VARIANT:
          _(n, r);
          break;
        case ComponentPropType.NUMBER:
          if (d) {
            Fullscreen.addNumberComponentPropDef(n, r, t ?? "", d);
            break;
          }
          let i = "string" == typeof r;
          if (!i && "number" != typeof r) throw Error("Component props: Default value for Number prop is not a string or number");
          if (i && !isValidNumberString(r)) throw Error("Component props: Failed to parse number value");
          Fullscreen.addNumberComponentPropDef(n, i ? stringToFloat(r) : r, t ?? "", null);
          break;
        case ComponentPropType.IMAGE:
          break;
        case ComponentPropType.SLOT:
          DesignSystemsTsApi?.addSlotComponentPropDef({
            name: n,
            preferredValues: u,
            description: c
          });
          break;
        default:
          throwTypeError(e);
      }
    });
    l();
  }, [l, t, e, i, _]);
}
export const DD = $$C0;
export const _I = $$w1;
export const c9 = $$S2;
export const uS = $$x3;