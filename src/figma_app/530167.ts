import { createActionCreator } from '../905/73481';
import { resolveMessage } from '../905/231762';
import { readImageBytes } from '../905/289751';
import { VisualBellActions } from '../905/302958';
import { getI18nString } from '../905/303541';
import { createOptimistThunk } from '../905/350402';
import { NEW_COMMENT_ID } from '../905/380385';
import { trackEventAnalytics } from '../905/449184';
import { FlashActions } from '../905/573154';
import { getFeatureFlags } from '../905/601108';
import { profileServiceAPI } from '../905/608932';
import { setupLoadingStateHandler } from '../905/696711';
import { uploadRequest } from '../905/827765';
import { addAuthedCommunityProfileToHub, clearCommunityProfile, patchOrgs, putCommunityProfile, setCommunityAuthedActiveProfile } from '../905/890368';
import { sendWithRetry } from '../905/910117';
import { selectViewAction } from '../905/929976';
import { mapUserRoleToOrgUserRoleAlias } from '../figma_app/12796';
import { OrgUserRoleEnum } from '../figma_app/35887';
import { CommentTabType } from '../figma_app/45218';
import { setTeamOptimistThunk } from '../figma_app/240735';
import { Co, HD } from '../figma_app/471982';
import { persistCommunityProfileId } from '../figma_app/502247';
import { getDefaultBrowseOptions } from '../figma_app/640564';
import { DEFAULT_PAGE_SIZE, fetchPaginatedData, hasMorePages, PAGINATION_NEXT } from '../figma_app/661371';
import { commitEditedComment } from '../figma_app/703138';
import { getHubTypeString, isHandleView, mapCommentsAndAuthors } from '../figma_app/740025';
import { deactivateActiveComment } from '../figma_app/770088';
import { switchAccountAndNavigate } from '../figma_app/976345';

// Original file: /Users/allen/github/fig/src/figma_app/530167.ts

// Action creators for admin profile banner
export const showAdminProfileBanner = createActionCreator('COMMUNITY_HUB_SHOW_ADMIN_PROFILE_BANNER'); // original $$P2
export const hideAdminProfileBanner = createActionCreator('COMMUNITY_HUB_HIDE_ADMIN_PROFILE_BANNER'); // original $$D27

// Alias for imported function
export const setCommunityAuthedActiveProfileAlias = setCommunityAuthedActiveProfile; // original $$k14

/**
 * Thunk to switch community profile and handle navigation/account switching.
 * @param {object} params - Parameters including profileId and view.
 */
export const switchCommunityProfileThunk = createOptimistThunk(({
  dispatch,
  getState
}, params) => {
  // original $$M3
  const {
    user,
    authedUsers,
    orgUsersByOrgId,
    authedTeamsById,
    teamAdminRolesForAuthedUsers,
    authedProfilesById,
    selectedView,
    currentUserOrgId
  } = getState();
  const profile = params.profileId ? authedProfilesById[params.profileId] : null;
  const view = params.view || {
    view: 'communityHub',
    subView: 'searchAndBrowse',
    data: getDefaultBrowseOptions()
  };
  if (!profile) {
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.actions.profile_not_found'),
      type: 'COMMUNITY_PROFILE_ERROR'
    }));
    dispatch(selectViewAction(view));
    return;
  }
  let targetOrgId = currentUserOrgId;
  let adminUserId: string | undefined;
  if (profile.org_id) {
    targetOrgId = profile.org_id;
    const orgUsers = orgUsersByOrgId[profile.org_id];
    adminUserId = Object.keys(authedUsers.byId).find(userId => {
      const userRole = orgUsers[userId];
      return userRole && mapUserRoleToOrgUserRoleAlias(userRole.permission) >= OrgUserRoleEnum.ADMIN;
    });
  } else if (profile.team_id) {
    targetOrgId = authedTeamsById[profile.team_id]?.org_id || null;
    adminUserId = Object.keys(authedUsers.byId).find(userId => {
      const roles = teamAdminRolesForAuthedUsers[userId];
      return roles?.find(role => role.team_id === profile.team_id)?.user_id;
    });
  } else {
    adminUserId = profile.primary_user_id === user?.id ? user?.id : authedUsers.orderedIds.find(id => profile.associated_users?.find(assoc => assoc.user_id === id)?.user_id);
  }
  persistCommunityProfileId(profile.id);
  trackEventAnalytics('Community profile IA switched', {
    profileId: profile.id,
    view: selectedView.view
  });
  dispatch(setCommunityAuthedActiveProfileAlias(profile));
  dispatch(showAdminProfileBanner());
  if (adminUserId && (adminUserId !== user?.id || currentUserOrgId !== targetOrgId)) {
    const workspace = {
      userId: adminUserId,
      orgId: targetOrgId
    };
    dispatch(switchAccountAndNavigate({
      workspace,
      view
    }));
  } else {
    dispatch(selectViewAction(view));
  }
});

