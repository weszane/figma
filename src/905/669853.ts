import { F } from '../905/422355';
import { encodeStringToBase64 } from '../905/561685';
import { A } from '../905/920142';
import { td, vh } from '../figma_app/181241';
var o = (e => (e.INSERTION = 'insertion', e.DETACHMENT = 'detachment', e))(o || {});
var l = (e => (e.INSERTION = 'insertion', e.DETACHMENT = 'detachment', e))(l || {});
var $$d1 = (e => (e.INSERTION = 'insertion', e.DETACHMENT = 'detachment', e))($$d1 || {});
function c(e) {
  let t = td.toAPIParameters(e) ?? {};
  let i = Object.keys(t);
  let o = i.map(e => t[e]);
  let l = A().utc().unix();
  let d = ['please_use_the_public_api', l, ...o].join(',');
  let c = F(d).slice(0, 10);
  let u = [l, ...i].join(',');
  return {
    dsaToken: c,
    dsaTokenKey: encodeStringToBase64(u)
  };
}
export let $$u0 = new class {
  constructor() {
    this.LibraryWeeklyInsertionsSchemaValidator = vh();
    this.LibraryTeamUsageSchemaValidator = vh();
    this.LibraryPublishedComponentsUsagesSchemaValidator = vh();
    this.LibraryPublishedComponentsActionsSchemaValidator = vh();
    this.LibraryOverviewSchemaValidator = vh();
    this.LibrariesSchemaValidator = vh();
    this.NumTeamsSchemaValidator = vh();
    this.StateGroupComponentsSchemaValidator = vh();
    this.ComponentFileUsageSchemaValidator = vh();
    this.ComponentSchemaValidator = vh();
    this.StateGroupSchemaValidator = vh();
    this.OrgMigrationStatusSchemaValidator = vh();
    this.LibraryStyleOverviewValidator = vh();
    this.LibraryStyleDetailsValidator = vh();
    this.LibraryVariableOverviewValidator = vh();
    this.LibraryVariableDetailsValidator = vh();
    this.RecordStylesActionValidator = vh();
    this.RecordVariablesActionValidator = vh();
    this.RecordComponentActionValidator = vh();
  }
  getLibraryWeeklyInsertions(e) {
    let t = c(e);
    return this.LibraryWeeklyInsertionsSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/library/${e.fileKey}/weekly_insertions`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getLibraryTeamUsage(e) {
    let t = c(e);
    return this.LibraryTeamUsageSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/library/${e.fileKey}/team_usage`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getLibraryPublishedComponentsUsages(e) {
    let t = {
      start_ts: e.startTs,
      end_ts: e.endTs,
      org_id: e.orgIdForLogging,
      entrypoint: e.entrypointForLogging,
      library_file_key: e.libraryFileKey
    };
    let i = c(t);
    return this.LibraryPublishedComponentsUsagesSchemaValidator.validate(async ({
      xr: n
    }) => await n.get(`/api/dsa/library/${e.libraryFileKey}/published_components_usages`, td.toAPIParameters({
      ...t,
      ...i
    })));
  }
  getLibraryPublishedComponentsActions(e) {
    let t = {
      start_ts: e.startTs,
      end_ts: e.endTs,
      org_id: e.orgIdForLogging,
      entrypoint: e.entrypointForLogging,
      library_file_key: e.libraryFileKey
    };
    let i = c(t);
    return this.LibraryPublishedComponentsActionsSchemaValidator.validate(async ({
      xr: n
    }) => await n.get(`/api/dsa/library/${e.libraryFileKey}/published_components_actions`, td.toAPIParameters({
      ...t,
      ...i
    })));
  }
  getLibraryOverview(e) {
    let t = c(e);
    return this.LibraryOverviewSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/library_overview/${e.libraryFileKey}`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getLibraries(e) {
    let t = c(e);
    return this.LibrariesSchemaValidator.validate(async ({
      xr: i
    }) => await i.get('/api/dsa/libraries', td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getNumTeams(e) {
    let t = c(e);
    return this.NumTeamsSchemaValidator.validate(async ({
      xr: i
    }) => await i.get('/api/dsa/num_teams', td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getStateGroupComponents(e) {
    let t = c(e);
    return this.StateGroupComponentsSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/state_group/${e.stateGroupKey}/components`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getComponentFileUsage(e) {
    let t = c(e);
    return this.ComponentFileUsageSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/component/${e.componentKey}/file_usage`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getComponent(e) {
    let t = c(e);
    return this.ComponentSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/component/${e.componentKey}`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getStateGroup(e) {
    let t = c(e);
    return this.StateGroupSchemaValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/state_group/${e.stateGroupKey}`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getOrgMigrationStatus(e) {
    return this.OrgMigrationStatusSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/dsa/migration_status/${e.orgId}`));
  }
  getLibraryStyleOverview(e) {
    let t = c(e);
    return this.LibraryStyleOverviewValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/library/${e.libraryFileKey}/styles/overview`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getLibraryStyleDetails(e) {
    let t = c(e);
    return this.LibraryStyleDetailsValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/library/${e.libraryFileKey}/styles/${e.styleKey}/details`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getLibraryVariableOverview(e) {
    let t = c(e);
    return this.LibraryVariableOverviewValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/library/${e.libraryFileKey}/variables/overview`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  getLibraryVariableDetails(e) {
    let t = c(e);
    return this.LibraryVariableDetailsValidator.validate(async ({
      xr: i
    }) => await i.get(`/api/dsa/library/${e.libraryFileKey}/variables/${e.variableKey}/details`, td.toAPIParameters({
      ...e,
      ...t
    })));
  }
  recordStylesAction(e) {
    return this.RecordStylesActionValidator.validate(async ({
      xr: t
    }) => await t.post('/api/dsa/record/style/action', td.toAPIParameters(e)));
  }
  recordVariablesAction(e) {
    return this.RecordVariablesActionValidator.validate(async ({
      xr: t
    }) => await t.post('/api/dsa/record/variable/action', td.toAPIParameters(e)));
  }
  recordComponentAction(e) {
    return this.RecordComponentActionValidator.validate(async ({
      xr: t
    }) => await t.post('/api/dsa/record/component/action', td.toAPIParameters(e)));
  }
}();
export const PT = $$u0;
export const Wc = $$d1;