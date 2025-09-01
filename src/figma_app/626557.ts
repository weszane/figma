import { useMemo } from "react";
import { Fk } from "../figma_app/167249";
import { Qf } from "../figma_app/97696";
export function $$s0(e) {
  return Fk((e, t) => t?.chatMessages, e);
}
export function $$o1(e) {
  let t = $$s0(e);
  return useMemo(() => Qf(t), [t]);
}
export const E = $$s0;
export const H = $$o1;