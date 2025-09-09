import { useSelector } from "react-redux";
import { getFeatureFlags } from "../905/601108";
import { nt } from "../figma_app/687776";
export function $$s0() {
  let e = getFeatureFlags().bake_ds_import_plan_enabled;
  let t = useSelector(e => e.user?.drafts_folder_id);
  let {
    data,
    status
  } = nt(e ? t : null);
  let o = data?.canCreateFigmakeFileWithReasons.result;
  return !!e && !!o;
}
export const z = $$s0;
