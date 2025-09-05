import { n as _$$n } from "../905/347702";
import { useSelector } from "../vendor/514228";
import { tB } from "../figma_app/516028";
export let $$a1 = _$$n(e => {
  let t = tB({
    openFile: e.openFile
  });
  return !!t?.parentOrgId;
});
export function $$s0() {
  return useSelector($$a1);
}
export const D = $$s0;
export const o = $$a1;