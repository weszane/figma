import { useMemo } from "react";
import { Qt, i8 } from "../figma_app/300692";
export function $$a0(e, t) {
  return useMemo(() => t ? Object.values(Qt(i8(Object.values(e)), t)) : [], [t, e]);
}
export const S = $$a0;