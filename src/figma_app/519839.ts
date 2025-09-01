import { xb } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { ServiceCategories as _$$e } from "../905/165054";
import { XJn, NUh, glU } from "../figma_app/763686";
import { s4 } from "../figma_app/276332";
import { getFeatureFlags } from "../905/601108";
import { yQ } from "../905/236856";
import c from "../vendor/223926";
import { NC } from "../905/17179";
import { sx } from "../905/449184";
import { S3, Rh } from "../905/485103";
import { jk } from "../905/609396";
import { ET, qW } from "../905/623179";
import { $D } from "../905/11";
import { x1, xi } from "../905/714362";
import { YQ } from "../905/502364";
import { t as _$$t } from "../905/303541";
import { _ as _$$_ } from "../905/170564";
import { Q } from "../905/463586";
import { F as _$$F } from "../905/302958";
import { zX } from "../905/576487";
import { nF } from "../905/350402";
import { I0 } from "../905/879323";
import { Ce } from "../905/156213";
import { b as _$$b } from "../905/985254";
import { d1 } from "../905/766303";
import { z as _$$z } from "../905/853613";
import { Hj } from "../figma_app/412398";
import { tf } from "../905/295427";
import { HF, E2 } from "../figma_app/646357";
import { aB, jx } from "../905/576221";
import { m as _$$m } from "../905/294113";
import { MH, dM, cM, bh, x6, tK, Io } from "../figma_app/803787";
import { H7 } from "../figma_app/598018";
import { O as _$$O } from "../905/566074";
import { E8, PW, Qx, M$, v$, Nv } from "../figma_app/633080";
import { Z as _$$Z } from "../905/939602";
import { Gh } from "../figma_app/707567";
import { b as _$$b2 } from "../905/76245";
import { I6, fn, p$ } from "../905/831303";
import { jO, cc, UN, tZ } from "../905/573265";
import { Nf } from "../figma_app/864378";
var u = c;
let $$K1 = NC("START_PUBLISH");
let $$Y5 = NC("PUBLISH_PROGRESS");
let $$$3 = NC("PUBLISH_REQUEST_FINISHED");
let $$X0 = NC("SAVE_PUBLISH_DESCRIPTION");
let $$q2 = nF(e => {
  e.dispatch(Q.dequeue({
    type: _$$_.MOVE_COMPONENTS_PROMPT
  }));
  YQ({
    id: "Finished publishing components"
  });
  e.dispatch($$$3());
});
let J = "library publish SSP";
var Z = (e => (e.PublishStart = "publish_start", e.CreateSavepoint = "create_savepoint", e.GetPresignedPost = "get_presigned_post", e.UploadThumbnails = "upload_thumbnails", e.UploadParams = "upload_params", e.AssetValidation = "asset_validation", e.NonS3Error = "non_s3_error", e.GenericError = "generic_error", e))(Z || {});
export let $$Q8 = nF((e, {
  hubFileId: t,
  localAssetsWithDenormalizedPublishInfo: r
}) => {
  let n = e.getState();
  let i = getFeatureFlags().ds_remove_redux_library_status;
  if (!i) {
    let t = e => {
      for (let t in e = {
        ...e
      }) HF(e[t].status) ? e[t].status = E8.DELETED : e[t].status === E8.NEW && (e[t].status = E8.NOT_STAGED);
      return e;
    };
    let r = t(n.library.local.components);
    let i = t(n.library.local.stateGroups);
    let a = t(n.library.local.styles);
    e.dispatch(I0({
      local: r,
      type: PW.COMPONENT
    }));
    e.dispatch(I0({
      local: i,
      type: PW.STATE_GROUP
    }));
    e.dispatch(I0({
      local: a,
      type: PW.STYLE
    }));
  }
  e.dispatch($$Y5({
    state: Qx.NONE
  }));
  e.dispatch($$eo4({
    unpublishAll: i,
    hubFileId: t,
    localAssetsWithDenormalizedPublishInfo: r
  }));
});
async function ee(e, t, r, n) {
  let i = new jk("publish.client.generate_and_upload_thumbnails", {});
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
        state: Qx.ASSEMBLING_COMPONENTS,
        progress: t,
        publishType: r,
        publishStartMs: et(e.getState().library.publishProgress)
      }));
    }(n, (o += 1) / s, t ? M$.UNPUBLISH : M$.PUBLISH);
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
      e.type === PW.STYLE && (d[e.node_id] = JSON.stringify(fn(e, r)));
    } catch (t) {
      x1("publish", "Failed to upload thumbnail for asset", {
        guid: e.node_id
      }, {
        reportAsSentryError: !0
      });
      c.push(e.type === PW.COMPONENT && e.containing_frame?.containingStateGroup?.nodeId || e.node_id);
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
  for (; u.length;) p.push(u.splice(0, v$));
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
      $D(_$$e.DESIGN_SYSTEMS_EDITOR, Error("Popped a concatenated buffer that does not exist"));
      return;
    }
    try {
      T.push(await ET(_$$e.DESIGN_SYSTEMS_EDITOR, "uploadThumbnails", e, t, r.buffer, "application/octet-stream"));
      S3("publish.thumbnails_buffer.bytes", r.buffer.byteLength);
    } catch (e) {
      e instanceof qW && (S = !0);
      c.push(...r.guids);
    }
  }));
  S && $D(_$$e.DESIGN_SYSTEMS_EDITOR, Error("uploadThumbnails: encountered non-S3 presigned POST error"));
  let v = i.stop();
  v && sx("Library generate and upload thumbnails", {
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
  return e.state === Qx.NONE ? (x1(J, "Attempted to update progress while not assembling components", e), null) : e.publishStartMs;
}
function er(e, t, r, n) {
  let i = et(e);
  if (i) {
    let e = performance.now() - i;
    sx(t, {
      duration: e
    });
    S3(r, e, {
      error: n
    });
  } else x1(J, "Publish start time was null");
}
function en(e, t, r, n, i, a, s, o) {
  0 === t ? function (e, t, r, n) {
    if (t.state === Qx.UPLOADING) {
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
        sx(`Client perceived ${t.publishType} duration`, a);
        let s = getFeatureFlags().ssp_stop_client_gen_thumb_generation ? "true" : "false";
        for (let [e, r] of Object.entries(a)) {
          let n = `${t.publishType}.success.${e}`;
          S3(n, r, {
            skip_client_thumbnail: s
          });
        }
      } else x1(J, "Publish start time was null");
    }
    n({
      publishProgress: t,
      publishType: r ? M$.UNPUBLISH : M$.PUBLISH,
      dispatch: e
    });
    e($$X0(""));
  }(n, e, r, i) : function (e, t, r, n, i, a, s) {
    let o = n ? M$.UNPUBLISH : M$.PUBLISH;
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
  sx("Publish ended", {
    savepointId: i.id,
    hadException: a
  });
  en(e, t, r, n, s, o, i.description);
  n($$q2());
}
let ea = async e => {
  let t;
  if (getFeatureFlags().first_draft_publish_ux && (e.publishAsFirstDraftKit || e.unpublishAll)) {
    let r = XJn.getLocalDesignSystemKits();
    if (r.length > 1) xi("first_draft", "Attempting to publish a file with multiple kits", {
      kitNames: r.map(e => e.name)
    });else if (1 === r.length) {
      let n = r[0];
      if (!n) {
        xi("first_draft", "No kit found for publishing", {
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
let $$es7 = nF(async (e, t = {}) => {
  let r = e.getState();
  let n = d1(r);
  let i = n?.key;
  if (!i) {
    xi("first_draft", "No file key found for publishing");
    return;
  }
  let a = _$$F.enqueue({
    type: "first-draft-publish",
    message: "Publishing changes...",
    icon: zX.SPINNER
  });
  let s = _$$F.enqueue({
    type: "first-draft-publish",
    message: "Changes published",
    icon: zX.CHECK
  });
  let o = _$$F.enqueue({
    type: "first-draft-publish",
    message: "Failed to publish changes",
    icon: zX.EXCLAMATION,
    error: !0
  });
  e.dispatch(Ce());
  e.dispatch(a);
  let l = await ea(t);
  if (!l) {
    xi("first_draft", "No kit metadata found for publishing");
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
    xi("first_draft", "Failed to publish changes", {
      error: t
    });
    e.dispatch(o);
  }
});
let $$eo4 = nF(async (e, t = {}) => {
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
  t.publishingMode && t.publishingMode !== A.library.libraryPublishingMode && x1(J, "Publishing Mode does not match Redux state, and this will cause downstream errors.", {
    desiredPublishingMode: t.publishingMode,
    reduxLibraryPublishingMode: A.library.libraryPublishingMode
  });
  let $ = t.localAssetsWithDenormalizedPublishInfo ?? {};
  if (A.library.publishProgress.state !== Qx.NONE) {
    e.dispatch($$q2());
    return;
  }
  let X = d1(A);
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
  let Q = [PW.CODE_COMPONENT, PW.RESPONSIVE_SET].every(e => !_$$O(e) || aB(Object.values($).filter(t => t.type === e), Z));
  let ei = t.unpublishAll || aB(Object.values(MH(A)), Z) && aB(Object.values(dM(A)), Z) && aB(Object.values(cM(A)), Z) && aB(Object.values(bh(A)), Z) && (!_$$O(PW.MODULE) || aB(Object.values(x6(A)), Z)) && Q;
  Rh(`${ei ? M$.UNPUBLISH : M$.PUBLISH}.start`);
  e.dispatch($$K1({
    unpublishAll: !!ei
  }));
  e.dispatch(_$$b({
    has_published_library_items: !0
  }));
  let ea = (r, n, i, a) => {
    e.dispatch(Nf());
    let o = a?.encounteredNonS3PresignedPostError ? "non_s3_error" : n;
    er(e.getState().library.publishProgress, r, `${ei ? M$.UNPUBLISH : M$.PUBLISH}.error.duration`, o);
    let l = a?.error;
    x1(J, r, {
      ...t,
      name: l?.name,
      message: l?.message,
      stack: l?.stack
    }, {
      logToConsole: NUh.ALWAYS,
      reportAsSentryError: !0,
      forwardToDatadog: !0
    });
    null !== i && sx("Publish ended", {
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
    hideModalOnPublishRequestFinish && e.dispatch(Ce());
  };
  let es = jx(dM(A), MH(A), cM(A), tK(A), bh(A), x6(A), $, X, A.teams, {
    overridePublishPermissions: !!t.hubFileId,
    moveRemappings: t.moveInformation?.moveRemappings ?? {},
    itemsToPublish: Z,
    forcePublish: t.forcePublish,
    unpublishAll: t.unpublishAll
  });
  !function (e) {
    let t = new jk("publish.client.prep_nodes_for_thumbnailing", {});
    t.start();
    let r = e[PW.STYLE][M$.PUBLISH].filter(e => e.style_type === s4.TEXT);
    r.forEach(e => {
      glU.prepNodeForAssetThumbnailRendering(e.node_id);
    });
    let n = t.stop();
    n && sx("Prepared node fields used for thumbnail rendering", {
      elapsedMs: n,
      textStylesCount: r.length
    }, {
      forwardToDatadog: !0
    });
  }(es);
  let eo = getFeatureFlags().ds_ssp_thumbnailing_client_prep_wait_extra_frames ? 10 : 2;
  for (let e = 0; e < eo; e++) await yQ();
  let el = performance.now();
  let ed = "slides" === X.editor_type;
  let ec = ed ? _$$t("design_systems.publish_actions.savepoint_for_unpublish_slides") : _$$t("design_systems.publish_actions.savepoint_for_unpublish");
  let eu = ed ? _$$t("design_systems.publish_actions.savepoint_for_publish_slides") : _$$t("design_systems.publish_actions.savepoint_for_publish");
  try {
    r = await _$$m(X.key, ei ? ec : eu, t.savepointDescription, e.dispatch, !0);
  } catch (t) {
    navigator.onLine ? ea("Unable to create savepoint during library publish", "create_savepoint", null, {
      error: t
    }) : (V({
      error: jO.Offline,
      publishType: ei ? M$.UNPUBLISH : M$.PUBLISH,
      dispatch: e.dispatch
    }), e.dispatch($$q2()));
    return;
  }
  if (!r) {
    ea("Created savepoint is null", "create_savepoint", null);
    return;
  }
  let ep = performance.now() - el;
  sx("Publish start: savepoint successfully created", {
    savepointId: r.id
  });
  let e_ = u()(Object.values(A.library.local.components).filter(e => e.isLocal), e => E2(e) || Nv);
  let eh = H7(A);
  let {
    orderedUpdates
  } = function (e) {
    let t = [];
    let r = e => {
      e.assets.length && t.push(e);
    };
    let n = e[PW.VARIABLE_SET][M$.PUBLISH];
    r({
      publishType: M$.PUBLISH,
      assetType: PW.VARIABLE_SET,
      assets: n
    });
    r({
      publishType: M$.UNPUBLISH,
      assetType: PW.VARIABLE_SET,
      assets: e[PW.VARIABLE_SET][M$.UNPUBLISH]
    });
    r({
      publishType: M$.UNPUBLISH,
      assetType: PW.VARIABLE,
      assets: e[PW.VARIABLE][M$.UNPUBLISH]
    });
    let i = e[PW.STATE_GROUP][M$.PUBLISH];
    let a = e[PW.COMPONENT][M$.UNPUBLISH].filter(e => null === E2(e));
    r({
      publishType: M$.PUBLISH,
      assetType: PW.STATE_GROUP,
      assets: i
    });
    r({
      publishType: M$.UNPUBLISH,
      assetType: PW.STATE_GROUP,
      assets: e[PW.STATE_GROUP][M$.UNPUBLISH]
    });
    r({
      publishType: M$.PUBLISH,
      assetType: PW.COMPONENT,
      assets: e[PW.COMPONENT][M$.PUBLISH].filter(e => !E2(e))
    });
    r({
      publishType: M$.UNPUBLISH,
      assetType: PW.COMPONENT,
      assets: a
    });
    r({
      publishType: M$.PUBLISH,
      assetType: PW.STYLE,
      assets: e[PW.STYLE][M$.PUBLISH]
    });
    r({
      publishType: M$.UNPUBLISH,
      assetType: PW.STYLE,
      assets: e[PW.STYLE][M$.UNPUBLISH]
    });
    _$$O(PW.MODULE) && (r({
      publishType: M$.PUBLISH,
      assetType: PW.MODULE,
      assets: e[PW.MODULE][M$.PUBLISH]
    }), r({
      publishType: M$.UNPUBLISH,
      assetType: PW.MODULE,
      assets: e[PW.MODULE][M$.UNPUBLISH]
    }));
    _$$O(PW.RESPONSIVE_SET) && (r({
      publishType: M$.PUBLISH,
      assetType: PW.RESPONSIVE_SET,
      assets: e[PW.RESPONSIVE_SET][M$.PUBLISH]
    }), r({
      publishType: M$.UNPUBLISH,
      assetType: PW.RESPONSIVE_SET,
      assets: e[PW.RESPONSIVE_SET][M$.UNPUBLISH]
    }));
    _$$O(PW.CODE_COMPONENT) && (r({
      publishType: M$.PUBLISH,
      assetType: PW.CODE_COMPONENT,
      assets: e[PW.CODE_COMPONENT][M$.PUBLISH]
    }), r({
      publishType: M$.UNPUBLISH,
      assetType: PW.CODE_COMPONENT,
      assets: e[PW.CODE_COMPONENT][M$.UNPUBLISH]
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
      case PW.COMPONENT:
        a = "numComponentBuffers";
        break;
      case PW.STATE_GROUP:
        a = "numStateGroupBuffers";
        break;
      case PW.STYLE:
        a = "numStyleBuffers";
        break;
      case PW.VARIABLE_SET:
        a = "numVariableSetBuffers";
        break;
      case PW.MODULE:
        a = "numTemplateBuffers";
        break;
      case PW.VARIABLE:
      case PW.VARIABLE_OVERRIDE:
        break;
      case PW.RESPONSIVE_SET:
        a = "numResponsiveSetBuffers";
        break;
      case PW.CODE_LIBRARY:
        a = "numCodeLibraryBuffers";
        break;
      case PW.CODE_FILE:
        a = "numCodeFileBuffers";
        break;
      case PW.CODE_COMPONENT:
        a = "numCodeComponentBuffers";
        break;
      case PW.CONSTRAINED_TEMPLATE:
      case PW.MANAGED_STRING:
        break;
      default:
        xb(r);
    }
    t === M$.UNPUBLISH && (a = `${a}Unpublished`);
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
  sx("Library publish upload", {
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
  let ef = orderedUpdates.flatMap(e => e.publishType === M$.PUBLISH ? e.assets : []).reduce((e, t) => t.type !== PW.VARIABLE && t.type !== PW.VARIABLE_SET && _$$O(t.type) ? t.type === PW.MODULE ? e.concat(t) : e.concat(t).concat(e_[t.node_id] || []) : e, []);
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
    let e = XJn.getLocalDesignSystemKits();
    if (e.length > 1) xi("first_draft", "Attempting to publish a file with multiple kits", {
      kitNames: e.map(e => e.name)
    });else if (1 === e.length) {
      let r = e[0];
      if (!r) {
        xi("first_draft", "No kit found for publishing", {
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
        t || (console.warn("Asset with null nodeId:", e), $D(_$$e.DESIGN_SYSTEMS_EDITOR, Error("Asset with null node ID found during publish")));
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
    let e = (await _$$Z.postUploadPublishParams()).data.meta;
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
    T = await ET(_$$e.DESIGN_SYSTEMS_EDITOR, "publishChanges.params", p, y, e.encode(JSON.stringify(eA)), "application/json");
  } catch (t) {
    let e = t instanceof qW;
    ea("Unable to upload publishing params" + (e ? " (non-s3 error)" : ""), "upload_params", r.id, {
      error: t,
      encounteredNonS3PresignedPostError: e
    });
    return;
  }
  try {
    I = (await _$$Z.postLibraryPublish({
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
      let d = t ? M$.UNPUBLISH : M$.PUBLISH;
      e.dispatch($$Y5({
        state: Qx.UPLOADING,
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
        icon: zX.SPINNER
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