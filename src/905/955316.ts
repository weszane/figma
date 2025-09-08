import { IgnoreUndoRedoBindings } from "../figma_app/763686";
export function $$$$r0(e) {
  let t = IgnoreUndoRedoBindings?.openIgnoreUndoRedoScope();
  try {
    return e();
  } finally {
    null != t && IgnoreUndoRedoBindings?.closeIgnoreUndoRedoScope(t);
  }
}
export const r = $$$$r0;