import { ServiceCategories as _$$e } from "../905/165054";
import { FirstDraftHelpers, Thumbnail } from "../figma_app/763686";
import { getFeatureFlags } from "../905/601108";
import { uploadToPresignedPost } from "../905/623179";
import { reportError } from "../905/11";
import { logError } from "../905/714362";
import { LQ, vg, pX, tV, au } from "../figma_app/445976";
import { StagingStatusEnum } from "../figma_app/633080";
import { Gh } from "../figma_app/707567";
import { b } from "../905/76245";
import { tf, Rd, Q6, $5 } from "../905/295427";
function h(e, t) {
  if (!t) return {
    publishAssets: [],
    unpublishAssets: []
  };
  let r = new Set(t.added.concat(t.modified));
  let n = [];
  let i = t.removed;
  e.forEach(e => {
    r.has(e.key) && n.push(e);
  });
  return {
    publishAssets: n,
    unpublishAssets: i
  };
}
function m(e) {
  return e && e !== StagingStatusEnum.DELETED && e !== StagingStatusEnum.NOT_STAGED;
}
export async function $$g0(e, t, r, n, s) {
  let o = FirstDraftHelpers.getKitKey(e);
  if (!o) return;
  let c = r.publishType;
  let p = c === tf.LOCAL_GENERATION;
  let g = await LQ(e);
  if (0 === g.length) return;
  let E = {};
  let y = await vg(e);
  let b = {};
  let T = FirstDraftHelpers.getLocalExamples(e, g);
  let I = {};
  let S = pX();
  let v = {};
  !s && (g.forEach(e => {
    (c !== tf.LIBRARY_PUBLISH || m((r.localComponents[e.componentId] || r.localStateGroups[e.componentId])?.status)) && e.version && (E[e.key] = e.version);
  }), y.forEach(e => {
    (c !== tf.LIBRARY_PUBLISH || m(r.localComponents[e.defaultNodeId]?.status)) && e.version && (b[e.key] = e.version);
  }), T.forEach(e => {
    I[e.key] = e.version;
  }), S && (c === tf.LIBRARY_PUBLISH && m(r.localVariableSets[S.nodeId]?.status), v[S.key] = S.version));
  let A = await Gh.postFirstDraftPublishStatus({
    productComponentKeyToVersion: E,
    groupedComponentKeyToVersion: b,
    exampleKeyToVersion: I,
    variableSetKeyToVersion: v,
    publishType: c,
    kitKey: o
  });
  let {
    publishAssets,
    unpublishAssets
  } = h(g, A.data.meta.product_component_status);
  let {
    publishAssets: _publishAssets,
    unpublishAssets: _unpublishAssets
  } = h(y, A.data.meta.grouped_component_status);
  let {
    publishAssets: _publishAssets2,
    unpublishAssets: _unpublishAssets2
  } = h(T, A.data.meta.example_status);
  let L = await f(_publishAssets2);
  let P = {};
  for (let e of _publishAssets2) {
    let r = getFeatureFlags().first_draft_direct_gen ? await tV(e.nodeId) : await au(t, e.nodeId);
    r && (P[e.key] = r);
  }
  let {
    publishSets,
    unpublishSets
  } = function (e, t) {
    if (!t) return {
      publishSets: [],
      unpublishSets: []
    };
    let r = t.removed;
    return {
      publishSets: e.filter(e => !r.includes(e.key)),
      unpublishSets: r
    };
  }(S ? [S] : [], A.data.meta.variable_set_status);
  if (publishSets.length > 0 && !n && !s) {
    logError("First draft publish", "Skipping kit publish because no theme variables were supplied");
    return;
  }
  let M = !0 === getFeatureFlags().first_draft_direct_gen && r.publishType === tf.LIBRARY_PUBLISH && !1 === p && r.isDirectGenCompatible;
  return {
    kit: {
      name: t,
      key: o,
      is_local: p,
      use_direct_generation: M
    },
    publish_product_components: publishAssets.map(e => ({
      name: e.name,
      jsx_name: e.jsxName,
      key: e.key,
      version: e.version,
      description: e.description,
      type_info: {
        jsx_name: e.jsxName,
        type_str: e.typeStr,
        jsx_component_def: e.jsxComponentDef?.jsxStr,
        prefix_types: e.prefixTypes,
        prefix_comments: e.prefixComments,
        description: e.description,
        type_info_version: getFeatureFlags().first_draft_direct_gen ? Rd : Q6
      }
    })),
    unpublish_product_components: unpublishAssets,
    publish_grouped_components: _publishAssets.map(e => ({
      name: e.name,
      key: e.key,
      version: e.version,
      description: e.description,
      group_name: e.groupName
    })),
    unpublish_grouped_components: _unpublishAssets,
    publish_examples: _publishAssets2.map(e => ({
      key: e.key,
      version: e.version,
      example_info: {
        componentKeys: e.componentKeys,
        componentJsxNames: e.componentJsxNames,
        nodeId: e.nodeId,
        name: e.name,
        jsxInfo: P[e.key] ?? null
      },
      thumbnail_url: L[e.key]
    })),
    unpublish_examples: _unpublishAssets2,
    publish_variable_sets: n ? publishSets.map(e => ({
      key: e.key,
      name: e.name,
      version: e.version,
      theme_info: {
        theme_info_version: $5,
        customizable_variables: n,
        modes: e.modes
      }
    })) : [],
    unpublish_variable_sets: unpublishSets
  };
}
async function f(e) {
  let t = {};
  if (0 === e.length) return t;
  let r = {};
  for (let t of e) {
    let [e, n] = Thumbnail.generateThumbnailForNode(t.nodeId, 768, 768, 1, {});
    r[t.key] = n;
  }
  let a = (await b.getUploadThumbnailsPresignedPostUrls(Object.keys(r).length)).data.meta.presigned_posts;
  a.length < Object.keys(r).length ? reportError(_$$e.AI_GENERATION, Error("Mismatch between number of thumbnails and presigned URLs")) : await Promise.allSettled(Object.entries(r).map(async ([e, r], i) => {
    let {
      url,
      fields
    } = a[i];
    try {
      let i = await uploadToPresignedPost(_$$e.AI_GENERATION, "uploadThumbnails", url, fields, r, "application/octet-stream");
      t[e] = i;
    } catch (e) {
      reportError(_$$e.AI_GENERATION, Error("Unable to upload example thumbnail to S3"));
    }
  }));
  return t;
}
export async function $$E1(e, t, r) {
  if ("LOCAL" !== t.dsKitKey.type) return;
  if (!getFeatureFlags().first_draft_local_kits) throw Error("Need to have first_draft_local_kits flag to publish local kits");
  let n = await $$g0(t.dsKitKey.pageId, t.name, {
    publishType: tf.LOCAL_GENERATION
  }, r);
  if (!n) throw Error("Failed to get first draft publish data for local kit");
  (n.publish_product_components.length > 0 || n.publish_grouped_components.length > 0 || n.unpublish_product_components.length > 0 || n.unpublish_grouped_components.length > 0 || n.publish_variable_sets.length > 0 || n.unpublish_variable_sets.length > 0 || n.publish_examples.length > 0 || n.unpublish_examples.length > 0) && (await Gh.postFirstDraftPublishLocalKit({
    fileKey: e,
    publishMetadata: n
  }));
}
export const Hj = $$g0;
export const p4 = $$E1;