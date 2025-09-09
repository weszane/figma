import { useSelector } from "react-redux";
export function $$i0() {
  return useSelector(e => e.mirror.appModel.pagesList[0]?.nodeId || e.mirror.appModel.currentPage);
}
export const O = $$i0;
