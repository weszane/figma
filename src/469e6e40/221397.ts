import { createNoOpValidator } from "../figma_app/181241";
export let $$s0 = new class {
  constructor() {
    this.BASE_ROUTE = "/api/org_domains";
    this.PostOrgDomainSchemaValidator = createNoOpValidator();
    this.postOrgDomains = e => this.PostOrgDomainSchemaValidator.validate(({
      xr: t
    }) => t.post(this.BASE_ROUTE, {
      ...e
    }));
    this.RequestDnsTokenSchemaValidator = createNoOpValidator();
    this.requestDnsToken = e => this.RequestDnsTokenSchemaValidator.validate(({
      xr: t
    }) => t.post(`${this.BASE_ROUTE}/dns_record`, {
      ...e
    }));
    this.VerifyOrgDomainsSchemaValidator = createNoOpValidator();
    this.verifyOrgDomains = e => this.VerifyOrgDomainsSchemaValidator.validate(({
      xr: t
    }) => t.post(`${this.BASE_ROUTE}/verify`, {
      ...e
    }));
    this.DeleteOrgDomainSchemaValidator = createNoOpValidator();
    this.removeOrgDomains = e => this.DeleteOrgDomainSchemaValidator.validate(({
      xr: t
    }) => t.del("/api/org_domains", {
      ...e
    }));
    this.UnclaimedDomainUserCountsSchemaValidator = createNoOpValidator();
    this.getUnclaimedDomainUserCounts = e => this.UnclaimedDomainUserCountsSchemaValidator.validate(({
      xr: t
    }) => t.get("/api/org_domains/unclaimed_user_counts", {
      ...e
    }));
    this.GetOrgDomainMemberCountsSchemaValidator = createNoOpValidator();
    this.getOrgDomainMemberCounts = e => this.GetOrgDomainMemberCountsSchemaValidator.validate(({
      xr: t
    }) => t.get(`/api/orgs/${e.org_id}/domains/member_counts`));
  }
}();
export const z = $$s0;