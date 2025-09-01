import { f1$ } from "../figma_app/763686";
export function $$l0(e) {
  let t = f1$?.openWriteInReadonlyScope();
  try {
    return e();
  } finally {
    null != t && f1$?.closeWriteInReadonlyScope(t);
  }
}
export const n = $$l0;