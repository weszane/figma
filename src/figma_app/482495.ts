import { createReduxSubscriptionAtomWithState } from "../905/270322";
import { useMemo } from "react";
import { useSelector, useDispatch } from "../vendor/514228";
import { createRemovableAtomFamily, atom } from "../figma_app/27355";
import { Point } from "../905/736624";
import { XE, u1 } from "../figma_app/91703";
let $$l0 = createReduxSubscriptionAtomWithState(e => e.pickerShown);
let $$d1 = createRemovableAtomFamily(e => atom(t => {
  let r = t($$l0);
  return r?.id === e;
}));
export function $$c2() {
  return useSelector(e => e.pickerShown);
}
export function $$u3(e) {
  let t = useDispatch();
  let r = $$c2();
  return useMemo(() => {
    let n = r?.id === e;
    function i() {
      t(XE());
    }
    function a(r) {
      let {
        x,
        y
      } = r;
      t(u1({
        id: e,
        initialX: x,
        initialY: y
      }));
    }
    return {
      showing: n,
      initialPosition: new Point(r?.initialX ?? 0, r?.initialY ?? 0),
      hide: i,
      show: a,
      toggle: function (e) {
        n ? i() : a(e());
      }
    };
  }, [e, t, r]);
}
export const F = $$l0;
export const TJ = $$d1;
export const Xo = $$c2;
export const kG = $$u3;