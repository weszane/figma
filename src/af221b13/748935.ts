import { useSelector } from "react-redux";
import { useProjectFileCreationPermissions } from "../figma_app/687776";
export function $$s0() {
  let e = useSelector(e => e.user?.drafts_folder_id);
  let {
    data,
    status
  } = useProjectFileCreationPermissions(e);
  return {
    canCreateFigmakeFile: !!data?.canCreateFigmakeFileWithReasons.result,
    status
  };
}
export const b = $$s0;