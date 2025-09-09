import { useSelector } from "react-redux";
import { nt } from "../figma_app/687776";
export function $$s0() {
  let e = useSelector(e => e.user?.drafts_folder_id);
  let {
    data,
    status
  } = nt(e);
  return {
    canCreateFigmakeFile: !!data?.canCreateFigmakeFileWithReasons.result,
    status
  };
}
export const b = $$s0;
