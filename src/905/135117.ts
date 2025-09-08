import { DSACppBindings } from "../figma_app/763686";
export function $$r0(e, t, i) {
  DSACppBindings.startDSAAction(e, t);
  try {
    i();
  } finally {
    DSACppBindings.endDSAAction();
  }
}
export const f = $$r0;