import { oUq } from "../figma_app/763686";
export function $$r0(e, t, i) {
  oUq.startDSAAction(e, t);
  try {
    i();
  } finally {
    oUq.endDSAAction();
  }
}
export const f = $$r0;