// Action creators for follow/unfollow
export const addFollow = createActionCreator('COMMUNITY_HUB_ADD_FOLLOW'); // original $$F6
export const deleteFollow = createActionCreator('COMMUNITY_HUB_DELETE_FOLLOW'); // original $$j7

// Action creators for page state and comments
export const savePageState = createActionCreator('COMMUNITY_HUB_SAVE_PAGE_STATE'); // original $$U0
export const resetCommentState = createActionCreator('COMMUNITY_HUB_RESET_COMMENT_STATE'); // original $$B13
export const setComments = createActionCreator('COMMUNITY_HUB_SET_COMMENTS'); // original $$G26
export const setCommentsActiveFeedType = createActionCreator('COMMUNITY_HUB_SET_COMMENTS_ACTIVE_FEED_TYPE'); // original $$V9
export const setCommentReplies = createActionCreator('COMMUNITY_HUB_SET_COMMENT_REPLIES'); // original $$H22
export const flushNewCommentsQueue = createActionCreator('COMMUNITY_HUB_FLUSH_NEW_COMMENTS_QUEUE'); // original $$z11
export const insertCommunityMention = createActionCreator('COMMENTS_INSERT_COMMUNITY_MENTION'); // original $$W4

/**
 * Helper function to append query parameters to URL.
 * @param {string} url - The base URL.
 * @param {string} param - The query parameter string.
 * @returns {string} The URL with appended parameter.
 */
function appendQueryParam(url: string, param: string): string {
  // original K
  const separator = /\?/.test(url) ? '&' : '?';
  return `${url}${separator}${param}`;
}

/**
 * Thunk to fetch paginated comments for a resource.
 * @param {object} params - Parameters including resourceType, resourceId, etc.
 */
export const fetchCommentsThunk = createOptimistThunk(({
  dispatch
}, params) => {
  if (!hasMorePages(params)) return;
  let url = `/api/${getHubTypeString(params.resourceType)}/${params.resourceId}/comments`;
  if (params.selectedCommentId && params.selectedCommentId !== NEW_COMMENT_ID && !params.pagination?.selected_comment) {
    url = appendQueryParam(url, `selected_comment_id=${params.selectedCommentId}`);
  }
  if (params.activeFeedType === CommentTabType.ME) {
    url = appendQueryParam(url, `feed_type=${params.activeFeedType}`);
    if (params.numCommentsForResource === undefined) {
      url = appendQueryParam(url, 'include_total_count=true');
    }
  }
  fetchPaginatedData(url, params.pageSizeOverride ?? DEFAULT_PAGE_SIZE, params, PAGINATION_NEXT).then(response => {
    const hasSelectedComment = !response.selected_comment || response.comments.find(comment => comment.id === response.selected_comment?.id);
    const {
      commentsById,
      authorsById,
      feed
    } = mapCommentsAndAuthors(hasSelectedComment ? response.comments : [...response.comments, response.selected_comment]);
    const pagination = response.pagination;
    if (response.selected_comment) {
      pagination.selected_comment = response.selected_comment;
    }
    const result = {
      ...response,
      pagination,
      totalNumberOfComments: response.total_count,
      commentsById,
      authorsById,
      feed,
      activeFeedType: params.activeFeedType,
      type: params.resourceType,
      id: params.resourceId,
      mentionedProfiles: response.mentioned_profiles
    };
    if (response.selected_comment) {
      result.selectedCommentId = response.selected_comment.id;
    }
    params.onSuccess && params.onSuccess(result);
  }).catch(() => {
    dispatch(FlashActions.error(getI18nString('community.actions.unable_to_fetch_comments')));
    params.onError && params.onError();
  });
});

