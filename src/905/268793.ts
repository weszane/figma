import { getFeatureFlags } from "../905/601108";
import { tv, um, lQ } from "../905/985374";
import { FPlanNameType } from "../figma_app/191312";
import { M4 } from "../905/713695";
import { vh, td } from "../figma_app/181241";
let l = new class {
  constructor() {
    this.TotalActiveUsersSchemaValidator = vh();
    this.ActiveUserAvatarsSchemaValidator = vh();
  }
  getTotalActiveUsers(e) {
    return this.TotalActiveUsersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/social_proof/${tv[e.seatType]}/${e.planType}/${e.planParentId}/total_active_users`, td.toAPIParameters({
      license_type: e.licenseType,
      days: e.days
    })));
  }
  getActiveUserAvatars(e) {
    return this.ActiveUserAvatarsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/social_proof/${tv[e.seatType]}/${e.planType}/${e.planParentId}/active_user_avatars`, td.toAPIParameters({
      license_type: e.licenseType,
      job_title: e.jobTitle,
      num_avatars_requested: e.numAvatarsRequested,
      days: e.days
    })));
  }
}();
let $$d2 = M4.Query({
  fetch: async e => (await l.getTotalActiveUsers({
    seatType: e.seatType,
    planType: e.planType,
    planParentId: e.planParentId,
    licenseType: e.licenseType,
    days: e.days
  })).data.meta,
  enabled: e => !!getFeatureFlags().is_extended_social_proof_enabled && !!e.planParentId && u(e.seatType),
  key: "social_proof_total_active_users"
});
let $$c1 = M4.Query({
  fetch: async e => (await l.getActiveUserAvatars({
    seatType: e.seatType,
    planType: e.planData.planType,
    planParentId: e.planData.planParentId,
    licenseType: e.licenseType,
    jobTitle: e.jobTitle ?? "",
    numAvatarsRequested: e.numAvatarsRequested,
    days: e.days
  })).data.meta.active_user_avatars,
  key: "social_proof_active_user_avatars"
});
function u(e) {
  return um.includes(e);
}
export function $$p0(e) {
  var t;
  var i;
  return !e.isOrgGuest && u(e.seatType) && (t = e.planTier, [FPlanNameType.PRO, FPlanNameType.ORG, FPlanNameType.ENTERPRISE].includes(t)) && (i = {
    planType: e.planType,
    totalActiveUsers: e.totalActiveUsers
  }).totalActiveUsers >= lQ[i.planType];
}
export const Cx = $$p0;
export const B7 = $$c1;
export const Ki = $$d2;