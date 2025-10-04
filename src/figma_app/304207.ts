import { createOptimistCommitAction, createOptimistRevertAction } from "../905/676456";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { getCurrentLiveGraphClient } from "../905/761735";
import { generateUUIDv4 } from "../905/871474";
import { sendWithRetry } from "../905/910117";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk, createOptimistAction } from "../905/350402";
import { b6, Qi } from "../figma_app/559491";
import { HubEventType, FigmaResourceType } from "../figma_app/350203";
import { transformPublishedPluginToInstalled } from "../figma_app/844435";
import { getHubTypeString } from "../figma_app/740025";
import { ResourceTypeNoComment, isWidget, HubTypeEnum } from "../figma_app/45218";
import { pluginAPIService } from "../905/3209";
import { widgetAPIClient } from "../905/424668";
import { n as _$$n2 } from "../905/347702";
let $$T1 = createActionCreator("SET_SAVED_PLUGIN_VERSIONS");
let $$I5 = createOptimistThunk((e, t) => {
  let r = {};
  Object.keys(t).forEach(e => {
    r[e] = [t[e].id];
  });
  e.dispatch(b6({
    widgetIDToVersions: r
  }));
});
export var $$S4 = (e => (e.COMMUNITY_HUB = "community_hub", e.INSERTS_MODAL = "inserts_modal", e))($$S4 || {});
let $$v0 = _$$n2(createOptimistAction("SAVE_EXTENSION", (e, {
  id: t,
  resourceType: r,
  versionId: i,
  orgId: p,
  onSuccess: E,
  hideSuccessVisualBell: y,
  onFail: b,
  source: T,
  optimisticData: I
}, {
  optimistId: S
}) => {
  let v = e.getState();
  let A = {
    plugin_version_id: i,
    org_id: p,
    current_org_id: v.currentUserOrgId
  };
  A.can_handle_first_time_install = !0;
  A.use_upgraded_version = !0;
  A.profile_id = e.getState().authedActiveCommunityProfile?.id;
  r === ResourceTypeNoComment.WIDGET && (A.current_org_id = void 0);
  let x = `/api/${getHubTypeString(r)}/${t}/install`;
  let N = sendWithRetry.post(x, A);
  if (v.user && I?.resource) {
    let e = `optimistic-plugin-install-${generateUUIDv4()}`;
    let t = transformPublishedPluginToInstalled(I.resource, {
      userId: p ? null : v.user.id,
      orgId: p ?? null
    });
    t && getCurrentLiveGraphClient().optimisticallyCreate({
      PluginInstall: {
        [e]: t
      }
    }, N);
  }
  N.then(({
    data: t
  }) => {
    e.dispatch(createOptimistCommitAction(S));
    let i = t.meta;
    let s = r === ResourceTypeNoComment.WIDGET ? {
      publishedPlugins: [i],
      src: "installResource",
      isWidget: !0
    } : {
      publishedPlugins: [i],
      src: "installResource"
    };
    if (e.dispatch(Qi({
      ...s,
      overrideInstallStatus: !0
    })), E?.(), !y) {
      let t = (() => {
        if ("inserts_modal" === T) return r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.saves.plugin_saved") : getI18nString("community.saves.widget_saved");
        if (p) {
          let t = Object.values(e.getState().authedProfilesById).find(e => e.org_id === p);
          return getI18nString(r === ResourceTypeNoComment.PLUGIN ? "community.saves.plugin_saved_for_everyone_at" : "community.saves.widget_saved_for_everyone_at", {
            orgName: t?.name || "your org"
          });
        }
        return e.getState().user?.community_profile_id ? getI18nString(r === ResourceTypeNoComment.PLUGIN ? "community.saves.plugin_saved_for_your_account_and_profile" : "community.saves.widget_saved_for_your_account_and_profile") : r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.saves.plugin_saved_for_your_account") : getI18nString("community.saves.widget_saved_for_your_account");
      })();
      e.dispatch(VisualBellActions.enqueue({
        message: t,
        type: "plugin-installed"
      }));
    }
    trackEventAnalytics(isWidget(i) ? HubEventType.WIDGET_INSTALLED : HubEventType.PLUGIN_INSTALLED, {
      communityHubEntity: isWidget(i) ? FigmaResourceType.WIDGETS : FigmaResourceType.PLUGINS,
      communityHubEntityId: i.id,
      source: T
    });
  }).catch(t => {
    b?.();
    e.dispatch(createOptimistRevertAction(S));
    403 === t.data.status ? e.dispatch(VisualBellActions.enqueue({
      message: r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.actions.unable_to_save_plugin_error", {
        error: resolveMessage(t, t.data?.message)
      }) : getI18nString("community.actions.unable_to_save_widget_error", {
        error: resolveMessage(t, t.data?.message)
      }),
      type: "PLUGIN_INSTALL_FAILED",
      error: !0
    })) : e.dispatch(VisualBellActions.enqueue({
      message: r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.actions.unable_to_save_plugin_please_try_again") : getI18nString("community.actions.unable_to_save_widget_please_try_again"),
      type: "PLUGIN_INSTALL_FAILED",
      error: !0
    }));
  });
}));
let $$A3 = createOptimistAction("UNSAVE_EXTENSION", (e, {
  id: t,
  resourceType: r,
  orgId: i,
  hideSuccessVisualBell: o,
  source: c,
  optimisticData: p
}, {
  optimistId: m
}) => {
  let E = {
    org_id: i,
    current_org_id: e.getState().currentUserOrgId
  };
  E.use_upgraded_version = !0;
  E.profile_id = e.getState().authedActiveCommunityProfile?.id;
  r === ResourceTypeNoComment.WIDGET && (E.current_org_id = void 0);
  let y = `/api/${getHubTypeString(r)}/${t}/install`;
  let b = sendWithRetry.del(y, E);
  p?.pluginInstallId && getCurrentLiveGraphClient().optimisticallyDelete({
    PluginInstall: {
      [p.pluginInstallId]: null
    }
  }, b);
  b.then(({
    data: s
  }) => {
    let l = s.meta;
    let p = r === ResourceTypeNoComment.WIDGET ? {
      publishedPlugins: [l],
      src: "uninstallResource",
      isWidget: !0
    } : {
      publishedPlugins: [l],
      src: "uninstallResource"
    };
    if (e.dispatch(Qi({
      ...p,
      overrideInstallStatus: !0
    })), e.dispatch(createOptimistCommitAction(m)), !o) {
      let n = {
        message: (() => {
          if ("inserts_modal" === c) return r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.saves.plugin_removed_from_your_account") : getI18nString("community.saves.widget_removed_from_your_account");
          if (i) {
            let t = Object.values(e.getState().authedProfilesById).find(e => e.org_id === i);
            return getI18nString(r === ResourceTypeNoComment.PLUGIN ? "community.saves.plugin_removed_for_everyone_at" : "community.saves.widget_removed_for_everyone_at", {
              orgName: t?.name || "your org"
            });
          }
          return e.getState().user?.community_profile_id ? getI18nString(r === ResourceTypeNoComment.PLUGIN ? "community.saves.plugin_removed_from_your_account_and_profile" : "community.saves.widget_removed_from_your_account_and_profile") : r === ResourceTypeNoComment.PLUGIN ? getI18nString("community.saves.plugin_removed_from_your_account") : getI18nString("community.saves.widget_removed_from_your_account");
        })(),
        type: "PLUGIN_UNINSTALL_SUCCESS",
        button: {
          text: getI18nString("community.undo"),
          action: () => {
            e.dispatch(VisualBellActions.dequeue({
              matchType: "PLUGIN_UNINSTALL_SUCCESS"
            }));
            e.dispatch($$v0({
              id: t,
              resourceType: r,
              orgId: i,
              hideSuccessVisualBell: !0,
              source: c
            }));
          }
        }
      };
      e.dispatch(VisualBellActions.enqueue(n));
    }
    trackEventAnalytics(isWidget(l) ? HubEventType.WIDGET_UNINSTALLED : HubEventType.PLUGIN_UNINSTALLED, {
      communityHubEntity: isWidget(l) ? FigmaResourceType.WIDGETS : FigmaResourceType.PLUGINS,
      communityHubEntityId: l.id,
      source: c
    });
  }).catch(t => {
    e.dispatch(createOptimistRevertAction(m));
    console.error(t);
  });
});
let x = {
  [HubTypeEnum.PLUGIN]: function (e) {
    return pluginAPIService.getInstallStatus({
      orgId: e
    });
  },
  [HubTypeEnum.WIDGET]: function (e) {
    return widgetAPIClient.getInstallStatus({
      orgId: e
    });
  }
};
let N = createOptimistThunk((e, t) => {
  let r = {
    plugin_id: t.id
  };
  t.orgId && (r.org_id = t.orgId);
  let n = x[t.resourceType];
  n && n(t.orgId).then(({
    data: e
  }) => {
    t.callback(!e.meta.previously_installed_plugin);
  }).catch(r => {
    e.dispatch(VisualBellActions.enqueue({
      type: "plugin-save-error",
      message: t.resourceType === ResourceTypeNoComment.PLUGIN ? getI18nString("community.actions.unable_to_save_plugin_error", {
        error: resolveMessage(r, r.data.message || "unknown error")
      }) : getI18nString("community.actions.unable_to_save_widget_error", {
        error: resolveMessage(r, r.data.message || "unknown error")
      }),
      error: !0
    }));
  });
});
let $$C2 = createOptimistThunk((e, t) => {
  let {
    orgId,
    id,
    resourceType,
    communityProfile
  } = t;
  e.dispatch(N({
    orgId,
    id,
    resourceType,
    callback: () => {
      e.dispatch($$v0({
        id,
        resourceType,
        orgId,
        communityProfile,
        source: "community_hub"
      }));
    }
  }));
});
export const d6 = $$v0;
export const g3 = $$T1;
export const oj = $$C2;
export const s1 = $$A3;
export const uR = $$S4;
export const zI = $$I5;