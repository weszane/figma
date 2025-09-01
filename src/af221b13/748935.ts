import { d4 } from "../vendor/514228";
import { nt } from "../figma_app/687776";
export function $$s0() {
  let e = d4(e => e.user?.drafts_folder_id);
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