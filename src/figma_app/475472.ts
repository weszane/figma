import { trackEventAnalytics } from "../905/449184";
import { WB } from "../905/761735";
import { handleOptimistTransactionWithError } from "../905/150006";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { switchAccountAndNavigate } from "../figma_app/976345";
import { createOptimistThunk } from "../905/350402";
import { selectViewAction, hydrateFileBrowser } from "../905/929976";
import { loadingStatePutSuccess, loadingStatePutFailure } from "../figma_app/714946";
import { bE } from "../905/98702";
import { setTeamCreationLoadingAction, postTeamAction, renameTeamAction, changeSharingSettingsAction, joinTeamAction, batchJoinTeamAction } from "../figma_app/240735";
import { b as _$$b } from "../905/493664";
import { trackTeamEvent } from "../figma_app/314264";
import { FResourceCategoryType } from "../figma_app/191312";
import { p9, n1 } from "../figma_app/88768";
import { sendRoleInvites } from "../905/351260";
import { getUserState } from "../figma_app/502247";
import { AccessLevelEnum } from "../905/557142";
import { CreateUpgradeAction } from "../figma_app/707808";
import { roleServiceAPI } from "../figma_app/66216";
import { c as _$$c } from "../905/467776";
export let $$N1 = createOptimistThunk((e, t) => {
  let {
    teamName,
    orgAccess,
    workspaceId,
    description,
    defaultPermission,
    sharingAudienceControl,
    orgBrowsable,
    hidden,
    ignoreCurrentPlan
  } = t;
  let m = e.getState().currentUserOrgId;
  let f = {
    team_name: teamName
  };
  !m || ignoreCurrentPlan || (f.org_id = m, sharingAudienceControl || (f.org_access = orgAccess));
  workspaceId && (f.workspace_id = workspaceId);
  description && (f.description = description);
  defaultPermission && !sharingAudienceControl && (f.default_permission = defaultPermission);
  sharingAudienceControl && (f.sharing_audience_control = sharingAudienceControl);
  orgBrowsable && (f.org_browsable = orgBrowsable);
  hidden && (f.hidden = hidden);
  e.dispatch(setTeamCreationLoadingAction({
    loading: !0
  }));
  XHR.post("/api/teams/create", f).then(({
    data: r
  }) => {
    let n = "team" in r.meta ? r.meta.team : r.meta;
    trackTeamEvent("Team Created", n.id, e.getState(), {
      sharing_audience_control: sharingAudienceControl,
      org_browsable: orgBrowsable,
      hidden
    });
    t.onSuccessNoRedirect && t.onSuccessNoRedirect(n);
    $$C2(n, e, t);
  }).catch(t => {
    let r = resolveMessage(t, t?.response?.message || getI18nString("team_creation.an_error_occurred_while_creating_this_team"));
    e.dispatch(FlashActions.error(r));
    e.dispatch(setTeamCreationLoadingAction({
      loading: !1
    }));
  });
});
export function $$C2(e, t, r) {
  let n = t.getState().user;
  let i = t.getState().currentUserOrgId;
  t.dispatch(postTeamAction({
    team: e
  }));
  let {
    ignoreCurrentPlan
  } = r;
  i && !ignoreCurrentPlan && r.inviteEmails?.length && r.inviteLevel ? t.dispatch(sendRoleInvites({
    emails: r.inviteEmails,
    emailsToExclude: n ? new Set([n.email]) : void 0,
    resourceType: FResourceCategoryType.TEAM,
    resourceIdOrKey: e.id,
    level: r.inviteLevel,
    source: "new_team_creation_modal",
    teamId: e.id
  })) : r.teamFlowType === CreateUpgradeAction.CREATE && r.inviteEmails?.length && t.dispatch(sendRoleInvites({
    emails: r.inviteEmails,
    emailsToExclude: n ? new Set([n.email]) : void 0,
    resourceType: FResourceCategoryType.TEAM,
    resourceIdOrKey: e.id,
    level: AccessLevelEnum.EDITOR,
    source: "team_creation_flow",
    teamId: e.id
  }));
  return roleServiceAPI.getTeam({
    teamId: e.id
  }).then(({
    data: i
  }) => {
    for (let e of i.meta) t.dispatch(bE({
      role: e
    }));
    let s = t.getState().currentUserOrgId && !ignoreCurrentPlan;
    if (r.dontRedirect) {
      t.dispatch(VisualBellActions.enqueue({
        type: "new_team_created",
        message: getI18nString("team_creation.you_have_created_a_new_team")
      }));
      t.dispatch(setTeamCreationLoadingAction({
        loading: !1
      }));
    } else if (r.onSuccess && (t.dispatch(setTeamCreationLoadingAction({
      loading: !1
    })), r.onSuccess()), s || r.teamFlowType === CreateUpgradeAction.CREATE) {
      t.dispatch(setTeamCreationLoadingAction({
        loading: !1
      }));
      t.dispatch(selectViewAction({
        view: "team",
        teamId: e.id
      }));
      t.dispatch(VisualBellActions.enqueue({
        type: "new_team_created",
        message: getI18nString("team_creation.you_have_created_a_new_team")
      }));
    } else if (n?.id) {
      let r = {
        view: "addCollaborators",
        teamId: e.id
      };
      let i = {
        userId: n.id,
        teamId: e.id,
        orgId: null
      };
      t.dispatch(switchAccountAndNavigate({
        workspace: i,
        view: r
      }));
    } else {
      t.dispatch(setTeamCreationLoadingAction({
        loading: !1
      }));
      t.dispatch(selectViewAction({
        view: "addCollaborators",
        teamId: e.id
      }));
    }
  });
}
let $$w0 = createOptimistThunk((e, t) => {
  let r = t.team;
  let n = r.id;
  let o = r.name;
  let d = t.name;
  trackTeamEvent("Team Renamed", n, e.getState());
  let u = XHR.put(`/api/teams/${n}`, {
    name: t.name
  }).then(({
    data: r
  }) => {
    t.skipVisualBell || e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("change_team_name_visual_bell.text", {
        oldTeamName: o,
        newTeamName: d
      }),
      button: {
        text: getI18nString("change_team_name_visual_bell.undo"),
        action: () => {
          e.dispatch($$w0({
            team: r.meta,
            name: o,
            skipVisualBell: !0
          }));
        }
      }
    }));
  });
  WB()?.optimisticallyUpdate({
    Team: {
      [n]: {
        name: d
      }
    }
  }, u);
  return handleOptimistTransactionWithError({
    requestPromise: u,
    fallbackError: "An error occurred while renaming this team.",
    store: e,
    next: e.dispatch,
    action: renameTeamAction(t)
  });
});
let $$O6 = createOptimistThunk((e, t) => {
  let r = t.team.id;
  trackTeamEvent("Team Share Settings Updated", r, e.getState(), {
    share_settings_type: "share_audience",
    oldSharingAudienceControl: t.team.sharing_audience_control,
    newSharingAudienceControl: t.sharingAudienceControl,
    oldOrgBrowsable: t.team.org_browsable,
    newOrgBrowsable: t.orgBrowsable,
    oldHidden: t.team.hidden,
    newHidden: t.hidden
  });
  return handleOptimistTransactionWithError({
    requestPromise: XHR.put(`/api/teams/${r}`, {
      sharing_audience_control: t.sharingAudienceControl,
      org_browsable: t.orgBrowsable,
      hidden: t.hidden
    }),
    fallbackError: "An error occurred while changing the sharing settings of this team.",
    store: e,
    next: e.dispatch,
    action: changeSharingSettingsAction(t)
  });
});
let $$R5 = createOptimistThunk((e, t) => {
  trackEventAnalytics("file-browser-hydrate", {
    location: "team.onJoin"
  });
  let r = p9(t.teamId);
  getUserState("onJoinTeam").then(n => {
    let i = t.teamId;
    e.dispatch(hydrateFileBrowser(n.data.meta));
    let a = e.getState().teams[i].name;
    switch (t.level) {
      case AccessLevelEnum.OWNER:
        e.dispatch(FlashActions.flash(getI18nString("join_team_flash.as_owner.text", {
          teamName: a
        })));
        break;
      case AccessLevelEnum.ADMIN:
        e.dispatch(FlashActions.flash(getI18nString("join_team_flash.as_admin.text", {
          teamName: a
        })));
        break;
      default:
        e.dispatch(FlashActions.flash(getI18nString("join_team_flash.text", {
          teamName: a
        })));
    }
    e.dispatch(loadingStatePutSuccess({
      key: r
    }));
  }).catch(() => {
    e.dispatch(loadingStatePutFailure({
      key: r
    }));
  });
  e.dispatch(joinTeamAction(t));
});
let $$L4 = createOptimistThunk((e, t) => {
  trackEventAnalytics("file-browser-hydrate", {
    location: "team.onBatchJoin"
  });
  let r = n1(t.teamIds);
  getUserState("onBatchJoinTeams").then(n => {
    e.dispatch(hydrateFileBrowser(n.data.meta));
    let i = t.teamIds.length;
    switch (t.level) {
      case AccessLevelEnum.OWNER:
        e.dispatch(FlashActions.flash(getI18nString("join_team_batch_flash.as_owner.text", {
          teamCount: i
        })));
        break;
      case AccessLevelEnum.ADMIN:
        e.dispatch(FlashActions.flash(getI18nString("join_team_batch_flash.as_admin.text", {
          teamCount: i
        })));
        break;
      default:
        e.dispatch(FlashActions.flash(getI18nString("join_team_batch_flash.text", {
          teamCount: i
        })));
    }
    e.dispatch(loadingStatePutSuccess({
      key: r
    }));
  }).catch(() => {
    e.dispatch(loadingStatePutFailure({
      key: r
    }));
  });
  e.dispatch(batchJoinTeamAction(t));
});
let $$P3 = createOptimistThunk(e => {
  let t = e.getState().currentUserOrgId;
  _$$c.getTeamRoleRequestsOrgId({
    orgId: t
  }).then(t => {
    e.dispatch(_$$b({
      teamRoleRequests: t.data.meta
    }));
  });
});
export const IA = $$w0;
export const KQ = $$N1;
export const P8 = $$C2;
export const Rw = $$P3;
export const UM = $$L4;
export const vr = $$R5;
export const zK = $$O6;