// Action creators for restrict/unrestrict
export const restrictProfile = createActionCreator('COMMUNITY_HUB_RESTRICT_PROFILE'); // original $$$5

/**
 * Thunk to restrict a profile.
 * @param {object} params - Parameters including profileId, blockedProfileId, onSuccess.
 */
export const restrictProfileThunk = createOptimistThunk(({
  dispatch
}, params) => {
  // original $$X10
  const {
    profileId,
    blockedProfileId,
    onSuccess
  } = params;
  sendWithRetry.post(`/api/profile/${blockedProfileId}/block`, {
    block_type: 'restrict',
    profile_id: profileId
  }).then(() => {
    onSuccess && onSuccess();
  }).catch(error => {
    const message = resolveMessage(error);
    if (message) {
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('community.actions.couldnt_restrict_profile_error', {
          error: message
        }),
        type: 'RESTRICT_PROFILE_ERROR'
      }));
    }
  });
  dispatch(restrictProfile({
    profileId,
    blockedProfileId,
    onSuccess
  }));
});
export const unrestrictProfile = createActionCreator('COMMUNITY_HUB_UNRESTRICT_PROFILE'); // original $$q25

/**
 * Thunk to unrestrict a profile.
 * @param {object} params - Parameters including profileId, blockedProfileId, onSuccess.
 */
export const unrestrictProfileThunk = createOptimistThunk(({
  dispatch
}, params) => {
  // original $$J16
  const {
    profileId,
    blockedProfileId,
    onSuccess
  } = params;
  sendWithRetry.del(`/api/profile/${blockedProfileId}/block`, {
    block_type: 'restrict',
    profile_id: profileId
  }).then(() => {
    onSuccess && onSuccess();
  }).catch(error => {
    const message = resolveMessage(error);
    if (message) {
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('community.actions.couldnt_unrestrict_profile_error', {
          error: message
        }),
        type: 'UNRESTRICT_PROFILE_ERROR'
      }));
    }
  });
  dispatch(unrestrictProfile({
    profileId,
    blockedProfileId,
    onSuccess
  }));
});

// Action creators for comment state
export const setCommentState = createActionCreator('COMMUNITY_HUB_SET_COMMENT_STATE'); // original $$Z20

/**
 * Thunk to set comment state for a resource.
 * @param {object} params - Parameters including id and type.
 */
export const setCommentStateThunk = createOptimistThunk(({
  dispatch,
  getState
}, params) => {
  // original $$Q29
  const {
    id,
    type
  } = params;
  const state = getState();
  if (id !== state.communityHub.comments.id || type !== state.communityHub.comments.type) {
    dispatch(resetCommentState());
  }
  dispatch(setComments(params));
  dispatch(setCommentState(params));
});

// Thunk to fetch profile by ID
createOptimistThunk((context, params, {
  loadingKey
}) => {
  // no original name, inline
  const {
    dispatch,
    getState
  } = context;
  const {
    profileId,
    on404Redirect
  } = params;
  const request = profileServiceAPI.getProfile({
    profileId
  });
  setupLoadingStateHandler(request, context, loadingKey);
  request.then(({
    data
  }: {
    data: any;
  }) => {
    dispatch(putCommunityProfile(data.meta.profile));
    dispatch(selectViewAction(getState().selectedView));
  }).catch(error => {
    if (error.status === 404 && on404Redirect) {
      on404Redirect();
    } else {
      dispatch(FlashActions.error(getI18nString('community.actions.error_fetching_profile_information')));
    }
  });
});

