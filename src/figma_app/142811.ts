import { useSelector } from "../vendor/514228";
export function $$i0() {
  return useSelector(e => e.mirror.appModel.pagesList[0]?.nodeId || e.mirror.appModel.currentPage);
}
export const O = $$i0;