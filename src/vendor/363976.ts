import { V } from "../vendor/806037";
import { useContext } from "react";
import { M } from "../vendor/786121";
export function $$a0() {
  let {
    dragDropManager
  } = useContext(M);
  V(null != dragDropManager, "Expected drag drop context");
  return dragDropManager;
}
export const u = $$a0;