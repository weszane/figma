import { useEffect } from "react";
import { useStore } from "react-redux";
import { debounce } from "../905/915765";
import { isNullish } from "../figma_app/95419";
import { atom, atomStoreManager, useAtomWithSubscription } from "../figma_app/27355";
import { b } from "../905/985254";
let d = {
  x: atom(void 0),
  y: atom(void 0),
  cornerRadius: atom(void 0),
  angle: atom(void 0),
  width: atom(void 0),
  height: atom(void 0),
  fontSize: atom(void 0),
  fontStyle: atom(void 0),
  fontFamily: atom(void 0),
  fillPaints: atom(void 0),
  strokePaints: atom(void 0),
  effects: atom(void 0)
};
let $$c0 = debounce(e => {
  let t = d[e];
  t && atomStoreManager.set(t, e => !e);
}, 200, !0);
export function $$u1(e, t) {
  let r = useStore();
  let a = d[e];
  let c = useAtomWithSubscription(a);
  useEffect(() => {
    !(t && t.current || isNullish(c)) && (r.getState().userFlags.figma_basics_has_modified_properties || r.getState().userFlags.has_modified_properties || r.dispatch(b({
      has_modified_properties: !0
    })));
  }, [t, c, r]);
}
export const a2 = $$c0;
export const yE = $$u1;
