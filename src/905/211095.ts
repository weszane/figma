import { useMemo, useCallback } from "react";
import { wA } from "../vendor/514228";
import { xb } from "../figma_app/465776";
import { J0O, glU, fOf, YIb } from "../figma_app/763686";
import { l7 } from "../905/189185";
import { l as _$$l } from "../905/745972";
import { R } from "../905/103090";
import { Point } from "../905/736624";
import { vq } from "../905/8732";
import { Ce } from "../905/156213";
import { Y5 } from "../figma_app/455680";
import { i as _$$i } from "../figma_app/741237";
import { sS } from "../figma_app/516028";
import { CG } from "../figma_app/646357";
import { AF } from "../figma_app/889655";
import { PW } from "../figma_app/633080";
import { B_, wh, Rq, T1 } from "../figma_app/164212";
import { vS } from "../figma_app/323320";
import { YH } from "../figma_app/583247";
import { ow, NA, OC } from "../figma_app/150804";
import { QV, Po, zh, zb } from "../figma_app/264776";
export function $$x3({
  propType: e,
  refField: t
}) {
  return R(i => ({
    allStates: ow(i),
    singleSelectedNode: AF(i),
    stateGroup: NA(i),
    stateGroupPropertySortOrder: OC(i),
    dropdownShown: i.dropdownShown,
    openFileKey: sS(i),
    defaultPropName: e === J0O.VARIANT ? YH(i) : vS(i, e, t),
    isInstanceSwapPickerShown: i.instanceSwapPickerShown.isShown
  }));
}
export function $$S2({
  propType: e,
  propName: t,
  defaultValue: i,
  varValue: r
}) {
  return useMemo(() => !t.length || !B_(e, i) && !r, [i, t.length, e, r]);
}
export function $$w1({
  type: e,
  pickerShown: t
}) {
  let {
    windowInnerHeight,
    windowInnerWidth
  } = _$$l();
  return useMemo(() => "create" === e ? new Point(windowInnerWidth / 2 - wh / 2, windowInnerHeight / 3) : new Point(t?.initialX, t?.initialY), [windowInnerHeight, windowInnerWidth, e, t]);
}
export function $$C0({
  propType: e,
  refField: t,
  preferredProductComponents: i
}) {
  let l = function () {
    let e = wA();
    return useCallback(() => {
      e(Ce());
      e(vq());
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
    "" !== (e = QV(e)) && (l7.user("add-variant-property", () => {
      glU && Po(() => allStates?.forEach(n => {
        let r = n.stateInfo.propertyValues;
        r && _$$i(n.symbol.node_id, zh({
          ...r,
          [e]: t
        }, [...i, e]));
      }), glU);
    }), zb("Adding Property to Variant Component", stateGroup?.nodeId), Y5.commit());
  }, [stateGroupPropertySortOrder, allStates, stateGroup]);
  return useCallback(({
    propName: n,
    defaultValue: r,
    varValue: d,
    description: c
  }) => {
    let u = i?.map(e => {
      switch (e.type) {
        case PW.COMPONENT:
          return {
            type: fOf.COMPONENT,
            key: CG(e)
          };
        case PW.STATE_GROUP:
          return {
            type: fOf.STATE_GROUP,
            key: CG(e)
          };
        default:
          return;
      }
    })?.filter(e => !!e?.key) ?? [];
    l7.user("add-prop-def", () => {
      switch (e) {
        case J0O.BOOL:
          glU.addBoolComponentPropDef(n, r, t ?? "", d);
          break;
        case J0O.TEXT:
          glU.addTextComponentPropDef(n, r, t ?? "", d);
          break;
        case J0O.INSTANCE_SWAP:
          glU.addInstanceComponentPropDef(n, r, t ?? "", u);
          break;
        case J0O.VARIANT:
          _(n, r);
          break;
        case J0O.NUMBER:
          if (d) {
            glU.addNumberComponentPropDef(n, r, t ?? "", d);
            break;
          }
          let i = "string" == typeof r;
          if (!i && "number" != typeof r) throw Error("Component props: Default value for Number prop is not a string or number");
          if (i && !Rq(r)) throw Error("Component props: Failed to parse number value");
          glU.addNumberComponentPropDef(n, i ? T1(r) : r, t ?? "", null);
          break;
        case J0O.IMAGE:
          break;
        case J0O.SLOT:
          YIb?.addSlotComponentPropDef({
            name: n,
            preferredValues: u,
            description: c
          });
          break;
        default:
          xb(e);
      }
    });
    l();
  }, [l, t, e, i, _]);
}
export const DD = $$C0;
export const _I = $$w1;
export const c9 = $$S2;
export const uS = $$x3;