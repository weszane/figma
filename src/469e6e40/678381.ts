import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { l as _$$l } from "../469e6e40/229084";
import { createOptimistThunk } from "../905/350402";
import { showModalHandler, hideModal } from "../905/156213";
import { hZ } from "../figma_app/342125";
let $$c0 = createOptimistThunk((e, {
  orgSamlConfigId: t
}) => {
  XHR.post(`/api/org_saml_config/${t}/scim_api_token`).then(t => {
    e.dispatch(showModalHandler({
      type: _$$l(),
      data: {
        dispatch: e.dispatch,
        provisioningApiToken: t.data.meta.scim_api_token,
        onConfirm: () => {
          e.dispatch(hideModal());
        },
        onCancel: () => {
          e.dispatch(hideModal());
        }
      }
    }));
    e.dispatch(hZ({
      orgSamlConfig: t.data.meta.org_saml_config
    }));
  }).catch(t => {
    e.dispatch(FlashActions.flash(t.data?.message || getI18nString("orgs_middleware.an_error_occurred_while_generating_scim"), 5e3));
    console.error(t);
  });
});
let $$_1 = createOptimistThunk((e, {
  orgSamlConfigId: t
}) => {
  XHR.del(`/api/org_saml_config/${t}/scim_api_token`).then(({
    data: t
  }) => {
    e.dispatch(hZ({
      orgSamlConfig: t.meta
    }));
  }).catch(t => {
    e.dispatch(FlashActions.flash(t.data?.message || getI18nString("orgs_middleware.an_error_occurred_while_revoking_scim"), 5e3));
    console.error(t);
  });
});
export const S = $$c0;
export const V = $$_1;