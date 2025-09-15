import { ServiceCategories as _$$e } from "../905/165054";
import { getFeatureFlags } from "../905/601108";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { debugState } from "../905/407919";
import { qW } from "../905/623179";
import { reportError } from "../905/11";
import { XHR } from "../905/910117";
import { FlashActions } from "../905/573154";
import { getI18nString } from "../905/303541";
import { resolveMessage } from "../905/231762";
import { VisualBellActions } from "../905/302958";
import { getResourceTypeLabel, getPluginWidgetLabel } from "../figma_app/471982";
import { Qi } from "../905/172918";
import { isResourcePendingPublishing } from "../figma_app/777551";
import { createOptimistThunk } from "../905/350402";
import { d6 } from "../figma_app/530167";
import { HZ, Oo } from "../905/926523";
import { loadingStatePutLoading, loadingStatePutSuccess, loadingStatePutFailure } from "../figma_app/714946";
import { c as _$$c } from "../905/289751";
import { Kg, Ac, Rd, Gf } from "../figma_app/599979";
import { liveStoreInstance } from "../905/713695";
import { getPermissionsState } from "../figma_app/642025";
import { F as _$$F } from "../905/827944";
import { validateExtensionIconImage, validateArtworkImage, loadPluginManifest, loadLocalPluginSource, validatePluginCodeSize, getResourceRoleInfo, getPublishingData } from "../figma_app/300692";
import { setupLoadingStateHandler } from "../905/696711";
import { HubTypeEnum, isWidget } from "../figma_app/45218";
import { UploadStatusEnum, PublisherRole } from "../figma_app/10554";
import { w as _$$w } from "../905/771986";
import { pluginAPIService } from "../905/3209";
import { U } from "../905/424668";
import { MZ } from "../905/470594";
import { UM, Jr } from "../figma_app/940844";
let $$M6 = createActionCreator("PLUGIN_REPLACE_FEATURED");
let $$F29 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  if (!e.getState().user) return;
  let n = pluginAPIService.getPlugins();
  let i = U.getWidgets();
  n.then(({
    data: t
  }) => {
    let r = t.meta;
    e.dispatch(Qi({
      publishedPlugins: r,
      src: "initializeUserPublishedPlugins"
    }));
  });
  i.then(({
    data: t
  }) => {
    let r = t.meta;
    e.dispatch(Qi({
      publishedPlugins: r,
      src: "initializeUserPublishedWidgets"
    }));
  });
  setupLoadingStateHandler(i, e, r);
});
let $$j28 = liveStoreInstance.Query({
  fetch: async e => (await pluginAPIService.getUnpublishedPlugins()).data.meta,
  output: ({
    data: e
  }) => {
    let t = {};
    if (e) for (let r of e) t[r.id] = r;
    return t;
  }
});
let $$U19 = liveStoreInstance.Query({
  fetch: async e => (await U.getUnpublishedWidgets()).data.meta,
  output: ({
    data: e
  }) => {
    let t = {};
    if (e) for (let r of e) t[r.id] = r;
    return t;
  }
});
let $$B16 = createOptimistThunk((e, {
  widgetIDToVersions: t
}) => {
  let {
    publishedCanvasWidgetVersions,
    currentUserOrgId
  } = e.getState();
  for (let [e, i] of Object.entries(t)) i.forEach(i => {
    let a = publishedCanvasWidgetVersions[e]?.[i];
    a && new Set(t[e]).forEach(e => {
      _$$F.getAndCache({
        ...a,
        id: e
      }, currentUserOrgId ?? void 0);
    });
  });
});
let $$G32 = createOptimistThunk(async (e, {
  resourceId: t,
  resourceType: r
}) => {
  let n = r === HubTypeEnum.WIDGET ? U.getWidgets({
    id: t
  }) : pluginAPIService.getPlugins({
    id: t
  });
  let {
    data
  } = await n;
  let a = data.meta.find(e => e.id === t);
  a && e.dispatch(Qi({
    publishedPlugins: [a],
    src: "getPublishedResource"
  }));
});
let $$V20 = createActionCreator("UPDATE_PUBLISHED_CANVAS_WIDGET_VERSIONS");
let $$H33 = createActionCreator("UPDATE_FETCHED_CANVAS_WIDGET_VERSIONS");
export async function $$z0(e, t, r) {
  let n = await $$W13({
    [e]: [t]
  }, r);
  return n[e]?.[t];
}
export async function $$W13(e, t) {
  let r = debugState.getState();
  let n = r.openFile?.key;
  let i = await XHR.post("/api/widgets/v2/versions", {
    ids_to_versions: e,
    org_id: t,
    file_key: n
  });
  let a = i?.data?.meta || {};
  debugState.dispatch($$V20(a));
  debugState.dispatch($$H33(Object.fromEntries(Object.entries(e).map(([e, t]) => [e, Object.fromEntries(t.map(e => [e, !0]))]))));
  return a;
}
let $$K18 = createOptimistThunk(async (e, {
  pluginIds: t
}) => {
  let {
    currentUserOrgId,
    publishedPlugins
  } = e.getState();
  let i = t.filter(e => !publishedPlugins[e]);
  if (i.length) try {
    let e = await pluginAPIService.postPluginsBatch(i, currentUserOrgId);
    let t = e.data?.meta ?? [];
    debugState.dispatch(Qi({
      publishedPlugins: t,
      src: "fetchPublishedPlugins",
      overrideInstallStatus: !0
    }));
  } catch {
    return;
  }
});
let $$Y8 = createOptimistThunk(async (e, {
  widgetIds: t
}) => {
  let {
    currentUserOrgId,
    publishedWidgets
  } = e.getState();
  let i = t.filter(e => !publishedWidgets[e]);
  if (i.length) try {
    let e = await XHR.post("/api/widgets/batch", {
      ids: i,
      org_id: currentUserOrgId
    });
    let t = e.data?.meta ?? [];
    debugState.dispatch(Qi({
      publishedPlugins: t,
      src: "fetchPublishedWidgets",
      overrideInstallStatus: !0
    }));
  } catch {
    return;
  }
});
let $$$1 = createOptimistThunk(async (e, {
  widgetIDAndVersions: t
}) => {
  let {
    currentUserOrgId
  } = e.getState();
  let n = [];
  let i = {};
  t.forEach(({
    widgetID: e,
    widgetVersionID: t
  }) => {
    i[e] ? i[e].includes(t) || i[e].push(t) : (n.push(e), i[e] = [t]);
  });
  0 !== n.length && (await $$W13(i, currentUserOrgId), e.dispatch($$B16({
    widgetIDToVersions: i
  })), e.dispatch($$Y8({
    widgetIds: Object.keys(i)
  })));
});
let $$X26 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let n = pluginAPIService.getProfile({
    profileId: t.profileId,
    currentOrgId: e.getState().currentUserOrgId || void 0
  });
  let i = UM(t.profileId);
  setupLoadingStateHandler(n, e, r);
  return n.then(async ({
    data: t
  }) => {
    let r = [...(await i), ...t.meta];
    e.dispatch(Qi({
      publishedPlugins: r,
      src: "getCommunityProfilePlugins"
    }));
    return r;
  });
}, ({
  profileId: e
}) => `GET_COMMUNITY_PROFILE_PLUGINS_${e}`);
createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let n = U.getProfile({
    profileId: t.profileId,
    currentOrgId: e.getState().currentUserOrgId || void 0
  });
  let i = Jr(t.profileId);
  setupLoadingStateHandler(n, e, r);
  return n.then(async ({
    data: t
  }) => {
    let r = [...(await i), ...t.meta];
    e.dispatch(Qi({
      publishedPlugins: r,
      src: "getCommunityProfileWidgets"
    }));
    return r;
  });
}, ({
  profileId: e
}) => `GET_COMMUNITY_PROFILE_WIDGETS_${e}`);
let $$q7 = createOptimistThunk((e, t, {
  loadingKey: r
}) => {
  let n = pluginAPIService.getOrg({
    orgId: t
  });
  setupLoadingStateHandler(n, e, r);
  return n.then(({
    data: t
  }) => {
    let r = t.meta;
    e.dispatch(Qi({
      publishedPlugins: r,
      src: "getOrgPublishedPlugins"
    }));
    return r;
  });
}, e => `GET_ORG_PUBLISHED_PLUGINS_${e}`);
let $$J14 = createOptimistThunk(async (e, t, {
  loadingKey: r
}) => {
  try {
    e.dispatch(loadingStatePutLoading({
      key: r
    }));
    let n = await U.getOrg({
      orgId: t
    });
    let i = n?.data?.meta || [];
    e.dispatch(Qi({
      publishedPlugins: i,
      src: "getOrgPublishedWidgets"
    }));
    e.dispatch(loadingStatePutSuccess({
      key: r
    }));
    return i;
  } catch (t) {
    FlashActions.flash(t.message || getI18nString("community.actions.an_error_occurred_while_trying_to_fetch_the_org_widgets_list"));
    e.dispatch(loadingStatePutFailure({
      key: r
    }));
    return [];
  }
}, e => `GET_ORG_PUBLISHED_WIDGETS_${e}`);
async function Z(e, t, r) {
  if (null === e.current_plugin_version_id || !e.id) throw Error(getI18nString("community.actions.resource_is_invalid"));
  let i = 0;
  t.iconBlob && (i = validateExtensionIconImage(t.iconBlob));
  let a = 0;
  t.coverBlob && (a = validateArtworkImage(t.coverBlob));
  let o = t.carouselMedia;
  let {
    uploadImages,
    uploadVideos,
    allMedia
  } = Kg(o);
  let g = await _$$w.postPluginImagesUpload(e.id, e.is_widget, uploadImages);
  let f = Promise.resolve(!1);
  let E = t.iconBlob;
  void 0 !== E && (f = _$$c(E).then(e => Ac(g.iconUploadUrl, E, e)).then(() => !0).catch(t => {
    reportError(_$$e.COMMUNITY, t);
    let r = resolveMessage(t, getI18nString("community.actions.could_not_connect_to_the_server"));
    throw Error(isWidget(e) ? getI18nString("community.actions.error_uploading_widget_icon_error", {
      error: r
    }) : getI18nString("community.actions.error_uploading_plugin_icon_error", {
      error: r
    }));
  }));
  let y = Promise.resolve(!1);
  let b = t.coverBlob;
  void 0 !== b && (y = _$$c(b).then(e => Ac(g.coverImageUploadUrl, b, e)).then(() => !0).catch(t => {
    reportError(_$$e.COMMUNITY, t);
    return Error(isWidget(e) ? getI18nString("community.actions.error_uploading_widget_artwork_image_error", {
      error: resolveMessage(t, t.data?.message || "unknown error")
    }) : getI18nString("community.actions.error_uploading_plugin_artwork_image_error", {
      error: resolveMessage(t, t.data?.message || "unknown error")
    }));
  }));
  let {
    snapshotBlob
  } = t;
  let v = Promise.resolve(!1);
  void 0 !== snapshotBlob && (v = _$$c(snapshotBlob).then(e => {
    if (!g.snapshotUploadUrl) throw Error("Snapshot upload url is missing");
    return Ac(g.snapshotUploadUrl, snapshotBlob, e);
  }).then(() => !0).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    return Error(getI18nString("community.actions.error_uploading_widget_snapshot_image_error", {
      error: resolveMessage(e, e.data?.message || "unknown error")
    }));
  }));
  let A = Rd(g.carouselImages, o);
  let [x, C, O] = await Promise.all([f, y, v, ...A]);
  let L = uploadVideos.map(t => Gf(getResourceTypeLabel(e, {
    pluralized: !0
  }), e.id, {
    sha1: t.sha1,
    bytes: t.bytes
  }, t.video_thumbnail_buffer, t.video_thumbnail_sha1).then(e => {
    allMedia.push({
      carousel_position: t.carousel_position,
      sha1: e.sha1,
      video_file_uuid: e.videoFileUuid,
      video_thumbnail_sha1: e.videoThumbnailSha1
    });
  }).then(() => !0).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    return Error(getI18nString("community.actions.error_uploading_plugin_video_error", {
      error: resolveMessage(e, e.data?.message || "unknown error")
    }));
  }));
  await Promise.all(L);
  let {
    data
  } = await XHR.put(`/api/${getResourceTypeLabel(e, {
    pluralized: !0
  })}/${e.id}/versions/${t.id}`, {
    icon_uploaded: x,
    cover_image_uploaded: C,
    snapshot_uploaded: O,
    carousel_media: allMedia,
    name: t.name,
    description: t.description,
    tagline: t.tagline,
    creator_policy: t.creatorPolicy,
    release_notes: t.releaseNotes,
    comments_setting: e.comments_setting,
    category_id: e.category_id,
    image_upload_nonce: g.imageUploadNonce,
    playground_fig_file_key: t.playground_fig_file_key,
    playground_file_publish_type: r
  }).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    return Error(getI18nString("community.actions.error_finalizing_plugin_error", {
      error: resolveMessage(e, e.data?.message || "unknown error")
    }));
  });
  let D = data.meta;
  let k = D.plugin;
  if (k.id !== e.id) throw Error(getI18nString("community.actions.the_published_resource_i_ds_do_not_match"));
  trackEventAnalytics("Hub Plugin Update Version", {
    pluginId: e.id,
    isWidget: e.is_widget,
    iconFileSize: i,
    coverFileSize: a
  });
  return {
    publishedPlugin: k,
    profile: D.profile
  };
}
async function Q(e, t, r, i, a, o, l, u, h, g, f) {
  let E;
  if (!e) throw Error(getI18nString("community.actions.plugin_id_is_invalid"));
  let [y, b] = await Promise.all([loadPluginManifest(t, {
    resourceType: getPluginWidgetLabel(g),
    isPublishing: !0
  }), loadLocalPluginSource(t)]);
  let T = validatePluginCodeSize(b);
  let v = 0;
  r.iconBlob && (v = validateExtensionIconImage(r.iconBlob));
  let A = 0;
  r.coverBlob && (A = validateArtworkImage(r.coverBlob));
  let x = r.carouselMedia;
  let {
    uploadImages,
    uploadVideos,
    allMedia
  } = Kg(x);
  let L = {
    manifest: y,
    release_notes: r.releaseNotes,
    name: r.name,
    description: r.description,
    tagline: r.tagline,
    creator_policy: r.creatorPolicy,
    tags: o,
    tags_v2: l,
    category_id: a,
    images_sha1: uploadImages
  };
  try {
    E = await _$$w.postPluginUpload(L, e, g);
  } catch (e) {
    reportError(_$$e.COMMUNITY, e);
    return Error(resolveMessage(e, getI18nString("community.actions.could_not_connect_to_the_server")));
  }
  let {
    codeUploadUrl,
    iconUploadUrl,
    coverImageUploadUrl,
    snapshotUploadUrl,
    signature,
    versionId,
    imageUploadNonce,
    carouselImages
  } = E;
  let G = Promise.resolve(!1);
  b && (G = $$ep30(codeUploadUrl, b).then(() => !0).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    let t = $$e_25(e) ?? resolveMessage(e, getI18nString("community.actions.could_not_connect_to_the_server"));
    throw Error(g ? getI18nString("community.actions.error_uploading_widget_code_error", {
      error: t
    }) : getI18nString("community.actions.error_uploading_plugin_code_error", {
      error: t
    }));
  }));
  let V = Promise.resolve(!1);
  let H = r.iconBlob;
  null != H && (V = _$$c(H).then(e => Ac(iconUploadUrl, H, e)).then(() => !0).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    let t = $$e_25(e) ?? resolveMessage(e, e.data?.message || "unknown error");
    throw Error(g ? getI18nString("community.actions.error_uploading_widget_icon_error", {
      error: t
    }) : getI18nString("community.actions.error_uploading_plugin_icon_error", {
      error: t
    }));
  }));
  let z = Promise.resolve(!1);
  let W = r.coverBlob;
  null != W && (z = _$$c(W).then(e => Ac(coverImageUploadUrl, W, e)).then(() => !0).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    let t = $$e_25(e) ?? resolveMessage(e, getI18nString("community.actions.could_not_connect_to_the_server"));
    throw Error(g ? getI18nString("community.actions.error_uploading_widget_artwork_image_error", {
      error: t
    }) : getI18nString("community.actions.error_uploading_plugin_artwork_image_error", {
      error: t
    }));
  }));
  let {
    snapshotBlob
  } = r;
  let Y = Promise.resolve(!1);
  null != snapshotBlob && snapshotUploadUrl && (Y = _$$c(snapshotBlob).then(e => Ac(snapshotUploadUrl, snapshotBlob, e)).then(() => !0).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    return Error(getI18nString("community.actions.error_uploading_widget_snapshot_image_error", {
      error: $$e_25(e) ?? resolveMessage(e, e.data?.message || "unknown error")
    }));
  }));
  let $ = Rd(carouselImages, x);
  let [X, q, J, Z] = await Promise.all([G, V, z, Y, ...$]);
  let Q = uploadVideos.map(async t => {
    try {
      let r = await Gf(g ? "widgets" : "plugins", e, {
        sha1: t.sha1,
        bytes: t.bytes
      }, t.video_thumbnail_buffer, t.video_thumbnail_sha1);
      allMedia.push({
        carousel_position: t.carousel_position,
        sha1: r.sha1,
        video_file_uuid: r.videoFileUuid,
        video_thumbnail_sha1: r.videoThumbnailSha1
      });
      return !0;
    } catch (e) {
      reportError(_$$e.COMMUNITY, e);
      return Error(getI18nString("community.actions.error_uploading_plugin_video_error", {
        error: resolveMessage(e, e.data?.message || "unknown error")
      }));
    }
  });
  await Promise.all(Q);
  let {
    data
  } = await XHR.put(`/api/${getPluginWidgetLabel(!!g, {
    pluralized: !0
  })}/${e}/versions/${versionId}`, {
    icon_uploaded: q,
    cover_image_uploaded: J,
    snapshot_uploaded: Z,
    carousel_media: allMedia,
    code_uploaded: X,
    comments_setting: i,
    category_id: a,
    signature,
    image_upload_nonce: imageUploadNonce,
    agreed_to_tos: u,
    org_id: h,
    playground_fig_file_key: r.playground_fig_file_key,
    playground_file_publish_type: f
  }).catch(e => {
    reportError(_$$e.COMMUNITY, e);
    return Error(g ? getI18nString("community.actions.error_finalizing_widget_error", {
      error: resolveMessage(e, e.data?.message || "")
    }) : getI18nString("community.actions.error_finalizing_plugin_error", {
      error: resolveMessage(e, e.data?.message || "")
    }));
  });
  let et = data.meta;
  let er = et.plugin;
  if (er.id !== e) throw Error(getI18nString("community.actions.the_published_resource_i_ds_do_not_match"));
  trackEventAnalytics("Hub Plugin Publish Version", {
    pluginId: e,
    hasUI: !!y.ui,
    apiVersion: y.api,
    codeLength: T,
    iconFileSize: v,
    coverFileSize: A,
    isWidget: g,
    editorType: y.editorType?.sort().join(", ")
  });
  return {
    publishedPlugin: er,
    profile: et.profile
  };
}
let $$ee5 = d6("PLUGIN");
let {
  updateMetadata,
  updateStatus,
  clearMetadataAndStatus,
  clearMetadata
} = $$ee5;
let $$ea2 = createOptimistThunk(async (e, t) => {
  let {
    pluginVersion,
    localFileId,
    pluginId,
    commentsSetting,
    categoryId,
    callback,
    agreedToTos,
    orgId,
    isWidget,
    playgroundFilePublishType,
    tags,
    tagsV2
  } = t;
  e.dispatch(updateStatus({
    id: localFileId,
    status: {
      code: UploadStatusEnum.UPLOADING
    }
  }));
  try {
    let {
      publishedPlugin,
      profile
    } = await Q(pluginId, localFileId, pluginVersion, commentsSetting, categoryId, tags, tagsV2, agreedToTos, orgId, isWidget, playgroundFilePublishType);
    e.dispatch(Qi({
      publishedPlugins: [publishedPlugin],
      src: "publishPluginVersion"
    }));
    profile && (e.dispatch(HZ(profile)), e.dispatch(Oo(profile)));
    e.dispatch(updateStatus({
      id: localFileId,
      status: {
        code: UploadStatusEnum.SUCCESS
      }
    }));
    e.dispatch(clearMetadata({
      id: localFileId
    }));
    callback();
  } catch (r) {
    e.dispatch(updateStatus({
      id: localFileId,
      status: {
        code: UploadStatusEnum.FAILURE,
        error: r.message
      }
    }));
    let t = getI18nString("community.actions.could_not_publish_plugin_error", {
      error: resolveMessage(r, r.message)
    });
    r instanceof qW ? MZ(e.dispatch, getI18nString("check_network_compatibility.error_bell.video_upload.message")) : r.message.includes("invalid word") || e.dispatch(VisualBellActions.enqueue({
      message: t,
      error: !0
    }));
    reportError(_$$e.COMMUNITY, r);
    return Error(t);
  }
});
let $$es11 = createOptimistThunk(async (e, t) => {
  let {
    resource,
    pluginVersion,
    callback,
    playgroundFilePublishType,
    localFileIdOrPluginId
  } = t;
  try {
    e.dispatch(updateStatus({
      id: localFileIdOrPluginId,
      status: {
        code: UploadStatusEnum.UPLOADING
      }
    }));
    let {
      profile,
      publishedPlugin
    } = await Z(resource, pluginVersion, playgroundFilePublishType);
    e.dispatch(Qi({
      publishedPlugins: [publishedPlugin],
      src: "updatePublishedPluginRole"
    }));
    profile && e.dispatch(Oo(profile));
    e.dispatch(updateStatus({
      id: localFileIdOrPluginId,
      status: {
        code: UploadStatusEnum.SUCCESS
      }
    }));
    callback();
  } catch (r) {
    let t = resolveMessage(r, r.message);
    r instanceof qW ? MZ(e.dispatch, getI18nString("check_network_compatibility.error_bell.video_upload.message")) : e.dispatch(VisualBellActions.enqueue({
      message: t,
      error: !0
    }));
    e.dispatch(updateStatus({
      id: localFileIdOrPluginId,
      status: {
        code: UploadStatusEnum.FAILURE,
        error: t
      }
    }));
    reportError(_$$e.COMMUNITY, r);
    return Error(`Failed plugin patchVersion: ${r.message}`);
  }
});
let $$eo35 = createOptimistThunk(async (e, {
  pluginId: t,
  role: r,
  agreedToTos: i,
  isWidget: a
}) => {
  let o;
  let l = {
    org_id: r.org ? r.org.id : void 0,
    is_public: r.is_public,
    agreed_to_tos: i
  };
  o = a ? XHR.put(`/api/widgets/${t}/roles`, l) : XHR.put(`/api/plugins/${t}/roles`, l);
  await o.then(({
    data: r
  }) => {
    let n = r.meta;
    trackEventAnalytics("Hub Plugin Publish Role", {
      pluginId: t,
      toPublic: n.roles.is_public,
      toOrg: !!n.roles.org,
      needApproval: isResourcePendingPublishing(n),
      isWidget: a
    });
    e.dispatch(Qi({
      publishedPlugins: [n],
      src: "updatePublishedPluginRole"
    }));
  }).catch(t => {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.publishing.could_not_publish_plugin_error", {
        error: resolveMessage(t, t.data?.message)
      }),
      error: !0
    }));
    reportError(_$$e.COMMUNITY, t);
  });
});
let $$el10 = createOptimistThunk(async (e, t) => {
  let r;
  if (t.authorOrgId && t.authorTeamId) {
    console.error("Attempting to set both authorOrgId and authorTeamId while publishing");
    return;
  }
  let {
    isWidget,
    pluginId
  } = t;
  let s = {
    tags: t.tags,
    tags_v2: t.tagsV2,
    support_contact: t.supportContact,
    author_org_id: t.authorOrgId,
    author_team_id: t.authorTeamId,
    publisher_ids: t.publisherIds,
    hide_related_content_by_others: t.hideRelatedContentByOthers,
    agreed_to_tos: t.agreedToTos,
    is_paid: t.isPaid,
    is_subscription: t.isSubscription,
    price: t.price,
    has_freemium_code: t.hasFreemiumCode,
    category_id: t.categoryId,
    is_public: t.isPublic,
    annual_discount_percentage: t.annualDiscount,
    is_annual_discount_active: t.isAnnualDiscountActive
  };
  r = isWidget ? XHR.put(`/api/widgets/${pluginId}`, s) : XHR.put(`/api/plugins/${pluginId}`, s);
  await r.then(({
    data: r
  }) => {
    let n = r.meta;
    e.dispatch(Qi({
      publishedPlugins: [n],
      src: "updatePublishedPlugin"
    }));
    t.onSuccess?.();
  }).catch(t => {
    e.dispatch(VisualBellActions.enqueue({
      message: getI18nString("community.publishing.could_not_publish_plugin_error", {
        error: resolveMessage(t, t.data?.message)
      }),
      error: !0
    }));
    reportError(_$$e.COMMUNITY, t);
  });
});
let $$ed17 = createOptimistThunk((e, {
  resource: t
}) => {
  XHR.del(`/api/${getResourceTypeLabel(t, {
    pluralized: !0
  })}/${t.id}`).then(({
    data: r
  }) => {
    let n = r.meta;
    e.dispatch(Qi({
      publishedPlugins: [n],
      src: "unpublishPublishedPlugin"
    }));
    trackEventAnalytics("Hub Unpublish Plugin", {
      pluginId: t.id,
      ...getResourceRoleInfo(t)
    });
  }).catch(r => {
    e.dispatch(VisualBellActions.enqueue({
      message: isWidget(t) ? getI18nString("community.actions.could_not_publish_widget_error", {
        error: resolveMessage(r, r.data?.message)
      }) : getI18nString("community.actions.could_not_publish_plugin_error", {
        error: resolveMessage(r, r.data?.message)
      }),
      error: !0
    }));
    reportError(_$$e.COMMUNITY, r);
  });
});
let $$ec15 = createOptimistThunk((e, {
  id: t,
  resourceType: r
}, {
  loadingKey: n
}) => {
  let i = t => e.dispatch(Qi({
    publishedPlugins: [t],
    src: "getResourceVersions",
    overrideInstallStatus: !0
  }));
  let a = r === HubTypeEnum.WIDGET ? U.getVersions({
    widgetId: t
  }) : pluginAPIService.getVersions({
    pluginId: t
  });
  setupLoadingStateHandler(a, e, n);
  a.then(({
    data: e
  }) => {
    i(e.meta.plugin);
  }).catch(e => {
    console.log(`Versions of ${r} with id ${t} cannot be fetched at this time:`, e.data?.message);
  });
}, ({
  id: e
}) => `GET_PLUGIN_VERSIONS_${e}`);
let $$eu34 = createOptimistThunk(async (e, t) => {
  let {
    role,
    userId,
    resource
  } = t;
  try {
    let t = (resource.is_widget ? await XHR.put(`/api/widgets/${resource.id}/publishers/${userId}`, {
      role
    }) : await XHR.put(`/api/plugins/${resource.id}/publishers/${userId}`, {
      role
    })).data.meta.plugin;
    let n = e.getState().user;
    role === PublisherRole.NONE && userId === n?.id && (t.plugin_publishers = {
      accepted: [],
      pending: []
    });
    e.dispatch(Qi({
      publishedPlugins: [t],
      src: "setPluginPublisherRole"
    }));
    let s = e.getState();
    let {
      publishingPlugins,
      localPlugins,
      publishedPlugins,
      publishedWidgets,
      currentUserOrgId,
      authedProfilesById
    } = s;
    let h = Object.values(localPlugins).find(e => e.plugin_id === resource.id);
    let m = h?.localFileId ?? resource.id;
    let f = getPublishingData({
      ...getPermissionsState(s),
      currentUserOrgId,
      localPlugins,
      publishedPlugins,
      publishedWidgets,
      authedProfilesById
    }, h?.localFileId);
    let E = {
      ...publishingPlugins[m].metadata,
      author: f.author,
      publishers: f.publishers,
      creators: f.creators,
      blockPublishingOnToS: f.blockPublishingOnToS
    };
    e.dispatch(updateMetadata({
      id: m,
      metadata: E
    }));
  } catch (t) {
    e.dispatch(VisualBellActions.enqueue({
      message: resolveMessage(t, t.message),
      error: !0
    }));
    reportError(_$$e.COMMUNITY, t);
    return Error(t.message);
  }
});
export function $$ep30(e, t) {
  let {
    fields,
    codePath,
    signedCloudfrontUrl
  } = e;
  let s = new FormData();
  return (Object.entries(fields).forEach(([e, t]) => s.append(e, t)), s.set("Content-Type", "text/javascript"), s.append("file", t), signedCloudfrontUrl && getFeatureFlags().ext_s3_url_use_figma_domains) ? XHR.crossOriginPut(signedCloudfrontUrl, t, {
    raw: !0,
    headers: {
      "Content-Type": "text/javascript",
      "Cache-Control": "private, max-age=86400",
      "x-amz-acl": "bucket-owner-full-control"
    }
  }) : XHR.crossOriginPost(codePath, s, {
    raw: !0,
    headers: {
      "Content-Type": "multipart/form-data",
      "Cache-Control": "private, max-age=86400"
    }
  });
}
export function $$e_25(e) {
  let t = e.data;
  if (!t || "string" != typeof t) return;
  let r = new DOMParser().parseFromString(t, "text/xml").getElementsByTagName("Code");
  if (r && r[0] && "EntityTooLarge" === r[0].textContent) return getI18nString("community.actions.file_too_large");
}
export { GV, Qi, Vx, l5, l7, uV } from "../905/172918";
export const $Z = $$z0;
export const Cf = $$$1;
export const Dl = $$ea2;
export const Ij = clearMetadataAndStatus;
export const KJ = $$ee5;
export const L4 = $$M6;
export const LP = $$q7;
export const O8 = $$Y8;
export const R8 = $$el10;
export const Vp = $$es11;
export const W9 = $$W13;
export const a8 = $$J14;
export const af = $$ec15;
export const b6 = $$B16;
export const et = $$ed17;
export const f1 = $$K18;
export const fd = $$U19;
export const fs = $$V20;
export const fy = updateMetadata;
export const gD = updateStatus;
export const n1 = $$e_25;
export const pZ = $$X26;
export const pm = clearMetadata;
export const se = $$j28;
export const uF = $$F29;
export const uT = $$ep30;
export const uX = $$G32;
export const uw = $$H33;
export const wx = $$eu34;
export const zn = $$eo35;