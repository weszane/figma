import { throwTypeError } from "../figma_app/465776";
import { isNotNullish } from "../figma_app/95419";
import { _7 } from "../figma_app/562352";
import { ServiceCategories as _$$e } from "../905/165054";
import { VariableStyleId } from "../905/859698";
import { VariableDataType, ImageExportType } from "../figma_app/763686";
import { hasStyleType } from "../905/311324";
import { convertStringToKiwi, convertKiwiToString } from "../905/537777";
import { getFeatureFlags } from "../905/601108";
import { runWithTimeout } from "../905/236856";
import { NC } from "../905/17179";
import { trackEventAnalytics } from "../905/449184";
import { reportError } from "../905/11";
import { logError } from "../905/714362";
import { createOptimistThunk } from "../905/350402";
import { I0 } from "../905/879323";
import { teamLibraryCache, generateSerializableStyleThumbnail, hasValidFillColor, LOADING_THUMBNAIL, FAILED_THUMBNAIL, generateThumbnailFromStyleMaster, revokeThumbnailUrl } from "../figma_app/80990";
import { Jr } from "../figma_app/624361";
import { isStyleType, isEffectOrGrid } from "../905/405710";
import { PrimaryWorkflowEnum, SubscriptionStatusEnum, getStyleInfo } from "../figma_app/633080";
export function $$E5(e, t) {
  return `/variable_set/${e}/thumbnails?ver=${t}`;
}
export function $$x6(e, t, i, n, r) {
  let a = t[e];
  if (!a || !a.variableThumbnails) return null;
  let s = a.variableThumbnails[i] ?? null;
  for (; s?.type === VariableDataType.ALIAS;) {
    let e = r[s.variableCollectionKey];
    if (e && s.values && s.values[e]) {
      s = s.values[e];
      continue;
    }
    e && "MIXED" !== e && trackEventAnalytics("Fallback to default variable thumbnail", {
      variableId: i,
      variableType: n,
      mode: e
    });
    let t = s.defaultMode;
    if (!t || !s.values || !s.values[t]) return null;
    s = s.values[t];
  }
  return s;
}
export let $$S0 = createOptimistThunk((e, t) => {
  let {
    variableSet,
    variableId,
    variableType,
    modeContext,
    callback
  } = t;
  let o = convertStringToKiwi(variableSet.node_id);
  if (!o) {
    console.error(`Invalid variableId in loading thumbnails: ${variableSet.id}`);
    return;
  }
  $$w2(variableSet).then(e => {
    let t = $$x6(convertKiwiToString(o), e.thumbnails, variableId, variableType, modeContext);
    callback?.(t);
  }).catch(e => {
    console.error(`Variable thumbnail did not load: ${variableId}`);
    console.error(e);
  });
});
export async function $$w2(e) {
  return {
    thumbnails: await teamLibraryCache.getVariableSetThumbnails($$E5(e.key, e.checkpoint_id))
  };
}
function C(e, t) {
  let i = e.style_type;
  let n = e.meta ? e.meta.style_thumbnail : null;
  if (isStyleType(i) && (!t || t.content_hash !== e.content_hash || !n)) try {
    n = generateSerializableStyleThumbnail(e.style_type, e.node_id);
  } catch (t) {
    logError("thumbnails", "error generating local style css thumbnail", {
      name: e.name,
      type: e.style_type,
      libraryKey: e.library_key,
      key: e.key
    });
    reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t);
  }
  if (n && (isEffectOrGrid(e.style_type) || hasValidFillColor(n))) return {
    contentHash: e.content_hash,
    nodeId: e.node_id,
    styleThumbnail: n,
    type: PrimaryWorkflowEnum.STYLE,
    url: void 0
  };
  if (!t || t.content_hash !== e.content_hash || !t.url || t.url === LOADING_THUMBNAIL || t.url === FAILED_THUMBNAIL) {
    let t = O.acquire(e.node_id, e.content_hash);
    return t ? ("FILL" !== e.style_type ? Promise.resolve() : runWithTimeout(Jr().loadAllImagesUnder([e.node_id], ImageExportType.NON_ANIMATED_ONLY, "style-thumbnail"), () => {
      logError("thumbnails", "image manager failed to load", {
        name: e.name,
        key: e.key,
        libraryKey: e.library_key
      });
    }, 1e4)).then(() => scheduler.postTask(() => generateThumbnailFromStyleMaster(e.node_id, e.style_type), t).catch(t => ("AbortError" !== t.name && (logError("thumbnails", "error generating local style url thumbnail", {
      name: e.name,
      type: e.style_type,
      libraryKey: e.library_key,
      key: e.key
    }), reportError(_$$e.DESIGN_SYSTEMS_EDITOR, t)), FAILED_THUMBNAIL)).then(t => ({
      contentHash: e.content_hash,
      nodeId: e.node_id,
      styleThumbnail: n,
      type: PrimaryWorkflowEnum.STYLE,
      url: t
    }))) : null;
  }
  return null;
}
let $$T7 = NC("LIBRARY_ADD_THUMBNAIL_FOR_DANGLING_STYLE");
let $$k8 = NC("LIBRARY_THUMBNAIL_REPLACE_LOCAL_THUMBNAILS");
let $$R3 = createOptimistThunk((e, t) => {
  let i = e.getState();
  let r = i.library.local.thumbnails;
  let a = i.library.local.components;
  let s = i.library.local.stateGroups;
  let o = i.library.local.styles;
  let l = i.library.local.modules;
  let d = null;
  let c = null;
  for (let {
    nodeId,
    url,
    contentHash,
    styleThumbnail,
    type
  } of t.thumbnails) {
    let h;
    if (type === PrimaryWorkflowEnum.COMPONENT) h = a;else if (type === PrimaryWorkflowEnum.STATE_GROUP) h = s;else if (type === PrimaryWorkflowEnum.STYLE) h = o;else {
      if (type === PrimaryWorkflowEnum.VARIABLE || type === PrimaryWorkflowEnum.VARIABLE_SET || type === PrimaryWorkflowEnum.VARIABLE_OVERRIDE || type === PrimaryWorkflowEnum.RESPONSIVE_SET || type === PrimaryWorkflowEnum.CONSTRAINED_TEMPLATE || type === PrimaryWorkflowEnum.CODE_LIBRARY || type === PrimaryWorkflowEnum.CODE_FILE || type === PrimaryWorkflowEnum.MANAGED_STRING || type === PrimaryWorkflowEnum.CODE_COMPONENT) continue;
      type === PrimaryWorkflowEnum.MODULE ? h = l : throwTypeError(type);
    }
    if (t.styleKind === SubscriptionStatusEnum.LOCAL && !(nodeId in h)) continue;
    let g = r[nodeId] && r[nodeId].url;
    g && url && revokeThumbnailUrl(g);
    let f = t.styleKind === SubscriptionStatusEnum.LOCAL ? h[nodeId] : t.item;
    let _ = (() => {
      if (null != contentHash) return contentHash;
      if (f) switch (f.type) {
        case PrimaryWorkflowEnum.COMPONENT:
        case PrimaryWorkflowEnum.STYLE:
          return f.content_hash;
        case PrimaryWorkflowEnum.STATE_GROUP:
        case PrimaryWorkflowEnum.VARIABLE:
        case PrimaryWorkflowEnum.VARIABLE_SET:
        case PrimaryWorkflowEnum.MODULE:
        case PrimaryWorkflowEnum.RESPONSIVE_SET:
        case PrimaryWorkflowEnum.CODE_COMPONENT:
          return f.version;
        default:
          throwTypeError(f, "Unhandled item type");
      }
    })();
    let A = (d || r)[nodeId];
    if (A && A.url === url && A.content_hash === _ || (d || (d = {
      ...r
    }), d[nodeId] = {
      kind: t.styleKind,
      url,
      css: styleThumbnail,
      content_hash: _
    }), type === PrimaryWorkflowEnum.STYLE && t.styleKind === SubscriptionStatusEnum.LOCAL) {
      let t = (c || o)[nodeId];
      t && (!t.meta || t.meta.style_thumbnail !== styleThumbnail) && (c || (c = {
        ...o
      }), c[nodeId] = {
        ...t,
        meta: {
          ...t.meta,
          style_thumbnail: styleThumbnail
        }
      });
    }
  }
  d && e.dispatch($$k8({
    thumbnails: d
  }));
  c && t.styleKind === SubscriptionStatusEnum.LOCAL && e.dispatch(I0({
    local: c,
    type: PrimaryWorkflowEnum.STYLE
  }));
});
let $$N4 = createOptimistThunk(async (e, t) => {
  if (t.styleKind === SubscriptionStatusEnum.LOCAL) {
    let i = e.getState().library.local.styles[t.styleNodeId];
    let n = e.getState().library.local.thumbnails[t.styleNodeId];
    if (i) {
      let t = C(i, n);
      let r = await t;
      t instanceof Promise && r && O.release(r.nodeId, r.contentHash);
      r && e.dispatch($$R3({
        thumbnails: [r],
        styleKind: SubscriptionStatusEnum.LOCAL
      }));
    }
  } else if (t.styleKind === SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY) {
    let i = e.getState().library.local.thumbnails[t.styleNodeId];
    if (i) return;
    if (getFeatureFlags().ds_zombie_styles_fixes) {
      let n = e.getState().mirror.sceneGraph.get(t.styleNodeId);
      let r = n && hasStyleType(n) ? getStyleInfo(n) : null;
      if (r) {
        let t = C(r, i);
        let n = await t;
        t instanceof Promise && n && O.release(n.nodeId, n.contentHash);
        n && e.dispatch($$R3({
          thumbnails: [n],
          styleKind: SubscriptionStatusEnum.SUBSCRIBED_WITHOUT_LIBRARY,
          item: r
        }));
      }
    } else {
      let i = generateThumbnailFromStyleMaster(t.styleNodeId, "FILL");
      e.dispatch($$T7({
        styleID: t.styleNodeId,
        url: i
      }));
    }
  }
});
let $$P1 = createOptimistThunk(async (e, t) => {
  let i = e.getState().library.local.styles;
  let n = e.getState().library.local.thumbnails;
  let s = t.styleType;
  let o = [];
  let l = [];
  for (let e in i) {
    let t = i[e];
    if (t.style_type !== s) continue;
    let r = C(t, n[e]);
    r instanceof Promise ? l.push(r) : null != r && o.push(r);
  }
  if (o.length > 0 && e.dispatch($$R3({
    thumbnails: o,
    styleKind: SubscriptionStatusEnum.LOCAL
  })), l.length > 0) for (let t = 0; t < l.length; t += 50) {
    let i = (await _7(l.slice(t, t + 50))).map(e => e.resolve).filter(isNotNullish);
    for (let e of i) O.release(e.nodeId, e.contentHash);
    e.dispatch($$R3({
      thumbnails: i,
      styleKind: SubscriptionStatusEnum.LOCAL
    }));
  }
});
let O = (() => {
  let e = new Map();
  return {
    acquire(t, i = VariableStyleId.INVALID) {
      let n = e.get(t);
      if (n?.contentHash === i) return null;
      n && n.controller.abort();
      let r = new TaskController({
        priority: "user-visible"
      });
      e.set(t, {
        controller: r,
        contentHash: i
      });
      return r.signal;
    },
    release(t, i = VariableStyleId.INVALID) {
      let n = e.get(t);
      n?.contentHash === i && e.$$delete(t);
    }
  };
})();
export const Fw = $$S0;
export const GT = $$P1;
export const RI = $$w2;
export const T1 = $$R3;
export const rb = $$N4;
export const sA = $$E5;
export const t9 = $$x6;
export const us = $$T7;
export const xp = $$k8;