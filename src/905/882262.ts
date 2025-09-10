import { n as _$$n } from "src/905/347702";
import { useSelector } from "react-redux";
import { selectOpenFile } from "src/figma_app/516028";
export let $$a1 = _$$n(e => {
  let t = selectOpenFile({
    openFile: e.openFile
  });
  return !!t?.parentOrgId;
});
export function $$s0() {
  return useSelector($$a1);
}
export const D = $$s0;
export const o = $$a1;
