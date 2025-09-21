import { throwTypeError } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { FirstDraftHelpers, LogToConsoleMode, Fullscreen } from "../figma_app/763686";
import { StyleType } from "../figma_app/276332";
import { getFeatureFlags } from "../905/601108";
import { waitForAnimationFrame } from "../905/236856";
import c from "../vendor/223926";
import { createActionCreator } from "../905/73481";
import { trackEventAnalytics } from "../905/449184";
import { sendHistogram, sendMetric } from "../905/485103";
import { PerfTimer } from "../905/609396";
import { uploadToPresignedPost, UploadError } from "../905/623179";
import { reportError } from "../905/11";
import { logError, logWarning } from "../905/714362";
import { handleAtomEvent } from "../905/502364";
import { getI18nString } from "../905/303541";
import { NotificationCategory } from "../905/170564";
import { notificationActions } from "../905/463586";
import { VisualBellActions } from "../905/302958";
import { VisualBellIcon } from "../905/576487";
import { createOptimistThunk } from "../905/350402";
import { componentReplaceLocal } from "../905/879323";
import { hideModal } from "../905/156213";
import { postUserFlag } from "../905/985254";
import { getSelectedFile } from "../905/766303";
import { z as _$$z } from "../905/853613";
import { Hj } from "../figma_app/412398";
import { tf } from "../905/295427";
import { isStagedStatus, getContainingStateGroupNodeId } from "../figma_app/646357";
import { aB, jx } from "../905/576221";
import { maybeCreateSavepoint } from "../905/294113";
import { MH, dM, cM, bh, x6, tK, Io } from "../figma_app/803787";
import { getTeamById } from "../figma_app/598018";
import { O as _$$O } from "../905/566074";
import { StagingStatusEnum, PrimaryWorkflowEnum, LibraryPublishStatusEnum, PublishStatusEnum, DEFAULT_LIBRARY_LIMIT, NO_CONTAINING_STATE_GROUP_ID } from "../figma_app/633080";
import { librariesAPI } from "../905/939602";
import { Gh } from "../figma_app/707567";
import { b as _$$b2 } from "../905/76245";
import { I6, fn, p$ } from "../905/831303";
import { jO, cc, UN, tZ } from "../905/573265";
import { Nf } from "../figma_app/864378";
var u = c;
let $$K1 = createActionCreator("START_PUBLISH");
let $$Y5 = createActionCreator("PUBLISH_PROGRESS");
let $$$3 = createActionCreator("PUBLISH_REQUEST_FINISHED");
let $$X0 = createActionCreator("SAVE_PUBLISH_DESCRIPTION");
let $$q2 = createOptimistThunk(e => {
  e.dispatch(notificationActions.dequeue({
    type: NotificationCategory.MOVE_COMPONENTS_PROMPT
  }));
  handleAtomEvent({
    id: "Finished publishing components"
  });
  e.dispatch($$$3());
});
let J = "library publish SSP";
var Z = (e => (e.PublishStart = "publish_start", e.CreateSavepoint = "create_savepoint", e.GetPresignedPost = "get_presigned_post", e.UploadThumbnails = "upload_thumbnails", e.UploadParams = "upload_params", e.AssetValidation = "asset_validation", e.NonS3Error = "non_s3_error", e.GenericError = "generic_error", e))(Z || {});
export let $$Q8 = createOptimistThunk((e, {
  hubFileId: t,
  localAssetsWithDenormalizedPublishInfo: r
}) => {
  let n = e.getState();
  let i = getFeatureFlags().ds_remove_redux_library_status;
  if (!i) {
    let t = e => {
      for (let t in e = {
        ...e
      }) isStagedStatus(e[t].status) ? e[t].status = StagingStatusEnum.DELETED : e[t].status === StagingStatusEnum.NEW && (e[t].status = StagingStatusEnum.NOT_STAGED);
      return e;
    };
    let r = t(n.library.local.components);
    let i = t(n.library.local.stateGroups);
    let a = t(n.library.local.styles);
    e.dispatch(componentReplaceLocal({
      local: r,
      type: PrimaryWorkflowEnum.COMPONENT
    }));
    e.dispatch(componentReplaceLocal({
      local: i,
      type: PrimaryWorkflowEnum.STATE_GROUP
    }));
    e.dispatch(componentReplaceLocal({
      local: a,
      type: PrimaryWorkflowEnum.STYLE
    }));
  }
  e.dispatch($$Y5({
    state: LibraryPublishStatusEnum.NONE
  }));
  e.dispatch($$eo4({
    unpublishAll: i,
    hubFileId: t,
    localAssetsWithDenormalizedPublishInfo: r
  }));
});
async function ee(e, t, r, n) {
  let i = new PerfTimer("publish.client.generate_and_upload_thumbnails", {});
  if (i.start(), !e.length) return {
    s3Paths: [],
    failedThumbnailNodeIds: [],
    styleMetaByNodeId: {},
    uploadDurationMs: 0,
    encounteredNonS3PresignedPostError: !1
  };
  let s = e.length;
  let o = 0;
  let l = () => {
    !function (e, t, r) {
      e.dispatch($$Y5({
        state: LibraryPublishStatusEnum.ASSEMBLING_COMPONENTS,
        progress: t,
        publishType: r,
        publishStartMs: et(e.getState().library.publishProgress)
      }));
    }(n, (o += 1) / s, t ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH);
  };
  let d = Object.create(null);
  let c = [];
  let u = [];
  if (await Promise.all(e.map(async e => {
    try {
      let t = await scheduler.postTask(() => I6(e, r), {
        priority: "user-blocking"
      });
      if (!t || 0 === t.length) throw Error("Unable to generate thumbnail");
      let [n, i] = e.node_id.split(":").map(e => Number(e));
      if (isNaN(n)) throw Error("Unable to parse sessionId");
      if (isNaN(i)) throw Error("Unable to parse localId");
      u.push({
        sessionId: n,
        localId: i,
        thumbnail: t
      });
      e.type === PrimaryWorkflowEnum.STYLE && (d[e.node_id] = JSON.stringify(fn(e, r)));
    } catch (t) {
      logError("publish", "Failed to upload thumbnail for asset", {
        guid: e.node_id
      }, {
        reportAsSentryError: !0
      });
      c.push(e.type === PrimaryWorkflowEnum.COMPONENT && e.containing_frame?.containingStateGroup?.nodeId || e.node_id);
    } finally {
      l();
    }
  })), 0 === u.length) return {
    s3Paths: [],
    failedThumbnailNodeIds: c,
    styleMetaByNodeId: {},
    uploadDurationMs: 0,
    encounteredNonS3PresignedPostError: !1
  };
  let p = [];
  for (; u.length;) p.push(u.splice(0, DEFAULT_LIBRARY_LIMIT));
  let y = _$$b2.getThumbnailsBufferPresignedPostUrl(p.length);
  let b = p.map(e => e.reduce(({
    buffer: e,
    offset: t,
    guids: r
  }, {
    sessionId: n,
    localId: i,
    thumbnail: a
  }) => (e.set([(0xff000000 & n) >> 24, (0xff0000 & n) >> 16, (65280 & n) >> 8, 255 & n, (0xff000000 & i) >> 24, (0xff0000 & i) >> 16, (65280 & i) >> 8, 255 & i, (0xff000000 & a.byteLength) >> 24, (0xff0000 & a.byteLength) >> 16, (65280 & a.byteLength) >> 8, 255 & a.byteLength], t), t += 12, e.set(a, t), t += a.byteLength, r.push(`${n}:${i}`), {
    buffer: e,
    offset: t,
    guids: r
  }), {
    buffer: new Uint8Array(e.reduce((e, {
      thumbnail: t
    }) => e + t.byteLength + 12, 0)),
    offset: 0,
    guids: []
  }));
  let T = [];
  let I = (await y).data.meta.presigned_posts;
  let S = !1;
  await Promise.allSettled(I.map(async ({
    url: e,
    fields: t
  }) => {
    let r = b.shift();
    if (!r) {
      reportError(_$$e.DESIGN_SYSTEMS_EDITOR, Error("Popped a concatenated buffer that does not exist"));
      return;
    }
    try {
      T.push(await uploadToPresignedPost(_$$e.DESIGN_SYSTEMS_EDITOR, "uploadThumbnails", e, t, r.buffer, "application/octet-stream"));
      sendHistogram("publish.thumbnails_buffer.bytes", r.buffer.byteLength);
    } catch (e) {
      e instanceof UploadError && (S = !0);
      c.push(...r.guids);
    }
  }));
  S && reportError(_$$e.DESIGN_SYSTEMS_EDITOR, Error("uploadThumbnails: encountered non-S3 presigned POST error"));
  let v = i.stop();
  v && trackEventAnalytics("Library generate and upload thumbnails", {
    elapsedMs: v,
    duration: v
  }, {
    forwardToDatadog: !0
  });
  return {
    s3Paths: T,
    styleMetaByNodeId: d,
    failedThumbnailNodeIds: c,
    uploadDurationMs: v,
    encounteredNonS3PresignedPostError: S
  };
}
function et(e) {
  return e.state === LibraryPublishStatusEnum.NONE ? (logError(J, "Attempted to update progress while not assembling components", e), null) : e.publishStartMs;
}
function er(e, t, r, n) {
  let i = et(e);
  if (i) {
    let e = performance.now() - i;
    trackEventAnalytics(t, {
      duration: e
    });
    sendHistogram(r, e, {
      error: n
    });
  } else logError(J, "Publish start time was null");
}
function en(e, t, r, n, i, a, s, o) {
  0 === t ? function (e, t, r, n) {
    if (t.state === LibraryPublishStatusEnum.UPLOADING) {
      let e = et(t);
      if (e) {
        let n = performance.now();
        let i = n - e;
        let a = r ? {
          totalDurationMs: i
        } : {
          totalDurationMs: i,
          uploadBuffersDurationMs: n - t.commitUpdatesDurationMs,
          clientPreWorkDurationMs: t.clientPreWorkDurationMs,
          createSavePointDurationMs: t.createSavePointDurationMs
        };
        trackEventAnalytics(`Client perceived ${t.publishType} duration`, a);
        let s = getFeatureFlags().ssp_stop_client_gen_thumb_generation ? "true" : "false";
        for (let [e, r] of Object.entries(a)) {
          let n = `${t.publishType}.success.${e}`;
          sendHistogram(n, r, {
            skip_client_thumbnail: s
          });
        }
      } else logError(J, "Publish start time was null");
    }
    n({
      publishProgress: t,
      publishType: r ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH,
      dispatch: e
    });
    e($$X0(""));
  }(n, e, r, i) : function (e, t, r, n, i, a, s) {
    let o = n ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH;
    if (a && e($$X0(a)), s) {
      i({
        error: jO.NonS3PresignedPost,
        publishType: o,
        dispatch: e
      });
      return;
    }
    "number" != typeof r ? i({
      error: jO.GenericError,
      publishType: o,
      dispatch: e
    }) : (er(t, "Partial publish failure", `${o}.partial_error.duration`, "asset_validation"), i({
      error: jO.PartialPublish,
      publishType: o,
      dispatch: e,
      numPublishSkippedDueToError: r
    }));
  }(n, e, t, r, a, s, o);
}
export function $$ei6(e, t, r, n, i, a, s, o) {
  trackEventAnalytics("Publish ended", {
    savepointId: i.id,
    hadException: a
  });
  en(e, t, r, n, s, o, i.description);
  n($$q2());
}
let ea = async e => {
  let t;
  if (getFeatureFlags().first_draft_publish_ux && (e.publishAsFirstDraftKit || e.unpublishAll)) {
    let r = FirstDraftHelpers.getLocalDesignSystemKits();
    if (r.length > 1) logWarning("first_draft", "Attempting to publish a file with multiple kits", {
      kitNames: r.map(e => e.name)
    });else if (1 === r.length) {
      let n = r[0];
      if (!n) {
        logWarning("first_draft", "No kit found for publishing", {
          kits: r
        });
        return;
      }
      t = await Hj(n.pageId, n.name, {
        publishType: tf.LIBRARY_TYPE_INFO_UPDATE
      }, e.firstDraftVariablesForTheme, e.unpublishAll);
    }
  }
  return t;
};
let $$es7 = createOptimistThunk(async (e, t = {}) => {
  let r = e.getState();
  let n = getSelectedFile(r);
  let i = n?.key;
  if (!i) {
    logWarning("first_draft", "No file key found for publishing");
    return;
  }
  let a = VisualBellActions.enqueue({
    type: "first-draft-publish",
    message: "Publishing changes...",
    icon: VisualBellIcon.SPINNER
  });
  let s = VisualBellActions.enqueue({
    type: "first-draft-publish",
    message: "Changes published",
    icon: VisualBellIcon.CHECK
  });
  let o = VisualBellActions.enqueue({
    type: "first-draft-publish",
    message: "Failed to publish changes",
    icon: VisualBellIcon.EXCLAMATION,
    error: !0
  });
  e.dispatch(hideModal());
  e.dispatch(a);
  let l = await ea(t);
  if (!l) {
    logWarning("first_draft", "No kit metadata found for publishing");
    e.dispatch(o);
    return;
  }
  try {
    await Gh.postFirstDraftUpdateMetadata({
      fileKey: i,
      publishMetadata: l
    });
    e.dispatch(s);
  } catch (t) {
    logWarning("first_draft", "Failed to publish changes", {
      error: t
    });
    e.dispatch(o);
  }
});
let $$eo4 = createOptimistThunk(async (e, t = {}) => {
  let r;
  let c;
  let p;
  let y;
  let T;
  let I;
  let S;
  let A = e.getState();
  let x = t.onPublishSuccess ?? cc;
  let G = t.onPublishProgress ?? UN;
  let V = t.onPublishError ?? tZ;
  t.publishingMode && t.publishingMode !== A.library.libraryPublishingMode && logError(J, "Publishing Mode does not match Redux state, and this will cause downstream errors.", {
    desiredPublishingMode: t.publishingMode,
    reduxLibraryPublishingMode: A.library.libraryPublishingMode
  });
  let $ = t.localAssetsWithDenormalizedPublishInfo ?? {};
  if (A.library.publishProgress.state !== LibraryPublishStatusEnum.NONE) {
    e.dispatch($$q2());
    return;
  }
  let X = getSelectedFile(A);
  if (!X) {
    console.error("library publishChanges: file is null");
    V({
      error: jO.NoFile,
      dispatch: e.dispatch
    });
    e.dispatch($$q2());
    return;
  }
  let Z = t.itemsToPublish;
  if (void 0 !== Z && 0 === Z.size) {
    console.error("No items selected to publish");
    V({
      error: jO.NoItemsToPublish,
      dispatch: e.dispatch
    });
    e.dispatch($$q2());
    return;
  }
  let Q = [PrimaryWorkflowEnum.CODE_COMPONENT, PrimaryWorkflowEnum.RESPONSIVE_SET].every(e => !_$$O(e) || aB(Object.values($).filter(t => t.type === e), Z));
  let ei = t.unpublishAll || aB(Object.values(MH(A)), Z) && aB(Object.values(dM(A)), Z) && aB(Object.values(cM(A)), Z) && aB(Object.values(bh(A)), Z) && (!_$$O(PrimaryWorkflowEnum.MODULE) || aB(Object.values(x6(A)), Z)) && Q;
  sendMetric(`${ei ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH}.start`);
  e.dispatch($$K1({
    unpublishAll: !!ei
  }));
  e.dispatch(postUserFlag({
    has_published_library_items: !0
  }));
  let ea = (r, n, i, a) => {
    e.dispatch(Nf());
    let o = a?.encounteredNonS3PresignedPostError ? "non_s3_error" : n;
    er(e.getState().library.publishProgress, r, `${ei ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH}.error.duration`, o);
    let l = a?.error;
    logError(J, r, {
      ...t,
      name: l?.name,
      message: l?.message,
      stack: l?.stack
    }, {
      logToConsole: LogToConsoleMode.ALWAYS,
      reportAsSentryError: !0,
      forwardToDatadog: !0
    });
    null !== i && trackEventAnalytics("Publish ended", {
      savepointId: i,
      hadException: !0
    });
    en(e.getState().library.publishProgress, a?.numSkippedDueToError ?? {
      __tag: "UNKNOWN"
    }, ei, e.dispatch, x, V, t.savepointDescription, a?.encounteredNonS3PresignedPostError);
    e.dispatch($$q2());
    let {
      hideModalOnPublishRequestFinish = !0
    } = t;
    hideModalOnPublishRequestFinish && e.dispatch(hideModal());
  };
  let es = jx(dM(A), MH(A), cM(A), tK(A), bh(A), x6(A), $, X, A.teams, {
    overridePublishPermissions: !!t.hubFileId,
    moveRemappings: t.moveInformation?.moveRemappings ?? {},
    itemsToPublish: Z,
    forcePublish: t.forcePublish,
    unpublishAll: t.unpublishAll
  });
  !function (e) {
    let t = new PerfTimer("publish.client.prep_nodes_for_thumbnailing", {});
    t.start();
    let r = e[PrimaryWorkflowEnum.STYLE][PublishStatusEnum.PUBLISH].filter(e => e.style_type === StyleType.TEXT);
    r.forEach(e => {
      Fullscreen.prepNodeForAssetThumbnailRendering(e.node_id);
    });
    let n = t.stop();
    n && trackEventAnalytics("Prepared node fields used for thumbnail rendering", {
      elapsedMs: n,
      textStylesCount: r.length
    }, {
      forwardToDatadog: !0
    });
  }(es);
  let eo = getFeatureFlags().ds_ssp_thumbnailing_client_prep_wait_extra_frames ? 10 : 2;
  for (let e = 0; e < eo; e++) await waitForAnimationFrame();
  let el = performance.now();
  let ed = "slides" === X.editor_type;
  let ec = ed ? getI18nString("design_systems.publish_actions.savepoint_for_unpublish_slides") : getI18nString("design_systems.publish_actions.savepoint_for_unpublish");
  let eu = ed ? getI18nString("design_systems.publish_actions.savepoint_for_publish_slides") : getI18nString("design_systems.publish_actions.savepoint_for_publish");
  try {
    r = await maybeCreateSavepoint(X.key, ei ? ec : eu, t.savepointDescription, e.dispatch, !0);
  } catch (t) {
    navigator.onLine ? ea("Unable to create savepoint during library publish", "create_savepoint", null, {
      error: t
    }) : (V({
      error: jO.Offline,
      publishType: ei ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH,
      dispatch: e.dispatch
    }), e.dispatch($$q2()));
    return;
  }
  if (!r) {
    ea("Created savepoint is null", "create_savepoint", null);
    return;
  }
  let ep = performance.now() - el;
  trackEventAnalytics("Publish start: savepoint successfully created", {
    savepointId: r.id
  });
  let e_ = u()(Object.values(A.library.local.components).filter(e => e.isLocal), e => getContainingStateGroupNodeId(e) || NO_CONTAINING_STATE_GROUP_ID);
  let eh = getTeamById(A);
  let {
    orderedUpdates
  } = function (e) {
    let t = [];
    let r = e => {
      e.assets.length && t.push(e);
    };
    let n = e[PrimaryWorkflowEnum.VARIABLE_SET][PublishStatusEnum.PUBLISH];
    r({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.VARIABLE_SET,
      assets: n
    });
    r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.VARIABLE_SET,
      assets: e[PrimaryWorkflowEnum.VARIABLE_SET][PublishStatusEnum.UNPUBLISH]
    });
    r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.VARIABLE,
      assets: e[PrimaryWorkflowEnum.VARIABLE][PublishStatusEnum.UNPUBLISH]
    });
    let i = e[PrimaryWorkflowEnum.STATE_GROUP][PublishStatusEnum.PUBLISH];
    let a = e[PrimaryWorkflowEnum.COMPONENT][PublishStatusEnum.UNPUBLISH].filter(e => null === getContainingStateGroupNodeId(e));
    r({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.STATE_GROUP,
      assets: i
    });
    r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.STATE_GROUP,
      assets: e[PrimaryWorkflowEnum.STATE_GROUP][PublishStatusEnum.UNPUBLISH]
    });
    r({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.COMPONENT,
      assets: e[PrimaryWorkflowEnum.COMPONENT][PublishStatusEnum.PUBLISH].filter(e => !getContainingStateGroupNodeId(e))
    });
    r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.COMPONENT,
      assets: a
    });
    r({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.STYLE,
      assets: e[PrimaryWorkflowEnum.STYLE][PublishStatusEnum.PUBLISH]
    });
    r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.STYLE,
      assets: e[PrimaryWorkflowEnum.STYLE][PublishStatusEnum.UNPUBLISH]
    });
    _$$O(PrimaryWorkflowEnum.MODULE) && (r({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.MODULE,
      assets: e[PrimaryWorkflowEnum.MODULE][PublishStatusEnum.PUBLISH]
    }), r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.MODULE,
      assets: e[PrimaryWorkflowEnum.MODULE][PublishStatusEnum.UNPUBLISH]
    }));
    _$$O(PrimaryWorkflowEnum.RESPONSIVE_SET) && (r({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.RESPONSIVE_SET,
      assets: e[PrimaryWorkflowEnum.RESPONSIVE_SET][PublishStatusEnum.PUBLISH]
    }), r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.RESPONSIVE_SET,
      assets: e[PrimaryWorkflowEnum.RESPONSIVE_SET][PublishStatusEnum.UNPUBLISH]
    }));
    _$$O(PrimaryWorkflowEnum.CODE_COMPONENT) && (r({
      publishType: PublishStatusEnum.PUBLISH,
      assetType: PrimaryWorkflowEnum.CODE_COMPONENT,
      assets: e[PrimaryWorkflowEnum.CODE_COMPONENT][PublishStatusEnum.PUBLISH]
    }), r({
      publishType: PublishStatusEnum.UNPUBLISH,
      assetType: PrimaryWorkflowEnum.CODE_COMPONENT,
      assets: e[PrimaryWorkflowEnum.CODE_COMPONENT][PublishStatusEnum.UNPUBLISH]
    }));
    return {
      orderedUpdates: t
    };
  }(es);
  let eg = orderedUpdates.reduce((e, {
    publishType: t,
    assetType: r,
    assets: i
  }) => {
    let a = "";
    switch (r) {
      case PrimaryWorkflowEnum.COMPONENT:
        a = "numComponentBuffers";
        break;
      case PrimaryWorkflowEnum.STATE_GROUP:
        a = "numStateGroupBuffers";
        break;
      case PrimaryWorkflowEnum.STYLE:
        a = "numStyleBuffers";
        break;
      case PrimaryWorkflowEnum.VARIABLE_SET:
        a = "numVariableSetBuffers";
        break;
      case PrimaryWorkflowEnum.MODULE:
        a = "numTemplateBuffers";
        break;
      case PrimaryWorkflowEnum.VARIABLE:
      case PrimaryWorkflowEnum.VARIABLE_OVERRIDE:
        break;
      case PrimaryWorkflowEnum.RESPONSIVE_SET:
        a = "numResponsiveSetBuffers";
        break;
      case PrimaryWorkflowEnum.CODE_LIBRARY:
        a = "numCodeLibraryBuffers";
        break;
      case PrimaryWorkflowEnum.CODE_FILE:
        a = "numCodeFileBuffers";
        break;
      case PrimaryWorkflowEnum.CODE_COMPONENT:
        a = "numCodeComponentBuffers";
        break;
      case PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE:
      case PrimaryWorkflowEnum.MANAGED_STRING:
        break;
      default:
        throwTypeError(r);
    }
    t === PublishStatusEnum.UNPUBLISH && (a = `${a}Unpublished`);
    let s = a;
    s in e && (e[s] = i.length);
    return e;
  }, {
    numComponentBuffers: 0,
    numStateGroupBuffers: 0,
    numStyleBuffers: 0,
    numVariableSetBuffers: 0,
    numTemplateBuffers: 0,
    numResponsiveSetBuffers: 0,
    numComponentBuffersUnpublished: 0,
    numStateGroupBuffersUnpublished: 0,
    numStyleBuffersUnpublished: 0,
    numVariableSetBuffersUnpublished: 0,
    numTemplateBuffersUnpublished: 0,
    numResponsiveSetBuffersUnpublished: 0,
    numCodeLibraryBuffers: 0,
    numCodeLibraryBuffersUnpublished: 0,
    numCodeFileBuffers: 0,
    numCodeFileBuffersUnpublished: 0,
    numCodeComponentBuffers: 0,
    numCodeComponentBuffersUnpublished: 0
  });
  trackEventAnalytics("Library publish upload", {
    fileKey: X.key,
    publishMode: _$$z(Io(A)),
    publishScope: t.publishScope,
    libraryModalSessionId: t.libraryModalSessionId,
    orgId: eh?.org_id,
    workspaceId: eh?.workspace_id,
    teamId: eh?.id,
    ...eg
  }, {
    forwardToDatadog: !0
  });
  let ef = orderedUpdates.flatMap(e => e.publishType === PublishStatusEnum.PUBLISH ? e.assets : []).reduce((e, t) => t.type !== PrimaryWorkflowEnum.VARIABLE && t.type !== PrimaryWorkflowEnum.VARIABLE_SET && _$$O(t.type) ? t.type === PrimaryWorkflowEnum.MODULE ? e.concat(t) : e.concat(t).concat(e_[t.node_id] || []) : e, []);
  if (getFeatureFlags().ssp_stop_client_gen_thumb_generation) c = {
    failedThumbnailNodeIds: [],
    s3Paths: [],
    styleMetaByNodeId: {},
    uploadDurationMs: 0,
    encounteredNonS3PresignedPostError: !1
  };else try {
    c = await ee(ef, ei, A.library.local.thumbnails, e);
  } catch (e) {
    ea("Unable to upload thumbnails during library publish", "upload_thumbnails", r.id, {
      error: e
    });
    return;
  }
  let {
    failedThumbnailNodeIds,
    s3Paths,
    styleMetaByNodeId,
    uploadDurationMs,
    encounteredNonS3PresignedPostError
  } = c;
  let eS = orderedUpdates.flatMap(e => e.assets).length;
  if (failedThumbnailNodeIds.length === eS) {
    ea("All thumbnails failed to upload" + (encounteredNonS3PresignedPostError ? " (non-s3 error)" : ""), "upload_thumbnails", r.id, {
      numSkippedDueToError: eS,
      encounteredNonS3PresignedPostError
    });
    return;
  }
  let ev = orderedUpdates.map(({
    publishType: e,
    assetType: t,
    assets: r
  }) => {
    let n = r.filter(e => !failedThumbnailNodeIds.includes(e.node_id));
    return n.length > 0 ? {
      publishType: e,
      assetType: t,
      assets: n
    } : null;
  }).filter(isNotNullish);
  if (getFeatureFlags().first_draft_publish_ux && (t.publishAsFirstDraftKit || t.unpublishAll)) {
    let e = FirstDraftHelpers.getLocalDesignSystemKits();
    if (e.length > 1) logWarning("first_draft", "Attempting to publish a file with multiple kits", {
      kitNames: e.map(e => e.name)
    });else if (1 === e.length) {
      let r = e[0];
      if (!r) {
        logWarning("first_draft", "No kit found for publishing", {
          kits: e
        });
        return;
      }
      S = await Hj(r.pageId, r.name, {
        publishType: tf.LIBRARY_PUBLISH,
        localComponents: MH(A),
        localStateGroups: dM(A),
        localVariableSets: bh(A),
        isDirectGenCompatible: t.isDirectGenCompatible ?? !1
      }, t.firstDraftVariablesForTheme, t.unpublishAll);
    }
  }
  let eA = {
    updates: ev.map(e => ({
      publishType: e.publishType,
      assetType: e.assetType,
      guids: e.assets.map(e => {
        let t = p$(e);
        t || (console.warn("Asset with null nodeId:", e), reportError(_$$e.DESIGN_SYSTEMS_EDITOR, Error("Asset with null node ID found during publish")));
        return t;
      }).filter(isNotNullish)
    })),
    moveRemappings: t.moveInformation?.moveRemappings ?? {},
    s3ThumbnailBufferPaths: s3Paths,
    styleMetaByNodeId,
    clientProtocolVersion: window.mpGlobal.version,
    themeMetaData: t.themePublishData ?? {},
    ...(S ? {
      kitMetaData: S
    } : {})
  };
  try {
    let e = (await librariesAPI.postUploadPublishParams()).data.meta;
    p = e.url;
    y = e.fields;
  } catch (e) {
    ea("Unable to get presigned post url for params", "get_presigned_post", r.id, {
      error: e
    });
    return;
  }
  try {
    let e = new TextEncoder();
    T = await uploadToPresignedPost(_$$e.DESIGN_SYSTEMS_EDITOR, "publishChanges.params", p, y, e.encode(JSON.stringify(eA)), "application/json");
  } catch (t) {
    let e = t instanceof UploadError;
    ea("Unable to upload publishing params" + (e ? " (non-s3 error)" : ""), "upload_params", r.id, {
      error: t,
      encounteredNonS3PresignedPostError: e
    });
    return;
  }
  try {
    I = (await librariesAPI.postLibraryPublish({
      fileKey: X.key,
      checkpointKey: r.checkpoint_key,
      paramsPath: T,
      publishToCommunity: !!t.hubFileId,
      publishScope: t.publishScope
    })).data.meta.library_publish_id;
  } catch (e) {
    ea("Unable to publish", "generic_error", r.id, {
      error: e
    });
    return;
  }
  try {
    !function (e, t, r, n, i, a, s, o) {
      let l = performance.now();
      let d = t ? PublishStatusEnum.UNPUBLISH : PublishStatusEnum.PUBLISH;
      e.dispatch($$Y5({
        state: LibraryPublishStatusEnum.UPLOADING,
        publishType: d,
        progress: 0,
        libraryPublishId: r,
        savepoint: n,
        numSkippedPriorToPublish: i,
        publishStartMs: et(e.getState().library.publishProgress),
        commitUpdatesDurationMs: l,
        clientPreWorkDurationMs: a,
        createSavePointDurationMs: s
      }));
      o({
        publishType: d,
        dispatch: e.dispatch,
        icon: VisualBellIcon.SPINNER
      });
    }(e, ei, I, r, failedThumbnailNodeIds.length, uploadDurationMs, ep, G);
  } catch (e) {
    ea("Unable to notify publish start", "generic_error", r.id, {
      error: e
    });
    return;
  }
});
export const De = $$X0;
export const Sb = $$K1;
export const TS = $$q2;
export const WM = $$$3;
export const ZS = $$eo4;
export const df = $$Y5;
export const dh = $$ei6;
export const iA = $$es7;
export const sb = $$Q8;
