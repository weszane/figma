import { createActionCreator } from "../905/73481";
import { FlashActions } from "../905/573154";
import { createOptimistThunk } from "../905/350402";
import { P } from "../905/746303";
let $$o0 = createActionCreator("ORG_SAML_CONFIG_GET");
let $$l1 = createOptimistThunk(e => {
  let t = e.getState().currentUserOrgId;
  P.getOrgSamlConfig({
    orgId: t
  }).then(t => {
    e.dispatch($$d2({
      orgSamlConfig: t.data.meta
    }));
  }).catch(t => {
    e.dispatch(FlashActions.flash(t.data?.message || "An error occurred while fetching org saml config.", 5e3));
    console.error(t);
  });
  e.dispatch($$o0());
});
let $$d2 = createActionCreator("ORG_SAML_CONFIG_SET");
export const E = $$o0;
export const Jt = $$l1;
export const hZ = $$d2;