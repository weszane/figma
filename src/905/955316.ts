import { jot } from "../figma_app/763686";
export function $$$$r0(e) {
  let t = jot?.openIgnoreUndoRedoScope();
  try {
    return e();
  } finally {
    null != t && jot?.closeIgnoreUndoRedoScope(t);
  }
}
export const r = $$$$r0;