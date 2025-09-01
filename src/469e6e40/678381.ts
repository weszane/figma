import { XHR } from "../905/910117";
import { s as _$$s } from "../905/573154";
import { t as _$$t } from "../905/303541";
import { l as _$$l } from "../469e6e40/229084";
import { nF } from "../905/350402";
import { to, Ce } from "../905/156213";
import { hZ } from "../figma_app/342125";
let $$c0 = nF((e, {
  orgSamlConfigId: t
}) => {
  XHR.post(`/api/org_saml_config/${t}/scim_api_token`).then(t => {
    e.dispatch(to({
      type: _$$l(),
      data: {
        dispatch: e.dispatch,
        provisioningApiToken: t.data.meta.scim_api_token,
        onConfirm: () => {
          e.dispatch(Ce());
        },
        onCancel: () => {
          e.dispatch(Ce());
        }
      }
    }));
    e.dispatch(hZ({
      orgSamlConfig: t.data.meta.org_saml_config
    }));
  }).catch(t => {
    e.dispatch(_$$s.flash(t.data?.message || _$$t("orgs_middleware.an_error_occurred_while_generating_scim"), 5e3));
    console.error(t);
  });
});
let $$_1 = nF((e, {
  orgSamlConfigId: t
}) => {
  XHR.del(`/api/org_saml_config/${t}/scim_api_token`).then(({
    data: t
  }) => {
    e.dispatch(hZ({
      orgSamlConfig: t.meta
    }));
  }).catch(t => {
    e.dispatch(_$$s.flash(t.data?.message || _$$t("orgs_middleware.an_error_occurred_while_revoking_scim"), 5e3));
    console.error(t);
  });
});
export const S = $$c0;
export const V = $$_1; 
