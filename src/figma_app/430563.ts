import { ServiceCategories as _$$e } from "../905/165054";
import { UserInterfaceElements } from "../figma_app/763686";
import { analyticsEventManager, trackEventAnalytics } from "../905/449184";
import { WB } from "../905/761735";
import { reportError } from "../905/11";
import { getI18nString } from "../905/303541";
import { VisualBellActions } from "../905/302958";
import { createOptimistThunk } from "../905/350402";
import { yH } from "../figma_app/714946";
import { d1 } from "../905/766303";
import { td } from "../figma_app/646357";
import { J } from "../905/252202";
import { Qh } from "../figma_app/155728";
import { isTeamLibrary } from "../figma_app/633080";
import { A } from "../905/733171";
import { yD } from "../905/92359";
import { n as _$$n } from "../905/64411";
let b = "file_key_optimistic_update";
let T = "hub_file_id_optimistic_update";
let $$I0 = createOptimistThunk((e, {
  libraryKey: t,
  subscriptions: r
}) => {
  if (!r || td(e.getState().library.defaultPublished, t)) return;
  let n = d1(e.getState());
  if (n) {
    let a = n.editor_type ?? "design";
    (!0 === r || "design" === a && r.design || "whiteboard" === a && r.figjam) && (e.getState().leftPanel.activeTab === UserInterfaceElements.ASSETS || e.getState().universalInsertModal.showing ? e.dispatch(_$$n({
      libraryKey: t
    })) : e.dispatch(yH({
      key: yD(n.key)
    })));
  }
});
let $$S3 = createOptimistThunk(async (e, t) => {
  let {
    libraryFileSubscription,
    userInitiated,
    publishedLibrary,
    fileSubscribedLibraryKeys
  } = t;
  let {
    file_key,
    is_subscribed,
    id,
    library_key
  } = r;
  let m = e.getState().openFile?.key || null;
  if (m === file_key && e.dispatch($$I0({
    libraryKey: library_key,
    subscriptions: is_subscribed
  })), fileSubscribedLibraryKeys.has(library_key) && is_subscribed || !userInitiated) return;
  let E = A.postFileSubscriptionByLibraryKey({
    libraryKey: library_key,
    fileKey: file_key,
    isSubscribed: is_subscribed
  });
  id ? WB()?.optimisticallyUpdate({
    LibraryFileSubscription: {
      [id]: {
        isSubscribed: is_subscribed
      }
    }
  }, E) : is_subscribed && publishedLibrary && WB()?.optimisticallyCreate({
    LibraryFileSubscription: {
      [`optimistic-id-${library_key}`]: {
        isSubscribed: is_subscribed,
        fileKey: file_key,
        hubFileId: T,
        libraryKey: library_key ?? null,
        libraryFileKey: b,
        canRead: !0,
        library: {
          updatedAt: new Date(),
          createdAt: new Date(),
          numComponents: publishedLibrary.num_components,
          numStateGroups: publishedLibrary.num_state_groups ?? 0,
          numStyles: publishedLibrary.num_styles,
          numStylesFill: 0,
          numStylesText: 0,
          numStylesEffect: 0,
          numStylesGrid: 0,
          numVariables: publishedLibrary.num_variables,
          numVariablesBoolean: 0,
          numVariablesColor: 0,
          numVariablesFloat: 0,
          numVariablesString: 0,
          numLibraryAssets: 0,
          numVariableSets: publishedLibrary.num_variable_collections,
          numModuleAssets: publishedLibrary.num_module_assets,
          hasAssets: !1,
          fileKey: b,
          file: {
            _id: `optimistic-id-${b}`,
            _name: null,
            key: b,
            name: publishedLibrary.library_name,
            libraryKey: publishedLibrary.library_key,
            signedThumbnailUrl: publishedLibrary.thumbnail_url,
            signedThumbnailUrlOverride: null,
            thumbnailUrl: publishedLibrary.thumbnail_url,
            thumbnailUrlOverride: null,
            parentOrgId: null,
            thumbnailGuid: isTeamLibrary(publishedLibrary) ? publishedLibrary.thumbnail_guid : null
          },
          hubFileId: T,
          canRead: !0
        },
        communityLibrary: null
      }
    }
  }, E);
  try {
    await E;
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("design_systems.subscriptions.unable_to_change_setting"),
      error: !0
    }));
    reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, t, {
      tags: {
        openFileKey: m,
        fileKey: file_key,
        libraryKey: library_key,
        isSubscribed: is_subscribed
      }
    });
  }
});
let $$v4 = createOptimistThunk(async (e, t) => {
  let {
    libraryUserSubscription,
    userInitiated,
    existingSubscription
  } = t;
  let {
    library_key,
    subscriptions
  } = r;
  if (e.dispatch($$I0({
    libraryKey: library_key,
    subscriptions
  })), !userInitiated) return;
  let p = {
    libraryKey: library_key,
    userId: e.getState().user?.id,
    library: {
      libraryKey: library_key,
      fileKey: b
    },
    communityLibrary: null
  };
  let _ = A.postUserSubscriptionByLibraryKey({
    libraryKey: library_key,
    subscriptions
  });
  J(existingSubscription, Qh.USER, subscriptions.design, subscriptions.figjam, subscriptions.slides, subscriptions.buzz, p, _);
  try {
    if (!library_key) throw Error("Library key is required for user subscription");
    await _;
    analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle.outcome", {
      designSubscribed: subscriptions.design,
      figjamSubscribed: subscriptions.figjam,
      slidesSubscribed: subscriptions.slides,
      buzzSubscribed: subscriptions.buzz,
      subscriptionType: "user",
      outcome: "success"
    });
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("design_systems.subscriptions.unable_to_change_setting"),
      error: !0
    }));
    analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle.outcome", {
      designSubscribed: subscriptions.design,
      figjamSubscribed: subscriptions.figjam,
      slidesSubscribed: subscriptions.slides,
      buzzSubscribed: subscriptions.buzz,
      subscriptionType: "user",
      outcome: "error"
    });
    reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, t, {
      tags: {
        libraryKey: library_key,
        designSubscribed: subscriptions.design,
        figjamSubscribed: subscriptions.figjam,
        slidesSubscribed: subscriptions.slides,
        buzzSubscribed: subscriptions.buzz
      }
    });
  }
});
let $$A5 = createOptimistThunk(async (e, t) => {
  let {
    libraryTeamSubscription,
    userInitiated,
    existingSubscription
  } = t;
  let {
    library_key,
    subscriptions,
    team_id
  } = r;
  if (e.dispatch($$I0({
    libraryKey: library_key,
    subscriptions
  })), !userInitiated) return;
  let _ = A.postTeamSubscriptionByLibraryKey({
    libraryKey: library_key,
    subscriptions,
    teamId: team_id
  });
  J(existingSubscription, Qh.TEAM, subscriptions.design, subscriptions.figjam, subscriptions.slides, subscriptions.buzz, {
    libraryKey: library_key,
    teamId: team_id,
    library: {
      libraryKey: library_key,
      fileKey: b,
      hubFileId: T
    },
    communityLibrary: null
  }, _);
  try {
    if (!library_key) throw Error("Team subscription requires a library key");
    await _;
    analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle.outcome", {
      designSubscribed: subscriptions.design,
      figjamSubscribed: subscriptions.figjam,
      slidesSubscribed: subscriptions.slides,
      buzzSubscribed: subscriptions.buzz,
      subscriptionType: "team",
      outcome: "success"
    });
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("design_systems.subscriptions.unable_to_change_setting"),
      error: !0
    }));
    analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle.outcome", {
      designSubscribed: subscriptions.design,
      figjamSubscribed: subscriptions.figjam,
      slidesSubscribed: subscriptions.slides,
      buzzSubscribed: subscriptions.buzz,
      subscriptionType: "team",
      outcome: "error"
    });
    reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, t, {
      tags: {
        libraryKey: library_key,
        designSubscribed: subscriptions.design,
        figjamSubscribed: subscriptions.figjam,
        slidesSubscribed: subscriptions.slides
      }
    });
  }
});
let $$x1 = createOptimistThunk(async (e, t) => {
  let {
    libraryWorkspaceSubscription,
    libraryName,
    workspaceName
  } = t;
  let {
    libraryKey,
    subscriptions,
    workspaceId
  } = r;
  let u = A.postWorkspaceSubscriptionByLibraryKey({
    libraryKey,
    subscriptions,
    workspaceId
  });
  libraryWorkspaceSubscription.id ? WB().optimisticallyUpdate({
    LibraryWorkspaceSubscription: {
      [libraryWorkspaceSubscription.id]: {
        isSubscribed: subscriptions.design,
        figJamSubscribed: subscriptions.figjam,
        slidesSubscribed: subscriptions.slides
      }
    }
  }, u) : WB().optimisticallyCreate({
    LibraryWorkspaceSubscription: {
      [`library-workspace-sub-${performance.now()}`]: {
        fileKey: b,
        workspaceId,
        libraryKey,
        isSubscribed: subscriptions.design,
        figJamSubscribed: subscriptions.figjam,
        slidesSubscribed: subscriptions.slides,
        buzzSubscribed: subscriptions.buzz,
        canRead: !0,
        hubFileId: T
      }
    }
  }, u);
  try {
    await u;
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("design_systems.subscriptions.settings_updated_for", {
        libraryName,
        orgOrWorkspaceName: workspaceName
      })
    }));
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: t?.message ?? getI18nString("design_systems.subscriptions.unable_to_change_setting"),
      error: !0
    }));
  }
});
let $$N6 = createOptimistThunk(async (e, t) => {
  let {
    libraryWorkspaceSubscription,
    libraryName,
    workspaceName
  } = t;
  let {
    libraryKey,
    workspaceId
  } = r;
  let c = A.deleteWorkspaceSubscriptionByLibraryKey({
    libraryKey,
    workspaceId
  });
  libraryWorkspaceSubscription.id && WB().optimisticallyDelete({
    LibraryWorkspaceSubscription: {
      [libraryWorkspaceSubscription.id]: null
    }
  }, c);
  try {
    await c;
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("design_systems.subscriptions.settings_updated_for", {
        libraryName,
        orgOrWorkspaceName: workspaceName
      })
    }));
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: t?.message ?? getI18nString("design_systems.subscriptions.unable_to_change_setting"),
      error: !0
    }));
  }
});
let $$C2 = createOptimistThunk(async (e, t) => {
  let {
    libraryOrgSubscription,
    libraryTeamId,
    userInitiated
  } = t;
  let {
    orgId,
    subscriptions,
    libraryKey
  } = r;
  if (e.dispatch($$I0({
    libraryKey,
    subscriptions
  })), userInitiated) {
    if (t.currentSubscription) {
      let e = libraryOrgSubscription.subscriptions.design;
      !(t.currentSubscription?.design || t.currentSubscription?.figjam) && e ? trackEventAnalytics("Org Library File Enabled", {
        orgId,
        libraryKey,
        fileTeamId: libraryTeamId
      }) : trackEventAnalytics("Org Library File Disabled", {
        orgId,
        libraryKey,
        fileTeamId: libraryTeamId
      });
      analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle", {
        designSubscribed: libraryOrgSubscription.subscriptions.design,
        figjamSubscribed: libraryOrgSubscription.subscriptions.figjam,
        slidesSubscribed: libraryOrgSubscription.subscriptions.slides,
        buzzSubscribed: libraryOrgSubscription.subscriptions.buzz,
        subscriptionType: "org"
      });
    }
    try {
      await A.postOrgSubscriptionByLibraryKey({
        libraryKey: libraryOrgSubscription.libraryKey,
        subscriptions,
        orgId
      });
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("design_systems.subscriptions.settings_updated_for", {
          libraryName: t.libraryName,
          orgOrWorkspaceName: t.orgName
        })
      }));
      analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle.outcome", {
        designSubscribed: libraryOrgSubscription.subscriptions.design,
        figjamSubscribed: libraryOrgSubscription.subscriptions.figjam,
        slidesSubscribed: libraryOrgSubscription.subscriptions.slides,
        buzzSubscribed: libraryOrgSubscription.subscriptions.buzz,
        subscriptionType: "org",
        outcome: "success"
      });
    } catch (t) {
      e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("design_systems.subscriptions.unable_to_change_setting"),
        error: !0
      }));
      analyticsEventManager.trackDefinedMetric("library_preferences_modal.library_subscription_toggle.outcome", {
        designSubscribed: libraryOrgSubscription.subscriptions.design,
        figjamSubscribed: libraryOrgSubscription.subscriptions.figjam,
        slidesSubscribed: libraryOrgSubscription.subscriptions.slides,
        buzzSubscribed: libraryOrgSubscription.subscriptions.buzz,
        subscriptionType: "org",
        outcome: "error"
      });
      reportError(_$$e.DESIGN_SYSTEMS_ECOSYSTEM, t, {
        tags: {
          libraryKey: libraryOrgSubscription.libraryKey,
          designSubscribed: subscriptions.design,
          figjamSubscribed: subscriptions.figjam,
          slidesSubscribed: subscriptions.slides
        }
      });
    }
  }
});
export const F$ = $$I0;
export const PP = $$x1;
export const Sn = $$C2;
export const am = $$S3;
export const fR = $$v4;
export const nE = $$A5;
export const oA = $$N6;