import { getSingletonSceneGraph } from "../905/700578";
export let $$n1;
class a {
  triggerChange() {
    getSingletonSceneGraph().triggerChange();
  }
  triggerDelete(e) {
    getSingletonSceneGraph().triggerDeleteCallbacks(e);
  }
}
export function $$s0() {
  $$n1 = new a();
}
export const Io = $$s0;
export const uo = $$n1;