// Thunk to fetch profile by handle
createOptimistThunk((context, params, {
  loadingKey
}) => {
  // no original name, inline
  const {
    dispatch,
    getState
  } = context;
  const {
    handle,
    on404Redirect
  } = params;
  const currentOrgId = getState().currentUserOrgId;
  const request = profileServiceAPI.getHandle({
    currentOrgId: currentOrgId || undefined,
    handle
  });
  setupLoadingStateHandler(request, context, loadingKey);
  request.then(({
    data
  }: {
    data: any;
  }) => {
    dispatch(putCommunityProfile(data.meta.profile));
  }).catch(({
    data
  }) => {
    if (data?.status === 404 && on404Redirect) on404Redirect();
    dispatch(FlashActions.error(getI18nString('community.actions.error_fetching_profile_information')));
  });
}, ({
  handle
}) => `COMMUNITY_HUB_GET_PROFILE_BY_HANDLE_${handle}`);

/**
 * Thunk to create a new community profile.
 * @param {object} params - Parameters including website, description, etc.
 */
export const createProfileThunk = createOptimistThunk((context, params, {
  loadingKey
}) => {
  // original $$ee28
  const {
    dispatch,
    getState
  } = context;
  const {
    website,
    description,
    location,
    profileHandle,
    onSuccess,
    userId,
    teamId,
    orgId
  } = params;
  const request = sendWithRetry.post('/api/profile', {
    website,
    description,
    location,
    profile_handle: profileHandle,
    primary_user_id: userId,
    team_id: teamId,
    org_id: orgId
  });
  setupLoadingStateHandler(request, context, loadingKey);
  request.then(({
    data
  }) => {
    dispatch(addAuthedCommunityProfileToHub(data.meta));
    dispatch(putCommunityProfile(data.meta));
    const {
      currentUserOrgId,
      orgById
    } = getState();
    const org = currentUserOrgId && orgById[currentUserOrgId];
    if (currentUserOrgId && org && currentUserOrgId === orgId) {
      dispatch(patchOrgs({
        id: currentUserOrgId,
        community_profile_handle: data.meta.profile_handle,
        community_profile_id: data.meta.id
      }));
    }
    if (getFeatureFlags().ext_plugin_publish_rearch && teamId) {
      const team = getState().teams[teamId];
      if (team) {
        dispatch(setTeamOptimistThunk({
          team: {
            ...team,
            community_profile_id: data.meta.id,
            community_profile_handle: data.meta.profile_handle
          },
          userInitiated: false
        }));
      }
    }
    onSuccess && onSuccess(dispatch);
  }).catch(error => {
    const message = resolveMessage(error);
    if (message) dispatch(FlashActions.error(message));
  });
}, ({
  userId
}) => `COMMUNITY_HUB_CREATE_PROFILE_${userId}`);

/**
 * Thunk to generate a profile handle.
 * @param {object} params - Parameters including onSuccess.
 */
export const generateProfileHandleThunk = createOptimistThunk(({
  dispatch
}, params) => {
  // original $$et21
  sendWithRetry.post('/api/profile/generate_handle').then(({
    data
  }) => {
    dispatch(addAuthedCommunityProfileToHub(data.meta));
    dispatch(putCommunityProfile(data.meta));
    params.onSuccess && params.onSuccess(dispatch);
  }).catch(({
    data
  }) => {
    dispatch(FlashActions.error(data.message));
  });
});

/**
 * Thunk to update a community profile.
 * @param {object} params - Parameters including profile details.
 */
