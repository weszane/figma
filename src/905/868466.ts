import { useAtomValueAndSetter } from "../figma_app/27355";
import { f } from "../figma_app/109947";
export function $$a0() {
  let [e] = useAtomValueAndSetter(f);
  let t = e?.current?.getBoundingClientRect();
  return t?.width;
}
export const x = $$a0;