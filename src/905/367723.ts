import { useSelector } from "react-redux";
import { fi } from "../figma_app/913823";
import { selectCurrentFile } from "../figma_app/516028";
import { isLoaded, useIsLoading } from "../905/18797";
import { generateRetrievingSubscribedComponentsKey } from "../905/92359";
export function $$l0() {
  let e = useSelector(e => e.fileVersion);
  let t = useSelector(e => e.loadingState);
  let i = selectCurrentFile();
  let l = i && null != e && generateRetrievingSubscribedComponentsKey(i.key) || null;
  let d = !(null != l && isLoaded(t, l));
  let c = useIsLoading(fi);
  return d || c;
}
export const D = $$l0;