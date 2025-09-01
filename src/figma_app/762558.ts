import { useEffect } from "react";
import { Pj } from "../vendor/514228";
import { debounce } from "../905/915765";
import { isNullish } from "../figma_app/95419";
import { eU, zl, md } from "../figma_app/27355";
import { b } from "../905/985254";
let d = {
  x: eU(void 0),
  y: eU(void 0),
  cornerRadius: eU(void 0),
  angle: eU(void 0),
  width: eU(void 0),
  height: eU(void 0),
  fontSize: eU(void 0),
  fontStyle: eU(void 0),
  fontFamily: eU(void 0),
  fillPaints: eU(void 0),
  strokePaints: eU(void 0),
  effects: eU(void 0)
};
let $$c0 = debounce(e => {
  let t = d[e];
  t && zl.set(t, e => !e);
}, 200, !0);
export function $$u1(e, t) {
  let r = Pj();
  let a = d[e];
  let c = md(a);
  useEffect(() => {
    !(t && t.current || isNullish(c)) && (r.getState().userFlags.figma_basics_has_modified_properties || r.getState().userFlags.has_modified_properties || r.dispatch(b({
      has_modified_properties: !0
    })));
  }, [t, c, r]);
}
export const a2 = $$c0;
export const yE = $$u1;