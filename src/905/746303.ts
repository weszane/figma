import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.OrgSamlConfigSchemaValidator = createNoOpValidator();
    this.ContactsSchemaValidator = createNoOpValidator();
    this.ExperimentCohortValidator = createNoOpValidator();
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
    }) => await t.get(`/api/org/${e.orgId}/contacts`, APIParameterUtils.toAPIParameters(i)));
  }
  getExperimentCohort(e) {
    let {
      orgId,
      ...i
    } = e;
    return this.ExperimentCohortValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/experiment_cohort`, APIParameterUtils.toAPIParameters(i)));
  }
}();
export const P = $$r0;