export const updateProfileThunk = createOptimistThunk((context, params, {
  loadingKey
}) => {
  // original $$er12
  const {
    dispatch,
    getState
  } = context;
  const {
    website,
    twitter,
    instagram,
    pronouns,
    description,
    location,
    profileId,
    profileHandle,
    onSuccess
  } = params;
  const currentProfile = getState().communityHub.currentProfile;
  if (profileId === currentProfile?.id && Object.entries(params).every(([key, value]) => value === undefined || key in currentProfile && currentProfile[key] === value)) {
    return;
  }
  const trimmedTwitter = twitter?.trim();
  const trimmedInstagram = instagram?.trim();
  if (trimmedTwitter && currentProfile?.twitter !== trimmedTwitter && !HD.test(trimmedTwitter)) {
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.actions.your_twitter_handle_is_not_valid', {
        handle: trimmedTwitter
      }),
      error: true
    }));
    return;
  }
  if (trimmedInstagram && currentProfile?.instagram !== trimmedInstagram && !Co.test(trimmedInstagram)) {
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.actions.your_instagram_handle_is_not_valid', {
        handle: trimmedInstagram
      }),
      error: true
    }));
    return;
  }
  const request = sendWithRetry.put(`/api/profile/${profileId}`, {
    website,
    twitter: trimmedTwitter,
    instagram: trimmedInstagram,
    pronouns,
    description,
    location,
    profile_handle: profileHandle
  });
  setupLoadingStateHandler(request, context, loadingKey);
  const userCommunityHandle = getState().user?.community_profile_handle;
  request.then(({
    data
  }) => {
    const {
      communityHub,
      currentUserOrgId,
      orgById
    } = getState();
    if (communityHub.currentProfile?.id === data.meta.id) {
      dispatch(putCommunityProfile(data.meta));
    }
    const org = orgById[currentUserOrgId];
    if (org && typeof org.id === 'string' && org.id === data.meta.org_id) {
      dispatch(patchOrgs({
        id: data.meta.org_id,
        community_profile_handle: data.meta.profile_handle
      }));
    }
    if (profileHandle) {
      const selectedView = getState().selectedView;
      if (isHandleView(selectedView) && selectedView?.handle === userCommunityHandle) {
        dispatch(selectViewAction({
          view: 'communityHub',
          subView: 'handle',
          handle: profileHandle
        }));
      }
      if (data.meta.primary_user_id) {
        dispatch(VisualBellActions.enqueue({
          message: getI18nString('community.actions.your_profile_handle_was_set_to_profile_handle', {
            profileHandle
          }),
          type: 'profile-handle'
        }));
      } else if (data.meta.team_id) {
        dispatch(VisualBellActions.enqueue({
          message: getI18nString('community.actions.your_team_s_handle_was_set_to_profile_handle', {
            profileHandle
          }),
          type: 'team-handle'
        }));
      } else if (data.meta.org_id) {
        dispatch(VisualBellActions.enqueue({
          message: getI18nString('community.actions.your_organization_s_handle_was_set_to_profile_handle', {
            profileHandle
          }),
          type: 'org-handle'
        }));
      }
    }
    ['twitter', 'location', 'instagram', 'website', 'description'].forEach(field => {
      if (field in data.meta && field in params) {
        const messages = {
          twitter: getI18nString('community.actions.your_twitter_handle_was_updated'),
          location: getI18nString('community.actions.your_location_was_updated'),
          instagram: getI18nString('community.actions.your_instagram_handle_was_updated'),
          website: getI18nString('community.actions.your_website_url_was_updated'),
          description: getI18nString('community.actions.your_description_was_updated')
        };
        dispatch(VisualBellActions.enqueue({
          message: messages[field],
          type: 'profile-updated'
        }));
      }
    });
    onSuccess && onSuccess(dispatch);
  }).catch(error => {
    const message = resolveMessage(error);
    if (message) dispatch(FlashActions.error(message));
  });
}, ({
  profileId
}) => `COMMUNITY_HUB_UPDATE_PROFILE_${profileId}`);

/**
 * Thunk to delete a community profile.
 * @param {object} params - Parameters including profileId and handle.
 */
export const deleteProfileThunk = createOptimistThunk((context, params) => {
  // original $$en23
  const {
    dispatch,
    getState
  } = context;
  const {
    profileId,
    handle
  } = params;
  sendWithRetry.del(`/api/profile/${profileId}`).then(() => {
    dispatch(clearCommunityProfile(handle));
    const {
      currentUserOrgId,
      orgById
    } = getState();
    const org = currentUserOrgId && orgById[currentUserOrgId];
    if (currentUserOrgId && org && org.community_profile_id === profileId) {
      dispatch(patchOrgs({
        id: currentUserOrgId,
        community_profile_handle: undefined,
        community_profile_id: undefined
      }));
    }
    dispatch(VisualBellActions.enqueue({
      message: getI18nString('community.actions.profile_deleted')
    }));
  }).catch(() => {
    dispatch(FlashActions.error(getI18nString('community.actions.unable_to_delete_profile_please_try_again_later')));
  });
});

