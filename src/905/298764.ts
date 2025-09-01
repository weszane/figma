import { vh, td } from "../figma_app/181241";
export let $$r0 = new class {
  constructor() {
    this.ActivityLogsSchemaValidator = vh();
    this.LastEditSchemaValidator = vh();
    this.RecentSchemaValidator = vh();
  }
  getActivityLogs(e) {
    return this.ActivityLogsSchemaValidator.validate(async ({
      xr: t
    }) => {
      let i = td.toAPIParameters(e);
      return await t.get("/api/activity_logs", i);
    });
  }
  getLastEdit(e) {
    return this.LastEditSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/activity_logs/last_edit/${e.orgUserId}`));
  }
  getRecent(e) {
    return this.RecentSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/activity_logs/recent/${e.orgUserId}`, td.toAPIParameters({
      pageSize: e.pageSize
    })));
  }
}();
export const J = $$r0;