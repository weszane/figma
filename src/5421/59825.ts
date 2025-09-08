import { AppStateTsApi } from "../figma_app/763686";
export function $$i0(e) {
  let t = AppStateTsApi?.codeBuildBindings().openDoNotBumpCodeNodeBuildNumbersScope();
  try {
    return e();
  } finally {
    null != t && AppStateTsApi?.codeBuildBindings().closeDoNotBumpCodeNodeBuildNumbersScope(t);
  }
}
export const a = $$i0;