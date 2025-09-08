import { WriteInReadonlyScopeBindings } from "../figma_app/763686";
export function $$i0(e) {
  let t = WriteInReadonlyScopeBindings?.openWriteInReadonlyScope();
  try {
    return e();
  } finally {
    null != t && WriteInReadonlyScopeBindings?.closeWriteInReadonlyScope(t);
  }
}
export const n = $$i0;