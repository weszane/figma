import { lu } from "../figma_app/84367";
import { eD } from "../figma_app/876459";
let a = {};
let s = new Map();
export function $$o1(e) {
  return a[e];
}
export function $$l0(e, t, i) {
  if (null == e.property) return null;
  let o = e.property;
  if ("string" != typeof o) {
    let i = s.get(t);
    i && i();
    s.set(t, lu(o, {
      onChangeImmediate: () => {
        if (eD) {
          let i = o.getCopy() === e.propertyValue;
          eD.updateFullscreenMenuState({
            actionCheckedState: {
              [t]: i
            }
          });
        }
      }
    }));
    return {
      isChecked: o.getCopy() === e.propertyValue
    };
  }
  if ("boolean" == typeof e.propertyValue || "string" == typeof e.propertyValue) {
    let n = a[o]?.actions ?? [];
    a[o] = {
      actions: [...n, {
        name: t,
        propertyValue: e.propertyValue
      }]
    };
    return {
      isChecked: i[o] === e.propertyValue
    };
  }
  return null;
}
export const e = $$l0;
export const m = $$o1;