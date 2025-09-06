import { atom, useAtomValueAndSetter } from "../figma_app/27355";
import { Wh } from "../figma_app/615482";
var $$r0 = (e => (e.INITIAL = "initial", e.BUILDING = "building", e.LOADED = "loaded", e.ERROR = "error", e))($$r0 || {});
let a = Wh(() => atom("initial"));
export function $$l1() {
  let [e, t] = useAtomValueAndSetter(a);
  return {
    componentPreviewState: e,
    setComponentPreviewState: t
  };
}
export const d = $$r0;
export const k = $$l1;