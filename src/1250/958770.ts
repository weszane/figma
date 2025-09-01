import { vh, td } from "../figma_app/181241";
var $$r0 = (e => (e.Connected = "connected", e.NotConnected = "not_connected", e))($$r0 || {});
var i = (e => (e.Started = "started", e.Requested = "requested", e.Complete = "complete", e))(i || {});
export let $$o1 = new class {
  constructor() {
    this.GithubAppSetupSchemaValidator = vh();
    this.OrgGithubInstallationsSchemaValidator = vh();
    this.GithubRepositoriesSchemaValidator = vh();
  }
  startGithubAppSetup(e) {
    return this.GithubAppSetupSchemaValidator.validate(async ({
      xr: t
    }) => await t.post("/api/integrations/github-app/setup", td.toAPIParameters({
      plan_type: e.plan_type,
      plan_parent_id: e.plan_parent_id,
      request_context: e.request_context,
      request_context_id: e.request_context_id
    })));
  }
  getOrgGithubInstallations(e) {
    return this.OrgGithubInstallationsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/integrations/github-app/plans/${e.plan_type}/${e.parent_plan_id}/github-installations`, td.toAPIParameters(e)));
  }
  getGithubRepositories(e) {
    return this.GithubRepositoriesSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/integrations/github-app/plans/${e.plan_type}/${e.plan_parent_id}/github-installations/repositories`, td.toAPIParameters(e)));
  }
}();
export const K8 = $$r0;
export const QV = $$o1;