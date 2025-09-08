import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { NC } from "../905/17179";
import { Ay } from "../905/612521";
import { XHR } from "../905/910117";
import { Ts } from "../905/194276";
import { qB } from "../905/862321";
import { s as _$$s } from "../905/573154";
import { getI18nString } from "../905/303541";
import { hG } from "../905/890368";
import { F } from "../905/302958";
import { createOptimistAction, createOptimistThunk } from "../905/350402";
import { showModalHandler } from "../905/156213";
import { tc, PE } from "../905/15667";
import { Sc } from "../905/18797";
import { N } from "../905/696711";
import { G } from "../figma_app/124713";
import { Eh } from "../figma_app/617654";
import { x } from "../905/749159";
let $$T6 = hG;
let $$I8 = createOptimistAction("ORG_USER_PUT", async (e, t, {
  optimistId: r
}) => {
  if (t.userInitiated) try {
    let i = await G.updateOrgUser({
      id: t.orgUser.id,
      changes: {
        description: t.orgUser.description
      }
    });
    e.dispatch(createOptimistCommitAction(r));
    e.dispatch($$I8({
      orgUser: i.data.meta,
      userInitiated: !1
    }));
  } catch (t) {
    e.dispatch(createOptimistRevertAction(r));
    e.dispatch(_$$s.error(t.data?.message || getI18nString("org_user_actions.an_error_occurred")));
  }
});
createOptimistThunk(async (e, t) => {
  try {
    let r = {
      ...(!1 === t.showUserOnboarding && {
        show_figjam_user_onboarding: !1
      }),
      ...(t.shownPreLaunchAdminOnboarding && {
        has_shown_figjam_admin_onboarding: !0
      }),
      ...(t.shownPostLaunchAdminOnboarding && {
        has_shown_figjam_admin_launch_onboarding: !0
      })
    };
    let n = await G.updateOrgUser({
      id: t.orgUserId,
      changes: r
    });
    e.dispatch($$I8({
      orgUser: n.data.meta,
      userInitiated: !1
    }));
  } catch (t) {
    e.dispatch(_$$s.error(t.data?.message || getI18nString("org_user_actions.an_error_occurred_closing_onboarding")));
  }
});
let $$S0 = createOptimistThunk(async (e, t) => {
  try {
    let r;
    switch (await G.requestOrgAccountTypeRequest({
      org_id: t.orgId,
      entry_point: t.entryPoint,
      message: t.message,
      admin_ids: t.adminIds,
      editor_type: t.licenseType,
      billable_product_key: t.seatTypeKey,
      file_key: t.fileKey,
      folder_id: t.folderId
    }).then(e => {
      200 === e.status && t.onSuccess?.(e.data.meta?.id);
    }), t.entryPoint) {
      case tc.IN_EDITOR_RESTRICTED_DRAFT:
      case tc.RESTRICTED_DRAFT_SHARED_EMAIL:
        r = getI18nString("org_user_actions.request_sent_well_let_you_know");
        break;
      case tc.ASK_TO_EDIT_ONE_CLICK:
        r = getI18nString("1_click_expansion.request_sent_well_let_you");
        break;
      case PE.CreateFileProjectView:
      case tc.USER_SETTINGS:
        r = getI18nString("upgrades.request_sent_toast");
        break;
      default:
        r = getI18nString("org_user_actions.upgrade_request_sent");
    }
    t.suppressVisualBell || e.dispatch(F.enqueue({
      message: r,
      type: "upgrade-request-sent"
    }));
  } catch (r) {
    console.error(r);
    r.message.includes("Org access needed") ? (e.dispatch(Ts({
      origin: "edit_button_click",
      formState: qB.JOIN_ORG,
      redirectUrl: Ay.location.pathname
    })), e.dispatch(showModalHandler({
      type: x,
      data: {}
    }))) : e.dispatch(_$$s.error(r.data?.message || getI18nString("org_user_actions.an_error_occurred_requesting_account_type")));
    t.onError?.();
  }
});
let $$v1 = createOptimistThunk(async (e, t) => {
  try {
    await XHR.del(`/api/org_user/${t.orgId}`);
    e.dispatch(F.enqueue({
      type: "org_guest_leave",
      message: getI18nString("org_user_actions.you_successfully_left_organization", {
        orgName: t.orgName
      })
    }));
  } catch (r) {
    console.error(r);
    e.dispatch(_$$s.error(r.data?.message || getI18nString("org_user_actions.an_error_occurred_leaving_organization", {
      orgName: t.orgName
    })));
  }
});
let $$A7 = createOptimistAction("ORG_USER_BATCH_UPDATE_ORG_USERS", async (e, t, {
  optimistId: r
}) => {
  let i;
  let a;
  let s = e.getState();
  if (t.lastUpdateTimestampOverride) {
    i = t.lastUpdateTimestampOverride;
    a = t.lastUpdateTimestampOverride;
  } else {
    let e = Object.values(s.orgUsersByOrgId[t.orgId]).filter(e => t.params.org_user_ids.includes(e.id));
    if (0 === e.length) return;
    if (a = new Date(Math.max(...e.map(e => +new Date(e.updated_at)))).toISOString(), void 0 !== t.params.license_group_id) {
      let t = e.map(e => e.license_group_member?.updated_at).filter(Boolean);
      i = t.length > 0 ? new Date(Math.max(...t.map(e => +new Date(e)))).toISOString() : null;
    }
  }
  try {
    let s = (await G.updateOrgUsers({
      orgId: t.orgId,
      ...t.params,
      latest_ou_update: a,
      latest_lg_member_update: i,
      showing_billing_groups: !0
    })).data.meta;
    e.dispatch(createOptimistCommitAction(r));
    e.dispatch($$T6({
      orgUsers: s,
      orgId: t.orgId
    }));
    t.successCallback && t.successCallback();
  } catch (a) {
    console.error("Batch Update Failed", a);
    t.errorCallback?.();
    e.dispatch(createOptimistRevertAction(r));
    let i = function (e) {
      let {
        reason,
        message
      } = e;
      return "seat_increase_unauthorized" === reason ? getI18nString("modify_plan_user_seat_modal.error.seat_increase_unauthorized") : message ?? getI18nString("org_user_actions.an_error_occurred_updating_org_users");
    }(a.data);
    e.dispatch(_$$s.error(i));
  }
});
let $$x5 = NC("ORG_USER_BATCH_DELETE_ORG_USERS");
let $$N3 = createOptimistThunk(async (e, t) => {
  if (e.dispatch($$x5(t)), t.userInitiated) try {
    await XHR.del(`/api/orgs/${t.orgId}/org_users`, t.params);
    let r = t.params.org_user_ids.length;
    let n = getI18nString("org_user_actions.user_has_been_removed_from_organization", {
      deletedOrgUserCount: r
    });
    e.dispatch(_$$s.flash(n));
  } catch (t) {
    e.dispatch(_$$s.error(t.data?.message || getI18nString("org_user_actions.an_error_occurred")));
    return;
  }
});
let $$C4 = createOptimistThunk(async (e, {
  orgId: t
}, {
  loadingKey: r
}) => {
  let n = e.getState();
  if (!Sc(n.loadingState, r)) return;
  let i = Eh.getAdmins({
    includeLicenseAdmins: !0,
    orgId: t
  });
  N(i, e, r);
  try {
    let r = await i;
    e.dispatch($$T6({
      orgUsers: r.data.meta,
      orgId: t
    }));
  } catch (t) {
    e.dispatch(_$$s.error(t.message || getI18nString("org_user_actions.an_error_occurred_fetching_org_admins")));
  }
}, ({
  orgId: e
}) => `ORG_USER_GET_ADMINS_${e}`);
let $$w2 = createOptimistThunk(async (e, t, {
  loadingKey: r
}) => {
  let n = Eh.getUser({
    orgId: t.orgId,
    userId: t.userId
  });
  N(n, e, r);
  try {
    let r = [(await n).data.meta];
    e.dispatch($$T6({
      orgUsers: r,
      orgId: t.orgId
    }));
    return r.find(e => e.user_id === t.userId) || null;
  } catch (r) {
    if (404 === r.status && t.allowNoOrgUser) return null;
    e.dispatch(_$$s.error(r.message || getI18nString("org_user_actions.an_error_occurred_fetching_org_users")));
    return null;
  }
}, e => `ORG_USER_GET_BY_USER_ID_${e.orgId}_${e.userId}`);
export const $V = $$S0;
export const AW = $$v1;
export const I1 = $$w2;
export const IJ = $$N3;
export const Pg = $$C4;
export const bu = $$x5;
export const hZ = $$T6;
export const uo = $$A7;
export const yJ = $$I8;