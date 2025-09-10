import { M } from "../905/151578";
import { getSingletonSceneGraph } from "../905/700578";
import { createTrackedAtom } from "../figma_app/615482";
export function $$s0(e, t, i = {}) {
  let o = createTrackedAtom(e);
  o.onMount = e => {
    let a = new M(getSingletonSceneGraph(), t, i);
    let s = a.subscribe(() => {
      e(a.readValue());
    });
    e(a.readValue());
    return s;
  };
  return o;
}
export const d = $$s0;