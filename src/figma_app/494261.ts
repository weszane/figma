import { trackEventAnalytics } from "../905/449184";
import { getCurrentLiveGraphClient } from "../905/761735";
import { sendWithRetry } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { Y } from "../figma_app/887000";
import { createOptimistThunk } from "../905/350402";
import { showModalHandler } from "../905/156213";
import { putOrgs, patchOrgs } from "../905/395917";
import { vr } from "../figma_app/475472";
import { AccessLevelEnum } from "../905/557142";
import { c as _$$c } from "../figma_app/52714";
import { organizationAPIService } from "../figma_app/617654";
import { bE } from "../905/98702";
let $$y13 = "team_join_request_submitted";
let $$b15 = "permission_request_submitted";
let $$T7 = createOptimistThunk(async (e, t) => {
  let r = {
    team_id: t.teamId,
    level: t.level,
    message: t.message
  };
  let i = e.getState().user?.id;
  let d = e.getState().roles.byTeamId;
  let c = i && d && d[t.teamId] ? d[t.teamId][i]?.level : null;
  let u = {
    level: t.level,
    team_id: t.teamId,
    team_type: t.teamOrgAccess,
    source: t.source,
    folder_id: t.folderId
  };
  t.actionType === $$b15 ? trackEventAnalytics($$b15, u) : trackEventAnalytics($$y13, u);
  await sendWithRetry.post("/api/team_role_requests", r).then(({
    data: r
  }) => {
    let n = r.meta;
    n.status === _$$c.APPROVED ? e.dispatch(vr({
      teamId: n.team_id
    })) : t.level === AccessLevelEnum.EDITOR && c === AccessLevelEnum.VIEWER ? e.dispatch(FlashActions.flash(getI18nString("org_actions.you_ve_requested_to_edit_files_in_this_team"))) : e.dispatch(FlashActions.flash(getI18nString("org_actions.you_ve_requested_to_join_this_team")));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t.message) || getI18nString("org_actions.an_error_occurred")));
  });
});
let $$I16 = createOptimistThunk((e, t) => {
  sendWithRetry.del(`/api/team_role_requests/${t.requestId}`).then(t => {
    e.dispatch(FlashActions.flash(getI18nString("org_actions.request_withdrawn")));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t.message) || getI18nString("org_actions.an_error_occurred")));
  });
});
let $$S2 = createOptimistThunk((e, t) => {
  sendWithRetry.post(`/api/team_role_requests/${t.requestId}/approve`, {
    level: `${t.level}`
  }).then(({
    data: t
  }) => {
    e.dispatch(FlashActions.flash(getI18nString("org_actions.request_approved")));
    e.dispatch(bE({
      role: t.meta
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred")));
  });
});
let $$v10 = createOptimistThunk((e, t) => {
  sendWithRetry.post(`/team_role_requests/${t.requestId}/deny`).then(t => {
    e.dispatch(FlashActions.flash(getI18nString("org_actions.request_denied")));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t.message) || getI18nString("org_actions.an_error_occurred")));
  });
});
let $$A19 = createOptimistThunk((e, {
  orgId: t
}) => {
  sendWithRetry.put(`/api/orgs/${t}`, {
    public_plugins_allowed: !0
  }).then(({
    data: t
  }) => {
    e.dispatch(putOrgs({
      org: t.meta
    }));
  });
});
let $$x22 = createOptimistThunk((e, {
  payload: t,
  successMessage: r
}) => {
  let n = e.getState().currentUserOrgId;
  sendWithRetry.put(`/api/orgs/${n}`, t).then(t => {
    e.dispatch(putOrgs({
      org: t.data.meta
    }));
    r && e.dispatch(VisualBellActions.enqueue({
      message: r,
      type: "orgs.update",
      error: !1
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
});
let $$N11 = createOptimistThunk((e, {
  orgId: t,
  googleSsoOnly: r,
  mfaRequired: n
}) => {
  sendWithRetry.put(`/api/orgs/${t}`, {
    google_sso_only: r,
    mfa_required: n
  }).then(({
    data: t
  }) => {
    e.dispatch(FlashActions.flash(getI18nString("org_actions.updated_authentication_settings")));
    e.dispatch(putOrgs({
      org: t.meta
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
});
let $$C14 = createOptimistThunk((e, {
  orgId: t,
  samlSsoOnly: r,
  mfaRequired: n
}) => {
  sendWithRetry.put(`/api/orgs/${t}`, {
    saml_sso_only: r,
    mfa_required: n
  }).then(t => {
    e.dispatch(FlashActions.flash(getI18nString("org_actions.updated_authentication_settings")));
    e.dispatch(putOrgs({
      org: t.data.meta
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
});
let $$w4 = createOptimistThunk((e, {
  orgId: t,
  attribute: r
}) => {
  sendWithRetry.put(`/api/orgs/${t}`, {
    featured_scim_metadata: r
  }).then(t => {
    e.dispatch(putOrgs({
      org: t.data.meta
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
});
export function $$O1(e) {
  let {
    org,
    dispatch
  } = e;
  let n = async (e, n, i) => {
    let s = !1;
    await sendWithRetry.put(`/api/orgs/${org.id}`, {
      vat_gst_id: e,
      regional_vat_gst_id: i
    }).then(() => {
      s = !0;
      dispatch(patchOrgs({
        id: org.id,
        vat_gst_id: e
      }));
    }).catch(e => {
      n(e.toString());
    });
    return s;
  };
  dispatch(showModalHandler({
    type: Y(),
    data: {
      org,
      updateVatGstId: n
    }
  }));
}
let $$R12 = createOptimistThunk((e, {
  onFailure: t,
  onSuccess: r,
  orgId: n,
  timeoutDurationInSecs: i
}) => {
  sendWithRetry.put(`/api/orgs/${n}`, {
    idle_timeout_duration_in_secs: i
  }).then(t => {
    e.dispatch(FlashActions.flash(getI18nString("org_actions.updated_idle_session_timeout")));
    e.dispatch(putOrgs({
      org: t.data.meta
    }));
    r();
  }).catch(r => {
    t();
    e.dispatch(FlashActions.error(resolveMessage(r) || getI18nString("org_actions.an_error_occurred")));
  });
});
let $$L6 = createOptimistThunk((e, {
  orgId: t,
  ipAllowlistEnabled: r,
  ipAllowlistRanges: n,
  onSuccess: i
}) => sendWithRetry.put(`/api/orgs/${t}/ip_allowlist_ranges`, {
  ip_ranges: r ? n : void 0,
  ip_allowlist_enabled: r
}).then(n => {
  let a = {
    ...e.getState().orgById[t].shared_container_setting,
    ip_allowlist: r
  };
  e.dispatch(patchOrgs({
    id: t,
    shared_container_setting: a
  }));
  e.dispatch(FlashActions.flash("Updated IP allowlist settings"));
  i();
}).catch(t => {
  e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred")));
}));
let $$P17 = createOptimistThunk((e, {
  orgId: t
}) => {
  sendWithRetry.post(`/api/org/${t}/deletion_request`).then(t => {
    e.dispatch(FlashActions.flash(getI18nString("orgs_middleware.deletion_request_submitted")));
  }).catch(t => {
    e.dispatch(FlashActions.error(t.data?.message || getI18nString("orgs_middleware.an_error_occurred_while_enqueeing_deletion_request"), 5e3));
    console.error(t);
  });
});
let $$D0 = createOptimistThunk((e, {
  orgId: t,
  exportControlSetting: r,
  successMessage: n
}) => {
  sendWithRetry.put(`/api/orgs/${t}/export_controls`, {
    export_control_setting: r
  }).then(() => {
    e.dispatch($$x22({
      payload: {
        file_export_setting: r
      },
      successMessage: n
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
});
let $$k3 = createOptimistThunk((e, {
  orgId: t,
  workspaceId: r,
  exportControlSetting: n,
  successMessage: i,
  onClose: d
}) => {
  sendWithRetry.put(`/api/orgs/${t}/workspaces/export_controls`, {
    export_control_setting: n,
    workspace_id: r
  }).then(() => {
    e.dispatch($$x22({
      payload: {
        file_export_setting: n
      },
      successMessage: i
    }));
    d();
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
});
let $$M18 = createOptimistThunk((e, {
  orgId: t,
  workspaceId: r,
  exportControlSetting: n,
  successMessage: i,
  onClose: d
}) => {
  sendWithRetry.put(`/api/orgs/${t}/workspaces/export_controls`, {
    export_control_setting: null,
    workspace_id: r
  }).then(() => {
    e.dispatch($$x22({
      payload: {
        file_export_setting: n
      },
      successMessage: i
    }));
    d();
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
});
let $$F9 = createOptimistThunk((e, t) => {
  let r = t.successMessage;
  let n = t.autogenPasswordControl;
  let a = t.settingsId;
  let c = organizationAPIService.apiAutogenControls({
    orgId: t.orgId,
    autogen_password_controls: n
  });
  c.then(() => {
    r && e.dispatch(VisualBellActions.enqueue({
      message: r,
      type: "orgs.update",
      error: !1
    }));
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  });
  a ? getCurrentLiveGraphClient().optimisticallyUpdate({
    SharedOrgLicenseGroupSetting: {
      [a]: {
        autogenPasswordControls: n
      }
    }
  }, c) : getCurrentLiveGraphClient().optimisticallyCreate({
    SharedOrgLicenseGroupSetting: {
      [`optimistic-id-${t.orgId}`]: {
        autogenPasswordControls: n,
        externalCollaborationControls: !1,
        publicLinkControlsSetting: null,
        teamCreationControls: null,
        publicLinkControlsMaxExpiration: null,
        resourceType: "Org",
        resourceId: t.orgId
      }
    }
  }, c);
});
let $$j21 = createOptimistThunk((e, t) => {
  sendWithRetry.post(`/api/org/${t.orgId}/delete_org_users`, {
    org_user_ids: t.orgUserIds
  }).then(t => {
    e.dispatch(FlashActions.flash(getI18nString("orgs_middleware.user_data_deleted")));
  }).catch(t => {
    e.dispatch(FlashActions.error(t.data?.message || getI18nString("orgs_middleware.an_error_occurred_while_enqueeing_deletion_request"), 5e3));
    console.error(t);
  });
});
let $$U20 = createOptimistThunk((e, {
  orgId: t,
  slidesDisabled: r,
  successMessage: n
}) => {
  organizationAPIService.putToggleSlidesDisabled({
    orgId: t,
    slidesDisabled: r
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  }).then(() => {
    e.dispatch(patchOrgs({
      id: t,
      is_slides_disabled: r
    }));
    n && e.dispatch(FlashActions.flash(n));
  });
});
let $$B8 = createOptimistThunk((e, {
  orgId: t,
  sitesPublishingDisabled: r,
  successMessage: n
}) => {
  organizationAPIService.putToggleSitesPublishingDisabled({
    orgId: t,
    sitesPublishingDisabled: r
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  }).then(() => {
    n && e.dispatch(FlashActions.flash(n));
  });
});
let $$G5 = createOptimistThunk((e, {
  orgId: t,
  supabaseDisabled: r,
  successMessage: n
}) => {
  organizationAPIService.putToggleSupabaseDisabled({
    orgId: t,
    supabaseDisabled: r
  }).catch(t => {
    e.dispatch(FlashActions.error(resolveMessage(t) || getI18nString("org_actions.an_error_occurred"), 5e3));
  }).then(() => {
    n && e.dispatch(FlashActions.flash(n));
  });
});
export const $w = $$D0;
export const Hq = $$O1;
export const Jd = $$S2;
export const KA = $$k3;
export const Kc = $$w4;
export const NL = $$G5;
export const OT = $$L6;
export const QC = $$T7;
export const Sl = $$B8;
export const Tf = $$F9;
export const UF = $$v10;
export const Xw = $$N11;
export const Y4 = $$R12;
export const aJ = $$y13;
export const hi = $$C14;
export const kN = $$b15;
export const lT = $$I16;
export const q4 = $$P17;
export const vs = $$M18;
export const xF = $$A19;
export const xP = $$U20;
export const ye = $$j21;
export const yo = $$x22;