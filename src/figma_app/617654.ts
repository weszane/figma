import { z, Ip } from "../905/239603";
import { vh, YV, td, _5 } from "../figma_app/181241";
import { XHR } from "../905/910117";
import { M4 } from "../905/713695";
import { _ as _$$_, P } from "../905/242077";
import { S } from "../905/697164";
import { pd } from "../figma_app/327564";
import { n as _$$n } from "../905/125157";
import { Wd, Ru, WU } from "../figma_app/35887";
var n;
(e => {
  e.isOrgInvite = function (e) {
    return e.type === Wd.ORG_INVITE;
  };
  e.isOrgUser = function (e) {
    return e.type === Wd.ORG_USER;
  };
  e.isIdpUser = function (e) {
    return e.type === Wd.IDP_USER;
  };
})(n || (n = {}));
let _ = Ru.pick({
  id: !0,
  user: !0,
  type: !0
});
let h = z.discriminatedUnion("type", [WU, S, _$$n]);
let m = z.object({
  users: z.array(z.union([h, _])).optional(),
  cursor: Ip.ignore(),
  totalUserCount: z.number()
});
let $$g0 = new class {
  constructor() {
    this.IdpUsersSchemaValidator = vh();
    this.LicenseGroupsSchemaValidator = vh();
    this.BillingDataSchemaValidator = YV("BillingDataSchemaValidator", pd.nullable(), null);
    this.UpdateOrgSchemaValidator = vh();
    this.TeamsSchemaValidator = vh();
    this.TeamSchemaValidator = vh();
    this.EligibleUpgradesFigjamSchemaValidator = vh();
    this.OrgNameSchemaValidator = vh();
    this.DomainsSchemaValidator = vh();
    this.AdminsSchemaValidator = YV("AdminsSchemaValidator", e => e.array(WU), null, !1);
    this.OrgUsersPaginatedSchemaValidator = YV("OrgUsersPaginatedSchemaValidator", m, null, !1);
    this.OrgUsersPaginatedSchemaValidatorPassthrough = vh();
    this.UserSchemaValidator = YV("UserSchemaValidator", WU, null, !1);
    this.OauthConnectionsSchemaValidator = vh();
    this.ShowVatGstSchemaValidator = vh();
    this.LicenseGroupsMembersCountsSchemaValidator = vh();
    this.WorkspaceTeamsCountsSchemaValidator = vh();
    this.OrgUsersCountSchemaValidator = vh();
    this.OrgUsersFilterCountsSchemaValidator = vh();
    this.OrgTeamsFilterCountsSchemaValidator = vh();
    this.OrgAdminsSchemaValidator = vh();
    this.OrgAdminsQuery = M4.Query({
      fetch: async ({
        orgId: e
      }) => (await this.getOrgAdmins({
        orgId: e
      })).data.meta
    });
    this.OrgTeamsCountSchemaValidator = vh();
    this.SetDomainCaptureSchemaValidator = vh();
    this.EligibleUpgradesSchemaValidator = YV("EligibleUpgradesSchemaValidator", e => e.object({
      eligible_teams: e.array(_$$_),
      eligible_team_users: e.array(P)
    }), null, !1);
  }
  getIdpUsers(e) {
    return this.IdpUsersSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/idp_users`));
  }
  getLicenseGroups(e) {
    return this.LicenseGroupsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.currentOrgId}/license_groups`));
  }
  getBillingData(e) {
    return this.BillingDataSchemaValidator.validate(async ({
      xr: t
    }) => {
      let r = await t.get(`/api/orgs/${e.orgId}/billing_data`);
      return r.data.meta ? r : {
        ...r,
        data: {
          ...r.data,
          meta: null
        }
      };
    });
  }
  updateOrgPaymentMethod(e) {
    return this.BillingDataSchemaValidator.validate(async ({
      xr: t
    }) => {
      let r = await t.put(`/api/orgs/${e.orgId}/billing_data`, e.paymentMethod);
      return r.data.meta ? r : {
        ...r,
        data: {
          ...r.data,
          meta: null
        }
      };
    });
  }
  changeShippingAddress(e) {
    return XHR.put(`/api/orgs/${e.orgId}`, {
      shipping_address: e.shippingAddress
    });
  }
  updateOrgRenewalCounts(e) {
    return this.UpdateOrgSchemaValidator.validate(async ({
      xr: t
    }) => await t.put(`/api/orgs/${e.orgId}/renewal_counts`, {
      renewal_seats: e.unassignedSeatCounts
    }));
  }
  getTeams(e) {
    return this.TeamsSchemaValidator.validate(async ({
      xr: t
    }) => {
      let {
        orgId,
        ...n
      } = e;
      return await t.get(`/api/orgs/${e.orgId}/teams`, td.toAPIParameters(n));
    });
  }
  getTeam(e) {
    return this.TeamSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/teams/${e.teamId}`));
  }
  getEligibleUpgradesFigjam() {
    return this.EligibleUpgradesFigjamSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/orgs/eligible_upgrades_figjam"));
  }
  getOrgName(e) {
    return this.OrgNameSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/org_name`));
  }
  getDomains(e) {
    return this.DomainsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.currentOrgId}/domains`));
  }
  addDomainUsers(e) {
    return XHR.post(`/api/orgs/${e.currentOrgId}/add_domain_users`, {
      user_ids: e.userIds
    });
  }
  getAdmins(e) {
    return this.AdminsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/admins`, td.toAPIParameters({
      include_license_admins: e.includeLicenseAdmins
    })));
  }
  getOrgUsersPaginatedV2(e) {
    let {
      orgId,
      after,
      minimalFields,
      pageSize,
      sort,
      filter,
      ...l
    } = e;
    return this.OrgUsersPaginatedSchemaValidatorPassthrough.validate(async ({
      xr: e
    }) => await e.get(`/api/v2/orgs/${orgId}/org_users`, td.toAPIParameters({
      ...l,
      ...(filter || {}),
      ...(sort || {}),
      minimalFields: minimalFields || void 0,
      pageSize: pageSize || void 0,
      after: after ? JSON.stringify(after) : void 0
    })));
  }
  getUser(e) {
    return this.UserSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/user/${e.userId}`));
  }
  getOauthConnections(e) {
    return this.OauthConnectionsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/oauth_connections`));
  }
  getShowVatGst(e) {
    return this.ShowVatGstSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/show_vat_gst`));
  }
  getLicenseGroupsMembersCounts(e) {
    return this.LicenseGroupsMembersCountsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/license_groups/members/counts`));
  }
  getWorkspaceTeamsCounts(e) {
    return this.WorkspaceTeamsCountsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/workspaces/teams/counts`));
  }
  getOrgUsersCount(e) {
    return this.OrgUsersCountSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/org_users/count`));
  }
  getOrgUsersFilterCounts(e) {
    "" === e.searchQuery && delete e.searchQuery;
    return this.OrgUsersFilterCountsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/org_users/filter_counts`, td.toAPIParameters({
      searchQuery: e.searchQuery,
      licenseGroupId: e.licenseGroupId,
      workspaceId: e.workspaceId,
      permission: e.permission,
      seatType: e.seatType
    })));
  }
  getOrgTeamsFilterCounts(e) {
    let {
      orgId,
      searchQuery,
      orgAccess,
      teamsWithoutOwners,
      teamsMemberOf,
      workspaceId,
      sortBy,
      sortOrder
    } = e;
    return this.OrgTeamsFilterCountsSchemaValidator.validate(async ({
      xr: e
    }) => {
      let d = {
        search_query: searchQuery,
        org_access: orgAccess || void 0,
        teams_without_owners: teamsWithoutOwners ? String(teamsWithoutOwners) : void 0,
        teams_member_of: void 0 !== teamsMemberOf ? JSON.stringify(teamsMemberOf) : void 0,
        workspace_id: workspaceId || void 0,
        sort_by: sortBy,
        order_by: sortOrder
      };
      return await e.get(`/api/orgs/${orgId}/team_counts`, d);
    });
  }
  getOrgAdmins(e) {
    return this.OrgAdminsSchemaValidator.validate(async ({
      xr: t
    }) => await t.get(`/api/orgs/${e.orgId}/org_admins`));
  }
  apiAutogenControls(e) {
    let {
      orgId,
      autogen_password_controls
    } = e;
    return XHR.put(`/api/orgs/${orgId}`, {
      autogen_password_controls
    });
  }
  delWorkspaces(e) {
    return XHR.del(`/api/orgs/${e.orgId}/workspaces`, {
      workspace_ids: e.workspaceIds
    });
  }
  validateTrial(e) {
    return XHR.post(`/api/orgs/${e.orgId}/validate_trial`, {
      billing_trial_id: e.billingTrialId
    });
  }
  selfAssignWorkspace(e) {
    return XHR.post(`/api/orgs/${e.orgId}/self_assign_workspace`, {
      workspace_id: e.workspaceId
    });
  }
  postDevModeOptInTermsAccepted(e) {
    return XHR.post(`/api/orgs/${e.orgId}/dev_mode_terms_accepted`);
  }
  putToggleSlidesDisabled(e) {
    return XHR.put(`/api/orgs/${e.orgId}/toggle_slides_disabled`, {
      slides_disabled: e.slidesDisabled
    });
  }
  putToggleSitesPublishingDisabled(e) {
    return XHR.put(`/api/orgs/${e.orgId}/toggle_sites_publishing_disabled`, {
      sites_publishing_disabled: e.sitesPublishingDisabled
    });
  }
  putToggleSupabaseDisabled(e) {
    return XHR.put(`/api/orgs/${e.orgId}/toggle_supabase_disabled`, {
      supabase_disabled: e.supabaseDisabled
    });
  }
  updateAiDataSharing(e) {
    return XHR.put(`/api/orgs/${e.orgId}/ai_data_sharing`, {
      enabled: e.enabled
    });
  }
  getOrgTeamsCount(e) {
    return this.OrgTeamsCountSchemaValidator.validate(({
      xr: t
    }) => t.get(`/api/orgs/${e.orgId}/teams_count`));
  }
  setDomainCapture(e) {
    return this.SetDomainCaptureSchemaValidator.validate(({
      xr: t
    }) => t.put(`/api/orgs/${e.org_id}/domain_capture`, {
      enable: !0
    }));
  }
  getEligibleUpgrades() {
    return this.EligibleUpgradesSchemaValidator.validate(async ({
      xr: e
    }) => await e.get("/api/orgs/eligible_upgrade_data"));
  }
  scheduleCancellation(e) {
    return _5.validate(async ({
      xr: t
    }) => await t.post(`/api/orgs/${e.orgId}/scheduled_cancellation`));
  }
  unscheduleCancellation(e) {
    return _5.validate(async ({
      xr: t
    }) => await t.del(`/api/orgs/${e.orgId}/scheduled_cancellation`));
  }
}();
export { Wd } from "../figma_app/35887";
export const Eh = $$g0;