import { createNoOpValidator, APIParameterUtils } from "../figma_app/181241";
import { sendWithRetry } from "../905/910117";
export let $$a0 = new class {
  constructor() {
    this.GetExistingProjectsValidator = createNoOpValidator();
    this.GetProjectValidator = createNoOpValidator();
    this.GetConnectionValidator = createNoOpValidator();
    this.GetFileAuthorizedValidator = createNoOpValidator();
    this.CreateProjectValidator = createNoOpValidator();
    this.GetLogsValidator = createNoOpValidator();
    this.DeployEdgeFunctionValidator = createNoOpValidator();
  }
  getExistingProjects(e) {
    return this.GetExistingProjectsValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/integrations/supabase/${e.fileKey}/existing_projects`));
  }
  getProject(e) {
    return this.GetProjectValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/integrations/supabase/${e.fileKey}/project/${e.projectId}`));
  }
  getConnection(e) {
    return this.GetConnectionValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/integrations/supabase/${e.fileKey}/connection`));
  }
  getFileAuthorized(e) {
    return this.GetFileAuthorizedValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/integrations/supabase/${e.fileKey}/authorization`));
  }
  createProject(e) {
    return this.CreateProjectValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/integrations/supabase/${e.fileKey}/create_project`, {
      project_name: e.projectName,
      db_pass: e.dbPass,
      region: e.region
    }));
  }
  getFunctionLogs(e) {
    return this.GetLogsValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/integrations/supabase/${e.fileKey}/edge_functions/${e.functionName}/logs`));
  }
  pauseProject(e) {
    return sendWithRetry.post(`/api/integrations/supabase/${e.fileKey}/project/pause`, {
      project_id: e.projectId
    });
  }
  connectFile(e) {
    return sendWithRetry.post(`/api/integrations/supabase/${e.fileKey}/connect`, {
      supabase_project_id: e.supabaseProjectId,
      supabase_org_id: e.supabaseOrgId
    });
  }
  disconnectFile(e) {
    return sendWithRetry.post(`/api/integrations/supabase/${e.fileKey}/disconnect`);
  }
  deployEdgeFunction(e) {
    return this.DeployEdgeFunctionValidator.validate(async ({
      xr: t
    }) => await t.post(`/api/integrations/supabase/${e.fileKey}/edge_functions/make-server/deploy`, {
      files: e.files
    }));
  }
  createSecret(e) {
    return sendWithRetry.post(`/api/integrations/supabase/${e.fileKey}/secrets`, APIParameterUtils.toAPIParameters({
      secret_name: e.secretName,
      secret_value: e.secretValue
    }));
  }
  deauthorizeFile(e) {
    return sendWithRetry.del(`/api/integrations/supabase/${e.fileKey}/authorization`);
  }
  restoreFile(e) {
    return sendWithRetry.post(`/api/integrations/supabase/${e.fileKey}/project/restore`);
  }
}();
export const R = $$a0;
