import { vh } from "../figma_app/181241";
export let $$s0 = new class {
  constructor() {
    this.PostOrgSamlConfigSchemaValidator = vh();
    this.postOrgSamlConfig = e => this.PostOrgSamlConfigSchemaValidator.validate(({
      xr: t
    }) => t.post(`/api/org/${e.org_id}/org_saml_config`));
    this.DeleteOrgSamlConfigSchemaValidator = vh();
    this.deleteOrgSamlConfig = e => this.DeleteOrgSamlConfigSchemaValidator.validate(({
      xr: t
    }) => t.del(`/api/org_saml_config/${e.org_saml_config_id}`));
    this.PutOrgSamlConfigSchemaValidator = vh();
    this.putOrgSamlConfig = e => this.PutOrgSamlConfigSchemaValidator.validate(({
      xr: t
    }) => t.put(`/api/org_saml_config/${e.org_saml_config_id}`, {
      certificate: e.certificate,
      idp_entity_id: e.idp_entity_id,
      idp_name: e.idp_name,
      metadata_url: e.metadata_url,
      org_id: e.org_id,
      sso_target_url: e.sso_target_url,
      domain_mappings: e.domain_mappings,
      domains_to_unmap: e.domains_to_unmap
    }));
  }
}();
export const a = $$s0;