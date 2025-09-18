import { getFeatureFlags } from "../905/601108";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { yr } from "../905/827765";
import { hasMorePages, fetchPaginatedData, DEFAULT_PAGE_SIZE, PAGINATION_NEXT } from "../figma_app/661371";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { setCommunityAuthedActiveProfile } from "../905/890368";
import { VisualBellActions } from "../905/302958";
import { switchAccountAndNavigate } from "../figma_app/976345";
import { HD, Co } from "../figma_app/471982";
import { getDefaultBrowseOptions } from "../figma_app/640564";
import { createOptimistThunk } from "../905/350402";
import { UU } from "../figma_app/770088";
import { selectViewAction } from "../905/929976";
import { kE } from "../figma_app/703138";
import { patchOrgs } from "../905/395917";
import { setTeamOptimistThunk } from "../figma_app/240735";
import { c as _$$c } from "../905/289751";
import { getHubTypeString, mapCommentsAndAuthors, isHandleView } from "../figma_app/740025";
import { mapUserRoleToOrgUserRoleAlias } from "../figma_app/12796";
import { setupLoadingStateHandler } from "../905/696711";
import { persistCommunityProfileId } from "../figma_app/502247";
import { NEW_COMMENT_ID } from "../905/380385";
import { CommentTabType } from "../figma_app/45218";
import { OrgUserRoleEnum } from "../figma_app/35887";
import { s as _$$s2 } from "../905/608932";
import { Oo, HZ, cr } from "../905/926523";
let $$P2 = createActionCreator("COMMUNITY_HUB_SHOW_ADMIN_PROFILE_BANNER");
let $$D27 = createActionCreator("COMMUNITY_HUB_HIDE_ADMIN_PROFILE_BANNER");
let $$k14 = setCommunityAuthedActiveProfile;
let $$M3 = createOptimistThunk((e, t) => {
  let r;
  let {
    user,
    authedUsers,
    orgUsersByOrgId,
    authedTeamsById,
    teamAdminRolesForAuthedUsers,
    authedProfilesById,
    selectedView,
    currentUserOrgId
  } = e.getState();
  let m = t.profileId ? authedProfilesById[t.profileId] : null;
  let f = t.view ? t.view : {
    view: "communityHub",
    subView: "searchAndBrowse",
    data: getDefaultBrowseOptions()
  };
  if (!m) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.profile_not_found"),
      type: "COMMUNITY_PROFILE_ERROR"
    }));
    e.dispatch(selectViewAction(f));
    return;
  }
  let E = currentUserOrgId;
  if (m.org_id) {
    E = m.org_id;
    let e = orgUsersByOrgId[m.org_id];
    r = Object.keys(authedUsers.byId).find(t => {
      let r = e[t];
      if (r && mapUserRoleToOrgUserRoleAlias(r.permission) >= OrgUserRoleEnum.ADMIN) return r.user_id;
    });
  } else m.team_id ? (E = authedTeamsById[m.team_id]?.org_id || null, r = Object.keys(authedUsers.byId).find(e => {
    let t = teamAdminRolesForAuthedUsers[e];
    return t?.find(e => e.team_id === m.team_id)?.user_id;
  })) : r = m.primary_user_id === user?.id ? user?.id : authedUsers.orderedIds.find(e => m.associated_users?.find(t => t.user_id === e)?.user_id);
  if (persistCommunityProfileId(m.id), trackEventAnalytics("Community profile IA switched", {
    profileId: m.id,
    view: selectedView.view
  }), e.dispatch($$k14(m)), e.dispatch($$P2()), r && (r !== user?.id || currentUserOrgId !== E)) {
    let t = {
      userId: r,
      orgId: E
    };
    e.dispatch(switchAccountAndNavigate({
      workspace: t,
      view: f
    }));
  } else e.dispatch(selectViewAction(f));
});
let $$F6 = createActionCreator("COMMUNITY_HUB_ADD_FOLLOW");
let $$j7 = createActionCreator("COMMUNITY_HUB_DELETE_FOLLOW");
let $$U0 = createActionCreator("COMMUNITY_HUB_SAVE_PAGE_STATE");
let $$B13 = createActionCreator("COMMUNITY_HUB_RESET_COMMENT_STATE");
let $$G26 = createActionCreator("COMMUNITY_HUB_SET_COMMENTS");
let $$V9 = createActionCreator("COMMUNITY_HUB_SET_COMMENTS_ACTIVE_FEED_TYPE");
let $$H22 = createActionCreator("COMMUNITY_HUB_SET_COMMENT_REPLIES");
let $$z11 = createActionCreator("COMMUNITY_HUB_FLUSH_NEW_COMMENTS_QUEUE");
let $$W4 = createActionCreator("COMMENTS_INSERT_COMMUNITY_MENTION");
let K = (e, t) => {
  let r = /\?/.test(e) ? "&" : "?";
  return e + `${r}${t}`;
};
let $$Y24 = createOptimistThunk((e, t) => {
  if (!hasMorePages(t)) return;
  let r = `/api/${getHubTypeString(t.resourceType)}/${t.resourceId}/comments`;
  t.selectedCommentId && t.selectedCommentId !== NEW_COMMENT_ID && !t.pagination?.selected_comment && (r = K(r, `selected_comment_id=${t.selectedCommentId}`));
  t.activeFeedType === CommentTabType.ME && (r = K(r, `feed_type=${t.activeFeedType}`), void 0 === t.numCommentsForResource && (r = K(r, "include_total_count=true")));
  fetchPaginatedData(r, t.pageSizeOverride ?? DEFAULT_PAGE_SIZE, t, PAGINATION_NEXT).then(e => {
    let r = !e.selected_comment || e.comments.find(t => t.id === e.selected_comment?.id);
    let {
      commentsById,
      authorsById,
      feed
    } = mapCommentsAndAuthors(r ? e.comments : [...e.comments, e.selected_comment]);
    let s = e.pagination;
    e.selected_comment && (s.selected_comment = e.selected_comment);
    let o = {
      ...e,
      pagination: e.pagination,
      totalNumberOfComments: e.total_count,
      commentsById,
      authorsById,
      feed,
      activeFeedType: t.activeFeedType,
      type: t.resourceType,
      id: t.resourceId,
      mentionedProfiles: e.mentioned_profiles
    };
    e.selected_comment && (o.selectedCommentId = e.selected_comment.id);
    t.onSuccess && t.onSuccess(o);
  }).catch(r => {
    e.dispatch(FlashActions.error(getI18nString("community.actions.unable_to_fetch_comments")));
    t.onError && t.onError();
  });
});
let $$$5 = createActionCreator("COMMUNITY_HUB_RESTRICT_PROFILE");
let $$X10 = createOptimistThunk((e, {
  profileId: t,
  blockedProfileId: r,
  onSuccess: n
}) => {
  XHR.post(`/api/profile/${r}/block`, {
    block_type: "restrict",
    profile_id: t
  }).then(() => {
    n && n();
  }).catch(t => {
    let r = resolveMessage(t);
    r && e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.couldnt_restrict_profile_error", {
        error: r
      }),
      type: "RESTRICT_PROFILE_ERROR"
    }));
  });
  e.dispatch($$$5({
    profileId: t,
    blockedProfileId: r,
    onSuccess: n
  }));
});
let $$q25 = createActionCreator("COMMUNITY_HUB_UNRESTRICT_PROFILE");
let $$J16 = createOptimistThunk((e, {
  profileId: t,
  blockedProfileId: r,
  onSuccess: n
}) => {
  XHR.del(`/api/profile/${r}/block`, {
    block_type: "restrict",
    profile_id: t
  }).then(() => {
    n && n();
  }).catch(t => {
    let r = resolveMessage(t);
    r && e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.couldnt_unrestrict_profile_error", {
        error: r
      }),
      type: "UNRESTRICT_PROFILE_ERROR"
    }));
  });
  e.dispatch($$q25({
    profileId: t,
    blockedProfileId: r,
    onSuccess: n
  }));
});
let $$Z20 = createActionCreator("COMMUNITY_HUB_SET_COMMENT_STATE");
let $$Q29 = createOptimistThunk((e, t) => {
  let {
    id,
    type
  } = t;
  (id !== e.getState().communityHub.comments.id || type !== e.getState().communityHub.comments.type) && e.dispatch($$B13());
  e.dispatch($$G26(t));
  e.dispatch($$Z20(t));
});
createOptimistThunk((e, {
  profileId: t,
  on404Redirect: r
}, {
  loadingKey: n
}) => {
  let i = _$$s2.getProfile({
    profileId: t
  });
  setupLoadingStateHandler(i, e, n);
  i.then(({
    data: t
  }) => {
    e.dispatch(Oo(t.meta.profile));
    e.dispatch(selectViewAction(e.getState().selectedView));
  }).catch(t => (404 === t.status && r ? r() : e.dispatch(FlashActions.error(getI18nString("community.actions.error_fetching_profile_information"))), null));
});
createOptimistThunk((e, {
  handle: t,
  on404Redirect: r
}, {
  loadingKey: n
}) => {
  let i = e.getState().currentUserOrgId;
  let a = _$$s2.getHandle({
    currentOrgId: i || void 0,
    handle: t
  });
  setupLoadingStateHandler(a, e, n);
  a.then(({
    data: t
  }) => {
    e.dispatch(Oo(t.meta.profile));
  }).catch(({
    data: t
  }) => {
    t?.status === 404 && r && r();
    e.dispatch(FlashActions.error(getI18nString("community.actions.error_fetching_profile_information")));
  });
}, ({
  handle: e
}) => `COMMUNITY_HUB_GET_PROFILE_BY_HANDLE_${e}`);
let $$ee28 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let {
    website,
    description,
    location,
    profileHandle,
    onSuccess,
    userId,
    teamId,
    orgId
  } = t;
  let m = XHR.post("/api/profile", {
    website,
    description,
    location,
    profile_handle: profileHandle,
    primary_user_id: userId,
    team_id: teamId,
    org_id: orgId
  });
  setupLoadingStateHandler(m, e, r);
  m.then(({
    data: t
  }) => {
    e.dispatch(HZ(t.meta));
    e.dispatch(Oo(t.meta));
    let {
      currentUserOrgId,
      orgById
    } = e.getState();
    let a = currentUserOrgId && orgById[currentUserOrgId];
    if (currentUserOrgId && a && currentUserOrgId === orgId && e.dispatch(patchOrgs({
      id: currentUserOrgId,
      community_profile_handle: t.meta.profile_handle,
      community_profile_id: t.meta.id
    })), getFeatureFlags().ext_plugin_publish_rearch && teamId) {
      let r = e.getState().teams[teamId];
      r && e.dispatch(setTeamOptimistThunk({
        team: {
          ...r,
          community_profile_id: t.meta.id,
          community_profile_handle: t.meta.profile_handle
        },
        userInitiated: !1
      }));
    }
    onSuccess && onSuccess(e);
  }).catch(t => {
    let r = resolveMessage(t);
    r && e.dispatch(FlashActions.error(r));
  });
}, ({
  userId: e
}) => `COMMUNITY_HUB_CREATE_PROFILE_${e}`);
let $$et21 = createOptimistThunk((e, t) => {
  XHR.post("/api/profile/generate_handle").then(({
    data: r
  }) => {
    e.dispatch(HZ(r.meta));
    e.dispatch(Oo(r.meta));
    t.onSuccess && t.onSuccess(e);
  }).catch(({
    data: t
  }) => {
    e.dispatch(FlashActions.error(t.message));
  });
});
let $$er12 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let {
    website,
    twitter,
    instagram,
    pronouns,
    description,
    location,
    profileId,
    profileHandle,
    onSuccess
  } = t;
  let E = e.getState().communityHub.currentProfile;
  if (profileId === E?.id && Object.entries(t).every(([e, t]) => void 0 === t || e in E && E[e] === t)) return;
  let b = twitter?.trim();
  let I = instagram?.trim();
  if (b && E?.twitter !== b && !HD.test(b)) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.your_twitter_handle_is_not_valid", {
        handle: b
      }),
      error: !0
    }));
    return;
  }
  if (I && E?.instagram !== I && !Co.test(I)) {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.your_instagram_handle_is_not_valid", {
        handle: I
      }),
      error: !0
    }));
    return;
  }
  let S = XHR.put(`/api/profile/${profileId}`, {
    website,
    twitter: b,
    instagram: I,
    pronouns,
    description,
    location,
    profile_handle: profileHandle
  });
  setupLoadingStateHandler(S, e, r);
  let A = e.getState().user?.community_profile_handle;
  S.then(({
    data: r
  }) => {
    let {
      communityHub,
      currentUserOrgId,
      orgById
    } = e.getState();
    communityHub.currentProfile?.id === r.meta.id && e.dispatch(Oo(r.meta));
    let s = orgById[currentUserOrgId];
    if (s && "string" == typeof s.id && s.id === r.meta.org_id && e.dispatch(patchOrgs({
      id: r.meta.org_id,
      community_profile_handle: r.meta.profile_handle
    })), profileHandle) {
      let t = e.getState().selectedView;
      isHandleView(t) && t?.handle === A && e.dispatch(selectViewAction({
        view: "communityHub",
        subView: "handle",
        handle: profileHandle
      }));
      r.meta.primary_user_id ? e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("community.actions.your_profile_handle_was_set_to_profile_handle", {
          profileHandle
        }),
        type: "profile-handle"
      })) : r.meta.team_id ? e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("community.actions.your_team_s_handle_was_set_to_profile_handle", {
          profileHandle
        }),
        type: "team-handle"
      })) : r.meta.org_id && e.dispatch(VisualBellActions.enqueue({
        message: getI18nString("community.actions.your_organization_s_handle_was_set_to_profile_handle", {
          profileHandle
        }),
        type: "org-handle"
      }));
    }
    ["twitter", "location", "instagram", "website", "description"].forEach(n => {
      if (n in r.meta && n in t) {
        let t = {
          twitter: getI18nString("community.actions.your_twitter_handle_was_updated"),
          location: getI18nString("community.actions.your_location_was_updated"),
          instagram: getI18nString("community.actions.your_instagram_handle_was_updated"),
          website: getI18nString("community.actions.your_website_url_was_updated"),
          description: getI18nString("community.actions.your_description_was_updated")
        };
        e.dispatch(VisualBellActions.enqueue({
          message: t[n],
          type: "profile-updated"
        }));
      }
    });
    onSuccess && onSuccess(e);
  }).catch(t => {
    let r = resolveMessage(t);
    r && e.dispatch(FlashActions.error(r));
  });
}, ({
  profileId: e
}) => `COMMUNITY_HUB_UPDATE_PROFILE_${e}`);
let $$en23 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let {
    profileId,
    handle
  } = t;
  XHR.del(`/api/profile/${profileId}`).then(() => {
    e.dispatch(cr(handle));
    let {
      currentUserOrgId,
      orgById
    } = e.getState();
    let a = currentUserOrgId && orgById[currentUserOrgId];
    currentUserOrgId && a && a.community_profile_id === profileId && e.dispatch(patchOrgs({
      id: currentUserOrgId,
      community_profile_handle: void 0,
      community_profile_id: void 0
    }));
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.profile_deleted")
    }));
  }).catch(() => {
    e.dispatch(FlashActions.error(getI18nString("community.actions.unable_to_delete_profile_please_try_again_later")));
  });
});
let $$ei1 = createOptimistThunk(async (e, {
  file: t,
  profileId: r,
  onSuccessCallback: n
}, {
  loadingKey: i
}) => {
  let a = _$$c(t).then(e => ea(`/api/profile/${r}/upload`, e, t));
  setupLoadingStateHandler(a, e, i);
  await a.then(({
    signature: e
  }) => XHR.put(`/api/profile/${r}`, {
    signature: e
  })).then(({
    data: t
  }) => {
    e.dispatch(Oo(t.meta));
    n();
  }).catch(t => {
    e.dispatch(FlashActions.error(t ? getI18nString("community.actions.an_error_occurred_with_error", {
      error: t
    }) : getI18nString("community.actions.an_error_occurred")));
  });
}, ({
  profileId: e
}) => `COMMUNITY_HUB_UPLOAD_PROFILE_COVER_IMAGE_${e}`);
async function ea(e, t, r) {
  if (!t) return {
    cover_image_path: "",
    signature: ""
  };
  let {
    cover_image_path,
    signature,
    fields
  } = (await XHR.post(e)).data.meta;
  let o = new FormData();
  fields && Object.entries(fields).forEach(([e, t]) => o.append(e, t));
  o.set("content-type", r.type);
  o.append("file", r);
  await yr(cover_image_path, o);
  return {
    cover_image_path,
    signature
  };
}
let $$es17 = createActionCreator("COMMUNTY_HUB_FOLLOW_ENTITY");
let $$eo18 = createOptimistThunk(async (e, t, {
  loadingKey: r
}) => {
  let n = XHR.put("/api/follows", {
    followed_profile_id: t
  });
  setupLoadingStateHandler(n, e, r);
  await n.then(({
    data: r
  }) => {
    e.getState().user?.community_profile_id && (e.dispatch($$F6({
      followedProfileId: t,
      currentUserProfileId: e.getState().user?.community_profile_id
    })), e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.followed_profile_name", {
        profileName: r.meta.followed_profile.name
      }),
      type: "COMMUNITY_HUB_FOLLOW"
    })));
  }).catch(t => {
    let r = resolveMessage(t);
    r && e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.unable_to_follow_this_profile_profile_name", {
        profileName: r
      }),
      type: "COMMUNITY_HUB_FOLLOW_FAILED",
      error: !0
    }));
  });
  e.dispatch($$es17(t));
}, e => `COMMUNTY_HUB_FOLLOW_ENTITY_${e}`);
let $$el19 = createActionCreator("COMMUNTY_HUB_UNFOLLOW_ENTITY");
let $$ed8 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let n = XHR.del("/api/follows", {
    followed_profile_id: t
  });
  setupLoadingStateHandler(n, e, r);
  n.then(() => {
    e.getState().user?.community_profile_id && (e.dispatch($$j7({
      followedProfileId: t,
      currentUserProfileId: e.getState().user?.community_profile_id
    })), e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.actions.unfollowed_profile"),
      type: "COMMUNITY_HUB_UNFOLLOW"
    })));
  }).catch(t => {
    let r = resolveMessage(t);
    r && e.dispatch(VisualBellActions.enqueue({
      message: `Unable to unfollow this profile: ${r}`,
      type: "COMMUNITY_HUB_UNFOLLOW_FAILED",
      error: !0
    }));
  });
  e.dispatch($$el19(t));
}, e => `COMMUNTY_HUB_UNFOLLOW_ENTITY_${e}`);
export function $$ec15(e) {
  return {
    updateStatus: createActionCreator(`${e}_UPDATE_PUBLISH_STATUS`),
    updateMetadata: createActionCreator(`${e}_UPDATE_PUBLISH_METADATA`),
    clearMetadata: createActionCreator(`${e}_CLEAR_PUBLISH_METADATA`),
    clearMetadataAndStatus: createActionCreator(`${e}_CLEAR_PUBLISHING`)
  };
}
createOptimistThunk(async (e, t) => {
  let r;
  let {
    thread,
    resolved
  } = t;
  let a = e.getState();
  resolved && a.comments.activeThread?.id === thread.id && !a.comments.showResolved && e.dispatch(UU());
  r = resolved ? XHR.put(`/api/community_comments/${thread.id}/resolve`) : XHR.put(`/api/community_comments/${thread.id}/unresolve`);
  await r.then(({
    data: t
  }) => {
    e.dispatch(kE({
      comment: {
        id: thread.id,
        resolved_at: t.meta.resolved_at
      }
    }));
  }).catch(t => {
    e.dispatch(VisualBellActions.enqueue({
      error: !0,
      message: resolved ? getI18nString("community.actions.failed_to_resolve_comment") : getI18nString("community.actions.failed_to_unresolve_comment")
    }));
  });
});
export const Ad = $$U0;
export const Ai = $$ei1;
export const Ch = $$P2;
export const Dg = $$M3;
export const Hx = $$W4;
export const LO = $$$5;
export const RS = $$F6;
export const Rx = $$j7;
export const X2 = $$ed8;
export const Zj = $$V9;
export const _8 = $$X10;
export const _F = $$z11;
export const aP = $$er12;
export const cO = $$B13;
export const cR = $$k14;
export const d6 = $$ec15;
export const dL = $$J16;
export const dv = $$es17;
export const e6 = $$eo18;
export const eg = $$el19;
export const gT = $$Z20;
export const h1 = $$et21;
export const ig = $$H22;
export const oB = $$en23;
export const p4 = $$Y24;
export const qo = $$q25;
export const r1 = $$G26;
export const rO = $$D27;
export const vQ = $$ee28;
export const vr = $$Q29;