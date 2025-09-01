import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.OrgSamlConfigSchemaValidator = vh();
    this.ContactsSchemaValidator = vh();
    this.ExperimentCohortValidator = vh();
  }
  getOrgSamlConfig(e) {
    return this.OrgSamlConfigSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/org/${e.orgId}/org_saml_config`));
  }
  getContacts(e) {
    let {
      orgId,
      ...i
    } = e;
    return this.ContactsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/org/${e.orgId}/contacts`, td.toAPIParameters(i)));
  }
  getExperimentCohort(e) {
    let {
      orgId,
      ...i
    } = e;
    return this.ExperimentCohortValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/experiment_cohort`, td.toAPIParameters(i)));
  }
}();
export const P = $$r0;