/**
 * Thunk to upload profile cover image.
 * @param {object} params - Parameters including file, profileId, onSuccessCallback.
 */
export const uploadProfileCoverImageThunk = createOptimistThunk(async (context, params, {
  loadingKey
}) => {
  // original $$ei1
  const {
    dispatch
  } = context;
  const {
    file,
    profileId,
    onSuccessCallback
  } = params;
  const uploadPromise = readImageBytes(file).then(bytes => uploadCoverImage(`/api/profile/${profileId}/upload`, bytes, file));
  setupLoadingStateHandler(uploadPromise, context, loadingKey);
  await uploadPromise.then(({
    signature
  }) => sendWithRetry.put(`/api/profile/${profileId}`, {
    signature
  })).then(({
    data
  }) => {
    dispatch(putCommunityProfile(data.meta));
    onSuccessCallback();
  }).catch(error => {
    dispatch(FlashActions.error(error ? getI18nString('community.actions.an_error_occurred_with_error', {
      error
    }) : getI18nString('community.actions.an_error_occurred')));
  });
}, ({
  profileId
}) => `COMMUNITY_HUB_UPLOAD_PROFILE_COVER_IMAGE_${profileId}`);

/**
 * Helper function to upload cover image.
 * @param {string} url - The upload URL.
 * @param {ArrayBuffer} bytes - The image bytes.
 * @param {File} file - The file object.
 * @returns {Promise<object>} The upload result.
 */
export async function uploadCoverImage(url: string, bytes: ArrayBuffer, file: File) {
  // original ea
  if (!bytes) {
    return {
      cover_image_path: '',
      signature: ''
    };
  }
  const {
    cover_image_path,
    signature,
    fields
  } = (await sendWithRetry.post(url)).data.meta;
  const formData = new FormData();
  if (fields) Object.entries(fields).forEach(([key, value]) => formData.append(key, value as string));
  formData.set('content-type', file.type);
  formData.append('file', file);
  await uploadRequest(cover_image_path, formData);
  return {
    cover_image_path,
    signature
  };
}

// Action creators for follow/unfollow entities
export const followEntity = createActionCreator('COMMUNTY_HUB_FOLLOW_ENTITY'); // original $$es17

/**
 * Thunk to follow an entity.
 * @param {string} followedProfileId - The ID of the profile to follow.
 */
export const followEntityThunk = createOptimistThunk(async (context, followedProfileId, {
  loadingKey
}) => {
  // original $$eo18
  const {
    dispatch,
    getState
  } = context;
  const request = sendWithRetry.put('/api/follows', {
    followed_profile_id: followedProfileId
  });
  setupLoadingStateHandler(request, context, loadingKey);
  await request.then(({
    data
  }) => {
    if (getState().user?.community_profile_id) {
      dispatch(addFollow({
        followedProfileId,
        currentUserProfileId: getState().user?.community_profile_id
      }));
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('community.actions.followed_profile_name', {
          profileName: data.meta.followed_profile.name
        }),
        type: 'COMMUNITY_HUB_FOLLOW'
      }));
    }
  }).catch(error => {
    const message = resolveMessage(error);
    if (message) {
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('community.actions.unable_to_follow_this_profile_profile_name', {
          profileName: message
        }),
        type: 'COMMUNITY_HUB_FOLLOW_FAILED',
        error: true
      }));
    }
  });
  dispatch(followEntity(followedProfileId));
}, followedProfileId => `COMMUNTY_HUB_FOLLOW_ENTITY_${followedProfileId}`);
export const unfollowEntity = createActionCreator('COMMUNTY_HUB_UNFOLLOW_ENTITY'); // original $$el19

/**
 * Thunk to unfollow an entity.
 * @param {string} followedProfileId - The ID of the profile to unfollow.
 */
