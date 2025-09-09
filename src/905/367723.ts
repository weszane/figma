import { useSelector } from "react-redux";
import { fi } from "../figma_app/913823";
import { selectCurrentFile } from "../figma_app/516028";
import { D2, oh } from "../905/18797";
import { yD } from "../905/92359";
export function $$l0() {
  let e = useSelector(e => e.fileVersion);
  let t = useSelector(e => e.loadingState);
  let i = selectCurrentFile();
  let l = i && null != e && yD(i.key) || null;
  let d = !(null != l && D2(t, l));
  let c = oh(fi);
  return d || c;
}
export const D = $$l0;