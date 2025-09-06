import { useAtomWithSubscription } from "../figma_app/27355";
import { hO } from "../figma_app/545293";
import { q5 } from "../figma_app/516028";
export let $$s0 = function () {
  let e = q5();
  let t = useAtomWithSubscription(hO.isFragmentSearchAtom);
  return {
    restrictOrgId: t ? e?.parentOrgId : null,
    restrictTeamId: t && !e?.parentOrgId ? e?.teamId : null
  };
};
export const A = $$s0;