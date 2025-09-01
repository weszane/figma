import { Ez5 } from "../figma_app/763686";
export function $$i0(e) {
  let t = Ez5?.codeBuildBindings().openDoNotBumpCodeNodeBuildNumbersScope();
  try {
    return e();
  } finally {
    null != t && Ez5?.codeBuildBindings().closeDoNotBumpCodeNodeBuildNumbersScope(t);
  }
}
export const a = $$i0;