export const unfollowEntityThunk = createOptimistThunk((context, followedProfileId, {
  loadingKey
}) => {
  // original $$ed8
  const {
    dispatch,
    getState
  } = context;
  const request = sendWithRetry.del('/api/follows', {
    followed_profile_id: followedProfileId
  });
  setupLoadingStateHandler(request, context, loadingKey);
  request.then(() => {
    if (getState().user?.community_profile_id) {
      dispatch(deleteFollow({
        followedProfileId,
        currentUserProfileId: getState().user?.community_profile_id
      }));
      dispatch(VisualBellActions.enqueue({
        message: getI18nString('community.actions.unfollowed_profile'),
        type: 'COMMUNITY_HUB_UNFOLLOW'
      }));
    }
  }).catch(error => {
    const message = resolveMessage(error);
    if (message) {
      dispatch(VisualBellActions.enqueue({
        message: `Unable to unfollow this profile: ${message}`,
        type: 'COMMUNITY_HUB_UNFOLLOW_FAILED',
        error: true
      }));
    }
  });
  dispatch(unfollowEntity(followedProfileId));
}, followedProfileId => `COMMUNTY_HUB_UNFOLLOW_ENTITY_${followedProfileId}`);

/**
 * Function to create action creators for publishing.
 * @param {string} prefix - The prefix for action types.
 * @returns {object} Object with action creators.
 */
export function createPublishActionCreators(prefix: string) {
  // original $$ec15
  return {
    updateStatus: createActionCreator(`${prefix}_UPDATE_PUBLISH_STATUS`),
    updateMetadata: createActionCreator(`${prefix}_UPDATE_PUBLISH_METADATA`),
    clearMetadata: createActionCreator(`${prefix}_CLEAR_PUBLISH_METADATA`),
    clearMetadataAndStatus: createActionCreator(`${prefix}_CLEAR_PUBLISHING`)
  };
}

// Thunk to resolve/unresolve comment thread
createOptimistThunk(async ({
  dispatch,
  getState
}, params) => {
  // no original name, inline
  const {
    thread,
    resolved
  } = params;
  const state = getState();
  if (resolved && state.comments.activeThread?.id === thread.id && !state.comments.showResolved) {
    dispatch(deactivateActiveComment());
  }
  const request = resolved ? sendWithRetry.put(`/api/community_comments/${thread.id}/resolve`) : sendWithRetry.put(`/api/community_comments/${thread.id}/unresolve`);
  await request.then(({
    data
  }) => {
    dispatch(commitEditedComment({
      comment: {
        id: thread.id,
        resolved_at: data.meta.resolved_at
      }
    }));
  }).catch(() => {
    dispatch(VisualBellActions.enqueue({
      error: true,
      message: resolved ? getI18nString('community.actions.failed_to_resolve_comment') : getI18nString('community.actions.failed_to_unresolve_comment')
    }));
  });
});

// Exports with original names
export const Ad = savePageState;
export const Ai = uploadProfileCoverImageThunk;
export const Ch = showAdminProfileBanner;
export const Dg = switchCommunityProfileThunk;
export const Hx = insertCommunityMention;
export const LO = restrictProfile;
export const RS = addFollow;
export const Rx = deleteFollow;
export const X2 = unfollowEntityThunk;
export const Zj = setCommentsActiveFeedType;
export const _8 = restrictProfileThunk;
export const _F = flushNewCommentsQueue;
export const aP = updateProfileThunk;
export const cO = resetCommentState;
export const cR = setCommunityAuthedActiveProfileAlias;
export const d6 = createPublishActionCreators;
export const dL = unrestrictProfileThunk;
export const dv = followEntity;
export const e6 = followEntityThunk;
export const eg = unfollowEntity;
export const gT = setCommentState;
export const h1 = generateProfileHandleThunk;
export const ig = setCommentReplies;
export const oB = deleteProfileThunk;
export const p4 = fetchCommentsThunk;
export const qo = unrestrictProfile;
export const r1 = setComments;
export const rO = hideAdminProfileBanner;
export const vQ = createProfileThunk;
export const vr = setCommentStateThunk;